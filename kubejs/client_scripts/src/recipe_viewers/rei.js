// priority: 3
// requires: roughlyenoughitems
// requires: roughlyenoughprofessions
// requires: create
// ignored: false

/**
 * @file Responsible for handling REI grouping, hiding, adding, etc.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author Hunter19823 <https://github.com/Hunter19823> For helping with REI regex and grouping
 * mercenaryarek For the groupChippedTags function
 * p3lim function correction
 */

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
  'brass_rod',
  'digital_adapter'
]
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

/**
 * @author mercenaryarek <mercenaryarek> function written by mercenaryarek from the KubeJS Discord
 * @param {string} modName 
 * @param {*} event 
 * @param {boolean} exclude 
 */
function groupChippedTags(modName, event, exclude) {
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
        event.groupItems(`chipped:rei_groups/${modName}/${path}`, name, items)
      }
    })
}

REIEvents.hide('item', event => {
  event.hide([
    /^create.*[_:\/]andesite_encased(?![a-zA-Z0-9]).*/,
    /^create.*[_:\/]brass_encased(?![a-zA-Z0-9]).*/,
    'create:copper_backtank_placeable',
    'create:netherite_backtank_placeable',
    'create:schematic'
  ])
  REI_CREATE_COMPAT_ORES.forEach(ore => {
    event.hide(`create:crushed_raw_${ore}`)
  })

  if (Platform.isLoaded('ars_nouveau')) {
    event.hide('ars_nouveau:magic_fire')
    event.hide('ars_nouveau:debug')
  }
  if (Platform.isLoaded('create_central_kitchen')
    && Platform.isLoaded('createcafe')
  ) {
    event.hide([
      /^create_central_kitchen.*[_:\/]incomplete(?![a-zA-Z0-9]).*/,
      /^createcafe.*[_:\/]incomplete(?![a-zA-Z0-9]).*/
    ])
  }

  if (Platform.isLoaded('abnormals_delight')) {
    event.hide('abnormals_delight:laurel_cabinet')
  }

  if (Platform.isLoaded('alexsmobs')) {
    event.hide(/^alexsmobs.*[_:\/]shard(?![a-zA-Z0-9]).*/)
    event.hide(/^alexsmobs.*[_:\/]inventory(?![a-zA-Z0-9]).*/)
    event.hide(/^alexsmobs.*[_:\/]empty(?![a-zA-Z0-9]).*/)
    event.hide(/^alexsmobs.*[_:\/]hand(?![a-zA-Z0-9]).*/)
  }

  if (Platform.isLoaded('biomesoplenty')) {
    event.hide('biomesoplenty:blood')
  }

  if (Platform.isLoaded('cataclysm')) {
    event.hide('cataclysm:void_shard')
  }

  if (Platform.isLoaded('domesticationinnovation')) {
    event.hide([
      'domesticationinnovation:deflection_shield',
      'domesticationinnovation:magnet'
    ])
  }
  if (Platform.isLoaded('incubation')) {
    event.hide('incubation:fried_egg')
  }

  if (Platform.isLoaded('irons_spellbooks')) {
    event.hide([
      'irons_spellbooks:legendary_spell_book',
      'irons_spellbooks:wimpy_spell_book'
    ])
  }

  if (Platform.isLoaded('gag')) {
    event.hide([
      'gag:hearthstone',
      'gag:energized_hearthstone'
    ])
  }

  if (Platform.isLoaded('graveyard')) {
    event.hide(/^graveyard.*[_:\/]lid(?![a-zA-Z0-9]).*/)
    event.hide(/^graveyard.*[_:\/]base(?![a-zA-Z0-9]).*/)
  }

  if (Platform.isLoaded('createaddition')) {
    event.hide([
      /^createaddition.*[_:\/]electrum(?![a-zA-Z0-9]).*/,
      'createaddition:diamond_grit',
      'createaddition:diamond_grit_sandpaper'
    ])
    CAdditionsItems.forEach(name => {
      event.hide(`createaddition:${name}`)
    })
  }
  if (Platform.isLoaded('createdeco')) {
    event.hide([
      'createdeco:netherite_sheet',
      'createdeco:zinc_sheet'
    ])
  }

  if (Platform.isLoaded('mysticalagriculture')) {
    MYSHIDE.forEach(name => {
      event.hide(`mysticalagriculture:${name}_essence`)
      event.hide(`mysticalagriculture:${name}_seeds`)
    })
    event.hide([
      'mysticalagriculture:harvester',
      'mysticalagriculture:basic_reprocessor',
      'mysticalagriculture:inferium_reprocessor',
      'mysticalagriculture:prudentium_reprocessor',
      'mysticalagriculture:tertium_reprocessor',
      'mysticalagriculture:imperium_reprocessor',
      'mysticalagriculture:supremium_reprocessor',
      'mysticalagriculture:awakened_supremium_reprocessor'
    ])
  }

  if (Platform.isLoaded('pipez')) {
    event.hide('pipez:wrench')
  }

  if (!Platform.isLoaded('ad_astra')) {
    event.hide([
      'mysticalagriculture:steel_essence',
      'mysticalagriculture:steel_seeds'
    ])
  }

  if (Platform.isLoaded('abnormals_delight')) {
    event.hide('abnormals_delight:laurel_cabinet')
  }

  if (Platform.isLoaded('mysticalagradditions') && !Platform.isLoaded('tinkersconstruct')) {
    event.hide([
      'mysticalagradditions:molten_inferium_bucket',
      'mysticalagradditions:molten_prudentium_bucket',
      'mysticalagradditions:molten_tertium_bucket',
      'mysticalagradditions:molten_imperium_bucket',
      'mysticalagradditions:molten_supremium_bucket',
      'mysticalagradditions:molten_soulium_bucket',
    ])
  }

  if (Platform.isLoaded('mysticalagriculture')
    && Platform.isLoaded('mysticalagradditions')
    && !Platform.isLoaded('avaritia')
  ) {
    event.hide([
      'mysticalagriculture:neutronium_essence',
      'mysticalagriculture:neutronium_seeds',
      'mysticalagradditions:neutronium_crux'
    ])
  }

  if (Platform.isLoaded('mysticalagriculture')
    && Platform.isLoaded('mysticalagradditions')
    && !Platform.isLoaded('botania')
  ) {
    event.hide([
      'mysticalagriculture:gaia_spirit_seeds',
      'mysticalagriculture:gaia_spirit_essence',
      'mysticalagradditions:gaia_spirit_crux'
    ])
  }

  if (Platform.isLoaded('mysticalagriculture')
    && Platform.isLoaded('mysticalagradditions')
    && !Platform.isLoaded('draconicevolution')
  ) {
    event.hide([
      'mysticalagriculture:awakened_draconium_seeds',
      'mysticalagriculture:awakened_draconium_essence',
      'mysticalagradditions:awakened_draconium_crux'
    ])
  }

  if (Platform.isLoaded('mysticalagriculture')
    && Platform.isLoaded('mysticalagradditions')
    && !Platform.isLoaded('powah')
  ) {
    event.hide([
      'mysticalagriculture:nitro_crystal_seeds',
      'mysticalagriculture:nitro_crystal_essence',
      'mysticalagradditions:nitro_crystal_crux'
    ])
  }

  if (Platform.isLoaded('sophisticatedstorage')) {
    event.hide([
      'sophisticatedstorage:smelting_upgrade',
      'sophisticatedstorage:auto_smelting_upgrade',
      'sophisticatedstorage:smoking_upgrade',
      'sophisticatedstorage:auto_smoking_upgrade',
      'sophisticatedstorage:blasting_upgrade',
      'sophisticatedstorage:auto_blasting_upgrade'
    ])
  }

  if (Platform.isLoaded('sophisticatedbackpacks')) {
    event.hide([
      'sophisticatedbackpacks:smelting_upgrade',
      'sophisticatedbackpacks:auto_smelting_upgrade',
      'sophisticatedbackpacks:smoking_upgrade',
      'sophisticatedbackpacks:auto_smoking_upgrade',
      'sophisticatedbackpacks:blasting_upgrade',
      'sophisticatedbackpacks:auto_blasting_upgrade'
    ])
  }

  if (Platform.isLoaded('malum') && Platform.isLoaded('create')) {
    event.hide('malum:copper_nugget')
  }

  if (Platform.isLoaded('headhunter_mod') && Platform.isLoaded('apotheosis')) {
    event.hide([
      'headhunter_mod:vertical_beam_spawn_egg',
      Item.of('minecraft:potion', '{Potion:"headhunter_mod:screenshakepotion"}').strongNBT(),
      Item.of('minecraft:potion', '{Potion:"headhunter_mod:screencolourpotion"}').strongNBT(),
      Item.of('minecraft:potion', '{Potion:"headhunter_mod:fly_potion"}').strongNBT(),
      Item.of('minecraft:splash_potion', '{Potion:"headhunter_mod:screenshakepotion"}').strongNBT(),
      Item.of('minecraft:splash_potion', '{Potion:"headhunter_mod:screencolourpotion"}').strongNBT(),
      Item.of('minecraft:splash_potion', '{Potion:"headhunter_mod:fly_potion"}').strongNBT(),
      Item.of('minecraft:lingering_potion', '{Potion:"headhunter_mod:screenshakepotion"}').strongNBT(),
      Item.of('minecraft:lingering_potion', '{Potion:"headhunter_mod:screencolourpotion"}').strongNBT(),
      Item.of('minecraft:lingering_potion', '{Potion:"headhunter_mod:fly_potion"}').strongNBT(),
      Item.of('minecraft:tipped_arrow', '{Potion:"headhunter_mod:screenshakepotion"}').strongNBT(),
      Item.of('minecraft:tipped_arrow', '{Potion:"headhunter_mod:screencolourpotion"}').strongNBT(),
      Item.of('minecraft:tipped_arrow', '{Potion:"headhunter_mod:fly_potion"}').strongNBT(),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"headhunter_mod:screenshakepotion"}').strongNBT(),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"headhunter_mod:screencolourpotion"}').strongNBT(),
      Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"headhunter_mod:fly_potion"}').strongNBT()
    ])
  }

  // developer tools hidden
  event.hide([
    /^citadel.*[_:\/]item(?![a-zA-Z0-9]).*/,
    /^citadel.*[_:\/]icon(?![a-zA-Z0-9]).*/,
    'citadel:debug',
    'citadel:citadel_book'
  ])
  if (Platform.isLoaded('decorative_blocks')) {
    event.hide('decorative_blocks:blockstate_copy_item')
  }
  if (Platform.isLoaded('sophisticatedstorage')) {
    event.hide([
      'sophisticatedstorage:smelting_upgrade',
      'sophisticatedstorage:advanced_smelting_upgrade',
      'sophisticatedstorage:smoking_upgrade',
      'sophisticatedstorage:advanced_smoking_upgrade',
      'sophisticatedstorage:blasting_upgrade',
      'sophisticatedstorage:advanced_blasting_upgrade'
    ])
  }
})

REIEvents.hide('fluid', event => {
  if (Platform.isLoaded('mysticalagradditions')) {
    MYS_FLUID_HIDE.forEach(name => {
      event.hide(`mysticalagradditions:${name}`)
    })
  }
  if (Platform.isLoaded('decorative_blocks')) {
    event.hide('decorative_blocks:thatch')
  }
})

REIEvents.information(event => {
  event.addItem('minecraft:campfire', 'New Functionality', ['Campfires now regenerate your health. <wave>Cozy!</wave>'])
  event.addItem('minecraft:soul_campfire', 'New Functionality', ['Campfires now regenerate your health. <wave>Cozy!</wave>'])
  event.addItem('minecraft:dragon_egg', 'Uses', ['Can be used to make Dragon Breath.'])
  event.addItem('kubejs:lemon_seed', 'Acquisition', ['Can only be acquired from breaking grass or trading with farmers.'])
  event.addItem('create:refined_radiance', 'Acquisition', [
    'When Chromatic Compound is thrown into a grid of Beacons, it changes form and becomes Refined Radiance.',
    'Take advantage of its floating properties, perhaps you can automate this?'
  ])
  event.addItem('create:shadow_steel', 'Acquisition', [
    'When Chromatic Compound is thrown into the darkness of the Void, it changes form and becomes Shadow Steel.',
    'Take advantage of its floating properties, perhaps you can automate this?'
  ])
  if (Platform.isLoaded('cataclysm')) {
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
  }
  if (Platform.isLoaded('enderchests')) {
    event.addItem('enderchests:ender_bag', 'Usage', [
      'On Sneak + R-Click on an Ender Chest',
      '_Copies_ color channels from the Ender Chest onto the pouch.'
    ])
  }
  if (Platform.isLoaded('endertanks')) {
    event.addItem('endertanks:ender_bucket', 'Usage', [
      'On Sneak + R-Click on an Ender Tank',
      '_Copies_ color channels from the Ender Tank onto the bucket.'
    ])
  }
  if (Platform.isLoaded('endrem') && Platform.isLoaded('summoningrituals') && !Platform.isLoaded('extendedcrafting')) {
    event.addItem(['minecraft:ender_eye', 'endrem:cryptic_eye'], 'Acquisition', [
      'There is a certain cryptic eye that can only be acquired from enchanting this.',
      'It is very rare, however.',
      'If you do happen to be unlucky, you can mix an Ender Eye with 1x Block of Experience, 1x Ender Eye and 250mb of Condensed Universal Entropy.'
    ])
    event.addItem('endrem:black_eye', 'Acquisition', ['Can be found in lost treasure chests.'])
    event.addItem('endrem:corrupted_eye', 'Acquisition', ['Found in Pillager Outposts.'])
    event.addItem('endrem:lost_eye', 'Acquisition', ['Usually found in Mineshafts.'])
    event.addItem('endrem:evil_eye', 'Acquisition', ['Usually acquired from a Master Cleric.'])
    event.addItem('endrem:guardian_eye', 'Acquisition', ['Usually acquired from slaying Guardians.'])
    event.addItem('endrem:wither_eye', 'Acquisition', ['Obviously only drops from the Wither.'])
    event.addItem('endrem:witch_eye', 'Acquisition', ['Requires a Witch Pupil to craft.'])
    event.addItem('endrem:undead_eye', 'Acquisition', ['Requires a skeleton horse to be slain in order to acquire the Undead Soul.'])
    event.addItem('endrem:undead_soul', 'Acquisition', ['Acquired from slaying a skeleton horse.'])
    event.addItem('endrem:witch_pupil', 'Acquisition', ['Drops from Witches.'])
  }
  if (Platform.isLoaded('endrem') && !Platform.isLoaded('summoningrituals') && !Platform.isLoaded('extendedcrafting')) {
    event.addItem(['minecraft:ender_eye', 'endrem:cryptic_eye'], 'Acquisition', [
      'There is a certain cryptic eye that can only be acquired from enchanting this.',
      'It is very rare, however.',
      'If you do happen to be unlucky, you can mix an Ender Eye with 1x Block of Experience, 1x Ender Eye and 250mb of Condensed Universal Entropy.'
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
    event.addItem('endrem:guardian_eye', 'Acquisition', ['Usually acquired from slaying Guardians.'])
    event.addItem('endrem:magical_eye', 'Acquisition', ['Acquired from slaying Evokers.'])
    event.addItem('endrem:wither_eye', 'Acquisition', ['Obviously only drops from the Wither.'])
    event.addItem('endrem:witch_eye', 'Acquisition', ['Requires a Witch Pupil to craft.'])
    event.addItem('endrem:undead_eye', 'Acquisition', ['Requires a skeleton horse to be slain in order to acquire the Undead Soul.'])
    event.addItem('endrem:undead_soul', 'Acquisition', ['Acquired from slaying a skeleton horse.'])
    event.addItem('endrem:exotic_eye', 'Acquisition', ['Created by combining multiple exotic ingredients using a Mechanical Mixer and a Basin.'])
    event.addItem('endrem:witch_pupil', 'Acquisition', ['Drops from Witches.'])
  }
  if (Platform.isLoaded('endrem') && Platform.isLoaded('extendedcrafting')) {
    event.addItem(['minecraft:ender_eye', 'endrem:cryptic_eye'], 'Acquisition', [
      'There is a certain cryptic eye that can only be acquired from enchanting this.',
      'It is very rare, however.',
      'If you do happen to be unlucky, you can mix an Ender Eye with 1x Block of Experience, 1x Ender Eye and 250mb of Condensed Universal Entropy.'
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
  }
  if (Platform.isLoaded('farmersdelight')) {
    event.addItem(['farmersdelight:wild_cabbages',
      'farmersdelight:cabbage_seeds'
    ], 'Acquisition', [
      '[Finality Tip]',
      'Can be found on beaches.',
      'It looks like a large bush with small yellow flowers on top.'
    ])
    event.addItem([
      'farmersdelight:wild_beetroots',
      'minecraft:beetroot_seeds'
    ], 'Acquisition', [
      '[Finality Tip]',
      'Can be found on beaches.',
      'It is a type of beet with larger leaves.'
    ])
    event.addItem([
      'farmersdelight:wild_potatoes',
      'minecraft:potato'
    ], 'Acquisition', [
      '[Finality Tip]',
      'Can be found in biomes with cold climates. This means that the biome must have a temperature between 0.0 and 0.3.',
      'Similar in appearance to normal Potato patches, but has large flowers.'
    ])
    event.addItem([
      'farmersdelight:wild_onions',
      'farmersdelight:onion'
    ], 'Acquisition', [
      '[Finality Tip]',
      'Can be found in biomes with temperate climates. This means that the biome must have a temperature of 0.3 and 1.0.',
      'It looks like a thick cluster of Allium flowers with an onion bulb under them.'
    ])
    event.addItem([
      'farmersdelight:wild_carrots',
      'minecraft:carrot'
    ], 'Acquisition', [
      '[Finality Tip]',
      'Can be found in biomes with temperate climates. This means that the biome must have a temperature of 0.3 and 1.0.',
      'Looks like a flowering weed with white flowers and has an orange base poking out slightly from the dirt.'
    ])
    event.addItem([
      'farmersdelight:wild_tomatoes',
      'farmersdelight:tomato_seeds'
    ], 'Acquisition', [
      '[Finality Tip]',
      'Can be found in biomes with arid climates. This means that the biome must have a temperature above 1.0.',
      'Looks like a cluster of vines covered in tiny tomatoes.'
    ])
    event.addItem([
      'farmersdelight:wild_rice',
      'farmersdelight:rice_panicle'
    ], 'Acquisition', [
      '[Finality Tip]',
      'Can be found in swamps and jungles in shallow areas of water.',
      'It has yellow grains on the ends of its stalks and is usually two blocks tall.'
    ])
  }
  if (Platform.isLoaded('aether')) {
    event.addItem('aether:holystone', 'Renewal', [
      'Can now be renewed using a set up similar to Basalt generation except the following:\n',
      'The Blue Ice is replaced with a Magma block.\n',
      'The Soul Soil is replaced with Quick Soil.'
    ])
    event.addItem([
      'aether:obsidian_helmet',
      'aether:obsidian_chestplate',
      'aether:obsidian_leggings',
      'aether:obsidian_boots',
      'aether:obsidian_gloves'
    ], 'Acquisition', [
      'Can only be acquired by wearing Phoenix Armor, then wading into water to convert it to the respective Obsidian armor piece.',
      'After a spending some time in water, the Phoenix Armor pieces are converted.',
      'In other words, it is made by wearing Phoenix Armor, then quenching it with water.'
    ])
  }
  if (Platform.isLoaded('obscure_api')
    || Platform.isLoaded('aquamirae')
  ) {
    event.addItem('obscure_api:astral_dust', 'Acquisition', ['Used in making a special chestpiece. Can only be found in Frozen Chests.'])
  }
  if (Platform.isLoaded('culturaldelights')) {
    event.addItem('culturaldelights:avocado', 'Acquisition', [
      'Can only be acquired by picking it off right from flowering leaf blocks on avocado trees.'
    ])
  }
  if (Platform.isLoaded('delightful')) {
    event.addItem('delightful:green_tea_leaf', 'Acquisition', [
      'Can only be acquired by chance using a Knife on leaf blocks.'
    ])
  }
  if (Platform.isLoaded('functionalstorage')) {
    event.addItem('functionalstorage:ender_drawer', 'Usage', [
      Component.join([
        Component.of('Ender Drawers are a '),
        Component.of('special ').darkRed().italic(),
        Component.of('case of not explaining things well enough in-game. As a result, this Info page had to be created.\n'),
        Component.of('\n[Linking Process]\n').darkGreen(),
        Component.of('To '),
        Component.of('link ').darkAqua(),
        Component.of('Ender Drawers together, first L-Click an Ender Drawer with the '),
        Component.of('Linking Tool').darkAqua(),
        Component.of('. After you have stored a frequency, '),
        Component.of('Sneak + R-Click ').darkGreen(),
        Component.of('on the other Ender Drawers you want to link it to.\n')
      ]),
      Component.join([
        Component.of('[Unlinking Process]\n').red(),
        Component.of('To change the frequency of an Ender Drawer, '),
        Component.of('all ').darkRed(),
        Component.of('upgrades and items will have to be emptied first. After this is done, break it. '),
        Component.of('Void Upgrades ').darkPurple(),
        Component.of('apply to the Ender Drawer network and are intended to be permanent as per the developer\'s response.')
      ])
    ])
  }
  if (Platform.isLoaded('mysticalagriculture')) {
    event.addItem('mysticalagriculture:fertilized_essence', 'Acquisition', [
      'Can only be acquired from Mystical Agriculture crops upon harvest.',
      'Not a guaranteed drop!'
    ])
    event.addItem('mysticalagriculture:awakened_supremium_essence', 'Acquisition', [
      'Can only be acquired through decompressing Awakened Supremium Blocks.'
    ])
  }
  if (Platform.isLoaded('neapolitan')) {
    event.addItem('neapolitan:adzuki_beans', 'Growth', [
      'Can only be grown in non-tilled soil.',
      'Does not require water!'
    ])
  }
  if (Platform.isLoaded('tempad')) {
    event.addItem('tempad:tempad', 'Usage', ['Allows you to teleport to points you placed throughout the world but has a 3 minute cooldown.'])
    event.addItem('tempad:he_who_remains_tempad', 'Acquisition Method', ['Can only be acquired from the End, somewhere.'])
  }
})

REIEvents.groupEntries(event => {
  event.groupItems('minecraft:rei_groups/stone_ores', 'Stone Ores', [
    'minecraft:coal_ore',
    'minecraft:iron_ore',
    'minecraft:copper_ore',
    'minecraft:gold_ore',
    'minecraft:redstone_ore',
    'minecraft:emerald_ore',
    'minecraft:lapis_ore',
    'minecraft:diamond_ore',
    'create:zinc_ore'
  ])
  event.groupItems('minecraft:rei_groups/deepslate_ores', 'Deepslate Ores', [
    'minecraft:deepslate_coal_ore',
    'minecraft:deepslate_iron_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:deepslate_redstone_ore',
    'minecraft:deepslate_emerald_ore',
    'minecraft:deepslate_lapis_ore',
    'minecraft:deepslate_diamond_ore',
    'create:deepslate_zinc_ore'
  ])
  // Copilot is scary good.
  event.groupItems('minecraft:rei_groups/signs', 'Minecraft Signs', /^minecraft:(?!.*_hanging_sign$)[a-z_]+_sign$/)
  event.groupItems('minecraft:rei_groups/hanging_signs', 'Minecraft Hanging Signs', /^minecraft:.*_hanging_sign$/)
  event.groupItemsByTag('kubejs:rei_groups/all_normal_signs', 'All Normal Signs', 'minecraft:signs')
  event.groupItemsByTag('kubejs:rei_groups/all_hanging_signs', 'All Hanging Signs', 'minecraft:hanging_signs')
  event.groupItems('minecraft:rei_groups/minecraft_logs', 'Minecraft Logs', [
    'minecraft:oak_log',
    'minecraft:spruce_log',
    'minecraft:birch_log',
    'minecraft:jungle_log',
    'minecraft:acacia_log',
    'minecraft:dark_oak_log',
    'minecraft:mangrove_log',
    'minecraft:crimson_stem',
    'minecraft:warped_stem',
    'minecraft:cherry_log'
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
    'minecraft:warped_hyphae',
    'minecraft:cherry_wood'
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
    'minecraft:stripped_warped_stem',
    'minecraft:stripped_cherry_log'
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
    'minecraft:stripped_warped_hyphae',
    'minecraft:stripped_cherry_wood'
  ])
  event.groupItems('minecraft:rei_groups/minecraft_planks', 'Minecraft Planks', /^minecraft:.*planks$/)
  event.groupItems('minecraft:rei_groups/minecraft_wooden_slabs', 'Minecraft Wooden Slabs', [
    'minecraft:oak_slab',
    'minecraft:spruce_slab',
    'minecraft:birch_slab',
    'minecraft:jungle_slab',
    'minecraft:acacia_slab',
    'minecraft:dark_oak_slab',
    'minecraft:mangrove_slab',
    'minecraft:cherry_slab',
    'minecraft:crimson_slab',
    'minecraft:warped_slab'
  ])
  event.groupItems('minecraft:rei_groups/minecraft_fences', 'Minecraft Fences', /^minecraft:.*fence$/)
  event.groupItems('roughlyenoughitems:rei_groups/fences', 'All Fences', /^.*fence$/)
  event.groupItems('minecraft:rei_grups/minecraft_fence_gates', 'Minecraft Fence Gates', /^minecraft:.*fence_gate$/)
  event.groupItems('roughlyenoughitems:rei_groups/fence_gates', 'All Fence Gates', /^.*fence_gate$/)
  event.groupItems('minecraft:rei_groups/minecraft_walls', 'Minecraft Walls', /^minecraft:.*_wall$/)
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
  event.groupItems('minecraft:rei_groups/beds', 'Minecraft Beds', [
    'minecraft:black_bed',
    'minecraft:blue_bed',
    'minecraft:brown_bed',
    'minecraft:cyan_bed',
    'minecraft:gray_bed',
    'minecraft:green_bed',
    'minecraft:light_blue_bed',
    'minecraft:light_gray_bed',
    'minecraft:lime_bed',
    'minecraft:magenta_bed',
    'minecraft:orange_bed',
    'minecraft:pink_bed',
    'minecraft:purple_bed',
    'minecraft:red_bed',
    'minecraft:white_bed',
    'minecraft:yellow_bed'
  ])
  event.groupItemsByTag('minecraft:rei_groups/shulker_boxes', 'Shulker Boxes', 'minecraft:shulker_boxes')
  event.groupItemsByTag('kubejs:rei_groups/wooden_buttons', 'Wooden Buttons', 'minecraft:wooden_buttons')
  event.groupItemsByTag('kubejs:rei_groups/stone_buttons', 'Stone Buttons', 'minecraft:stone_buttons')
  event.groupItemsByTag('minecraft:rei_groups/banners', 'Minecraft Banners', 'minecraft:banners')
  event.groupItems('minecraft:rei_groups/smithing_templates', 'Smithing Templates', /^minecraft:.*smithing_template$/)
  event.groupItems('minecraft:rei_groups/pottery_sherds', 'Pottery Sherds', /^minecraft:.*pottery_sherds$/)
  if (Platform.isLoaded('darkpaintings')) {
    event.groupSameItem('minecraft:rei_groups/paintings', 'Paintings', 'minecraft:painting')
  }
  event.groupItems('minecraft:rei_groups/infested_blocks', 'Minecraft Infested Blocks', /^minecraft:infested_.*/)
  event.groupItems('kubejs:rei_groups/concrete_singularities', 'Concrete Singularities', /^kubejs:(concrete_+).*?(_singularity+)$/)
  event.groupItems('kubejs:rei_groups/minecraft_valued_singularities', 'Minecraft Valued Singularities', [
    'kubejs:lapis_singularity',
    'kubejs:redstone_singularity',
    'kubejs:diamond_singularity',
    'kubejs:iron_singularity',
    'kubejs:gold_singularity',
    'kubejs:emerald_singularity',
    'kubejs:copper_singularity',
    'kubejs:amethyst_singularity',
    'kubejs:coal_singularity',
    'kubejs:quartz_singularity',
    'kubejs:netherite_singularity'
  ])
  event.groupItems('kubejs:rei_groups/minecraft_dimensional_singularities', 'Minecraft Dimensional Singularities', [
    'kubejs:soul_sand_singularity',
    'kubejs:soul_soil_singularity',
    'kubejs:end_crystal_singularity'
  ])
  event.groupItems('kubejs:rei_groups/minecraft_natural_singularities', 'Minecraft Natural Singularities', [
    'kubejs:coarse_dirt_singularity',
    'kubejs:cobblestone_singularity',
    'kubejs:sand_singularity',
    'kubejs:red_sand_singularity',
    'kubejs:honey_singularity',
    'kubejs:blue_ice_singularity'
  ])
  event.groupItems('kubejs:rei_groups/minecraft_miscellaneous_singularities', 'Minecraft Miscellaneous Singularities', [
    'kubejs:gunpowder_singularity',
    'kubejs:ender_pearl_singularity',
    'kubejs:sea_lantern_singularity',
    'kubejs:tinted_glass_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:sea_lantern_singularity'
  ])
  event.groupItems('kubejs:rei_groups/create_singularities', 'Create Singularities', [
    'kubejs:blaze_cake_singularity',
    'kubejs:precision_mechanism_singularity',
    'kubejs:framed_glass_singularity',
    'kubejs:electron_tube_singularity',
    'kubejs:rose_quartz_singularity',
    'kubejs:chocolate_singularity',
    'kubejs:andesite_alloy_singularity',
    'kubejs:zinc_singularity',
    'kubejs:brass_singularity',
    'kubejs:sturdy_sheet_singularity',
    'kubejs:track_singularity',
    'kubejs:builders_tea_singularity'
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
  if (Platform.isLoaded('farmersdelight')) {
    event.groupItemsByTag('farmersdelight:rei_groups/canvas_signs', 'Canvas Signs', 'farmersdelight:canvas_signs')
    event.groupItemsByTag('farmersdelight:rei_groups/hanging_canvas_signs', 'Hanging Canvas Signs', 'farmersdelight:hanging_canvas_signs')
  }
  if (Platform.isLoaded('supplementaries')) {
    event.groupItemsByTag('supplementaries:rei_groups/hanging_signs', 'Hanging Signs', 'supplementaries:hanging_signs')
    event.groupItemsByTag('supplementaries:rei_groups/sign_posts', 'Sign Posts', 'supplementaries:sign_posts')
  }
  if (Platform.isLoaded('chalk')) {
    event.groupItems('chalk:rei_groups/chalk_all', 'All Chalks', [/^(chalk:).*(_chalk)$/])
  }
  if (Platform.isLoaded('scholar')) {
    event.groupItemsByTag('scholar:rei_groups/writable_books', 'Writable Books', 'scholar:writable_books')
    event.groupItemsByTag('scholar:rei_groups/written_books', 'Written Books', 'scholar:colored_written_books')
  }
  if (Platform.isLoaded('caupona')) {
    // caupona calcite columns
    event.groupItems('caupona:rei_groups/fluted_calcite_column', 'Fluted Calcite Column Components', [
      'caupona:calcite_acanthine_column_capital',
      'caupona:calcite_ionic_column_capital',
      'caupona:calcite_column_fluted_shaft',
      'caupona:calcite_column_fluted_plinth'
    ])
    event.groupItems('caupona:rei_groups/smooth_calcite_column', 'Calcite Column Components', [
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
  }
  if (Platform.isLoaded('rechiseled') && Platform.isLoaded('rechiseledcreate')) {
    event.groupItems('rechiseled:rei_groups/amethyst', 'Rechiseled - Amethyst', /^rechiseled:amethyst[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/acacia', 'Rechiseled - Acacia', /^rechiseled:acacia[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/bamboo', 'Rechiseled - Bamboo', /^rechiseled:bamboo[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/birch', 'Rechiseled - Birch', /^rechiseled:birch[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/cherry', 'Rechiseled - Cherry', /^rechiseled:cherry[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/crimson', 'Rechiseled - Crimson', /^rechiseled:crimson[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/dark_oak', 'Rechiseled - Dark Oak', /^rechiseled:dark_oak[a-z_]*/) // regex conflict
    event.groupItems('rechiseled:rei_groups/jungle', 'Rechiseled - Jungle', /^rechiseled:jungle[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/mangrove', 'Rechiseled - Mangrove', /^rechiseled:mangrove[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/oak', 'Rechiseled - Oak', /^rechiseled:oak[a-z_]*/) // regex conflict
    event.groupItems('rechiseled:rei_groups/spruce', 'Rechiseled - Spruce', /^rechiseled:spruce[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/warped', 'Rechiseled - Warped', /^rechiseled:warped[a-z_]*/)
    // NOT WOOD
    event.groupItems('rechiseled:rei_groups/blue_ice', 'Rechiseled - Blue Ice', /^rechiseled:blue_ice[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/bone_block', 'Rechiseled - Bone Block', /^rechiseled:bone[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/dirt', 'Rechiseled - Dirt', /^rechiseled:dirt[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/glowstone', 'Rechiseled - Glowstone', /^rechiseled:glowstone[a-z_]*/)
    // Storage Blocks?
    event.groupItems('rechiseled:rei_groups/coal', 'Rechiseled - Coal', /^rechiseled:coal[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/copper', 'Rechiseled - Copper', /^rechiseled:copper[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/diamond', 'Rechiseled - Diamond', /^rechiseled:diamond[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/emerald', 'Rechiseled - Emerald', /^rechiseled:emerald[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/gold', 'Rechiseled - Gold', /^rechiseled:gold[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/iron', 'Rechiseled - Iron', /^rechiseled:iron[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/lapis', 'Rechiseled - Lapis', /^rechiseled:lapis[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/netherite', 'Rechiseled - Netherite', /^rechiseled:netherite[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/quartz', 'Rechiseled - Quartz', /^rechiseled:quartz[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/redstone', 'Rechiseled - Redstone', /^rechiseled:redstone[a-z_]*/)
    // STONE PALETTES
    event.groupItems('rechiseled:rei_groups/andesite', 'Rechiseled - Andesite', /^rechiseled:andesite[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/basalt', 'Rechiseled - Basalt', /^rechiseled:basalt[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/blackstone', 'Rechiseled - Blackstone', /^rechiseled:blackstone[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/cobblestone', 'Rechiseled - Cobblestone', /^rechiseled:cobblestone[a-z_]*/) // regex conflict
    event.groupItems('rechiseled:rei_groups/mossy_cobblestone', 'Rechiseled - Mossy Cobblestone', /^rechiseled:mossy_cobblestone[a-z_]*/) // regex conflict
    event.groupItems('rechiseled:rei_groups/cobbled_deepslate', 'Rechiseled - Cobbled Deepslate', /^rechiseled:cobbled_deepslate[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/dark_prismarine', 'Rechiseled - Dark Prismarine', /^rechiseled:dark_prismarine[a-z_]*/) // regex conflict
    event.groupItems('rechiseled:rei_groups/prismarine', 'Rechiseled - Prismarine', /^rechiseled:prismarine[a-z_]*/) // regex conflict
    event.groupItems('rechiseled:rei_groups/diorite', 'Rechiseled - Diorite', /^rechiseled:diorite[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/end_stone', 'Rechiseled - End Stone', /^rechiseled:end_stone[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/granite', 'Rechiseled - Granite', /^rechiseled:granite[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/netherrack', 'Rechiseled - Netherrack', /^rechiseled:netherrack[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/nether_brick', 'Rechiseled - Nether Brick', /^rechiseled:nether_bricks[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/red_nether_brick', 'Rechiseled - Red Nether Brick', /^rechiseled:red_nether_bricks[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/obsidian', 'Rechiseled - Obsidian', /^rechiseled:obsidian[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/purpur', 'Rechiseled - Purpur', /^rechiseled:purpur[a-z_]*/)
    event.groupItems('rechiseled:rei_groups/sandstone', 'Rechiseled - Sandstone', /^rechiseled:sandstone[a-z_]*/) // regex conflict
    event.groupItems('rechiseled:rei_groups/red_sandstone', 'Rechiseled - Red Sandstone', /^rechiseled:red_sandstone[a-z_]*/) // regex conflict
    event.groupItems('rechiseled:rei_groups/stone', 'Rechiseled - Stone', /^rechiseled:stone[a-z_]*/)
    /**
     * Rechiseled: Create
     */
    event.groupItems('rechiseledcreate:rei_groups/all_windows', 'Rechiseled: Create - Windows', /^rechiseledcreate.*[_:\/]window(?![a-z]).*/)
  }
  if (Platform.isLoaded('lightmanscurrency')) {
    event.groupItemsByTag('lightmanscurrency:rei_groups/vending_machines_normal', 'Normal Vending Machines', 'lightmanscurrency:traders/vending_machine')
    event.groupItemsByTag('lightmanscurrency:rei_groups/vending_machines_large', 'Large Vending Machines', 'lightmanscurrency:traders/large_vending_machine')
    event.groupItemsByTag('lightmanscurrency:rei_groups/shelves_1x1', '1x1 Shelves', 'lightmanscurrency:traders/shelf')
    event.groupItemsByTag('lightmanscurrency:rei_groups/shelves_2x2', '2x2 Shelves', 'lightmanscurrency:traders/shelf_2x2')
    event.groupItemsByTag('lightmanscurrency:rei_groups/card_displays', 'Card Displays', 'lightmanscurrency:traders/card_display')
    event.groupItemsByTag('lightmanscurrency:rei_groups/freezers', 'Freezers', 'lightmanscurrency:traders/freezer')
    event.groupItemsByTag('lightmanscurrency:rei_groups/bookshelves', 'Bookshelves', 'lightmanscurrency:traders/special/bookshelf')
    event.groupSameItem('lightmanscurrency:rei_groups/jars_of_sus', 'Jars of Sus', 'lightmanscurrency:sus_jar')
    event.groupItems('lightmanscurrency:rei_groups/auction_stands', 'Auction Stands', /^lightmanscurrency:auction_stand_[a-z_]*/)
  }
  if (Platform.isLoaded('createcafe')) {
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
  }
  if (Platform.isLoaded('bellsandwhistles')) {
    event.groupItems('bellsandwhistles:rei_groups/bellsandwhistles_all', 'All', /^(bellsandwhistles:).*$/)
    event.groupItems('bellsandwhistles:rei_groups/pilots', 'Pilots', /^bellsandwhistles:.*pilot$/)
    event.groupItems('bellsandwhistles:rei_groups/grab_rails', 'Grab Rails', /^bellsandwhistles:.*grab_rails$/)
    event.groupItems('bellsandwhistles:rei_groups/bogie_steps', 'Bogie Steps', /^bellsandwhistles:.*bogie_steps$/)
    event.groupItems('bellsandwhistles:rei_groups/door_steps', 'Door Steps', /^bellsandwhistles:.*door_step$/)
  }
  if (Platform.isLoaded('createdeco')) {
    event.groupItems('createdeco:rei_groups/create_deco_all', 'Create Deco', [/^(createdeco:).*$/])
  }
  if (Platform.isLoaded('railways')) {
    event.groupItems('railways:rei_groups/railways_all', 'All', [/^(railways:).*$/])
    event.groupItems('railways:rei_groups/tracks', 'Regular Tracks', /^railways:track_.*$/)
    event.groupItems('railways:rei_groups/narrow_tracks', 'Narrow Tracks', /^railways:track_.*(?!_narrow)$/)
    event.groupItems('railways:rei_groups/narrow_tracks', 'Wide Tracks', /^railways:track_.*(?!_wide)$/)
  }
  if (Platform.isLoaded('sliceanddice')) {
    event.groupItems('sliceanddice:rei_groups/create_sliceanddice_all', 'Create Slice and Dice', [/^(sliceanddice:).*$/])
  }
  if (Platform.isLoaded('enderchests') && Platform.isLoaded('endertanks')) {
    event.groupSameItem('enderchests:rei_groups/shetiphian_enderchests', 'All Ender Chests', 'enderchests:ender_chest')
    event.groupSameItem('enderchests:rei_groups/shetiphian_enderchests_pouches', 'All Ender Pouches', 'enderchests:ender_pouch')
    event.groupSameItem('endertanks:rei_groups/shetiphian_endertanks', 'All Ender Tanks', 'endertanks:ender_tank')
    event.groupSameItem('endertanks:rei_groups/shetiphian_endertanks_buckets', 'All Ender Buckets', 'endertanks:ender_bucket')
  }
  if (Platform.isLoaded('ars_nouveau')) {
    event.groupItems('ars_nouveau:rei_groups/glyphs', 'Spell Glyphs', [
      /^ars_nouveau:glyph_.*/,
      'ars_nouveau:wololo',
      'ars_nouveau:rewind',
      'ars_nouveau:reset',
      'ars_nouveau:burst',
    ])
    event.groupItems('ars_nouveau:rei_groups/threads', 'Threads', /^ars_nouveau:thread_.*/)
    event.groupItems('ars_nouveau:rei_groups/sorcerer_set', 'Sorceror Armor Set', /^ars_nouveau:sorcerer_.*/)
    event.groupItems('ars_nouveau:rei_groups/arcanist_set', 'Arcanist Armor Set', /^ars_nouveau:arcanist_.*/)
    event.groupItems('ars_nouveau:rei_groups/battlemage_set', 'Battlemage Armor Set', /^ars_nouveau:battlemage_.*/)
    event.groupItems('ars_nouveau:rei_groups/tokens', 'Tokens', [
      /^ars_nouveau:.*_shards$/,
      /^ars_nouveau:.*_shard$/
    ])
    event.groupItems('ars_nouveau:rei_groups/charms', 'Charms', /^ars_nouveau:.*_charm$/)
    event.groupItems('ars_nouveau:rei_groups/bound_script', 'Familiar Bound Scripts', /^ars_nouveau:familiar.*/)
    event.groupItems('ars_nouveau:rei_groups/rituals', 'Ritual Tablets', /^ars_nouveau:ritual_.*/)
    event.groupItems('ars_nouveau:rei_groups/sourcelinks', 'Sourcelinks', /^ars_nouveau:.*_sourcelink$/)
    event.groupItems('ars_nouveau:rei_groups/source_relays', 'Source Relays', /^ars_nouveau:relay_.*/)
  }
  /**
   * @author Hunter19823 <https://github.com/Hunter19823> https://discord.com/channels/303440391124942858/1145987527073865779
   */
  Object.keys(REI_GROUPS).forEach((mod) => { // /^modid.*[_:\/]spawn(?![a-zA-Z0-9]).*/  regular expression provided by ILIKEPIEFOO2 developer of KubeJS Additions
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
    groupChippedTags('chipped', event, true)
  }
  if (Platform.isLoaded('domesticationinnovation')) {
    event.groupItemsByTag('domesticationinnovation:rei_groups/pet_beds', 'Pet Beds', 'domesticationinnovation:pet_beds')
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
    event.groupItemsByTag('handcrafted:rei_groups/fancy_beds', 'Handcrafted Fancy Beds', 'handcrafted:fancy_beds')
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
  if (Platform.isLoaded('reliquary')) {
    event.groupSameItem('reliquary:rei_groups/potions', 'Condensed Potions', 'reliquary:potion')
    event.groupSameItem('reliquary:rei_groups/splash_potions', 'Splash Condensed Potions', 'reliquary:splash_potion')
    event.groupSameItem('reliquary:rei_groups/lingering_potions', 'Lingering Condensed Potions', 'reliquary:lingering_potion')
    event.groupSameItem('reliquary:rei_groups/potion_essence', 'Potion Essence', 'reliquary:potion_essence')
    event.groupSameItem('reliquary:rei_groups/tipped_arrows', 'Tipped Arrows', 'reliquary:tipped_arrow')
    event.groupSameItem('reliquary:rei_groups/mob_charm_fragments', 'Mob Charm Fragments', 'reliquary:mob_charm_fragment')
    event.groupSameItem('reliquary:rei_groups/mob_charms', 'Mob Charms', 'reliquary:mob_charm')
    event.groupSameItem('reliquary:rei_groups/neutral_magazines', 'Neutral Magazines', 'reliquary:magazines/neutral_magazine')
    event.groupSameItem('reliquary:rei_groups/neutral_bullets', 'Neutral Bullets', 'reliquary:bullets/neutral_bullet')
  }
  if (Platform.isLoaded('sophisticatedstorage')) {
    event.groupSameItem('sophisticatedstorage:rei_groups/barrels', 'Basic Barrels', 'sophisticatedstorage:barrel')
    event.groupSameItem('sophisticatedstorage:rei_groups/copper_barrels', 'Copper Barrels', 'sophisticatedstorage:copper_barrel')
    event.groupSameItem('sophisticatedstorage:rei_groups/iron_barrels', 'Iron Barrels', 'sophisticatedstorage:iron_barrel')
    event.groupSameItem('sophisticatedstorage:rei_groups/gold_barrels', 'Gold Barrels', 'sophisticatedstorage:gold_barrel')
    event.groupSameItem('sophisticatedstorage:rei_groups/diamond_barrels', 'Diamond Barrels', 'sophisticatedstorage:diamond_barrel')
    event.groupSameItem('sophisticatedstorage:rei_groups/netherite_barrels', 'Netherite Barrels', 'sophisticatedstorage:netherite_barrel')
    event.groupSameItem('sophisticatedstorage:rei_groups/chests', 'Basic Chests', 'sophisticatedstorage:chest')
    event.groupSameItem('sophisticatedstorage:rei_groups/copper_chests', 'Copper Chests', 'sophisticatedstorage:copper_chest')
    event.groupSameItem('sophisticatedstorage:rei_groups/iron_chests', 'Iron Chest', 'sophisticatedstorage:iron_chest')
    event.groupSameItem('sophisticatedstorage:rei_groups/gold_chests', 'Gold Chests', 'sophisticatedstorage:gold_chest')
    event.groupSameItem('sophisticatedstorage:rei_groups/diamond_chests', 'Diamond Chests', 'sophisticatedstorage:diamond_chest')
    event.groupSameItem('sophisticatedstorage:rei_groups/netherite_chests', 'Netherite Chests', 'sophisticatedstorage:netherite_chest')
    // Shulker
    event.groupSameItem('sophisticatedstorage:rei_groups/shulker_boxes', 'Basic Shulker Boxes', 'sophisticatedstorage:shulker_box')
    event.groupSameItem('sophisticatedstorage:rei_groups/copper_shulker_boxes', 'Copper Shulker Boxes', 'sophisticatedstorage:copper_shulker_box')
    event.groupSameItem('sophisticatedstorage:rei_groups/iron_shulker_boxes', 'Iron Shulker Boxes', 'sophisticatedstorage:iron_shulker_box')
    event.groupSameItem('sophisticatedstorage:rei_groups/gold_shulker_boxes', 'Gold Shulker Boxes', 'sophisticatedstorage:gold_shulker_box')
    event.groupSameItem('sophisticatedstorage:rei_groups/diamond_shulker_boxes', 'Diamond Shulker Boxes', 'sophisticatedstorage:diamond_shulker_box')
    event.groupSameItem('sophisticatedstorage:rei_groups/netherite_shulker_boxes', 'Netherite Shulker Boxes', 'sophisticatedstorage:netherite_shulker_box')
    // I
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_barrels_1', 'Limited Basic Barrels I', 'sophisticatedstorage:limited_barrel_1')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_copper_barrels_1', 'Limited Copper Barrels I', 'sophisticatedstorage:limited_copper_barrel_1')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_iron_barrels_1', 'Limited Iron Barrels I', 'sophisticatedstorage:limited_iron_barrel_1')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_gold_barrels_1', 'Limited Gold Barrels I', 'sophisticatedstorage:limited_gold_barrel_1')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_diamond_barrels_1', 'Limited Diamond Barrels I', 'sophisticatedstorage:limited_diamond_barrel_1')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_netherite_barrels_1', 'Limited Netherite Barrels I', 'sophisticatedstorage:limited_netherite_barrel_1')
    // II
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_barrels_2', 'Limited Basic Barrels II', 'sophisticatedstorage:limited_barrel_2')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_copper_barrels_2', 'Limited Copper Barrels II', 'sophisticatedstorage:limited_copper_barrel_2')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_iron_barrels_2', 'Limited Iron Barrels II', 'sophisticatedstorage:limited_iron_barrel_2')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_gold_barrels_2', 'Limited Gold Barrels II', 'sophisticatedstorage:limited_gold_barrel_2')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_diamond_barrels_2', 'Limited Diamond Barrels II', 'sophisticatedstorage:limited_diamond_barrel_2')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_netherite_barrels_2', 'Limited Netherite Barrels II', 'sophisticatedstorage:limited_netherite_barrel_2')
    // III
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_barrels_3', 'Limited Basic Barrels III', 'sophisticatedstorage:limited_barrel_3')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_copper_barrels_3', 'Limited Copper Barrels III', 'sophisticatedstorage:limited_copper_barrel_3')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_iron_barrels_3', 'Limited Iron Barrels III', 'sophisticatedstorage:limited_iron_barrel_3')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_gold_barrels_3', 'Limited Gold Barrels III', 'sophisticatedstorage:limited_gold_barrel_3')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_diamond_barrels_3', 'Limited Diamond Barrels III', 'sophisticatedstorage:limited_diamond_barrel_3')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_netherite_barrels_3', 'Limited Netherite Barrels III', 'sophisticatedstorage:limited_netherite_barrel_3')
    // IV
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_barrels_4', 'Limited Basic Barrels IV', 'sophisticatedstorage:limited_barrel_4')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_copper_barrels_4', 'Limited Copper Barrels IV', 'sophisticatedstorage:limited_copper_barrel_4')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_iron_barrels_4', 'Limited Iron Barrels IV', 'sophisticatedstorage:limited_iron_barrel_4')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_gold_barrels_4', 'Limited Gold Barrels IV', 'sophisticatedstorage:limited_gold_barrel_4')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_diamond_barrels_4', 'Limited Diamond Barrels IV', 'sophisticatedstorage:limited_diamond_barrel_4')
    event.groupSameItem('sophisticatedstorage:rei_groups/limited_netherite_barrels_4', 'Limited Netherite Barrels IV', 'sophisticatedstorage:limited_netherite_barrel_4')
  }
  if (Platform.isLoaded('refurbished_furniture')) {
    event.groupItems('refurbished_furniture:rei_groups/chairs', 'Chairs', /^refurbished_furniture:.*_chair$/)
    event.groupItems('refurbished_furniture:rei_groups/tables', 'Tables', /^refurbished_furniture:.*_table$/)
    event.groupItems('refurbished_furniture:rei_groups/desks', 'Desks', /^refurbished_furniture:.*_desk$/)
    event.groupItems('refurbished_furniture:rei_grups/cutting_boards', 'Cutting Boards', /^refurbished_furniture:.*_cutting_board$/)
    event.groupItems('refurbished_furniture:rei_grups/crates', 'Crates', /^refurbished_furniture:.*_crate$/)
    event.groupItemsByTag('refurbished_furniture:rei_grups/grills', 'Grills', 'refurbished_furniture:grills')
    event.groupItemsByTag('refurbished_furniture:rei_grups/coolers', 'Coolers', 'refurbished_furniture:coolers')
    event.groupItems('refurbished_furniture:rei_grups/mail_boxes', 'Mail Boxes', /^refurbished_furniture:.*_mail_box$/)
    event.groupItemsByTag('refurbished_furniture:rei_grups/trampolines', 'Trampolines', 'refurbished_furniture:trampolines')
    event.groupItems('refurbished_furniture:rei_groups/hedges', 'Hedges', /^refurbished_furniture:.*_hedge$/)
    event.groupItemsByTag('refurbished_furniture:rei_groups/sofas', 'Sofas', 'refurbished_furniture:sofas')
    event.groupItemsByTag('refurbished_furniture:rei_groups/stools', 'Stools', 'refurbished_furniture:stools')
    event.groupItemsByTag('refurbished_furniture:rei_groups/lamps', 'Lamps', 'refurbished_furniture:lamps')
    event.groupItems('refurbished_furniture:rei_groups/stepping_stones', 'Stepping Stones', /^refurbished_furniture:.*_stepping_stones$/)
    // bathroom
    event.groupItems('refurbished_furniture:rei_groups/toilets', 'Toilets', /^refurbished_furniture:.*_toilet$/)
    event.groupItems('refurbished_furniture:rei_groups/basins', 'Basins', /^refurbished_furniture:.*_basin$/)
    event.groupItems('refurbished_furniture:rei_groups/bathtubs', 'Bathtubs', /^refurbished_furniture:.*_bath$/)
    // kitchen related
    event.groupItems('refurbished_furniture:rei_groups/storage_jars', 'Storage Jars', /^refurbished_furniture:.*_storage_jar$/)
    /* Failed regex
    /^refurbished_furniture:(?!kitchen).*_drawer$/
    /^refurbished_furniture:(?!.*_hanging_sign$)[a-zA-Z_]+_sign$/
    */
    event.groupItems('refurbished_furniture:rei_groups/drawers', 'Wooden Drawers', /^refurbished_furniture:(?!.*_kitchen_drawer$)[a-z_]+_drawer$/)
    event.groupItems('refurbished_furniture:rei_groups/kitchen_drawers', 'Kitchen Drawers', /^refurbished_furniture:.*_kitchen_drawer$/)
    event.groupItems('refurbished_furniture:rei_groups/kitchen_cabinetry', 'Kitchen Cabinetry', /^refurbished_furniture:.*_kitchen_cabinetry$/)
    event.groupItems('refurbished_furniture:rei_groups/kitchen_sinks', 'Kitchen Sinks', /^refurbished_furniture:.*_kitchen_sink$/)
    event.groupItems('refurbished_furniture:rei_groups/storage_cabinets', 'Storage Cabinets', /^refurbished_furniture:(?!.*_kitchen_storage_cabinet$)[a-z_]+_storage_cabinet$/)
    event.groupItems('refurbished_furniture:rei_groups/kitchen_storage_cabinets', 'Kitchen Storage Cabinets', /^refurbished_furniture:.*_kitchen_storage_cabinet$/)
    event.groupItems('refurbished_furniture:rei_groups/light_mode', 'Light Mode Appliances', [
      'refurbished_furniture:light_fridge',
      'refurbished_furniture:light_toaster',
      'refurbished_furniture:light_microwave',
      'refurbished_furniture:light_stove',
      'refurbished_furniture:light_range_hood',
      'refurbished_furniture:light_electricity_generator',
      'refurbished_furniture:light_lightswitch',
      'refurbished_furniture:light_ceiling_light',
      /^refurbished_furniture:.*_light_ceiling_fan$/
    ])
    event.groupItems('refurbished_furniture:rei_groups/dark_mode', 'Dark Mode Appliances', [
      'refurbished_furniture:dark_fridge',
      'refurbished_furniture:dark_toaster',
      'refurbished_furniture:dark_microwave',
      'refurbished_furniture:dark_stove',
      'refurbished_furniture:dark_range_hood',
      'refurbished_furniture:dark_electricity_generator',
      'refurbished_furniture:dark_lightswitch',
      'refurbished_furniture:dark_ceiling_light',
      /^refurbished_furniture:.*_dark_ceiling_fan$/
    ])
  }
  if (Platform.isLoaded('productivebees')) {
    event.groupSameItem('productivebees:rei_groups/honeycombs', 'Honeycombs', 'productivebees:configurable_honeycomb')
    event.groupSameItem('productivebees:rei_groups/comb_blocks', 'Comb Blocks', 'productivebees:configurable_comb')
  }
  if (Platform.isLoaded('v_slab_compat') && Platform.isLoaded('quark')) {
    event.groupItemsByTag('v_slab_compat:rei_groups/vertical_slabs', 'Vertical Slab Compat', 'quark:vertical_slabs')
  }
})