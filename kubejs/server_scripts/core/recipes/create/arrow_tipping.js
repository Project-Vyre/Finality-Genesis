// requires: create
// requires: kubejs_create
// ignored: false

/**
 * Thank you to chasr34 for bringing this to light as it was something that did not cross my mind...
 * @file Create module for handling arrow potion tipping.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

let mcPotions = {
  night_vision: 'minecraft:night_vision',
  long_night_vision: 'minecraft:long_night_vision',
  invisibility: 'minecraft:invisibility',
  long_invisibility: 'minecraft:long_invisibility',
  leaping: 'minecraft:leaping',
  long_leaping: 'minecraft:long_leaping',
  strong_leaping: 'minecraft:strong_leaping',
  fire_resistance: 'minecraft:fire_resistance',
  long_fire_resistance: 'minecraft:long_fire_resistance',
  swiftness: 'minecraft:swiftness',
  long_swiftness: 'minecraft:long_swiftness',
  strong_swiftness: 'minecraft:strong_swiftness',
  slowness: 'minecraft:slowness',
  long_slowness: 'minecraft:long_slowness',
  strong_slowness: 'minecraft:strong_slowness',
  turtle_master: 'minecraft:turtle_master',
  long_turtle_master: 'minecraft:long_turtle_master',
  strong_turtle_master: 'minecraft:strong_turtle_master',
  water_breathing: 'minecraft:water_breathing',
  long_water_breathing: 'minecraft:long_water_breathing',
  healing: 'minecraft:healing',
  strong_healing: 'minecraft:strong_healing',
  harming: 'minecraft:harming',
  strong_harming: 'minecraft:strong_harming',
  poison: 'minecraft:poison',
  long_poison: 'minecraft:long_poison',
  strong_poision: 'minecraft:strong_poision',
  regeneration: 'minecraft:regeneration',
  long_regeneration: 'minecraft:long_regeneration',
  strong_regeneration: 'minecraft:strong_regeneration',
  strength: 'minecraft:strength',
  long_strength: 'minecraft:long_strength',
  strong_strength: 'minecraft:strong_strength',
  weakness: 'minecraft:weakness',
  long_weakness: 'minecraft:long_weakness',
  luck: 'minecraft:luck',
  slow_falling: 'minecraft:slow_falling',
  long_slow_falling: 'minecraft:long_slow_falling',
}

ServerEvents.recipes(event => {
  /**
   * 
   * @param {Internal.Item} arrow 
   * @param {Internal.PotionItem} potion 
   * @param {string} modId
   * @param {string} recipeId 
   */
  let spoutTip = (potion, modId, recipeId) => {
    event.recipes.create.filling(Item.of('minecraft:tipped_arrow', `{Potion:"${potion}"}`), [
      'minecraft:arrow',
      Fluid.of('create:potion', 250, `{Bottle:"REGULAR",Potion:"${potion}"}`)
    ]).id(`finality:filling/${modId}/arrow_of_${recipeId}`)
  }
  /**
   * 
   * @param {Internal.Item} arrow 
   * @param {Internal.PotionItem} potion
   * @param {string} modId 
   * @param {string} recipeId 
   */
  let bulkTipMixing = (potion, modId, recipeId) => {
    event.recipes.create.mixing(Item.of('minecraft:tipped_arrow', 8, `{Potion:"${potion}"}`), [
      '8x minecraft:arrow',
      Fluid.of('create:potion', 1000, `{Bottle:"REGULAR",Potion:"${potion}"}`)
    ]).id(`finality:mixing/${modId}/arrow_of_${recipeId}`)
  }
  for (const [recipeId, potionId] of Object.entries(mcPotions)) {
    spoutTip(potionId, 'minecraft', recipeId)
    bulkTipMixing(potionId, 'minecraft', recipeId)
  }
  if (Platform.isLoaded('alexsmobs')) {
    let alexPotions = {
      knockback_resistance: 'alexsmobs:knockback_resistance',
      long_knockback_resistance: 'alexsmobs:long_knockback_resistance',
      strong_knockback_resistance: 'alexsmobs:strong_knockback_resistance',
      lava_vision: 'alexsmobs:lava_vision',
      long_lava_vision: 'alexsmobs:long_lava_vision',
      speed_iii: 'alexsmobs:speed_iii',
      poison_resistance: 'alexsmobs:poison_resistance',
      long_poison_resistance: 'alexsmobs:long_poison_resistance',
      bug_pheromones: 'alexsmobs:bug_pheromones',
      long_bug_pheromones: 'alexsmobs:long_bug_pheromones',
      soulsteal: 'alexsmobs:soulsteal',
      long_soulsteal: 'alexsmobs:long_soulsteal',
      strong_soulsteal: 'alexsmobs:strong_soulsteal',
      clinging: 'alexsmobs:clinging',
      long_clinging: 'alexsmobs:long_clinging'
    }
    for (const [recipeId, potionId] of Object.entries(alexPotions)) {
      spoutTip(potionId, 'alexsmobs', recipeId)
      bulkTipMixing(potionId, 'alexsmobs', recipeId)
    }
  }
  if (Platform.isLoaded('apotheosis')) {
    let apoPotions = {
      resistance: 'apotheosis:resistance',
      long_resistance: 'apotheosis:long_resistance',
      strong_resistance: 'apotheosis:strong_resistance',
      absorption: 'apotheosis:absorption',
      long_absorption: 'apotheosis:long_absorption',
      strong_absorption: 'apotheosis:strong_absorption',
      long_haste: 'apotheosis:long_haste',
      strong_haste: 'apotheosis:strong_haste',
      fatigue: 'apotheosis:fatigue',
      long_fatigue: 'apotheosis:long_fatigue',
      strong_fatigue: 'apotheosis:strong_fatigue',
      wither: 'apotheosis:wither',
      long_wither: 'apotheosis:long_wither',
      strong_wither: 'apotheosis:strong_wither',
      sundering: 'apotheosis:sundering',
      long_sundering: 'apotheosis:long_sundering',
      strong_sundering: 'apotheosis:strong_sundering',
      knowledge: 'apotheosis:knowledge',
      long_knowledge: 'apotheosis:long_knowledge',
      strong_knowledge: 'apotheosis:strong_knowledge',
      vitality: 'apotheosis:vitality',
      long_vitality: 'apotheosis:long_vitality',
      strong_vitality: 'apotheosis:strong_vitality',
      grievous: 'apotheosis:grievous',
      long_grievous: 'apotheosis:long_grievous',
      strong_grievous: 'apotheosis:strong_grievous',
    }
    for (const [recipeId, potionId] of Object.entries(apoPotions)) {
      spoutTip(potionId, 'apotheosis', recipeId)
      bulkTipMixing(potionId, 'apotheosis', recipeId)
    }
  }
  if (Platform.isLoaded('aquamirae')) {
    let aquaPotions = {
      spectral_potion: 'aquamirae:spectral_potion',
      potion_of_tenacity: 'aquamirae:potion_of_tenacity'
    }
    for (const [recipeId, potionId] of Object.entries(aquaPotions)) {
      spoutTip(potionId, 'aquamirae', recipeId)
      bulkTipMixing(potionId, 'aquamirae', recipeId)
    }
  }
})