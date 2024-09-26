// priority: 10

/**
 * @file Core server handler. Formerly had core recipes.
 * 
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author squoshi <https://github.com/squoshi> Helped a lot early on in development. Thank you. Also helped translate my ideas into scripts!
 * @author pietro-lopes <https://github.com/pietro-lopes> AKA Uncandango in the KubeJS Discord. Fixed issues related to damage cancel script
 * @author MundM2007 <https://github.com/MundM2007> for helping with troubleshooting with fixing || statements
 * @author puu7693 <https://github.com/puu7693> for writing the script that grants potion effects when wearing a specific set of armor
 * @author MaxNeedsSnacks <https://github.com/MaxNeedsSnacks> Fixing KubeJS Create bugs
 */

/**
 * Colors
 * Dark Red - §4
 * Red - §c
 * Gold - §6
 * Yellow - §e
 * Dark Green - §2
 * Green - §a
 * Aqua - §b
 * Dark Aqua - §3
 * Dark Blue - §1
 * Blue - §9
 * Light Purple - §d
 * Dark Purple - §5
 * White - §f
 * Gray - §7
 * Dark Gray - §8
 * Black - §0
 * 
 * Formats
 * Obfuscated - §k
 * Bold - §l
 * Strikethrough - §m
 * Underline - §n
 * Italic - §o
 * Reset - §r
 */

ServerEvents.loaded(event => {
  if (!event.server.persistentData.contains('firstload')) {
    event.server.persistentData.putBoolean('firstload', true)
    console.warn('First server load! Lag may be present for a few minutes.')
  }
})

PlayerEvents.loggedIn(event => {
  // Give the player the quest book on first join
  if (!event.player.persistentData.contains('firstjoin')) {
    event.player.persistentData.putBoolean('firstjoin', true)
    if (!Platform.isLoaded('ftbquests') &&
      Platform.isLoaded('supplementaries') &&
      !Platform.isLoaded('backpacked')
    ) {
      event.player.give('supplementaries:sack')
      firstWorldLoadMsg(event)
      event.server.scheduleInTicks(1000, t => { lootrMsg(event) })
      event.server.scheduleInTicks(1200, t => { findMeMsg(event) })
      event.server.scheduleInTicks(1400, t => { reiPluginReload1(event) })
      event.server.scheduleInTicks(1500, t => { reiPluginReload2(event) })
    }
    if (Platform.isLoaded('ftbquests') &&
      Platform.isLoaded('supplementaries') &&
      Platform.isLoaded('backpacked')
    ) {
      event.player.give('ftbquests:book')
      event.player.give('supplementaries:sack')
      event.player.give('backpacked:backpack')
      firstWorldLoadMsg(event)
      event.server.scheduleInTicks(1000, t => { lootrMsg(event) })
      event.server.scheduleInTicks(1200, t => { findMeMsg(event) })
      event.server.scheduleInTicks(1400, t => { reiPluginReload1(event) })
      event.server.scheduleInTicks(1500, t => { reiPluginReload2(event) })
    }
    if (Platform.isLoaded('ftbquests') &&
      Platform.isLoaded('supplementaries') &&
      !Platform.isLoaded('backpacked')
    ) {
      event.player.give('ftbquests:book')
      event.player.give('supplementaries:sack')
      firstWorldLoadMsg(event)
      event.server.scheduleInTicks(1000, t => { lootrMsg(event) })
      event.server.scheduleInTicks(1200, t => { findMeMsg(event) })
      event.server.scheduleInTicks(1400, t => { reiPluginReload1(event) })
      event.server.scheduleInTicks(1500, t => { reiPluginReload2(event) })
    }
  } else if (event.player.persistentData.contains('firstjoin')) {
    welcomeBackMsg(event)
    event.server.scheduleInTicks(1000, t => { lootrMsg(event) })
    event.server.scheduleInTicks(1200, t => { findMeMsg(event) })
    event.server.scheduleInTicks(1400, t => { reiPluginReload1(event) })
    event.server.scheduleInTicks(1500, t => { reiPluginReload2(event) })
  }
})

/** @param {Internal.SimplePlayerEventJS_} event */
function firstWorldLoadMsg(event) {
  event.player.tell([
    Component.of('<'),
    Component.of('System').green(),
    Component.of('> '),
    Component.translatable('string.kubejs.server.first_world_load.line_1').bold().gold()
  ])
  event.server.scheduleInTicks(200, t => {
    event.player.tell([
      Component.of('<'),
      Component.of('System').green(),
      Component.of('> '),
      Component.translatable('string.kubejs.server.login.link_indicator')
    ])
  })
  event.server.scheduleInTicks(200, t => {
    event.player.tell([
      Component.of('<'),
      Component.of('System').green(),
      Component.of('> '),
      Component.translatable('string.kubejs.server.login.hold_w_to_ponder').yellow()
    ])
  })
  event.server.scheduleInTicks(200, t => {
    event.player.tell([
      Component.of('<'),
      Component.of('System').green(),
      Component.of('> '),
      Component.translatable('string.kubejs.server.login.embeddium_cvf'),
      Component.translatable('string.kubejs.server.login.embeddium_cvf_issues.line_1'),
      Component.of('- '),
      Component.of('[GitHub]\n')
        .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues')
        .hover(Component.translatable('string.kubejs.server.github_issues_hover'))
        .yellow(),
      Component.of('- '),
      Component.of('[TauMC Discord]\n')
        .clickOpenUrl('https://discord.gg/rN9Y7caguP')
        .hover(Component.translate('string.kubejs.server.taumc_discord_hover'))
        .color(0x5865F2),
      Component.translatable('string.kubejs.server.login.embeddium_cvf_issues.line_2')
    ])
  })
  event.server.scheduleInTicks(200, t => { event.player.tell(Component.translatable('string.kubejs.server.login.open_chat').underlined().yellow()) })
}

/** @param {Internal.SimplePlayerEventJS_} event */
function welcomeBackMsg(event) {
  event.player.tell([
    Component.of('<'),
    Component.of('System').green(),
    Component.of('> '),
    Component.translatable('string.kubejs.server.welcome_back.line_1')
  ])
  event.server.scheduleInTicks(200, t => {
    event.player.tell([
      Component.of('<'),
      Component.of('System').green(),
      Component.of('> '), Component.translatable('string.kubejs.server.login.welcome_back.link_indicator')])
  })
  event.server.scheduleInTicks(200, t => {
    event.player.tell([
      Component.of('<'),
      Component.of('System').green(),
      Component.of('> '), Component.translatable('string.kubejs.server.login.welcome_back.tooltip_and_ponder')])
  })
  event.server.scheduleInTicks(200, t => {
    event.player.tell([
      Component.of('<'),
      Component.of('System').green(),
      Component.of('> '), Component.translatable('string.kubejs.server.login.embeddium_cvf')])
  })
  event.server.scheduleInTicks(200, t => {
    event.player.tell([
      Component.of('<'),
      Component.of('System').green(),
      Component.of('> '),
      Component.translatable('string.kubejs.server.login.embeddium_cvf_issues.line_1'),
      Component.of('- '),
      Component.of('[GitHub]\n')
        .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues')
        .hover(Component.translatable('string.kubejs.server.github_issues_hover'))
        .yellow(),
      Component.of('- '),
      Component.of('[TauMC Discord]\n')
        .clickOpenUrl('https://discord.gg/rN9Y7caguP')
        .hover(Component.translate('string.kubejs.server.taumc_discord_hover'))
        .color(0x5865F2),
      Component.translatable('string.kubejs.server.login.embeddium_cvf_issues.line_2')
    ])
  })
  event.server.scheduleInTicks(200, t => { event.player.tell(Component.translatable('string.kubejs.server.login.open_chat').underlined().yellow()) })
}

/** @param {Internal.SimplePlayerEventJS_} event */
function lootrMsg(event) {
  if (Platform.isLoaded('lootr') && Platform.isLoaded('carryon')) {
    event.player.tell([
      Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
      Component.of('Please remember that it\'s common courtesy to not break'),
      Component.of(' Lootr ').bold().green(),
      Component.of('chests so friends and other players can loot the same chest.\n'),
      Component.of('\nIf need be, '),
      Component.of('[Shift] + R-Click ').aqua(),
      Component.of('on the '),
      Component.of('Lootr ').bold().green(),
      Component.of('chest with the '),
      Component.of('power ').bold().yellow(),
      Component.of('of '),
      Component.of('Carry On ').bold().gold(),
      Component.of('to '),
      Component.of('move ').italic().gold(),
      Component.of('it and R-Click again to place it down somewhere else. It was'),
      Component.of(' not ').bold().italic().red(),
      Component.of('that hard, right?'),
      Component.of('\n<rainb>-----------------------------------------------------</rainb>')
    ])
  }
}

/** @param {Internal.SimplePlayerEventJS_} event */
function findMeMsg(event) {
  if (Platform.isLoaded('findme')) {
    event.player.tell([
      Component.of('-----------------------------------------------------\n').green(),
      Component.of('Also another thing, '),
      Component.of('FindMe ').bold().aqua(),
      Component.of('has been added so you can '),
      Component.of('press ').yellow(),
      Component.of('[Y] ').green(),
      Component.of('while hovering over an item to search nearby chests.'),
      Component.of('\n-----------------------------------------------------').green()
    ])
  }
}

/** @param {Internal.SimplePlayerEventJS_} event */
function reiPluginReload1(event) {
  if (Platform.isLoaded('roughlyenoughitems')) {
    event.player.tell([
      Component.of('-----------------------------------------------------\n'),
      Component.of('Roughly Enough Items').bold().gray(),
      Component.of(' has replaced JEI, though it does '),
      Component.of('occasionally').italic(),
      Component.of(' experience issues with Create\'s Sequenced Assembly recipe type.\n'),
      Component.of('\nTo fix this click on the cogwheel next to the '),
      Component.of('Search Bar ').bold(),
      Component.of('then click '),
      Component.of('More Options... ').bold().aqua(),
      Component.of('From there, look at the '),
      Component.of('left ').yellow(),
      Component.of('hand side and look for a settings category labelled '),
      Component.of('Reload & Reset').green(),
      Component.of('. Click on '),
      Component.of('Reload Plugins').bold().red(),
      Component.of(' and that should fix the issue.'),
      Component.of('\n-----------------------------------------------------')
    ])

  }
}
/** @param {Internal.SimplePlayerEventJS_} event */
function reiPluginReload2(event) {
  event.player.tell([
    Component.of('-----------------------------------------------------\n'),
    Component.of('If you still happen to be lagging when opening the inventory you can '),
    Component.of('enable ').green(),
    Component.of('Hide When Idle ').bold(),
    Component.of('setting in REI\'s settings located in '),
    Component.of('Layout').bold(),
    Component.of(' to hide the entries list when the search bar is empty with no text.'),
    Component.of('\n-----------------------------------------------------')
  ])
}

let modBlacklist = {
  createcasing: 'Create Encased',
  createdieselgenerators: 'Create: Diesel Generators',
  create_confectionery: 'Create Confectionery',
  create_sa: 'Create Stuff and Additions',
  creategoggles: 'Create Goggles',
  createsifter: 'Create Sifting',
  create_things_and_misc: 'Create: Things and Misc',
  createutilities: 'Create Utilities',
  cgm: "MrCrayFish's Gun Mod",
  extendedgears: 'Create: Extended Cogwheels',
  alloyed: 'Create: Alloyed',
  createendertransmission: 'Create: Ender Transmission',
  create_compressed: 'Create: Compressed',
  mekanism: 'Mekanism',
  immersiveengineering: 'Immersive Engineering',
  unusualend: 'Unusual End',
  hammerlib: 'HammerLib',
  solarflux: 'Solar Flux Reborn',
  strange: 'Strange Lucky Blocks',
  lucky: 'Lucky Blocks',
  twilightforest: 'Twilight Forest',
  createunlimited: 'Create: Unlimited',
  theoneprobe: 'The One Probe'
}

for (let [id, name] of Object.entries(modBlacklist)) {
  if (Platform.isLoaded(`${id}`)) {
    ServerEvents.recipes(event => {
      event.remove({})
    })
    ServerEvents.tick(event => {
      console.error(`${name} has been detected, please remove it from the modpack.`)
    })
    PlayerEvents.loggedIn(event => {
      event.server.tell(`${name} has been detected, please remove it from the modpack.`)
    })
  }
}