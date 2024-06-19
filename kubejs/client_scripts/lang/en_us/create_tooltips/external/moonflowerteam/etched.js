// requires: etched
// requires: create

ClientEvents.lang('en_us', event => {
  YELLOW_PALETTE('etched:boombox')
  event.addAll('etched', {
    "item.etched.boombox.tooltip": "BOOMBOX",
    "item.etched.boombox.tooltip.summary": "Become a _walking_ jukebox for all to hear.",
    "item.etched.boombox.tooltip.condition1": "On Shift + R-click",
    "item.etched.boombox.tooltip.behaviour1": "_Pauses_ audio playback.",
    "item.etched.boombox.tooltip.condition2": "On R-click with Music Disc on cursor",
    "item.etched.boombox.tooltip.behaviour2": "_Inserts_ Music Disc into boombox."
  })
})