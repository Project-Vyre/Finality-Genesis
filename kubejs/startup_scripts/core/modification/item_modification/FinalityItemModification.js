// requires: finality
// ignored: true

ItemEvents.modification(event => {
  if (Platform.isLoaded('apotheosis')) {
    event.modify('finality:final_sword', item => {
      if (Platform.isLoaded('apotheosis')) { item.attackSpeed = 99 }
    })
  }
})