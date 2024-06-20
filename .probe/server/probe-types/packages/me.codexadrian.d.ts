declare module "packages/me/codexadrian/tempad/common/items/$TempadItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TempadPower, $TempadPower$Type} from "packages/me/codexadrian/tempad/common/items/$TempadPower"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$LocationData, $LocationData$Type} from "packages/me/codexadrian/tempad/common/data/$LocationData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TempadOption, $TempadOption$Type} from "packages/me/codexadrian/tempad/api/options/$TempadOption"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TempadItem extends $Item implements $TempadPower {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getOption"(): $TempadOption
public "getFuelCapacity"(): integer
public static "summonTimeDoor"(locationData: $LocationData$Type, player: $Player$Type, color: integer): void
public "getFuelCost"(): integer
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "use"(level: $Level$Type, player: $Player$Type, interactionHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarColor"($$0: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, components: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
get "option"(): $TempadOption
get "fuelCapacity"(): integer
get "fuelCost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempadItem$Type = ($TempadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempadItem_ = $TempadItem$Type;
}}
declare module "packages/me/codexadrian/tempad/common/items/$LocationCard" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$LocationData, $LocationData$Type} from "packages/me/codexadrian/tempad/common/data/$LocationData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LocationCard extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public static "getLocation"(stack: $ItemStack$Type): $LocationData
public static "setLocation"(stack: $ItemStack$Type, locationData: $LocationData$Type, creator: string): void
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationCard$Type = ($LocationCard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocationCard_ = $LocationCard$Type;
}}
declare module "packages/me/codexadrian/tempad/api/options/$TempadOption" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TempadOption {

constructor()

public "apply"(properties: $Item$Properties$Type, fuelCost: integer, fuelCapacity: integer): $Item$Properties
public "tick"(stack: $ItemStack$Type, entity: $Entity$Type): void
public "addToolTip"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "durabilityBarWidth"(stack: $ItemStack$Type): integer
public "onTimedoorOpen"(player: $Player$Type): void
public "canTimedoorOpen"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "isDurabilityBarVisible"(arg0: $ItemStack$Type): boolean
public "getPercentage"(stack: $ItemStack$Type): double
public "depletesDurability"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempadOption$Type = ($TempadOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempadOption_ = $TempadOption$Type;
}}
declare module "packages/me/codexadrian/tempad/common/data/$LocationData" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LocationData implements $Comparable<($LocationData)> {

constructor(name: string, levelKey: $ResourceKey$Type<($Level$Type)>, pos: $BlockPos$Type, uuid: $UUID$Type, isTeleportable: boolean, isDeletable: boolean, isDownloadable: boolean)
constructor(name: string, levelKey: $ResourceKey$Type<($Level$Type)>, pos: $BlockPos$Type, uuid: $UUID$Type)

public "getName"(): string
public "compareTo"(o: $LocationData$Type): integer
public "getId"(): $UUID
public "toTag"(): $CompoundTag
public "getBlockPos"(): $BlockPos
public "getLevelKey"(): $ResourceKey<($Level)>
public static "fromTag"(tag: $CompoundTag$Type): $LocationData
public "isDeletable"(): boolean
public "isTeleportable"(): boolean
public "isDownloadable"(): boolean
get "name"(): string
get "id"(): $UUID
get "blockPos"(): $BlockPos
get "levelKey"(): $ResourceKey<($Level)>
get "deletable"(): boolean
get "teleportable"(): boolean
get "downloadable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationData$Type = ($LocationData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocationData_ = $LocationData$Type;
}}
declare module "packages/me/codexadrian/tempad/common/items/$TempadPower" {
import {$TempadOption, $TempadOption$Type} from "packages/me/codexadrian/tempad/api/options/$TempadOption"

export interface $TempadPower {

 "getOption"(): $TempadOption
 "getFuelCapacity"(): integer
 "getFuelCost"(): integer
}

export namespace $TempadPower {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempadPower$Type = ($TempadPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempadPower_ = $TempadPower$Type;
}}
declare module "packages/me/codexadrian/tempad/common/items/$AdvancedTempadItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$TempadOption, $TempadOption$Type} from "packages/me/codexadrian/tempad/api/options/$TempadOption"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TempadItem, $TempadItem$Type} from "packages/me/codexadrian/tempad/common/items/$TempadItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AdvancedTempadItem extends $TempadItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getOption"(): $TempadOption
public "getFuelCapacity"(): integer
public "getFuelCost"(): integer
get "option"(): $TempadOption
get "fuelCapacity"(): integer
get "fuelCost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedTempadItem$Type = ($AdvancedTempadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedTempadItem_ = $AdvancedTempadItem$Type;
}}
