import mods.createtweaker.CrushingRecipe;
// Remember, output is always the first [] on the very left! Ingredients are grouped on the right side.
<recipetype:create:crushing>.addRecipe("basalt_copper", [<item:create:copper_nugget>, <item:minecraft:gunpowder> % 10], <item:minecraft:basalt>);
<recipetype:create:crushing>.addRecipe("pointed_dripstone", [<item:minecraft:pointed_dripstone> * 4, <item:create:experience_nugget> % 75], <item:minecraft:dripstone_block>);
// gravel to sand to dirt
recipes.removeByName("create:crushing/gravel");
<recipetype:create:crushing>.addRecipe("gravel_to_dirt", [<item:minecraft:dirt>, <item:minecraft:flint> % 10], <item:minecraft:gravel>, 200);
<recipetype:create:crushing>.addRecipe("dirt_to_sand", [<item:minecraft:sand>, <item:minecraft:clay_ball> % 5], <item:minecraft:dirt>, 200);

recipes.removeByName("create:crushing/netherrack");
// Netherite scrap is now renewable, but there are extra steps.
<recipetype:create:crushing>.addRecipe("netherrack_crushing", [<item:create:cinder_flour>, <item:create:cinder_flour> % 50, <item:minecraft:netherite_scrap> % 0.002], <item:minecraft:netherrack>, 250);

/*<recipetype:create:crushing>.addJsonRecipe("copper_nugget", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:basalt"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": "create:copper_nugget"
    },
    {
      "chance": 0.1,
      "item": "minecraft:gunpowder"
    },
  ]
});*/
/*<recipetype:create:crushing>.addJsonRecipe("pointed_dripstone", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:dripstone_block"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "count": 4,
      "item": "minecraft:pointed_dripstone"
    },
    {
      "chance": 0.5,
      "item": "minecraft:pointed_dripstone"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
});*/
/*<recipetype:create:crushing>.addJsonRecipe("netherrack", {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:netherrack"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": "create:cinder_flour"
    },
    {
      "chance": 0.5,
      "item": "create:cinder_flour"
    },
    {
      "chance": 0.0009765625,
      "item": "minecraft:netherite_scrap"
    },
  ]
}
);
*/