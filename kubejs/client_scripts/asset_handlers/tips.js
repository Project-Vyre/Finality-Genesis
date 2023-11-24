// ignored: false
// requires: tipsmod
// requires: textanimator
// requires: create
// requires: lootjs

/**
 * @file Tips factory script.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * @description
 * If applicable, changes the translate key if the mod uses translate keys for its tips.
 */

console.log("Since Tips mod conditions don't work properly still...")
console.log('Loading tips conditionally.')

ClientEvents.lang('en_us', event => {
    event.addAll('tipsmod', {
        "tipsmod.title.default": "Tip",
        "tipsmod.tip.no_tips": "No tips have been loaded. Please review the configurations.",
        "tipsmod.tip.undead_damage": "Undead mobs like Skeletons and Zombies are damaged by health potions and healed by damage potions.",
        "tipsmod.tip.poison_immune": "Zombies, Skeletons, and Spiders are all immune to poison damage.",
        "tipsmod.tip.witch_conversion": "Villagers will become Witches when struck by lightning.",
        "tipsmod.tip.four_eggs": "Hatching chicken eggs can spawn four chickens on very rare occasions.",
        "tipsmod.tip.nether_lava": "Lava will spread faster in the Nether. It also travels longer distances.",
        "tipsmod.tip.west": "The Sun, Moon, and Stars all move towards the west.",
        "tipsmod.tip.swamp_slime": "Slimes can spawn in swamps during a full moon.",
        "tipsmod.tip.deflect_ghast_fireballs": "You can deflect Ghast fireballs by attacking them.",
        "tipsmod.tip.shulker_armor": "Shulkers take significantly more damage when their shells are open.",
        "tipsmod.tip.arthropods": "Spiders, Silverfish, Bees, and Endermites all take damage from Bane of Arthropods.",
        "tipsmod.tip.fossils": "Large fossils are buried under swamps and deserts.",
        "tipsmod.tip.crouch_blocks": "Sneaking/Crouching will prevent you from falling off the side of blocks.",
        "tipsmod.tip.smoke_bees": "Placing a Campfire beneath a Bee Nest will make those Bees passive.",
        "tipsmod.tip.lava_fuel": "Lava Buckets can be used as fuel in the Furnace.",
        "tipsmod.tip.wooden_tool_fuel": "Old Wooden tools can be used as fuel in the Furnace.",
        "tipsmod.tip.scrap_nuggets": "Gold and Iron tools/armor can be smelted into nuggets.",
        "tipsmod.tip.piglin_gold": "Piglins really <wave>love</wave> gold.",
        "tipsmod.tip.dog_health": "The lower a dog's tail, the less health they have left.",
        "tipsmod.tip.dog_rotten_flesh": "You can heal your dogs by feeding them Rotten Flesh.",
        "tipsmod.tip.lure_animals": "You can lure animals into following you by holding a food they like.",
        "tipsmod.tip.cooked_drops": "Animals killed by fire damage usually drop cooked food.",
        "tipsmod.tip.nether_sponge": "Wet sponges will immediately dry when placed in the nether.",
        "tipsmod.tip.boat_passenger": "Boats can carry two passengers.",
        "tipsmod.tip.shulker_golem": "Shulkers are considered a type of Golem.",
        "tipsmod.tip.note_block_instrument": "The instrument of a Note Block is determined by the block underneath it.",
        "tipsmod.tip.zombie_armor": "Zombies have two base points of armor, even when they are not wearing any.",
        "tipsmod.tip.undead_helmet": "Undead mobs will not burn in daylight if they are wearing a helmet.",
        "tipsmod.tip.iron_golem_heal": "Iron Golems can be healed by giving them iron ingots.",
        "tipsmod.tip.turtle_shell": "Turtles only drop scutes when a baby grows into an adult.",
        "tipsmod.tip.animal_growing": "Feeding baby animals will make them grow up sooner.",
        "tipsmod.tip.blaze_snowball": "Blazes take damage from snowballs.",
        "tipsmod.tip.biome_bonemeal": "Using bone meal on grass blocks can give different types of flowers.",
        "tipsmod.tip.biome_fishing": "Fishing in a Jungle can give you different items compared to fishing in other biomes.",
        "tipsmod.tip.fishing_resources": "Fishing is a great way to get high level enchanted books.",
        "tipsmod.tip.boat_jump": "By placing a boat in lava you can make a temporary platform.",
        "tipsmod.tip.creeper_cat": "Creepers are afraid of cats and will run away from them.",
        "tipsmod.tip.water_grass": "Water can quickly break grass patches and get seeds.",
        "tipsmod.tip.gravity_torch": "Falling blocks like sand and gravel instantly break when falling onto a torch.",
        "tipsmod.tip.string_wool": "String can be crafted in a 2x2 to make wool.",
        "tipsmod.tip.barrel": "Barrels are a convenient alternative to chests.",
        "tipsmod.tip.job_site_dimension": "Villagers lose their job site when changing dimensions.",
        "tipsmod.tip.villager_sweat": "Villagers sweat when trying to trade with them during a raid.",
        "tipsmod.tip.wandering_invis": "Wandering traders drink invisibility potions at night.",
        "tipsmod.tip.baby_panda_slimeball": "Baby Pandas have a 0.1% chance to drop a slimeball after they sneeze.",
        "tipsmod.tip.fortress_triangulation": "You can triangulate stronghold locations by summoning eyes of ender from two different locations and tracking where they intersect.",
        "tipsmod.tip.creeper_drops_disc": "If a Skeleton's or Stray's arrow kills a Creeper, the Creeper drops a random music disc.",
        "tipsmod.tip.mooshroom_lightning": "A red mooshroom will become a brown mooshroom, and a brown mooshroom will become a red one, when struck by lightning.",
        "tipsmod.tip.bed_explode": "Trying to sleep in other dimensions will end poorly.",
        "tipsmod.tip.fall_damage_blocks": "Some blocks like water and hay can reduce fall damage.",
        "tipsmod.tip.bed_respawn": "Sleeping in a bed will set your spawn point.",
        "tipsmod.tip.ore_tiers": "Some ores have a minimum required pickaxe tier to mine them.",
        "tipsmod.tip.sponge_bucket": "Wet Sponge can be dried in a furnace by cooking it. If there is an empty bucket in the fuel slot the bucket will catch the water!",
        "tipsmod.tip.coarse_to_dirt": "Coarse Dirt can be converted into normal dirt using a hoe.",
        "tipsmod.tip.enderman_blocks": "Enderman can move blocks like dirt, sand, and TNT!",
        "tipsmod.tip.dragon_blocks": "Iron Bars, End Stone, and Obsidian are immune to damage from the Ender Dragon.",
        "tipsmod.tip.piglin_repellent": "Piglins are scared of soul fire blocks including the Soul Torch and Soul Lantern.",
        "tipsmod.tip.portal_trick": "By using water and lava buckets you can make an easy nether portal.",
        "tipsmod.tip.blaze_fuel": "Blaze rods are good fuel for furnaces.",
        "tipsmod.tip.goat_milk": "Goats can be milked using a bucket.",
        "tipsmod.tip.mean_goats": "Be careful around goats. They like to push players and other animals off cliffs.",
        "tipsmod.tip.dripstone_lava": "Pointed dripstone below lava will slowly drip lava particles. This can be used to fill a cauldron.",
        "tipsmod.tip.bucket_friends": "Fish and Axolotls can be safely picked up using buckets.",
        "tipsmod.tip.bucket_rename": "Renaming a bucket with a mob inside will rename that mob as well.",
        "tipsmod.tip.axolotl_food": "Axolotls like to eat tropical fish.",
        "tipsmod.tip.wax_copper": "Honeycombs can be used to wax copper blocks. This prevents them from oxidizing.",
        "tipsmod.tip.freezing_leather": "Leather armor can protect against freezing damage.",
        "tipsmod.tip.azalea_caves": "Azalea trees grow above the lush cave biomes.",
        "tipsmod.tip.end_dimension": "You cannot leave the end dimension without defeating the ender dragon.. or dying.",
        "tipsmod.tip.hitting_obsidian": "It takes roughly 4 minutes to break an obsidian block by hand.",
        "tipsmod.tip.sitting_pets": "Sitting pets will remain seated when sinking in water until they drown or you right-click them.",
        "tipsmod.tip.snow_golem_trail": "You can harvest infinite snowballs from a snow golem's trail.",
        "tipsmod.tip.mushroom_placement": "Mushrooms can only be placed on blocks where there's no direct sunlight.",
        "tipsmod.tip.mushroom_biome_spawns": "Hostile mobs cannot spawn in a mushroom biome.",
        "tipsmod.tip.shear_mooshroom": "You can shear a mooshroom to turn it into a normal cow.",
        "tipsmod.tip.peaceful_tnt": "TNT cannot damage players in peaceful mode.",
        "tipsmod.tip.weather_sleep": "Sleeping will clear up the sky and stop storm or rain.",
        "tipsmod.tip.dragon_egg": "The dragon egg is the only egg in Minecraft that doesn't spawn an entity.",
        "tipsmod.tip.joke.button": "Despite the name, you don't have to sit on Buttons for them to work.",
        "tipsmod.tip.joke.combat": "Zombies dislike it when you stab them with a sword.",
        "tipsmod.tip.joke.swim": "If you stay under water too long you may drown.",
        "tipsmod.tip.joke.hop": "Despite the name, Hoppers aren't related to Rabbits.",
        "tipsmod.tip.joke.lava": "Like any items, buckets will burn in lava, but not when it is IN the bucket.",
        "tipsmod.tip.joke.stairs": "Placing stairs upside down does not allow you to walk on ceilings.",
        "tipsmod.tip.joke.skulls": "Being ill tempered, Wither Skeletons lose their head easily.",
        "tipsmod.tip.joke.creeper": "Don't play AC/DC near Creepers, they may become Thunderstruck.",
        "tipsmod.tip.joke.shears": "Running with Shears is safer in Minecraft.",
        "tipsmod.tip.joke.provoke": "Dragons are dangerous when provoked.",
        "gui.tips.list.title": "Tips List",
        "gui.tips.list.search": "Search",
        "gui.tips.list.show_disabled": "Show Disabled",
        "gui.tips.list.entry.tip_id": "Tip ID: %s",
        "gui.tips.list.entry.added_by": "Added by: %s",
        "gui.tips.list.entry.cycle_time": "Cycle Time: %s",
        "gui.tips.list.entry.copied": "Copied!",
        "gui.tips.list.entry.click_to_copy": "Click to copy ID",
        "gui.tips.list.entry.disabled": "Disabled by config!",
        "gui.tips.list.config": "Config"
    })
    if (Platform.isLoaded('aether')) {
        event.add('aether', 'gui.aether.pro_tip', 'Aether Tip')
    }
})

ClientEvents.highPriorityAssets(event => {
    /**
     * @summary Finality tip factory
     * @param {ResourceLocation_} fileName The JSON file name
     * @param {string} tipText The tip text itself
     */
    function finTip(fileName, tipText) {
        event.add(`kubejs:tips/tip_${fileName}`, {
            "title": {
                "text": "Finality Tip",
                "bold": true,
                "color": "light_purple"
            },
            "tip": {
                "text": tipText
            }
        })
    }
    /**
     * @summary The not so serious Finality tip factory
     * @param {ResourceLocation_} fileName The JSON file name
     * @param {string} tipText The tip text itself
     */
    function finJokeTip(fileName, tipText) {
        event.add(`kubejs:tips/joke_tips/${fileName}`, {
            "title": {
                "text": "Finality Tip",
                "bold": true,
                "color": "red"
            },
            "tip": { "text": tipText }
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
                "text": "Create Tip",
                "bold": true,
                "color": "gold"
            },
            "tip": { "text": tipText }
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
                "text": "<rainb>Create Tip</rainb>",
                "bold": true,
                "color": "gold"
            },
            "tip": { "text": tipText }
        })
    }
    finTip('coal_renewal', 'Coal can be renewed from compacting kelp blocks when given sufficient heat.')
    finTip('diamond_renewal', 'Diamonds can be renewed from compacting coal when given sufficient heat.')
    finTip('difficulty', 'If you did not heed my warning, expect to die many times over if you are not careful.')
    finTip('deepslate_shards', 'Cobbled Deepslate can now be used to make Deepslate Shards which can be haunted to produce Echo Shards.')
    finTip('diorite_andesite', 'Combining Cobblestone and Diorite is an easy way to automate Andesite production.')
    finTip('dragon_breath', 'You can now extract Dragon Breath an unlimited amount of from the Dragon Egg by combining it with a bottle in the crafting grid.')
    finTip('fd_rotten_flesh_use', 'Rotten Flesh can be used to make Organic Compost which trns into Rich Soil.')
    finTip('rotten_flesh_haunting', 'Rotten Flesh can now be haunted and turned into Phantom Membrane.')
    finTip('flax', 'Start a Flax plant farm as early as possible. It will help in the long term with making Windmill Sails.')
    finTip('gateway_pearls', '<rainb>Gateway Pearls</rainb> are a fast way of obtaining a lot of loot from a specific mob. Just be prepared for combat.')
    finTip('experience_levels', 'While you may receive large amounts of experience from quests, you are not expected to keep all of it.')
    finTip('compact_completion', "It is unlikely that you can complete this modpack in an area of 1-4 chunks. Be prepared to use a Create train network.")
    finTip('compacting_sponges', "Put a Wet Sponge in a Basin with a Mechanical Press to press out the water.")
    finTip('crawling', "Press X to crawl to get into tight spaces or in one block gaps.")
    finTip('quests', "Don't forget to open your Quest Book! It can be accessed form the top left corner of your screen when you have your inventory open.")
    finTip('real_camera', 'Real Camera can be toggled by pressing [F6].')
    finTip('tooltips', 'Always read tooltips! I am not responsible for any damages that may occur from failing to follow instructions.')
    finTip('lapis_from_witches', 'Witches now drop Lapis Lazuli in addition to previous item drops.')
    finTip('zinc_from_creepers', 'Creepers now drop Zinc Nuggets in addition to previous item drops.')
    /*
    Create Tips
    */
    createTip('basin_spouts', 'Did you know Basins automatically open a spout to an adjacent Mechanical Belt, Funnel, Item Drain, Depot and Chute?')
    createTip('belt_shortening', 'Wrenches can shorten already placed Mechanical Belts! Simply right click on one of the ends of the belt. DO NOT PRESS SHIFT while doing this!')
    createTip('copper_drowned', 'Drowned are a source of renewable copper.')
    createTip('fast_gear_ratio', 'To speed up RPM, connect a large Cogwheel to a small cogwheel and make sure the rotational power is being delivered through the large cogwheel.')
    createTip('gravel_washing', 'Gravel can be washed to get Iron Nuggets.')
    createTip('slow_gear_ratio', 'To slow down RPM, connect a small cogwheel to a large cogwheel and make sure the rotational power is being delivered through the smaller cogwheel.')
    createTip('netherite_diving_gear', "Create's Netherite diving set allows you to swim in lava, literally. Did I mention you can see clearer in lava with the helmet as well?")
    createTip('red_sand_washing', 'Washing Red Sand yields more gold than washing Soul Sand.')
    createTip('sand_haunting', 'Sand can be haunted into Soul Sand which can be washed for useful materials.')
    createTip('symmetry_wand_building', 'The Wand of Symmetry is helpful in building your structures symmetrically and will usually mirror blocks placed exactly. There are some exceptions, however.')
    createTip('symmetry_wand_excavation', 'The Wand of Symmetry can be used to quickly excavate an area with the Octagonal setting. Just keep in mind that 8 blocks will be broken at the same time, so your tool durability will be used up quicker.')
    createTip('nothing_is_worthless', 'What was once worthless is now valuable. From Cobblestone you can get Gravel. From Gravel you can get Iron Nuggets.')
    // create wrench tips 101
    createTip('wrench_1', "Wrenches can instantly pick up Create's blocks, simply Shift + R-click with it in your main hand. Stop wasting your pickaxe or axe durability!")
    createTip('wrench_2', "Create's Wrench can instantly pick up Hoppers.")
    createTip('wrench_3', "The axis that Wrenches rotate Create's blocks are based on which block face you are looking at.")
    finTip('create_wrench_4', "In this modpack, a lot more blocks can be picked up with Create's Wrench.")
    createTip('potato_cannon_high_damage', 'Golden Carrots and Blaze Cakes deal the highest amount of damage when used as ammo for the Potato Cannon.')
    createTip('windmill_radial_farm', 'A Windmill Bearing is an easy way to make a radial farm. Superglue is not needed if you are using Linear and Radial Chassis blocks, simply right click with a Slime Ball.')
    specialCreateTip('ponder', '<shake>Hold [w] to Ponder. PLEASE.</shake>')
    specialCreateTip('use_wrench_not_pickaxe', 'Remember to use your Wrench instead of your pickaxe when picking up most Create blocks!')
    // thank you for bringing this up firekylea1205
    createTip('mixer_minimum_rpm', 'Did you know the absolute minimum required RPM for Mechanical Mixers is actually 30 RPM? 32 RPM is more commonly known, however.')
    // create addons
    if (Platform.isLoaded('create_enchantment_indsutry')) {
        finTip('store_experience', 'Experience can be extracted using Disenchanters and then pumped into Fluid Tanks.')
    }
    if (Platform.isLoaded('apotheosis')) {
        finTip('spawners', 'Spawners now drop Structure Void which can be used to recraft them. Use the Capturing enchantment to acquire Spawn Eggs.')
    }
    if (Platform.isLoaded('armorstandshiftswap')) {
        finTip('armor_stand_swap', "[Shift] + R-click on Armor Stands to put your entire armor set at once with the addition of Armor Stand Shift Swap.")
    }
    if (Platform.isLoaded('autumnity')) {
        finJokeTip('turkey_head', 'Careful not to get a turkey dropped on your head!')
    }
    if (Platform.isLoaded('backpacked')) {
        finTip('backpacked', "It is recommended to make a backpack. 6 Leather, 2 String and 1 Iron Ingot is all you need.")
    }
    if (Platform.isLoaded('betterchunkloading')) {
        finTip('predictive_chunk_loading', 'This is more of a fun fact, but the modpack uses predictive chunk loading from Better Chunk Loading. Sorry if chunks are a bit weird on occasion.')
    }
    if (Platform.isLoaded('bhc')) {
        finTip('bhc_wither_bones', 'Bones can be haunted into Wither Bones.')
    }
    if (Platform.isLoaded('better_climbing')) {
        finTip('better_climbing', "Look up to climb faster and look down to climb down faster. You also gain momentum in either direction.")
    }
    if (Platform.isLoaded('blockrunner')) {
        finTip('blockrunner', "If a block has a <rainb>Speed Modifier</rainb> in their tooltip, they allow you to move faster on them.")
    }
    if (Platform.isLoaded('carryon')) {
        finTip('carryon_lootr_chests', "You can pick up Lootr chests by Shift + Right clicking on them when near enough. Useful for moving them out of the way without breaking them!")
        finTip('carryon_spawners', "You can pick up Spawners by Shift + Right clicking on them when near enough.")
    }
    if (Platform.isLoaded('enigmaticlegacy')) {
        finTip('seven_curses_slime', 'Wearing the Ring of the Seven Curses can yield extra rewards such as Slime Balls from Zombies, at the cost of your <shake>sanity</shake>. So choose wisely!')
    }
    if (Platform.isLoaded('healingcampfire')) {
        finTip('campfire_regen', "Campfires now regenerate health when you are nearby.")
    }
    if (Platform.isLoaded('lilwings')) {
        finTip('lil_wings_butterflies', 'Butterflies around the world can assist you greatly when housed in a jar, though some are best kept fluttering freely.')
        finTip('lil_wings_catcher', 'A certain butterfly that hangs around villages can help accelerate crop growth.')
    }
    if (Platform.isLoaded('portablehole')) {
        finTip('portable_hole', 'Strongholds now contain a very special portable item that lets you break reality and make holes in walls.')
    }
    if (Platform.isLoaded('tinyskeletons')) {
        finTip('tiny_wither_skeletons', 'You can give a baby Wither Skeleton a Wither Rose in exchange for a Wither Skeleton Skull if you find that they are too cute to be killed.')
    }
    if (Platform.isLoaded('torchmaster')) {
        finTip('torchmaster_megatorch', 'Megatorches from the Torchmaster mod prevent hostile mob spawning in a cube radius of 64 blocks.')
    }
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
    if (Platform.isLoaded('roughlyenoughitems')
        && Platform.isLoaded('roughlyenoughresources')
        && Platform.isLoaded('roughlyenoughprofessions')
    ) {
        reiTips('search_bar', "While in your inventory screen, press <rainb>Ctrl + F</rainb> to quickly access REI's search bar.")
        reiTips('recipes_shortcut', "Hovering over an item and pressing R will show all recipe methods on how to get that item.")
        reiTips('usage_shortcut', "Hovering over an item and pressing U will show all recipe uses for that item.")
        reiTips('recipe_saving', "You can click and drag recipe windows to bookmark them on the top left corner for easier viewing. None of that back and forth between the crafting grid and forgetting the recipe then having to check the recipe again.")
        reiTips('drag_n_drop', "A <wiggle><wave>lot</wave></wiggle> of things can be dragged and drop to the bookmarks area.")
        reiTips('customization', "REI is highly customizable! Feel free to experiment.")
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
    if (Platform.isLoaded('jei')
        && Platform.isLoaded('jeresources')
        && Platform.isLoaded('justenoughprofessions')
    ) {
        jeiTips('search_bar', "While in your inventory screen, press <rainb>Ctrl + F</rainb> to quickly access JEI's search bar.")
        jeiTips('recipes_shortcut', "Hovering over an item and pressing R will show all recipe methods on how to get that item.")
        jeiTips('usage_shortcut', "Hovering over an item and pressing U will show all recipe uses for that item.")
    }
    let baseTipKeys = [
        'undead_damage',
        'poison_immune',
        'witch_conversion',
        'four_eggs',
        'nether_lava',
        'west',
        // 'swamp_slime', lang key mismatch
        'deflect_ghast_fireballs',
        'shulker_armor',
        'arthropods',
        'fossils',
        'crouch_blocks',
        'smoke_bees',
        'lava_fuel',
        'wooden_tool_fuel',
        'scrap_nuggets',
        'piglin_gold',
        'dog_health',
        'dog_rotten_flesh',
        'lure_animals',
        'cooked_drops',
        'nether_sponge',
        'boat_passenger',
        'shulker_golem',
        'note_block_instrument',
        'zombie_armor',
        'undead_helmet',
        'iron_golem_heal',
        'turtle_shell',
        'animal_growing',
        'blaze_snowball',
        'biome_bonemeal',
        'biome_fishing',
        'fishing_resources',
        'boat_jump',
        'creeper_cat',
        'water_grass',
        'gravity_torch',
        'string_wool',
        'barrel',
        'job_site_dimension',
        'villager_sweat',
        'wandering_invis',
        'baby_panda_slimeball',
        'fortress_triangulation',
        'creeper_drops_disc',
        'mooshroom_lightning',
        'bed_explode',
        'fall_damage_blocks',
        'bed_respawn',
        'ore_tiers',
        'sponge_bucket',
        'coarse_to_dirt',
        'enderman_blocks',
        'dragon_blocks',
        'piglin_repellent',
        'portal_trick',
        'blaze_fuel',
        'goat_milk',
        'mean_goats',
        'dripstone_lava',
        'bucket_friends',
        'bucket_rename',
        'axolotl_food',
        'wax_copper',
        'freezing_leather',
        'azalea_caves',
        'end_dimension',
        'hitting_obsidian',
        'sitting_pets',
        'snow_golem_trail',
        'mushroom_placement',
        'mushroom_biome_spawns',
        'shear_mooshroom',
        'peaceful_tnt',
        'weather_sleep',
        'dragon_egg'
    ]
    for (let i = 0; i < baseTipKeys.length; i++) {
        event.add(`tipsmod:tips/${baseTipKeys[i]}`, {
            "title": {
                "text": "Tip",
                "bold": true,
                "italic": false,
                "underlined": false,
                "color": "yellow"
            },
            "tip": {
                "translate": `tipsmod.tip.${baseTipKeys[i]}`
            }
        })
    }
    event.add('tipsmod:tips/swamp_slimes', {
        "title": {
            "text": "Tip",
            "bold": true,
            "italic": false,
            "underlined": false,
            "color": "yellow"
        },
        "tip": { "translate": "tipsmod.tip.swamp_slime" }
    })
    let jokeTipKeys = [
        'button',
        'combat',
        'creeper',
        'hop',
        'lava',
        'provoke',
        'shears',
        'skulls',
        'stairs',
        'swim'
    ]
    jokeTipKeys.forEach(key => {
        event.add(`tipsmod:tips/absolem_joke_tips/${key}`, {
            "title": {
                "text": "Tip",
                "bold": true,
                "italic": false,
                "underlined": false,
                "color": "red"
            },
            "tip": {
                "translate": `tipsmod.tip.joke.${key}`
            }
        })
    })
    if (Platform.isLoaded('aether')) {
        let aetherTipKeys = [
            'aerogel_explosion_resistance',
            'aether_day_length',
            'altar_repairing',
            'ambrosium_shard_fuel',
            'blue_aerclouds',
            'champs',
            'check_surroundings',
            'close_door',
            'cold_parachute_crafting',
            'creepers',
            'dart_shooter_crafting',
            'darts_no_gravity',
            'difficulty',
            'dig_straight_down',
            'do_things',
            'drops',
            'dungeon_rewards',
            'dungeon_tiers',
            'enchant_blue_disk',
            'enchanted_gravitite_crafting',
            'enchanted_gravitite_floating',
            'expectations',
            'glowstone_portal_forming',
            'golden_apples',
            'golden_oak_amber',
            'golden_parachute_durability',
            'gravitite_armour_ability',
            'gravitite_ore_enchanting',
            'gravitite_tool_ability',
            'harvest_aechor_poison',
            'holystone_tool_ability',
            'icestone_freezing_blocks',
            'mimic_chest',
            'mining',
            'moa_egg_incubation',
            'moa_nature_staff',
            'parachute_activation',
            'phoenix_armor_submerging',
            'phyg_saddle',
            'portal_misclick',
            'quicksoil_sliding',
            'raw_meat',
            'remedy_bucket_enchanting',
            'respect',
            'risk_taking',
            'security',
            'sheepuff_puff',
            'shelter',
            'skyroot_tool_ability',
            'slimes',
            'spare_stack',
            'the_game',
            'victory_medal_drop',
            'watch_your_step',
            'white_aerclouds',
            'zanite_tool_ability',
            'zephyr_shooting'
        ]
        for (let i = 0; i < aetherTipKeys.length; i++) {
            event.add(`aether:tips/${aetherTipKeys[i]}`, {
                "tip": {
                    "translate": `aether.pro_tips.line.aether.${aetherTipKeys[i]}`
                },
                "title": {
                    "bold": true,
                    "color": "aqua",
                    "translate": "gui.aether.pro_tip",
                    "underlined": false
                }
            })
        }
    }
})