// requires: bhc
// requires: create

ClientEvents.lang('en_us', event => {
    RED_PALETTE('bhc:red_heart')
    event.addAll('bhc', {
        "item.bhc.red_heart.tooltip": "RED HEART",
        "item.bhc.red_heart.tooltip.summary": "Adds more health when used with the _Heart Amulet_ as a Red Heart Canister.",
        "item.bhc.red_heart.tooltip.condition1": "When melted",
        "item.bhc.red_heart.tooltip.behaviour1": "Used for making Melted Yellow Hearts which can then be _upgraded_ further.",
    })
})