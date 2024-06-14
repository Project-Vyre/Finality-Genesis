
/** 
 * @file Ars Nouveau server handler
 * @version omnia
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author Ryanite <> Modpack tester
 * @author wierdslo <> Modpack tester and Ars Nouveau wizard
 */

// requires: ars_nouveau
// requires: kubejs_create
// requires: twilightforest
// requires: mysticalagriculture
// ignored: true

ServerEvents.recipes(event => {
    event.remove([
        { id: 'ars_nouveau:novice_spell_book' },
        { id: 'ars_nouveau:apprentice_spell_book_upgrade' },
        { id: 'ars_nouveau:archmage_spell_book_upgrade' }
    ])
    event.shapeless('ars_nouveau:novice_spell_book', [
        'minecraft:book',
        'twilightforest:steeleaf_shovel',
        'twilightforest:steeleaf_pickaxe',
        'twilightforest:steeleaf_axe',
        'twilightforest:steeleaf_sword',
        'mysticalagriculture:inferium_essence',
        'minecraft:amethyst_shard',
        'create:andesite_alloy',
        'minecraft:golden_carrot'
    ]).id('finality:novice_spell_book')
    event.shapeless(ARS('apprentice_spell_book'), [
        'ars_nouveau:novice_spell_book',
        'minecraft:crying_obsidian',
        'create:rose_quartz',
        'create:rose_quartz',
        'create:rose_quartz',
        'minecraft:glowstone',
        'minecraft:glowstone',
        'create:blaze_cake',
        'create:blaze_cake'
    ]).id('finality:apprentice_spell_book_upgrade')
    event.shapeless('ars_nouveau:archmage_spell_book', [
        'ars_nouveau:apprentice_spell_book',
        'minecraft:nether_star',
        'ars_nouveau:wilden_tribute',
        'mysticalagriculture:tertium_essence',
        'mysticalagriculture:tertium_essence',
        'create:precision_mechanism',
        'create:precision_mechanism',
        'create:precision_mechanism',
        'minecraft:totem_of_undying'
    ]).id('finality:archmage_spell_book_upgrade')
})