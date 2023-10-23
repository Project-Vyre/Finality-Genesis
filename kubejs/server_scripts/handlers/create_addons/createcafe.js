// requires: createcafe
// requires: kubejs_create

/**
 * Authors
 * 
 * @CelestialAbyss
 */

console.log('Uhhmmm... Create Cafe, no one wants to drink non-water fluids.')
console.log('No sea oil, bioethanol or cryo fuel in our drinks... thank you.')

ServerEvents.tags('fluid', event => {
    event.remove('forge:water', [
        'ad_astra:oil',
        'ad_astra:fuel',
        'ad_astra:cryo_fuel',
        'createaddition:seed_oil',
        'createaddition:bioethanol',
        'sliceanddice:fertilizer'
    ])
})