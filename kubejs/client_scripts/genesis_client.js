// priority: 0
// requires: create
// requires: lodestone

console.info('Genesis client scripts loaded. You will see this line every time client resources reload.')

// Deprecate for 1.20.1 use.
ClientEvents.highPriorityAssets(event => {
    let map = JsonIO.read('kubejs/assets/kubejs/lang/en_us.json')
    map.forEach((key, val) => {
        event.addLang(key, val)
    })
})



const $ScreenshakeHandler = Java.loadClass('team.lodestar.lodestone.handlers.ScreenshakeHandler')
const $ScreenshakeInstance = Java.loadClass('team.lodestar.lodestone.systems.screenshake.ScreenshakeInstance')
const $Easing = Java.loadClass('team.lodestar.lodestone.systems.easing.Easing')

NetworkEvents.dataReceived('screenshake', event => {
    const { i1, i2, i3, duration } = event.data
    $ScreenshakeHandler.addScreenshake($ScreenshakeInstance(duration).setIntensity(i1, i2, i3).setEasing($Easing.SINE_IN, $Easing.QUAD_IN))
})