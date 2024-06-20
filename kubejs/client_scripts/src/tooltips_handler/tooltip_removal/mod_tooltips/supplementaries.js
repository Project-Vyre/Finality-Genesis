// requires: supplementaries
// requires: create

ItemEvents.tooltip(event => {
  event.addAdvanced('supplementaries:cage', (item, advanced, text) => {
    text.remove(1)
    // nbt variant keeps the tooltip for whatever reason
    if (item.hasNBT()) { text.remove(1) }
  })
})