/**
 * @file Block tag handler for Create's fan transparent tag.
 */

// requires: create

ServerEvents.tags('block', event => {
  event.add('create:fan_transparent', [
    'kubejs:bloodfire_bars'
  ])
})