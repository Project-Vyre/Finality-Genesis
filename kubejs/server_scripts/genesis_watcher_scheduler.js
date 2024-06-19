/**
 * @file Server side modpack update checker.
 * @version 0.1.2
 * @author KostromDan <https://github.com/KostromDan> Original script author
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: netjs
// ignored: false

let TIME_INTERVAL = 20 * 60

let modpack_name = 'Finality Genesis'
let url_id = 'ichBTqwH'
let version = '0.1.0-build.13'
let client_data = {
  url_id: url_id,
  modpack_name: modpack_name,
  version: version
}

function checkUpdates() {
  let server = Utils.server
  let players = server.players
  players.forEach(player => { checkUpdatesForPlayer(player) })
}

function checkUpdatesForPlayer(player) {
  player.sendData('update_notifier_check', client_data)
}

PlayerEvents.loggedIn(event => {
  let player = event.player
  player.sendData('update_notifier_update_client_data', client_data)
  Utils.server.scheduleInTicks(120, e => {
    checkUpdatesForPlayer(player)
  })
})

ServerEvents.loaded(event => {
  Utils.server.scheduleInTicks(TIME_INTERVAL, e => {
    checkUpdates()
    e.reschedule()
  })

  if (!Utils.server.isDedicated()) { return }

  Utils.server.scheduleInTicks(120, e => {
    NetJS.getPasteBin(url_id, result => {
      if (result.success) {
        let json_result = result.parseRawToJson()
        let latest_version = json_result['version']
        if (version < latest_version) {
          console.log(`${modpack_name}: An update for the modpack is available! ${latest_version} is out. Currently running ${version}`)
          return
        }
        console.log("No updates found. Modpack version is synchronized!")
      } else {
        console.log(result.exception)
      }
    })
  })
})

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    Commands.literal('update_notifier')
      .then(Commands.literal('skip').then(Commands.argument('version', Arguments.STRING.create(event)).executes(ctx => {
        let player = ctx.source.player
        player.sendData('update_notifier_skip', { version: Arguments.STRING.getResult(ctx, "version") })
        return 1
      })))
      /*.then(Commands.literal('check').executes(ctx => {
        let player = ctx.source.player
        player.sendData('update_notifier_check')
        return 1
      }))*/
      .then(Commands.literal("enable").executes(ctx => {
        let player = ctx.source.player
        player.sendData('update_notifier_enable', {})
        return 1
      }))
      .then(Commands.literal("clean_skip_list").executes(ctx => {
        let player = ctx.source.player
        player.sendData('update_notifier_clean_skip_list', {})
        return 1
      }))
  )
})