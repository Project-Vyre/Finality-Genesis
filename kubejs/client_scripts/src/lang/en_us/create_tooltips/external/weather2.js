/**
 * @file Create tooltip generation for the Weather2 mod.
 * 
 */


// requires: weather2
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'weather2',
    createTooltip('weather2:weather_item')
      .addSummary('An _essential_ item for everything weather related.')
      .build()
  )
  event.addAll(
    'weather2',
    createTooltip('weather2:tornado_siren')
      .addSummary('A necessity.')
      .addBehaviour([
        'Tornado Alert!',
        'Emits a _loud sound_ to alert you should a tornado begin forming.'
      ])
      .build()
  )
  event.addAll(
    'weather2',
    createTooltip('weather2:tornado_sensor')
      .addSummary('Emits a _redstone signal_ when a tornado is detected.')
      .build()
  )
  event.addAll(
    'weather2',
    createTooltip('weather2:weather_deflector')
      .addSummary('Deflects all kinds of dangerous weather _away_ from its vicinity.')
      .addBehaviour([
        'When placed',
        'Has an effective radius of 300 blocks.'
      ])
      .build()
  )
  event.addAll(
    'weather2',
    createTooltip('weather2:weather_forecast')
      .addSummary('Provides information about the possibility of weather events.')
      .addBehaviour([
        'On R-Click [Placed]',
        'Tells you the _possibility_ of weather events in the area.'
      ])
      .build()
  )
  event.addAll(
    'weather2',
    createTooltip('weather2:anemometer')
      .addSummary('Used to measure wind _speed_.')
      .build()
  )
  event.addAll(
    'weather2',
    createTooltip('weather2:wind_vane')
      .addSummary('Used to determine the _direction_ of the wind.')
      .build()
  )
  event.addAll(
    'weather2',
    createTooltip('weather2:wind_turbine')
      .addSummary('Generates Fe with the power of wind!')
      .build()
  )
})