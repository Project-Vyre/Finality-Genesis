let T2_TOOLS = 2048
let T3_TOOLS = 4096
let T2_ARMOR = 1024
let T3_ARMOR = 2048
let TOOLS = ['sword','shovel','pickaxe','axe','hoe','bow','crossbow']
let ARMOR = ['helmet','chestplate','leggings','boots']
let T2 = ['gold_upgraded', 'fire_upgraded', 'ender_upgraded', 'water_upgraded', 'wither_upgraded', 'poison_upgraded', 'phantom_updgraded', 'feather_upgraded']
let T3 = ['echo_upgraded', 'corrupt_upgraded']
ItemEvents.modification(event => {
    for(let i = 0; i < T2.length; i++){
        for(let j = 0; j < TOOLS.length; j++){
            event.modify(`upgradednetherite:${T2[i]}_netherite_${TOOLS[j]}`, item => { item.maxDamage = T2_TOOLS })
        }
    }
    for(let i = 0; i < T3.length; i++){
        for(let j = 0; j < TOOLS.length; j++){
            event.modify(`upgradednetherite:${T3[i]}_netherite_${TOOLS[j]}`, item => { item.maxDamage = T3_TOOLS })
        }
    }
    TOOLS.forEach(ult => {
        event.modify(`upgradednetherite_ultimate:ultimate_upgraded_netherite_${ult}`, item => { item.maxDamage = T3_TOOLS })
    })
    // shields
    event.modify('upgradednetherite:netherite_shield', item => {
        item.maxDamage = 512
    })
    T2.forEach(upgrade => {
        event.modify(`upgradednetherite:${upgrade}_netherite_shield`, item => {
            item.maxDamage = 512
        })
    })
    T3.forEach(upgrade => {
        event.modify(`upgradednetherite:${upgrade}_netherite_shield`, item => {
            item.maxDamage = 1024
        })
    })
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_shield', item => {
        item.maxDamage = 1024
    })
    // armor adjustments
    for(let i = 0; i < T2.length; i++){
        for(let j = 0; j < ARMOR.length; j++){
            event.modify(`upgradednetherite:${T2[i]}_netherite_${ARMOR[j]}`, item => { item.maxDamage = T2_ARMOR })
        }
    }
    for(let i = 0; i < T3.length; i++){
        for(let j = 0; j < ARMOR.length; j++){
            event.modify(`upgradednetherite:${T3[i]}_netherite_${ARMOR[j]}`, item => { item.maxDamage = T3_ARMOR })
        }
    }
    // gold netherite armor
    event.modify('upgradednetherite:gold_upgraded_netherite_helmet', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_chestplate', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_leggings', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_boots', item => {
        item.maxDamage = T2_ARMOR
    })
    // water netherite armor
    event.modify('upgradednetherite:water_upgraded_netherite_helmet', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:water_upgraded_netherite_chestplate', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:water_upgraded_netherite_leggings', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:water_upgraded_netherite_boots', item => {
        item.maxDamage = T2_ARMOR
    })
    // fire netherite armor
    event.modify('upgradednetherite:fire_upgraded_netherite_helmet', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_chestplate', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_leggings', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_boots', item => {
        item.maxDamage = T2_ARMOR
    })
    // ender netherite armor
    event.modify('upgradednetherite:ender_upgraded_netherite_helmet', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_chestplate', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_leggings', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_boots', item => {
        item.maxDamage = T2_ARMOR
    })
    // wither netherite armor
    event.modify('upgradednetherite:wither_upgraded_netherite_helmet', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:wither_upgraded_netherite_chestplate', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:wither_upgraded_netherite_leggings', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:wither_upgraded_netherite_boots', item => {
        item.maxDamage = T2_ARMOR
    })
    // poison netherite armor
    event.modify('upgradednetherite:poison_upgraded_netherite_helmet', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:poison_upgraded_netherite_chestplate', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:poison_upgraded_netherite_leggings', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:poison_upgraded_netherite_boots', item => {
        item.maxDamage = T2_ARMOR
    })
    // phantom netherite armor
    event.modify('upgradednetherite:phantom_upgraded_netherite_helmet', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:phantom_upgraded_netherite_chestplate', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:phantom_upgraded_netherite_leggings', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:phantom_upgraded_netherite_boots', item => {
        item.maxDamage = T2_ARMOR
    })
    // feather netherite armor
    event.modify('upgradednetherite:feather_upgraded_netherite_helmet', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:feather_upgraded_netherite_chestplate', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:feather_upgraded_netherite_leggings', item => {
        item.maxDamage = T2_ARMOR
    })
    event.modify('upgradednetherite:feather_upgraded_netherite_boots', item => {
        item.maxDamage = T2_ARMOR
    })
    // corrupt netherite armor
    event.modify('upgradednetherite:corrupt_upgraded_netherite_helmet', item => {
        item.maxDamage = T3_ARMOR
    })
    event.modify('upgradednetherite:corrupt_upgraded_netherite_chestplate', item => {
        item.maxDamage = T3_ARMOR
    })
    event.modify('upgradednetherite:corrupt_upgraded_netherite_leggings', item => {
        item.maxDamage = T3_ARMOR
    })
    event.modify('upgradednetherite:corrupt_upgraded_netherite_boots', item => {
        item.maxDamage = T3_ARMOR
    })
    // ultimate netherite armor
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_helmet', item => {
        item.maxDamage = T3_ARMOR
    })
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_chestplate', item => {
        item.maxDamage = T3_ARMOR
    })
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_leggings', item => {
        item.maxDamage = T3_ARMOR
    })
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_boots', item => {
        item.maxDamage = T3_ARMOR
    })
})