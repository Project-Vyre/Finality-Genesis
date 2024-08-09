// priority: 6
// requires: supplementaries

/**
 * @file Server handler for certain player actions...
 * @author pietro-lopes <https://github.com/pietro-lopes> AKA Uncandango
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// Preventive measures are a work in progress...
PlayerEvents.inventoryChanged(event => {
  const { item, level, player } = event
  const { x, y, z } = player
  if (item.hasTag('create:sandpaper') && !player.persistentData.struckBySandpaper) {
    if (item.hasEnchantment('minecraft:mending', 1) ||
      item.hasEnchantment('minecraft:unbreaking', 1) ||
      item.hasEnchantment('apotheosis:life_mending', 1)
    ) {
      level.spawnLightning(x, y, z, false)
      player.tell([
        Component.of('Heavenly Principles: ').bold().red(),
        Component.of('You are a '),
        Component.of('<shake>lazy</shake>').red(),
        Component.of(' engineer. As a '),
        Component.of('consequence').red(),
        Component.of(', a '),
        Component.of('curse').lightPurple(),
        Component.of(' has been inflicted upon you. If you wish to '),
        Component.of('remove').green(),
        Component.of(' it, cleanse yourself with soap.')
      ])
      player.persistentData.struckBySandpaper = true
    }
  } else if (item.hasTag('create:sandpaper') && player.persistentData.struckBySandpaper) {
    if (item.hasEnchantment('minecraft:mending', 1) ||
      item.hasEnchantment('minecraft:unbreaking', 1) ||
      item.hasEnchantment('apotheosis:life_mending', 1)
    ) {
      player.setHealth(2)
      player.potionEffects.add('minecraft:slowness', 999999, 255, false, false)
      player.potionEffects.add('minecraft:wither', 999999, 255, false, false)
      player.inventory.clear('#create:sandpaper')
      event.server.scheduleInTicks(240, t => {
        player.kill()
      })
      player.tell([
        Component.of('Heavenly Principles: ').bold().red(),
        Component.of('If you insist on keeping it... ').red()
      ])
    }
  }
  if (item.getId() == 'create:super_glue' && !player.persistentData.struckBySuperglue) {
    if (item.hasEnchantment('minecraft:mending', 1) ||
      item.hasEnchantment('minecraft:unbreaking', 1) ||
      item.hasEnchantment('apotheosis:life_mending', 1)
    ) {
      level.spawnLightning(x, y, z, false)
      player.tell([
        Component.of('Heavenly Principles: ').bold().red(),
        Component.of('You are a '),
        Component.of('<shake>lazy</shake>').red(),
        Component.of(' engineer. As a '),
        Component.of('consequence').red(),
        Component.of(', a '),
        Component.of('curse').lightPurple(),
        Component.of(' has been inflicted upon you. If you wish to '),
        Component.of('remove').green(),
        Component.of(' it, cleanse yourself with soap.')
      ])
      player.persistentData.struckBySuperglue = true
    }
  } else if (item.getId() == 'create:super_glue' && player.persistentData.struckBySuperglue) {
    if (item.hasEnchantment('minecraft:mending', 1) ||
      item.hasEnchantment('minecraft:unbreaking', 1) ||
      item.hasEnchantment('apotheosis:life_mending', 1)
    ) {
      player.setHealth(2)
      player.potionEffects.add('minecraft:slowness', 999999, 255, false, false)
      player.potionEffects.add('minecraft:wither', 999999, 255, false, false)
      player.inventory.clear('create:super_glue')
      event.server.scheduleInTicks(240, t => {
        player.kill()
      })
      player.tell([
        Component.of('Heavenly Principles: ').bold().red(),
        Component.of('If you insist on keeping it... ').red()
      ])
    }
  }
  switch (item.getId()) {
    case 'kubejs:denied_result':
      player.tell([
        Component.of('System: ').bold().green(),
        Component.of('That recipe result has been denied.').lightPurple()
      ])
      player.inventory.clear('kubejs:denied_result')
      break;
    case 'kubejs:removed_item':
      player.tell([
        Component.of('System: ').bold().green(),
        Component.of('That item has been removed.').red()
      ])
      player.inventory.clear('kubejs:removed_item')
      break;
    default:
      break;
  }
  if ((item.getId() == 'minecraft:spawner' && !player.isCreative() && item.hasNBT())
    && item.nbt?.BlockEntityTag?.SpawnData?.entity?.id == 'minecraft:wandering_trader'
  ) {
    player.inventory.clear(item.strongNBT())
    player.tell([
      Component.of('System: ').bold().green(),
      Component.of('That item is not allowed.').red()
    ])
  }
  if ((item.getId() == 'minecraft:spawner' && !player.isCreative() && item.hasNBT())
    && item.nbt?.BlockEntityTag?.SpawnData?.entity?.id == 'minecraft:villager'
  ) {
    player.inventory.clear(item.strongNBT())
    player.tell([
      Component.of('System: ').bold().green(),
      Component.of('That item is not allowed.').red()
    ])
  }
  if ((item.getId() == 'minecraft:spawner' && !player.isCreative() && item.hasNBT())
    && item.nbt?.BlockEntityTag?.SpawnData?.entity?.id == 'mowziesmobs:grottol'
  ) {
    player.inventory.clear(item.strongNBT())
    player.tell([
      Component.of('System: ').bold().green(),
      Component.of('That item is not allowed.').red()
    ])
  }
  if ((item.getId() == 'minecraft:spwaner' && !player.isCreative() && item.hasNBT())
    && item.nbt?.BlockEntityTag?.SpawnData?.entity?.id == 'aether:blue_swet'
  ) {
    player.inventory.clear(item.strongNBT())
    player.tell([
      Component.of('System: ').bold().green(),
      Component.of('That item is not allowed.').red()
    ])
  }
  if ((item.getId() == 'minecraft:spawner' && !player.isCreative() && item.hasNBT())
    && item.nbt?.BlockEntityTag?.SpawnData?.entity?.id == 'aether:golden_swet'
  ) {
    player.inventory.clear(item.strongNBT())
    player.tell([
      Component.of('System: ').bold().green(),
      Component.of('That item is not allowed.').red()
    ])
  }
  if (Platform.isLoaded('createaddition')) {
    switch (item.getId()) {
      case 'createaddition:diamond_grit':
        player.tell([
          Component.of('System: ').bold().green(),
          Component.of('That item has been removed.').red()
        ])
        player.inventory.clear('createaddition:diamond_grit')
        break;

      case 'createaddition:diamond_grit_sandpaper':
        player.tell([
          Component.of('System: ').bold().green(),
          Component.of('That item has been removed.').red()
        ])
        player.inventory.clear('createaddition:diamond_grit_sandpaper')
        break;

      default:
        break;
    }
  }
  if (Platform.isLoaded('gag') && item.getId() == 'gag:hearthstone') {
    level.spawnLightning(x, y, z, false)
    player.tell(Text.darkRed('<shake>You have an item you that you were not supposed to have.</shake>'))
    player.inventory.clear('gag:hearthstone')
  }
  if (Platform.isLoaded('mysticalagriculture')) {
    switch (item.getId()) {
      case 'mysticalagriculture:basic_reprocessor':
        player.tell([
          Component.of('System: ').bold().green(),
          Component.of('That item has been removed.').red()
        ])
        player.inventory.clear('mysticalagriculture:basic_reprocessor')
        break;

      case 'mysticalagriculture:inferium_reprocessor':
        player.tell([
          Component.of('System: ').bold().green(),
          Component.of('That item has been removed.').red()
        ])
        player.inventory.clear('mysticalagriculture:inferium_reprocessor')
        break;

      case 'mysticalagriculture:prudentium_reprocessor':
        player.tell([
          Component.of('System: ').bold().green(),
          Component.of('That item has been removed.').red()
        ])
        player.inventory.clear('mysticalagriculture:prudentium_reprocessor')
        break;

      case 'mysticalagriculture:tertium_reprocessor':
        player.tell([
          Component.of('System: ').bold().green(),
          Component.of('That item has been removed.').red()
        ])
        player.inventory.clear('mysticalagriculture:tertium_reprocessor')
        break;

      case 'mysticalagriculture:imperium_reprocessor':
        player.tell([
          Component.of('System: ').bold().green(),
          Component.of('That item has been removed.').red()
        ])
        player.inventory.clear('mysticalagriculture:imperium_reprocessor')
        break;

      case 'mysticalagriculture:supremium_reprocessor':
        player.tell([
          Component.of('System: ').bold().green(),
          Component.of('That item has been removed.').red()
        ])
        player.inventory.clear('mysticalagriculture:supremium_reprocessor')
        break;

      case 'mysticalagriculture:awakened_supremium_reprocessor':
        player.tell([
          Component.of('System: ').bold().green(),
          Component.of('That item has been removed.').red()
        ])
        player.inventory.clear('mysticalagriculture:awakened_supremium_reprocessor')
        break;

      default:
        break;
    }
  }
})

ItemEvents.firstRightClicked(event => {
  const { item, level, player } = event
  const { x, y, z } = player
  if (!Platform.isLoaded('graveyard')) {
    if (item.getId() == 'supplementaries:soap' &&
      (player.persistentData.struckBySandpaper || player.persistentData.struckBySuperglue)
    ) {
      player.persistentData.struckBySandpaper = false
      player.persistentData.struckBySuperglue = false
      player.tell([
        Component.of('Heavenly Principles: ').bold().red(),
        Component.of('You have been '),
        Component.of('cleansed').green(),
        Component.of(' of both curses.')
      ])
      player.inventory.clear('supplementaries:soap')
      player.potionEffects.add('minecraft:slowness', 100, 255, false, false)
      player.block.createEntity('minecraft:lightning').spawn()
      player.block.createEntity('minecraft:end_crystal').spawn()
    }
    if (item.getId() == 'minecraft:milk_bucket' &&
      (player.persistentData.struckBySandpaper || player.persistentData.struckBySuperglue)
    ) {
      player.tell([
        Component.of('Heavenly Principles: ').bold().red(),
        Component.of('Drinking milk will '),
        Component.of('not').red(),
        Component.of(' cure this curse.')
      ])
      player.inventory.clear('minecraft:milk_bucket')
      player.setHealth(2)
      player.potionEffects.add('minecraft:slowness', 999999, 255, false, false)
      player.potionEffects.add('minecraft:wither', 999999, 255, false, false)
      event.server.scheduleInTicks(200, t => {
        player.kill()
      })
    }
  } else if (Platform.isLoaded('graveyard')) {
    if (item.getId() == 'supplementaries:soap' &&
      (player.persistentData.struckBySandpaper || player.persistentData.struckBySuperglue)
    ) {
      player.persistentData.struckBySandpaper = false
      player.persistentData.struckBySuperglue = false
      player.tell([
        Component.of('Heavenly Principles: ').bold().red(),
        Component.of('You have been '),
        Component.of('cleansed').green(),
        Component.of(' of both curses.')
      ])
      player.inventory.clear('supplementaries:soap')
      player.potionEffects.add('minecraft:slowness', 100, 255, false, false)
      player.block.createEntity('graveyard:skeleton_creeper').spawn()
    }
    if (item.getId() == 'minecraft:milk_bucket' &&
      (player.persistentData.struckBySandpaper || player.persistentData.struckBySuperglue)
    ) {
      player.tell([
        Component.of('Heavenly Principles: ').bold().red(),
        Component.of('Drinking milk will '),
        Component.of('not').red(),
        Component.of(' cure this curse.')
      ])
      player.inventory.clear('minecraft:milk_bucket')
      player.setHealth(2)
      player.potionEffects.add('minecraft:slowness', 999999, 255, false, false)
      player.potionEffects.add('minecraft:wither', 999999, 255, false, false)
      event.server.scheduleInTicks(200, t => {
        player.kill()
      })
    }
  }
})

ItemEvents.foodEaten(event => {
  const { item } = event
  if (Platform.isLoaded('some_assembly_required') &&
    Platform.isLoaded('artifacts') &&
    item.getNbtString().includes('id:"artifacts:eternal_steak"')
  ) {
    event.server.tell([
      Component.of('Uh oh!\n').red(),
      Component.of('\nLooks like someone ate a sandiwch with '),
      Component.of('Eternal Steak ').gold(),
      Component.of('in it.')
    ])
    event.player.give('artifacts:eternal_steak')
  } else if (
    Platform.isLoaded('some_assembly_required') &&
    Platform.isLoaded('artifacts') &&
    item.getNbtString().includes('id:"artifacts:everlasting_beef"')
  ) {
    event.server.tell([
      Component.of('Uh oh!\n').red(),
      Component.of('\nLooks like someone ate a sandiwch with '),
      Component.of('Everlasting Beef ').gold(),
      Component.of('in it.')
    ])
    event.player.give('artifacts:everlasting_beef')
  }
})

BlockEvents.rightClicked(event => {
  const { block, level, player } = event
  const { x, y, z } = player
  if (block.id == 'minecraft:sculk_shrieker' && player.mainHandItem == 'minecraft:echo_shard') {
    player.inventory.clear('minecraft:echo_shard')
    block.up.createEntity('minecraft:warden').mergeNbt({
      PersistenceRequired: 1,
      Brain: {
        memories: {
          "minecraft:dig_cooldown": {
            value: {},
            ttl: 1200
          }
        }
      }
    }).spawn()
  }
})

/**
 * Set to true and paste player UUIDs as a string to prevent them from using Alex's Caves nuclear bombs.
 * @example UUID example: 'f037bc32-9f67-4ecf-96c1-ee685f54f702'
 */

let nuclearBlacklist = false

let nuclearWatchlist = [

]

if (nuclearBlacklist && Platform.isLoaded('alexscaves')) {
  ItemEvents.crafted('alexscaves:nuclear_bomb', event => {
    for (let i = 0; i < watchlist.length; i++) {
      let element = watchlist[i];
      if (event.player.uuid == element) {
        event.cancel()
      }
    }
  })
  PlayerEvents.inventoryChanged(event => {
    for (let i = 0; i < watchlist.length; i++) {
      let element = watchlist[i];
      if (event.player.uuid == element) {
        event.player.inventory.clear('alexscaves:nuclear_bomb')
      }
    }
  })
  BlockEvents.placed(event => {
    if (event.block.id == 'alexscaves:nuclear_bomb') {
      for (let i = 0; i < watchlist.length; i++) {
        let element = watchlist[i];
        if (event.player.uuid == element) {
          event.cancel()
        }
      }
    }
  })
}

/*
if (Platform.isLoaded('some_assembly_required') &&
    Platform.isLoaded('artifacts')
) {
    ItemEvents.foodEaten(event => {
        const { item } = event
        if (item.getNbtString().includes('id:"artifacts:eternal_steak"')) {
            event.server.tell([
                Component.of('Uh oh!\n').red(),
                Component.of('\nLooks like someone ate a sandiwch with '),
                Component.of('Eternal Steak ').gold(),
                Component.of('in it.')
            ])
            event.player.give('artifacts:eternal_steak')
        } else {
            if (item.getNbtString().includes('id:"artifacts:everlasting_beef"')) {
                event.server.tell([
                    Component.of('Uh oh!\n').red(),
                    Component.of('\nLooks like someone ate a sandiwch with '),
                    Component.of('Everlasting Beef ').gold(),
                    Component.of('in it.')
                ])
                event.player.give('artifacts:everlasting_beef')
            }
        }
    })
}
*/
/*
if (Platform.isLoaded('some_assembly_required') &&
    Platform.isLoaded('artifacts')
) {
    ItemEvents.foodEaten(event => {
        const { item } = event
        if (item.getNbtString().includes('id:"artifacts:eternal_steak"')) {
            event.server.tell([
                Component.of('Uh oh!\n').red(),
                Component.of('\nLooks like someone ate a sandiwch with '),
                Component.of('Eternal Steak ').gold(),
                Component.of('in it.')
            ])
            event.player.give('artifacts:eternal_steak')
        } else {
            if (item.getNbtString().includes('id:"artifacts:everlasting_beef"')) {
                event.server.tell([
                    Component.of('Uh oh!\n').red(),
                    Component.of('\nLooks like someone ate a sandiwch with '),
                    Component.of('Everlasting Beef ').gold(),
                    Component.of('in it.')
                ])
                event.player.give('artifacts:everlasting_beef')
            }
        }
    })
}
*/

/*
Item.of('some_assembly_required:sandwich').hasNBT().getNbtString().includes('id:"artifacts:eternal_steak"')
Item.of('some_assembly_required:sandwich', '{BlockEntityTag:{Sandwich:[{Count:1b,id:"some_assembly_required:bread_slice"},{Count:1b,id:"artifacts:eternal_steak"},{Count:1b,id:"some_assembly_required:bread_slice"}]}}')
PlayerEvents.inventoryChanged(event => {
    const { item, level, player } = event
    const { x, y, z } = player
    if (item.hasTag('create:sandpaper') && !player.persistentData.struckBySandpaper) {
        if (item.hasEnchantment('minecraft:mending', 1) || item.hasEnchantment('minecraft:unbreaking', 1)) {
            level.spawnLightning(x, y, z, false)
            player.tell(Text.darkRed("<shake>You are a lazy engineer.</shake>"))
            player.persistentData.struckBySandpaper = true
        }
    }
})

*/