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
      event.player.tell([
        Component.of('First world load! Lag may be present for a few minutes.\n').bold().gold(),
        Component.of('Words enclosed with the '),
        Component.of('[] ').bold().green(),
        Component.of('brackets are usually links! Do not forget to '),
        Component.of('Hold <rainb>[w]</rainb> to Ponder! \n').yellow(),
        Component.of('\nIf you experience '),
        Component.of('any ').italic(),
        Component.of('form of '),
        Component.of('Z-fighting ').red(),
        Component.of('or '),
        Component.of('flickering ').red(),
        Component.of('on blocks... '),
        Component.of('go to '),
        Component.of('[Video Settings] ').aqua(),
        Component.of('< '),
        Component.of('[Performance] ').aqua(),
        Component.of('then '),
        Component.of('disable or uncheck ').red(),
        Component.of('the setting that says '),
        Component.of('Use Compact Vertex Format').bold().darkAqua(),
        Component.of('. Please note that this is only applicable with '),
        Component.of('Embeddium 0.2+ ').lightPurple(),
        Component.of('and does not work with '),
        Component.of('Oculus ').lightPurple(),
        Component.of('installed!\n'),
        Component.of('\nIf you encounter any bugs after disabling it, please report them'),
        Component.of(' [here] ')
          .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues')
          .hover('Opens the Finality Genesis GitHub Issues page.')
          .yellow(),
        Component.of('or speak directly to'),
        Component.of(' embeddedt ').lightPurple(),
        Component.of('himself in his '),
        Component.of('[Discord server]')
          .clickOpenUrl('https://discord.gg/rN9Y7caguP')
          .hover("The link for embeddedt's Discord server.")
          .color(0x5865F2),
        Component.of('. Thank you!\n'),
        Component.of('\nNote: You may need to open chat to see the full message.').underlined().yellow()
      ])
      lootrMsg(event)
      findMeMsg(event)
      reiPluginReload(event)
    }
    if (Platform.isLoaded('ftbquests') &&
      Platform.isLoaded('supplementaries') &&
      Platform.isLoaded('backpacked')
    ) {
      event.player.give('ftbquests:book')
      event.player.give('supplementaries:sack')
      event.player.give('backpacked:backpack')
      event.player.tell([
        Component.of('First world load! Lag may be present for a few minutes.\n').bold().gold(),
        Component.of('Words enclosed with the '),
        Component.of('[] ').bold().green(),
        Component.of('brackets are usually links! Also, please check your Quest Book and read its tooltips to get your bearings. Before I go, do not forget to '),
        Component.of('Hold <rainb>[w]</rainb> to Ponder! \n').yellow(),
        Component.of('\nIf you experience '),
        Component.of('any ').italic(),
        Component.of('form of '),
        Component.of('Z-fighting ').red(),
        Component.of('or '),
        Component.of('flickering ').red(),
        Component.of('on blocks... '),
        Component.of('go to '),
        Component.of('[Video Settings] ').aqua(),
        Component.of('< '),
        Component.of('[Performance] ').aqua(),
        Component.of('then '),
        Component.of('disable or uncheck ').red(),
        Component.of('the setting that says '),
        Component.of('Use Compact Vertex Format').bold().darkAqua(),
        Component.of('. Please note that this is only applicable with '),
        Component.of('Embeddium 0.2+ ').lightPurple(),
        Component.of('and does not work with '),
        Component.of('Oculus ').lightPurple(),
        Component.of('installed!\n'),
        Component.of('\nIf you encounter any bugs after disabling it, please report them'),
        Component.of(' [here] ')
          .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues')
          .hover('Opens the Finality Genesis GitHub Issues page.')
          .yellow(),
        Component.of('or speak directly to'),
        Component.of(' embeddedt ').lightPurple(),
        Component.of('himself in his '),
        Component.of('[Discord server]')
          .clickOpenUrl('https://discord.gg/rN9Y7caguP')
          .hover("The link for embeddedt's Discord server.")
          .color(0x5865F2),
        Component.of('. Thank you!\n'),
        Component.of('\nNote: You may need to open chat to see the full message.').underlined().yellow()
      ])
      lootrMsg(event)
      findMeMsg(event)
      reiPluginReload(event)
    }
    if (Platform.isLoaded('ftbquests') &&
      Platform.isLoaded('supplementaries') &&
      !Platform.isLoaded('backpacked')
    ) {
      event.player.give('ftbquests:book')
      event.player.give('supplementaries:sack')
      event.player.tell([
        Component.of('First world load! Lag may be present for a few minutes.\n').bold().gold(),
        Component.of('Words enclosed with the '),
        Component.of('[] ').bold().green(),
        Component.of('brackets are usually links! Also, please check your Quest Book and read its tooltips to get your bearings. Before I go, do not forget to '),
        Component.of('Hold <rainb>[w]</rainb> to Ponder! \n').yellow(),
        Component.of('\nIf you experience '),
        Component.of('any ').italic(),
        Component.of('form of '),
        Component.of('Z-fighting ').red(),
        Component.of('or '),
        Component.of('flickering ').red(),
        Component.of('on blocks... '),
        Component.of('go to '),
        Component.of('[Video Settings] ').aqua(),
        Component.of('< '),
        Component.of('[Performance] ').aqua(),
        Component.of('then '),
        Component.of('disable or uncheck ').red(),
        Component.of('the setting that says '),
        Component.of('Use Compact Vertex Format').bold().darkAqua(),
        Component.of('. Please note that this is only applicable with '),
        Component.of('Embeddium 0.2+ ').lightPurple(),
        Component.of('and does not work with '),
        Component.of('Oculus ').lightPurple(),
        Component.of('installed!\n'),
        Component.of('\nIf you encounter any bugs after disabling it, please report them'),
        Component.of(' [here] ')
          .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues')
          .hover('Opens the Finality Genesis GitHub Issues page.')
          .yellow(),
        Component.of('or speak directly to'),
        Component.of(' embeddedt ').lightPurple(),
        Component.of('himself in his '),
        Component.of('[Discord server]')
          .clickOpenUrl('https://discord.gg/rN9Y7caguP')
          .hover("The link for embeddedt's Discord server.")
          .color(0x5865F2),
        Component.of('. Thank you!\n'),
        Component.of('\nNote: You may need to open chat to see the full message.').underlined().yellow()
      ])
      lootrMsg(event)
      findMeMsg(event)
      reiPluginReload(event)
    }
  } else if (event.player.persistentData.contains('firstjoin')) {
    event.player.tell([
      Component.of('Welcome back!\n').bold().green(),
      Component.of('If the world has recently been loaded, lag may be present for a few minutes. '),
      Component.of('<shake>Please</shake> ').bold().red(),
      Component.of('allow some time to fully stabilize.\n'),
      Component.of('In case you didn\'t see previously, words enclosed with the '),
      Component.of('[] ').bold().green(),
      Component.of('brackets are links so feel free to mouse over them. Don\'t forget to read tooltips for some helpful info and '),
      Component.of("Hold <rainb>[w]</rainb> to Ponder!\n").yellow(),
      Component.of('\nIf you experience '),
      Component.of('any ').italic(),
      Component.of('form of '),
      Component.of('Z-fighting ').red(),
      Component.of('or '),
      Component.of('flickering ').red(),
      Component.of('on blocks... '),
      Component.of('go to '),
      Component.of('[Video Settings] ').aqua(),
      Component.of('< '),
      Component.of('[Performance] ').aqua(),
      Component.of('then '),
      Component.of('disable or uncheck ').red(),
      Component.of('the setting that says '),
      Component.of('Use Compact Vertex Format').bold().darkAqua(),
      Component.of('. Please note that this is only applicable with '),
      Component.of('Embeddium 0.2+ ').lightPurple(),
      Component.of('and does not work with '),
      Component.of('Oculus ').lightPurple(),
      Component.of('installed!\n'),
      Component.of('\nIf you encounter any bugs after disabling it, please report them'),
      Component.of(' [here] ')
        .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues')
        .hover('Opens the Finality Genesis GitHub Issues page.')
        .yellow(),
      Component.of('or speak directly to'),
      Component.of(' embeddedt ').lightPurple(),
      Component.of('himself in his '),
      Component.of('[Discord server]')
        .clickOpenUrl('https://discord.gg/rN9Y7caguP')
        .hover("The link for embeddedt's Discord server.")
        .color(0x5865F2),
      Component.of('. Thank you!\n'),
      Component.of('\nNote: You may need to open chat to see the full message.').underlined().yellow()
    ])
    lootrMsg(event)
    findMeMsg(event)
    reiPluginReload(event)
  }
})

function lootrMsg(event) {
  if (Platform.isLoaded('lootr') && Platform.isLoaded('carryon')) {
    event.server.scheduleInTicks(420, t => {
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
    })
  }
}

function findMeMsg(event) {
  if (Platform.isLoaded('findme')) {
    event.server.scheduleInTicks(720, t => {
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
    })
  }
}

function reiPluginReload(event) {
  if (Platform.isLoaded('roughlyenoughitems')) {
    event.server.scheduleInTicks(900, t => {
      event.player.tell([
        Component.of('-----------------------------------------------------\n'),
        Component.of('Roughly Enough Items').gray(),
        Component.of(' has replaced JEI, though it does '),
        Component.of('occasionally').italic(),
        Component.of(' experience issues with Create\'s Sequenced Assembly recipe type. '),
        Component.of('To fix this click on the cogwheel next to the '),
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
    })
  }
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