// requires: exposure
// requires: create

ItemEvents.tooltip(event => {
  event.addAdvanced('exposure:black_and_white_film', (item, advanced, text) => {
    text.remove(1)
  })
  event.addAdvanced('exposure:color_film', (item, advanced, text) => {
    text.remove(1)
  })
  event.addAdvanced('exposure:interplanar_projector', (item, advanced, text) => {
    text.remove(2)
    if (event.isShift()) {
      text.remove(2)
      text.remove(2)
    }
  })
})