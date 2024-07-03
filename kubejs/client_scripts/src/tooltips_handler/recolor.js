ItemEvents.tooltip(event => {
  event.addAdvanced('kubejs:bloodfire_bars', (item, advanced, text) => {
    text.add(0, [Text.of('Bloodfire Bars').color(0xFF0000)])
    text.remove(1)
  })
})