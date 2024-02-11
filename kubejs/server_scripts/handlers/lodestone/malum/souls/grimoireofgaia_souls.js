// requires: malum
// requires: grimoireofgaia

ServerEvents.highPriorityData(event => {
  /**
   * 
   * @param {Internal.DataPackEventJS} event 
   * @param {string} entity 
   * @param {string} primarySpiritType 
   * @param {object[]} spirits 
   * @param {object} spiritItem 
   */
  function specialSituation(entity, primarySpiritType, spirits, spiritItem) {
    event.addJson(`malum:spirit_data/entity/grimoireofgaia/${entity}.json`, {
      "registry_name": `grimoireofgaia:${entity}`,
      "primary_type": primarySpiritType,
      "spirits": spirits,
      "spirit_item": spiritItem
    })
  }
  /**
   * See Original post here {@link https://discord.com/channels/488774215961542666/1160015944882602054}
   * 
   * Arcane
   * Banshee: 2 arcane, 1 aerial, 1 wicked;
   * Bone Knight: 2 arcane, 1 wicked;
   * Chest: none;
   * Deathword: 2 arcane, 1 aerial;
   * Matango: 1 arcane, 1 earthen, 1 wicked;
   * Sporeling: none;
   * Nine Tails: 2 arcane, 1 wicked;
   * Yuki Onna: 2 arcane, 1 earthen, 1 aqueous;
   * 
   * Eldritch:
   * Behender: 2 eldritch, 2 arcane, 1 wicked, 1 aerial;
   * Ender Dragon Girl: 2 eldritch, 3 arcane;
   * Ender Eye: 1 eldritch, 1 arcane, 1 aerial;
   * 
   * Sacred:
   * Creeper Girl: 2 sacred, 2 infernal;
   * Cyan Flower: none;
   * Ender Girl: 2 sacred, 2 eldritch;
   * Slime Girl: 2 sacred, 2 aqueous;
   * Trader: 2 sacred, 2 arcane;
   * 
   * Wicked:
   * Dullahan: 2 wicked, 1 arcane, 1 eldritch;
   * Flesh Lich: 2 wicked, 1 earthen, 1 arcane;
   * Feral Goblin: 1 wicked, 1 earthen;
   * Gravemite: 1 wicked, 1 infernal;
   * Wild Horse: 1 wicked, 2 aerial, 1 earthen;
   * Mimic: 1 wicked, 2 arcane;
   * Shaman: 1 wicked, 1 arcane, 1 earthen;
   * Witch: 2 wicked, 2 arcane;
   * 
   * Aerial:
   * Arachne: 2 aerial, 1 arcane, 1 wicked;
   * Honey Bee: 2 aerial, 1 earthen;
   * Gryphon: 2 aerial, 2 earthen;
   * Harpy: 2 aerial, 1 wicked;
   * Valkyrie: 4 aerial, 2 arcane, 1 wicked;
   * Wizard Harpy: 2 aerial, 1 arcane;
   * 
   * Aqueous:
   * Cecaelia: 2 aqueous, 1 arcane, 1 wicked;
   * Gelatinous Slime: 2 aqueous, 2 arcane;
   * Mermaid: 2 aqueous, 1 wicked;
   * Naga: 2 aqueous, 1 earthen, 1 wicked;
   * Sharko: 2 aqueous, 2 wicked;
   * Siren: 2 aqueous, 1 wicked;
   * Sludge Girl: 1 aqueous, 1 arcane, 1 wicked;
   * Toad: 1 aqueous, 1 wicked;
   * 
   * Earthen:
   * Сentaur: 2 earthen;
   * Cobble Golem: 2 earthen, 1 arcane;
   * Cobblestone Golem: 2 earthen, 1 arcane;
   * Cyclops: 2 earthen;
   * Dryad: 2 earthen, 1 arcane;
   * Dwarf: 4 earthen;
   * Goblin: 2 earthen, 1 infernal [because bomber];
   * Hunter: 2 earthen;
   * Kobold:  1 earthen, 1 aerial, 1 wicked;
   * Mandragora: 1 earthen, 1 arcane;
   * Minotaur: 5 earthen, 1 arcane, 2 wicked;
   * Minotaurus: 2 earthen, 1 wicked;
   * Oni: 2 earthen, 1 wicked;
   * Ork: 2 earthen, 2 wicked;
   * Satyress: 2 earthen;
   * Spriggan: 2 earthen, 1 wicked;
   * Werecat: 2 earthen, 1 wicked;
   * 
   * Infernal:
   * Ant Hill: none;
   * Ant Worker: 1 infernal, 1 wicked;
   * Ant Salvager: 1 infernal, 1 earthen, 1 wicked;
   * Anubis: 1 infernal, 2 arcane, 1 wicked;
   * Creep: 2 infernal, 1 arcane, 1 wicked;
   * Mummy Ar-: 1 infernal, 1 wicked;
   * Sphinx: 3 infernal, 3 arcane, 1 wicked;
   * Succubus: 1 infernal, 1 arcane, 1 wicked;
   * Wither Cow: 1 infernal, 1 earthen, 1 wicked;
   * 
   * Unavailable entities (potential type and drops):
   * Ancient Vase: 
   * type: earthen;
   * spirits: none;
   * Baphomet: 
   * type: infernal;
   * spirits: 2 infernal, 1 arcane, 1 wicked;
   * Butler: 
   * type: wicked;
   * spirits: 1 wicked;
   * Dhampir: 
   * type: wicked;
   * spirits: 1 wicked, 1 arcane;
   * Kikimora: 
   * type: earthen;
   * spirts: 1 earthen, 1 arcane;
   * Selkie:
   * type: aqueous;
   * spirits: 2 aqueous, 1 wicked;
   * Vampire:
   * type: wicked;
   * spirits: 2 wicked; 4 arcane;
   * Yeti
   * type: earthen;
   * spirits: 2 earthen; 1 wicked;
   */
  /** 
   * Arcane
   * Banshee: 2 arcane, 1 aerial, 1 wicked;
   * Bone Knight: 2 arcane, 1 wicked;
   * Deathword: 2 arcane, 1 aerial;
   * Matango: 1 arcane, 1 earthen, 1 wicked;
   * Nine Tails: 2 arcane, 1 wicked;
   * Yuki Onna: 2 arcane, 1 earthen, 1 aqueous;
   */
  event.addJson('malum:spirit_data/entity/grimoireofgaia/banshee.json', {
    "registry_name": "grimoireofgaia:banshee",
    "primary_type": "arcane",
    "spirits": [
      {
        "spirit": "arcane",
        "count": 2
      },
      {
        "spirit": "aerial",
        "count": 1
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/bone_knight.json', {
    "registry_name": "grimoireofgaia:bone_knight",
    "primary_type": "arcane",
    "spirits": [
      {
        "spirit": "arcane",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/deathword.json', {
    "registry_name": "grimoireofgaia:deathword",
    "primary_type": "arcane",
    "spirits": [
      {
        "spirit": "arcane",
        "count": 2
      },
      {
        "spirit": "aerial",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/matango.json', {
    "registry_name": "grimoireofgaia:matango",
    "primary_type": "arcane",
    "spirits": [
      {
        "spirit": "arcane",
        "count": 1
      },
      {
        "spirit": "earthen",
        "count": 1
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/nine_tails.json', {
    "registry_name": "grimoireofgaia:nine_tails",
    "primary_type": "arcane",
    "spirits": [
      {
        "spirit": "arcane",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/yuki_onna.json', {
    "registry_name": "grimoireofgaia:yuki_onna",
    "primary_type": "arcane",
    "spirits": [
      {
        "spirit": "arcane",
        "count": 2
      },
      {
        "spirit": "earthen",
        "count": 1
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  /**
   * Eldritch
   * Behender: 2 eldritch, 2 arcane, 1 wicked, 1 aerial;
   * Ender Dragon Girl: 2 eldritch, 3 arcane;
   * Ender Eye: 1 eldritch, 1 arcane, 1 aerial;
   */
  event.addJson('malum:spirit_data/entity/grimoireofgaia/behender.json', {
    "registry_name": "grimoireofgaia:behender",
    "primary_type": "eldritch",
    "spirits": [
      {
        "spirit": "eldritch",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      },
      {
        "spirit": "aerial",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/ender_dragon_girl.json', {
    "registry_name": "grimoireofgaia:ender_dragon_girl",
    "primary_type": "eldritch",
    "spirits": [
      {
        "spirit": "eldritch",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 3
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/ender_eye.json', {
    "registry_name": "grimoireofgaia:ender_eye",
    "primary_type": "eldritch",
    "spirits": [
      {
        "spirit": "eldritch",
        "count": 1
      },
      {
        "spirit": "arcane",
        "count": 1
      },
      {
        "spirit": "aerial",
        "count": 1
      }
    ]
  })
  /**
   * Sacred:
   * Creeper Girl: 2 sacred, 2 infernal;
   * Cyan Flower: none;
   * Ender Girl: 2 sacred, 2 eldritch;
   * Slime Girl: 2 sacred, 2 aqueous;
   * Trader: 2 sacred, 2 arcane;
   */
  event.addJson('malum:spirit_data/entity/grimoireofgaia/creeper_girl.json', {
    "registry_name": "grimoireofgaia:creeper_girl",
    "primary_type": "sacred",
    "spirits": [
      {
        "spirit": "sacred",
        "count": 2
      },
      {
        "spirit": "infernal",
        "count": 2
      }
    ],
    "spirit_item": { "item": "grimoireofgaia:spawn_creeper_girl" }
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/ender_girl.json', {
    "registry_name": "grimoireofgaia:ender_girl",
    "primary_type": "sacred",
    "spirits": [
      {
        "spirit": "sacred",
        "count": 2
      },
      {
        "spirit": "eldritch",
        "count": 2
      }
    ],
    "spirit_item": { "item": "grimoireofgaia:spawn_ender_girl" }
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/slime_girl.json', {
    "registry_name": "grmoireofgaia:slime_girl",
    "primary_type": "sacred",
    "spirits": [
      {
        "spirit": "sacred",
        "count": 2
      },
      {
        "spirit": "aqueous",
        "count": 2
      }
    ],
    "spirit_item": { "item": "grimoireofia:spawn_slime_girl" }
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/trader.json', {
    "registry_name": "grimoireofgaia:trader",
    "primary_type": "sacred",
    "spirits": [
      {
        "spirit": "sacred",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 2
      }
    ],
    "spirit_item": { "item": "grimoireofgaia:spawn_trader" }
  })
  /**
   * Wicked:
   * Dullahan: 2 wicked, 1 arcane, 1 eldritch;
   * Flesh Lich: 2 wicked, 1 earthen, 1 arcane;
   * Feral Goblin: 1 wicked, 1 earthen;
   * Gravemite: 1 wicked, 1 infernal;
   * Wild Horse: 1 wicked, 2 aerial, 1 earthen;
   * Mimic: 1 wicked, 2 arcane;
   * Shaman: 1 wicked, 1 arcane, 1 earthen;
   * Witch: 2 wicked, 2 arcane;
   */
  event.addJson('malum:spirit_data/entity/grimoireofgaia/dullahan.json', {
    "registry_name": "grimoireofgaia:dullahan",
    "primary_type": "wicked",
    "spirits": [
      {
        "spirit": "wicked",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 2
      },
      {
        "spirit": "eldritch",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/flesh_lich.json', {
    "registry_name": "grimoireofgaia:flesh_lich",
    "primary_type": "wicked",
    "spirits": [
      {
        "spirit": "wicked",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 2
      },
      {
        "spirit": "earthen",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/goblin_feral.json', {
    "registry_name": "grimoireofgaia:goblin_feral",
    "primary_type": "wicked",
    "spirits": [
      {
        "spirit": "wicked",
        "count": 1
      },
      {
        "spirit": "earthen",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/gravemite.json', {
    "registry_name": "grimoireofgaia:gravemite",
    "primary_type": "wicked",
    "spirits": [
      {
        "spirit": "wicked",
        "count": 1
      },
      {
        "spirit": "infernal",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/horse.json', {
    "registry_name": "grimoireofgaia:horse",
    "primary_type": "wicked",
    "spirits": [
      {
        "spirit": "wicked",
        "count": 1
      },
      {
        "spirit": "aerial",
        "count": 2
      },
      {
        "spirit": "earthen",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/mimic.json', {
    "registry_name": "grimoireofgaia:mimic",
    "primary_type": "wicked",
    "spirits": [
      {
        "spirit": "wicked",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/shaman.json', {
    "registry_name": "grimoireofgaia:shaman",
    "primary_type": "wicked",
    "spirits": [
      {
        "spirit": "wicked",
        "count": 1
      },
      {
        "spirit": "arcane",
        "count": 1
      },
      {
        "spirit": "earthen",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/witch.json', {
    "registry_name": "grimoireofgaia:witch",
    "primary_type": "wicked",
    "spirits": [
      {
        "spirit": "wicked",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 2
      }
    ]
  })
  /**
   * Aerial
   * Arachne: 2 aerial, 1 arcane, 1 wicked;
   * Honey Bee: 2 aerial, 1 earthen;
   * Gryphon: 2 aerial, 1 wicked;
   * Harpy: 2 aerial, 1 wicked;
   * Valkyrie: 4 aerial, 2 arcane, 1 wicked;
   * Wizard Harpy: 2 aerial, 1 arcane;
   */
  event.addJson('malum:spirit_data/entity/grimoireofgaia/arachne.json', {
    "registry_name": "grimoireofgaia:arachne",
    "primary_type": "aerial",
    "spirits": [
      {
        "spirit": "aerial",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 1
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/bee.json', {
    "registry_name": "grimoireofgaia:bee",
    "primary_type": "aerial",
    "spirits": [
      {
        "spirit": "aerial",
        "count": 2
      },
      {
        "spirit": "earthen",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/gryphon.json', {
    "registry_name": "grimoireofgaia:gryphon",
    "primary_type": "aerial",
    "spirits": [
      {
        "spirit": "aerial",
        "count": 2
      },
      {
        "spirit": "earthen",
        "count": 2
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/harpy.json', {
    "registry_name": "grimoireofgaia:harpy",
    "primary_type": "aerial",
    "spirits": [
      {
        "spirit": "aerial",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/valkyrie.json', {
    "registry_name": "grimoireofgaia:valkyrie",
    "primary_type": "aerial",
    "spirits": [
      {
        "spirit": "aerial",
        "count": 4
      },
      {
        "spirit": "arcane",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/wizard_harpy.json', {
    "registry_name": "grimoireofgaia:wizard_harpy",
    "primary_type": "aerial",
    "spirits": [
      {
        "spirit": "aerial",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 1
      }
    ]
  })
  /**
   * Aqueous:
   * Cecaelia: 2 aqueous, 1 arcane, 1 wicked;
   * Gelatinous Slime: 2 aqueous, 2 arcane;
   * Mermaid: 2 aqueous, 1 wicked;
   * Naga: 2 aqueous, 1 earthen, 1 wicked;
   * Sharko: 2 aqueous, 2 wicked;
   * Siren: 2 aqueous, 1 wicked;
   * Toad: 1 aqueous, 1 wicked;
   */
  event.addJson('malum:spirit_data/entity/grimoireofgaia/cecaelia.json', {
    "registry_name": "grimoireofgaia:cecaelia",
    "primary_type": "aqueous",
    "spirits": [
      {
        "spirit": "aqueous",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 1
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/gelatinous_slime.json', {
    "registry_name": "grimoireofgaia:gelatinous_slime",
    "primary_type": "aqueous",
    "spirits": [
      {
        "spirit": "aqueous",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 2
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/mermaid.json', {
    "registry_name": "grimoireofgaia:mermaid",
    "primary_type": "aqueous",
    "spirits": [
      {
        "spirit": "aqueous",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/naga.json', {
    "registry_name": "grimoireofgaia:naga",
    "primary_type": "aqueous",
    "spirits": [
      {
        "spirit": "aqueous",
        "count": 2
      },
      {
        "spirit": "earthen",
        "count": 1
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/sharko.json', {
    "registry_name": "grimoireofgaia:sharko",
    "primary_type": "aqueous",
    "spirits": [
      {
        "spirit": "aqueous",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 2
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/siren.json', {
    "registry_name": "grimoireofgaia:siren",
    "primary_type": "aqueous",
    "spirits": [
      {
        "spirit": "aqueous",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/toad.json', {
    "registry_name": "grimoireofgaia:toad",
    "primary_type": "aqueous",
    "spirits": [
      {
        "spirit": "aqueous",
        "count": 1
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  /**
   * Earthen:
   * Сentaur: 2 earthen;
   * Cobble Golem: 2 earthen, 1 arcane;
   * Cobblestone Golem: 2 earthen, 1 arcane;
   * Cyclops: 2 earthen;
   * Dryad: 2 earthen, 1 arcane;
   * Dwarf: 4 earthen;
   * Goblin: 2 earthen, 1 infernal [because bomber];
   * Hunter: 2 earthen;
   * Kobold:  1 earthen, 1 aerial, 1 wicked;
   * Mandragora: 1 earthen, 1 arcane;
   * Minotaur: 5 earthen, 1 arcane, 2 wicked;
   * Minotaurus: 2 earthen, 1 wicked;
   * Oni: 2 earthen, 1 wicked;
   * Ork: 2 earthen, 2 wicked;
   * Satyress: 2 earthen;
   * Spriggan: 2 earthen, 1 wicked;
   * Werecat: 2 earthen, 1 wicked;
   */
  event.addJson('malum:spirit_data/entity/grimoireofgaia/centaur.json', {
    "registry_name": "grimoireofgaia:centaur",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/cobble_golem.json', {
    "registry_name": "grimoireofgaia:cobble_golem",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/cobblestone_golem.json', {
    "registry_name": "grimoireofgaia:cobblestone_golem",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/cyclops.json', {
    "registry_name": "grimoireofgaia:cyclops",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/dryad.json', {
    "registry_name": "grimoireofgaia:dryad",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      },
      {
        "spirit": "arcane",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/dwarf.json', {
    "registry_name": "grimoireofgaia:dwarf",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 4
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/goblin.json', {
    "registry_name": "grimoireofgaia:goblin",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      },
      {
        "spirit": "infernal",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/hunter.json', {
    "registry_name": "grimoireofgaia:hunter",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/kobold.json', {
    "registry_name": "grimoireofgaia:kobold",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 1
      },
      {
        "spirit": "aerial",
        "count": 1
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/mandragora.json', {
    "registry_name": "grimoireofgaia:mandragora",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 1
      },
      {
        "spirit": "arcane",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/minotaur.json', {
    "registry_name": "grimoireofgaia:minotaur",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 5
      },
      {
        "spirit": "arcane",
        "count": 1
      },
      {
        "spirit": "wicked",
        "count": 2
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/minotaurus.json', {
    "registry_name": "grimoireofgaia:minotaurus",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/oni.json', {
    "registry_name": "grimoireofgaia:oni",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/ork.json', {
    "registry_name": "grimoireofgaia:ork",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 2
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/satyress.json', {
    "registry_name": "grimoireofgaia:satyress",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/spriggan.json', {
    "registry_name": "grimoireofgaia:spriggan",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
  event.addJson('malum:spirit_data/entity/grimoireofgaia/werecat.json', {
    "registry_name": "grimoireofgaia:werecat",
    "primary_type": "earthen",
    "spirits": [
      {
        "spirit": "earthen",
        "count": 2
      },
      {
        "spirit": "wicked",
        "count": 1
      }
    ]
  })
})