// requires: seals

/**
 * @file Server handler for the Seals mod.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * 
 * @param {*} event 
 * @param {string} lang 
 * @param {object} reqs 
 * @param {string} itemStack 
 * @param {string} advId 
 */
function itemSeal(event, lang, reqs, itemStack, advId) {
  event.custom({
    lang_key: 'kubejs.' + lang,
    requisites: [reqs],
    icon: {
      type: "item",
      value: { stack: itemStack }
    },
    invisible: false,
    type: "seals:seal"
  }).id('kubejs:seals/item_seal' + advId)
}

ServerEvents.recipes(event => {
})