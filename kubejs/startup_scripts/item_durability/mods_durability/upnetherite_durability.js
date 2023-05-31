let base_netherite_tools = 2048
let special_netherite_tools = 4096

let base_netherite_armor = 1024
let special_netherite_armor = 2048

let netherite_shields = 512
let special_netherite_shields = 1024

ItemEvents.modification(event => {
    // shields
    event.modify('upgradednetherite:netherite_shield', item => {
        item.maxDamage = netherite_shields
    })
    // 119 exclusive
    event.modify('upgradednetherite:echo_upgraded_netherite_shied', item => {
        item.maxDamage = special_netherite_shields
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_shield', item => {
        item.maxDamage = netherite_shields
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_shield', item => {
        item.maxDamage = netherite_shields
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_shield', item => {
        item.maxDamage = netherite_shields
    })
    event.modify('upgradednetherite:water_upgraded_netherite_shield', item => {
        item.maxDamage = netherite_shields
    })
    event.modify('upgradednetherite:wither_upgraded_netherite_shield', item => {
        item.maxDamage = netherite_shields
    })
    event.modify('upgradednetherite:poison_upgraded_netherite_shield', item => {
        item.maxDamage = netherite_shields
    })
    event.modify('upgradednetherite:phantom_upgraded_netherite_shield', item => {
        item.maxDamage = netherite_shields
    })
    event.modify('upgradednetherite:feather_upgraded_netherite_shield', item => {
        item.maxDamage = netherite_shields
    })
    event.modify('upgradednetherite:corrupt_upgraded_netherite_shield', item => {
        item.maxDamage = special_netherite_shields
    })
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_shield', item => {
        item.maxDamage = special_netherite_shields
    })
    // tools
    // echo 119 exclusive
    event.modify('upgradednetherite:echo_upgraded_netherite_sword', item => {
        item.maxDamage = special_netherite_tools
    })
    event.modify('upgradednetherite:echo_upgraded_netherite_bow', item => {
        item.maxDamage = special_netherite_tools
    })
    event.modify('upgradednetherite:echo_upgraded_netherite_crossbow', item => {
        item.maxDamage = special_netherite_tools
    })
    event.modify('upgradednetherite:echo_upgraded_netherite_pickaxe', item => {
        item.maxDamage = special_netherite_tools
    })
    event.modify('upgradednetherite:echo_upgraded_netherite_shovel', item => {
        item.maxDamage = special_netherite_tools
    })
    event.modify('upgradednetherite:echo_upgraded_netherite_axe', item => {
        item.maxDamage = special_netherite_tools
    })
    event.modify('upgradednetherite:echo_upgraded_netherite_shield', item => {
        item.maxDamage = special_netherite_shields
    })
    // gold netherite
    event.modify('upgradednetherite:gold_upgraded_netherite_sword', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_shovel', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_pickaxe', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_axe', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_hoe', item => {
        item.maxDamage = base_netherite_tools
    })
    // water netherite
    event.modify('upgradednetherite:water_upgraded_netherite_sword', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:water_upgraded_netherite_shovel', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:water_upgraded_netherite_pickaxe', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:water_upgraded_netherite_axe', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:water_upgraded_netherite_hoe', item => {
        item.maxDamage = base_netherite_tools
    })
    // fire netherite
    event.modify('upgradednetherite:fire_upgraded_netherite_sword', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_shovel', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_pickaxe', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_axe', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_hoe', item => {
        item.maxDamage = base_netherite_tools
    })
    // ender netherite
    event.modify('upgradednetherite:ender_upgraded_netherite_sword', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_shovel', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_pickaxe', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_axe', item => {
        item.maxDamage = base_netherite_tools
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_hoe', item => {
        item.maxDamage = base_netherite_tools
    })	
    // wither netherite
    event.modify('upgradednetherite:wither_upgraded_netherite_sword', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:wither_upgraded_netherite_shovel', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:wither_upgraded_netherite_pickaxe', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:wither_upgraded_netherite_axe', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:wither_upgraded_netherite_hoe', item => {
		item.maxDamage = base_netherite_tools
	})
    // spider netherite
    event.modify('upgradednetherite:poison_upgraded_netherite_sword', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:poison_upgraded_netherite_shovel', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:poison_upgraded_netherite_pickaxe', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:poison_upgraded_netherite_axe', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:poison_upgraded_netherite_hoe', item => {
		item.maxDamage = base_netherite_tools
	})
    // phantom netherite
    event.modify('upgradednetherite:phantom_upgraded_netherite_sword', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:phantom_upgraded_netherite_shovel', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:phantom_upgraded_netherite_pickaxe', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:phantom_upgraded_netherite_axe', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:phantom_upgraded_netherite_hoe', item => {
		item.maxDamage = base_netherite_tools
	})
    // feather netherite
    event.modify('upgradednetherite:feather_upgraded_netherite_sword', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:feather_upgraded_netherite_shovel', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:feather_upgraded_netherite_pickaxe', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:feather_upgraded_netherite_axe', item => {
		item.maxDamage = base_netherite_tools
	})
	event.modify('upgradednetherite:feather_upgraded_netherite_hoe', item => {
		item.maxDamage = base_netherite_tools
	})
    // corrupt netherite
    event.modify('upgradednetherite:corrupt_upgraded_netherite_sword', item => {
		item.maxDamage = special_netherite_tools
	})
	event.modify('upgradednetherite:corrupt_upgraded_netherite_shovel', item => {
		item.maxDamage = special_netherite_tools
	})
	event.modify('upgradednetherite:corrupt_upgraded_netherite_pickaxe', item => {
		item.maxDamage = special_netherite_tools
	})
	event.modify('upgradednetherite:corrupt_upgraded_netherite_axe', item => {
		item.maxDamage = special_netherite_tools
	})
	event.modify('upgradednetherite:corrupt_upgraded_netherite_hoe', item => {
		item.maxDamage = special_netherite_tools
	})
    // ultimate netherite
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_sword', item => {
		item.maxDamage = special_netherite_tools
	})
	event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_shovel', item => {
		item.maxDamage = special_netherite_tools
	})
	event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_pickaxe', item => {
		item.maxDamage = special_netherite_tools
	})
	event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_axe', item => {
		item.maxDamage = special_netherite_tools
	})
	event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_hoe', item => {
		item.maxDamage = special_netherite_tools
	})
    // armor adjustments
    // gold netherite armor
    event.modify('upgradednetherite:gold_upgraded_netherite_helmet', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_chestplate', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_leggings', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:gold_upgraded_netherite_boots', item => {
        item.maxDamage = base_netherite_armor
    })
    // water netherite armor
    event.modify('upgradednetherite:water_upgraded_netherite_helmet', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:water_upgraded_netherite_chestplate', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:water_upgraded_netherite_leggings', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:water_upgraded_netherite_boots', item => {
        item.maxDamage = base_netherite_armor
    })
    // fire netherite armor
    event.modify('upgradednetherite:fire_upgraded_netherite_helmet', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_chestplate', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_leggings', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:fire_upgraded_netherite_boots', item => {
        item.maxDamage = base_netherite_armor
    })
    // ender netherite armor
    event.modify('upgradednetherite:ender_upgraded_netherite_helmet', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_chestplate', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_leggings', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:ender_upgraded_netherite_boots', item => {
        item.maxDamage = base_netherite_armor
    })
    // wither netherite armor
    event.modify('upgradednetherite:wither_upgraded_netherite_helmet', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:wither_upgraded_netherite_chestplate', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:wither_upgraded_netherite_leggings', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:wither_upgraded_netherite_boots', item => {
        item.maxDamage = base_netherite_armor
    })
    // poison netherite armor
    event.modify('upgradednetherite:poison_upgraded_netherite_helmet', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:poison_upgraded_netherite_chestplate', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:poison_upgraded_netherite_leggings', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:poison_upgraded_netherite_boots', item => {
        item.maxDamage = base_netherite_armor
    })
    // phantom netherite armor
    event.modify('upgradednetherite:phantom_upgraded_netherite_helmet', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:phantom_upgraded_netherite_chestplate', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:phantom_upgraded_netherite_leggings', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:phantom_upgraded_netherite_boots', item => {
        item.maxDamage = base_netherite_armor
    })
    // feather netherite armor
    event.modify('upgradednetherite:feather_upgraded_netherite_helmet', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:feather_upgraded_netherite_chestplate', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:feather_upgraded_netherite_leggings', item => {
        item.maxDamage = base_netherite_armor
    })
    event.modify('upgradednetherite:feather_upgraded_netherite_boots', item => {
        item.maxDamage = base_netherite_armor
    })
    // corrupt netherite armor
    event.modify('upgradednetherite:corrupt_upgraded_netherite_helmet', item => {
        item.maxDamage = special_netherite_armor
    })
    event.modify('upgradednetherite:corrupt_upgraded_netherite_chestplate', item => {
        item.maxDamage = special_netherite_armor
    })
    event.modify('upgradednetherite:corrupt_upgraded_netherite_leggings', item => {
        item.maxDamage = special_netherite_armor
    })
    event.modify('upgradednetherite:corrupt_upgraded_netherite_boots', item => {
        item.maxDamage = special_netherite_armor
    })
    // ultimate netherite armor
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_helmet', item => {
        item.maxDamage = special_netherite_armor
    })
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_chestplate', item => {
        item.maxDamage = special_netherite_armor
    })
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_leggings', item => {
        item.maxDamage = special_netherite_armor
    })
    event.modify('upgradednetherite_ultimate:ultimate_upgraded_netherite_boots', item => {
        item.maxDamage = special_netherite_armor
    })
})