/**
 * @file Create tooltip generation for Tetra items and blocks.
 */

// requires: tetra
// requires: create
// ignored: false

ClientEvents.lang('en_us', event => {
  event.addAll(
    'tetra',
    createTooltip('tetra:basic_workbench')
      .addSummary('The basic workbench, the _beginning_ of your journey with Tetra.')
      .addBehaviour([
        'Acquisition',
        'Right click a Crafting Table _with_ a hammer from Tetra.'
      ])
      .addBehaviour([
        'The Fine Text',
        'Netherite tools made with Tetra are _not_ unbreakable. This is outside of my control.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:holo')
      .addSummary('At a touch, the sphere _projects_ diagrams and glyphs onto nothingness. It doesn\'t seem to have any obvious light projection source either.')
      .addBehaviour([
        'On R-Click',
        'Opens the interface.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:rack')
      .addSummary('Items can be _hung_ on the rack to utilize with a Workbench placed directly below.')
      .addBehaviour([
        'On R-Click',
        'Adds or removes an item from the rack slot you are looking at.'
      ])
      .addBehaviour([
        'Additional Info',
        'Tools hung on the Rack near the Workbench become available for use as if it was in the player\'s inventory. It also has to be within a _3x3x3_ area centered one block above the workbench for this to work.'
      ])
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:geode')
      .addSummary('Presents _glimmer_ from within in the presence of light.')
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:pristine_lapis')
      .addSummary('Yields increased bonuses when used for item improvements.')
      .addBehaviour([
        'When shattered',
        'Can be shattered at a Workbench, which may yield several _standard_ quality pieces.'
      ])
      .addBehaviour([
        'Other Info',
        'Drops are _affected_ by the fortune enchantment.'
      ])
      .setPalette($Palette.GRAY_AND_BLUE)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:pristine_emerald')
      .addSummary('Yields increased bonuses when used for item improvements.')
      .addBehaviour([
        'When shattered',
        'Can be shattered at a Workbench, which may yield several _standard_ quality pieces.'
      ])
      .addBehaviour([
        'Other Info',
        'Drops are _affected_ by the fortune enchantment.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:pristine_diamond')
      .addSummary('Yields increased bonuses when used for item improvements.')
      .addBehaviour([
        'When shattered',
        'Can be shattered at a Workbench, which may yield several _standard_ quality pieces.'
      ])
      .addBehaviour([
        'Other Info',
        'Drops are _affected_ by the fortune enchantment.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:pristine_amethyst')
      .addSummary('Yields increased bonuses when used for item improvements.')
      .addBehaviour([
        'When shattered',
        'Can be shattered at a Workbench, which may yield several _standard_ quality pieces.'
      ])
      .addBehaviour([
        'Other Info',
        'Drops are _affected_ by the fortune enchantment.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:dragon_sinew')
      .addSummary('It is but a ligament from the ephemeral remains of the Ender Dragon.')
      .addBehaviour([
        'Acquisition',
        'Found _suspended_ in the air where an Ender Dragon has perished.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  let forged_single_line = [
    'tetra:forged_bolt',
    'tetra:forged_beam',
    'tetra:forged_mesh',
  ]
  for (let i = 0; i < forged_single_line.length; i++) {
    let element = forged_single_line[i];
    event.addAll(
      'tetra',
      createTooltip(element)
        .addSummary('Found in structures located deep underground in _cold_ or _mountainous_ biomes.')
        .setPalette($Palette.GRAY)
        .build()
    )
  }
  event.addAll(
    'tetra',
    createTooltip('tetra:quick_latch')
      .addSummary('Reveals related upgrade schematics while in the inventory.')
      .addBehaviour([
        'Acquisition',
        'Found in structures located deep underground in _cold_ or _mountainous_ biomes.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:metal_scrap')
      .addSummary('Errant shapes of metal. Their use undone or never to be known. However, in your hands awaits a purpose anew.')
      .addBehaviour([
        'Acquisition',
        'Found in structures located deep underground in _cold_ or _mountainous_ biomes.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:vent_plate')
      .addSummary('Can be _attached_ to a Forge Hammer or a Transfer Unit to _increase_ its efficiency.')
      .addBehaviour([
        'Acquisition',
        'Found in structures located deep underground in _cold_ or _mountainous_ biomes.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:planar_stabilizer')
      .addSummary('Can be _attached_ to a Forge Hammer. Causes major modules crafted with the hammer to _slightly_ improve the stats of the item.')
      .addBehaviour([
        'Acquisition',
        'Found in structures located deep underground in _cold_ or _mountainous_ biomes.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:combustion_chamber')
      .addSummary('Can be _attached_ to a Forge Hammer to increase its hammer tier by 1.')
      .addBehaviour([
        'Additional Info',
        'On use, the Forge Hammer may set _nearby_ blocks on fire. Take caution!'
      ])
      .addBehaviour([
        'Acquisition',
        'Found in structures located deep underground in _cold_ or _mountainous_ biomes.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:lubricant_dispenser')
      .addSummary('Can be _attached_ to a Forge Hammer to reduce the chance for it to jam by _50%_')
      .addBehaviour([
        'Acquisition',
        'Found in structures located deep underground in _cold_ or _mountainous_ biomes.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:thermal_cell')
      .addSummary('Found in structures located deep underground in _cold_ or _mountainous_ biomes.')
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:earthpiercer')
      .addSummary('This artifact hums violently.')
      .addBehaviour([
        'Usage',
        'Combine with two sticks in a Crafting Table or use as a head for a single headed tool in a Workbench to craft a _powerful_ mining tool.'
      ])
      .addBehaviour([
        'Acquisition',
        'Found in structures located deep underground in _cold_ or _mountainous_ biomes.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:stonecutter')
      .addSummary('This artifact hums violently.')
      .addBehaviour([
        'Usage',
        'Combine with a stick in a Crafting Table or use as a sword blade in a Workbench to craft a _powerful_ mining tool.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:chthonic_extractor')
      .addSummary('Hammer into Bedrock to extract minerals.')
      .addBehaviour([
        'Additional Info - 1',
        'Subsequently hammering extractors into the same fracture increases the yield.'
      ])
      .addBehaviour([
        'Additional Info - 2',
        'Slightly increased yield in biomes inhabited by husks, strays or witches such as cold, desert or swamp biomes.'
      ])
      .addBehaviour([
        'Acquisition',
        'Found in structures located deep underground in _cold_ or _mountainous_ biomes.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  let forged_blocks = [
    'tetra:forged_wall',
    'tetra:forged_pillar',
    'tetra:forged_platform',
    'tetra:forged_platform_slab',
    'tetra:forged_vent',
    'tetra:forged_workbench',
    'tetra:core_extractor',
    'tetra:extractor_pipe',
    'tetra:transfer_unit'
  ]
  for (let i = 0; i < forged_blocks.length; i++) {
    let element = forged_blocks[i];
    event.addAll(
      'tetra',
      createTooltip(element)
        .addSummary('Found in the ancient ruins located deep underground in _cold_ or _mountainous_ biomes.')
        .addBehaviour([
          'Additional Info',
          'Can\'t be mined with your typical tools and must be delicately deconstructed by precursor material equipment.'
        ])
        .setPalette($Palette.GRAY)
        .build()
    )
  }
  event.addAll(
    'tetra',
    createTooltip('tetra:forged_crate')
      .addSummary('Found in the ancient ruins located deep undergrund in _cold_ or _mountainous_ biomes.')
      .addBehaviour([
        'To Open',
        'Requires _special_ tools to open.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:hammer_base')
      .addSummary('Found in the ancient ruins located deep undergrund in _cold_ or _mountainous_ biomes.')
      .addBehaviour([
        'Dimensions',
        '[1x2x1 multiblock]'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'tetra',
    createTooltip('tetra:core_extractor')
      .addSummary('Found in the ancient ruins located deep undergrund in _cold_ or _mountainous_ biomes.')
      .addBehaviour([
        'Dimensions',
        '[1x2x1 multiblock]'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
})