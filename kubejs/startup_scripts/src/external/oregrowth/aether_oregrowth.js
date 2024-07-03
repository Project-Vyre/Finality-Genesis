// requires: oregrowth
// requires: aether
// requires: create
// requires: ars_nouveau

let aetherOreGrowthProperties = {
  ambrosium: { color: 0xF1EF5F, texture: 'gem', name: 'Ambrosium' },
  gravitite: { color: 0xBE40B4, texture: 'gem', name: 'Gravitite' },
  zanite: { color: 0x7935DD, texture: 'gem', name: 'Zanite' }
}
let aetherOreGrowth = [
  'ambrosium',
  'gravitite',
  'zanite'
]

StartupEvents.registry('item', event => {
  for (let element of aetherOreGrowth) {
    event.create('kubejs:' + element + '_ore_essence')
      .texture('kubejs:item/essence_' + aetherOreGrowthProperties[element].texture)
      .color(aetherOreGrowthProperties[element].color)
      .formattedDisplayName(
        Component.string(aetherOreGrowthProperties[element].name + ' ' + 'Ore Essence')
          .color(aetherOreGrowthProperties[element].color)
      )
      .rarity('uncommon')
      .tag('create:upright_on_belt')
  }
})