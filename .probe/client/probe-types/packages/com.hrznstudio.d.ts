declare module "packages/com/hrznstudio/titanium/tab/$TitaniumTab" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TitaniumTab {

constructor(arg0: $ResourceLocation$Type)

public "getResourceLocation"(): $ResourceLocation
public "getTabList"(): $List<($Item)>
get "resourceLocation"(): $ResourceLocation
get "tabList"(): $List<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TitaniumTab$Type = ($TitaniumTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TitaniumTab_ = $TitaniumTab$Type;
}}
declare module "packages/com/hrznstudio/titanium/client/screen/asset/$IHasAssetProvider" {
import {$IAssetProvider, $IAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$IAssetProvider"

export interface $IHasAssetProvider {

 "getAssetProvider"(): $IAssetProvider

(): $IAssetProvider
}

export namespace $IHasAssetProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasAssetProvider$Type = ($IHasAssetProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasAssetProvider_ = $IHasAssetProvider$Type;
}}
declare module "packages/com/hrznstudio/titanium/block/$RotationHandler" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $RotationHandler {

 "getStateForPlacement"(arg0: $Block$Type, arg1: $BlockPlaceContext$Type): $BlockState

(arg0: $Block$Type, arg1: $BlockPlaceContext$Type): $BlockState
}

export namespace $RotationHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationHandler$Type = ($RotationHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationHandler_ = $RotationHandler$Type;
}}
declare module "packages/com/hrznstudio/titanium/api/client/$IScreenAddonProvider" {
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IScreenAddonProvider {

 "getScreenAddons"(): $List<($IFactory<(any)>)>

(): $List<($IFactory<(any)>)>
}

export namespace $IScreenAddonProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenAddonProvider$Type = ($IScreenAddonProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenAddonProvider_ = $IScreenAddonProvider$Type;
}}
declare module "packages/com/hrznstudio/titanium/block/tile/$ITickableBlockEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITickableBlockEntity<T extends $BlockEntity> {

 "clientTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
 "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
}

export namespace $ITickableBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableBlockEntity$Type<T> = ($ITickableBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableBlockEntity_<T> = $ITickableBlockEntity$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$IComponentHarness, $IComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHarness"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ProgressBarComponent$BarDirection, $ProgressBarComponent$BarDirection$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent$BarDirection"
import {$IScreenAddonProvider, $IScreenAddonProvider$Type} from "packages/com/hrznstudio/titanium/api/client/$IScreenAddonProvider"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IContainerAddonProvider, $IContainerAddonProvider$Type} from "packages/com/hrznstudio/titanium/container/addon/$IContainerAddonProvider"

export class $ProgressBarComponent<T extends $IComponentHarness> implements $INBTSerializable<($CompoundTag)>, $IScreenAddonProvider, $IContainerAddonProvider {

constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getScreenAddons"(): $List<($IFactory<(any)>)>
public "tickBar"(): void
public "getCanReset"(): $Predicate<(T)>
public "getCanIncrease"(): $Predicate<(T)>
public "getIncreaseType"(): boolean
public "setColor"(arg0: $DyeColor$Type): $ProgressBarComponent<(T)>
public "getProgress"(): integer
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "onStart"(): void
public "setMaxProgress"(arg0: integer): $ProgressBarComponent<(T)>
public "getColor"(): $DyeColor
public "getPosY"(): integer
public "getPosX"(): integer
public "setProgress"(arg0: integer): void
public "getMaxProgress"(): integer
public "setComponentHarness"(arg0: T): $ProgressBarComponent<(T)>
public "getComponentHarness"(): T
public "getContainerAddons"(): $List<($IFactory<(any)>)>
public "setOnFinishWork"(arg0: $Runnable$Type): $ProgressBarComponent<(T)>
public "setCanReset"(arg0: $Predicate$Type<(T)>): $ProgressBarComponent<(T)>
public "setCanIncrease"(arg0: $Predicate$Type<(T)>): $ProgressBarComponent<(T)>
public "getBarDirection"(): $ProgressBarComponent$BarDirection
public "setBarDirection"(arg0: $ProgressBarComponent$BarDirection$Type): $ProgressBarComponent<(T)>
public "setOnStart"(arg0: $Runnable$Type): $ProgressBarComponent<(T)>
public "getTickingTime"(): integer
public "setTickingTime"(arg0: integer): $ProgressBarComponent<(T)>
public "setOnTickWork"(arg0: $Runnable$Type): $ProgressBarComponent<(T)>
public "setIncreaseType"(arg0: boolean): $ProgressBarComponent<(T)>
public "getProgressIncrease"(): integer
public "setProgressIncrease"(arg0: integer): $ProgressBarComponent<(T)>
public "canInteract"(): boolean
get "screenAddons"(): $List<($IFactory<(any)>)>
get "canReset"(): $Predicate<(T)>
get "canIncrease"(): $Predicate<(T)>
get "increaseType"(): boolean
set "color"(value: $DyeColor$Type)
get "progress"(): integer
set "maxProgress"(value: integer)
get "color"(): $DyeColor
get "posY"(): integer
get "posX"(): integer
set "progress"(value: integer)
get "maxProgress"(): integer
set "componentHarness"(value: T)
get "componentHarness"(): T
get "containerAddons"(): $List<($IFactory<(any)>)>
set "onFinishWork"(value: $Runnable$Type)
set "canReset"(value: $Predicate$Type<(T)>)
set "canIncrease"(value: $Predicate$Type<(T)>)
get "barDirection"(): $ProgressBarComponent$BarDirection
set "barDirection"(value: $ProgressBarComponent$BarDirection$Type)
get "tickingTime"(): integer
set "tickingTime"(value: integer)
set "onTickWork"(value: $Runnable$Type)
set "increaseType"(value: boolean)
get "progressIncrease"(): integer
set "progressIncrease"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressBarComponent$Type<T> = ($ProgressBarComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressBarComponent_<T> = $ProgressBarComponent$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/component/$IComponentHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IComponentHandler {

 "add"(...arg0: (any)[]): void

(...arg0: (any)[]): void
}

export namespace $IComponentHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentHandler$Type = ($IComponentHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentHandler_ = $IComponentHandler$Type;
}}
declare module "packages/com/hrznstudio/titanium/item/$BasicItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BasicItem extends $Item {
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
constructor(arg0: string, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "setItemGroup"(arg0: $TitaniumTab$Type): void
set "itemGroup"(value: $TitaniumTab$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicItem$Type = ($BasicItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicItem_ = $BasicItem$Type;
}}
declare module "packages/com/hrznstudio/titanium/client/screen/asset/$DefaultAssetProvider" {
import {$IAssetProvider, $IAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$IAssetProvider"
import {$IAssetType, $IAssetType$Type} from "packages/com/hrznstudio/titanium/api/client/$IAssetType"
import {$IAsset, $IAsset$Type} from "packages/com/hrznstudio/titanium/api/client/$IAsset"

export class $DefaultAssetProvider implements $IAssetProvider {


public "getAsset"<T extends $IAsset>(arg0: $IAssetType$Type<(T)>): T
public static "getAsset"<T extends $IAsset>(arg0: $IAssetProvider$Type, arg1: $IAssetType$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultAssetProvider$Type = ($DefaultAssetProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultAssetProvider_ = $DefaultAssetProvider$Type;
}}
declare module "packages/com/hrznstudio/titanium/block/$BasicBlock" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IBlockLootTableProvider, $IBlockLootTableProvider$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$IBlockLootTableProvider"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IRecipeProvider, $IRecipeProvider$Type} from "packages/com/hrznstudio/titanium/api/$IRecipeProvider"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"

export class $BasicBlock extends $Block implements $IRecipeProvider, $IBlockLootTableProvider {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "isRandomlyTicking": boolean
 "properties": $BlockBehaviour$Properties

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type)

public "getItemGroup"(): $TitaniumTab
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "hasIndividualRenderVoxelShape"(): boolean
public "setItemGroup"(arg0: $TitaniumTab$Type): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
get "itemGroup"(): $TitaniumTab
set "itemGroup"(value: $TitaniumTab$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBlock$Type = ($BasicBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBlock_ = $BasicBlock$Type;
}}
declare module "packages/com/hrznstudio/titanium/recipe/generator/$IJsonFile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IJsonFile {

 "getRecipeSubfolder"(): string
 "getRecipeKey"(): string
}

export namespace $IJsonFile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJsonFile$Type = ($IJsonFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJsonFile_ = $IJsonFile$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/fluid/$FluidTankComponent" {
import {$FluidTankComponent$Type, $FluidTankComponent$Type$Type} from "packages/com/hrznstudio/titanium/component/fluid/$FluidTankComponent$Type"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidTankComponent$Action, $FluidTankComponent$Action$Type} from "packages/com/hrznstudio/titanium/component/fluid/$FluidTankComponent$Action"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IContainerAddonProvider, $IContainerAddonProvider$Type} from "packages/com/hrznstudio/titanium/container/addon/$IContainerAddonProvider"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$IComponentHarness, $IComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHarness"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IScreenAddonProvider, $IScreenAddonProvider$Type} from "packages/com/hrznstudio/titanium/api/client/$IScreenAddonProvider"

export class $FluidTankComponent<T extends $IComponentHarness> extends $FluidTank implements $IScreenAddonProvider, $IContainerAddonProvider, $INBTSerializable<($CompoundTag)> {

constructor(arg0: string, arg1: integer, arg2: integer, arg3: integer)

public "getScreenAddons"(): $List<($IFactory<(any)>)>
public "getName"(): string
public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getPosY"(): integer
public "getPosX"(): integer
public "setComponentHarness"(arg0: T): $FluidTankComponent<(T)>
public "getComponentHarness"(): T
public "getContainerAddons"(): $List<($IFactory<(any)>)>
public "getTankType"(): $FluidTankComponent$Type
public "setFluidStack"(arg0: $FluidStack$Type): void
public "setTankAction"(arg0: $FluidTankComponent$Action$Type): $FluidTankComponent<(T)>
public "setOnContentChange"(arg0: $Runnable$Type): $FluidTankComponent<(T)>
public "getTankAction"(): $FluidTankComponent$Action
public "drainForced"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drainForced"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "setTankType"(arg0: $FluidTankComponent$Type$Type): $FluidTankComponent<(T)>
public "fillForced"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "canInteract"(): boolean
get "screenAddons"(): $List<($IFactory<(any)>)>
get "name"(): string
get "posY"(): integer
get "posX"(): integer
set "componentHarness"(value: T)
get "componentHarness"(): T
get "containerAddons"(): $List<($IFactory<(any)>)>
get "tankType"(): $FluidTankComponent$Type
set "fluidStack"(value: $FluidStack$Type)
set "tankAction"(value: $FluidTankComponent$Action$Type)
set "onContentChange"(value: $Runnable$Type)
get "tankAction"(): $FluidTankComponent$Action
set "tankType"(value: $FluidTankComponent$Type$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankComponent$Type<T> = ($FluidTankComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankComponent_<T> = $FluidTankComponent$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/datagenerator/loot/block/$IBlockLootTableProvider" {
import {$ILootTableProvider, $ILootTableProvider$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/$ILootTableProvider"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"

export interface $IBlockLootTableProvider extends $ILootTableProvider<($BasicBlockLootTables)> {

 "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder

(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
}

export namespace $IBlockLootTableProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockLootTableProvider$Type = ($IBlockLootTableProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockLootTableProvider_ = $IBlockLootTableProvider$Type;
}}
declare module "packages/com/hrznstudio/titanium/recipe/serializer/$GenericSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IRecipeSerializerReversed, $IRecipeSerializerReversed$Type} from "packages/com/hrznstudio/titanium/recipe/serializer/$IRecipeSerializerReversed"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SerializableRecipe, $SerializableRecipe$Type} from "packages/com/hrznstudio/titanium/recipe/serializer/$SerializableRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $GenericSerializer<T extends $SerializableRecipe> implements $RecipeSerializer<(T)>, $IRecipeSerializerReversed<(T)> {

constructor(arg0: $Class$Type<(T)>, arg1: $Supplier$Type<($RecipeType$Type<(any)>)>)

public "write"(arg0: T): $JsonObject
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericSerializer$Type<T> = ($GenericSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericSerializer_<T> = $GenericSerializer$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/api/$IFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFactory<T> {

 "create"(): T

(): T
}

export namespace $IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFactory$Type<T> = ($IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFactory_<T> = $IFactory$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/api/client/assets/types/$ITankAsset" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IAsset, $IAsset$Type} from "packages/com/hrznstudio/titanium/api/client/$IAsset"

export interface $ITankAsset extends $IAsset {

 "getFluidRenderPadding"(arg0: $Direction$Type): integer
 "getOffset"(): $Point
 "getResourceLocation"(): $ResourceLocation
 "getArea"(): $Rectangle
}

export namespace $ITankAsset {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITankAsset$Type = ($ITankAsset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITankAsset_ = $ITankAsset$Type;
}}
declare module "packages/com/hrznstudio/titanium/block/tile/$BasicTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IScreenInfoProvider, $IScreenInfoProvider$Type} from "packages/com/hrznstudio/titanium/block/tile/$IScreenInfoProvider"

export class $BasicTile<T extends $BasicTile<(T)>> extends $BlockEntity implements $IScreenInfoProvider {
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(any)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "syncObject"(arg0: any): void
public "updateNeigh"(): void
public "getBasicTileBlock"(): $BasicTileBlock<(T)>
public "isClient"(): boolean
public "isServer"(): boolean
public "setLevel"(arg0: $Level$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "initClient"(): void
public "onNeighborChanged"(arg0: $Block$Type, arg1: $BlockPos$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "markForUpdate"(): void
public "onActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "handleSyncObject"(arg0: $CompoundTag$Type): void
public "getTitleColor"(): integer
public "getTitleXPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
public "getTitleYPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
get "basicTileBlock"(): $BasicTileBlock<(T)>
get "client"(): boolean
get "server"(): boolean
set "level"(value: $Level$Type)
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "titleColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicTile$Type<T> = ($BasicTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicTile_<T> = $BasicTile$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/block/tile/$ActiveTile" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFilter, $IFilter$Type} from "packages/com/hrznstudio/titanium/api/filter/$IFilter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IFacingComponentHarness, $IFacingComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/sideness/$IFacingComponentHarness"
import {$IButtonHandler, $IButtonHandler$Type} from "packages/com/hrznstudio/titanium/network/$IButtonHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MultiButtonComponent, $MultiButtonComponent$Type} from "packages/com/hrznstudio/titanium/component/button/$MultiButtonComponent"
import {$IFacingComponent, $IFacingComponent$Type} from "packages/com/hrznstudio/titanium/component/sideness/$IFacingComponent"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ButtonComponent, $ButtonComponent$Type} from "packages/com/hrznstudio/titanium/component/button/$ButtonComponent"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BasicTile, $BasicTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$BasicTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$MultiInventoryComponent, $MultiInventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$MultiInventoryComponent"
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$IAssetProvider, $IAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$IAssetProvider"
import {$ITickableBlockEntity, $ITickableBlockEntity$Type} from "packages/com/hrznstudio/titanium/block/tile/$ITickableBlockEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IComponentBundle, $IComponentBundle$Type} from "packages/com/hrznstudio/titanium/component/$IComponentBundle"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ContainerLevelAccess, $ContainerLevelAccess$Type} from "packages/net/minecraft/world/inventory/$ContainerLevelAccess"
import {$IContainerAddonProvider, $IContainerAddonProvider$Type} from "packages/com/hrznstudio/titanium/container/addon/$IContainerAddonProvider"
import {$IHasAssetProvider, $IHasAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$IHasAssetProvider"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FluidTankComponent, $FluidTankComponent$Type} from "packages/com/hrznstudio/titanium/component/fluid/$FluidTankComponent"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$IScreenAddonProvider, $IScreenAddonProvider$Type} from "packages/com/hrznstudio/titanium/api/client/$IScreenAddonProvider"

export class $ActiveTile<T extends $ActiveTile<(T)>> extends $BasicTile<(T)> implements $IScreenAddonProvider, $ITickableBlockEntity<(T)>, $MenuProvider, $IButtonHandler, $IFacingComponentHarness, $IContainerAddonProvider, $IHasAssetProvider {
 "blockState": $BlockState

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(any)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "addTank"(arg0: $FluidTankComponent$Type<(T)>): void
public "addInventory"(arg0: $InventoryComponent$Type<(T)>): void
public "getComponentWorld"(): $Level
public "markComponentDirty"(): void
public "addGuiAddonFactory"(arg0: $IFactory$Type<(any)>): void
public "getHandlerFromName"(arg0: string): $IFacingComponent
public "addBundle"(arg0: $IComponentBundle$Type): void
public "getScreenAddons"(): $List<($IFactory<(any)>)>
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "addFilter"(arg0: $IFilter$Type<(any)>): void
public "addProgressBar"(arg0: $ProgressBarComponent$Type<(T)>): void
public "getDisplayName"(): $Component
public "getSelf"(): T
public "canInteract"(): boolean
public "getFacingDirection"(): $Direction
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "invalidateCaps"(): void
public "openGui"(arg0: $Player$Type): void
public "initClient"(): void
public "onNeighborChanged"(arg0: $Block$Type, arg1: $BlockPos$Type): void
public "addButton"(arg0: $ButtonComponent$Type): void
public "handleButtonMessage"(arg0: integer, arg1: $Player$Type, arg2: $CompoundTag$Type): void
public "addContainerAddonFactory"(arg0: $IFactory$Type<(any)>): void
public "getFacingHandlerWorkTime"(): integer
public "getMultiButtonComponent"(): $MultiButtonComponent
public "markComponentForUpdate"(arg0: boolean): void
public "getFacingHandlerWorkAmount"(): integer
public "getMultiInventoryComponent"(): $MultiInventoryComponent<(T)>
public "getWorldPosCallable"(): $ContainerLevelAccess
public "onActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "getAssetProvider"(): $IAssetProvider
public "getContainerAddons"(): $List<($IFactory<(any)>)>
public "clientTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
get "componentWorld"(): $Level
get "screenAddons"(): $List<($IFactory<(any)>)>
get "displayName"(): $Component
get "self"(): T
get "facingDirection"(): $Direction
get "facingHandlerWorkTime"(): integer
get "multiButtonComponent"(): $MultiButtonComponent
get "facingHandlerWorkAmount"(): integer
get "multiInventoryComponent"(): $MultiInventoryComponent<(T)>
get "worldPosCallable"(): $ContainerLevelAccess
get "assetProvider"(): $IAssetProvider
get "containerAddons"(): $List<($IFactory<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActiveTile$Type<T> = ($ActiveTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActiveTile_<T> = $ActiveTile$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/recipe/serializer/$IRecipeSerializerReversed" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $IRecipeSerializerReversed<T extends $Recipe<(any)>> {

 "write"(arg0: T): $JsonObject

(arg0: T): $JsonObject
}

export namespace $IRecipeSerializerReversed {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSerializerReversed$Type<T> = ($IRecipeSerializerReversed<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSerializerReversed_<T> = $IRecipeSerializerReversed$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/datagenerator/loot/$ILootTableProvider" {
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"

export interface $ILootTableProvider<T> {

 "getLootTable"(arg0: T): $LootTable$Builder

(arg0: T): $LootTable$Builder
}

export namespace $ILootTableProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootTableProvider$Type<T> = ($ILootTableProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootTableProvider_<T> = $ILootTableProvider$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/api/client/$IAsset" {
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IAsset {

 "getOffset"(): $Point
 "getResourceLocation"(): $ResourceLocation
 "getArea"(): $Rectangle

(): $Point
}

export namespace $IAsset {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAsset$Type = ($IAsset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAsset_ = $IAsset$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/fluid/$FluidTankComponent$Action" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FluidTankComponent$Action extends $Enum<($FluidTankComponent$Action)> {
static readonly "FILL": $FluidTankComponent$Action
static readonly "DRAIN": $FluidTankComponent$Action
static readonly "BOTH": $FluidTankComponent$Action
static readonly "NONE": $FluidTankComponent$Action


public static "values"(): ($FluidTankComponent$Action)[]
public static "valueOf"(arg0: string): $FluidTankComponent$Action
public "canDrain"(): boolean
public "canFill"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankComponent$Action$Type = (("none") | ("fill") | ("drain") | ("both")) | ($FluidTankComponent$Action);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankComponent$Action_ = $FluidTankComponent$Action$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/$IComponentBundle" {
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IComponentHandler, $IComponentHandler$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHandler"
import {$IScreenAddonProvider, $IScreenAddonProvider$Type} from "packages/com/hrznstudio/titanium/api/client/$IScreenAddonProvider"
import {$IContainerAddonProvider, $IContainerAddonProvider$Type} from "packages/com/hrznstudio/titanium/container/addon/$IContainerAddonProvider"

export interface $IComponentBundle extends $IScreenAddonProvider, $IContainerAddonProvider {

 "accept"(...arg0: ($IComponentHandler$Type)[]): void
 "getScreenAddons"(): $List<($IFactory<(any)>)>
 "canInteract"(): boolean
 "getContainerAddons"(): $List<($IFactory<(any)>)>
}

export namespace $IComponentBundle {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentBundle$Type = ($IComponentBundle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentBundle_ = $IComponentBundle$Type;
}}
declare module "packages/com/hrznstudio/titanium/util/$FacingUtil$Sideness" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FacingUtil$Sideness extends $Enum<($FacingUtil$Sideness)> {
static readonly "FRONT": $FacingUtil$Sideness
static readonly "BACK": $FacingUtil$Sideness
static readonly "LEFT": $FacingUtil$Sideness
static readonly "RIGHT": $FacingUtil$Sideness
static readonly "TOP": $FacingUtil$Sideness
static readonly "BOTTOM": $FacingUtil$Sideness


public static "values"(): ($FacingUtil$Sideness)[]
public static "valueOf"(arg0: string): $FacingUtil$Sideness
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacingUtil$Sideness$Type = (("top") | ("left") | ("bottom") | ("back") | ("front") | ("right")) | ($FacingUtil$Sideness);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacingUtil$Sideness_ = $FacingUtil$Sideness$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/$IComponentHarness" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IComponentHarness {

 "getComponentWorld"(): $Level
 "markComponentDirty"(): void
 "markComponentForUpdate"(arg0: boolean): void
}

export namespace $IComponentHarness {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentHarness$Type = ($IComponentHarness);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentHarness_ = $IComponentHarness$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/sideness/$IFacingComponent" {
import {$IFacingComponent$FaceMode, $IFacingComponent$FaceMode$Type} from "packages/com/hrznstudio/titanium/component/sideness/$IFacingComponent$FaceMode"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$FacingUtil$Sideness, $FacingUtil$Sideness$Type} from "packages/com/hrznstudio/titanium/util/$FacingUtil$Sideness"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IAsset, $IAsset$Type} from "packages/com/hrznstudio/titanium/api/client/$IAsset"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IFacingComponent {

 "getFacingModes"(): $Map<($FacingUtil$Sideness), ($IFacingComponent$FaceMode)>
 "getName"(): string
 "work"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: integer): boolean
 "getColor"(): integer
 "getValidFacingModes"(): ($IFacingComponent$FaceMode)[]
 "getFacingHandlerX"(): integer
 "getFacingHandlerY"(): integer
 "getRectangle"(arg0: $IAsset$Type): $Rectangle
 "setFacingHandlerPos"(arg0: integer, arg1: integer): $IFacingComponent
}

export namespace $IFacingComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacingComponent$Type = ($IFacingComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacingComponent_ = $IFacingComponent$Type;
}}
declare module "packages/com/hrznstudio/titanium/recipe/serializer/$SerializableRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IConditionSerializer, $IConditionSerializer$Type} from "packages/net/minecraftforge/common/crafting/conditions/$IConditionSerializer"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$GenericSerializer, $GenericSerializer$Type} from "packages/com/hrznstudio/titanium/recipe/serializer/$GenericSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$IJSONGenerator, $IJSONGenerator$Type} from "packages/com/hrznstudio/titanium/recipe/generator/$IJSONGenerator"
import {$IJsonFile, $IJsonFile$Type} from "packages/com/hrznstudio/titanium/recipe/generator/$IJsonFile"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$ICondition, $ICondition$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition"

export class $SerializableRecipe implements $Recipe<($Container)>, $IJsonFile, $IJSONGenerator {

constructor(arg0: $ResourceLocation$Type)

public "generate"(): $JsonObject
public "getOutputCondition"(): $Pair<($ICondition), ($IConditionSerializer)>
public "getRecipeSubfolder"(): string
public "getRecipeKey"(): string
public "getSerializer"(): $GenericSerializer<(any)>
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getType"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getMod"(): string
get "outputCondition"(): $Pair<($ICondition), ($IConditionSerializer)>
get "recipeSubfolder"(): string
get "recipeKey"(): string
get "serializer"(): $GenericSerializer<(any)>
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "special"(): boolean
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
set "group"(value: string)
get "group"(): string
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializableRecipe$Type = ($SerializableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializableRecipe_ = $SerializableRecipe$Type;
}}
declare module "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType" {
import {$RotationHandler, $RotationHandler$Type} from "packages/com/hrznstudio/titanium/block/$RotationHandler"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $RotatableBlock$RotationType extends $Enum<($RotatableBlock$RotationType)> {
static readonly "NONE": $RotatableBlock$RotationType
static readonly "FOUR_WAY": $RotatableBlock$RotationType
static readonly "SIX_WAY": $RotatableBlock$RotationType
static readonly "TWENTY_FOUR_WAY": $RotatableBlock$RotationType


public static "values"(): ($RotatableBlock$RotationType)[]
public static "valueOf"(arg0: string): $RotatableBlock$RotationType
public "getProperties"(): ($DirectionProperty)[]
public "getHandler"(): $RotationHandler
get "properties"(): ($DirectionProperty)[]
get "handler"(): $RotationHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatableBlock$RotationType$Type = (("four_way") | ("six_way") | ("twenty_four_way") | ("none")) | ($RotatableBlock$RotationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotatableBlock$RotationType_ = $RotatableBlock$RotationType$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/sideness/$IFacingComponent$FaceMode" {
import {$StateButtonInfo, $StateButtonInfo$Type} from "packages/com/hrznstudio/titanium/client/screen/addon/$StateButtonInfo"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $IFacingComponent$FaceMode extends $Enum<($IFacingComponent$FaceMode)> {
static readonly "NONE": $IFacingComponent$FaceMode
static readonly "ENABLED": $IFacingComponent$FaceMode
static readonly "PUSH": $IFacingComponent$FaceMode
static readonly "PULL": $IFacingComponent$FaceMode


public "allowsConnection"(): boolean
public static "values"(): ($IFacingComponent$FaceMode)[]
public static "valueOf"(arg0: string): $IFacingComponent$FaceMode
public "getIndex"(): integer
public "getInfo"(arg0: integer): $StateButtonInfo
public "getColor"(): $ChatFormatting
get "index"(): integer
get "color"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacingComponent$FaceMode$Type = (("pull") | ("none") | ("enabled") | ("push")) | ($IFacingComponent$FaceMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacingComponent$FaceMode_ = $IFacingComponent$FaceMode$Type;
}}
declare module "packages/com/hrznstudio/titanium/api/filter/$FilterSlot" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"

export class $FilterSlot<T> {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: T)

public "getFilter"(): T
public "setColor"(arg0: $DyeColor$Type): void
public "setColor"(arg0: integer): void
public "getY"(): integer
public "setFilter"(arg0: T): void
public "getColor"(): integer
public "getX"(): integer
public "getFilterID"(): integer
get "filter"(): T
set "color"(value: $DyeColor$Type)
set "color"(value: integer)
get "y"(): integer
set "filter"(value: T)
get "color"(): integer
get "x"(): integer
get "filterID"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterSlot$Type<T> = ($FilterSlot<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterSlot_<T> = $FilterSlot$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/component/fluid/$FluidTankComponent$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IAssetType, $IAssetType$Type} from "packages/com/hrznstudio/titanium/api/client/$IAssetType"
import {$ITankAsset, $ITankAsset$Type} from "packages/com/hrznstudio/titanium/api/client/assets/types/$ITankAsset"

export class $FluidTankComponent$Type extends $Enum<($FluidTankComponent$Type)> {
static readonly "NORMAL": $FluidTankComponent$Type
static readonly "SMALL": $FluidTankComponent$Type


public static "values"(): ($FluidTankComponent$Type)[]
public static "valueOf"(arg0: string): $FluidTankComponent$Type
public "getAssetType"(): $IAssetType<($ITankAsset)>
get "assetType"(): $IAssetType<($ITankAsset)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankComponent$Type$Type = (("small") | ("normal")) | ($FluidTankComponent$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankComponent$Type_ = $FluidTankComponent$Type$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent$BarDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IComponentHarness, $IComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHarness"
import {$IAssetProvider, $IAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$IAssetProvider"
import {$ProgressBarScreenAddon, $ProgressBarScreenAddon$Type} from "packages/com/hrznstudio/titanium/client/screen/addon/$ProgressBarScreenAddon"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ProgressBarComponent$BarDirection extends $Enum<($ProgressBarComponent$BarDirection)> {
static readonly "VERTICAL_UP": $ProgressBarComponent$BarDirection
static readonly "ARROW_RIGHT": $ProgressBarComponent$BarDirection
static readonly "ARROW_DOWN": $ProgressBarComponent$BarDirection


public static "values"(): ($ProgressBarComponent$BarDirection)[]
public static "valueOf"(arg0: string): $ProgressBarComponent$BarDirection
public "render"<T extends $IComponentHarness>(arg0: $GuiGraphics$Type, arg1: $Screen$Type, arg2: integer, arg3: integer, arg4: $IAssetProvider$Type, arg5: $ProgressBarScreenAddon$Type<(T)>): void
public "getYSize"(arg0: $IAssetProvider$Type): integer
public "getXSize"(arg0: $IAssetProvider$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressBarComponent$BarDirection$Type = (("arrow_right") | ("vertical_up") | ("arrow_down")) | ($ProgressBarComponent$BarDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressBarComponent$BarDirection_ = $ProgressBarComponent$BarDirection$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/inventory/$MultiInventoryComponent$MultiInvCapabilityHandler" {
import {$IComponentHarness, $IComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHarness"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MultiInventoryComponent$MultiInvCapabilityHandler<T extends $IComponentHarness> extends $ItemStackHandler {

constructor(arg0: $List$Type<($InventoryComponent$Type<(T)>)>)

public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getRelativeSlot"(arg0: $InventoryComponent$Type<(T)>, arg1: integer): integer
public "getFromSlot"(arg0: integer): $InventoryComponent<(T)>
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiInventoryComponent$MultiInvCapabilityHandler$Type<T> = ($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiInventoryComponent$MultiInvCapabilityHandler_<T> = $MultiInventoryComponent$MultiInvCapabilityHandler$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/component/button/$ButtonComponent" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IScreenAddonProvider, $IScreenAddonProvider$Type} from "packages/com/hrznstudio/titanium/api/client/$IScreenAddonProvider"

export class $ButtonComponent implements $IScreenAddonProvider {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getScreenAddons"(): $List<($IFactory<(any)>)>
public "getId"(): integer
public "setId"(arg0: integer): $ButtonComponent
public "getPosY"(): integer
public "getPosX"(): integer
public "onButtonClicked"(arg0: $Player$Type, arg1: $CompoundTag$Type): void
public "getSizeX"(): integer
public "getSizeY"(): integer
public "setPredicate"(arg0: $BiConsumer$Type<($Player$Type), ($CompoundTag$Type)>): $ButtonComponent
get "screenAddons"(): $List<($IFactory<(any)>)>
get "id"(): integer
set "id"(value: integer)
get "posY"(): integer
get "posX"(): integer
get "sizeX"(): integer
get "sizeY"(): integer
set "predicate"(value: $BiConsumer$Type<($Player$Type), ($CompoundTag$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonComponent$Type = ($ButtonComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonComponent_ = $ButtonComponent$Type;
}}
declare module "packages/com/hrznstudio/titanium/api/client/$IScreenAddon" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$ComponentPath, $ComponentPath$Type} from "packages/net/minecraft/client/gui/$ComponentPath"
import {$FocusNavigationEvent, $FocusNavigationEvent$Type} from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import {$IAssetProvider, $IAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$IAssetProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IScreenAddon extends $GuiEventListener {

 "drawBackgroundLayer"(arg0: $GuiGraphics$Type, arg1: $Screen$Type, arg2: $IAssetProvider$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
 "drawForegroundLayer"(arg0: $GuiGraphics$Type, arg1: $Screen$Type, arg2: $IAssetProvider$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
 "isBackground"(): boolean
 "init"(arg0: integer, arg1: integer): void
 "setFocused"(arg0: boolean): void
 "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "isFocused"(): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getTooltipLines"(): $List<($Component)>
 "nextFocusPath"(arg0: $FocusNavigationEvent$Type): $ComponentPath
 "getCurrentFocusPath"(): $ComponentPath
 "getRectangle"(): $ScreenRectangle
 "getTabOrderGroup"(): integer
}

export namespace $IScreenAddon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenAddon$Type = ($IScreenAddon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenAddon_ = $IScreenAddon$Type;
}}
declare module "packages/com/hrznstudio/titanium/api/client/$IAssetType" {
import {$IAsset, $IAsset$Type} from "packages/com/hrznstudio/titanium/api/client/$IAsset"

export interface $IAssetType<T extends $IAsset> {

 "getDefaultAsset"(): T
 "castOrDefault"(arg0: $IAsset$Type): T
}

export namespace $IAssetType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAssetType$Type<T> = ($IAssetType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAssetType_<T> = $IAssetType$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables" {
import {$CopyNbtFunction$Builder, $CopyNbtFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNbtFunction$Builder"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$BlockLootSubProvider, $BlockLootSubProvider$Type} from "packages/net/minecraft/data/loot/$BlockLootSubProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NonNullLazy, $NonNullLazy$Type} from "packages/net/minecraftforge/common/util/$NonNullLazy"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $BasicBlockLootTables extends $BlockLootSubProvider {
static readonly "HAS_NO_SILK_TOUCH": $LootItemCondition$Builder

constructor(arg0: $NonNullLazy$Type<($List$Type<($Block$Type)>)>)

public "droppingSelfWithNbt"(arg0: $ItemLike$Type, arg1: $CopyNbtFunction$Builder$Type): $LootTable$Builder
public "generate"(arg0: $BiConsumer$Type<($ResourceLocation$Type), ($LootTable$Builder$Type)>): void
public "droppingSelf"(arg0: $ItemLike$Type): $LootTable$Builder
public "droppingNothing"(): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBlockLootTables$Type = ($BasicBlockLootTables);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBlockLootTables_ = $BasicBlockLootTables$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/sideness/$ICapabilityHolder" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$FacingUtil$Sideness, $FacingUtil$Sideness$Type} from "packages/com/hrznstudio/titanium/util/$FacingUtil$Sideness"

export interface $ICapabilityHolder<T> {

 "handleFacingChange"(arg0: string, arg1: $FacingUtil$Sideness$Type, arg2: integer): boolean
 "getLazyOptionals"(): $Collection<($LazyOptional<(T)>)>
 "getCapabilityForSide"(arg0: $FacingUtil$Sideness$Type): $LazyOptional<(T)>
}

export namespace $ICapabilityHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityHolder$Type<T> = ($ICapabilityHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityHolder_<T> = $ICapabilityHolder$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/api/$IRecipeProvider" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"

export interface $IRecipeProvider {

 "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void

(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}

export namespace $IRecipeProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeProvider$Type = ($IRecipeProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeProvider_ = $IRecipeProvider$Type;
}}
declare module "packages/com/hrznstudio/titanium/recipe/generator/$IJSONGenerator" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export interface $IJSONGenerator {

 "generate"(): $JsonObject

(): $JsonObject
}

export namespace $IJSONGenerator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJSONGenerator$Type = ($IJSONGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJSONGenerator_ = $IJSONGenerator$Type;
}}
declare module "packages/com/hrznstudio/titanium/api/filter/$FilterAction" {
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$IFilter, $IFilter$Type} from "packages/com/hrznstudio/titanium/api/filter/$IFilter"

export class $FilterAction<T> {

constructor(arg0: $BiPredicate$Type<($IFilter$Type<(T)>), (T)>)

public "getFilterCheck"(): $BiPredicate<($IFilter<(T)>), (T)>
get "filterCheck"(): $BiPredicate<($IFilter<(T)>), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterAction$Type<T> = ($FilterAction<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterAction_<T> = $FilterAction$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/client/screen/addon/$ProgressBarScreenAddon" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IComponentHarness, $IComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHarness"
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$IAssetProvider, $IAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$IAssetProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicScreenAddon, $BasicScreenAddon$Type} from "packages/com/hrznstudio/titanium/client/screen/addon/$BasicScreenAddon"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ProgressBarScreenAddon<T extends $IComponentHarness> extends $BasicScreenAddon {

constructor(arg0: integer, arg1: integer, arg2: $ProgressBarComponent$Type<(T)>)

public "drawBackgroundLayer"(arg0: $GuiGraphics$Type, arg1: $Screen$Type, arg2: $IAssetProvider$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
public "drawForegroundLayer"(arg0: $GuiGraphics$Type, arg1: $Screen$Type, arg2: $IAssetProvider$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
public "getProgressBar"(): $ProgressBarComponent<(T)>
public "getTooltipLines"(): $List<($Component)>
public "getYSize"(): integer
public "getXSize"(): integer
get "progressBar"(): $ProgressBarComponent<(T)>
get "tooltipLines"(): $List<($Component)>
get "ySize"(): integer
get "xSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressBarScreenAddon$Type<T> = ($ProgressBarScreenAddon<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressBarScreenAddon_<T> = $ProgressBarScreenAddon$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/container/addon/$IContainerAddonProvider" {
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IContainerAddonProvider {

 "canInteract"(): boolean
 "getContainerAddons"(): $List<($IFactory<(any)>)>

(): boolean
}

export namespace $IContainerAddonProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerAddonProvider$Type = ($IContainerAddonProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerAddonProvider_ = $IContainerAddonProvider$Type;
}}
declare module "packages/com/hrznstudio/titanium/api/filter/$IFilter$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $IFilter$Type extends $Enum<($IFilter$Type)> {
static readonly "WHITELIST": $IFilter$Type
static readonly "BLACKLIST": $IFilter$Type


public static "values"(): ($IFilter$Type)[]
public static "valueOf"(arg0: string): $IFilter$Type
public "getFilter"(): $Predicate<(boolean)>
get "filter"(): $Predicate<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilter$Type$Type = (("blacklist") | ("whitelist")) | ($IFilter$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilter$Type_ = $IFilter$Type$Type;
}}
declare module "packages/com/hrznstudio/titanium/client/screen/addon/$StateButtonInfo" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IAssetType, $IAssetType$Type} from "packages/com/hrznstudio/titanium/api/client/$IAssetType"

export class $StateButtonInfo {

constructor(arg0: integer, arg1: $IAssetType$Type<(any)>, ...arg2: (string)[])

public "getState"(): integer
public "getTooltip"(): ($Component)[]
public "getAsset"(): $IAssetType<(any)>
get "state"(): integer
get "tooltip"(): ($Component)[]
get "asset"(): $IAssetType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateButtonInfo$Type = ($StateButtonInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateButtonInfo_ = $StateButtonInfo$Type;
}}
declare module "packages/com/hrznstudio/titanium/api/filter/$IFilter" {
import {$IFilter$Type, $IFilter$Type$Type} from "packages/com/hrznstudio/titanium/api/filter/$IFilter$Type"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$FilterAction, $FilterAction$Type} from "packages/com/hrznstudio/titanium/api/filter/$FilterAction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IScreenAddonProvider, $IScreenAddonProvider$Type} from "packages/com/hrznstudio/titanium/api/client/$IScreenAddonProvider"
import {$FilterSlot, $FilterSlot$Type} from "packages/com/hrznstudio/titanium/api/filter/$FilterSlot"

export interface $IFilter<T> extends $INBTSerializable<($CompoundTag)>, $IScreenAddonProvider {

 "getName"(): string
 "matches"(arg0: T): boolean
 "getType"(): $IFilter$Type
 "setFilter"(arg0: integer, arg1: $ItemStack$Type): void
 "setFilter"(arg0: integer, arg1: $FilterSlot$Type<(T)>): void
 "getAction"(): $FilterAction<(T)>
 "getFilterSlots"(): ($FilterSlot<(T)>)[]
 "selectNextFilter"(): void
 "acceptsAsFilter"(arg0: $ItemStack$Type): boolean
 "toggleFilterMode"(): void
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getScreenAddons"(): $List<($IFactory<(any)>)>
}

export namespace $IFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilter$Type<T> = ($IFilter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilter_<T> = $IFilter$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent" {
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IContainerAddonProvider, $IContainerAddonProvider$Type} from "packages/com/hrznstudio/titanium/container/addon/$IContainerAddonProvider"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$IComponentHarness, $IComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHarness"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IScreenAddonProvider, $IScreenAddonProvider$Type} from "packages/com/hrznstudio/titanium/api/client/$IScreenAddonProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InventoryComponent<T extends $IComponentHarness> extends $ItemStackHandler implements $IScreenAddonProvider, $IContainerAddonProvider {

constructor(arg0: string, arg1: integer, arg2: integer, arg3: integer)

public "getScreenAddons"(): $List<($IFactory<(any)>)>
public "setInputFilter"(arg0: $BiPredicate$Type<($ItemStack$Type), (integer)>): $InventoryComponent<(T)>
public "setSlotLimit"(arg0: integer): $InventoryComponent<(T)>
public "setSlotLimit"(arg0: integer, arg1: integer): $InventoryComponent<(T)>
public "setOnSlotChanged"(arg0: $BiConsumer$Type<($ItemStack$Type), (integer)>): $InventoryComponent<(T)>
public "setOutputFilter"(arg0: $BiPredicate$Type<($ItemStack$Type), (integer)>): $InventoryComponent<(T)>
public "getXPos"(): integer
public "setSlotPosition"(arg0: $Function$Type<(integer), ($Pair$Type<(integer), (integer)>)>): $InventoryComponent<(T)>
public "getOnSlotChanged"(): $BiConsumer<($ItemStack), (integer)>
public "isColorGuiEnabled"(): boolean
public "setColorGuiEnabled"(arg0: boolean): $InventoryComponent<(T)>
public "getYPos"(): integer
public "setYPos"(arg0: integer): void
public "getInsertPredicate"(): $BiPredicate<($ItemStack), (integer)>
public "setXPos"(arg0: integer): void
public "getName"(): string
public "setRange"(arg0: integer, arg1: integer): $InventoryComponent<(T)>
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getYSize"(): integer
public "getXSize"(): integer
public "getSlotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
public "setComponentHarness"(arg0: T): $InventoryComponent<(T)>
public "getSlotVisiblePredicate"(): $Predicate<(integer)>
public "setSlotToColorRender"(arg0: integer, arg1: $DyeColor$Type): $InventoryComponent<(T)>
public "setSlotToColorRender"(arg0: integer, arg1: $Color$Type): $InventoryComponent<(T)>
public "setSlotToColorRender"(arg0: integer, arg1: integer): $InventoryComponent<(T)>
public "setSlotVisiblePredicate"(arg0: $Predicate$Type<(integer)>): $InventoryComponent<(T)>
public "getExtractPredicate"(): $BiPredicate<($ItemStack), (integer)>
public "getItemStackForSlotRendering"(arg0: integer): $ItemStack
public "setSlotToItemStackRender"(arg0: integer, arg1: $ItemStack$Type): $InventoryComponent<(T)>
public "getColorForSlotRendering"(arg0: integer): $Color
public "getSlotToColorRenderMap"(): $Map<(integer), ($Color)>
public "getComponentHarness"(): T
public "getContainerAddons"(): $List<($IFactory<(any)>)>
public "canInteract"(): boolean
get "screenAddons"(): $List<($IFactory<(any)>)>
set "inputFilter"(value: $BiPredicate$Type<($ItemStack$Type), (integer)>)
set "slotLimit"(value: integer)
set "onSlotChanged"(value: $BiConsumer$Type<($ItemStack$Type), (integer)>)
set "outputFilter"(value: $BiPredicate$Type<($ItemStack$Type), (integer)>)
get "xPos"(): integer
set "slotPosition"(value: $Function$Type<(integer), ($Pair$Type<(integer), (integer)>)>)
get "onSlotChanged"(): $BiConsumer<($ItemStack), (integer)>
get "colorGuiEnabled"(): boolean
set "colorGuiEnabled"(value: boolean)
get "yPos"(): integer
set "yPos"(value: integer)
get "insertPredicate"(): $BiPredicate<($ItemStack), (integer)>
set "xPos"(value: integer)
get "name"(): string
get "ySize"(): integer
get "xSize"(): integer
get "slotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
set "componentHarness"(value: T)
get "slotVisiblePredicate"(): $Predicate<(integer)>
set "slotVisiblePredicate"(value: $Predicate$Type<(integer)>)
get "extractPredicate"(): $BiPredicate<($ItemStack), (integer)>
get "slotToColorRenderMap"(): $Map<(integer), ($Color)>
get "componentHarness"(): T
get "containerAddons"(): $List<($IFactory<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryComponent$Type<T> = ($InventoryComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryComponent_<T> = $InventoryComponent$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/block/$RotatableBlock" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BasicTile, $BasicTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$BasicTile"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $RotatableBlock<T extends $BasicTile<(T)>> extends $BasicTileBlock<(T)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "isRandomlyTicking": boolean
 "properties": $BlockBehaviour$Properties

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Class$Type<(T)>)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRotationType"(): $RotatableBlock$RotationType
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatableBlock$Type<T> = ($RotatableBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotatableBlock_<T> = $RotatableBlock$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/network/$IButtonHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IButtonHandler {

 "handleButtonMessage"(arg0: integer, arg1: $Player$Type, arg2: $CompoundTag$Type): void

(arg0: integer, arg1: $Player$Type, arg2: $CompoundTag$Type): void
}

export namespace $IButtonHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IButtonHandler$Type = ($IButtonHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IButtonHandler_ = $IButtonHandler$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/sideness/$IFacingComponentHarness" {
import {$IFacingComponent, $IFacingComponent$Type} from "packages/com/hrznstudio/titanium/component/sideness/$IFacingComponent"
import {$IComponentHarness, $IComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHarness"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IFacingComponentHarness extends $IComponentHarness {

 "getHandlerFromName"(arg0: string): $IFacingComponent
 "getComponentWorld"(): $Level
 "markComponentDirty"(): void
 "markComponentForUpdate"(arg0: boolean): void
}

export namespace $IFacingComponentHarness {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacingComponentHarness$Type = ($IFacingComponentHarness);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacingComponentHarness_ = $IFacingComponentHarness$Type;
}}
declare module "packages/com/hrznstudio/titanium/client/screen/asset/$IAssetProvider" {
import {$IAssetType, $IAssetType$Type} from "packages/com/hrznstudio/titanium/api/client/$IAssetType"
import {$DefaultAssetProvider, $DefaultAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$DefaultAssetProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IAsset, $IAsset$Type} from "packages/com/hrznstudio/titanium/api/client/$IAsset"

export interface $IAssetProvider {

 "getAsset"<T extends $IAsset>(arg0: $IAssetType$Type<(T)>): T

(arg0: $IAssetType$Type<(T)>): T
}

export namespace $IAssetProvider {
const DEFAULT_LOCATION: $ResourceLocation
const DEFAULT_LOCATION_ALT: $ResourceLocation
const DEFAULT_PROVIDER: $DefaultAssetProvider
function getAsset<T>(arg0: $IAssetProvider$Type, arg1: $IAssetType$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAssetProvider$Type = ($IAssetProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAssetProvider_ = $IAssetProvider$Type;
}}
declare module "packages/com/hrznstudio/titanium/block/$BasicTileBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BasicTile, $BasicTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$BasicTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BasicBlock, $BasicBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BasicTileBlock<T extends $BasicTile<(T)>> extends $BasicBlock implements $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "isRandomlyTicking": boolean
 "properties": $BlockBehaviour$Properties

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Class$Type<(T)>)

public "getTicker"<R extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(R)>): $BlockEntityTicker<(R)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<(T)>
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "getTileClass"(): $Class<(T)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
get "tileClass"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicTileBlock$Type<T> = ($BasicTileBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicTileBlock_<T> = $BasicTileBlock$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/block/tile/$IScreenInfoProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IScreenInfoProvider {

 "getTitleColor"(): integer
 "getTitleXPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
 "getTitleYPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
}

export namespace $IScreenInfoProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenInfoProvider$Type = ($IScreenInfoProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenInfoProvider_ = $IScreenInfoProvider$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/button/$MultiButtonComponent" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IComponentHandler, $IComponentHandler$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHandler"
import {$IScreenAddonProvider, $IScreenAddonProvider$Type} from "packages/com/hrznstudio/titanium/api/client/$IScreenAddonProvider"

export class $MultiButtonComponent implements $IScreenAddonProvider, $IComponentHandler {

constructor()

public "clickButton"(arg0: integer, arg1: $Player$Type, arg2: $CompoundTag$Type): void
public "getScreenAddons"(): $List<($IFactory<(any)>)>
public "add"(...arg0: (any)[]): void
get "screenAddons"(): $List<($IFactory<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiButtonComponent$Type = ($MultiButtonComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiButtonComponent_ = $MultiButtonComponent$Type;
}}
declare module "packages/com/hrznstudio/titanium/component/inventory/$MultiInventoryComponent" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ICapabilityHolder, $ICapabilityHolder$Type} from "packages/com/hrznstudio/titanium/component/sideness/$ICapabilityHolder"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$IContainerAddonProvider, $IContainerAddonProvider$Type} from "packages/com/hrznstudio/titanium/container/addon/$IContainerAddonProvider"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$IComponentHarness, $IComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHarness"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FacingUtil$Sideness, $FacingUtil$Sideness$Type} from "packages/com/hrznstudio/titanium/util/$FacingUtil$Sideness"
import {$MultiInventoryComponent$MultiInvCapabilityHandler, $MultiInventoryComponent$MultiInvCapabilityHandler$Type} from "packages/com/hrznstudio/titanium/component/inventory/$MultiInventoryComponent$MultiInvCapabilityHandler"
import {$IComponentHandler, $IComponentHandler$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHandler"
import {$IScreenAddonProvider, $IScreenAddonProvider$Type} from "packages/com/hrznstudio/titanium/api/client/$IScreenAddonProvider"

export class $MultiInventoryComponent<T extends $IComponentHarness> implements $IScreenAddonProvider, $IContainerAddonProvider, $ICapabilityHolder<($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>)>, $IComponentHandler {

constructor()

public "handleFacingChange"(arg0: string, arg1: $FacingUtil$Sideness$Type, arg2: integer): boolean
public "getScreenAddons"(): $List<($IFactory<(any)>)>
public "getLazyOptionals"(): $Collection<($LazyOptional<($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>)>)>
public "add"(...arg0: (any)[]): void
public "getCapabilityForSide"(arg0: $FacingUtil$Sideness$Type): $LazyOptional<($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>)>
public "getInventoryHandlers"(): $HashSet<($InventoryComponent<(T)>)>
public "getContainerAddons"(): $List<($IFactory<(any)>)>
public "canInteract"(): boolean
get "screenAddons"(): $List<($IFactory<(any)>)>
get "lazyOptionals"(): $Collection<($LazyOptional<($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>)>)>
get "inventoryHandlers"(): $HashSet<($InventoryComponent<(T)>)>
get "containerAddons"(): $List<($IFactory<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiInventoryComponent$Type<T> = ($MultiInventoryComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiInventoryComponent_<T> = $MultiInventoryComponent$Type<(T)>;
}}
declare module "packages/com/hrznstudio/titanium/item/$BasicItem$Key" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BasicItem$Key extends $Enum<($BasicItem$Key)> implements $StringRepresentable {
static readonly "SHIFT": $BasicItem$Key
static readonly "CTRL": $BasicItem$Key
static readonly "ALT": $BasicItem$Key


public static "values"(): ($BasicItem$Key)[]
public static "valueOf"(arg0: string): $BasicItem$Key
public "getSerializedName"(): string
public "isDown"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "down"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicItem$Key$Type = (("ctrl") | ("shift") | ("alt")) | ($BasicItem$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicItem$Key_ = $BasicItem$Key$Type;
}}
declare module "packages/com/hrznstudio/titanium/client/screen/addon/$BasicScreenAddon" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ComponentPath, $ComponentPath$Type} from "packages/net/minecraft/client/gui/$ComponentPath"
import {$FocusNavigationEvent, $FocusNavigationEvent$Type} from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import {$IScreenAddon, $IScreenAddon$Type} from "packages/com/hrznstudio/titanium/api/client/$IScreenAddon"
import {$IAssetProvider, $IAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$IAssetProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $BasicScreenAddon implements $IScreenAddon {


public "setFocused"(arg0: boolean): void
public "isFocused"(): boolean
public "isMouseOver"(arg0: double, arg1: double): boolean
public "getPosY"(): integer
public "getPosX"(): integer
public "setPosX"(arg0: integer): void
public "setPosY"(arg0: integer): void
public "getYSize"(): integer
public "getXSize"(): integer
public "drawBackgroundLayer"(arg0: $GuiGraphics$Type, arg1: $Screen$Type, arg2: $IAssetProvider$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
public "drawForegroundLayer"(arg0: $GuiGraphics$Type, arg1: $Screen$Type, arg2: $IAssetProvider$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
public "isBackground"(): boolean
public "init"(arg0: integer, arg1: integer): void
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getTooltipLines"(): $List<($Component)>
public "nextFocusPath"(arg0: $FocusNavigationEvent$Type): $ComponentPath
public "getCurrentFocusPath"(): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
set "focused"(value: boolean)
get "focused"(): boolean
get "posY"(): integer
get "posX"(): integer
set "posX"(value: integer)
set "posY"(value: integer)
get "ySize"(): integer
get "xSize"(): integer
get "background"(): boolean
get "tooltipLines"(): $List<($Component)>
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicScreenAddon$Type = ($BasicScreenAddon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicScreenAddon_ = $BasicScreenAddon$Type;
}}
