// requires: quark
// requires: create

ClientEvents.lang('en_us', event => {
  STANDARD_PALETTE('quark:abacus')
  STANDARD_PALETTE('quark:crate')
  event.addAll('quark', {
    "item.quark.abacus.tooltip": "ABACUS",
    "item.quark.abacus.tooltip.summary": "A tool used to measure distance.",
    "item.quark.abacus.tooltip.condition1": "On R-click",
    "item.quark.abacus.tooltip.behaviour1": "Right click on a block face to measure distance.",
    "block.quark.crate.tooltip": "CRATE",
    "block.quark.crate.tooltip.summary": "Can store a total of 640 _unique_ items. Good for storing items with _many_ variations. Not so good for storing items that are the same _and_ stack."
  })
  event.addAll(
    'quark',
    createTooltip('quark:diamond_heart')
      .addSummary('A twinkling heart of diamond, the eye within it staring back at you in curiosity.')
      .addBehaviour([
        'Acquisition',
        'Can be acquired by _breaking_ a Stoneling\'s shell with a _light_ punch. Don\'t worry! The Stoneling is fine. The body is just a shell around its heart.'
      ])
      .addBehaviour([
        'Additional Info',
        'When a Stone block is _right clicked_, the Stoneling will construct a _new_ body out of it. It will also be more _comfortable_ with players after its ride in your inventory.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
})