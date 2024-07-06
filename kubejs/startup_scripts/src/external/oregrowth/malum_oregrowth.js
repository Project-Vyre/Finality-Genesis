// requires: oregrowth
// requires: malum
// requires: create
// requires: ars_nouveau

let malumOreGrowthProperties = {
  blazing_quartz: { color: 0xFCE35C, texture: 'gem', name: 'Blazing Quartz' },
  soulstone: { color: 0x483855, texture: 'gem', name: 'Soulstone' }
}
let malumOreGrowth = [
  'blazing_quartz',
  'soulstone'
]

StartupEvents.registry('item', event => {
  for (let element of malumOreGrowth) {
    event.create('kubejs:' + element + '_ore_essence')
      .texture('kubejs:item/essence_' + malumOreGrowthProperties[element].texture)
      .color(malumOreGrowthProperties[element].color)
      .formattedDisplayName(
        Component.string(malumOreGrowthProperties[element].name + ' ' + 'Ore Essence')
          .color(malumOreGrowthProperties[element].color)
      )
      .rarity('uncommon')
      .tag('create:upright_on_belt')
  }
})