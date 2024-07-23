// priority: 5

/**
 * @file KubeJS singularity registration.
 * @version 2.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> 
 * Currently, .mcmeta files are written manually.
 */

const vanillaSingularityProperties = {
  amethyst: { top: 0xB18CF0, bottom: 0x533888, name: 'Amethyst' },
  blue_ice: { top: 0x84ABED, bottom: 0x6492EA, name: 'Blue Ice' },
  coal: { top: 0x363739, bottom: 0x261E24, name: 'Coal' },
  coarse_dirt: { top: 0x5D5454, bottom: 0x704F36, name: 'Coarse Dirt' },
  cobblestone: { top: 0x818080, bottom: 0x4E4E4D, name: 'Cobblestone' },
  copper: { top: 0xFA977C, bottom: 0xBC5430, name: 'Copper' },
  diamond: { top: 0xA6FCE9, bottom: 0x1AACA8, name: 'Diamond' },
  emerald: { top: 0x7DF8AC, bottom: 0x008E1A, name: 'Emerald' },
  end_crystal: { top: 0xBE95D4, bottom: 0xE20627, name: 'End Crystal' },
  ender_pearl: { top: 0x2BCBAF, bottom: 0x032620, name: 'Ender Pearl' },
  glowstone: { top: 0xFFD38F, bottom: 0xA06135, name: 'Glowstone' },
  gold: { top: 0xFDF55F, bottom: 0xD98E04, name: 'Gold' },
  gunpowder: { top: 0x888888, bottom: 0x3D3D3D, name: 'Gunpowder' },
  honey: { top: 0xF7DB28, bottom: 0xD26A2A, name: 'Honey' },
  iron: { top: 0xE1E1E1, bottom: 0x6C6C6C, name: 'Iron' },
  lapis: { top: 0x678DEA, bottom: 0x1B53A7, name: 'Lapis Lazuli' },
  netherite: { top: 0x93847D, bottom: 0x24110B, name: 'Netherite' },
  quartz: { top: 0xB19E8F, bottom: 0x6E5C59, name: 'Quartz' },
  red_sand: { top: 0xD97B30, bottom: 0xAC5712, name: 'Red Sand' },
  redstone: { top: 0xFF0000, bottom: 0x8A0901, name: 'Redstone' },
  sand: { top: 0xE3E0C0, bottom: 0xCCBB8E, name: 'Sand' },
  sea_lantern: { top: 0x529680, bottom: 0x48635B, name: 'Sea Lantern' },
  soul_sand: { top: 0x49372C, bottom: 0x352922, name: 'Soul Sand' },
  soul_soil: { top: 0x352922, bottom: 0x46EFF4, name: 'Soul Soil' },
  tinted_glass: { top: 0x35283B, bottom: 0x272528, name: 'Tinted Glass' },
  tnt: { top: 0xD88F50, bottom: 0xB11527, name: 'TNT' }
}
let vanillaSingularities = [
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
  'tnt'
]

const concreteSingularityProperties = {
  concrete_black: { top: 0x37373D, bottom: 0x07090E, name: 'Black' },
  concrete_blue: { top: 0x4C53AB, bottom: 0x2A2C86, name: 'Blue' },
  concrete_brown: { top: 0x936C49, bottom: 0x59371D, name: 'Brown' },
  concrete_cyan: { top: 0x2DC2C2, bottom: 0x146E7E, name: 'Cyan' },
  concrete_gray: { top: 0x5E6B6F, bottom: 0x33363A, name: 'Gray' },
  concrete_green: { top: 0x718D26, bottom: 0x445521, name: 'Green' },
  concrete_light_blue: { top: 0x65CEE1, bottom: 0x2180B9, name: 'Light Blue' },
  concrete_light_gray: { top: 0xA7A79F, bottom: 0x74746B, name: 'Light Gray' },
  concrete_lime: { top: 0xA9D072, bottom: 0x589E17, name: 'Lime' },
  concrete_magenta: { top: 0xCC72C8, bottom: 0x9D2D94, name: 'Magenta' },
  concrete_orange: { top: 0xDBA849, bottom: 0xD15A00, name: 'Orange' },
  concrete_pink: { top: 0xE6C3D1, bottom: 0xC75E85, name: 'Pink' },
  concrete_purple: { top: 0x9743BF, bottom: 0x5D1D90, name: 'Purple' },
  concrete_red: { top: 0xBE554D, bottom: 0x841E1E, name: 'Red' },
  concrete_white: { top: 0xE4E5E5, bottom: 0xC2C7C8, name: 'White' },
  concrete_yellow: { top: 0xE2DAA9, bottom: 0xE1A414, name: 'Yellow' }
}
let concreteSingularities = [
  'concrete_black',
  'concrete_blue',
  'concrete_brown',
  'concrete_cyan',
  'concrete_gray',
  'concrete_green',
  'concrete_light_blue',
  'concrete_light_gray',
  'concrete_lime',
  'concrete_magenta',
  'concrete_orange',
  'concrete_pink',
  'concrete_purple',
  'concrete_red',
  'concrete_white',
  'concrete_yellow'
]

const createSingularityProperties = {
  andesite_alloy: { top: 0xB4C1B8, bottom: 0x505351, name: 'Andesite Alloy' },
  brass: { top: 0xF2C16D, bottom: 0x724C2B, name: 'Brass' },
  builders_tea: { top: 0xE28568, bottom: 0x306815, name: 'Builders Tea' },
  chocolate: { top: 0xE68A65, bottom: 0x632B35, name: 'Chocolate' },
  electron_tube: { top: 0xFFFFFF, bottom: 0x741A41, name: 'Electron Tube' },
  framed_glass: { top: 0xC2DAD9, bottom: 0x73A2AA, name: 'Framed Glass' },
  precision_mechanism: { top: 0xA7A7A7, bottom: 0xF8CA67, name: 'Precision Mechanism' },
  rose_quartz: { top: 0xF74572, bottom: 0x741A41, name: 'Rose Quartz' },
  sturdy_sheet: { top: 0x6F6D80, bottom: 0x292936, name: 'Sturdy Sheet' },
  track: { top: 0x606060, bottom: 0x85573E, name: 'Track' },
  zinc: { top: 0xB5D1BA, bottom: 0x7E806C, name: 'Zinc' },
}
let createSingularities = [
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

StartupEvents.registry('item', event => {
  for (const element of vanillaSingularities) {
    event.create('kubejs:' + element + '_singularity')
      .texture('layer0', 'kubejs:item/singularity')
      .texture('layer1', 'kubejs:item/singularity_overlay')
      .color(0, vanillaSingularityProperties[element].bottom)
      .color(1, vanillaSingularityProperties[element].top)
      .formattedDisplayName(
        Component.string(vanillaSingularityProperties[element].name + ' ' + 'Singularity')
          .color(vanillaSingularityProperties[element].top)
      )
      .rarity('epic')
      .tag('create:upright_on_belt')
  }
  event.create('kubejs:potion_base_singularity').tag('create:upright_on_belt')
  for (const element of createSingularities) {
    event.create('kubejs:' + element + '_singularity')
      .texture('layer0', 'kubejs:item/singularity')
      .texture('layer1', 'kubejs:item/singularity_overlay')
      .color(0, createSingularityProperties[element].bottom)
      .color(1, createSingularityProperties[element].top)
      .formattedDisplayName(
        Component.string(createSingularityProperties[element].name + ' ' + 'Singularity')
          .color(createSingularityProperties[element].top)
      )
      .rarity('epic')
      .tag('create:upright_on_belt')
  }
  event.create('kubejs:blaze_cake_singularity').tag('create:upright_on_belt')
  if (Platform.isLoaded('salt')) {
    event.create('kubejs:salt_singularity')
      .texture('layer0', 'kubejs:item/singularity')
      .texture('layer1', 'kubejs:item/singularity_overlay')
      .color(0, 0x685353)
      .color(1, 0xA89A9A)
      .formattedDisplayName(
        Component.string('Salt Singularity')
          .color(0xA89A9A)
      )
      .tag('create:upright_on_belt')
  }
  for (const element of concreteSingularities) {
    event.create('kubejs:' + element + '_singularity')
      .texture('layer0', 'kubejs:item/singularity')
      .texture('layer1', 'kubejs:item/singularity_overlay')
      .color(0, concreteSingularityProperties[element].bottom)
      .color(1, concreteSingularityProperties[element].top)
      .formattedDisplayName(
        Component.string(concreteSingularityProperties[element].name + ' ' + 'Concrete Singularity')
          .color(concreteSingularityProperties[element].top)
      )
      .rarity('epic')
      .tag('create:upright_on_belt')
  }
  event.create('kubejs:chromatic_concrete_singularity')
    .texture('layer0', 'kubejs:item/singularity')
    .texture('layer1', 'kubejs:item/chromatic_concrete_singularity_overlay')
    .rarity('epic')
    .tag('create:upright_on_belt')
  event.create('kubejs:monochromatic_singularity')
    .texture('layer0', 'kubejs:item/singularity')
    .texture('layer1', 'kubejs:item/monochromatic_singularity_overlay')
    .rarity('epic')
    .tag('create:upright_on_belt')
  if (Platform.isLoaded('ae2')) {
    event.create('kubejs:sky_stone_singularity')
      .texture('layer0', 'kubejs:item/singularity')
      .texture('layer1', 'kubejs:item/singularity_overlay')
      .color(0, 0x394139)
      .color(1, 0x9FFC9A)
      .formattedDisplayName(
        Component.string('Sky Stone Singularity')
          .color(0x9AD0FC)
      )
      .rarity('epic')
      .tag('create:upright_on_belt')
  }
  // final singularity
  event.create('kubejs:final_singularity_stage_nulla')
    .texture('layer0', 'kubejs:item/incomplete_singularity')
    .color(0, 0xD6CCFF)
    .formattedDisplayName(
      Component.join([
        Component.of('|').color(0xD6CCFF).obfuscated(),
        Component.of('Final Singularity').color(0xD6CCFF),
        Component.of('|').color(0xD6CCFF).obfuscated(),
        Component.of(' - ').white(),
        Component.of('Stage: ').white(),
        Component.of('N').lightPurple()
      ])
    )
    .rarity('epic')
    .fireResistant(true)
    .tag('create:upright_on_belt')
  event.create('kubejs:final_singularity_stage_one')
    .texture('layer0', 'kubejs:item/singularity')
    .texture('layer1', 'kubejs:item/shifting_singularity_overlay')
    .color(0, 0x918AAD)
    .color(1, 0xD6CCFF)
    .formattedDisplayName(
      Component.join([
        Component.of('|').color(0xD6CCFF).obfuscated(),
        Component.of('Final Singularity').color(0xD6CCFF),
        Component.of('|').color(0xD6CCFF).obfuscated(),
        Component.of(' - ').white(),
        Component.of('Stage: ').white(),
        Component.of('I').lightPurple()
      ])
    )
    .rarity('epic')
    .fireResistant(true)
    .tag('create:upright_on_belt')
  event.create('kubejs:final_singularity_stage_two')
    .texture('layer0', 'kubejs:item/singularity')
    .texture('layer1', 'kubejs:item/negative_singularity_overlay')
    .color(0, 0x918AAD)
    .color(1, 0xD6CCFF)
    .formattedDisplayName(
      Component.join([
        Component.of('|').color(0xD6CCFF).obfuscated(),
        Component.of('Final Singularity').color(0xD6CCFF),
        Component.of('|').color(0xD6CCFF).obfuscated(),
        Component.of(' - ').white(),
        Component.of('Stage: ').white(),
        Component.of('II').lightPurple()
      ])
    )
    .rarity('epic')
    .fireResistant(true)
    .tag('create:upright_on_belt')
  event.create('kubejs:final_singularity_stage_three')
    .texture('layer0', 'kubejs:item/singularity')
    .texture('layer1', 'kubejs:item/null_matter')
    .texture('layer2', 'kubejs:item/null_matter_overlay')
    .color(0, 0x918AAD)
    .color(1, 0xD6CCFF)
    .formattedDisplayName(
      Component.join([
        Component.of('|').color(0xD6CCFF).obfuscated(),
        Component.of('Final Singularity').color(0xD6CCFF),
        Component.of('|').color(0xD6CCFF).obfuscated(),
        Component.of(' - ').white(),
        Component.of('Stage: ').white(),
        Component.of('III').lightPurple()
      ])
    )
    .rarity('epic')
    .fireResistant(true)
    .tag('create:upright_on_belt')
  event.create('kubejs:final_singularity_stage_four')
    .texture('layer0', 'kubejs:item/null_matter')
    .texture('layer1', 'kubejs:item/shifting_singularity_overlay')
    .texture('layer2', 'kubejs:item/null_matter_overlay')
    .color(0, 0x918AAD)
    .color(1, 0xD6CCFF)
    .formattedDisplayName(
      Component.join([
        Component.of('|').color(0xD6CCFF).obfuscated(),
        Component.of('Final Singularity').color(0xD6CCFF),
        Component.of('|').color(0xD6CCFF).obfuscated(),
        Component.of(' - ').white(),
        Component.of('Stage: ').white(),
        Component.of('IV').lightPurple()
      ])
    )
    .rarity('epic')
    .fireResistant(true)
    .tag('create:upright_on_belt')
  event.create('kubejs:final_singularity')
    .texture('layer0', 'kubejs:item/null_matter')
    .texture('layer1', 'kubejs:item/singularity_overlay')
    .texture('layer2', 'kubejs:item/null_matter_overlay')
    .color(0, 0x918AAD)
    .color(1, 0xD6CCFF)
    .formattedDisplayName(
      Component.join([
        Component.of('|').obfuscated(),
        Component.of('True Final Singularity'),
        Component.of('|').obfuscated()
      ]).color(0xD6CCFF)
    )
    .rarity('epic')
    .fireResistant(true)
    .tag('create:upright_on_belt')
  if (Platform.isLoaded('create_bic_bit')) {
    event.create('kubejs:speculaas_singularity').tag('create:upright_on_belt')
    event.create('kubejs:stroopwafel_singularity').tag('create:upright_on_belt')
    event.create('kubejs:oliebollen_singularity').tag('create:upright_on_belt')
    event.create('kubejs:kroket_singularity').tag('create:upright_on_belt')
    event.create('kubejs:bitterballen_singularity').tag('create:upright_on_belt')
    event.create('kubejs:frikandel_singularity').tag('create:upright_on_belt')
    event.create('kubejs:fries_singularity').tag('create:upright_on_belt')
    event.create('kubejs:churros_singularity').tag('create:upright_on_belt')
    event.create('kubejs:stamppot_singularity').tag('create:upright_on_belt')
    event.create('kubejs:bic_bit_singularity').displayName('Create: Bitterballen Singularity').tag('create:upright_on_belt')
  }
})

/*
let components = []
function singularityColorBuilder(topColor, bottomColor) {
    components.push({
        top: topColor,
        bottom: bottomColor
    })
}
    for (let i = 0; i < Color.DYE.length; i++) {
        const element = Color.DYE[i];

    }
*/