// requires: endrem
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'endrem',
    createTooltip('endrem:black_eye')
      .addSummary('Pirates say it gave sight to the legendary Black Pearl.')
      .addBehaviour([
        'Additional Info',
        'The eye appears dark with a blue sheen to it, staring back in a neutral manner.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:corrupted_eye')
      .addSummary('The eye of a greedy king that faded in solitude; legend says it will bring infinite fortune to its owner.')
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:lost_eye')
      .addSummary('It is told that it was forged by the first blacksmiths of time.')
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:evil_eye')
      .addSummary('A holy talisman said to protect its owner from bad luck.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:guardian_eye')
      .addSummary('It has seen _many_ warriors drown into the depths of the sea.')
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:wither_eye')
      .addSummary('It has witnessed destruction. Maybe it also witnessed your stuff disappear, surprised to see you come back.')
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:witch_eye')
      .addSummary('This pupil is believed to have seen the ancient brewing recipes that were lost in time.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:undead_eye')
      .addSummary('Remembrance of the past lives of those who live in death.')
      .setPalette($Palette.GRAY)
      .build()
  )
  // OCULI
  event.addAll(
    'endrem',
    createTooltip('endrem:magical_eye')
      .addSummary('Still, the winds change direction. Someday, they will blow towards a brighter future... Take my blessings and live leisurely from this day onward.')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:old_eye')
      .addSummary('The currencies that flow through this land are my flesh and blood. For thus did I become the guarantor of the people\'s hard work, wisdom, and future. This is the trust I have placed in them. Betray it, and you taint my blood.')
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:cursed_eye')
      .addSummary('This body is the noblest and most eminent of all in this world. It should hold absolute control over this world. It once promised its people a dream: the never-changing \'eternity\'.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:rogue_eye')
      .addSummary('I had a very, very long dream... In it, people were holding hands, dancing in a circle, be they sages or fools, dancers or warriors, puppets or statues of gods... That dancing circle embodied everything about the universe. Life has always been the end, while it is wisdom that shall be the means.')
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:nether_eye')
      .addSummary('A pilgrimage for a wish; a battle to earn a name... Burnt to cinders for a dream. If the intention yet remains, achieved §kAA§r\'s truth he has.')
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:exotic_eye')
      .addSummary('My ideals have no stains. I must correct you. People here bear no sins in the eyes of the gods... Only laws and the Tribunal can judge someone. They can judge even me. So praise my magnificence and purity.')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'endrem',
    createTooltip('endrem:cold_eye')
      .addSummary('Sorry... to also have you shoulder the grievances of the world. Since you could endure my bitter cold, you must have the desire to burn? Then, burn away the old world for me.')
      .addBehaviour([
        'Additional Info',
        '_It feels very cold to the touch._'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
})