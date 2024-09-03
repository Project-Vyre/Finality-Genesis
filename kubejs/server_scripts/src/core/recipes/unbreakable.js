/**
 * @file Force apply Unbreakable to tools correctly.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author pietro-lopes <https://github.com/pietro-lopes> Corrections
 * @author ladylexxie <https://github.com/ladylexxie> Inventory changed
 */

// requires: create
// requires: farmersdelight
// ignored: false

let tools = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
let final_tools = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe', 'lance', 'scythe', 'katana']
let pickletweaks_tools = [
  'pickletweaks:netherite_paxel',
  'pickletweaks:netherite_sickle',
  'pickletweaks:netherite_scythe'
]

ServerEvents.recipes(event => {
  for (let i = 0; i < tools.length; i++) {
    let element = tools[i];
    event.recipes.kubejs.shapeless(Item.of('minecraft:netherite_' + element).withNBT({ Unbreakable: 1 }), [
      'minecraft:netherite_' + element,
      'create:experience_block'
    ]).id('kubejs:unbkreakable_netherite_' + element)
    event.recipes.kubejs.shapeless(Item.of('kubejs:iridium_' + element).withNBT({ Unbreakable: 1 }), [
      'kubejs:iridium_' + element,
      'create:experience_block'
    ]).id('kubejs:unbkreakable_iridium_' + element)
  }
  for (let i = 0; i < final_tools.length; i++) {
    let element = final_tools[i];
    event.recipes.kubejs.shapeless(Item.of('kubejs:final_' + element).withNBT({ Unbreakable: 1 }), [
      'kubejs:final_' + element,
      'create:experience_block'
    ]).id('kubejs:unbkreakable_final_' + element)
  }
  event.recipes.kubejs.shapeless(Item.of('farmersdelight:netherite_knife').withNBT({ Unbreakable: 1 }), [
    'farmersdelight:netherite_knife',
    'create:experience_block'
  ]).id('kubejs:farmersdelight/unbreakable_netherite_knife')
  if (Platform.isLoaded('pickletweaks')) {
    event.recipes.kubejs.shapeless(Item.of('pickletweaks:netherite_paxel').withNBT({ Unbreakable: 1 }), [
      'pickletweaks:netherite_paxel',
      'create:experience_block'
    ]).id('kubejs:pickletweaks/unbreakable_netherite_paxel')
    event.recipes.kubejs.shapeless(Item.of('pickletweaks:netherite_sickle').withNBT({ Unbreakable: 1 }), [
      'pickletweaks:netherite_sickle',
      'create:experience_block'
    ]).id('kubejs:pickletweaks/unbreakable_netherite_sickle')
    event.recipes.kubejs.shapeless(Item.of('pickletweaks:netherite_scythe').withNBT({ Unbreakable: 1 }), [
      'pickletweaks:netherite_scythe',
      'create:experience_block'
    ]).id('kubejs:pickletweaks/unbreakable_netherite_scythe')
  }
})

/*
PlayerEvents.inventoryChanged(event => {
  const { item } = event
  for (let i = 0; i < tools.length; i++) {
    let element = tools[i];
    if (item.getId() == 'minecraft:netherite_' + element) {
      item.nbt.merge({ Unbreakable: 1 })
    }
    if (item.getId() == 'kubejs:iridium_' + element) {
      item.nbt.merge({ Unbreakable: 1 })
    }
  }
  for (let i = 0; i < final_tools.length; i++) {
    let element = final_tools[i];
    if (item.getId() == 'kubejs:final_' + element) {
      item.nbt.merge({ Unbreakable: 1 })
    }
  }
  for (let i = 0; i < mod_tools.length; i++) {
    let element = mod_tools[i];
    if (item.getId() == element) {
      item.nbt.merge({ Unbreakable: 1 })
    }
  }
})
*/