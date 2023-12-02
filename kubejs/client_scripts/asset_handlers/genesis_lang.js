// priority: 0
// requires: create
// ignored: false

/**
 * @file Everything lang file related.
 * @author LatvianModder <https://github.com/LatvianModder> Helped with setting this up and object entry iteration for easier lang input
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
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

ClientEvents.lang('en_us', event => {
    /**
     * Adds a Create item tooltip. 
     * @param {string} namespace 
     * @param {string} key 
     * @param {string} cap 
     */
    let itemT = (namespace, key, cap) => {
        event.add(namespace, `item.${namespace}.${key}.tooltip`, cap)
    }
    /**
     * Adds a Create item summary to the tooltip.
     * @param {string} namespace 
     * @param {string} key 
     * @param {string} summary 
     */
    let itemSu = (namespace, key, summary) => {
        event.add(namespace, `item.${namespace}.${key}.tooltip.summary`, summary)
    }
    /**
     * Adds item condition1 and behaviour1
     * @param {string} namespace 
     * @param {string} key 
     * @param {string} condition 
     * @param {string} behaviour 
     */
    let itemCb1 = (namespace, key, condition, behaviour) => {
        event.add(namespace, `item.${namespace}.${key}.tooltip.condition1`, condition)
        event.add(namespace, `item.${namespace}.${key}.tooltip.behaviour1`, behaviour)
    }
    /**
     * Adds item condition2 and behaviour2
     * @param {string} namespace 
     * @param {string} key 
     * @param {string} condition 
     * @param {string} behaviour 
     */
    let itemCb2 = (namespace, key, condition, behaviour) => {
        event.add(namespace, `item.${namespace}.${key}.tooltip.condition2`, condition)
        event.add(namespace, `item.${namespace}.${key}.tooltip.behaviour2`, behaviour)
    }
    /**
     * Adds item condition3 and behaviour3
     * @param {string} namespace 
     * @param {string} key 
     * @param {string} condition 
     * @param {string} behaviour 
     */
    let itemCb3 = (namespace, key, condition, behaviour) => {
        event.add(namespace, `item.${namespace}.${key}.tooltip.condition2`, condition)
        event.add(namespace, `item.${namespace}.${key}.tooltip.behaviour2`, behaviour)
    }
    /**
     * Adds a Create block tooltip.
     * @param {string} namespace 
     * @param {string} key 
     * @param {string} cap 
     */
    let blockT = (namespace, key, cap) => {
        event.add(namespace, `block.${namespace}.${key}.tooltip`, cap)
    }
    /**
     * Adds a Create block summary to the tooltip
     * @param {string} namespace 
     * @param {string} key 
     * @param {string} summary 
     */
    let blockSu = (namespace, key, summary) => {
        event.add(namespace, `block.${namespace}.${key}.tooltip.summary`, summary)
    }
    /**
     * Adds block condition1 and behaviour1
     * @param {string} namespace 
     * @param {string} key 
     * @param {string} condition 
     * @param {string} behaviour 
     */
    let blockCb1 = (namespace, key, condition, behaviour) => {
        event.add(namespace, `block.${namespace}.${key}.tooltip.condition1`, condition)
        event.add(namespace, `block.${namespace}.${key}.tooltip.behaviour1`, behaviour)
    }
    /**
     * Adds block condition2 and behaviour2
     * @param {string} namespace 
     * @param {string} key 
     * @param {string} condition 
     * @param {string} behaviour 
     */
    let blockCb2 = (namespace, key, condition, behaviour) => {
        event.add(namespace, `block.${namespace}.${key}.tooltip.condition2`, condition)
        event.add(namespace, `block.${namespace}.${key}.tooltip.behaviour2`, behaviour)
    }
    /**
     * Adds block condition3 and behaviour3
     * @param {string} namespace 
     * @param {string} key 
     * @param {string} condition 
     * @param {string} behaviour 
     */
    let blockCb3 = (namespace, key, condition, behaviour) => {
        event.add(namespace, `item.${namespace}.${key}.tooltip.condition2`, condition)
        event.add(namespace, `item.${namespace}.${key}.tooltip.behaviour2`, behaviour)
    }
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
    event.addAll('minecraft', {
        "item.minecraft.music_disc_13.desc": "Cjbeards - Mirror Mirror (Instrumental)",
        "item.minecraft.music_disc_cat.desc": "C418 - cat",
        "item.minecraft.music_disc_blocks.desc": "C418 - blocks",
        "item.minecraft.music_disc_chirp.desc": "Farabi Hasan Music - Arlecchino Battle Theme Phase 1 & 2 (Fan-Made) | Genshin Impact",
        "item.minecraft.music_disc_far.desc": "C418 - far",
        "item.minecraft.music_disc_mall.desc": "C418 - mall",
        "item.minecraft.music_disc_mellohi.desc": "C418 - mellohi",
        "item.minecraft.music_disc_stal.desc": "Cjbeards - Bad Deeds (Instrumental)",
        "item.minecraft.music_disc_strad.desc": "C418 - strad",
        "item.minecraft.music_disc_ward.desc": "C418 - ward",
        "item.minecraft.music_disc_11.desc": "Cjbeards - From the Shadows",
        "item.minecraft.music_disc_wait.desc": "C418 - wait",
        "item.minecraft.music_disc_pigstep.desc": "Lena Raine - Pigstep",
        "item.minecraft.music_disc_otherside.desc": "Lena Raine - otherside",
        "item.minecraft.music_disc_5.desc": "Cjbeards - Heart of the Wicked",
    })
    if (Platform.isLoaded('jeed')) {
        event.addAll('minecraft', {
            "effect.minecraft.absorption.desc": "Adds temporary hearts to absorb damage.",
            "effect.minecraft.dolphins_grace.desc": "Increases swimming speed in the water.",
            "effect.minecraft.resistance.desc": "Decreases amount of incoming damage.",
            "effect.minecraft.glowing.desc": "Become visible to everyone around you.",
            "effect.minecraft.levitation.desc": "You'll float too!",
            "effect.minecraft.wither.desc": "It's poison, but actually kills!"
        })
    }
    event.addAll('kubejs', {
        "item.kubejs.final_pickaxe": "<rainb>Particula Eversorem</rainb>",
        "item.kubejs.final_axe": "<rainb>Natura Exitium</rainb>",
        "item.kubejs.final_shovel": "<rainb>Terra Confractus</rainb>",
        "item.kubejs.final_hoe": "<rainb>Agricola Manus</rainb>",
        "item.kubejs.final_sword": "<rainb>Corevis Ultimatum</rainb>",
        "item.kubejs.final_scythe": "<rainb>Scythe of Eternal Oblivion<rainb>",
        "item.kubejs.final_lance": "<rainb>Tenebris Punctura</rainb>",
        "item.kubejs.final_katana": "<rainb>Celeritas Obumbratio</rainb>",
        "item.kubejs.crystal_lance": "<rainb>Crystallus Hasta</rainb>",
        "item.kubejs.final_helmet": "<rainb>Conscientia Oculi</rainb>",
        "item.kubejs.final_chestplate": "<rainb>Vitale Cordis</rainb>",
        "item.kubejs.final_leggings": "<rainb>Universum Motus</rainb>",
        "item.kubejs.final_boots": "<rainb>Gravitas Anchoram</rainb>",
        "block.kubejs.command_block": "<rainb>Command Block</rainb>",
        "block.kubejs.chain_command_block": "<rainb>Chain Command Block",
        "block.kubejs.repeating_command_block": "<rainb>Repeating Command Block",
        "block.kubejs.null_storage_block": "<rainb>Null Storage Block</rainb>",
        "block.kubejs.null_storage_block.tooltip": "NULL STORAGE BLOCK",
        "block.kubejs.null_storage_block.tooltip.summary": "Kinda invisible storage! It shouldn't exist.",
        // tooltips below
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
        "item.minecraft.glass_bottle.tooltip.condition1": "On Shift + R-click",
        "item.minecraft.glass_bottle.tooltip.behaviour1": "Places down a _butterfly jar_ to give butterflies a home.",
        "item.minecraft.glass_bottle.tooltip.condition2": "When combined with a Dragon Egg in a crafting grid",
        "item.minecraft.glass_bottle.tooltip.behaviour2": "Extracts Dragon Breath.",
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
        "block.minecraft.pumpkin.tooltip": "PUMPKIN",
        "block.minecraft.pumpkin.tooltip.summary": "In addition to being used as an ingredient, it now has other uses.",
        "block.minecraft.pumpkin.tooltip.condition1": "When carved",
        "block.minecraft.pumpkin.tooltip.behaviour1": "_Scares_ away crows who are likely to take your crops.",
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
        "block.kubejs.command_block.tooltip": "COMMAND BLOCK",
        "block.kubejs.command_block.tooltip.summary": "Not actually a true command block, but it can still do _certain_ things.",
        "block.kubejs.chain_command_block.tooltip": "CHAIN COMMAND BLOCK",
        "block.kubejs.chain_command_block.tooltip.summary": "Not actually a true command block, but it can still do _certain_ things.",
        "block.kubejs.repeating_command_block.tooltip": "REPEATING COMMAND BLOCK",
        "block.kubejs.repeating_command_block.tooltip.summary": "Not actually a true command block, but it can still do _certain_ things.",
        "item.kubejs.high_entropy_alloy.tooltip": "HIGH ENTROPY ALLOY",
        "item.kubejs.high_entropy_alloy.tooltip.summary": "Used in making _powerful_ items.",
        "item.kubejs.final_pickaxe.tooltip": "FINAL PICKAXE",
        "item.kubejs.final_pickaxe.tooltip.summary": "Tear through mountains without a care in the world.",
        "item.kubejs.final_pickaxe.tooltip.condition1": "Caution!",
        "item.kubejs.final_pickaxe.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
        "item.kubejs.final_axe.tooltip": "FINAL AXE",
        "item.kubejs.final_axe.tooltip.summary": "Nature's bane. Deforestation manifested.",
        "item.kubejs.final_axe.tooltip.condition1": "Caution!",
        "item.kubejs.final_axe.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
        "item.kubejs.final_shovel.tooltip": "FINAL SHOVEL",
        "item.kubejs.final_shovel.tooltip.summary": "Terraform with ease.",
        "item.kubejs.final_shovel.tooltip.condition1": "Caution!",
        "item.kubejs.final_shovel.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
        "item.kubejs.final_hoe.tooltip": "FINAL HOE",
        "item.kubejs.final_hoe.tooltip.summary": "_Life_ and _death_ in one. Farm for _eternity_.",
        "item.kubejs.final_hoe.tooltip.condition1": "Caution!",
        "item.kubejs.final_hoe.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
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
        "item.kubejs.final_helmet.tooltip.behaviour1": "Become _invulnerable_ to _all_ damage, including falling out of the world.",
        "item.kubejs.final_chestplate.tooltip": "FINAL CHESTPLATE",
        "item.kubejs.final_chestplate.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
        "item.kubejs.final_chestplate.tooltip.condition1": "On wearing the full set",
        "item.kubejs.final_chestplate.tooltip.behaviour1": "Become _invulnerable_ to _all_ damage, including falling out of the world.",
        "item.kubejs.final_leggings.tooltip": "FINAL LEGGINGS",
        "item.kubejs.final_leggings.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
        "item.kubejs.final_leggings.tooltip.condition1": "On wearing the full set",
        "item.kubejs.final_leggings.tooltip.behaviour1": "Become _invulnerable_ to _all_ damage, including falling out of the world.",
        "item.kubejs.final_boots.tooltip": "FINAL BOOTS",
        "item.kubejs.final_boots.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
        "item.kubejs.final_boots.tooltip.condition1": "On wearing the full set",
        "item.kubejs.final_boots.tooltip.behaviour1": "Become _invulnerable_ to _all_ damage, including falling out of the world.",
        "item.ftbquests.book.tooltip": "FTBQUESTS BOOK",
        "item.ftbquests.book.tooltip.summary": "This book _provides_ easy access to the quests screen and some _useful_ information in its tooltip.",
        "item.ftbquests.book.tooltip.condition1": "On R-click",
        "item.ftbquests.book.tooltip.behaviour1": "Opens the _quests_ screen. Be sure to read everything!",
        "item.ftbquests.book.tooltip.condition2": "Other methods of accessing quests",
        "item.ftbquests.book.tooltip.behaviour2": "You can also _access_ quests by opening your _inventory screen_ and _looking_ at the _top left_ corner of your screen.",
        "item.ftbquests.book.tooltip.condition3": "Chunk pre-generation",
        "item.ftbquests.book.tooltip.behaviour3": "Type _/chunky start minecraft:overworld_ to _pregenerate chunks_ in hopes of reducing TPS lag while exploring. This command is also available for _other dimensions_.",
        "item.ftbquests.book.tooltip.condition4": "Default Keybinds - Crawling",
        "item.ftbquests.book.tooltip.behaviour4": "Press _X_ to _crawl_ which allows you to get into _one block spaces_. Very useful!",
        "item.ftbquests.book.tooltip.condition5": "Default Keybinds - Camera Zoom",
        "item.ftbquests.book.tooltip.behaviour5": "Press _C_ to _zoom in_. _Scroll_ to _adjust_ zoom level.",
        "item.ftbquests.book.tooltip.condition6": "Default Keybinds - Sitting",
        "item.ftbquests.book.tooltip.behaviour6": "Press _N_ to _toggle_ the _sitting position_.",
        "item.ftbquests.book.tooltip.condition7": "Default Keybinds - Real Camera",
        "item.ftbquests.book.tooltip.behaviour7": "Don't like the camera being attached to the player head realistically? Press _F6_ to _toggle_ the perspective.",
        "item.bhc.red_heart.tooltip": "RED HEART",
        "item.bhc.red_heart.tooltip.summary": "Adds more health when used with the _Heart Amulet_ as a Red Heart Canister.",
        "item.bhc.red_heart.tooltip.condition1": "When melted",
        "item.bhc.red_heart.tooltip.behaviour1": "Used for making Melted Yellow Hearts which can then be _upgraded_ further.",
    })
    if (Platform.isLoaded('create_power_loader')) {
        event.addAll('create_power_loader', {
            "block.create_power_loader.andesite_chunk_loader.tooltip": "ANDESITE CHUNK LOADER",
            "block.create_power_loader.andesite_chunk_loader.tooltip.summary": "Loads a single chunk when given _rotational_ energy. Also works on _moving_ contraptions!",
            "block.create_power_loader.andesite_chunk_loader.tooltip.condition1": "Requirements",
            "block.create_power_loader.andesite_chunk_loader.tooltip.behaviour1": "A _minimum_ RPM threshold of _60_ is needed for operation.",
            "block.create_power_loader.brass_chunk_loader.tooltip": "BRASS CHUNK LOADER",
            "block.create_power_loader.brass_chunk_loader.tooltip.summary": "Highly _configurable_. Loads a _maximum_ region size of _5x5_ chunks when given _rotational_ energy and works on _moving_ contraptions.",
            "block.create_power_loader.brass_chunk_loader.tooltip.condition1": "Requirements",
            "block.create_power_loader.brass_chunk_loader.tooltip.behaviour1": "A _minimum_ RPM threshold of _60_ is needed for operation. Larger chunk loading settings require more RPM.",
        })
    }
    if (Platform.isLoaded('createchunkloading')) {
        event.addAll('createchunkloading', {
            "block.createchunkloading.chunk_loader.tooltip": "CHUNK LOADER",
            "block.createchunkloading.chunk_loader.tooltip.summary": "Glue to Create _contraptions_ or _trains_ to give them the ability to _load_ chunks around them while they are moving.",
        })
    }
    if (Platform.isLoaded('malum')) {
        itemCb2(
            'kubejs', 'final_scythe',
            'Soul Piercing', 'Has the ability to _shatter_ souls! Use with _caution_.'
        )
        itemCb2(
            'kubejs', 'final_katana',
            'Soul Piercing', 'Has the ability to _shatter_ souls! Use with _caution_.'
        )
        itemT('malum', 'encyclopedia_arcana', 'ENCYCLOPEDIA ARCANA')
        itemSu('malum', 'encyclopedia_arcana', 'Your guide to the _dark arts_ of _Malum_.')
        itemT('malum', 'spirit_pouch', 'SPIRIT POUCH')
        itemSu('malum', 'spirit_pouch', '_Automatically stores souls_ that you acquire. No longer will you have to worry about storage on your person.')
        itemCb1('malum', 'spirit_pouch', 'On R-Click', '_Opens_ the Spirit Pouch inventory.')
        itemT('malum', 'tyrving', 'TYRVING')
        itemSu('malum', 'tyrving', 'Deals _direct damage_ to the _soul_ of the entity that gets hit.')
        /*event.addAll('malum', {
            "item.malum.encyclopedia_arcana.tooltip": "ENCYCLOPEDIA ARCANA",
            "item.malum.encyclopedia_arcana.tooltip.summary": "Your guide to the _dark arts_ of _Malum_.",
            "item.malum.tyrving.tooltip": "TYRVING",
            "item.malum.tyrving.tooltip.summary": "Deals _direct damage_ to the _soul_ of the entity that gets hit."
        })*/
    }

    event.addAll('create', {
        // create death messages
        "death.attack.create.crush": "%1$s was processed by Crushing Wheels, an unfortunate accident.",
        "death.attack.create.crush.player": "%1$s was thrown into Crushing Wheels by %2$s. The ultimate betrayal by a fellow engineer!",
        "death.attack.create.fan_fire": "%1$s got smoked by an Encased Fan",
        "death.attack.create.fan_fire.player": "%1$s was thrown into a smoker by %2$s. Does anyone smell bacon?",
        "death.attack.create.fan_lava": "%1$s was incinerated by an Encased Fan",
        "death.attack.create.fan_lava.player": "%1$s was thrown into a smelter by %2$s",
        "death.attack.create.mechanical_drill": "%1$s was impaled by a Mechanical Drill",
        "death.attack.create.mechanical_drill.player": "%1$s was thrown in front of a Drill by %2$s",
        "death.attack.create.mechanical_roller": "%1$s was flattened by a Mechanical Roller",
        "death.attack.create.mechanical_roller.player": "%1$s was thrown in front of a Mechanical Roller by %2$s",
        "death.attack.create.mechanical_saw": "%1$s got cut in half by a Mechanical Saw",
        "death.attack.create.mechanical_saw.player": "%1$s was thrown into a Saw by %2$s",
        "death.attack.create.potato_cannon": "%1$s was shot by %2$s's Potato Cannon",
        "death.attack.create.potato_cannon.item": "%1$s was shot by %2$s using %3$s",
        "death.attack.create.cuckoo_clock_explosion": "%1$s was blown up by tampered cuckoo clock",
        "death.attack.create.cuckoo_clock_explosion.player": "%1$s was blown up by tampered cuckoo clock",
        "death.attack.create.run_over": "%1$s was run over by %2$s",
        // tooltips
        "block.create.seat.tooltip": "SEAT",
        "block.create.seat.tooltip.summary": "Sit yourself down and enjoy the ride! Will anchor a player onto a _moving contraption_. Great for static furniture too! Comes in a variety of colours.",
        "block.create.seat.tooltip.condition1": "R-Click on Seat",
        "block.create.seat.tooltip.behaviour1": "Sits the player on the _Seat_. Press _[Shift]_ to leave the _Seat_.",
        "item.create.blaze_cake.tooltip": "BLAZE CAKE",
        "item.create.blaze_cake.tooltip.summary": "A delicious treat for your hard-working _Blaze Burners_. Gets them all fired up!"
    })

    if (Platform.isLoaded('roughlyenoughitems')) {
        event.add('text.rei.recipe_id', '\n%sRecipe ID: %s')
    }

    if (Platform.isLoaded('aether')) {
        event.addAll('aether', {
            "item.aether.book_of_lore.tooltip": "BOOK OF LORE",
            "item.aether.book_of_lore.tooltip.summary": "Place an item from _The Aether_ mod in the slot to learn more about it."
        })
    }

    if (Platform.isLoaded('alexsmobs')) {
        event.addAll('alexsmobs', {
            "alexsmobs.potion.soulsteal.desc": "Your attacks are granted life-steal.",
            "alexsmobs.potion.bug_pheromones.desc": "Makes hostile arthopods neutral to you.",
            "alexsmobs.potion.poison_resistance.desc": "Grants immunity to poison."
        })
    }

    if (Platform.isLoaded('apotheosis') && Platform.isLoaded('gateways')) {
        event.addAll('kubejs', {
            "kubejs.drowned_gate_small": "Small Drowned Gate",
            "kubejs.drowned_gate": "Drowned Gate",
            "kubejs.drowned_gate_large": "Large Drowned Gate",
            "kubejs.husk_gate_small": "Small Husk Gate",
            "kubejs.husk_gate": "Husk Gate",
            "kubejs.husk_gate_large": "Large Husk Gate",
            "kubejs.hoglin_gate_small": "Small Hoglin Gate",
            "kubejs.hoglin_gate": "Hoglin Gate",
            "kubejs.hoglin_gate_large": "Large Hoglin Gate",
            "kubejs.boss_gate": "Apothic Boss Gate",
            "kubejs.boss_gate_large": "Large Apothic Boss Gate"
        })
        event.addAll('apotheosis', {
            "item.apotheosis.vial_of_expulsion.tooltip": "VIAL OF EXPULSION",
            "item.apotheosis.vial_of_expulsion.tooltip.summary": "Used in a _Smithing Table_ to _destroy_ socketed Apothic Gems and _preserve_ the Affixed item.",
            "item.apotheosis.vial_of_extraction.tooltip": "VIAL OF EXTRACTION",
            "item.apotheosis.vial_of_extraction.tooltip.summary": "Used in a _Smithing Table_ to _preserve_ socketed Apothic Gems at the cost of _destroying_ the Affixed item."
        })
    }

    if (Platform.isLoaded('atmospheric')) {
        event.addAll('atmospheric', {
            "effect.atmospheric.relief.desc": "If incoming damage is greater than or equal to the effect level you are healed, healing received is equal to that effect level.",
            "effect.atmospheric.worseining.desc": "If incoming damage is greater than or equal to the effect the user is damaged, damage received is equal to the effect level."
        })
    }

    if (Platform.isLoaded('autumnity')) {
        event.addAll('autumnity', {
            "effect.autumnity.extension.desc": "Any effects gained while the user has this effect gain an additional 30 seconds. Does not stack!",
            "block.autumnity.sappy_maple_log.tooltip": "SAPPY MAPLE LOG",
            "block.autumnity.sappy_maple_log.tooltip.summary": "A maple log with sap flowing out.",
            "block.autumnity.sappy_maple_log.tooltip.condition1": "When right clicked with a glass bottle",
            "block.autumnity.sappy_maple_log.tooltip.behaviour1": "Extracts the sap and converts it into an ordinary wooden log.",
            "block.autumnity.sappy_maple_wood.tooltip": "SAPPY MAPLE WOOD",
            "block.autumnity.sappy_maple_wood.tooltip.summary": "Extracts the sap and converts it into an ordinary wood block.",
            "item.autumnity.foul_berries.tooltip": "FOUL BERRIES",
            "item.autumnity.foul_berries.tooltip.summary": "Can be fed to turkeys.",
            "item.autumnity.turkey.tooltip": "TURKEY",
            "item.autumnity.turkey.tooltip.summary": "It's raw turkey, what did you expect?",
            "item.autumnity.turkey.tooltip.condition1": "When dropped on player",
            "item.autumnity.turkey.tooltip.behaviour1": "Gets _stuck_ on said player's head...",
            "item.autumnity.cooked_turkey.tooltip": "COOKED TURKEY",
            "item.autumnity.cooked_turkey.tooltip.summary": "Autumn's feast. Enjoy!",
            "item.autumnity.cooked_turkey.tooltip.condition1": "When dropped on player",
            "item.autumnity.cooked_turkey.tooltip.behaviour1": "Gets _stuck_ on said player's head..."
        })
    }

    if (Platform.isLoaded('architects_palette')) {
        event.addAll('architects_palette', {
            "block.architects_palette.chiseled_abyssaline_bricks.tooltip": "CHISELED ABYSSALINE BRICKS",
            "block.architects_palette.chiseled_abyssaline_bricks.tooltip.summary": "It looks like a _power source_ from the _ocean_ can fit in this.",
            "block.architects_palette.chiseled_abyssaline_bricks.tooltip.condition1": "On R-click with Heart of the Sea",
            "block.architects_palette.chiseled_abyssaline_bricks.tooltip.behaviour1": "_Activates_ the block and provides _power_ to Abyssaline Lamps.",
            "block.architects_palette.chiseled_hadaline_bricks.tooltip": "CHISELED HADALINE BRICKS",
            "block.architects_palette.chiseled_hadaline_bricks.tooltip.summary": "It looks like a _power source_ from the _ocean_ can fit in this.",
            "block.architects_palette.chiseled_hadaline_bricks.tooltip.condition1": "On R-click with Heart of the Sea",
            "block.architects_palette.chiseled_hadaline_bricks.tooltip.behaviour1": "_Activates_ the block and provides _power_ to Hadaline Lamps.",
        })
    }

    if (Platform.isLoaded('backpacked')) {
        event.addAll('backpacked', {
            "item.backpacked.backpack.tooltip": "BACKPACK",
            "item.backpacked.backpack.tooltip.summary": "Provides lots of _storage_ for your travels.",
            "item.backpacked.backpack.tooltip.condition1": "How to Use",
            "item.backpacked.backpack.tooltip.behaviour1": "To access your _backpack_ simply press _[B]_. Your backpack can also be _enchanted_ with enchantments that will prove useful.",
            "item.backpacked.backpack.tooltip.condition2": "Additional Info",
            "item.backpacked.backpack.tooltip.behaviour2": "After _completing_ certain _challenges_, you _unlock_ new <rainb>looks</rainb> for your backpack!",
        })
    }

    if (Platform.isLoaded('cataclysm')) {
        event.addAll('cataclysm', {
            "item.cataclysm.infernal_forge.tooltip": "INFERNAL FORGE",
            "item.cataclysm.infernal_forge.tooltip.summary": "A _devastating_ hammer. Also important to note, this is actually a pickaxe.",
            "item.cataclysm.infernal_forge.tooltip.condition1": "On R-click while looking at a block",
            "item.cataclysm.infernal_forge.tooltip.behaviour1": "Causes AoE damage around yourself and sends mobs flying.",
            "item.cataclysm.monstrous_helm.tooltip": "MONSTROUS HELM",
            "item.cataclysm.monstrous_helm.tooltip.summary": "Falling below _half_ of your HP will push away entities and _grant_ buffs.",
            "item.cataclysm.monstrous_helm.tooltip.condition1": "Additional Information",
            "item.cataclysm.monstrous_helm.tooltip.behaviour1": "You are given additional Defense, Knockback Resistance and Regeneration.",
            "item.cataclysm.burning_ashes.tooltip": "BURNING ASHES",
            "item.cataclysm.burning_ashes.tooltip.summary": "Used in _summoning_ _Ignis_.",
            "item.cataclysm.the_incinerator.tooltip": "THE INCINERATOR",
            "item.cataclysm.the_incinerator.tooltip.summary": "A very large sword.",
            "item.cataclysm.the_incinerator.tooltip.condition1": "Usage",
            "item.cataclysm.the_incinerator.tooltip.behaviour1": "Hold _right click_ for 3 seconds until you hear a sound. After _hearing_ the roar of the flames, let go to unleash _devastation_ in a _straight line_.",
            "item.cataclysm.the_incinerator.tooltip.condition2": "Warning!",
            "item.cataclysm.the_incinerator.tooltip.behaviour2": "Dropped items in the line of fire will be destroyed!",
            "item.cataclysm.bulwark_of_the_flame.tooltip": "BULWARK OF THE FLAME",
            "item.cataclysm.bulwark_of_the_flame.tooltip.summary": "Functions regularly like a shield, but with a charge ability.",
            "item.cataclysm.bulwark_of_the_flame.tooltip.condition1": "Usage",
            "item.cataclysm.bulwark_of_the_flame.tooltip.behaviour1": "While _sneaking_ and _blocking_, let go of right click to charge forward. Entities that collide with a wall are stunned from the impact and take additional damage.",
            "item.cataclysm.void_scatter_arrow.tooltip": "VOID SCATTER ARROW",
            "item.cataclysm.void_scatter_arrow.tooltip.summary": "This arrow _explodes_ on impact, creating many _fragments_ in the process.",
            "item.cataclysm.void_core.tooltip": "VOID CORE",
            "item.cataclysm.void_core.tooltip.summary": "A special object that can be used as a weapon.",
            "item.cataclysm.void_core.tooltip.condition1": "Usage",
            "item.cataclysm.void_core.tooltip.behaviour1": "Right click on the ground to cause Void Rune _spikes_ to _erupt_ in a straight line in front of you.",
            "item.cataclysm.gauntlet_of_guard.tooltip": "GAUNTLET OF GUARD",
            "item.cataclysm.gauntlet_of_guard.tooltip.summary": "A very hard punching glove with special abilities.",
            "item.cataclysm.gauntlet_of_guard.tooltip.condition1": "On R-click",
            "item.cataclysm.gauntlet_of_guard.tooltip.behaviour1": "When held in your main hand, you can _pull_ entities _towards_ you by holding right click. Be sure to give them a golden punch afterwards!",
            "item.cataclysm.ignitium_helmet.tooltip": "IGNITIUM HELMET",
            "item.cataclysm.ignitium_helmet.tooltip.summary": "Provides Lava Vision.",
            "item.cataclysm.ignitium_chestplate.tooltip": "IGNITIUM CHESTPLATE",
            "item.cataclysm.ignitium_chestplate.tooltip.summary": "You can combine an Elytra with this in the Smithing Table.",
            "item.cataclysm.ignitium_leggings.tooltip": "IGNITIUM LEGGINGS",
            "item.cataclysm.ignitium_leggings.tooltip.summary": "The developer, _L_Ender_ says 'Flame Reflex' ...but the item fails to give any form of Fire Resistance.",
            "item.cataclysm.ignitium_boots.tooltip": "IGNITIUM BOOTS",
            "item.cataclysm.ignitium_boots.tooltip.summary": "Lava Walker, allows you to walk on lava. DOES NOT provide Fire Resistance, even with the full set!",
            "item.cataclysm.wither_assault_shoulder_weapon.tooltip": "WITHER ASSAULT SHOULDER WEAPON",
            "item.cataclysm.wither_assault_shoulder_weapon.tooltip.summary": "A rocket launcher that _shoots_ projectiles laced with the _wither_ effect.",
            "item.cataclysm.wither_assault_shoulder_weapon.tooltip.condition1": "On R-click",
            "item.cataclysm.wither_assault_shoulder_weapon.tooltip.behaviour1": "_Hold_ and _release_ right click to _fire_ a _Wither Missile_ that travels in a _straight line_ and explodes on contact.",
            "item.cataclysm.wither_assault_shoulder_weapon.tooltip.condition2": "On Sneak + R-click",
            "item.cataclysm.wither_assault_shoulder_weapon.tooltip.behaviour2": "_Hold [Shift]_ to use the _alt fire_ which fires a _Wither Howitzer_ projectile that follows an _arced_ path. Upon contact, the Howitzer projectile leaves behind _lingering smoke_ that applies the _wither_ effect.",
            "item.cataclysm.void_forge.tooltip": "VOID FORGE",
            "item.cataclysm.void_forge.tooltip.summary": "The power of a supernova is contained within. Yes, this is _still a pickaxe_.",
            "item.cataclysm.void_forge.tooltip.condition1": "On R-click on a block",
            "item.cataclysm.void_forge.tooltip.behaviour1": "Now creates a _fan of void spikes_ when you _right click_ a block, in addition to sending mobs flying.",
            "item.cataclysm.gauntlet_of_bulwark.tooltip": "GAUNTLET OF BULWARK",
            "item.cataclysm.gauntlet_of_bulwark.tooltip.summary": "A fist with the _punching_ power of planets colliding.",
            "item.cataclysm.gauntlet_of_bulwark.tooltip.condition1": "Usage",
            "item.cataclysm.gauntlet_of_bulwark.tooltip.behaviour1": "Hold right click to _push_ nearby entities and give them the _Blazing Brand_ debuff. _Releasing_ right click will make you _charge_ forward and deal damage to the entities hit by you. Entities that hit the wall take a lot of damage.",
            "item.cataclysm.void_assault_shoulder_weapon.tooltip": "VOID ASSAULT SHOULDER WEAPON",
            "item.cataclysm.void_assault_shoulder_weapon.tooltip.summary": "The _upgraded_ version of the Wither Assault Shoulder Weapon. The power of supernovae contained within each projectile.",
            "item.cataclysm.void_assault_shoulder_weapon.tooltip.condition1": "Usage",
            "item.cataclysm.void_assault_shoulder_weapon.tooltip.behaviour1": "You can now _shoot_ Void Howitzer projectiles which now _create_ a tsunami of void spikes on impact.",
            "item.cataclysm.abyssal_sacrifice.tooltip": "ABYSSAL SACRIFICE",
            "item.cataclysm.abyssal_sacrifice.tooltip.summary": "Used in _summoning_ the _Leviathan_.",
            "item.cataclysm.tidal_claws.tooltip": "TIDAL CLAWS",
            "item.cataclysm.tidal_claws.tooltip.summary": "_Long ranged_ and _deadly_. Also serves as a grappling hook.",
            "item.cataclysm.tidal_claws.tooltip.condition1": "On L-click",
            "item.cataclysm.tidal_claws.tooltip.behaviour1": "Left click to attack _multiple_ entities with a single tentacle. Applies a _stacking_ debuff.",
            "item.cataclysm.tidal_claws.tooltip.condition2": "On R-click",
            "item.cataclysm.tidal_claws.tooltip.behaviour2": "Right click to use as a grappling hook. Remember that it has _limited_ range!",
            "block.cataclysm.abyssal_egg.tooltip": "ABYSSAL EGG",
            "block.cataclysm.abyssal_egg.tooltip.summary": "You emerge as victor, but now you have an _egg_ in your possession.",
            "block.cataclysm.abyssal_egg.tooltip.condition1": "Info",
            "block.cataclysm.abyssal_egg.tooltip.behaviour1": "Probably best to make sure you have some _tropical fish_ to _feed_ your adorable Leviathan once it hatches.",
            "item.cataclysm.bloom_stone_pauldrons.tooltip": "BLOOM STONE PAULDRONS",
            "item.cataclysm.bloom_stone_pauldrons.tooltip.summary": "A special chestplate.",
            "item.cataclysm.bloom_stone_pauldrons.tooltip.condition1": "On Sneak while equipped",
            "item.cataclysm.bloom_stone_pauldrons.tooltip.behaviour1": "Lets you _hide_ in the ground.",
            "item.cataclysm.bloom_stone_pauldrons.tooltip.condition2": "Upon releasing the Sneak key",
            "item.cataclysm.bloom_stone_pauldrons.tooltip.behaviour2": "Releases amethyst clusters _around_ you. Clusters that _collide_ with entities _cause damage_ to them.",
            "item.cataclysm.blessed_amethyst_crab_meat.tooltip": "BLESSED AMETHYST CRAB MEAT",
            "item.cataclysm.blessed_amethyst_crab_meat.tooltip.summary": "Grants the special _blessing_ effect which makes you _immune to _darkness_, _abyssal fear_ and _abyssal burn_ while fighting the _Leviathan_.",
            "item.cataclysm.abyss_eye.tooltip": "ABYSS EYE",
            "item.cataclysm.abyss_eye.tooltip.summary": "_Guides_ you to the _closest_ Sunken City where the _Leviathan_ resides. Only usable in the _Overworld_. Unusable in other dimensions.",
            "item.cataclysm.abyss_eye.tooltip.condition1": "On R-click",
            "item.cataclysm.abyss_eye.tooltip.behaviour1": "Throws the _Abyss Eye_ into the air. _Follow_ it.",
            "item.cataclysm.void_eye.tooltip": "VOID EYE",
            "item.cataclysm.void_eye.tooltip.summary": "_Guides_ you to the _closest_ Ruined Citadel where the _Ender Guardian_ resides. Only usable in _The End_. Unusable in other dimensions.",
            "item.cataclysm.void_eye.tooltip.condition1": "On R-click",
            "item.cataclysm.void_eye.tooltip.behaviour1": "Throws the _Void Eye_ into the air. _Follow_ it.",
            "item.cataclysm.mech_eye.tooltip": "MECH EYE",
            "item.cataclysm.mech_eye.tooltip.summary": "_Guides_ you to the _closest_ Ancient Factory where the _Harbinger_ resides. Only usable in the _Overworld_. Unusable in other dimensions.",
            "item.cataclysm.mech_eye.tooltip.condition1": "On R-click",
            "item.cataclysm.mech_eye.tooltip.behaviour1": "Throws the _Mech Eye_ into the air. _Follow_ it.",
            "item.cataclysm.flame_eye.tooltip": "FLAME EYE",
            "item.cataclysm.flame_eye.tooltip.summary": "_Guides_ you to the _closest_ Burning Arena where _Ignis_ resides. Only usable in the _Nether_. Unusable in other dimensions.",
            "item.cataclysm.flame_eye.tooltip.condition1": "On R-click",
            "item.cataclysm.flame_eye.tooltip.behaviour1": "Throws the _Flame Eye_ into the air. _Follow_ it.",
            "item.cataclysm.monstrous_eye.tooltip": "MONSTROUS EYE",
            "item.cataclysm.monstrous_eye.tooltip.summary": "_Guides_ you to the _closest_ Sunken City where the _Leviathan_ resides.",
            "item.cataclysm.monstrous_eye.tooltip.condition1": "On R-click",
            "item.cataclysm.monstrous_eye.tooltip.behaviour1": "Throws the _Monstrous Eye_ into the air. _Follow_ it."
        })
    }

    if (Platform.isLoaded('chalk')) {
        event.addAll('chalk', {
            "item.chalk.chalk_box.tooltip": "CHALK BOX",
            "item.chalk.chalk_box.tooltip.summary": "Allows you to use _store_ and _switch_ between chalks. It also allows you to add a _glowing_ effect to your chalk if you have any _glow ink sacs_ in the special slot.",
            "item.chalk.chalk_box.tooltip.condition1": "On right click while not looking at any blocks",
            "item.chalk.chalk_box.tooltip.behaviour1": "Opens the GUI for access to stored chalks.",
            "item.chalk.chalk_box.tooltip.condition2": "Additional Info",
            "item.chalk.chalk_box.tooltip.behaviour2": "Marks are drawn with the _leftmost chalk_ in order. To change _active_ chalk, simply _[Shift]_ + _[R-click]_ while _not looking_ at any block with the Chalk Box in hand."
        })
        Object.keys(DYE).forEach(insert => {
            event.add('chalk', `item.chalk.${insert}_chalk.tooltip`, `${DYE[insert]} CHALK`);
            event.add('chalk', `item.chalk.${insert}_chalk.tooltip.summary`, "Useful for _planning_, _navigation_ and drawing. Can be stored in the _Chalk Box_ for easier management and utility. _Additional symbols_ are _unlocked_ through advancements.");
            event.add('chalk', `item.chalk.${insert}_chalk.tooltip.condition1`, "Usage");
            event.add('chalk', `item.chalk.${insert}_chalk.tooltip.behaviour1`, "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.");
            event.add('chalk', `item.chalk.${insert}_chalk.tooltip.condition2`, "On Shift + R-click");
            event.add('chalk', `item.chalk.${insert}_chalk.tooltip.behaviour2`, "Allows you to change different symbols.");
            event.add('chalk', `item.chalk.${insert}_chalk.tooltip.condition3`, "Usage with Chalk Box");
            event.add('chalk', `item.chalk.${insert}_chalk.tooltip.behaviour3`, "Simply _right click_ as if you were using the chalk by itself in the first place.");
        })
    }

    if (Platform.isLoaded('chipped')) {
        event.add('chipped', 'block.chipped.arched_leaded_glass_pane_pillar.tooltip', 'CHIPPED LEADED GLASS PANE PILLAR')
        event.add('chipped', 'block.chipped.arched_leaded_glass_pane_pillar.tooltip.summary', 'The textures are _currently broken_ and will not show correctly. It has also been confirmed that the textures are not working as intended _with or without_ Embeddium.')
        Object.keys(DYE).forEach(insert => {
            event.add('chipped', `block.chipped.arched_${insert}_stained_glass_pane_pillar.tooltip`, `ARCHED ${DYE[insert]} STAINED GLASS PANE PILLAR`) //'chipped:arched_black_stained_glass_pane_pillar'
            event.add('chipped', `block.chipped.arched_${insert}_stained_glass_pane_pillar.tooltip.summary`, 'The textures are _currently broken_ and will not show correctly. It has also been confirmed that the textures are not working as intended _with or without_ Embeddium.')
        })
    }

    if (Platform.isLoaded('cloudstorage')) {
        event.addAll({
            "item.cloudstorage.balloon_bit.tooltip": "BALLOON BIT",
            "item.cloudstorage.balloon_bit.tooltip.summary": "With the power of the Crafting Table, you can make a new _balloon_ from _these pieces_.",
            "item.cloudstorage.balloon_bit.condition1": "On right click as a balloon",
            "item.cloudstorage.balloon_bit.behaviour1": "_Assigns_ the _Cloud Chest_ or _Static Cloud Chest_ that respective channel. Static Cloud Chests require a balloon with a _static charge_.",
            "block.cloudstorage.balloon_stand.tooltip": "BALLOON STAND",
            "block.cloudstorage.balloon_stand.tooltip.summary": "Used for _reading_ statistics for individual balloon channels and allows for the _copying_ of balloon colors.",
            "block.cloudstorage.balloon_stand.tooltip.condition1": "Top slot usage",
            "block.cloudstorage.balloon_stand.tooltip.behaviour1": "Used for _reading_ the statistics about the cloud storage _linked_ to that balloon.",
            "block.cloudstorage.balloon_stand.tooltip.condition2": "Bottom slot usage",
            "block.cloudstorage.balloon_stand.tooltip.behaviour2": "Used for _applying_ the _color_ of the balloon in the bottom slot to the balloon in the top slot.",
            "block.cloudstorage.cloud_chest.tooltip": "CLOUD CHEST",
            "block.cloudstorage.cloud_chest.tooltip.summary": "Personal and private. It's expandable too!",
            "block.cloudstorage.cloud_chest.tooltip.condition1": "How to Expand Storage",
            "block.cloudstorage.cloud_chest.tooltip.behaviour1": "Firstly, craft a few chests. Then using the _same balloon assigned_ to your Cloud Chest, send them up to the sky... literally.",
            "block.cloudstorage.cloud_chest.tooltip.condition2": "How to Switch Channels",
            "block.cloudstorage.cloud_chest.tooltip.behaviour2": "Right click the cloud chest with a _normal_ balloon in your hand, not one with a static charge.",
            "block.cloudstorage.static_cloud_chest.tooltip": "STATIC CLOUD CHEST",
            "block.cloudstorage.static_cloud_chest.tooltip.summary": "The publicly accessible cloud chest.",
            "block.cloudstorage.static_cloud_chest.tooltip.condition1": "How to Expand Storage",
            "block.cloudstorage.static_cloud_chest.tooltip.behaviour1": "Unlike the normal cloud chest, a static cloud chest uses balloons with a _static charge_. So if you want to expand storage for your static cloud chest MAKE SURE you use balloons with a _static charge_.",
            "block.cloudstorage.static_cloud_chest.tooltip.condition2": "How to Switch Channels",
            "block.cloudstorage.static_cloud_chest.tooltip.behaviour2": "The process is similar to the regular cloud chest, just use balloons with a _static charge_."
        })
    }

    if (Platform.isLoaded('collectorsreap')) {
        event.addAll('collectorsreap', {
            "block.collectorsreap.portobello.tooltip": "PORTOBELLO",
            "block.collectorsreap.portobello.tooltip.summary": "Needs to be on _Rich Soil_ to grow."
        })
    }

    if (Platform.isLoaded('eccentrictome')) {
        event.addAll('eccentrictome', {
            "eccentrictome.convert": "Shift + Right-click",
            "eccentrictome.name": "Eccentric Tome (%s)",
            "item.eccentrictome.tome": "Eccentric Tome",
            "item.eccentrictome.tome.tooltip": "TOME",
            "item.eccentrictome.tome.tooltip.summary": "<rainb>Condenses many tools and books into <rainb>one.</rainb> Elegantly <rainb>presents</rainb> all the tools and books _stored_ within it upon right click.",
            "item.eccentrictome.tome.tooltip.condition1": "How to add items",
            "item.eccentrictome.tome.tooltip.behaviour1": "Combine _while in book form_ in a crafting grid _with_ the item you want to _store_. Pickaxes, axes, shovels, hoes, shears, the _Wand of Symmetry_ and _Wrench_ from Create are all permitted.",
            "item.eccentrictome.tome.tooltip.condition2": "Warning 1",
            "item.eccentrictome.tome.tooltip.behaviour2": "_DO NOT_ USE AS A CRAFTING INGREDIENT OR YOU WILL _LOSE ALL STORED ITEMS!_",
            "item.eccentrictome.tome.tooltip.condition3": "Warning 2",
            "item.eccentrictome.tome.tooltip.behaviour3": "Storing items with the _same_ item ID _even_ when _uniquely named_ will _destroy all other copies_, so _do not store_ two Diamond Pickaxes _together_ in the Eccentric Tome!",
            "item.eccentrictome.tome.tooltip.condition4": "Warning 3",
            "item.eccentrictome.tome.tooltip.behaviour4": "Be careful when _using_ the _Wand of Symmetry_ as it can _bypass_ the durability protections on tools that are _about to break_. You will _lose the tome_ if the item _actually_ breaks.",
            "item.eccentrictome.tome.tooltip.control1": "Right click",
            "item.eccentrictome.tome.tooltip.action1": "To select everything stored.",
            "item.eccentrictome.tome.tooltip.control2": "Shift + Left Click (while transformed as another item)",
            "item.eccentrictome.tome.tooltip.action2": "To _remove_ items from the reality breaking pocket universe within this book, simply _crouch_ and drop with the item you want to remove.",
            "item.eccentrictome.tome.tooltip.control3": "On Left click while not looking at a block",
            "item.eccentrictome.tome.tooltip.action3": "_Returns_ the tome back to its original form. Just make sure to be punching the air and not a block."
        })
    }

    if (Platform.isLoaded('enigmaticlegacy') && Platform.isLoaded('apotheosis')) {
        event.addAll('kubejs', {
            "item.enigmaticlegacy.enchanter_pearl.tooltip": "ENCHANTER PEARL",
            "item.enigmaticlegacy.enchanter_pearl.tooltip.summary": "Currently _useless_ in 1.19.2 due to lack of compatibility with Apotheosis."
        })
    }

    if (Platform.isLoaded('etched')) {
        event.addAll('etched', {
            "item.etched.boombox.tooltip": "BOOMBOX",
            "item.etched.boombox.tooltip.summary": "Become a _walking_ jukebox for all to hear.",
            "item.etched.boombox.tooltip.condition1": "On Shift + R-click",
            "item.etched.boombox.tooltip.behaviour1": "_Pauses_ audio playback.",
            "item.etched.boombox.tooltip.condition2": "On R-click with Music Disc on cursor",
            "item.etched.boombox.tooltip.behaviour2": "_Inserts_ Music Disc into boombox."
        })
    }

    if (Platform.isLoaded('exposure')) {
        blockT('exposure', 'lightroom', 'LIGHTROOM')
        blockSu('exposure', 'lightroom',
            'Where your photographs come to life. Have some _paper_ ready to print your photos onto!'
        )
        blockCb1('exposure', 'lightroom',
            'For black and white photos',
            'Put _black dye_ in the fourth slot.'
        )
        blockCb2('exposure', 'lightroom',
            'For color film',
            'Put _cyan_, _magenta_, and _yellow_ dye in that order in the bottom dye slots.'
        )
        itemT('exposure', 'camera', 'TOOLTIP')
        itemSu('exposure', 'camera', 'Feel free to _capture_ special moments or your creations with this camera.')
        itemCb1('exposure', 'camera',
            'On Sneak + R-Click',
            'Opens the _configuration_ screen.'
        )
        itemCb2('exposure', 'camera',
            'On Sneak while in photo-taking mode',
            'Allows for _fine-tuning_ of the camera.'
        )
        itemCb3('exposure', 'camera',
            'After use',
            '_Wash_ your film after using it with a _Bottle of Water_. Use a _Lightroom_ to _view_ and _print_ your photos.'
        )
        itemT('exposure', 'black_and_white_film', 'BLACK AND WHITE FILM')
        itemSu('exposure', 'black_and_white_film', 'Takes a photograph in monochromatic _black and white_.')
        itemT('exposure', 'color_film', 'COLOR FILM')
        itemSu('exposure', 'color_film', 'Takes a photograph in _color_.')
        itemT('exposure', 'developed_black_and_white_film', 'DEVELOPED BLACK AND WHITE FILM')
        itemSu('exposure', 'developed_black_and_white_film', 'The next step is to _wash_ the film with a _small amount of water_.')
        itemT('exposure', 'developed_color_film', 'DEVELOPED COLOR FILM')
        itemSu('exposure', 'developed_color_film', 'The next step is to _wash_ the film with a _small amount of water_.')
    }

    if (Platform.isLoaded('extendedcrafting')) {
        event.addAll('extendedcrafting', {
            "item.extendedcrafting.handheld_table.tooltip": "HANDHELD TABLE",
            "item.extendedcrafting.handheld_table.tooltip.summary": "A _handheld_ Crafting Table.",
            "item.extendedcrafting.handheld_table.tooltip.condition1": "Purpose",
            "item.extendedcrafting.handheld_table.tooltip.behaviour1": "You _never_ have to use a Crafting Table block again! It is literally a hand held Crafting Table, what more can you ask for?",
            "item.extendedcrafting.handheld_table.tooltip.control1": "Right click",
            "item.extendedcrafting.handheld_table.tooltip.action1": "Opens the Crafting Table interface.",
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

    if (Platform.isLoaded('goldenhopper')) {
        event.addAll('goldenhopper', {
            "block.goldenhopper.golden_hopper.tooltip": "GOLDEN HOPPER",
            "block.goldenhopper.golden_hopper.tooltip.summary": "Has the ability to _filter_ items based on what is inside the extra item slot."
        })
    }

    if (Platform.isLoaded('graveyard')) {
        event.addAll('graveyard', {
            "item.graveyard.corruption.tooltip": "CORRUPTION",
            "item.graveyard.corruption.tooltip.summary": "A _special trading currency_ which can be used with an NPC residing near a _spooky tree_ at night time.",
            "item.graveyard.corruption.tooltip.condition1": "Other Info",
            "item.graveyard.corruption.tooltip.behaviour1": "Be sure to gather _a lot_ of this as it is needed in _large amounts_ in trading.",
            "block.graveyard.ossuary.tooltip": "OSSUARY",
            "block.graveyard.ossuary.tooltip.summary": "Used for making _death_ related _decor_ from bone blocks."
        })
    }

    if (Platform.isLoaded('irons_spellbooks')) {
        event.addAll('irons_spellbooks', {
            "item.irons_spellbooks.copper_spell_book.tooltip": "COPPER SPELL BOOK",
            "item.irons_spellbooks.copper_spell_book.tooltip.summary": "A _Common_ spell book.",
            "item.irons_spellbooks.copper_spell_book.tooltip.control1": "Pressing Tab",
            "item.irons_spellbooks.copper_spell_book.tooltip.action1": "Allows you to cycle through spells equipped.",
            "effect.irons_spellbooks.instant_mana.desc": "Instantly gain mana!"
        })
    }

    if (Platform.isLoaded('monobank')) {
        event.addAll('monobank', {
            "block.monobank.monobank.tooltip": "MONOBANK",
            "block.monobank.monobank.tooltip.summary": "Both _*secure_ and _blast-proof_ and _holds_ a large amount of a single item. Also does not _burn_ in lava!",
            "block.monobank.monobank.tooltip.condition1": "R-Click as the Owner",
            "block.monobank.monobank.tooltip.behaviour1": "Opens your monobank. Do note that strangers can _lock pick_ your lock.",
            "block.monobank.monobank.tooltip.condition2": "R-Click as a Stranger",
            "block.monobank.monobank.tooltip.behaviour2": "Opens the _lock picking_ interface."
        })
    }

    if (Platform.isLoaded('lilwings')) {
        event.addAll('lilwings', {
            "item.lilwings.butterfly_net.tooltip": "BUTTERFLY NET",
            "item.lilwings.butterfly_net.tooltip.summary": "An essential tool for Lepidopterists just starting out with _collecting_ butterflies. Has a _limited_ amount of uses and can't capture all butterflies.",
            "item.lilwings.butterfly_net.tooltip.condition1": "On R-click on a Butterfly",
            "item.lilwings.butterfly_net.tooltip.behaviour1": "_Captures_ the butterfly.",
            "item.lilwings.butterfly_net.tooltip.condition2": "On R-click on a Butterfly Jar",
            "item.lilwings.butterfly_net.tooltip.behaviour2": "_Places_ the captured butterfly _inside_ the Butterfly Jar.",
            "item.lilwings.enderfly_net.tooltip": "ENDERFLY NET",
            "item.lilwings.enderfly_net.tooltip.summary": "For _expert_ Lepidopterists. Able to capture _all_ butterflies.",
            "item.lilwings.enderfly_net.tooltip.condition1": "On R-click on a Butterfly",
            "item.lilwings.enderfly_net.tooltip.behaviour1": "_Captures_ the butterfly.",
            "item.lilwings.enderfly_net.tooltip.condition2": "On R-click on a Butterfly Jar",
            "item.lilwings.enderfly_net.tooltip.behaviour2": "_Places_ the captured butterfly _inside_ the Butterfly Jar."
        })
    }

    if (Platform.isLoaded('mysticalagriculture')) {
        event.addAll('mysticalagriculture', {
            "block.mysticalagriculture.infusion_altar.tooltip": "INFUSION ALTAR",
            "block.mysticalagriculture.infusion_altar.tooltip.summary": "The _gateway_ to infinity.",
            "block.mysticalagriculture.infusion_altar.tooltip.condition1": "Usage",
            "block.mysticalagriculture.infusion_altar.tooltip.behaviour1": "Requires a total of eight _Infusion Pedestals_ to function and a _redstone_ power source like a _lever_ to initialize the process.",
        })
    }

    if (Platform.isLoaded('grimoireofgaia')) {
        event.addAll('grimoireofgaia', {
            "item.grimoireofgaia.taproot.tooltip": "TAPROOT",
            "item.grimoireofgaia.taproot.tooltip.summary": "Commonly dropped by Dryads, Mandragora and Spriggans.",
            "item.grimoireofgaia.taproot.tooltip.condition1": "When eaten",
            "item.grimoireofgaia.taproot.tooltip.behaviour1": "Despite providing _no_ nutritional value, it serves as a _cure_ for _negative_ status effects."
        })
        let doll_lang = {
            doll_creeper_girl: 'DOLL CREEPER GIRL',
            doll_dryad: 'DOLL DRYAD',
            doll_dullahan: 'DOLL DULLAHAN',
            doll_ender_girl: 'DOLL ENDER GIRL',
            doll_mermaid: 'DOLL MERMAID',
            doll_nine_tails: 'DOLL NINE TAILS',
            doll_slime_girl: 'DOLL SLIME GIRL',
        }
        for (const [caps, CAPS] of Object.entries(doll_lang)) {
            event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip`, CAPS)
            event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.summary`, 'A cute plush doll decoration.')
            event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.condition1`, 'Acquisition Method')
            event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.behaviour1`, 'Can be acquired as a _loot drop_ from Grimoire of Gaia mobs.')
            if (Platform.isLoaded('goblintraders')) {
                event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.condition2`, 'Alternative Acquisition Method')
                event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.behaviour2`, 'Most now be acquired from the Goblin Trader as well, but it is a _rare_ trade.')
            }
        }
        event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip', 'DOLL MAID')
        event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.summary', 'A cute plush doll decoration.')
        event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.condition1', 'Acquisition Method')
        event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.behaviour1', 'Normally unobtainable, but can now drop from Mimics.')
        if (Platform.isLoaded('goblintraders')) {
            event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.condition2', 'Alternative Acquisition Method')
            event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.behaviour2', 'Can now be acquired from the Goblin Trader.')
        }
    }

    if (Platform.isLoaded('quark')) {
        event.addAll('quark', {
            "item.quark.abacus.tooltip": "ABACUS",
            "item.quark.abacus.tooltip.summary": "A tool used to measure distance.",
            "item.quark.abacus.tooltip.condition1": "On R-click",
            "item.quark.abacus.tooltip.behaviour1": "Right click on a block face to measure distance.",
            "block.quark.crate.tooltip": "CRATE",
            "block.quark.crate.tooltip.summary": "Can store a total of 640 _unique_ items. Good for storing items with _many_ variations. Not so good for storing items that are the same _and_ stack."
        })
    }

    if (Platform.isLoaded('red_power')) {
        event.addAll('red_power', {
            "itemGroup.red_power": "Red Power",

            "death.attack.wire": "%1$s was fried with high voltage",

            "feedback.red_power.success": "§aCreated a new §r{#1} §a{#2} block(s) length",
            "feedback.red_power.first_point": "§dFirst point set to §r{#1} §7({#2})",
            "feedback.red_power.reset": "§dSelection resets",
            "feedback.red_power.fail": "§cFailed to create wire, please try again",
            "feedback.red_power.wrong_block": "{#1} §ccan't contain wires",
            "feedback.red_power.connections_limit": "{#1}§c §chas reached connection limit §7({#2}/{#3})",
            "feedback.red_power.cant_transmit": "{#1} §ccan't transmit signal",
            "feedback.red_power.cant_receive": "{#1} §ccan't receive signal",
            "feedback.red_power.distance_limit": "§cMaximum distance exceeded §7({#1}/{#2})",
            "feedback.red_power.identical_points": "§cChoose another position",
            "feedback.red_power.wire_exist": "§cWire already exist, choose another position",
            "feedback.red_power.no_wires": "§cTake the wires in your left hand",
            "feedback.red_power.no_enough_wires": "§cNot enough wires §7({#1}/{#2})",

            "tooltip.red_power.not_dyed": "Not Dyed",
            "tooltip.red_power.attenuation": "- Attenuates every {#1} block(s).",
            "tooltip.red_power.max_length": "- Max length {#1} blocks.",
            "tooltip.red_power.max_connections": "- Allows {#1} connection(s).",

            "tooltip.red_power.common_wires": "Basic wire type with significant signal loss.",
            "tooltip.red_power.amethyst_wires": "Completely invisible wires.",
            "tooltip.red_power.echo_wires": "Reinforced wires with low signal loss.",
            "tooltip.red_power.ender_wires": "Reinforced wires with medium signal loss.",
            "tooltip.red_power.power_wires": "Powerful wires with minimal signal loss.",
            "tooltip.red_power.wrench": "Allows you to create non-physical redstone wires. {#}§2- RMB to select points. {#}§2- Shift + RMB to reset.",
            "tooltip.red_power.creative_wrench": "Allows you to create non-physical redstone wires. Ignores maximum length and number of connections.",
            "tooltip.red_power.cutters": "Allows you to remove non-physical redstone wires. {#}§2- RMB to select wire. {#}§2- Shift + RMB to remove.",
            "tooltip.red_power.safety_glasses": "Displays connections and extended node information.",

            "tooltip.red_power.reader_node": "Reads the redstone signal from the attached block.",
            "tooltip.red_power.node": "Receives and transmits a signal.",
            "tooltip.red_power.recorder_node": "Receives a signal and powers the attached block.",
            "tooltip.red_power.amplifier_node": "Amplifies the power of the input signal up to 10.",
            "tooltip.red_power.hidden_reader_node": "Reads the redstone signal from the attached block. Completely invisible.",
            "tooltip.red_power.hidden_node": "Receives and transmits a signal. Completely invisible.",
            "tooltip.red_power.hidden_recorder_node": "Receives a signal and powers the attached block. Completely invisible.",
            "tooltip.red_power.hidden_amplifier_node": "Amplifies the power of the input signal up to 10. Completely invisible.",
            "tooltip.red_power.core": "Compound node that amplifies signal power up to 15 and suppresses lightning.",
            "tooltip.red_power.not_gate": "Inverts the input signal.",
            "tooltip.red_power.and_gate": "True if all input signals are active.",
            "tooltip.red_power.or_gate": "True if at least one input signal is active.",
            "tooltip.red_power.nand_gate": "True if at least one input signal is inactive.",
            "tooltip.red_power.nor_gate": "True if all input signals are inactive.",
            "tooltip.red_power.xor_gate": "True if only one input signal is active.",
            "tooltip.red_power.xnor_gate": "True if all input signals have the same state.",
            "tooltip.red_power.timer": "Transmit a signal at preset time intervals.",
            "tooltip.red_power.autonomous_timer": "Transmit a signal at preset time intervals. Generates a signal on its own.",
            "tooltip.red_power.transmitter": "Reinforced Reader Node. Reads the redstone signal from the attached block.",
            "tooltip.red_power.insulator": "Reinforced Node. Receives and transmits a signal, as well as powers the attached block.",
            "tooltip.red_power.receiver": "Reinforced Recorder Node. Receives a signal and powers the attached block.",
            "tooltip.red_power.transformer": "Reinforced Amplifier Node. Amplifies the power of the input signal up to 15.",
            "tooltip.red_power.fusebox": "Transmits a signal only when enabled and has an amethyst inside.",
            "tooltip.red_power.lever": "Transmits a signal only when enabled.",
            "tooltip.red_power.light_switch": "Transmits a signal only when enabled.",

            "item.red_power.wrench": "Wrench",
            "item.red_power.creative_wrench": "Creative Wrench",
            "item.red_power.cutters": "Cutters",
            "item.red_power.wires": "Wires",
            "item.red_power.amethyst_wires": "Amethyst Wires",
            "item.red_power.echo_wires": "Echo Wires",
            "item.red_power.ender_wires": "Ender Wires",
            "item.red_power.power_wires": "Power Wires",
            "item.red_power.safety_glasses": "Safety Glasses",

            "block.red_power.reader_node": "Reader Node",
            "block.red_power.node": "Node",
            "block.red_power.recorder_node": "Recorder Node",
            "block.red_power.amplifier_node": "Amplifier Node",
            "block.red_power.hidden_reader_node": "Hidden Reader Node",
            "block.red_power.hidden_node": "Hidden Node",
            "block.red_power.hidden_recorder_node": "Hidden Recorder Node",
            "block.red_power.hidden_amplifier_node": "Hidden Amplifier Node",
            "block.red_power.core": "Core",
            "block.red_power.not_gate": "NOT Gate",
            "block.red_power.and_gate": "AND Gate",
            "block.red_power.or_gate": "OR Gate",
            "block.red_power.nand_gate": "NAND Gate",
            "block.red_power.nor_gate": "NOR Gate",
            "block.red_power.xor_gate": "XOR Gate",
            "block.red_power.xnor_gate": "XNOR Gate",
            "block.red_power.timer": "Timer",
            "block.red_power.autonomous_timer": "Autonomous Timer",
            "block.red_power.transmitter": "Transmitter",
            "block.red_power.receiver": "Receiver",
            "block.red_power.insulator": "Insulator",
            "block.red_power.fusebox": "Fusebox",
            "block.red_power.lever": "Lever",
            "block.red_power.light_switch": "Light Switch",
            "block.red_power.transformer": "Transformer",

            "wire_type.red_power.common": "Wire",
            "wire_type.red_power.amethyst": "Amethyst Wire",
            "wire_type.red_power.echo": "Echo Wire",
            "wire_type.red_power.ender": "Ender Wire",
            "wire_type.red_power.power": "Power Wire",

            "wire_color.red_power.red": "Red",
            "wire_color.red_power.green": "Green",
            "wire_color.red_power.blue": "Blue",
            "wire_color.red_power.purple": "Purple",
            "wire_color.red_power.yellow": "Yellow"
        })
    }

    if (Platform.isLoaded('salt')) {
        event.addAll('salt', {
            "item.salt.salt.tooltip": "SALT",
            "item.salt.salt.tooltip.summary": "Food can now be salted to improve the _taste_ and add _nutrition_.",
            "item.salt.salt.tooltip.condition1": "Usage",
            "item.salt.salt.tooltip.behaviour1": "Combine with food in the crafting grid tagged with the _'salt:can be salted'_ tag. Multiple mods, including _Farmer's Delight_ are _natively supported_.",
            "item.salt.salt.tooltip.condition2": "Acquisition",
            "item.salt.salt.tooltip.behaviour2": "Rock salt can generate underground in _dripstone caves_, the _ocean_ and _beach biomes_. When harvested, _Rock Salt Ore_ will drop _Raw Rock Salt_ which is then _crafted_ into _Salt_.",
            "item.salt.salt.tooltip.condition3": "Renewal",
            "item.salt.salt.tooltip.behaviour3": "Salt can be obtained by _growing_ your own Salt Crystals or by the _evaporation_ of water in a cauldron.",
            "item.salt.salt.tooltip.condition4": "Additional Usage",
            "item.salt.salt.tooltip.behaviour4": "Salt blocks will _melt_ adjacent ice and snow blocks. Ice and snow can also be _melted_ by _sprinkling salt_ over them."
        })
    }

    if (Platform.isLoaded('solapplepie')) {
        event.addAll('kubejs', {
            "item.solapplepie.lunchbag.tooltip": "LUNCHBAG",
            "item.solapplepie.lunchbag.tooltip.summary": "Conveniently _stores_ food in a single item. _Not safe_ from the gaze of seagulls!",
            "item.solapplepie.lunchbag.tooltip.condition1": "On Sneak + R-click while in main hand",
            "item.solapplepie.lunchbag.tooltip.behaviour1": "Opens the _food_ inventory.",
            "item.solapplepie.lunchbox.tooltip": "LUNCHBOX",
            "item.solapplepie.lunchbox.tooltip.summary": "Conveniently _stores_ food in a single item. _Not safe_ from the gaze of seagulls!",
            "item.solapplepie.lunchbox.tooltip.condition1": "On Sneak + R-click while in main hand",
            "item.solapplepie.lunchbox.tooltip.behaviour1": "Opens the _food_ inventory.",
            "item.solapplepie.golden_lunchbox.tooltip": "GOLDEN LUNCHBOX",
            "item.solapplepie.golden_lunchbox.tooltip.summary": "Conveniently _stores_ food in a single item. _Not safe_ from the gaze of seagulls!",
            "item.solapplepie.golden_lunchbox.tooltip.condition1": "On Sneak + R-click while in main hand",
            "item.solapplepie.golden_lunchbox.tooltip.behaviour1": "Opens the _food_ inventory."
        })
    }

    if (Platform.isLoaded('supplementaries')) {
        event.addAll('supplementaries', {
            "block.supplementaries.cage.tooltip": "CAGE",
            "block.supplementaries.cage.tooltip.summary": "Allows for the trapping of small animals for convenient transportation.",
            "block.supplementaries.cage.tooltip.condition1": "On R-Click on small animal",
            "block.supplementaries.cage.tooltip.behaviour1": "_Captures_ the small animal.",
            "block.supplementaries.cage.tooltip.condition2": "On R-click on ground with small animal",
            "block.supplementaries.cage.tooltip.behaviour2": "_Releases_ the small animal back into the world.",
            "block.supplementaries.cage.tooltip.condition3": "On Shift + R-Click",
            "block.supplementaries.cage.tooltip.behaviour3": "_Places_ the cage as a block.",
            "item.supplementaries.key.tooltip": "KEY",
            "item.supplementaries.key.tooltip.summary": "Able to _lock_ many Supplementaries related things. You should probably _rename_ it with some _lore_ to use as a personal passkey.",
            "item.supplementaries.key.tooltip.condition1": "On R-click",
            "item.supplementaries.key.tooltip.behaviour1": "Fully _locks_ eligible Supplementaries blocks. You _can't_ clear the lock once it is set, so _DO NOT_ lose your key.",
            "block.supplementaries.pedestal.tooltip": "PEDESTAL",
            "block.supplementaries.pedestal.tooltip.summary": "An _elegant_ display for whatever you place onto it.",
            "item.supplementaries.quiver.tooltip": "QUIVER",
            "item.supplementaries.quiver.tooltip.summary": "Easily _stores_ arrows to _save_ space in your inventory and does not have to be worn to be used. Holds _nine_ stacks of arrows.",
            "item.supplementaries.quiver.tooltip.condition1": "Storing arrows",
            "item.supplementaries.quiver.tooltip.behaviour1": "To store arrows in the Quiver, grab any stack size of arrows with your cursor then _right click_ over the Quiver.",
            // sack does not work
            "block.supplementaries.sack.tooltip": "SACK",
            "block.supplementaries.sack.tooltip.summary": "A convenient way to carry items on your person. Careful not to carry more than two sacks!",
            "block.supplementaries.statue.tooltip": "STATUE",
            "block.supplementaries.statue.tooltip.summary": "A small statue for decorative use and is able to _hold_ items. Some items have _special poses_ such as candles, tools and swords.",
            "block.supplementaries.statue.tooltip.condition1": "When powered by redstone",
            "block.supplementaries.statue.tooltip.behaviour1": "Proceeds to _wave_.",
            "block.supplementaries.enderman_head.tooltip": "ENDERMAN HEAD",
            "block.supplementaries.enderman_head.tooltip.summary": "It's just an Enderman head. _Stare_ at it, I dare you.",
            "block.supplementaries.enderman_head.tooltip.condition1": "When stared at",
            "block.supplementaries.enderman_head.tooltip.behaviour1": "_Provides_ redstone power."
        })
    }

    if (Platform.isLoaded('tempad')) {
        event.addAll('kubejs', {
            "item.tempad.tempad.tooltip": "TEMPAD",
            "item.tempad.tempad.tooltip.summary": "Has _unlimited_ uses. Enjoy! Just wait to _recharge_ after using it.",
            "item.tempad.tempad.tooltip.condition1": "On R-click",
            "item.tempad.tempad.tooltip.behaviour1": "Opens the _Tempad interface_.",
            "item.tempad.tempad.tooltip.condition2": "Info",
            "item.tempad.tempad.tooltip.behaviour2": "Allows _teleportation_ to set locations by entering portals.",
            "item.tempad.tempad.tooltip.condition3": "Notice",
            "item.tempad.tempad.tooltip.behaviour3": "You must first be _physically_ present at the location to make a _temporal anchor_ for that location.",
            "item.tempad.he_who_remains_tempad.tooltip": "HE WHO REMAINS TEMPAD",
            "item.tempad.he_who_remains_tempad.tooltip.summary": "The property of _'He Who Remains'_.",
            "item.tempad.he_who_remains_tempad.tooltip.condition1": "On R-click",
            "item.tempad.he_who_remains_tempad.tooltip.behaviour1": "Opens the _Tempad interface_.",
            "item.tempad.he_who_remains_tempad.tooltip.condition2": "Info",
            "item.tempad.he_who_remains_tempad.tooltip.behaviour2": "Has _no_ teleportation cooldown. Full access has been _granted_."
        })
    }
    // bone meal related
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
    if (Platform.isLoaded('universalbonemeal')) {
        event.addAll('universalbonemeal', {
            "item.minecraft.bone_meal.tooltip": "BONE MEAL",
            "item.minecraft.bone_meal.tooltip.summary": "Used for _accelerating_ the _growth_ of plants. However, it can now _universally_ bone meal _a lot more things_ compared to before!",
            "item.minecraft.bone_meal.tooltip.condition1": "On right click on plants or crops:",
            "item.minecraft.bone_meal.tooltip.behaviour1": "_Accelerates_ growth, self explanatory.",
            "item.minecraft.bone_meal.tooltip.condition2": "On right click on grass blocks:",
            "item.minecraft.bone_meal.tooltip.behaviour2": "Generates flowers and grass.",
            "item.minecraft.bone_meal.tooltip.condition3": "On right click on Sea Pickles on living coral blocks:",
            "item.minecraft.bone_meal.tooltip.behaviour3": "_Grows additional_ Sea Pickles."
        })
    }
    // deprecate in 1.21+
    if (Platform.isLoaded('craftingautomat')) {
        event.addAll('craftingautomat', {
            "block.craftingautomat.autocrafter": "Crafter",
            "container.craftingautomat:autocrafter": "Crafting",
            "container.craftingautomat:autocrafter.flag.ready": "Auto-crafting ready",
            "container.craftingautomat:autocrafter.flag.missing": "Missing ingredients",
            "container.craftingautomat:autocrafter.flag.invalid": "Auto-crafting not supported"
        })
    }
})

/* The full JSON lang archive
{
  "item.kubejs.final_pickaxe": "<rainb>Particula Eversorem</rainb>",
  "item.kubejs.final_axe": "<rainb>Natura Exitium</rainb>",
  "item.kubejs.final_shovel": "<rainb>Terra Confractus</rainb>",
  "item.kubejs.final_hoe": "<rainb>Agricola Manus</rainb>",
  "item.kubejs.final_sword": "<rainb>Corevis Ultimatum</rainb>",
  "item.kubejs.final_scythe": "<rainb>Scythe of Eternal Oblivion<rainb>",
  "item.kubejs.final_lance": "<rainb>Tenebris Punctura</rainb>",
  "item.kubejs.final_katana": "<rainb>Celeritas Obumbratio</rainb>",
  "item.kubejs.crystal_lance": "<rainb>Crystallus Hasta</rainb>",
  "item.kubejs.final_helmet": "<rainb>Conscientia Oculi</rainb>",
  "item.kubejs.final_chestplate": "<rainb>Vitale Cordis</rainb>",
  "item.kubejs.final_leggings": "<rainb>Universum Motus</rainb>",
  "item.kubejs.final_boots": "<rainb>Gravitas Anchoram</rainb>",
  "block.kubejs.command_block": "<rainb>Command Block</rainb>",
  "block.kubejs.chain_command_block": "<rainb>Chain Command Block",
  "block.kubejs.repeating_command_block": "<rainb>Repeating Command Block",
  "effect.autumnity.extension.desc": "Any effects gained while the user has this effect gain an additional 30 seconds. Does not stack!",
  "effect.irons_spellbooks.instant_mana.desc": "Instantly gain mana!",
  "kubejs.drowned_gate_small": "Small Drowned Gate",
  "kubejs.drowned_gate": "Drowned Gate",
  "kubejs.drowned_gate_large": "Large Drowned Gate",
  "kubejs.husk_gate_small": "Small Husk Gate",
  "kubejs.husk_gate": "Husk Gate",
  "kubejs.husk_gate_large": "Large Husk Gate",
  "kubejs.hoglin_gate_small": "Small Hoglin Gate",
  "kubejs.hoglin_gate": "Hoglin Gate",
  "kubejs.hoglin_gate_large": "Large Hoglin Gate",
  "kubejs.boss_gate": "Apothic Boss Gate",
  "kubejs.boss_gate_large": "Large Apothic Boss Gate",
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
  "item.minecraft.glass_bottle.tooltip.condition1": "On Shift + R-click",
  "item.minecraft.glass_bottle.tooltip.behaviour1": "Places down a _butterfly jar_ to give butterflies a home.",
  "item.minecraft.glass_bottle.tooltip.condition2": "When combined with a Dragon Egg in a crafting grid",
  "item.minecraft.glass_bottle.tooltip.behaviour2": "Extracts Dragon Breath.",
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
  "block.minecraft.pumpkin.tooltip": "PUMPKIN",
  "block.minecraft.pumpkin.tooltip.summary": "In addition to being used as an ingredient, it now has other uses.",
  "block.minecraft.pumpkin.tooltip.condition1": "When carved",
  "block.minecraft.pumpkin.tooltip.behaviour1": "_Scares_ away crows who are likely to take your crops.",
  "block.minecraft.cobbled_deepslate.tooltip": "COBBLED DEEPSLATE",
  "block.minecraft.cobbled_deepslate.tooltip.summary": "Now has _additional uses_ in recipes.",
  "block.minecraft.cobbled_deepslate.tooltip.condition1": "When crushed",
  "block.minecraft.cobbled_deepslate.tooltip.behaviour1": "Produces _Deepslate Shards_ which can be _haunted_ to be transformed into different items.",
  "item.minecraft.wooden_pickaxe.tooltip": "WOODEN PICKAXE",
  "item.minecraft.wooden_pickaxe.tooltip.summary": "You can now _repair_ tools with the material they are made of.",
  "item.minecraft.wooden_pickaxe.tooltip.condition1": "How to repair:",
  "item.minecraft.wooden_pickaxe.tooltip.behaviour1": "Put your tool and its respective crafting material in a crafting grid.",
  "item.minecraft.wooden_pickaxe.tooltip.condition2": "Additional info",
  "item.minecraft.wooden_pickaxe.tooltip.behaviour2": "If you were wondering... yes, this also applies to Diamond and Netherite tools as well. This tooltip will not appear on Diamond and Netherite tools.",
  "item.minecraft.stone_pickaxe.tooltip": "STONE PICKAXE",
  "item.minecraft.stone_pickaxe.tooltip.summary": "You can now _repair_ tools with the material they are made of.",
  "item.minecraft.stone_pickaxe.tooltip.condition1": "How to repair:",
  "item.minecraft.stone_pickaxe.tooltip.behaviour1": "Put your tool and its respective crafting material in a crafting grid.",
  "item.minecraft.stone_pickaxe.tooltip.condition2": "Additional info",
  "item.minecraft.stone_pickaxe.tooltip.behaviour2": "If you were wondering... yes, this also applies to Diamond and Netherite tools as well. This tooltip will not appear on Diamond and Netherite tools.",
  "item.minecraft.iron_pickaxe.tooltip": "IRON PICKAXE",
  "item.minecraft.iron_pickaxe.tooltip.summary": "You can now _repair_ tools with the material they are made of.",
  "item.minecraft.iron_pickaxe.tooltip.condition1": "How to repair:",
  "item.minecraft.iron_pickaxe.tooltip.behaviour1": "Put your tool and its respective crafting material in a crafting grid.",
  "item.minecraft.iron_pickaxe.tooltip.condition2": "Additional info",
  "item.minecraft.iron_pickaxe.tooltip.behaviour2": "If you were wondering... yes, this also applies to Diamond and Netherite tools as well. This tooltip will not appear on Diamond and Netherite tools.",
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
  "item.minecraft.bone_meal.tooltip": "BONE MEAL",
  "item.minecraft.bone_meal.tooltip.summary": "Used for _accelerating_ the _growth_ of plants. However, it can now _universally_ bone meal _a lot more things_ compared to before!",
  "item.minecraft.bone_meal.tooltip.condition1": "On right click on plants or crops:",
  "item.minecraft.bone_meal.tooltip.behaviour1": "_Accelerates_ growth, self explanatory.",
  "item.minecraft.bone_meal.tooltip.condition2": "On right click on grass blocks:",
  "item.minecraft.bone_meal.tooltip.behaviour2": "Generates flowers and grass.",
  "item.minecraft.bone_meal.tooltip.condition3": "On right click on Sea Pickles on living coral blocks:",
  "item.minecraft.bone_meal.tooltip.behaviour3": "_Grows additional_ Sea Pickles.",
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
  "block.createchunkloading.chunk_loader.tooltip": "CHUNK LOADER",
  "block.createchunkloading.chunk_loader.tooltip.summary": "Glue to Create _contraptions_ or _trains_ to give them the ability to _load_ chunks around them while they are moving.",
  "item.kubejs.deepslate_shard.tooltip": "DEEPSLATE SHARD",
  "item.kubejs.deepslate_shard.tooltip.summary": "Acquired from crushing Cobbled Deepslate.",
  "item.kubejs.deepslate_shard.tooltip.condition1": "When haunted",
  "item.kubejs.deepslate_shard.tooltip.behaviour1": "Has a _chance_ of turning into an _Echo Shard_ or _disc fragment_.",
  "item.kubejs.lemon.tooltip": "LEMON",
  "item.kubejs.lemon.tooltip.summary": "Quite sour, is it not?",
  "item.kubejs.lemon.tooltip.condition1": "When eaten",
  "item.kubejs.lemon.tooltip.behaviour1": "The sourness causes the screen to uhhh... _shrink_ for a _short_ amount of time.",
  "item.kubejs.denied_result.tooltip": "DENIED RESULT",
  "item.kubejs.denied_result.tooltip.summary": "<shake>This item now has a different method <shake>or methods of crafting.</shake>",
  "item.kubejs.denied_result.tooltip.condition1": "Purpose",
  "item.kubejs.denied_result.tooltip.behaviour1": "Output result _denied_.",
  "item.kubejs.removed_item.tooltip": "REMOVED ITEM",
  "item.kubejs.removed_item.tooltip.summary": "<shake>This item has been removed.</shake>",
  "item.kubejs.removed_item.tooltip.condition1": "Purpose",
  "item.kubejs.removed_item.tooltip.behaviour1": "Output item _removed_.",
  "block.kubejs.command_block.tooltip": "COMMAND BLOCK",
  "block.kubejs.command_block.tooltip.summary": "Not actually a true command block, but it can still do _certain_ things.",
  "block.kubejs.chain_command_block.tooltip": "CHAIN COMMAND BLOCK",
  "block.kubejs.chain_command_block.tooltip.summary": "Not actually a true command block, but it can still do _certain_ things.",
  "block.kubejs.repeating_command_block.tooltip": "REPEATING COMMAND BLOCK",
  "block.kubejs.repeating_command_block.tooltip.summary": "Not actually a true command block, but it can still do _certain_ things.",
  "item.kubejs.high_entropy_alloy.tooltip": "HIGH ENTROPY ALLOY",
  "item.kubejs.high_entropy_alloy.tooltip.summary": "Used in making _powerful_ items.",
  "item.kubejs.final_pickaxe.tooltip": "FINAL PICKAXE",
  "item.kubejs.final_pickaxe.tooltip.summary": "Tear through mountains without a care in the world.",
  "item.kubejs.final_pickaxe.tooltip.condition1": "Caution!",
  "item.kubejs.final_pickaxe.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
  "item.kubejs.final_axe.tooltip": "FINAL AXE",
  "item.kubejs.final_axe.tooltip.summary": "Nature's bane. Deforestation manifested.",
  "item.kubejs.final_axe.tooltip.condition1": "Caution!",
  "item.kubejs.final_axe.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
  "item.kubejs.final_shovel.tooltip": "FINAL SHOVEL",
  "item.kubejs.final_shovel.tooltip.summary": "Terraform with ease.",
  "item.kubejs.final_shovel.tooltip.condition1": "Caution!",
  "item.kubejs.final_shovel.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
  "item.kubejs.final_hoe.tooltip": "FINAL HOE",
  "item.kubejs.final_hoe.tooltip.summary": "_Life_ and _death_ in one. Farm for _eternity_.",
  "item.kubejs.final_hoe.tooltip.condition1": "Caution!",
  "item.kubejs.final_hoe.tooltip.behaviour1": "_Apotheosis_ can make this tool _destroy a chunk at a time_. _It does not matter what block type it is!_ Don't say I warned you! If you do happen to get the perfect affix, simply hold _[Shift]_ to destroy blocks with _precision_.",
  "item.kubejs.final_sword.tooltip": "FINAL SWORD",
  "item.kubejs.final_sword.tooltip.summary": "Wield the _power_ of the event horizon in your hands.",
  "item.kubejs.final_sword.tooltip.condition1": "Caution!",
  "item.kubejs.final_sword.tooltip.behaviour1": "Don't _accidentally_ hit your friends!",
  "item.kubejs.final_scythe.tooltip": "FINAL SCYTHE",
  "item.kubejs.final_scythe.tooltip.summary": "Sweeping away life with ease.",
  "item.kubejs.final_scythe.tooltip.condition1": "Caution!",
  "item.kubejs.final_scythe.tooltip.behaviour1": "Don't _accidentally_ hit your friends! Also _not usable_ for argricultural purposes.",
  "item.kubejs.final_lance.tooltip": "FINAL LANCE",
  "item.kubejs.final_lance.tooltip.summary": "Attack from long distances with _ease_ with piercing shadows.",
  "item.kubejs.final_lance.tooltip.condition1": "Caution!",
  "item.kubejs.final_lance.tooltip.behaviour1": "Don't _accidentally_ hit your friends!",
  "item.kubejs.final_helmet.tooltip": "FINAL HELMET",
  "item.kubejs.final_helmet.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
  "item.kubejs.final_helmet.tooltip.condition1": "On wearing the full set",
  "item.kubejs.final_helmet.tooltip.behaviour1": "Become _invulnerable_ to _all_ damage, including falling out of the world.",
  "item.kubejs.final_chestplate.tooltip": "FINAL CHESTPLATE",
  "item.kubejs.final_chestplate.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
  "item.kubejs.final_chestplate.tooltip.condition1": "On wearing the full set",
  "item.kubejs.final_chestplate.tooltip.behaviour1": "Become _invulnerable_ to _all_ damage, including falling out of the world.",
  "item.kubejs.final_leggings.tooltip": "FINAL LEGGINGS",
  "item.kubejs.final_leggings.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
  "item.kubejs.final_leggings.tooltip.condition1": "On wearing the full set",
  "item.kubejs.final_leggings.tooltip.behaviour1": "Become _invulnerable_ to _all_ damage, including falling out of the world.",
  "item.kubejs.final_boots.tooltip": "FINAL BOOTS",
  "item.kubejs.final_boots.tooltip.summary": "Significantly _reduces_ damage when worn by itself.",
  "item.kubejs.final_boots.tooltip.condition1": "On wearing the full set",
  "item.kubejs.final_boots.tooltip.behaviour1": "Become _invulnerable_ to _all_ damage, including falling out of the world.",
  "item.ftbquests.book.tooltip": "FTBQUESTS BOOK",
  "item.ftbquests.book.tooltip.summary": "This book _provides_ easy access to the quests screen and some _useful_ information in its tooltip.",
  "item.ftbquests.book.tooltip.condition1": "On R-click",
  "item.ftbquests.book.tooltip.behaviour1": "Opens the _quests_ screen. Be sure to read everything!",
  "item.ftbquests.book.tooltip.condition2": "Other methods of accessing quests",
  "item.ftbquests.book.tooltip.behaviour2": "You can also _access_ quests by opening your _inventory screen_ and _looking_ at the _top left_ corner of your screen.",
  "item.ftbquests.book.tooltip.condition3": "Chunk pre-generation",
  "item.ftbquests.book.tooltip.behaviour3": "Type _/chunky start minecraft:overworld_ to _pregenerate chunks_ in hopes of reducing TPS lag while exploring. This command is also available for _other dimensions_.",
  "item.ftbquests.book.tooltip.condition4": "Default Keybinds - Crawling",
  "item.ftbquests.book.tooltip.behaviour4": "Press _X_ to _crawl_ which allows you to get into _one block spaces_. Very useful!",
  "item.ftbquests.book.tooltip.condition5": "Default Keybinds - Camera Zoom",
  "item.ftbquests.book.tooltip.behaviour5": "Press _C_ to _zoom in_. _Scroll_ to _adjust_ zoom level.",
  "item.ftbquests.book.tooltip.condition6": "Default Keybinds - Sitting",
  "item.ftbquests.book.tooltip.behaviour6": "Press _N_ to _toggle_ the _sitting position_.",
  "item.ftbquests.book.tooltip.condition7": "Default Keybinds - Real Camera",
  "item.ftbquests.book.tooltip.behaviour7": "Don't like the camera being attached to the player head realistically? Press _F6_ to _toggle_ the perspective.",
  "item.aether.book_of_lore.tooltip": "BOOK OF LORE",
  "item.aether.book_of_lore.tooltip.summary": "Place an item from _The Aether_ mod in the slot to learn more about it.",
  "item.apotheosis.vial_of_expulsion.tooltip": "VIAL OF EXPULSION",
  "item.apotheosis.vial_of_expulsion.tooltip.summary": "Used in a _Smithing Table_ to _destroy_ socketed Apothic Gems and _preserve_ the Affixed item.",
  "item.apotheosis.vial_of_extraction.tooltip": "VIAL OF EXTRACTION",
  "item.apotheosis.vial_of_extraction.tooltip.summary": "Used in a _Smithing Table_ to _preserve_ socketed Apothic Gems at the cost of _destroying_ the Affixed item.",
  "block.architects_palette.chiseled_abyssaline_bricks.tooltip": "CHISELED ABYSSALINE BRICKS",
  "block.architects_palette.chiseled_abyssaline_bricks.tooltip.summary": "It looks like a _power source_ from the _ocean_ can fit in this.",
  "block.architects_palette.chiseled_abyssaline_bricks.tooltip.condition1": "On R-click with Heart of the Sea",
  "block.architects_palette.chiseled_abyssaline_bricks.tooltip.behaviour1": "_Activates_ the block and provides _power_ to Abyssaline Lamps.",
  "block.architects_palette.chiseled_hadaline_bricks.tooltip": "CHISELED HADALINE BRICKS",
  "block.architects_palette.chiseled_hadaline_bricks.tooltip.summary": "It looks like a _power source_ from the _ocean_ can fit in this.",
  "block.architects_palette.chiseled_hadaline_bricks.tooltip.condition1": "On R-click with Heart of the Sea",
  "block.architects_palette.chiseled_hadaline_bricks.tooltip.behaviour1": "_Activates_ the block and provides _power_ to Hadaline Lamps.",
  "block.autumnity.sappy_maple_log.tooltip": "SAPPY MAPLE LOG",
  "block.autumnity.sappy_maple_log.tooltip.summary": "A maple log with sap flowing out.",
  "block.autumnity.sappy_maple_log.tooltip.condition1": "When right clicked with a glass bottle",
  "block.autumnity.sappy_maple_log.tooltip.behaviour1": "Extracts the sap and converts it into an ordinary wooden log.",
  "block.autumnity.sappy_maple_wood.tooltip": "SAPPY MAPLE WOOD",
  "block.autumnity.sappy_maple_wood.tooltip.summary": "Extracts the sap and converts it into an ordinary wood block.",
  "item.autumnity.foul_berries.tooltip": "FOUL BERRIES",
  "item.autumnity.foul_berries.tooltip.summary": "Can be fed to turkeys.",
  "item.autumnity.turkey.tooltip": "TURKEY",
  "item.autumnity.turkey.tooltip.summary": "It's raw turkey, what did you expect?",
  "item.autumnity.turkey.tooltip.condition1": "When dropped on player",
  "item.autumnity.turkey.tooltip.behaviour1": "Gets _stuck_ on said player's head...",
  "item.autumnity.cooked_turkey.tooltip": "COOKED TURKEY",
  "item.autumnity.cooked_turkey.tooltip.summary": "Autumn's feast. Enjoy!",
  "item.autumnity.cooked_turkey.tooltip.condition1": "When dropped on player",
  "item.autumnity.cooked_turkey.tooltip.behaviour1": "Gets _stuck_ on said player's head...",
  "item.backpacked.backpack.tooltip": "BACKPACK",
  "item.backpacked.backpack.tooltip.summary": "Provides lots of _storage_ for your travels.",
  "item.backpacked.backpack.tooltip.condition1": "How to Use",
  "item.backpacked.backpack.tooltip.behaviour1": "To access your _backpack_ simply press _[B]_. Your backpack can also be _enchanted_ with enchantments that will prove useful.",
  "item.backpacked.backpack.tooltip.condition2": "Additional Info",
  "item.backpacked.backpack.tooltip.behaviour2": "After _completing_ certain _challenges_, you _unlock_ new <rainb>looks</rainb> for your backpack!",
  "item.bhc.red_heart.tooltip": "RED HEART",
  "item.bhc.red_heart.tooltip.summary": "Adds more health when used with the _Heart Amulet_ as a Red Heart Canister.",
  "item.bhc.red_heart.tooltip.condition1": "When melted",
  "item.bhc.red_heart.tooltip.behaviour1": "used for making Melted Yellow Hearts which can then be _upgraded_ further.",
  "item.cataclysm.infernal_forge.tooltip": "INFERNAL FORGE",
  "item.cataclysm.infernal_forge.tooltip.summary": "A _devastating_ hammer. Also important to note, this is actually a pickaxe.",
  "item.cataclysm.infernal_forge.tooltip.condition1": "On R-click while looking at a block",
  "item.cataclysm.infernal_forge.tooltip.behaviour1": "Causes AoE damage around yourself and sends mobs flying.",
  "item.cataclysm.monstrous_helm.tooltip": "MONSTROUS HELM",
  "item.cataclysm.monstrous_helm.tooltip.summary": "Falling below _half_ of your HP will push away entities and _grant_ buffs.",
  "item.cataclysm.monstrous_helm.tooltip.condition1": "Additional Information",
  "item.cataclysm.monstrous_helm.tooltip.behaviour1": "You are given additional Defense, Knockback Resistance and Regeneration.",
  "item.cataclysm.burning_ashes.tooltip": "BURNING ASHES",
  "item.cataclysm.burning_ashes.tooltip.summary": "Used in _summoning_ _Ignis_.",
  "item.cataclysm.the_incinerator.tooltip": "THE INCINERATOR",
  "item.cataclysm.the_incinerator.tooltip.summary": "A very large sword.",
  "item.cataclysm.the_incinerator.tooltip.condition1": "Usage",
  "item.cataclysm.the_incinerator.tooltip.behaviour1": "Hold _right click_ for 3 seconds until you hear a sound. After _hearing_ the roar of the flames, let go to unleash _devastation_ in a _straight line_.",
  "item.cataclysm.the_incinerator.tooltip.condition2": "Warning!",
  "item.cataclysm.the_incinerator.tooltip.behaviour2": "Dropped items in the line of fire will be destroyed!",
  "item.cataclysm.bulwark_of_the_flame.tooltip": "BULWARK OF THE FLAME",
  "item.cataclysm.bulwark_of_the_flame.tooltip.summary": "Functions regularly like a shield, but with a charge ability.",
  "item.cataclysm.bulwark_of_the_flame.tooltip.condition1": "Usage",
  "item.cataclysm.bulwark_of_the_flame.tooltip.behaviour1": "While _sneaking_ and _blocking_, let go of right click to charge forward. Entities that collide with a wall are stunned from the impact and take additional damage.",
  "item.cataclysm.void_scatter_arrow.tooltip": "VOID SCATTER ARROW",
  "item.cataclysm.void_scatter_arrow.tooltip.summary": "This arrow _explodes_ on impact, creating many _fragments_ in the process.",
  "item.cataclysm.void_core.tooltip": "VOID CORE",
  "item.cataclysm.void_core.tooltip.summary": "A special object that can be used as a weapon.",
  "item.cataclysm.void_core.tooltip.condition1": "Usage",
  "item.cataclysm.void_core.tooltip.behaviour1": "Right click on the ground to cause Void Rune _spikes_ to _erupt_ in a straight line in front of you.",
  "item.cataclysm.gauntlet_of_guard.tooltip": "GAUNTLET OF GUARD",
  "item.cataclysm.gauntlet_of_guard.tooltip.summary": "A very hard punching glove with special abilities.",
  "item.cataclysm.gauntlet_of_guard.tooltip.condition1": "On R-click",
  "item.cataclysm.gauntlet_of_guard.tooltip.behaviour1": "When held in your main hand, you can _pull_ entities _towards_ you by holding right click. Be sure to give them a golden punch afterwards!",
  "item.cataclysm.ignitium_helmet.tooltip": "IGNITIUM HELMET",
  "item.cataclysm.ignitium_helmet.tooltip.summary": "Provides Lava Vision.",
  "item.cataclysm.ignitium_chestplate.tooltip": "IGNITIUM CHESTPLATE",
  "item.cataclysm.ignitium_chestplate.tooltip.summary": "You can combine an Elytra with this in the Smithing Table.",
  "item.cataclysm.ignitium_leggings.tooltip": "IGNITIUM LEGGINGS",
  "item.cataclysm.ignitium_leggings.tooltip.summary": "The developer, _L_Ender_ says 'Flame Reflex' ...but the item fails to give any form of Fire Resistance.",
  "item.cataclysm.ignitium_boots.tooltip": "IGNITIUM BOOTS",
  "item.cataclysm.ignitium_boots.tooltip.summary": "Lava Walker, allows you to walk on lava. DOES NOT provide Fire Resistance, even with the full set!",
  "item.cataclysm.wither_assault_shoulder_weapon.tooltip": "WITHER ASSAULT SHOULDER WEAPON",
  "item.cataclysm.wither_assault_shoulder_weapon.tooltip.summary": "A rocket launcher that _shoots_ projectiles laced with the _wither_ effect.",
  "item.cataclysm.wither_assault_shoulder_weapon.tooltip.condition1": "On R-click",
  "item.cataclysm.wither_assault_shoulder_weapon.tooltip.behaviour1": "_Hold_ and _release_ right click to _fire_ a _Wither Missile_ that travels in a _straight line_ and explodes on contact.",
  "item.cataclysm.wither_assault_shoulder_weapon.tooltip.condition2": "On Sneak + R-click",
  "item.cataclysm.wither_assault_shoulder_weapon.tooltip.behaviour2": "_Hold [Shift]_ to use the _alt fire_ which fires a _Wither Howitzer_ projectile that follows an _arced_ path. Upon contact, the Howitzer projectile leaves behind _lingering smoke_ that applies the _wither_ effect.",
  "item.cataclysm.void_forge.tooltip": "VOID FORGE",
  "item.cataclysm.void_forge.tooltip.summary": "The power of a supernova is contained within. Yes, this is _still a pickaxe_.",
  "item.cataclysm.void_forge.tooltip.condition1": "On R-click on a block",
  "item.cataclysm.void_forge.tooltip.behaviour1": "Now creates a _fan of void spikes_ when you _right click_ a block, in addition to sending mobs flying.",
  "item.cataclysm.gauntlet_of_bulwark.tooltip": "GAUNTLET OF BULWARK",
  "item.cataclysm.gauntlet_of_bulwark.tooltip.summary": "A fist with the _punching_ power of planets colliding.",
  "item.cataclysm.gauntlet_of_bulwark.tooltip.condition1": "Usage",
  "item.cataclysm.gauntlet_of_bulwark.tooltip.behaviour1": "Hold right click to _push_ nearby entities and give them the _Blazing Brand_ debuff. _Releasing_ right click will make you _charge_ forward and deal damage to the entities hit by you. Entities that hit the wall take a lot of damage.",
  "item.cataclysm.void_assault_shoulder_weapon.tooltip": "VOID ASSAULT SHOULDER WEAPON",
  "item.cataclysm.void_assault_shoulder_weapon.tooltip.summary": "The _upgraded_ version of the Wither Assault Shoulder Weapon. The power of supernovae contained within each projectile.",
  "item.cataclysm.void_assault_shoulder_weapon.tooltip.condition1": "Usage",
  "item.cataclysm.void_assault_shoulder_weapon.tooltip.behaviour1": "You can now _shoot_ Void Howitzer projectiles which now _create_ a tsunami of void spikes on impact.",
  "item.cataclysm.abyssal_sacrifice.tooltip": "ABYSSAL SACRIFICE",
  "item.cataclysm.abyssal_sacrifice.tooltip.summary": "Used in _summoning_ the _Leviathan_.",
  "item.cataclysm.tidal_claws.tooltip": "TIDAL CLAWS",
  "item.cataclysm.tidal_claws.tooltip.summary": "_Long ranged_ and _deadly_. Also serves as a grappling hook.",
  "item.cataclysm.tidal_claws.tooltip.condition1": "On L-click",
  "item.cataclysm.tidal_claws.tooltip.behaviour1": "Left click to attack _multiple_ entities with a single tentacle. Applies a _stacking_ debuff.",
  "item.cataclysm.tidal_claws.tooltip.condition2": "On R-click",
  "item.cataclysm.tidal_claws.tooltip.behaviour2": "Right click to use as a grappling hook. Remember that it has _limited_ range!",
  "block.cataclysm.abyssal_egg.tooltip": "ABYSSAL EGG",
  "block.cataclysm.abyssal_egg.tooltip.summary": "You emerge as victor, but now you have an _egg_ in your possession.",
  "block.cataclysm.abyssal_egg.tooltip.condition1": "Info",
  "block.cataclysm.abyssal_egg.tooltip.behaviour1": "Probably best to make sure you have some _tropical fish_ to _feed_ your adorable Leviathan once it hatches.",
  "item.cataclysm.bloom_stone_pauldrons.tooltip": "BLOOM STONE PAULDRONS",
  "item.cataclysm.bloom_stone_pauldrons.tooltip.summary": "A special chestplate.",
  "item.cataclysm.bloom_stone_pauldrons.tooltip.condition1": "On Sneak while equipped",
  "item.cataclysm.bloom_stone_pauldrons.tooltip.behaviour1": "Lets you _hide_ in the ground.",
  "item.cataclysm.bloom_stone_pauldrons.tooltip.condition2": "Upon releasing the Sneak key",
  "item.cataclysm.bloom_stone_pauldrons.tooltip.behaviour2": "Releases amethyst clusters _around_ you. Clusters that _collide_ with entities _cause damage_ to them.",
  "item.cataclysm.blessed_amethyst_crab_meat.tooltip": "BLESSED AMETHYST CRAB MEAT",
  "item.cataclysm.blessed_amethyst_crab_meat.tooltip.summary": "Grants the special _blessing_ effect which makes you _immune to _darkness_, _abyssal fear_ and _abyssal burn_ while fighting the _Leviathan_.",
  "item.cataclysm.abyss_eye.tooltip": "ABYSS EYE",
  "item.cataclysm.abyss_eye.tooltip.summary": "_Guides_ you to the _closest_ Sunken City where the _Leviathan_ resides. Only usable in the _Overworld_. Unusable in other dimensions.",
  "item.cataclysm.abyss_eye.tooltip.condition1": "On R-click",
  "item.cataclysm.abyss_eye.tooltip.behaviour1": "Throws the _Abyss Eye_ into the air. _Follow_ it.",
  "item.cataclysm.void_eye.tooltip": "VOID EYE",
  "item.cataclysm.void_eye.tooltip.summary": "_Guides_ you to the _closest_ Ruined Citadel where the _Ender Guardian_ resides. Only usable in _The End_. Unusable in other dimensions.",
  "item.cataclysm.void_eye.tooltip.condition1": "On R-click",
  "item.cataclysm.void_eye.tooltip.behaviour1": "Throws the _Void Eye_ into the air. _Follow_ it.",
  "item.cataclysm.mech_eye.tooltip": "MECH EYE",
  "item.cataclysm.mech_eye.tooltip.summary": "_Guides_ you to the _closest_ Ancient Factory where the _Harbinger_ resides. Only usable in the _Overworld_. Unusable in other dimensions.",
  "item.cataclysm.mech_eye.tooltip.condition1": "On R-click",
  "item.cataclysm.mech_eye.tooltip.behaviour1": "Throws the _Mech Eye_ into the air. _Follow_ it.",
  "item.cataclysm.flame_eye.tooltip": "FLAME EYE",
  "item.cataclysm.flame_eye.tooltip.summary": "_Guides_ you to the _closest_ Burning Arena where _Ignis_ resides. Only usable in the _Nether_. Unusable in other dimensions.",
  "item.cataclysm.flame_eye.tooltip.condition1": "On R-click",
  "item.cataclysm.flame_eye.tooltip.behaviour1": "Throws the _Flame Eye_ into the air. _Follow_ it.",
  "item.cataclysm.monstrous_eye.tooltip": "MONSTROUS EYE",
  "item.cataclysm.monstrous_eye.tooltip.summary": "_Guides_ you to the _closest_ Sunken City where the _Leviathan_ resides.",
  "item.cataclysm.monstrous_eye.tooltip.condition1": "On R-click",
  "item.cataclysm.monstrous_eye.tooltip.behaviour1": "Throws the _Monstrous Eye_ into the air. _Follow_ it.",
  "item.chalk.chalk_box.tooltip": "CHALK BOX",
  "item.chalk.chalk_box.tooltip.summary": "Allows you to use _store_ and _switch_ between chalks. It also allows you to add a _glowing_ effect to your chalk if you have any _glow ink sacs_ in the special slot.",
  "item.chalk.chalk_box.tooltip.condition1": "On right click while not looking at any blocks",
  "item.chalk.chalk_box.tooltip.behaviour1": "Opens the GUI for access to stored chalks.",
  "item.chalk.chalk_box.tooltip.condition2": "Additional Info",
  "item.chalk.chalk_box.tooltip.behaviour2": "Marks are drawn with the _leftmost chalk_ in order. To change _active_ chalk, simply _[Shift]_ + _[R-click]_ while _not looking_ at any block with the Chalk Box in hand.",
  "item.chalk.black_chalk.tooltip": "BLACK CHALK",
  "item.chalk.black_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.black_chalk.tooltip.condition1": "Usage",
  "item.chalk.black_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.black_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.black_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.black_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.black_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.blue_chalk.tooltip": "BLUE CHALK",
  "item.chalk.blue_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.blue_chalk.tooltip.condition1": "Usage",
  "item.chalk.blue_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.blue_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.blue_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.blue_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.blue_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.brown_chalk.tooltip": "BROWN CHALK",
  "item.chalk.brown_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.brown_chalk.tooltip.condition1": "Usage",
  "item.chalk.brown_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.brown_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.brown_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.brown_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.brown_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.cyan_chalk.tooltip": "CYAN CHALK",
  "item.chalk.cyan_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.cyan_chalk.tooltip.condition1": "Usage",
  "item.chalk.cyan_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.cyan_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.cyan_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.cyan_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.cyan_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.gray_chalk.tooltip": "GRAY CHALK",
  "item.chalk.gray_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.gray_chalk.tooltip.condition1": "Usage",
  "item.chalk.gray_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.gray_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.gray_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.gray_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.gray_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.green_chalk.tooltip": "GREEN CHALK",
  "item.chalk.green_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.green_chalk.tooltip.condition1": "Usage",
  "item.chalk.green_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.green_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.green_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.green_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.green_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.light_blue_chalk.tooltip": "LIGHT BLUE CHALK",
  "item.chalk.light_blue_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.light_blue_chalk.tooltip.condition1": "Usage",
  "item.chalk.light_blue_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.light_blue_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.light_blue_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.light_blue_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.light_blue_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.light_gray_chalk.tooltip": "LIGHT GRAY CHALK",
  "item.chalk.light_gray_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.light_gray_chalk.tooltip.condition1": "Usage",
  "item.chalk.light_gray_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.light_gray_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.light_gray_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.light_gray_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.light_gray_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.lime_chalk.tooltip": "LIME CHALK",
  "item.chalk.lime_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.lime_chalk.tooltip.condition1": "Usage",
  "item.chalk.lime_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.lime_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.lime_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.lime_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.lime_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.magenta_chalk.tooltip": "MAGENTA CHALK",
  "item.chalk.magenta_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.magenta_chalk.tooltip.condition1": "Usage",
  "item.chalk.magenta_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.magenta_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.magenta_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.magenta_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.magenta_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.orange_chalk.tooltip": "ORANGE CHALK",
  "item.chalk.orange_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.orange_chalk.tooltip.condition1": "Usage",
  "item.chalk.orange_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.orange_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.orange_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.orange_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.orange_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.pink_chalk.tooltip": "PINK CHALK",
  "item.chalk.pink_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.pink_chalk.tooltip.condition1": "Usage",
  "item.chalk.pink_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.pink_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.pink_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.pink_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.pink_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.purple_chalk.tooltip": "PURPLE CHALK",
  "item.chalk.purple_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.purple_chalk.tooltip.condition1": "Usage",
  "item.chalk.purple_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.purple_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.purple_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.purple_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.purple_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.red_chalk.tooltip": "RED CHALK",
  "item.chalk.red_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.red_chalk.tooltip.condition1": "Usage",
  "item.chalk.red_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.red_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.red_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.red_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.red_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.white_chalk.tooltip": "WHITE CHALK",
  "item.chalk.white_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.white_chalk.tooltip.condition1": "Usage",
  "item.chalk.white_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.white_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.white_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.white_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.white_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.chalk.yellow_chalk.tooltip": "YELLOW CHALK",
  "item.chalk.yellow_chalk.tooltip.summary": "Useful for planning, navigation and drawing. Can be stored in the _Chalk Box_ for easier management and utility. Additional symbols are unlocked through advancements.",
  "item.chalk.yellow_chalk.tooltip.condition1": "Usage",
  "item.chalk.yellow_chalk.tooltip.behaviour1": "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.",
  "item.chalk.yellow_chalk.tooltip.condition2": "On Shift + R-click",
  "item.chalk.yellow_chalk.tooltip.behaviour2": "Allows you to change different symbols.",
  "item.chalk.yellow_chalk.tooltip.condition3": "Usage with Chalk Box",
  "item.chalk.yellow_chalk.tooltip.behaviour3": "Simply right click as if you were using the chalk in the first place.",
  "item.cloudstorage.balloon_bit.tooltip": "BALLOON BIT",
  "item.cloudstorage.balloon_bit.tooltip.summary": "With the power of the Crafting Table, you can make a new _balloon_ from _these pieces_.",
  "item.cloudstorage.balloon_bit.condition1": "On right click as a balloon",
  "item.cloudstorage.balloon_bit.behaviour1": "_Assigns_ the _Cloud Chest_ or _Static Cloud Chest_ that respective channel. Static Cloud Chests require a balloon with a _static charge_.",
  "block.cloudstorage.balloon_stand.tooltip": "BALLOON STAND",
  "block.cloudstorage.balloon_stand.tooltip.summary": "Used for _reading_ statistics for individual balloon channels and allows for the _copying_ of balloon colors.",
  "block.cloudstorage.balloon_stand.tooltip.condition1": "Top slot usage",
  "block.cloudstorage.balloon_stand.tooltip.behaviour1": "Used for _reading_ the statistics about the cloud storage _linked_ to that balloon.",
  "block.cloudstorage.balloon_stand.tooltip.condition2": "Bottom slot usage",
  "block.cloudstorage.balloon_stand.tooltip.behaviour2": "Used for _applying_ the _color_ of the balloon in the bottom slot to the balloon in the top slot.",
  "block.cloudstorage.cloud_chest.tooltip": "CLOUD CHEST",
  "block.cloudstorage.cloud_chest.tooltip.summary": "Personal and private. It's expandable too!",
  "block.cloudstorage.cloud_chest.tooltip.condition1": "How to Expand Storage",
  "block.cloudstorage.cloud_chest.tooltip.behaviour1": "Firstly, craft a few chests. Then using the _same balloon assigned_ to your Cloud Chest, send them up to the sky... literally.",
  "block.cloudstorage.cloud_chest.tooltip.condition2": "How to Switch Channels",
  "block.cloudstorage.cloud_chest.tooltip.behaviour2": "Right click the cloud chest with a _normal_ balloon in your hand, not one with a static charge.",
  "block.cloudstorage.static_cloud_chest.tooltip": "STATIC CLOUD CHEST",
  "block.cloudstorage.static_cloud_chest.tooltip.summary": "The publicly accessible cloud chest.",
  "block.cloudstorage.static_cloud_chest.tooltip.condition1": "How to Expand Storage",
  "block.cloudstorage.static_cloud_chest.tooltip.behaviour1": "Unlike the normal cloud chest, a static cloud chest uses balloons with a _static charge_. So if you want to expand storage for your static cloud chest MAKE SURE you use balloons with a _static charge_.",
  "block.cloudstorage.static_cloud_chest.tooltip.condition2": "How to Switch Channels",
  "block.cloudstorage.static_cloud_chest.tooltip.behaviour2": "The process is similar to the regular cloud chest, just use balloons with a _static charge_.",
  "item.eccentrictome.tome.tooltip": "TOME",
  "item.eccentrictome.tome.tooltip.summary": "<rainb>Condenses many tools and books into <rainb>one.</rainb> Elegantly <rainb>presents</rainb> all the tools and books _stored_ within it upon right click.",
  "item.eccentrictome.tome.tooltip.condition1": "How to add items",
  "item.eccentrictome.tome.tooltip.behaviour1": "Combine _while in book form_ in a crafting grid _with_ the item you want to _store_. Pickaxes, axes, shovels, hoes, shears, the _Wand of Symmetry_ and _Wrench_ from Create are all permitted.",
  "item.eccentrictome.tome.tooltip.condition2": "Warning 1",
  "item.eccentrictome.tome.tooltip.behaviour2": "_DO NOT_ USE AS A CRAFTING INGREDIENT OR YOU WILL _LOSE ALL STORED ITEMS!_",
  "item.eccentrictome.tome.tooltip.condition3": "Warning 2",
  "item.eccentrictome.tome.tooltip.behaviour3": "Storing items with the _same_ item ID _even_ when _uniquely named_ will _destroy all other copies_, so _do not store_ two Diamond Pickaxes _together_ in the Eccentric Tome!",
  "item.eccentrictome.tome.tooltip.condition4": "Warning 3",
  "item.eccentrictome.tome.tooltip.behaviour4": "Be careful when _using_ the _Wand of Symmetry_ as it can _bypass_ the durability protections on tools that are _about to break_. You will _lose the tome_ if the item _actually_ breaks.",
  "item.eccentrictome.tome.tooltip.control1": "Right click",
  "item.eccentrictome.tome.tooltip.action1": "To select everything stored.",
  "item.eccentrictome.tome.tooltip.control2": "Shift + Left Click (while transformed as another item)",
  "item.eccentrictome.tome.tooltip.action2": "To _remove_ items from the reality breaking pocket universe within this book, simply _crouch_ and drop with the item you want to remove.",
  "item.eccentrictome.tome.tooltip.control3": "On Left click while not looking at a block",
  "item.eccentrictome.tome.tooltip.action3": "_Returns_ the tome back to its original form. Just make sure to be punching the air and not a block.",
  "item.etched.boombox.tooltip": "BOOMBOX",
  "item.etched.boombox.tooltip.summary": "Become a _walking_ jukebox for all to hear.",
  "item.etched.boombox.tooltip.condition1": "On Shift + R-click",
  "item.etched.boombox.tooltip.behaviour1": "_Pauses_ audio playback.",
  "item.etched.boombox.tooltip.condition2": "On R-click with Music Disc on cursor",
  "item.etched.boombox.tooltip.behaviour2": "_Inserts_ Music Disc into boombox.",
  "item.extendedcrafting.handheld_table.tooltip": "HANDHELD TABLE",
  "item.extendedcrafting.handheld_table.tooltip.summary": "A _handheld_ Crafting Table.",
  "item.extendedcrafting.handheld_table.tooltip.condition1": "Purpose",
  "item.extendedcrafting.handheld_table.tooltip.behaviour1": "You _never_ have to use a Crafting Table block again! It is literally a hand held Crafting Table, what more can you ask for?",
  "item.extendedcrafting.handheld_table.tooltip.control1": "Right click",
  "item.extendedcrafting.handheld_table.tooltip.action1": "Opens the Crafting Table interface.",
  "block.farmersdelight.skillet.tooltip": "SKILLET",
  "block.farmersdelight.skillet.tooltip.summary": "The skillet can be used to _cook_ food over an open flame or a stove. It can also be occasionally used as a weapon should the need ever arise.",
  "block.farmersdelight.skillet.tooltip.condition1": "When held over an open flame or stove",
  "block.farmersdelight.skillet.tooltip.behaviour1": "Cooks one food item at a time at a faster speed than a campfire.",
  "block.farmersdelight.skillet.tooltip.condition2": "On holding right click while holding ingredients in off-hand",
  "block.farmersdelight.skillet.tooltip.behaviour2": "Cooks ingredients over an open flame or a stove.",
  "block.farmersdelight.skillet.tooltip.condition3": "On left click",
  "block.farmersdelight.skillet.tooltip.behaviour3": "Can be utilized as a weapon.",
  "block.goldenhopper.golden_hopper.tooltip": "GOLDEN HOPPER",
  "block.goldenhopper.golden_hopper.tooltip.summary": "Has the ability to _filter_ items based on what is inside the extra item slot.",
  "item.graveyard.corruption.tooltip": "CORRUPTION",
  "item.graveyard.corruption.tooltip.summary": "A _special trading currency_ which can be used with an NPC residing near a _spooky tree_ at night time.",
  "item.graveyard.corruption.tooltip.condition1": "Other Info",
  "item.graveyard.corruption.tooltip.behaviour1": "Be sure to gather _a lot_ of this as it is needed in _large amounts_ in trading.",
  "block.graveyard.ossuary.tooltip": "OSSUARY",
  "block.graveyard.ossuary.tooltip.summary": "Used for making _death_ related _decor_ from bone blocks.",
  "item.grimoireofgaia.taproot.tooltip": "TAPROOT",
  "item.grimoireofgaia.taproot.tooltip.summary": "Commonly dropped by Dryads, Mandragora and Spriggans.",
  "item.grimoireofgaia.taproot.tooltip.condition1": "When eaten",
  "item.grimoireofgaia.taproot.tooltip.behaviour1": "Despite providing _no_ nutritional value, it serves as a _cure_ for _negative_ status effects.",
  "item.irons_spellbooks.copper_spell_book.tooltip": "COPPER SPELL BOOK",
  "item.irons_spellbooks.copper_spell_book.tooltip.summary": "A _Common_ spell book.",
  "item.irons_spellbooks.copper_spell_book.tooltip.control1": "Pressing Tab",
  "item.irons_spellbooks.copper_spell_book.tooltip.action1": "Allows you to cycle through spells equipped.",
  "item.lilwings.butterfly_net.tooltip": "BUTTERFLY NET",
  "item.lilwings.butterfly_net.tooltip.summary": "An essential tool for Lepidopterists just starting out with _collecting_ butterflies. Has a _limited_ amount of uses and can't capture all butterflies.",
  "item.lilwings.butterfly_net.tooltip.condition1": "On R-click on a Butterfly",
  "item.lilwings.butterfly_net.tooltip.behaviour1": "_Captures_ the butterfly.",
  "item.lilwings.butterfly_net.tooltip.condition2": "On R-click on a Butterfly Jar",
  "item.lilwings.butterfly_net.tooltip.behaviour2": "_Places_ the captured butterfly _inside_ the Butterfly Jar.",
  "item.lilwings.enderfly_net.tooltip": "ENDERFLY NET",
  "item.lilwings.enderfly_net.tooltip.summary": "For _expert_ Lepidopterists. Able to capture _all_ butterflies.",
  "item.lilwings.enderfly_net.tooltip.condition1": "On R-click on a Butterfly",
  "item.lilwings.enderfly_net.tooltip.behaviour1": "_Captures_ the butterfly.",
  "item.lilwings.enderfly_net.tooltip.condition2": "On R-click on a Butterfly Jar",
  "item.lilwings.enderfly_net.tooltip.behaviour2": "_Places_ the captured butterfly _inside_ the Butterfly Jar.",
  "block.monobank.monobank.tooltip": "MONOBANK",
  "block.monobank.monobank.tooltip.summary": "Both _*secure_ and _blast-proof_ and _holds_ a large amount of a single item. Also does not _burn_ in lava!",
  "block.monobank.monobank.tooltip.condition1": "R-Click as the Owner",
  "block.monobank.monobank.tooltip.behaviour1": "Opens your monobank. Do note that strangers can _lock pick_ your lock.",
  "block.monobank.monobank.tooltip.condition2": "R-Click as a Stranger",
  "block.monobank.monobank.tooltip.behaviour2": "Opens the _lock picking_ interface.",
  "block.mysticalagriculture.infusion_altar.tooltip": "INFUSION ALTAR",
  "block.mysticalagriculture.infusion_altar.tooltip.summary": "The _gateway_ to infinity.",
  "block.mysticalagriculture.infusion_altar.tooltip.condition1": "Usage",
  "block.mysticalagriculture.infusion_altar.tooltip.behaviour1": "Requires a total of eight _Infusion Pedestals_ to function and a _redstone_ power source like a _lever_ to initialize the process.",
  "item.quark.abacus.tooltip": "ABACUS",
  "item.quark.abacus.tooltip.summary": "A tool used to measure distance.",
  "item.quark.abacus.tooltip.condition1": "On R-click",
  "item.quark.abacus.tooltip.behaviour1": "Right click on a block face to measure distance.",
  "block.quark.crate.tooltip": "CRATE",
  "block.quark.crate.tooltip.summary": "Can store a total of 640 _unique_ items. Good for storing items with _many_ variations. Not so good for storing items that are the same _and_ stack.",
  "item.salt.salt.tooltip": "SALT",
  "item.salt.salt.tooltip.summary": "Food can now be salted to improve the _taste_ and add _nutrition_.",
  "item.salt.salt.tooltip.condition1": "Usage",
  "item.salt.salt.tooltip.behaviour1": "Combine with food in the crafting grid tagged with the _'salt:can be salted'_ tag. Multiple mods, including _Farmer's Delight_ are _natively supported_.",
  "item.salt.salt.tooltip.condition2": "Acquisition",
  "item.salt.salt.tooltip.behaviour2": "Rock salt can generate underground in _dripstone caves_, the _ocean_ and _beach biomes_. When harvested, _Rock Salt Ore_ will drop _Raw Rock Salt_ which is then _crafted_ into _Salt_.",
  "item.salt.salt.tooltip.condition3": "Renewal",
  "item.salt.salt.tooltip.behaviour3": "Salt can be obtained by _growing_ your own Salt Crystals or by the _evaporation_ of water in a cauldron.",
  "item.salt.salt.tooltip.condition4": "Additional Usage",
  "item.salt.salt.tooltip.behaviour4": "Salt blocks will _melt_ adjacent ice and snow blocks. Ice and snow can also be _melted_ by _sprinkling salt_ over them.",
  "item.solapplepie.lunchbag.tooltip": "LUNCHBAG",
  "item.solapplepie.lunchbag.tooltip.summary": "Conveniently _stores_ food in a single item. _Not safe_ from the gaze of seagulls!",
  "item.solapplepie.lunchbag.tooltip.condition1": "On Sneak + R-click while in main hand",
  "item.solapplepie.lunchbag.tooltip.behaviour1": "Opens the _food_ inventory.",
  "item.solapplepie.lunchbox.tooltip": "LUNCHBOX",
  "item.solapplepie.lunchbox.tooltip.summary": "Conveniently _stores_ food in a single item. _Not safe_ from the gaze of seagulls!",
  "item.solapplepie.lunchbox.tooltip.condition1": "On Sneak + R-click while in main hand",
  "item.solapplepie.lunchbox.tooltip.behaviour1": "Opens the _food_ inventory.",
  "item.solapplepie.golden_lunchbox.tooltip": "GOLDEN LUNCHBOX",
  "item.solapplepie.golden_lunchbox.tooltip.summary": "Conveniently _stores_ food in a single item. _Not safe_ from the gaze of seagulls!",
  "item.solapplepie.golden_lunchbox.tooltip.condition1": "On Sneak + R-click while in main hand",
  "item.solapplepie.golden_lunchbox.tooltip.behaviour1": "Opens the _food_ inventory.",
  "item.supplementaries.key.tooltip": "KEY",
  "item.supplementaries.key.tooltip.summary": "Able to _lock_ many Supplementaries related things. You should probably _rename_ it with some _lore_ to use as a personal passkey.",
  "item.supplementaries.key.tooltip.condition1": "On R-click",
  "item.supplementaries.key.tooltip.behaviour1": "Fully _locks_ eligible Supplementaries blocks. You _can't_ clear the lock once it is set, so _DO NOT_ lose your key.",
  "item.supplementaries.quiver.tooltip": "QUIVER",
  "item.supplementaries.quiver.tooltip.summary": "Easily _stores_ arrows to _save_ space in your inventory and does not have to be worn to be used. Holds _nine_ stacks of arrows.",
  "item.supplementaries.quiver.tooltip.condition1": "Storing arrows",
  "item.supplementaries.quiver.tooltip.behaviour1": "To store arrows in the Quiver, grab any stack size of arrows with your cursor then _right click_ over the Quiver.",
  "item.tempad.tempad.tooltip": "TEMPAD",
  "item.tempad.tempad.tooltip.summary": "Has _unlimited_ uses. Enjoy! Just wait to _recharge_ after using it.",
  "item.tempad.tempad.tooltip.condition1": "On R-click",
  "item.tempad.tempad.tooltip.behaviour1": "Opens the Tempad interface.",
  "item.tempad.tempad.tooltip.condition2": "Info",
  "item.tempad.tempad.tooltip.behaviour2": "Allows _teleportation_ to set locations by entering portals.",
  "item.tempad.tempad.tooltip.condition3": "Notice",
  "item.tempad.tempad.tooltip.behaviour3": "You must first be _physically_ present at the location to make a _temporal anchor_ for that location.",
  "item.tempad.he_who_remains_tempad.tooltip": "HE WHO REMAINS TEMPAD",
  "item.tempad.he_who_remains_tempad.tooltip.summary": "The property of _'He Who Remains'_.",
  "item.tempad.he_who_remains_tempad.tooltip.condition1": "Info",
  "item.tempad.he_who_remains_tempad.tooltip.behaviour1": "Has _no_ teleportation cooldown. Full access has been _granted_."
}
*/