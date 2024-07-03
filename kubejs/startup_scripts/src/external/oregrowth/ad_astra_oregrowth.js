// requires: oregrowth
// requires: ad_astra
// requires: create
// requires: ars_nouveau

let adAstraOreGrowthProperties = {
  calorite: { color: 0xB83145, texture: 'ingot', name: 'Calorite' },
  desh: { color: 0xD68D4D, texture: 'ingot', name: 'Desh' },
  ice_shard: { color: 0x7991BC, texture: 'stone', name: 'Ice Shard' },
  ostrum: { color: 0x925E64, texture: 'ingot', name: 'Ostrum' },
  moon_cheese: { color: 0xFDD946, texture: 'stone', name: 'Moon Cheese' },
}
let adAstraOreGrowth = [
  'calorite',
  'desh',
  'ice_shard',
  'ostrum',
  'moon_cheese'
]

StartupEvents.registry('item', event => {
  for (let element of adAstraOreGrowth) {
    event.create('kubejs:' + element + '_ore_essence')
      .texture('kubejs:item/essence_' + adAstraOreGrowthProperties[element].texture)
      .color(adAstraOreGrowthProperties[element].color)
      .formattedDisplayName(
        Component.string(adAstraOreGrowthProperties[element].name + ' ' + 'Ore Essence')
          .color(adAstraOreGrowthProperties[element].color)
      )
      .rarity('uncommon')
      .tag('create:upright_on_belt')
  }
})