/**
 * @file Recipe schema for Applied Energistics
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: ars_nouveau
// ignored: false

StartupEvents.recipeSchemaRegistry(event => {
  const Components = event.components

  //event.register('ars_nouveau:imbuement', new $RecipeSchema(
  //  Components.get('outputItem')().key('output'),
  //  Components.get('intNumber')().key('count'),
  //  Components.get('inputItem')().key('input'),
  //  Components.get('intNumber')().key('source'),
  //  Components.get('inputItemArray')().simpleMap({ item: 'item' }).key('pedestalItems').optional([])
  //))
  event.register('ars_nouveau:enchanting_apparatus', new $RecipeSchema(
    Components.get('outputItem')().key('output'),
    Components.get('inputItemArray')().key('pedestalItems'),
    Components.get('inputItemArray')().key('reagent'),
    Components.get('bool')().key('keepNbtOfReagent'),
    Components.get('intNumber')().key('sourceCost')
  ))
})