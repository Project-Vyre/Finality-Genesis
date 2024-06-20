/**
 * @file Create tooltip generation for Tetra items and blocks.
 */

// requires: tetra
// requires: create
// ignored: true

ClientEvents.lang('en_us', event => {
  event.addAll(
    'tetra',
    createTooltip('tetra:pristine_lapis')
      .addSummary('Yields increased bonuses when used for item improvements. Can be shattered at a workbench, which may yield several regular-quality pieces.')
      .addBehaviour([
        'Other Info',
        'Drops are affected by the fortune enchantment.'
      ])
      .build()
  )
})