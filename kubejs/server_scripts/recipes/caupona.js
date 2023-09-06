// requires: caupona
// requires: create

console.log("If one certain recipe from Caupona errors with KubeJS, it is a concurrency issue with Rhino.")
console.log("DO NOT issue a bug report related to this issue to the mod author!")

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