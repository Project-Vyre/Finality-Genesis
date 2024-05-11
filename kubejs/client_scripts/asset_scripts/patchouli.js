// requires: patchouli
// ignored: true

/**
 * @file Patchouli assets handler.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let text = "patchouli:text"
let spotlight = "patchouli:spotlight"

ClientEvents.highPriorityAssets(event => {
  /**
   * @example
   * headCategory(
   *     'momentum', 
   *     'Momentum', 
   *     'Create momentum to get started with your journey. Infinitum creatio. $(br)All entries here are related to Create which does have a built in tutorial system called Ponder which is accessible by holding [W] on individual items OR clicking the goggles icon in the pause menu.',
   *     'create:mechanical_crafter',
   *     0
   * )
   * @param {ResourceLocation_} categoryResourceName 
   * @param {string} categoryName 
   * @param {string} categoryDescription 
   * @param {Internal.ItemStack} categoryIcon 
   * @param {number} sortNumber 
   * @param {string} flags
   */
  function headCategory (
    categoryResourceName,
    categoryName,
    categoryDescription,
    categoryIcon,
    sortNumber,
    flags
  ) {
    event.add(`finality:patchouli_books/tome_of_finality/en_us/categories/${categoryResourceName}/${categoryResourceName}`, {
      "name": categoryName,
      "description": categoryDescription,
      "icon": categoryIcon,
      "sortnum": sortNumber,
      "flag": flags
    })
  }
  /**
   * 
   * @param {ResourceLocation_} categoryFolder 
   * @param {string} fileName 
   * @param {string} categoryName 
   * @param {Internal.ItemStack} categoryIcon 
   * @param {string} categoryDescription 
   * @param {ResourceLocation_} parent 
   * @param {string} flags
   * @example flag examples
   * "debug": Is true when the game is being loaded from an IDE Debug mode
   * "advancements_disabled": Is true when the "Disable Advancement Locking" option in the Patchouli config is true
   * "testing_mode": Is true when the "Testing Mode" option in the Patchouli config is true
   * "mod:MOD_ID": Is true when the mod mod_id is loaded in the game
   */
  function subCategory (categoryFolder, fileName, categoryName, categoryDescription, categoryIcon, parent) {
    event.add(`finality:patchouli_books/tome_of_finality/en_us/categories/${categoryFolder}/${fileName}`, {
      "name": categoryName,
      "icon": categoryIcon,
      "description": categoryDescription,
      "parent": `patchouli:${parent}/${fileName}`
    })
  }
  /**
   * 
   * @param {*} resourcePath 
   * @param {*} entryName 
   * @param {*} entryIcon 
   * @param {*} entryCategory 
   * @param {com.google.gson.JsonElement_} entryContents 
   */
  function entry (resourcePath, entryName, entryIcon, entryCategory, entryContents) {
    event.add(`patchouli:patchouli_books/tome_of_finality/en_us/entries/${resourcePath}`, {
      "name": entryName,
      "icon": entryIcon,
      "category": `patchouli:${entryCategory}`,
      "pages": entryContents
    })
  }
  // categories
  headCategory ('adventure', 'Adventure', 'For all your adventuring and combat needs.', 'minecraft:iron_sword', 2, 'mod:aquamirae')
  subCategory('adventure', 'aquamirae', 'Aquamirae',
    'This entry contains information on the mini-bosses and bosses of Aquamirae and is not spoiler free! Entities displayed here have been set to a scale of 0.75 and do not reflect their actual size in-game. $(br2)Notice: The Harbinger and Leviathan are 1.19+ exclusive along with their tools.',
    'aquamirae:rune_of_the_storm',
    'adventure/adventure'
  )
  entry('adventure/aquamirae/aquamirae_tips', 'The Captain\'s Ghost', 'aquamirae:ship_graveyard_echo', 'adventure/aquamirae', [
    {
      "type": "patchouli:text",
      "text": "This entry does not contain spoiler free advice."
    },
    {
      "type": "patchouli:spotlight",
      "item": "aquamirae:shell_horn",
      "text": "You can acquire the Shell Horn by killing a Captain. $(br2)Captains can be found on Ships within the biome."
    },
    {
      "type": "patchouli:spotlight",
      "item": "aquamirae:terrible_sword",
      "text": "So you acquired the Horn, but you may find out that Captain Cornelia is unkillable by normal means. $(br2)You have to use the Terrible Sword if you have nothing else to end the fight. $(br2)Make sure your critical hits count!"
    }
  ])
})