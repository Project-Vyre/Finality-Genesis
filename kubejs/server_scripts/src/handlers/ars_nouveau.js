
/** 
 * @file Ars Nouveau server handler
 * @version 1.20.1.g
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author Ryanite <> Modpack tester
 * @author wierdslo <> Modpack tester and Ars Nouveau wizard
 */

// requires: ars_nouveau
// requires: kubejs_create
// ignored: false

ServerEvents.recipes(event => {
  event.remove([
      { id: 'ars_nouveau:novice_spell_book' },
      { id: 'ars_nouveau:apprentice_spell_book_upgrade' },
      { id: 'ars_nouveau:archmage_spell_book_upgrade' }
  ])
  if (!Platform.isLoaded('aether')) {
    event.shapeless('ars_nouveau:novice_spell_book', [
        'minecraft:book',
        'minecraft:diamond_shovel',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_axe',
        'minecraft:diamond_sword'
    ]).id('kubejs:fallback_novice_spell_book')
  }
  if (Platform.isLoaded('aether')) {
    event.shapeless('ars_nouveau:novice_spell_book', [
        'minecraft:book',
        'aether:zanite_shovel',
        'aether:zanite_pickaxe',
        'aether:zanite_axe',
        'aether:zanite_sword',
        'minecraft:amethyst_shard',
        'create:andesite_alloy',
        'minecraft:golden_carrot'
    ]).id('kubejs:novice_spell_book_from_zanite')
  }
  if (Platform.isLoaded('malum')) {
    event.shapeless('ars_nouveau:novice_spell_book', [
      'minecraft:book',
      'malum:soul_stained_steel_shovel',
      'malum:soul_stained_steel_pickaxe',
      'malum:soul_stained_steel_axe',
      'malum:soul_stained_steel_sword',
      'minecraft:amethyst_shard',
      'create:andesite_alloy',
      'minecraft:golden_carrot'
  ]).id('kubejs:novice_spell_book_from_zanite')
  }
  event.shapeless('ars_nouveau:apprentice_spell_book', [
      'ars_nouveau:novice_spell_book',
      'minecraft:crying_obsidian',
      'create:rose_quartz',
      'create:rose_quartz',
      'create:rose_quartz',
      'minecraft:glowstone',
      'minecraft:glowstone',
      'create:blaze_cake',
      'create:blaze_cake'
  ]).id('kubejs:apprentice_spell_book_upgrade')
  event.shapeless('ars_nouveau:archmage_spell_book', [
      'ars_nouveau:apprentice_spell_book',
      'minecraft:nether_star',
      'ars_nouveau:wilden_tribute',
      'kubejs:null_matter',
      'kubejs:null_matter',
      'create:precision_mechanism',
      'create:precision_mechanism',
      'create:precision_mechanism',
      'minecraft:totem_of_undying'
  ]).id('kubejs:archmage_spell_book_upgrade')
  event.recipes.create.milling([
    '4x ars_nouveau:magebloom_fiber',
    Item.of('ars_nouveau:magebloom_fiber', 4).withChance(0.12)
  ], 'ars_nouveau:magebloom').processingTime(150).id('kubejs:milling/compat/ars_nouveau/magebloom_fiber')
})