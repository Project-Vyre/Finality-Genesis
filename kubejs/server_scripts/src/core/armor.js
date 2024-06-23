// requires: create

/**
 * @file Final Armor server handler.
 * 
 * @author pietro-lopes <https://github.com/pietro-lopes> AKA Uncandango in the KubeJS Discord. Fixed issues related to damage cancel script
 * @author puu7693 <https://github.com/puu7693> for writing the script that grants potion effects when wearing a specific set of armor
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

EntityEvents.hurt(event => {
  if (!event.player) return
  if (event.player.getHeadArmorItem() === 'kubejs:final_helmet' &&
    event.player.getChestArmorItem() === 'kubejs:final_chestplate' &&
    event.player.getLegsArmorItem() === 'kubejs:final_leggings' &&
    event.player.getFeetArmorItem() === 'kubejs:final_boots'
  ) {
    event.player.setHealth(100)
    event.cancel()
  }
  if (event.player.getHeadArmorItem() === 'kubejs:final_helmet' &&
    event.player.getChestArmorItem() === 'create:netherite_backtank' &&
    event.player.getLegsArmorItem() === 'kubejs:final_leggings' &&
    event.player.getFeetArmorItem() === 'kubejs:final_boots'
  ) {
    event.player.setHealth(100)
    event.cancel()
  }
})

EntityEvents.death(event => {
  if (!event.player) return
  if (event.player.getHeadArmorItem() === 'kubejs:final_helmet' &&
    event.player.getChestArmorItem() === 'kubejs:final_chestplate' &&
    event.player.getLegsArmorItem() === 'kubejs:final_leggings' &&
    event.player.getFeetArmorItem() === 'kubejs:final_boots'
  ) {
    event.player.setHealth(10)
    event.cancel()
  }
  if (event.player.getHeadArmorItem() === 'kubejs:final_helmet' &&
    event.player.getChestArmorItem() === 'create:netherite_backtank' &&
    event.player.getLegsArmorItem() === 'kubejs:final_leggings' &&
    event.player.getFeetArmorItem() === 'kubejs:final_boots'
  ) {
    event.player.setHealth(10)
    event.cancel()
  }
})

const set = {
  "name": "kubejs:final",
  "effects": [
    {
      "effect": "saturation",
      "duration": 400,
      "amplifier": 255
    },
    {
      "effect": "haste",
      "duration": 400,
      "amplifier": 2
    },
    {
      "effect": "strength",
      "duration": 400,
      "amplifier": 3
    },
    {
      "effect": "speed",
      "duration": 400,
      "amplifier": 3
    },
    {
      "effect": "fire_resistance",
      "duration": 400,
      "amplifier": 3
    },
    {
      "effect": "jump_boost",
      "duration": 400,
      "amplifier": 3
    },
    {
      "effect": "luck",
      "duration": 400,
      "amplifier": 5
    },
    {
      "effect": "night_vision",
      "duration": 400,
      "amplifier": 1
    }
  ]
}

const sets = [set];

PlayerEvents.tick(event => {
  const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = event.player;
  if (event.player.level.time % 100 === 0) {
    for (let armorSet in sets) {
      if (headArmorItem.id === sets[armorSet].name + '_helmet' &&
        chestArmorItem.id === sets[armorSet].name + '_chestplate' &&
        legsArmorItem.id === sets[armorSet].name + '_leggings' &&
        feetArmorItem.id === sets[armorSet].name + '_boots'
      ) {
        for (let x in sets[armorSet].effects) {
          event.player.potionEffects.add(
            sets[armorSet].effects[x].effect,
            sets[armorSet].effects[x].duration,
            sets[armorSet].effects[x].amplifier,
            false,
            false
          )
        }
      }
    }
  }
  /*
  if (event.player.getHeadArmorItem() === 'kubejs:final_helmet' &&
    event.player.getHeadArmorItem() === 'kubejs:final_chestplate' &&
    event.player.getHeadArmorItem() === 'kubejs:final_leggings' &&
    event.player.getHeadArmorItem() === 'kubejs:final_boots'
  ) {
    if (event.player.jumping) {
      event.player.tell('Rocket jump!')
      event.player.level.createExplosion()
        .exploder(event.entity.player)
        .strength(10)
        .explosionMode('mob')
        .explode();
    }
  }
  */
})