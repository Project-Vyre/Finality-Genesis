/**
 * @file Server handler for Create: Destroy
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: destroy
// requires: farmersdelight
// requires: createaddition
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove([
    { id: 'destroy:compat/createaddition/crafting/diamond_grid_sandpaper' },
    { id: 'destroy:compat/farmersdelight/cutting/onion' },
    {
      mod: 'destroy',
      output: 'minecraft:name_tag'
    }
  ])
  if (Ingredient.of('#forge:raw_materials/sulfur').stacks.size() == 0) {
    event.remove({ id: 'destroy:milling/sulfur' })
  }
  if (Platform.isLoaded('alexscaves')) {
    event.recipes.create.milling(
      'minecraft:yellow_dye',
      'alexscaves:sulfur_dust'
    ).processingTime(150).id('kubejs:destroy/alexscaves/milling/sulfur')
  }
  if (Platform.isLoaded('supplementaries')) {
    event.remove({ id: 'destroy:compat/supplementaries/crafting/bomb' })
    event.recipes.minecraft.crafting_shaped('supplementaries:bomb', [
      ' IE',
      'IEI',
      ' I '
    ], {
      I: 'minecraft:iron_ingot',
      E: '#destroy:explosive/primary'
    }).id('kubejs:destroy/compat/supplementaries/crafting/bomb')
  }
})