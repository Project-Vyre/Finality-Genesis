// requires: create

StartupEvents.registry('item', event => {
    event.create('kubejs:zinc_sheet')
        .texture('kubejs:item/zinc_sheet')
        .tag('forge:plates/zinc')
    event.create('kubejs:netherite_sheet')
        .texture('kubejs:item/netherite_sheet')
        .tag('forge:plates/netherite')
        .fireResistant(true)
})