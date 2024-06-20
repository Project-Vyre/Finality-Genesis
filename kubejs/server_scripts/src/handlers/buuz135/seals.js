/**
 * @file Server handler for the Seals mod.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: seals

ServerEvents.recipes(event => {
  /**
   * @example {
   *   "lang_key": "alchemist",
   *   "requisites": [
   *     "minecraft:nether/all_effects",
   *     "minecraft:nether/all_potions"
   *   ],
   *   "icon": {
   *     "type": "item",
   *     "value": {
   *       "stack": "minecraft:brewing_stand"
   *     }
   *   },
   *   "invisible": false,
   *   "type": "seals:seal"
   * }
   * @param {string} lang Translation key
   * @param {object} reqs Required advancements
   * @param {string} itemStack Serves as the icon of the seal
   * @param {boolean} invisible If invisible or not
   * @param {string} advId "Recipe ID"
   */
  function itemSeal(lang, reqs, itemStack, invis, advId) {
    event.custom({
      lang_key: 'kubejs.' + lang,
      requisites: reqs,
      icon: {
        type: "item",
        value: { stack: itemStack }
      },
      invisible: invis,
      type: "seals:seal"
    }).id('kubejs:seals/item_seal/' + advId)
  }

  itemSeal(
    'engineer', 
    [
      'create:wrench_goggles',
      'create:steam_engine',
      'create:precision_mechanism'
    ],
    'create:goggles',
    false,
    'engineer'
  )

  itemSeal(
    'conductor',
    [
      'create:train',
      'create:train_whistle'
    ],
    'create:railway_casing',
    false,
    'conductor'
  )
})