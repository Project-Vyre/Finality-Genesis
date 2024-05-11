// requires: salt
// requires: create

ClientEvents.lang('en_us', event => {
  STANDARD_PALETTE('salt:salt')
  event.addAll('salt', {
    "item.salt.salt.tooltip": "SALT",
    "item.salt.salt.tooltip.summary": "Food can now be salted to improve the _taste_ and add _nutrition_.",
    "item.salt.salt.tooltip.condition1": "Usage",
    "item.salt.salt.tooltip.behaviour1": "Combine with food in the crafting grid tagged with the _'salt:can be salted'_ tag. Multiple mods, including _Farmer's Delight_ are _natively supported_.",
    "item.salt.salt.tooltip.condition2": "Acquisition",
    "item.salt.salt.tooltip.behaviour2": "Rock salt can generate underground in _dripstone caves_, the _ocean_ and _beach biomes_. When harvested, _Rock Salt Ore_ will drop _Raw Rock Salt_ which is then _crafted_ into _Salt_.",
    "item.salt.salt.tooltip.condition3": "Renewal",
    "item.salt.salt.tooltip.behaviour3": "Salt can be obtained by _growing_ your own Salt Crystals or by the _evaporation_ of water in a cauldron.",
    "item.salt.salt.tooltip.condition4": "Additional Usage",
    "item.salt.salt.tooltip.behaviour4": "Salt blocks will _melt_ adjacent ice and snow blocks. Ice and snow can also be _melted_ by _sprinkling salt_ over them."
  })
})