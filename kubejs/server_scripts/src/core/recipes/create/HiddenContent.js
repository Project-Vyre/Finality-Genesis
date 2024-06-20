// requires: kubejs_create

/**
 * @file Re-implementation of the recipes for removed Create materials.
 */

ServerEvents.recipes(event => {
  // Chromatic Compound recipe restoration
  event.recipes.create.mixing('create:chromatic_compound', [
    '3x minecraft:glowstone_dust',
    '3x create:powdered_obsidian',
    'create:polished_rose_quartz'
  ]).superheated().id('create:mixing/chromatic_compound')
  event.recipes.create.item_application('create:refined_radiance_casing', [
    '#forge:stripped_logs',
    'create:refined_radiance'
  ]).id('create:refined_radiance_casing')
  event.recipes.create.item_application('create:shadow_steel_casing', [
    '#forge:stripped_logs',
    'create:shadow_steel'
  ]).id('create:shadow_steel_casing')
  event.recipes.create.deploying('create:refined_radiance', [
    'create:chromatic_compound',
    'minecraft:beacon'
  ]).keepHeldItem().id('finality:deploying/refined_radiance_from_beacon')
  event.recipes.create.deploying('create:shadow_steel', [
    'create:chromatic_compound',
    'minecraft:crying_obsidian'
  ]).keepHeldItem().id('finality:deploying/shadow_steel_from_crying_obsidian')
})