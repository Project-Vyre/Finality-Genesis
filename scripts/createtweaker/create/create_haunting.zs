import mods.create.HauntingManager;
// Remember, output is always the first [] on the very left! Ingredients are grouped on the right side.
recipes.removeByName("create_sa:obsidian_haunting");
// Output is on left, Input ingredients on right
// Haunting - (Renewable) Andesite to Deepslate 
<recipetype:create:haunting>.addRecipe("andesite_to_deepslate", [<item:minecraft:deepslate>], <item:minecraft:andesite>);

// Haunting - Crying Obsidian
<recipetype:create:haunting>.addRecipe("obsidian_haunting", [<item:minecraft:crying_obsidian>], <item:minecraft:obsidian>);

// Haunting - Nametag 
<recipetype:create:haunting>.addRecipe("booknquil_haunting", [<item:minecraft:name_tag>], <item:minecraft:writable_book>);