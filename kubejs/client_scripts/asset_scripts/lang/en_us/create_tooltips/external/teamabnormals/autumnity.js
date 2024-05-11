// requires: autumnity
// requires: create

ClientEvents.lang('en_us', event => {
  YELLOW_PALETTE('autumnity:sappy_maple_log')
  YELLOW_PALETTE('autumnity:sappy_maple_wood')
  YELLOW_PALETTE('autumnity:foul_berries')
  YELLOW_PALETTE('autumnity:turkey')
  YELLOW_PALETTE('autumnity:cooked_turkey')
  event.addAll('autumnity', {
    "block.autumnity.sappy_maple_log.tooltip": "SAPPY MAPLE LOG",
    "block.autumnity.sappy_maple_log.tooltip.summary": "A maple log with sap flowing out.",
    "block.autumnity.sappy_maple_log.tooltip.condition1": "When right clicked with a glass bottle",
    "block.autumnity.sappy_maple_log.tooltip.behaviour1": "Extracts the sap and converts it into an ordinary wooden log.",
    "block.autumnity.sappy_maple_wood.tooltip": "SAPPY MAPLE WOOD",
    "block.autumnity.sappy_maple_wood.tooltip.summary": "Extracts the sap and converts it into an ordinary wood block.",
    "item.autumnity.foul_berries.tooltip": "FOUL BERRIES",
    "item.autumnity.foul_berries.tooltip.summary": "Can be fed to turkeys.",
    "item.autumnity.turkey.tooltip": "TURKEY",
    "item.autumnity.turkey.tooltip.summary": "It's raw turkey, what did you expect?",
    "item.autumnity.turkey.tooltip.condition1": "When dropped on player",
    "item.autumnity.turkey.tooltip.behaviour1": "Gets _stuck_ on said player's head...",
    "item.autumnity.cooked_turkey.tooltip": "COOKED TURKEY",
    "item.autumnity.cooked_turkey.tooltip.summary": "Autumn's feast. Enjoy!",
    "item.autumnity.cooked_turkey.tooltip.condition1": "When dropped on player",
    "item.autumnity.cooked_turkey.tooltip.behaviour1": "Gets _stuck_ on said player's head..."
  })
})