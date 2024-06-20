// requires: upgradednetherite
// requires: upgradednetherite_ultimate
// requires: upgradednetherite_creative
// requires: kubejs_create

/**
 * @file Server handler for the Upgraded Netherite mods.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let UPNETHERITE_TOOLS = ['sword', 'shovel', 'pickaxe', 'axe']
let UPNETHERITE_ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']
let UPNETHERITE_UPGRADES = [
  'gold',
  'fire',
  'ender',
  'water',
  'wither',
  'poison',
  'phantom',
  'feather',
]
let T2UPNETHERITE_UPGRADES = [
  'corrupt',
  'echo'
]

function netheriteUpgradedRepair(event, item, repairmaterial, recipeid) {
  event.recipes.minecraft.crafting_shapeless(Ingredient.of(item), [
    Ingredient.of(item),
    repairmaterial
  ]).modifyResult((grid, result) => {
    let repairable = grid.find(Ingredient.of(item))
    if (repairable.damaged) {
      repairable.damageValue = 0
      return repairable
    }
  }).id(recipeid);
}

ServerEvents.recipes(event => {
  event.remove({ id: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot' })
  // figure out how to setup a shapeless recipe for later
  for (let i = 0; i < UPNETHERITE_UPGRADES.length; i++) {
    let upgrade = UPNETHERITE_UPGRADES[i];
    netheriteUpgradedRepair(event,
      `upgradednetherite:${upgrade}_upgraded_netherite_bow`,
      'minecraft:string',
      `finality:${upgrade}_upgraded_netherite_bow_repair`
    )
    netheriteUpgradedRepair(event,
      `upgradednetherite:${upgrade}_upgraded_netherite_crossbow`,
      'minecraft:string',
      `finality:${upgrade}_upgraded_netherite_crossbow_repair`
    )
  }
  netheriteUpgradedRepair(event,
    'upgradednetherite_ultimate:ultimate_upgraded_netherite_bow',
    'minecraft:string',
    'finality:ultimate_upgraded_netherite_bow_repair'
  )
  netheriteUpgradedRepair(event,
    'upgradednetherite_ultimate:ultimate_upgraded_netherite_crossbow',
    'minecraft:string',
    'finality:ultimate_upgraded_netherite_crossbow_repair'
  )
  event.recipes.minecraft.crafting_shapeless(Ingredient.of('upgradednetherite_ultimate:ultimate_upgraded_netherite_crossbow'), [
    Ingredient.of('upgradednetherite_ultimate:ultimate_upgraded_netherite_crossbow'),
    'minecraft:string'
  ]).modifyResult((grid, result) => {
    let repairable = grid.find(Ingredient.of('upgradednetherite_ultimate:ultimate_upgraded_netherite_crossbow'))
    if (repairable.damaged) {
      repairable.damageValue = 0
      return repairable
    }
  }).id('finality:upgradednetherite_ultimate/ultimate_upgraded_crossbow_repair')
  event.shapeless('upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot', [
    'upgradednetherite:gold_upgraded_netherite_ingot',
    'upgradednetherite:fire_upgraded_netherite_ingot',
    'upgradednetherite:water_upgraded_netherite_ingot',
    'upgradednetherite:ender_upgraded_netherite_ingot',
    'extendedcrafting:crystaltine_ingot',
    'upgradednetherite:poison_upgraded_netherite_ingot',
    'upgradednetherite:wither_upgraded_netherite_ingot',
    'upgradednetherite:phantom_upgraded_netherite_ingot',
    'upgradednetherite:feather_upgraded_netherite_ingot'
  ]).id('finality:ultimerite_ingot')
  event.smithing(
    'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
    'minecraft:netherite_ingot',
    'upgradednetherite_ultimate:ultimate_essence'
  ).id('finality:ultimerite_ingot_from_netherite_ingot')
  for (let i = 0; i < UPNETHERITE_UPGRADES.length; i++) {
    let upgrade = UPNETHERITE_UPGRADES[i];
    event.smithing(
      'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
      `upgradednetherite:${upgrade}_upgraded_netherite_ingot`,
      'upgradednetherite_ultimate:ultimate_essence'
    ).id(`finality:ultimerite_ingot_from_${upgrade}_upgraded_netherite_ingot`)
  }
  // creativerite assembly
  event.recipes.create.sequenced_assembly([
    Item.of('upgradednetherite_creative:creative_upgraded_netherite_ingot').withChance(25.0),
    Item.of('extendedcrafting:ultimate_singularity').withChance(25.0),
    Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:netherite"}').withChance(25.0),
    Item.of('minecraft:netherite_ingot', 8).withChance(25.0),
    'mysticalagriculture:prosperity_shard',
    'minecraft:netherite_block',
    'minecraft:ancient_debris'
  ], 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot', [
    event.recipes.create.filling('extendedcrafting:the_ultimate_ingot', ['extendedcrafting:the_ultimate_ingot', Fluid.of('minecraft:lava', 500)]),
    event.recipes.create.deploying('extendedcrafting:the_ultimate_ingot', ['extendedcrafting:the_ultimate_ingot', 'kubejs:chain_command_block']).keepHeldItem(),
    event.recipes.create.pressing('extendedcrafting:the_ultimate_ingot', 'extendedcrafting:the_ultimate_ingot'),
    event.recipes.create.pressing('extendedcrafting:the_ultimate_ingot', 'extendedcrafting:the_ultimate_ingot'),
    event.recipes.create.pressing('extendedcrafting:the_ultimate_ingot', 'extendedcrafting:the_ultimate_ingot')
  ]).transitionalItem('extendedcrafting:the_ultimate_ingot').loops(16).id('finality:creativerite_ingot')
  // creativerite smithing
  // output left, inputs right
  // creativerite armor
  for (let i = 0; i < UPNETHERITE_ARMOR.length; i++) {
    let armor = UPNETHERITE_ARMOR[i];
    event.smithing(`upgradednetherite_creative:creative_upgraded_netherite_${armor}`, `upgradednetherite_ultimate:ultimate_upgraded_netherite_${armor}`, 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id(`finality:creativerite_${armor}`)
  }
  // creativerite tools
  for (let i = 0; i < UPNETHERITE_TOOLS.length; i++) {
    let tool = UPNETHERITE_TOOLS[i];
    event.smithing(`upgradednetherite_creative:creative_upgraded_netherite_${tool}`, `upgradednetherite_ultimate:ultimate_upgraded_netherite_${tool}`, 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id(`finality:creativerite_${tool}`)
  }
  event.smithing('upgradedtools:creative_upgraded_netherite_hammer', 'upgradedtools:ultimate_upgraded_netherite_hammer', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_hammer')
  event.smithing('upgradednetherite_creative:creative_upgraded_netherite_bow', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_bow', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_bow')
  event.smithing('upgradednetherite_creative:creative_upgraded_netherite_crossbow', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_crossbow', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_crossbow')
  event.smithing('upgradednetherite_items:creative_upgraded_netherite_totem', 'upgradednetherite_items:ultimate_upgraded_netherite_totem', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_totem')
  event.smithing('upgradednetherite_creative:creative_upgraded_netherite_horse_armor', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_horse_armor', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_horse_armor')
  event.smithing('upgradednetherite_creative:creative_upgraded_netherite_shield', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_shield', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_shield')
  for (let i = 0; i < UPNETHERITE_UPGRADES.length; i++) {
    let upgrade = UPNETHERITE_UPGRADES[i];
    event.forEachRecipe({
      type: 'minecraft:crafting_shapeless',
      output: 'upgradednetherite:' + upgrade + '_essence'
    }, recipe => {
      let result = recipe.originalRecipeResult
      let ingredients = recipe.originalRecipeIngredients
      event.recipes.kubejs.shapeless(
        result,
        ingredients
      ).id(recipe.getId() + '_alternate').replaceInput('minecraft:dragon_breath', 'minecraft:crying_obsidian')
    })
  }
  for (let i = 0; i < T2UPNETHERITE_UPGRADES.length; i++) {
    let upgrade = T2UPNETHERITE_UPGRADES[i];
    event.forEachRecipe({
      type: 'minecraft:crafting_shapeless',
      output: 'upgradednetherite:' + upgrade + '_essence'
    }, recipe => {
      let result = recipe.originalRecipeResult
      let ingredients = recipe.originalRecipeIngredients
      event.recipes.kubejs.shapeless(
        result,
        ingredients
      ).id(recipe.getId() + '_alternate').replaceInput('minecraft:dragon_breath', 'minecraft:crying_obsidian')
    })
  }
  /*
      event.replaceInput({
          type: 'minecraft:crafting_shapeless',
          output: 'upgradednetherite:' + upgrade + '_essence'
      }, 'minecraft:dragon_breath', 'minecraft:echo_shard')
  */
})