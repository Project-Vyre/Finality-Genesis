// requires: ars_nouveau

let ars_armor = [
  'arcanist',
  'battlemage',
  'sorcerer'
]

ItemEvents.modification(event => {
  event.modify('ars_nouveau:enchanters_sword', item => {
    item.maxDamage = -1
  })
  event.modify('ars_nouveau:enchanters_shield', item => {
    item.maxDamage = -1
  })
  for (let i = 0; i < ars_armor.length; i++) {
    let element = ars_armor[i];
    event.modify('ars_nouveau:' + element + '_boots', item => { item.maxDamage = -1 })
    event.modify('ars_nouveau:' + element + '_leggings', item => { item.maxDamage = -1 })
    event.modify('ars_nouveau:' + element + '_robes', item => { item.maxDamage = -1 })
    event.modify('ars_nouveau:' + element + '_hood', item => { item.maxDamage = -1 })
  }
})