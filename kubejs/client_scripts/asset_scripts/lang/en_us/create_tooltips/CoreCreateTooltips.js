// priority: 500
// requires: create

/**
 * @file Lang gen for core items and blocks.
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

ClientEvents.lang('en_us', event => {
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
    GRAY_WHITE_PALETTE('create:chromatic_compound')
    GRAY_GOLD_PALETTE('create:refined_radiance')
    GRAY_PALETTE('create:shadow_steel')
    event.addAll(
        'kubejs',
        createTooltip('minecraft:obsidian')
            .addSummary('_Infinitely_ renewable but takes forever to break automatically.')
            .addBehaviour([
                'Method 1 - Drills',
                'You can have a _deployer_ place a _lava bucket_ next to a waterlogged block or drill. This does take a while, however.'
            ])
            .addBehaviour([
                'Method 2 - Contraption Parking',
                'You can have a _Mechanical Bearing_ or _Mechanical Piston_ park blocks into place to break the obsidian instantly.'
            ])
            .addBehaviour([
                'Method 3 - Cursed Recipes',
                'You can _compact_ Water and Lava in a Basin because of Create\'s cursed recipe magic or other methods shown by the recipe viewer.'
            ])
            .setPalette($Palette.PURPLE)
            .build()
    )
    event.addAll(
        'kubejs',
        createTooltip('kubejs:unstable_entropy_particles')
            .addSummary('It appears that it needs to be _stabilized_ first by something that is _very_ cold.')
            .setPalette($Palette.PURPLE)
            .build()
    )
    event.addAll(
        'kubejs',
        createTooltip('kubejs:stable_entropy_particles')
            .addSummary('Can now be molded into other forms that may be more useful.')
            .setPalette($Palette.PURPLE)
            .build()
    )
    event.addAll('kubejs', {
        "block.kubejs.null_storage_block.tooltip": "NULL STORAGE BLOCK",
        "block.kubejs.null_storage_block.tooltip.summary": "Kinda invisible storage! It shouldn't exist.",
        "item.minecraft.clock.tooltip": "CLOCK",
        "item.minecraft.clock.tooltip.summary": "You feel that this clock has the ability to control _time_ to some degree... how curious.",
        "block.minecraft.andesite.tooltip": "ANDESITE",
        "block.minecraft.andesite.tooltip.summary": "Now has _additional uses_ in recipes.",
        "block.minecraft.andesite.tooltip.condition1": "Usage",
        "block.minecraft.andesite.tooltip.behaviour1": "Used in making _Andesite Alloy_.",
        "block.minecraft.andesite.tooltip.condition2": "Renewal",
        "block.minecraft.andesite.tooltip.behaviour2": "Can be _renewed_ by _compacting_ some _Gravel_, _Flint_ and _Lava_ in a _Basin_. _Cobblestone_ and _Diorite_ can also be _mixed_ together in a shapeless recipe.",
        "block.minecraft.andesite.tooltip.condition3": "When haunted",
        "block.minecraft.andesite.tooltip.behaviour3": "Turns into _Deepslate_.",
        "block.minecraft.cobblestone.tooltip": "COBBLESTONE",
        "block.minecraft.cobblestone.tooltip.summary": "Now has _additional uses_ in recipes.",
        "block.minecraft.cobblestone.tooltip.condition1": "Usage",
        "block.minecraft.cobblestone.tooltip.behaviour1": "Can be used in making _Diorite_ which can then be used to make _Andesite_ for easy creation of _Andesite Alloy_.",
        "block.minecraft.cobblestone.tooltip.condition2": "When milled or crushed",
        "block.minecraft.cobblestone.tooltip.behaviour2": "Turns into _Gravel_ which can be _washed_ for more _useful_ materials.",
        "block.minecraft.gravel.tooltip": "GRAVEL",
        "block.minecraft.gravel.tooltip.summary": "Now has _additional uses_ in recpipes.",
        "block.minecraft.gravel.tooltip.condition1": "When washed",
        "block.minecraft.gravel.tooltip.behaviour1": "Has a chance of revealing _iron nuggets_ and _flint_.",
        "block.minecraft.dried_kelp_block.tooltip": "DRIED KELP BLOCK",
        "block.minecraft.dried_kelp_block.tooltip.summary": "Now has _additional uses_ in recipes.",
        "block.minecraft.dried_kelp_block.tooltip.condition1": "Heated Compacting",
        "block.minecraft.dried_kelp_block.tooltip.behaviour1": "Now turns into _coal_ when given _sufficient_ _heat_ and _pressure_.",
        "block.minecraft.netherrack.tooltip": "NETHERRACK",
        "block.minecraft.netherrack.tooltip.summary": "Now has _additional uses_ in recipes and can be _infinitely_ _renewed_.",
        "block.minecraft.netherrack.tooltip.condition1": "Usage",
        "block.minecraft.netherrack.tooltip.behaviour1": "Used for making _Blaze Cakes_ or _redstone_ when _crushed_ into _Cinder Flour_. Can also _rarely_ _produce_ _Netherite Scrap_ when _crushed_.",
        "block.minecraft.netherrack.tooltip.condition2": "Renewal",
        "block.minecraft.netherrack.tooltip.behaviour2": "Can be _renewed_ with _Instant Health II_ which can be _fully automated_ with quite a few Mechanical Mixers and Blaze Burners.",
        "block.minecraft.coal_block.tooltip": "COAL BLOCK",
        "block.minecraft.coal_block.tooltip.summary": "Now has _additional uses_ in recpipes.",
        "block.minecraft.coal_block.tooltip.condition1": "Superheated Compacting",
        "block.minecraft.coal_block.tooltip.behaviour1": "Now turns into _diamonds_ when given sufficient _heat_ and _pressure_.",
        "block.minecraft.diamond_block.tooltip": "DIAMOND BLOCK",
        "block.minecraft.diamond_block.tooltip.summary": "Now has _additional uses_ in recipes.",
        "block.minecraft.diamond_block.tooltip.condition1": "Infinitely renewable",
        "block.minecraft.diamond_block.tooltip.behaviour1": "Can be _infinitely_ renewed from _compacting_ coal blocks in a _superheated_ basin.",
        "block.minecraft.beacon.tooltip": "BEACON",
        "block.minecraft.beacon.tooltip.summary": "Gives _positive_ effects to players in a certain radius. Requires a base built out of precious materials to function!",
        "item.minecraft.glass_bottle.tooltip": "GLASS BOTTLE",
        "item.minecraft.glass_bottle.tooltip.summary": "Now has _additional uses_ in this modpack.",
        "item.minecraft.glass_bottle.tooltip.condition1": "When combined with a Dragon Egg in a crafting grid",
        "item.minecraft.glass_bottle.tooltip.behaviour1": "Extracts Dragon Breath.",
        "item.minecraft.lapis_lazuli.tooltip": "LAPIS LAZULI",
        "item.minecraft.lapis_lazuli.tooltip.summary": "Now has _additional uses_ in recipes.",
        "item.minecraft.lapis_lazuli.tooltip.condition1": "Usage",
        "item.minecraft.lapis_lazuli.tooltip.behaviour1": "Other than _enchanting_ purposes, you can _haunt_ it to get _prismarine_ shards and crystals.",
        "item.minecraft.lapis_lazuli.tooltip.condition2": "Renewal",
        "item.minecraft.lapis_lazuli.tooltip.behaviour2": "Other than _clerics_, lapis lazuli can now be acquired from _witches_.",
        "block.minecraft.pointed_dripstone.tooltip": "POINTED DRIPSTONE",
        "block.minecraft.pointed_dripstone.tooltip.summary": "Now has _additional uses_ in recipes.",
        "block.minecraft.pointed_dripstone.tooltip.condition1": "Usage",
        "block.minecraft.pointed_dripstone.tooltip.behaviour1": "Can now be used in making _Tridents_.",
        "block.minecraft.cobbled_deepslate.tooltip": "COBBLED DEEPSLATE",
        "block.minecraft.cobbled_deepslate.tooltip.summary": "Now has _additional uses_ in recipes.",
        "block.minecraft.cobbled_deepslate.tooltip.condition1": "When crushed",
        "block.minecraft.cobbled_deepslate.tooltip.behaviour1": "Produces _Deepslate Shards_ which can be _haunted_ to be transformed into different items.",
        "block.minecraft.campfire.tooltip": "CAMPFIRE",
        "block.minecraft.campfire.tooltip.summary": "Useful for _cooking_ food and other functionalities. See below!",
        "block.minecraft.campfire.tooltip.condition1": "When nearby:",
        "block.minecraft.campfire.tooltip.behaviour1": "Campfires can now _regenerate_ your health. _<wave>Cozy!</wave>_",
        "block.minecraft.campfire.tooltip.condition2": "When placed in front of a powered Encased Fan:",
        "block.minecraft.campfire.tooltip.behaviour2": "Permits _Bulk Smoking_ for food items.",
        "block.minecraft.soul_campfire.tooltip": "SOUL CAMPFIRE",
        "block.minecraft.soul_campfire.tooltip.summary": "_Repels_ piglins in addition to cooking food and other functionalities. See below!",
        "block.minecraft.soul_campfire.tooltip.condition1": "When nearby:",
        "block.minecraft.soul_campfire.tooltip.behaviour1": "Campfires can now _regenerate_ your health. _<wave>Cozy!</wave>_",
        "block.minecraft.soul_campfire.tooltip.condition2": "When placed in front of a powered Encased Fan:",
        "block.minecraft.soul_campfire.tooltip.behaviour2": "Permits _Bulk Haunting_ for items.",
        "item.minecraft.rotten_flesh.tooltip": "ROTTEN FLESH",
        "item.minecraft.rotten_flesh.tooltip.summary": "Now has _additional uses_ in multiple recipes.",
        "item.minecraft.rotten_flesh.tooltip.condition1": "In crafting recipes",
        "item.minecraft.rotten_flesh.tooltip.behaviour1": "Is the basis of creating _enriched_ soil for _higher_ crop yields.",
        "item.minecraft.rotten_flesh.tooltip.condition2": "When haunted",
        "item.minecraft.rotten_flesh.tooltip.behaviour2": "Turns into _Phantom Membrane_.",
        "block.minecraft.fletching_table.tooltip": "FLETCHING TABLE",
        "block.minecraft.fletching_table.tooltip.summary": "Now has a _purpose_ and can _actually_ make arrows!",
        "block.minecraft.fletching_table.tooltip.condition1": "On right click:",
        "block.minecraft.fletching_table.tooltip.behaviour1": "It can now _craft_ arrows along with other _types_ of arrows.",
        "item.minecraft.nether_star.tooltip": "NETHER STAR",
        "item.minecraft.nether_star.tooltip.summary": "Now has _additional uses_.",
        "item.minecraft.nether_star.tooltip.condition1": "Usage",
        "item.minecraft.nether_star.tooltip.behaviour1": "Used in waking up _The Harbinger_ in the _Ancient Factory_ located deep underground in the _Overworld_.",
        "block.minecraft.dragon_egg.tooltip": "DRAGON EGG",
        "block.minecraft.dragon_egg.tooltip.summary": "Now has an _actual_ use.",
        "block.minecraft.dragon_egg.tooltip.condition1": "Usage",
        "block.minecraft.dragon_egg.tooltip.behaviour1": "Used in making _Dragon Breath_.",
        "block.minecraft.structure_void.tooltip": "STRUCTURE VOID",
        "block.minecraft.structure_void.tooltip.summary": "Primarily used for _crafting_ spawners.",
        "block.minecraft.structure_void.tooltip.condition1": "Acquisition",
        "block.minecraft.structure_void.tooltip.behaviour1": "Can be aquired by breaking _existing_ Spawners or by using a _crafted Command Block_ and then _striking it_ with a _Deployer_ using a _certain_ scythe.",
        "item.minecraft.raw_iron.tooltip": "RAW IRON",
        "item.minecraft.raw_iron.tooltip.summary": "Unrefined, but an _important_ ingredient in everything Create related.",
        "item.minecraft.raw_iron.tooltip.condition1": "Renewal",
        "item.minecraft.raw_iron.tooltip.behaviour1": "Can be _renewed_ from _washing_ Gravel in the form of nuggets in addition to existing methods.",
        "item.minecraft.iron_ingot.tooltip": "IRON INGOT",
        "item.minecraft.iron_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
        "item.minecraft.iron_ingot.tooltip.condition1": "When mixed with Andesite in nugget form",
        "item.minecraft.iron_ingot.tooltip.behaviour1": "Creates _Andesite Alloy_ ingots.",
        "item.minecraft.iron_ingot.tooltip.condition2": "When pressed",
        "item.minecraft.iron_ingot.tooltip.behaviour2": "Turns into an _Iron Sheet_ which has additional uses.",
        "item.minecraft.raw_copper.tooltip": "RAW COPPER",
        "item.minecraft.raw_copper.tooltip.summary": "Unrefined, but an _important_ ingredient in everything related to Create _fluid_ manipulation.",
        "item.minecraft.raw_copper.tooltip.condition1": "Renewal",
        "item.minecraft.raw_copper.tooltip.behaviour1": "Can be _renewed_ from _Drowned_ in ingot form.",
        "item.minecraft.copper_ingot.tooltip": "COPPER INGOT",
        "item.minecraft.copper_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
        "item.minecraft.copper_ingot.tooltip.condition1": "When combined with a Zinc Ingot",
        "item.minecraft.copper_ingot.tooltip.behaviour1": "Creates _two_ Brass Ingots.",
        "item.minecraft.copper_ingot.tooltip.condition2": "When pressed",
        "item.minecraft.copper_ingot.tooltip.behaviour2": "Turns into a _Copper Sheet_ which has additional uses, primarily focused on fluid manipulation.",
        "item.minecraft.copper_ingot.tooltip.condition3": "Renewal",
        "item.minecraft.copper_ingot.tooltip.behaviour3": "Can be _renewed_ from Drowned.",
        "item.minecraft.raw_gold.tooltip": "RAW GOLD",
        "item.minecraft.raw_gold.tooltip.summary": "Unrefined, but an _important_ ingredient in Create components.",
        "item.minecraft.raw_gold.tooltip.condition1": "Renewal",
        "item.minecraft.raw_gold.tooltip.behaviour1": "Can be _renewed_ from _washing_ Red Sand or Soul Sand in nugget form. However, washing Soul Sand has _lower_ yields compared to washing Red Sand.",
        "item.minecraft.gold_ingot.tooltip": "GOLD INGOT",
        "item.minecraft.gold_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
        "item.minecraft.gold_ingot.tooltip.condition1": "When pressed",
        "item.minecraft.gold_ingot.tooltip.behaviour1": "Turns into a _Gold Sheet_ which has additional uses.",
        "item.create.raw_zinc.tooltip": "RAW ZINC",
        "item.create.raw_zinc.tooltip.summary": "Unrefined, but an _important_ ingredient in everything Create related.",
        "item.create.raw_zinc.tooltip.condition1": "Renewal",
        "item.create.raw_zinc.tooltip.behaviour1": "Has a _chance_ of dropping from _Creepers_ in nugget form.",
        "item.create.zinc_ingot.tooltip": "ZINC INGOT",
        "item.create.zinc_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
        "item.create.zinc_ingot.tooltip.condition1": "When combined with a Copper Ingot",
        "item.create.zinc_ingot.tooltip.behaviour1": "Creates _two_ Brass Ingots.",
        "item.create.zinc_ingot.tooltip.condition2": "Renewal",
        "item.create.zinc_ingot.tooltip.behaviour2": "Has a _chance_ of dropping from _Creepers_ in nugget form.",
        "item.create.zinc_nugget.tooltip": "ZINC NUGGET",
        "item.create.zinc_nugget.tooltip.summary": "Now _renewable_ from Creepers as a potential loot drop.",
        "block.create.item_vault.tooltip": "ITEM VAULT",
        "block.create.item_vault.tooltip.summary": "In addition to being a large, shared inventory, the Item Vault can't be destroyed by _any_ kind of explosion. Your valueables are _guaranteed_ to be safe.",
        "item.create.chromatic_compound.tooltip": "CHROMATIC COMPOUND",
        "item.create.chromatic_compound.tooltip.summary": "It seems to have some subtle _hue shifting_... Perhaps it can be changed?",
        "item.create.chromatic_compound.tooltip.condition1": "Uses",
        "item.create.chromatic_compound.tooltip.behaviour1": "Can be thrown into the _light_ or into the _void_ to be transformed into a different material.",
        "item.create.refined_radiance.tooltip": "REFINED RADIANCE",
        "item.create.refined_radiance.tooltip.summary": "After being exposed to _bright light_, it is now in your hands.",
        "item.create.shadow_steel.tooltip": "SHADOW STEEL",
        "item.create.shadow_steel.tooltip.summary": "No light seems to come from this.",
        "item.kubejs.deepslate_shard.tooltip": "DEEPSLATE SHARD",
        "item.kubejs.deepslate_shard.tooltip.summary": "Acquired from crushing Cobbled Deepslate.",
        "item.kubejs.deepslate_shard.tooltip.condition1": "When haunted",
        "item.kubejs.deepslate_shard.tooltip.behaviour1": "Has a _chance_ of turning into an _Echo Shard_ or _disc fragment_.",
        "item.kubejs.lemon.tooltip": "LEMON",
        "item.kubejs.lemon.tooltip.summary": "Quite sour, is it not?",
        "item.kubejs.lemon.tooltip.condition1": "When eaten",
        "item.kubejs.lemon.tooltip.behaviour1": "The sourness causes the screen to uhhh... _shrink_ for a _short_ amount of time.",
        "item.kubejs.denied_result.tooltip": "DENIED RESULT",
        "item.kubejs.denied_result.tooltip.summary": "This item now has a _different_ method or methods of acquisition.",
        "item.kubejs.denied_result.tooltip.condition1": "Purpose",
        "item.kubejs.denied_result.tooltip.behaviour1": "Output result _denied_. Please refer to either _JEI_ or _REI_ for the _current_ acquisition methods.",
        "item.kubejs.removed_item.tooltip": "REMOVED ITEM",
        "item.kubejs.removed_item.tooltip.summary": "_WARNING:_ This item has been _removed_.",
        "item.kubejs.removed_item.tooltip.condition1": "Purpose",
        "item.kubejs.removed_item.tooltip.behaviour1": "Output item _removed_.",
        // Entropy Related
        "block.kubejs.command_block.tooltip": "COMMAND BLOCK",
        "block.kubejs.command_block.tooltip.summary": "Not actually a true command block, but it can still do _certain_ things.",
        "block.kubejs.chain_command_block.tooltip": "CHAIN COMMAND BLOCK",
        "block.kubejs.chain_command_block.tooltip.summary": "Not actually a true command block, but it can still do _certain_ things.",
        "block.kubejs.repeating_command_block.tooltip": "REPEATING COMMAND BLOCK",
        "block.kubejs.repeating_command_block.tooltip.summary": "Not actually a true command block, but it can still do _certain_ things.",
        "item.kubejs.high_entropy_alloy.tooltip": "HIGH ENTROPY ALLOY",
        "item.kubejs.high_entropy_alloy.tooltip.summary": "Highly sought after... You also notice that the lighting seems to be rather odd on this material.",
        "item.kubejs.high_entropy_alloy.tooltip.condition1": "Usage",
        "item.kubejs.high_entropy_alloy.tooltip.behaviour1": "Used in blocks and items that _break reality_.",
        "item.kubejs.final_pickaxe.tooltip": "FINAL PICKAXE",
        "item.kubejs.final_pickaxe.tooltip.summary": "Tear through mountains without a care in the world.",
        "item.kubejs.final_axe.tooltip": "FINAL AXE",
        "item.kubejs.final_axe.tooltip.summary": "Nature's bane. Deforestation manifested.",
        "item.kubejs.final_shovel.tooltip": "FINAL SHOVEL",
        "item.kubejs.final_shovel.tooltip.summary": "Terraform with ease.",
        "item.kubejs.final_hoe.tooltip": "FINAL HOE",
        "item.kubejs.final_hoe.tooltip.summary": "_Life_ and _death_ in one. Farm for _eternity_.",
        "item.kubejs.final_sword.tooltip": "FINAL SWORD",
        "item.kubejs.final_sword.tooltip.summary": "Wield the _power_ of the event horizon in your hands.",
        "item.kubejs.final_sword.tooltip.condition1": "Caution!",
        "item.kubejs.final_sword.tooltip.behaviour1": "Don't _accidentally_ hit your friends!",
        "item.kubejs.final_scythe.tooltip": "FINAL SCYTHE",
        "item.kubejs.final_scythe.tooltip.summary": "Sweeping away life with ease.",
        "item.kubejs.final_scythe.tooltip.condition1": "Caution!",
        "item.kubejs.final_scythe.tooltip.behaviour1": "Don't _accidentally_ hit your friends! Also _not usable_ for argricultural purposes.",
        "item.kubejs.final_katana.tooltip": "FINAL KATANA",
        "item.kubejs.final_katana.tooltip.summary": "Fast and deadly to the point your enemies can't see you attack.",
        "item.kubejs.final_katana.tooltip.condition1": "Caution!",
        "item.kubejs.final_katana.tooltip.behaviour1": "Don't _accidentally_ hit your friends with this!",
        "item.kubejs.final_lance.tooltip": "FINAL LANCE",
        "item.kubejs.final_lance.tooltip.summary": "Attack from long distances with _ease_ with piercing shadows.",
        "item.kubejs.final_lance.tooltip.condition1": "Caution!",
        "item.kubejs.final_lance.tooltip.behaviour1": "Don't _accidentally_ hit your friends!",
        "item.kubejs.final_helmet.tooltip": "FINAL HELMET",
        "item.kubejs.final_helmet.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
        "item.kubejs.final_helmet.tooltip.condition1": "On wearing the full set",
        "item.kubejs.final_helmet.tooltip.behaviour1": "_Cancels death_. You are also _invulnerable_ to _most, if not all_ forms of damage, including falling out of the world.",
        "item.kubejs.final_chestplate.tooltip": "FINAL CHESTPLATE",
        "item.kubejs.final_chestplate.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
        "item.kubejs.final_chestplate.tooltip.condition1": "On wearing the full set",
        "item.kubejs.final_chestplate.tooltip.behaviour1": "_Cancels death_. You are also _invulnerable_ to _most, if not all_ forms of damage, including falling out of the world.",
        "item.kubejs.final_leggings.tooltip": "FINAL LEGGINGS",
        "item.kubejs.final_leggings.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
        "item.kubejs.final_leggings.tooltip.condition1": "On wearing the full set",
        "item.kubejs.final_leggings.tooltip.behaviour1": "_Cancels death_. You are also _invulnerable_ to _most, if not all_ forms of damage, including falling out of the world.",
        "item.kubejs.final_boots.tooltip": "FINAL BOOTS",
        "item.kubejs.final_boots.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
        "item.kubejs.final_boots.tooltip.condition1": "On wearing the full set",
        "item.kubejs.final_boots.tooltip.behaviour1": "_Cancels death_. You are also _invulnerable_ to _most, if not all_ forms of damage, including falling out of the world."
    })
    event.addAll(
        'kubejs',
        createTooltip('kubejs:copper_coin')
            .addSummary('The currency of _this world_.')
            .setPalette($Palette.GRAY)
            .build()
    )
    event.addAll(
        'kubejs',
        createTooltip('kubejs:iron_coin')
            .addSummary('The currency of _this world_.')
            .setPalette($Palette.GRAY_AND_WHITE)
            .build()
    )
    event.addAll(
        'kubejs',
        createTooltip('kubejs:gold_coin')
            .addSummary('The currency of _this world_.')
            .setPalette($Palette.YELLOW)
            .build()
    )
    event.addAll(
        'kubejs',
        createTooltip('kubejs:netherite_coin')
            .addSummary('The currency of _this world_.')
            .setPalette($Palette.GRAY_AND_RED)
            .build()
    )
    event.addAll(
        'kubejs',
        createTooltip('kubejs:entropy_coin')
            .addSummary('The currency of _this world_.')
            .setPalette($Palette.PURPLE)
            .build()
    )
    event.addAll(
        'kubejs',
        createTooltip('kubejs:errored_result')
            .addSummary('It somehow still exists, maybe it is being _suppressed_ and it can be _resolved_ through other means?')
            .setPalette($Palette.RED)
            .build()
    )
    event.addAll(
        'kubejs',
        createTooltip('kubejs:deconstructor')
            .addSummary('Think of it as an _Undo Button_. Please don\'t ask _why_ this exists.')
            .addBehaviour([
                'On R-Click on a block',
                'Depending on the block, it will essentially _[Ctrl] + [Z]_ if applicable.'
            ])
            .addBehaviour([
                'When given to a Deployer',
                'With precision it is now able to _deconstruct_ items and blocks.'
            ])
            .setPalette($Palette.PURPLE)
            .build()
    )
    /*
    event.addAll(
        'kubejs',
        createTooltip('kubejs:la_lettre_a_focalors')
            .addSummary('This cake is a _work in progress_!')
            .build()
    )
    event.addAll(
        'kubejs',
        createTooltip('kubejs:pour_la_justice')
            .addSummary('This cake is a _work in progress_!')
            .setPalette($Palette.BLUE)
            .build()
    )
    */
    event.addAll(
        'minecraft',
        createTooltip('minecraft:nether_wart')
            .addSummary('A _red_ fungus used in _potion brewing_. Primarily used for brewing _Awkward Potions_.')
            .addBehaviour([
                'When haunted',
                'Absorbs soul energy to _re-awaken_.'
            ])
            .setPalette($Palette.RED)
            .build()
    )
    event.addAll(
        'finality',
        createTooltip('finality:living_nether_wart')
            .addSummary('The living variant of _Nether Wart_. Don\'t worry about the fact that it looks like a soul!')
            .addBehaviour([
                'When "polished"',
                'Converts back into dormant _Nether Wart_.'
            ])
            .setPalette($Palette.GREEN)
            .build()
    )
    event.addAll(
        'finality',
        createTooltip('finality:pocket_singularity')
            .addSummary('Work in progress! Don\'t worry about it!')
            .addBehaviour([
                'On R-Click',
                'Ejects all stored items mined by the alternate form of the respective tool.'
            ])
            .setPalette($Palette.PURPLE)
            .build()
    )
    if (Platform.isLoaded('summoningrituals')) {
        event.addAll(
            'summoningrituals',
            createTooltip('summoningrituals:altar')
                .addSummary('An altar that _summons_ either _mobs_, _items_ or even in-world events.')
                .addBehaviour([
                    'Usage Instructions',
                    'The _ritual catalyst_ has to be placed _last_ in order for the ritual to start. _Prepare_ the _ritual ingredients_ first. In the recipe viewer, the _ritual catalyst_ is located in the center. Press _[U]_ _WHILE HOVERING_ over the _summoning altar_ item in your inventory _with your cursor_ to see _all_ summoning rituals.'
                ])
                .addBehaviour([
                    'On R-Click with item',
                    'The altar _takes_ the item from you for ritual usage. However, the order of the ritual ingredients _does not_ matter other than the _ritual catalyst_ which must be inserted last.'
                ])
                .addBehaviour([
                    'On Sneak + R-Click with empty hand',
                    'The altar _returns_ items in the order you gave it.'
                ])
                .setPalette($Palette.RED)
                .build()
        )
        event.addAll(
            'summoningrituals',
            createTooltip('summoningrituals:indestructible_altar')
                .addSummary('This is the _indestructible_ version of the altar, normally found in custom structures and not planned to be craftable. Currently this is _unobtainable_ as no structures generate with it present.')
                .addBehaviour([
                    'Usage Instructions',
                    'The _ritual catalyst_ has to be placed _last_ in order for the ritual to start. _Prepare_ the _ritual ingredients_ first. In the recipe viewer, the _ritual catalyst_ is located in the center. Press _[U]_ _WHILE HOVERING_ over the _summoning altar_ item in your inventory _with your cursor_ to see _all_ summoning rituals.'
                ])
                .addBehaviour([
                    'On R-Click with item',
                    'The altar _takes_ the item from you for ritual usage. However, the order of the ritual ingredients _does not_ matter other than the _ritual catalyst_ which must be inserted last..'
                ])
                .addBehaviour([
                    'On Sneak + R-Click with empty hand',
                    'The altar _returns_ items in the order you gave it.'
                ])
                .setPalette($Palette.RED)
                .build()
        )
    }
    if (Platform.isLoaded('apotheosis')) {
        event.addAll(
            'kubejs',
            createTooltip('minecraft:spawner')
                .addSummary('A block that spawns entities. However, it\'s _properties_ and _traits_ can be edited with the use of _certain_ items.')
                .addBehaviour([
                    'On R-Click with Nether Star',
                    '_No longer requires_ a player to be present.'
                ])
                .addBehaviour([
                    'On R-Click with Soul Lantern',
                    '_Ignores_ light level.'
                ])
                .addBehaviour([
                    'On R-Click with Ghast Tear',
                    'Adds _two_ maximum allowed entities until a limit is reached. This _cannot_ exceed 32.'
                ])
                .addBehaviour([
                    'On R-Click with Spider Eye',
                    'Adds _one_ to the maximum amount of entities spawned at once.'
                ])
                .addBehaviour([
                    'On R-Click with Wool',
                    'Makes all spawned entities _silent_.'
                ])
                .addBehaviour([
                    'On R-Click with Chorus Fruit',
                    'Disables mob AI.'
                ])
                .setPalette($Palette.PURPLE)
                .build()
        )
        event.addAll('kubejs', {
            "item.kubejs.final_pickaxe.tooltip.condition1": "Caution!",
            "item.kubejs.final_pickaxe.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
            "item.kubejs.final_axe.tooltip.condition1": "Caution!",
            "item.kubejs.final_axe.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
            "item.kubejs.final_shovel.tooltip.condition1": "Caution!",
            "item.kubejs.final_shovel.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
            "item.kubejs.final_hoe.tooltip.condition1": "Caution!",
            "item.kubejs.final_hoe.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_."
        })
    }
    if (Platform.isLoaded('malum')) {
        event.addAll('kubejs', {
            'item.kubejs.final_scythe.tooltip.condition2': 'Soul Piercing',
            'item.kubejs.final_scythe.tooltip.behaviour2': 'Has the ability to _shatter_ souls! Use with _caution_.',
            'item.kubejs.final_katana.tooltip.condition2': 'Soul Piercing',
            'item.kubejs.final_katana.tooltip.behaviour2': 'Has the ability to _shatter_ souls! Use with _caution_.',
        })
    }
    event.addAll('create', {
        "item.create.wrench.tooltip.condition3": "On R-Click on Mechanical Belt end",
        "item.create.wrench.tooltip.behaviour3": "Safely _shortens_ a Mechanical Belt _without breaking_ its entire length. _DO NOT_ sneak while doing this unless if you intend on picking up the full belt.",
        "item.create.wrench.tooltip.condition4": "On R-Click on extra Shafts inside Mechanical Belts",
        "item.create.wrench.tooltip.behaviour4": "Safely _removes_ the extra shaft _without breaking_ the entire belt.",
        "block.create.seat.tooltip": "SEAT",
        "block.create.seat.tooltip.summary": "Sit yourself down and enjoy the ride! Will anchor a player onto a _moving contraption_. Great for static furniture too! Comes in a variety of colours.",
        "block.create.seat.tooltip.condition1": "R-Click on Seat",
        "block.create.seat.tooltip.behaviour1": "Sits the player on the _Seat_. Press _[Shift]_ to leave the _Seat_.",
        "item.create.blaze_cake.tooltip": "BLAZE CAKE",
        "item.create.blaze_cake.tooltip.summary": "A delicious treat for your hard-working _Blaze Burners_. Gets them all fired up!"
    })
    if (!Platform.isLoaded('universalbonemeal')) {
        event.addAll({
            "item.minecraft.bone_meal.tooltip": "BONE MEAL",
            "item.minecraft.bone_meal.tooltip.summary": "Used for _accelerating_ the _growth_ of plants.",
            "item.minecraft.bone_meal.tooltip.condition1": "On right click on plants or crops:",
            "item.minecraft.bone_meal.tooltip.behaviour1": "_Accelerates_ growth, self explanatory.",
            "item.minecraft.bone_meal.tooltip.condition2": "On right click on grass blocks:",
            "item.minecraft.bone_meal.tooltip.behaviour2": "Generates flowers and grass.",
            "item.minecraft.bone_meal.tooltip.condition3": "On right click on Sea Pickles on living coral blocks:",
            "item.minecraft.bone_meal.tooltip.behaviour3": "_Grows additional_ Sea Pickles."
        })
    }
    if (Platform.isLoaded('farmersdelight')) {
        event.addAll('farmersdelight', {
            "block.farmersdelight.skillet.tooltip": "SKILLET",
            "block.farmersdelight.skillet.tooltip.summary": "The skillet can be used to _cook_ food over an open flame or a stove. It can also be occasionally used as a weapon should the need ever arise.",
            "block.farmersdelight.skillet.tooltip.condition1": "When held over an open flame or stove",
            "block.farmersdelight.skillet.tooltip.behaviour1": "Cooks one food item at a time at a faster speed than a campfire.",
            "block.farmersdelight.skillet.tooltip.condition2": "On holding right click while holding ingredients in off-hand",
            "block.farmersdelight.skillet.tooltip.behaviour2": "Cooks ingredients over an open flame or a stove.",
            "block.farmersdelight.skillet.tooltip.condition3": "On left click",
            "block.farmersdelight.skillet.tooltip.behaviour3": "Can be utilized as a weapon."
        })
    }
    if (Platform.isLoaded('better_beacons')) {
        event.addAll('kubejs', {
            "block.minecraft.beacon.tooltip.condition1": "Better Beacons - Amplification",
            "block.minecraft.beacon.tooltip.behaviour1": "The block used to make the beacon pyramid _base_ now affects the _amplifier_ of the effects provided.",
            "block.minecraft.beacon.tooltip.condition2": "Better Beacons - Range",
            "block.minecraft.beacon.tooltip.behaviour2": "The _payment item_ used now affects the _range_ of the beacon."
        })
    }
})