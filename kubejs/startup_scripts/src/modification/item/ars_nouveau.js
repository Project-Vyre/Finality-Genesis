// requires: ars_nouveau

let ars_armor = [
  'arcanist',
  'battlemage',
  'sorcerer'
]

ItemEvents.modification(event => {
  for (let i = 0; i < ars_armor.length; i++) {
    let element = ars_armor[i];
    event.modify('ars_nouveau:' + element + '_boots', item => { item.maxDamage = -1 })
    event.modify('ars_nouveau:' + element + '_leggings', item => { item.maxDamage = -1 })
    event.modify('ars_nouveau:' + element + '_robes', item => { item.maxDamage = -1 })
    event.modify('ars_nouveau:' + element + '_hood', item => { item.maxDamage = -1 })
  }
  if (Platform.isLoaded('ars_elemental')) {
    // fire
    event.modify('ars_elemental:fire_hat', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:fire_robes', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:fire_leggings', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:fire_boots', item => { item.maxDamage = -1 })
    // air
    event.modify('ars_elemental:air_hat', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:air_robes', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:air_leggings', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:air_boots', item => { item.maxDamage = -1 })
    // earth
    event.modify('ars_elemental:earth_hat', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:earth_robes', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:earth_leggings', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:earth_boots', item => { item.maxDamage = -1 })
    // aqua
    event.modify('ars_elemental:aqua_hat', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:aqua_robes', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:aqua_leggings', item => { item.maxDamage = -1 })
    event.modify('ars_elemental:aqua_boots', item => { item.maxDamage = -1 })
  }
})