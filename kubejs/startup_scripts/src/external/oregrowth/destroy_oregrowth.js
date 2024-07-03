// requires: oregrowth
// requires: destroy
// requires: create
// requires: ars_nouveau

let destroyOreGrowthProperties = {
  destroy_fluorite: { color: 0x8A84C8, texture: 'stone', name: 'Fluorite' }
}
let destroyOreGrowth = [
  'destroy_fluorite'
]

StartupEvents.registry('item', event => {
  for (let element of destroyOreGrowth) {
    event.create('kubejs:' + element + '_ore_essence')
      .texture('kubejs:item/essence_' + destroyOreGrowthProperties[element].texture)
      .color(destroyOreGrowthProperties[element].color)
      .formattedDisplayName(
        Component.string(destroyOreGrowthProperties[element].name + ' ' + 'Ore Essence')
          .color(destroyOreGrowthProperties[element].color)
      )
      .rarity('uncommon')
      .tag('create:upright_on_belt')
  }
})