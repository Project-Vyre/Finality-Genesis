// requires: roughlyenoughitems
// requires: roughlyenoughresources
// requires: roughlyenoughprofessions

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

function groupModTags(modName, event, exclude) { // function written by mercenaryarek from the KubeJS Discord
    const modIngredient = Ingredient.of(`@${modName}`)
    modIngredient.stacks.toList().stream()
        .flatMap(stack => stack.tags)
        .distinct() // Exclude duplicate tag entries
        .filter(tag => tag.toString().indexOf(modName) !== -1)
        .forEach(tag => {
            const path = new String(tag.toString().split(`${modName}:`)[1].split(']')[0])
            // Human-readable title case, e.g white_wool -> White Wool
            const name = path.replace(/^(\w)/, c => c.toUpperCase())
                .replace(/_(\w)/g, (_, c) => " " + c.toUpperCase()).toString()
            if (!exclude)
                event.groupItemsByTag(`kubejs:rei_groups/${modName}/${path}`, name, `${modName}:${path}`)
            else {
                let items = Ingredient.of(`#${modName}:${path}`).itemIds // function correction made by p3lim from the KubeJS Discord
                    .filter(item => Item.of(item).getMod() == `${modName}`)
                event.groupItems(`kubejs:rei_groups/${modName}/${path}`, name, items)
            }
        })
}

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
    event.addItem(['farmersdelight:wild_cabbages', 'farmersdelight:cabbage_seeds'], 'Acquisition', [
        'Can be found on beaches.',
        'It looks like a large bush with small yellow flowers on top.'
    ])
    event.addItem(['farmersdelight:wild_beetroots', 'minecraft:beetroot_seeds'], 'Acquisition', [
        'Can be found on beaches.',
        'It is a type of beet with larger leaves.'
    ])
    event.addItem(['farmersdelight:wild_potatoes', 'minecraft:potato'], 'Acquisition', [
        'Can be found in biomes with cold climates. This means that the biome must have a temperature between 0.0 and 0.3.',
        'Similar in appearance to normal Potato patches, but has large flowers.'
    ])
    event.addItem(['farmersdelight:wild_onions', 'farmersdelight:onion'], 'Acquisition', [
        'Can be found in biomes with temperate climates. This means that the biome must have a temperature of 0.3 and 1.0.',
        'It looks like a thick cluster of Allium flowers with an onion bulb under them.'
    ])
    event.addItem(['farmersdelight:wild_carrots', 'minecraft:carrot'], 'Acquisition', [
        'Can be found in biomes with temperate climates. This means that the biome must have a temperature of 0.3 and 1.0.',
        'Looks like a flowering weed with white flowers and has an orange base poking out slightly from the dirt.'
    ])
    event.addItem(['farmersdelight:wild_tomatoes', 'farmersdelight:tomato_seeds'], 'Acquisition', [
        'Can be found in biomes with arid climates. This means that the biome must have a temperature above 1.0.',
        'Looks like a cluster of vines covered in tiny tomatoes.'
    ])
    event.addItem(['farmersdelight:wild_rice', 'farmersdelight:rice_panicle'], 'Acquisition', [
        'Can be found in swamps and jungles in shallow areas of water.',
        'It has yellow grains on the ends of its stalks and is usually two blocks tall.'
    ])
    event.addItem('obscure_api:astral_dust', 'Acquisition', ['Used in making a special chestpiece. Can only be found in Frozen Chests.'])
})

REIEvents.groupEntries(event => {
    event.groupSameItem('minecraft:rei_groups/all_regular_potions', 'All Regular Potions', 'minecraft:potion')
    event.groupSameItem('minecraft:rei_groups/all_splash_potions', 'All Splash Potions', 'minecraft:splash_potion')
    event.groupSameItem('minecraft:rei_groups/all_lingering_potions', 'All Lingering Potions', 'minecraft:lingering_potion')
    event.groupSameItem('minecraft:rei_groups/all_tipped_arrows', 'All Tipped Arrows', 'minecraft:tipped_arrow')
    event.groupSameItem('minecraft:rei_groups/all_enchantment_books', 'All Enchantment Books', 'minecraft:enchanted_book')
    event.groupItems('minecraft:rei_groups/minecraft_signs', 'Minecraft Signs', [
        'minecraft:oak_sign',
        'minecraft:spruce_sign',
        'minecraft:birch_sign',
        'minecraft:jungle_sign',
        'minecraft:acacia_sign',
        'minecraft:dark_oak_sign',
        'minecraft:mangrove_sign',
        'minecraft:crimson_sign',
        'minecraft:warped_sign'
    ])
    event.groupItems('minecraft:rei_groups/minecraft_logs', 'Minecraft Logs', [
        'minecraft:oak_log',
        'minecraft:spruce_log',
        'minecraft:birch_log',
        'minecraft:jungle_log',
        'minecraft:acacia_log',
        'minecraft:dark_oak_log',
        'minecraft:mangrove_log',
        'minecraft:crimson_stem',
        'minecraft:warped_stem'
    ])
    event.groupItems('minecraft:rei_groups/minecraft_woods', 'Minecraft Bark Wood Blocks', [
        'minecraft:oak_wood',
        'minecraft:spruce_wood',
        'minecraft:birch_wood',
        'minecraft:jungle_wood',
        'minecraft:acacia_wood',
        'minecraft:dark_oak_wood',
        'minecraft:mangrove_wood',
        'minecraft:crimson_hyphae',
        'minecraft:warped_hyphae'
    ])
    event.groupItems('minecraft:rei_groups/minecraft_stripped_logs', 'Minecraft Stripped Logs', [
        'minecraft:stripped_oak_log',
        'minecraft:stripped_spruce_log',
        'minecraft:stripped_birch_log',
        'minecraft:stripped_jungle_log',
        'minecraft:stripped_acacia_log',
        'minecraft:stripped_dark_oak_log',
        'minecraft:stripped_mangrove_log',
        'minecraft:stripped_crimson_stem',
        'minecraft:stripped_warped_stem'
    ])
    event.groupItems('minecraft:rei_groups/minecraft_stripped_woods', 'Minecraft Stripped Woods', [
        'minecraft:stripped_oak_wood',
        'minecraft:stripped_spruce_wood',
        'minecraft:stripped_birch_wood',
        'minecraft:stripped_jungle_wood',
        'minecraft:stripped_acacia_wood',
        'minecraft:stripped_dark_oak_wood',
        'minecraft:stripped_mangrove_wood',
        'minecraft:stripped_crimson_hyphae',
        'minecraft:stripped_warped_hyphae'
    ])
    event.groupItems('minecraft:rei_groups/minecraft_dyes', 'Minecraft Dyes', [
        'minecraft:black_dye',
        'minecraft:blue_dye',
        'minecraft:brown_dye',
        'minecraft:cyan_dye',
        'minecraft:gray_dye',
        'minecraft:green_dye',
        'minecraft:light_blue_dye',
        'minecraft:light_gray_dye',
        'minecraft:lime_dye',
        'minecraft:magenta_dye',
        'minecraft:orange_dye',
        'minecraft:pink_dye',
        'minecraft:purple_dye',
        'minecraft:red_dye',
        'minecraft:white_dye',
        'minecraft:yellow_dye'
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
    event.groupItemsByTag('minecraft:rei_groups/banners', 'Minecraft Banners', 'minecraft:banners')
    event.groupItems('minecraft:rei_groups/infested_blocks', 'Minecraft Infested Blocks', /^$minecraft.*[_:\/]infested(?![a-zA-Z0-9]).*/)
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
    event.groupItemsByTag('create:rei_groups/toolboxes', 'Create Toolboxes', 'create:toolboxes')
    event.groupItemsByTag('create:rei_groups/seats', 'Create Seats', 'create:seats')
    event.groupItemsByTag('farmersdelight:rei_groups/canvas_signs', 'Canvas Signs', 'farmersdelight:canvas_signs')
    event.groupItemsByTag('supplementaries:rei_groups/hanging_signs', 'Hanging Signs', 'supplementaries:hanging_signs')
    event.groupItemsByTag('supplementaries:rei_groups/sign_posts', 'Sign Posts', 'supplementaries:sign_posts')
    event.groupItemsByTag('kubejs:rei_groups/all_normal_signs', 'All Normal Signs', 'minecraft:signs')
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
    event.groupSameItem('enderchests:rei_groups/shetiphian_enderchests', 'All Ender Chests', 'enderchests:ender_chest')
    event.groupSameItem('enderchests:rei_groups/shetiphian_enderchests_pouches', 'All Ender Pouches', 'enderchests:ender_pouch')
    event.groupSameItem('endertanks:rei_groups/shetiphian_endertanks', 'All Ender Tanks', 'endertanks:ender_tank')
    event.groupSameItem('endertanks:rei_groups/shetiphian_endertanks_buckets', 'All Ender Buckets', 'endertanks:ender_bucket')
    const REI_GROUPS = {
        'minecraft': 'Minecraft',
        'ad_astra': 'Ad Astra',
        'alexsmobs': "Alex's Mobs",
        'aquamirae': 'Aquamirae',
        'autumnity': 'Autumnity',
        'blue_skies': 'Blue Skies',
        'buzzier_bees': 'Buzzier Bees',
        'cataclysm': 'Cataclysm',
        'cloudstorage': 'Cloud Storage',
        'graveyard': 'Graveyard',
        'irons_spellbooks': "Iron's Spells n' Spellbooks",
        'neapolitan': 'Neapolitan',
        'savage_and_ravage': 'Savage and Ravage',
        'quark': 'Quark',
        'whisperwoods': 'Whisperwoods'
    }
    Object.keys(REI_GROUPS).forEach((mod) => { // /^modid.*[_:\/]spawn(?![a-zA-Z0-9]).*/ regular expression provided by ILIKEPIEFOO2 developer of KubeJS Additions
        if (Platform.isLoaded(mod)) {
            let regex = new RegExp(`^${mod}.*[_:\/]spawn(?![a-zA-Z0-9]).*`);
            event.groupItems(`${mod}:rei_groups/spawn_eggs`, `${REI_GROUPS[mod]} Spawn Eggs`, regex);
        }
    })
    if (Platform.isLoaded('lilwings')) {
        event.groupItems('lilwings:rei_groups/spawn_eggs', "Lil' Wings Spawn Eggs", /^lilwings.*[_:\/]egg(?![a-zA-Z0-9]).*/)
    }
    if (!Platform.isLoaded('ad_astra')) {
        event.groupItems('kubejs:rei_groups/wrenches', 'Wrenches', [
            'create:wrench',
            'supplementaries:wrench',
            'red_power:wrench',
            'red_power:creative_wrench'
        ])
    }
    if (Platform.isLoaded('ad_astra')) {
        event.groupItems('ad_astra:rei_groups/ad_astra_flags', 'All Ad Astra Flags', [/^(ad_astra:).*(_flag)$/])
        event.groupItems('kubejs:rei_groups/wrenches', 'Wrenches', [
            'create:wrench',
            'supplementaries:wrench',
            'red_power:wrench',
            'red_power:creative_wrench',
            'ad_astra:wrench'
        ])
    }
    if (Platform.isLoaded('apotheosis')) {
        event.groupSameItem('apotheosis:rei_groups/gems', 'Apotheosis Gems', 'apotheosis:gem')
        event.groupSameItem('apotheosis:rei_groups/potion_charms', 'Apotheosis Potion Charms', 'apotheosis:potion_charm')
    }
    if (Platform.isLoaded('comforts')) {
        event.groupItemsByTag('comforts:rei_groups/sleeping_bags', 'Comforts Sleeping Bags', 'comforts:sleeping_bags')
        event.groupItemsByTag('comforts:rei_groups/hammocks', 'Comforts Hammocks', 'comforts:hammocks')
    }
    if (Platform.isLoaded('chipped')) {
        groupModTags('chipped', event, true)
    }
    if (Platform.isLoaded('gateways')) {
        event.groupSameItem('gateways:rei_groups/gate_pearls', 'Gate Pearls', 'gateways:gate_pearl')
    }
    if (Platform.isLoaded('grimoireofgaia')) {
        event.groupItems('grimoireofgaia:rei_groups/spawn_eggs', 'Grimoire of Gaia Spawn Eggs', /^grimoireofgaia.*[_:\/]spawn_egg(?![a-zA-Z0-9]).*/)
        event.groupItems('grimoireofgaia:rei_groups/npc_spawn_eggs', 'Grimoire of Gaia NPC Spawn Eggs', [
            'grimoireofgaia:spawn_trader',
            'grimoireofgaia:spawn_creeper_girl',
            'grimoireofgaia:spawn_ender_girl',
            'grimoireofgaia:spawn_slime_girl'
        ])
    }
    if (Platform.isLoaded('handcrafted')) {
        event.groupItemsByTag('handcrafted:rei_groups/cushions', 'Handcrafted Cushions', 'handcrafted:cushions')
        event.groupItemsByTag('handcrafted:rei_groups/sheets', 'Handcrafted Sheets', 'handcrafted:sheets')
    }
    if (Platform.isLoaded('irons_spellbooks')) {
        event.groupSameItem('irons_spellbooks:rei_groups/all_scrolls', "All Iron's Spell Scrolls", 'irons_spellbooks:scroll')
    }
    if (Platform.isLoaded('quark')) {
        event.groupItemsByTag('quark:rei_groups/quark_runes', 'Quark Runes', 'quark:runes')
        event.groupSameItem('quark:rei_groups/seed_pouches', 'Quark Seed Pouches', 'quark:seed_pouch')
        event.groupSameItem('quark:rei_groups/ancient_tomes', 'Quark Ancient Tomes', 'quark:ancient_tome')
    }
    if (Platform.isLoaded('v_slab_compat') && Platform.isLoaded('quark')) {
        event.groupItemsByTag('v_slab_compat:rei_groups/vertical_slabs', 'Vertical Slab Compat', 'quark:vertical_slabs')
    }
})