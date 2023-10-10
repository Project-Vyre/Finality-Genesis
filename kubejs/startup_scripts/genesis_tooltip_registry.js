// requires: create

console.log('Loaded Create tooltip registry.')

/**
 * Authors
 * 
 * @squoshi Initial implementation of ClientEvents.init()
 * @CelestialAbyss Wrote function system
 * @tizu69 (AKA tizu in the KJS Discord) Initial implementation via tooltip event
 */

/*
    public record Palette(Style primary, Style highlight) {
        public static final Palette STANDARD_CREATE = new Palette(styleFromColor(0xC9974C), styleFromColor(0xF1DD79));

        public static final Palette BLUE = ofColors(ChatFormatting.BLUE, ChatFormatting.AQUA);
        public static final Palette GREEN = ofColors(ChatFormatting.DARK_GREEN, ChatFormatting.GREEN);
        public static final Palette YELLOW = ofColors(ChatFormatting.GOLD, ChatFormatting.YELLOW);
        public static final Palette RED = ofColors(ChatFormatting.DARK_RED, ChatFormatting.RED);
        public static final Palette PURPLE = ofColors(ChatFormatting.DARK_PURPLE, ChatFormatting.LIGHT_PURPLE);
        public static final Palette GRAY = ofColors(ChatFormatting.DARK_GRAY, ChatFormatting.GRAY);

        public static final Palette ALL_GRAY = ofColors(ChatFormatting.GRAY, ChatFormatting.GRAY);
        public static final Palette GRAY_AND_BLUE = ofColors(ChatFormatting.GRAY, ChatFormatting.BLUE);
        public static final Palette GRAY_AND_WHITE = ofColors(ChatFormatting.GRAY, ChatFormatting.WHITE);
        public static final Palette GRAY_AND_GOLD = ofColors(ChatFormatting.GRAY, ChatFormatting.GOLD);
        public static final Palette GRAY_AND_RED = ofColors(ChatFormatting.GRAY, ChatFormatting.RED);

        public static Palette ofColors(ChatFormatting primary, ChatFormatting highlight) {
            return new Palette(styleFromColor(primary), styleFromColor(highlight));
        }
    }
*/

/*
STANDARD_CREATE
---
BLUE
GREEN
YELLOW
RED
PURPLE
GRAY
---
ALL_GRAY
GRAY_AND_BLUE
GRAY_AND_WHITE
GRAY_AND_GOLD
GRAY_AND_RED
---
{
    "item.create.example_item.tooltip": "EXAMPLE ITEM (just a marker that this tooltip exists)",
    "item.create.example_item.tooltip.summary": "A brief description of the item. _Underscores_ highlight a term.",
    "item.create.example_item.tooltip.condition1": "When this",
    "item.create.example_item.tooltip.behaviour1": "Then this item does this. (behaviours show on shift)",
    "item.create.example_item.tooltip.condition2": "And When this",
    "item.create.example_item.tooltip.behaviour2": "You can add as many behaviours as you like",
    "item.create.example_item.tooltip.control1": "When Ctrl pressed",
    "item.create.example_item.tooltip.action1": "These controls are displayed.",
}
*/

let STANDARD_PALETTE_REGISTRY = [
    'minecraft:wooden_pickaxe',
    'minecraft:stone_pickaxe',
    'minecraft:iron_pickaxe',
    'minecraft:fletching_table',
    'minecraft:dried_kelp_block',
    'minecraft:coal_block',
    'minecraft:diamond_block',
    'minecraft:raw_iron',
    'minecraft:raw_gold',
    'minecraft:raw_copper',
    'minecraft:iron_ingot',
    'minecraft:gold_ingot',
    'minecraft:copper_ingot',
    'create:item_vault',
    'create:raw_zinc',
    'create:zinc_ingot',
    'create:zinc_nugget',
    'chalk:chalk_box',
    'extendedcrafting:handheld_table',
    'farmersdelight:skillet',
    'farmersdelight:stove',
    'ftbquests:book'
]
let BLUE_REGISTRY = [
    'minecraft:soul_campfire',
    'minecraft:beacon',
    'minecraft:lapis_lazuli'
]
let GREEN_REGISTRY = [
    'minecraft:bone_meal',
    'createchunkloading:chunk_loader'
]
let YELLOW_REGISTRY = [
    'minecraft:campfire',
    'kubejs:lemon'
]
let RED_REGISTRY = [
    'kubejs:removed_item',
    'minecraft:nether_star',
    'minecraft:netherrack'
]
let PURPLE_REGISTRY = [
    'minecraft:structure_void',
    'minecraft:dragon_egg',
    'create:handheld_worldshaper',
    'kubejs:denied_result',
    'kubejs:command_block',
    'kubejs:chain_command_block',
    'kubejs:repeating_command_block',
    'kubejs:high_entropy_alloy',
    'kubejs:final_pickaxe',
    'kubejs:final_axe',
    'kubejs:final_shovel',
    'kubejs:final_hoe',
    'kubejs:final_sword',
    'kubejs:final_lance',
    'kubejs:final_helmet',
    'kubejs:final_chestplate',
    'kubejs:final_leggings',
    'kubejs:final_boots',
    'eccentrictome:tome'
]
let GRAY_REGISTRY = [
    'minecraft:rotten_flesh',
    'minecraft:pointed_dripstone',
    'minecraft:andesite',
    'minecraft:cobblestone',
    'minecraft:cobbled_deepslate',
    'minecraft:gravel',
    'kubejs:deepslate_shard'
]

/**
 * 
 * @param {string} itemID 
 */
function STANDARD_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.STANDARD_CREATE))
}

/**
 * 
 * @param {string} itemID 
 */
function BLUE_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.BLUE))
}

/**
 * 
 * @param {string} itemID 
 */
function GREEN_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GREEN))
}

/**
 * 
 * @param {string} itemID 
 */
function YELLOW_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.YELLOW))
}

/**
 * 
 * @param {string} itemID 
 */
function RED_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.RED))
}

/**
 * 
 * @param {string} itemID 
 */
function PURPLE_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.PURPLE))
}

/**
 * 
 * @param {string} itemID 
 */
function GRAY_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GRAY))
}

/**
 * 
 * @param {string} itemID 
 */
function MONO_GRAY_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.ALL_GRAY))
}

/**
 * 
 * @param {string} itemID 
 */
function GRAY_BLUE_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GRAY_AND_BLUE))
}

/**
 * 
 * @param {string} itemID 
 */
function GRAY_WHITE_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GRAY_AND_WHITE))
}

/**
 * 
 * @param {string} itemID 
 */
function GRAY_GOLD_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GRAY_AND_GOLD))
}

/**
 * 
 * @param {string} itemID 
 */
function GRAY_RED_PALETTE(itemID) {
    $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.GRAY_AND_RED))
}

const $ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Modifier')
const $TooltipModifier = Java.loadClass('com.simibubi.create.foundation.item.TooltipModifier')
const $Palette = Java.loadClass('com.simibubi.create.foundation.item.TooltipHelper$Palette')

ClientEvents.init(event => {
    STANDARD_PALETTE_REGISTRY.forEach(item => {
        STANDARD_PALETTE(item)
    })
    BLUE_REGISTRY.forEach(item => {
        BLUE_PALETTE(item)
    })
    GREEN_REGISTRY.forEach(item => {
        GREEN_PALETTE(item)
    })
    YELLOW_REGISTRY.forEach(item => {
        YELLOW_PALETTE(item)
    })
    RED_REGISTRY.forEach(item => {
        RED_PALETTE(item)
    })
    PURPLE_REGISTRY.forEach(item => {
        PURPLE_PALETTE(item)
    })
    GRAY_REGISTRY.forEach(item => {
        GRAY_PALETTE(item)
    })
    if (Platform.isLoaded('chalk')) {
        Object.keys(DYE).forEach(itemID => {
            GRAY_PALETTE(`chalk:${itemID}`)
        })
    }
    if (Platform.isLoaded('aether')) {
        GRAY_PALETTE('aether:book_of_lore')
    }
    if (Platform.isLoaded('alexsmobs')) {
        YELLOW_PALETTE('minecraft:pumpkin')
    }
    if (Platform.isLoaded('apotheosis')) {
        YELLOW_PALETTE('apotheosis:vial_of_expulsion')
        PURPLE_PALETTE('apotheosis:vial_of_extraction')
    }
    if (Platform.isLoaded('architects_palette')) {
        GRAY_BLUE_PALETTE('architects_palette:chiseled_abyssaline_bricks')
        GRAY_RED_PALETTE('architects_palette:chiseled_hadaline_bricks')
    }
    if (Platform.isLoaded('autumnity')) {
        YELLOW_PALETTE('autumnity:sappy_maple_log')
        YELLOW_PALETTE('autumnity:sappy_maple_wood')
        YELLOW_PALETTE('autumnity:foul_berries')
        YELLOW_PALETTE('autumnity:turkey')
        YELLOW_PALETTE('autumnity:cooked_turkey')
    }
    if (Platform.isLoaded('backpacked')) {
        STANDARD_PALETTE('backpacked:backpack')
    }
    if (Platform.isLoaded('bhc')) {
        RED_PALETTE('bhc:red_heart')
    }
    if (Platform.isLoaded('cataclysm')) {
        PURPLE_PALETTE('cataclysm:gauntlet_of_guard')
        PURPLE_PALETTE('cataclysm:gauntlet_of_bulwark')
        PURPLE_PALETTE('cataclysm:void_scatter_arrow')
        PURPLE_PALETTE('cataclysm:void_core')
        PURPLE_PALETTE('cataclysm:void_forge')
        PURPLE_PALETTE('cataclysm:void_assault_shoulder_weapon')
        PURPLE_PALETTE('cataclysm:abyssal_sacrifice')
        PURPLE_PALETTE('cataclysm:tidal_claws')
        PURPLE_PALETTE('cataclysm:abyssal_egg')
        RED_PALETTE('cataclysm:wither_assault_shoulder_weapon')
        YELLOW_PALETTE('cataclysm:infernal_forge')
        YELLOW_PALETTE('cataclysm:monstrous_helm')
        YELLOW_PALETTE('cataclysm:burning_ashes')
        YELLOW_PALETTE('cataclysm:the_incinerator')
        YELLOW_PALETTE('cataclysm:ignitium_helmet')
        YELLOW_PALETTE('cataclysm:ignitium_chestplate')
        YELLOW_PALETTE('cataclysm:ignitium_leggings')
        YELLOW_PALETTE('cataclysm:ignitium_boots')
        YELLOW_PALETTE('cataclysm:bulwark_of_the_flame')
        PURPLE_PALETTE('cataclysm:abyss_eye')
        PURPLE_PALETTE('cataclysm:void_eye')
        RED_PALETTE('cataclysm:mech_eye')
        YELLOW_PALETTE('cataclysm:flame_eye')
        YELLOW_PALETTE('cataclysm:monstrous_eye')
    }
    if (Platform.isLoaded('cloudstorage')) {
        STANDARD_PALETTE('cloudstorage:balloon_bit')
        STANDARD_PALETTE('cloudstorage:balloon_stand')
        STANDARD_PALETTE('cloudstorage:cloud_chest')
        BLUE_PALETTE('cloudstorage:static_cloud_chest')
    }
    if (Platform.isLoaded('etched')) {
        YELLOW_PALETTE('etched:boombox')
    }
    if (Platform.isLoaded('goldenhopper')) {
        YELLOW_PALETTE('goldenhopper:golden_hopper')
    }
    if (Platform.isLoaded('graveyard')) {
        GRAY_RED_PALETTE('graveyard:corruption')
        GRAY_RED_PALETTE('graveyard:ossuary')
    }
    if (Platform.isLoaded('grimoireofgaia')) {
        GREEN_PALETTE('grimoireofgaia:taproot')
    }
    if (Platform.isLoaded('lilwings')) {
        STANDARD_PALETTE('minecraft:glass_bottle')
    }
    if (Platform.isLoaded('monobank')) {
        STANDARD_PALETTE('monobank:monobank')
    }
    if (Platform.isLoaded('mysticalagriculture')) {
        STANDARD_PALETTE('mysticalagriculture:infusion_altar')
    }
    if (Platform.isLoaded('quark')) {
        STANDARD_PALETTE('quark:abacus')
        STANDARD_PALETTE('quark:crate')
    }
    if (Platform.isLoaded('salt')) {
        STANDARD_PALETTE('salt:salt')
    }
    if (Platform.isLoaded('supplementaries')) {
        STANDARD_PALETTE('supplementaries:key')
        STANDARD_PALETTE('supplementaries:quiver')
    }
    if (Platform.isLoaded('tempad')) {
        PURPLE_PALETTE('tempad:tempad')
        PURPLE_PALETTE('tempad:he_who_remains_tempad')
    }
})