// requires: bosses_of_mass_destruction
// requires: create
// priority: 20

ItemEvents.tooltip(event => {
  let bomd_items = [
    'soul_star',
    'ancient_anima',
    'blazing_eye',
    'obsidian_heart',
    'earthdive_spear',
    'void_thorn',
    'crystal_fruit',
    'brimstone_nectar',
    'mob_ward',
    'levitation_block',
    'void_lily'
  ]
  bomd_items.forEach(itemTooltip => {
    event.addAdvanced(`bosses_of_mass_destruction:${itemTooltip}`, (item, advanced, text) => {
      text.remove(1)
    })
  })
  event.addAdvanced('bosses_of_mass_destruction:charged_ender_pearl', (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
  })
  event.addAdvanced('bosses_of_mass_destruction:monolith_block', (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
  })
})