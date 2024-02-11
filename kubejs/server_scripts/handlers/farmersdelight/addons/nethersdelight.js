// requires: nethersdelight
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.create.haunting(
    'nethersdelight:hoglin_loin',
    'minecraft:porkchop'
  ).id('finality:nethersdelight/haunting/hoglin_loin')
})

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'nethersdelight:blackstone_furnace',
    'nethersdelight:blackstone_blast_furnace'
  ])
})