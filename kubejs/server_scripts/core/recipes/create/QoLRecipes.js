// priority: 0
// requires: kubejs_create

/**
 * @file Quality of life recipes.
 */

ServerEvents.recipes(event => {
    /**
     * BLASTING
     * 
     * Notice: Blasting recipes are automatically added by Create!
     */
    event.recipes.minecraft.blasting('create:zinc_block', 'create:raw_zinc_block').id('finality:blasting/raw_zinc_block')
    event.recipes.minecraft.blasting('minecraft:skeleton_skull', 'minecraft:zombie_head').id('finality:blasting/zombie_head_flesh_burning')
    /**
     * CAMPFIRE COOKING / SMOKING
     * 
     * Notice: Smoking recipes are automatically added by Create!
     */
    /**
     * COMPACTING
     */
    event.recipes.create.compacting([
        'minecraft:sponge',
        Fluid.of('minecraft:water', 1000)
    ], 'minecraft:wet_sponge').id('finality:compacting/sponge_squeezing')
    event.recipes.create.compacting('minecraft:basalt', [
        'minecraft:blue_ice',
        Fluid.of('minecraft:lava', 500)
    ]).id('finality:compacting/basalt')
    event.recipes.create.compacting('minecraft:tuff', [
        '9x minecraft:gravel',
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:compacting/renew_tuff')
    event.recipes.create.compacting('minecraft:tuff', [
        '9x minecraft:deepslate',
        Fluid.of('minecraft:lava', 250)
    ]).heated().id('finality:compacting/renew_deepslate_tuff')
    event.recipes.create.compacting('minecraft:calcite', [
        'minecraft:amethyst_shard',
        'minecraft:cobbled_deepslate',
        'minecraft:bone_meal'
    ]).heated().id('finality:compacting/renew_calcite')
    event.recipes.create.compacting('minecraft:ice', '9x minecraft:snow_block').id('finality:snow_compacting')
    /*
    Watch me question myself later after writing this recipe 
    for making Lapis Lazuli automatable with just Create...
    */
    event.recipes.create.compacting([
        'minecraft:lapis_lazuli',
        Item.of('minecraft:lapis_ore').withChance(0.12),
        Item.of('minecraft:deepslate_lapis_ore').withChance(0.06),
    ], [
        Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:awkward"}'),
        Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:mundane"}'),
        Fluid.of('kubejs:condensed_universal_entropy', 50),
        ['minecraft:stone', 'minecraft:cobblestone', 'minecraft:deepslate', 'minecraft:cobbled_deepslate'],
        ['minecraft:poisonous_potato', 'minecraft:gunpowder'],
        'salt:salt',
    ]).heated().id('finality:compacting/artificial_lapis_lazuli')
    event.recipes.create.compacting('minecraft:obsidian', [
        Fluid.water(1000),
        Fluid.lava(1000)
    ]).id('finality:compacting/cursed_obsidian')
    /**
     * CRUSHING
     */
    event.recipes.create.crushing([
        'minecraft:clay_ball',
        Item.of('minecraft:clay_ball', 2).withChance(0.25),
        Item.of('create:copper_nugget').withChance(0.12),
        Item.of('minecraft:iron_nugget').withChance(0.12),
        Item.of('create:experience_nugget').withChance(0.25)
    ], 'minecraft:dripstone_block').processingTime(250).id('finality:crushing/dripstone')

    event.recipes.create.crushing([
        Item.of('create:copper_nugget').withChance(0.05),
        Item.of('minecraft:gunpowder').withChance(0.10)
    ], 'minecraft:basalt').processingTime(250).id('finality:crushing/basalt')

    event.remove({ id: 'create:crushing/netherrack' })
    event.recipes.create.crushing([
        'create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.50),
        Item.of('minecraft:netherite_scrap').withChance(0.0002)
    ], 'minecraft:netherrack').processingTime(250).id('finality:crushing/netherrack')

    event.recipes.create.crushing([
        Item.of('minecraft:gold_nugget', 5).withChance(0.25),
        Item.of('create:experience_nugget', 2).withChance(0.12)
    ], 'minecraft:gilded_blackstone').processingTime(250).id('finality:crushing/gilded_blackstone')

    event.recipes.create.crushing([
        Item.of('kubejs:deepslate_shard', 9).withChance(0.75),
        Item.of('minecraft:gravel').withChance(0.12)
    ], 'minecraft:deepslate').processingTime(250).id('finality:crushing/deepslate_shard_from_deepslate')

    event.recipes.create.crushing([
        Item.of('kubejs:deepslate_shard', 9).withChance(0.25),
        Item.of('minecraft:gravel').withChance(0.24)
    ], 'minecraft:cobbled_deepslate').processingTime(250).id('finality:crushing/deepslate_shard_from_cobbled_deepslate')

    if (Platform.isLoaded('createaddition')) {
        console.log('Create Crafts & Additions detected! Restoring Tuff crushing recipes.')
        event.recipes.create.crushing([
            Item.of('minecraft:flint').withChance(0.25),
            Item.of('minecraft:gold_nugget').withChance(0.10),
            Item.of('create:copper_nugget').withChance(0.10),
            Item.of('create:zinc_nugget').withChance(0.10),
            Item.of('minecraft:iron_nugget').withChance(0.10)
        ], 'minecraft:tuff').processingTime(350).id('create:crushing/tuff')

        event.recipes.create.crushing([
            Item.of('minecraft:flint').withChance(0.25),
            Item.of('minecraft:gold_nugget').withChance(0.10),
            Item.of('create:copper_nugget').withChance(0.10),
            Item.of('create:zinc_nugget').withChance(0.10),
            Item.of('minecraft:iron_nugget').withChance(0.10)
        ], '#create:stone_types/tuff').processingTime(350).id('create:crushing/tuff_recycling')
    }
    /**
     * FILLING
     */
    event.recipes.create.filling('minecraft:netherrack', [
        'minecraft:cobblestone',
        Fluid.of('create:potion', 250, '{Bottle: "REGULAR", Potion: "minecraft:strong_healing"}'),
    ]).id('finality:filling/living_flesh_stone')

    event.recipes.create.filling('minecraft:prismarine', [
        'minecraft:cobblestone',
        Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:water_breathing"}')
    ]).id('finality:filling/prismarine_from_cobblestone')

    event.recipes.create.filling('minecraft:netherite_ingot', [
        'minecraft:netherite_scrap',
        Fluid.of('kubejs:molten_gold', 90)
    ]).id('finality:filling/netherite_ingot_from_spout')

    event.recipes.create.filling('minecraft:gilded_blackstone', [
        'minecraft:blackstone',
        Fluid.of('kubejs:molten_gold', 50)
    ]).id('finality:filling/gilded_blackstone')
    /**
     * HAUNTING
     */
    event.recipes.create.haunting('minecraft:deepslate', 'minecraft:andesite').id('finality:haunting/andesite_to_deepslate')
    event.recipes.create.haunting('minecraft:crying_obsidian', 'minecraft:obsidian').id('finality:haunting/obsidian')
    event.recipes.create.haunting('minecraft:name_tag', 'minecraft:writable_book').id('finality:haunting/soul_nametag')
    event.recipes.create.haunting('minecraft:phantom_membrane', 'minecraft:rotten_flesh').id('finality:haunting/rotten_flesh')
    event.recipes.create.haunting([
        Item.of('minecraft:echo_shard').withChance(0.02),
        Item.of('minecraft:disc_fragment_5').withChance(0.01)
    ], 'kubejs:deepslate_shard').id('finality:haunting/echo_shard')
    event.recipes.create.haunting([
        'minecraft:wither_skeleton_skull',
        Item.of('minecraft:coal').withChance(0.25)
    ], 'minecraft:skeleton_skull').id('finality:haunting/wither_skeleton_skull')
    /**
     * ITEM APPLICATION
     */
    event.recipes.create.item_application('minecraft:tinted_glass', [
        '#forge:glass/colorless', 'minecraft:amethyst_shard'
    ]).id('minecraft:tinted_glass')
    event.recipes.create.item_application('minecraft:chest_minecart', [
        '#forge:chests/wooden', 'minecraft:minecart'
    ]).id('finality:item_application/chest_minecart')
    /**
     * SPLASHING
     */
    event.recipes.create.splashing(
        'minecraft:piston',
        'minecraft:sticky_piston'
    ).id('finality:splashing/sticky_piston')
    event.recipes.create.splashing(
        'create:mechanical_piston',
        'create:sticky_mechanical_piston'
    ).id('finality:splashing/sticky_mechanical_piston')
    /**
     * MILLING
     */
    /**
     * MIXING
     * 
     * Notice: Shapeless recipes are automatically added by Create, unless if .damageIngredient or .keepIngredient() are used.
     */
    event.recipes.create.mixing('2x create:brass_nugget', [
        'create:copper_nugget',
        'create:zinc_nugget'
    ]).heated().id('finality:mixing/brass_nugget_from_copper_and_zinc_nuggets')

    event.recipes.create.mixing('2x create:brass_block', [
        'minecraft:copper_block',
        'create:zinc_block'
    ]).heated().id('finality:mixing/brass_blocks_from_copper_and_zinc_blocks')

    event.recipes.create.mixing('minecraft:dirt', [
        'minecraft:gravel',
        '3x minecraft:bone_meal'
    ]).id('finality:dirt_from_gravel')

    event.recipes.create.mixing('2x minecraft:coarse_dirt', [
        'minecraft:dirt',
        'minecraft:gravel'
    ]).id('finality:mixing/coarse_dirt')

    event.recipes.create.mixing('8x minecraft:netherrack', [
        '8x minecraft:cobblestone',
        Fluid.of('create:potion', 1000, '{Bottle:"REGULAR",Potion:"minecraft:strong_healing"}')
    ]).id('finality:mixing/bulk_netherrack_from_cobblestone')

    event.recipes.create.mixing('8x minecraft:prismarine', [
        '8x minecraft:cobblestone',
        Fluid.of('create:potion', 250, '{Potion:"REGULAR",Potion:"minecraft:water_breathing"}')
    ]).id('finality:mixing/bulk_prismarine_from_cobblestone')

    event.recipes.create.mixing('4x minecraft:netherite_ingot', [
        '4x minecraft:netherite_scrap',
        Fluid.of('kubejs:molten_gold', 360)
    ]).heated().id('finality:mixing/netherite_ingot_from_mixing')
    // Be3Al2(SiO3)6
    event.recipes.create.mixing('minecraft:emerald', [
        'minecraft:quartz', 'minecraft:glass', '3x minecraft:iron_nugget'
    ]).superheated().id('finality:renew_emerald')
    // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
    event.recipes.create.mixing('minecraft:nether_gold_ore', [
        'create:cinder_flour',
        '18x minecraft:gold_nugget',
        Fluid.of('minecraft:lava', 180)
    ]).id('finality:nether_gold_ore_deco')

    event.recipes.create.mixing('minecraft:cobblestone', [
        Fluid.water(1000),
        Fluid.lava(1000)
    ]).id('finality:mixing/cobblestone')
    /**
     * PRESSING
     */
    event.recipes.create.pressing('kubejs:zinc_sheet', 'create:zinc_ingot').id('finality:pressing/zinc_ingot')
    event.recipes.create.pressing('kubejs:netherite_sheet', 'minecraft:netherite_ingot').id('finality:pressing/netherite_ingot')
    /**
     * >-----<
     */
    // Mushroom Stew
    event.recipes.create.filling('minecraft:mushroom_stew', [
        'minecraft:bowl',
        Fluid.of('kubejs:mushroom_stew', 250)
    ]).id('finality:filling/mushroom_stew')
    event.recipes.create.mixing(Fluid.of('kubejs:mushroom_stew', 250), [
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom',
        Fluid.of('minecraft:water', 250)
    ]).heated().id('finality:mixing/mushroom_stew')
})