// requires: mutantmonsters
// requires: create

ClientEvents.lang('en_us', event => {
    event.addAll(
        'mutantmonsters',
        createTooltip('mutantmonsters:creeper_shard')
            .addSummary('A shard from a defeated Mutant Creeper. Used for making _Chemical X_ or the _Creeper Minion Tracker_.')
            .setPalette($Palette.GREEN)
            .build()
    )
})