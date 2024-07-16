/**
 * @file Custom music disc item generation. Disc lang generation can be found in client_scripts.
 * @author Prunoidae <https://github.com/Prunoideae> Original script author
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
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
let musicDisc = [
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
    event.create(element)
  }
})

StartupEvents.registry('item', event => {
  for (let element of musicDisc) {
    event.create(`kubejs:music_disc_${element}`, 'music_disc')
      .song(`kubejs:${element}`, musicDiscProperties[element].duration)
      .analogOutput(musicDiscProperties[element].output)
      .texture(musicDiscProperties[element].disc_texture)
      .tag('minecraft:music_discs')
      .tag('minecraft:creeper_drop_music_discs')
  }
})

/*
for (const element of musicDisc) {
    console.log(`music_disc.${element}` + ' ' + `kubejs:records/${element}` + ' ' + musicDiscProperties[element].duration)
}
*/

/*
const testDiscProperties = {
  disc1: { duration: 10, texture: 'music_disc_ex1' },
  disc2: { duration: 11, texture: 'music_disc_ex2' },
  disc3: { duration: 12, texture: 'music_disc_ex3' }
}
let testDisc = [
  'disc1',
  'disc2',
  'disc3'
]
for (let element of testDisc) {
  console.log(element)
  console.log(testDiscProperties[element].duration)
  console.log(testDiscProperties[element].texture)
}
*/