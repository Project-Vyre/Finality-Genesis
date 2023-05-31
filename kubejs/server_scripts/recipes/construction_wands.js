ServerEvents.recipes(event => {
    event.remove({id: 'constructionwand:infinity_wand'})
    event.remove({id: 'constructionwand:diamond_wand'})
    event.remove({id: 'constructionwand:iron_wand'})
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
        D: 'extendedcrafting:elite_catalyst'
    }).id('finality:constructionwand_diamond')
    event.shaped('constructionwand:iron_wand',[
        '  D',
        ' S ',
        'S  '
    ], {
        S: 'minecraft:stick',
        D: 'extendedcrafting:basic_catalyst'
    }).id('finality:constructionwand_iron')
})