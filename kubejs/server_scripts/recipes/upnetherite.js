ServerEvents.recipes(event => {
    event.remove({id: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'})
    event.shapeless('upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',[
        'upgradednetherite:gold_upgraded_netherite_ingot',
        'upgradednetherite:fire_upgraded_netherite_ingot',
        'upgradednetherite:water_upgraded_netherite_ingot',
        'upgradednetherite:ender_upgraded_netherite_ingot',
        'extendedcrafting:crystaltine_catalyst',
        'upgradednetherite:poison_upgraded_netherite_ingot',
        'upgradednetherite:wither_upgraded_netherite_ingot',
        'upgradednetherite:phantom_upgraded_netherite_ingot',
        'upgradednetherite:feather_upgraded_netherite_ingot'
    ]).id('finality:ultimerite_ingot')
    // creativerite assembly
    event.recipes.createSequencedAssembly([
        Item.of('upgradednetherite_creative:creative_upgraded_netherite_ingot').withChance(25.0),
        Item.of('extendedcrafting:ultimate_singularity').withChance(25.0),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:netherite"}').withChance(25.0),
        Item.of('minecraft:netherite_ingot', 8).withChance(25.0),
        'mysticalagriculture:prosperity_shard',
        'minecraft:netherite_block',
        'minecraft:ancient_debris'
        ],'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',[
            event.recipes.createFilling('extendedcrafting:the_ultimate_ingot', ['extendedcrafting:the_ultimate_ingot', Fluid.of('minecraft:lava', 500)]),
            event.recipes.createDeploying('extendedcrafting:the_ultimate_ingot', ['extendedcrafting:the_ultimate_ingot','extendedcrafting:the_ultimate_catalyst']),
            event.recipes.createPressing('extendedcrafting:the_ultimate_ingot','extendedcrafting:the_ultimate_ingot'),
            event.recipes.createPressing('extendedcrafting:the_ultimate_ingot','extendedcrafting:the_ultimate_ingot'),
            event.recipes.createPressing('extendedcrafting:the_ultimate_ingot','extendedcrafting:the_ultimate_ingot')
    ]).transitionalItem('extendedcrafting:the_ultimate_ingot').loops(16).id('finality:creativerite_ingot')
    // creativerite smithing
    // output left, inputs right
    // creativerite armor
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_helmet', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_helmet', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_helmet')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_chestplate', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_chestplate', 'upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_chestplate')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_leggings','upgradednetherite_ultimate:ultimate_upgraded_netherite_leggings','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_leggings')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_boots','upgradednetherite_ultimate:ultimate_upgraded_netherite_boots','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_boots')
    // creativerite tools
    event.smithing('upgradedtools:creative_upgraded_netherite_hammer','upgradedtools:ultimate_upgraded_netherite_hammer','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_hammer')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_sword','upgradednetherite_ultimate:ultimate_upgraded_netherite_sword','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_sword')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_pickaxe','upgradednetherite_ultimate:ultimate_upgraded_netherite_pickaxe','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_pickaxe')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_shovel','upgradednetherite_ultimate:ultimate_upgraded_netherite_shovel','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_shovel')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_axe','upgradednetherite_ultimate:ultimate_upgraded_netherite_axe','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_axe')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_bow','upgradednetherite_ultimate:ultimate_upgraded_netherite_bow','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_bow')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_crossbow','upgradednetherite_ultimate:ultimate_upgraded_netherite_crossbow','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_crossbow')
    event.smithing('upgradednetherite_items:creative_upgraded_netherite_totem','upgradednetherite_items:ultimate_upgraded_netherite_totem','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_totem')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_horse_armor','upgradednetherite_ultimate:ultimate_upgraded_netherite_horse_armor','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_horse_armor')
    event.smithing('upgradednetherite_creative:creative_upgraded_netherite_shield','upgradednetherite_ultimate:ultimate_upgraded_netherite_shield','upgradednetherite_creative:creative_upgraded_netherite_ingot').id('finality:creativerite_shield')
    /* get this cursed code out of here
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot"
        },
        "transitionalItem": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "sequence": [
          {
            "type": "create:filling",
            "ingredients": [
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              },
              {
                "fluid": "minecraft:lava",
                "nbt": {},
                "amount": 500
              }
            ],
            "results": [
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              },
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              }
            ],
            "results": [
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              }
            ]
          },
          {
            "type": "create:pressing",
            "ingredients": [
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              }
            ],
            "results": [
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              }
            ]
          },
          {
            "type": "create:pressing",
            "ingredients": [
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              }
            ],
            "results": [
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              }
            ]
          },
          {
            "type": "create:pressing",
            "ingredients": [
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              }
            ],
            "results": [
              {
                "item": "extendedcrafting:the_ultimate_ingot"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "upgradednetherite_creative:creative_upgraded_netherite_ingot",
            "chance": 25.0
          },
          {
            "item": "extendedcrafting:singularity",
            "nbt": {
                "Id": "extendedcrafting:netherite"
            },
            "chance": 25.0
          },
          {
            "item": "minecraft:netherite_ingot",
            "count": 8,
            "chance": 25.0
          },
          {
            "item": "mysticalagriculture:prosperity_shard"
          },
          {
            "item": "minecraft:netherite_block"
          },
          {
            "item": "minecraft:ancient_debris"
          }
        ],
        "loops": 16
    }).id('finality:extendedcrafting/jsonaneurysm_seq/creativerite_ingot')
    */
})

