// requires: destroy
// requires: createaddition
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove({ id: 'destroy:compat/createaddition/crafting/diamond_grid_sandpaper' })
})