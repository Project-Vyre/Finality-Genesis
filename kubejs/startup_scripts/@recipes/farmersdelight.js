/**
 * @file Recipe schema for Farmer's Delight.
 */

// requires: farmersdelight
// ignored: true

StartupEvents.recipeSchemaRegistry(event => {
  const Components = event.components

  event.register('farmersdelight:cutting', new $RecipeSchema(
    Components.get('outputItemArray')().key('result'),
    Components.get('inputItemArray')().key('ingredients'),
    Components.get('inputItem')().or(
      new $RecipeComponentBuilder(2)
        .add(Components.get('nonBlankString')().key('type'))
        .add(Components.get('nonBlankString')().key('action'))
        .inputRole()
    ).key('tool'),
    Components.get('nonBlankString')().key('sound').defaultOptional()
  ))
  event.register('farmersdelight:cooking', new $RecipeSchema(
    Components.get('outputItem')().key('result'),
    Components.get('inputItemArray')().key('ingredients'),
    Components.get('inputItem')().key('container').defaultOptional(),
    Components.get('intNumber')().key('cookingtime').optional(200),
    Components.get('floatNumber')().key('experience').optional(1.0),
    Components.get('nonBlankString')().key('recipe_book_tab').defaultOptional()
  ))
})