// requires: bettercombat

/**
 * @file Better Combat server handler.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let kjsItems = {
  final_sword: 'claymore',
  final_pickaxe: 'mace',
  final_shovel: 'halberd',
  final_hoe: 'scythe',
  final_katana: 'katana',
  final_scythe: 'scythe',
  crystal_lance: 'lance',
  crimson_moons_semblance: 'scythe'
}

let finalityItems = {
  final_sword: 'claymore',
  final_pickaxe: 'mace'
}

ServerEvents.lowPriorityData(event => {
  for (const [item, type] of Object.entries(kjsItems)) {
    event.addJson(`kubejs:weapon_attributes/${item}.json`, {
      "parent": `bettercombat:${type}`
    })
  }
  if (Platform.isLoaded('finality')) {
    for (const [item, type] of Object.entries(finalityItems)) {
      event.addJson('finality:weapon_attributes/' + item + '.json', {
        "parent": `bettercombat:${type}`
      })
    }
  }
  /**
   * @summary Adds a custom weapon type to the Better Combat schema.
   * @param {string} modName 
   * @param {string} itemId 
   * @param {string} weaponType - Valid types are:
   * - claymore (two-handed, two swings and one downward strike)
   * - hammer (dual-wieldable, two side swings and one downward strike)
   * - double_axe (unkown)
   * - scythe (two-handed, heavy side swings)
   * - halberd (two-handed, downward strike then forward stab)
   * - glaive ()
   * - spear ()
   * - lance (dual-wieldable, fast forward stab)
   * - anchor (non-dual-wieldable, single downward strike)
   * - battlestaff (non-dual-wieldable, too fast to document on fans)
   * - claw
   * - fist (one-handed, a literal punch)
   * - trident (one-handed, lance like stab)
   * - katana (two-handed, two side swings, four downward strikes)
   * - rapier
   * - sickle
   * - soul_knife
   * - dagger
   * - wand
   * - mace
   * - axe
   * - coral_blade
   * - twin_blaze
   * - cutlass
   * - sword
   */
  function bcTypeCustom(modName, itemId, weaponType) {
    event.addJson(`${modName}:weapon_attributes/${itemId}.json`, {
      "parent": `bettercombat:${weaponType}`
    })
  }
  if (Platform.isLoaded('aquamirae')) {
    let aquamiraeItems = {
      divider: 'sword',
      fin_cutter: 'cutlass',
      poisoned_blade: 'cutlass',
      remnants_saber: 'cutlass',
      whisper_of_the_abyss: 'lance'
    }
    for (const [item, type] of Object.entries(aquamiraeItems)) {
      event.addJson(`aquamirae:weapon_attributes/${item}.json`, {
        "parent": `bettercombat:${type}`
      })
    }
  }
  if (Platform.isLoaded('enigmaticlegacy')) {
    let enigmaticLegacyItems = {
      etherium_pickaxe: 'mace',
      etherium_shovel: 'halberd',
      infernal_shield: 'mace',
      astral_breaker: 'double_axe'
    }
    for (const [item, type] of Object.entries(enigmaticLegacyItems)) {
      event.addJson(`enigmaticlegacy:weapon_attributes/${item}.json`, {
        "parent": `bettercombat:${type}`
      })
    }
  }
  if (Platform.isLoaded('grimoireofgaia')) {
    let gogItems = {
      metal_club: 'axe'
    }
    for (const [item, type] of Object.entries(gogItems)) {
      event.addJson(`grimoireofgaia:weapon_attributes/${item}.json`, {
        "parent": `bettercombat:${type}`
      })
    }
    let weaponBooks = [
      'weapon_book',
      'weapon_book_freezing',
      'weapon_book_nightmare',
      'weapon_book_metal',
      'weapon_book_ender',
      'weapon_book_hunger',
      'weapon_book_battle',
      'weapon_book_nature',
      'weapon_book_wither'
    ]
    weaponBooks.forEach(book => {
      event.addJson(`grimoireofgaia:weapon_attributes/${book}.json`, {
        "parent": "bettercombat:cutlass"
      })
    })
    let weaponFans = [
      'fan',
      'fan_fire',
      'fan_ice'
    ]
    weaponFans.forEach(fan => {
      event.addJson(`grimoireofgaia:weapon_attributes/${fan}.json`, {
        "parent": "bettercombat:cutlass"
      })
    })
  }
})