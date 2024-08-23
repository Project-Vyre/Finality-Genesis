/**
 * @file Force apply Unbreakable to tools correctly.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author pietro-lopes <https://github.com/pietro-lopes> Corrections
 * @author ladylexxie <https://github.com/ladylexxie> Inventory changed
 */

let tools = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
let final_tools = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe', 'lance', 'scythe', 'katana']
let mod_tools = [
  'farmersdelight:netherite_knife',
  'pickletweaks:netherite_paxel',
  'pickletweaks:netheritesickle',
  'pickletweaks:netherite_scythe'
]

PlayerEvents.inventoryChanged(event => {
  const { item } = event
  for (let i = 0; i < tools.length; i++) {
    let element = tools[i];
    if (item.hasNBT() && item.getId() == 'minecraft:netherite_' + element) {
      item.nbt.merge({ Damage: 0, Unbreakable: 1 })
    }
    if (item.hasNBT() && item.getId() == 'kubejs:iridium_' + element) {
      item.nbt.merge({ Damage: 0, Unbreakable: 1 })
    }
  }
  for (let i = 0; i < final_tools.length; i++) {
    let element = final_tools[i];
    if (item.hasNBT() && item.getId() == 'kubejs:final_' + element) {
      item.nbt.merge({ Damage: 0, Unbreakable: 1 })
    }
  }
  for (let i = 0; i < mod_tools.length; i++) {
    let element = mod_tools[i];
    if (item.hasNBT() && item.getId() == element) {
      item.nbt.merge({ Damage: 0, Unbreakable: 1 })
    }
  }
})