// requires: aquamirae

let LEGENDARY = ['whisper_of_the_abyss', 'coral_lance', 'divider']
let ABYSS_ARMOR = ['heaume', 'brigantine', 'leggings', 'boots']

ItemEvents.modification(event => {
    LEGENDARY.forEach(insert => {
        event.modify(`aquamirae:${insert}`, item => {
            item.maxDamage = -1
            item.fireResistant = true
        })
    })
    ABYSS_ARMOR.forEach(insert => {
        event.modify(`aquamirae:abyssal_${insert}`, item => {
            item.maxDamage = -1
            item.fireResistant = true
        })
    })
    event.modify('aquamirae:maze_rose', item => {
        item.maxDamage = -1
        item.fireResistant = true
    })
})