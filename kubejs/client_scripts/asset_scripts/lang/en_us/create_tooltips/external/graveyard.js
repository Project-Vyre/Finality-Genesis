// requires: graveyard
// requires: create

ClientEvents.lang('en_us', event => {
  GRAY_RED_PALETTE('graveyard:corruption')
  GRAY_RED_PALETTE('graveyard:ossuary')
  event.addAll('graveyard', {
    "item.graveyard.corruption.tooltip": "CORRUPTION",
    "item.graveyard.corruption.tooltip.summary": "A _special trading currency_ which can be used with an NPC residing near a _spooky tree_ at night time.",
    "item.graveyard.corruption.tooltip.condition1": "Other Info",
    "item.graveyard.corruption.tooltip.behaviour1": "Be sure to gather _a lot_ of this as it is needed in _large amounts_ in trading.",
    "block.graveyard.ossuary.tooltip": "OSSUARY",
    "block.graveyard.ossuary.tooltip.summary": "Used for making _death_ related _decor_ from bone blocks."
  })
})