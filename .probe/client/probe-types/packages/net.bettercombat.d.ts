declare module "packages/net/bettercombat/logic/knockback/$ConfigurableKnockback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigurableKnockback {

 "setKnockbackMultiplier_BetterCombat"(arg0: float): void

(arg0: float): void
}

export namespace $ConfigurableKnockback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableKnockback$Type = ($ConfigurableKnockback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableKnockback_ = $ConfigurableKnockback$Type;
}}
declare module "packages/net/bettercombat/client/collision/$OrientedBoundingBox" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $OrientedBoundingBox {
 "center": $Vec3
 "extent": $Vec3
 "axisX": $Vec3
 "axisY": $Vec3
 "axisZ": $Vec3
 "scaledAxisX": $Vec3
 "scaledAxisY": $Vec3
 "scaledAxisZ": $Vec3
 "rotation": $Matrix3f
 "vertex1": $Vec3
 "vertex2": $Vec3
 "vertex3": $Vec3
 "vertex4": $Vec3
 "vertex5": $Vec3
 "vertex6": $Vec3
 "vertex7": $Vec3
 "vertex8": $Vec3
 "vertices": ($Vec3)[]

constructor(obb: $OrientedBoundingBox$Type)
constructor(box: $AABB$Type)
constructor(center: $Vec3$Type, size: $Vec3$Type, yaw: float, pitch: float)
constructor(center: $Vec3$Type, width: double, height: double, depth: double, yaw: float, pitch: float)

public "scale"(scale: double): $OrientedBoundingBox
public "offset"(offset: $Vec3$Type): $OrientedBoundingBox
public "contains"(point: $Vec3$Type): boolean
public "copy"(): $OrientedBoundingBox
public "intersects"(boundingBox: $AABB$Type): boolean
public "intersects"(otherOBB: $OrientedBoundingBox$Type): boolean
public "updateVertex"(): $OrientedBoundingBox
public "offsetAlongAxisX"(offset: double): $OrientedBoundingBox
public "offsetAlongAxisZ"(offset: double): $OrientedBoundingBox
public static "Intersects"(a: $OrientedBoundingBox$Type, b: $OrientedBoundingBox$Type): boolean
public "offsetAlongAxisY"(offset: double): $OrientedBoundingBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrientedBoundingBox$Type = ($OrientedBoundingBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrientedBoundingBox_ = $OrientedBoundingBox$Type;
}}
declare module "packages/net/bettercombat/logic/$AnimatedHand" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnimatedHand extends $Enum<($AnimatedHand)> {
static readonly "MAIN_HAND": $AnimatedHand
static readonly "OFF_HAND": $AnimatedHand
static readonly "TWO_HANDED": $AnimatedHand


public static "values"(): ($AnimatedHand)[]
public static "valueOf"(name: string): $AnimatedHand
public static "from"(isOffHand: boolean, isTwoHanded: boolean): $AnimatedHand
public "isOffHand"(): boolean
get "offHand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedHand$Type = (("main_hand") | ("off_hand") | ("two_handed")) | ($AnimatedHand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatedHand_ = $AnimatedHand$Type;
}}
declare module "packages/net/bettercombat/logic/$ItemStackNBTWeaponAttributes" {
import {$WeaponAttributes, $WeaponAttributes$Type} from "packages/net/bettercombat/api/$WeaponAttributes"

export interface $ItemStackNBTWeaponAttributes {

 "hasInvalidAttributes"(): boolean
 "getWeaponAttributes"(): $WeaponAttributes
 "setInvalidAttributes"(arg0: boolean): void
 "setWeaponAttributes"(arg0: $WeaponAttributes$Type): void
}

export namespace $ItemStackNBTWeaponAttributes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackNBTWeaponAttributes$Type = ($ItemStackNBTWeaponAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackNBTWeaponAttributes_ = $ItemStackNBTWeaponAttributes$Type;
}}
declare module "packages/net/bettercombat/api/$WeaponAttributes$HitBoxShape" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WeaponAttributes$HitBoxShape extends $Enum<($WeaponAttributes$HitBoxShape)> {
static readonly "FORWARD_BOX": $WeaponAttributes$HitBoxShape
static readonly "VERTICAL_PLANE": $WeaponAttributes$HitBoxShape
static readonly "HORIZONTAL_PLANE": $WeaponAttributes$HitBoxShape


public static "values"(): ($WeaponAttributes$HitBoxShape)[]
public static "valueOf"(name: string): $WeaponAttributes$HitBoxShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$HitBoxShape$Type = (("horizontal_plane") | ("vertical_plane") | ("forward_box")) | ($WeaponAttributes$HitBoxShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponAttributes$HitBoxShape_ = $WeaponAttributes$HitBoxShape$Type;
}}
declare module "packages/net/bettercombat/mixin/$PlayerEntityAccessor" {
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $PlayerEntityAccessor {

 "getInventory"(): $Inventory

(): $Inventory
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
declare module "packages/net/bettercombat/mixin/$LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {

 "setLastAttackedTicks"(arg0: integer): void
 "getLastAttackedTicks"(): integer
 "invokeTurnHead"(arg0: float, arg1: float): float
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$Type;
}}
declare module "packages/net/bettercombat/api/$WeaponAttributes$Attack" {
import {$WeaponAttributes$Condition, $WeaponAttributes$Condition$Type} from "packages/net/bettercombat/api/$WeaponAttributes$Condition"
import {$WeaponAttributes$Sound, $WeaponAttributes$Sound$Type} from "packages/net/bettercombat/api/$WeaponAttributes$Sound"
import {$WeaponAttributes$HitBoxShape, $WeaponAttributes$HitBoxShape$Type} from "packages/net/bettercombat/api/$WeaponAttributes$HitBoxShape"

export class $WeaponAttributes$Attack {

constructor()
constructor(conditions: ($WeaponAttributes$Condition$Type)[], hitbox: $WeaponAttributes$HitBoxShape$Type, damage_multiplier: double, angle: double, upswing: double, animation: string, swing_sound: $WeaponAttributes$Sound$Type, impact_sound: $WeaponAttributes$Sound$Type)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "conditions"(): ($WeaponAttributes$Condition)[]
public "animation"(): string
public "angle"(): double
public "damageMultiplier"(): double
public "upswing"(): double
public "swingSound"(): $WeaponAttributes$Sound
public "hitbox"(): $WeaponAttributes$HitBoxShape
public "impactSound"(): $WeaponAttributes$Sound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$Attack$Type = ($WeaponAttributes$Attack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponAttributes$Attack_ = $WeaponAttributes$Attack$Type;
}}
declare module "packages/net/bettercombat/api/$EntityPlayer_BetterCombat" {
import {$AttackHand, $AttackHand$Type} from "packages/net/bettercombat/api/$AttackHand"

export interface $EntityPlayer_BetterCombat {

 "getCurrentAttack"(): $AttackHand

(): $AttackHand
}

export namespace $EntityPlayer_BetterCombat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPlayer_BetterCombat$Type = ($EntityPlayer_BetterCombat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPlayer_BetterCombat_ = $EntityPlayer_BetterCombat$Type;
}}
declare module "packages/net/bettercombat/api/$WeaponAttributes" {
import {$WeaponAttributes$Attack, $WeaponAttributes$Attack$Type} from "packages/net/bettercombat/api/$WeaponAttributes$Attack"

export class $WeaponAttributes {

constructor(attack_range: double, pose: string, off_hand_pose: string, isTwoHanded: boolean, category: string, attacks: ($WeaponAttributes$Attack$Type)[])

public "two_handed"(): boolean
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "category"(): string
public "attacks"(): ($WeaponAttributes$Attack)[]
public "isTwoHanded"(): boolean
public "attackRange"(): double
public "pose"(): string
public "offHandPose"(): string
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$Type = ($WeaponAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponAttributes_ = $WeaponAttributes$Type;
}}
declare module "packages/net/bettercombat/api/$ComboState" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ComboState extends $Record {

constructor(current: integer, total: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "current"(): integer
public "total"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComboState$Type = ($ComboState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComboState_ = $ComboState$Type;
}}
declare module "packages/net/bettercombat/logic/$PlayerAttackProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAttackProperties {

 "setComboCount"(arg0: integer): void
 "getComboCount"(): integer
}

export namespace $PlayerAttackProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAttackProperties$Type = ($PlayerAttackProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAttackProperties_ = $PlayerAttackProperties$Type;
}}
declare module "packages/net/bettercombat/api/$MinecraftClient_BetterCombat" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $MinecraftClient_BetterCombat {

 "isWeaponSwingInProgress"(): boolean
 "cancelUpswing"(): void
 "hasTargetsInReach"(): boolean
 "getComboCount"(): integer
 "getUpswingTicks"(): integer
 "getCursorTarget"(): $Entity
 "getSwingProgress"(): float
}

export namespace $MinecraftClient_BetterCombat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClient_BetterCombat$Type = ($MinecraftClient_BetterCombat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClient_BetterCombat_ = $MinecraftClient_BetterCombat$Type;
}}
declare module "packages/net/bettercombat/client/animation/$PlayerAttackAnimatable" {
import {$AnimatedHand, $AnimatedHand$Type} from "packages/net/bettercombat/logic/$AnimatedHand"

export interface $PlayerAttackAnimatable {

 "updateAnimationsOnTick"(): void
 "playAttackAnimation"(arg0: string, arg1: $AnimatedHand$Type, arg2: float, arg3: float): void
 "stopAttackAnimation"(arg0: float): void
}

export namespace $PlayerAttackAnimatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAttackAnimatable$Type = ($PlayerAttackAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAttackAnimatable_ = $PlayerAttackAnimatable$Type;
}}
declare module "packages/net/bettercombat/mixin/client/$MinecraftClientAccessor" {
import {$EntityRenderDispatcher, $EntityRenderDispatcher$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderDispatcher"

export interface $MinecraftClientAccessor {

 "getEntityRenderDispatcher"(): $EntityRenderDispatcher
 "setAttackCooldown"(arg0: integer): void
 "getAttackCooldown"(): integer
}

export namespace $MinecraftClientAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$Type = ($MinecraftClientAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientAccessor_ = $MinecraftClientAccessor$Type;
}}
declare module "packages/net/bettercombat/api/$AttackHand" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$WeaponAttributes$Attack, $WeaponAttributes$Attack$Type} from "packages/net/bettercombat/api/$WeaponAttributes$Attack"
import {$ComboState, $ComboState$Type} from "packages/net/bettercombat/api/$ComboState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WeaponAttributes, $WeaponAttributes$Type} from "packages/net/bettercombat/api/$WeaponAttributes"

export class $AttackHand extends $Record {

constructor(attack: $WeaponAttributes$Attack$Type, combo: $ComboState$Type, isOffHand: boolean, attributes: $WeaponAttributes$Type, itemStack: $ItemStack$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "attributes"(): $WeaponAttributes
public "combo"(): $ComboState
public "itemStack"(): $ItemStack
public "upswingRate"(): double
public "attack"(): $WeaponAttributes$Attack
public "isOffHand"(): boolean
get "offHand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackHand$Type = ($AttackHand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackHand_ = $AttackHand$Type;
}}
declare module "packages/net/bettercombat/api/$WeaponAttributes$Condition" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WeaponAttributes$Condition extends $Enum<($WeaponAttributes$Condition)> {
static readonly "NOT_DUAL_WIELDING": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_ANY": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_SAME": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_SAME_CATEGORY": $WeaponAttributes$Condition
static readonly "NO_OFFHAND_ITEM": $WeaponAttributes$Condition
static readonly "OFF_HAND_SHIELD": $WeaponAttributes$Condition
static readonly "MAIN_HAND_ONLY": $WeaponAttributes$Condition
static readonly "OFF_HAND_ONLY": $WeaponAttributes$Condition
static readonly "MOUNTED": $WeaponAttributes$Condition
static readonly "NOT_MOUNTED": $WeaponAttributes$Condition


public static "values"(): ($WeaponAttributes$Condition)[]
public static "valueOf"(name: string): $WeaponAttributes$Condition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$Condition$Type = (("main_hand_only") | ("dual_wielding_any") | ("no_offhand_item") | ("dual_wielding_same_category") | ("not_mounted") | ("off_hand_only") | ("not_dual_wielding") | ("off_hand_shield") | ("mounted") | ("dual_wielding_same")) | ($WeaponAttributes$Condition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponAttributes$Condition_ = $WeaponAttributes$Condition$Type;
}}
declare module "packages/net/bettercombat/api/$WeaponAttributes$Sound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $WeaponAttributes$Sound {

constructor()
constructor(id: string)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): string
public "randomness"(): float
public "pitch"(): float
public "volume"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$Sound$Type = ($WeaponAttributes$Sound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponAttributes$Sound_ = $WeaponAttributes$Sound$Type;
}}
