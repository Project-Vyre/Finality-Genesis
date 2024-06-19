// requires: aether

ItemEvents.modification(event => {
  for (let i = 0; i < TOOLS.length; i++) {
    let tool = TOOLS[i];
    event.modify(`aether:zanite_${tool}`, item => {
      item.maxDamage = 256
    })
    event.modify(`aether:gravitite_${tool}`, item => {
      item.maxDamage = 2048
    })
  }
  event.modify('aether:valkyrie_pickaxe', item => {
    item.maxDamage = -1
  })
  event.modify('aether:valkyrie_axe', item => {
    item.maxDamage = -1
  })
  event.modify('aether:valkyrie_shovel', item => {
    item.maxDamage = -1
  })
  event.modify('aether:valkyrie_hoe', item => {
    item.maxDamage = -1
  })
  event.modify('aether:valkyrie_lance', item => {
    item.maxDamage = -1
  })
  event.modify('aether:flaming_sword', item => {
    item.maxDamage = -1
  })
  event.modify('aether:lightning_sword', item => {
    item.maxDamage = -1
  })
  event.modify('aether:holy_sword', item => {
    item.maxDamage = -1
  })
  event.modify('aether:vampire_blade', item => {
    item.maxDamage = -1
  })
  event.modify('aether:pig_slayer', item => {
    item.maxDamage = -1
  })
  event.modify('aether:hammer_of_kingbdogz', item => {
    item.maxDamage = -1
  })
  event.modify('aether:cloud_staff', item => {
    item.maxDamage = -1
  })
  event.modify('aether:phoenix_bow', item => {
    item.maxDamage = -1
  })
  for (let i = 0; i < ARMOR.length; i++) {
    let armor = ARMOR[i];
    event.modify(`aether:zanite_${armor}`, item => {
      item.maxDamage = 256
    })
    event.modify(`aether:gravitite_${armor}`, item => {
      item.maxDamage = 1024
    })
    event.modify(`aether:valkyrie_${armor}`, item => {
      item.maxDamage = -1
    })
    event.modify(`aether:neptune_${armor}`, item => {
      item.maxDamage = 256
    })
    event.modify(`aether:phoenix_${armor}`, item => {
      item.maxDamage = 1024
    })
    event.modify(`aether:obsidian_${armor}`, item => {
      item.maxDamage = 2048
    })
  }
  event.modify('aether:sentry_boots', item => {
    item.maxDamage = -1
  })
  event.modify('aether:valkyrie_gloves', item => {
    item.maxDamage = -1
  })
})