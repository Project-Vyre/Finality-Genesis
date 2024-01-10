// requires: finalitycore
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.recipes.create.sandpaper_polishing(
        'minecraft:nether_wart',
        'finalitycore:living_netherwart' // correct later to 'finalitycore:living_nether_wart'
    ).id('finality:sandpaper_polising/nether_wart')
    event.recipes.create.haunting(
        'finalitycore:living_netherwart_seed',
        'minecraft:nether_wart'
    ).id('finality:haunting/living_nether_wart')
})