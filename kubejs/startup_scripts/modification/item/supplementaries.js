// requires: supplementaries

ItemEvents.modification(event => {
  event.modify('supplementaries:key', item => {
    item.fireResistant = true
  })
})