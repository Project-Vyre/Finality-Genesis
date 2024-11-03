/**
 * @file Lang generation for custom music discs.
 * @version 1.21.1-G
 */

let discLang = {
    'arlecchino_battle_theme': 'Farabi Hasan Music - Arlecchino Battle Theme Phase 1 & 2 (Fan-Made) | Genshin Impact',
    'bad_deeds': 'Cjbeards - Bad Deeds',
    'bad_deeds_inst': 'Cjbeards - Bad Deeds (Instrumental)',
    'black_white_red': 'Cjbeards - Black White Red',
    'black_white_red_inst': 'Cjbeards - Black White Red (Instrumental)',
    'boo_hoo': 'Cjbeards - Boo Hoo',
    'columbina_battle_theme': 'Farabi Hasan Music - Columbina Battle Phase 1 & 2 (Fan-Made) | Genshin Impact',
    'from_the_shadows': 'Cjbeards - From the Shadows',
    'get_away': 'Cjbeards - Get Away',
    'get_away_inst': 'Cjbeards - Get Away (Instrumental)',
    'heart_of_the_wicked': 'Cjbeards - Heart of the Wicked',
    'mirror_mirror': 'Cjbeards - Mirror Mirror',
    'mirror_mirror_inst': 'Cjbeards - Mirror Mirror (Instrumental)',
    'open_up': 'Cjbeards - Open Up',
    'open_up_inst': 'Cjbeards - Open Up (Instrumental)',
    'pantalone_battle_theme': 'Farabi Hasan Music - Pantalone Double Phase Battle Theme (Fan-Made) | Genshin Impact',
    'pulcinella_battle_theme': 'Farabi Hasan Music - Pulcinella Double Phase Boss Theme (Fan-Made) | Genshin Impact',
    'sandrone_battle_theme': 'Farabi Hasan Music - Sandrone Marionette Double Phase Battle Theme (Fan-Made) | Genshin Impact',
    'silent_night': 'Cjbeards - Silent Night',
    'worst_nightmare': 'Cjbeards - Worst Nightmare',
    'worst_nightmare_inst': 'Cjbeards - Worst Nightmare (Instrumental)'
}

ClientEvents.lang('en_us', event => {
    for (let [id, txt] of Object.entries(discLang)) {
        event.add('kubejs', `item.kubejs.music_disc_${id}`, 'Music Disc')
        event.add('kubejs', `jukebox_song.kubejs.${id}`, txt)
    }
})