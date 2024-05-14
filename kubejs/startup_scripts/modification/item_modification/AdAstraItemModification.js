// requires: ad_astra

ItemEvents.modification(event => {
  event.modify('ad_astra:netherite_space_helmet', item => {
    item.maxDamage = -1
  })
  event.modify('ad_astra:netherite_space_suit', item => {
    item.maxDamage = -1
  })
  event.modify('ad_astra:netherite_space_pants', item => {
    item.maxDamage = -1
  })
  event.modify('ad_astra:netherite_space_boots', item => {
    item.maxDamage = -1
  })
})