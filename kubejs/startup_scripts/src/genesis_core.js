/**
 * @file The core registry, responsible for items, blocks, fluids, etc.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author squoshi <https://github.com/squoshi> Helped me a lot very early on. Thank you. Also artist of the gold block texture.
 * @author ChiefArug <https://github.com/ChiefArug> Helped me a lot very early on. Thank you.
 * @author Hunter19823 <https://github.com/Hunter19823> Helped me a lot very early on. Thank you.
 * @author ladylexxie <https://github.com/ladylexxie> Helped a lot very early on. Thank you.
 */

// priority: 10
// requires: create
// requires: fusion

StartupEvents.postInit(event => {
  Platform.mods.kubejs.name = 'FinalityJS'
})

console.info('Loading Finality startup scripts...')

let INTEGERS = {
  zero: 'Zero',
  one: 'One',
  two: 'Two',
  three: 'Three',
  four: 'Four',
  five: 'Five',
  six: 'Six',
  seven: 'Seven',
  eight: 'Eight',
  nine: 'Nine'
}
let LETTERS = {
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  h: 'H',
  i: 'I',
  j: 'J',
  k: 'K',
  l: 'L',
  m: 'M',
  n: 'N',
  o: 'O',
  p: 'P',
  q: 'Q',
  r: 'R',
  s: 'S',
  t: 'T',
  u: 'U',
  v: 'V',
  w: 'W',
  x: 'X',
  y: 'Y',
  z: 'Z'
}
const TOOLS = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
const ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']
const DIVING = ['diving_helmet', 'backtank', 'diving_boots']

StartupEvents.registry('item', event => { // Register new items here event.create('example_item').displayName('Example Item')
  /**
   * CORE MATERIALS
   */

  // ZINC
  event.create('kubejs:zinc_sheet')
    .texture('kubejs:item/zinc_sheet')
    .tag('forge:plates/zinc')
  // NETHERITE
  event.create('kubejs:netherite_nugget')
    .texture('kubejs:item/netherite_nugget')
    .tag('forge:nuggets/netherite')
    .fireResistant(true)
  event.create('kubejs:netherite_sheet')
    .texture('kubejs:item/netherite_sheet')
    .fireResistant(true)
    .tag('forge:plates/netherite')
  event.create('kubejs:netherite_rod')
    .texture('kubejs:item/netherite_rod')
    .fireResistant(true)
    .tag('forge:rods/netherite')
  /**
   * 
   * @param {string} itemId 
   */
  function standardNoDisplay(itemId) {
    event.create(`kubejs:${itemId}`).texture(`kubejs:item/${itemId}`).maxStackSize(64)
  }
  /**
   * 
   * @param {string} itemId 
   * @param {string} displayName 
   * @param {string} texturePath 
   */
  function fireResistantItem(itemId, displayName, texturePath) {
    event.create(`kubejs:${itemId}`).displayName(displayName).texture(`kubejs:item/${texturePath}`).maxStackSize(64).fireResistant(true)
  }
  /**
   * 
   * @param {string} itemId 
   * @param {string} displayName 
   * @param {string} texturePath 
   * @param {number} stackSize 
   * @param {boolean} fireResistantBoolean 
   */
  function fireResistantCustom(itemId, displayName, texturePath, stackSize, fireResistantBoolean) {
    event.create(`kubejs:${itemId}`).displayName(displayName).texture(`kubejs:item/${texturePath}`).maxStackSize(stackSize).fireResistant(fireResistantBoolean)
  }
  /**
   * 
   * @param {string} color 
   * @param {string} displayNameString 
   * @param {hexadecimal} hexcode
   */
  function RGBWCMYK_OBJECTS(color, displayNameString, hexcode) {
    event.create(`kubejs:color_${color}`)
      .displayName(`${displayNameString}`)
      .texture('layer0', 'kubejs:item/shape_tint')
      .color(0, hexcode)
      .parentModel('kubejs:item/color')
      .maxStackSize(64)
      .fireResistant(true)
  }
  standardNoDisplay('deepslate_shard')
  standardNoDisplay('trident_pole')
  standardNoDisplay('trident_prong')
  event.create('kubejs:dormant_singularity_core')
    .rarity('uncommon')
    .texture('kubejs:item/dormant_singularity_core')
    .maxStackSize(16)
    .fireResistant(true)
  event.create('kubejs:awakened_singularity_core')
    .rarity('epic')
    .texture('kubejs:item/awakened_singularity_core')
    .maxStackSize(16)
    .fireResistant(true)
  event.create('kubejs:denied_result')
    .displayName('§dDenied Result')
    .rarity('epic')
    .texture('kubejs:item/denied')
    .maxStackSize(1)
    .fireResistant(true)
  event.create('kubejs:errored_result')
    .displayName('§4Errored Result')
    .rarity('epic')
    .texture('kubejs:item/errored')
    .maxStackSize(1)
    .fireResistant(true)
  event.create('kubejs:removed_item')
    .displayName('§4Removed Item')
    .rarity('epic')
    .texture('kubejs:item/removed')
    .maxStackSize(1)
    .fireResistant(true)
  event.create('kubejs:crystal_lance', 'sword').tier('crystalline_tool')
    .rarity('epic')
    .maxStackSize(1)
    .fireResistant(true)
  // IRIDIUM
  event.create('kubejs:raw_iridium')
    .texture('kubejs:item/raw_iridium')
    .rarity('rare')
    .fireResistant(true)
  event.create('kubejs:crushed_raw_iridium')
    .texture('kubejs:item/crushed_raw_iridium')
    .rarity('rare')
    .fireResistant(true)
    .tag('create:crushed_raw_materials')
  event.create('kubejs:iridium_ingot')
    .texture('kubejs:item/iridium_ingot')
    .rarity('rare')
    .fireResistant(true)
  event.create('kubejs:iridium_nugget')
    .texture('kubejs:item/iridium_nugget')
    .rarity('rare')
    .fireResistant(true)
  event.create('kubejs:iridium_sheet')
    .texture('kubejs:item/iridium_sheet')
    .fireResistant(true)
    .rarity('rare')
  event.create('kubejs:iridium_rod')
    .texture('kubejs:item/iridium_rod')
    .fireResistant(true)
    .rarity('rare')
  event.create('kubejs:iridium_upgrade_smithing_template', 'smithing_template')
    .appliesTo('Netherite Equipment')
    .ingredients('Ingots & Miscellaneous')
    .rarity('rare')
    .texture('kubejs:item/iridium_upgrade_smithing_template')
    .fireResistant(true)
  event.create('kubejs:iridium_pickaxe', 'pickaxe').tier('iridium_tool')
    .rarity('rare')
    .texture('kubejs:item/iridium_pickaxe')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:pickaxes')
    .tag('forge:tools')
    .tag('forge:tools/pickaxe')
    .tag('forge:tools/pickaxes')
    .tag('kubejs:iridium_tools')
  event.create('kubejs:iridium_axe', 'axe').tier('iridium_tool')
    .rarity('rare')
    .texture('kubejs:item/iridium_axe')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:axes')
    .tag('forge:tools')
    .tag('forge:tools/axe')
    .tag('forge:tools/axes')
    .tag('kubejs:iridium_tools')
  event.create('kubejs:iridium_shovel', 'shovel').tier('iridium_tool')
    .rarity('rare')
    .texture('kubejs:item/iridium_shovel')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:shovels')
    .tag('forge:tools')
    .tag('forge:tools/shovel')
    .tag('forge:tools/shovels')
    .tag('kubejs:iridium_tools')
  if (Platform.isLoaded('paxeljs')) {
    event.create('kubejs:iridium_paxel', 'paxel').tier('iridium_tool')
      .rarity('rare')
      .texture('kubejs:item/iridium_paxel')
      .maxStackSize(1)
      .fireResistant(true)
  }
  event.create('kubejs:iridium_hoe', 'hoe').tier('iridium_tool')
    .rarity('rare')
    .texture('kubejs:item/iridium_hoe')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:hoes')
    .tag('forge:tools')
    .tag('forge:tools/hoe')
    .tag('forge:tools/hoes')
    .tag('kubejs:iridium_tools')
  event.create('kubejs:iridium_sword', 'sword').tier('iridium_tool')
    .rarity('rare')
    .texture('kubejs:item/iridium_sword')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:swords')
    .tag('forge:tools')
    .tag('forge:tools/sword')
    .tag('forge:tools/swords')
    .tag('kubejs:iridium_tools')

  event.create('kubejs:iridium_helmet', 'helmet').tier('iridium_armor')
    .rarity('rare')
    .texture('kubejs:item/iridium_helmet')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:helmets')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/helmets')
    .tag('kubejs:iridium_armor')
  event.create('kubejs:iridium_chestplate', 'chestplate').tier('iridium_armor')
    .rarity('rare')
    .texture('kubejs:item/iridium_chestplate')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:chestplates')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/chestplates')
    .tag('kubejs:iridium_armor')
  event.create('kubejs:iridium_leggings', 'leggings').tier('iridium_armor')
    .rarity('rare')
    .texture('kubejs:item/iridium_leggings')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:leggings')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/leggings')
    .tag('kubejs:iridium_armor')
  event.create('kubejs:iridium_boots', 'boots').tier('iridium_armor')
    .rarity('rare')
    .texture('kubejs:item/iridium_boots')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:boots')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/boots')
    .tag('kubejs:iridium_armor')

  event.create('kubejs:crimson_moons_semblance', 'sword').tier('balemoon_bloodfire')
    .formattedDisplayName(Component.string("Crimson Moon's Semblance").color(0xFF0000))
    .rarity('epic')
    .texture('kubejs:item/crimson_moons_semblance')
    .fireResistant(true)
    .tag('minecraft:swords')
    .tag('forge:swords')
    .tag('forge:tools')
    .tag('forge:tools/sword')
    .tag('forge:tools/swords')
  event.create('kubejs:unstable_entropy_particles')
    .rarity('epic')
    .texture('kubejs:item/unstable_entropy')
    .fireResistant(true)
  event.create('kubejs:stable_entropy_particles')
    .rarity('epic')
    .texture('kubejs:item/stable_entropy')
    .fireResistant(true)
  event.create('kubejs:high_entropy_alloy')
    .rarity('epic')
    .texture('kubejs:item/final_ingot')
    .fireResistant(true)
  event.create('kubejs:high_entropy_alloy_nugget')
    .rarity('epic')
    .texture('kubejs:item/final_nugget')
    .fireResistant(true)
  event.create('kubejs:high_entropy_alloy_sheet')
    .rarity('epic')
    .texture('kubejs:item/final_sheet')
    .fireResistant(true)
  event.create('kubejs:high_entropy_alloy_rod')
    .rarity('epic')
    .texture('kubejs:item/final_rod')
    .fireResistant(true)
  // tools
  event.create('kubejs:final_pickaxe', 'pickaxe').tier('final_tool')
    .rarity('epic')
    .texture('kubejs:item/final_pickaxe')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:pickaxes')
    .tag('forge:tools')
    .tag('forge:tools/pickaxe')
    .tag('forge:tools/pickaxes')
    .tag('kubejs:final_tools')

  event.create('kubejs:final_axe', 'axe').tier('final_tool')
    .rarity('epic')
    .texture('kubejs:item/final_axe')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:axes')
    .tag('forge:tools')
    .tag('forge:tools/axe')
    .tag('forge:tools/axes')
    .tag('kubejs:final_tools')

  event.create('kubejs:final_shovel', 'shovel').tier('final_tool')
    .rarity('epic')
    .texture('kubejs:item/final_shovel')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:shovels')
    .tag('forge:tools')
    .tag('forge:tools/shovel')
    .tag('forge:tools/shovels')
    .tag('kubejs:final_tools')

  if (Platform.isLoaded('paxeljs')) {
    event.create('kubejs:final_paxel', 'paxel').tier('final_tool')
      .rarity('epic')
      .texture('kubejs:item/final_paxel')
      .maxStackSize(1)
      .fireResistant(true)
  }

  event.create('kubejs:final_hoe', 'hoe').tier('final_tool')
    .rarity('epic')
    .texture('kubejs:item/final_hoe')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:hoes')
    .tag('forge:tools')
    .tag('forge:tools/hoe')
    .tag('forge:tools/hoes')
    .tag('kubejs:final_tools')
  // weapons
  event.create('kubejs:final_sword', 'sword').tier('final_tool')
    .rarity('epic')
    .texture('kubejs:item/final_sword')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:swords')
    .tag('forge:tools')
    .tag('forge:tools/sword')
    .tag('forge:tools/swords')
    .tag('kubejs:final_tools')

  event.create('kubejs:final_lance', 'sword').tier('final_tool')
    .rarity('epic')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:swords')
    .tag('forge:tools')
    .tag('forge:tools/sword')
    .tag('forge:tools/swords')
    .tag('kubejs:final_tools')

  event.create('kubejs:final_scythe', 'sword').tier('final_tool')
    .rarity('epic')
    .texture('kubejs:item/final_scythe')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:scythes')
    .tag('forge:tools')
    .tag('forge:tools/scythe')
    .tag('forge:tools/scythes')
    .tag('kubejs:final_tools')

  event.create('kubejs:final_katana', 'sword').tier('final_tool')
    .rarity('epic')
    .texture('kubejs:item/final_katana')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:swords')
    .tag('forge:tools')
    .tag('forge:tools/sword')
    .tag('forge:tools/swords')
    .tag('kubejs:final_tools')

  // armor
  event.create('kubejs:final_helmet', 'helmet').tier('final_armor')
    .rarity('epic')
    .texture('kubejs:item/final_helmet')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:helmets')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/helmets')
    .tag('kubejs:final_armor')

  event.create('kubejs:final_chestplate', 'chestplate').tier('final_armor')
    .rarity('epic')
    .texture('kubejs:item/final_chestplate')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:chestplates')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/chestplates')
    .tag('kubejs:final_armor')

  event.create('kubejs:final_leggings', 'leggings').tier('final_armor')
    .rarity('epic')
    .texture('kubejs:item/final_leggings')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:leggings')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/leggings')
    .tag('kubejs:final_armor')

  event.create('kubejs:final_boots', 'boots').tier('final_armor')
    .rarity('epic')
    .texture('kubejs:item/final_boots')
    .maxStackSize(1)
    .fireResistant(true)
    .tag('forge:boots')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/boots')
    .tag('kubejs:final_armor')

  // shapes and alphanumeric
  event.create('kubejs:qubit')
    .rarity('epic')
    .texture('kubejs:item/qubit')
    .maxStackSize(1)
    .fireResistant(true)
  for (let [character, name] of Object.entries(LETTERS)) {
    event.create(`kubejs:letter_${character}`)
      .displayName(`Letter ${name}`)
      .rarity('epic')
      .texture(`kubejs:item/alphanumeric_characters/letter_${character}`)
      .maxStackSize(64)
      .fireResistant(true)
      .glow(true)
  }
  for (let [number, name] of Object.entries(INTEGERS)) {
    event.create(`kubejs:${number}`)
      .displayName(`Number ${name}`)
      .rarity('epic')
      .texture(`kubejs:item/alphanumeric_characters/${number}`)
      .maxStackSize(64)
      .fireResistant(true)
      .glow(true)
  }
  event.create('kubejs:octothorpe')
    .rarity('epic')
    .texture('kubejs:item/national_characters/octothorpe')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:slash')
    .rarity('epic')
    .texture('kubejs:item/special_characters/slash')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:at_sign')
    .rarity('epic')
    .texture('kubejs:item/national_characters/at_sign')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:left_parentheses')
    .rarity('epic')
    .texture('kubejs:item/special_characters/left_parentheses')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:right_parentheses')
    .rarity('epic')
    .texture('kubejs:item/special_characters/right_parentheses')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:left_bracket')
    .rarity('epic')
    .texture('kubejs:item/special_characters/left_bracket')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:right_bracket')
    .rarity('epic')
    .texture('kubejs:item/special_characters/right_bracket')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:left_brace')
    .rarity('epic')
    .texture('kubejs:item/special_characters/left_brace')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:right_brace')
    .rarity('epic')
    .texture('kubejs:item/special_characters/right_brace')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:left_chevron')
    .rarity('epic')
    .texture('kubejs:item/special_characters/left_chevron')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:right_chevron')
    .rarity('epic')
    .texture('kubejs:item/special_characters/right_chevron')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:exclamation_mark')
    .rarity('epic')
    .texture('kubejs:item/special_characters/exclamation_mark')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:ampersand')
    .rarity('epic')
    .texture('kubejs:item/special_characters/ampersand')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:full_point')
    .rarity('epic')
    .texture('kubejs:item/special_characters/full_point')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:comma')
    .rarity('epic')
    .texture('kubejs:item/special_characters/comma')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:equality_sign')
    .rarity('epic')
    .texture('kubejs:item/special_characters/equality_sign')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:plus_sign')
    .rarity('epic')
    .texture('kubejs:item/special_characters/plus_sign')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:minus_sign')
    .rarity('epic')
    .texture('kubejs:item/special_characters/minus_sign')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  RGBWCMYK_OBJECTS('uncolored', '§7Uncolored', 0xAAAAAA)
  RGBWCMYK_OBJECTS('red', '§cColor Red', 0xFF0000)
  RGBWCMYK_OBJECTS('green', '§aColor Green', 0x00FF00)
  RGBWCMYK_OBJECTS('blue', '§9Color Blue', 0x0000FF)
  RGBWCMYK_OBJECTS('white', '§lColor White', 0xFFFFFF)
  RGBWCMYK_OBJECTS('cyan', '§bColor Cyan', 0x00FFFF)
  RGBWCMYK_OBJECTS('magenta', '§dColor Magenta', 0xFF00FF)
  RGBWCMYK_OBJECTS('yellow', '§eColor Yellow', 0xFFFF00)
  if (Platform.isLoaded('delightful')) {
    event.create('kubejs:dried_matcha_leaves')
      .texture('kubejs:item/dried_matcha_leaves')
      .maxStackSize(64)
    event.create('kubejs:steamed_matcha_leaves')
      .texture('kubejs:item/steamed_matcha_leaves')
      .maxStackSize(64)
  }
  event.create('kubejs:deconstructor')
    .rarity('epic')
    .texture('kubejs:item/deconstructor')
    .maxStackSize(64)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:duplicator')
    .rarity('epic')
    .texture('kubejs:item/duplicator')
    .maxStackSize(1)
    .fireResistant(true)
    .glow(true)
  event.create('kubejs:null_matter')
    .rarity('epic')
    .texture('layer0', 'kubejs:item/null_matter')
    .texture('layer1', 'kubejs:item/null_matter_overlay')
    .fireResistant(true)
})

// tiers
ItemEvents.toolTierRegistry(event => {
  event.add('crystalline_tool', tier => {
    tier.uses = -1
    tier.speed = 12
    tier.attackDamageBonus = 20.0
    tier.level = 5
    tier.enchantmentValue = 30
  })
  event.add('iridium_tool', tier => {
    tier.uses = 8192
    tier.speed = 64
    tier.attackDamageBonus = 12.0
    tier.level = 5
    tier.enchantmentValue = 30
  })
  event.add('balemoon_bloodfire', tier => {
    tier.uses = -1
    tier.speed = 128
    tier.attackDamageBonus = 252
    tier.level = 5
    tier.enchantmentValue = 30
  })
  event.add('final_tool', tier => {
    tier.uses = 16777216
    tier.speed = 256.0
    tier.attackDamageBonus = 69995.0
    tier.level = 5
    tier.enchantmentValue = 30
  })
})

ItemEvents.armorTierRegistry(event => {
  event.add('iridium_armor', tier => {
    tier.durabilityMultiplier = -1
    tier.slotProtections = [6, 16, 12, 6]
    tier.enchantmentValue = 30
    tier.equipSound = 'minecraft:item.armor.equip_netherite'
    tier.toughness = 80
    tier.knockbackResistance = 5.0
  })
  event.add('final_armor', tier => {
    tier.durabilityMultiplier = -1
    tier.slotProtections = [99999999, 99999999, 99999999, 99999999]
    tier.enchantmentValue = 30
    tier.equipSound = 'minecraft:item.armor.equip_netherite'
    tier.toughness = 99999999
    tier.knockbackResistance = 10.0
  })
})

ItemEvents.modification(event => {
  event.modify('kubejs:final_pickaxe', item => {
    if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 3 }
    if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -2 }
  })
  event.modify('kubejs:final_axe', item => {
    if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 2 }
    if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -2.7 }
  })
  event.modify('kubejs:final_scythe', item => {
    if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 7 }
    if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -0.3 } // entity 4
  })
  event.modify('kubejs:final_katana', item => {
    if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 9 }
    if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -0.1 }
  })
  event.modify('kubejs:final_lance', item => {
    if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 6 }
    if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -1.5 }
  })
  for (let i = 0; i < TOOLS.length; i++) {
    let tool = TOOLS[i];
    event.modify(`minecraft:wooden_${tool}`, item => {
      item.maxDamage = 16
    })
    event.modify(`minecraft:stone_${tool}`, item => {
      item.maxDamage = 128
    })
    event.modify(`minecraft:iron_${tool}`, item => {
      item.maxDamage = 256
    })
    event.modify(`minecraft:diamond_${tool}`, item => {
      item.maxDamage = 1024
    })
    event.modify(`minecraft:netherite_${tool}`, item => {
      item.maxDamage = 4096
    })
  }
  event.modify('minecraft:shears', item => {
    item.maxDamage = 256
  })
  event.modify('minecraft:shield', item => {
    item.maxDamage = 225
  })
  event.modify('minecraft:trident', item => {
    item.maxDamage = 1024
  })
  if (Platform.isLoaded('eccentrictome')) {
    event.modify('eccentrictome:tome', item => {
      item.fireResistant = true
    })
  }
  // Armor durability is synchronized because it does not make sense as to why armor pieces have different durabilities.
  for (let i = 0; i < ARMOR.length; i++) {
    let armor = ARMOR[i];
    event.modify(`minecraft:leather_${armor}`, item => {
      item.maxDamage = 128
    })
    event.modify(`minecraft:iron_${armor}`, item => {
      item.maxDamage = 256
    })
    event.modify(`minecraft:golden_${armor}`, item => {
      item.maxDamage = 225
    })
    event.modify(`minecraft:diamond_${armor}`, item => {
      item.maxDamage = 512
    })
    event.modify(`minecraft:netherite_${armor}`, item => {
      item.maxDamage = -1
    })
  }
  for (let i = 0; i < DIVING.length; i++) {
    let armor = DIVING[i];
    event.modify(`create:copper_${armor}`, item => {
      item.maxDamage = 128
    })
    event.modify(`create:netherite_${armor}`, item => {
      item.maxDamage = -1
    })
  }
  event.modify('create:super_glue', item => {
    item.maxDamage = 128
  })
  // farmer's delight
  event.modify('farmersdelight:flint_knife', item => {
    item.maxDamage = 256
  })
  event.modify('farmersdelight:iron_knife', item => {
    item.maxDamage = 512
  })
  event.modify('farmersdelight:diamond_knife', item => {
    item.maxDamage = 1820
  })
  event.modify('farmersdelight:netherite_knife', item => {
    item.maxDamage = 4096
  })
})

/**
 * Block registration.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author LLytho <https://github.com/LLytho> Prevented the head bashing
 * @author PieTheNiceGuy <https://github.com/hunter19823> Block placement logic help
 */

let CMD = [
  'command_block',
  'chain_command_block',
  'repeating_command_block'
]

StartupEvents.registry('block', event => {
  event.create('kubejs:deepslate_iridium_ore')
    .soundType('deepslate')
    .hardness(10)
    .resistance(100)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .tagBlock('forge:ores')
    .tagBlock('forge:ores_in_ground/deepslate')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.tag('forge:ores')
      ctx.tag('forge:ores_in_ground/deepslate')
    })
  event.create('kubejs:raw_iridium_block')
    .soundType('stone')
    .hardness(10)
    .resistance(5)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .tagBlock('forge:storage_blocks')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.fireResistant(true)
      ctx.tag('forge:storage_blocks')
    })
  event.create('kubejs:iridium_block')
    .soundType('netherite_block')
    .hardness(25)
    .resistance(250)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .tagBlock('forge:storage_blocks')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.fireResistant(true)
      ctx.tag('kubejs:iridium_blocks')
      ctx.tag('forge:storage_blocks')
    })
  event.create('kubejs:iridium_block_connecting')
    .textureAll('kubejs:block/iridium_block_connecting')
    .soundType('netherite_block')
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.fireResistant(true)
      ctx.tag('kubejs:iridium_blocks')
    })
  event.create('kubejs:iridium_casing')
    .textureAll('kubejs:block/iridium_casing_connected')
    .soundType('netherite_block')
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('forge:needs_netherite_tool')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.fireResistant(true)
    })
  event.create('kubejs:ornate_iridium_block_connecting')
    .textureAll('kubejs:block/ornate_iridium_block_connecting')
    .soundType('netherite_block')
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.fireResistant(true)
      ctx.tag('kubejs:iridium_blocks')
    })
  event.create('kubejs:ornate_iridium_pillar_connecting')
    .soundType('netherite_block')
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(ctx => {
      ctx.set(BlockProperties.AXIS, ctx.nearestLookingDirection.axis)
    })
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.fireResistant(true)
      ctx.tag('kubejs:iridium_blocks')
    })
  event.create('kubejs:iridium_quartz_block_connecting')
    .textureAll('kubejs:block/iridium_quartz_block_connecting')
    .soundType('netherite_block')
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.fireResistant(true)
      ctx.tag('kubejs:iridium_blocks')
    })
  event.create('kubejs:iridium_tiles')
    .textureAll('kubejs:block/iridium_tiles')
    .soundType('netherite_block')
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.fireResistant(true)
      ctx.tag('kubejs:iridium_blocks')
    })
  event.create('kubejs:iridium_tiles_connecting')
    .textureAll('kubejs:block/iridium_tiles_connecting')
    .soundType('netherite_block')
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.fireResistant(true)
      ctx.tag('kubejs:iridium_blocks')
    })
  event.create('kubejs:high_entropy_alloy_block')
    .textureAll('kubejs:block/high_entropy_alloy_block')
    .soundType('netherite_block')
    .hardness(500)
    .resistance(1000)
    .lightLevel(1.0)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .tagBlock('forge:storage_blocks')
    .item(ctx => {
      ctx.rarity('epic')
      ctx.fireResistant(true)
      ctx.tag('forge:storage_blocks')
    })
  event.create('kubejs:high_entropy_alloy_block_connecting')
    .textureAll('kubejs:block/high_entropy_alloy_block_connecting')
    .soundType('netherite_block')
    .hardness(500)
    .resistance(1000)
    .lightLevel(1.0)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .item(ctx => {
      ctx.rarity('epic')
      ctx.fireResistant(true)
    })
  for (let insert of CMD) {
    event.create(`kubejs:${insert}`)
      .textureAll(`kubejs:block/${insert}`)
      .soundType('netherite_block')
      .hardness(500)
      .resistance(1000)
      .lightLevel(1.0)
      .requiresTool(true)
      .tagBlock('minecraft:wither_immune')
      .tagBlock('minecraft:dragon_immune')
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('forge:needs_netherite_tool')
      .tagItem('kubejs:command_blocks')
      .blockEntity(entityInfo => {
        entityInfo.inventory(9, 1)
        entityInfo.rightClickOpensInventory()
        entityInfo.serverTick(240, 0, entity => {
          entity.inventory.insertItem('kubejs:zero', false)
          entity.inventory.insertItem('kubejs:one', false)
        })
        entityInfo.attachCapability(
          CapabilityBuilder.ITEM.blockEntity()
            .extractItem((blockEntity, slot, amount, simulate) => blockEntity.inventory.extractItem(slot, amount, simulate))
            .insertItem((blockEntity, slot, stack, simulate) => blockEntity.inventory.insertItem(slot, stack, simulate))
            .getSlots((blockEntity) => blockEntity.inventory.slots)
            .isItemValid((blockEntity, slot, stack) => blockEntity.inventory.isItemValid(slot, stack))
            .availableOn((blockEntity, direction) => direction != Direction.UP)
        )
      })
      .item(ctx => {
        ctx.rarity('epic')
        ctx.fireResistant(true)
      })
  }
  event.create('kubejs:null_storage_block')
    .textureAll('kubejs:block/null_storage')
    .defaultCutout()
    .defaultTranslucent()
    .transparent(true)
    .soundType('netherite_block')
    .blockEntity(entityInfo => {
      entityInfo.inventory(9, 9)
      entityInfo.rightClickOpensInventory()
      entityInfo.attachCapability(
        CapabilityBuilder.ITEM.blockEntity()
          .extractItem((blockEntity, slot, amount, simulate) => blockEntity.inventory.extractItem(slot, amount, simulate))
          .insertItem((blockEntity, slot, stack, simulate) => blockEntity.inventory.insertItem(slot, stack, simulate))
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .isItemValid((blockEntity, slot, stack) => blockEntity.inventory.isItemValid(slot, stack))
          .availableOn((blockEntity, direction) => direction != Direction.UP)
      )
    })
    .item(ctx => {
      ctx.rarity('uncommon')
    })
  event.create('kubejs:dripstone_transitional_stone')
    .textureAll('kubejs:block/dripstone_stone')
    .requiresTool(true)
    .soundType('stone')
    .tagBlock('minecraft:mineable/pickaxe')
})

/**
 * Core fluid registration.
 */

StartupEvents.registry('fluid', event => {
  /**
   * 
   * @param {*} event 
   * @param {string} fluidId 
   * @param {string} displayName 
   * @param {HEX} color 
   */
  let MOLTEN_METAL = (fluidId, displayName, color) => {
    event.create('kubejs:' + fluidId)
      .displayName(displayName)
      .thickTexture(color)
      .bucketColor(color)
      .luminosity(15)
      .tag('minecraft:lava')
  }
  MOLTEN_METAL('molten_iron', '§cMolten Iron', 0xFF8423)
  MOLTEN_METAL('molten_gold', '§eMolten Gold', 0xFDF55F)
  MOLTEN_METAL('molten_copper', '§6Molten Copper', 0xFBAA68)
  MOLTEN_METAL('molten_zinc', '§3Molten Zinc', 0xD3E8D6)
  MOLTEN_METAL('molten_brass', '§eMolten Brass', 0xFDD686)
  MOLTEN_METAL('molten_netherite', '§8Molten Netherite', 0x7E6059)
  event.create('kubejs:dragon_breath')
    .thickTexture(0xB600FF)
    .noBlock()
    .noBucket()
    .displayName('Dragon\'s Breath')
  // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
  event.create('kubejs:condensed_universal_entropy')
    .tag('minecraft:water')
    .thickTexture(0x7800FF)
    .bucketColor(0x7800FF)
    .luminosity(15)
  event.create('kubejs:condensed_universal_order')
    .tag('minecraft:water')
    .thickTexture(0x77D8FF)
    .bucketColor(0x77D8FF)
    .luminosity(15)
  let shimmer = event.create('kubejs:shimmer')
    .flowingTexture('kubejs:block/fluids/shimmer_flow')
    .stillTexture('kubejs:block/fluids/shimmer_still')
  shimmer.bucketItem.texture('kubejs:item/shimmer_bucket')
  shimmer.bucketItem.glow(true)
  // Food related fluids
  event.create('kubejs:mushroom_stew')
    .thinTexture(0xCA9777)
    .bucketColor(0xCA9777)

  if (Platform.isLoaded('caupona')) {
    event.create('kubejs:walnut_oil')
      .thinTexture(0x98630B)
      .bucketColor(0x98630B)
    event.create('kubejs:fig_vinegar')
      .thinTexture(0x2F0700)
      .bucketColor(0x2F0700)
  }

  if (Platform.isLoaded('grimoireofgaia')) {
    event.create('kubejs:nether_wart_jam')
      .thinTexture(0x5C151A)
      .bucketColor(0x5C151A)
  }
})
/*
    event.create('kubejs:slime')
        .thinTexture(0x8CD782)
        .bucketColor(0x8CD782)
    event.create('kubejs:shimmer')
        .thinTexture(0xD6CCFF)
        .bucketColor(0xD6CCFF)
*/

let blacklist = {
  canary: 'Not supported.',
  saturn: 'Not supported.',
  pluto: 'Not supported.',
  smoothboot: 'Not supported',
  createcasing: 'Not supported.',
  createdieselgenerators: 'Not supported.',
  create_confectionery: 'MCreator mod.',
  create_sa: 'MCreator mod. NOT to be confused with Create CRAFTS & Additions which is an actual mod.',
  creategoggles: 'Replaced by Curios API.',
  createsifter: 'Not supported.',
  create_things_and_misc: 'MCreator mod.',
  createutilities: 'Might as well not play Create at all if you are this lazy.',
  cgm: 'Not supported.',
  extendedgears: 'Not supported.',
  alloyed: 'Loves crashing the game on startup and causes other bugs to occur.',
  createendertransmission: 'Might as well not play Create at all if you are this lazy.',
  create_compressed: 'MCreator mod.',
  mekanism: 'Might as well not play Create at all as Mekanism overshadows it.',
  optifine: 'Why are you using OptiFine? Do you want to see rainbows of glitched graphics or a repeat of #forge-bugs in the Create server?',
  immersiveengineering: 'Not supported in this variant of the modpack.',
  unusualend: 'MCreator mod.',
  hammerlib: 'Not supported by KubeJS.',
  solarflux: 'Not supported by KubeJS, requires HammerLib',
  strange: 'Causes the server to stall.',
  lucky: 'Not supported in this variant of the modpack. Also causes bugs.',
  twilightforest: 'Not supported in this variant of the modpack.',
  createunlimited: 'NOT SUPPORTED AT ALL. Remove it.',
  theoneprobe: 'For the best experience and compatibility purposes, stick to Jade.'
}

StartupEvents.postInit(event => {
  for (let [mod, reason] of Object.entries(blacklist)) {
    if (Platform.isLoaded(mod)) {
      console.error(`This mod is not supported: ${mod} - Reason: ${reason}`)
    }
  }
  if (Platform.isClientEnvironment()) {
    if (!Platform.isLoaded('embeddium') && Platform.isLoaded('rubidium')) {
      console.error('This mod is not supported: rubidium - Reason: Embeddium has replaced Rubidium. Stop using Rubidium.')
    }
    if (Platform.isLoaded('oculus')) {
      console.error('Oculus / Iris Shaders are incompatible with a few of the mods in this modpack. Please remove them.')
    }
    if (!Platform.isLoaded('fancymenu')) {
      console.error('It appears that you have removed FancyMenu. Reinstall it to get information for the latest updates.')
    }
  }
  if (!Platform.isLoaded('jei') && Platform.isLoaded('emi')) {
    console.error('For a better experience, keep both JEI and EMI installed to let EMI read custom information for JEI.')
  }
  if (!Platform.isLoaded('rei') && Platform.isLoaded('emi')) {
    console.error('For a smoother experience, keep REI installed and remove EMI.')
  }
})