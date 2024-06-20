if (Platform.isClientEnvironment() && Platform.isLoaded('lodestone') && Platform.isLoaded('malum')) {
  console.log('You should probably fix your code, Lodestone...')
  /**
   * @summary Replaces Lodestone's renderer with the vanilla sign renderer to prevent crashes.
   * @author ChiefArug <https://github.com/ChiefArug> 
   */
  ClientEvents.init(event => {
    const $WoodTypeRegistry = Java.loadClass('com.sammy.malum.registry.common.block.WoodTypeRegistry')
    const $ModelMaterial = Java.loadClass('net.minecraft.client.resources.model.Material')
    const $Sheets = Java.loadClass('net.minecraft.client.renderer.Sheets')

    let runeSignMaterial = new $ModelMaterial($Sheets.SIGN_SHEET, "malum:entity/signs/runewood")
    let soulSignMaterial = new $ModelMaterial($Sheets.SIGN_SHEET, "malum:entity/signs/soulwood")
    $Sheets.SIGN_MATERIALS.put($WoodTypeRegistry.RUNEWOOD, runeSignMaterial)
    $Sheets.SIGN_MATERIALS.put($WoodTypeRegistry.SOULWOOD, soulSignMaterial)
  })
}