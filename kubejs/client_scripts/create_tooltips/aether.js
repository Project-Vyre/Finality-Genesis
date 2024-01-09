// requires: aether
// requires: create

ClientEvents.lang('en_us', event => {
    GRAY_PALETTE('aether:book_of_lore')
    event.addAll('aether', {
        "item.aether.book_of_lore.tooltip": "BOOK OF LORE",
        "item.aether.book_of_lore.tooltip.summary": "Place an item from _The Aether_ mod in the slot to learn more about it."
    })
    event.addAll(
        'aether',
        createTooltip('aether:icestone')
            .addSummary('It\'s so cold that it turns lava into obsidian and water into ice from a distance.')
            .build()
    )
    event.addAll(
        'aether',
        createTooltip('aether:incubator')
            .addSummary('Hatches moa eggs, but it takes a while.')
            .addBehaviour([
                'Fuel source',
                'Uses _Ambrosium torches_ as fuel.'
            ])
            .build()
    )
})