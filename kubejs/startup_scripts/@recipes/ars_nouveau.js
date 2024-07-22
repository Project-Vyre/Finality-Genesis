/**
 * @file Recipe schema for Ars Nouveau
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author ChiefArug <https://github.com/ChiefArug> For mapIn
 * @author pietro-lopes <https://github.com/pietro-lopes> AKA Uncandango in the KubeJS Discord. Wrote RecipeComponentBuilder for the Imbuement recipe.
 */

// requires: ars_nouveau
// ignored: false

StartupEvents.recipeSchemaRegistry(event => {
  const Components = event.components

  const Component = (/** @type {keyof Special.RecipeComponents} */ string, args) => event.components.get(string)(args)
  /** @return {Internal.RecipeComponentBuilder} */
  const builder = (/** @type {Internal.RecipeKey[]} */ keys) => Component('bool').builder(keys)

  let pedestalComponent = builder(Component('inputItem').key('item')).inputRole().mapIn(original => {
    if (original instanceof $JsonObject) return original
    if (original.item != null) { return original }
    return { item: original }
  }).asArray()

  let pedestalKey = pedestalComponent.key('pedestalItems').optional([]).alwaysWrite()

  let outputKey = Component('registryObject', { registry: 'item' }).key('output')
  let countKey = Component('intNumber').key('count')
  let inputKey = Component('inputItem').key('input')
  let sourceKey = Component('intNumber').key('source')

  event
    .namespace('ars_nouveau')
    .register('imbuement', new $RecipeSchema(outputKey, countKey, inputKey, sourceKey, pedestalKey))
  //event.register('ars_nouveau:imbuement', new $RecipeSchema(
  //  Components.get('registryObject')({ registry: 'item' }).key('output'),
  //  Components.get('intNumber')().key('count'),
  //  Components.get('inputItem')().key('input'),
  //  Components.get('intNumber')().key('source'),
  //  new $RecipeComponentBuilder(1).add(Components.get('inputItem')().key('item')).asArray().key('pedestalItems').optional([]).alwaysWrite()
  //))
  event.register('ars_nouveau:enchanting_apparatus', new $RecipeSchema(
    Components.get('outputItem')().key('output'),
    Components.get('inputItemArray')().key('pedestalItems'),
    Components.get('inputItemArray')().key('reagent'),
    Components.get('bool')().key('keepNbtOfReagent'),
    Components.get('intNumber')().key('sourceCost')
  ))
})