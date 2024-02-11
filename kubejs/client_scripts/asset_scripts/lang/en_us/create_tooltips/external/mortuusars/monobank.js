// requires: monobank
// requires: create

ClientEvents.lang('en_us', event => {
  STANDARD_PALETTE('monobank:monobank')
  event.addAll('monobank', {
    "block.monobank.monobank.tooltip": "MONOBANK",
    "block.monobank.monobank.tooltip.summary": "Both _*secure_ and _blast-proof_ and _holds_ a large amount of a single item. Also does not _burn_ in lava!",
    "block.monobank.monobank.tooltip.condition1": "R-Click as the Owner",
    "block.monobank.monobank.tooltip.behaviour1": "Opens your monobank. Do note that strangers can _lock pick_ your lock.",
    "block.monobank.monobank.tooltip.condition2": "R-Click as a Stranger",
    "block.monobank.monobank.tooltip.behaviour2": "Opens the _lock picking_ interface."
  })
})