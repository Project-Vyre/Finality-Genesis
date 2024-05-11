// ignored: true

/**
 * @file Adds tooltips without using Create's registry.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
Old stuff. May use later in the future.

Probably don't need the [] in some areas.
*/

ItemEvents.tooltip(event => {
  event.add('minecraft:campfire', Text.gold('Campfires can now regenerate your health. <wave>Cozy!</wave>'))
  event.add('minecraft:soul_campfire', Text.aqua('Soul Campfires can now regenerate your health. <wave>Cozy!</wave>'))
  event.add('minecraft:bone_meal', Text.gray('Can now universally bone meal a lot of things!'))
  event.add('kubejs:denied_result', Text.red('<shake>This item now has a different method or methods of crafting.</shake>'))
  event.add('kubejs:removed_item', Text.red('<shake>This item has been removed.</shake>'))
  event.add('minecraft:fletching_table', Text.gold('Now has a purpose and can actually make arrows!'))
  event.add('create:chromatic_compound', '<rainb>Either throw into the void or into a beacon or an intense light source like glowstone.</rainb>')
  event.add('create:refined_radiance', Text.white('Used for decoration purposes.'))
  event.add('create:shadow_steel', Text.darkGray('Used for decoration purposes.'))
  event.add('create:refined_radiance_casing', Text.white('Used for decoration purposes.'))
  event.add('create:shadow_steel_casing', Text.darkGray('Used for decoration purposes.'))
  // Fix provided by Reveter#1305 on latvian.dev
  event.addAdvanced('patchouli:guide_book', ((item, advanced, text) => {
    if (!item.hasNBT()) return;
    if (item.nbt['patchouli:book'] == 'patchouli:tome_of_finality') {
      text.add(Component.lightPurple("Hi! Please use this book, it's important modpack documentation."))
      text.add(Component.lightPurple("The book also serves as progression tracking in the absence of FTB Quests."))
      text.add(Component.lightPurple("Entries in the Genesis category are spoiler free and are targeted at new players!"))
      text.add(Component.lightPurple("- Overseers of Finality"))
    }
  }))
  event.addAdvanced('minecraft:wooden_pickaxe', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, [
        Text.of('You can now ').white(),
        Text.of('repair ').green().bold(true),
        Text.of('tools with the material they are made of in your ').white(),
        Text.of('crafting grid').gold(),
        Text.of('.').white()
      ])
      text.add(2, [
        Text.of('If you are wondering.. yes, this also applies to ').white(),
        Text.of('Diamond ').aqua(),
        Text.of('and ').white(),
        Text.of('Netherite ').darkGray(),
        Text.of('and other tools as well.').white()
      ])
      text.add(3, [
        'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
      ])
    }
  })
  event.addAdvanced('minecraft:stone_pickaxe', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, [
        Text.of('You can now ').white(),
        Text.of('repair ').green().bold(true),
        Text.of('tools with the material they are made of in your ').white(),
        Text.of('crafting grid').gold(),
        Text.of('.').white()
      ])
      text.add(2, [
        Text.of('If you are wondering.. yes, this also applies to ').white(),
        Text.of('Diamond ').aqua(),
        Text.of('and ').white(),
        Text.of('Netherite ').darkGray(),
        Text.of('and other tools as well.').white()
      ])
      text.add(3, [
        'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
      ])
    }
  })
  event.addAdvanced('minecraft:iron_pickaxe', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, [
        Text.of('You can now ').white(),
        Text.of('repair ').green().bold(true),
        Text.of('tools with the material they are made of in your ').white(),
        Text.of('crafting grid').gold(),
        Text.of('.').white()
      ])
      text.add(2, [
        Text.of('If you are wondering.. yes, this also applies to ').white(),
        Text.of('Diamond ').aqua(),
        Text.of('and ').white(),
        Text.of('Netherite ').darkGray(),
        Text.of('and other tools as well.').white()
      ])
      text.add(3, [
        'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
      ])
    }
  })
  event.addAdvanced('minecraft:beacon', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, Text.green('Gives positive effects to players in a certain radius.').bold(true))
      text.add(2, Text.red('Requires a base built out of precious metals or gems to function!'))
      text.add(3, [
        Text.white('Iron, '),
        Text.gold('Gold '),
        Text.aqua('Diamond, '),
        Text.green('Emerald '),
        Text.white('or even '),
        Text.gray('Netherite '),
        Text.white('are valid materials.')
      ])
    }
  })
  event.addAdvanced('extendedcrafting:handheld_table', (item, advanced, text) => {
    text.add(1, Text.gray('You never have to use a Crafting Table block again!'))
    text.add(2, Text.gray('It is literally a hand held Crafting Table, what more can you ask for?'))
  })
  event.addAdvanced('farmersdelight:skillet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('[Shift] ').yellow(),
        Text.of('for more info.').gold()
      ])
    } else {
      text.add(1, [
        Text.of('The skillet can be used to cook ').gold(),
        Text.of('over an open flame ').yellow(),
        Text.of('or a ').gold(),
        Text.of('stove').yellow(),
        Text.of('.').gold(),
      ])
      text.add(2, [
        Text.of('It can also be occasionally used as a ').gold(),
        Text.of('weapon ').red(),
        Text.of('should the need ever arise.').gold()
      ])
      text.add(3, [
        Text.of('The alternative use is not recommended for the sake of the ').gold(),
        Text.of('durability ').yellow(),
        Text.of('of your skillet.').gold()
      ])
    }
  })
  if (Platform.isLoaded('alexsmobs')) {
    event.add('minecraft:carved_pumpkin', Text.gray('Used to scare away crows from your crops.'))
  }
  if (Platform.isLoaded('cloudstorage')) {
    event.add('cloudstorage:balloon_bit', Text.gray('With the power of the crafting table, you can make a new balloon from these pieces.'))
    event.addAdvanced('cloudstorage:cloud_chest', (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of('Hold ').darkGray(),
          Text.of('[Shift] ').gray(),
          Text.of('for more info.').darkGray()
        ])
      } else {
        text.add(1, [
          Text.of('Your very own ').gray(),
          Text.of('private ').aqua(),
          Text.of('cloud chest.').gray()
        ])
        text.add(2, [
          Text.of('Right click with a ').gray(),
          Text.of('normal balloon ').red(),
          Text.of('to set the channel that you want to access from the cloud.').gray()
        ])
        text.add(3, [
          Text.of('To change channels, right click with a ').gray(),
          Text.of('normal balloon ').red(),
          Text.of('in hand to safely remove the already connected balloon without it floating away.').gray()
        ])
        text.add(4, [
          Text.of('To ').gray(),
          Text.of('add ').green(),
          Text.of('more storage simply attach a balloon to a regular chest to send it up to the sky, literally.').gray()
        ])
      }
    })
    event.addAdvanced('cloudstorage:static_cloud_chest', (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of('Hold ').darkGray(),
          Text.of('[Shift] ').gray(),
          Text.of('for more info.').darkGray()
        ])
      } else {
        text.add(1, [
          Text.of('The ').gray(),
          Text.of('publicly accessible ').yellow(),
          Text.of('cloud chest.').gray()
        ])
        text.add(2, [
          Text.of('Right click with a ').gray(),
          Text.of('static charged ').aqua(),
          Text.of('balloon ').red(),
          Text.of('to set the channel that you want to access from the cloud.').gray()
        ])
        text.add(3, [
          Text.of('Right click with a ').gray(),
          Text.of('normal balloon ').red(),
          Text.of('to charge it with static electricity.').gray()
        ])
        text.add(4, [
          Text.of('To change channels, right click with a ').gray(),
          Text.of('normal balloon ').red(),
          Text.of('in hand to safely remove the already connected balloon without it floating away.').gray()
        ])
        text.add(5, [
          Text.of('To ').gray(),
          Text.of('add ').green(),
          Text.of('more storage attach a ').gray(),
          Text.of('static charged balloon ').aqua(),
          Text.of('to regular chests to send up to the sky, literally.').gray()
        ])
      }
    })
  }
  event.addAdvanced('eccentrictome:tome', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').darkPurple(),
        Text.of('[Shift] ').lightPurple(),
        Text.of('to see more info.').darkPurple()
      ])
    } else {
      text.add(1, Text.of('<rainb>Condenses many tools and books into one.</rainb>').bold(true))
      text.add(2, Text.white('Elegantly <rainb>presents</rainb> all the tools and ooks stored within it upon right click.'))
      text.add(3, Text.white('Simply punch the air to <rainb>convert</rainb> the Eccentric Tome back to its normal form.'))
      text.add(4, [
        Text.of('Diamond ').aqua(),
        Text.of('and ').white(),
        Text.of('Netherite ').gray(),
        Text.of('pickaxes, axes, shovels, hoes, shears, ').white(),
        Text.of('Wand of Symmetry ').gold(),
        Text.of('and ').white(),
        Text.of('Wrench ').gold(),
        Text.of('from ').white(),
        Text.of('Create ').yellow(),
        Text.of('are all allowed.').white(),
      ])
      text.add(5, ['To remove items from the reality breaking pocket universe within this book, simply crouch and drop with the item you want to remove.'])
      text.add(6, Text.red('<shake>DO NOT USE AS A CRAFTING INGREDIENT OR YOU WILL LOSE ALL STORED ITEMS!</shake>').bold(true))
    }
  })
  if (Platform.isLoaded('tempad')) {
    event.addAdvanced('tempad:tempad', (item, advanced, text) => {
      text.add(1, [
        Text.of('Has ').darkPurple(),
        Text.of('unlimited uses. ').lightPurple(),
        Text.of('Enjoy!').darkPurple()
      ])
    })
    event.addAdvanced('tempad:he_who_remains_tempad', (item, advanced, text) => {
      text.add(1, [
        Text.of('The property of ').darkPurple(),
        Text.of('"He Who Remains"').lightPurple()
      ])
    })
  }
  if (Platform.isLoaded('quark')) {
    event.add('quark:abacus', Text.gray('A tool used to measure distance. Right click on a block face to use.'))
  }
  if (Platform.isLoaded('autumnity')) {
    event.add('autumnity:sappy_maple_log', Text.gray('Right click with a glass bottle to extract sap.'))
    event.add('autumnity:sappy_maple_wood', Text.gray('Right click with a glass bottle to extract sap.'))
    event.add('autumnity:foul_berries', Text.gray('Can be fed to turkeys.'))
  }
  if (Platform.isLoaded('backpacked')) {
    event.addAdvanced('backpacked:backpack', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gold(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gold()
        ])
      } else {
        text.add(1, [
          Text.of('Press ').white(),
          Text.of('[B] ').gold(),
          Text.of('to open when worn.').white()
        ])
        text.add(2, [
          Text.of('Also highly ').white(),
          Text.of('<rainb>customizable</rainb> ').aqua(),
          Text.of('when satisfying the results of certain challenges.').white()
        ])
      }
    })
  }
  if (Platform.isLoaded('cataclysm')) {
    event.addAdvanced('cataclysm:infernal_forge', (item, advanced, text) => {
      text.set(1, Text.of('§6Right click on a block to cause AoE damage around yourself, it sends mobs flying.')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
      text.set(2, Text.of('§6Also important to note, this is actually a pickaxe.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:monstrous_helm', (item, advanced, text) => {
      text.add(1, Text.of('§6Falling below half of your HP will push away entities and grant buffs.'))
      text.add(2, Text.of('§6You are given additional Defense, Knockback Resistance and Regeneration.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:the_incinerator', (item, advanced, text) => {
      text.add(1, Text.of('§6Hold right click for 3 seconds until you hear a sound.'))
      text.add(2, Text.of('§6After hearing the roar of the flames, let go to unleash devastation in a straight line.'))
      text.add(3, Text.of('§6WARNING: Dropped items in the line of fire will be destroyed!'))
      text.add(4, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:bulwark_of_the_flame', (item, advanced, text) => {
      text.add(1, Text.of('§6Functions regularly like a shield, but with a charge ability.'))
      text.add(2, Text.of('§6While sneaking and blocking, let go of the right mouse button to charge forward.'))
      text.add(3, Text.of('§6Entities that collide with a wall are stunned from the impact and take additional damage.'))
      text.add(4, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:void_scatter_arrow', (item, advanced, text) => {
      text.add(1, Text.of('§6This arrow explodes on impact, creating many fragments in the process.'))
    })
    event.addAdvanced('cataclysm:void_core', (item, advanced, text) => {
      text.add(1, Text.of('§6Right click on the ground to cause Void Rune spikes to erupt in a straight line in front of you.'))
      text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:gauntlet_of_guard', (item, advanced, text) => {
      text.add(1, Text.of('§6When held in your main hand, you can pull entities towards you by holding right click.'))
      text.add(2, Text.of('§6Be sure to give them a golden punch afterwards!'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    // Ignitium Armor corrections
    event.addAdvanced('cataclysm:ignitium_helmet', (item, advanced, text) => {
      text.add(1, Text.of('§6Provides Lava Vision.'))
      text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:ignitium_chestplate', (item, advanced, text) => {
      text.add(1, Text.of('§6You can combine an Elytra with this in the Smithing Table.'))
      text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:ignitium_leggings', (item, advanced, text) => {
      text.add(1, Text.of('§6The developer, L_Ender says "Flame Reflex" ...but the item fails to give any form of Fire Resistance.'))
      text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:ignitium_boots', (item, advanced, text) => {
      text.add(1, Text.of('§6Lava Walker, allows you to walk on lava.'))
      text.add(2, Text.of("§6DOES NOT provide Fire Resistance, even with the full set!"))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    // cataclysm 1192 items
    event.addAdvanced('cataclysm:wither_assault_shoulder_weapon', (item, advanced, text) => {
      text.add(1, Text.of('§6Hold and release right click to fire a Wither Missile that travels in a straight line and explodes'))
      text.add(2, Text.of('§6Hold Shift to use the alt fire which fires a Wither Howitzer projectile that follows an arced path.'))
      text.add(3, Text.of('§6Upon contact, the Howitzer projectile leaves a lingering smoke that applies the Wither effect.'))
      text.add(4, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:void_forge', (item, advanced, text) => {
      text.add(1, Text.of('§6Now creates a fan of void spikes when you right click a block, in addition to sending mobs flying.'))
      text.add(2, Text.of('§6Yes, this is still a pickaxe.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:gauntlet_of_bulwark', (item, advanced, text) => {
      text.add(1, Text.of('§6Hold right click to push nearby entities and give them the Blazing Brand debuff.'))
      text.add(2, Text.of('§6Releasing right click will make you charge forward and apply damage to the entities hit by you.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:void_assault_shoulder_weapon', (item, advanced, text) => {
      text.add(1, Text.of('§6The upgraded version of the Wither Assault Shoulder Weapon.'))
      text.add(2, Text.of('§6You can now shoot Void Howitzer projectiles which now create a tsunami of void spikes on impact.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:tidal_claws', (item, advanced, text) => {
      text.add(1, Text.of('§6Left click to attack multiple entities with a single tentacle.'))
      text.add(2, Text.of('§6Right click to use as a grappling hook.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:abyssal_egg', (item, advanced, text) => {
      text.add(1, Text.of('§6You emerge as victor, but now you have an egg in your possession.'))
      text.add(2, Text.of('§6Probably best to make sure you have some tropical fish to feed your adorable Leviathan once it hatches.'))
    })
  }
  if (Platform.isLoaded('chalk')) {
    event.addAdvanced('#chalk:chalks', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').white(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('Click on the ').gold(),
          Text.of('full side ').yellow(),
          Text.of('of a block to draw a mark.').gold()
        ])
        text.add(2, [
          Text.of('The ').gold(),
          Text.of('direction ').red(),
          Text.of('does matter and will point the arrow in that direction.').gold()
        ])
        text.add(3, [
          Text.of('The ').gold(),
          Text.of('Chalk Box ').green(),
          Text.of('is an easy way to store and use your chalks and can be ').gold(),
          Text.of('right clicked ').green(),
          Text.of('to open its inventory.')
        ])
      }
    })
    event.addAdvanced('chalk:chalk_box', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').white(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('Click on the ').gold(),
          Text.of('full side ').yellow(),
          Text.of('of a block to draw a mark.').gold()
        ])
        text.add(2, [
          Text.of('The ').gold(),
          Text.of('direction ').red(),
          Text.of('does matter and will point the arrow in that direction.').gold()
        ])
        text.add(3, [
          Text.of('The ').gold(),
          Text.of('special slot ').green(),
          Text.of('is used for ').gold(),
          Text.of('glow ink sacs ').aqua(),
          Text.of('to make ').gold(),
          Text.of('glowing ').aqua(),
          Text.of('chalk marks.').gold()
        ])
      }
    })
  }
  if (Platform.isLoaded('salt')) {
    event.addAdvanced('salt:salt', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').white(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('Enhances ').gold(),
          Text.of('food items').yellow(),
          Text.of('.').gold()
        ])
        text.add(2, [
          Text.of('To use simply ').gold(),
          Text.of('combine ').green(),
          Text.of('with *any food item in a crafting grid.').gold()
        ])
        text.add(3, [
          Text.of('*Please note that food items need the ').gold(),
          Text.of('#salt:can_be_salted ').green(),
          Text.of('tag. ').gold()
        ])
      }
    })
  }
})