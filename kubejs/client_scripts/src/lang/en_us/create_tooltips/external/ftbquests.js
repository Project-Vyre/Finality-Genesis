// requires: ftbquests
// requires: create

ClientEvents.lang('en_us', event => {
  if (Platform.isLoaded('ftbquests')) {
    STANDARD_PALETTE('ftbquests:book')
  }
  event.addAll('kubejs', {
    "item.ftbquests.book.tooltip": "FTBQUESTS BOOK",
    "item.ftbquests.book.tooltip.summary": "This book _provides_ easy access to the quests screen and some _useful_ information in its tooltip.",
    "item.ftbquests.book.tooltip.condition1": "On R-click",
    "item.ftbquests.book.tooltip.behaviour1": "Opens the _quests_ screen. Be sure to read everything!",
    "item.ftbquests.book.tooltip.condition2": "Other methods of accessing quests",
    "item.ftbquests.book.tooltip.behaviour2": "You can also _access_ quests by opening your _inventory screen_ and _looking_ at the _top left_ corner of your screen.",
    "item.ftbquests.book.tooltip.condition3": "Chunk pre-generation",
    "item.ftbquests.book.tooltip.behaviour3": "Type _/chunky start minecraft:overworld_ to _pregenerate chunks_ in hopes of reducing TPS lag while exploring. This command is also available for _other dimensions_.",
    "item.ftbquests.book.tooltip.control1": "Default Keybinds - Camera Zoom",
    "item.ftbquests.book.tooltip.action1": "Press _C_ to _zoom in_. _Scroll_ to _adjust_ zoom level.",

  })
  if (Platform.isLoaded('personality')) {
    event.addAll('kubejs', {
      "item.ftbquests.book.tooltip.control2": "Default Keybinds - Crawling",
      "item.ftbquests.book.tooltip.action2": "Press _X_ to _crawl_ which allows you to get into _one block spaces_. Very useful!",
      "item.ftbquests.book.tooltip.control3": "Default Keybinds - Sitting",
      "item.ftbquests.book.tooltip.action3": "Press _N_ to _toggle_ the _sitting position_.",
    })
  }
  if (Platform.isLoaded('realcamera')) {
    event.addAll('kubejs', {
      "item.ftbquests.book.tooltip.control4": "Default Keybinds - Real Camera",
      "item.ftbquests.book.tooltip.action4": "Don't like the camera being attached to the player head realistically? Press _F6_ to _toggle_ the perspective."
    })
  }
  if (Platform.isLoaded('findme')) {
    event.addAll('kubejs', {
      "item.ftbquests.book.tooltip.condition8": "Default Keybinds - FindMe",
      "item.ftbquests.book.tooltip.behaviour8": "Press _Y_ on an item in REI/JEI to find that item in nearby chests. Look for _white particles_ that go through the wall!",
    })
  }
})