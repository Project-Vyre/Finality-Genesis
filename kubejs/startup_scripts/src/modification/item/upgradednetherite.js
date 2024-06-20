// requires: upgradednetherite
// requires: upgradednetherite_ultimate
// requires: upgradednetherite_creative
// requires: upgradedtools

/**
 * @file Responsible for modifying durability of Upgraded Netherite related items.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author TheonlyTazz <https://github.com/TheonlyTazz> For helping with understanding for loops. Thank you.
 */

let T2_TOOLS = -1 // Previously 4096
let T3_TOOLS = -1 // Previously 8192
let T2_ARMOR = -1 // Previously 2048
let T3_ARMOR = -1 // Previously 4096
let UPNETHERITE_TOOLS = ['sword', 'shovel', 'pickaxe', 'axe', 'bow', 'crossbow']
let UPNETHERITE_ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']
let T2 = ['gold_upgraded', 'fire_upgraded', 'ender_upgraded', 'water_upgraded', 'wither_upgraded', 'poison_upgraded', 'phantom_upgraded', 'feather_upgraded']
let T3 = ['echo_upgraded', 'corrupt_upgraded']
ItemEvents.modification(event => {
  event.modify('upgradednetherite:netherite_bow', item => { item.maxDamage = -1 })
  event.modify('upgradednetherite:netherite_crossbow', item => { item.maxDamage = -1 })
  for (let i = 0; i < T2.length; i++) {
    for (let j = 0; j < UPNETHERITE_TOOLS.length; j++) {
      event.modify(`upgradednetherite:${T2[i]}_netherite_${UPNETHERITE_TOOLS[j]}`, item => { item.maxDamage = T2_TOOLS })
    }
    event.modify('upgradednetherite:' + T2[i] + '_hammer', item => { item.maxDamage = 1 })
  }
  for (let i = 0; i < T3.length; i++) {
    for (let j = 0; j < UPNETHERITE_TOOLS.length; j++) {
      event.modify(`upgradednetherite:${T3[i]}_netherite_${UPNETHERITE_TOOLS[j]}`, item => { item.maxDamage = T3_TOOLS })
    }
    event.modify('upgradednetherite:' + T3[i] + '_hammer', item => { item.maxDamage = 1 })
  }
  for (let i = 0; i < T2.length; i++) {
    for (let j = 0; j < UPNETHERITE_ARMOR.length; j++) {
      event.modify(`upgradednetherite:${T2[i]}_netherite_${UPNETHERITE_ARMOR[j]}`, item => { item.maxDamage = T2_ARMOR })
      event.modify('upgradednetherite:' + T2[i] + '_netherite_horse_armor', item => { item.maxDamage = -1 })
    }
  }
  for (let i = 0; i < T3.length; i++) {
    for (let j = 0; j < UPNETHERITE_ARMOR.length; j++) {
      event.modify(`upgradednetherite:${T3[i]}_netherite_${UPNETHERITE_ARMOR[j]}`, item => { item.maxDamage = T3_ARMOR })
      event.modify('upgradednetherite:' + T3[i] + '_netherite_horse_armor', item => { item.maxDamage = -1 })
    }
  }
  event.modify('upgradednetherite:netherite_horse_armor', item => { item.maxDamage = -1 })
  for (let i = 0; i < UPNETHERITE_TOOLS.length; i++) {
    let ult = UPNETHERITE_TOOLS[i];
    event.modify(`upgradednetherite_ultimate:ultimate_upgraded_netherite_${ult}`, item => { item.maxDamage = T3_TOOLS })
    event.modify(`upgradednetherite_creative:creative_upgraded_netherite_${ult}`, item => { item.maxDamage = T3_TOOLS })
  }
  for (let i = 0; i < UPNETHERITE_ARMOR.length; i++) {
    let ult = UPNETHERITE_ARMOR[i];
    event.modify(`upgradednetherite_ultimate:ultimate_upgraded_netherite_${ult}`, item => { item.maxDamage = T3_ARMOR })
    event.modify(`upgradednetherite_creative:creative_upgraded_netherite_${ult}`, item => { item.maxDamage = T3_ARMOR })
  }
  // shields
  event.modify('upgradednetherite:netherite_shield', item => {
    item.maxDamage = -1 // Previously 512
  })
  for (let i = 0; i < T2.length; i++) {
    let upgrade = T2[i];
    event.modify(`upgradednetherite:${upgrade}_netherite_shield`, item => {
      item.maxDamage = -1 // Previously 512
    })
  }
  for (let i = 0; i < T3.length; i++) {
    let upgrade = T3[i];
    event.modify(`upgradednetherite:${upgrade}_netherite_shield`, item => {
      item.maxDamage = -1 // Previously 1024
    })
  }
  event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_shield', item => {
    item.maxDamage = -1 // Previously 1024
  })
  event.modify('upgradednetherite_creative:creative_upgraded_netherite_shield', item => {
    item.maxDamage = -1 // Previously 2048
  })
})