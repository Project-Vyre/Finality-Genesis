// requires: mutantmonsters
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'mutantmonsters',
    createTooltip('mutantmonsters:creeper_shard')
      .addSummary('A shard from a defeated Mutant Creeper. Used for making _Chemical X_ or the _Creeper Minion Tracker_.')
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'mutantmonsters',
    createTooltip('mutantmonsters:endersoul_hand')
      .addSummary('Obtained from a defeated Mutant Enderman. Used for making _Chemical X_ or can be utilized a _weapon_ itself.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'mutantmonsters',
    createTooltip('mutantmonsters:mutant_skeleton_skull')
      .addSummary('Obtained from a defeated Mutant Skeleton. Used for making _Chemical X_ or as a _weapon_.')
      .setPalette($Palette.GRAY)
      .build()
  )
})