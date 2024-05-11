// requires: windswept
// requires: create

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'windswept:holly_beehive',
    'windswept:chestnut_beehive'
  ])
})