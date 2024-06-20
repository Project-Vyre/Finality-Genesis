// requires: lilwings
// requires: create

ClientEvents.lang('en_us', event => {
  STANDARD_PALETTE('minecraft:glass_bottle')
  STANDARD_PALETTE('lilwings:butterfly_net')
  STANDARD_PALETTE('lilwings:enderfly_net')
  event.addAll('lilwings', {
    "item.minecraft.glass_bottle.tooltip.condition2": "On Shift + R-click",
    "item.minecraft.glass_bottle.tooltip.behaviour2": "Places down a _butterfly jar_ from _Lil' Wings_ to give butterflies a home.",
    "item.lilwings.butterfly_net.tooltip": "BUTTERFLY NET",
    "item.lilwings.butterfly_net.tooltip.summary": "An essential tool for Lepidopterists just starting out with _collecting_ butterflies. Has a _limited_ amount of uses and can't capture all butterflies.",
    "item.lilwings.butterfly_net.tooltip.condition1": "On R-click on a Butterfly",
    "item.lilwings.butterfly_net.tooltip.behaviour1": "_Captures_ the butterfly.",
    "item.lilwings.butterfly_net.tooltip.condition2": "On R-click on a Butterfly Jar",
    "item.lilwings.butterfly_net.tooltip.behaviour2": "_Places_ the captured butterfly _inside_ the Butterfly Jar.",
    "item.lilwings.enderfly_net.tooltip": "ENDERFLY NET",
    "item.lilwings.enderfly_net.tooltip.summary": "For _expert_ Lepidopterists. Able to capture _all_ butterflies.",
    "item.lilwings.enderfly_net.tooltip.condition1": "On R-click on a Butterfly",
    "item.lilwings.enderfly_net.tooltip.behaviour1": "_Captures_ the butterfly.",
    "item.lilwings.enderfly_net.tooltip.condition2": "On R-click on a Butterfly Jar",
    "item.lilwings.enderfly_net.tooltip.behaviour2": "_Places_ the captured butterfly _inside_ the Butterfly Jar."
  })
  event.addAll(
    'lilwings',
    createTooltip('lilwings:cotton_ball')
      .addSummary('Used for gently transferring the butterflies power for your utilization. Combine with _Paper Wings_ in a crafting table.')
      .addBehaviour([
        'On R-Click on a butterfly',
        'Transfers the respective butterfly\'s power to the cotton ball.'
      ])
      .addBehaviour([
        'When combined with Paper Wings',
        'Changes the Paper Wings into something that can be _transformed_ or used.'
      ])
      .build()
  )
  event.addAll(
    'lilwings',
    createTooltip('lilwings:paper_wings')
      .addSummary('Mainly used with a _Cotton Ball_ that has changed after making contact with a butterfly.')
      .addBehaviour([
        'When combined with a changed Cotton Ball',
        'Changes the Paper Wings into something _potentially_ useful, such as being converted to another item.'
      ])
      .build()
  )
})