// requires: tesseract
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'tesseract',
    createTooltip('tesseract:tesseract')
      .addSummary('An all in one block for _transportation_ of _matter_. Items, fluids and energy can be transferred between _multiple_ tesseracts at once.')
      .addBehaviour([
        'Usage',
        'You _must_ create a new channel under one of the three categories and _activate_ it on tesseracts that you want connected.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
})