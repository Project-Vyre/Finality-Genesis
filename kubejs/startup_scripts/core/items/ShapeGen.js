/**
 * @file Handles shape item generation.
 * 
 */

/**
 * Work in progress replacement.
 * for (const [shape, displayName] of Object.entries(global.SHAPES)) {
 *     for (const [color, colorName] of Object.entries(global.RGBWCMY)) {
 *     }
 * }
 */
global.SHAPES = {
  circle: 'Circle',
  rectangle: 'Rectangle',
  windmill: 'Windmill',
  star: 'Star'
}
let ROTATION = {
  tl: 'Top Left',
  tr: 'Top Right',
  bl: 'Bottom Left',
  br: 'Bottom Right'
}
global.RGBWCMY = {
  uncolored: '§7Uncolored',
  red: '§cColor Red',
  green: '§aColor Green',
  blue: '§9Color Blue',
  white: '§lColor White',
  cyan: '§bColor Cyan',
  magenta: '§dColor Magenta',
  yellow: '§eColor Yellow'
}
StartupEvents.registry('item', event => {
  /**
   * 
   * @param {string} itemId 
   * @param {string} displayName 
   * @param {string} texturePath 
   */
  function fireResistantShape(itemId, displayName, texturePath) {
    event.create(`kubejs:${itemId}`).displayName(displayName).texture(`kubejs:item/${texturePath}`).maxStackSize(64).fireResistant(true)
  }
  /**
   * 
   * @param {string} itemId 
   * @param {string} displayNameString 
   * @param {string} texturePath 
   */
  let shapeItemGeneration = (itemId, displayNameString, texturePath) => {
    event
      .create(`kubejs:${itemId}`)
      .displayName(`${displayNameString}`)
      .texture(`kubejs:item/shapes/${texturePath}`)
      .maxStackSize(64)
      .fireResistant(true)
  }
  for (let [shape, name] of Object.entries(global.SHAPES)) {
    shapeItemGeneration(`uncolored_${shape}`, `§7Uncolored ${name}`, `uncolored_${shape}`)
    shapeItemGeneration(`uncolored_left_half_${shape}`, `§7Uncolored Left Half ${name}`, `halves/uncolored_left_half_${shape}`)
    shapeItemGeneration(`uncolored_right_half_${shape}`, `§7Uncolored Right Half ${name}`, `halves/uncolored_right_half_${shape}`)
    shapeItemGeneration(`uncolored_${shape}_corner`, `§7Uncolored ${name} Corner`, `corners/uncolored_${shape}_corner`)
    // red
    shapeItemGeneration(`red_${shape}`, `§l§cRed ${name}`, `red_${shape}`)
    shapeItemGeneration(`red_left_half_${shape}`, `§cRed Left Half ${name}`, `halves/red_left_half_${shape}`)
    shapeItemGeneration(`red_right_half_${shape}`, `§cRed Right Half ${name}`, `halves/red_right_half_${shape}`)
    shapeItemGeneration(`red_${shape}_corner`, `§cRed ${name} Corner`, `corners/red_${shape}_corner`)
    // green
    shapeItemGeneration(`green_${shape}`, `§aGreen ${name}`, `green_${shape}`)
    shapeItemGeneration(`green_left_half_${shape}`, `§aGreen Left Half ${name}`, `halves/green_left_half_${shape}`)
    shapeItemGeneration(`green_right_half_${shape}`, `§aGreen Right Half ${name}`, `halves/green_right_half_${shape}`)
    shapeItemGeneration(`green_${shape}_corner`, `§aGreen ${name} Corner`, `corners/green_${shape}_corner`)
    // blue
    shapeItemGeneration(`blue_${shape}`, `§9Blue ${name}`, `blue_${shape}`)
    shapeItemGeneration(`blue_left_half_${shape}`, `§9Blue Left Half ${name}`, `halves/blue_left_half_${shape}`)
    shapeItemGeneration(`blue_right_half_${shape}`, `§9Blue Right Half ${name}`, `halves/blue_right_half_${shape}`)
    shapeItemGeneration(`blue_${shape}_corner`, `§9Blue ${name} Corner`, `corners/blue_${shape}_corner`)
    // cyan
    shapeItemGeneration(`cyan_${shape}`, `§bCyan ${name}`, `cyan_${shape}`)
    shapeItemGeneration(`cyan_left_half_${shape}`, `§bCyan Left Half ${name}`, `halves/cyan_left_half_${shape}`)
    shapeItemGeneration(`cyan_right_half_${shape}`, `§bCyan Right Half ${name}`, `halves/cyan_right_half_${shape}`)
    shapeItemGeneration(`cyan_${shape}_corner`, `§bCyan ${name} Corner`, `corners/cyan_${shape}_corner`)
    // magenta
    shapeItemGeneration(`magenta_${shape}`, `§dMagenta ${name}`, `magenta_${shape}`)
    shapeItemGeneration(`magenta_left_half_${shape}`, `§dMagenta Left Half ${name}`, `halves/magenta_left_half_${shape}`)
    shapeItemGeneration(`magenta_right_half_${shape}`, `§dMagenta Right Half ${name}`, `halves/magenta_right_half_${shape}`)
    shapeItemGeneration(`magenta_${shape}_corner`, `§dMagenta ${name} Corner`, `corners/magenta_${shape}_corner`)
    // yellow
    shapeItemGeneration(`yellow_${shape}`, `§eYellow ${name}`, `yellow_${shape}`)
    shapeItemGeneration(`yellow_left_half_${shape}`, `§eYellow Left Half ${name}`, `halves/yellow_left_half_${shape}`)
    shapeItemGeneration(`yellow_right_half_${shape}`, `§eYellow Right Half ${name}`, `halves/yellow_right_half_${shape}`)
    shapeItemGeneration(`yellow_${shape}_corner`, `§eYellow ${name} Corner`, `corners/yellow_${shape}_corner`)
    // white
    shapeItemGeneration(`white_${shape}`, `§lWhite ${name}`, `white_${shape}`)
    shapeItemGeneration(`white_left_half_${shape}`, `§lWhite Left Half ${name}`, `halves/white_left_half_${shape}`)
    shapeItemGeneration(`white_right_half_${shape}`, `§lWhite Right Half ${name}`, `halves/white_right_half_${shape}`)
    shapeItemGeneration(`white_${shape}_corner`, `§lWhite ${name} Corner`, `corners/white_${shape}_corner`)
  }
  fireResistantShape('blueprint_shape_base', '§9Blueprint Shape Base', 'shapes/blueprint_shape_base')
  fireResistantShape('blueprint_shape', '§9Blueprint Shape', 'shapes/blueprint_shape')
  fireResistantShape('cpu_foundation', '§aCPU Shape Foundation', 'shapes/cpu_foundation')
  fireResistantShape('cpu_substrate_shape', '§aCPU Substrate Shape', 'shapes/cpu_substrate_shape')
  fireResistantShape('cpu_shape', '§aCPU Shape', 'shapes/cpu_shape')
  fireResistantShape('emitter_shape_base', '§dEmitter Shape Base', 'shapes/emitter_shape_base')
  fireResistantShape('emitter_shape', '§dEmitter Shape', 'shapes/emitter_shape')
})