// priority: 0
// requires: red_power

ClientEvents.lang('en_us', event => {
  event.addAll('red_power', {
    "itemGroup.red_power": "Red Power",

    "death.attack.wire": "%1$s was fried with high voltage",

    "feedback.red_power.success": "§aCreated a new §r{#1} §a{#2} block(s) length",
    "feedback.red_power.first_point": "§dFirst point set to §r{#1} §7({#2})",
    "feedback.red_power.reset": "§dSelection resets",
    "feedback.red_power.fail": "§cFailed to create wire, please try again",
    "feedback.red_power.wrong_block": "{#1} §ccan't contain wires",
    "feedback.red_power.connections_limit": "{#1}§c §chas reached connection limit §7({#2}/{#3})",
    "feedback.red_power.cant_transmit": "{#1} §ccan't transmit signal",
    "feedback.red_power.cant_receive": "{#1} §ccan't receive signal",
    "feedback.red_power.distance_limit": "§cMaximum distance exceeded §7({#1}/{#2})",
    "feedback.red_power.identical_points": "§cChoose another position",
    "feedback.red_power.wire_exist": "§cWire already exist, choose another position",
    "feedback.red_power.no_wires": "§cTake the wires in your left hand",
    "feedback.red_power.no_enough_wires": "§cNot enough wires §7({#1}/{#2})",

    "tooltip.red_power.not_dyed": "Not Dyed",
    "tooltip.red_power.attenuation": "- Attenuates every {#1} block(s).",
    "tooltip.red_power.max_length": "- Max length {#1} blocks.",
    "tooltip.red_power.max_connections": "- Allows {#1} connection(s).",

    "tooltip.red_power.common_wires": "Basic wire type with significant signal loss.",
    "tooltip.red_power.amethyst_wires": "Completely invisible wires.",
    "tooltip.red_power.echo_wires": "Reinforced wires with low signal loss.",
    "tooltip.red_power.ender_wires": "Reinforced wires with medium signal loss.",
    "tooltip.red_power.power_wires": "Powerful wires with minimal signal loss.",
    "tooltip.red_power.wrench": "Allows you to create non-physical redstone wires. {#}§2- RMB to select points. {#}§2- Shift + RMB to reset.",
    "tooltip.red_power.creative_wrench": "Allows you to create non-physical redstone wires. Ignores maximum length and number of connections.",
    "tooltip.red_power.cutters": "Allows you to remove non-physical redstone wires. {#}§2- RMB to select wire. {#}§2- Shift + RMB to remove.",
    "tooltip.red_power.safety_glasses": "Displays connections and extended node information.",

    "tooltip.red_power.reader_node": "Reads the redstone signal from the attached block.",
    "tooltip.red_power.node": "Receives and transmits a signal.",
    "tooltip.red_power.recorder_node": "Receives a signal and powers the attached block.",
    "tooltip.red_power.amplifier_node": "Amplifies the power of the input signal up to 10.",
    "tooltip.red_power.hidden_reader_node": "Reads the redstone signal from the attached block. Completely invisible.",
    "tooltip.red_power.hidden_node": "Receives and transmits a signal. Completely invisible.",
    "tooltip.red_power.hidden_recorder_node": "Receives a signal and powers the attached block. Completely invisible.",
    "tooltip.red_power.hidden_amplifier_node": "Amplifies the power of the input signal up to 10. Completely invisible.",
    "tooltip.red_power.core": "Compound node that amplifies signal power up to 15 and suppresses lightning.",
    "tooltip.red_power.not_gate": "Inverts the input signal.",
    "tooltip.red_power.and_gate": "True if all input signals are active.",
    "tooltip.red_power.or_gate": "True if at least one input signal is active.",
    "tooltip.red_power.nand_gate": "True if at least one input signal is inactive.",
    "tooltip.red_power.nor_gate": "True if all input signals are inactive.",
    "tooltip.red_power.xor_gate": "True if only one input signal is active.",
    "tooltip.red_power.xnor_gate": "True if all input signals have the same state.",
    "tooltip.red_power.timer": "Transmit a signal at preset time intervals.",
    "tooltip.red_power.autonomous_timer": "Transmit a signal at preset time intervals. Generates a signal on its own.",
    "tooltip.red_power.transmitter": "Reinforced Reader Node. Reads the redstone signal from the attached block.",
    "tooltip.red_power.insulator": "Reinforced Node. Receives and transmits a signal, as well as powers the attached block.",
    "tooltip.red_power.receiver": "Reinforced Recorder Node. Receives a signal and powers the attached block.",
    "tooltip.red_power.transformer": "Reinforced Amplifier Node. Amplifies the power of the input signal up to 15.",
    "tooltip.red_power.fusebox": "Transmits a signal only when enabled and has an amethyst inside.",
    "tooltip.red_power.lever": "Transmits a signal only when enabled.",
    "tooltip.red_power.light_switch": "Transmits a signal only when enabled.",

    "item.red_power.wrench": "Wrench",
    "item.red_power.creative_wrench": "Creative Wrench",
    "item.red_power.cutters": "Cutters",
    "item.red_power.wires": "Wires",
    "item.red_power.amethyst_wires": "Amethyst Wires",
    "item.red_power.echo_wires": "Echo Wires",
    "item.red_power.ender_wires": "Ender Wires",
    "item.red_power.power_wires": "Power Wires",
    "item.red_power.safety_glasses": "Safety Glasses",

    "block.red_power.reader_node": "Reader Node",
    "block.red_power.node": "Node",
    "block.red_power.recorder_node": "Recorder Node",
    "block.red_power.amplifier_node": "Amplifier Node",
    "block.red_power.hidden_reader_node": "Hidden Reader Node",
    "block.red_power.hidden_node": "Hidden Node",
    "block.red_power.hidden_recorder_node": "Hidden Recorder Node",
    "block.red_power.hidden_amplifier_node": "Hidden Amplifier Node",
    "block.red_power.core": "Core",
    "block.red_power.not_gate": "NOT Gate",
    "block.red_power.and_gate": "AND Gate",
    "block.red_power.or_gate": "OR Gate",
    "block.red_power.nand_gate": "NAND Gate",
    "block.red_power.nor_gate": "NOR Gate",
    "block.red_power.xor_gate": "XOR Gate",
    "block.red_power.xnor_gate": "XNOR Gate",
    "block.red_power.timer": "Timer",
    "block.red_power.autonomous_timer": "Autonomous Timer",
    "block.red_power.transmitter": "Transmitter",
    "block.red_power.receiver": "Receiver",
    "block.red_power.insulator": "Insulator",
    "block.red_power.fusebox": "Fusebox",
    "block.red_power.lever": "Lever",
    "block.red_power.light_switch": "Light Switch",
    "block.red_power.transformer": "Transformer",

    "wire_type.red_power.common": "Wire",
    "wire_type.red_power.amethyst": "Amethyst Wire",
    "wire_type.red_power.echo": "Echo Wire",
    "wire_type.red_power.ender": "Ender Wire",
    "wire_type.red_power.power": "Power Wire",

    "wire_color.red_power.red": "Red",
    "wire_color.red_power.green": "Green",
    "wire_color.red_power.blue": "Blue",
    "wire_color.red_power.purple": "Purple",
    "wire_color.red_power.yellow": "Yellow"
  })

})