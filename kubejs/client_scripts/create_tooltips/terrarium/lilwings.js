// requires: lilwings
// requires: create

ClientEvents.lang('en_us', event => {
    STANDARD_PALETTE('minecraft:glass_bottle')
    STANDARD_PALETTE('lilwings:butterfly_net')
    STANDARD_PALETTE('lilwings:enderfly_net')
    event.addAll('lilwings', {
        "item.minecraft.glass_bottle.tooltip.condition2": "On Shift + R-click",
        "item.minecraft.glass_bottle.tooltip.behaviour2": "Places down a _butterfly jar_ from _Lil' Wings_ to give butterflies a home.",
        "item.lilwings.butterfly_net.tooltip": "BUTTERFLY NET",
        "item.lilwings.butterfly_net.tooltip.summary": "An essential tool for Lepidopterists just starting out with _collecting_ butterflies. Has a _limited_ amount of uses and can't capture all butterflies.",
        "item.lilwings.butterfly_net.tooltip.condition1": "On R-click on a Butterfly",
        "item.lilwings.butterfly_net.tooltip.behaviour1": "_Captures_ the butterfly.",
        "item.lilwings.butterfly_net.tooltip.condition2": "On R-click on a Butterfly Jar",
        "item.lilwings.butterfly_net.tooltip.behaviour2": "_Places_ the captured butterfly _inside_ the Butterfly Jar.",
        "item.lilwings.enderfly_net.tooltip": "ENDERFLY NET",
        "item.lilwings.enderfly_net.tooltip.summary": "For _expert_ Lepidopterists. Able to capture _all_ butterflies.",
        "item.lilwings.enderfly_net.tooltip.condition1": "On R-click on a Butterfly",
        "item.lilwings.enderfly_net.tooltip.behaviour1": "_Captures_ the butterfly.",
        "item.lilwings.enderfly_net.tooltip.condition2": "On R-click on a Butterfly Jar",
        "item.lilwings.enderfly_net.tooltip.behaviour2": "_Places_ the captured butterfly _inside_ the Butterfly Jar."
    })
})