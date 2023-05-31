import mods.create.CompactingManager;
// Remember, output is always the first [] on the very left! Ingredients are grouped on the right side.
<recipetype:create:compacting>.addRecipe("renewable_basalt", <constant:create:heat_condition:none>, [<item:minecraft:basalt> % 100], [<item:minecraft:blue_ice> * 1], [<fluid:minecraft:lava> * 500], 100);
<recipetype:create:compacting>.addRecipe("renewable_coal", <constant:create:heat_condition:heated>, [<item:minecraft:coal>], [<item:minecraft:dried_kelp_block> * 9], [<fluid:minecraft:lava> * 25]);
<recipetype:create:compacting>.addRecipe("renewable_diamond", <constant:create:heat_condition:superheated>, [<item:minecraft:diamond>], [<item:minecraft:coal_block> * 9], [<fluid:minecraft:lava> * 1000]);
<recipetype:create:compacting>.addRecipe("gravel_tuff", <constant:create:heat_condition:heated>, [<item:minecraft:tuff>], [<item:minecraft:gravel> * 9], [<fluid:minecraft:lava> * 250]);
<recipetype:create:compacting>.addRecipe("deepslate_tuff", <constant:create:heat_condition:heated>, [<item:minecraft:tuff>], [<item:minecraft:deepslate> * 9], [<fluid:minecraft:lava> * 250]);

/*<recipetype:create:compacting>.addJsonRecipe("tuff1", {
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "minecraft:gravel"
    },
    {
      "item": "minecraft:gravel"
    },
    {
      "item": "minecraft:gravel"
    },
    {
      "item": "minecraft:gravel"
    },
    {
      "item": "minecraft:gravel"
    },
    {
      "item": "minecraft:gravel"
    },
    {
      "item": "minecraft:gravel"
    },
    {
      "item": "minecraft:gravel"
    },
    {
      "item": "minecraft:gravel"
    },
    {
      "fluid": "minecraft:lava",
      "nbt": {},
      "amount": 250
    }
  ],
  "results": [
    {
      "item": "minecraft:tuff"
    }
  ]
}
);
<recipetype:create:compacting>.addJsonRecipe("tuff2", {
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "minecraft:deepslate"
    },
    {
      "item": "minecraft:deepslate"
    },
    {
      "item": "minecraft:deepslate"
    },
    {
      "item": "minecraft:deepslate"
    },
    {
      "item": "minecraft:deepslate"
    },
    {
      "item": "minecraft:deepslate"
    },
    {
      "item": "minecraft:deepslate"
    },
    {
      "item": "minecraft:deepslate"
    },
    {
      "item": "minecraft:deepslate"
    },
    {
      "fluid": "minecraft:lava",
      "nbt": {},
      "amount": 250
    }
  ],
  "results": [
    {
      "item": "minecraft:tuff"
    }
  ]
}
); */
// Legacy coal JSON recipe below
/*<recipetype:create:compacting>.addJsonRecipe("coal", {
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "item": "minecraft:dried_kelp_block"
    },
    {
      "fluid": "minecraft:lava",
      "nbt": {},
      "amount": 250
    }
  ],
  "results": [
    {
      "item": "minecraft:coal"
    }
  ],
  "heatRequirement": "heated"
}
);
*/