// requires: oregrowth
// requires: ad_astra
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
      .texture('kubejs:item/essence_' + coreOreGrowthProperties[element].texture)
      .color(coreOreGrowthProperties[element].color)
      .formattedDisplayName(
        Component.string(coreOreGrowthProperties[element].name + ' ' + 'Ore Essence')
          .color(coreOreGrowthProperties[element].color)
      )
      .rarity('uncommon')
      .tag('create:upright_on_belt')
  }
})