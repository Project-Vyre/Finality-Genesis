/**
 * @file Recipe schema for Create Crafts & Additions
 * @author ChiefArug <https://github.com/ChiefArug> Original script author
 */

// ignored: true

const $RecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.RecipeSchema')
const $RecipeComponentBuilder = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilder')

StartupEvents.recipeSchemaRegistry(event => {
  const Components = event.components
  const result = Components.get('outputItem')().key('result')
  const input = Components.get('inputItem')().key('input')

  const fluidOrTagInput = Components.get('inputFluid')().or(
    new $RecipeComponentBuilder(2)
      .add(Components.get('tag')({ registry: 'fluid' }).key('fluidTag'))
      .add(Components.get('intNumber')().key('amount'))
      .inputRole()).key('input')


  event.register('createaddition:rolling', new $RecipeSchema(
    result,
    input
  ))
  event.register('createaddition:charging', new $RecipeSchema(
    result,
    input,
    Components.get('intNumber')().key('energy'),
    Components.get('intNumber')().key('maxChargeRate').optional(2147483647)
  ))
  event.register('createaddition:liquid_burning', new $RecipeSchema(
    Components.get('intNumber')().key('burnTime'),
    fluidOrTagInput,
    Components.get('bool')().key('superheated').optional(false)
  ))
})