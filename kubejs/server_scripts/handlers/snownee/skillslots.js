// requires: skillslots
// ignored: false

/**
 * @file Handler for Skill Slots.
 * @author snownee_ <https://github.com/Snownee> Providing the example basis
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('item', event => {
    event.add('skillslots:skill', [
        '#kubejs:command_blocks',
        '#kubejs:final_tools',
        'minecraft:clock'
    ])
})

let standard_skilljs = true
let nbt_skilljs = false
let example_debug = false

if (standard_skilljs) {
    ItemEvents.firstLeftClicked('kubejs:command_block', event => {
        event.player.tell('<rainb>Command Block</rainb> function activated.')
    
        event.player.addItemCooldown(event.item, 60)
    })

    ItemEvents.rightClicked('minecraft:clock', event => {
        const { player, item } = event
        const handler = Java.loadClass('snownee.skillslots.SkillSlotsHandler').of(player)
        item.nbt = {}
        item.nbt.SkillSlots = {
            UseDuration: 25,
            IconScale: 1.0,
            ChargeCompleteSound: 'minecraft:entity.player.levelup'
        }
        if (!player.cooldowns.isOnCooldown(item) && !player.isShiftKeyDown()) {
            player.addItemCooldown(item, 25)
            player.tell('30 seconds have passed, at the cost of some hunger.')
            player.potionEffects.add('minecraft:hunger', 10, 255, false, false)
            Utils.server.runCommandSilent('time add 30s')
        }
        if (!player.cooldowns.isOnCooldown(item) && player.isShiftKeyDown()) {
            player.addItemCooldown(item, 120)
            player.tell('120 seconds have passed, at the cost of your life.')
            player.setSaturation(0)
            player.potionEffects.add('minecraft:wither', 200, 3, false, false)
            player.potionEffects.add('minecraft:hunger', 200, 255, false, false)
            Utils.server.runCommandSilent('time add 120s')
        }
    })
}

if (nbt_skilljs) {
    ItemEvents.firstLeftClicked('minecraft:clock', event => {
        const handler = Java.loadClass('snownee.skillslots.SkillSlotsHandler').of(event.player)
        event.player.tell('Clock function switched.')
    
        handler.setItem(0, item)
        const index = handler.find(skill => skill.item.id === 'minecraft:clock')
        switch (index++) {
            case 0:
                event.player.tell('First function')
                break;
            case 1:
                event.player.tell('Second function')
                break;
            case 2:
                event.player.tell('Third function')
                break;
            case 3:
                handler.setItem(0, item)
                event.player.tell('Cycled back to first function.')
                break;
            default:
                break;
        }
        if (index !== -1) {
            let skill = handler.skills.get(index)
            event.player.tell(skill.item.id)
        }
    })
    ItemEvents.firstRightClicked('minecraft:clock', event => {
        const { player, item } = event
        const handler = Java.loadClass('snownee.skillslots.SkillSlotsHandler').of(player)
    
        item.nbt = {}
        item.nbt.SkillSlots = {
            UseDuration: 25,
            IconScale: 1.5,
            ChargeCompleteSound: 'minecraft:entity.player.levelup'
        }
    
        if (handler.skills.get(index) == 1 && !player.cooldowns.isOnCooldown(item)) {
            player.addItemCooldown(item, 25)
            player.tell('Time has been added.')
            Utils.server.runCommandSilent('time add 10s')
        } else if (handler.skills.get(index) == 2) {
            player.setSaturation(0)
            player.potionEffects.add('minecraft:wither', 200, 3, false, false)
            player.potionEffects.add('minecraft:slowness', 200, 3, false, false)
            player.tell('The clock ages your life away and slows your movement in refusal.')
        }
    })
}

if (example_debug) {
    ServerEvents.tags('item', event => {
        event.add('skillslots:skill', 'minecraft:diamond')
    })
    // Of course, you can use KubeJS to create an item, and add some fancy right-click function to it
    ItemEvents.rightClicked('minecraft:diamond', event => {
        event.player.tell('You right clicked a diamond!')
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
}
//ItemEvents.firstRightClicked('minecraft:clock', event => {
//    let handler = Java.loadClass('snownee.skillslots.SkillSlotsHandler').of(event.player)
//
//    let clock = Item.of('minecraft:clock')
//
//    clock.nbt = {}
//    clock.nbt.SkillSlots = {
//        UseDuration: 20,
//        IconScale: 1.5,
//        ChargeCompleteSound: 'minecraft:entity.player.levelup'
//    }
//
//    handler.setItem(0, clock)
//})

// Here you will know how to get access to the skill slots from a player
//ItemEvents.rightClicked('minecraft:clock', event => {
//    let handler = Java.loadClass('snownee.skillslots.SkillSlotsHandler').of(event.player)
//
//    let diamond = Item.of('minecraft:diamond')
//    // Here are some NBT options to customize the skill
//    diamond.nbt = {}
//    diamond.nbt.SkillSlots = {
//        UseDuration: 20,
//        IconScale: 1.5,
//        // CanBeToggled: true, // make your skill work as a passive skill. the player can toggle it on/off
//        ChargeCompleteSound: 'minecraft:entity.player.levelup', // leave it empty to mute
//    }
//
//    // In config, you can disable the player ability to change skills
//    // Here is an example to change the skill through KubeJS
//    handler.setItem(0, diamond)
//
//    // Example of checking if the player has a skill that can be toggled and currently activated
//    let index = handler.findActivatedPassiveSkill(skill => skill.item.id === 'minecraft:diamond')
//    if (index !== -1) {
//        let skill = handler.skills.get(index)
//        event.player.tell(skill.item.id)
//    }
//})