// requires: rats
// requires: create

ItemEvents.tooltip(event => {
  event.addAdvanced('rats:rat_nugget_ore', (item, advanced, text) => {
    text.remove(1)
  })
})