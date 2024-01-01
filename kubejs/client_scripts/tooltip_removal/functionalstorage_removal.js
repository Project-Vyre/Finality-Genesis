// priority: 20
// requires: functionalstorage

ItemEvents.tooltip(event => {
    let WOOD_TYPES = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped']
    event.addAdvanced([
        'functionalstorage:framed_1',
        'functionalstorage:framed_2',
        'functionalstorage:framed_4',
        'functionalstorage:compacting_framed_drawer',
        'functionalstorage:framed_simple_compacting_drawer'
    ], (item, advanced, text) => {
        text.remove(1)
        text.remove(1)
    })
})

