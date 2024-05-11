// requires: etched
// requires: create

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'etched:etching_table',
    'etched:album_jukebox',
    'etched:radio'
  ])
})