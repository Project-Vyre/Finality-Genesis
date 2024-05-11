// priority: 20
// requires: functionalstorage
// requires: create

ItemEvents.tooltip(event => {
  event.addAdvanced([
    'functionalstorage:framed_1',
    'functionalstorage:framed_2',
    'functionalstorage:framed_4',
    'functionalstorage:compacting_framed_drawer',
    'functionalstorage:framed_simple_compacting_drawer'
  ], (item, advanced, text) => {
    text.remove(1)
  })
})

