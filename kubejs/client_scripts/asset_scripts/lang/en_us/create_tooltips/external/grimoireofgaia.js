// requires: grimoireofgaia
// requires: create

ClientEvents.lang('en_us', event => {
  let gog_dolls = [
    'creeper_girl',
    'dryad',
    'dullahan',
    'ender_girl',
    'maid',
    'mermaid',
    'nine_tails',
    'slime_girl'
  ]
  gog_dolls.forEach(key => {
    YELLOW_PALETTE(`grimoireofgaia:doll_${key}`)
  })
  GREEN_PALETTE('grimoireofgaia:taproot')
  event.addAll('grimoireofgaia', {
    "item.grimoireofgaia.taproot.tooltip": "TAPROOT",
    "item.grimoireofgaia.taproot.tooltip.summary": "Commonly dropped by Dryads, Mandragora and Spriggans.",
    "item.grimoireofgaia.taproot.tooltip.condition1": "When eaten",
    "item.grimoireofgaia.taproot.tooltip.behaviour1": "Despite providing _no_ nutritional value, it serves as a _cure_ for _negative_ status effects."
  })
  let doll_lang = {
    doll_creeper_girl: 'DOLL CREEPER GIRL',
    doll_dryad: 'DOLL DRYAD',
    doll_dullahan: 'DOLL DULLAHAN',
    doll_ender_girl: 'DOLL ENDER GIRL',
    doll_mermaid: 'DOLL MERMAID',
    doll_nine_tails: 'DOLL NINE TAILS',
    doll_slime_girl: 'DOLL SLIME GIRL',
  }
  for (const [caps, CAPS] of Object.entries(doll_lang)) {
    event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip`, CAPS)
    event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.summary`, 'A cute plush doll decoration.')
    event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.condition1`, 'Acquisition Method')
    event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.behaviour1`, 'Can be acquired as a _loot drop_ from Grimoire of Gaia mobs.')
    if (Platform.isLoaded('goblintraders')) {
      event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.condition2`, 'Alternative Acquisition Method')
      event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.behaviour2`, 'Most now be acquired from the Goblin Trader as well, but it is a _rare_ trade.')
    }
  }
  event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip', 'DOLL MAID')
  event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.summary', 'A cute plush doll decoration.')
  event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.condition1', 'Acquisition Method')
  event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.behaviour1', 'Normally unobtainable, but can now drop from Mimics.')
  if (Platform.isLoaded('goblintraders')) {
    event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.condition2', 'Alternative Acquisition Method')
    event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.behaviour2', 'Can now be acquired from the Goblin Trader.')
  }
})