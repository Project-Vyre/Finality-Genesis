/** 
 * @file Ars Nouveau server handler
 * @version 1.20.1.g
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author Ryanite <> Modpack tester
 * @author wierdslo <> Modpack tester and Ars Nouveau wizard
 */

// requires: ars_nouveau
// requires: kubejs_create
// requires: lootjs
// ignored: false

const DRYGMY_UUID = '[I;1946194541,268914259,-2012236738,1743961897]'
const onlyDrygmy = builder => {
  builder.matchKiller(entity => {
    entity.nbt(`{UUID:${DRYGMY_UUID}}`)
  })
}

ServerEvents.recipes(event => {
  event.remove([
    { id: 'ars_nouveau:novice_spell_book' },
    { id: 'ars_nouveau:apprentice_spell_book_upgrade' },
    { id: 'ars_nouveau:archmage_spell_book_upgrade' }
  ])
  event.recipes.minecraft.crafting_shapeless('ars_nouveau:novice_spell_book', [
    'minecraft:book',
    'minecraft:iron_shovel',
    'minecraft:iron_pickaxe',
    'minecraft:iron_axe',
    'minecraft:iron_sword',
    'minecraft:amethyst_shard',
    'create:andesite_alloy',
    'minecraft:golden_carrot'
  ]).id('kubejs:novice_spell_book')
  event.custom({
    "type": "ars_nouveau:book_upgrade",
    "ingredients": [
      Ingredient.of('ars_nouveau:novice_spell_book').toJson(),
      Ingredient.of('minecraft:crying_obsidian').toJson(),
      Ingredient.of('create:rose_quartz').toJson(),
      Ingredient.of('create:rose_quartz').toJson(),
      Ingredient.of('create:rose_quartz').toJson(),
      Ingredient.of('minecraft:glowstone').toJson(),
      Ingredient.of('minecraft:glowstone').toJson(),
      Ingredient.of('create:blaze_cake').toJson(),
      Ingredient.of('create:blaze_cake').toJson()
    ],
    "result": Item.of('ars_nouveau:apprentice_spell_book').toJson()
  }).id('kubejs:apprentice_spell_book_upgrade')
  event.custom({
    "type": "ars_nouveau:book_upgrade",
    "ingredients": [
      Ingredient.of('ars_nouveau:apprentice_spell_book').toJson(),
      Ingredient.of('minecraft:nether_star').toJson(),
      Ingredient.of('ars_nouveau:wilden_tribute').toJson(),
      Ingredient.of('kubejs:null_matter').toJson(),
      Ingredient.of('kubejs:null_matter').toJson(),
      Ingredient.of('create:precision_mechanism').toJson(),
      Ingredient.of('create:precision_mechanism').toJson(),
      Ingredient.of('create:precision_mechanism').toJson(),
      Ingredient.of('minecraft:totem_of_undying').toJson()
    ],
    "result": Item.of('ars_nouveau:archmage_spell_book').toJson()
  }).id('kubejs:archmage_spell_book_upgrade')
  event.recipes.create.milling([
    '4x ars_nouveau:magebloom_fiber',
    Item.of('ars_nouveau:magebloom_fiber', 4).withChance(0.12)
  ], 'ars_nouveau:magebloom').processingTime(150).id('kubejs:milling/compat/ars_nouveau/magebloom_fiber')
  event.recipes.ars_nouveau.imbuement(
    'create:andesite_alloy', 1,
    'minecraft:andesite',
    250, [
    { item: 'minecraft:clock' },
    { item: '#forge:nuggets/iron' },
    { item: 'kubejs:netherite_nugget' }
  ]).id('kubejs:imbuement_andesite_alloy')
})

ServerEvents.tags('entity_type', event => {
  if (Platform.isLoaded('productivebees')) {
    event.add('ars_nouveau:drygmy_blacklist', [/productivebees:.+/])
  }
})

LootJS.modifiers(event => {
  onlyDrygmy(
    event.addEntityLootModifier("minecraft:wither").addLoot('minecraft:nether_star')
  )
})