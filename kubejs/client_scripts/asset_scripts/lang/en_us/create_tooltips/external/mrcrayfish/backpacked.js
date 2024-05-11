// requires: backpacked
// requires: create

ClientEvents.lang('en_us', event => {
  if (!Platform.isLoaded('textanimator')) {
    event.addAll('backpacked',
      createTooltip('backpacked:backpack')
        .addSummary('Provides lots of _storage_ for your travels. Also highly _customizable_ with custom models!')
        .addBehaviour([
          'How to Use',
          'To access your _backpack_ simply press _[B]_. Your backpack can also be _enchanted_ with enchantments that will prove useful.'
        ])
        .addBehaviour([
          'Additional Info',
          'After _completing_ certain _challenges_, you _unlock_ new _looks_ for your backpack!'
        ])
        .addBehaviour([
          'Which enchantments?',
          'Good question! Simply type @backpacked into the _search bar_ of REI or JEI.'
        ])
        .build()
    )
  }
  if (Platform.isLoaded('textanimator')) {
    event.addAll('backpacked',
      createTooltip('backpacked:backpack')
        .addSummary('Provides lots of _storage_ for your travels. Also highly _customizable_ with custom models!')
        .addBehaviour([
          'How to Use',
          'To access your _backpack_ simply press _[B]_. Your backpack can also be _enchanted_ with enchantments that will prove useful.'
        ])
        .addBehaviour([
          'Additional Info',
          'After _completing_ certain _challenges_, you _unlock_ new <rainb>looks</rainb> for your backpack!'
        ])
        .addBehaviour([
          'Which enchantments?',
          'Good question! Simply type @backpacked into the _search bar_ of REI or JEI.'
        ])
        .build()
    )
  }
})

/*
    STANDARD_PALETTE('backpacked:backpack')
    event.addAll('backpacked', {
        "item.backpacked.backpack.tooltip": "BACKPACK",
        "item.backpacked.backpack.tooltip.summary": "Provides lots of _storage_ for your travels.",
        "item.backpacked.backpack.tooltip.condition1": "How to Use",
        "item.backpacked.backpack.tooltip.behaviour1": "To access your _backpack_ simply press _[B]_. Your backpack can also be _enchanted_ with enchantments that will prove useful.",
        "item.backpacked.backpack.tooltip.condition2": "Additional Info",
        "item.backpacked.backpack.tooltip.behaviour2": "After _completing_ certain _challenges_, you _unlock_ new <rainb>looks</rainb> for your backpack!",
    })
*/