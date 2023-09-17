// requires: upgradednetherite
// requires: upgradednetherite_ultimate
// requires: upgradednetherite_creative
// requires: kubejs_create

let UPNETHERITE_TOOLS = ['sword', 'shovel', 'pickaxe', 'axe']
let UPNETHERITE_ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']

ServerEvents.recipes(event => {
    event.remove({ id: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot' })
    // figure out how to setup a shapeless recipe for later
    //UPNETHERITE_INGOTS.forEach(upgrade => {
    //    event.shapeless(`upgradednetherite:${upgrade}_bow`, [
    //        `upgradednetherite:${upgrade}_bow`,
    //        'minecraft:netherite_ingot'
    //    ]).id(`finality:${upgrade}_bow_repair`)
    //})
    event.shapeless('upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot', [
        'upgradednetherite:gold_upgraded_netherite_ingot',
        'upgradednetherite:fire_upgraded_netherite_ingot',
        'upgradednetherite:water_upgraded_netherite_ingot',
        'upgradednetherite:ender_upgraded_netherite_ingot',
        'extendedcrafting:crystaltine_ingot',
        'upgradednetherite:poison_upgraded_netherite_ingot',
        'upgradednetherite:wither_upgraded_netherite_ingot',
        'upgradednetherite:phantom_upgraded_netherite_ingot',
        'upgradednetherite:feather_upgraded_netherite_ingot'
    ]).id('finality:ultimerite_ingot')
    // creativerite assembly
    event.recipes.createSequencedAssembly([
        Item.of('upgradednetherite_creative:creative_upgraded_netherite_ingot').withChance(25.0),
        Item.of('extendedcrafting:ultimate_singularity').withChance(25.0),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:netherite"}').withChance(25.0),
        Item.of('minecraft:netherite_ingot', 8).withChance(25.0),
        'mysticalagriculture:prosperity_shard',
        'minecraft:netherite_block',
        'minecraft:ancient_debris'
    ], 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot', [
        event.recipes.createFilling('extendedcrafting:the_ultimate_ingot', ['extendedcrafting:the_ultimate_ingot', Fluid.of('minecraft:lava', 500)]),
        event.recipes.createDeploying('extendedcrafting:the_ultimate_ingot', ['extendedcrafting:the_ultimate_ingot', 'kubejs:chain_command_block']).keepHeldItem(),
        event.recipes.createPressing('extendedcrafting:the_ultimate_ingot', 'extendedcrafting:the_ultimate_ingot'),
        event.recipes.createPressing('extendedcrafting:the_ultimate_ingot', 'extendedcrafting:the_ultimate_ingot'),
        event.recipes.createPressing('extendedcrafting:the_ultimate_ingot', 'extendedcrafting:the_ultimate_ingot')
    ]).transitionalItem('extendedcrafting:the_ultimate_ingot').loops(16).id('finality:creativerite_ingot')
    // creativerite smithing
    // output left, inputs right
    // creativerite armor
    UPNETHERITE_ARMOR.forEach(armor => {
        event.smithing(`upgradednetherite_creative:creative_upgraded_netherite_${armor}`, `upgradednetherite_ultimate:ultimate_upgraded_netherite_${armor}`, 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id(`finality:creativerite_${armor}`)
    })
    // creativerite tools
    UPNETHERITE_TOOLS.forEach(tool => {
        event.smithing(`upgradednetherite_creative:creative_upgraded_netherite_${tool}`, `upgradednetherite_ultimate:ultimate_upgraded_netherite_${tool}`, 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id(`finality:creativerite_${tool}`)
    })
    event.smithing('upgradedtools:creative_upgraded_netherite_hammer', 'upgradedtools:ultimate_upgraded_netherite_hammer', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_hammer')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_bow', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_bow', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_bow')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_crossbow', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_crossbow', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_crossbow')
    event.smithing('upgradednetherite_items:creative_upgraded_netherite_totem', 'upgradednetherite_items:ultimate_upgraded_netherite_totem', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_totem')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_horse_armor', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_horse_armor', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_horse_armor')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_shield', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_shield', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_shield')
})