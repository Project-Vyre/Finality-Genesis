/**
 * @file Live in-game tips.
 * 
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author squoshi <https://github.com/squoshi> Proposing the switch function
 * @author pietro-lopes <https://github.com/pietro-lopes> For fixing the math portion
 */

// priority: 7
// requires: create
// ignored: false

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

let createTipHeader = 'string.kubejs.announcer.create_tip_header'
let finalityTipHeader = 'string.kubejs.announcer.finality_tip_header'
let startRainbowLine = 'string.kubejs.announcer.rainbow_line_start'
let endRainbowLine = 'string.kubejs.announcer.rainbow_line_end'

let debug_messages = false

let DICE = 0

/**
 * 
 * @param {Internal.TickEvent$ServerTickEvent_} event 
 */
function allMessages(event) {
  DICE = Utils.random.nextInt(0, 21)
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
        Component.translatable(createTipHeader).bold().color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.ponder_tip.stuck').color(CreateStandard),
        Component.translatable('string.kubejs.announcer.hold_w_to_ponder').color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.ponder_tip.line_2').color(CreateStandard),
        Component.translatable('string.kubejs.announcer.ponder_tip.line_3').color(CreateStandard),
        Component.translatable('string.kubejs.announcer.ponder_tip.line_4').color(CreateStandard),
        Component.translatable('string.kubejs.announcer.ponder_tip.comfy_reading').color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.ponder_tip.line_4_cont').color(CreateStandard)
      ])
      break;
    case 1:
      event.server.tell([
        Component.translatable(finalityTipHeader).bold().lightPurple(),
        Component.translatable('string.kubejs.announcer.finality_tip.choose_your_battles')
      ])
      break;
    case 2:
      event.server.tell([
        Component.translatable(finalityTipHeader).bold().lightPurple(),
        Component.translatable('string.kubejs.announcer.finality_tip.wandering_traders'),
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
        Component.translatable(createTipHeader).bold().color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.blastproof_item_vaults.line_1').color(CreateStandard),
        Component.translatable('string.kubejs.announcer.blastproof_item_vaults.line_2').color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.blastproof_item_vaults.line_3').italic().darkPurple()
      ])
      break;
    case 4:
      /**
       * Everything Brass related such as Brass Funnels, Brass Tunnels and Smart Chutes all have the capability
       * to transfer a maximum stack size of 64 items in addition to transferring specific stack sizes.
       * 
       * Brass Tunnels are the only exception as they are unable to transfer specific stack sizes and require
       * the assistance of Weighted Ejectors to do so.
       * 
       * I am sure you will find them quite enjoyable to use!
       */
      // are the only exception as they are unable to transfer specific stack sizes and
      event.server.tell([
        Component.translatable(createTipHeader).bold().color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.brass_stack_size.line_1').color(CreateStandard),
        Component.translatable('string.kubejs.announcer.brass_stack_size.line_2').color(CreateStandard)
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
        Component.translatable(createTipHeader).bold().color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.create_diving_gear.line_1').color(0xE9A36D), // 0xE9A36D
        Component.translatable('string.kubejs.announcer.create_diving_gear.line_2').color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.create_diving_gear.line_3').color(CreateStandard)
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
          Component.translatable(finalityTipHeader).bold().lightPurple(),
          Component.translatable('string.kubejs.announcer.spawner_tip').darkPurple()
        ])
      } else {
        event.server.tell([
          Component.translatable(finalityTipHeader).bold().lightPurple(),
          Component.translatable('string.kubejs.announcer.spawner_tip').darkPurple()
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
        Component.translatable(createTipHeader).bold().color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.create_belt_length').color(CreateStandard)
      ])
      break;
    case 8:
      event.server.tell([
        Component.translatable(createTipHeader).bold().color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.worthless_now_valuable').color(CreateStandard)
      ])
      break;
    case 9:
      event.server.tell([
        Component.of('<'),
        Component.of('CelestialAbyss').lightPurple(),
        Component.of('> '),
        Component.translatable('string.kubejs.announcer.tea_break_recipe_viewer')
      ])
      break;
    case 10:
      event.server.tell([
        Component.of('<'),
        Component.of('CelestialAbyss').lightPurple(),
        Component.of('> '),
        Component.translatable('string.kubejs.announcer.free_iron.line_1'),
        Component.translatable('string.kubejs.announcer.free_iron.free_link')
          .lightPurple()
          .clickOpenUrl('https://www.youtube.com/watch?v=4xLVySuwbOo')
          .hover(Component.translatable('string.kubejs.announcer.free_iron.free_hover')),
        Component.translatable('string.kubejs.announcer.free_iron.line_2'),
      ])
      Utils.server.runCommandSilent('give @a minecraft:raw_iron 9')
      event.server.tell([
        Component.of('CelestialAbyss executed command give @a minecraft:raw_iron 9').italic().darkGray()
      ])
      break;
    case 11:
      event.server.tell([
        Component.translatable(finalityTipHeader).bold().lightPurple(),
        Component.translatable('string.kubejs.announcer.campfire_regeneration').gold()
      ])
      break;
    case 12:
      event.server.tell([
        Component.of('<'),
        Component.of('CelestialAbyss').lightPurple(),
        Component.of('> '),
        Component.translatable('string.kubejs.announcer.hourglass.line_1')
      ])
      event.server.scheduleInTicks(75, t => {
        event.server.tell([
          Component.of('<'),
          Component.of('CelestialAbyss').lightPurple(),
          Component.of('> '),
          Component.translatable('string.kubejs.announcer.hourglass.line_2')
        ])
      })
      break;
    case 13:
      event.server.tell([
        Component.of('<'),
        Component.of('CelestialAbyss').lightPurple(),
        Component.of('> '),
        Component.translatable('string.kubejs.announcer.infinite_materials_building.line_1')
      ])
      event.server.scheduleInTicks(75, t => {
        event.server.tell([
          Component.of('<'),
          Component.of('CelestialAbyss').lightPurple(),
          Component.of('> '),
          Component.translatable('string.kubejs.announcer.infinite_materials_building.line_2')
        ])
      })
      break;
    case 14:
      event.server.tell([
        Component.translatable(createTipHeader).bold().color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.sea_pickles_dye').color(0xAAE23A)
      ])
      break;
    case 15:
      /**
       * Ever accidentally placed a Shaft inside a Mechanical Belt and want to remove it?
       * Don't fear! Simply right-click while not sneaking with a Wrench to safely retrieve said
       * Shaft without breaking the entire belt and ruining your hard work.
       */
      event.server.tell([
        Component.translatable(createTipHeader).bold().color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.accidental_shaft_belt.line_1').color(CreateStandard),
        Component.translatable('string.kubejs.announcer.accidental_shaft_belt.r_click').color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.accidental_shaft_belt.line_2').color(CreateStandard)
      ])
      break;
    case 16:
      event.server.tell([
        Component.translatable(createTipHeader).bold().color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.create_toolboxes').color(CreateStandard)
      ])
      break;
    case 17:
      event.server.tell([
        Component.of('<'),
        Component.of('CelestialAbyss').lightPurple(),
        Component.of('> '),
        Component.translatable('string.kubejs.announcer.create_start.line_1')
      ])
      event.server.scheduleInTicks(75, t => {
        event.server.tell([
          Component.of('<'),
          Component.of('CelestialAbyss').lightPurple(),
          Component.of('> '),
          Component.translatable('string.kubejs.announcer.create_start.line_2')
        ])
      })
      event.server.scheduleInTicks(180, t => {
        event.server.tell([
          Component.of('<'),
          Component.of('CelestialAbyss').lightPurple(),
          Component.of('> '),
          Component.translatable('string.kubejs.announcer.create_start.line_3')
        ])
      })
      break;
    case 18:
      if (!Platform.isLoaded('roughlyenoughitems')) {
        event.server.tell([
          Component.translatable(finalityTipHeader).bold().lightPurple(),
          Component.translatable('string.kubejs.announcer.rei.line_1'),
          Component.of('[Roughly Enough Items]')
            .gray()
            .clickOpenUrl('https://www.curseforge.com/minecraft/mc-mods/roughly-enough-items')
            .hover(Component.translatable('string.kubejs.announcer.rei.hover_link')),
          Component.translatable('string.kubejs.announcer.rei.line_2')
        ])
      } else {
        event.server.tell([
          Component.translatable(finalityTipHeader).bold().lightPurple(),
          Component.translatable('string.kubejs.announcer.rei_installed.line_1')
        ])
      }
      break;
    case 19:
      if (Platform.isLoaded('betterfortresses')) {
        event.server.tell([
          Component.translatable(finalityTipHeader).bold().lightPurple(),
          Component.translatable('string.kubejs.announcer.betternetherfortress.ancient_debris_hidden')
        ])
      } else if (!Platform.isLoaded('betterfortresses')) {
        event.server.tell([
          Component.translatable('string.kubejs.announcer.shake_line_start').darkRed(),
          Component.of('Looks like the mod this tip is meant for is missing!'),
          Component.translatable('string.kubejs.announcer.shake_line_end').darkRed()
        ])
      }
      break;
    case 20:
      /**
       * Create Tip
       * 
       * You can merge two separate belts into each other by right clicking with a
       * Mechanical Belt in your hand to extend one into the other. It even
       * returns the extra belt back into your inventory!
       */
      event.server.tell([
        Component.translatable(createTipHeader).bold().color(CreateHighlighted),
        Component.translatable('string.kubejs.announcer.belt_merging').color(CreateStandard)
      ])
      break;
    default:
      event.server.tell([
        Component.translatable('string.kubejs.announcer.shake_line_start').darkRed(),
        Component.of('Note to self: If you see this, something in your switch statement broke!').red(),
        Component.translatable('string.kubejs.announcer.shake_line_end').darkRed()
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
  /*
  ServerEvents.tick(event => {
    let level = event.server.getLevel('minecraft:overworld')
    if (level.time % 60 !== 0) return
    allMessages(event)
  })
  */
}