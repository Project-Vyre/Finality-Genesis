import mods.create.MixingManager;
// MixingManager.addRecipe(name as string, heat as HeatCondition, outputs as Percentaged<IItemStack>[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int) as void
<recipetype:create:mixing>.addRecipe("coarse_dirt_mixing", <constant:create:heat_condition:none>, [<item:minecraft:coarse_dirt>], [<item:minecraft:dirt>, <item:minecraft:gravel>]);

//Emerald (nether quartz, black iron, glass,)
<recipetype:create:mixing>.addRecipe("renewable_emerald", <constant:create:heat_condition:superheated>, [<item:minecraft:emerald> % 100], [<item:minecraft:quartz>, <item:minecraft:glass>, (<item:minecraft:iron_nugget> * 3)], [<fluid:minecraft:lava> * 250]);
// Thank you to FunnyMan#4579 on the official Create Discord for giving me this idea :3
<recipetype:create:mixing>.addRecipe("ct_nether_gold_ore", <constant:create:heat_condition:none>, [<item:minecraft:nether_gold_ore> % 100], [<item:create:cinder_flour>, (<item:minecraft:gold_nugget> * 18)], [<fluid:minecraft:lava> * 250]);
/*<recipetype:create:mixing>.addJsonRecipe("coarse_dirt_mixing", {
    "ingredients": [
        {
            "item": "minecraft:dirt"
        },
        {
            "item": "minecraft:gravel"
        }
    ],
    "results": [
        {
            "item": "minecraft:coarse_dirt"
        }
    ]
});*/