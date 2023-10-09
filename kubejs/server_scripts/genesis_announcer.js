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

ServerEvents.tick(event => {
    let level = event.server.getLevel('minecraft:overworld')
    // minute * seconds * ticks
    if (level.time % 36000 != 0) return
    DICE = Utils.random.nextInt(0, 12)
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
                Component.of('YouTube video').red(),
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
                Component.of("Do not say I warned you!"),
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
                Component.of('not mentioned ' ).bold().italic().lightPurple(),
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
            /**
             * Did you know?
             * 
             * Everything Brass related such as Brass Funnels, Brass Tunnels and Smart Chutes
             * all have the capability to transfer a maximum stack size of 64 items in
             * addition to transferring specific stack sizes. I am sure you will find them
             * quite enjoyable to use!
             */
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
                Component.of('. I am sure you will find them quite ').color(CreateStandard),
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
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('A helpful ').color(CreateStandard),
                Component.of('Create ').color(CreateHighlighted),
                Component.of('tip...\n'),
                Component.of("\nUnderwater exploration ").blue(),
                Component.of('is made ').color(CreateStandard),
                Component.of('easy ').italic().color(CreateHighlighted),
                Component.of('with ').color(CreateStandard),
                Component.of("Create's").color(CreateHighlighted),
                Component.of('Copper Diving Helmet ').color(0xE9A36D),
                Component.of('and '),
                Component.of('Copper Backtank').color(0xE9A36D),
                Component.of('! Just be sure to '),
                Component.of('fill').bold().underlined(),
                Component.of(' your ').italic(),
                Component.of('Copper Backtank ').color(0xE9A36D), //wit
                Component.of('with ').italic(),
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
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 6:
            /**
             * Did you know?
             * 
             * In this modpack, spawners can be crafted with Structure Void. They can also be picked up
             * with the help of Carry On by sneaking and right clicking a Spawner with both hands empty.
             * 
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Placeholder text6'),
                Component.of('Placeholder text6'),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 7:
            /**
             * 
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Placeholder text7'),
                Component.of('Placeholder text7'),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 8:
            /**
             * 
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Placeholder text8'),
                Component.of('Placeholder text8'),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 9:
            /**
             * 
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Placeholder text9'),
                Component.of('Placeholder text9'),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 10:
            /**
             * 
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Placeholder text10'),
                Component.of('Placeholder text10'),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 11:
            /**
             * 
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Placeholder text10'),
                Component.of('Placeholder text10'),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
            break;
        case 12:
            /**
             * 
             */
            event.server.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Placeholder text10'),
                Component.of('Placeholder text10'),
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
})
