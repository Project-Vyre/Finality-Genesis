ServerEvents.recipes(event => {
    event.remove({id: 'constructionwand:infinity_wand'})
    event.remove({id: 'constructionwand:diamond_wand'})
    event.remove({id: 'constructionwand:iron_wand'})
    event.recipes.createFilling('kubejs:construction_core_iron', ['minecraft:iron_ingot', Fluid.of('kubejs:condensed_universal_entropy', 250)]).id('finality:construction_iron_activation')
    event.recipes.createFilling('kubejs:construction_core_diamond', ['minecraft:diamond', Fluid.of('kubejs:condensed_universal_entropy', 250)]).id('finality:construction_diamond_activation')
    event.shaped('constructionwand:infinity_wand', [
        '  C',
        ' S ',
        'S  '
    ], {
        S: 'minecraft:stick',
        C: 'minecraft:end_crystal'
    }).id('finality:constructionwand_infinity')
    event.shaped('constructionwand:diamond_wand',[
        '  D',
        ' S ',
        'S  '
    ], {
        S: 'minecraft:stick',
        D: 'kubejs:construction_core_iron'
    }).id('finality:constructionwand_diamond')
    event.shaped('constructionwand:iron_wand',[
        '  D',
        ' S ',
        'S  '
    ], {
        S: 'minecraft:stick',
        D: 'kubejs:construction_core_diamond'
    }).id('finality:constructionwand_iron')
})