// requires: fusion

ServerEvents.recipes(event => {
  event.recipes.minecraft.stonecutting(
    'kubejs:high_entropy_alloy_block_connecting',
    'kubejs:high_entropy_alloy_block'
  ).id('finality:high_entropy_alloy_block_connecting_conversion')
  event.recipes.minecraft.stonecutting(
    'kubejs:high_entropy_alloy_block',
    'kubejs:high_entropy_alloy_block_connecting'
  ).id('finality:high_entropy_alloy_block_deconnecting')
})