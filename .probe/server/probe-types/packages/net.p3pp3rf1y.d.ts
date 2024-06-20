declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$ISlotChangeResponseUpgrade, $ISlotChangeResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$ISlotChangeResponseUpgrade"
import {$CompactingUpgradeItem, $CompactingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$IInsertResponseUpgrade, $IInsertResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInsertResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $CompactingUpgradeWrapper extends $UpgradeWrapperBase<($CompactingUpgradeWrapper), ($CompactingUpgradeItem)> implements $IInsertResponseUpgrade, $IFilteredUpgrade, $ISlotChangeResponseUpgrade, $ITickableUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "setCompactNonUncraftable"(arg0: boolean): void
public "shouldCompactNonUncraftable"(): boolean
public "setShouldWorkdInGUI"(arg0: boolean): void
public "getFilterLogic"(): $FilterLogic
public "shouldWorkInGUI"(): boolean
public "onBeforeInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
public "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer): void
public "onSlotChange"(arg0: $IItemHandler$Type, arg1: integer): void
set "compactNonUncraftable"(value: boolean)
set "shouldWorkdInGUI"(value: boolean)
get "filterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeWrapper$Type = ($CompactingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUpgradeWrapper_ = $CompactingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositFilterType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DepositFilterType extends $Enum<($DepositFilterType)> implements $StringRepresentable {
static readonly "ALLOW": $DepositFilterType
static readonly "BLOCK": $DepositFilterType
static readonly "INVENTORY": $DepositFilterType


public static "values"(): ($DepositFilterType)[]
public static "valueOf"(arg0: string): $DepositFilterType
public "next"(): $DepositFilterType
public "getSerializedName"(): string
public static "fromName"(arg0: string): $DepositFilterType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositFilterType$Type = (("allow") | ("block") | ("inventory")) | ($DepositFilterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositFilterType_ = $DepositFilterType$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CraftingUpgradeItem, $CraftingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeItem"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $CraftingUpgradeWrapper extends $UpgradeWrapperBase<($CraftingUpgradeWrapper), ($CraftingUpgradeItem)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "shouldShiftClickIntoStorage"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "getInventory"(): $ItemStackHandler
public "canBeDisabled"(): boolean
set "shiftClickIntoStorage"(value: boolean)
get "inventory"(): $ItemStackHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUpgradeWrapper$Type = ($CraftingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingUpgradeWrapper_ = $CraftingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$SmithingBackpackUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $SmithingBackpackUpgradeRecipe extends $SmithingTransformRecipe implements $IWrapperRecipe<($SmithingTransformRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $SmithingTransformRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getCompose"(): $SmithingTransformRecipe
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "compose"(): $SmithingTransformRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingBackpackUpgradeRecipe$Type = ($SmithingBackpackUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingBackpackUpgradeRecipe_ = $SmithingBackpackUpgradeRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IStorageBlock" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IStorageBlock {

 "getBaseStackSizeMultiplier"(): integer
 "setTicking"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): void
 "getNumberOfInventorySlots"(): integer
 "getNumberOfUpgradeSlots"(): integer
}

export namespace $IStorageBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageBlock$Type = ($IStorageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageBlock_ = $IStorageBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockItemBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockItemBase extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemBase$Type = ($BlockItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemBase_ = $BlockItemBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$TierUpgrade" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$StorageTierUpgradeItem$VanillaTierUpgradeDefinition, $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$VanillaTierUpgradeDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $StorageTierUpgradeItem$TierUpgrade extends $Enum<($StorageTierUpgradeItem$TierUpgrade)> {
static readonly "BASIC": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_COPPER": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_IRON": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_GOLD": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_IRON": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_GOLD": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "IRON_TO_GOLD": $StorageTierUpgradeItem$TierUpgrade
static readonly "IRON_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "IRON_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "GOLD_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "GOLD_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "DIAMOND_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade


public static "values"(): ($StorageTierUpgradeItem$TierUpgrade)[]
public static "valueOf"(arg0: string): $StorageTierUpgradeItem$TierUpgrade
public "addTierUpgradeDefinition"(arg0: $Block$Type, arg1: $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$TierUpgrade$Type = (("copper_to_iron") | ("basic_to_copper") | ("iron_to_gold") | ("iron_to_diamond") | ("gold_to_diamond") | ("basic_to_gold") | ("basic_to_diamond") | ("iron_to_netherite") | ("copper_to_netherite") | ("basic_to_iron") | ("copper_to_gold") | ("basic_to_netherite") | ("basic") | ("gold_to_netherite") | ("copper_to_diamond") | ("diamond_to_netherite")) | ($StorageTierUpgradeItem$TierUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeItem$TierUpgrade_ = $StorageTierUpgradeItem$TierUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$LimitedBarrelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$VerticalFacing, $VerticalFacing$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$VerticalFacing"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockFamily, $BlockFamily$Type} from "packages/net/minecraft/data/$BlockFamily"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BarrelBlock, $BarrelBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LimitedBarrelBlock extends $BarrelBlock {
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "VERTICAL_FACING": $EnumProperty<($VerticalFacing)>
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "FLAT_TOP": $BooleanProperty
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "TICKING": $BooleanProperty
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

constructor(arg0: integer, arg1: $Supplier$Type<(integer)>, arg2: $Supplier$Type<(integer)>, arg3: $BlockBehaviour$Properties$Type)

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "getFacing"(arg0: $BlockState$Type): $Direction
public static "getNorthBasedRotation"(arg0: $Direction$Type): $Quaternionf
public "getBaseStackSizeMultiplier"(): integer
public "getVerticalFacing"(arg0: $BlockState$Type): $VerticalFacing
public "tryToDyeAll"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockHitResult$Type, arg4: $ItemStack$Type): boolean
public "getDisplayItemsCount"(arg0: $List$Type<($RenderInfo$DisplayItem$Type)>): integer
public "hasFixedIndexDisplayItems"(): boolean
public "trySneakItemInteraction"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type, arg6: $ItemStack$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $StorageBlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getHorizontalDirection"(arg0: $BlockState$Type): $Direction
public "tryToTakeItem"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "isLookingAtFront"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
get "baseStackSizeMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LimitedBarrelBlock$Type = ($LimitedBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LimitedBarrelBlock_ = $LimitedBarrelBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$PickupUpgradeWrapper, $PickupUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeWrapper"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PickupUpgradeItem extends $UpgradeItemBase<($PickupUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($PickupUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($PickupUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($PickupUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickupUpgradeItem$Type = ($PickupUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PickupUpgradeItem_ = $PickupUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeWrapper" {
import {$IOverflowResponseUpgrade, $IOverflowResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IOverflowResponseUpgrade"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$ISlotChangeResponseUpgrade, $ISlotChangeResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$ISlotChangeResponseUpgrade"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISlotLimitUpgrade, $ISlotLimitUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ISlotLimitUpgrade"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$VoidUpgradeItem, $VoidUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$IInsertResponseUpgrade, $IInsertResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInsertResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $VoidUpgradeWrapper extends $UpgradeWrapperBase<($VoidUpgradeWrapper), ($VoidUpgradeItem)> implements $IInsertResponseUpgrade, $IFilteredUpgrade, $ISlotChangeResponseUpgrade, $ITickableUpgrade, $IOverflowResponseUpgrade, $ISlotLimitUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "setShouldVoidOverflow"(arg0: boolean): void
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "isVoidAnythingEnabled"(): boolean
public "setShouldVoidOverflowDefaultOrLoadFromNbt"(arg0: boolean): void
public "setShouldWorkdInGUI"(arg0: boolean): void
public "getSlotLimit"(): integer
public "getFilterLogic"(): $FilterLogic
public "shouldWorkInGUI"(): boolean
public "onBeforeInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
public "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer): void
public "onSlotChange"(arg0: $IItemHandler$Type, arg1: integer): void
public "shouldVoidOverflow"(): boolean
public "worksInGui"(): boolean
public "stackMatchesFilter"(arg0: $ItemStack$Type): boolean
public "onOverflow"(arg0: $ItemStack$Type): $ItemStack
public "stackMatchesFilterStack"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "voidAnythingEnabled"(): boolean
set "shouldVoidOverflowDefaultOrLoadFromNbt"(value: boolean)
set "shouldWorkdInGUI"(value: boolean)
get "slotLimit"(): integer
get "filterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeWrapper$Type = ($VoidUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeWrapper_ = $VoidUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageLinkBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockBase, $BlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StorageLinkBlock extends $BlockBase implements $EntityBlock {
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageLinkBlock$Type = ($StorageLinkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageLinkBlock_ = $StorageLinkBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IDisplaySideStorage" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IDisplaySideStorage {

 "canChangeDisplaySide"(arg0: $BlockState$Type): boolean
}

export namespace $IDisplaySideStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDisplaySideStorage$Type = ($IDisplaySideStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDisplaySideStorage_ = $IDisplaySideStorage$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeShapelessRecipe$Serializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$StorageTierUpgradeShapelessRecipe, $StorageTierUpgradeShapelessRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeShapelessRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $StorageTierUpgradeShapelessRecipe$Serializer extends $RecipeWrapperSerializer<($ShapelessRecipe), ($StorageTierUpgradeShapelessRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeShapelessRecipe$Serializer$Type = ($StorageTierUpgradeShapelessRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeShapelessRecipe$Serializer_ = $StorageTierUpgradeShapelessRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BatteryUpgradeWrapper, $BatteryUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$BatteryUpgradeConfig, $BatteryUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeConfig"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BatteryUpgradeItem extends $UpgradeItemBase<($BatteryUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($BatteryUpgradeWrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $BatteryUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($BatteryUpgradeWrapper)>
public "getInventoryColumnsTaken"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean): $UpgradeSlotChangeResult
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$Type): integer
public "getBatteryUpgradeConfig"(): $BatteryUpgradeConfig
public "getMaxEnergyStored"(arg0: $IStorageWrapper$Type): integer
public "getMaxEnergyBase"(arg0: $IStorageWrapper$Type): integer
get "type"(): $UpgradeType<($BatteryUpgradeWrapper)>
get "inventoryColumnsTaken"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "batteryUpgradeConfig"(): $BatteryUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeItem$Type = ($BatteryUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeItem_ = $BatteryUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryPartitioner$SlotRange" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $InventoryPartitioner$SlotRange extends $Record {

constructor(firstSlot: integer, numberOfSlots: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "firstSlot"(): integer
public "numberOfSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryPartitioner$SlotRange$Type = ($InventoryPartitioner$SlotRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryPartitioner$SlotRange_ = $InventoryPartitioner$SlotRange$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BasicBackpackRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $BasicBackpackRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBackpackRecipe$Type = ($BasicBackpackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBackpackRecipe_ = $BasicBackpackRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$ToolSwapperUpgradeWrapper, $ToolSwapperUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ToolSwapperUpgradeItem extends $UpgradeItemBase<($ToolSwapperUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: boolean, arg1: boolean)

public "getType"(): $UpgradeType<($ToolSwapperUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "shouldSwapToolOnKeyPress"(): boolean
public "hasSettingsTab"(): boolean
get "type"(): $UpgradeType<($ToolSwapperUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapperUpgradeItem$Type = ($ToolSwapperUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapperUpgradeItem_ = $ToolSwapperUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$WoodStorageBlockItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StorageBlockItem, $StorageBlockItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageBlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WoodStorageBlockItem extends $StorageBlockItem {
static readonly "WOOD_TYPE_TAG": string
static readonly "PACKED_TAG": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public static "getDisplayName"(arg0: string, arg1: $WoodType$Type): $Component
public static "setPacked"(arg0: $ItemStack$Type, arg1: boolean): void
public "setAccentColor"(arg0: $ItemStack$Type, arg1: integer): void
public "setMainColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "setNumberOfInventorySlots"(arg0: $ItemStack$Type, arg1: integer): void
public static "setNumberOfUpgradeSlots"(arg0: $ItemStack$Type, arg1: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public static "isPacked"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "getWoodType"(arg0: $ItemStack$Type): $Optional<($WoodType)>
public static "setWoodType"(arg0: $ItemStack$Type, arg1: $WoodType$Type): $ItemStack
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodStorageBlockItem$Type = ($WoodStorageBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodStorageBlockItem_ = $WoodStorageBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BarrelMaterial$MaterialModelPart, $BarrelMaterial$MaterialModelPart$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial$MaterialModelPart"

export class $BarrelMaterial extends $Enum<($BarrelMaterial)> implements $StringRepresentable {
static readonly "SIDE": $BarrelMaterial
static readonly "SIDE_TRIM": $BarrelMaterial
static readonly "BOTTOM": $BarrelMaterial
static readonly "BOTTOM_TRIM": $BarrelMaterial
static readonly "TOP": $BarrelMaterial
static readonly "TOP_TRIM": $BarrelMaterial
static readonly "TOP_INNER_TRIM": $BarrelMaterial
static readonly "ALL": $BarrelMaterial
static readonly "ALL_TRIM": $BarrelMaterial
static readonly "ALL_BUT_TRIM": $BarrelMaterial
static readonly "TOP_ALL": $BarrelMaterial
static readonly "SIDE_ALL": $BarrelMaterial
static readonly "BOTTOM_ALL": $BarrelMaterial


public static "values"(): ($BarrelMaterial)[]
public static "valueOf"(arg0: string): $BarrelMaterial
public "getChildren"(): ($BarrelMaterial)[]
public static "getFillFromDefaults"(arg0: $BarrelMaterial$Type): $List<($BarrelMaterial)>
public "getMaterialModelPart"(): $BarrelMaterial$MaterialModelPart
public "getSerializedName"(): string
public static "fromName"(arg0: string): $BarrelMaterial
public "isLeaf"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "children"(): ($BarrelMaterial)[]
get "materialModelPart"(): $BarrelMaterial$MaterialModelPart
get "serializedName"(): string
get "leaf"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelMaterial$Type = (("all") | ("side") | ("bottom_trim") | ("top_all") | ("all_but_trim") | ("bottom") | ("top_trim") | ("top_inner_trim") | ("all_trim") | ("side_all") | ("top") | ("bottom_all") | ("side_trim")) | ($BarrelMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelMaterial_ = $BarrelMaterial$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockBase" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$IStorageBlock, $IStorageBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IStorageBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBase, $BlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$VerticalFacing, $VerticalFacing$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$VerticalFacing"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ISneakItemInteractionBlock, $ISneakItemInteractionBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ISneakItemInteractionBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StorageBlockBase extends $BlockBase implements $IStorageBlock, $ISneakItemInteractionBlock, $EntityBlock {
static readonly "TICKING": $BooleanProperty
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


public "getFacing"(arg0: $BlockState$Type): $Direction
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "setTicking"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): void
public "tryFillUpgrades"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $ItemStack$Type): boolean
public "getNeighborPos"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $BlockPos
public "getVerticalFacing"(arg0: $BlockState$Type): $VerticalFacing
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getNumberOfInventorySlots"(): integer
public "getDisplayItemsCount"(arg0: $List$Type<($RenderInfo$DisplayItem$Type)>): integer
public "hasFixedIndexDisplayItems"(): boolean
public "tryAddSingleUpgrade"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $StorageBlockEntity$Type, arg3: $ItemStack$Type): boolean
public "trySneakItemInteraction"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type, arg6: $ItemStack$Type): boolean
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $StorageBlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getNumberOfUpgradeSlots"(): integer
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getHorizontalDirection"(arg0: $BlockState$Type): $Direction
public "getBaseStackSizeMultiplier"(): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "numberOfInventorySlots"(): integer
get "numberOfUpgradeSlots"(): integer
get "baseStackSizeMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockBase$Type = ($StorageBlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageBlockBase_ = $StorageBlockBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$UpgradeNextTierRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$UpgradeNextTierRecipe, $UpgradeNextTierRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$UpgradeNextTierRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $UpgradeNextTierRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($UpgradeNextTierRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeNextTierRecipe$Serializer$Type = ($UpgradeNextTierRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeNextTierRecipe$Serializer_ = $UpgradeNextTierRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmokingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutoSmokingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $AutoCookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmokingUpgradeItem$Type = ($AutoSmokingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSmokingUpgradeItem_ = $AutoSmokingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BatteryUpgradeItem, $BatteryUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeItem"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo"
import {$IRenderedBatteryUpgrade, $IRenderedBatteryUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStackableContentsUpgrade, $IStackableContentsUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IStackableContentsUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $BatteryUpgradeWrapper extends $UpgradeWrapperBase<($BatteryUpgradeWrapper), ($BatteryUpgradeItem)> implements $IRenderedBatteryUpgrade, $IEnergyStorage, $ITickableUpgrade, $IStackableContentsUpgrade {
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_SLOT": integer
static readonly "ENERGY_STORED_TAG": string


public "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo$Type)>): void
public "getInventory"(): $IItemHandler
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getMinimumMultiplierRequired"(): integer
public "forceUpdateBatteryRenderInfo"(): void
public "getMaxEnergyStored"(): integer
public static "getEnergyStored"(arg0: $ItemStack$Type): integer
public "getEnergyStored"(): integer
public "canReceive"(): boolean
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "canExtract"(): boolean
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "canBeDisabled"(): boolean
set "batteryRenderInfoUpdateCallback"(value: $Consumer$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo$Type)>)
get "inventory"(): $IItemHandler
get "minimumMultiplierRequired"(): integer
get "maxEnergyStored"(): integer
get "energyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeWrapper$Type = ($BatteryUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeWrapper_ = $BatteryUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositFilterLogic" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DepositFilterType, $DepositFilterType$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositFilterType"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export class $DepositFilterLogic extends $FilterLogic {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer)

public "getDepositFilterType"(): $DepositFilterType
public "setInventory"(arg0: $IItemHandler$Type): void
public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "setDepositFilterType"(arg0: $DepositFilterType$Type): void
get "depositFilterType"(): $DepositFilterType
set "inventory"(value: $IItemHandler$Type)
set "depositFilterType"(value: $DepositFilterType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositFilterLogic$Type = ($DepositFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositFilterLogic_ = $DepositFilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/main/$MainSettingsCategory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MainSetting, $MainSetting$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$MainSetting"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISettingsCategory, $ISettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $MainSettingsCategory<T extends $MainSettingsCategory<(any)>> implements $ISettingsCategory<(T)> {
static readonly "NAME": string

constructor(arg0: $CompoundTag$Type, arg1: $Consumer$Type<($CompoundTag$Type)>, arg2: string)

public "deleteSlotSettingsFrom"(arg0: integer): void
public "isLargerThanNumberOfSlots"(arg0: integer): boolean
public "copyTo"(arg0: T, arg1: integer, arg2: integer): void
public "getPlayerSettingsTagName"(): string
public "getSettingValue"<S>(arg0: $MainSetting$Type<(S)>): $Optional<(S)>
public "setSettingValue"<S>(arg0: $MainSetting$Type<(S)>, arg1: S): void
public "reloadFrom"(arg0: $CompoundTag$Type): void
public "removeSetting"<S>(arg0: $MainSetting$Type<(S)>): void
public "overwriteWith"(arg0: T): void
get "playerSettingsTagName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainSettingsCategory$Type<T> = ($MainSettingsCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainSettingsCategory_<T> = $MainSettingsCategory$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/backpack/$BackpackItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IStashStorageItem$StashResult, $IStashStorageItem$StashResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IStashStorageItem, $IStashStorageItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BackpackBlock, $BackpackBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/backpack/$BackpackBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BackpackItem extends $ItemBase implements $IStashStorageItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $Supplier$Type<($BackpackBlock$Type)>)
constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $Supplier$Type<($BackpackBlock$Type)>, arg3: $UnaryOperator$Type<($Item$Properties$Type)>)

public "getInventoryTooltip"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "hasCustomEntity"(arg0: $ItemStack$Type): boolean
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "stash"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public "getNumberOfSlots"(): integer
public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getNumberOfUpgradeSlots"(): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getItemStashable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $IStashStorageItem$StashResult
public "tryPlace"(arg0: $Player$Type, arg1: $Direction$Type, arg2: $BlockPlaceContext$Type): $InteractionResult
get "numberOfSlots"(): integer
get "numberOfUpgradeSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackItem$Type = ($BackpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackItem_ = $BackpackItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic" {
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ContentsFilterType, $ContentsFilterType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MemorySettingsCategory, $MemorySettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/memory/$MemorySettingsCategory"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export class $ContentsFilterLogic extends $FilterLogic {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Supplier$Type<($InventoryHandler$Type)>, arg4: $MemorySettingsCategory$Type, arg5: string)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Supplier$Type<($InventoryHandler$Type)>, arg4: $MemorySettingsCategory$Type)

public "getFilterType"(): $ContentsFilterType
public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "setDepositFilterType"(arg0: $ContentsFilterType$Type): void
get "filterType"(): $ContentsFilterType
set "depositFilterType"(value: $ContentsFilterType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentsFilterLogic$Type = ($ContentsFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentsFilterLogic_ = $ContentsFilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmokingUpgradeWrapper" {
import {$SmokingUpgradeItem, $SmokingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmokingUpgradeItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper"
import {$SmokingRecipe, $SmokingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmokingRecipe"

export class $CookingUpgradeWrapper$SmokingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$SmokingUpgradeWrapper), ($SmokingUpgradeItem), ($SmokingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$SmokingUpgradeWrapper$Type = ($CookingUpgradeWrapper$SmokingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$SmokingUpgradeWrapper_ = $CookingUpgradeWrapper$SmokingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ControllerBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockBase, $BlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ISneakItemInteractionBlock, $ISneakItemInteractionBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ISneakItemInteractionBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ControllerBlock extends $BlockBase implements $ISneakItemInteractionBlock, $EntityBlock {
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "trySneakItemInteraction"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type, arg6: $ItemStack$Type): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlock$Type = ($ControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlock_ = $ControllerBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeItem$Wrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$JukeboxUpgradeItem, $JukeboxUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $JukeboxUpgradeItem$Wrapper extends $UpgradeWrapperBase<($JukeboxUpgradeItem$Wrapper), ($JukeboxUpgradeItem)> implements $ITickableUpgrade {


public "stop"(arg0: $LivingEntity$Type): void
public "play"(arg0: $LivingEntity$Type): void
public "play"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "isPlaying"(): boolean
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getDiscInventory"(): $IItemHandler
public "getDisc"(): $ItemStack
public "setDisc"(arg0: $ItemStack$Type): void
public "onBeforeRemoved"(): void
get "playing"(): boolean
get "discInventory"(): $IItemHandler
get "disc"(): $ItemStack
set "disc"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeItem$Wrapper$Type = ($JukeboxUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeItem$Wrapper_ = $JukeboxUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInventoryPartHandler" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$TriFunction, $TriFunction$Type} from "packages/org/apache/commons/lang3/function/$TriFunction"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IInventoryPartHandler {

 "getName"(): string
 "getSlots"(): integer
 "onInit"(): void
 "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
 "getStackInSlot"(arg0: integer, arg1: $IntFunction$Type<($ItemStack$Type)>): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: $BiConsumer$Type<(integer), ($ItemStack$Type)>): void
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean, arg3: $TriFunction$Type<(integer), ($ItemStack$Type), (boolean), ($ItemStack$Type)>): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "canBeReplaced"(): boolean
 "isFilterItem"(arg0: $Item$Type): boolean
 "getStackLimit"(arg0: integer, arg1: $ItemStack$Type): integer
 "getNoSortSlots"(): $Set<(integer)>
 "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
 "getFilterItem"(arg0: integer): $Item
 "isSlotAccessible"(arg0: integer): boolean
 "onSlotLimitChange"(): void
 "onSlotFilterChanged"(arg0: integer): void

(): string
}

export namespace $IInventoryPartHandler {
const EMPTY: $IInventoryPartHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryPartHandler$Type = ($IInventoryPartHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryPartHandler_ = $IInventoryPartHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmeltingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$CookingUpgradeWrapper$SmeltingUpgradeWrapper, $CookingUpgradeWrapper$SmeltingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmeltingUpgradeWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmeltingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $CookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmeltingUpgradeItem$Type = ($SmeltingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmeltingUpgradeItem_ = $SmeltingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeNoteParticleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $JukeboxUpgradeNoteParticleData extends $ParticleType<($JukeboxUpgradeNoteParticleData)> implements $ParticleOptions {
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($JukeboxUpgradeNoteParticleData)>

constructor()

public "getType"(): $JukeboxUpgradeNoteParticleData
public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "codec"(): $Codec<($JukeboxUpgradeNoteParticleData)>
get "type"(): $JukeboxUpgradeNoteParticleData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeNoteParticleData$Type = ($JukeboxUpgradeNoteParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeNoteParticleData_ = $JukeboxUpgradeNoteParticleData$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeWrapper" {
import {$IFluidHandlerItem, $IFluidHandlerItem$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem"
import {$IRenderedTankUpgrade, $IRenderedTankUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$TankUpgradeItem, $TankUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeItem"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStackableContentsUpgrade, $IStackableContentsUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IStackableContentsUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $TankUpgradeWrapper extends $UpgradeWrapperBase<($TankUpgradeWrapper), ($TankUpgradeItem)> implements $IRenderedTankUpgrade, $ITickableUpgrade, $IStackableContentsUpgrade {
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_SLOT": integer


public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): integer
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): $FluidStack
public "getInventory"(): $IItemHandler
public "getContents"(): $FluidStack
public static "getContents"(arg0: $ItemStack$Type): $FluidStack
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getMinimumMultiplierRequired"(): integer
public "fillHandler"(arg0: $IFluidHandlerItem$Type, arg1: $Consumer$Type<($ItemStack$Type)>): boolean
public "drainHandler"(arg0: $IFluidHandlerItem$Type, arg1: $Consumer$Type<($ItemStack$Type)>): boolean
public "getTankCapacity"(): integer
public "setTankRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedTankUpgrade$TankRenderInfo$Type)>): void
public "forceUpdateTankRenderInfo"(): void
public "canBeDisabled"(): boolean
get "inventory"(): $IItemHandler
get "contents"(): $FluidStack
get "minimumMultiplierRequired"(): integer
get "tankCapacity"(): integer
set "tankRenderInfoUpdateCallback"(value: $Consumer$Type<($IRenderedTankUpgrade$TankRenderInfo$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeWrapper$Type = ($TankUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeWrapper_ = $TankUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ToolSwapMode extends $Enum<($ToolSwapMode)> implements $StringRepresentable {
static readonly "ANY": $ToolSwapMode
static readonly "ONLY_TOOLS": $ToolSwapMode
static readonly "NO_SWAP": $ToolSwapMode


public static "values"(): ($ToolSwapMode)[]
public static "valueOf"(arg0: string): $ToolSwapMode
public "next"(): $ToolSwapMode
public "getSerializedName"(): string
public static "fromName"(arg0: string): $ToolSwapMode
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapMode$Type = (("no_swap") | ("only_tools") | ("any")) | ($ToolSwapMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapMode_ = $ToolSwapMode$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RenderInfo, $RenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$UpgradeHandler, $UpgradeHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeHandler"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$SortBy, $SortBy$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$SortBy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SettingsHandler, $SettingsHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$SettingsHandler"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"

export class $StorageWrapper implements $IStorageWrapper {
static readonly "CONTENTS_TAG": string


public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "sort"(): void
public "getDefaultNumberOfInventorySlots"(): integer
public "getDefaultNumberOfUpgradeSlots"(): integer
public "getInventoryHandler"(): $InventoryHandler
public "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$Type): void
public "getNumberOfSlotRows"(): integer
public "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
public "refreshInventoryForInputOutput"(): void
public "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
public "changeSize"(arg0: integer, arg1: integer): void
public "hasAccentColor"(): boolean
public "hasMainColor"(): boolean
public "setAccentColor"(arg0: integer): void
public "setMainColor"(arg0: integer): void
public "setContentsUuid"(arg0: $UUID$Type): void
public "refreshInventoryForUpgradeProcessing"(): void
public "setColors"(arg0: integer, arg1: integer): void
public "getNumberOfInventorySlots"(): integer
public "onContentsNbtUpdated"(): void
public "registerUpgradeDefaultsHandler"<T extends $IUpgradeWrapper>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "getMainColor"(): integer
public "getAccentColor"(): integer
public "setSaveHandler"(arg0: $Runnable$Type): void
public "getSettingsHandler"(): $SettingsHandler
public "getOpenTabId"(): $Optional<(integer)>
public "setSortBy"(arg0: $SortBy$Type): void
public "removeOpenTabId"(): void
public "setOpenTabId"(arg0: integer): void
public "getSortBy"(): $SortBy
public "setColumnsTaken"(arg0: integer, arg1: boolean): void
public "getColumnsTaken"(): integer
public "fillWithLoot"(arg0: $Player$Type): void
public "setPersistent"(arg0: boolean): void
public "getRenderInfo"(): $RenderInfo
public "getUpgradeHandler"(): $UpgradeHandler
public "getDisplayName"(): $Component
public "onInit"(): void
public "getBaseStackSizeMultiplier"(): integer
public "getWrappedStorageStack"(): $ItemStack
public "setInventorySlotChangeHandler"(arg0: $Runnable$Type): void
public "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
public "getEnergyStorage"(): $Optional<($IEnergyStorage)>
public "getStorageType"(): string
public "getContentsUuid"(): $Optional<($UUID)>
get "defaultNumberOfInventorySlots"(): integer
get "defaultNumberOfUpgradeSlots"(): integer
get "inventoryHandler"(): $InventoryHandler
set "upgradeCachesInvalidatedHandler"(value: $Runnable$Type)
get "numberOfSlotRows"(): integer
get "inventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
get "inventoryForInputOutput"(): $ITrackedContentsItemHandler
set "accentColor"(value: integer)
set "mainColor"(value: integer)
set "contentsUuid"(value: $UUID$Type)
get "numberOfInventorySlots"(): integer
get "mainColor"(): integer
get "accentColor"(): integer
set "saveHandler"(value: $Runnable$Type)
get "settingsHandler"(): $SettingsHandler
get "openTabId"(): $Optional<(integer)>
set "sortBy"(value: $SortBy$Type)
set "openTabId"(value: integer)
get "sortBy"(): $SortBy
get "columnsTaken"(): integer
set "persistent"(value: boolean)
get "renderInfo"(): $RenderInfo
get "upgradeHandler"(): $UpgradeHandler
get "displayName"(): $Component
get "baseStackSizeMultiplier"(): integer
get "wrappedStorageStack"(): $ItemStack
set "inventorySlotChangeHandler"(value: $Runnable$Type)
get "fluidHandler"(): $Optional<($IStorageFluidHandler)>
get "energyStorage"(): $Optional<($IEnergyStorage)>
get "storageType"(): string
get "contentsUuid"(): $Optional<($UUID)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageWrapper$Type = ($StorageWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageWrapper_ = $StorageWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$ShulkerBoxFromChestRecipe$Serializer" {
import {$ShulkerBoxFromChestRecipe, $ShulkerBoxFromChestRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$ShulkerBoxFromChestRecipe"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShulkerBoxFromChestRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($ShulkerBoxFromChestRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxFromChestRecipe$Serializer$Type = ($ShulkerBoxFromChestRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxFromChestRecipe$Serializer_ = $ShulkerBoxFromChestRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $RecipeWrapperSerializer<T extends $Recipe<(any)>, R extends ($Recipe<(any)>) & ($IWrapperRecipe<(T)>)> implements $RecipeSerializer<(R)> {

constructor(arg0: $Function$Type<(T), (R)>, arg1: $RecipeSerializer$Type<(T)>)

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: R): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): R
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): R
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeWrapperSerializer$Type<T, R> = ($RecipeWrapperSerializer<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeWrapperSerializer_<T, R> = $RecipeWrapperSerializer$Type<(T), (R)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeConfig" {
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $XpPumpUpgradeConfig {
readonly "maxXpPointsPerMending": $ForgeConfigSpec$IntValue
readonly "mendingOn": $ForgeConfigSpec$BooleanValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeConfig$Type = ($XpPumpUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeConfig_ = $XpPumpUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemHandlerSimpleInserter extends $IItemHandlerModifiable {

 "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "getSlots"(): integer
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlotLimit"(i: integer): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "isMutable"(): boolean
 "getStackInSlot"(arg0: integer): $ItemStack
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

export namespace $IItemHandlerSimpleInserter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerSimpleInserter$Type = ($IItemHandlerSimpleInserter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerSimpleInserter_ = $IItemHandlerSimpleInserter$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/hopper/$HopperUpgradeWrapper" {
import {$ContentsFilterLogic, $ContentsFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic"
import {$INeighborChangeListenerUpgrade, $INeighborChangeListenerUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/$INeighborChangeListenerUpgrade"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$HopperUpgradeItem, $HopperUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/hopper/$HopperUpgradeItem"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $HopperUpgradeWrapper extends $UpgradeWrapperBase<($HopperUpgradeWrapper), ($HopperUpgradeItem)> implements $ITickableUpgrade, $INeighborChangeListenerUpgrade {


public "deserialize"(): void
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getInputFilterLogic"(): $ContentsFilterLogic
public "onNeighborChange"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "setPushingTo"(arg0: $Direction$Type, arg1: boolean): void
public "isPullingFrom"(arg0: $Direction$Type): boolean
public "isPushingTo"(arg0: $Direction$Type): boolean
public "setPullingFrom"(arg0: $Direction$Type, arg1: boolean): void
public "initDirections"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "updateCacheOnSide"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "getOutputFilterLogic"(): $ContentsFilterLogic
get "inputFilterLogic"(): $ContentsFilterLogic
get "outputFilterLogic"(): $ContentsFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HopperUpgradeWrapper$Type = ($HopperUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HopperUpgradeWrapper_ = $HopperUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/$SettingsHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ISettingsCategory, $ISettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MainSettingsCategory, $MainSettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/main/$MainSettingsCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SettingsHandler {


public "getSettingsCategories"(): $Map<(string), ($ISettingsCategory<(any)>)>
public "getNbt"(): $CompoundTag
public "getGlobalSettingsCategory"(): $MainSettingsCategory<(any)>
public "getCategoriesThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "getTypeCategory"<T extends $ISettingsCategory<(any)>>(arg0: $Class$Type<(T)>): T
public "reloadFrom"(arg0: $CompoundTag$Type): void
public "instantiateGlobalSettingsCategory"(arg0: $CompoundTag$Type, arg1: $Consumer$Type<($CompoundTag$Type)>): $ISettingsCategory<(any)>
public "getGlobalSettingsCategoryName"(): string
get "settingsCategories"(): $Map<(string), ($ISettingsCategory<(any)>)>
get "nbt"(): $CompoundTag
get "globalSettingsCategory"(): $MainSettingsCategory<(any)>
get "globalSettingsCategoryName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsHandler$Type = ($SettingsHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsHandler_ = $SettingsHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ITickableUpgrade {

 "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void

(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
}

export namespace $ITickableUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableUpgrade$Type = ($ITickableUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableUpgrade_ = $ITickableUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$XpPumpUpgradeConfig, $XpPumpUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$XpPumpUpgradeWrapper, $XpPumpUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeWrapper"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $XpPumpUpgradeItem extends $UpgradeItemBase<($XpPumpUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($XpPumpUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $XpPumpUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($XpPumpUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getXpPumpUpgradeConfig"(): $XpPumpUpgradeConfig
get "type"(): $UpgradeType<($XpPumpUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "xpPumpUpgradeConfig"(): $XpPumpUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeItem$Type = ($XpPumpUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeItem_ = $XpPumpUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper" {
import {$RefillUpgradeWrapper$TargetSlot, $RefillUpgradeWrapper$TargetSlot$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper$TargetSlot"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$RefillUpgradeItem, $RefillUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBlockPickResponseUpgrade, $IBlockPickResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockPickResponseUpgrade"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RefillUpgradeWrapper extends $UpgradeWrapperBase<($RefillUpgradeWrapper), ($RefillUpgradeItem)> implements $IFilteredUpgrade, $ITickableUpgrade, $IBlockPickResponseUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "pickBlock"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "allowsTargetSlotSelection"(): boolean
public "getFilterLogic"(): $FilterLogic
public "setTargetSlot"(arg0: integer, arg1: $RefillUpgradeWrapper$TargetSlot$Type): void
public "getTargetSlots"(): $Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>
get "filterLogic"(): $FilterLogic
get "targetSlots"(): $Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeWrapper$Type = ($RefillUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeWrapper_ = $RefillUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageToolItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$StorageToolItem$Mode, $StorageToolItem$Mode$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageToolItem$Mode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageToolItem extends $ItemBase {
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

public static "getMode"(arg0: $ItemStack$Type): $StorageToolItem$Mode
public static "useOffHandOnPlaced"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getOverlayMessage"(arg0: $ItemStack$Type): $Component
public static "getControllerLink"(arg0: $ItemStack$Type): $Optional<($BlockPos)>
public static "cycleMode"(arg0: $ItemStack$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageToolItem$Type = ($StorageToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageToolItem_ = $StorageToolItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IAdditionalDropDataBlock" {
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IAdditionalDropDataBlock {

 "addDropData"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void

(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
}

export namespace $IAdditionalDropDataBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdditionalDropDataBlock$Type = ($IAdditionalDropDataBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdditionalDropDataBlock_ = $IAdditionalDropDataBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade" {
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export interface $IFilteredUpgrade {

 "getFilterLogic"(): $FilterLogic

(): $FilterLogic
}

export namespace $IFilteredUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilteredUpgrade$Type = ($IFilteredUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilteredUpgrade_ = $IFilteredUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockToolSwapUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBlockToolSwapUpgrade {

 "onBlockInteract"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): boolean
 "canProcessBlockInteract"(): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): boolean
}

export namespace $IBlockToolSwapUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockToolSwapUpgrade$Type = ($IBlockToolSwapUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockToolSwapUpgrade_ = $IBlockToolSwapUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgrade" {
import {$CookingLogic, $CookingLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"

export interface $ICookingUpgrade<T extends $AbstractCookingRecipe> {

 "getCookingLogic"(): $CookingLogic<(T)>

(): $CookingLogic<(T)>
}

export namespace $ICookingUpgrade {
const UPGRADE_GROUP: $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICookingUpgrade$Type<T> = ($ICookingUpgrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICookingUpgrade_<T> = $ICookingUpgrade$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $BlockBase extends $Block {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBase$Type = ($BlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBase_ = $BlockBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DepositFilterLogic, $DepositFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositFilterLogic"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$IItemHandlerInteractionUpgrade, $IItemHandlerInteractionUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IItemHandlerInteractionUpgrade"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DepositUpgradeItem, $DepositUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $DepositUpgradeWrapper extends $UpgradeWrapperBase<($DepositUpgradeWrapper), ($DepositUpgradeItem)> implements $IFilteredUpgrade, $IItemHandlerInteractionUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getFilterLogic"(): $DepositFilterLogic
public "onHandlerInteract"(arg0: $IItemHandler$Type, arg1: $Player$Type): void
get "filterLogic"(): $DepositFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositUpgradeWrapper$Type = ($DepositUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositUpgradeWrapper_ = $DepositUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper" {
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$ICookingUpgrade, $ICookingUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgrade"
import {$CookingLogic, $CookingLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $CookingUpgradeWrapper<W extends $CookingUpgradeWrapper<(W), (U), (R)>, U extends ($UpgradeItemBase<(W)>) & ($ICookingUpgradeItem), R extends $AbstractCookingRecipe> extends $UpgradeWrapperBase<(W), (U)> implements $ITickableUpgrade, $ICookingUpgrade<(R)> {


public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "setEnabled"(arg0: boolean): void
public "onBeforeRemoved"(): void
public "getCookingLogic"(): $CookingLogic<(R)>
set "enabled"(value: boolean)
get "cookingLogic"(): $CookingLogic<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$Type<W, U, R> = ($CookingUpgradeWrapper<(W), (U), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper_<W, U, R> = $CookingUpgradeWrapper$Type<(W), (U), (R)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BasicBackpackRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$BasicBackpackRecipe, $BasicBackpackRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BasicBackpackRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BasicBackpackRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($BasicBackpackRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBackpackRecipe$Serializer$Type = ($BasicBackpackRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBackpackRecipe$Serializer_ = $BasicBackpackRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ControllerBlockEntityBase" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ControllerBlockEntityBase extends $BlockEntity implements $IItemHandlerSimpleInserter {
static readonly "SEARCH_RANGE": integer
 "blockState": $BlockState


public "onLoad"(): void
public "getSlots"(): integer
public "getSlots"(arg0: integer): integer
public "setStorageFilterItems"(arg0: $BlockPos$Type, arg1: $Set$Type<($Item$Type)>): void
public "removeStorageMemorizedStack"(arg0: $BlockPos$Type, arg1: integer): void
public "addStorageMemorizedStack"(arg0: $BlockPos$Type, arg1: integer): void
public "addStorageStacksAndRegisterListeners"(arg0: $BlockPos$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "removeLinkedBlock"(arg0: $BlockPos$Type): void
public "addLinkedBlock"(arg0: $BlockPos$Type): boolean
public "removeStorageMemorizedItem"(arg0: $BlockPos$Type, arg1: $Item$Type): void
public "addStorageMemorizedItem"(arg0: $BlockPos$Type, arg1: $Item$Type): void
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onChunkUnloaded"(): void
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "removeStorageWithEmptySlots"(arg0: $BlockPos$Type): void
public "addStorageWithEmptySlots"(arg0: $BlockPos$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "updateEmptySlots"(arg0: $BlockPos$Type, arg1: boolean): void
public "changeSlots"(arg0: $BlockPos$Type, arg1: integer, arg2: boolean): void
public "removeStorage"(arg0: $BlockPos$Type): void
public "removeStorageStack"(arg0: $BlockPos$Type, arg1: $ItemStackKey$Type): void
public "addStorageStack"(arg0: $BlockPos$Type, arg1: $ItemStackKey$Type): void
public "addStorage"(arg0: $BlockPos$Type): void
public "isStorageConnected"(arg0: $BlockPos$Type): boolean
public "getLinkedBlocks"(): $Set<($BlockPos)>
public "detachFromStoragesAndUnlinkBlocks"(): void
public "searchAndAddBoundables"(): void
public "getStoragePositions"(): $List<($BlockPos)>
public "removeNonConnectingBlock"(arg0: $BlockPos$Type): void
public "removeStorageStacks"(arg0: $BlockPos$Type): void
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlotLimit"(i: integer): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "isMutable"(): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "setChanged"(): void
public "asContainer"(): $Container
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getHeight"(): integer
public "getWidth"(): integer
public "clear"(ingredient: $Ingredient$Type): void
public "clear"(): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "isEmpty"(): boolean
get "slots"(): integer
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "linkedBlocks"(): $Set<($BlockPos)>
get "storagePositions"(): $List<($BlockPos)>
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlockEntityBase$Type = ($ControllerBlockEntityBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlockEntityBase_ = $ControllerBlockEntityBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial$MaterialModelPart" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BarrelMaterial$MaterialModelPart extends $Enum<($BarrelMaterial$MaterialModelPart)> {
static readonly "BOTH": $BarrelMaterial$MaterialModelPart
static readonly "TRIM": $BarrelMaterial$MaterialModelPart
static readonly "CORE": $BarrelMaterial$MaterialModelPart


public static "values"(): ($BarrelMaterial$MaterialModelPart)[]
public static "valueOf"(arg0: string): $BarrelMaterial$MaterialModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelMaterial$MaterialModelPart$Type = (("core") | ("trim") | ("both")) | ($BarrelMaterial$MaterialModelPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelMaterial$MaterialModelPart_ = $BarrelMaterial$MaterialModelPart$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeWrapper" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$StonecutterUpgradeItem, $StonecutterUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeItem"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $StonecutterUpgradeWrapper extends $UpgradeWrapperBase<($StonecutterUpgradeWrapper), ($StonecutterUpgradeItem)> {


public "shouldShiftClickIntoStorage"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "setRecipeId"(arg0: $ResourceLocation$Type): void
public "getInputInventory"(): $IItemHandlerModifiable
public "getRecipeId"(): $Optional<($ResourceLocation)>
public "canBeDisabled"(): boolean
set "shiftClickIntoStorage"(value: boolean)
set "recipeId"(value: $ResourceLocation$Type)
get "inputInventory"(): $IItemHandlerModifiable
get "recipeId"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterUpgradeWrapper$Type = ($StonecutterUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StonecutterUpgradeWrapper_ = $StonecutterUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StackUpgradeItem$Wrapper, $StackUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem$Wrapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StackUpgradeItem extends $UpgradeItemBase<($StackUpgradeItem$Wrapper)> {
static readonly "TYPE": $UpgradeType<($StackUpgradeItem$Wrapper)>
static readonly "UPGRADE_GROUP": $UpgradeGroup
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: double, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($StackUpgradeItem$Wrapper)>
public static "getInventorySlotLimit"(arg0: $IStorageWrapper$Type): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
public "getUpgradeGroup"(): $UpgradeGroup
public "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
get "type"(): $UpgradeType<($StackUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackUpgradeItem$Type = ($StackUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackUpgradeItem_ = $StackUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase" {
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"

export class $UpgradeWrapperBase<W extends $IUpgradeWrapper, T extends $UpgradeItemBase<(W)>> implements $IUpgradeWrapper {


public "isEnabled"(): boolean
public "setEnabled"(arg0: boolean): void
public "getUpgradeStack"(): $ItemStack
public "isInCooldown"(arg0: $Level$Type): boolean
public "getCooldownTime"(): long
public "onAdded"(): void
public "onBeforeRemoved"(): void
public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
get "enabled"(): boolean
set "enabled"(value: boolean)
get "upgradeStack"(): $ItemStack
get "cooldownTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeWrapperBase$Type<W, T> = ($UpgradeWrapperBase<(W), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeWrapperBase_<W, T> = $UpgradeWrapperBase$Type<(W), (T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StorageTierUpgradeItem$TierUpgrade, $StorageTierUpgradeItem$TierUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$TierUpgrade"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageTierUpgradeItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $StorageTierUpgradeItem$TierUpgrade$Type)
constructor(arg0: $StorageTierUpgradeItem$TierUpgrade$Type, arg1: boolean)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "tryUpgradeStorage"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $Player$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$Type = ($StorageTierUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeItem_ = $StorageTierUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WoodStorageBlockBase, $WoodStorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$WoodStorageBlockBase"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockFamily, $BlockFamily$Type} from "packages/net/minecraft/data/$BlockFamily"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BarrelBlock extends $WoodStorageBlockBase {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "FLAT_TOP": $BooleanProperty
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "TICKING": $BooleanProperty
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

constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>, arg2: $BlockBehaviour$Properties$Type)
constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>, arg2: $BlockBehaviour$Properties$Type, arg3: $Function$Type<($StateDefinition$Type<($Block$Type), ($BlockState$Type)>), ($BlockState$Type)>)

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getFacing"(arg0: $BlockState$Type): $Direction
public "addDropData"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
public "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $StorageBlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelBlock$Type = ($BarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelBlock_ = $BarrelBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$WoodStorageBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $WoodStorageBlockEntity extends $StorageBlockEntity {
static readonly "STORAGE_WRAPPER_TAG": string
 "blockState": $BlockState


public "getDisplayName"(): $Component
public "shouldDropContents"(): boolean
public "canBeLinked"(): boolean
public "setPacked"(arg0: boolean): void
public "getStorageContentsTag"(): $CompoundTag
public "loadSynchronizedData"(arg0: $CompoundTag$Type): void
public "isPacked"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getWoodType"(): $Optional<($WoodType)>
public "canConnectStorages"(): boolean
public "canBeConnected"(): boolean
public "setWoodType"(arg0: $WoodType$Type): void
get "displayName"(): $Component
set "packed"(value: boolean)
get "storageContentsTag"(): $CompoundTag
get "packed"(): boolean
get "woodType"(): $Optional<($WoodType)>
set "woodType"(value: $WoodType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodStorageBlockEntity$Type = ($WoodStorageBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodStorageBlockEntity_ = $WoodStorageBlockEntity$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ContentsFilterType extends $Enum<($ContentsFilterType)> implements $StringRepresentable {
static readonly "ALLOW": $ContentsFilterType
static readonly "BLOCK": $ContentsFilterType
static readonly "STORAGE": $ContentsFilterType


public static "values"(): ($ContentsFilterType)[]
public static "valueOf"(arg0: string): $ContentsFilterType
public "next"(): $ContentsFilterType
public "getSerializedName"(): string
public static "fromName"(arg0: string): $ContentsFilterType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentsFilterType$Type = (("allow") | ("block") | ("storage")) | ($ContentsFilterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentsFilterType_ = $ContentsFilterType$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$TierUpgradeDefinition" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StorageBlockBase, $StorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockBase"

export class $StorageTierUpgradeItem$TierUpgradeDefinition<B extends $BlockEntity> {


public "newBlock"(): $StorageBlockBase
public "getPropertiesToCopy"(): $List<($Property<(any)>)>
public "isUpgradingBlocked"(): $Predicate<(B)>
public "getCountRequired"(arg0: $BlockState$Type): integer
public "blockEntityClass"(): $Class<(B)>
get "propertiesToCopy"(): $List<($Property<(any)>)>
get "upgradingBlocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$TierUpgradeDefinition$Type<B> = ($StorageTierUpgradeItem$TierUpgradeDefinition<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeItem$TierUpgradeDefinition_<B> = $StorageTierUpgradeItem$TierUpgradeDefinition$Type<(B)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper" {
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$CookingLogic, $CookingLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ICookingUpgrade, $ICookingUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgrade"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $AutoCookingUpgradeWrapper<W extends $AutoCookingUpgradeWrapper<(W), (U), (R)>, U extends ($UpgradeItemBase<(W)>) & ($IAutoCookingUpgradeItem), R extends $AbstractCookingRecipe> extends $UpgradeWrapperBase<(W), (U)> implements $ITickableUpgrade, $ICookingUpgrade<(R)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>, arg3: $RecipeType$Type<(R)>, arg4: float)

public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getInputFilterLogic"(): $FilterLogic
public "getFuelFilterLogic"(): $FilterLogic
public "setEnabled"(arg0: boolean): void
public "onBeforeRemoved"(): void
public "getCookingLogic"(): $CookingLogic<(R)>
get "inputFilterLogic"(): $FilterLogic
get "fuelFilterLogic"(): $FilterLogic
set "enabled"(value: boolean)
get "cookingLogic"(): $CookingLogic<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$Type<W, U, R> = ($AutoCookingUpgradeWrapper<(W), (U), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper_<W, U, R> = $AutoCookingUpgradeWrapper$Type<(W), (U), (R)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeWrapper" {
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$ContentsFilterLogic, $ContentsFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IItemHandlerInteractionUpgrade, $IItemHandlerInteractionUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IItemHandlerInteractionUpgrade"
import {$RestockUpgradeItem, $RestockUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $RestockUpgradeWrapper extends $UpgradeWrapperBase<($RestockUpgradeWrapper), ($RestockUpgradeItem)> implements $IContentsFilteredUpgrade, $IItemHandlerInteractionUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getFilterLogic"(): $ContentsFilterLogic
public "onHandlerInteract"(arg0: $IItemHandler$Type, arg1: $Player$Type): void
get "filterLogic"(): $ContentsFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestockUpgradeWrapper$Type = ($RestockUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestockUpgradeWrapper_ = $RestockUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeWrapper" {
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$IUpgradeAccessModifier, $IUpgradeAccessModifier$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeAccessModifier"
import {$IEnergyStorageUpgradeWrapper, $IEnergyStorageUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEnergyStorageUpgradeWrapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InventoryOrder, $InventoryOrder$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InventoryOrder"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"
import {$IInventoryWrapperUpgrade, $IInventoryWrapperUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IInventoryWrapperUpgrade"
import {$IUpgradeWrapperAccessor, $IUpgradeWrapperAccessor$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapperAccessor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFluidHandlerWrapperUpgrade, $IFluidHandlerWrapperUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IFluidHandlerWrapperUpgrade"
import {$InceptionUpgradeItem, $InceptionUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeItem"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $InceptionUpgradeWrapper extends $UpgradeWrapperBase<($InceptionUpgradeWrapper), ($InceptionUpgradeItem)> implements $IInventoryWrapperUpgrade, $IUpgradeAccessModifier, $IFluidHandlerWrapperUpgrade, $IEnergyStorageUpgradeWrapper {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "hideSettingsTab"(): boolean
public "getInventoryOrder"(): $InventoryOrder
public "setInventoryOrder"(arg0: $InventoryOrder$Type): void
public "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$Type): $IUpgradeWrapperAccessor
public "wrapStorage"(arg0: $IEnergyStorage$Type): $IEnergyStorage
public "wrapHandler"(arg0: $IStorageFluidHandler$Type, arg1: $ItemStack$Type): $IStorageFluidHandler
public "wrapInventory"(arg0: $ITrackedContentsItemHandler$Type): $ITrackedContentsItemHandler
get "inventoryOrder"(): $InventoryOrder
set "inventoryOrder"(value: $InventoryOrder$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InceptionUpgradeWrapper$Type = ($InceptionUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InceptionUpgradeWrapper_ = $InceptionUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$AutomationDirection" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AutomationDirection extends $Enum<($AutomationDirection)> implements $StringRepresentable {
static readonly "INPUT": $AutomationDirection
static readonly "OUTPUT": $AutomationDirection
static readonly "OFF": $AutomationDirection


public static "values"(): ($AutomationDirection)[]
public static "valueOf"(arg0: string): $AutomationDirection
public "next"(): $AutomationDirection
public "getSerializedName"(): string
public static "fromName"(arg0: string): $AutomationDirection
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomationDirection$Type = (("output") | ("input") | ("off")) | ($AutomationDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomationDirection_ = $AutomationDirection$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$ShulkerBoxItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IStashStorageItem$StashResult, $IStashStorageItem$StashResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IStashStorageItem, $IStashStorageItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StorageBlockItem, $StorageBlockItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageBlockItem"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShulkerBoxItem extends $StorageBlockItem implements $IStashStorageItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type)
constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getInventoryTooltip"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getNumberOfInventorySlots"(arg0: $ItemStack$Type): integer
public "setNumberOfInventorySlots"(arg0: $ItemStack$Type, arg1: integer): void
public "setNumberOfUpgradeSlots"(arg0: $ItemStack$Type, arg1: integer): void
public "onDestroyed"(arg0: $ItemEntity$Type): void
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "stash"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getNumberOfUpgradeSlots"(arg0: $ItemStack$Type): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getItemStashable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $IStashStorageItem$StashResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxItem$Type = ($ShulkerBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxItem_ = $ShulkerBoxItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $StorageTierUpgradeRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeRecipe$Type = ($StorageTierUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeRecipe_ = $StorageTierUpgradeRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/$INeighborChangeListenerUpgrade" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $INeighborChangeListenerUpgrade {

 "onNeighborChange"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
}

export namespace $INeighborChangeListenerUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INeighborChangeListenerUpgrade$Type = ($INeighborChangeListenerUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INeighborChangeListenerUpgrade_ = $INeighborChangeListenerUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $ISettingsCategory<T extends $ISettingsCategory<(any)>> {

 "deleteSlotSettingsFrom"(arg0: integer): void
 "isLargerThanNumberOfSlots"(arg0: integer): boolean
 "copyTo"(arg0: T, arg1: integer, arg2: integer): void
 "reloadFrom"(arg0: $CompoundTag$Type): void
 "overwriteWith"(arg0: T): void
}

export namespace $ISettingsCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingsCategory$Type<T> = ($ISettingsCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingsCategory_<T> = $ISettingsCategory$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $TankUpgradeConfig {
readonly "capacityPerSlotRow": $ForgeConfigSpec$IntValue
readonly "stackMultiplierRatio": $ForgeConfigSpec$DoubleValue
readonly "autoFillDrainContainerCooldown": $ForgeConfigSpec$IntValue
readonly "maxInputOutput": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeConfig$Type = ($TankUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeConfig_ = $TankUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ISlotTracker, $ISlotTracker$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$InventoryPartitioner, $InventoryPartitioner$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryPartitioner"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"

export class $InventoryHandler extends $ItemStackHandler implements $ITrackedContentsItemHandler {
static readonly "INVENTORY_TAG": string


public "insertItemOnlyToSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "getInternalSlotLimit"(arg0: integer): integer
public "setSlotStack"(arg0: integer, arg1: $ItemStack$Type): void
public "setSize"(arg0: integer): void
public "unregisterFilterItemsChangeListener"(): void
public "addListener"(arg0: $IntConsumer$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "onInit"(): void
public "getFilterItems"(): $Set<($Item)>
public "getStackSizeMultiplier"(): double
public "getStackInSlot"(arg0: integer): $ItemStack
public "onContentsChanged"(arg0: integer): void
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "validateSlotIndex"(arg0: integer): void
public "getInventoryPartitioner"(): $InventoryPartitioner
public "getSlotTracker"(): $ISlotTracker
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$Type): void
public "unregisterStackKeyListeners"(): void
public "registerFilterItemsChangeListener"(arg0: $Consumer$Type<($Set$Type<($Item$Type)>)>): void
public "registerTrackingListeners"(arg0: $Consumer$Type<($ItemStackKey$Type)>, arg1: $Consumer$Type<($ItemStackKey$Type)>, arg2: $Runnable$Type, arg3: $Runnable$Type): void
public "getSlotStack"(arg0: integer): $ItemStack
public "setPersistent"(arg0: boolean): void
public "saveInventory"(): void
public "isFilterItem"(arg0: $Item$Type): boolean
public "getStackLimit"(arg0: integer, arg1: $ItemStack$Type): integer
public "hasEmptySlots"(): boolean
public "changeSlots"(arg0: integer): void
public "getNoSortSlots"(): $Set<(integer)>
public "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
public "getBaseStackLimit"(arg0: $ItemStack$Type): integer
public "getFilterItem"(arg0: integer): $Item
public "isSlotAccessible"(arg0: integer): boolean
public "getTrackedStacks"(): $Set<($ItemStackKey)>
public "clearListeners"(): void
public "getBaseSlotLimit"(): integer
public "copyStacksTo"(arg0: $InventoryHandler$Type): void
public "initFilterItems"(): void
public "onSlotFilterChanged"(arg0: integer): void
public "triggerOnChangeListeners"(arg0: integer): void
public "extractItemInternal"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "onFilterItemsChanged"(): void
public "setBaseSlotLimit"(arg0: integer): void
set "size"(value: integer)
get "filterItems"(): $Set<($Item)>
get "stackSizeMultiplier"(): double
get "inventoryPartitioner"(): $InventoryPartitioner
get "slotTracker"(): $ISlotTracker
set "shouldInsertIntoEmpty"(value: $BooleanSupplier$Type)
set "persistent"(value: boolean)
get "noSortSlots"(): $Set<(integer)>
get "trackedStacks"(): $Set<($ItemStackKey)>
get "baseSlotLimit"(): integer
set "baseSlotLimit"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryHandler$Type = ($InventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryHandler_ = $InventoryHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockClickResponseUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBlockClickResponseUpgrade {

 "onBlockClick"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean

(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
}

export namespace $IBlockClickResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockClickResponseUpgrade$Type = ($IBlockClickResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockClickResponseUpgrade_ = $IBlockClickResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$FluidFilterLogic" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FluidFilterLogic {

constructor(arg0: integer, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getFluid"(arg0: integer): $FluidStack
public "getNumberOfFluidFilters"(): integer
public "setFluid"(arg0: integer, arg1: $FluidStack$Type): void
public "fluidMatches"(arg0: $FluidStack$Type): boolean
get "numberOfFluidFilters"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFilterLogic$Type = ($FluidFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFilterLogic_ = $FluidFilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$ItemDisplayRenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem"

export class $RenderInfo$ItemDisplayRenderInfo {

constructor()

public "getInaccessibleSlots"(): $List<(integer)>
public static "deserialize"(arg0: $CompoundTag$Type): $RenderInfo$ItemDisplayRenderInfo
public "serialize"(): $CompoundTag
public "getDisplayItems"(): $List<($RenderInfo$DisplayItem)>
public "getDisplayItem"(): $Optional<($RenderInfo$DisplayItem)>
get "inaccessibleSlots"(): $List<(integer)>
get "displayItems"(): $List<($RenderInfo$DisplayItem)>
get "displayItem"(): $Optional<($RenderInfo$DisplayItem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$ItemDisplayRenderInfo$Type = ($RenderInfo$ItemDisplayRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo$ItemDisplayRenderInfo_ = $RenderInfo$ItemDisplayRenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IFluidHandlerWrapperUpgrade" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"

export interface $IFluidHandlerWrapperUpgrade {

 "wrapHandler"(arg0: $IStorageFluidHandler$Type, arg1: $ItemStack$Type): $IStorageFluidHandler

(arg0: $IStorageFluidHandler$Type, arg1: $ItemStack$Type): $IStorageFluidHandler
}

export namespace $IFluidHandlerWrapperUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandlerWrapperUpgrade$Type = ($IFluidHandlerWrapperUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandlerWrapperUpgrade_ = $IFluidHandlerWrapperUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$FilterItemStackHandler" {
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterItemStackHandler extends $ItemStackHandler {

constructor(arg0: integer)

public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "hasOnlyEmptyFilters"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItemStackHandler$Type = ($FilterItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterItemStackHandler_ = $FilterItemStackHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IStashStorageItem$StashResult extends $Enum<($IStashStorageItem$StashResult)> {
static readonly "MATCH_AND_SPACE": $IStashStorageItem$StashResult
static readonly "SPACE": $IStashStorageItem$StashResult
static readonly "NO_SPACE": $IStashStorageItem$StashResult


public static "values"(): ($IStashStorageItem$StashResult)[]
public static "valueOf"(arg0: string): $IStashStorageItem$StashResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStashStorageItem$StashResult$Type = (("match_and_space") | ("no_space") | ("space")) | ($IStashStorageItem$StashResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStashStorageItem$StashResult_ = $IStashStorageItem$StashResult$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogicBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$PrimaryMatch, $PrimaryMatch$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$PrimaryMatch"

export class $FilterLogicBase {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: string)

public "setAllowList"(arg0: boolean): void
public "setMatchDurability"(arg0: boolean): void
public "getParentTagKey"(): string
public "removeTagName"(arg0: $TagKey$Type<($Item$Type)>): void
public "setPrimaryMatch"(arg0: $PrimaryMatch$Type): void
public "shouldMatchAnyTag"(): boolean
public "setMatchAnyTag"(arg0: boolean): void
public "setMatchNbt"(arg0: boolean): void
public "shouldMatchDurability"(): boolean
public "isAllowList"(): boolean
public "addTag"(arg0: $TagKey$Type<($Item$Type)>): void
public "getTagKeys"(): $Set<($TagKey<($Item)>)>
public "getPrimaryMatch"(): $PrimaryMatch
public "setAllowByDefault"(arg0: boolean): void
public "shouldMatchNbt"(): boolean
public "stackMatchesFilter"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
set "allowList"(value: boolean)
set "matchDurability"(value: boolean)
get "parentTagKey"(): string
set "primaryMatch"(value: $PrimaryMatch$Type)
set "matchAnyTag"(value: boolean)
set "matchNbt"(value: boolean)
get "allowList"(): boolean
get "tagKeys"(): $Set<($TagKey<($Item)>)>
get "primaryMatch"(): $PrimaryMatch
set "allowByDefault"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogicBase$Type = ($FilterLogicBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogicBase_ = $FilterLogicBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IPickupResponseUpgrade" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPickupResponseUpgrade {

 "pickup"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack

(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
}

export namespace $IPickupResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPickupResponseUpgrade$Type = ($IPickupResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPickupResponseUpgrade_ = $IPickupResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeAccessModifier" {
import {$IUpgradeWrapperAccessor, $IUpgradeWrapperAccessor$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapperAccessor"

export interface $IUpgradeAccessModifier {

 "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$Type): $IUpgradeWrapperAccessor

(arg0: $IUpgradeWrapperAccessor$Type): $IUpgradeWrapperAccessor
}

export namespace $IUpgradeAccessModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeAccessModifier$Type = ($IUpgradeAccessModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeAccessModifier_ = $IUpgradeAccessModifier$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$CraftingUpgradeWrapper, $CraftingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CraftingUpgradeItem extends $UpgradeItemBase<($CraftingUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($CraftingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($CraftingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUpgradeItem$Type = ($CraftingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingUpgradeItem_ = $CraftingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IInventoryWrapperUpgrade" {
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"

export interface $IInventoryWrapperUpgrade {

 "wrapInventory"(arg0: $ITrackedContentsItemHandler$Type): $ITrackedContentsItemHandler

(arg0: $ITrackedContentsItemHandler$Type): $ITrackedContentsItemHandler
}

export namespace $IInventoryWrapperUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryWrapperUpgrade$Type = ($IInventoryWrapperUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryWrapperUpgrade_ = $IInventoryWrapperUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$BarrelBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BarrelMaterial, $BarrelMaterial$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WoodStorageBlockItem, $WoodStorageBlockItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$WoodStorageBlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BarrelBlockItem extends $WoodStorageBlockItem {
static readonly "WOOD_TYPE_TAG": string
static readonly "PACKED_TAG": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type)
constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "isTintable"(arg0: $ItemStack$Type): boolean
public static "setMaterials"(arg0: $ItemStack$Type, arg1: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>): void
public static "setFlatTop"(arg0: $ItemStack$Type, arg1: boolean): void
public static "removeMaterials"(arg0: $ItemStack$Type): void
public static "toggleFlatTop"(arg0: $ItemStack$Type): void
public static "isFlatTop"(arg0: $ItemStack$Type): boolean
public "getName"(arg0: $ItemStack$Type): $Component
public static "getMaterials"(arg0: $ItemStack$Type): $Map<($BarrelMaterial), ($ResourceLocation)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelBlockItem$Type = ($BarrelBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelBlockItem_ = $BarrelBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmeltingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutoSmeltingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $AutoCookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmeltingUpgradeItem$Type = ($AutoSmeltingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSmeltingUpgradeItem_ = $AutoSmeltingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$UpgradeNextTierRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $UpgradeNextTierRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeNextTierRecipe$Type = ($UpgradeNextTierRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeNextTierRecipe_ = $UpgradeNextTierRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ILinkable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ControllerBlockEntityBase"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IControllerBoundable, $IControllerBoundable$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$IControllerBoundable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILinkable extends $IControllerBoundable {

 "connectLinkedSelf"(): boolean
 "linkToController"(arg0: $BlockPos$Type): void
 "setNotLinked"(): void
 "canBeLinked"(): boolean
 "unlinkFromController"(): void
 "getConnectablePositions"(): $Set<($BlockPos)>
 "isLinked"(): boolean
 "setControllerPos"(arg0: $BlockPos$Type): void
 "getControllerPos"(): $Optional<($BlockPos)>
 "getStorageBlockLevel"(): $Level
 "unregisterController"(): void
 "removeControllerPos"(): void
 "addToAdjacentController"(): void
 "registerController"(arg0: $ControllerBlockEntityBase$Type): void
 "loadControllerPos"(arg0: $CompoundTag$Type): void
 "canConnectStorages"(): boolean
 "saveControllerPos"(arg0: $CompoundTag$Type): void
 "getStorageBlockPos"(): $BlockPos
 "addToController"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "runOnController"(arg0: $Level$Type, arg1: $Consumer$Type<($ControllerBlockEntityBase$Type)>): void
 "canBeConnected"(): boolean
}

export namespace $ILinkable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILinkable$Type = ($ILinkable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILinkable_ = $ILinkable$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$ISlotTracker$IItemHandlerInserter, $ISlotTracker$IItemHandlerInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker$IItemHandlerInserter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $ISlotTracker {

 "getPartialStacks"(): $Set<($ItemStackKey)>
 "getFullStacks"(): $Set<($ItemStackKey)>
 "clear"(): void
 "registerListeners"(arg0: $Consumer$Type<($ItemStackKey$Type)>, arg1: $Consumer$Type<($ItemStackKey$Type)>, arg2: $Runnable$Type, arg3: $Runnable$Type): void
 "getItems"(): $Set<($Item)>
 "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$Type): void
 "unregisterStackKeyListeners"(): void
 "hasEmptySlots"(): boolean
 "removeAndSetSlotIndexes"(arg0: $InventoryHandler$Type, arg1: integer, arg2: $ItemStack$Type): void
 "insertItemIntoHandler"(arg0: $InventoryHandler$Type, arg1: $ISlotTracker$IItemHandlerInserter$Type, arg2: $UnaryOperator$Type<($ItemStack$Type)>, arg3: $ItemStack$Type, arg4: boolean): $ItemStack
 "insertItemIntoHandler"(arg0: $InventoryHandler$Type, arg1: $ISlotTracker$IItemHandlerInserter$Type, arg2: $UnaryOperator$Type<($ItemStack$Type)>, arg3: integer, arg4: $ItemStack$Type, arg5: boolean): $ItemStack
 "refreshSlotIndexesFrom"(arg0: $InventoryHandler$Type): void
}

export namespace $ISlotTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$Type = ($ISlotTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotTracker_ = $ISlotTracker$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockPickResponseUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBlockPickResponseUpgrade {

 "pickBlock"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean

(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
}

export namespace $IBlockPickResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockPickResponseUpgrade$Type = ($IBlockPickResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockPickResponseUpgrade_ = $IBlockPickResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$IStashStorageItem$StashResult, $IStashStorageItem$StashResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IStashStorageItem {

 "getInventoryTooltip"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
 "stash"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
 "getItemStashable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $IStashStorageItem$StashResult
}

export namespace $IStashStorageItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStashStorageItem$Type = ($IStashStorageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStashStorageItem_ = $IStashStorageItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$ISlotChangeResponseUpgrade" {
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $ISlotChangeResponseUpgrade {

 "onSlotChange"(arg0: $IItemHandler$Type, arg1: integer): void

(arg0: $IItemHandler$Type, arg1: integer): void
}

export namespace $ISlotChangeResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotChangeResponseUpgrade$Type = ($ISlotChangeResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotChangeResponseUpgrade_ = $ISlotChangeResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeWrapper" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$XpPumpUpgradeItem, $XpPumpUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AutomationDirection, $AutomationDirection$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$AutomationDirection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $XpPumpUpgradeWrapper extends $UpgradeWrapperBase<($XpPumpUpgradeWrapper), ($XpPumpUpgradeItem)> implements $ITickableUpgrade {


public "setLevel"(arg0: integer): void
public "getLevel"(): integer
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getDirection"(): $AutomationDirection
public "takeAllExperienceFromPlayer"(arg0: $Player$Type): void
public "giveAllExperienceToPlayer"(arg0: $Player$Type): void
public "takeLevelsFromPlayer"(arg0: $Player$Type): void
public "setDirection"(arg0: $AutomationDirection$Type): void
public "setLevelsToTake"(arg0: integer): void
public "setLevelsToStore"(arg0: integer): void
public "getLevelsToStore"(): integer
public "shouldMendItems"(): boolean
public "giveLevelsToPlayer"(arg0: $Player$Type): void
public "setMendItems"(arg0: boolean): void
public "getLevelsToTake"(): integer
set "level"(value: integer)
get "level"(): integer
get "direction"(): $AutomationDirection
set "direction"(value: $AutomationDirection$Type)
set "levelsToTake"(value: integer)
set "levelsToStore"(value: integer)
get "levelsToStore"(): integer
set "mendItems"(value: boolean)
get "levelsToTake"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeWrapper$Type = ($XpPumpUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeWrapper_ = $XpPumpUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/memory/$MemorySettingsCategory" {
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISettingsCategory, $ISettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MemorySettingsCategory implements $ISettingsCategory<($MemorySettingsCategory)> {
static readonly "NAME": string

constructor(arg0: $Supplier$Type<($InventoryHandler$Type)>, arg1: $CompoundTag$Type, arg2: $Consumer$Type<($CompoundTag$Type)>)

public "deleteSlotSettingsFrom"(arg0: integer): void
public "selectSlot"(arg0: integer): void
public "isLargerThanNumberOfSlots"(arg0: integer): boolean
public "copyTo"(arg0: $MemorySettingsCategory$Type, arg1: integer, arg2: integer): void
public "registerListeners"(arg0: $Consumer$Type<($Item$Type)>, arg1: $Consumer$Type<($Item$Type)>, arg2: $Consumer$Type<(integer)>, arg3: $Consumer$Type<(integer)>): void
public "setFilter"(arg0: integer, arg1: $ItemStack$Type): void
public "selectSlots"(arg0: integer, arg1: integer): void
public "unselectAllSlots"(): void
public "setIgnoreNbt"(arg0: boolean): void
public "matchesFilter"(arg0: integer, arg1: $ItemStack$Type): boolean
public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "unregisterListeners"(): void
public "reloadFrom"(arg0: $CompoundTag$Type): void
public "getSlotIndexes"(): $Set<(integer)>
public "getSlotFilterStack"(arg0: integer, arg1: boolean): $Optional<($ItemStack)>
public "isSlotSelected"(arg0: integer): boolean
public "getFilterItemSlots"(): $Map<($Item), ($Set<(integer)>)>
public "getFilterStackSlots"(): $Map<(integer), ($Set<(integer)>)>
public "overwriteWith"(arg0: $MemorySettingsCategory$Type): void
public "unselectSlot"(arg0: integer): void
public "ignoresNbt"(): boolean
set "ignoreNbt"(value: boolean)
get "slotIndexes"(): $Set<(integer)>
get "filterItemSlots"(): $Map<($Item), ($Set<(integer)>)>
get "filterStackSlots"(): $Map<(integer), ($Set<(integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemorySettingsCategory$Type = ($MemorySettingsCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemorySettingsCategory_ = $MemorySettingsCategory$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$StorageTierUpgradeRecipe, $StorageTierUpgradeRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $StorageTierUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($StorageTierUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeRecipe$Serializer$Type = ($StorageTierUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeRecipe$Serializer_ = $StorageTierUpgradeRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem" {
import {$EverlastingUpgradeItem$Wrapper, $EverlastingUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem$Wrapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EverlastingUpgradeItem extends $UpgradeItemBase<($EverlastingUpgradeItem$Wrapper)> {
static readonly "TYPE": $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
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

public "getType"(): $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingUpgradeItem$Type = ($EverlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverlastingUpgradeItem_ = $EverlastingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"

export class $CookingLogic<T extends $AbstractCookingRecipe> {
static readonly "COOK_INPUT_SLOT": integer
static readonly "COOK_OUTPUT_SLOT": integer
static readonly "FUEL_SLOT": integer

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $CookingUpgradeConfig$Type, arg3: $RecipeType$Type<(T)>, arg4: float)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $Predicate$Type<($ItemStack$Type)>, arg3: $Predicate$Type<($ItemStack$Type)>, arg4: $CookingUpgradeConfig$Type, arg5: $RecipeType$Type<(T)>, arg6: float)

public "tick"(arg0: $Level$Type): boolean
public "pause"(): void
public "setCookInput"(arg0: $ItemStack$Type): void
public "setFuel"(arg0: $ItemStack$Type): void
public "getCookOutput"(): $ItemStack
public "getCookInput"(): $ItemStack
public "getCookTimeTotal"(): integer
public "getBurnTimeFinish"(): long
public "getCookTimeFinish"(): long
public "getBurnTimeTotal"(): integer
public "isBurning"(arg0: $Level$Type): boolean
public "getFuel"(): $ItemStack
public "isCooking"(): boolean
public "getCookingInventory"(): $ItemStackHandler
set "cookInput"(value: $ItemStack$Type)
set "fuel"(value: $ItemStack$Type)
get "cookOutput"(): $ItemStack
get "cookInput"(): $ItemStack
get "cookTimeTotal"(): integer
get "burnTimeFinish"(): long
get "cookTimeFinish"(): long
get "burnTimeTotal"(): integer
get "fuel"(): $ItemStack
get "cooking"(): boolean
get "cookingInventory"(): $ItemStackHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingLogic$Type<T> = ($CookingLogic<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingLogic_<T> = $CookingLogic$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade" {
import {$ContentsFilterLogic, $ContentsFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"

export interface $IContentsFilteredUpgrade extends $IFilteredUpgrade {

 "getFilterLogic"(): $ContentsFilterLogic

(): $ContentsFilterLogic
}

export namespace $IContentsFilteredUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentsFilteredUpgrade$Type = ($IContentsFilteredUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContentsFilteredUpgrade_ = $IContentsFilteredUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $PumpUpgradeConfig {
readonly "maxInputOutput": $ForgeConfigSpec$IntValue
readonly "stackMultiplierRatio": $ForgeConfigSpec$DoubleValue
readonly "filterSlots": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeConfig$Type = ($PumpUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeConfig_ = $PumpUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $UpgradeGroup {
static readonly "NONE": $UpgradeGroup

constructor(arg0: string, arg1: string)

public "name"(): string
public "isSolo"(): boolean
public "translName"(): string
get "solo"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeGroup$Type = ($UpgradeGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeGroup_ = $UpgradeGroup$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $CookingUpgradeConfig {
readonly "cookingSpeedMultiplier": $ForgeConfigSpec$DoubleValue
readonly "fuelEfficiencyMultiplier": $ForgeConfigSpec$DoubleValue

constructor(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string)

public static "getInstance"(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string): $CookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeConfig$Type = ($CookingUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeConfig_ = $CookingUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeShapelessRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $StorageTierUpgradeShapelessRecipe extends $ShapelessRecipe implements $IWrapperRecipe<($ShapelessRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ShapelessRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeShapelessRecipe$Type = ($StorageTierUpgradeShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeShapelessRecipe_ = $StorageTierUpgradeShapelessRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BackpackUpgradeRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$BackpackUpgradeRecipe, $BackpackUpgradeRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BackpackUpgradeRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BackpackUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($BackpackUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$Serializer$Type = ($BackpackUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackUpgradeRecipe$Serializer_ = $BackpackUpgradeRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ShulkerBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StorageBlockBase, $StorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockBase"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IAdditionalDropDataBlock, $IAdditionalDropDataBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IAdditionalDropDataBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ShulkerBoxBlock extends $StorageBlockBase implements $IAdditionalDropDataBlock {
static readonly "FACING": $EnumProperty<($Direction)>
static readonly "TICKING": $BooleanProperty
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

constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>)
constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>, arg2: float)

public "getFacing"(arg0: $BlockState$Type): $Direction
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "setTicking"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): void
public "addDropData"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
public "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $StorageBlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getTintedStack"(arg0: $DyeColor$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxBlock$Type = ($ShulkerBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxBlock_ = $ShulkerBoxBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ILockable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILockable {

 "isLocked"(): boolean
 "toggleLock"(): void
 "shouldShowLock"(): boolean
 "toggleLockVisibility"(): void
}

export namespace $ILockable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILockable$Type = ($ILockable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILockable_ = $ILockable$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IStackableContentsUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStackableContentsUpgrade {

 "getMinimumMultiplierRequired"(): integer

(): integer
}

export namespace $IStackableContentsUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackableContentsUpgrade$Type = ($IStackableContentsUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackableContentsUpgrade_ = $IStackableContentsUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SmeltingRecipe, $SmeltingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmeltingRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$AutoSmeltingUpgradeItem, $AutoSmeltingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmeltingUpgradeItem"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper"

export class $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper), ($AutoSmeltingUpgradeItem), ($SmeltingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$Type = ($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$PrimaryMatch" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PrimaryMatch extends $Enum<($PrimaryMatch)> implements $StringRepresentable {
static readonly "ITEM": $PrimaryMatch
static readonly "MOD": $PrimaryMatch
static readonly "TAGS": $PrimaryMatch


public static "values"(): ($PrimaryMatch)[]
public static "valueOf"(arg0: string): $PrimaryMatch
public "next"(): $PrimaryMatch
public "getSerializedName"(): string
public static "fromName"(arg0: string): $PrimaryMatch
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimaryMatch$Type = (("item") | ("mod") | ("tags")) | ($PrimaryMatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimaryMatch_ = $PrimaryMatch$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler" {
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $ITrackedContentsItemHandler extends $IItemHandlerSimpleInserter {

 "getInternalSlotLimit"(arg0: integer): integer
 "unregisterStackKeyListeners"(): void
 "registerTrackingListeners"(arg0: $Consumer$Type<($ItemStackKey$Type)>, arg1: $Consumer$Type<($ItemStackKey$Type)>, arg2: $Runnable$Type, arg3: $Runnable$Type): void
 "hasEmptySlots"(): boolean
 "getTrackedStacks"(): $Set<($ItemStackKey)>
 "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "getSlots"(): integer
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlotLimit"(i: integer): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "isMutable"(): boolean
 "getStackInSlot"(arg0: integer): $ItemStack
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

export namespace $ITrackedContentsItemHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrackedContentsItemHandler$Type = ($ITrackedContentsItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrackedContentsItemHandler_ = $ITrackedContentsItemHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/$MainSetting" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TriConsumer, $TriConsumer$Type} from "packages/org/apache/logging/log4j/util/$TriConsumer"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $MainSetting<T> {

constructor(arg0: string, arg1: $BiFunction$Type<($CompoundTag$Type), (string), ($Optional$Type<(T)>)>, arg2: $TriConsumer$Type<($CompoundTag$Type), (string), (T)>, arg3: T)

public "getName"(): string
public "getValue"(arg0: $CompoundTag$Type): $Optional<(T)>
public "setValue"(arg0: $CompoundTag$Type, arg1: T): void
public "getDefaultValue"(): T
public "removeFrom"(arg0: $CompoundTag$Type): void
get "name"(): string
get "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainSetting$Type<T> = ($MainSetting<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainSetting_<T> = $MainSetting$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$WoodStorageBlockBase" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$BlockFamily, $BlockFamily$Type} from "packages/net/minecraft/data/$BlockFamily"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StorageBlockBase, $StorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockBase"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$IAdditionalDropDataBlock, $IAdditionalDropDataBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IAdditionalDropDataBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WoodStorageBlockBase extends $StorageBlockBase implements $IAdditionalDropDataBlock {
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "TICKING": $BooleanProperty
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


public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "addDropData"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "addNameWoodAndTintData"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodStorageBlockBase$Type = ($WoodStorageBlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodStorageBlockBase_ = $WoodStorageBlockBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $IRenderedTankUpgrade$TankRenderInfo {

constructor()
constructor(arg0: $FluidStack$Type, arg1: float)

public "getFillRatio"(): float
public static "deserialize"(arg0: $CompoundTag$Type): $IRenderedTankUpgrade$TankRenderInfo
public "serialize"(): $CompoundTag
public "getFluid"(): $Optional<($FluidStack)>
public "setFillRatio"(arg0: float): void
public "setFluid"(arg0: $FluidStack$Type): void
get "fillRatio"(): float
get "fluid"(): $Optional<($FluidStack)>
set "fillRatio"(value: float)
set "fluid"(value: $FluidStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedTankUpgrade$TankRenderInfo$Type = ($IRenderedTankUpgrade$TankRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedTankUpgrade$TankRenderInfo_ = $IRenderedTankUpgrade$TankRenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InventoryOrder" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $InventoryOrder extends $Enum<($InventoryOrder)> implements $StringRepresentable {
static readonly "MAIN_FIRST": $InventoryOrder
static readonly "INCEPTED_FIRST": $InventoryOrder


public static "values"(): ($InventoryOrder)[]
public static "valueOf"(arg0: string): $InventoryOrder
public "next"(): $InventoryOrder
public "getSerializedName"(): string
public static "fromName"(arg0: string): $InventoryOrder
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryOrder$Type = (("main_first") | ("incepted_first")) | ($InventoryOrder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryOrder_ = $InventoryOrder$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/controller/$IControllerBoundable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ControllerBlockEntityBase"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IControllerBoundable {

 "getStorageBlockLevel"(): $Level
 "unregisterController"(): void
 "removeControllerPos"(): void
 "addToAdjacentController"(): void
 "registerController"(arg0: $ControllerBlockEntityBase$Type): void
 "loadControllerPos"(arg0: $CompoundTag$Type): void
 "canConnectStorages"(): boolean
 "saveControllerPos"(arg0: $CompoundTag$Type): void
 "setControllerPos"(arg0: $BlockPos$Type): void
 "getControllerPos"(): $Optional<($BlockPos)>
 "getStorageBlockPos"(): $BlockPos
 "addToController"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "runOnController"(arg0: $Level$Type, arg1: $Consumer$Type<($ControllerBlockEntityBase$Type)>): void
 "canBeConnected"(): boolean
}

export namespace $IControllerBoundable {
const CONTROLLER_POS_TAG: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControllerBoundable$Type = ($IControllerBoundable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IControllerBoundable_ = $IControllerBoundable$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DisplaySide, $DisplaySide$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$DisplaySide"

export class $RenderInfo$DisplayItem {

constructor(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: $DisplaySide$Type)

public "getItem"(): $ItemStack
public "getRotation"(): integer
public "getSlotIndex"(): integer
public "getDisplaySide"(): $DisplaySide
get "item"(): $ItemStack
get "rotation"(): integer
get "slotIndex"(): integer
get "displaySide"(): $DisplaySide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$DisplayItem$Type = ($RenderInfo$DisplayItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo$DisplayItem_ = $RenderInfo$DisplayItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AnvilUpgradeWrapper, $AnvilUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnvilUpgradeItem extends $UpgradeItemBase<($AnvilUpgradeWrapper)> {
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

public "getType"(): $UpgradeType<($AnvilUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($AnvilUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpgradeItem$Type = ($AnvilUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilUpgradeItem_ = $AnvilUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FilterLogicBase, $FilterLogicBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogicBase"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FilterLogic$ObservableFilterItemStackHandler, $FilterLogic$ObservableFilterItemStackHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic$ObservableFilterItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterLogic extends $FilterLogicBase {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Predicate$Type<($ItemStack$Type)>, arg4: string)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: string)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Predicate$Type<($ItemStack$Type)>)

public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "getFilterHandler"(): $FilterLogic$ObservableFilterItemStackHandler
public "setEmptyAllowListMatchesEverything"(): void
get "filterHandler"(): $FilterLogic$ObservableFilterItemStackHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogic$Type = ($FilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogic_ = $FilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$IUpgradeRenderData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IUpgradeRenderData {

 "serializeNBT"(): $CompoundTag

(): $CompoundTag
}

export namespace $IUpgradeRenderData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeRenderData$Type = ($IUpgradeRenderData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeRenderData_ = $IUpgradeRenderData$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapperAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IUpgradeWrapperAccessor {

 "onBeforeDeconstruct"(): void
 "clearCache"(): void
 "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$Type<(T)>): $List<(T)>
 "getWrappersThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
}

export namespace $IUpgradeWrapperAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeWrapperAccessor$Type = ($IUpgradeWrapperAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeWrapperAccessor_ = $IUpgradeWrapperAccessor$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AutoSmokingUpgradeItem, $AutoSmokingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmokingUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$SmokingRecipe, $SmokingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmokingRecipe"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper"

export class $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper), ($AutoSmokingUpgradeItem), ($SmokingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$Type = ($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe" {
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $IWrapperRecipe<T extends $Recipe<(any)>> {

 "getCompose"(): T

(): T
}

export namespace $IWrapperRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrapperRecipe$Type<T> = ($IWrapperRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWrapperRecipe_<T> = $IWrapperRecipe$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockItemBase, $BlockItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockItemBase"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITintableBlockItem, $ITintableBlockItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ITintableBlockItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageBlockItem extends $BlockItemBase implements $ITintableBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public static "showsTier"(arg0: $ItemStack$Type): boolean
public static "setShowsTier"(arg0: $ItemStack$Type, arg1: boolean): void
public "setAccentColor"(arg0: $ItemStack$Type, arg1: integer): void
public "removeAccentColor"(arg0: $ItemStack$Type): void
public "removeMainColor"(arg0: $ItemStack$Type): void
public "setMainColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "getAccentColorFromStack"(arg0: $ItemStack$Type): $Optional<(integer)>
public static "getMainColorFromStack"(arg0: $ItemStack$Type): $Optional<(integer)>
public "getMainColor"(arg0: $ItemStack$Type): $Optional<(integer)>
public "getAccentColor"(arg0: $ItemStack$Type): $Optional<(integer)>
public "isTintable"(arg0: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockItem$Type = ($StorageBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageBlockItem_ = $StorageBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AutoBlastingUpgradeItem, $AutoBlastingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoBlastingUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper"
import {$BlastingRecipe, $BlastingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$BlastingRecipe"

export class $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper), ($AutoBlastingUpgradeItem), ($BlastingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$Type = ($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeConfig" {
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$FilteredUpgradeConfigBase, $FilteredUpgradeConfigBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilteredUpgradeConfigBase"

export class $VoidUpgradeConfig extends $FilteredUpgradeConfigBase {
readonly "voidAnythingEnabled": $ForgeConfigSpec$BooleanValue
readonly "filterSlots": $ForgeConfigSpec$IntValue
readonly "slotsInRow": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string, arg3: integer, arg4: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeConfig$Type = ($VoidUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeConfig_ = $VoidUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEnergyStorageUpgradeWrapper" {
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"

export interface $IEnergyStorageUpgradeWrapper {

 "wrapStorage"(arg0: $IEnergyStorage$Type): $IEnergyStorage

(arg0: $IEnergyStorage$Type): $IEnergyStorage
}

export namespace $IEnergyStorageUpgradeWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorageUpgradeWrapper$Type = ($IEnergyStorageUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyStorageUpgradeWrapper_ = $IEnergyStorageUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $IUpgradeItem$UpgradeConflictDefinition extends $Record {

constructor(isConflictingItem: $Predicate$Type<($Item$Type)>, maxConflictingAllowed: integer, errorMessage: $Component$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "errorMessage"(): $Component
public "maxConflictingAllowed"(): integer
public "isConflictingItem"(): $Predicate<($Item)>
get "conflictingItem"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$UpgradeConflictDefinition$Type = ($IUpgradeItem$UpgradeConflictDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem$UpgradeConflictDefinition_ = $IUpgradeItem$UpgradeConflictDefinition$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo"

export interface $IRenderedTankUpgrade {

 "setTankRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedTankUpgrade$TankRenderInfo$Type)>): void
 "forceUpdateTankRenderInfo"(): void
}

export namespace $IRenderedTankUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedTankUpgrade$Type = ($IRenderedTankUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedTankUpgrade_ = $IRenderedTankUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/client/particle/$CustomTintTerrainParticleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $CustomTintTerrainParticleData extends $ParticleType<($CustomTintTerrainParticleData)> implements $ParticleOptions {
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($CustomTintTerrainParticleData)>

constructor()
constructor(arg0: $BlockState$Type, arg1: $BlockPos$Type)

public "getState"(): $BlockState
public "getType"(): $CustomTintTerrainParticleData
public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "codec"(): $Codec<($CustomTintTerrainParticleData)>
public "getPos"(): $BlockPos
get "state"(): $BlockState
get "type"(): $CustomTintTerrainParticleData
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTintTerrainParticleData$Type = ($CustomTintTerrainParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTintTerrainParticleData_ = $CustomTintTerrainParticleData$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$SmithingBackpackUpgradeRecipe$Serializer" {
import {$SmithingBackpackUpgradeRecipe, $SmithingBackpackUpgradeRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$SmithingBackpackUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SmithingBackpackUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($SmithingTransformRecipe), ($SmithingBackpackUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingBackpackUpgradeRecipe$Serializer$Type = ($SmithingBackpackUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingBackpackUpgradeRecipe$Serializer_ = $SmithingBackpackUpgradeRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem$Wrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EverlastingUpgradeItem, $EverlastingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $EverlastingUpgradeItem$Wrapper extends $UpgradeWrapperBase<($EverlastingUpgradeItem$Wrapper), ($EverlastingUpgradeItem)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingUpgradeItem$Wrapper$Type = ($EverlastingUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverlastingUpgradeItem$Wrapper_ = $EverlastingUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/backpack/$BackpackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BackpackBlock extends $Block implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "LEFT_TANK": $BooleanProperty
static readonly "RIGHT_TANK": $BooleanProperty
static readonly "BATTERY": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor()
constructor(arg0: float)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "playerInteract"(arg0: $PlayerInteractEvent$RightClickBlock$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackBlock$Type = ($BackpackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackBlock_ = $BackpackBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig" {
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IUpgradeCountLimitConfig {

 "getMaxUpgradesPerStorage"(arg0: string, arg1: $ResourceLocation$Type): integer
 "getMaxUpgradesInGroupPerStorage"(arg0: string, arg1: $UpgradeGroup$Type): integer
}

export namespace $IUpgradeCountLimitConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeCountLimitConfig$Type = ($IUpgradeCountLimitConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeCountLimitConfig_ = $IUpgradeCountLimitConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$VoidUpgradeWrapper, $VoidUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$VoidUpgradeConfig, $VoidUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeConfig"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VoidUpgradeItem extends $UpgradeItemBase<($VoidUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($VoidUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $VoidUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($VoidUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "isVoidAnythingEnabled"(): boolean
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($VoidUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "voidAnythingEnabled"(): boolean
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeItem$Type = ($VoidUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeItem_ = $VoidUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IUpgradeDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpgradeDisplay {

 "shouldShowUpgrades"(): boolean
 "toggleUpgradesVisiblity"(): void
}

export namespace $IUpgradeDisplay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeDisplay$Type = ($IUpgradeDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeDisplay_ = $IUpgradeDisplay$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$VerticalFacing" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $VerticalFacing extends $Enum<($VerticalFacing)> implements $StringRepresentable {
static readonly "NO": $VerticalFacing
static readonly "UP": $VerticalFacing
static readonly "DOWN": $VerticalFacing


public static "values"(): ($VerticalFacing)[]
public static "valueOf"(arg0: string): $VerticalFacing
public "getIndex"(): integer
public "getDirection"(): $Direction
public "getSerializedName"(): string
public static "fromDirection"(arg0: $Direction$Type): $VerticalFacing
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "index"(): integer
get "direction"(): $Direction
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalFacing$Type = (("no") | ("up") | ("down")) | ($VerticalFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VerticalFacing_ = $VerticalFacing$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$BlastingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper"
import {$BlastingUpgradeItem, $BlastingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$BlastingUpgradeItem"
import {$BlastingRecipe, $BlastingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$BlastingRecipe"

export class $CookingUpgradeWrapper$BlastingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$BlastingUpgradeWrapper), ($BlastingUpgradeItem), ($BlastingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$BlastingUpgradeWrapper$Type = ($CookingUpgradeWrapper$BlastingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$BlastingUpgradeWrapper_ = $CookingUpgradeWrapper$BlastingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/hopper/$HopperUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HopperUpgradeWrapper, $HopperUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/hopper/$HopperUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HopperUpgradeItem extends $UpgradeItemBase<($HopperUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($HopperUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $IntSupplier$Type, arg3: $IntSupplier$Type)

public "getType"(): $UpgradeType<($HopperUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getOutputFilterSlotCount"(): integer
public "getInputFilterSlotCount"(): integer
public "getTransferSpeedTicks"(): long
public "getMaxTransferStackSize"(): integer
get "type"(): $UpgradeType<($HopperUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "outputFilterSlotCount"(): integer
get "inputFilterSlotCount"(): integer
get "transferSpeedTicks"(): long
get "maxTransferStackSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HopperUpgradeItem$Type = ($HopperUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HopperUpgradeItem_ = $HopperUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/init/$ModItems$StorageCompactingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$CompactingUpgradeItem, $CompactingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModItems$StorageCompactingUpgradeItem extends $CompactingUpgradeItem {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: boolean, arg1: $IntSupplier$Type, arg2: $IUpgradeCountLimitConfig$Type)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModItems$StorageCompactingUpgradeItem$Type = ($ModItems$StorageCompactingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModItems$StorageCompactingUpgradeItem_ = $ModItems$StorageCompactingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/compression/$CompressionUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$CompressionUpgradeItem$Wrapper, $CompressionUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/compression/$CompressionUpgradeItem$Wrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CompressionUpgradeItem extends $UpgradeItemBase<($CompressionUpgradeItem$Wrapper)> {
static readonly "TYPE": $UpgradeType<($CompressionUpgradeItem$Wrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
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

public "getType"(): $UpgradeType<($CompressionUpgradeItem$Wrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getCleanedUpgradeStack"(arg0: $ItemStack$Type): $ItemStack
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean): $UpgradeSlotChangeResult
get "type"(): $UpgradeType<($CompressionUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressionUpgradeItem$Type = ($CompressionUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressionUpgradeItem_ = $CompressionUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeWrapper" {
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$IIOFilterUpgrade, $IIOFilterUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IIOFilterUpgrade"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilterUpgradeItem, $FilterUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$Direction, $Direction$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$Direction"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $FilterUpgradeWrapper extends $UpgradeWrapperBase<($FilterUpgradeWrapper), ($FilterUpgradeItem)> implements $IContentsFilteredUpgrade, $IIOFilterUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getInputFilter"(): $Optional<($FilterLogic)>
public "getOutputFilter"(): $Optional<($FilterLogic)>
public "getDirection"(): $Direction
public "setDirection"(arg0: $Direction$Type): void
get "inputFilter"(): $Optional<($FilterLogic)>
get "outputFilter"(): $Optional<($FilterLogic)>
get "direction"(): $Direction
set "direction"(value: $Direction$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterUpgradeWrapper$Type = ($FilterUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterUpgradeWrapper_ = $FilterUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker$IItemHandlerInserter" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISlotTracker$IItemHandlerInserter {

 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack

(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
}

export namespace $ISlotTracker$IItemHandlerInserter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$IItemHandlerInserter$Type = ($ISlotTracker$IItemHandlerInserter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotTracker$IItemHandlerInserter_ = $ISlotTracker$IItemHandlerInserter$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $IRenderedBatteryUpgrade$BatteryRenderInfo {

constructor(arg0: float)

public "getChargeRatio"(): float
public static "deserialize"(arg0: $CompoundTag$Type): $IRenderedBatteryUpgrade$BatteryRenderInfo
public "serialize"(): $CompoundTag
public "setChargeRatio"(arg0: float): void
get "chargeRatio"(): float
set "chargeRatio"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedBatteryUpgrade$BatteryRenderInfo$Type = ($IRenderedBatteryUpgrade$BatteryRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedBatteryUpgrade$BatteryRenderInfo_ = $IRenderedBatteryUpgrade$BatteryRenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$BlastingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CookingUpgradeWrapper$BlastingUpgradeWrapper, $CookingUpgradeWrapper$BlastingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$BlastingUpgradeWrapper"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlastingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$BlastingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $CookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastingUpgradeItem$Type = ($BlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastingUpgradeItem_ = $BlastingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem" {
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"

export interface $ICookingUpgradeItem {

 "getCookingUpgradeConfig"(): $CookingUpgradeConfig

(): $CookingUpgradeConfig
}

export namespace $ICookingUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICookingUpgradeItem$Type = ($ICookingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICookingUpgradeItem_ = $ICookingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeWrapper" {
import {$AnvilUpgradeItem, $AnvilUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeItem"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $AnvilUpgradeWrapper extends $UpgradeWrapperBase<($AnvilUpgradeWrapper), ($AnvilUpgradeItem)> {


public "shouldShiftClickIntoStorage"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "getInventory"(): $ItemStackHandler
public "getItemName"(): string
public "canBeDisabled"(): boolean
public "setItemName"(arg0: string): void
set "shiftClickIntoStorage"(value: boolean)
get "inventory"(): $ItemStackHandler
get "itemName"(): string
set "itemName"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpgradeWrapper$Type = ($AnvilUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilUpgradeWrapper_ = $AnvilUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MagnetUpgradeItem, $MagnetUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeItem"
import {$IMagnetPreventionChecker, $IMagnetPreventionChecker$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$IMagnetPreventionChecker"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPickupResponseUpgrade, $IPickupResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IPickupResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $MagnetUpgradeWrapper extends $UpgradeWrapperBase<($MagnetUpgradeWrapper), ($MagnetUpgradeItem)> implements $IContentsFilteredUpgrade, $ITickableUpgrade, $IPickupResponseUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "pickup"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public static "addMagnetPreventionChecker"(arg0: $IMagnetPreventionChecker$Type): void
public "shouldPickupItems"(): boolean
public "setPickupXp"(arg0: boolean): void
public "shouldPickupXp"(): boolean
public "setPickupItems"(arg0: boolean): void
set "pickupXp"(value: boolean)
set "pickupItems"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeWrapper$Type = ($MagnetUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetUpgradeWrapper_ = $MagnetUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$CompactingUpgradeWrapper, $CompactingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CompactingUpgradeItem extends $UpgradeItemBase<($CompactingUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: boolean, arg1: $IntSupplier$Type, arg2: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($CompactingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "shouldCompactThreeByThree"(): boolean
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($CompactingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeItem$Type = ($CompactingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUpgradeItem_ = $CompactingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInsertResponseUpgrade" {
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IInsertResponseUpgrade {

 "onBeforeInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
 "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer): void
}

export namespace $IInsertResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInsertResponseUpgrade$Type = ($IInsertResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInsertResponseUpgrade_ = $IInsertResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem" {
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"

export interface $IAutoCookingUpgradeItem {

 "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig

(): $AutoCookingUpgradeConfig
}

export namespace $IAutoCookingUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoCookingUpgradeItem$Type = ($IAutoCookingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoCookingUpgradeItem_ = $IAutoCookingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity" {
import {$ILinkable, $ILinkable$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ILinkable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$StorageWrapper, $StorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageWrapper"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ITierDisplay, $ITierDisplay$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ITierDisplay"
import {$IUpgradeDisplay, $IUpgradeDisplay$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IUpgradeDisplay"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ControllerBlockEntityBase"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ILockable, $ILockable$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ILockable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"
import {$IControllableStorage, $IControllableStorage$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$IControllableStorage"

export class $StorageBlockEntity extends $BlockEntity implements $IControllableStorage, $ILinkable, $ILockable, $Nameable, $ITierDisplay, $IUpgradeDisplay {
static readonly "STORAGE_WRAPPER_TAG": string
 "blockState": $BlockState


public "isLocked"(): boolean
public "isOpen"(): boolean
public "onLoad"(): void
public "getName"(): $Component
public "getDisplayName"(): $Component
public "allowsEmptySlotsMatchingItemInsertsWhenLocked"(): boolean
public "isBeingUpgraded"(): boolean
public "connectLinkedSelf"(): boolean
public "linkToController"(arg0: $BlockPos$Type): void
public "setBeingUpgraded"(arg0: boolean): void
public "shouldDropContents"(): boolean
public "setNotLinked"(): void
public "toggleLock"(): void
public "changeStorageSize"(arg0: integer, arg1: integer): void
public "shouldShowTier"(): boolean
public "shouldShowLock"(): boolean
public "shouldShowUpgrades"(): boolean
public "onNeighborChange"(arg0: $BlockPos$Type): void
public "setCustomName"(arg0: $Component$Type): void
public "recheckOpen"(): void
public "stopOpen"(arg0: $Player$Type): void
public "startOpen"(arg0: $Player$Type): void
public "toggleTierVisiblity"(): void
public "toggleUpgradesVisiblity"(): void
public "toggleLockVisibility"(): void
public "getSlotFillPercentage"(arg0: integer): float
public "memorizesItemsWhenLocked"(): boolean
public "setUpdateBlockRender"(): void
public "getConnectablePositions"(): $Set<($BlockPos)>
public "loadSynchronizedData"(arg0: $CompoundTag$Type): void
public "getStorageBlockLevel"(): $Level
public "removeControllerPos"(): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "setRemoved"(): void
public "onChunkUnloaded"(): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "dropContents"(): void
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $StorageBlockEntity$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "getCustomName"(): $Component
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "isLinked"(): boolean
public "canConnectStorages"(): boolean
public "setControllerPos"(arg0: $BlockPos$Type): void
public "getStorageWrapper"(): $StorageWrapper
public "getControllerPos"(): $Optional<($BlockPos)>
public "getStorageBlockPos"(): $BlockPos
public "canBeConnected"(): boolean
public "removeFromController"(): void
public "registerWithControllerOnLoad"(): void
public "unregisterController"(): void
public "registerInventoryStackListeners"(): void
public "tryToAddToController"(): void
public "registerController"(arg0: $ControllerBlockEntityBase$Type): void
public "updateEmptySlots"(): void
public "hasStorageData"(): boolean
public "addToController"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "changeSlots"(arg0: integer): void
public "canBeLinked"(): boolean
public "unlinkFromController"(): void
public "hasCustomName"(): boolean
public "addToAdjacentController"(): void
public "loadControllerPos"(arg0: $CompoundTag$Type): void
public "saveControllerPos"(arg0: $CompoundTag$Type): void
public "runOnController"(arg0: $Level$Type, arg1: $Consumer$Type<($ControllerBlockEntityBase$Type)>): void
get "locked"(): boolean
get "open"(): boolean
get "name"(): $Component
get "displayName"(): $Component
get "beingUpgraded"(): boolean
set "beingUpgraded"(value: boolean)
set "customName"(value: $Component$Type)
get "connectablePositions"(): $Set<($BlockPos)>
get "storageBlockLevel"(): $Level
get "updateTag"(): $CompoundTag
get "customName"(): $Component
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "linked"(): boolean
set "controllerPos"(value: $BlockPos$Type)
get "storageWrapper"(): $StorageWrapper
get "controllerPos"(): $Optional<($BlockPos)>
get "storageBlockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockEntity$Type = ($StorageBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageBlockEntity_ = $StorageBlockEntity$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"

export interface $IUpgradeItem<T extends $IUpgradeWrapper> {

 "getName"(): $Component
 "getType"(): $UpgradeType<(T)>
 "getInventoryColumnsTaken"(): integer
 "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
 "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
 "getCleanedUpgradeStack"(arg0: $ItemStack$Type): $ItemStack
 "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean): $UpgradeSlotChangeResult
 "getUpgradesInGroupPerStorage"(arg0: string): integer
 "getUpgradesPerStorage"(arg0: string): integer
 "getUpgradeGroup"(): $UpgradeGroup
 "canAddUpgradeTo"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
 "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
}

export namespace $IUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$Type<T> = ($IUpgradeItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem_<T> = $IUpgradeItem$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey" {
import {$TickEvent$ServerTickEvent, $TickEvent$ServerTickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent$ServerTickEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackKey {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$Type): boolean
public static "of"(arg0: $ItemStack$Type): $ItemStackKey
public "stack"(): $ItemStack
public static "getHashCode"(arg0: $ItemStack$Type): integer
public "getStack"(): $ItemStack
public static "canItemStacksStack"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "clearCacheOnTickEnd"(arg0: $TickEvent$ServerTickEvent$Type): void
public "hashCodeNotEquals"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackKey$Type = ($ItemStackKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackKey_ = $ItemStackKey$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IUpgradeWrapper {

 "isEnabled"(): boolean
 "setEnabled"(arg0: boolean): void
 "onAdded"(): void
 "getUpgradeStack"(): $ItemStack
 "onBeforeRemoved"(): void
 "canBeDisabled"(): boolean
 "hideSettingsTab"(): boolean
}

export namespace $IUpgradeWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeWrapper$Type = ($IUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeWrapper_ = $IUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryPartitioner" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InventoryPartitioner$SlotRange, $InventoryPartitioner$SlotRange$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryPartitioner$SlotRange"
import {$IInventoryPartHandler, $IInventoryPartHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInventoryPartHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MemorySettingsCategory, $MemorySettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/memory/$MemorySettingsCategory"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InventoryPartitioner {

constructor(arg0: $CompoundTag$Type, arg1: $InventoryHandler$Type, arg2: $Supplier$Type<($MemorySettingsCategory$Type)>)

public "serializeNBT"(): $CompoundTag
public "onInit"(): void
public "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
public "getFirstSpace"(arg0: integer): $Optional<($InventoryPartitioner$SlotRange)>
public "isFilterItem"(arg0: $Item$Type): boolean
public "getNoSortSlots"(): $Set<(integer)>
public "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
public "onSlotLimitChange"(): void
public "getPartBySlot"(arg0: integer): $IInventoryPartHandler
public "addInventoryPart"(arg0: integer, arg1: integer, arg2: $IInventoryPartHandler$Type): void
public "removeInventoryPart"(arg0: integer): void
get "filterItems"(): $Map<($Item), ($Set<(integer)>)>
get "noSortSlots"(): $Set<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryPartitioner$Type = ($InventoryPartitioner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryPartitioner_ = $InventoryPartitioner$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$RestockUpgradeWrapper, $RestockUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RestockUpgradeItem extends $UpgradeItemBase<($RestockUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type)

public "getType"(): $UpgradeType<($RestockUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($RestockUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestockUpgradeItem$Type = ($RestockUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestockUpgradeItem_ = $RestockUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ISneakItemInteractionBlock" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISneakItemInteractionBlock {

 "trySneakItemInteraction"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type, arg6: $ItemStack$Type): boolean

(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type, arg6: $ItemStack$Type): boolean
}

export namespace $ISneakItemInteractionBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISneakItemInteractionBlock$Type = ($ISneakItemInteractionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISneakItemInteractionBlock_ = $ISneakItemInteractionBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$VanillaTierUpgradeDefinition" {
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StorageTierUpgradeItem$TierUpgradeDefinition, $StorageTierUpgradeItem$TierUpgradeDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$TierUpgradeDefinition"
import {$StorageBlockBase, $StorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockBase"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity"

export class $StorageTierUpgradeItem$VanillaTierUpgradeDefinition<B extends $RandomizableContainerBlockEntity> extends $StorageTierUpgradeItem$TierUpgradeDefinition<(B)> {

constructor(arg0: $Class$Type<(B)>, arg1: $Predicate$Type<(B)>, arg2: $StorageBlockBase$Type, arg3: $WoodType$Type, ...arg4: ($Property$Type<(any)>)[])

public "woodType"(): $WoodType
public "getCountRequired"(arg0: $BlockState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$Type<B> = ($StorageTierUpgradeItem$VanillaTierUpgradeDefinition<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeItem$VanillaTierUpgradeDefinition_<B> = $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$Type<(B)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$FilterUpgradeWrapper, $FilterUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FilterUpgradeItem extends $UpgradeItemBase<($FilterUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($FilterUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($FilterUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($FilterUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterUpgradeItem$Type = ($FilterUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterUpgradeItem_ = $FilterUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeWrapper" {
import {$IEntityToolSwapUpgrade, $IEntityToolSwapUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEntityToolSwapUpgrade"
import {$ToolSwapMode, $ToolSwapMode$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapMode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ToolSwapperUpgradeItem, $ToolSwapperUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IAttackEntityResponseUpgrade, $IAttackEntityResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IAttackEntityResponseUpgrade"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$IBlockClickResponseUpgrade, $IBlockClickResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockClickResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IBlockToolSwapUpgrade, $IBlockToolSwapUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockToolSwapUpgrade"

export class $ToolSwapperUpgradeWrapper extends $UpgradeWrapperBase<($ToolSwapperUpgradeWrapper), ($ToolSwapperUpgradeItem)> implements $IBlockClickResponseUpgrade, $IAttackEntityResponseUpgrade, $IBlockToolSwapUpgrade, $IEntityToolSwapUpgrade {


public "setSwapWeapon"(arg0: boolean): void
public "setToolSwapMode"(arg0: $ToolSwapMode$Type): void
public "shouldSwapWeapon"(): boolean
public "getToolSwapMode"(): $ToolSwapMode
public "onBlockInteract"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): boolean
public "canProcessBlockInteract"(): boolean
public "canProcessEntityInteract"(): boolean
public "onEntityInteract"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Player$Type): boolean
public "onAttackEntity"(arg0: $Player$Type): boolean
public "hideSettingsTab"(): boolean
public "onBlockClick"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public "getFilterLogic"(): $FilterLogic
set "swapWeapon"(value: boolean)
set "toolSwapMode"(value: $ToolSwapMode$Type)
get "toolSwapMode"(): $ToolSwapMode
get "filterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapperUpgradeWrapper$Type = ($ToolSwapperUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapperUpgradeWrapper_ = $ToolSwapperUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $AutoCookingUpgradeConfig extends $CookingUpgradeConfig {
readonly "inputFilterSlots": $ForgeConfigSpec$IntValue
readonly "inputFilterSlotsInRow": $ForgeConfigSpec$IntValue
readonly "fuelFilterSlots": $ForgeConfigSpec$IntValue
readonly "fuelFilterSlotsInRow": $ForgeConfigSpec$IntValue
readonly "cookingSpeedMultiplier": $ForgeConfigSpec$DoubleValue
readonly "fuelEfficiencyMultiplier": $ForgeConfigSpec$DoubleValue

constructor(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeConfig$Type = ($AutoCookingUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeConfig_ = $AutoCookingUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IFluidHandlerItem, $IFluidHandlerItem$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IStorageFluidHandler extends $IFluidHandlerItem {

 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): integer
 "fill"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $Fluid$Type, arg3: $IFluidHandler$FluidAction$Type, arg4: boolean): integer
 "fill"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $Fluid$Type, arg3: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): $FluidStack
 "drain"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $IFluidHandler$FluidAction$Type, arg3: boolean): $FluidStack
 "getContainer"(): $ItemStack
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "getFluidInTank"(arg0: integer): $FluidStack
 "getTankCapacity"(arg0: integer): integer
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "getTanks"(): integer
}

export namespace $IStorageFluidHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageFluidHandler$Type = ($IStorageFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageFluidHandler_ = $IStorageFluidHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper$TargetSlot" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RefillUpgradeWrapper$TargetSlot extends $Enum<($RefillUpgradeWrapper$TargetSlot)> implements $StringRepresentable {
static readonly "ANY": $RefillUpgradeWrapper$TargetSlot
static readonly "MAIN_HAND": $RefillUpgradeWrapper$TargetSlot
static readonly "OFF_HAND": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_1": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_2": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_3": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_4": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_5": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_6": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_7": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_8": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_9": $RefillUpgradeWrapper$TargetSlot


public static "values"(): ($RefillUpgradeWrapper$TargetSlot)[]
public static "valueOf"(arg0: string): $RefillUpgradeWrapper$TargetSlot
public "next"(): $RefillUpgradeWrapper$TargetSlot
public "previous"(): $RefillUpgradeWrapper$TargetSlot
public "getDescription"(): $Component
public "getSerializedName"(): string
public static "fromName"(arg0: string): $RefillUpgradeWrapper$TargetSlot
public "getAcronym"(): $Component
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "description"(): $Component
get "serializedName"(): string
get "acronym"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeWrapper$TargetSlot$Type = (("main_hand") | ("toolbar_8") | ("toolbar_9") | ("toolbar_6") | ("toolbar_7") | ("toolbar_4") | ("toolbar_5") | ("off_hand") | ("toolbar_2") | ("toolbar_3") | ("toolbar_1") | ("any")) | ($RefillUpgradeWrapper$TargetSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeWrapper$TargetSlot_ = $RefillUpgradeWrapper$TargetSlot$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IUpgradeItem, $IUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItemBase<T extends $IUpgradeWrapper> extends $ItemBase implements $IUpgradeItem<(T)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any


public "getName"(): $Component
public "getUpgradesInGroupPerStorage"(arg0: string): integer
public "getUpgradesPerStorage"(arg0: string): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getType"(): $UpgradeType<(T)>
public "getInventoryColumnsTaken"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
public "getCleanedUpgradeStack"(arg0: $ItemStack$Type): $ItemStack
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean): $UpgradeSlotChangeResult
public "getUpgradeGroup"(): $UpgradeGroup
public "canAddUpgradeTo"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
public "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
get "name"(): $Component
get "type"(): $UpgradeType<(T)>
get "inventoryColumnsTaken"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItemBase$Type<T> = ($UpgradeItemBase<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItemBase_<T> = $UpgradeItemBase$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$UpgradeRenderDataType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IUpgradeRenderData, $IUpgradeRenderData$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$IUpgradeRenderData"

export class $UpgradeRenderDataType<T extends $IUpgradeRenderData> {

constructor(arg0: string, arg1: $Class$Type<(T)>, arg2: $Function$Type<($CompoundTag$Type), (T)>)

public "getName"(): string
public "cast"(arg0: $IUpgradeRenderData$Type): $Optional<(T)>
public "deserialize"(arg0: $CompoundTag$Type): T
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeRenderDataType$Type<T> = ($UpgradeRenderDataType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeRenderDataType_<T> = $UpgradeRenderDataType$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmeltingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SmeltingUpgradeItem, $SmeltingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmeltingUpgradeItem"
import {$SmeltingRecipe, $SmeltingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmeltingRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper"

export class $CookingUpgradeWrapper$SmeltingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$SmeltingUpgradeWrapper), ($SmeltingUpgradeItem), ($SmeltingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$SmeltingUpgradeWrapper$Type = ($CookingUpgradeWrapper$SmeltingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$SmeltingUpgradeWrapper_ = $CookingUpgradeWrapper$SmeltingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ITierDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITierDisplay {

 "shouldShowTier"(): boolean
 "toggleTierVisiblity"(): void
}

export namespace $ITierDisplay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITierDisplay$Type = ($ITierDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITierDisplay_ = $ITierDisplay$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UpgradeRenderDataType, $UpgradeRenderDataType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$UpgradeRenderDataType"
import {$TankPosition, $TankPosition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$TankPosition"
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeRenderData, $IUpgradeRenderData$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$IUpgradeRenderData"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderInfo$ItemDisplayRenderInfo, $RenderInfo$ItemDisplayRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$ItemDisplayRenderInfo"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RenderInfo {


public "setChangeListener"(arg0: $Consumer$Type<($RenderInfo$Type)>): void
public "getNbt"(): $CompoundTag
public "removeUpgradeRenderData"(arg0: $UpgradeRenderDataType$Type<(any)>): void
public "setUpgradeRenderData"<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType$Type<(T)>, arg1: T): void
public "getUpgradeRenderData"(): $Map<($UpgradeRenderDataType<(any)>), ($IUpgradeRenderData)>
public "getUpgradeRenderData"<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType$Type<(T)>): $Optional<(T)>
public "getItemDisplayRenderInfo"(): $RenderInfo$ItemDisplayRenderInfo
public "getBatteryRenderInfo"(): $Optional<($IRenderedBatteryUpgrade$BatteryRenderInfo)>
public "getTankRenderInfos"(): $Map<($TankPosition), ($IRenderedTankUpgrade$TankRenderInfo)>
public "setUpgradeItems"(arg0: $List$Type<($ItemStack$Type)>): void
public "setTankRenderInfo"(arg0: $TankPosition$Type, arg1: $IRenderedTankUpgrade$TankRenderInfo$Type): void
public "resetUpgradeInfo"(arg0: boolean): void
public "setBatteryRenderInfo"(arg0: $IRenderedBatteryUpgrade$BatteryRenderInfo$Type): void
public "getUpgradeItems"(): $List<($ItemStack)>
public "deserializeFrom"(arg0: $CompoundTag$Type): void
public "refreshItemDisplayRenderInfo"(arg0: $List$Type<($RenderInfo$DisplayItem$Type)>, arg1: $List$Type<(integer)>): void
set "changeListener"(value: $Consumer$Type<($RenderInfo$Type)>)
get "nbt"(): $CompoundTag
get "upgradeRenderData"(): $Map<($UpgradeRenderDataType<(any)>), ($IUpgradeRenderData)>
get "itemDisplayRenderInfo"(): $RenderInfo$ItemDisplayRenderInfo
get "batteryRenderInfo"(): $Optional<($IRenderedBatteryUpgrade$BatteryRenderInfo)>
get "tankRenderInfos"(): $Map<($TankPosition), ($IRenderedTankUpgrade$TankRenderInfo)>
set "upgradeItems"(value: $List$Type<($ItemStack$Type)>)
set "batteryRenderInfo"(value: $IRenderedBatteryUpgrade$BatteryRenderInfo$Type)
get "upgradeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$Type = ($RenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo_ = $RenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$Direction" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Direction extends $Enum<($Direction)> implements $StringRepresentable {
static readonly "BOTH": $Direction
static readonly "INPUT": $Direction
static readonly "OUTPUT": $Direction


public static "values"(): ($Direction)[]
public static "valueOf"(arg0: string): $Direction
public "next"(): $Direction
public "getSerializedName"(): string
public static "fromName"(arg0: string): $Direction
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Direction$Type = (("output") | ("input") | ("both")) | ($Direction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Direction_ = $Direction$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$MagnetUpgradeWrapper, $MagnetUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeWrapper"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagnetUpgradeItem extends $UpgradeItemBase<($MagnetUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($MagnetUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($MagnetUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getRadius"(): integer
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($MagnetUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "radius"(): integer
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeItem$Type = ($MagnetUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetUpgradeItem_ = $MagnetUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IOverflowResponseUpgrade" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export interface $IOverflowResponseUpgrade {

 "stackMatchesFilterStack"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getFilterLogic"(): $FilterLogic
 "worksInGui"(): boolean
 "stackMatchesFilter"(arg0: $ItemStack$Type): boolean
 "onOverflow"(arg0: $ItemStack$Type): $ItemStack
}

export namespace $IOverflowResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverflowResponseUpgrade$Type = ($IOverflowResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOverflowResponseUpgrade_ = $IOverflowResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$ShulkerBoxFromChestRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $ShulkerBoxFromChestRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getCompose"(): $ShapedRecipe
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "compose"(): $ShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxFromChestRecipe$Type = ($ShulkerBoxFromChestRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxFromChestRecipe_ = $ShulkerBoxFromChestRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmokingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CookingUpgradeWrapper$SmokingUpgradeWrapper, $CookingUpgradeWrapper$SmokingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmokingUpgradeWrapper"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmokingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$SmokingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $CookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokingUpgradeItem$Type = ($SmokingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokingUpgradeItem_ = $SmokingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ITintableBlockItem" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITintableBlockItem {

 "isTintable"(arg0: $ItemStack$Type): boolean
 "setAccentColor"(arg0: $ItemStack$Type, arg1: integer): void
 "removeAccentColor"(arg0: $ItemStack$Type): void
 "removeMainColor"(arg0: $ItemStack$Type): void
 "setMainColor"(arg0: $ItemStack$Type, arg1: integer): void
 "getMainColor"(arg0: $ItemStack$Type): $Optional<(integer)>
 "getAccentColor"(arg0: $ItemStack$Type): $Optional<(integer)>
}

export namespace $ITintableBlockItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITintableBlockItem$Type = ($ITintableBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITintableBlockItem_ = $ITintableBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$JukeboxUpgradeItem$Wrapper, $JukeboxUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeItem$Wrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JukeboxUpgradeItem extends $UpgradeItemBase<($JukeboxUpgradeItem$Wrapper)> {
static readonly "TYPE": $UpgradeType<($JukeboxUpgradeItem$Wrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($JukeboxUpgradeItem$Wrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($JukeboxUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeItem$Type = ($JukeboxUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeItem_ = $JukeboxUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/compression/$CompressionUpgradeItem$Wrapper" {
import {$CompressionUpgradeItem, $CompressionUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/compression/$CompressionUpgradeItem"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $CompressionUpgradeItem$Wrapper extends $UpgradeWrapperBase<($CompressionUpgradeItem$Wrapper), ($CompressionUpgradeItem)> {


public "onAdded"(): void
public "onBeforeRemoved"(): void
public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressionUpgradeItem$Wrapper$Type = ($CompressionUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressionUpgradeItem$Wrapper_ = $CompressionUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$DepositUpgradeWrapper, $DepositUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DepositUpgradeItem extends $UpgradeItemBase<($DepositUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type)

public "getType"(): $UpgradeType<($DepositUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($DepositUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositUpgradeItem$Type = ($DepositUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositUpgradeItem_ = $DepositUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic$ObservableFilterItemStackHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilterItemStackHandler, $FilterItemStackHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$FilterItemStackHandler"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export class $FilterLogic$ObservableFilterItemStackHandler extends $FilterItemStackHandler {

constructor(arg0: $FilterLogic$Type)

public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setOnSlotChange"(arg0: $IntConsumer$Type): void
set "onSlotChange"(value: $IntConsumer$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogic$ObservableFilterItemStackHandler$Type = ($FilterLogic$ObservableFilterItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogic$ObservableFilterItemStackHandler_ = $FilterLogic$ObservableFilterItemStackHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $BatteryUpgradeConfig {
readonly "energyPerSlotRow": $ForgeConfigSpec$IntValue
readonly "stackMultiplierRatio": $ForgeConfigSpec$DoubleValue
readonly "maxInputOutput": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeConfig$Type = ($BatteryUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeConfig_ = $BatteryUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeWrapper" {
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$PickupUpgradeItem, $PickupUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeItem"
import {$IPickupResponseUpgrade, $IPickupResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IPickupResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $PickupUpgradeWrapper extends $UpgradeWrapperBase<($PickupUpgradeWrapper), ($PickupUpgradeItem)> implements $IPickupResponseUpgrade, $IContentsFilteredUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "pickup"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickupUpgradeWrapper$Type = ($PickupUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PickupUpgradeWrapper_ = $PickupUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem$Wrapper" {
import {$StackUpgradeItem, $StackUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $StackUpgradeItem$Wrapper extends $UpgradeWrapperBase<($StackUpgradeItem$Wrapper), ($StackUpgradeItem)> {


public "getStackSizeMultiplier"(): double
public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
get "stackSizeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackUpgradeItem$Wrapper$Type = ($StackUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackUpgradeItem$Wrapper_ = $StackUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/controller/$IControllableStorage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ControllerBlockEntityBase"
import {$IControllerBoundable, $IControllerBoundable$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$IControllerBoundable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IControllableStorage extends $IControllerBoundable {

 "removeFromController"(): void
 "registerWithControllerOnLoad"(): void
 "unregisterController"(): void
 "registerInventoryStackListeners"(): void
 "tryToAddToController"(): void
 "registerController"(arg0: $ControllerBlockEntityBase$Type): void
 "canConnectStorages"(): boolean
 "getStorageWrapper"(): $IStorageWrapper
 "updateEmptySlots"(): void
 "hasStorageData"(): boolean
 "addToController"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "changeSlots"(arg0: integer): void
 "getStorageBlockLevel"(): $Level
 "removeControllerPos"(): void
 "addToAdjacentController"(): void
 "loadControllerPos"(arg0: $CompoundTag$Type): void
 "saveControllerPos"(arg0: $CompoundTag$Type): void
 "setControllerPos"(arg0: $BlockPos$Type): void
 "getControllerPos"(): $Optional<($BlockPos)>
 "getStorageBlockPos"(): $BlockPos
 "runOnController"(arg0: $Level$Type, arg1: $Consumer$Type<($ControllerBlockEntityBase$Type)>): void
 "canBeConnected"(): boolean
}

export namespace $IControllableStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControllableStorage$Type = ($IControllableStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IControllableStorage_ = $IControllableStorage$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ChestBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$WoodStorageBlockEntity, $WoodStorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$WoodStorageBlockEntity"
import {$StorageWrapper, $StorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageWrapper"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChestBlock, $ChestBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ChestBlock"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $ChestBlockEntity extends $WoodStorageBlockEntity {
static readonly "STORAGE_TYPE": string
static readonly "DOUBLE_CHEST_MAIN_POS_TAG": string
static readonly "STORAGE_WRAPPER_TAG": string
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getOpenNess"(arg0: float): float
public "toggleLock"(): void
public "canBeLinked"(): boolean
public "onNeighborChange"(arg0: $BlockPos$Type): void
public "toggleTierVisiblity"(): void
public "toggleUpgradesVisiblity"(): void
public "toggleLockVisibility"(): void
public "getStorageContentsTag"(): $CompoundTag
public "loadSynchronizedData"(arg0: $CompoundTag$Type): void
public static "lidAnimateTick"(arg0: $ChestBlockEntity$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "dropContents"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getMainStorageWrapper"(): $StorageWrapper
public "removeDoubleMainPos"(): void
public "setDestroyedByPlayer"(): void
public "dropSecondPartContents"(arg0: $ChestBlock$Type, arg1: $BlockPos$Type): void
public "joinWithChest"(arg0: $ChestBlockEntity$Type): void
public "isMainChest"(): boolean
public "syncTogglesFrom"(arg0: $ChestBlockEntity$Type): void
public "setMainPos"(arg0: $BlockPos$Type): void
public "hasStorageData"(): boolean
public "changeSlots"(arg0: integer): void
get "storageContentsTag"(): $CompoundTag
get "mainStorageWrapper"(): $StorageWrapper
get "mainChest"(): boolean
set "mainPos"(value: $BlockPos$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestBlockEntity$Type = ($ChestBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestBlockEntity_ = $ChestBlockEntity$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UpgradeType$IFactory, $UpgradeType$IFactory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType$IFactory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"

export class $UpgradeType<T extends $IUpgradeWrapper> {

constructor(arg0: $UpgradeType$IFactory$Type<(T)>)

public "create"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$Type<T> = ($UpgradeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_<T> = $UpgradeType$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$DisplaySide" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DisplaySide extends $Enum<($DisplaySide)> implements $StringRepresentable {
static readonly "FRONT": $DisplaySide
static readonly "LEFT": $DisplaySide
static readonly "RIGHT": $DisplaySide


public static "values"(): ($DisplaySide)[]
public static "valueOf"(arg0: string): $DisplaySide
public "next"(): $DisplaySide
public "previous"(): $DisplaySide
public "getSerializedName"(): string
public static "fromName"(arg0: string): $DisplaySide
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplaySide$Type = (("left") | ("front") | ("right")) | ($DisplaySide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplaySide_ = $DisplaySide$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoBlastingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutoBlastingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $AutoCookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoBlastingUpgradeItem$Type = ($AutoBlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoBlastingUpgradeItem_ = $AutoBlastingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeItem" {
import {$InceptionUpgradeWrapper, $InceptionUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeWrapper"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InceptionUpgradeItem extends $UpgradeItemBase<($InceptionUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($InceptionUpgradeWrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
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

public "getType"(): $UpgradeType<($InceptionUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
public "canAddUpgradeTo"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
public "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
get "type"(): $UpgradeType<($InceptionUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InceptionUpgradeItem$Type = ($InceptionUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InceptionUpgradeItem_ = $InceptionUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilteredUpgradeConfigBase" {
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"

export class $FilteredUpgradeConfigBase {
readonly "filterSlots": $ForgeConfigSpec$IntValue
readonly "slotsInRow": $ForgeConfigSpec$IntValue


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteredUpgradeConfigBase$Type = ($FilteredUpgradeConfigBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilteredUpgradeConfigBase_ = $FilteredUpgradeConfigBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $UpgradeSlotChangeResult {


public "getErrorMessage"(): $Optional<($Component)>
public "getErrorUpgradeSlots"(): $Set<(integer)>
public "getErrorInventoryParts"(): $Set<(integer)>
public "getErrorInventorySlots"(): $Set<(integer)>
public "isSuccessful"(): boolean
get "errorMessage"(): $Optional<($Component)>
get "errorUpgradeSlots"(): $Set<(integer)>
get "errorInventoryParts"(): $Set<(integer)>
get "errorInventorySlots"(): $Set<(integer)>
get "successful"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSlotChangeResult$Type = ($UpgradeSlotChangeResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeSlotChangeResult_ = $UpgradeSlotChangeResult$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IIOFilterUpgrade" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export interface $IIOFilterUpgrade {

 "getInputFilter"(): $Optional<($FilterLogic)>
 "getOutputFilter"(): $Optional<($FilterLogic)>
}

export namespace $IIOFilterUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIOFilterUpgrade$Type = ($IIOFilterUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIOFilterUpgrade_ = $IIOFilterUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBase extends $Item {
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

public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBase$Type = ($ItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBase_ = $ItemBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo"

export interface $IRenderedBatteryUpgrade {

 "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo$Type)>): void
 "forceUpdateBatteryRenderInfo"(): void
}

export namespace $IRenderedBatteryUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedBatteryUpgrade$Type = ($IRenderedBatteryUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedBatteryUpgrade_ = $IRenderedBatteryUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEntityToolSwapUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IEntityToolSwapUpgrade {

 "canProcessEntityInteract"(): boolean
 "onEntityInteract"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Player$Type): boolean

(): boolean
}

export namespace $IEntityToolSwapUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityToolSwapUpgrade$Type = ($IEntityToolSwapUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityToolSwapUpgrade_ = $IEntityToolSwapUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$IMagnetPreventionChecker" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IMagnetPreventionChecker {

 "isBlocked"(arg0: $Entity$Type): boolean

(arg0: $Entity$Type): boolean
}

export namespace $IMagnetPreventionChecker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagnetPreventionChecker$Type = ($IMagnetPreventionChecker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMagnetPreventionChecker_ = $IMagnetPreventionChecker$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BackpackUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $BackpackUpgradeRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$Type = ($BackpackUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackUpgradeRecipe_ = $BackpackUpgradeRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$SortBy" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SortBy extends $Enum<($SortBy)> implements $StringRepresentable {
static readonly "NAME": $SortBy
static readonly "MOD": $SortBy
static readonly "COUNT": $SortBy
static readonly "TAGS": $SortBy


public static "values"(): ($SortBy)[]
public static "valueOf"(arg0: string): $SortBy
public "next"(): $SortBy
public "getSerializedName"(): string
public static "fromName"(arg0: string): $SortBy
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortBy$Type = (("mod") | ("name") | ("count") | ("tags")) | ($SortBy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SortBy_ = $SortBy$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageIOBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockBase, $BlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StorageIOBlock extends $BlockBase implements $EntityBlock {
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageIOBlock$Type = ($StorageIOBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageIOBlock_ = $StorageIOBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$PumpUpgradeItem, $PumpUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeItem"
import {$FluidFilterLogic, $FluidFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$FluidFilterLogic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $PumpUpgradeWrapper extends $UpgradeWrapperBase<($PumpUpgradeWrapper), ($PumpUpgradeItem)> implements $ITickableUpgrade {


public "isInput"(): boolean
public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$Type): integer
public "getFluidFilterLogic"(): $FluidFilterLogic
public "setInteractWithHand"(arg0: boolean): void
public "setInteractWithWorld"(arg0: boolean): void
public "shouldInteractWithHand"(): boolean
public "shouldInteractWithWorld"(): boolean
public "setIsInput"(arg0: boolean): void
get "input"(): boolean
get "fluidFilterLogic"(): $FluidFilterLogic
set "interactWithHand"(value: boolean)
set "interactWithWorld"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeWrapper$Type = ($PumpUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeWrapper_ = $PumpUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TankUpgradeWrapper, $TankUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeWrapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TankUpgradeConfig, $TankUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeConfig"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TankUpgradeItem extends $UpgradeItemBase<($TankUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($TankUpgradeWrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $TankUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($TankUpgradeWrapper)>
public "getInventoryColumnsTaken"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean): $UpgradeSlotChangeResult
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$Type): integer
public "getTankUpgradeConfig"(): $TankUpgradeConfig
public "getTankCapacity"(arg0: $IStorageWrapper$Type): integer
public "getBaseCapacity"(arg0: $IStorageWrapper$Type): integer
get "type"(): $UpgradeType<($TankUpgradeWrapper)>
get "inventoryColumnsTaken"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "tankUpgradeConfig"(): $TankUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeItem$Type = ($TankUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeItem_ = $TankUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ChestBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ChestType, $ChestType$Type} from "packages/net/minecraft/world/level/block/state/properties/$ChestType"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WoodStorageBlockBase, $WoodStorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$WoodStorageBlockBase"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ChestBlockEntity, $ChestBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ChestBlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockFamily, $BlockFamily$Type} from "packages/net/minecraft/data/$BlockFamily"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$IDisplaySideStorage, $IDisplaySideStorage$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IDisplaySideStorage"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ChestBlock extends $WoodStorageBlockBase implements $SimpleWaterloggedBlock, $IDisplaySideStorage {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "TICKING": $BooleanProperty
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

constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>)
constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>, arg2: float)

public static "getConnectedDirection"(arg0: $BlockState$Type): $Direction
public "getFacing"(arg0: $BlockState$Type): $Direction
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getNeighborPos"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $BlockPos
public "addDropData"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $ChestBlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "canChangeDisplaySide"(arg0: $BlockState$Type): boolean
public static "isChestBlockedAt"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestBlock$Type = ($ChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestBlock_ = $ChestBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper" {
import {$RenderInfo, $RenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$UpgradeHandler, $UpgradeHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeHandler"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$SortBy, $SortBy$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$SortBy"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SettingsHandler, $SettingsHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$SettingsHandler"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"

export interface $IStorageWrapper {

 "sort"(): void
 "getDisplayName"(): $Component
 "onInit"(): void
 "getInventoryHandler"(): $InventoryHandler
 "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$Type): void
 "getNumberOfSlotRows"(): integer
 "getBaseStackSizeMultiplier"(): integer
 "getWrappedStorageStack"(): $ItemStack
 "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
 "refreshInventoryForInputOutput"(): void
 "setInventorySlotChangeHandler"(arg0: $Runnable$Type): void
 "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
 "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
 "getEnergyStorage"(): $Optional<($IEnergyStorage)>
 "refreshInventoryForUpgradeProcessing"(): void
 "setColors"(arg0: integer, arg1: integer): void
 "onContentsNbtUpdated"(): void
 "getMainColor"(): integer
 "getAccentColor"(): integer
 "getStorageType"(): string
 "setSaveHandler"(arg0: $Runnable$Type): void
 "getSettingsHandler"(): $SettingsHandler
 "getOpenTabId"(): $Optional<(integer)>
 "setSortBy"(arg0: $SortBy$Type): void
 "removeOpenTabId"(): void
 "setOpenTabId"(arg0: integer): void
 "getSortBy"(): $SortBy
 "setColumnsTaken"(arg0: integer, arg1: boolean): void
 "getColumnsTaken"(): integer
 "fillWithLoot"(arg0: $Player$Type): void
 "setPersistent"(arg0: boolean): void
 "getRenderInfo"(): $RenderInfo
 "getContentsUuid"(): $Optional<($UUID)>
 "getUpgradeHandler"(): $UpgradeHandler
}

export namespace $IStorageWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageWrapper$Type = ($IStorageWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageWrapper_ = $IStorageWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeHandler extends $ItemStackHandler {
static readonly "UPGRADE_INVENTORY_TAG": string

constructor(arg0: integer, arg1: $IStorageWrapper$Type, arg2: $CompoundTag$Type, arg3: $Runnable$Type, arg4: $Runnable$Type)

public "setSize"(arg0: integer): void
public "copyTo"(arg0: $UpgradeHandler$Type): void
public "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "refreshWrappersThatImplementAndTypeWrappers"(): void
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "getWrappersThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "hasUpgrade"<T extends $IUpgradeWrapper>(arg0: $UpgradeType$Type<(T)>): boolean
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setRenderUpgradeItems"(): void
public "registerUpgradeDefaultsHandler"<T extends $IUpgradeWrapper>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "refreshUpgradeWrappers"(): void
public "getSlotWrappers"(): $Map<(integer), ($IUpgradeWrapper)>
public "getTypeWrappers"<T extends $IUpgradeWrapper>(arg0: $UpgradeType$Type<(T)>): $List<(T)>
public "setPersistent"(arg0: boolean): void
public "saveInventory"(): void
public "setRefreshCallBack"(arg0: $Runnable$Type): void
public "getListOfWrappersThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "removeRefreshCallback"(): void
public "increaseSize"(arg0: integer): void
set "size"(value: integer)
get "slotWrappers"(): $Map<(integer), ($IUpgradeWrapper)>
set "persistent"(value: boolean)
set "refreshCallBack"(value: $Runnable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeHandler$Type = ($UpgradeHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeHandler_ = $UpgradeHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$ChestBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WoodStorageBlockItem, $WoodStorageBlockItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$WoodStorageBlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChestBlockItem extends $WoodStorageBlockItem {
static readonly "WOOD_TYPE_TAG": string
static readonly "PACKED_TAG": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type)
constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public static "setDoubleChest"(arg0: $ItemStack$Type, arg1: boolean): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "isDoubleChest"(arg0: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestBlockItem$Type = ($ChestBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestBlockItem_ = $ChestBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$HungerLevel" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $HungerLevel extends $Enum<($HungerLevel)> implements $StringRepresentable {
static readonly "ANY": $HungerLevel
static readonly "HALF": $HungerLevel
static readonly "FULL": $HungerLevel


public static "values"(): ($HungerLevel)[]
public static "valueOf"(arg0: string): $HungerLevel
public "next"(): $HungerLevel
public "getSerializedName"(): string
public static "fromName"(arg0: string): $HungerLevel
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HungerLevel$Type = (("half") | ("any") | ("full")) | ($HungerLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HungerLevel_ = $HungerLevel$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$TankPosition" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TankPosition extends $Enum<($TankPosition)> implements $StringRepresentable {
static readonly "LEFT": $TankPosition
static readonly "RIGHT": $TankPosition


public static "values"(): ($TankPosition)[]
public static "valueOf"(arg0: string): $TankPosition
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankPosition$Type = (("left") | ("right")) | ($TankPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankPosition_ = $TankPosition$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$StonecutterUpgradeWrapper, $StonecutterUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StonecutterUpgradeItem extends $UpgradeItemBase<($StonecutterUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($StonecutterUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($StonecutterUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterUpgradeItem$Type = ($StonecutterUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StonecutterUpgradeItem_ = $StonecutterUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ISlotLimitUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISlotLimitUpgrade {

 "getSlotLimit"(): integer

(): integer
}

export namespace $ISlotLimitUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotLimitUpgrade$Type = ($ISlotLimitUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotLimitUpgrade_ = $ISlotLimitUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PumpUpgradeConfig, $PumpUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeConfig"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$PumpUpgradeWrapper, $PumpUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PumpUpgradeItem extends $UpgradeItemBase<($PumpUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: boolean, arg1: boolean, arg2: $PumpUpgradeConfig$Type, arg3: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($PumpUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getInteractWithHandDefault"(): boolean
public "getInteractWithWorldDefault"(): boolean
public "getPumpUpgradeConfig"(): $PumpUpgradeConfig
get "type"(): $UpgradeType<($PumpUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "interactWithHandDefault"(): boolean
get "interactWithWorldDefault"(): boolean
get "pumpUpgradeConfig"(): $PumpUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeItem$Type = ($PumpUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeItem_ = $PumpUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType$IFactory" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"

export interface $UpgradeType$IFactory<T extends $IUpgradeWrapper> {

 "create"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>): T

(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>): T
}

export namespace $UpgradeType$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$IFactory$Type<T> = ($UpgradeType$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$IFactory_<T> = $UpgradeType$IFactory$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IAttackEntityResponseUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IAttackEntityResponseUpgrade {

 "onAttackEntity"(arg0: $Player$Type): boolean

(arg0: $Player$Type): boolean
}

export namespace $IAttackEntityResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttackEntityResponseUpgrade$Type = ($IAttackEntityResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttackEntityResponseUpgrade_ = $IAttackEntityResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$FeedingUpgradeWrapper, $FeedingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeWrapper"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FeedingUpgradeItem extends $UpgradeItemBase<($FeedingUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($FeedingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($FeedingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($FeedingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingUpgradeItem$Type = ($FeedingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedingUpgradeItem_ = $FeedingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageToolItem$Mode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $StorageToolItem$Mode extends $Enum<($StorageToolItem$Mode)> implements $StringRepresentable {
static readonly "LINK": $StorageToolItem$Mode
static readonly "LOCK": $StorageToolItem$Mode
static readonly "COUNT_DISPLAY": $StorageToolItem$Mode
static readonly "LOCK_DISPLAY": $StorageToolItem$Mode
static readonly "TIER_DISPLAY": $StorageToolItem$Mode
static readonly "UPGRADES_DISPLAY": $StorageToolItem$Mode
static readonly "FILL_LEVEL_DISPLAY": $StorageToolItem$Mode


public static "values"(): ($StorageToolItem$Mode)[]
public static "valueOf"(arg0: string): $StorageToolItem$Mode
public "next"(): $StorageToolItem$Mode
public "previous"(): $StorageToolItem$Mode
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageToolItem$Mode$Type = (("tier_display") | ("fill_level_display") | ("upgrades_display") | ("link") | ("lock") | ("count_display") | ("lock_display")) | ($StorageToolItem$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageToolItem$Mode_ = $StorageToolItem$Mode$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RefillUpgradeWrapper, $RefillUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RefillUpgradeItem extends $UpgradeItemBase<($RefillUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IntSupplier$Type, arg1: boolean, arg2: boolean)

public "getType"(): $UpgradeType<($RefillUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "allowsTargetSlotSelection"(): boolean
public "getFilterSlotCount"(): integer
public "supportsBlockPick"(): boolean
get "type"(): $UpgradeType<($RefillUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeItem$Type = ($RefillUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeItem_ = $RefillUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IItemHandlerInteractionUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemHandlerInteractionUpgrade {

 "onHandlerInteract"(arg0: $IItemHandler$Type, arg1: $Player$Type): void

(arg0: $IItemHandler$Type, arg1: $Player$Type): void
}

export namespace $IItemHandlerInteractionUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerInteractionUpgrade$Type = ($IItemHandlerInteractionUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerInteractionUpgrade_ = $IItemHandlerInteractionUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$HungerLevel, $HungerLevel$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$HungerLevel"
import {$FeedingUpgradeItem, $FeedingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $FeedingUpgradeWrapper extends $UpgradeWrapperBase<($FeedingUpgradeWrapper), ($FeedingUpgradeItem)> implements $ITickableUpgrade, $IFilteredUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "tick"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "setFeedAtHungerLevel"(arg0: $HungerLevel$Type): void
public "shouldFeedImmediatelyWhenHurt"(): boolean
public "setFeedImmediatelyWhenHurt"(arg0: boolean): void
public "getFeedAtHungerLevel"(): $HungerLevel
public "getFilterLogic"(): $FilterLogic
set "feedAtHungerLevel"(value: $HungerLevel$Type)
set "feedImmediatelyWhenHurt"(value: boolean)
get "feedAtHungerLevel"(): $HungerLevel
get "filterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingUpgradeWrapper$Type = ($FeedingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedingUpgradeWrapper_ = $FeedingUpgradeWrapper$Type;
}}
