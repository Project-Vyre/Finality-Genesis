/**
 * @file Material items generation.
 */

StartupEvents.registry('item', event => {
  event.create('kubejs:netherite_nugget')
    .texture('kubejs:item/netherite_nugget')
    .tag('forge:nuggets/netherite')
    .fireResistant(true)
})