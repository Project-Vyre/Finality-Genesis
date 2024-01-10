// priority: 0

ServerEvents.tags('item', event => {
    if (Platform.isLoaded('aether')) {
        event.add('aether:slider_damaging_items', 'kubejs:final_pickaxe')
    }
})