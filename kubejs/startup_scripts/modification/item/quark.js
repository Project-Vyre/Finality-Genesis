// requires: quark

ItemEvents.modification(event => {
  event.modify('quark:flamerang', item => {
    item.maxDamage = -1
  })
})