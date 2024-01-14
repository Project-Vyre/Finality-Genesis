// requires: kubejs_create

/**
 * @file Re-implementation of the recipes for removed Create materials.
 */

ServerEvents.recipes(event => {
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
})