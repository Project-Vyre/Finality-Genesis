// requires: aquamirae

ItemEvents.modification(event => {
  let LEGENDARY = ['whisper_of_the_abyss', 'coral_lance', 'divider']
  let ABYSS_ARMOR = ['heaume', 'brigantine', 'leggings', 'boots']
  for (let i = 0; i < LEGENDARY.length; i++) {
    let insert = LEGENDARY[i];
    event.modify(`aquamirae:${insert}`, item => {
      item.maxDamage = -1
      item.fireResistant = true
    })
  }
  for (let i = 0; i < ABYSS_ARMOR.length; i++) {
    let insert = ABYSS_ARMOR[i];
    event.modify(`aquamirae:abyssal_${insert}`, item => {
      item.maxDamage = -1
      item.fireResistant = true
    })
  }
  event.modify('aquamirae:abyssal_tiara', item => {
    item.maxDamage = -1
    item.fireResistant = true
  })
  event.modify('aquamirae:maze_rose', item => {
    item.maxDamage = -1
    item.fireResistant = true
  })
  event.modify('aquamirae:poisoned_chakra', item => {
    item.maxDamage = -1
    item.fireResistant = true
  })
  for (let i = 0; i < ARMOR.length; i++) {
    let insert = ARMOR[i];
    event.modify(`aquamirae:three_bolt_${insert}`, item => {
      item.maxDamage = -1
      item.fireResistant = true
    })
  }
})