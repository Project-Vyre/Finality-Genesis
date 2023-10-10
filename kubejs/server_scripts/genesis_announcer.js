// requires: create

/**
 * Authors
 * 
 * @CelestialAbyss
 * @squoshi Proposing the switch function
 * @pietro-lopes For fixing the math portion
 */

/**
 * 360 for every few seconds | 7200 for 6 minutes | 36000 for 30 minutes
 * 
 * (30 * 60 * 20)
 */

/**
 * @CreateStandard 0xC9974C
 */
let CreateStandard = 0xC9974C

/**
 * @CreateHighlighted 0xF1DD79
 */
let CreateHighlighted = 0xF1DD79

let DICE = 0

let debug_messages = false

function allMessages(event) {
    DICE = Utils.random.nextInt(0, 17)
    switch (DICE) {
        case 0:
            /**
             * Stuck? Remember to hold [w] to Ponder!
             * 
             * Certain Ponders for Create related blocks and items can have more than one Ponder scene.
             * 
             * Check the bottom of your screen for the controls to see if there are any arrows pointing to
             * the right to go to the next scene!
             * 
             * If the Ponder scene is too fast for you, click through the timeline bar like you would in a YouTube video or
             * toggle Comfy Reading on the bottom right corner of the screen while viewing a Ponder scene.
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Stuck? ').color(CreateHighlighted),
                Component.of('Remember to hold <rainb>[w]</rainb> to Ponder!\n').color(CreateStandard),
                Component.of('\nCertain ').bold().italic().color(CreateHighlighted),
                Component.of('Ponders ').color(CreateHighlighted),
                Component.of('for ').color(CreateStandard),
                Component.of('Create ').color(CreateHighlighted),
                Component.of('related blocks and items ').color(CreateStandard),
                Component.of('can ').italic().color(CreateHighlighted),
                Component.of('have ').underlined().color(CreateHighlighted),
                Component.of('more ').italic().underlined().color(CreateHighlighted),
                Component.of('than one').underlined().color(CreateHighlighted),
                Component.of(' Ponder scene.\n').color(CreateStandard),
                Component.of('\nCheck the ').color(CreateStandard),
                Component.of('bottom of your screen').underlined().color(CreateHighlighted),
                Component.of(' for the ').color(CreateStandard),
                Component.of('controls').underlined().color(CreateHighlighted),
                Component.of(' to see if there are any arrows ').color(CreateStandard),
                Component.of('pointing ').italic().color(CreateHighlighted),
                Component.of('to the right ').color(CreateHighlighted),
                Component.of('to go to the ').color(CreateStandard),
                Component.of('next scene').color(CreateHighlighted),
                Component.of('!\n').color(CreateStandard),
                Component.of('\nIf ').italic().color(CreateStandard),
                Component.of('the Ponder scene is ').color(CreateStandard),
                Component.of('too ').italic().color(CreateHighlighted),
                Component.of('fast ').color(CreateHighlighted),
                Component.of('for you, ').color(CreateStandard),
                Component.of('click through ').color(CreateHighlighted),
                Component.of('the ').color(CreateStandard),
                Component.of('timeline bar').underlined().color(CreateHighlighted),
                Component.of(' like you would in a ').color(CreateStandard),
                Component.of('YouTube video ').red(),
                Component.of('or ').italic().color(CreateStandard),
                Component.of('toggle ').italic().color(CreateHighlighted),
                Component.of('Comfy Reading ').color(CreateHighlighted),
                Component.of('on the ').color(CreateStandard),
                Component.of('bottom right corner ').color(CreateHighlighted),
                Component.of('while viewing a Ponder scene.').color(CreateStandard),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])

            break;
        case 1:
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Some advice... \n'),
                Component.of("\nDon't fight a battle that you know you will lose! "),
                Component.of('Certain mobs '),
                Component.of('will ').italic(),
                Component.of('<shake>chase you down</shake> ').red(),
                Component.of('for long distances. \n'),
                Component.of('\nDo not say I never warned you!').red(),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 2:
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Wandering Traders ').bold().green(),
                Component.of('can have trades that are either'),
                Component.of(' very useful ').darkGreen(),
                Component.of('or outright '),
                Component.of('overpowered.\n').italic().aqua(),
                Component.of('\nHave you encountered one that trades some '),
                Component.of('emeralds ').green(),
                Component.of('for a '),
                Component.of('Beacon').aqua(),
                Component.of('?'),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 3:
            /**
             * Here is some information that is not well nown by most... mentioned by Kryppers
             * 
             * Create's Item Vaults are actually blast proof, so you can trust them with your valuables.
             * 
             * This is not mentioned in the base Ponder scene or anywhere else in base Create as of 0.5.1e
             * soooo I had to write this information in the tooltip.
             * 
             * You can thank me later! - CelestialAbyss
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Here is some information that is not well known by most... mentioned by ').color(CreateStandard),
                Component.of('Kryppers\n').color(CreateHighlighted),
                Component.of("\nCreate's ").color(CreateHighlighted),
                Component.of('Item Vaults ').blue(),
                Component.of('are actually ').color(CreateStandard),
                Component.of('blast proof').bold().color(CreateHighlighted),
                Component.of(', so you can ').color(CreateStandard),
                Component.of('trust ').color(CreateHighlighted),
                Component.of('them with ').color(CreateStandard),
                Component.of('your valuables').color(CreateHighlighted),
                Component.of('.\n').color(CreateStandard),
                Component.of('\nThis is ').darkPurple(),
                Component.of('not mentioned ').bold().italic().lightPurple(),
                Component.of('in the base Ponder scene or ').darkPurple(),
                Component.of('anywhere else ').lightPurple(),
                Component.of('in base ').darkPurple(),
                Component.of('Create ').lightPurple(),
                Component.of('as of ').darkPurple(),
                Component.of('0.5.1e').lightPurple(),
                Component.of(' <wave>sooooo</wave> ').italic().lightPurple(),
                Component.of('I had to write this information in the tooltip. \n').darkPurple(),
                Component.of('\nYou can thank me later! - ').darkPurple(),
                Component.of('CelestialAbyss').lightPurple(),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 4:
            // are the only exception as they are unable to transfer specific stack sizes and
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Did you know?\n').bold().green(),
                Component.of('\nEverything ').color(CreateStandard),
                Component.of('Brass ').bold().color(CreateHighlighted),
                Component.of('related such as ').color(CreateStandard),
                Component.of('Brass Funnels').color(CreateHighlighted),
                Component.of(', ').color(CreateStandard),
                Component.of('Brass Tunnels ').color(CreateHighlighted),
                Component.of('and ').color(CreateStandard),
                Component.of('Smart Chutes ').color(CreateHighlighted),
                Component.of('all ').italic().color(CreateStandard),
                Component.of('have the ').color(CreateStandard),
                Component.of('capability ').color(CreateHighlighted),
                Component.of('to').color(CreateStandard),
                Component.of(' transfer ').color(CreateHighlighted),
                Component.of('a ').color(CreateStandard),
                Component.of('maximum stack size ').color(CreateHighlighted),
                Component.of('of ').color(CreateStandard),
                Component.of('64 items ').bold().green(),
                Component.of('in addition to transferring ').color(CreateStandard),
                Component.of('specific stack sizes').color(CreateHighlighted),
                Component.of('.\n').color(CreateStandard),
                Component.of('\nBrass Tunnels ').color(CreateHighlighted),
                Component.of('are the ').color(CreateStandard),
                Component.of('only ').italic().color(CreateStandard),
                Component.of('exception as they are ').color(CreateStandard),
                Component.of('unable ').red(),
                Component.of('to transfer specific stack sizes and ').color(CreateStandard),
                Component.of('require ').color(CreateHighlighted),
                Component.of('the assistance of ').color(CreateStandard),
                Component.of('Weighted Ejectors ').gold(),
                Component.of('to do so.\n').color(CreateStandard),
                Component.of('\nI am sure you will find them quite ').color(CreateStandard),
                Component.of('enjoyable ').color(CreateHighlighted),
                Component.of('to use!').color(CreateStandard),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 5:
            /**
             * A helpful Create tip...
             * 
             * Underwater exploration is made easy with Create's Copper Diving Helmet and 
             * Copper Backtank! Just be sure to fill your Copper Backtank with Air Pressure
             * by supplying it with rotational force through the top of your Copper Backtank.
             * You can also anchor yourself to the floor in large bodies of water by using the
             * Copper Diving Boots.
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('A helpful ').color(CreateStandard),
                Component.of('Create ').color(CreateHighlighted),
                Component.of('tip...\n').color(CreateStandard),
                Component.of("\nUnderwater exploration ").blue(),
                Component.of('is made ').color(CreateStandard),
                Component.of('easy ').italic().color(CreateHighlighted),
                Component.of('with ').color(CreateStandard),
                Component.of("Create's ").color(CreateHighlighted),
                Component.of('diving gear comprised of the ').color(CreateStandard),
                Component.of('Copper Diving Helmet, ').color(0xE9A36D),
                Component.of('Copper Backtank ').color(0xE9A36D),
                Component.of('and ').color(CreateStandard),
                Component.of('Copper Diving Boots').color(0xE9A36D),
                Component.of('. \n').color(CreateStandard),
                Component.of('\nJust be sure to ').color(CreateStandard),
                Component.of('fill').bold().color(CreateHighlighted),
                Component.of(' your ').italic().color(CreateStandard),
                Component.of('Copper Backtank ').color(0xE9A36D), //wit
                Component.of('with ').italic().color(CreateStandard),
                Component.of('Air Pressure ').gray(),
                Component.of('by ').color(CreateStandard),
                Component.of('supplying it ').color(CreateHighlighted),
                Component.of('with ').color(CreateStandard),
                Component.of('rotational force ').color(CreateHighlighted),
                Component.of('through the ').color(CreateStandard),
                Component.of('top').underlined().color(CreateHighlighted),
                Component.of(' of ').color(CreateStandard),
                Component.of('your ').italic().color(CreateStandard),
                Component.of('Copper Backtank').color(0xE9A36D),
                Component.of('.\n').color(CreateStandard),
                Component.of('You can also ').color(CreateStandard),
                Component.of('anchor yourself ').color(CreateHighlighted),
                Component.of('to the floor in large bodies of water by ').color(CreateStandard),
                Component.of('using ').color(CreateHighlighted),
                Component.of('the ').color(CreateStandard),
                Component.of('Copper Diving Boots').color(0xE9A36D),
                Component.of('.\n').color(CreateStandard),
                Component.of('\nThe ').color(CreateStandard),
                Component.of('Copper Diving Equipment ').color(0xE9A36D),
                Component.of('can be ').color(CreateStandard),
                Component.of('upgraded ').color(CreateHighlighted),
                Component.of('to ').color(CreateStandard),
                Component.of('Netherite Diving Equipment ').darkGray(),
                Component.of('once you have enough ').color(CreateStandard),
                Component.of('Netherite ').darkGray(),
                Component.of('to spare.').color(CreateStandard),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 6:
            /**
             * Finality Tip
             * 
             * In this modpack, spawners can be crafted with Structure Void. They can also be picked up
             * with the help of Carry On by sneaking and right clicking a Spawner with both hands empty.
             * 
             */
            if (Platform.isLoaded('carryon')) {
                event.server.tell([
                    Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                    Component.of('Finality Tip\n').bold().lightPurple(),
                    Component.of('\nIn this modpack, spawners can be ').darkPurple(),
                    Component.of('crafted ').lightPurple(),
                    Component.of('with ').darkPurple(),
                    Component.of('Structure Void').lightPurple(),
                    Component.of('. They can also be ').darkPurple(),
                    Component.of('picked up ').lightPurple(),
                    Component.of('with the help of ').darkPurple(),
                    Component.of('Carry On ').lightPurple(),
                    Component.of('by ').darkPurple(),
                    Component.of('sneaking ').lightPurple(),
                    Component.of('and ').italic().darkPurple(),
                    Component.of('right clicking ').lightPurple(),
                    Component.of('while ').darkPurple(),
                    Component.of('both ').italic().lightPurple(),
                    Component.of('hands are ').lightPurple(),
                    Component.of('empty').underlined().lightPurple(),
                    Component.of(' when near it.').darkPurple(),
                    Component.of('\n<rainb>-----------------------------------------------------</rainb>')
                ])
            }
            break;
        case 7:
            /**
             * Create Tip
             * 
             * You can shorten Mechanical Belts with the Wrench by clicking on the end of the belt
             * instead of destroying the belt in its entirety and ruining all of your work.
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Create Tip\n').bold().color(CreateHighlighted),
                Component.of('\nYou can easily ').color(CreateStandard),
                Component.of('shorten ').italic().color(CreateHighlighted),
                Component.of('Mechanical Belts ').color(CreateHighlighted),
                Component.of('with the ').color(CreateStandard),
                Component.of('Wrench ').color(CreateHighlighted),
                Component.of('by ').color(CreateStandard),
                Component.of('[right-clicking] ').color(CreateHighlighted),
                Component.of('on the ').color(CreateStandard),
                Component.of('end').underlined().color(CreateHighlighted),
                Component.of(' of the belt ').color(CreateHighlighted),
                Component.of('instead of ').color(CreateStandard),
                Component.of('<shake>destroying</shake>').red(),
                Component.of(' the belt in its ').color(CreateStandard),
                Component.of('<shake><wave><wiggle>entirety</wiggle></wave></shake>')
                    .bold()
                    .color(CreateHighlighted),
                Component.of(' and ').italic().color(CreateStandard),
                Component.of('ruining ').red(),
                Component.of('all ').italic().color(CreateStandard),
                Component.of('of your hard work.').color(CreateStandard),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 8:
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Create Tip\n').bold().color(CreateHighlighted),
                Component.of('\nWhat was worthless is now ').color(CreateStandard),
                Component.of('valuable').color(CreateHighlighted),
                Component.of('.\n').color(CreateStandard),
                Component.of('\nFrom ').color(CreateStandard),
                Component.of('Cobblestone ').gray(),
                Component.of('you can get ').color(CreateStandard),
                Component.of('Gravel').gray(),
                Component.of('.\n'),
                Component.of('\nFrom ').color(CreateStandard),
                Component.of('Gravel ').gray(),
                Component.of('you can get ').color(CreateStandard),
                Component.of('Iron Nuggets'),
                Component.of('.').color(CreateStandard),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 9:
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Just got back from a tea break...\n').darkPurple(),
                Component.of("\nI hope you've been using JEI or REI to check recipes. You ").darkPurple(),
                Component.of("will ").italic().darkPurple(),
                Component.of('find yourself lost very quickly.').darkPurple(),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 10:
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('In case you have not found any ').darkPurple(),
                Component.of('Iron Ore'),
                Component.of(', have some ').darkPurple(),
                Component.of('[free] ')
                    .lightPurple()
                    .clickOpenUrl('https://www.youtube.com/watch?v=4xLVySuwbOo')
                    .hover('<wave>frEEeeeE?</wave>'),
                Component.of('Raw Iron'),
                Component.of(" as a form of assistance! Hopefully this helps.").darkPurple(),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            event.player.give('9x minecraft:raw_iron')
            break;
        case 11:
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Finality Tip\n').bold().lightPurple(),
                Component.of('\nCampfires now regenerate your health when you are close to them. <wave>Cozy!</wave>').gold(),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 12:
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('I would be a bit surprised if you have not noticed that the days are much longer than usual...\n').darkPurple(),
                Component.of('This does mean that the nights are longer as a consequence, however.').darkPurple(),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 13:
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Running out of materials should be the least of your worries.\n').color(CreateStandard),
                Component.of('Build ').color(CreateHighlighted),
                Component.of("to your heart's desire!").color(CreateStandard),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 14:
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Create Tip\n').bold().color(CreateHighlighted),
                Component.of('\nDid you know you can get ').color(CreateStandard),
                Component.of('Lime Dye ').color(0xAAE23A),
                Component.of('from ').color(CreateStandard),
                Component.of('Sea Pickles').darkGreen(),
                Component.of('?').color(CreateStandard),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 15:
            /**
             * Ever accidentally placed a Shaft inside a Mechanical Belt and want to remove it?
             * Don't fear! Simply right-click while not sneaking with a Wrench to safely retrieve said
             * Shaft without breaking the entire belt and ruining your hard work.
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Create Tip\n').bold().color(CreateHighlighted),
                Component.of('\nEver ').color(CreateStandard),
                Component.of('accidentally ').color(CreateHighlighted),
                Component.of('placed a Shaft ').color(CreateStandard),
                Component.of('inside ').color(CreateHighlighted),
                Component.of('a Mechanical Belt and want to ').color(CreateStandard),
                Component.of('remove ').color(CreateHighlighted),
                Component.of('it?\n').color(CreateStandard),
                Component.of("\nDon't fear! Simply").color(CreateStandard),
                Component.of(' [right-click] ').color(CreateHighlighted),
                Component.of('with a ').color(CreateStandard),
                Component.of('Wrench ').color(CreateHighlighted),
                Component.of('while ').color(CreateStandard),
                Component.of('not ').italic().color(CreateHighlighted),
                Component.of('sneaking ').color(CreateHighlighted),
                Component.of('to ').color(CreateStandard),
                Component.of('safely retrieve ').color(CreateHighlighted),
                Component.of('said Shaft ').color(CreateStandard),
                Component.of('without ').italic().color(CreateStandard),
                Component.of('breaking ').color(CreateHighlighted),
                Component.of('the entire belt ').color(CreateStandard),
                Component.of('and ').color(CreateStandard),
                Component.of('ruining ').red(),
                Component.of('your hard work.').color(CreateStandard),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 16:
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Create Tip\n').bold().color(CreateHighlighted),
                Component.of('Toolboxes ').color(CreateHighlighted),
                Component.of('can be ').color(CreateStandard),
                Component.of('remotely accessed ').color(CreateHighlighted),
                Component.of('by pressing').color(CreateStandard),
                Component.of(' [Left Alt] ').color(CreateHighlighted),
                Component.of('while ').color(CreateStandard),
                Component.of('within ').color(CreateHighlighted),
                Component.of('a radius of 10 blocks.\n').color(CreateStandard),
                Component.of('\nPlease note that this keybind can be changed for your comfort.')
                    .color(CreateStandard),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        default:
            event.server.tell([
                Component.of('<shake>-----------------------------------------------------</shake>\n').darkRed(),
                Component.of('Note to self: If you see this, something in your switch statement broke!'),
                Component.of('\n<shake>-----------------------------------------------------</shake>').darkRed()
            ])
            break;
    }
}

ServerEvents.tick(event => {
    let level = event.server.getLevel('minecraft:overworld')
    // minutes * seconds * ticks
    if (level.time % (30 * 60 * 20) !== 0) return
    allMessages(event)
})

if (debug_messages) {
    ItemEvents.rightClicked('minecraft:debug_stick', event => {
        allMessages(event)
    })
}