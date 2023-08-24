// requires: caupona
// requires: create

let panMaterials = [
    'copper',
    'iron'
]

ServerEvents.recipes(event => {
    panMaterials.forEach(material => {
        event.shaped(`caupona:${material}_frying_pan`, [
            'MM ',
            'MMS'
        ], {
            M: `create:${material}_sheet`,
            S: 'minecraft:stick'
        }).id(`caupona:crafting/${material}_frying_pan`)
    })
})