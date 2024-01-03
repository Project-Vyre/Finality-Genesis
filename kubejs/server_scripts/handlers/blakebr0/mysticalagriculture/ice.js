// requires: mysticalagriculture
// requires: mysticalagradditions
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        '20x minecraft:snow_block',
        '4x mysticalagriculture:ice_essence'
    ).id('finality:mysticalagriculture/mixing/snow_block')
    event.recipes.create.compacting(
        '16x minecraft:ice',
        '8x mysticalagriculture:ice_essence'
    ).id('finality:mysticalagriculture/compacting/ice')
})