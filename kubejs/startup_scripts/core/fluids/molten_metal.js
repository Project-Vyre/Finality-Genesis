// priority: 0

StartupEvents.registry('fluid', event => {
    /**
     * 
     * @param {*} event 
     * @param {string} fluidId 
     * @param {string} displayName 
     * @param {HEX} color 
     */
    let MOLTEN_METAL = (fluidId, displayName, color) => {
        event.create(`kubejs:${fluidId}`).displayName(displayName).thickTexture(color).bucketColor(color).luminosity(15)
    }
    MOLTEN_METAL('molten_iron', '§cMolten Iron', 0xFF8423)
    MOLTEN_METAL('molten_gold', '§eMolten Gold', 0xFDF55F)
    MOLTEN_METAL('molten_copper', '§6Molten Copper', 0xFDD686)
    MOLTEN_METAL('molten_zinc', '§3Molten Zinc', 0xD3E8D6)
    MOLTEN_METAL('molten_brass', '§eMolten Brass', 0xFBAA68)
    MOLTEN_METAL('molten_netherite', '§8Molten Netherite', 0x7E6059)
})