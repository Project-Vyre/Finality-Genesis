// requires: pipez
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'pipez',
    createTooltip('pipez:fluid_pipe')
      .addSummary('_Please_ use these as they are _server TPS friendly_ compared to Create\'s own Fluid Pipes.')
      .build()
  )
})