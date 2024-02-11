// requires: chipped
// requires: create

ClientEvents.lang('en_us', event => {
  RED_PALETTE('chipped:arched_leaded_glass_pane_pillar')
  Object.keys(DYE).forEach(blockID => {
    RED_PALETTE(`chipped:arched_${blockID}_stained_glass_pane_pillar`) // 'chipped:arched_black_stained_glass_pane_pillar'
  })
  event.add('chipped', 'block.chipped.arched_leaded_glass_pane_pillar.tooltip', 'CHIPPED LEADED GLASS PANE PILLAR')
  event.add('chipped', 'block.chipped.arched_leaded_glass_pane_pillar.tooltip.summary', 'The textures are _currently broken_ and will not show correctly. It has also been confirmed that the textures are not working as intended _with or without_ Embeddium.')
  Object.keys(DYE).forEach(insert => {
    event.add('chipped', `block.chipped.arched_${insert}_stained_glass_pane_pillar.tooltip`, `ARCHED ${DYE[insert]} STAINED GLASS PANE PILLAR`) //'chipped:arched_black_stained_glass_pane_pillar'
    event.add('chipped', `block.chipped.arched_${insert}_stained_glass_pane_pillar.tooltip.summary`, 'The textures are _currently broken_ and will not show correctly. It has also been confirmed that the textures are not working as intended _with or without_ Embeddium.')
  })
})