import mods.createtweaker.CrushingRecipe;
import mods.create.MechanicalCrafterManager;
//ultimate nugget acquisition
// Forgot to add processing time ;-;
<recipetype:create:crushing>.addRecipe("ultimate_nugget", [<item:extendedcrafting:the_ultimate_nugget>, <item:extendedcrafting:the_ultimate_nugget> % 25], <item:extendedcrafting:ultimate_singularity>, 1200);
// CuttingManager.addRecipe(name as string, output as Percentaged<IItemStack>, input as IIngredient, duration as int) as void
// black iron slate generation
<recipetype:create:cutting>.addRecipe("black_iron_slate_refined", [(<item:extendedcrafting:black_iron_slate> * 9) % 100], <item:extendedcrafting:black_iron_block>, 250);
// creative worldshaper
<recipetype:create:mechanical_crafting>.addRecipe("zen_worldshaper", <item:create:handheld_worldshaper>, [
  [<item:extendedcrafting:the_ultimate_catalyst>, <item:create:precision_mechanism>, <item:extendedcrafting:ultimate_singularity>, <item:create:sturdy_sheet>, <item:create:sturdy_sheet>, <item:create:sturdy_sheet>],
  [<item:extendedcrafting:the_ultimate_ingot>, <item:extendedcrafting:the_ultimate_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
// MechanicalCrafterManager.addRecipe(name as string, output as IItemStack, ingredients as IIngredient[][]) as void
recipes.removeByName("extendedcrafting:crystaltine_ingot");
<recipetype:create:mechanical_crafting>.addRecipe("create_crystaltine_ingot", <item:extendedcrafting:crystaltine_ingot> * 4, [
    [<item:minecraft:diamond>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:diamond>,], 
    [<item:minecraft:diamond>, <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:nether_star>, <item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:diamond>,], 
    [<item:minecraft:diamond>, <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:nether_star>, <item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:diamond>,],
    [<item:minecraft:diamond>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:diamond>,]
]);

// beacon (disabled, archived just in case of KubeJS mishaps)
/*
recipes.removeByName("minecraft:beacon");
craftingTable.addShaped("minecraft_beacon", <item:minecraft:beacon>, [
    [<tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>],
    [<tag:items:forge:glass/colorless>, <item:extendedcrafting:ender_star>, <tag:items:forge:glass/colorless>],
    [<item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>]
]);
*/
// end crystal (disabled, archived just in case of KubeJS mishaps)
/*
recipes.removeByName("minecraft:end_crystal");
mods.extendedcrafting.CombinationCrafting.addRecipe("end_crystal", <item:minecraft:end_crystal>, 100000, [
	<item:minecraft:ender_eye>, <item:minecraft:ghast_tear>, <item:extendedcrafting:ender_star>, <tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>, <item:minecraft:fermented_spider_eye>, <item:mysticalagriculture:prosperity_shard>
]);
*/

/* Legacy JSON
<recipetype:create:crushing>.addJsonRecipe("ultimate_nugget", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "extendedcrafting:ultimate_singularity"
    },
  ],
  "results": [
    {
      "item": "extendedcrafting:the_ultimate_nugget",
    },
    {
      "item": "extendedcrafting:the_ultimate_nugget",
      "chance": 0.50
    },
    {
      "item": "extendedcrafting:the_ultimate_nugget",
      "chance": 0.25
    }
  ]
}
);
*/
