// requires: exposure
// requires: create

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', 'exposure:lightroom')
})