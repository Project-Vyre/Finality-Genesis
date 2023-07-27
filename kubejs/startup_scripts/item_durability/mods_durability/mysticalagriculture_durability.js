let ARMOR = ['helmet','chestplate','leggings','boots']
let TOOLS = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
let inferium_durability = 2048
let prudentium_durability = 4096
let tertium_durability = 4096
let imperium_durability = 8192

ItemEvents.modification(event => {
    event.modify('mysticalagriculture:inferium_sword', item => {
        item.maxDamage = inferium_durability
    })
    event.modify('mysticalagriculture:inferium_shovel', item => {
        item.maxDamage = inferium_durability
    })
    event.modify('mysticalagriculture:inferium_pickaxe', item => {
        item.maxDamage = inferium_durability
    })
    event.modify('mysticalagriculture:inferium_axe', item => {
        item.maxDamage = inferium_durability
    })
    event.modify('mysticalagriculture:inferium_hoe', item => {
        item.maxDamage = inferium_durability
    })
    event.modify('mysticalagriculture:prudentium_sword', item => {
        item.maxDamage = prudentium_durability
    })
    event.modify('mysticalagriculture:prudentium_shovel', item => {
        item.maxDamage = prudentium_durability
    })
    event.modify('mysticalagriculture:prudentium_pickaxe', item => {
        item.maxDamage = prudentium_durability
    })
    event.modify('mysticalagriculture:prudentium_axe', item => {
        item.maxDamage = prudentium_durability
    })
    event.modify('mysticalagriculture:prudentium_hoe', item => {
        item.maxDamage = prudentium_durability
    })
    event.modify('mysticalagriculture:tertium_sword', item => {
        item.maxDamage = tertium_durability
    })
    event.modify('mysticalagriculture:tertium_shovel', item => {
        item.maxDamage = tertium_durability
    })
    event.modify('mysticalagriculture:tertium_pickaxe', item => {
        item.maxDamage = tertium_durability
    })
    event.modify('mysticalagriculture:tertium_axe', item => {
        item.maxDamage = tertium_durability
    })
    event.modify('mysticalagriculture:tertium_hoe', item => {
        item.maxDamage = tertium_durability
    })	
    event.modify('mysticalagriculture:imperium_sword', item => {
		item.maxDamage = imperium_durability
	})
	event.modify('mysticalagriculture:imperium_shovel', item => {
		item.maxDamage = imperium_durability
	})
	event.modify('mysticalagriculture:imperium_pickaxe', item => {
		item.maxDamage = imperium_durability
	})
	event.modify('mysticalagriculture:imperium_axe', item => {
		item.maxDamage = imperium_durability
	})
	event.modify('mysticalagriculture:imperium_hoe', item => {
		item.maxDamage = imperium_durability
	})
})