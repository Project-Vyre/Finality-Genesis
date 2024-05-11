// requires: summoningrituals

BlockEvents.modification(event => {
  event.modify('summoningrituals:altar', block => {
    block.setExplosionResistance(1200)
  })
})