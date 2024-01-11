// priority: 15
// requires: tipsmod
// requires: textanimator
// requires: create
// requires: lootjs
// ignored: false

/**
 * @file Tips factory script.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * @description
 * If applicable, changes the translate key if the mod uses translate keys for its tips.
 */

console.log("Since Tips mod conditions don't work properly still...")
console.log("Loading tips conditionally.")

let compon = []
function finTip(tipId, tipText) {
    compon.push({
        id: tipId,
        text: tipText
    })
}
let jokeCompon = []
function finJokeTip(tipId, tipText) {
    jokeCompon.push({
        id: tipId,
        text: tipText
    })
}
let createCompon = []
function createTip(tipId, tipText) {
    createCompon.push({
        id: tipId,
        text: tipText
    })
}
let specCreateCompon = []
function rainbCreateTip(tipId, tipText) {
    specCreateCompon.push({
        id: tipId,
        text: tipText
    })
}
let jeiCompon = []
function jeiTip(tipId, tipText) {
    jeiCompon.push({
        id: tipId,
        text: tipText
    })
}
let reiCompon = []
function reiTip(tipId, tipText) {
    reiCompon.push({
        id: tipId,
        text: tipText
    })
}

ClientEvents.lang("en_us", event => {
    // Tip Titles
    event.addAll("kubejs", {
        "kubejs.tip.finality_tip": "Finality Tip",
        "kubejs.tip.create_tip": "Create Tip",
        "kubejs.tip.rainb_create_tip": "<rainb>Create Tip</rainb>",
        "kubejs.tip.jei_tip": "JEI Tip",
        "kubejs.tip.rei_tip": "REI Tip"
    })
    // resourcelocation | translation key id | tip text string
    compon.forEach(thing => {
        event.add('kubejs', `kubejs.tip.${thing.id}`, thing.text)
    })
})
ClientEvents.highPriorityAssets(event => {
    compon.forEach(thing => {
        event.add(`kubejs:tips/tip_${thing.id}`, {
            "title": {
                "translate": "kubejs.tip.finality_tip",
                "bold": true,
                "color": "light_purple"
            },
            "tip": {
                "translate": 'kubejs.tip.' + thing.id // "translate": "kubejs.tip.${fileName}"
            }
        })
    })
    jokeCompon.forEach(thing => {
        event.add`kubejs:tips/joke_tips/joke_tip_${thing.id}`, {
            "title": {
                "translate": "kubejs.tip.finality_tip",
                "bold": true,
                "color": "red"
            },
            "tip": {
                "translate": 'kubejs.tip.joke_' + thing.id // "translate": "kubejs.tip.joke_${fileName}"
            }
        }
    })
    createCompon.forEach(thing => {
        event.add(`kubejs:tips/create_tips/create_${thing.id}`, {
            "title": {
                "translate": "kubejs.tip.create_tip",
                "bold": true,
                "color": "gold"
            },
            "tip": {
                "translate": `kubejs.tip.${thing.id}`
            }
        })
    })
    specCreateCompon.forEach(thing => {
        event.add(`kubejs:tips/create_tips/create_${thing.id}`, {
            "title": {
                "translate": "kubejs.tip.rainb_create_tip", // "translate": "kubejs.tip.rainb_create_tip"
                "bold": true,
                "color": "gold"
            },
            "tip": {
                "translate": `kubejs.tip.${thing.id}`
            }
        })
    })
})

finTip("coal_renewal", "Coal can be renewed from compacting kelp blocks when given sufficient heat.")
finTip("diamond_renewal", "Diamonds can be renewed from compacting coal when given sufficient heat.")
finTip("difficulty", "If you did not heed my warning, expect to die many times over if you are not careful.")
finTip("deepslate_shards", "Cobbled Deepslate can now be used to make Deepslate Shards which can be haunted to produce Echo Shards.")
finTip("diorite_andesite", "Combining Cobblestone and Diorite is an easy way to automate Andesite production.")
finTip("dragon_breath", "You can now extract Dragon Breath an unlimited amount of from the Dragon Egg by combining it with a bottle in the crafting grid.")
finTip("fd_rotten_flesh_use", "Rotten Flesh can be used to make Organic Compost which trns into Rich Soil.")
finTip("rotten_flesh_haunting", "Rotten Flesh can now be haunted and turned into Phantom Membrane.")
finTip("flax", "Start a Flax plant farm as early as possible. It will help in the long term with making Windmill Sails.")
finTip("gateway_pearls", "<rainb>Gateway Pearls</rainb> are a fast way of obtaining a lot of loot from a specific mob. Just be prepared for combat.")
finTip("experience_levels", "While you may receive large amounts of experience from quests, you are not expected to keep all of it.")
finTip("compact_completion", "It is unlikely that you can complete this modpack in an area of 1-4 chunks. Be prepared to use a Create train network.")
finTip("compacting_sponges", "Put a Wet Sponge in a Basin with a Mechanical Press to press out the water.")
finTip("crawling", "Press X to crawl to get into tight spaces or in one block gaps.")
finTip("quests", "Don't forget to open your Quest Book! It can be accessed form the top left corner of your screen when you have your inventory open.")
finTip("real_camera", "Real Camera can be toggled by pressing [F6].")
finTip("tooltips", "Always read tooltips! I am not responsible for any damages that may occur from failing to follow instructions.")
finTip("lapis_from_witches", "Witches now drop Lapis Lazuli in addition to previous item drops.")
finTip("zinc_from_creepers", "Creepers now drop Zinc Nuggets in addition to previous item drops.")
if (Platform.isLoaded("create_enchantment_indsutry")) {
    finTip("store_experience", "Experience can be extracted using Disenchanters and then pumped into Fluid Tanks.")
}
if (Platform.isLoaded("apotheosis")) {
    finTip("spawners", "Spawners now drop Structure Void which can be used to recraft them. Use the Capturing enchantment to acquire Spawn Eggs.")
}
if (Platform.isLoaded("armorstandshiftswap")) {
    finTip("armor_stand_swap", "[Shift] + R-click on Armor Stands to put your entire armor set at once with the addition of Armor Stand Shift Swap.")
}
if (Platform.isLoaded("autumnity")) {
    finJokeTip("turkey_head", "Careful not to get a turkey dropped on your head!")
}
if (Platform.isLoaded("backpacked")) {
    finTip("backpacked", "It is recommended to make a backpack. 6 Leather, 2 String and 1 Iron Ingot is all you need.")
}
if (Platform.isLoaded("betterchunkloading")) {
    finTip("predictive_chunk_loading", "This is more of a fun fact, but the modpack uses predictive chunk loading from Better Chunk Loading. Sorry if chunks are a bit weird on occasion.")
}
if (Platform.isLoaded("bhc")) {
    finTip("bhc_wither_bones", "Bones can be haunted into Wither Bones.")
}
if (Platform.isLoaded("better_climbing")) {
    finTip("better_climbing", "Look up to climb faster and look down to climb down faster. You also gain momentum in either direction.")
}
if (Platform.isLoaded("blockrunner")) {
    finTip("blockrunner", "If a block has a <rainb>Speed Modifier</rainb> in their tooltip, they allow you to move faster on them.")
}
if (Platform.isLoaded("carryon")) {
    finTip("carryon_lootr_chests", "You can pick up Lootr chests by Shift + Right clicking on them when near enough. Useful for moving them out of the way without breaking them!")
    finTip("carryon_spawners", "You can pick up Spawners by Shift + Right clicking on them when near enough.")
}
if (Platform.isLoaded("enigmaticlegacy")) {
    finTip("seven_curses_slime", "Wearing the Ring of the Seven Curses can yield extra rewards such as Slime Balls from Zombies, at the cost of your <shake>sanity</shake>. So choose wisely!")
}
if (Platform.isLoaded("healingcampfire")) {
    finTip("campfire_regen", "Campfires now regenerate health when you are nearby.")
}
if (Platform.isLoaded("lilwings")) {
    finTip("lil_wings_butterflies", "Butterflies around the world can assist you greatly when housed in a jar, though some are best kept fluttering freely.")
    finTip("lil_wings_catcher", "A certain butterfly that hangs around villages can help accelerate crop growth.")
}
if (Platform.isLoaded("portablehole")) {
    finTip("portable_hole", "Strongholds now contain a very special portable item that lets you break reality and make holes in walls.")
}
if (Platform.isLoaded("tinyskeletons")) {
    finTip("tiny_wither_skeletons", "You can give a baby Wither Skeleton a Wither Rose in exchange for a Wither Skeleton Skull if you find that they are too cute to be killed.")
}
if (Platform.isLoaded("torchmaster")) {
    finTip("torchmaster_megatorch", "Megatorches from the Torchmaster mod prevent hostile mob spawning in a cube radius of 64 blocks.")
}

ClientEvents.highPriorityAssets(event => {
    /**
     * @summary The not so serious Finality tip factory
     * @param {ResourceLocation_} fileName The JSON file name
     * @param {string} tipText The tip text itself
     */
    function finJokeTip(fileName, tipText) {
        event.add(`kubejs:tips/joke_tips/${fileName}`, {
            "title": {
                "translate": "kubejs.tip.finality_tip",
                "bold": true,
                "color": "red"
            },
            "tip": {
                "translate": `kubejs.tip.joke_${fileName}` // "translate": "kubejs.tip.joke_${fileName}"
            }
        })
    }
    /**
     * @summary Create tip factory, uses gold color in tip title.
     * @param {ResourceLocation_} fileName 
     * @param {string} tipText 
     */
    function createTip(fileName, tipText) {
        event.add(`kubejs:tips/create_${fileName}`, {
            "title": {
                "translate": "kubejs.tip.create_tip",
                "bold": true,
                "color": "gold"
            },
            "tip": {
                "translate": `kubejs.tip.${fileName}`
            }
        })
    }
    /**
     * 
     * @param {ResourceLocation_} fileName 
     * @param {string} tipText 
     */
    function specialCreateTip(fileName, tipText) {
        event.add(`kubejs:tips/create_${fileName}`, {
            "title": {
                "translate": "kubejs.tip.rainb_create_tip", // "translate": "kubejs.tip.rainb_create_tip"
                "bold": true,
                "color": "gold"
            },
            "tip": {
                "translate": `kubejs.tip.${fileName}`
            }
        })
    }

    /*
    Create Tips
    */
    createTip("basin_spouts", "Did you know Basins automatically open a spout to an adjacent Mechanical Belt, Funnel, Item Drain, Depot and Chute?")
    createTip("belt_shortening", "Wrenches can shorten already placed Mechanical Belts! Simply right click on one of the ends of the belt. DO NOT PRESS SHIFT while doing this!")
    createTip("copper_drowned", "Drowned are a source of renewable copper.")
    createTip("fast_gear_ratio", "To speed up RPM, connect a large Cogwheel to a small cogwheel and make sure the rotational power is being delivered through the large cogwheel.")
    createTip("gravel_washing", "Gravel can be washed to get Iron Nuggets.")
    createTip("slow_gear_ratio", "To slow down RPM, connect a small cogwheel to a large cogwheel and make sure the rotational power is being delivered through the smaller cogwheel.")
    createTip("netherite_diving_gear", "Create's Netherite diving set allows you to swim in lava, literally. Did I mention you can see clearer in lava with the helmet as well?")
    createTip("red_sand_washing", "Washing Red Sand yields more gold than washing Soul Sand.")
    createTip("sand_haunting", "Sand can be haunted into Soul Sand which can be washed for useful materials.")
    createTip("symmetry_wand_building", "The Wand of Symmetry is helpful in building your structures symmetrically and will usually mirror blocks placed exactly. There are some exceptions, however.")
    createTip("symmetry_wand_excavation", "The Wand of Symmetry can be used to quickly excavate an area with the Octagonal setting. Just keep in mind that 8 blocks will be broken at the same time, so your tool durability will be used up quicker.")
    createTip("nothing_is_worthless", "What was once worthless is now valuable. From Cobblestone you can get Gravel. From Gravel you can get Iron Nuggets.")
    // create wrench tips 101
    createTip("wrench_1", "Wrenches can instantly pick up Create's blocks, simply Shift + R-click with it in your main hand. Stop wasting your pickaxe or axe durability!")
    createTip("wrench_2", "Create's Wrench can instantly pick up Hoppers.")
    createTip("wrench_3", "The axis that Wrenches rotate Create's blocks are based on which block face you are looking at.")
    finTip("create_wrench_4", "In this modpack, a lot more blocks can be picked up with Create's Wrench.")
    createTip("potato_cannon_high_damage", "Golden Carrots and Blaze Cakes deal the highest amount of damage when used as ammo for the Potato Cannon.")
    createTip("windmill_radial_farm", "A Windmill Bearing is an easy way to make a radial farm. Superglue is not needed if you are using Linear and Radial Chassis blocks, simply right click with a Slime Ball.")
    specialCreateTip("ponder", "<shake>Hold [w] to Ponder. PLEASE.</shake>")
    specialCreateTip("use_wrench_not_pickaxe", "Remember to use your Wrench instead of your pickaxe when picking up most Create blocks!")
    // thank you for bringing this up firekylea1205
    createTip("mixer_minimum_rpm", "Did you know the absolute minimum required RPM for Mechanical Mixers is actually 30 RPM? 32 RPM is more commonly known, however.")
    // create addons

    // recipe viewer tips
    /**
     * @summary REI tip factory
     * @param {ResourceLocation_} fileName The JSON file name
     * @param {string} tipText The tip text itself
     */
    function reiTips(fileName, tipText) {
        event.add(`kubejs:tips/rei_${fileName}`, {
            "title": {
                "text": "REI Tip",
                "bold": true,
                "color": "light_gray"
            },
            "tip": { "text": tipText }
        })
    }
    if (Platform.isLoaded("roughlyenoughitems")
        && Platform.isLoaded("roughlyenoughresources")
        && Platform.isLoaded("roughlyenoughprofessions")
    ) {
        reiTips("search_bar", "While in your inventory screen, press <rainb>Ctrl + F</rainb> to quickly access REI's search bar.")
        reiTips("recipes_shortcut", "Hovering over an item and pressing R will show all recipe methods on how to get that item.")
        reiTips("usage_shortcut", "Hovering over an item and pressing U will show all recipe uses for that item.")
        reiTips("recipe_saving", "You can click and drag recipe windows to bookmark them on the top left corner for easier viewing. None of that back and forth between the crafting grid and forgetting the recipe then having to check the recipe again.")
        reiTips("drag_n_drop", "A <wiggle><wave>lot</wave></wiggle> of things can be dragged and drop to the bookmarks area.")
        reiTips("customization", "REI is highly customizable! Feel free to experiment.")
    }
    /**
     * @summary JEI tip factory
     * @param {ResourceLocation_} fileName The JSON file name
     * @param {string} tipText The tip text itself
     */
    function jeiTips(fileName, tipText) {
        event.add(`kubejs:tips/jei_${fileName}`, {
            "title": {
                "text": "JEI Tip",
                "bold": true,
                "color": "dark_green"
            },
            "tip": { "text": tipText }
        })
    }
    if (Platform.isLoaded("jei")
        && Platform.isLoaded("jeresources")
        && Platform.isLoaded("justenoughprofessions")
    ) {
        jeiTips("search_bar", "While in your inventory screen, press <rainb>Ctrl + F</rainb> to quickly access JEI's search bar.")
        jeiTips("recipes_shortcut", "Hovering over an item and pressing R will show all recipe methods on how to get that item.")
        jeiTips("usage_shortcut", "Hovering over an item and pressing U will show all recipe uses for that item.")
    }
})