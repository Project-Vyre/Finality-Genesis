// priority: 20
// requires: create

/**
 * @file Tooltip removal.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ItemEvents.tooltip(event => {
  /*
  let music_discs = [
    '13',
    'cat',
    'blocks',
    'chirp',
    'far',
    'mall',
    'mellohi',
    'stal',
    'strad',
    'ward',
    '11',
    'wait',
    'pigstep',
    'otherside',
    '5'
  ]
  for (let i = 0; i < music_discs.length; i++) {
    let disc = music_discs[i];
    event.addAdvanced(`minecraft:music_disc_${disc}`, (item, advanced, text) => {
      text.remove(1)
    })
  }
  */
  if (Platform.isLoaded('etched')) {
    event.addAdvanced('etched:boombox', (item, advanced, text) => {
      text.remove(1)
    })
  }
  if (Platform.isLoaded('tesseract')) {
    event.addAdvanced('tesseract:tesseract', (item, advanced, text) => {
      text.remove(1)
    })
  }
})
