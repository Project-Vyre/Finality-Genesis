// requires: malum
// requires: create

ClientEvents.lang('en_us', event => {
    event.addAll('malum',
        createTooltip('malum:encyclopedia_arcana')
            .addSummary('Your guide to the _dark arts_ of _Malum_.')
            .setPalette($Palette.PURPLE)
            .build()
    )
    event.addAll('malum',
        createTooltip('malum:spirit_pouch')
            .addSummary('_Automatically stores souls_ that you acquire from slain entities. No longer will you have to worry about storage on your person.')
            .addBehaviour([
                'On R-Click',
                '_Opens_ the inventory of the Spirit Pouch.'
            ])
            .setPalette($Palette.PURPLE)
            .build()
    )
    event.addAll('malum',
        createTooltip('malum:tyrving')
            .addSummary('Deals _direct damage_ to the _soul_ of the entity that gets hit.')
            .setPalette($Palette.PURPLE)
            .build()
    )
    event.addAll('malum',
        createTooltip('malum:runewood_sign')
            .addSummary('_DO NOT PLACE_ OR YOU WILL _SOFTLOCK ACCESS FROM YOUR WORLD_!')
            .setPalette($Palette.RED)
            .build()
    )
    event.addAll('malum',
        createTooltip('malum:soulwood_sign')
            .addSummary('_DO NOT PLACE_ OR YOU WILL _SOFTLOCK ACCESS FROM YOUR WORLD_!')
            .setPalette($Palette.RED)
            .build()
    )
    /*event.addAll('malum', {
        "item.malum.encyclopedia_arcana.tooltip": "ENCYCLOPEDIA ARCANA",
        "item.malum.encyclopedia_arcana.tooltip.summary": "Your guide to the _dark arts_ of _Malum_.",
        "item.malum.tyrving.tooltip": "TYRVING",
        "item.malum.tyrving.tooltip.summary": "Deals _direct damage_ to the _soul_ of the entity that gets hit."
    })*/
})