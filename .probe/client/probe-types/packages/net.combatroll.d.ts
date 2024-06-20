declare module "packages/net/combatroll/enchantments/$CustomConditionalEnchantment" {
import {$CustomConditionalEnchantment$Condition, $CustomConditionalEnchantment$Condition$Type} from "packages/net/combatroll/enchantments/$CustomConditionalEnchantment$Condition"

export interface $CustomConditionalEnchantment {

 "setCondition"(arg0: $CustomConditionalEnchantment$Condition$Type): void

(arg0: $CustomConditionalEnchantment$Condition$Type): void
}

export namespace $CustomConditionalEnchantment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomConditionalEnchantment$Type = ($CustomConditionalEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomConditionalEnchantment_ = $CustomConditionalEnchantment$Type;
}}
declare module "packages/net/combatroll/mixin/$PlayerEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerEntityAccessor {

 "invokeIsImmobile_CombatRoll"(): boolean

(): boolean
}

export namespace $PlayerEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEntityAccessor$Type = ($PlayerEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEntityAccessor_ = $PlayerEntityAccessor$Type;
}}
declare module "packages/net/combatroll/enchantments/$AmplifierEnchantment$Operation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AmplifierEnchantment$Operation extends $Enum<($AmplifierEnchantment$Operation)> {
static readonly "ADD": $AmplifierEnchantment$Operation
static readonly "MULTIPLY": $AmplifierEnchantment$Operation


public static "values"(): ($AmplifierEnchantment$Operation)[]
public static "valueOf"(name: string): $AmplifierEnchantment$Operation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmplifierEnchantment$Operation$Type = (("add") | ("multiply")) | ($AmplifierEnchantment$Operation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmplifierEnchantment$Operation_ = $AmplifierEnchantment$Operation$Type;
}}
declare module "packages/net/combatroll/enchantments/$AmplifierEnchantment" {
import {$AmplifierEnchantment$Operation, $AmplifierEnchantment$Operation$Type} from "packages/net/combatroll/enchantments/$AmplifierEnchantment$Operation"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentConfig, $EnchantmentConfig$Type} from "packages/net/combatroll/tinyconfig/models/$EnchantmentConfig"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$CustomConditionalEnchantment, $CustomConditionalEnchantment$Type} from "packages/net/combatroll/enchantments/$CustomConditionalEnchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$CustomConditionalEnchantment$Condition, $CustomConditionalEnchantment$Condition$Type} from "packages/net/combatroll/enchantments/$CustomConditionalEnchantment$Condition"

export class $AmplifierEnchantment extends $Enchantment implements $CustomConditionalEnchantment {
 "operation": $AmplifierEnchantment$Operation
 "properties": $EnchantmentConfig
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(weight: $Enchantment$Rarity$Type, operation: $AmplifierEnchantment$Operation$Type, properties: $EnchantmentConfig$Type, type: $EnchantmentCategory$Type, slotTypes: ($EquipmentSlot$Type)[])

public "condition"(condition: $CustomConditionalEnchantment$Condition$Type): $AmplifierEnchantment
public "apply"(value: double, level: integer): double
public "setCondition"(condition: $CustomConditionalEnchantment$Condition$Type): void
public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isTradeable"(): boolean
public "canEnchant"(stack: $ItemStack$Type): boolean
public "getMinCost"(level: integer): integer
public "getMaxCost"(level: integer): integer
get "maxLevel"(): integer
get "discoverable"(): boolean
get "tradeable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmplifierEnchantment$Type = ($AmplifierEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmplifierEnchantment_ = $AmplifierEnchantment$Type;
}}
declare module "packages/net/combatroll/api/$RollInvulnerable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RollInvulnerable {

 "setRollInvulnerableTicks"(arg0: integer): void

(arg0: integer): void
}

export namespace $RollInvulnerable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollInvulnerable$Type = ($RollInvulnerable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollInvulnerable_ = $RollInvulnerable$Type;
}}
declare module "packages/net/combatroll/mixin/client/$KeybindingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeybindingAccessor {

 "getBoundKey"(): $InputConstants$Key

(): $InputConstants$Key
}

export namespace $KeybindingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeybindingAccessor$Type = ($KeybindingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeybindingAccessor_ = $KeybindingAccessor$Type;
}}
declare module "packages/net/combatroll/client/$RollManager$CooldownInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $RollManager$CooldownInfo extends $Record {

constructor(elapsed: integer, total: integer, availableRolls: integer, maxRolls: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "total"(): integer
public "elapsed"(): integer
public "availableRolls"(): integer
public "maxRolls"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollManager$CooldownInfo$Type = ($RollManager$CooldownInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollManager$CooldownInfo_ = $RollManager$CooldownInfo$Type;
}}
declare module "packages/net/combatroll/client/animation/$AnimatablePlayer" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $AnimatablePlayer {

 "playRollAnimation"(arg0: string, arg1: $Vec3$Type): void

(arg0: string, arg1: $Vec3$Type): void
}

export namespace $AnimatablePlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatablePlayer$Type = ($AnimatablePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatablePlayer_ = $AnimatablePlayer$Type;
}}
declare module "packages/net/combatroll/enchantments/$CustomConditionalEnchantment$Condition" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CustomConditionalEnchantment$Condition {

 "isAcceptableItem"(arg0: $ItemStack$Type): boolean

(arg0: $ItemStack$Type): boolean
}

export namespace $CustomConditionalEnchantment$Condition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomConditionalEnchantment$Condition$Type = ($CustomConditionalEnchantment$Condition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomConditionalEnchantment$Condition_ = $CustomConditionalEnchantment$Condition$Type;
}}
declare module "packages/net/combatroll/tinyconfig/models/$EnchantmentConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EnchantmentConfig {
 "enabled": boolean
 "max_level": integer
 "min_cost": integer
 "step_cost": integer
 "bonus_per_level": float

constructor()
constructor(max_level: integer, min_cost: integer, step_cost: integer, bonus_per_level: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentConfig$Type = ($EnchantmentConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentConfig_ = $EnchantmentConfig$Type;
}}
declare module "packages/net/combatroll/client/$MinecraftClientExtension" {
import {$RollManager, $RollManager$Type} from "packages/net/combatroll/client/$RollManager"

export interface $MinecraftClientExtension {

 "getRollManager"(): $RollManager

(): $RollManager
}

export namespace $MinecraftClientExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientExtension$Type = ($MinecraftClientExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientExtension_ = $MinecraftClientExtension$Type;
}}
declare module "packages/net/combatroll/client/$RollManager" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RollManager$CooldownInfo, $RollManager$CooldownInfo$Type} from "packages/net/combatroll/client/$RollManager$CooldownInfo"

export class $RollManager {
 "isEnabled": boolean

constructor()

public "tick"(player: $LocalPlayer$Type): void
public "isRolling"(): boolean
public "isRollAvailable"(player: $Player$Type): boolean
public "onRoll"(player: $LocalPlayer$Type): void
public "getCooldown"(): $RollManager$CooldownInfo
public static "rollDuration"(): integer
get "rolling"(): boolean
get "cooldown"(): $RollManager$CooldownInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollManager$Type = ($RollManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollManager_ = $RollManager$Type;
}}
