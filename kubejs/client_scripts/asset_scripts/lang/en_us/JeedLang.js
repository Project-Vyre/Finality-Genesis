// priority: 0
// requires: jeed

/**
 * @file Lang file generation for JEED related things.
 */

ClientEvents.lang('en_us', event => {
  event.addAll('minecraft', {
    "effect.minecraft.absorption.desc": "Adds temporary hearts to absorb damage.",
    "effect.minecraft.dolphins_grace.desc": "Increases swimming speed in the water.",
    "effect.minecraft.resistance.desc": "Decreases amount of incoming damage.",
    "effect.minecraft.glowing.desc": "Become visible to everyone around you.",
    "effect.minecraft.levitation.desc": "You'll float too!",
    "effect.minecraft.slow_falling.desc": "Your descent speed is slowed.",
    "effect.minecraft.wither.desc": "It's poison, but actually kills!"
  })
  if (Platform.isLoaded('aether')) {
    event.add('aether', 'effect.aether.inebriation.desc', 'Movement controls invert while spontaneous movement occurs at the same time.')
  }
  if (Platform.isLoaded('atmospheric')) {
    event.addAll('atmospheric', {
      "effect.atmospheric.relief.desc": "If incoming damage is greater than or equal to the effect level you are healed, healing received is equal to that effect level.",
      "effect.atmospheric.worseining.desc": "If incoming damage is greater than or equal to the effect the user is damaged, damage received is equal to the effect level."
    })
  }
  if (Platform.isLoaded('autumnity')) {
    event.add("effect.autumnity.extension.desc", "Any effects gained while the user has this effect gain an additional 30 seconds. Does not stack!")
  }
  if (Platform.isLoaded('irons_spellbooks')) {
    event.add('irons_spellbooks', "effect.irons_spellbooks.instant_mana.desc", "Instantly gain mana!")
  }
  if (Platform.isLoaded('mutantmonsters')) {
    event.add('mutantmonsters', 'effect.mutantmonsters.chemical_x.desc', 'Nothing bad should happen if you happen to spill this on an entity... right?')
  }
})