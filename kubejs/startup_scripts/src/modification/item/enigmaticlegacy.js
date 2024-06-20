// requires: enigmaticlegacy

ItemEvents.modification(event => {
  let EL_TOOLS = ['sword', 'shovel', 'pickaxe', 'axe', 'scythe']
  for (let i = 0; i < EL_TOOLS.length; i++) {
    let insert = EL_TOOLS[i];
    event.modify(`enigmaticlegacy:etherium_${insert}`, item => {
      item.maxDamage = -1
      item.fireResistant = true
    })
  }
  for (let i = 0; i < ARMOR.length; i++) {
    let insert = ARMOR[i];
    event.modify(`enigmaticlegacy:etherium_${insert}`, item => {
      item.maxDamage = -1
      item.fireResistant = true
    })
  }
  event.modify('enigmaticlegacy:astral_breaker', item => {
    item.maxDamage = -1
    item.fireResistant = true
  })
  event.modify('enigmaticlegacy:forbidden_axe', item => {
    item.maxDamage = 2048
    item.fireResistant = true
  })
})