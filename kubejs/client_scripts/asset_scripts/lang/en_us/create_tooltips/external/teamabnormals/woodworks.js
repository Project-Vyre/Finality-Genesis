// requires: woodworks
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll('woodworks',
    createTooltip('woodworks:sawmill')
      .addSummary('One crafting station for everything wood related. _Need ladders?_ This has you covered! _Need fences?_ Yup! This can make those too.')
      .setPalette($Palette.YELLOW)
      .build()
  )
})