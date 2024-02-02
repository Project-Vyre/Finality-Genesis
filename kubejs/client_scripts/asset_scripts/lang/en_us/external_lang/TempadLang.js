// requires: tempad

/**
 * @file Lang file generation for Tempad.
 */

ClientEvents.lang('en_us', event => {
    if (!Platform.isLoaded('textanimator')) {
        event.addAll('tempad', {
            "tooltip.tempad.fullycharged": "§aFully Charged.§r §5Will take§r %s §5to recharge after use.§r",
            "item.tempad.he_who_remains_tempad": "Overseer's Tempad",
            "entity.tempad.timedoor": "Timedoor"
        })
    }
    if (Platform.isLoaded('textanimator')) {
        event.addAll('tempad', {
            "gui.tempad.header_line_1": "ACTION LIST ////",
            "gui.tempad.header_line_2": "SELECT PROGRAM",
            "gui.tempad.options": "1. OPTIONS",
            "gui.tempad.run_program": "2. RUN PROGRAM",
            "gui.tempad.wiki": "3. WIKI",
            "gui.tempad.textfield": "Name:",
            "gui.tempad.new_location": "(+) New Location",
            "gui.tempad.add_location": "Add Location",
            "gui.tempad.select_location": "Select Location:",
            "gui.tempad.teleport": "Teleport",
            "gui.tempad.delete": "Delete Location",
            "gui.tempad.options_header": "Select a Color:",
            "gui.tempad.timedoor": "Timedoor",
            "tooltip.tempad.durability_cost": "Uses left: %s/%s",
            "tooltip.tempad.timeleft": "Time Until Fully Recharged: ",
            "tooltip.tempad.fullycharged": "§aFully Charged.§r §5Will take§r %s §5to recharge after use.§r",
            "tooltip.tempad.energy_info": "Energy: %s/%s RF",
            "tooltip.tempad.energy_cost": "Consumes %s RF per use",
            "tooltip.tempad.item_option_info": "Requires fuel item to use",
            "tooltip.tempad.experience_level_cost": "Requires %s Level(s) to open Timedoor",
            "tooltip.tempad.experience_points_cost": "Requires %s Experience Point(s) to open Timedoor",
            "item.tempad.tempad": "<rainb>Tempad</rainb>",
            "item.tempad.he_who_remains_tempad": "<rainb>Overseer's Tempad</rainb>",
            "item.tempad.he_who_remains_tempad.tooltip": "Property of 'He Who Remains'",
            "advancements.tempad.tempad": "For All Time. Always.",
            "advancements.tempad.tempad.description": "Obtain a Tempad",
            "advancements.tempad.he_who_remains": "The Citadel at the End of Time",
            "advancements.tempad.he_who_remains.description": "Obtain 'He Who Remains'' Tempad",
            "subtitles.tempad.entity.timedoor.open": "Timedoor opens",
            "entity.tempad.timedoor": "Timedoor"
        })
    }
})