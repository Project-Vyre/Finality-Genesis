// priority: 1000
// requires: create
// ignored: false

/**
 * @file Responsible for making tooltips using Create's tooltip registry.
 * @version 0.5.1f
 * @author pietro-lopes <https://github.com/pietro-lopes> Author of the CreateTooltip prototype class
 * @author squoshi <https://github.com/squoshi> Initial implementation of ClientEvents.init()
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Wrote the old function system
 * @author tizu69 <https://github.com/tizu69> (AKA tizu in the KJS Discord) Initial implementation via tooltip event
 */

console.log('Loaded Create tooltip registry.')

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

let standardArmor = ['helmet', 'chestplate', 'leggings', 'boots']

const standardTools = {
    pickaxe: 'PICKAXE',
    axe: 'AXE',
    shovel: 'SHOVEL',
    hoe: 'HOE',
    sword: 'SWORD'
}

const minecraftMaterialTools = {
    wooden: 'WOODEN',
    stone: 'STONE',
    iron: 'IRON'
}

const DYE = {
    black: 'BLACK',
    gray: 'GRAY',
    light_gray: 'LIGHT GRAY',
    white: 'WHITE',
    pink: 'PINK',
    light_blue: 'LIGHT BLUE',
    brown: 'BROWN',
    red: 'RED',
    orange: 'ORANGE',
    yellow: 'YELLOW',
    lime: 'LIME',
    green: 'GREEN',
    cyan: 'CYAN',
    blue: 'BLUE',
    purple: 'PURPLE',
    magenta: 'MAGENTA'
}

let STANDARD_PALETTE_REGISTRY = [
    'minecraft:clock',
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
    'create_power_loader:andesite_chunk_loader',
    'create_power_loader:brass_chunk_loader',
    'farmersdelight:skillet',
    'farmersdelight:stove'
]
let BLUE_REGISTRY = [
    'minecraft:soul_campfire',
    'minecraft:beacon',
    'minecraft:lapis_lazuli'
]
let GREEN_REGISTRY = [
    'minecraft:bone_meal'
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
    'kubejs:final_scythe',
    'kubejs:final_katana',
    'kubejs:final_lance',
    'kubejs:final_helmet',
    'kubejs:final_chestplate',
    'kubejs:final_leggings',
    'kubejs:final_boots',
    'kubejs:null_storage_block',
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

const $ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Modifier')
const $TooltipModifier = Java.loadClass('com.simibubi.create.foundation.item.TooltipModifier')
const $Palette = Java.loadClass('com.simibubi.create.foundation.item.TooltipHelper$Palette')

/**
 * Prototype class to handle both registering and lang using Create's tooltip registry.
 * @author pietro-lopes <https://github.com/pietro-lopes> Author of the CreateTooltip prototype class
 * @example
 * event.addAll(
 *   createTooltip("tfc:stone/hoe/sedimentary") // works with modded items!
 *     .addSummary("Test _summary_.")
 *     .addBehaviour(["When this", "Then this item does _this_."])
 *     .addBehaviour(["And When this", "You can add as many _behaviours_ as you like"])
 *     .addAction(["This is the control1", "This is the _action1_"])
 *     .addAction(["This is the control2", "This is the _action2_"])
 *     .setPalette($Palette.YELLOW) // optional, default is $Palette.STANDARD_CREATE, custom can be like: .setPalette($Palette.ofColors(Color.AQUA, Color.DARK_AQUA))
 *     .build()
 * )
 * @param {string} itemId 
 */
function createTooltip(/** @type {Special.Item} */ itemId) {
    return new CreateTooltipBuilder(itemId)
}

function CreateTooltipBuilder(itemId) {
    this.itemId = Item.of(itemId).idLocation
    this.descriptionId = Item.of(itemId).descriptionId
    this.summary = ""
    this.conditions = []
    this.behaviours = []
    this.controls = []
    this.actions = []
    this.palette = $Palette.STANDARD_CREATE
}
CreateTooltipBuilder.prototype = {
    addSummary: function (
        /**
         * @type {string} 
         */
        summary
    ) {
        this.summary = summary
        return this
    },
    addBehaviour: function (
        /**
         * @type {string[]} 
         */
        conditionAndBehaviour
    ) {
        this.conditions.push(conditionAndBehaviour[0])
        this.behaviours.push(conditionAndBehaviour[1])
        return this
    },
    addAction: function (
        /**
         * @type {string[]} 
         */
        controlsAndActions
    ) {
        this.controls.push(controlsAndActions[0])
        this.actions.push(controlsAndActions[1])
        return this
    },
    setPalette: function (
        /**
         * @type {Internal.TooltipHelper$Palette} 
         * @info Create's color palettes. Only accepts the following:
         * @default $Palette.STANDARD_CREATE
         * @example $Palette.BLUE
         * @example $Palette.GREEN
         * @example $Palette.YELLOW
         * @example $Palette.RED
         * @example $Palette.PURPLE
         * @example $Palette.GRAY
         * @example $Palette.ALL_GRAY
         * @example $Palette.GRAY_AND_BLUE
         * @example $Palette.GRAY_AND_WHITE
         * @example $Palette.GRAY_AND_GOLD
         * @example $Palette.GRAY_AND_RED
         */
        palette
    ) {
        this.palette = palette
        return this
    },
    build: function () {
        $TooltipModifier.REGISTRY.registerDeferred(this.itemId, (item) => new $ItemDescription(item, this.palette))
        let map = Utils.newMap()
        map.putIfAbsent(this.descriptionId + ".tooltip", this.itemId.path.toUpperCase())
        if (this.summary != "") {
            map.putIfAbsent(this.descriptionId + ".tooltip.summary", this.summary)
        }
        for (let index = 0; index < this.conditions.length; index++) {
            map.putIfAbsent(this.descriptionId + ".tooltip.condition" + (index + 1), this.conditions[index])
        }
        for (let index = 0; index < this.behaviours.length; index++) {
            map.putIfAbsent(this.descriptionId + ".tooltip.behaviour" + (index + 1), this.behaviours[index])
        }
        for (let index = 0; index < this.controls.length; index++) {
            map.putIfAbsent(this.descriptionId + ".tooltip.control" + (index + 1), this.controls[index])
        }
        for (let index = 0; index < this.actions.length; index++) {
            map.putIfAbsent(this.descriptionId + ".tooltip.action" + (index + 1), this.actions[index])
        }
        return map
    }
}

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

ClientEvents.lang('en_us', event => {
    for (const [tool, TOOLCAP] of Object.entries(standardTools)) {
        for (const [material, MATCAP] of Object.entries(minecraftMaterialTools)) {
            event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip`, `${MATCAP} ${TOOLCAP}`)
            event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip.summary`, "You can now _repair_ tools with the material they are made of.")
            event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip.condition1`, "How to repair:")
            event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip.behaviour1`, "Put your _tool_ and its _respective crafting material_ in any _crafting grid_.")
            event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip.condition2`, "Additional Info")
            event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip.behaviour2`, "If you were wondering... yes, this also applies to Diamond and Netherite tools as well. This tooltip will not appear on Diamond and Netherite tools.")
        }
    }
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
    MONO_GRAY_PALETTE('create:chromatic_compound')
    GRAY_GOLD_PALETTE('create:refined_radiance')
    GRAY_PALETTE('create:shadow_steel')
})