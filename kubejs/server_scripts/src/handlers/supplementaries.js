// requires: supplementaries
// requires: create

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'supplementaries:wall_lantern',
    '#supplementaries:hanging_signs',
    '#supplementaries:item_shelves',
    'supplementaries:iron_gate',
    'supplementaries:gold_gate',
  ])
})