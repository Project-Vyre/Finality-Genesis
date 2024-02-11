// requires: createcafe
// requires: kubejs_create

/**
 * @file Server handler for Create Cafe.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

console.log('Uhhmmm... Create Cafe, no one wants to drink non-water fluids.')
console.log('No sea oil, bioethanol or cryo fuel in our drinks... thank you.')

/*
'ad_astra:oil'
'ad_astra:fuel'
'ad_astra:cryo_fuel'
'createaddition:seed_oil'
'createaddition:bioethanol'
'sliceanddice:fertilizer'
*/

ServerEvents.tags('item', event => {
  event.add('forge:crops/coconut', [
    'ecologics:coconut_slice'
  ])
})

ServerEvents.recipes(event => {
  /**
   * Create Cafe syrup mixing.
   * @param {Internal.OutputFluid} outputSyrup Already has createcafe ID appended
   * @param {(Internal.InputFluid | InputItem) []} ingredients 
   */
  let syrupMixing = (outputSyrup, ingredients) => {
    event.recipes.create.mixing(
      Fluid.of(`createcafe:${outputSyrup}`, 1000),
      ingredients
    ).heated().id(`createcafe:mixing/syrups/${outputSyrup}_mixing`)
  }
  if (Ingredient.of('#forge:fruits/banana').stacks.size() > 0) {
    syrupMixing('banana_syrup', [
      '#forge:fruits/banana',
      Fluid.of('minecraft:water', 250),
      Fluid.of('createcafe:melted_sugar', 750)
    ])
  }
  event.recipes.create.mixing(Fluid.of('createcafe:caramel_syrup', 1000), [
    Fluid.of('minecraft:milk', 250),
    Fluid.of('createcafe:melted_sugar', 750)
  ]).heated().id('createcafe:mixing/syrups/caramel_syrup_mixing')
  /**
   * WHY DOES THIS NEED A BASIN IN THE FIRST PLACE??
   * Like... do you need a bowl or baking tray to flatten something?
   */
  event.recipes.create.pressing(
    'createcafe:oreo_half_raw',
    'createcafe:oreo_dough'
  ).id('finality:createcafe/pressed_oreo')
  if (Ingredient.of('#forge:crops/coconut').stacks.size() > 0) {
    syrupMixing('coconut_syrup', [
      '#forge:crops/coconut',
      Fluid.of('minecraft:water', 250),
      Fluid.of('createcafe:melted_sugar', 750)
    ])
  }
  if (Platform.isLoaded('neapolitan')) {
    syrupMixing('mint_syrup', [
      'neapolitan:mint_leaves',
      Fluid.of('minecraft:water', 250),
      Fluid.of('createcafe:melted_sugar', 750)
    ])
    event.recipes.create.mixing(Fluid.of('createcafe:vanilla_syrup', 1000), [
      'neapolitan:dried_vanilla_pods',
      Fluid.of('minecraft:water', 250),
      Fluid.of('createcafe:melted_sugar', 750)
    ]).heated().id('createcafe:mixing/syrups/vanilla_syrup_mixing2')
  }
  if (Ingredient.of('#forge:fruits/raspberry').stacks.size() > 0) {
    syrupMixing('raspberry_syrup', [
      '#forge:fruits/raspberry',
      Fluid.of('minecraft:water', 250),
      Fluid.of('createcafe:melted_sugar', 750)
    ])
  }
  if (Ingredient.of('#forge:fruits/strawberry').stacks.size() > 0) {
    syrupMixing('strawberry_syrup', [
      '#forge:fruits/strawberry',
      Fluid.of('minecraft:water', 250),
      Fluid.of('createcafe:melted_sugar', 750)
    ])
  }
  if (Ingredient.of('#forge:fruits/vanillabean').stacks.size() > 0) {
    syrupMixing('vanilla_syrup', [
      '#forge:fruits/vanillabean',
      Fluid.of('minecraft:water', 250),
      Fluid.of('createcafe:melted_sugar', 750)
    ])
  }
  if (Platform.isLoaded('croptopia')) {
    event.recipes.create.mixing(Fluid.of('createcafe:vanilla_syrup'), [
      'croptopia:vanilla',
      Fluid.of('minecraft:water', 250),
      Fluid.of('createcafe:melted_sugar', 750)
    ]).id('createcafe:mixing/syrups/vanilla_syrup_mixing3')
  }
})