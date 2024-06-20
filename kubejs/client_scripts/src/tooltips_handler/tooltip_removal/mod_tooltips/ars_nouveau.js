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
  'enchanters_sword',
  'dowsing_rod'
]

ItemEvents.tooltip(event => {
  for (let i = 0; i < ars_single_line.length; i++) {
    let element = ars_single_line[i];
    event.addAdvanced('ars_nouveau:' + element, (item, advanced, text) => {
      text.remove(1)
    })
  }
})