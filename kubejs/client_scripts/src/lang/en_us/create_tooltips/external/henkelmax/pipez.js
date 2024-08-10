// requires: pipez
// requires: create

let default_pipe_filtering = [
  'Filtering Info',
  'To filter what a pipe transports, an _Advanced Pipe Upgrade_ is required.'
]

ClientEvents.lang('en_us', event => {
  event.addAll(
    'pipez',
    createTooltip('pipez:item_pipe')
      .addSummary('_Please_ use these as they are _server TPS friendly_.')
      .addBehaviour([
        'On R-Click with Wrench',
        'Changes the _pipe form_ between input, output and closed. _Output_ form does not have the lip around the pipe and has a very tiny air gap.'
      ])
      .addBehaviour(default_pipe_filtering)
      .build()
  )
  event.addAll(
    'pipez',
    createTooltip('pipez:fluid_pipe')
      .addSummary('_Please_ use these as they are _server TPS friendly_ compared to Create\'s own Fluid Pipes.')
      .addBehaviour([
        'On R-Click with Wrench',
        'Changes the _pipe form_ between input, output and closed. _Output_ form does not have the lip around the pipe and has a very tiny air gap.'
      ])
      .addBehaviour(default_pipe_filtering)
      .build()
  )
  event.addAll(
    'pipez',
    createTooltip('pipez:energy_pipe')
      .addSummary('_Please_ use these as they are _server TPS friendly_ compared to other energy transfer solutions.')
      .addBehaviour([
        'On R-Click with Wrench',
        'Changes the _pipe form_ between input, output and closed. _Output_ form does not have the lip around the pipe and has a very tiny air gap.'
      ])
      .addBehaviour(default_pipe_filtering)
      .build()
  )
  event.addAll(
    'pipez',
    createTooltip('pipez:universal_pipe')
      .addSummary('_Please_ use these as they are _server TPS friendly_.')
      .addBehaviour([
        'On R-Click with Wrench',
        'Changes the _pipe form_ between input, output and closed. _Output_ form does not have the lip around the pipe and has a very tiny air gap.'
      ])
      .addBehaviour(default_pipe_filtering)
      .build()
  )
})