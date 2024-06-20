// requires: malum

ItemEvents.modification(event => {
  event.modify('malum:tyrving', item => {
    item.maxDamage = 4096
    item.attackDamage = 20
    if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 2 }
    if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -1.5 }
  })
})