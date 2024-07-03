// requires: productivebees

ClientEvents.lang('en_us', event => {
  if (Platform.isLoaded('tetra')) {
    event.add(
      'productivebees',
      'entity.productivebees.scrapped_bee',
      'Metal Scrap Bee'
    )
  }
})