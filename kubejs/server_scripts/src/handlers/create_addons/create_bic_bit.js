// requires: create_bic_bit
// requires: kubejs_create
// ignored: false

/**
 * @file Server handler for the Create: Bitterballen addon.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

//console.log('Please ignore any recipe JSON parsing errors from Create: Bitterballen, thank you.')
console.log('Recipe errors related to Create: Bitterballen have been fixed as of 0.0.61')

ServerEvents.recipes(event => {
  event.remove([
    { id: 'create_bic_bit:frikandel_sandwich_deploying' },
    { id: 'create_bic_bit:kroket_sandwich_deploying' }
  ])
  event.recipes.minecraft.crafting_shaped('create_bic_bit:frikandel_sandwich', [
    'A',
    'B'
  ], {
    B: 'minecraft:bread',
    A: 'create_bic_bit:frikandel'
  }).id('create_bic_bit:frikandel_sandwich_recipe')
  event.recipes.minecraft.crafting_shaped('create_bic_bit:kroket_sandwich', [
    'A',
    'B'
  ], {
    B: 'minecraft:bread',
    A: 'create_bic_bit:kroket'
  }).id('create_bic_bit:kroket_sandwich_recipe')
  event.recipes.create.deploying('create_bic_bit:frikandel_sandwich', [
    'minecraft:bread',
    'create_bic_bit:frikandel'
  ]).id('create_bic_bit:frikandel_sandwich_deploying')
  event.recipes.create.deploying('create_bic_bit:kroket_sandwich', [
    'minecraft:bread',
    'create_bic_bit:kroket'
  ]).id('create_bic_bit:kroket_sandwich_deploying')
  // triple sandwich making
  event.recipes.minecraft.crafting_shaped('3x create_bic_bit:frikandel_sandwich', [
    'AAA',
    'BBB'
  ], {
    B: 'minecraft:bread',
    A: 'create_bic_bit:frikandel'
  }).id('finality:create_bic_bit/crafting/triple_frikandel_sandwich')
  event.recipes.minecraft.crafting_shaped('3x create_bic_bit:kroket_sandwich', [
    'AAA',
    'BBB'
  ], {
    B: 'minecraft:bread',
    A: 'create_bic_bit:kroket'
  }).id('finality:create_bic_bit/crafting/triple_kroket_sandwich')
  if (Platform.isLoaded('farmersdelight')) {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [Ingredient.of('minecraft:potato').toJson()],
      result: [Ingredient.of('create_bic_bit:raw_fries').toJson()],
      tool: Item.of('#forge:tools/knives').toJson()
    }).id('finality:create_bic_bit/cutting/raw_fries')
  }
  /**
   * 'kubejs:speculaas_singularity'
   * 'kubejs:stroopwafel_singularity'
   * 'kubejs:oliebollen_singularity'
   * 'kubejs:kroket_singularity'
   * 'kubejs:bitterballen_singularity'
   * 'kubejs:frikandel_singularity'
   * 'kubejs:fries_singularity'
   * 'kubejs:churros_singularity'
   * 'kubejs:stamppot_singularity'
   * 'kubejs:bic_bit_singularity'
   * @param {outputItem[]} results 
   * @param {InputItem} input 
   * @param {string} transitional 
   * @param {string} recipeId 
   */
  let seqSingularity = (results, input, transitional, recipeId) => {
    event.recipes.create.sequenced_assembly(results, 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying(transitional, [transitional, input]),
      event.recipes.create.pressing(transitional, transitional),
      event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(9).id(recipeId)
  }
  seqSingularity([
    Item.of('kubejs:speculaas_singularity').withChance(0.80),
    Item.of('create_bic_bit:speculaas', 9).withChance(0.25),
    Item.of('kubejs:errored_result').withChance(0.10)
  ],
    'create_bic_bit:speculaas',
    'kubejs:incomplete_speculaas_singularity',
    'finality:sequenced_assembly/speculaas_singularity'
  )
  seqSingularity([
    Item.of('kubejs:stroopwafel_singularity').withChance(0.80),
    Item.of('create_bic_bit:stroopwafel', 9).withChance(0.25),
    Item.of('kubejs:errored_result').withChance(0.10)
  ],
    'create_bic_bit:stroopwafel',
    'kubejs:incomplete_stroopwafel_singularity',
    'finality:sequenced_assembly/stroopwafel_singularity'
  )
  seqSingularity([
    Item.of('kubejs:oliebollen_singularity').withChance(0.80),
    Item.of('create_bic_bit:oliebollen', 9).withChance(0.25),
    Item.of('kubejs:errored_result').withChance(0.10)
  ],
    'create_bic_bit:oliebollen',
    'kubejs:incomplete_oliebollen_singularity',
    'finality:sequenced_assembly/oliebollen_singularity'
  )
  seqSingularity([
    Item.of('kubejs:kroket_singularity').withChance(0.80),
    Item.of('create_bic_bit:kroket', 9).withChance(0.25),
    Item.of('kubejs:errored_result').withChance(0.10)
  ],
    'create_bic_bit:kroket',
    'kubejs:incomplete_kroket_singularity',
    'finality:sequenced_assembly/kroket_singularity'
  )
  seqSingularity([
    Item.of('kubejs:bitterballen_singularity').withChance(0.80),
    Item.of('create_bic_bit:bitterballen', 9).withChance(0.25),
    Item.of('kubejs:errored_result').withChance(0.10)
  ],
    'create_bic_bit:bitterballen',
    'kubejs:incomplete_bitterballen_singularity',
    'finality:sequenced_assembly/bitterballen_singularity'
  )
  seqSingularity([
    Item.of('kubejs:frikandel_singularity').withChance(0.80),
    Item.of('create_bic_bit:frikandel', 9).withChance(0.25),
    Item.of('kubejs:errored_result').withChance(0.10)
  ],
    'create_bic_bit:frikandel',
    'kubejs:incomplete_frikandel_singularity',
    'finality:sequenced_assembly/frikandel_singularity'
  )
  seqSingularity([
    Item.of('kubejs:fries_singularity').withChance(0.80),
    Item.of('create_bic_bit:bitterballen', 9).withChance(0.25),
    Item.of('kubejs:errored_result').withChance(0.10)
  ],
    'create_bic_bit:fries',
    'kubejs:incomplete_fries_singularity',
    'finality:sequenced_assembly/fries_singularity'
  )
  seqSingularity([
    Item.of('kubejs:churros_singularity').withChance(0.80),
    Item.of('create_bic_bit:churros', 9).withChance(0.25),
    Item.of('kubejs:errored_result').withChance(0.10)
  ],
    'create_bic_bit:churros',
    'kubejs:incomplete_churros_singularity',
    'finality:sequenced_assembly/churros_singularity'
  )
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:stamppot_singularity').withChance(0.80),
    Item.of('kubejs:errored_result').withChance(0.10)
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.filling('kubejs:incomplete_stamppot_singularity', ['kubejs:incomplete_stamppot_singularity', Fluid.of('create_bic_bit:stamppot', 250)]),
    event.recipes.create.pressing('kubejs:incomplete_stamppot_singularity', 'kubejs:incomplete_stamppot_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_stamppot_singularity', 'kubejs:incomplete_stamppot_singularity')
  ]).transitionalItem('kubejs:incomplete_stamppot_singularity').loops(4).id('finality:sequenced_assembly/stamppot_singularity')
  event.recipes.create.mixing('kubejs:bic_bit_singularity', [
    'kubejs:speculaas_singularity',
    'kubejs:stroopwafel_singularity',
    'kubejs:oliebollen_singularity',
    'kubejs:kroket_singularity',
    'kubejs:bitterballen_singularity',
    'kubejs:frikandel_singularity',
    'kubejs:fries_singularity',
    'kubejs:churros_singularity',
    'kubejs:stamppot_singularity'
  ]).superheated().id('finality:mixing/bic_bit_singularity')
})