// requires: lychee
// ignored: true

/**
 * @file Server handler for everything Lychee related.
 */

ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:item_burning",
        "item_in": {
            "tag": "logs_that_burn"
        },
        "post": {
            "type": "drop_item",
            "item": "charcoal"
        }
    }).id('finality:lychee/item_burning/charcoal')
})
/*
ServerEvents.highPriorityData(event => {
    event.addJson('kubejs:recipes/lychee/item_burning/charcoal', {
        "type": "lychee:item_burning",
        "item_in": {
            "tag": "logs_that_burn"
        },
        "post": {
            "type": "drop_item",
            "item": "charcoal"
        }
    })
})
*/