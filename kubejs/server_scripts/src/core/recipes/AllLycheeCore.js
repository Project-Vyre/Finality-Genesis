// requires: lychee
// ignored: false

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