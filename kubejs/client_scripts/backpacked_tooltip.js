// requires: backpacked

ItemEvents.tooltip(event => {
    event.addAdvanced('backpacked:backpack', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [
                Text.of('Hold ').gold(),
                Text.of('[Shift] ').yellow(),
                Text.of('to see more info.').gold()
            ])
        } else {
            text.add(1, [
                Text.of('Press ').white(),
                Text.of('[B] ').gold(),
                Text.of('to open when worn.').white()
            ])
            text.add(2, [
                Text.of('Also highly ').white(),
                Text.of('<rainb>customizable</rainb> ').aqua(),
                Text.of('when satisfying the results of certain challenges.').white()
            ])
        }

    })
})