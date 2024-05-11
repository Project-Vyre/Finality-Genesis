// priority: 0
// requires: create

/**
 * @ChiefArug
 * Hello script file editor. Please don't disable this check unless you really know what you are doing,
 * and are aware that playing with these mods may cause everything from mild lore spoilers to full world corruption.
 * 
 * @CelestialAbyss 
 * *cough* OptiFine *cough*
 */

const BAD_MODS = ['optifine', 'legendarytooltips']

let badModsLoaded = BAD_MODS.filter(mod => Platform.getMods().keySet().contains(mod))

if (badModsLoaded.length > 0) {
  ClientEvents.loggedIn(event => {
    Client.gui.setTimes(20, 200000, 20)
    Client.gui.setTitle(Text.red("INCOMPATIBLE MODS FOUND!"))
    Client.gui.setSubtitle(Text.darkRed("Please remove these mods: " + badModsLoaded))
    event.player.paint({
      blackout:
        { type: 'rectangle', x: 0, y: 0, z: -100, w: 1000, h: 1000, draw: 'always', alignX: 'center', alignY: 'center' }
    })
  })
}