// priority: 0
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.shaped('kubejs:final_helmet', [
    'EEE',
    'E E'
  ], {
    E: 'kubejs:high_entropy_alloy',
  }).id('finality:crafting/final_helmet')
  event.shaped('kubejs:final_chestplate', [
    'E E',
    'EEE',
    'EEE'
  ], {
    E: 'kubejs:high_entropy_alloy'
  }).id('finality:crafting/final_chestplate')
  event.shaped('kubejs:final_leggings', [
    'EEE',
    'E E',
    'E E'
  ], {
    E: 'kubejs:high_entropy_alloy'
  }).id('finality:crafting/final_leggings')
  event.shaped('kubejs:final_boots', [
    'E E',
    'E E'
  ], {
    E: 'kubejs:high_entropy_alloy'
  }).id('finality:crafting/final_boots')
  event.shaped('kubejs:final_sword', [
    'E',
    'E',
    'S'
  ], {
    E: 'kubejs:high_entropy_alloy',
    S: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:crafting/final_sword')
  event.shaped('kubejs:final_pickaxe', [
    'EEE',
    ' S ',
    ' S '
  ], {
    E: 'kubejs:high_entropy_alloy',
    S: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:crafting/final_pickaxe')
  event.shaped('kubejs:final_axe', [
    'EE',
    'ES',
    ' S'
  ], {
    E: 'kubejs:high_entropy_alloy',
    S: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:crafting/final_axe')
  event.shaped('kubejs:final_shovel', [
    'E',
    'S',
    'S'
  ], {
    E: 'kubejs:high_entropy_alloy',
    S: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:crafting/final_shovel')
  if (Platform.isLoaded('paxeljs')) {
    event.shaped('kubejs:final_paxel', [
      'ABC',
      ' S ',
      ' S '
    ], {
      A: 'kubejs:final_axe',
      B: 'kubejs:final_shovel',
      C: 'kubejs:final_pickaxe',
      S: 'kubejs:high_entropy_alloy_rod'
    }).id('finality:crafting/final_paxel')
  }
  event.shaped('kubejs:final_hoe', [
    'EE',
    ' S',
    ' S'
  ], {
    E: 'kubejs:high_entropy_alloy',
    S: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:crafting/final_hoe')
  event.shaped('kubejs:final_scythe', [
    'EEE',
    ' SE',
    ' S '
  ], {
    E: 'kubejs:high_entropy_alloy',
    S: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:crafting/final_scythe')
  event.recipes.create.mechanical_crafting('kubejs:crystal_lance', [
    'BAB',
    'BAB',
    'NNN',
    ' N ',
    ' N ',
    ' N ',
    ' N '
  ], {
    A: 'minecraft:amethyst_shard',
    B: 'minecraft:echo_shard',
    N: 'minecraft:netherite_ingot'
  }).id('finality:crystal_lance')
  event.recipes.create.mechanical_crafting('kubejs:final_katana', [
    ' E ',
    ' E ',
    ' E ',
    'GGG',
    ' I '
  ], {
    E: 'kubejs:high_entropy_alloy',
    G: 'minecraft:amethyst_shard',
    I: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:mechanical_crafting/final_katana')
  event.recipes.create.mechanical_crafting('kubejs:final_lance', [
    '  E  ',
    '  E  ',
    'IIIII',
    'I I I',
    '  I  ',
    '  I  ',
    '  I  '
  ], {
    E: 'kubejs:high_entropy_alloy',
    I: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:mechanical_crafting/final_lance')
  event.smithing(
    'kubejs:final_lance',
    'kubejs:crystal_lance',
    'kubejs:high_entropy_alloy'
  ).id('finality:smithing/crystal_lance_entropy_upgrade')
})