// priority: 2
// requires: netjs

/**
 * @file Reads from and writes to the update_notifier.json file.
 * @author KostromDan <https://github.com/KostromDan> Original script author
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

StartupEvents.init(event => {
    let current = JsonIO.read('kubejs/update_notifier.json') ?? {}
    current["is_notified_at_this_launch"] = false
    JsonIO.write('kubejs/update_notifier.json', current)
})