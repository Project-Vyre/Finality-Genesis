// requires: bhc

ItemEvents.modification(event => {
  event.modify([
    'bhc:red_heart',
    'bhc:yellow_heart',
    'bhc:green_heart',
    'bhc:blue_heart',
    'bhc:red_heart_melted',
    'bhc:yellow_heart_melted',
    'bhc:green_heart_melted',
    'bhc:blue_heart_melted',
    'bhc:red_heart_canister',
    'bhc:yellow_heart_canister',
    'bhc:green_heart_canister',
    'bhc:blue_heart_canister'
  ], item => {
    item.fireResistant = true
  })
  event.modify('bhc:blade_of_vitality', item => {
    item.maxDamage = -1
    item.fireResistant = true
  })
})