// requires: cloudstorage
// requires: create

ClientEvents.lang('en_us', event => {
  STANDARD_PALETTE('cloudstorage:balloon_bit')
  STANDARD_PALETTE('cloudstorage:balloon_stand')
  STANDARD_PALETTE('cloudstorage:cloud_chest')
  BLUE_PALETTE('cloudstorage:static_cloud_chest')
  event.addAll({
    "item.cloudstorage.balloon_bit.tooltip": "BALLOON BIT",
    "item.cloudstorage.balloon_bit.tooltip.summary": "With the power of the Crafting Table, you can make a new _balloon_ from _these pieces_.",
    "item.cloudstorage.balloon_bit.condition1": "On right click as a balloon",
    "item.cloudstorage.balloon_bit.behaviour1": "_Assigns_ the _Cloud Chest_ or _Static Cloud Chest_ that respective channel. Static Cloud Chests require a balloon with a _static charge_.",
    "block.cloudstorage.balloon_stand.tooltip": "BALLOON STAND",
    "block.cloudstorage.balloon_stand.tooltip.summary": "Used for _reading_ statistics for individual balloon channels and allows for the _copying_ of balloon colors.",
    "block.cloudstorage.balloon_stand.tooltip.condition1": "Top slot usage",
    "block.cloudstorage.balloon_stand.tooltip.behaviour1": "Used for _reading_ the statistics about the cloud storage _linked_ to that balloon.",
    "block.cloudstorage.balloon_stand.tooltip.condition2": "Bottom slot usage",
    "block.cloudstorage.balloon_stand.tooltip.behaviour2": "Used for _applying_ the _color_ of the balloon in the bottom slot to the balloon in the top slot.",
    "block.cloudstorage.cloud_chest.tooltip": "CLOUD CHEST",
    "block.cloudstorage.cloud_chest.tooltip.summary": "Personal and private. It's expandable too!",
    "block.cloudstorage.cloud_chest.tooltip.condition1": "How to Expand Storage",
    "block.cloudstorage.cloud_chest.tooltip.behaviour1": "Firstly, craft a few chests. Then using the _same balloon assigned_ to your Cloud Chest, send them up to the sky... literally.",
    "block.cloudstorage.cloud_chest.tooltip.condition2": "How to Switch Channels",
    "block.cloudstorage.cloud_chest.tooltip.behaviour2": "Right click the cloud chest with a _normal_ balloon in your hand, not one with a static charge.",
    "block.cloudstorage.static_cloud_chest.tooltip": "STATIC CLOUD CHEST",
    "block.cloudstorage.static_cloud_chest.tooltip.summary": "The publicly accessible cloud chest. _Anyone_ with matching _balloon colors_ can _access_ the inventory associated with it.",
    "block.cloudstorage.static_cloud_chest.tooltip.condition1": "How to Expand Storage",
    "block.cloudstorage.static_cloud_chest.tooltip.behaviour1": "Unlike the normal cloud chest, a static cloud chest uses balloons with a _static charge_. So if you want to expand storage for your static cloud chest MAKE SURE you use balloons with a _static charge_.",
    "block.cloudstorage.static_cloud_chest.tooltip.condition2": "How to Switch Channels",
    "block.cloudstorage.static_cloud_chest.tooltip.behaviour2": "The process is similar to the regular cloud chest, just use balloons with a _static charge_."
  })
  event.addAll(
    'cloudstorage',
    createTooltip('cloudstorage:static_cloud')
      .addSummary('Used for giving balloons a _static charge_ to send up chests to the _static cloud_.')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'cloudstorage',
    createTooltip('cloudstorage:balloon')
      .addSummary('Can be used to add _additional storage_. Pops easily!')
      .addBehaviour([
        'On R-Click on regular chests',
        'Used for adding additional storage to a _Cloud Chest_ or a _Static Cloud Chest_. Ensure that the balloon _type_ AND _color_ match with the chest you are trying to add storage to!'
      ])
      .build()
  )
})