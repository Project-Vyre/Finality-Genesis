// requires: rats

ItemEvents.modification(event => {
  event.modify('rats:plague_scythe', item => {
    item.maxDamage = -1
  })
})