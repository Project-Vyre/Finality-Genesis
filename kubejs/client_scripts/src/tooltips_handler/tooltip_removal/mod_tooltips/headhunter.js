// requires: headhunter_mod
// requires: create

ItemEvents.tooltip(event => {
  event.addAdvanced([
    'headhunter_mod:hh_vanilla_difficulty',
    'headhunter_mod:hhv_hard_difficulty',
    'headhunter_mod:vanilla_hh_instant_spawn',
    'headhunter_mod:hard_hh_instant_spawn',
    'headhunter_mod:v_hard_hh_instant_spawn',
    'headhunter_mod:true_hh_instant_spawn',
    'headhunter_mod:headhunteritems_bloodied_diamond',
  ], (item, advanced, text) => {
    text.remove(1)
  })
  // these two have two lines of tooltips
  event.addAdvanced([
    'headhunter_mod:hh_hard_difficulty',
    'headhunter_mod:hh_true_difficulty',
    'headhunter_mod:headhunteritems_bloodied_diamond'
  ], (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
  })
  event.addAdvanced([
    'headhunter_mod:headhunteritems_guidebook_basic',
    'headhunter_mod:headhunteritems_guidebook_advanced'
  ], (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
  })
  event.addAdvanced('headhunter_mod:headhunteritems_guidebook_intermediate', (item, advanced, text) => {
    text.remove(1)
  })
})