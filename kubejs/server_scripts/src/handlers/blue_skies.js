// requires: blue_skies
// requires: kubejs_create

/**
 * @file Server handler for Blue Skies.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * To-Do List
 * 
 * - Fix Blue Skies tags
 */

let BSKIES_WOOD = ['bluebright', 'starlit', 'frostbright', 'lunar', 'dusk', 'maple', 'cherry', 'crystallized']

let BSKIES_ARMOR_VALID = [
  'pyrope',
  'aquite',
  'diopside',
  'charoite',
  'horizonite'
]

let BSKIES_TOOL_VALID = [
  'bluebright',
  'lunar',
  'dusk',
  'cherry',
  'turquoise_stone',
  'lunar_stone',
  'pyrope',
  'aquite',
  'diopside',
  'charoite',
  'horizonite'
]

let BSKIES_ORE_STONE_TYPES = {
  everdawn: 'blue_skies:lunar_cobblestone',
  everbright: 'blue_skies:turquoise_cobblestone'
}

let BSKIES_ORE = {
  diopside_ore: 'blue_skies:diopside_gem',
  pyrope_ore: 'blue_skies:pyrope_gem',
  aquite_ore: 'blue_skies:aquite',
  charoite_ore: 'blue_skies:charoite',
  moonstone_ore: 'blue_skies:moonstone',
}

ServerEvents.recipes(event => {
  /**
   * Blue Skies Create Crushing Compatibility Recipes
   */
  for (const [ore_type, raw_product] of Object.entries(BSKIES_ORE)) {
    for (const [stone_type, cobblestone_type] of Object.entries(BSKIES_ORE_STONE_TYPES)) {
      event.recipes.create.crushing([
        raw_product,
        Item.of(raw_product).withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of(cobblestone_type).withChance(0.12)
      ], `blue_skies:${stone_type}_${ore_type}`).processingTime(250).id(`finality:blue_skies/crushing/${stone_type}_${ore_type}`);
    }
  }
  /**
   * Everdawn Ores
   * 
   * Note to self: Use Lunar Cobblestone instead of Turquise Cobblestone for Everdawn ores.
   */
  // everdawn emerald ore
  event.recipes.create.crushing([
    'blue_skies:raw_horizonite',
    Item.of('blue_skies:raw_horizonite').withChance(0.75),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('blue_skies:lunar_cobblestone').withChance(0.12)
  ], 'blue_skies:horizonite_ore').processingTime(250).id('finality:blue_skies/crushing/everdawn_horizonite_ore');
  event.recipes.create.crushing([
    'minecraft:emerald',
    Item.of('minecraft:emerald').withChance(0.75),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('blue_skies:lunar_cobblestone').withChance(0.12)
  ], 'blue_skies:everdawn_emerald_ore').processingTime(250).id('finality:blue_skies/crushing/everdawn_emerald_ore');
  /**
   * Everbright Ores
   * 
   * Note to self: Use Turquise Cobblestone and not Lunar Cobblestone for Everbright ores.
   */
  // everbright exclusive ores
  event.recipes.create.crushing([
    'blue_skies:raw_falsite',
    Item.of('blue_skies:raw_falsite').withChance(0.75),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('blue_skies:turquoise_cobblestone').withChance(0.12)
  ], 'blue_skies:falsite_ore').processingTime(250).id('finality:blue_skies/crushing/falsite_ore');
  event.recipes.create.crushing([
    'blue_skies:raw_ventium',
    Item.of('blue_skies:raw_ventium').withChance(0.75),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('blue_skies:turquoise_cobblestone').withChance(0.12)
  ], 'blue_skies:ventium_ore').processingTime(250).id('finality:blue_skies/crushing/ventium_ore');
  // everbright emerald ore
  event.recipes.create.crushing([
    'minecraft:emerald',
    Item.of('minecraft:emerald').withChance(0.75),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('blue_skies:turquoise_cobblestone').withChance(0.12)
  ], 'blue_skies:everbright_emerald_ore').processingTime(250).id('finality:blue_skies/crushing/everbright_emerald_ore');
  /**
   * Everything else
   */
  for (let i = 0; i < BSKIES_WOOD.length; i++) {
    let wood = BSKIES_WOOD[i];
    event.recipes.create.cutting([
      `blue_skies:${wood}_pressure_plate`,
      `blue_skies:${wood}_slab`
    ], `blue_skies:${wood}_planks`).id(`kubejs:${wood}_pressure_plate_create_compat`)
  }
  if (Platform.isLoaded('aether')) {
    console.log('Aether detected! Applying repairing recipes for Blue Skies.')
    for (let i = 0; i < STANDARD_TOOLS_ALL.length; i++) {
      let standard = STANDARD_TOOLS_ALL[i];
      for (let i = 0; i < BSKIES_TOOL_VALID.length; i++) {
        let tool = BSKIES_TOOL_VALID[i];
        event.custom({
          'type': 'aether:repairing',
          'category': 'enchanting_repair',
          'ingredient': Ingredient.of(`blue_skies:${tool}_${standard}`).toJson(),
          'repairTime': 200
        }).id(`finality:blue_skies/aether/${tool}_${standard}_repairing`)
      }
    }
    for (let i = 0; i < STANDARD_ARMOR.length; i++) {
      let standard = STANDARD_ARMOR[i];
      for (let i = 0; i < BSKIES_ARMOR_VALID.length; i++) {
        let armor = BSKIES_ARMOR_VALID[i];
        event.custom({
          'type': 'aether:repairing',
          'category': 'enchanting_repair',
          'ingredient': Ingredient.of(`blue_skies:${armor}_${standard}`).toJson(),
          'repairTime': 200
        }).id(`finality:blue_skies/aether/${armor}_${standard}_repairing`)
      }
    }
  }
})

/**
let repairBlueSkiesTools = []
Ingredient.all.stacks.forEach(item => {
    if (item.isDamageableItem() && item.getMod() === 'blue_skies') {
        repairBlueSkiesTools.push(item)
    }
})
let repairableBlueSkiesToolIngredient = Ingredient.of(repairBlueSkiesTools)
// Work in progress...
        repairableBlueSkiesToolIngredient.forEach(tool => {
            event.custom({
                'type': 'aether:repairing',
                'category': 'enchanting_repair',
                'ingredient': tool.toJson(),
                'repairTime': 250
            }).id(`finality:blue_skies/aether/${tool}_repairing`)
        })
        const blue_skiesTools = (Item.of('@blue_skies').getTags().contains() == 'blue_skies:tools')
 */

/*
    WOODPLATES.forEach(wood => {
        event.stonecutting(`minecraft:${wood}_pressure_plate`, `${wood}_slab`).id(`minecraft:${wood}_pressure_plate`)
    })
    WOODPLATES.forEach(wood => {
        event.recipes.create.cutting([`minecraft:${wood}_pressure_plate`, `${wood}_slab`], `${wood}_planks`).id(`finality:${wood}_pressure_plate`)
    })
*/