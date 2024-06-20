// requires: reliquary
// requires: create

let reliquary_shots = [
  'reliquary:shears_of_winter',
  'reliquary:holy_hand_grenade',
  'reliquary:bullets/exorcism_bullet',
  'reliquary:bullets/blaze_bullet',
  'reliquary:bullets/ender_bullet',
  'reliquary:bullets/concussive_bullet',
  'reliquary:bullets/buster_bullet',
  'reliquary:bullets/seeker_bullet',
  'reliquary:bullets/sand_bullet',
  'reliquary:bullets/storm_bullet'
]

ItemEvents.tooltip(event => {
  for (let i = 0; i < reliquary_shots.length; i++) {
    let element = reliquary_shots[i];
    event.addAdvanced(element, (item, advanced, text) => {
      text.remove(1)
    })
  }
})