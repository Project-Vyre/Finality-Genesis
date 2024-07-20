/**
 * @file Recipe schema for Create Crafts & Additions
 * @author ChiefArug <https://github.com/ChiefArug> Original script author
 */

// requires: createaddition
// ignored: true

StartupEvents.recipeSchemaRegistry(event => {
  const Components = event.components

  event.register('createaddition:rolling', new $RecipeSchema(
    Components.get('outputItem')().key('result'),
    Components.get('inputItem')().key('input')
  ))
  event.register('createaddition:charging', new $RecipeSchema(
    Components.get('outputItem')().key('result'),
    Components.get('inputItem')().key('input'),
    Components.get('intNumber')().key('energy'),
    Components.get('intNumber')().key('maxChargeRate').optional(2147483647)
  ))
  event.register('createaddition:liquid_burning', new $RecipeSchema(
    Components.get('intNumber')().key('burnTime'),
    Components.get('inputFluid')().or(
      new $RecipeComponentBuilder(2)
        .add(Components.get('tag')({ registry: 'fluid' }).key('fluidTag'))
        .add(Components.get('intNumber')().key('amount'))
        .inputRole()
    ).key('input'),
    Components.get('bool')().key('superheated').optional(false)
  ))
})