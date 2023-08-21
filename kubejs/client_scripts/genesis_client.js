// priority: 0
// requires: create
// requires: mysticalagriculture
// requires: lodestone
// requires: roughlyenoughitems
// requires: universalbonemeal

console.info('Genesis client scripts loaded. You will see this line every time client resources reload.')

let REI_CREATE_ENCASED = [
    'andesite',
    'brass'
]
let REI_CREATE_ENCHIDE = [
    'shaft',
    'cogwheel',
    'large_cogwheel'
]
let REI_CREATE_COMPAT_ORES = [
    'osmium',
    'platinum',
    'silver',
    'tin',
    'lead',
    'quicksilver',
    'aluminum',
    'uranium',
    'nickel'
]
let COLORID = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let COLOR = {
    black: 'Black',
    blue: 'Blue',
    brown: 'Brown',
    cyan: 'Cyan',
    gray: 'Gray',
    green: 'Green',
    light_blue: 'Light Blue',
    light_gray: 'Light Gray',
    lime: 'Lime',
    magenta: 'Magenta',
    orange: 'Orange',
    pink: 'Pink',
    purple: 'Purple',
    red: 'Red',
    white: 'White',
    yellow: 'Yellow'
}
let MYSHIDE = [
    'rubber',
    'silicon',
    'sulfer',
    'aluminum',
    'saltpeter',
    'apatite',
    'marble',
    'menril',
    'tin',
    'bronze',
    'silver',
    'graphite',
    'blizz',
    'blitz',
    'basalz',
    'slimesteel',
    'pig_iron',
    'manasteel',
    'steeleaf',
    'sapphire',
    'ruby',
    'uranium',
    'tungsten',
    'titanium',
    'steel',
    'platinum',
    'nickel',
    'mithril',
    'iridium',
    'invar',
    'electrum',
    'constantan',
    'chrome',
    'certus_quartz',
    'sky_stone',
    'aquamarine',
    'ironwood',
    'quartz_enriched_iron',
    'signalum',
    'lumium',
    'hop_graphite',
    'cobalt',
    'rose_gold',
    'elementium',
    'osmium',
    'fluorite',
    'refined_glowstone',
    'refined_obsidian',
    'knightmetal',
    'fiery_ingot',
    'starmetal',
    'compressed_iron',
    'fluix',
    'energized_steel',
    'blazing_crystal',
    'enderium',
    'manyullyn',
    'queens_slime',
    'hepatizon',
    'terrasteel',
    'rock_crystal',
    'draconium',
    'yellorium',
    'cyanite',
    'niotic_crystal',
    'spirited_crystal',
    'uraninite',
    'gaia_spirit',
    'awakened_draconium',
    'neutronium',
    'nitro_crystal',
    'sulfur',
    'lead'
]
let MYS_FLUID_HIDE = [
    'molten_inferium',
    'molten_prudentium',
    'molten_tertium',
    'molten_imperium',
    'molten_supremium',
    'molten_soulium'
]
let CAdditionsItems = [
    'straw',
    'bioethanol_bucket',
    'gold_rod',
    'brass_rod',
    'electrum_rod',
    'electrum_ingot',
    'electrum_sheet',
    'electrum_nugget',
    'electrum_wire',
    'electrum_spool',
    'digital_adapter'
]

REIEvents.hide('item', event => {
    event.hide('kubejs:denied_result')
    event.hide('kubejs:removed_item')
    event.hide(/^(kubejs:incomplete_).*(_singularity)$/)
    event.hide(/^(kubejs:incomplete_).*(_mechanism)$/)
    for (let i = 0; i < REI_CREATE_ENCASED.length; i++) {
        for (let j = 0; j < REI_CREATE_ENCHIDE.length; j++) {
            event.hide(`/^(create:${REI_CREATE_ENCASED[i]}_encased).*(_${REI_CREATE_ENCHIDE[j]})$/`)
        }
    }
    event.hide('create:copper_backtank_placeable')
    event.hide('create:netherite_backtank_placeable')
    event.hide('create:incomplete_track')
    event.hide('create:incomplete_precision_mechanism')
    event.hide('create:unprocessed_obsidian_sheet')
    event.hide('create:schematic')
    REI_CREATE_COMPAT_ORES.forEach(ore => {
        event.hide(`create:crushed_raw_${ore}`)
    })
    MYSHIDE.forEach(name => {
        event.hide(`mysticalagriculture:${name}_essence`)
        event.hide(`mysticalagriculture:${name}_seeds`)
    })
    CAdditionsItems.forEach(name => {
        event.hide(`createaddition:${name}`)
    })
    event.hide('mysticalagriculture:harvester')
    event.hide('createcafe:oreo_incomplete')
    event.hide(/^(create_central_kitchen:incomplete_).*(burger)$/)
    event.hide(/^(create_central_kitchen:incomplete_).*(hamburger)$/)
    event.hide(/^(create_central_kitchen:incomplete_).*(sandwich)$/)
    event.hide(/^(create_central_kitchen:incomplete_).*(pie)$/)
    event.hide(/^(create_central_kitchen:incomplete_).*(wrap)$/)
    event.hide(/^(create_central_kitchen:incomplete_neapolitan_ice_cream).*$/)
    event.hide('create_central_kitchen:incomplete_sweet_berry_cheesecake')
    // developer tools hidden
    event.hide(/^(citadel:).*$/)
    event.hide('decorative_blocks:blockstate_copy_item')
})

REIEvents.hide('fluid', event => {
    MYS_FLUID_HIDE.forEach(name => {
        event.hide(`mysticalagradditions:${name}`)
    })
    event.hide('createaddition:bioethanol')
    event.hide('biomesoplenty:blood')
})

REIEvents.information(event => {
    event.addItem('minecraft:campfire', 'New Functionality', ['Campfires now regenerate your health. <wave>Cozy!</wave>'])
    event.addItem('minecraft:soul_campfire', 'New Functionality', ['Campfires now regenerate your health. <wave>Cozy!</wave>'])
    event.addItem('tempad:tempad', 'Usage', ['Allows you to teleport to points you placed throughout the world but has a 3 minute cooldown.'])
    event.addItem('tempad:he_who_remains_tempad', 'Acquisition Method', ['Can only be acquired from the End, somewhere.'])
    event.addItem('mysticalagriculture:fertilized_essence', 'Acquisition', [
        'Can only be acquired from Mystical Agriculture crops upon harvest.',
        'Not a guaranteed drop!'
    ])
    event.addItem('cataclysm:burning_ashes', 'Usage', ['Used to summon Ignis.'])
    event.addItem('minecraft:nether_star', 'Additional Usage', [
        'If you find a deactivated and mechanical version of the Wither, give it a Nether Star.',
        'Also extensively used in certain recipes.'
    ])
    event.addItem('cataclysm:abyssal_sacrifice', 'Usage', [
        'Required to summon the Leviathan.',
        'Use on the Altar of Abyss located in the Sunken City.'
    ])
    event.addItem('cataclysm:abyssal_egg', 'Information', [
        'Does not require anything special to hatch, simply place it down.',
        'You will have to wait a while for the egg to hatch.'
    ])
    event.addItem('minecraft:ender_eye', 'Acquisition', [
        'There is a certain eye that can only be acquired from enchanting.',
        'It is very rare, however.'
    ])
    event.addItem('endrem:black_eye', 'Acquisition', ['Can be found in lost treasure chests.'])
    event.addItem('endrem:cold_eye', 'Acquisition', ['Found in igloos.'])
    event.addItem('endrem:corrupted_eye', 'Acquisition', ['Found in Pillager Outposts.'])
    event.addItem('endrem:lost_eye', 'Acquisition', ['Usually found in Mineshafts.'])
    event.addItem('endrem:nether_eye', 'Acquisition', ['Found in Nether Fortresses.'])
    event.addItem('endrem:old_eye', 'Acquisition', ['Found in Desert Pyramids.'])
    event.addItem('endrem:rogue_eye', 'Acquisition', ['Usually found in Jungle Temples.'])
    event.addItem('endrem:cursed_eye', 'Acquisition', ['Usually found in Bastions.'])
    event.addItem('endrem:evil_eye', 'Acquisition', ['Usually acquired from a Master Cleric.'])
    event.addItem('endrem:guardian_eye', 'Acquisition', ['Usually acquired from slaying Elder Guardians.'])
    event.addItem('endrem:magical_eye', 'Acquisition', ['Acquired from slaying Evokers.'])
    event.addItem('endrem:wither_eye', 'Acquisition', ['Obviously only drops from the Wither.'])
    event.addItem('endrem:witch_eye', 'Acquisition', ['Requires a Witch Pupil to craft.'])
    event.addItem('endrem:undead_eye', 'Acquisition', ['Requires a skeleton horse to be slain in order to acquire the Undead Soul.'])
    event.addItem('endrem:undead_soul', 'Acquisition', ['Acquired from slaying a skeleton horse.'])
    event.addItem('endrem:exotic_eye', 'Acquisition', ['Created by combining multiple exotic ingredients using a Crafting Core.'])
    event.addItem('obscure_api:astral_dust', 'Acquisition', ['Used in making a special chestpiece. Can only be found in Frozen Chests.'])
})

REIEvents.groupEntries(event => {
    event.groupItems('kubejs:rei_groups/wrenches', 'Wrenches', [
        'create:wrench',
        'supplementaries:wrench',
        'red_power:wrench',
        'red_power:creative_wrench',
        'ad_astra:wrench'
    ])
    event.groupItems('minecraft:rei_groups/minecraft_wool', 'Minecraft Wool', /^(minecraft:).*(wool)$/)
    event.groupItems('minecraft:rei_groups/minecraft_carpets', 'Minecraft Carpets', /^(minecraft:).*(carpet)$/)
    event.groupItems('minecraft:rei_groups/minecraft_concrete', 'Minecraft Concrete Blocks', /^(minecraft:).*(concrete)$/)
    event.groupItems('minecraft:rei_groups/minecraft_concrete_powder', 'Minecraft Concrete Powders', /^(minecraft:).*(concrete_powder)$/)
    event.groupItems('minecraft:rei_groups/minecraft_terracotta', 'Minecraft Terracotta', [
        'minecraft:terracotta',
        'minecraft:black_terracotta',
        'minecraft:blue_terracotta',
        'minecraft:brown_terracotta',
        'minecraft:cyan_terracotta',
        'minecraft:gray_terracotta',
        'minecraft:green_terracotta',
        'minecraft:light_blue_terracotta',
        'minecraft:light_gray_terracotta',
        'minecraft:lime_terracotta',
        'minecraft:magenta_terracotta',
        'minecraft:orange_terracotta',
        'minecraft:pink_terracotta',
        'minecraft:purple_terracotta',
        'minecraft:red_terracotta',
        'minecraft:white_terracotta',
        'minecraft:yellow_terracotta'
    ])
    event.groupItems('minecraft:rei_groups/minecraft_glazed_terracotta', 'Minecraft Glazed Terracotta', [
        'minecraft:black_glazed_terracotta',
        'minecraft:blue_glazed_terracotta',
        'minecraft:brown_glazed_terracotta',
        'minecraft:cyan_glazed_terracotta',
        'minecraft:gray_glazed_terracotta',
        'minecraft:green_glazed_terracotta',
        'minecraft:light_blue_glazed_terracotta',
        'minecraft:light_gray_glazed_terracotta',
        'minecraft:lime_glazed_terracotta',
        'minecraft:magenta_glazed_terracotta',
        'minecraft:orange_glazed_terracotta',
        'minecraft:pink_glazed_terracotta',
        'minecraft:purple_glazed_terracotta',
        'minecraft:red_glazed_terracotta',
        'minecraft:white_glazed_terracotta',
        'minecraft:yellow_glazed_terracotta'
    ])
    event.groupItems('minecraft:rei_groups/minecraft_stained_glass', 'Minecraft Stained Glass', /^(minecraft:).*(stained_glass)$/)
    event.groupItems('minecraft:rei_groups/minecraft_stained_glass_panes', 'Minecraft Stained Glass Panes', [
        'minecraft:black_stained_glass_pane',
        'minecraft:blue_stained_glass_pane',
        'minecraft:brown_stained_glass_pane',
        'minecraft:cyan_stained_glass_pane',
        'minecraft:gray_stained_glass_pane',
        'minecraft:green_stained_glass_pane',
        'minecraft:light_blue_stained_glass_pane',
        'minecraft:light_gray_stained_glass_pane',
        'minecraft:lime_stained_glass_pane',
        'minecraft:magenta_stained_glass_pane',
        'minecraft:orange_stained_glass_pane',
        'minecraft:pink_stained_glass_pane',
        'minecraft:purple_stained_glass_pane',
        'minecraft:red_stained_glass_pane',
        'minecraft:white_stained_glass_pane',
        'minecraft:yellow_stained_glass_pane'
    ])
    event.groupItemsByTag('minecraft:rei_groups/shulker_boxes', 'Shulker Boxes', 'minecraft:shulker_boxes')
    event.groupItems('create:rei_groups/colored_valve_handles', 'Colored Valve Handles', [
        'create:black_valve_handle',
        'create:blue_valve_handle',
        'create:brown_valve_handle',
        'create:cyan_valve_handle',
        'create:gray_valve_handle',
        'create:green_valve_handle',
        'create:light_blue_valve_handle',
        'create:light_gray_valve_handle',
        'create:lime_valve_handle',
        'create:magenta_valve_handle',
        'create:orange_valve_handle',
        'create:pink_valve_handle',
        'create:purple_valve_handle',
        'create:red_valve_handle',
        'create:white_valve_handle',
        'create:yellow_valve_handle'
    ])
    event.groupItems('createcafe:rei_groups/createcafe_all_items', 'Create Cafe Items', [/^(createcafe:).*$/])
    event.groupFluids('createcafe:rei_groups/createcafe_other_fluids', 'Create Cafe Basic Fluids', [
        'createcafe:melted_sugar',
        'createcafe:filling',
        'createcafe:coffee'
    ])
    event.groupFluids('createcafe:rei_groups/createcafe_all_tea', 'Create Cafe Tea', [
        'createcafe:oreo_tea',
        'createcafe:mango_tea',
        'createcafe:lime_tea',
        'createcafe:lychee_tea',
        'createcafe:kiwi_tea',
        'createcafe:mana_tea',
        'createcafe:blood_tea',
        'createcafe:lemon_tea',
        'createcafe:watermelon_tea',
        'createcafe:strawberry_tea',
        'createcafe:blueberry_tea',
        'createcafe:vanilla_tea',
        'createcafe:orange_tea',
        'createcafe:peach_tea',
        'createcafe:pineapple_tea',
        'createcafe:banana_tea',
        'createcafe:yucca_tea',
        'createcafe:cherry_tea',
        'createcafe:plum_tea',
        'createcafe:aloe_tea',
        'createcafe:apple_tea',
        'createcafe:blackberry_tea',
        'createcafe:pumpkin_tea',
        'createcafe:jackfruit_tea',
        'createcafe:coconut_tea',
        'createcafe:dragonfruit_tea',
        'createcafe:apricot_tea',
        'createcafe:avocado_tea',
        'createcafe:sweetberry_tea',
        'createcafe:durian_tea',
        'createcafe:fig_tea',
        'createcafe:tamarind_tea',
        'createcafe:gooseberry_tea',
        'createcafe:grape_tea',
        'createcafe:grapefruit_tea',
        'createcafe:papaya_tea',
        'createcafe:guava_tea',
        'createcafe:passionfruit_tea',
        'createcafe:pomegranate_tea',
        'createcafe:persimmon_tea',
        'createcafe:raspberry_tea',
        'createcafe:starfruit_tea',
        'createcafe:lavender_tea',
        'createcafe:pomelo_tea',
        'createcafe:mandarin_tea',
        'createcafe:citron_tea',
        'createcafe:redlove_tea',
        'createcafe:barberry_tea',
    ])
    event.groupFluids('createcafe:rei_groups/createcafe_all_fluids', 'Create Cafe Syrup', [
        'createcafe:strawberry_syrup',
        'createcafe:vanilla_syrup',
        'createcafe:raspberry_syrup',
        'createcafe:mint_syrup',
        'createcafe:caramel_syrup',
        'createcafe:coconut_syrup',
        'createcafe:banana_syrup',
    ])
    event.groupItems('sliceanddice:rei_groups/create_sliceanddice_all', 'Create Slice and Dice', [/^(sliceanddice:).*$/])
    event.groupItems('createdeco:rei_groups/create_deco_all', 'Create Deco', [/^(createdeco:).*$/])
    event.groupItems('chalk:rei_groups/chalk_all', 'All Chalks', [/^(chalk:).*(_chalk)$/])
    event.groupItems('ad_astra:rei_groups/ad_astra_flags', 'All Ad Astra Flags', [/^(ad_astra:).*(_flag)$/])
    Object.keys(COLOR).forEach(color => {
        event.groupItemsByTag(`chipped:rei_groups/${color}_wool`, `Chipped ${COLOR[color]} Wool`, `chipped:${color}_wool`)
        event.groupItemsByTag(`chipped:rei_groups/${color}_carpets`, `Chipped ${COLOR[color]} Carpets`, `chipped:${color}_carpet`)
        event.groupItemsByTag(`chipped:rei_groups/${color}_terracotta`, `Chipped ${COLOR[color]} Terracotta`, `chipped:${color}_terracotta`)
        event.groupItemsByTag(`chipped:rei_groups/${color}_glazed_terracotta`, `Chipped ${COLOR[color]} Glazed Terracotta`, `chipped:${color}_glazed_terracotta`)
        event.groupItemsByTag(`chipped:rei_groups/${color}_concrete`, `Chipped ${COLOR[color]} Concrete`, `chipped:${color}_concrete`)
        event.groupItemsByTag(`chipped:rei_groups/${color}_stained_glass`, `Chipped ${COLOR[color]} Stained Glass`, `chipped:${color}_stained_glass`)
        event.groupItemsByTag(`chipped:rei_groups/${color}_stained_glass_panes`, `Chipped ${COLOR[color]} Stained Glass Panes`, `chipped:${color}_stained_glass_pane`)
    })
    event.groupItemsByTag('comforts:rei_groups/sleeping_bags', 'Comforts Sleeping Bags', 'comforts:sleeping_bags')
    event.groupItemsByTag('comforts:rei_groups/hammocks', 'Comforts Hammocks', 'comforts:hammocks')
    event.groupItemsByTag('quark:rei_groups/quark_runes', 'Quark Runes', 'quark:runes')
    event.groupItemsIf('kubejs:rei_groups/concrete_singularities', 'Concrete Singularities', Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('concrete_')))
    event.groupItemsIf('kubejs:rei_groups/minecraft_valued_singularities', 'Minecraft Valued Singularities', [
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('lapis_lazuli')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('redstone')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('diamond')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('iron')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('gold')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('emerald')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('copper')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('amethyst')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('coal')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('quartz')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('netherite'))
    ])
    event.groupItemsIf('kubejs:rei_groups/minecraft_dimensional_singularities', 'Minecraft Dimensional Singularities', [
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('soul_sand')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('soul_soil')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('end_crystal'))
    ])
    event.groupItemsIf('kubejs:rei_groups/minecraft_natural_singularities', 'Minecraft Natural Singularities', [
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('coarse_dirt')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('cobblestone')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('sand')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('red_sand')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('honey')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('blue_ice')),
    ])
    event.groupItemsIf('kubejs:rei_groups/minecraft_miscellaneous_singularities', 'Minecraft Miscellaneous Singularities', [
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('gunpowder')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('ender_pearl')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('sea_lantern')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('tinted_glass')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('glowstone')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('sea_lantern'))
    ])
    event.groupItemsIf('kubejs:rei_groups/create_singularities', 'Create Singularities', [
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('precision_mechanism')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('framed_glass')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('electron_tube')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('rose_quartz')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('chocolate')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('andesite_alloy')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('zinc')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('brass')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('sturdy_sheet')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('train_track')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('builders_tea'))
    ])
    event.groupSameItem('minecraft:rei_groups/all_regular_potions', 'All Regular Potions', 'minecraft:potion')
    event.groupSameItem('minecraft:rei_groups/all_splash_potions', 'All Splash Potions', 'minecraft:splash_potion')
    event.groupSameItem('minecraft:rei_groups/all_lingering_potions', 'All Lingering Potions', 'minecraft:lingering_potion')
    event.groupSameItem('minecraft:rei_groups/all_tipped_arrows', 'All Tipped Arrows', 'minecraft:tipped_arrow')
    event.groupSameItem('minecraft:rei_groups/all_enchantment_books', 'All Enchantment Books', 'minecraft:enchanted_book')
    event.groupSameItem('irons_spellbooks:rei_groups/all_scrolls', "All Iron's Spell Scrolls", 'irons_spellbooks:scroll')
    event.groupSameItem('apotheosis:rei_groups/gems', 'Apotheosis Gems', 'apotheosis:gem')
    event.groupSameItem('apotheosis:rei_groups/potion_charms', 'Apotheosis Potion Charms', 'apotheosis:potion_charm')
    event.groupSameItem('enderchests:rei_groups/shetiphian_enderchests', 'All Ender Chests', 'enderchests:ender_chest')
    event.groupSameItem('enderchests:rei_groups/shetiphian_enderchests_pouches', 'All Ender Pouches', 'enderchests:ender_pouch')
    event.groupSameItem('endertanks:rei_groups/shetiphian_endertanks', 'All Ender Tanks', 'endertanks:ender_tank')
    event.groupSameItem('endertanks:rei_groups/shetiphian_endertanks_buckets', 'All Ender Buckets', 'endertanks:ender_bucket')
    event.groupSameItem('quark:rei_groups/seed_pouches', 'Quark Seed Pouches', 'quark:seed_pouch')
    event.groupSameItem('quark:rei_groups/ancient_tomes', 'Quark Ancient Tomes', 'quark:ancient_tome')
})

ItemEvents.tooltip(event => {
    event.add('minecraft:campfire', Text.gold('Campfires can now regenerate your health. <wave>Cozy!</wave>'))
    event.add('minecraft:soul_campfire', Text.aqua('Soul Campfires can now regenerate your health. <wave>Cozy!</wave>'))
    event.add('minecraft:bone_meal', Text.gray('Can now universally bone meal a lot of things!'))
    event.add('kubejs:denied_result', Text.red('<shake>This item now has a different method or methods of crafting.</shake>'))
    event.add('kubejs:removed_item', Text.red('<shake>This item has been removed.</shake>'))
    event.add('minecraft:fletching_table', Text.gold('Now has a purpose and can actually make arrows!'))
    // Fix provided by Reveter#1305 on latvian.dev
    event.addAdvanced('patchouli:guide_book', ((item, advanced, text) => {
        if (!item.hasNBT()) return;
        if (item.nbt['patchouli:book'] == 'patchouli:tome_of_finality') {
            text.add(Component.lightPurple("Hi! Please use this book, it's important modpack documentation."))
            text.add(Component.lightPurple("The book also serves as progression tracking in the absence of FTB Quests."))
            text.add(Component.lightPurple("Entries in the Genesis category are spoiler free and are targeted at new players!"))
            text.add(Component.lightPurple("- Overseers of Finality"))
        }
    }))
    event.addAdvanced('minecraft:wooden_pickaxe', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see more info.').gold()])
        } else {
            text.add(1, [
                Text.of('You can now ').white(),
                Text.of('repair ').green().bold(true),
                Text.of('tools with the material they are made of in your ').white(),
                Text.of('crafting grid').gold(),
                Text.of('.').white()
            ])
            text.add(2, [
                Text.of('If you are wondering.. yes, this also applies to ').white(),
                Text.of('Diamond ').aqua(),
                Text.of('and ').white(),
                Text.of('Netherite ').darkGray(),
                Text.of('and other tools as well.').white()
            ])
            text.add(3, [
                'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
            ])
        }
    })
    event.addAdvanced('minecraft:stone_pickaxe', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see more info.').gold()])
        } else {
            text.add(1, [
                Text.of('You can now ').white(),
                Text.of('repair ').green().bold(true),
                Text.of('tools with the material they are made of in your ').white(),
                Text.of('crafting grid').gold(),
                Text.of('.').white()
            ])
            text.add(2, [
                Text.of('If you are wondering.. yes, this also applies to ').white(),
                Text.of('Diamond ').aqua(),
                Text.of('and ').white(),
                Text.of('Netherite ').darkGray(),
                Text.of('and other tools as well.').white()
            ])
            text.add(3, [
                'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
            ])
        }
    })
    event.addAdvanced('minecraft:iron_pickaxe', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see more info.').gold()])
        } else {
            text.add(1, [
                Text.of('You can now ').white(),
                Text.of('repair ').green().bold(true),
                Text.of('tools with the material they are made of in your ').white(),
                Text.of('crafting grid').gold(),
                Text.of('.').white()
            ])
            text.add(2, [
                Text.of('If you are wondering.. yes, this also applies to ').white(),
                Text.of('Diamond ').aqua(),
                Text.of('and ').white(),
                Text.of('Netherite ').darkGray(),
                Text.of('and other tools as well.').white()
            ])
            text.add(3, [
                'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
            ])
        }
    })
    event.addAdvanced('minecraft:beacon', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see more info.').gold()])
        } else {
            text.add(1, Text.green('Gives positive effects to players in a certain radius.').bold(true))
            text.add(2, Text.red('Requires a base built out of precious metals or gems to function!'))
            text.add(3, [Text.white('Iron, '), Text.gold('Gold '), Text.aqua('Diamond, '), Text.green('Emerald '), Text.white('or even '), Text.gray('Netherite '), Text.white('are valid materials.')])
        }
    })
    event.addAdvanced('extendedcrafting:handheld_table', (item, advanced, text) => {
        text.add(1, Text.gray('You never have to use a Crafting Table block again!'))
        text.add(2, Text.gray('It is literally a hand held Crafting Table, what more can you ask for?'))
    })
    event.addAdvanced('farmersdelight:skillet', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [
                Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('for more info.').gold()
            ])
        } else {
            text.add(1, [
                Text.of('The skillet can be used to cook ').gold(),
                Text.of('over an open flame ').yellow(),
                Text.of('or a ').gold(),
                Text.of('stove').yellow(),
                Text.of('.').gold(),
            ])
            text.add(2, [
                Text.of('It can also be occasionally used as a ').gold(),
                Text.of('weapon ').red(),
                Text.of('should the need ever arise.').gold()
            ])
            text.add(3, [
                Text.of('The alternative use is not recommended for the sake of the ').gold(),
                Text.of('durability ').yellow(),
                Text.of('of your skillet.').gold()
            ])
        }
    })
    event.add('cloudstorage:balloon_bit', Text.gray('With the power of the crafting table, you can make a new balloon from these pieces.'))
    event.addAdvanced('cloudstorage:cloud_chest', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [
                Text.of('Hold ').darkGray(), Text.of('[Shift] ').gray(), Text.of('for more info.').darkGray()
            ])
        } else {
            text.add(1, [
                Text.of('Your very own ').gray(),
                Text.of('private ').aqua(),
                Text.of('cloud chest.').gray()
            ])
            text.add(2, [
                Text.of('Right click with a ').gray(),
                Text.of('normal balloon ').red(),
                Text.of('to set the channel that you want to access from the cloud.').gray()
            ])
            text.add(3, [
                Text.of('To change channels, right click with a ').gray(),
                Text.of('normal balloon ').red(),
                Text.of('in hand to safely remove the already connected balloon without it floating away.').gray()
            ])
            text.add(4, [
                Text.of('To ').gray(),
                Text.of('add ').green(),
                Text.of('more storage simply attach a balloon to a regular chest to send it up to the sky, literally.').gray()
            ])
        }
    })
    event.addAdvanced('cloudstorage:static_cloud_chest', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [
                Text.of('Hold ').darkGray(), Text.of('[Shift] ').gray(), Text.of('for more info.').darkGray()
            ])
        } else {
            text.add(1, [
                Text.of('The ').gray(),
                Text.of('publicly accessible ').yellow(),
                Text.of('cloud chest.').gray()
            ])
            text.add(2, [
                Text.of('Right click with a ').gray(),
                Text.of('static charged ').aqua(),
                Text.of('balloon ').red(),
                Text.of('to set the channel that you want to access from the cloud.').gray()
            ])
            text.add(3, [
                Text.of('Right click with a ').gray(),
                Text.of('normal balloon ').red(),
                Text.of('to charge it with static electricity.').gray()
            ])
            text.add(4, [
                Text.of('To change channels, right click with a ').gray(),
                Text.of('normal balloon ').red(),
                Text.of('in hand to safely remove the already connected balloon without it floating away.').gray()
            ])
            text.add(5, [
                Text.of('To ').gray(),
                Text.of('add ').green(),
                Text.of('more storage attach a ').gray(),
                Text.of('static charged balloon ').aqua(),
                Text.of('to regular chests to send up to the sky, literally.').gray()
            ])
        }
    })
    event.addAdvanced('eccentrictome:tome', (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [
                Text.of('Hold ').darkPurple(),
                Text.of('[Shift] ').lightPurple(),
                Text.of('to see more info.').darkPurple()
            ])
        } else {
            text.add(1, Text.of('<rainb>Condenses many tools and books into one.</rainb>').bold(true))
            text.add(2, Text.white('Elegantly <rainb>presents</rainb> all the tools and ooks stored within it upon right click.'))
            text.add(3, Text.white('Simply punch the air to <rainb>convert</rainb> the Eccentric Tome back to its normal form.'))
            text.add(4, [
                Text.of('Diamond ').aqua(),
                Text.of('and ').white(),
                Text.of('Netherite ').gray(),
                Text.of('pickaxes, axes, shovels, hoes, shears, ').white(),
                Text.of('Wand of Symmetry ').gold(),
                Text.of('and ').white(),
                Text.of('Wrench ').gold(),
                Text.of('from ').white(),
                Text.of('Create ').yellow(),
                Text.of('are all allowed.').white(),
            ])
            text.add(5, ['To remove items from the reality breaking pocket universe within this book, simply crouch and drop with the item you want to remove.'])
            text.add(6, Text.red('<shake>DO NOT USE AS A CRAFTING INGREDIENT OR YOU WILL LOSE ALL STORED ITEMS!</shake>').bold(true))
        }
    })
    event.addAdvanced('tempad:tempad', (item, advanced, text) => {
        text.add(1, [
            Text.of('Has ').darkPurple(),
            Text.of('unlimited uses. ').lightPurple(),
            Text.of('Enjoy!').darkPurple()
        ])
    })
    event.addAdvanced('tempad:he_who_remains_tempad', (item, advanced, text) => {
        text.add(1, [
            Text.of('The property of ').darkPurple(),
            Text.of('"He Who Remains"').lightPurple()
        ])
    })
    if (Platform.isLoaded('quark')) {
        event.add('quark:abacus', Text.gray('A tool used to measure distance. Right click on a block face to use.'))
    }
})

const $ScreenshakeHandler = Java.loadClass('team.lodestar.lodestone.handlers.ScreenshakeHandler')
const $ScreenshakeInstance = Java.loadClass('team.lodestar.lodestone.systems.screenshake.ScreenshakeInstance')
const $Easing = Java.loadClass('team.lodestar.lodestone.systems.easing.Easing')

NetworkEvents.dataReceived('screenshake', event => {
    const { i1, i2, i3, duration } = event.data
    $ScreenshakeHandler.addScreenshake($ScreenshakeInstance(duration).setIntensity(i1, i2, i3).setEasing($Easing.SINE_IN, $Easing.QUAD_IN))
})