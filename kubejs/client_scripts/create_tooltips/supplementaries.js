// requires: supplementaries
// requires: create

ClientEvents.lang('en_us', event => {
    // currently the sack and vault do not accept Create's tooltips.
    GRAY_PALETTE('supplementaries:cage')
    PURPLE_PALETTE('supplementaries:enderman_head')
    STANDARD_PALETTE('supplementaries:key')
    GRAY_PALETTE('supplementaries:pedestal')
    STANDARD_PALETTE('supplementaries:quiver')
    GRAY_PALETTE('supplementaries:statue')
    event.addAll('supplementaries', {
        "block.supplementaries.cage.tooltip": "CAGE",
        "block.supplementaries.cage.tooltip.summary": "Allows for the trapping of small animals for convenient transportation.",
        "block.supplementaries.cage.tooltip.condition1": "On R-Click on small animal",
        "block.supplementaries.cage.tooltip.behaviour1": "_Captures_ the small animal.",
        "block.supplementaries.cage.tooltip.condition2": "On R-click on ground with small animal",
        "block.supplementaries.cage.tooltip.behaviour2": "_Releases_ the small animal back into the world.",
        "block.supplementaries.cage.tooltip.condition3": "On Shift + R-Click",
        "block.supplementaries.cage.tooltip.behaviour3": "_Places_ the cage as a block.",
        "item.supplementaries.key.tooltip": "KEY",
        "item.supplementaries.key.tooltip.summary": "Able to _lock_ many Supplementaries related things. You should probably _rename_ it with some _lore_ to use as a personal passkey.",
        "item.supplementaries.key.tooltip.condition1": "On R-click",
        "item.supplementaries.key.tooltip.behaviour1": "Fully _locks_ eligible Supplementaries blocks. You _can't_ clear the lock once it is set, so _DO NOT_ lose your key.",
        "block.supplementaries.pedestal.tooltip": "PEDESTAL",
        "block.supplementaries.pedestal.tooltip.summary": "An _elegant_ display for whatever you place onto it.",
        "item.supplementaries.quiver.tooltip": "QUIVER",
        "item.supplementaries.quiver.tooltip.summary": "Easily _stores_ arrows to _save_ space in your inventory and does not have to be worn to be used. Holds _nine_ stacks of arrows.",
        "item.supplementaries.quiver.tooltip.condition1": "Storing arrows",
        "item.supplementaries.quiver.tooltip.behaviour1": "To store arrows in the Quiver, grab any stack size of arrows with your cursor then _right click_ over the Quiver.",
        // sack does not work
        //"block.supplementaries.sack.tooltip": "SACK",
        //"block.supplementaries.sack.tooltip.summary": "A convenient way to carry items on your person. Careful not to carry more than two sacks!",
        "block.supplementaries.statue.tooltip": "STATUE",
        "block.supplementaries.statue.tooltip.summary": "A small statue for decorative use and is able to _hold_ items. Some items have _special poses_ such as candles, tools and swords.",
        "block.supplementaries.statue.tooltip.condition1": "When powered by redstone",
        "block.supplementaries.statue.tooltip.behaviour1": "Proceeds to _wave_.",
        "block.supplementaries.enderman_head.tooltip": "ENDERMAN HEAD",
        "block.supplementaries.enderman_head.tooltip.summary": "It's just an Enderman head. _Stare_ at it, I dare you.",
        "block.supplementaries.enderman_head.tooltip.condition1": "When stared at",
        "block.supplementaries.enderman_head.tooltip.behaviour1": "_Provides_ redstone power."
    })
    event.addAll(
        'supplementaries',
        createTooltip('supplementaries:antique_ink')
            .addSummary('A rare item which is often found in _urns_, _fishing loot_, or _sold_ by _master cartographers_.')
            .addBehaviour([
                'When used on sign',
                'Changes the sign font to be _fancy_.'
            ])
            .build()
    )
})