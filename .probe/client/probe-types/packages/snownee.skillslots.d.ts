declare module "packages/snownee/skillslots/item/$UnlockSlotItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemCategoryFiller, $ItemCategoryFiller$Type} from "packages/snownee/kiwi/item/$ItemCategoryFiller"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/snownee/kiwi/item/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnlockSlotItem extends $ModItem implements $ItemCategoryFiller {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "getTier"(arg0: $ItemStack$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "fillItemCategory"(arg0: $CreativeModeTab$Type, arg1: $FeatureFlagSet$Type, arg2: boolean, arg3: $List$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnlockSlotItem$Type = ($UnlockSlotItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnlockSlotItem_ = $UnlockSlotItem$Type;
}}
declare module "packages/snownee/skillslots/duck/$SkillSlotsPlayer" {
import {$SkillSlotsHandler, $SkillSlotsHandler$Type} from "packages/snownee/skillslots/$SkillSlotsHandler"

export interface $SkillSlotsPlayer {

 "skillslots$getHandler"(): $SkillSlotsHandler

(): $SkillSlotsHandler
}

export namespace $SkillSlotsPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillSlotsPlayer$Type = ($SkillSlotsPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillSlotsPlayer_ = $SkillSlotsPlayer$Type;
}}
declare module "packages/snownee/skillslots/skill/$Skill" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SkillSlotsHandler, $SkillSlotsHandler$Type} from "packages/snownee/skillslots/$SkillSlotsHandler"

export class $Skill {
static readonly "EMPTY": $Skill
readonly "item": $ItemStack
 "progress": float
 "speed": float
 "color": integer

constructor(arg0: $ItemStack$Type)

public "isConflicting"(arg0: $Skill$Type): boolean
public "canBeToggled"(): boolean
public "getChargeSpeed"(arg0: $Player$Type): float
public "getUseDuration"(): integer
public "onToggled"(arg0: $Player$Type, arg1: $SkillSlotsHandler$Type, arg2: integer): void
public "isEmpty"(): boolean
public "canUse"(arg0: $Player$Type): boolean
public "getDisplayName"(): $Component
public "abortUsing"(arg0: $Player$Type, arg1: integer): void
public "getChargeDuration"(arg0: $Player$Type): integer
public "finishUsing"(arg0: $Player$Type, arg1: integer): void
public "startUsing"(arg0: $Player$Type, arg1: integer): void
public "getChargeCompleteSound"(): $Holder<($SoundEvent)>
public "getActionDescription"(): $Component
get "useDuration"(): integer
get "empty"(): boolean
get "displayName"(): $Component
get "chargeCompleteSound"(): $Holder<($SoundEvent)>
get "actionDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Type = ($Skill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill_ = $Skill$Type;
}}
declare module "packages/snownee/skillslots/$SkillSlotsHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Skill, $Skill$Type} from "packages/snownee/skillslots/skill/$Skill"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SkillSlotsHandler extends $SimpleContainer {
static readonly "MAX_SLOTS": integer
readonly "skills": $NonNullList<($Skill)>
 "toggles": $BitSet
 "chargeIndex": integer
 "useIndex": integer
 "useTick": integer
 "acceleration": float
 "dirty": boolean

constructor()
constructor(arg0: $Player$Type)

public "updateCharge"(): void
public static "of"(arg0: $Player$Type): $SkillSlotsHandler
public static "of"(arg0: $LivingEntity$Type): $SkillSlotsHandler
public "setAll"(arg0: boolean): void
public "copyFrom"(arg0: $SkillSlotsHandler$Type): void
public "setOwner"(arg0: $Player$Type): void
public "getContainerSize"(): integer
public "fromTag"(arg0: $ListTag$Type): void
public "createTag"(): $ListTag
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "setChanged"(): void
public "accelerate"(arg0: float): void
public "tick"(): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setSlots"(arg0: integer): void
public "abortUsing"(): void
public "canUseSlot"(arg0: integer): boolean
public "startUsing"(arg0: integer): void
public "findActivatedPassiveSkill"(arg0: $Predicate$Type<($Skill$Type)>): integer
public "updateColors"(): void
public "updateColor"(arg0: integer): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
set "all"(value: boolean)
set "owner"(value: $Player$Type)
get "containerSize"(): integer
set "slots"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillSlotsHandler$Type = ($SkillSlotsHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillSlotsHandler_ = $SkillSlotsHandler$Type;
}}
