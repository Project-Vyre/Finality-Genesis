// priority: 0

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

function bossToast(
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
                    Component.of(player.displayName).green()
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

bossToast(
    'minecraft:wither',
    'minecraft:wither_skeleton_skull',
    red,
    darkRed,
    0x2D1E16,
    0x261A1A,
    0x303030
);

bossToast(
    'minecraft:ender_dragon',
    'minecraft:dragon_head',
    purple,
    purple,
    purple,
    black,
    darkPurple
)

if (Platform.isLoaded('apotheosis')) {
    bossToast(
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
    bossToast(
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
    bossToast(
        'cataclysm:netherite_monstrosity',
        'cataclysm:infernal_forge',
        gold,
        red,
        gold,
        darkRed,
        yellow
    );
    bossToast(
        'cataclysm:ignis',
        'cataclysm:the_incinerator',
        gold,
        gold,
        0x1E1013,
        0x1E1013,
        0x371920
    );
    bossToast(
        'cataclysm:ender_guardian',
        'cataclysm:gauntlet_of_guard',
        purple,
        darkPurple,
        purple,
        black,
        darkPurple
    );
    bossToast(
        'cataclysm:the_harbinger',
        'cataclysm:wither_assault_shoulder_weapon',
        red,
        red,
        red,
        0x302116,
        darkRed
    );
    bossToast(
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
    bossToast('graveyard:lich', 'minecraft:skeleton_skull', red, red, red, 0x001332, darkRed)
}

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

// Debugger
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
