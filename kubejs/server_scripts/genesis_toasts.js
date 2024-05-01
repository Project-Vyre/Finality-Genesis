// priority: 20

/**
 * @author EvanHsieh0415 <https://github.com/EvanHsieh0415> Creating the basis of the boss death toast notification. https://discord.com/channels/303440391124942858/1129981022554050630
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * 
 * @param {Special.EntityType} entityID 
 * @param {Special.itemIcon} itemIcon 
 * @param {HEX} titleColorInput 
 * @param {HEX} subtitleBossColor 
 * @param {HEX} outlineColorInput 
 * @param {HEX} backgroundColorInput 
 * @param {HEX} borderColorInput 
 */

function bossDeathToast(
  entityID,
  itemIcon,
  titleColorInput,
  subtitleBossColor,
  outlineColorInput,
  backgroundColorInput,
  borderColorInput
) {
  EntityEvents.death(entityID, (event) => {
    const {
      server: { players },
      source: { player: $player },
    } = event
    if (!$player) return
    for (const player of players) {
      player.notify(Notification.make(toast => {
        toast.itemIcon = itemIcon
        toast.outlineColor = outlineColorInput
        toast.backgroundColor = backgroundColorInput
        toast.borderColor = borderColorInput
        toast.text = [
          Component.translate(`World Notification - Boss Eliminated!\n`).bold().color(titleColorInput),
          Component.translate(`entity.${entityID.namespace}.${entityID.path}`).color(subtitleBossColor),
          Component.of(' has been killed by '),
          Component.of($player.displayName).green()
        ]
      }))
    }
  })
}

/**
 * 
 * @param {Special.EntityType} entityID 
 * @param {Special.itemIcon} itemIcon 
 * @param {HEX} titleColorInput 
 * @param {HEX} subtitleBossColor 
 * @param {HEX} outlineColorInput 
 * @param {HEX} backgroundColorInput 
 * @param {HEX} borderColorInput 
 */

function wandererDeathToast(
  entityID,
  itemIcon,
  titleColorInput,
  outlineColorInput,
  backgroundColorInput,
  borderColorInput
) {
  EntityEvents.death(entityID, (event) => {
    const {
      server: { players },
      source: { player: $player },
    } = event
    if (!$player) return
    for (const player of players) {
      player.notify(Notification.make(toast => {
        toast.itemIcon = itemIcon
        toast.outlineColor = outlineColorInput
        toast.backgroundColor = backgroundColorInput
        toast.borderColor = borderColorInput
        toast.text = [
          Component.translate(`World Notification - A Wandering Trader has been killed!\n`).bold().color(titleColorInput),
          Component.translate(`entity.${entityID.namespace}.${entityID.path}`).green(),
          Component.of(' has been killed by '),
          Component.of($player.displayName).green()
        ]
      }))
    }
  })
}

/**
 * 
 * @param {Special.EntityType} entityID 
 * @param {Special.itemIcon} itemIcon 
 * @param {HEX} titleColorInput 
 * @param {HEX} outlineColorInput 
 * @param {HEX} backgroundColorInput 
 * @param {HEX} borderColorInput 
 */

function villagerDeathToast(
  entityID,
  itemIcon,
  titleColorInput,
  outlineColorInput,
  backgroundColorInput,
  borderColorInput
) {
  EntityEvents.death(entityID, (event) => {
    const {
      server: { players },
      source: { player: $player },
    } = event
    if (!$player) return
    for (const player of players) {
      player.notify(Notification.make(toast => {
        toast.itemIcon = itemIcon
        toast.outlineColor = outlineColorInput
        toast.backgroundColor = backgroundColorInput
        toast.borderColor = borderColorInput
        toast.text = [
          Component.translate(`World Notification - A Villager has been killed!\n`).bold().color(titleColorInput),
          Component.of('A '),
          Component.translate(`entity.${entityID.namespace}.${entityID.path}`).green(),
          Component.of(' has been killed by '),
          Component.of($player.displayName).green()
        ]
      }))
    }
  })
}

let red = 0xFF5555
let darkRed = 0xAA0000

let green = 0x55FF55
let darkGreen = 0x00AA00

let blue = 0x5555FF
let darkBlue = 0x0000AA

let aqua = 0x55FFFF
let darkAqua = 0x00AAAA

let purple = 0xFF55FF
let darkPurple = 0xAA00AA

let yellow = 0xFFFF55
let gold = 0xFFAA00

let gray = 0xAAAAAA
let darkGray = 0x555555
let black = 0x000000

let toast_debug = false

bossDeathToast(
  'minecraft:wither',
  'minecraft:wither_skeleton_skull',
  red,
  darkRed,
  0x2D1E16,
  0x261A1A,
  0x303030
);

bossDeathToast(
  'minecraft:ender_dragon',
  'minecraft:dragon_head',
  purple,
  purple,
  purple,
  black,
  darkPurple
)

if (Platform.isLoaded('apotheosis')) {
  bossDeathToast(
    'minecraft:warden',
    'apotheosis:warden_tendril',
    darkAqua,
    aqua,
    darkAqua,
    black,
    aqua
  );
}

if (Platform.isLoaded('aquamirae')) {
  bossDeathToast(
    'aquamirae:captain_cornelia',
    'aquamirae:three_bolt_helmet',
    aqua,
    purple,
    darkBlue,
    0x001332,
    blue
  );
}

if (Platform.isLoaded('cataclysm')) {
  bossDeathToast(
    'cataclysm:netherite_monstrosity',
    'cataclysm:infernal_forge',
    gold,
    red,
    0x1E1013,
    0x1E1013,
    yellow
  );
  bossDeathToast(
    'cataclysm:ignis',
    'cataclysm:the_incinerator',
    gold,
    gold,
    0x1E1013,
    0x1E1013,
    0x371920
  );
  bossDeathToast(
    'cataclysm:ender_guardian',
    'cataclysm:gauntlet_of_guard',
    purple,
    darkPurple,
    purple,
    black,
    darkPurple
  );
  bossDeathToast(
    'cataclysm:the_harbinger',
    'cataclysm:wither_assault_shoulder_weapon',
    red,
    red,
    red,
    0x302116,
    darkRed
  );
  bossDeathToast(
    'cataclysm:the_leviathan',
    'cataclysm:tidal_claws',
    purple,
    purple,
    purple,
    0x001332,
    darkPurple
  );
}

if (Platform.isLoaded('graveyard')) {
  bossDeathToast('graveyard:lich', 'minecraft:skeleton_skull', red, red, red, 0x001332, darkRed)
}

wandererDeathToast('minecraft:wandering_trader', 'minecraft:emerald', green, green, 0x001332, darkRed)

villagerDeathToast('minecraft:villager', 'minecraft:emerald', green, green, 0x331C11, darkRed)

/* Old code that shouldn't be used.
EntityEvents.death('minecraft:wither', event => {
    event.player.notify(Notification.make(toast => {
        toast.itemIcon = 'minecraft:wither_skeleton_skull'
        toast.outlineColor = 0x2D1E16
        toast.backgroundColor = 0x261A1A
        toast.borderColor = 0x303030
        toast.text = [
            Component.of('The Wither has been killed!\n').bold().red(),
            Component.of('Nether Star ').yellow(),
            Component.of('acquired.')
        ]
    }))
})
*/

// Toast debugger
if (toast_debug) {
  ItemEvents.rightClicked('minecraft:debug_stick', event => {
    event.player.notify(Notification.make(toast => {
      toast.itemIcon = 'minecraft:wither_skeleton_skull'
      toast.outlineColor = 0x00FFFF
      toast.backgroundColor = 0xB6FF00
      toast.borderColor = 0xFF0000
      toast.text = [
        Component.of('The Wither has been killed!\n').bold().red(),
        Component.of('Nether Star ').yellow(),
        Component.of('acquired. \n'),
        Component.of('Debug Stick triggered.')
      ]
    }))
  })
}
