/**
 * @file Server handler for the Tesseract mod.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: tesseract
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove({ id: 'tesseract:tesseract' })
  event.recipes.create.mechanical_crafting('tesseract:tesseract', [
    'OEO',
    'EPE',
    'OEO'
  ], {
    O: 'kubejs:iridium_block',
    E: 'kubejs:ender_pearl_singularity',
    P: 'kubejs:precision_mechanism_singularity'
  }).id('kubejs:mechanical_crafting/tesseract')
})