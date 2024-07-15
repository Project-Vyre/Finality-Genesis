// priority: 5
// requires: kubejs_create

/**
 * @file Creates transitional items for use in Sequenced Assembly recipes, but requires KubeJS Create to be present.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

console.log('KubeJS Create loaded! Registering sequenced assembly items...')

// let DYE_ID = ['white','orange','magenta','light_blue','lime','pink','purple','light_gray','gray','cyan','brown','green','blue','red','black','yellow']
// let DYE_CAPS = ['WHITE','ORANGE','MAGENTA','LIGHT BLUE','LIME','PINK','PURPLE','LIGHT GRAY','GRAY','CYNA','BROWN','GREEN','BLUE','RED','BLACK','YELLOW']
// let DISPLAY_COLOR = ['White', 'Orange', 'Magenta', 'Light Blue', 'Lime', 'Pink', 'Purple', 'Light Gray', 'Gray', 'Cyan', 'Brown', 'Green', 'Blue', 'Red', 'Black', 'Yellow']

let incConcreteProperties = {
  black: { color: 0x37373D },
  blue: { color: 0x4C53AB },
  brown: { color: 0x936C49 },
  cyan: { color: 0x2DC2C2 },
  gray: { color: 0x5E6B6F },
  green: { color: 0x718D26 },
  light_blue: { color: 0x65CEE1 },
  light_gray: { color: 0xA7A79F },
  lime: { color: 0xA9D072 },
  magenta: { color: 0xCC72C8 },
  orange: { color: 0xDBA849 },
  pink: { color: 0xE6C3D1 },
  purple: { color: 0x9743BF },
  red: { color: 0xBE554D },
  white: { color: 0xE4E5E5 },
  yellow: { color: 0xE2DAA9 },
}
let seqDYE = [
  'black',
  'blue',
  'brown',
  'cyan',
  'gray',
  'green',
  'light_blue',
  'light_gray',
  'lime',
  'magenta',
  'orange',
  'pink',
  'purple',
  'red',
  'white',
  'yellow',
]

let incVanillaProperties = {
  amethyst: { color: 0xB18CF0 },
  blue_ice: { color: 0x84ABED },
  coal: { color: 0x363739 },
  coarse_dirt: { color: 0x5D5454 },
  cobblestone: { color: 0x818080 },
  copper: { color: 0xFA977C },
  diamond: { color: 0xA6FCE9 },
  emerald: { color: 0x7DF8AC },
  end_crystal: { color: 0xBE95D4 },
  ender_pearl: { color: 0x2BCBAF },
  glowstone: { color: 0xFFD38F },
  gold: { color: 0xFDF55F },
  gunpowder: { color: 0x888888 },
  honey: { color: 0xF7DB28 },
  iron: { color: 0xE1E1E1 },
  lapis: { color: 0x678DEA },
  netherite: { color: 0x93847D },
  quartz: { color: 0xB19E8F },
  red_sand: { color: 0xD97B30 },
  redstone: { color: 0xFF0000 },
  sand: { color: 0xE3E0C0 },
  sea_lantern: { color: 0x529680 },
  soul_sand: { color: 0x49372C },
  soul_soil: { color: 0x352922 },
  tinted_glass: { color: 0x35283B }
}
let VANILLA = [
  'amethyst',
  'blue_ice',
  'coal',
  'coarse_dirt',
  'cobblestone',
  'copper',
  'diamond',
  'emerald',
  'end_crystal',
  'ender_pearl',
  'glowstone',
  'gold',
  'gunpowder',
  'honey',
  'iron',
  'lapis',
  'netherite',
  'quartz',
  'red_sand',
  'redstone',
  'sand',
  'sea_lantern',
  'soul_sand',
  'soul_soil',
  'tinted_glass',
]

let incCreateProperties = {
  andesite_alloy: { color: 0xB4C1B8 },
  brass: { color: 0xF2C16D },
  builders_tea: { color: 0xE28568 },
  chocolate: { color: 0xE68A65 },
  electron_tube: { color: 0xFFFFFF },
  framed_glass: { color: 0xC2DAD9 },
  precision_mechanism: { color: 0xA7A7A7 },
  rose_quartz: { color: 0xF74572 },
  sturdy_sheet: { color: 0x6F6D80 },
  track: { color: 0x606060 },
  zinc: { color: 0xB5D1BA },
}
let CMAT = [
  'andesite_alloy',
  'brass',
  'builders_tea',
  'chocolate',
  'electron_tube',
  'framed_glass',
  'precision_mechanism',
  'rose_quartz',
  'sturdy_sheet',
  'track',
  'zinc'
]

let PRIMORDIAL_MECHANISMS = [
  'terra_mechanism', // nature related, ingredient for entropy mechanism
  'gluttony_mechanism', // delicacy related, ingredient for entropy mechanism
  'metallurgy_mechanism', // metal related, ingredient for entropy mechanism
  'lattice_mechanism', // crystal related, ingredient for entropy mechanism
  'amorphous_mechanism',
  'umbral_mechanism', // darkness related, ingredient for entropy mechanism
  'genesis_mechanism', // create related, ingredient for entropy mechanism
  'logistics_mechanism',
  'ascendant_mechanism', // experience related, ingredient for entropy mechanism
  'entropy_mechanism' // CONSOLIDATION
]

StartupEvents.registry('item', event => {
  /**
   * 
   * @param {string} itemID 
   * @param {string} displayName 
   * @param {string} texturePath 
   */
  let transitionalItem = (itemID, displayName, texturePath) => {
    event.create(`kubejs:${itemID}`, 'create:sequenced_assembly').displayName(displayName).texture(`kubejs:item/${texturePath}`)
  }
  for (let material of VANILLA) {
    event.create(`kubejs:incomplete_${material}_singularity`, 'create:sequenced_assembly')
      .texture('kubejs:item/incomplete_singularity')
      .color(0, incVanillaProperties[material].color)
      .tag('create:upright_on_belt')
      .maxStackSize(1)
  }
  for (let material of CMAT) {
    event.create(`kubejs:incomplete_${material}_singularity`, 'create:sequenced_assembly')
      .texture('kubejs:item/incomplete_singularity')
      .color(0, incCreateProperties[material].color)
      .tag('create:upright_on_belt')
      .maxStackSize(1)
  }
  // replace with Color.DYE.forEach() on 1902+ as the Colors automatically has all 16 MC colors
  for (let element of seqDYE) {
    event.create(`kubejs:incomplete_concrete_${element}_singularity`, 'create:sequenced_assembly')
      .texture('kubejs:item/incomplete_singularity')
      .color(0, incConcreteProperties[element].color)
      .tag('create:upright_on_belt')
      .maxStackSize(1)
  }
  event.create('kubejs:incomplete_potion_base_singularity', 'create:sequenced_assembly')
    .texture('kubejs:item/incomplete_singularity')
    .color(0, 0x863D11)
    .tag('create:upright_on_belt')
  event.create('kubejs:incomplete_blaze_cake_singularity', 'create:sequenced_assembly')
    .texture('kubejs:item/incomplete_singularity')
    .color(0, 0x3F4A7F)
    .tag('create:upright_on_belt')
  event.create('kubejs:incomplete_enchanted_golden_apple', 'create:sequenced_assembly')
    .texture('minecraft:item/golden_apple')
  if (Platform.isLoaded('salt')) {
    event.create('kubejs:incomplete_salt_singularity', 'create:sequenced_assembly')
      .texture('kubejs:item/incomplete_singularity')
      .color(0, 0xA89A9A)
      .tag('create:upright_on_belt')
      .maxStackSize(1)
  }
  event.create('kubejs:stabilizing_qubit', 'create:sequenced_assembly')
    .texture('kubejs:item/stabilizing_qubit')
  event.create('kubejs:stabilizing_entropy_particles', 'create:sequenced_assembly')
    .texture('kubejs:item/stabilizing_entropy')
  for (let mechanism of PRIMORDIAL_MECHANISMS) {
    event.create(`kubejs:${mechanism}`).texture(`kubejs:item/${mechanism}`).maxStackSize(64).fireResistant(true)
    event.create(`kubejs:incomplete_${mechanism}`, 'create:sequenced_assembly').texture(`kubejs:item/incomplete_${mechanism}`)
  }
  transitionalItem('incomplete_cpu_shape', '§aIncomplete CPU Substrate Shape', 'shapes/incomplete_cpu')
  transitionalItem('incomplete_cpu_substrate_shape', '§aIncomplete CPU Substrate Shape', 'shapes/incomplete_cpu_substrate')
  event.create('kubejs:incomplete_star_of_light_shape', 'create:sequenced_assembly')
    .formattedDisplayName(Component.string('Incomplete Star of Light Shape').yellow())
    .texture('kubejs:item/incomplete_star_of_light_shape')
  event.create('kubejs:incomplete_copper_coin', 'create:sequenced_assembly')
    .texture('kubejs:item/copper_coin')
  event.create('kubejs:incomplete_iron_coin', 'create:sequenced_assembly')
    .texture('kubejs:item/iron_coin')
  event.create('kubejs:incomplete_gold_coin', 'create:sequenced_assembly')
    .texture('kubejs:item/gold_coin')
  event.create('kubejs:incomplete_netherite_coin', 'create:sequenced_assembly')
    .texture('kubejs:item/netherite_coin')
    .fireResistant(true)
  event.create('kubejs:incomplete_entropy_coin', 'create:sequenced_assembly')
    .texture('kubejs:item/entropy_coin')
    .fireResistant(true)
  if (Platform.isLoaded('create_bic_bit')) {
    event.create('kubejs:incomplete_speculaas_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder').tag('create:upright_on_belt')
    event.create('kubejs:incomplete_stroopwafel_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder').tag('create:upright_on_belt')
    event.create('kubejs:incomplete_oliebollen_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder').tag('create:upright_on_belt')
    event.create('kubejs:incomplete_kroket_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder').tag('create:upright_on_belt')
    event.create('kubejs:incomplete_bitterballen_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder').tag('create:upright_on_belt')
    event.create('kubejs:incomplete_frikandel_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder').tag('create:upright_on_belt')
    event.create('kubejs:incomplete_fries_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder').tag('create:upright_on_belt')
    event.create('kubejs:incomplete_churros_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder').tag('create:upright_on_belt')
    event.create('kubejs:incomplete_stamppot_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder').tag('create:upright_on_belt')
    event.create('kubejs:incomplete_bic_bit_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder').tag('create:upright_on_belt')
  }
})