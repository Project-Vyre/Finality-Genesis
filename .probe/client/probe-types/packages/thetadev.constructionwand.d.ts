declare module "packages/thetadev/constructionwand/api/$IWandUpgrade" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IWandUpgrade {

 "getRegistryName"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $IWandUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandUpgrade$Type = ($IWandUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWandUpgrade_ = $IWandUpgrade$Type;
}}
declare module "packages/thetadev/constructionwand/api/$IWandAction" {
import {$IWandSupplier, $IWandSupplier$Type} from "packages/thetadev/constructionwand/api/$IWandSupplier"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ISnapshot, $ISnapshot$Type} from "packages/thetadev/constructionwand/wand/undo/$ISnapshot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WandOptions, $WandOptions$Type} from "packages/thetadev/constructionwand/basics/option/$WandOptions"

export interface $IWandAction {

 "getLimit"(arg0: $ItemStack$Type): integer
 "getSnapshots"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type, arg3: $ItemStack$Type, arg4: $WandOptions$Type, arg5: $IWandSupplier$Type, arg6: integer): $List<($ISnapshot)>
 "getSnapshotsFromAir"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type, arg3: $ItemStack$Type, arg4: $WandOptions$Type, arg5: $IWandSupplier$Type, arg6: integer): $List<($ISnapshot)>
}

export namespace $IWandAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandAction$Type = ($IWandAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWandAction_ = $IWandAction$Type;
}}
declare module "packages/thetadev/constructionwand/basics/option/$WandOptions" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IWandUpgrade, $IWandUpgrade$Type} from "packages/thetadev/constructionwand/api/$IWandUpgrade"
import {$WandOptions$MATCH, $WandOptions$MATCH$Type} from "packages/thetadev/constructionwand/basics/option/$WandOptions$MATCH"
import {$WandUpgradesSelectable, $WandUpgradesSelectable$Type} from "packages/thetadev/constructionwand/basics/option/$WandUpgradesSelectable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WandOptions$DIRECTION, $WandOptions$DIRECTION$Type} from "packages/thetadev/constructionwand/basics/option/$WandOptions$DIRECTION"
import {$IOption, $IOption$Type} from "packages/thetadev/constructionwand/basics/option/$IOption"
import {$OptionBoolean, $OptionBoolean$Type} from "packages/thetadev/constructionwand/basics/option/$OptionBoolean"
import {$IWandCore, $IWandCore$Type} from "packages/thetadev/constructionwand/api/$IWandCore"
import {$WandOptions$LOCK, $WandOptions$LOCK$Type} from "packages/thetadev/constructionwand/basics/option/$WandOptions$LOCK"
import {$OptionEnum, $OptionEnum$Type} from "packages/thetadev/constructionwand/basics/option/$OptionEnum"

export class $WandOptions {
readonly "tag": $CompoundTag
readonly "cores": $WandUpgradesSelectable<($IWandCore)>
readonly "lock": $OptionEnum<($WandOptions$LOCK)>
readonly "direction": $OptionEnum<($WandOptions$DIRECTION)>
readonly "replace": $OptionBoolean
readonly "match": $OptionEnum<($WandOptions$MATCH)>
readonly "random": $OptionBoolean
readonly "allOptions": ($IOption<(any)>)[]

constructor(arg0: $ItemStack$Type)

public "testLock"(arg0: $WandOptions$LOCK$Type): boolean
public "get"(arg0: string): $IOption<(any)>
public "hasUpgrade"(arg0: $IWandUpgrade$Type): boolean
public "addUpgrade"(arg0: $IWandUpgrade$Type): boolean
public "matchBlocks"(arg0: $Block$Type, arg1: $Block$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandOptions$Type = ($WandOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandOptions_ = $WandOptions$Type;
}}
declare module "packages/thetadev/constructionwand/wand/undo/$ISnapshot" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISnapshot {

 "canRestore"(arg0: $Level$Type, arg1: $Player$Type): boolean
 "execute"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): boolean
 "restore"(arg0: $Level$Type, arg1: $Player$Type): boolean
 "getBlockState"(): $BlockState
 "getRequiredItems"(): $ItemStack
 "getPos"(): $BlockPos
 "forceRestore"(arg0: $Level$Type): void
}

export namespace $ISnapshot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISnapshot$Type = ($ISnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISnapshot_ = $ISnapshot$Type;
}}
declare module "packages/thetadev/constructionwand/items/wand/$ItemWand" {
import {$ICustomItemModel, $ICustomItemModel$Type} from "packages/thetadev/constructionwand/data/$ICustomItemModel"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemModelGenerator, $ItemModelGenerator$Type} from "packages/thetadev/constructionwand/data/$ItemModelGenerator"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IOption, $IOption$Type} from "packages/thetadev/constructionwand/basics/option/$IOption"
import {$WandJob, $WandJob$Type} from "packages/thetadev/constructionwand/wand/$WandJob"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemWand extends $Item implements $ICustomItemModel {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getWandJob"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockHitResult$Type, arg3: $ItemStack$Type): $WandJob
public static "optionMessage"(arg0: $Player$Type, arg1: $IOption$Type<(any)>): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "remainingDurability"(arg0: $ItemStack$Type): integer
public "generateCustomItemModel"(arg0: $ItemModelGenerator$Type, arg1: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWand$Type = ($ItemWand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWand_ = $ItemWand$Type;
}}
declare module "packages/thetadev/constructionwand/api/$IWandSupplier" {
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$PlaceSnapshot, $PlaceSnapshot$Type} from "packages/thetadev/constructionwand/wand/undo/$PlaceSnapshot"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWandSupplier {

 "getPlaceSnapshot"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockHitResult$Type, arg3: $BlockState$Type): $PlaceSnapshot
 "getSupply"(arg0: $BlockItem$Type): void
 "takeItemStack"(arg0: $ItemStack$Type): integer
}

export namespace $IWandSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandSupplier$Type = ($IWandSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWandSupplier_ = $IWandSupplier$Type;
}}
declare module "packages/thetadev/constructionwand/basics/option/$OptionEnum" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IOption, $IOption$Type} from "packages/thetadev/constructionwand/basics/option/$IOption"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $OptionEnum<E extends $Enum<(E)>> implements $IOption<(E)> {

constructor(arg0: $CompoundTag$Type, arg1: string, arg2: $Class$Type<(E)>, arg3: E, arg4: boolean)
constructor(arg0: $CompoundTag$Type, arg1: string, arg2: $Class$Type<(E)>, arg3: E)

public "next"(arg0: boolean): E
public "getKey"(): string
public "set"(arg0: E): void
public "getValueString"(): string
public "isEnabled"(): boolean
public "setValueString"(arg0: string): void
public "next"(): E
public "getKeyTranslation"(): string
public "getDescTranslation"(): string
public "getValueTranslation"(): string
get "key"(): string
get "valueString"(): string
get "enabled"(): boolean
set "valueString"(value: string)
get "keyTranslation"(): string
get "descTranslation"(): string
get "valueTranslation"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionEnum$Type<E> = ($OptionEnum<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionEnum_<E> = $OptionEnum$Type<(E)>;
}}
declare module "packages/thetadev/constructionwand/items/core/$ItemCoreDestruction" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IWandAction, $IWandAction$Type} from "packages/thetadev/constructionwand/api/$IWandAction"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemCore, $ItemCore$Type} from "packages/thetadev/constructionwand/items/core/$ItemCore"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCoreDestruction extends $ItemCore {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getColor"(): integer
public "getWandAction"(): $IWandAction
public "getRegistryName"(): $ResourceLocation
get "color"(): integer
get "wandAction"(): $IWandAction
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCoreDestruction$Type = ($ItemCoreDestruction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCoreDestruction_ = $ItemCoreDestruction$Type;
}}
declare module "packages/thetadev/constructionwand/items/core/$ItemCoreAngel" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IWandAction, $IWandAction$Type} from "packages/thetadev/constructionwand/api/$IWandAction"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemCore, $ItemCore$Type} from "packages/thetadev/constructionwand/items/core/$ItemCore"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCoreAngel extends $ItemCore {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getColor"(): integer
public "getWandAction"(): $IWandAction
public "getRegistryName"(): $ResourceLocation
get "color"(): integer
get "wandAction"(): $IWandAction
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCoreAngel$Type = ($ItemCoreAngel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCoreAngel_ = $ItemCoreAngel$Type;
}}
declare module "packages/thetadev/constructionwand/wand/$WandJob" {
import {$ItemWand, $ItemWand$Type} from "packages/thetadev/constructionwand/items/wand/$ItemWand"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WandOptions, $WandOptions$Type} from "packages/thetadev/constructionwand/basics/option/$WandOptions"

export class $WandJob {
readonly "player": $Player
readonly "world": $Level
readonly "rayTraceResult": $BlockHitResult
readonly "options": $WandOptions
readonly "wand": $ItemStack
readonly "wandItem": $ItemWand

constructor(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockHitResult$Type, arg3: $ItemStack$Type)

public "getSnapshots"(): void
public "getBlockPositions"(): $Set<($BlockPos)>
public "doIt"(): boolean
public "blockCount"(): integer
get "snapshots"(): void
get "blockPositions"(): $Set<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandJob$Type = ($WandJob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandJob_ = $WandJob$Type;
}}
declare module "packages/thetadev/constructionwand/basics/option/$WandOptions$DIRECTION" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WandOptions$DIRECTION extends $Enum<($WandOptions$DIRECTION)> {
static readonly "TARGET": $WandOptions$DIRECTION
static readonly "PLAYER": $WandOptions$DIRECTION


public static "values"(): ($WandOptions$DIRECTION)[]
public static "valueOf"(arg0: string): $WandOptions$DIRECTION
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandOptions$DIRECTION$Type = (("target") | ("player")) | ($WandOptions$DIRECTION);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandOptions$DIRECTION_ = $WandOptions$DIRECTION$Type;
}}
declare module "packages/thetadev/constructionwand/basics/option/$WandOptions$MATCH" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WandOptions$MATCH extends $Enum<($WandOptions$MATCH)> {
static readonly "EXACT": $WandOptions$MATCH
static readonly "SIMILAR": $WandOptions$MATCH
static readonly "ANY": $WandOptions$MATCH


public static "values"(): ($WandOptions$MATCH)[]
public static "valueOf"(arg0: string): $WandOptions$MATCH
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandOptions$MATCH$Type = (("similar") | ("exact") | ("any")) | ($WandOptions$MATCH);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandOptions$MATCH_ = $WandOptions$MATCH$Type;
}}
declare module "packages/thetadev/constructionwand/basics/option/$IOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IOption<T> {

 "get"(): T
 "next"(): T
 "next"(arg0: boolean): T
 "getKey"(): string
 "set"(arg0: T): void
 "getValueString"(): string
 "isEnabled"(): boolean
 "getKeyTranslation"(): string
 "getDescTranslation"(): string
 "getValueTranslation"(): string
 "setValueString"(arg0: string): void
}

export namespace $IOption {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOption$Type<T> = ($IOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOption_<T> = $IOption$Type<(T)>;
}}
declare module "packages/thetadev/constructionwand/items/core/$ItemCore" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IWandAction, $IWandAction$Type} from "packages/thetadev/constructionwand/api/$IWandAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IWandCore, $IWandCore$Type} from "packages/thetadev/constructionwand/api/$IWandCore"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCore extends $Item implements $IWandCore {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getColor"(): integer
public "getWandAction"(): $IWandAction
public "getRegistryName"(): $ResourceLocation
get "color"(): integer
get "wandAction"(): $IWandAction
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCore$Type = ($ItemCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCore_ = $ItemCore$Type;
}}
declare module "packages/thetadev/constructionwand/data/$ItemModelGenerator" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ItemModelProvider, $ItemModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModelGenerator extends $ItemModelProvider {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: $ExistingFileHelper$Type)

public "getName"(): string
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelGenerator$Type = ($ItemModelGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelGenerator_ = $ItemModelGenerator$Type;
}}
declare module "packages/thetadev/constructionwand/api/$IWandCore" {
import {$IWandAction, $IWandAction$Type} from "packages/thetadev/constructionwand/api/$IWandAction"
import {$IWandUpgrade, $IWandUpgrade$Type} from "packages/thetadev/constructionwand/api/$IWandUpgrade"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IWandCore extends $IWandUpgrade {

 "getColor"(): integer
 "getWandAction"(): $IWandAction
 "getRegistryName"(): $ResourceLocation
}

export namespace $IWandCore {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandCore$Type = ($IWandCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWandCore_ = $IWandCore$Type;
}}
declare module "packages/thetadev/constructionwand/basics/option/$WandOptions$LOCK" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WandOptions$LOCK extends $Enum<($WandOptions$LOCK)> {
static readonly "HORIZONTAL": $WandOptions$LOCK
static readonly "VERTICAL": $WandOptions$LOCK
static readonly "NORTHSOUTH": $WandOptions$LOCK
static readonly "EASTWEST": $WandOptions$LOCK
static readonly "NOLOCK": $WandOptions$LOCK


public static "values"(): ($WandOptions$LOCK)[]
public static "valueOf"(arg0: string): $WandOptions$LOCK
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandOptions$LOCK$Type = (("horizontal") | ("eastwest") | ("nolock") | ("vertical") | ("northsouth")) | ($WandOptions$LOCK);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandOptions$LOCK_ = $WandOptions$LOCK$Type;
}}
declare module "packages/thetadev/constructionwand/items/wand/$ItemWandInfinity" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemWand, $ItemWand$Type} from "packages/thetadev/constructionwand/items/wand/$ItemWand"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemWandInfinity extends $ItemWand {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWandInfinity$Type = ($ItemWandInfinity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWandInfinity_ = $ItemWandInfinity$Type;
}}
declare module "packages/thetadev/constructionwand/data/$ICustomItemModel" {
import {$ItemModelGenerator, $ItemModelGenerator$Type} from "packages/thetadev/constructionwand/data/$ItemModelGenerator"

export interface $ICustomItemModel {

 "generateCustomItemModel"(arg0: $ItemModelGenerator$Type, arg1: string): void

(arg0: $ItemModelGenerator$Type, arg1: string): void
}

export namespace $ICustomItemModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomItemModel$Type = ($ICustomItemModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomItemModel_ = $ICustomItemModel$Type;
}}
declare module "packages/thetadev/constructionwand/items/wand/$ItemWandBasic" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemWand, $ItemWand$Type} from "packages/thetadev/constructionwand/items/wand/$ItemWand"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemWandBasic extends $ItemWand {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "remainingDurability"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWandBasic$Type = ($ItemWandBasic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWandBasic_ = $ItemWandBasic$Type;
}}
declare module "packages/thetadev/constructionwand/basics/option/$WandUpgrades" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IWandUpgrade, $IWandUpgrade$Type} from "packages/thetadev/constructionwand/api/$IWandUpgrade"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"

export class $WandUpgrades<T extends $IWandUpgrade> {

constructor(arg0: $CompoundTag$Type, arg1: string, arg2: T)

public "getUpgrades"(): $ArrayList<(T)>
public "hasUpgrade"(arg0: T): boolean
public "addUpgrade"(arg0: T): boolean
get "upgrades"(): $ArrayList<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandUpgrades$Type<T> = ($WandUpgrades<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandUpgrades_<T> = $WandUpgrades$Type<(T)>;
}}
declare module "packages/thetadev/constructionwand/basics/option/$OptionBoolean" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IOption, $IOption$Type} from "packages/thetadev/constructionwand/basics/option/$IOption"

export class $OptionBoolean implements $IOption<(boolean)> {

constructor(arg0: $CompoundTag$Type, arg1: string, arg2: boolean, arg3: boolean)
constructor(arg0: $CompoundTag$Type, arg1: string, arg2: boolean)

public "next"(arg0: boolean): boolean
public "getKey"(): string
public "set"(arg0: boolean): void
public "getValueString"(): string
public "isEnabled"(): boolean
public "setValueString"(arg0: string): void
public "next"(): boolean
public "getKeyTranslation"(): string
public "getDescTranslation"(): string
public "getValueTranslation"(): string
get "key"(): string
get "valueString"(): string
get "enabled"(): boolean
set "valueString"(value: string)
get "keyTranslation"(): string
get "descTranslation"(): string
get "valueTranslation"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionBoolean$Type = ($OptionBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionBoolean_ = $OptionBoolean$Type;
}}
declare module "packages/thetadev/constructionwand/basics/option/$WandUpgradesSelectable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IOption, $IOption$Type} from "packages/thetadev/constructionwand/basics/option/$IOption"
import {$WandUpgrades, $WandUpgrades$Type} from "packages/thetadev/constructionwand/basics/option/$WandUpgrades"
import {$IWandUpgrade, $IWandUpgrade$Type} from "packages/thetadev/constructionwand/api/$IWandUpgrade"

export class $WandUpgradesSelectable<T extends $IWandUpgrade> extends $WandUpgrades<(T)> implements $IOption<(T)> {

constructor(arg0: $CompoundTag$Type, arg1: string, arg2: T)

public "get"(): T
public "next"(arg0: boolean): T
public "getKey"(): string
public "set"(arg0: T): void
public "getValueString"(): string
public "isEnabled"(): boolean
public "setValueString"(arg0: string): void
public "next"(): T
public "getKeyTranslation"(): string
public "getDescTranslation"(): string
public "getValueTranslation"(): string
get "key"(): string
get "valueString"(): string
get "enabled"(): boolean
set "valueString"(value: string)
get "keyTranslation"(): string
get "descTranslation"(): string
get "valueTranslation"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandUpgradesSelectable$Type<T> = ($WandUpgradesSelectable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandUpgradesSelectable_<T> = $WandUpgradesSelectable$Type<(T)>;
}}
declare module "packages/thetadev/constructionwand/wand/undo/$PlaceSnapshot" {
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISnapshot, $ISnapshot$Type} from "packages/thetadev/constructionwand/wand/undo/$ISnapshot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WandOptions, $WandOptions$Type} from "packages/thetadev/constructionwand/basics/option/$WandOptions"

export class $PlaceSnapshot implements $ISnapshot {

constructor(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $BlockItem$Type, arg3: $BlockState$Type, arg4: boolean)

public "canRestore"(arg0: $Level$Type, arg1: $Player$Type): boolean
public static "get"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type, arg3: $BlockPos$Type, arg4: $BlockItem$Type, arg5: $BlockState$Type, arg6: $WandOptions$Type): $PlaceSnapshot
public "execute"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): boolean
public "restore"(arg0: $Level$Type, arg1: $Player$Type): boolean
public "getBlockState"(): $BlockState
public "getRequiredItems"(): $ItemStack
public "getPos"(): $BlockPos
public "forceRestore"(arg0: $Level$Type): void
get "blockState"(): $BlockState
get "requiredItems"(): $ItemStack
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceSnapshot$Type = ($PlaceSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaceSnapshot_ = $PlaceSnapshot$Type;
}}
