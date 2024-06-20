// requires: lilwings

ItemEvents.modification(event => {
  event.modify('lilwings:enderfly_net', item => {
    item.maxDamage = -1
    item.fireResistant = true
  })
})