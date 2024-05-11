// requires: jmc
// requires: kubejs_create
// ignored: false

/**
 * @file Item and fluid generation for Just More Cakes! recipe usage.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

StartupEvents.registry('item', event => {
  event.create('kubejs:incomplete_three_tiered_cake', 'create:sequenced_assembly')
    .texture('kubejs:item/cakes/incomplete_three_tiered_cake')
    .tag('create:upright_on_belt')
  event.create('kubejs:red_velvet_cake_base')
    .texture('kubejs:item/cakes/red_velvet_cake_base')
    .tag('create:upright_on_belt')
  event.create('kubejs:red_velvet_cake_base_baked')
    .texture('kubejs:item/cakes/red_velvet_cake_base_baked')
    .tag('create:upright_on_belt')
})

let jmcIcingProperties = {
  carrot: { color: 0xFCF5DF },
  pumpkin: { color: 0xE0A44A },
  melon: { color: 0x33781E },
  cream_cheese: { color: 0xE1DBC8 },
  apple: { color: 0xFBCDCD },
  poison: { color: 0xFCFAFB },
  cookie: { color: 0xE48E41 },
  golden_apple: { color: 0xF0E0A1 },
  red_mushroom: { color: 0xC12726 },
  firey: { color: 0xDCCF33 },
  redstone: { color: 0xFC0000 },
  ender: { color: 0x2F5853 },
  slime: { color: 0x72C061 },
  beetroot: { color: 0x903536 },
  brown_mushroom: { color: 0x926C51 },
  chorus: { color: 0x8C668B },
  sweet_berry: { color: 0xFCFAFB },
  honey: { color: 0xF8EDC7 },
  glowstone: { color: 0xFCBA5D },
  crimson_fungus: { color: 0xFC6400 },
  warped_fungus: { color: 0x13A683 },
  glow_berry: { color: 0xF6F5E8 },
  ice: { color: 0x90B7FB },
}

let jmcIcing = [
  'carrot',
  'pumpkin',
  'melon',
  'cream_cheese',
  'apple',
  'poison',
  'cookie',
  'golden_apple',
  'red_mushroom',
  'firey',
  'redstone',
  'ender',
  'slime',
  'beetroot',
  'brown_mushroom',
  'chorus',
  'sweet_berry',
  'honey',
  'glowstone',
  'crimson_fungus',
  'warped_fungus',
  'glow_berry',
  'ice'
]
StartupEvents.registry('fluid', event => {
  for (let iterator of jmcIcing) {
    event.create(`kubejs:${iterator}_icing`)
      .color(jmcIcingProperties[iterator].color)
      .bucketColor(jmcIcingProperties[iterator].color)
      .stillTexture('kubejs:block/fluids/icing_still')
      .flowingTexture('kubejs:block/fluids/icing_flow')
  }
})

// Not sure if I'm going to need to use this.
/*
let jmc_flavors = [
    'cupcake',
    // chocolate "icing" already exists as create:chocolate
    'carrot',
    'pumpkin',
    'melon',
    'apple',
    'poison',
    'golden_apple',
    'red_mushroom',
    'firey',
    'redstone',
    'ender',
    '', // cheesecake is separate note to self
    '',
]
    for (let i = 0; i < jmc_flavors.length; i++) {
        let type = jmc_flavors[i];
        event.create(`kubejs:incomplete_${type}_cake`, 'create:sequenced_assembly')
            .texture(`kubejs:item/incomplete_cakes/${type}`)
    }
*/