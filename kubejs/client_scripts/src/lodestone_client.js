// priority: 0
// requires: lodestone

/**
 * @file Client handler for Lodestone.
 * @author squoshi <https://github.com/squoshi> Original screenshake script author
 * @author ChiefArug <https://github.com/ChiefArug> Client mod blacklist script
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

const $ScreenshakeHandler = Java.loadClass('team.lodestar.lodestone.handlers.ScreenshakeHandler')
const $ScreenshakeInstance = Java.loadClass('team.lodestar.lodestone.systems.screenshake.ScreenshakeInstance')
const $Easing = Java.loadClass('team.lodestar.lodestone.systems.easing.Easing')

NetworkEvents.dataReceived('screenshake', event => {
  const { i1, i2, i3, duration } = event.data
  $ScreenshakeHandler.addScreenshake($ScreenshakeInstance(duration).setIntensity(i1, i2, i3).setEasing($Easing.SINE_IN, $Easing.QUAD_IN))
})