import mods.create.MechanicalCrafterManager;
recipes.removeByName("ad_astra:recipes/nasa_workbench");
<recipetype:create:mechanical_crafting>.addRecipe("finality/zen_nasa_workbench", <item:ad_astra:nasa_workbench>, [
  [<item:create:rose_quartz_lamp>,<item:create:analog_lever>,<item:create:powered_toggle_latch>,<item:create:analog_lever>,<item:create:rose_quartz_lamp>],
  [<item:ad_astra:steel_plate>,<item:extendedcrafting:redstone_component>,<item:extendedcrafting:redstone_catalyst>,<item:extendedcrafting:redstone_component>,<item:ad_astra:steel_plate>],
  [<item:ad_astra:steel_plate>,<item:extendedcrafting:redstone_catalyst>,<item:extendedcrafting:ultimate_auto_table>,<item:extendedcrafting:redstone_catalyst>,<item:ad_astra:steel_plate>],
  [<item:ad_astra:steel_plate>,<item:extendedcrafting:redstone_component>,<item:extendedcrafting:enhanced_redstone_catalyst>,<item:extendedcrafting:redstone_component>,<item:ad_astra:steel_plate>],
  [<item:minecraft:redstone_block>,<item:ad_astra:steel_block>,<item:ad_astra:steel_block>,<item:ad_astra:steel_block>,<item:minecraft:redstone_block>]
]);