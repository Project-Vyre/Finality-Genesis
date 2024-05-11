// requires: irons_spellbooks
// ignored: false

/**
 * @file Iron's Spells n' Spellbooks ink fluid generation.
 * @author 
 */

let arcaneInkProperties = {
  common: { color: 0x2C2C2C },
  uncommon: { color: 0x074418 },
  rare: { color: 0x083D34 },
  epic: { color: 0x432C5C },
  legendary: { color: 0x7C5203 }
}

let arcaneInk = [
  'common',
  'uncommon',
  'rare',
  'epic',
  'legendary'
]

StartupEvents.registry('fluid', event => {
  for (let iterator of arcaneInk) {
    event.create(`kubejs:${iterator}_arcane_ink`)
      .thickTexture(arcaneInkProperties[iterator].color)
      .bucketColor(arcaneInkProperties[iterator].color)
  }
})