// require: exposure
// requires: create

ClientEvents.lang('en_us', event => {
  // STANDARD_PALETTE('exposure:camera')
  // STANDARD_PALETTE('exposure:lightroom')
  // GRAY_WHITE_PALETTE('exposure:black_and_white_film')
  // GRAY_GOLD_PALETTE('exposure:color_film')
  // GRAY_WHITE_PALETTE('exposure:developed_black_and_white_film')
  // GRAY_GOLD_PALETTE('exposure:developed_color_film')
  event.addAll('exposure',
    createTooltip('exposure:lightroom')
      .addSummary('Where your photographs come to life. Have some _paper_ ready to print your photos onto!')
      .addBehaviour([
        'For black and white photos',
        'Put _black dye_ in the fourth slot.',
      ])
      .addBehaviour([
        'For color film',
        'Put _cyan_, _magenta_, and _yellow_ dye in that order in the bottom dye slots.'
      ])
      .build()
  )
  event.addAll('exposure',
    createTooltip('exposure:camera')
      .addSummary('Feel free to _capture_ special moments or your creations with this camera.')
      .addBehaviour([
        'On Sneak + R-Click',
        'Opens the _configuration_ screen for components.'
      ])
      .addBehaviour([
        'On R-Click with item',
        '_Installs_ / _swaps_ attachment(s) on the camera.'
      ])
      .addBehaviour([
        'On Sneak while taking a photo',
        'Shows the camera controls.'
      ])
      .addBehaviour([
        'If Redstone Lamp is present on the top slot',
        'Implements the _flash_ module. Please note that you _need to enable it_ while taking a photo by holding your _sneak_ key.'
      ])
      .addBehaviour([
        'If Spyglass is present in middle slot',
        'Behaves as if a _teleconverter_ has been installed.'
      ])
      .addBehaviour([
        'If Colored Glass Pane is present in bottom slot',
        'Puts a color filter on photos taken.'
      ])
      .build()
  )
  event.addAll('exposure',
    createTooltip('exposure:black_and_white_film')
      .addSummary('Takes a photograph in monocrhomatic _black and white_.')
      .addBehaviour([
        'On R-Click',
        'Allows you to _rename_ the film.'
      ])
      .addBehaviour([
        'To develop',
        'Needs to be combined with a _water bottle_ to develop the film.'
      ])
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll('exposure',
    createTooltip('exposure:developed_black_and_white_film')
      .addSummary('The next step is to _wash_ the film with a _small amount of water_.')
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll('exposure',
    createTooltip('exposure:color_film')
      .addSummary('Takes a photograph in _color_. It does require a more complex mix to develop it, however.')
      .addBehaviour([
        'On R-Click',
        'Allows you to _rename_ the film.'
      ])
      .addBehaviour([
        'To develop',
        'Requires one of each of these potions: Awkward, Mundane and Thick.'
      ])
      .setPalette($Palette.GRAY_AND_GOLD)
      .build()
  )
  event.addAll('exposure',
    createTooltip('exposure:developed_color_film')
      .addSummary('The next step is to _wash_ the film with a _certain mixture of potions_.')
      .addBehaviour([
        'To develop',
        'Requires one of each of these potions: Awkward, Mundane and Thick.'
      ])
      .setPalette($Palette.GRAY_AND_GOLD)
      .build()
  )
  event.addAll('exposure',
    createTooltip('minecraft:redstone_lamp')
      .addSummary('A redstone powered light source.')
      .addBehaviour([
        'When equipped in Exposure\'s Camera',
        'Behaves as the camera _flash_.'
      ])
      .build()
  )
  event.addAll('exposure',
    createTooltip('exposure:interplanar_projector')
      .addSummary('Allows projecting an image from another plane. _Consumed on use._')
      .addBehaviour([
        'On R-Click',
        'Changes _rendering_ mode.'
      ])
      .addBehaviour([
        'When renamed to file path',
        'This _"other plane"_ is your file system. You _must_ rename it to something that can _fit_ when renaming the item. For example _E:\\Pictures\\furina.png_'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
})
/*
.addBehaviour([
  'Requires Awkward Potion',
  'An Awkward potion is made with _1x Nether Wart_ and _water_ The water can also be contained in a heated _Basin_ for automated potion brewing.'
])
.addBehaviour([
  'Requires Mundane Potion',
  'A Mundane Potion can be made with any of the following options with a plain _water bottle_ or water in a heated _Basin_, though REI / JEI will show you all the possibilities... _Blaze Powder_, _Spider Eye_, _Sugar_, _Redstone_...'
])
.addBehaviour([
  'Requires Thick Potion',
  'A Thick Potion can only be brewed with _Glowstone Dust_.'
])
blockT('exposure', 'lightroom', 'LIGHTROOM')
blockSu('exposure', 'lightroom',
    'Where your photographs come to life. Have some _paper_ ready to print your photos onto!'
)
blockCb1('exposure', 'lightroom',
    'For black and white photos',
    'Put _black dye_ in the fourth slot.'
)
blockCb2('exposure', 'lightroom',
    'For color film',
    'Put _cyan_, _magenta_, and _yellow_ dye in that order in the bottom dye slots.'
)
itemT('exposure', 'camera', 'TOOLTIP')
itemSu('exposure', 'camera', 'Feel free to _capture_ special moments or your creations with this camera.')
itemCb1('exposure', 'camera',
    'On Sneak + R-Click',
    'Opens the _configuration_ screen.'
)
itemCb2('exposure', 'camera',
    'On Sneak while in photo-taking mode',
    'Allows for _fine-tuning_ of the camera.'
)
itemCb3('exposure', 'camera',
    'After use',
    '_Wash_ your film after using it with a _Bottle of Water_. Use a _Lightroom_ to _view_ and _print_ your photos.'
)
itemT('exposure', 'black_and_white_film', 'BLACK AND WHITE FILM')
itemSu('exposure', 'black_and_white_film', 'Takes a photograph in monochromatic _black and white_.')
itemT('exposure', 'color_film', 'COLOR FILM')
itemSu('exposure', 'color_film', 'Takes a photograph in _color_.')
itemT('exposure', 'developed_black_and_white_film', 'DEVELOPED BLACK AND WHITE FILM')
itemSu('exposure', 'developed_black_and_white_film', 'The next step is to _wash_ the film with a _small amount of water_.')
itemT('exposure', 'developed_color_film', 'DEVELOPED COLOR FILM')
itemSu('exposure', 'developed_color_film', 'The next step is to _wash_ the film with a _small amount of water_.')
*/