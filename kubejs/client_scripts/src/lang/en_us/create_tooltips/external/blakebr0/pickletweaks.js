// requires: pickletweaks
// requires: create

ClientEvents.lang('en_us', event => {
  for (const [tool, TOOLCAP] of Object.entries(standardTools)) {
    for (const [material, MATCAP] of Object.entries(minecraftMaterialTools)) {
      event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip`, `${MATCAP} ${TOOLCAP}`)
      event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip.summary`, "You can now _repair_ tools with the material they are made of.")
      event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip.condition1`, "How to repair:")
      event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip.behaviour1`, "Put your _tool_ and its _respective crafting material_ in any _crafting grid_.")
      event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip.condition2`, "Additional Info")
      event.add('kubejs', `item.minecraft.${material}_${tool}.tooltip.behaviour2`, "If you were wondering... yes, this also applies to Diamond and Netherite tools as well. This tooltip will not appear on Diamond and Netherite tools.")
    }
  }
})