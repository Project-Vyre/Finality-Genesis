declare module "packages/reliquary/init/$ModEnchantments$SeveringEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ModEnchantments$SeveringEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory


public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModEnchantments$SeveringEnchantment$Type = ($ModEnchantments$SeveringEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModEnchantments$SeveringEnchantment_ = $ModEnchantments$SeveringEnchantment$Type;
}}
