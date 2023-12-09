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
})