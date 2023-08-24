// requires: roughlyenoughitems
// requires: roughlyenoughresources
// requires: roughlyenoughprofessions

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
    MYSHIDE.forEach(name => {
        event.hide(`mysticalagriculture:${name}_essence`)
        event.hide(`mysticalagriculture:${name}_seeds`)
    })
    CAdditionsItems.forEach(name => {
        event.hide(`createaddition:${name}`)
    })
    event.hide('mysticalagriculture:harvester')
})

REIEvents.hide('fluid', event => {
    MYS_FLUID_HIDE.forEach(name => {
        event.hide(`mysticalagradditions:${name}`)
    })
    event.hide('createaddition:bioethanol')
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
    // caupona calcite columns
    event.groupItems('caupona:rei_groups/fluted_calcite_column', 'Fluted Calcite Column Components', [
        'caupona:calcite_acanthine_column_capital',
        'caupona:calcite_ionic_column_capital',
        'caupona:calcite_column_fluted_shaft',
        'caupona:calcite_column_fluted_plinth'
    ])
    event.groupItems('caupona:rei_grups/smooth_calcite_column', 'Calcite Column Components', [
        'caupona:calcite_tuscan_column_capital',
        'caupona:calcite_column_shaft',
        'caupona:calcite_column_plinth'
    ])
    // caupona stone columns
    event.groupItems('caupona:rei_groups/fluted_stone_column', 'Fluted Stone Column Components', [
        'caupona:stone_acanthine_column_capital',
        'caupona:stone_ionic_column_capital',
        'caupona:stone_column_fluted_shaft',
        'caupona:stone_column_fluted_plinth'
    ])
    event.groupItems('caupona:rei_groups/smooth_stone_column', 'Smooth Stone Column Components', [
        'caupona:stone_tuscan_column_capital',
        'caupona:stone_column_shaft',
        'caupona:stone_column_plinth'
    ])
    // caupona felsic tuff column
    event.groupItems('caupona:rei_groups/fluted_felsic_tuff_column', 'Fluted Felsic Tuff Column Components', [
        'caupona:felsic_tuff_acanthine_column_capital',
        'caupona:felsic_tuff_ionic_column_capital',
        'caupona:felsic_tuff_column_fluted_shaft',
        'caupona:felsic_tuff_column_fluted_plinth'
    ])
    event.groupItems('caupona:rei_groups/smooth_felsic_tuff_column', 'Felsic Tuff Column Components', [
        'caupona:felsic_tuff_tuscan_column_capital',
        'caupona:felsic_tuff_column_shaft',
        'caupona:felsic_tuff_column_plinth'
    ])
    // caupona quartz column
    event.groupItems('caupona:rei_groups/fluted_quartz_column', 'Fluted Quartz Column Components', [
        'caupona:quartz_acanthine_column_capital',
        'caupona:quartz_ionic_column_capital',
        'caupona:quartz_column_fluted_shaft',
        'caupona:quartz_column_fluted_plinth'
    ])
    event.groupItems('caupona:rei_groups/smooth_quartz_column', 'Smooth Quartz Column', [
        'caupona:quartz_tuscan_column_capital',
        'caupona:quartz_column_shaft',
        'caupona:quartz_column_plinth'
    ])
    event.groupItemsByTag('caupona:rei_groups/aspics', 'Aspics', 'caupona:aspics')
    event.groupItemsByTag('caupona:rei_groups/stews', 'Stews', 'caupona:stews')
    // caupona frying utilities
    event.groupItems('capona:rei_groups/frying_utilities', 'Frying Utilities', [
        'caupona:stone_griddle',
        'caupona:copper_frying_pan',
        'caupona:iron_frying_pan',
    ])
    // caupona mud and drystone palette utilities (not same format)
    event.groupItems('capona:rei_groups/mud_kitchen_palette', 'Mud and Drystone Utilities', [
        'caupona:mud_kitchen_stove',
        'caupona:mud_counter',
        'caupona:mud_counter_with_dolium',
    ])
    event.groupItems('caupona:rei_groups/mud_chimney_components', 'Mud and Drystone Utilities', [
        'caupona:mud_chimney_flue',
        'caupona:mud_chimney_pot'
    ])
    // caupona brick palette utilities
    event.groupItems('capona:rei_groups/brick_kitchen_palette', 'Brick Kitchen Utilities', [
        'caupona:brick_kitchen_stove',
        'caupona:brick_counter',
        'caupona:brick_counter_with_dolium',
    ])
    event.groupItems('caupona:rei_groups/brick_chimney_components', 'Brick Chimney Utilities', [
        'caupona:brick_chimney_flue',
        'caupona:brick_chimney_pot'
    ])
    event.groupItems('caupona:rei_groups/brick_bath_components', 'Brick Bath Components', [
        'caupona:brick_caliduct',
        'caupona:brick_hypocaust_firebox'
    ])
    // caupona opus incertum palette utilities
    event.groupItems('capona:rei_groups/opus_incertum_kitchen_palette', 'Opus Incertum Kitchen Utilities', [
        'caupona:opus_incertum_kitchen_stove',
        'caupona:opus_incertum_counter',
        'caupona:opus_incertum_counter_with_dolium',
    ])
    event.groupItems('caupona:rei_groups/opus_incertum_chimney_components', 'Opus Incertum Chimney Utilities', [
        'caupona:opus_incertum_chimney_flue',
        'caupona:opus_incertum_chimney_pot'
    ])
    event.groupItems('caupona:rei_groups/opus_incertum_bath_components', 'Opus Incertum Bath Components', [
        'caupona:opus_incertum_caliduct',
        'caupona:opus_incertum_hypocaust_firebox'
    ])
    // caupona opus latericium palette utilities
    event.groupItems('capona:rei_groups/opus_latericium_kitchen_palette', 'Opus Latericium Kitchen Utilities', [
        'caupona:opus_latericium_kitchen_stove',
        'caupona:opus_latericium_counter',
        'caupona:opus_latericium_counter_with_dolium',
    ])
    event.groupItems('caupona:rei_groups/opus_latericium_chimney_components', 'Opus Latericium Chimney Utilities', [
        'caupona:opus_latericium_chimney_flue',
        'caupona:opus_latericium_chimney_pot'
    ])
    event.groupItems('caupona:rei_groups/opus_latericium_bath_components', 'Opus Latericium Bath Components', [
        'caupona:opus_latericium_caliduct',
        'caupona:opus_latericium_hypocaust_firebox'
    ])
    // caupona stone brick palette utilities
    event.groupItems('capona:rei_groups/stone_brick_kitchen_palette', 'Stone Brick Kitchen Utilities', [
        'caupona:stone_brick_kitchen_stove',
        'caupona:stone_brick_counter',
        'caupona:stone_brick_counter_with_dolium',
    ])
    event.groupItems('caupona:rei_groups/stone_brick_chimney_components', 'Stone Brick Chimney Utilities', [
        'caupona:stone_brick_chimney_flue',
        'caupona:stone_brick_chimney_pot'
    ])
    event.groupItems('caupona:rei_groups/stone_brick_bath_components', 'Stone Brick Bath Components', [
        'caupona:stone_brick_caliduct',
        'caupona:stone_brick_hypocaust_firebox'
    ])
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
    event.groupItemsByTag('handcrafted:rei_groups/cushions', 'Handcrafted Cushions', 'handcrafted:cushions')
    event.groupItemsByTag('handcrafted:rei_groups/sheets', 'Handcrafted Sheets', 'handcrafted:sheets')
    event.groupItemsByTag('quark:rei_groups/quark_runes', 'Quark Runes', 'quark:runes')
    event.groupItemsIf('kubejs:rei_groups/concrete_singularities', 'Concrete Singularities', Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id.includes('concrete_')))
    event.groupItemsIf('kubejs:rei_groups/minecraft_valued_singularities', 'Minecraft Valued Singularities', [
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:lapis_lazuli')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:redstone')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:diamond')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:iron')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:gold')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:emerald')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:copper')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:amethyst')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:coal')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:quartz')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:netherite'))
    ])
    event.groupItemsIf('kubejs:rei_groups/minecraft_dimensional_singularities', 'Minecraft Dimensional Singularities', [
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:soul_sand')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:soul_soil')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:end_crystal'))
    ])
    event.groupItemsIf('kubejs:rei_groups/minecraft_natural_singularities', 'Minecraft Natural Singularities', [
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:coarse_dirt')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:cobblestone')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:sand')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:red_sand')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:honey')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:blue_ice')),
    ])
    event.groupItemsIf('kubejs:rei_groups/minecraft_miscellaneous_singularities', 'Minecraft Miscellaneous Singularities', [
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:gunpowder')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:ender_pearl')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:sea_lantern')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:tinted_glass')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:glowstone')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:sea_lantern'))
    ])
    event.groupItemsIf('kubejs:rei_groups/create_singularities', 'Create Singularities', [
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:precision_mechanism')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:framed_glass')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:electron_tube')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:rose_quartz')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:chocolate')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:andesite_alloy')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:zinc')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:brass')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:sturdy_sheet')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:train_track')),
        Ingredient.customNBT('extendedcrafting:singularity', nbt => nbt?.Id == ('extendedcrafting:builders_tea'))
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