// requires: apotheosis
// requires: create

ClientEvents.lang('en_us', event => {
    YELLOW_PALETTE('apotheosis:vial_of_expulsion')
    PURPLE_PALETTE('apotheosis:vial_of_extraction')
    event.addAll('apotheosis', {
        "item.apotheosis.vial_of_expulsion.tooltip": "VIAL OF EXPULSION",
        "item.apotheosis.vial_of_expulsion.tooltip.summary": "Used in a _Smithing Table_ to _destroy_ socketed Apothic Gems and _preserve_ the Affixed item.",
        "item.apotheosis.vial_of_extraction.tooltip": "VIAL OF EXTRACTION",
        "item.apotheosis.vial_of_extraction.tooltip.summary": "Used in a _Smithing Table_ to _preserve_ socketed Apothic Gems at the cost of _destroying_ the Affixed item."
    })
    event.addAll(
        'kubejs',
        createTooltip('kubejs:eversor_gem_info')
            .addSummary('An extremely rare but _powerful_ gem. Momentum seems to be multiplied around it.')
            .addBehaviour([
                'Gem Attributes for Melee Weapons',
                'Multiplicatively increases _damage_, _critical chance_ and _critical damage_.'
            ])
            .addBehaviour([
                'Gem Attributes for Ranged Weapons',
                'Multiplicatively increases _velocity_, _damage_, _critical chance_, and _critical damage_.'
            ])
            .addBehaviour([
                'Gem Attributes for Tools',
                'Multiplicatively increases _reach distance_.'
            ])
            .addBehaviour([
                'Other Sources',
                'Can be crafted by either _crushing_ or _mixing_ Stable Entropy Particles.'
            ])
            .addBehaviour([
                'Why does this item exist?',
                'This information is stated here due to Apotheosis _stretching_ the item tooltip _past_ the screen bounds.'
            ])
            .setPalette($Palette.PURPLE)
            .build()
    )
    event.addAll(
        'kubejs',
        createTooltip('kubejs:acuti_ora_gem_info')
            .addSummary('An extremely rare but _powerful_ gem. It gives the sensation of slicing into your bones despite nothing happening.')
            .addBehaviour([
                'Gem Attributes for Melee Weapons',
                'Multiplicatively increases armor and protection _shred_. However, some enemies appear resistant to this due to mechanics outside of my control.'
            ])
            .addBehaviour([
                'Gem Attributes for Ranged Weapons',
                'Multiplicatively increases armor and protection _shred_. However, some enemies appear resistant to this due to mechanics outside of my control.'
            ])
            .addBehaviour([
                'Other Sources',
                'Can be obtained from using _Mechanical Saws_ to cut _existing_ Eversor gems.'
            ])
            .addBehaviour([
                'Why does this item exist?',
                'This information is stated here due to Apotheosis _stretching_ the item tooltip _past_ the screen bounds.'
            ])
            .setPalette($Palette.GRAY)
            .build()
    )
})