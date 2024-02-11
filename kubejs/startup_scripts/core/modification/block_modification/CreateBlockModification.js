// requires: create

BlockEvents.modification(event => {
  event.modify('create:industrial_iron_block', block => {
    block.setExplosionResistance(1200)
  })
})