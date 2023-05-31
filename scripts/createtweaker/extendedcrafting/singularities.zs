import mods.create.MechanicalCrafterManager;
import mods.create.SequencedAssemblyManager;
// MechanicalCrafterManager.addRecipe(name as string, output as IItemStack, ingredients as IIngredient[][]) as void
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_amethyst_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLAAALLL",
    "LLAAAAALL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LLAAAAALL",
    "LLLAAALLL",
    " LLLLLLL "
  ],
  "key": {
    "A": {
      "item": "minecraft:amethyst_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:amethyst"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_brass_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLBBBLLL",
    "LLBBBBBLL",
    "LBBBBBBBL",
    "LBBBBBBBL",
    "LBBBBBBBL",
    "LLBBBBBLL",
    "LLLBBBLLL",
    " LLLLLLL "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:brass"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_coal_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " CCCCCCC ",
    "CCCCCCCCC",
    "CCCCCCCCC",
    "CCCCCCCCC",
    "CCCCCCCCC",
    "CCCCCCCCC",
    "CCCCCCCCC",
    "CCCCCCCCC",
    " CCCCCCC "
  ],
  "key": {
    "C": {
      "item": "minecraft:coal_block"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:coal"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_copper_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLCCCLLL",
    "LLCCCCCLL",
    "LCCCCCCCL",
    "LCCCCCCCL",
    "LCCCCCCCL",
    "LLCCCCCLL",
    "LLLCCCLLL",
    " LLLLLLL "
  ],
  "key": {
    "C": {
      "item": "minecraft:copper_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:copper"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_diamond_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLDDDLLL",
    "LLDDDDDLL",
    "LDDDDDDDL",
    "LDDDDDDDL",
    "LDDDDDDDL",
    "LLDDDDDLL",
    "LLLDDDLLL",
    " LLLLLLL "
  ],
  "key": {
    "D": {
      "item": "minecraft:diamond_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:diamond"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_emerald_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLEEELLL",
    "LLEEEEELL",
    "LEEEEEEEL",
    "LEEEEEEEL",
    "LEEEEEEEL",
    "LLEEEEELL",
    "LLLEEELLL",
    " LLLLLLL "
  ],
  "key": {
    "E": {
      "item": "minecraft:emerald_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:emerald"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addRecipe("zen_electron_tube_singularity", (<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:electron_tube"}) * 1), [
    [<item:minecraft:air>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:air>], 
    [<item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>], 
    [<item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>],
    [<item:minecraft:crying_obsidian>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:minecraft:crying_obsidian>,],
    [<item:minecraft:crying_obsidian>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:minecraft:crying_obsidian>,],
    [<item:minecraft:crying_obsidian>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:minecraft:crying_obsidian>,],
    [<item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>],
    [<item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:create:electron_tube>, <item:create:electron_tube>, <item:create:electron_tube>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>], 
    [<item:minecraft:air>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:crying_obsidian>, <item:minecraft:air>], 
]);
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_ender_pearl_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLAAALLL",
    "LLAAAAALL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LLAAAAALL",
    "LLLAAALLL",
    " LLLLLLL "
  ],
  "key": {
    "A": {
      "item": "minecraft:ender_pearl"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:ender_pearl"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_glowstone_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLGGGLLL",
    "LLGGGGGLL",
    "LGGGGGGGL",
    "LGGGGGGGL",
    "LGGGGGGGL",
    "LLGGGGGLL",
    "LLLGGGLLL",
    " LLLLLLL "
  ],
  "key": {
    "G": {
      "item": "minecraft:glowstone"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:glowstone"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_gold_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLAAALLL",
    "LLAAAAALL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LLAAAAALL",
    "LLLAAALLL",
    " LLLLLLL "
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:gold"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_gunpowder_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLAAALLL",
    "LLAAAAALL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LLAAAAALL",
    "LLLAAALLL",
    " LLLLLLL "
  ],
  "key": {
    "A": {
      "item": "minecraft:gunpowder"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:gunpowder"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_honey_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLRRRLLL",
    "LLRRRRRLL",
    "LRRRRRRRL",
    "LRRRRRRRL",
    "LRRRRRRRL",
    "LLRRRRRLL",
    "LLLRRRLLL",
    " LLLLLLL "
  ],
  "key": {
    "R": {
      "item": "minecraft:honey_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:honey"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_iron_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLFFFLLL",
    "LLFFFFFLL",
    "LFFFFFFFL",
    "LFFFFFFFL",
    "LFFFFFFFL",
    "LLFFFFFLL",
    "LLLFFFLLL",
    " LLLLLLL "
  ],
  "key": {
    "F": {
      "item": "minecraft:iron_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:iron"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_lapis_lazuli_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLAAALLL",
    "LLAAAAALL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LLAAAAALL",
    "LLLAAALLL",
    " LLLLLLL "
  ],
  "key": {
    "A": {
      "item": "minecraft:lapis_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:lapis_lazuli"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_netherite_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLAAALLL",
    "LLAAAAALL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LLAAAAALL",
    "LLLAAALLL",
    " LLLLLLL "
  ],
  "key": {
    "A": {
      "item": "minecraft:netherite_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:netherite"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_prismarine_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLRRRLLL",
    "LLRRRRRLL",
    "LRRRRRRRL",
    "LRRRRRRRL",
    "LRRRRRRRL",
    "LLRRRRRLL",
    "LLLRRRLLL",
    " LLLLLLL "
  ],
  "key": {
    "R": {
      "item": "minecraft:sea_lantern"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:sea_lantern"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_quartz_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLQQQLLL",
    "LLQQQQQLL",
    "LQQQQQQQL",
    "LQQQQQQQL",
    "LQQQQQQQL",
    "LLQQQQQLL",
    "LLLQQQLLL",
    " LLLLLLL "
  ],
  "key": {
    "Q": {
      "item": "minecraft:quartz_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:quartz"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_redstone_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLRRRLLL",
    "LLRRRRRLL",
    "LRRRRRRRL",
    "LRRRRRRRL",
    "LRRRRRRRL",
    "LLRRRRRLL",
    "LLLRRRLLL",
    " LLLLLLL "
  ],
  "key": {
    "R": {
      "item": "minecraft:redstone_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:redstone"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_rose_quartz_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLRRRLLL",
    "LLRRRRRLL",
    "LRRRRRRRL",
    "LRRRRRRRL",
    "LRRRRRRRL",
    "LLRRRRRLL",
    "LLLRRRLLL",
    " LLLLLLL "
  ],
  "key": {
    "R": {
      "item": "create:polished_rose_quartz"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:rose_quartz"
   }, "count": 1
  },
  "acceptMirrored": false
});
<recipetype:create:mechanical_crafting>.addJsonRecipe("zen_zinc_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLZZZLLL",
    "LLZZZZZLL",
    "LZZZZZZZL",
    "LZZZZZZZL",
    "LZZZZZZZL",
    "LLZZZZZLL",
    "LLLZZZLLL",
    " LLLLLLL "
  ],
  "key": {
    "Z": {
      "item": "create:zinc_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:zinc"
   }, "count": 1
  },
  "acceptMirrored": false
});
// Sequenced Assembly Singularities
// experimental singularity assembly
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_andesite_alloy_singularity")
                                      .transitionTo(<item:finality:andesite_singularity_core>)
                                      .require(<item:create:andesite_alloy>)
                                      .loops(16)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:andesite_alloy"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:andesite_alloy_block>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:lava> * 25))
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:andesite_alloy_block>)));

// natural singularities
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_blue_ice_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:blue_ice>)
                                      .loops(16)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:blue_ice"}) * 1, 100)
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 25))
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:blue_ice>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_coarse_dirt_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:coarse_dirt>)
                                      .loops(16)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:coarse_dirt"}) * 1, 100)
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 25))
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:dirt>))
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:gravel>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_sand_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:sand>)
                                      .loops(16)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:sand"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:sand>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_cobblestone_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:cobblestone>)
                                      .loops(256)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:cobblestone"}) * 1, 100)
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:lava> * 25))
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:cobblestone>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// refined singularities
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_framed_glass_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:create:framed_glass>)
                                      .loops(32)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:framed_glass"}) * 1, 100)
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:lava> * 25))
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:framed_glass>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_precision_mechanism_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:create:precision_mechanism>)
                                      .loops(16)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:precision_mechanism"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:cogwheel>))
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:large_cogwheel>))                                                      
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:extendedcrafting:redstone_nugget>))
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:precision_mechanism>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_sturdy_sheet_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:create:sturdy_sheet>)
                                      .loops(16)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:sturdy_sheet"}) * 1, 100)
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:lava> * 25))
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:sturdy_sheet>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// Concrete Singularities
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_black_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:black_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_black"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:black_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// gray Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_gray_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:gray_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_gray"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:white_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// light_gray Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_light_gray_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:light_gray_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_light_gray"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:light_gray_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// white Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_white_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:white_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_white"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:white_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// brown Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_brown_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:brown_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_brown"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:brown_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// pink Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_pink_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:pink_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_pink"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:pink_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// cyan Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_cyan_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:cyan_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_cyan"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:cyan_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// blue Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_blue_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:blue_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_blue"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:blue_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// lime Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_lime_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:lime_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_lime"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:lime_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// green Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_green_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:green_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_green"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:green_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// yellow Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_yellow_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:yellow_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_yellow"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:yellow_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// purple Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_purple_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:purple_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_purple"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:purple_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// magenta Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_magenta_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:magenta_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_magenta"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:magenta_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// orange Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_orange_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:orange_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_orange"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:orange_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// red Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_red_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:red_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_red"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:red_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
// light_blue Concrete Singularity
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_light_blue_concrete_singularity")
                                      .transitionTo(<item:extendedcrafting:singularity>)
                                      .require(<item:minecraft:light_blue_concrete>)
                                      .loops(128)
                                      .addOutput(<item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:concrete_light_blue"}) * 1, 100)
                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:light_blue_concrete_powder>))
                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 500))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>))
                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.require(<item:extendedcrafting:singularity>)));
/* Old brass singularity recipe
import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("brass_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLBBBLLL",
    "LLBBBBBLL",
    "LBBUZUBBL",
    "LBBZMZBBL",
    "LBBUZUBBL",
    "LLBBBBBLL",
    "LLLBBBLLL",
    " LLLLLLL "
  ],
  "key": {
    "B": {
      "item": "create:brass_block"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
    "Z": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:zinc"
      }
    },
    "U": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:copper"
      }
    },
    "M": {
      "item": "create:precision_mechanism"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:brass"
   }, "count": 1
  },
  "acceptMirrored": false
}
);
*/