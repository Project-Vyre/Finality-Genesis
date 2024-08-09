// requires: endrem
// requires: create
// ignored: false

let rem = [
  'endrem:black_eye',
  'endrem:cold_eye',
  'endrem:corrupted_eye',
  'endrem:lost_eye',
  'endrem:nether_eye',
  'endrem:old_eye',
  'endrem:rogue_eye',
  'endrem:cursed_eye',
  'endrem:evil_eye',
  'endrem:guardian_eye',
  'endrem:magical_eye',
  'endrem:wither_eye',
  'endrem:witch_eye',
  'endrem:undead_eye',
  'endrem:exotic_eye',
]

ItemEvents.tooltip(event => {
  for (let i = 0; i < rem.length; i++) {
    let eyes = rem[i];
    event.addAdvanced(eyes, (item, advanced, text) => {
      text.remove(1)
    })
  }
})