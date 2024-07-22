// requires: scannable
// requires: create

let module_tooltips = [
  'range_module',
  'entity_module',
  'friendly_entity_module',
  'hostile_entity_module',
  'block_module',
  'common_ores_module',
  'rare_ores_module',
  'fluid_module',
  'chest_module'
]

ItemEvents.tooltip(event => {
  event.addAdvanced('scannable:scanner', (item, advanced, text) => {
    text.remove(1)
  })
  for (let i = 0; i < module_tooltips.length; i++) {
    let element = module_tooltips[i];
    event.addAdvanced('scannable:' + element, (item, advanced, text) => {
      text.remove(1)
    })
  }
})