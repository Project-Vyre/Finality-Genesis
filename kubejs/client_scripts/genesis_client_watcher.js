/**
 * @file Client side modpack update checker.
 * @version 0.1.2
 * @author KostromDan <https://github.com/KostromDan> Original script author
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// priority: 10
// requires: netjs
// ignored: false

let modpack_name = null
let url_id = null
let version = null

function parseClientData(data) {
  url_id = data['url_id']
  modpack_name = data['modpack_name']
  version = data['version']
}

NetworkEvents.dataReceived('update_notifier_check', event => {
  parseClientData(event.data)
  check_updates()
})

NetworkEvents.dataReceived('update_notifier_update_client_data', event => {
  parseClientData(event.data)
})

function check_updates() {
  let current = JsonIO.read('kubejs/update_notifier.json') ?? {}

  if (!("enabled" in current)) { current["enabled"] = true }

  if (!("skipped_versions" in current)) { current["skipped_versions"] = [] }

  if (!("is_notified_at_this_launch" in current)) { current["is_notified_at_this_launch"] = false }

  JsonIO.write('kubejs/update_notifier.json', current)

  if (current["is_notified_at_this_launch"]) { return }

  NetJS.getPasteBin(url_id, result => {
    if (result.success) {
      let json_result = result.parseRawToJson()
      let latest_version = json_result['version']
      current = JsonIO.read('kubejs/update_notifier.json')
      if (version < latest_version) {
        console.log(`${modpack_name}: An update for the modpack is available! ${latest_version} is out. Currently running ${version}`)
        if (current["enabled"] && !current['skipped_versions'].contains(latest_version)) {
          Client.player.tell(Component.join([
            Component.black('-----------------------------------------------------\n'),
            Component.lightPurple('Update Notifier: '),
            Component.white(`An update for `),
            Component.gold(`${modpack_name}`)
              .click({
                "action": "open_url",
                "value": json_result["curseforge_link"]
              })
              .hover(Component.join([
                Component.gold(`${modpack_name}`),
                Component.white(` on CurseForge`)
              ])),
            Component.white(" is available!\n"),
            Component.white("\nYou are playing on "),
            Component.red(version),
            Component.white(", the latest is "),
            Component.green(latest_version),
            Component.white('\n\nUpdate using the CurseForge app or the '),
            Component.gold("[website]")
              .click({
                "action": "open_url",
                "value": `${json_result["curseforge_link"]}/files`
              })
              .hover(Component.join([
                Component.gold(`${modpack_name} `),
                Component.white(`downloads page on CurseForge.`)
              ])),
            Component.white("."),
            Component.white('\nYou can also '),
            Component.lightPurple("[skip]")
              .click({
                "action": "run_command",
                "value": `/update_notifier skip ${latest_version}`
              })
              .hover(Component.join([
                Component.white(`Skip only this update.\nYou will no longer be notified for the `),
                Component.green(`${latest_version}`),
                Component.white(` update, but you will be notified again when the next update is available.`)
              ])),
            Component.white(" this update temporarily.\n"),
            Component.black('-----------------------------------------------------')
          ]))
        }
        current["is_notified_at_this_launch"] = true
        JsonIO.write('kubejs/update_notifier.json', current)
      } else {
        console.log(`${modpack_name}-logging: No updates found. Modpack version is synchronized!`)
      }
    } else {
      console.log(`${modpack_name}-logging: Exeption caught while checking modpack updates:\n${result.exception}`)
    }
  })
}

NetworkEvents.dataReceived('update_notifier_skip', event => {
  let current = JsonIO.read('kubejs/update_notifier.json')
  if (current == null) {
    return
  }
  let version = event.data["version"]
  if (!current["skipped_versions"].contains(version)) {
    current["skipped_versions"].push(version)
    Client.player.tell(
      Component.join([
        Component.white(`\nVersion `),
        Component.green(version),
        Component.white(" will be skipped and you will be notified only when the next version is available."),
        Component.white("\nYou can cancel skipping the update here: "),
        Component.red("[cancel]\n")
          .click({
            "action": "run_command",
            "value": `/update_notifier clean_skip_list`
          })
          .hover(
            Component.join([
              Component.white(`Clicked by mistake?\nYou can cancel this action!`),
            ])
          ),
      ])
    )
  } else {
    Client.player.tell(
      Component.join([
        Component.white(`\nVersion `),
        Component.green(version),
        Component.white(" is already skipped!\n"),
      ])
    )
  }
  JsonIO.write('kubejs/update_notifier.json', current)
})

function switcher(b) {
  let current = JsonIO.read('kubejs/update_notifier.json')
  if (current == null) {
    return
  }
  current["enabled"] = b
  JsonIO.write('kubejs/update_notifier.json', current)
}

NetworkEvents.dataReceived('update_notifier_enable', event => {
  switcher(true)
  Client.player.tell(
    Component.join([
      Component.lightPurple('Update Notifier:'),
      Component.white('I am'),
      Component.green(' enabled'),
      Component.white('!'),
    ])
  )
})

NetworkEvents.dataReceived('update_notifier_clean_skip_list', event => {
  let current = JsonIO.read('kubejs/update_notifier.json')
  if (current == null) {
    return
  }
  current["skipped_versions"] = []
  JsonIO.write('kubejs/update_notifier.json', current)

  Client.player.tell(
    Component.join([
      Component.lightPurple('Update Notifier:'),
      Component.white('Skipped versions list '),
      Component.green('cleared'),
      Component.white(' successfully!'),
    ])
  )
})