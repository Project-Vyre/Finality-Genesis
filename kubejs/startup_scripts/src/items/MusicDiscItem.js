/**
 * @file
 * @version 1.21.1-G
 */

// ignored: false

const musicDiscProperties = {
    arlecchino_battle_theme: { duration: 477, output: 1, disc_texture: 'kubejs:item/music_disc_arlecchino' },
    bad_deeds: { duration: 142, output: 2, disc_texture: 'kubejs:item/music_disc_bad_deeds' },
    bad_deeds_inst: { duration: 142, output: 1, disc_texture: 'kubejs:item/music_disc_bad_deeds' },
    black_white_red: { duration: 164, output: 2, disc_texture: 'kubejs:item/music_disc_black_white_red' },
    black_white_red_inst: { duration: 164, output: 1, disc_texture: 'kubejs:item/music_disc_black_white_red' },
    boo_hoo: { duration: 183, output: 2, disc_texture: 'kubejs:item/music_disc_boo_hoo' },
    columbina_battle_theme: { duration: 452, output: 1, disc_texture: 'kubejs:item/music_disc_columbina' },
    from_the_shadows: { duration: 127, output: 1, disc_texture: 'kubejs:item/music_disc_from_the_shadows' },
    get_away: { duration: 237, output: 2, disc_texture: 'kubejs:item/music_disc_get_away' },
    get_away_inst: { duration: 237, output: 1, disc_texture: 'kubejs:item/music_disc_get_away' },
    heart_of_the_wicked: { duration: 227, output: 1, disc_texture: 'kubejs:item/music_disc_heart_of_the_wicked' },
    mirror_mirror: { duration: 182, output: 2, disc_texture: 'kubejs:item/music_disc_mirror_mirror' },
    mirror_mirror_inst: { duration: 182, output: 1, disc_texture: 'kubejs:item/music_disc_mirror_mirror' },
    open_up: { duration: 189, output: 2, disc_texture: 'kubejs:item/music_disc_open_up' },
    open_up_inst: { duration: 189, output: 1, disc_texture: 'kubejs:item/music_disc_open_up' },
    pantalone_battle_theme: { duration: 434, output: 1, disc_texture: 'kubejs:item/music_disc_pantalone' },
    pulcinella_battle_theme: { duration: 213, output: 1, disc_texture: 'kubejs:item/music_disc_pulcinella' },
    sandrone_battle_theme: { duration: 412, output: 1, disc_texture: 'kubejs:item/music_disc_sandrone' },
    silent_night: { duration: 189, output: 2, disc_texture: 'kubejs:item/music_disc_silent_night' },
    worst_nightmare: { duration: 154, output: 1, disc_texture: 'kubejs:item/music_disc_worst_nightmare' },
    worst_nightmare_inst: { duration: 154, output: 1, disc_texture: 'kubejs:item/music_disc_worst_nightmare' }
}
const musicDisc = [
    'arlecchino_battle_theme',
    'bad_deeds',
    'bad_deeds_inst',
    'black_white_red',
    'black_white_red_inst',
    'boo_hoo',
    'columbina_battle_theme',
    'from_the_shadows',
    'get_away',
    'get_away_inst',
    'heart_of_the_wicked',
    'mirror_mirror',
    'mirror_mirror_inst',
    'open_up',
    'open_up_inst',
    'pantalone_battle_theme',
    'pulcinella_battle_theme',
    'sandrone_battle_theme',
    'silent_night',
    'worst_nightmare',
    'worst_nightmare_inst'
]

StartupEvents.registry('sound_event', event => {
    for (let element of musicDisc) {
        event.create('kubejs:' + element)
    }
})

StartupEvents.registry('item', event => {
    for (let element of musicDisc) {
        event.create(`kubejs:music_disc_${element}`)
            .texture(musicDiscProperties[element].disc_texture)
            .jukeboxPlayable('kubejs:' + element, true)
            .maxStackSize(1)
            .tag('minecraft:music_discs')
            .tag('minecraft:creeper_drop_music_discs')
        // .song(`kubejs:${element}`, musicDiscProperties[element].duration)
        // .analogOutput(musicDiscProperties[element].output)
    }
})