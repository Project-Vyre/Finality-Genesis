// requires: tetra
// requires: create
// ignored: false

let mono = [
  'tetra:basic_workbench',
  'tetra:geode',
  'tetra:dragon_sinew',
  'tetra:forged_bolt',
  'tetra:forged_beam',
  'tetra:forged_mesh',
  'tetra:vent_plate',
  'tetra:planar_stabilizer',
  'tetra:combustion_chamber',
  'tetra:lubricant_dispenser',
  'tetra:forged_wall',
  'tetra:forged_pillar',
  'tetra:forged_platform',
  'tetra:forged_platform_slab',
  'tetra:forged_vent',
  'tetra:forged_workbench',
  'tetra:forged_container',
  'tetra:forged_crate',
  'tetra:transfer_unit',
  'tetra:extractor_pipe',
  'tetra:seeping_bedrock'
]
let duo = [
  'tetra:rack',
  'tetra:pristine_lapis',
  'tetra:pristine_emerald',
  'tetra:pristine_diamond',
  'tetra:pristine_amethyst'
]
let two_line = [
  'tetra:planar_stabilizer',
  'tetra:combustion_chamber',
  'tetra:lubricant_dispenser',
]
let tri = [
  'tetra:holo',
  'tetra:hammer_base',
  'tetra:core_extractor',
]
let tetra_artifacts = [
  'tetra:earthpiercer',
  'tetra:stonecutter'
]

ItemEvents.tooltip(event => {
  for (let i = 0; i < mono.length; i++) {
    let element = mono[i];
    event.addAdvanced(element, (item, advanced, text) => {
      text.remove(1)
    })
  }
  for (let i = 0; i < duo.length; i++) {
    let element = duo[i];
    event.addAdvanced(element, (item, advanced, text) => {
      text.remove(1)
      if (event.isShift()) {
        text.remove(1)
      }
    })
  }
  for (let i = 0; i < two_line.length; i++) {
    let element = two_line[i];
    event.addAdvanced(element, (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
    })
  }
  for (let i = 0; i < tri.length; i++) {
    let element = tri[i];
    event.addAdvanced(element, (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
      text.remove(1)
    })
  }
  for (let i = 0; i < tetra_artifacts.length; i++) {
    let element = tetra_artifacts[i];
    event.addAdvanced(element, (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
      text.remove(1)
      if (event.isShift()) {
        text.remove(1)
        text.remove(1)
        text.remove(1)
        text.remove(1)
      }
    })
  }
  event.addAdvanced('tetra:quick_latch', (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
    text.remove(1)
  })
  event.addAdvanced('tetra:metal_scrap', (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
    text.remove(1)
  })
  event.addAdvanced('tetra:vent_plate', (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
  })
  event.addAdvanced('tetra:thermal_cell', (item, advanced, text) => {
    text.remove(2)
    text.remove(2)
    text.remove(2)
  })
  event.addAdvanced('tetra:chthonic_extractor', (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
    text.remove(1)
    if (event.isShift()) {
      text.remove(1)
      text.remove(1)
      text.remove(1)
      text.remove(1)
      text.remove(1)
    }
  })
})