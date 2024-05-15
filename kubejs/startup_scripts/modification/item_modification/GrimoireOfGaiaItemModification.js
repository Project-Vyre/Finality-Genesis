// requires: grimoireofgaia

ItemEvents.modification(event => {
  let gogBooks = [
    'weapon_book',
    'weapon_book_buff',
    'weapon_book_freezing',
    'weapon_book_nightmare',
    'weapon_book_metal',
    'weapon_book_ender',
    'weapon_book_hunger',
    'weapon_book_battle',
    'weapon_book_nature',
    'weapon_book_wither'
  ]
  for (let i = 0; i < gogBooks.length; i++) {
    let book = gogBooks[i];
    event.modify(`grimoireofgaia:${book}`, item => {
      item.maxDamage = -1 // Previously 1024
      item.fireResistant = true
    })
  }
  let weaponBooks = [
    'weapon_book',
    'weapon_book_freezing',
    'weapon_book_nightmare',
    'weapon_book_metal',
    'weapon_book_ender',
    'weapon_book_hunger',
    'weapon_book_battle',
    'weapon_book_nature',
    'weapon_book_wither'
  ]
  for (let i = 0; i < weaponBooks.length; i++) {
    let book = weaponBooks[i];
    event.modify(`grimoireofgaia:${book}`, item => {
      item.attackDamage = 10
    })
  }
  let weaponFans = [
    'fan',
    'fan_fire',
    'fan_ice'
  ]
  for (let i = 0; i < weaponFans.length; i++) {
    let fans = weaponFans[i];
    event.modify('grimoireofgaia:' + fans, item => {
      item.maxDamage = 1024
    })
  }
  event.modify('grimoireofgaia:metal_club', item => {
    item.maxDamage = 1024
    item.attackDamage = 17
    item.fireResistant = true
  })
  event.modify('grimoireofgaia:cursed_metal_sword', item => {
    item.maxDamage = 1024
    item.attackDamage = 11
    item.fireResistant = true
  })
  event.modify('grimoireofgaia:minotaur_hammer', item => {
    item.maxDamage = 1024
    item.attackDamage = 24
    item.fireResistant = true
  })
})