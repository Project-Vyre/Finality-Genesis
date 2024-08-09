// requires: apotheosis
// requires: create

let apo_mono = [
  'sigil_of_socketing',
  'sigil_of_withdrawal',
  'sigil_of_rebirth',
  'sigil_of_enhancement',
  'sigil_of_unnaming',
  'simple_reforging_table',
  'reforging_table',
  'augmenting_table'
]

ItemEvents.tooltip(event => {
  for (let i = 0; i < apo_mono.length; i++) {
    let element = apo_mono[i];
    event.addAdvanced('apotheosis:' + element, (item, advanced, text) => {
      text.remove(1)
    })
  }
})