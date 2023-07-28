let ARMOR = ['helmet','chestplate','leggings','boots']
let TOOLS = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
let inferium_durability = 2048
let prudentium_durability = 4096
let tertium_durability = 4096
let imperium_durability = 8192

ItemEvents.modification(event => {
    TOOLS.forEach(instool => {
        event.modify(`mysticalagriculture:inferium_${instool}`, item => {
            item.maxDamage = inferium_durability
        })
    })
    TOOLS.forEach(instool => {
        event.modify(`mysticalagriculture:prudentium_${instool}`, item => {
            item.maxDamage = prudentium_durability
        })
    })
    TOOLS.forEach(instool => {
        event.modify(`mysticalagriculture:tertium_${instool}`, item => {
            item.maxDamage = tertium_durability
        })
    })
    TOOLS.forEach(instool => {
        event.modify(`mysticalagriculture:imperium_${instool}`, item => {
            item.maxDamage = imperium_durability
        })
    })
})