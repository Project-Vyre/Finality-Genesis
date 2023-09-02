// requires: enigmaticlegacy

let EL_TOOLS = ['sword', 'shovel', 'pickaxe', 'axe', 'scythe']

ItemEvents.modification(event => {
    EL_TOOLS.forEach(insert => {
        event.modify(`enigmaticlegacy:etherium_${insert}`, item => {
            item.maxDamage = -1
            item.fireResistant = true
        })
    })
    ARMOR.forEach(insert => {
        event.modify(`enigmaticlegacy:etherium${insert}`, item => {
            item.maxDamage = -1
            item.fireResistant = true
        })
    })
})