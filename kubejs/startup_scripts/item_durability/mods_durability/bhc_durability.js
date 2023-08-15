// requires: bhc

ItemEvents.modification(event => {
    event.modify('bhc:blade_of_vitality', item => {
        item.maxDamage = -1
        item.fireResistant = true
    })
})