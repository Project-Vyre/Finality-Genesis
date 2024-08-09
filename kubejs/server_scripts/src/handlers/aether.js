// requires: aether
// requires: kubejs_create
// requires: lootjs

/**
 * @file Server handler for the Aether mod.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * 
 * @param {*} event 
 * @param {Item} output 
 * @param {Item} input 
 * @param {int} cookingtime 
 * @param {int} experience 
 * @param {string} id 
 */

function aetherEnchantingBlocks(event, output, input, cookingtime, experience, recipeid) {
  event.custom({
    'type': 'aether:enchanting',
    'category': 'enchanting_blocks',
    'cookingtime': cookingtime,
    'experience': experience,
    'ingredient': input,
    'result': output
  }).id(recipeid)
}

/**
 * 
 * @param {*} event 
 * @param {Item} input 
 * @param {int} repairtime 
 * @param {string} id 
 */

function aetherRepairing(event, input, repairtime, id) {
  event.custom({
    'type': 'aether:repairing',
    'category': 'enchanting_repair',
    'ingredient': input,
    'repairTime': repairtime
  }).id(`finality:aether/${id}_repairing`)
}

/*
If skyroot planks and skyroot sticks are tagged, then the Skyroot tool recipes will conflict with
Minecraft's regular wooden tools, though Aether's recipes do take priority when Polymorph is 
active.

let aetherRecipeIds = [
    'aether:aether_saddle',
    'aether:skyroot_grindstone', // duplicate of the vanilla grindstone recipe
    'aether:skyroot_grindstone_holystone_slab', // duplicate of the vanilla grindstone recipe
    'aether:skyroot_jukebox', // duplicate of the vanilla jukebox recipe which uses the minecraft:planks tag.
    'aether:skyroot_tripwire_hook', // duplicate of the vanilla tripwire hook recipe.
    'aether:skyroot_iron_vanilla_shield', // duplicate of the vanilla shield recipe.
    'aether:skyroot_zenite_vanilla_shield', // duplicate of the tagged recipe that already uses zanite.
    'aether:skyroot_fletching_table', // duplicate of the vanilla fletching table recipe.
    'aether:skyroot_barrel', // duplicate of the vanilla barrel recipe.
    'aether:skyroot_piston', // duplicate of the vanilla piston recipe.
    'aether:skyroot_loom', // duplicate of the vanilla loom recipe.
    'aether:skyroot_beehive', // duplicate of the vanilla beehive recipe.
    'aether:skyroot_cartography_table', // duplicate of the vanilla cartography table recipe.
    'aether:skyroot_chest', // duplicate of the vanilla chest recipe.
]
    for (let i = 0; i < aetherRecipeIds.length; i++) {
        let element = aetherRecipeIds[i];
        event.remove([
            { id: element }
        ])
    }
*/

let dungeon_loot_duplication = {
  valkyrie_lance: 'aether:valkyrie_lance',
  valkyrie_shovel: 'aether:valkyrie_shovel',
  valkyrie_pickaxe: 'aether:valkyrie_pickaxe',
  valkyrie_axe: 'aether:valkyrie_axe',
  valkyrie_hoe: 'aether:valkyrie_hoe',
  candy_cane_sword: 'aether:candy_cane_sword',
  holy_sword: 'aether:holy_sword',
  vampire_blade: 'aether:vampire_blade',
  lightning_sword: 'aether:lightning_sword',
  lightning_knife: 'aether:lightning_knife',
  flaming_sword: 'aether:flaming_sword',
  phoenix_bow: 'aether:phoenix_bow',
  pig_slayer: 'aether:pig_slayer',
  hammer_of_kingbdogz: 'aether:hammer_of_kingbdogz',
  cloud_staff: 'aether:cloud_staff'
}

ServerEvents.recipes(event => {
  for (let [recipeId, itemId] of Object.entries(dungeon_loot_duplication)) {
    event.recipes.create.deploying(Item.of(itemId, 2), [
      itemId,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/aether/' + recipeId + '_duplication')
  }
  event.remove([
    { id: 'aether:aether_saddle' },
    { id: 'aether:skyroot_piston' }
  ])
  event.recipes.minecraft.crafting_shaped('minecraft:piston', [
    'SSS',
    'CEC',
    'CRC'
  ], {
    S: 'aether:skyroot_planks',
    C: 'minecraft:cobblestone',
    E: 'create:piston_extension_pole',
    R: 'minecraft:redstone'
  }).id('kubejs:aether/skyroot_piston')
  aetherEnchantingBlocks(event,
    'aether:enchanted_gravitite',
    Ingredient.of('aether:gravitite_ore').toJson(),
    500,
    1.0,
    'aether:enchanted_gravitite_enchanting'
  )
  aetherEnchantingBlocks(event,
    'aether:holystone',
    Ingredient.of('#forge:stone').toJson(),
    200,
    0,
    'finality:aether/stone_enchanting'
  )
  aetherEnchantingBlocks(event,
    'aether:icestone',
    Ingredient.of('minecraft:blue_ice').toJson(),
    200,
    0,
    'finality:aether/icestone_conversion'
  )
  aetherEnchantingBlocks(event,
    'aether:aether_dirt',
    Ingredient.of('minecraft:dirt').toJson(),
    200,
    0,
    'finality:aether/aether_dirt_conversion'
  )
  event.recipes.create.item_application('aether:quicksoil', [
    'minecraft:dirt',
    'aether:ambrosium_shard'
  ]).id('finality:aether/quicksoil_conversion')
  event.shapeless('aether:blue_gummy_swet', [
    '2x aether:swet_ball',
    'minecraft:sugar'
  ]).id('finality:aether/blue_gummy_swet')
  event.custom({
    'type': 'aether:enchanting',
    'category': 'enchanting_food',
    'cookingtime': 250,
    'experience': 0.35,
    'ingredient': { 'item': 'aether:blue_gummy_swet' },
    'result': 'aether:golden_gummy_swet'
  }).id('finality:aether/golden_gummy_swet')
  event.recipes.create.crushing([
    '2x aether:ambrosium_shard',
    Item.of('aether:ambrosium_shard').withChance(0.75),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('aether:holystone').withChance(0.25)
  ], 'aether:ambrosium_ore').processingTime(250).id('finality:create/ambrosium_ore_crushing')
  event.recipes.create.crushing([
    '2x aether:zanite_gemstone',
    Item.of('aether:zanite_gemstone').withChance(0.75),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('aether:holystone').withChance(0.25)
  ], 'aether:zanite_ore').processingTime(250).id('finality:create/zanite_ore_crushing')
  for (let i = 0; i < STANDARD_ARMOR.length; i++) {
    let piece = STANDARD_ARMOR[i];
    aetherRepairing(event,
      Item.of(`aether:neptune_${piece}`).toJson(),
      600,
      `neptune_${piece}`
    )
    aetherRepairing(event,
      Item.of(`aether:phoenix_${piece}`).toJson(),
      600,
      `phoenix_${piece}`
    )
    aetherRepairing(event,
      Item.of(`aether:obsidian_${piece}`).toJson(),
      600,
      `obsidian_${piece}`
    )
  }
  aetherRepairing(event,
    Item.of('aether:obsidian_gloves').toJson(),
    600,
    'obsidian_gloves'
  )
  event.recipes.create.compacting([
    Item.of('aether:ambrosium_ore').withChance(0.25),
    Item.of('aether:zanite_ore').withChance(0.25),
    Item.of('aether:gravitite_ore').withChance(0.25)
  ], [
    '9x aether:holystone',
    Fluid.of('kubejs:condensed_universal_entropy', 500)
  ]).id('finality:aether/holystone_ore_renewal')
  if (Platform.isLoaded('bhc')) {
    event.shapeless('aether:life_shard', [
      'bhc:red_heart',
      'minecraft:amethyst_shard'
    ]).id('finality:aether/life_shard')
  }
})

ServerEvents.tags('item', event => {
  event.add('forge:slimeballs', [
    'aether:swet_ball'
  ])
  event.add('kubejs:slabs/stone', [
    'aether:holystone_slab',
    'aether:icestone_slab'
  ])
  if (Platform.isLoaded('bookshelf')) {
    event.add('bookshelf:slime_balls', [
      'aether:swet_ball'
    ])
  }
  if (Platform.isLoaded('cataclysm')) {
    event.add('cataclysm:sticky_item', [
      'aether:swet_ball'
    ])
  }
  if (Platform.isLoaded('gag')) {
    event.add('gag:labeling_tool_charges', [
      'aether:swet_ball'
    ])
  }
})

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'aether:altar',
    'aether:freezer',
    'aether:incubator'
  ])
  if (Platform.isLoaded('aether') && Platform.isLoaded('blockrunner')) {
    event.add('blockrunner:very_quick_blocks', [
      'aether:quicksoil',
      'aether:quicksoil_glass'
    ])
  }
})

LootJS.modifiers(event => {
  event.addBlockLootModifier('aether:ambrosium_ore')
    .randomChance(0.2).addLoot('aether:ambrosium_shard')
  event.addBlockLootModifier('aether:zanite_ore')
    .randomChance(0.12).addLoot('aether:zanite_gemstone')
  event.addEntityLootModifier('aether:blue_swet')
    .randomChance(0.1).addLoot('aether:blue_gummy_swet')
  event.addEntityLootModifier('aether:golden_swet')
    .randomChance(0.1).addLoot('aether:golden_gummy_swet')
})