// priority: 0
// requires: create
// ignored: true

/**
 * @file Singularity generation for future usage.
 * @version 2
 */

const vanillaSingularities = {
    amethyst: { top: 0xB18CF0, bottom: 0x533888 },
    blue_ice: { top: 0x84ABED, bottom: 0x6492EA },
    coal: { top: 0x363739, bottom: 0x261E24 },
    coarse_dirt: { top: 0x5D5454, bottom: 0x704F36 },
    cobblestone: { top: 0x818080, bottom: 0x4E4E4D },
    copper: { top: 0xFA977C, bottom: 0xBC5430 },
    diamond: { top: 0xA6FCE9, bottom: 0x1AACA8 },
    emerald: { top: 0x7DF8AC, bottom: 0x008E1A },
    end_crystal: { top: 0xBE95D4, bottom: 0xE20627 },
    ender_pearl: { top: 0x2BCBAF, bottom: 0x032620 },
    glowstone: { top: 0xFFD38F, bottom: 0xA06135 },
    gold: { top: 0xFDF55F, bottom: 0xD98E04 },
    gunpowder: { top: 0x888888, bottom: 0x3D3D3D },
    honey: { top: 0xF7DB28, bottom: 0xD26A2A },
    iron: { top: 0xE1E1E1, bottom: 0x6C6C6C },
    lapis_lazuli: { top: 0x678DEA, bottom: 0x1B53A7 },
    netherite: { top: 0x93847D, bottom: 0x24110B },
    quartz: { top: 0xB19E8F, bottom: 0x6E5C59 },
    red_sand: { top: 0xD97B30, bottom: 0xAC5712 },
    redstone: { top: 0xFF0000, bottom: 0x8A0901 },
    sand: { top: 0xE3E0C0, bottom: 0xCCBB8E },
    sea_lantern: { top: 0x529680, bottom: 0x48635B },
    soul_sand: { top: 0x49372C, bottom: 0x352922 },
    soul_soil: { top: 0x352922, bottom: 0x46EFF4 },
    tinted_glass: { top: 0x35283B, bottom: 0x272528 }
}

const concreteSingularities = {
    concrete_black: { top: 0x37373D, bottom: 0x07090E },
    concrete_blue: { top: 0x4C53AB, bottom: 0x2A2C86 },
    concrete_brown: { top: 0x936C49, bottom: 0x59371D },
    concrete_cyan: { top: 0x2DC2C2, bottom: 0x146E7E },
    concrete_gray: { top: 0x5E6B6F, bottom: 0x33363A },
    concrete_green: { top: 0x718D26, bottom: 0x445521 },
    concrete_light_blue: { top: 0x65CEE1, bottom: 0x2180B9 },
    concrete_light_gray: { top: 0xA7A79F, bottom: 0x74746B },
    concrete_lime: { top: 0xA9D072, bottom: 0x589E17 },
    concrete_magenta: { top: 0xCC72C8, bottom: 0x9D2D94 },
    concrete_orange: { top: 0xDBA849, bottom: 0xD15A00 },
    concrete_pink: { top: 0xE6C3D1, bottom: 0xC75E85 },
    concrete_purple: { top: 0x9743BF, bottom: 0x5D1D90 },
    concrete_red: { top: 0xBE554D, bottom: 0x841E1E },
    concrete_white: { top: 0xE4E5E5, bottom: 0xC2C7C8 },
    concrete_yellow: { top: 0xE2DAA9, bottom: 0xE1A414 }
}

let createSingularities = [
    'andesite_alloy',
    'brass',
    'builders_tea',
    'chocolate',
    'electron_tube',
    'framed_glass',
    'precision_mechanism',
    'rose_quartz',
    'sturdy_sheet',
    'track',
    'zinc'
]

StartupEvents.registry('item', event => {
    // Concrete singularity generation
    for (const element of concreteSingularities) {
        event
            .create(`kubejs:concrete_${element}_singularity`)
            .texture('layer0', 'kubejs:item/singularity')
            .texture('layer1', 'kubejs:item/singularity_overlay')
            .color(1, element.top)
            .color(2, element.bottom)
    }
    event.create('kubejs:chromatic_concrete_singularity')
        .rarity('legendary')
})

/*
let components = []
function singularityColorBuilder(topColor, bottomColor) {
    components.push({
        top: topColor,
        bottom: bottomColor
    })
}
    for (let i = 0; i < Color.DYE.length; i++) {
        const element = Color.DYE[i];

    }
*/