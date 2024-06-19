// requires: ars_nouveau

let battle_mage = [
  'ars_nouveau:battlemage_boots',
  'ars_nouveau:battlemage_leggings',
  'ars_nouveau:battlemage_robes',
  'ars_nouveau:battlemage_hood'
]

ItemEvents.modification(event => {
  event.modify('ars_nouveau:enchanters_sword', item => {
    item.maxDamage = -1
  })
  event.modify('ars_nouveau:enchanters_shield', item => {
    item.maxDamage = -1
  })
  for (let i = 0; i < battle_mage.length; i++) {
    let element = battle_mage[i];
    event.modify(element, item => {
      item.maxDamage = -1
    })
  }
})