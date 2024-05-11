// requires: tipsmod
// requires: aether

ClientEvents.lang('en_us', event => {
  // Changed from Pro Tip to Aether Tip.
  event.add("aether", "gui.aether.pro_tip", "Aether Tip")
})

ClientEvents.highPriorityAssets(event => {
  let aetherTipKeys = [
    "aerogel_explosion_resistance",
    "aether_day_length",
    "altar_repairing",
    "ambrosium_shard_fuel",
    "blue_aerclouds",
    "champs",
    "check_surroundings",
    "close_door",
    "cold_parachute_crafting",
    "creepers",
    "dart_shooter_crafting",
    "darts_no_gravity",
    "difficulty",
    "dig_straight_down",
    "do_things",
    "drops",
    "dungeon_rewards",
    "dungeon_tiers",
    "enchant_blue_disk",
    "enchanted_gravitite_crafting",
    "enchanted_gravitite_floating",
    "expectations",
    "glowstone_portal_forming",
    "golden_apples",
    "golden_oak_amber",
    "golden_parachute_durability",
    "gravitite_armour_ability",
    "gravitite_ore_enchanting",
    "gravitite_tool_ability",
    "harvest_aechor_poison",
    "holystone_tool_ability",
    "icestone_freezing_blocks",
    "mimic_chest",
    "mining",
    "moa_egg_incubation",
    "moa_nature_staff",
    "parachute_activation",
    "phoenix_armor_submerging",
    "phyg_saddle",
    "portal_misclick",
    "quicksoil_sliding",
    "raw_meat",
    "remedy_bucket_enchanting",
    "respect",
    "risk_taking",
    "security",
    "sheepuff_puff",
    "shelter",
    "skyroot_tool_ability",
    "slimes",
    "spare_stack",
    "the_game",
    "victory_medal_drop",
    "watch_your_step",
    "white_aerclouds",
    "zanite_tool_ability",
    "zephyr_shooting"
  ]
  for (let i = 0; i < aetherTipKeys.length; i++) {
    event.add(`aether:tips/${aetherTipKeys[i]}`, {
      "tip": {
        "translate": `aether.pro_tips.line.aether.${aetherTipKeys[i]}`
      },
      "title": {
        "bold": true,
        "color": "aqua",
        "translate": "gui.aether.pro_tip",
        "underlined": false
      }
    })
  }
})