/**
 * @file KubeJS ore essence generation.
 * @version 1.0
 * @author CelestialAbyss <https://github.com/CelestialAbyss> 
 */

// requires: oregrowth
// requires: create
// requires: ars_nouveau

let coreOreGrowthProperties = {
  coal: { color: 0x363739, texture: 'stone', name: 'Coal' },
  copper: { color: 0xFA977C, texture: 'ingot', name: 'Copper' },
  diamond: { color: 0xA6FCE9, texture: 'gem', name: 'Diamond' },
  emerald: { color: 0x7DF8AC, texture: 'gem', name: 'Emerald' },
  gold: { color: 0xFDF55F, texture: 'ingot', name: 'Gold' },
  iron: { color: 0xE1E1E1, texture: 'ingot', name: 'Iron' },
  lapis: { color: 0x678DEA, texture: 'stone', name: 'Lapis Lazuli' },
  quartz: { color: 0xB19E8F, texture: 'gem', name: 'Quartz' },
  redstone: { color: 0xFF0000, texture: 'stone', name: 'Redstone' },
  zinc: { color: 0xB5D1BA, texture: 'ingot', name: 'Zinc' }
}
let coreOreGrowth = [
  'coal',
  'copper',
  'diamond',
  'emerald',
  'gold',
  'iron',
  'lapis',
  'quartz',
  'redstone',
  'zinc'
]

let externalCoreOreGrowthProperties = {
  lead: { color: 0x535467, texture: 'ingot', name: 'Lead' },
  nickel: { color: 0xDDDAA6, texture: 'ingot', name: 'Nickel' },
  osmium: { color: 0x86B7C5, texture: 'ingot', name: 'Osmium' },
  platinum: { color: 0x86D5D5, texture: 'ingot', name: 'Platinum' },
  tin: { color: 0x6B6D64, texture: 'ingot', name: 'Tin' },
  uranium: { color: 0x00FC00, texture: 'ingot', name: 'Uranium' }
}
let externalCoreOreGrowth = [
  'lead',
  'nickel',
  'osmium',
  'platinum',
  'tin',
  'uranium'
]
// Ore Growth essence generation is split between here and external.
StartupEvents.registry('item', event => {
  for (let element of coreOreGrowth) {
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
  for (let element of externalCoreOreGrowth) {
    event.create('kubejs:' + element + '_ore_essence')
      .texture('kubejs:item/essence_' + externalCoreOreGrowthProperties[element].texture)
      .color(externalCoreOreGrowthProperties[element].color)
      .formattedDisplayName(
        Component.string(externalCoreOreGrowthProperties[element].name + ' ' + 'Ore Essence')
          .color(externalCoreOreGrowthProperties[element].color)
      )
      .rarity('uncommon')
      .tag('create:upright_on_belt')
  }
})