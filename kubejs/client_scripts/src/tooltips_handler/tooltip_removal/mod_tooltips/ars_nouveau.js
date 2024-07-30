// requires: ars_nouveau
// requires: create

let ars_single_line = [
  'magebloom',
  'worn_notebook',
  'mundane_belt',
  'ring_of_potential',
  'wyrm_charm',
  'dull_trinket',
  'starbuncle_shards',
  'starbuncle_shades',
  'whirlisprig_shards',
  'source_gem',
  'wand',
  'wixie_shards',
  'spell_bow',
  'spell_crossbow',
  'enchanters_sword',
  'enchanters_mirror',
  'amplify_arrow',
  'split_arrow',
  'pierce_arrow',
  'dowsing_rod',
  'bookwyrm_charm',
  'amethyst_golem_charm',
  'drygmy_shard',
  'spell_parchment',
  'wilden_tribute',
  'abjuration_essence',
  'conjuration_essence',
  'air_essence',
  'water_essence'
]
let ars_two_lines = [
  'earth_essence',
  'fire_essence',
  'manipulation_essence'
]
let threads = [
  'depths',
  'heights',
  'whirlisprig',
  'drygmy',
  'high_step',
  'spellpower',
  'life_drain',
  'starbuncle',
  'chilling',
  'undying',
  'feather',
  'warding',
  'gliding',
  'immolation',
  'amethyst_golem',
  'magic_capacity',
  'kindling',
  'wixie',
  'repairing'
]
let wilden_drops = ['horn', 'spike', 'wing']
let tablets = [
  'burrowing',
  'challenge',
  'binding',
  'awakening',
  'disintegration',
  'sunrise',
  'cloudshaping',
  'flight',
  'conjure_island_plains',
  'restoration',
  'animal_summon',
  'forestation',
  'warping',
  'moonfall',
  'containment',
  'scrying',
  'gravity',
  'flowering',
  'sanctuary',
  'fertility',
  'overgrowth',
  'conjure_island_desert',
  'harvest',
  'wilden_summon'
]

ItemEvents.tooltip(event => {
  for (let i = 0; i < ars_single_line.length; i++) {
    let element = ars_single_line[i];
    event.addAdvanced('ars_nouveau:' + element, (item, advanced, text) => {
      text.remove(1)
    })
  }
  for (let i = 0; i < ars_two_lines.length; i++) {
    let element = ars_two_lines[i];
    event.addAdvanced('ars_nouveau:' + element, (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
    })
  }
  event.addAdvanced('ars_nouveau:blank_thread', (item, advanced, text) => {
    text.remove(1)
  })
  for (let i = 0; i < threads.length; i++) {
    let element = threads[i];
    event.addAdvanced('ars_nouveau:thread_' + element, (item, advanced, text) => {
      text.remove(1)
    })
  }
  for (let i = 0; i < wilden_drops.length; i++) {
    let element = wilden_drops[i];
    event.addAdvanced('ars_nouveau:wilden_' + element, (item, advanced, text) => {
      text.remove(1)
    })
  }
  for (let i = 0; i < tablets.length; i++) {
    let element = tablets[i];
    event.addAdvanced('ars_nouveau:ritual_' + element, (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
    })
  }
})