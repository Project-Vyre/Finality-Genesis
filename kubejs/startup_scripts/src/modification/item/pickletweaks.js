// requires: pickletweaks

ItemEvents.modification(event => {
  event.modify('pickletweaks:netherite_paxel', item => {
    item.maxDamage = 4096
  })
  event.modify('pickletweaks:netherite_sickle', item => {
    item.maxDamage = 4096
  })
  event.modify('pickletweaks:netherite_scythe', item => {
    item.maxDamage = 4096
  })
})