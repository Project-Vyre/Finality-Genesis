declare module "packages/top/theillusivec4/curios/mixin/core/$AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {

 "getFirstTick"(): boolean

(): boolean
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$Type = ($AccessorEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorEntity_ = $AccessorEntity$Type;
}}
declare module "packages/top/theillusivec4/curios/api/client/$ICurioRenderer" {
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ICurioRenderer {

 "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void

(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
}

export namespace $ICurioRenderer {
function rotateIfSneaking(arg0: $PoseStack$Type, arg1: $LivingEntity$Type): void
function followBodyRotations(arg0: $LivingEntity$Type, ...arg1: ($HumanoidModel$Type<($LivingEntity$Type)>)[]): void
function translateIfSneaking(arg0: $PoseStack$Type, arg1: $LivingEntity$Type): void
function followHeadRotations(arg0: $LivingEntity$Type, ...arg1: ($ModelPart$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioRenderer$Type = ($ICurioRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurioRenderer_ = $ICurioRenderer$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/inventory/$ICurioStacksHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IDynamicStackHandler, $IDynamicStackHandler$Type} from "packages/top/theillusivec4/curios/api/type/inventory/$IDynamicStackHandler"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICurioStacksHandler {

 "addTransientModifier"(arg0: $AttributeModifier$Type): void
 "getModifiersByOperation"(arg0: $AttributeModifier$Operation$Type): $Collection<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "getPermanentModifiers"(): $Set<($AttributeModifier)>
 "getModifiers"(): $Map<($UUID), ($AttributeModifier)>
 "update"(): void
/**
 * 
 * @deprecated
 */
 "grow"(arg0: integer): void
 "getIdentifier"(): string
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getSlots"(): integer
/**
 * 
 * @deprecated
 */
 "shrink"(arg0: integer): void
 "getRenders"(): $NonNullList<(boolean)>
 "getStacks"(): $IDynamicStackHandler
 "clearModifiers"(): void
 "removeModifier"(arg0: $UUID$Type): void
 "getDropRule"(): $ICurio$DropRule
 "isVisible"(): boolean
 "getCosmeticStacks"(): $IDynamicStackHandler
 "addPermanentModifier"(arg0: $AttributeModifier$Type): void
 "canToggleRendering"(): boolean
 "hasCosmetic"(): boolean
 "copyModifiers"(arg0: $ICurioStacksHandler$Type): void
 "applySyncTag"(arg0: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
 "getSizeShift"(): integer
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "getSyncTag"(): $CompoundTag
}

export namespace $ICurioStacksHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioStacksHandler$Type = ($ICurioStacksHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurioStacksHandler_ = $ICurioStacksHandler$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ICurio$SoundInfo extends $Record {

constructor(soundEvent: $SoundEvent$Type, volume: float, pitch: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "getPitch"(): float
public "pitch"(): float
public "volume"(): float
public "soundEvent"(): $SoundEvent
/**
 * 
 * @deprecated
 */
public "getSoundEvent"(): $SoundEvent
/**
 * 
 * @deprecated
 */
public "getVolume"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$SoundInfo$Type = ($ICurio$SoundInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio$SoundInfo_ = $ICurio$SoundInfo$Type;
}}
declare module "packages/top/theillusivec4/curios/api/$SlotContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SlotContext extends $Record {

constructor(identifier: string, entity: $LivingEntity$Type, index: integer, cosmetic: boolean, visible: boolean)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "getIndex"(): integer
public "visible"(): boolean
/**
 * 
 * @deprecated
 */
public "getIdentifier"(): string
public "identifier"(): string
public "entity"(): $LivingEntity
public "cosmetic"(): boolean
/**
 * 
 * @deprecated
 */
public "getWearer"(): $LivingEntity
get "wearer"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotContext$Type = ($SlotContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotContext_ = $SlotContext$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem" {
import {$ICurio, $ICurio$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export interface $ICurioItem {

 "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
 "canEquip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
 "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
 "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type, arg2: $ItemStack$Type): boolean
 "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
 "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
 "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
 "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
 "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
 "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
 "canUnequip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
 "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
 "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
 "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
 "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
 "canSync"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
 "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
 "readSyncData"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
 "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
 "canRightClickEquip"(arg0: $ItemStack$Type): boolean
 "curioBreak"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
 "hasCurioCapability"(arg0: $ItemStack$Type): boolean
 "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "getTagsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
 "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
/**
 * 
 * @deprecated
 */
 "writeSyncData"(arg0: $ItemStack$Type): $CompoundTag
 "writeSyncData"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
 "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
 "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "playRightClickEquipSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "showAttributesTooltip"(arg0: string, arg1: $ItemStack$Type): boolean
 "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
 "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: string, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
}

export namespace $ICurioItem {
const defaultInstance: $ICurio
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioItem$Type = ($ICurioItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurioItem_ = $ICurioItem$Type;
}}
declare module "packages/top/theillusivec4/curios/api/$SlotResult" {
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $SlotResult extends $Record {

constructor(slotContext: $SlotContext$Type, stack: $ItemStack$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "stack"(): $ItemStack
public "slotContext"(): $SlotContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotResult$Type = ($SlotResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotResult_ = $SlotResult$Type;
}}
declare module "packages/top/theillusivec4/curios/api/$CuriosCapability" {
import {$ICurio, $ICurio$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio"
import {$ICuriosItemHandler, $ICuriosItemHandler$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICuriosItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CuriosCapability {
static readonly "INVENTORY": $Capability<($ICuriosItemHandler)>
static readonly "ITEM": $Capability<($ICurio)>
static readonly "ID_INVENTORY": $ResourceLocation
static readonly "ID_ITEM": $ResourceLocation

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuriosCapability$Type = ($CuriosCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuriosCapability_ = $CuriosCapability$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICuriosItemHandler" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"
import {$ICurioStacksHandler, $ICurioStacksHandler$Type} from "packages/top/theillusivec4/curios/api/type/inventory/$ICurioStacksHandler"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$SlotResult, $SlotResult$Type} from "packages/top/theillusivec4/curios/api/$SlotResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICuriosItemHandler {

 "getModifiers"(): $Multimap<(string), ($AttributeModifier)>
 "reset"(): void
 "getSlots"(): integer
 "findFirstCurio"(arg0: $Item$Type): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$Type<($ItemStack$Type)>): $Optional<($SlotResult)>
 "isEquipped"(arg0: $Item$Type): boolean
 "isEquipped"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
/**
 * 
 * @deprecated
 */
 "processSlots"(): void
 "getCurios"(): $Map<(string), ($ICurioStacksHandler)>
 "readTag"(arg0: $Tag$Type): void
 "writeTag"(): $Tag
 "clearCachedSlotModifiers"(): void
 "addTransientSlotModifier"(arg0: string, arg1: $UUID$Type, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type): void
 "addTransientSlotModifiers"(arg0: $Multimap$Type<(string), ($AttributeModifier$Type)>): void
 "addPermanentSlotModifiers"(arg0: $Multimap$Type<(string), ($AttributeModifier$Type)>): void
 "getUpdatingInventories"(): $Set<($ICurioStacksHandler)>
 "handleInvalidStacks"(): void
 "addPermanentSlotModifier"(arg0: string, arg1: $UUID$Type, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type): void
 "removeSlotModifiers"(arg0: $Multimap$Type<(string), ($AttributeModifier$Type)>): void
/**
 * 
 * @deprecated
 */
 "setEnchantmentBonuses"(arg0: $Tuple$Type<(integer), (integer)>): void
 "getLootingLevel"(arg0: $DamageSource$Type, arg1: $LivingEntity$Type, arg2: integer): integer
 "getFortuneLevel"(arg0: $LootContext$Type): integer
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(): integer
/**
 * 
 * @deprecated
 */
 "getLootingBonus"(): integer
 "findCurios"(arg0: $Predicate$Type<($ItemStack$Type)>): $List<($SlotResult)>
 "findCurios"(arg0: $Item$Type): $List<($SlotResult)>
 "findCurios"(...arg0: (string)[]): $List<($SlotResult)>
 "setEquippedCurio"(arg0: string, arg1: integer, arg2: $ItemStack$Type): void
 "getEquippedCurios"(): $IItemHandlerModifiable
 "findCurio"(arg0: string, arg1: integer): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: string, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: string): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: string, arg1: integer, arg2: boolean, arg3: boolean): void
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: string, arg1: integer): void
 "loadInventory"(arg0: $ListTag$Type): void
 "loseInvalidStack"(arg0: $ItemStack$Type): void
 "getWearer"(): $LivingEntity
 "getStacksHandler"(arg0: string): $Optional<($ICurioStacksHandler)>
 "setCurios"(arg0: $Map$Type<(string), ($ICurioStacksHandler$Type)>): void
 "getVisibleSlots"(): integer
 "clearSlotModifiers"(): void
 "saveInventory"(arg0: boolean): $ListTag
 "removeSlotModifier"(arg0: string, arg1: $UUID$Type): void
/**
 * 
 * @deprecated
 */
 "getLockedSlots"(): $Set<(string)>
}

export namespace $ICuriosItemHandler {
const LOGGER: $Logger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICuriosItemHandler$Type = ($ICuriosItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICuriosItemHandler_ = $ICuriosItemHandler$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ICurio$DropRule extends $Enum<($ICurio$DropRule)> {
static readonly "DEFAULT": $ICurio$DropRule
static readonly "ALWAYS_DROP": $ICurio$DropRule
static readonly "ALWAYS_KEEP": $ICurio$DropRule
static readonly "DESTROY": $ICurio$DropRule


public static "values"(): ($ICurio$DropRule)[]
public static "valueOf"(arg0: string): $ICurio$DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$DropRule$Type = (("always_drop") | ("default") | ("always_keep") | ("destroy")) | ($ICurio$DropRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio$DropRule_ = $ICurio$DropRule$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/inventory/$IDynamicStackHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IDynamicStackHandler extends $IItemHandlerModifiable {

 "grow"(arg0: integer): void
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getSlots"(): integer
 "shrink"(arg0: integer): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "setPreviousStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "getPreviousStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlotLimit"(i: integer): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "isMutable"(): boolean
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $IItemHandler
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "setChanged"(): void
 "asContainer"(): $Container
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getHeight"(): integer
 "getWidth"(): integer
 "clear"(ingredient: $Ingredient$Type): void
 "clear"(): void
 "find"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "isEmpty"(): boolean
}

export namespace $IDynamicStackHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicStackHandler$Type = ($IDynamicStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicStackHandler_ = $IDynamicStackHandler$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurio" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export interface $ICurio {

 "getStack"(): $ItemStack
 "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
 "canEquip"(arg0: string, arg1: $LivingEntity$Type): boolean
 "canEquip"(arg0: $SlotContext$Type): boolean
 "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type): boolean
 "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type): integer
/**
 * 
 * @deprecated
 */
 "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type): void
 "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
 "curioTick"(arg0: $SlotContext$Type): void
/**
 * 
 * @deprecated
 */
 "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type): void
 "canEquipFromUse"(arg0: $SlotContext$Type): boolean
 "canUnequip"(arg0: $SlotContext$Type): boolean
/**
 * 
 * @deprecated
 */
 "canUnequip"(arg0: string, arg1: $LivingEntity$Type): boolean
 "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $LivingEntity$Type): $ICurio$DropRule
 "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type): void
 "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>): $List<($Component)>
 "canSync"(arg0: $SlotContext$Type): boolean
/**
 * 
 * @deprecated
 */
 "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type): boolean
 "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
 "readSyncData"(arg0: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
 "canRightClickEquip"(): boolean
 "curioBreak"(arg0: $SlotContext$Type): void
/**
 * 
 * @deprecated
 */
 "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
 "onEquipFromUse"(arg0: $SlotContext$Type): void
/**
 * 
 * @deprecated
 */
 "getTagsTooltip"(arg0: $List$Type<($Component$Type)>): $List<($Component)>
 "getEquipSound"(arg0: $SlotContext$Type): $ICurio$SoundInfo
/**
 * 
 * @deprecated
 */
 "writeSyncData"(): $CompoundTag
 "writeSyncData"(arg0: $SlotContext$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
 "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
 "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
 "playRightClickEquipSound"(arg0: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
 "showAttributesTooltip"(arg0: string): boolean
 "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>): $List<($Component)>
 "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type): $Multimap<($Attribute), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: string): $Multimap<($Attribute), ($AttributeModifier)>
 "makesPiglinsNeutral"(arg0: $SlotContext$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $SlotContext$Type): boolean

(): $ItemStack
}

export namespace $ICurio {
function playBreakAnimation(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$Type = ($ICurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio_ = $ICurio$Type;
}}
