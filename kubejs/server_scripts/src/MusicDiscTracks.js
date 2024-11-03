/**
 * @file Music Disc generation
 * @version 1.21.1-G
 */

// ignored: false

const musicDiscProperties = {
    arlecchino_battle_theme: { duration: 477, output: 1 },
    bad_deeds: { duration: 142, output: 2 },
    bad_deeds_inst: { duration: 142, output: 1 },
    black_white_red: { duration: 164, output: 2 },
    black_white_red_inst: { duration: 164, output: 1 },
    boo_hoo: { duration: 183, output: 2 },
    columbina_battle_theme: { duration: 452, output: 1 },
    from_the_shadows: { duration: 127, output: 1 },
    get_away: { duration: 237, output: 2 },
    get_away_inst: { duration: 237, output: 1 },
    heart_of_the_wicked: { duration: 227, output: 1 },
    mirror_mirror: { duration: 182, output: 2 },
    mirror_mirror_inst: { duration: 182, output: 1 },
    open_up: { duration: 189, output: 2 },
    open_up_inst: { duration: 189, output: 1 },
    pantalone_battle_theme: { duration: 434, output: 1 },
    pulcinella_battle_theme: { duration: 213, output: 1 },
    sandrone_battle_theme: { duration: 412, output: 1 },
    silent_night: { duration: 189, output: 2 },
    worst_nightmare: { duration: 154, output: 1 },
    worst_nightmare_inst: { duration: 154, output: 1 }
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

ServerEvents.registry('jukebox_song', event => {
    /*
    event.create('kubejs:template_sound_event')
        .song('kubejs:template_sound_file', 250)
    */
    for (let element of musicDisc) {
        event.create(`kubejs:${element}`)
            .song(`kubejs:${element}`, musicDiscProperties[element].duration)
        // .analogOutput(musicDiscProperties[element].output)
    }
})