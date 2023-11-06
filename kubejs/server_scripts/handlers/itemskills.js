// ignored: true
// requires: skillslots

/**
 * @file Handler for Skill Slots.
 * @author snownee_ <https://github.com/Snownee> Providing the example basis
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('item', event => {
    event.add('skillslots:skill', [
        '#kubejs:command_blocks',
        '#kubejs:final_tools'
    ])
})

// Of course, you can use KubeJS to create an item, and add some fancy right-click function to it
ItemEvents.firstLeftClicked('kubejs:command_block', event => {
    event.player.tell('<rainb>Command Block</rainb> activated.')
    // Cooldown, works
    event.player.addItemCooldown(event.item, 60)
})

// Here you will know how to get access to the skill slots from a player
ItemEvents.rightClicked('minecraft:emerald', event => {
    let handler = Java.loadClass('snownee.skillslots.SkillSlotsHandler').of(event.player)

    let diamond = Item.of('minecraft:diamond')
    // Here are some NBT options to customize the skill
    diamond.nbt = {}
    diamond.nbt.SkillSlots = {
        UseDuration: 20,
        IconScale: 1.5,
        // CanBeToggled: true, // make your skill work as a passive skill. the player can toggle it on/off
        ChargeCompleteSound: 'minecraft:entity.player.levelup', // leave it empty to mute
    }

    // In config, you can disable the player ability to change skills
    // Here is an example to change the skill through KubeJS
    handler.setItem(0, diamond)

    // Example of checking if the player has a skill that can be toggled and currently activated
    let index = handler.findActivatedPassiveSkill(skill => skill.item.id === 'minecraft:diamond')
    if (index !== -1) {
        let skill = handler.skills.get(index)
        event.player.tell(skill.item.id)
    }
})