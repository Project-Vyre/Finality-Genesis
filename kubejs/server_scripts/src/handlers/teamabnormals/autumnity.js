/**
 * @file Server handler for Autumnity from TeamAbnormals.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: autumnity
// requires: kubejs_create

let AUTLOG = [
  'maple_log'
]
let AUTWOOD = [
  'maple_wood'
]

ServerEvents.recipes(event => {
  for (let i = 0; i < AUTLOG.length; i++) {
    let insert = AUTLOG[i];
    event.add('forge:stripped_logs', `autumnity:stripped_${insert}`)
  }
  for (let i = 0; i < AUTWOOD.length; i++) {
    let insert = AUTWOOD[i];
    event.add('forge:stripped_wood', `autumnity:stripped_${insert}`)
  }
})

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', 'autumnity:maple_beehive')
})