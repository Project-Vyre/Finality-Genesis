// ignored: true
// requires: patchouli

/**
 * @file Patchouli assets handler.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let text = "patchouli:text"
let spotlight = "patchouli:spotlight"

ClientEvents.highPriorityAssets(event => {
    event.add("kubejs:patchouli_books/tome_of_finality/book", {
        "name": "Tome of Finality",
        "book_texture": "patchouli:textures/gui/book_purple.png",
        "landing_text": "Welcome to Finality,$(br)$(playername). $(br2)This variant has a focus on Create and adventure while not having an excess of mods. $(br2)Despite not being finished, ou can still look forward to endgame automation.",
        "model": "patchouli:book_purple",
        "version": 0,
        "nameplate_color": "FF55FF",
        "subtitle": "Genesis Edition",
        "show_progress": false
    })
    // categories
    event.add("kubejs:patchouli_books/tome_of_finality/en_us/categories/momentum/appliances", {
        "name": "Appliances",
        "description": "Everything related to Create's appliances.",
        "icon": "create:mechanical_press",
        "parent": "kubejs:momentum/momentum"
    })
    // Momentum appliances entries
    /**
     * 
     * @param {string} fileName 
     * @param {com.google.gson.JsonElement_} contents 
     */
    function momentumAppliancesEntry(fileName, contents) {
        event.add(`kubejs:patchouli_books/tome_of_finality/en_us/entries/momentum/appliances/${fileName}`, contents)
    }
    momentumAppliancesEntry("bearing", {
        "name": "Mechanical Bearing",
        "icon": "create:mechanical_bearing",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_bearing",
                "text": "Work in progress"
            },
            {
                "type": "patchouli:text",
                "text": "Work in progress"
            }
        ]
    })
    momentumAppliancesEntry("crushing_wheels", {
        "name": "Crushing Wheels",
        "icon": "create:crushing_wheel",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:crushing_wheel",
                "text": "Work in progress"
            },
            {
                "type": "patchouli:text",
                "text": "Work in progress"
            }
        ]
    })
    momentumAppliancesEntry("drill", {
        "name": "Mechanical Drill",
        "icon": "create:mechanical_drill",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_drill",
                "text": "Work in progress"
            },
            {
                "type": "patchouli:text",
                "text": "Work in progress"
            }
        ]
    })
    momentumAppliancesEntry("elevator_pulley", {
        "name": "Elevator Pulley",
        "icon": "create:elevator_pulley",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:elevator_pulley",
                "text": "Work in progress"
            },
            {
                "type": "patchouli:text",
                "text": "Work in progress"
            }
        ]
    })
    momentumAppliancesEntry("fan", {
        "name": "Encased Fan",
        "icon": "create:encased_fan",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:encased_fan",
                "text": "Can do the following: $(li)Bulk blasting (lava) $(li)Bulk smoking (fire) $(li)Bulk washing (water) $(br)Notice: Any items incompatible with bulk blasting will be deleted."
            },
            {
                "type": "patchouli:text",
                "text": "Notice: Faster RPM does not equate to faster processing. $(br2)Instead, it is the quantity of fans focused on the same block. You can have 4 fans facing a single block horizontally and have 2 fans vertically, just make sure they are blowing towards the block and not pulling from the block."
            }
        ]
    })
    momentumAppliancesEntry("millstone", {
        "name": "Millstone",
        "icon": "create:millstone",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:millstone",
                "text": "Work in progress"
            },
            {
                "type": "patchouli:text",
                "text": "Work in progress"
            }
        ]
    })
    momentumAppliancesEntry("mixer", {
        "name": "Mechanical Mixer",
        "icon": "create:mechanical_mixer",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_mixer",
                "text": "Notice: Has a minimum RPM requirement of 32 RPM to operate. $(br2)It also integrates differently, using a horizontally placed cogwheel as stress input instead of a shaft connection."
            },
            {
                "type": "patchouli:text",
                "text": "The Mechanical Mixer is highly multi-purpose and can do the following in an automated manner: $(li)Potion brewing $(li)Shapeless crafting $(li)Metallic alloying $(li)Making food $(li)Making dough $(li)Making slime $(li)and more!"
            }
        ]
    })
    momentumAppliancesEntry("momentum_archive", {
        "name": "Momentum Archive",
        "icon": "create:mechanical_press",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:text",
                "text": "As always, please refer to the Ponder viewer by hovering your cursor on the items on the page for a more thorough explanation and more complete index. $(br2)The tooltip should appear and have the $(3)Hold [W] to Ponder$() prompt."
            },
            {
                "type": "patchouli:text",
                "text": "This entry focuses on some of the most useful Kinetic Appliances such as the following: $(li)Mechanical Press  $(li)Mechanical Mixer $(li)Mechanical Saw $(li)Mechanical Piston $(li)Mechanical Drill $(li)Mechanical Pump $(li)Encased Fan $(li)Deployer $(li)Millstone $(li)Crushing Wheels $(li)Mechanical Crafter $(br)...and more!"
            },
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_press",
                "text": "Essential for making all kinds of pressed sheets and certain sequenced assembly recipes."
            },
            {
                "type": "patchouli:text",
                "text": "Used for making... $(li)Iron Sheet $(li)Copper Sheet $(li)Golden Sheet $(li)Brass Sheet $(li)Sturdy Sheet"
            },
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_mixer",
                "text": "Notice: Has a minimum RPM requirement of 32 RPM to operate. $(br2)It also integrates differently, using a horizontally placed cogwheel as stress input instead of a shaft connection."
            },
            {
                "type": "patchouli:text",
                "text": "The Mechanical Mixer is highly multi-purpose and can do the following in an automated manner: $(li)Potion brewing $(li)Shapeless crafting $(li)Metallic alloying $(li)Making food $(li)Making dough $(li)Making slime $(li)and more!"
            },
            {
                "type": "patchouli:spotlight",
                "item": "create:encased_fan",
                "text": "Can do the following: $(li)Bulk blasting (lava) $(li)Bulk smoking (fire) $(li)Bulk washing (water) $(br)Notice: Any items incompatible with bulk blasting will be deleted."
            },
            {
                "type": "patchouli:text",
                "text": "Notice: Faster RPM does not equate to faster processing. $(br2)Instead, it is the quantity of fans focused on the same block. You can have 4 fans facing a single block horizontally and have 2 fans vertically, just make sure they are blowing towards the block and not pulling from the block."
            },
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_saw",
                "text": "Wood goes in, then gets refined based on the block or item that you have placed on the Saw's recipe filter. $(br2)Please refer to the Ponder viewer by holding W while the mouse is hovering over the item on the top of this page for a more thorough explanation."
            },
            {
                "type": "patchouli:text",
                "text": "Notice: You must set a filter to get the output you want if an input ingredient has many outcomes. $(br2)The Mechanical Saw can also be used to damage mobs and can be used in place of lava. Damage dealt is dependent on how fast it is rotating."
            },
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_pump",
                "text": "This is responsible for pumping fluids out of or into depending on how the cogwheel interacting with it is rotating. You can also change the direction that it is pumping by right clicking with a Wrench. $(br2)Don't Shift + Right click, otherwise you will cause the wrench to pick it up."
            },
            {
                "type": "patchouli:text",
                "text": "Notice: Mechanical Pumps running in parallel together pump fluid faster. $(br2)sAs always, please refer to the Ponder viewer by holding W while the mouse is hovering over the item on the spotlight page for a more thorough explanation."
            }
        ]
    })
    momentumAppliancesEntry("piston", {
        "name": "Mechanical Piston",
        "icon": "create:mechanical_piston",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_piston",
                "text": "Work in progress"
            },
            {
                "type": "patchouli:text",
                "text": "Work in progress"
            }
        ]
    })
    momentumAppliancesEntry("press", {
        "name": "Mechanical Press",
        "icon": "create:mechanical_press",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_press",
                "text": "Essential for making all kinds of pressed sheets and certain sequenced assembly recipes."
            },
            {
                "type": "patchouli:text",
                "text": "Used for making... $(li)Iron Sheet $(li)Copper Sheet $(li)Golden Sheet $(li)Brass Sheet $(li)Sturdy Sheet"
            }
        ]
    })
    momentumAppliancesEntry("pump", {
        "name": "Mechanical Pump",
        "icon": "create:mechanical_pump",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_pump",
                "text": "This is responsible for pumping fluids out of or into depending on how the cogwheel interacting with it is rotating. You can also change the direction that it is pumping by right clicking with a Wrench. $(br2)Don't Shift + Right click, otherwise you will cause the wrench to pick it up."
            },
            {
                "type": "patchouli:text",
                "text": "Notice: Mechanical Pumps running in parallel together pump fluid faster. $(br2)sAs always, please refer to the Ponder viewer by holding W while the mouse is hovering over the item on the spotlight page for a more thorough explanation."
            }
        ]
    })
    momentumAppliancesEntry("rope_pulley", {
        "name": "Rope Pulley",
        "icon": "create:rope_pulley",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:rope_pulley",
                "text": "Work in progress"
            },
            {
                "type": "patchouli:text",
                "text": "Work in progress"
            }
        ]
    })
    momentumAppliancesEntry("saw", {
        "name": "Mechanical Saw",
        "icon": "create:mechanical_saw",
        "category": "patchouli:momentum/appliances",
        "pages": [
            {
                "type": "patchouli:spotlight",
                "item": "create:mechanical_saw",
                "text": "Wood goes in, then gets refined based on the block or item that you have placed on the Saw's recipe filter. $(br2)Please refer to the Ponder viewer by holding W while the mouse is hovering over the item on the top of this page for a more thorough explanation."
            },
            {
                "type": "patchouli:text",
                "text": "Notice: You must set a filter to get the output you want if an input ingredient has many outcomes. $(br2)The Mechanical Saw can also be used to damage mobs and can be used in place of lava. Damage dealt is dependent on how fast it is rotating."
            }
        ]
    })
})