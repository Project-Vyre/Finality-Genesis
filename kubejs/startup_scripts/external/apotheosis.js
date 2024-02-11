// requires: apotheosis

/**
 * @file Register these when Apotheosis is present.
 */

let gemInfoProperties = {
  eversor: { color: 0xB4ABD8 },
  acuti_ora: { color: 0xAFB1B2 }
}
let gemInfo = [
  'eversor',
  'acuti_ora'
]

StartupEvents.registry('item', event => {
  for (let iterator of gemInfo) {
    event.create('kubejs:' + iterator + '_gem_info')
      .texture('kubejs:item/info/info_icon')
      .color(0, gemInfoProperties[iterator].color)
  }
})