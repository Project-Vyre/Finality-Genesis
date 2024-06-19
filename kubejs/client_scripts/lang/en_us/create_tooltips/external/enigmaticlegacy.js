// requires: enigmaticlegacy
// requires: create

ClientEvents.lang('en_us', event => {
  if (Platform.isLoaded('enigmaticlegacy') && Platform.isLoaded('apotheosis')) {
    RED_PALETTE('enigmaticlegacy:enchanter_pearl')
    event.addAll('kubejs', {
      "item.enigmaticlegacy.enchanter_pearl.tooltip": "ENCHANTER PEARL",
      "item.enigmaticlegacy.enchanter_pearl.tooltip.summary": "Currently _useless_ in 1.19.2 due to lack of compatibility with Apotheosis."
    })
  }
})