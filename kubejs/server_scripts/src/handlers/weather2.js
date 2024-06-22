/**
 * @file Server handler for Weather2.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: weather2
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove({ mod: 'weather2' })
  event.recipes.minecraft.crafting_shaped('weather2:weather_item', [
    ' A ',
    'AIA',
    ' A '
  ], {
    A: 'create:andesite_alloy',
    I: 'minecraft:glass_bottle',
  }).id('kubejs:weather2/weather_item')
  event.recipes.minecraft.crafting_shaped('weather2:tornado_siren', [
    'ARA',
    'RSR',
    'ARA'
  ], {
    A: 'create:andesite_alloy',
    R: 'minecraft:redstone',
    S: 'weather2:tornado_sensor'
  }).id('kubejs:weather2/tornado_siren')
  event.recipes.minecraft.crafting_shaped('weather2:tornado_sensor', [
    ' I ',
    'RWR',
    ' I '
  ], {
    I: 'minecraft:iron_ingot',
    R: 'minecraft:redstone',
    W: 'weather2:weather_item',
  }).id('kubejs:weather2/tornado_sensor')
  event.recipes.minecraft.crafting_shaped('weather2:weather_deflector', [
    ' G ',
    'GWG',
    ' G '
  ], {
    G: 'minecraft:gold_ingot',
    W: 'weather2:weather_item'
  }).id('kubejs:weather2/weather_deflector')
  event.recipes.minecraft.crafting_shapeless('weather2:weather_forecast', [
    'weather2:weather_item',
    'minecraft:compass'
  ]).id('kubejs:weather2/weather_forcast')
  event.recipes.create.pressing(
    'weather2:sand_layer',
    'minecraft:sand'
  ).id('kubejs:weather2/pressing/sand_layer')
  event.recipes.minecraft.crafting_shaped('weather2:anemometer', [
    'W W',
    ' R ',
    'W W'
  ], {
    W: 'weather2:weather_item',
    R: 'minecraft:redstone'
  }).id('kubejs:weather2/anemometer')
  event.recipes.minecraft.crafting_shaped('weather2:wind_vane', [
    ' W ',
    'WRW',
    ' W '
  ], {
    W: 'weather2:weather_item',
    R: 'minecraft:redstone'
  }).id('kubejs:weather2/wind_vane')
  event.recipes.minecraft.crafting_shaped('weather2:wind_turbine', [
    'A A',
    'BVB',
    'RGR'
  ], {
    A: 'create:andesite_alloy',
    B: 'create:andesite_alloy_block',
    V: 'weather2:wind_vane',
    R: 'minecraft:redstone_block',
    G: 'minecraft:gold_ingot'
  }).id('kubejs:weather2/wind_turbine')
})