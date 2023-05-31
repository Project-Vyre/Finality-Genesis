ServerEvents.recipes(event => {
    event.remove({id: 'mob_grinding_utils:recipe_fan'})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "BCD B",
            "BEFGB",
            "BCD B",
            "AAAAA"
        ],
        "key": {
            "A": {
                "item": "create:iron_sheet"
          },
            "B": {
                "item": "minecraft:iron_bars"
          },
            "C": {
                "item": "extendedcrafting:redstone_component"
          },
            "D": {
                "item": "extendedcrafting:black_iron_slate"
          },
            "E": {
                "item": "extendedcrafting:redstone_catalyst"
          },
            "F": {
                "item": "create:gantry_shaft"
          },
            "G": {
                "item": "create:propeller"
          }
        },
        "result": {
            "item": "mob_grinding_utils:fan"
        }
    }).id('finality:mobgrindingutils_fan')
})