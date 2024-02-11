// requires: create_jetpack
// requires: kubejs_create
// ignored: true

ServerEvents.recipes(event => {
  event.remove([
    { id: 'create_jetpack:jetpack' },
    { id: 'create_jetpack:netherite_jetpack' }
  ])
  event.recipes.create.mechanical_crafting('create_jetpack:jetpack', [
    ' SAS ',
    'SPBPS',
    'SU US',
    ' C C '
  ], {
    S: '#forge:plates/brass',
    A: 'create:shaft',
    B: 'create:copper_backtank',
    P: 'create:precision_mechanism',
    U: 'create:smart_chute',
    C: 'create:chute'
  }).id('finality:mechanical_crafting/cj_jetpack')
  event.recipes.create.mechanical_crafting('create_jetpack:netherite_jetpack', [
    ' SAS ',
    'SPBPS',
    'SU US',
    ' C C '
  ], {
    S: '#forge:plates/netherite',
    A: 'create:shaft',
    B: 'create:netherite_backtank',
    P: 'create:precision_mechanism',
    U: 'create:smart_chute',
    C: 'create:chute'
  }).id('finality:mechanical_crafting/cj_netherite_jetpack')
})