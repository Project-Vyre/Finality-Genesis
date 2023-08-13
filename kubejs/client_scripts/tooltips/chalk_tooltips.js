// requires: chalk

ItemEvents.tooltip(event => {
    event.addAdvanced('#chalk:chalks', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [
                Text.of('Hold ').gray(),
                Text.of('[Shift] ').white(),
                Text.of('to see more info.').gray()
            ])
        } else {
            text.add(1, [
                Text.of('Click on the ').gold(),
                Text.of('full side ').yellow(),
                Text.of('of a block to draw a mark.').gold()
            ])
            text.add(2, [
                Text.of('The ').gold(),
                Text.of('direction ').red(),
                Text.of('does matter and will point the arrow in that direction.').gold()
            ])
            text.add(3, [
                Text.of('The ').gold(),
                Text.of('Chalk Box ').green(),
                Text.of('is an easy way to store and use your chalks and can be ').gold(),
                Text.of('right clicked ').green(),
                Text.of('to open its inventory.')
            ])
        }
    })
})