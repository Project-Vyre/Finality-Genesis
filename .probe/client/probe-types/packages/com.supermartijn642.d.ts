declare module "packages/com/supermartijn642/core/item/$ItemRarity" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $ItemRarity extends $Enum<($ItemRarity)> {
static readonly "COMMON": $ItemRarity
static readonly "UNCOMMON": $ItemRarity
static readonly "RARE": $ItemRarity
static readonly "EPIC": $ItemRarity


public static "values"(): ($ItemRarity)[]
public static "valueOf"(name: string): $ItemRarity
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $Rarity
get "underlying"(): $Rarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRarity$Type = (("uncommon") | ("common") | ("rare") | ("epic")) | ($ItemRarity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRarity_ = $ItemRarity$Type;
}}
declare module "packages/com/supermartijn642/core/data/tag/$CustomTagEntry" {
import {$CustomTagEntry$TagEntryResolutionContext, $CustomTagEntry$TagEntryResolutionContext$Type} from "packages/com/supermartijn642/core/data/tag/$CustomTagEntry$TagEntryResolutionContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CustomTagEntrySerializer, $CustomTagEntrySerializer$Type} from "packages/com/supermartijn642/core/data/tag/$CustomTagEntrySerializer"
import {$TagEntry, $TagEntry$Type} from "packages/net/minecraft/tags/$TagEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CustomTagEntry {

 "resolve"<T>(context: $CustomTagEntry$TagEntryResolutionContext$Type<(T)>): $Collection<(T)>
 "getSerializer"(): $CustomTagEntrySerializer<(any)>
 "getTagDependencies"(): $Collection<($ResourceLocation)>
}

export namespace $CustomTagEntry {
function createVanillaEntry(customEntry: $CustomTagEntry$Type): $TagEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTagEntry$Type = ($CustomTagEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTagEntry_ = $CustomTagEntry$Type;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$TextureAtlasSpriteExtension" {
import {$TextureType, $TextureType$Type} from "packages/com/supermartijn642/fusion/api/texture/$TextureType"

export interface $TextureAtlasSpriteExtension {

 "getFusionTextureType"(): $TextureType<(any)>
 "setFusionTextureType"(type: $TextureType$Type<(any)>): void
}

export namespace $TextureAtlasSpriteExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSpriteExtension$Type = ($TextureAtlasSpriteExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasSpriteExtension_ = $TextureAtlasSpriteExtension$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/texture/$SpriteCreationContext" {
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $SpriteCreationContext {

 "getSpritePositionY"(): integer
 "getTextureWidth"(): integer
 "getSpritePositionX"(): integer
 "getAtlasHeight"(): integer
 "getAtlasWidth"(): integer
 "getTextureHeight"(): integer
 "createOriginalSprite"(): $TextureAtlasSprite
 "getAtlas"(): $TextureAtlas
 "getTextureIdentifier"(): $ResourceLocation
 "getMipmapLevels"(): integer
 "getSpriteWidth"(): integer
 "getSpriteHeight"(): integer
 "getTextureBuffers"(): ($NativeImage)[]
}

export namespace $SpriteCreationContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteCreationContext$Type = ($SpriteCreationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteCreationContext_ = $SpriteCreationContext$Type;
}}
declare module "packages/com/supermartijn642/core/data/tag/$CustomTagEntry$TagEntryResolutionContext" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CustomTagEntry$TagEntryResolutionContext<T> {

 "getAllElements"(): $Collection<(T)>
 "getTag"(identifier: $ResourceLocation$Type): $Collection<(T)>
 "getElement"(identifier: $ResourceLocation$Type): T
 "getAllIdentifiers"(): $Set<($ResourceLocation)>
}

export namespace $CustomTagEntry$TagEntryResolutionContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTagEntry$TagEntryResolutionContext$Type<T> = ($CustomTagEntry$TagEntryResolutionContext<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTagEntry$TagEntryResolutionContext_<T> = $CustomTagEntry$TagEntryResolutionContext$Type<(T)>;
}}
declare module "packages/com/supermartijn642/pottery/content/$PotBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityHoldingBlock, $EntityHoldingBlock$Type} from "packages/com/supermartijn642/core/block/$EntityHoldingBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PotColor, $PotColor$Type} from "packages/com/supermartijn642/pottery/content/$PotColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/supermartijn642/core/block/$BaseBlock"
import {$PotType, $PotType$Type} from "packages/com/supermartijn642/pottery/content/$PotType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PotBlock extends $BaseBlock implements $EntityHoldingBlock, $SimpleWaterloggedBlock {
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "CRACKED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $PotType$Type, arg1: $PotColor$Type)

public "getType"(): $PotType
public "getColor"(): $PotColor
public "onProjectileHit"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockHitResult$Type, arg3: $Projectile$Type): void
public "createNewBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getSoundType"(arg0: $BlockState$Type): $SoundType
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, entityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "type"(): $PotType
get "color"(): $PotColor
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotBlock$Type = ($PotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotBlock_ = $PotBlock$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$ModelType" {
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ModelBakingContext, $ModelBakingContext$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelBakingContext"
import {$Serializer, $Serializer$Type} from "packages/com/supermartijn642/fusion/api/util/$Serializer"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ModelType<T> extends $Serializer<(T)> {

 "getModelDependencies"(data: T): $Collection<($ResourceLocation)>
 "getAsVanillaModel"(data: T): $BlockModel
 "bake"(context: $ModelBakingContext$Type, data: T): $BakedModel
 "deserialize"(json: $JsonObject$Type): T
 "serialize"(value: T): $JsonObject
}

export namespace $ModelType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelType$Type<T> = ($ModelType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelType_<T> = $ModelType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/gui/$BaseContainer" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseContainerType, $BaseContainerType$Type} from "packages/com/supermartijn642/core/gui/$BaseContainerType"

export class $BaseContainer extends $AbstractContainerMenu {
readonly "player": $Player
readonly "level": $Level
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer

constructor(type: $BaseContainerType$Type<(any)>, player: $Player$Type)

public "stillValid"(playerIn: $Player$Type): boolean
public "setContainerId"(id: integer): void
public "getContainerType"(): $BaseContainerType<(any)>
set "containerId"(value: integer)
get "containerType"(): $BaseContainerType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainer$Type = ($BaseContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseContainer_ = $BaseContainer$Type;
}}
declare module "packages/com/supermartijn642/core/item/$CreativeItemGroup" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$DisplayItemsGenerator$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$DisplayItemsGenerator"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CreativeItemGroup extends $CreativeModeTab {
 "displayItems": $Collection<($ItemStack)>
 "displayItemsGenerator": $CreativeModeTab$DisplayItemsGenerator
readonly "tabsBefore": $List<($ResourceLocation)>
readonly "tabsAfter": $List<($ResourceLocation)>


public static "create"(modid: string, name: string, icon: $Supplier$Type<($ItemStack$Type)>): $CreativeItemGroup
public static "create"(modid: string, icon: $ItemLike$Type): $CreativeItemGroup
public static "create"(modid: string, icon: $Supplier$Type<($ItemStack$Type)>): $CreativeItemGroup
public static "create"(modid: string, name: string, icon: $ItemLike$Type): $CreativeItemGroup
public "sorter"(sorter: $Comparator$Type<($ItemStack$Type)>): $CreativeItemGroup
public "getBackgroundLocation"(): $ResourceLocation
public "getDisplayItems"(): $Collection<($ItemStack)>
public static "getFunctionalBlocks"(): $CreativeModeTab
public static "getToolsAndUtilities"(): $CreativeModeTab
public static "getOperatorUtilities"(): $CreativeModeTab
public static "getNaturalBlocks"(): $CreativeModeTab
public "filler"(filler: $Consumer$Type<($Consumer$Type<($ItemStack$Type)>)>): $CreativeItemGroup
public "buildContents"(parameters: $CreativeModeTab$ItemDisplayParameters$Type): void
public static "getSearch"(): $CreativeModeTab
public static "getColoredBlocks"(): $CreativeModeTab
public static "getBuildingBlocks"(): $CreativeModeTab
public static "getRedstoneBlocks"(): $CreativeModeTab
public static "getSpawnEggs"(): $CreativeModeTab
public static "getCombat"(): $CreativeModeTab
public static "getFoodAndDrinks"(): $CreativeModeTab
public "sortAlphabetically"(): $CreativeItemGroup
public static "getIngredients"(): $CreativeModeTab
get "backgroundLocation"(): $ResourceLocation
get "displayItems"(): $Collection<($ItemStack)>
get "functionalBlocks"(): $CreativeModeTab
get "toolsAndUtilities"(): $CreativeModeTab
get "operatorUtilities"(): $CreativeModeTab
get "naturalBlocks"(): $CreativeModeTab
get "search"(): $CreativeModeTab
get "coloredBlocks"(): $CreativeModeTab
get "buildingBlocks"(): $CreativeModeTab
get "redstoneBlocks"(): $CreativeModeTab
get "spawnEggs"(): $CreativeModeTab
get "combat"(): $CreativeModeTab
get "foodAndDrinks"(): $CreativeModeTab
get "ingredients"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeItemGroup$Type = ($CreativeItemGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeItemGroup_ = $CreativeItemGroup$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseItem$ItemUseResult" {
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $BaseItem$ItemUseResult {


public static "fail"(stack: $ItemStack$Type): $BaseItem$ItemUseResult
public static "pass"(stack: $ItemStack$Type): $BaseItem$ItemUseResult
public static "consume"(stack: $ItemStack$Type): $BaseItem$ItemUseResult
public static "success"(stack: $ItemStack$Type): $BaseItem$ItemUseResult
/**
 * 
 * @deprecated
 */
public "toUnderlying"(isClientSide: boolean): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(underlying: $InteractionResultHolder$Type<($ItemStack$Type)>): $BaseItem$ItemUseResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$ItemUseResult$Type = ($BaseItem$ItemUseResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem$ItemUseResult_ = $BaseItem$ItemUseResult$Type;
}}
declare module "packages/com/supermartijn642/core/registry/$RegistrationHandler$Helper" {
import {$Registries$Registry, $Registries$Registry$Type} from "packages/com/supermartijn642/core/registry/$Registries$Registry"
import {$RegistrationHandler, $RegistrationHandler$Type} from "packages/com/supermartijn642/core/registry/$RegistrationHandler"

export class $RegistrationHandler$Helper<T> {

constructor(this$0: $RegistrationHandler$Type, registry: $Registries$Registry$Type<(T)>)

public "register"<X extends T>(identifier: string, object: X): X
public "registerOverride"<X extends T>(namespace: string, identifier: string, object: X): X
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrationHandler$Helper$Type<T> = ($RegistrationHandler$Helper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrationHandler$Helper_<T> = $RegistrationHandler$Helper$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/data/condition/$ResourceConditionSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IConditionSerializer, $IConditionSerializer$Type} from "packages/net/minecraftforge/common/crafting/conditions/$IConditionSerializer"
import {$ResourceCondition, $ResourceCondition$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceCondition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ResourceConditionSerializer<T extends $ResourceCondition> {

 "deserialize"(json: $JsonObject$Type): T
 "serialize"(json: $JsonObject$Type, condition: T): void
}

export namespace $ResourceConditionSerializer {
function createForgeConditionSerializer(identifier: $ResourceLocation$Type, serializer: $ResourceConditionSerializer$Type<(any)>): $IConditionSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionSerializer$Type<T> = ($ResourceConditionSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConditionSerializer_<T> = $ResourceConditionSerializer$Type<(T)>;
}}
declare module "packages/com/supermartijn642/rechiseled/create/mechanical_chisel/$MechanicalChiselBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ProcessingInventory, $ProcessingInventory$Type} from "packages/com/simibubi/create/content/processing/recipe/$ProcessingInventory"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $MechanicalChiselBlockEntity extends $KineticBlockEntity {
 "inventory": $ProcessingInventory
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "start"(arg0: $ItemStack$Type): void
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "destroy"(): void
public "invalidate"(): void
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "tickAudio"(): void
public "insertItem"(arg0: $ItemEntity$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getItemMovementVec"(): $Vec3
get "itemMovementVec"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MechanicalChiselBlockEntity$Type = ($MechanicalChiselBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MechanicalChiselBlockEntity_ = $MechanicalChiselBlockEntity$Type;
}}
declare module "packages/com/supermartijn642/core/block/$BaseBlockEntityType" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$ShulkerBoxBlockEntity, $ShulkerBoxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity"
import {$BeehiveBlockEntity, $BeehiveBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ComparatorBlockEntity, $ComparatorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ComparatorBlockEntity"
import {$DropperBlockEntity, $DropperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DropperBlockEntity"
import {$BrewingStandBlockEntity, $BrewingStandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrewingStandBlockEntity"
import {$DaylightDetectorBlockEntity, $DaylightDetectorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DaylightDetectorBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$HangingSignBlockEntity, $HangingSignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HangingSignBlockEntity"
import {$SignBlockEntity, $SignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import {$JukeboxBlockEntity, $JukeboxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JukeboxBlockEntity"
import {$SculkShriekerBlockEntity, $SculkShriekerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkShriekerBlockEntity"
import {$EnchantmentTableBlockEntity, $EnchantmentTableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnchantmentTableBlockEntity"
import {$CalibratedSculkSensorBlockEntity, $CalibratedSculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CalibratedSculkSensorBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ChiseledBookShelfBlockEntity, $ChiseledBookShelfBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChiseledBookShelfBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BrushableBlockEntity, $BrushableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrushableBlockEntity"
import {$FurnaceBlockEntity, $FurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$FurnaceBlockEntity"
import {$DispenserBlockEntity, $DispenserBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DispenserBlockEntity"
import {$EnderChestBlockEntity, $EnderChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnderChestBlockEntity"
import {$SculkSensorBlockEntity, $SculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkSensorBlockEntity"
import {$BarrelBlockEntity, $BarrelBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BarrelBlockEntity"
import {$ChestBlockEntity, $ChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChestBlockEntity"
import {$BannerBlockEntity, $BannerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BannerBlockEntity"
import {$TheEndGatewayBlockEntity, $TheEndGatewayBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndGatewayBlockEntity"
import {$CommandBlockEntity, $CommandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity"
import {$BellBlockEntity, $BellBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BellBlockEntity"
import {$TrappedChestBlockEntity, $TrappedChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TrappedChestBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SmokerBlockEntity, $SmokerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SmokerBlockEntity"
import {$BlastFurnaceBlockEntity, $BlastFurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlastFurnaceBlockEntity"
import {$DecoratedPotBlockEntity, $DecoratedPotBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$HopperBlockEntity, $HopperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HopperBlockEntity"
import {$TheEndPortalBlockEntity, $TheEndPortalBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndPortalBlockEntity"
import {$BeaconBlockEntity, $BeaconBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StructureBlockEntity, $StructureBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity"
import {$SpawnerBlockEntity, $SpawnerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SpawnerBlockEntity"
import {$JigsawBlockEntity, $JigsawBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity"
import {$ConduitBlockEntity, $ConduitBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ConduitBlockEntity"
import {$BedBlockEntity, $BedBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BedBlockEntity"
import {$SculkCatalystBlockEntity, $SculkCatalystBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/supermartijn642/core/block/$BaseBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SkullBlockEntity, $SkullBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SkullBlockEntity"
import {$LecternBlockEntity, $LecternBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$LecternBlockEntity"
import {$CampfireBlockEntity, $CampfireBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CampfireBlockEntity"

export class $BaseBlockEntityType<T extends $BlockEntity> extends $BlockEntityType<(T)> {
static readonly "FURNACE": $BlockEntityType<($FurnaceBlockEntity)>
static readonly "CHEST": $BlockEntityType<($ChestBlockEntity)>
static readonly "TRAPPED_CHEST": $BlockEntityType<($TrappedChestBlockEntity)>
static readonly "ENDER_CHEST": $BlockEntityType<($EnderChestBlockEntity)>
static readonly "JUKEBOX": $BlockEntityType<($JukeboxBlockEntity)>
static readonly "DISPENSER": $BlockEntityType<($DispenserBlockEntity)>
static readonly "DROPPER": $BlockEntityType<($DropperBlockEntity)>
static readonly "SIGN": $BlockEntityType<($SignBlockEntity)>
static readonly "HANGING_SIGN": $BlockEntityType<($HangingSignBlockEntity)>
static readonly "MOB_SPAWNER": $BlockEntityType<($SpawnerBlockEntity)>
static readonly "PISTON": $BlockEntityType<($PistonMovingBlockEntity)>
static readonly "BREWING_STAND": $BlockEntityType<($BrewingStandBlockEntity)>
static readonly "ENCHANTING_TABLE": $BlockEntityType<($EnchantmentTableBlockEntity)>
static readonly "END_PORTAL": $BlockEntityType<($TheEndPortalBlockEntity)>
static readonly "BEACON": $BlockEntityType<($BeaconBlockEntity)>
static readonly "SKULL": $BlockEntityType<($SkullBlockEntity)>
static readonly "DAYLIGHT_DETECTOR": $BlockEntityType<($DaylightDetectorBlockEntity)>
static readonly "HOPPER": $BlockEntityType<($HopperBlockEntity)>
static readonly "COMPARATOR": $BlockEntityType<($ComparatorBlockEntity)>
static readonly "BANNER": $BlockEntityType<($BannerBlockEntity)>
static readonly "STRUCTURE_BLOCK": $BlockEntityType<($StructureBlockEntity)>
static readonly "END_GATEWAY": $BlockEntityType<($TheEndGatewayBlockEntity)>
static readonly "COMMAND_BLOCK": $BlockEntityType<($CommandBlockEntity)>
static readonly "SHULKER_BOX": $BlockEntityType<($ShulkerBoxBlockEntity)>
static readonly "BED": $BlockEntityType<($BedBlockEntity)>
static readonly "CONDUIT": $BlockEntityType<($ConduitBlockEntity)>
static readonly "BARREL": $BlockEntityType<($BarrelBlockEntity)>
static readonly "SMOKER": $BlockEntityType<($SmokerBlockEntity)>
static readonly "BLAST_FURNACE": $BlockEntityType<($BlastFurnaceBlockEntity)>
static readonly "LECTERN": $BlockEntityType<($LecternBlockEntity)>
static readonly "BELL": $BlockEntityType<($BellBlockEntity)>
static readonly "JIGSAW": $BlockEntityType<($JigsawBlockEntity)>
static readonly "CAMPFIRE": $BlockEntityType<($CampfireBlockEntity)>
static readonly "BEEHIVE": $BlockEntityType<($BeehiveBlockEntity)>
static readonly "SCULK_SENSOR": $BlockEntityType<($SculkSensorBlockEntity)>
static readonly "CALIBRATED_SCULK_SENSOR": $BlockEntityType<($CalibratedSculkSensorBlockEntity)>
static readonly "SCULK_CATALYST": $BlockEntityType<($SculkCatalystBlockEntity)>
static readonly "SCULK_SHRIEKER": $BlockEntityType<($SculkShriekerBlockEntity)>
static readonly "CHISELED_BOOKSHELF": $BlockEntityType<($ChiseledBookShelfBlockEntity)>
static readonly "BRUSHABLE_BLOCK": $BlockEntityType<($BrushableBlockEntity)>
static readonly "DECORATED_POT": $BlockEntityType<($DecoratedPotBlockEntity)>
 "factory": $BlockEntityType$BlockEntitySupplier<(any)>
 "validBlocks": $Set<($Block)>


public static "create"<T extends $BaseBlockEntity>(entitySupplier: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), (T)>, ...validBlocks: ($Block$Type)[]): $BaseBlockEntityType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntityType$Type<T> = ($BaseBlockEntityType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntityType_<T> = $BaseBlockEntityType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/rechiseled/$ChiselItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseItem, $BaseItem$Type} from "packages/com/supermartijn642/core/item/$BaseItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChiselItem extends $BaseItem {
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

public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "setStoredStack"(chisel: $ItemStack$Type, stack: $ItemStack$Type): void
public static "getStoredStack"(chisel: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiselItem$Type = ($ChiselItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiselItem_ = $ChiselItem$Type;
}}
declare module "packages/com/supermartijn642/core/block/$BlockShape" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockShape$PointConsumer, $BlockShape$PointConsumer$Type} from "packages/com/supermartijn642/core/block/$BlockShape$PointConsumer"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockShape$LineConsumer, $BlockShape$LineConsumer$Type} from "packages/com/supermartijn642/core/block/$BlockShape$LineConsumer"

export class $BlockShape {

constructor(shapes: $List$Type<($AABB$Type)>)
constructor(shape: $AABB$Type)
constructor(shape: $VoxelShape$Type)

public "isEmpty"(): boolean
public "offset"(x: double, y: double, z: double): $BlockShape
public "offset"(pos: $BlockPos$Type): $BlockShape
public "offset"(direction: $Direction$Type): $BlockShape
public static "empty"(): $BlockShape
public static "create"(box: $AABB$Type): $BlockShape
public static "create"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): $BlockShape
public static "create"(box: $VoxelShape$Type): $BlockShape
public "grow"(amount: double): $BlockShape
public "flip"(axis: $Direction$Axis$Type): $BlockShape
public "rotate"(axis: $Direction$Axis$Type): $BlockShape
public static "or"(shape: $BlockShape$Type, ...shapes: ($BlockShape$Type)[]): $BlockShape
public static "intersects"(shape1: $BlockShape$Type, shape2: $BlockShape$Type): boolean
public "intersects"(shape: $BlockShape$Type): boolean
public "getStart"(axis: $Direction$Axis$Type): double
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $VoxelShape
public "shrink"(amount: double): $BlockShape
public static "createBlockShape"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): $BlockShape
public "minX"(): double
public "minY"(): double
public "minZ"(): double
public "maxY"(): double
public "maxX"(): double
public "maxZ"(): double
public "forEachBox"(action: $Consumer$Type<($AABB$Type)>): void
public "simplify"(): $AABB
public static "fullCube"(): $BlockShape
public "getEnd"(axis: $Direction$Axis$Type): double
public "toBoxes"(): $List<($AABB)>
public "forEachCorner"(action: $BlockShape$PointConsumer$Type): void
public "forEachEdge"(action: $BlockShape$LineConsumer$Type): void
get "underlying"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockShape$Type = ($BlockShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockShape_ = $BlockShape$Type;
}}
declare module "packages/com/supermartijn642/core/gui/$BaseContainerType" {
import {$LecternMenu, $LecternMenu$Type} from "packages/net/minecraft/world/inventory/$LecternMenu"
import {$DispenserMenu, $DispenserMenu$Type} from "packages/net/minecraft/world/inventory/$DispenserMenu"
import {$SmithingMenu, $SmithingMenu$Type} from "packages/net/minecraft/world/inventory/$SmithingMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$GrindstoneMenu, $GrindstoneMenu$Type} from "packages/net/minecraft/world/inventory/$GrindstoneMenu"
import {$LoomMenu, $LoomMenu$Type} from "packages/net/minecraft/world/inventory/$LoomMenu"
import {$MerchantMenu, $MerchantMenu$Type} from "packages/net/minecraft/world/inventory/$MerchantMenu"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BeaconMenu, $BeaconMenu$Type} from "packages/net/minecraft/world/inventory/$BeaconMenu"
import {$StonecutterMenu, $StonecutterMenu$Type} from "packages/net/minecraft/world/inventory/$StonecutterMenu"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ChestMenu, $ChestMenu$Type} from "packages/net/minecraft/world/inventory/$ChestMenu"
import {$SmokerMenu, $SmokerMenu$Type} from "packages/net/minecraft/world/inventory/$SmokerMenu"
import {$FurnaceMenu, $FurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$FurnaceMenu"
import {$AnvilMenu, $AnvilMenu$Type} from "packages/net/minecraft/world/inventory/$AnvilMenu"
import {$CraftingMenu, $CraftingMenu$Type} from "packages/net/minecraft/world/inventory/$CraftingMenu"
import {$CartographyTableMenu, $CartographyTableMenu$Type} from "packages/net/minecraft/world/inventory/$CartographyTableMenu"
import {$BaseContainer, $BaseContainer$Type} from "packages/com/supermartijn642/core/gui/$BaseContainer"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ShulkerBoxMenu, $ShulkerBoxMenu$Type} from "packages/net/minecraft/world/inventory/$ShulkerBoxMenu"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$HopperMenu, $HopperMenu$Type} from "packages/net/minecraft/world/inventory/$HopperMenu"
import {$BrewingStandMenu, $BrewingStandMenu$Type} from "packages/net/minecraft/world/inventory/$BrewingStandMenu"
import {$BlastFurnaceMenu, $BlastFurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$BlastFurnaceMenu"

export class $BaseContainerType<T extends $BaseContainer> extends $MenuType<(T)> {
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>


public static "create"<T extends $BaseContainer>(containerSerializer: $BiConsumer$Type<(T), ($FriendlyByteBuf$Type)>, containerDeserializer: $BiFunction$Type<($Player$Type), ($FriendlyByteBuf$Type), (T)>): $BaseContainerType<(T)>
public "writeContainer"(container: T, buffer: $FriendlyByteBuf$Type): void
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainerType$Type<T> = ($BaseContainerType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseContainerType_<T> = $BaseContainerType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/pottery/content/$PotColor" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PotColor extends $Enum<($PotColor)> {
static readonly "BLANK": $PotColor
static readonly "WHITE": $PotColor
static readonly "ORANGE": $PotColor
static readonly "MAGENTA": $PotColor
static readonly "LIGHT_BLUE": $PotColor
static readonly "YELLOW": $PotColor
static readonly "LIME": $PotColor
static readonly "PINK": $PotColor
static readonly "GRAY": $PotColor
static readonly "LIGHT_GRAY": $PotColor
static readonly "CYAN": $PotColor
static readonly "PURPLE": $PotColor
static readonly "BLUE": $PotColor
static readonly "BROWN": $PotColor
static readonly "GREEN": $PotColor
static readonly "RED": $PotColor
static readonly "BLACK": $PotColor


public static "values"(): ($PotColor)[]
public static "valueOf"(arg0: string): $PotColor
public "getIdentifier"(): string
public static "dyeForColor"(arg0: $PotColor$Type): $DyeColor
public "getSaturationShift"(): integer
public "getBrightnessShift"(): integer
public "getDyeIngredient"(): $Ingredient
public "getPatternLocation"(arg0: $ResourceKey$Type<(string)>): $ResourceLocation
public "getHueShift"(): integer
public "getTranslation"(): string
public static "colorForDye"(arg0: $DyeColor$Type): $PotColor
get "identifier"(): string
get "saturationShift"(): integer
get "brightnessShift"(): integer
get "dyeIngredient"(): $Ingredient
get "hueShift"(): integer
get "translation"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotColor$Type = (("magenta") | ("pink") | ("blank") | ("green") | ("lime") | ("light_gray") | ("yellow") | ("black") | ("light_blue") | ("brown") | ("cyan") | ("orange") | ("red") | ("gray") | ("white") | ("blue") | ("purple")) | ($PotColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotColor_ = $PotColor$Type;
}}
declare module "packages/com/supermartijn642/rechiseled/blocks/$RechiseledGlassPillarBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockProperties, $BlockProperties$Type} from "packages/com/supermartijn642/core/block/$BlockProperties"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$RechiseledPillarBlock, $RechiseledPillarBlock$Type} from "packages/com/supermartijn642/rechiseled/blocks/$RechiseledPillarBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RechiseledGlassPillarBlock extends $RechiseledPillarBlock {
static readonly "AXIS_PROPERTY": $EnumProperty<($Direction$Axis)>
readonly "connecting": boolean
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

constructor(connecting: boolean, properties: $BlockProperties$Type)

public "propagatesSkylightDown"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "skipRendering"(state: $BlockState$Type, otherState: $BlockState$Type, side: $Direction$Type): boolean
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getVisualShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RechiseledGlassPillarBlock$Type = ($RechiseledGlassPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RechiseledGlassPillarBlock_ = $RechiseledGlassPillarBlock$Type;
}}
declare module "packages/com/supermartijn642/oregrowth/content/$OreGrowthRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$OreGrowthRecipe$Serializer, $OreGrowthRecipe$Serializer$Type} from "packages/com/supermartijn642/oregrowth/content/$OreGrowthRecipe$Serializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $OreGrowthRecipe implements $Recipe<($Container)> {
static readonly "SERIALIZER": $OreGrowthRecipe$Serializer

constructor(arg0: $ResourceLocation$Type, arg1: $Block$Type, arg2: integer, arg3: double, arg4: double, arg5: $ItemStack$Type)

public "base"(): $Block
public "output"(): $ItemStack
public "toJson"(): $JsonObject
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "spawnChance"(): double
public "growthChance"(): double
public "stages"(): integer
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
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
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
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
export type $OreGrowthRecipe$Type = ($OreGrowthRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreGrowthRecipe_ = $OreGrowthRecipe$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$ModelBakingContext" {
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ModelInstance, $ModelInstance$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpriteIdentifier, $SpriteIdentifier$Type} from "packages/com/supermartijn642/fusion/api/model/$SpriteIdentifier"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ModelBakingContext {

 "getModel"(identifier: $ResourceLocation$Type): $ModelInstance<(any)>
 "getTexture"(atlas: $ResourceLocation$Type, texture: $ResourceLocation$Type): $TextureAtlasSprite
 "getTexture"(identifier: $SpriteIdentifier$Type): $TextureAtlasSprite
 "getTransformation"(): $ModelState
 "getModelBaker"(): $ModelBaker
 "getModelIdentifier"(): $ResourceLocation
 "getBlockTexture"(texture: $ResourceLocation$Type): $TextureAtlasSprite
}

export namespace $ModelBakingContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakingContext$Type = ($ModelBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakingContext_ = $ModelBakingContext$Type;
}}
declare module "packages/com/supermartijn642/core/block/$BaseBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseBlockEntity extends $BlockEntity {
 "blockState": $BlockState

constructor(tileEntityTypeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "dataChanged"(): void
public "load"(nbt: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(net: $Connection$Type, pkt: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(tag: $CompoundTag$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntity$Type = ($BaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntity_ = $BaseBlockEntity$Type;
}}
declare module "packages/com/supermartijn642/rechiseled/blocks/$RechiseledPillarBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RechiseledBlock, $RechiseledBlock$Type} from "packages/com/supermartijn642/rechiseled/blocks/$RechiseledBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockProperties, $BlockProperties$Type} from "packages/com/supermartijn642/core/block/$BlockProperties"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $RechiseledPillarBlock extends $RechiseledBlock {
static readonly "AXIS_PROPERTY": $EnumProperty<($Direction$Axis)>
readonly "connecting": boolean
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

constructor(connecting: boolean, properties: $BlockProperties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RechiseledPillarBlock$Type = ($RechiseledPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RechiseledPillarBlock_ = $RechiseledPillarBlock$Type;
}}
declare module "packages/com/supermartijn642/rechiseled/create/mechanical_chisel/$MechanicalChiselBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DirectionalAxisKineticBlock, $DirectionalAxisKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalAxisKineticBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MechanicalChiselBlockEntity, $MechanicalChiselBlockEntity$Type} from "packages/com/supermartijn642/rechiseled/create/mechanical_chisel/$MechanicalChiselBlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $MechanicalChiselBlock extends $DirectionalAxisKineticBlock implements $IBE<($MechanicalChiselBlockEntity)> {
static readonly "AXIS_ALONG_FIRST_COORDINATE": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "updateEntityAfterFallOn"(arg0: $BlockGetter$Type, arg1: $Entity$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getBlockEntityClass"(): $Class<($MechanicalChiselBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public static "isHorizontal"(arg0: $BlockState$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $MechanicalChiselBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($MechanicalChiselBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($MechanicalChiselBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($MechanicalChiselBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($MechanicalChiselBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MechanicalChiselBlock$Type = ($MechanicalChiselBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MechanicalChiselBlock_ = $MechanicalChiselBlock$Type;
}}
declare module "packages/com/supermartijn642/core/registry/$RegistrationHandler" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IConditionSerializer, $IConditionSerializer$Type} from "packages/net/minecraftforge/common/crafting/conditions/$IConditionSerializer"
import {$ResourceConditionSerializer, $ResourceConditionSerializer$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceConditionSerializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$PaintingVariant, $PaintingVariant$Type} from "packages/net/minecraft/world/entity/decoration/$PaintingVariant"
import {$CustomTagEntrySerializer, $CustomTagEntrySerializer$Type} from "packages/com/supermartijn642/core/data/tag/$CustomTagEntrySerializer"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StatType, $StatType$Type} from "packages/net/minecraft/stats/$StatType"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RegistrationHandler$Helper, $RegistrationHandler$Helper$Type} from "packages/com/supermartijn642/core/registry/$RegistrationHandler$Helper"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $RegistrationHandler {


public static "get"(modid: string): $RegistrationHandler
public "registerEntityType"(identifier: string, entityType: $EntityType$Type<(any)>): void
public "registerEntityType"(identifier: string, entityType: $Supplier$Type<($EntityType$Type<(any)>)>): void
public "registerPotion"(identifier: string, potion: $Potion$Type): void
public "registerPotion"(identifier: string, potion: $Supplier$Type<($Potion$Type)>): void
public "registerSoundEvent"(identifier: string, sound: $SoundEvent$Type): void
public "registerSoundEvent"(identifier: string, sound: $Supplier$Type<($SoundEvent$Type)>): void
public "registerFluid"(identifier: string, fluid: $Fluid$Type): void
public "registerFluid"(identifier: string, fluid: $Supplier$Type<($Fluid$Type)>): void
public "registerMobEffect"(identifier: string, effect: $Supplier$Type<($MobEffect$Type)>): void
public "registerMobEffect"(identifier: string, effect: $MobEffect$Type): void
public "registerConditionSerializerOverride"(namespace: string, identifier: string, recipeSerializer: $IConditionSerializer$Type<(any)>): void
public "registerConditionSerializerOverride"(namespace: string, identifier: string, recipeSerializer: $Supplier$Type<($IConditionSerializer$Type<(any)>)>): void
public "registerResourceConditionSerializerOverride"(namespace: string, identifier: string, conditionSerializer: $ResourceConditionSerializer$Type<(any)>): void
public "registerResourceConditionSerializerOverride"(namespace: string, identifier: string, conditionSerializer: $Supplier$Type<($ResourceConditionSerializer$Type<(any)>)>): void
public "registerResourceConditionSerializerCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($ResourceConditionSerializer$Type<(any)>)>)>): void
public "registerCustomTagEntrySerializerOverride"(namespace: string, identifier: string, serializer: $Supplier$Type<($CustomTagEntrySerializer$Type<(any)>)>): void
public "registerCustomTagEntrySerializerOverride"(namespace: string, identifier: string, serializer: $CustomTagEntrySerializer$Type<(any)>): void
public "registerConditionSerializerCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($IConditionSerializer$Type<(any)>)>)>): void
public "registerCustomTagEntrySerializerCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($CustomTagEntrySerializer$Type<(any)>)>)>): void
public "registerAttribute"(identifier: string, attribute: $Attribute$Type): void
public "registerAttribute"(identifier: string, attribute: $Supplier$Type<($Attribute$Type)>): void
public "registerStatType"(identifier: string, statType: $Supplier$Type<($StatType$Type<(any)>)>): void
public "registerStatType"(identifier: string, statType: $StatType$Type<(any)>): void
public "registerEnchantment"(identifier: string, enchantment: $Supplier$Type<($Enchantment$Type)>): void
public "registerEnchantment"(identifier: string, enchantment: $Enchantment$Type): void
public "registerBlockEntityType"(identifier: string, blockEntityType: $Supplier$Type<($BlockEntityType$Type<(any)>)>): void
public "registerBlockEntityType"(identifier: string, blockEntityType: $BlockEntityType$Type<(any)>): void
public "registerRecipeSerializer"(identifier: string, recipeSerializer: $Supplier$Type<($RecipeSerializer$Type<(any)>)>): void
public "registerRecipeSerializer"(identifier: string, recipeSerializer: $RecipeSerializer$Type<(any)>): void
public "registerCustomTagEntrySerializer"(identifier: string, serializer: $Supplier$Type<($CustomTagEntrySerializer$Type<(any)>)>): void
public "registerCustomTagEntrySerializer"(identifier: string, serializer: $CustomTagEntrySerializer$Type<(any)>): void
public "registerParticleType"(identifier: string, particleType: $Supplier$Type<($ParticleType$Type<(any)>)>): void
public "registerParticleType"(identifier: string, particleType: $ParticleType$Type<(any)>): void
public "registerRecipeTypeCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($RecipeType$Type<(any)>)>)>): void
public "registerEnchantmentCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($Enchantment$Type)>)>): void
public "registerMenuTypeOverride"(namespace: string, identifier: string, menuType: $MenuType$Type<(any)>): void
public "registerMenuTypeOverride"(namespace: string, identifier: string, menuType: $Supplier$Type<($MenuType$Type<(any)>)>): void
public "registerEnchantmentOverride"(namespace: string, identifier: string, enchantment: $Supplier$Type<($Enchantment$Type)>): void
public "registerEnchantmentOverride"(namespace: string, identifier: string, enchantment: $Enchantment$Type): void
public "registerEntityTypeCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($EntityType$Type<(any)>)>)>): void
public "registerSoundEventOverride"(namespace: string, identifier: string, sound: $SoundEvent$Type): void
public "registerSoundEventOverride"(namespace: string, identifier: string, sound: $Supplier$Type<($SoundEvent$Type)>): void
public "registerPaintingVariantCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($PaintingVariant$Type)>)>): void
public "registerMobEffectCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($MobEffect$Type)>)>): void
public "registerFluidCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($Fluid$Type)>)>): void
public "registerPotionOverride"(namespace: string, identifier: string, potion: $Supplier$Type<($Potion$Type)>): void
public "registerPotionOverride"(namespace: string, identifier: string, potion: $Potion$Type): void
public "registerMobEffectOverride"(namespace: string, identifier: string, effect: $MobEffect$Type): void
public "registerMobEffectOverride"(namespace: string, identifier: string, effect: $Supplier$Type<($MobEffect$Type)>): void
public "registerRecipeSerializerOverride"(namespace: string, identifier: string, recipeSerializer: $RecipeSerializer$Type<(any)>): void
public "registerRecipeSerializerOverride"(namespace: string, identifier: string, recipeSerializer: $Supplier$Type<($RecipeSerializer$Type<(any)>)>): void
public "registerRecipeSerializerCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($RecipeSerializer$Type<(any)>)>)>): void
public "registerAttributeOverride"(namespace: string, identifier: string, attribute: $Attribute$Type): void
public "registerAttributeOverride"(namespace: string, identifier: string, attribute: $Supplier$Type<($Attribute$Type)>): void
public "registerAttributeCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($Attribute$Type)>)>): void
public "registerBlockOverride"(namespace: string, identifier: string, block: $Block$Type): void
public "registerBlockOverride"(namespace: string, identifier: string, block: $Supplier$Type<($Block$Type)>): void
public "registerPaintingVariant"(identifier: string, paintingVariant: $PaintingVariant$Type): void
public "registerPaintingVariant"(identifier: string, paintingVariant: $Supplier$Type<($PaintingVariant$Type)>): void
public "registerStatTypeOverride"(namespace: string, identifier: string, statType: $Supplier$Type<($StatType$Type<(any)>)>): void
public "registerStatTypeOverride"(namespace: string, identifier: string, statType: $StatType$Type<(any)>): void
public "registerItemOverride"(namespace: string, identifier: string, item: $Item$Type): void
public "registerItemOverride"(namespace: string, identifier: string, item: $Supplier$Type<($Item$Type)>): void
public "registerSoundEventCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($SoundEvent$Type)>)>): void
public "registerBlockEntityTypeOverride"(namespace: string, identifier: string, blockEntityType: $BlockEntityType$Type<(any)>): void
public "registerBlockEntityTypeOverride"(namespace: string, identifier: string, blockEntityType: $Supplier$Type<($BlockEntityType$Type<(any)>)>): void
public "registerParticleTypeOverride"(namespace: string, identifier: string, particleType: $ParticleType$Type<(any)>): void
public "registerParticleTypeOverride"(namespace: string, identifier: string, particleType: $Supplier$Type<($ParticleType$Type<(any)>)>): void
public "registerParticleTypeCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($ParticleType$Type<(any)>)>)>): void
public "registerMenuTypeCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($MenuType$Type<(any)>)>)>): void
public "registerPotionCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($Potion$Type)>)>): void
public "registerFluidOverride"(namespace: string, identifier: string, fluid: $Fluid$Type): void
public "registerFluidOverride"(namespace: string, identifier: string, fluid: $Supplier$Type<($Fluid$Type)>): void
public "registerEntityTypeOverride"(namespace: string, identifier: string, entityType: $EntityType$Type<(any)>): void
public "registerEntityTypeOverride"(namespace: string, identifier: string, entityType: $Supplier$Type<($EntityType$Type<(any)>)>): void
public "registerPaintingVariantOverride"(namespace: string, identifier: string, paintingVariant: $Supplier$Type<($PaintingVariant$Type)>): void
public "registerPaintingVariantOverride"(namespace: string, identifier: string, paintingVariant: $PaintingVariant$Type): void
public "registerRecipeTypeOverride"(namespace: string, identifier: string, recipeType: $RecipeType$Type<(any)>): void
public "registerRecipeTypeOverride"(namespace: string, identifier: string, recipeType: $Supplier$Type<($RecipeType$Type<(any)>)>): void
public "registerConditionSerializer"(identifier: string, recipeSerializer: $Supplier$Type<($IConditionSerializer$Type<(any)>)>): void
public "registerConditionSerializer"(identifier: string, recipeSerializer: $IConditionSerializer$Type<(any)>): void
public "registerStatTypeCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($StatType$Type<(any)>)>)>): void
public "registerBlock"(identifier: string, block: $Block$Type): void
public "registerBlock"(identifier: string, block: $Supplier$Type<($Block$Type)>): void
public "registerItem"(identifier: string, item: $Supplier$Type<($Item$Type)>): void
public "registerItem"(identifier: string, item: $Item$Type): void
public "registerRecipeType"(identifier: string, recipeType: $Supplier$Type<($RecipeType$Type<(any)>)>): void
public "registerRecipeType"(identifier: string, recipeType: $RecipeType$Type<(any)>): void
public "registerMenuType"(identifier: string, menuType: $Supplier$Type<($MenuType$Type<(any)>)>): void
public "registerMenuType"(identifier: string, menuType: $MenuType$Type<(any)>): void
public "registerResourceConditionSerializer"(identifier: string, conditionSerializer: $Supplier$Type<($ResourceConditionSerializer$Type<(any)>)>): void
public "registerResourceConditionSerializer"(identifier: string, conditionSerializer: $ResourceConditionSerializer$Type<(any)>): void
public "registerBlockEntityTypeCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($BlockEntityType$Type<(any)>)>)>): void
public "registerItemCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($Item$Type)>)>): void
public "registerBlockCallback"(callback: $Consumer$Type<($RegistrationHandler$Helper$Type<($Block$Type)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrationHandler$Type = ($RegistrationHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrationHandler_ = $RegistrationHandler$Type;
}}
declare module "packages/com/supermartijn642/pottery/content/$PotRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$PotRecipe$Serializer, $PotRecipe$Serializer$Type} from "packages/com/supermartijn642/pottery/content/$PotRecipe$Serializer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $PotRecipe extends $ShapedRecipe {
static readonly "SERIALIZER": $PotRecipe$Serializer
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean, arg8: $Ingredient$Type, arg9: (integer)[])

public "getDyeIngredient"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
get "dyeIngredient"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotRecipe$Type = ($PotRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotRecipe_ = $PotRecipe$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/util/$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export interface $Serializer<T> {

 "deserialize"(json: $JsonObject$Type): T
 "serialize"(value: T): $JsonObject
}

export namespace $Serializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Type<T> = ($Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer_<T> = $Serializer$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/item/$BaseBlockItem$ItemUseResult" {
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $BaseBlockItem$ItemUseResult {


public static "fail"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
public static "pass"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
public static "consume"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
public static "success"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
/**
 * 
 * @deprecated
 */
public "toUnderlying"(isClientSide: boolean): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(underlying: $InteractionResultHolder$Type<($ItemStack$Type)>): $BaseBlockItem$ItemUseResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$ItemUseResult$Type = ($BaseBlockItem$ItemUseResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem$ItemUseResult_ = $BaseBlockItem$ItemUseResult$Type;
}}
declare module "packages/com/supermartijn642/core/util/$Pair" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $Pair<X, Y> {


public "left"(): X
public "right"(): Y
public "equals"(o: any): boolean
public "hashCode"(): integer
public "apply"(consumer: $BiConsumer$Type<(X), (Y)>): void
public "map"<R, S>(mapLeft: $Function$Type<(X), (R)>, mapRight: $Function$Type<(Y), (S)>): $Pair<(R), (S)>
public static "of"<X, Y>(left: X, right: Y): $Pair<(X), (Y)>
public "flatMap"<S>(mapper: $BiFunction$Type<(X), (Y), (S)>): S
public "mapRight"<S>(mapper: $Function$Type<(Y), (S)>): $Pair<(X), (S)>
public "mapLeft"<S>(mapper: $Function$Type<(X), (S)>): $Pair<(S), (Y)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<X, Y> = ($Pair<(X), (Y)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<X, Y> = $Pair$Type<(X), (Y)>;
}}
declare module "packages/com/supermartijn642/fusion/api/util/$Pair" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $Pair<X, Y> {


public "left"(): X
public "right"(): Y
public "equals"(o: any): boolean
public "hashCode"(): integer
public "apply"(consumer: $BiConsumer$Type<(X), (Y)>): void
public "map"<R, S>(mapLeft: $Function$Type<(X), (R)>, mapRight: $Function$Type<(Y), (S)>): $Pair<(R), (S)>
public static "of"<X, Y>(left: X, right: Y): $Pair<(X), (Y)>
public "flatMap"<S>(mapper: $BiFunction$Type<(X), (Y), (S)>): S
public "mapRight"<S>(mapper: $Function$Type<(Y), (S)>): $Pair<(X), (S)>
public "mapLeft"<S>(mapper: $Function$Type<(X), (S)>): $Pair<(S), (Y)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<X, Y> = ($Pair<(X), (Y)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<X, Y> = $Pair$Type<(X), (Y)>;
}}
declare module "packages/com/supermartijn642/core/block/$BlockShape$LineConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockShape$LineConsumer {

 "apply"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): void

(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): void
}

export namespace $BlockShape$LineConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockShape$LineConsumer$Type = ($BlockShape$LineConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockShape$LineConsumer_ = $BlockShape$LineConsumer$Type;
}}
declare module "packages/com/supermartijn642/core/data/tag/$CustomTagEntrySerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CustomTagEntry, $CustomTagEntry$Type} from "packages/com/supermartijn642/core/data/tag/$CustomTagEntry"

export interface $CustomTagEntrySerializer<T extends $CustomTagEntry> {

 "deserialize"(json: $JsonObject$Type): T
 "serialize"(json: $JsonObject$Type, entry: T): void
}

export namespace $CustomTagEntrySerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTagEntrySerializer$Type<T> = ($CustomTagEntrySerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTagEntrySerializer_<T> = $CustomTagEntrySerializer$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/data/recipe/$ConditionalRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ResourceCondition, $ResourceCondition$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceCondition"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ICondition, $ICondition$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition"

export class $ConditionalRecipeSerializer implements $RecipeSerializer<($Recipe<(any)>)> {
static readonly "INSTANCE": $ConditionalRecipeSerializer


public "fromJson"(location: $ResourceLocation$Type, json: $JsonObject$Type, context: $ICondition$IContext$Type): $Recipe<(any)>
public "toNetwork"(friendlyByteBuf: $FriendlyByteBuf$Type, recipe: $Recipe$Type<(any)>): void
public "fromNetwork"(resourceLocation: $ResourceLocation$Type, friendlyByteBuf: $FriendlyByteBuf$Type): $Recipe<(any)>
public "fromJson"(location: $ResourceLocation$Type, json: $JsonObject$Type): $Recipe<(any)>
public static "wrapRecipeWithForgeConditions"(recipe: $JsonObject$Type, conditions: $Collection$Type<($ICondition$Type)>): $JsonObject
public static "wrapRecipe"(recipe: $JsonObject$Type, conditions: $Collection$Type<($ResourceCondition$Type)>): $JsonObject
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalRecipeSerializer$Type = ($ConditionalRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionalRecipeSerializer_ = $ConditionalRecipeSerializer$Type;
}}
declare module "packages/com/supermartijn642/core/mixin/$BlockPropertiesAccessor" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $BlockPropertiesAccessor {

 "getLootTableSupplier"(): $Supplier<($ResourceLocation)>
 "setLootTableSupplier"(supplier: $Supplier$Type<($ResourceLocation$Type)>): void
}

export namespace $BlockPropertiesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPropertiesAccessor$Type = ($BlockPropertiesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPropertiesAccessor_ = $BlockPropertiesAccessor$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$SpriteIdentifier" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SpriteIdentifier {

 "getTexture"(): $ResourceLocation
 "getAtlas"(): $ResourceLocation
 "toMaterial"(): $Material
}

export namespace $SpriteIdentifier {
function of(atlas: $ResourceLocation$Type, texture: $ResourceLocation$Type): $SpriteIdentifier
function of(material: $Material$Type): $SpriteIdentifier
function missing(): $SpriteIdentifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteIdentifier$Type = ($SpriteIdentifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteIdentifier_ = $SpriteIdentifier$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseBlockItem$InteractionFeedback" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export class $BaseBlockItem$InteractionFeedback extends $Enum<($BaseBlockItem$InteractionFeedback)> {
static readonly "PASS": $BaseBlockItem$InteractionFeedback
static readonly "CONSUME": $BaseBlockItem$InteractionFeedback
static readonly "SUCCESS": $BaseBlockItem$InteractionFeedback


public static "values"(): ($BaseBlockItem$InteractionFeedback)[]
public static "valueOf"(name: string): $BaseBlockItem$InteractionFeedback
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(interactionResult: $InteractionResult$Type): $BaseBlockItem$InteractionFeedback
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$InteractionFeedback$Type = (("pass") | ("success") | ("consume")) | ($BaseBlockItem$InteractionFeedback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem$InteractionFeedback_ = $BaseBlockItem$InteractionFeedback$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/texture/$SpritePreparationContext" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Pair, $Pair$Type} from "packages/com/supermartijn642/fusion/api/util/$Pair"

export interface $SpritePreparationContext {

 "getOriginalFrameWith"(): integer
 "getOriginalFrameHeight"(): integer
 "getIdentifier"(): $ResourceLocation
 "getTextureWidth"(): integer
 "getTextureHeight"(): integer
 "getOriginalFrameSize"(): $Pair<(integer), (integer)>
}

export namespace $SpritePreparationContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpritePreparationContext$Type = ($SpritePreparationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpritePreparationContext_ = $SpritePreparationContext$Type;
}}
declare module "packages/com/supermartijn642/core/block/$BlockProperties" {
import {$TriPredicate, $TriPredicate$Type} from "packages/net/minecraftforge/common/util/$TriPredicate"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockProperties {

constructor()

public static "copy"(block: $Block$Type): $BlockProperties
public static "create"(): $BlockProperties
public "explosionResistance"(resistance: float): $BlockProperties
public "requiresCorrectTool"(): $BlockProperties
public "sound"(soundTypeIn: $SoundType$Type): $BlockProperties
public "noLootTable"(): $BlockProperties
public "isSuffocating"(isSuffocating: boolean): $BlockProperties
public "isSuffocating"(isSuffocating: $TriPredicate$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type)>): $BlockProperties
public "dynamicShape"(): $BlockProperties
public "noCollision"(): $BlockProperties
public "lootTableFrom"(block: $Supplier$Type<($Block$Type)>): $BlockProperties
/**
 * 
 * @deprecated
 */
public "toUnderlying"(): $BlockBehaviour$Properties
public "lootTable"(lootTable: $ResourceLocation$Type): $BlockProperties
public "randomTicks"(): $BlockProperties
public "destroyTime"(destroyTime: float): $BlockProperties
public "lightLevel"(light: integer): $BlockProperties
public "lightLevel"(stateLightFunction: $ToIntFunction$Type<($BlockState$Type)>): $BlockProperties
public "air"(): $BlockProperties
public "noOcclusion"(): $BlockProperties
public "mapColor"(colorFunction: $Function$Type<($BlockState$Type), ($MapColor$Type)>): $BlockProperties
public "mapColor"(color: $MapColor$Type): $BlockProperties
public "friction"(friction: float): $BlockProperties
public "speedFactor"(factor: float): $BlockProperties
public "jumpFactor"(factor: float): $BlockProperties
public "isRedstoneConductor"(isRedstoneConductor: $TriPredicate$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type)>): $BlockProperties
public "isRedstoneConductor"(isRedstoneConductor: boolean): $BlockProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockProperties$Type = ($BlockProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockProperties_ = $BlockProperties$Type;
}}
declare module "packages/com/supermartijn642/core/block/$TickableBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TickableBlockEntity {

 "update"(): void

(): void
}

export namespace $TickableBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableBlockEntity$Type = ($TickableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickableBlockEntity_ = $TickableBlockEntity$Type;
}}
declare module "packages/com/supermartijn642/scarecrowsterritory/$ScarecrowBlockEntity" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/supermartijn642/core/block/$BaseBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TickableBlockEntity, $TickableBlockEntity$Type} from "packages/com/supermartijn642/core/block/$TickableBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ScarecrowType, $ScarecrowType$Type} from "packages/com/supermartijn642/scarecrowsterritory/$ScarecrowType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"

export class $ScarecrowBlockEntity extends $BaseBlockEntity implements $TickableBlockEntity {
 "blockState": $BlockState

constructor(arg0: $ScarecrowType$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "canTrophiesSpawn"(arg0: $EntityType$Type<(any)>): boolean
public "getTrophyPositions"(): $Collection<($BlockPos)>
public "update"(): void
public "rightClick"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public "getTrophySpawnableEntities"(arg0: $MobCategory$Type): $List<($EntityType<(any)>)>
public "satisfiesTrophyConditions"(): boolean
get "trophyPositions"(): $Collection<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScarecrowBlockEntity$Type = ($ScarecrowBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScarecrowBlockEntity_ = $ScarecrowBlockEntity$Type;
}}
declare module "packages/com/supermartijn642/pottery/content/$PotBlockEntity" {
import {$PotType, $PotType$Type} from "packages/com/supermartijn642/pottery/content/$PotType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ContainerSingleItem, $ContainerSingleItem$Type} from "packages/net/minecraft/world/ticks/$ContainerSingleItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DecoratedPotBlockEntity$Decorations, $DecoratedPotBlockEntity$Decorations$Type} from "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity$Decorations"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/supermartijn642/core/block/$BaseBlockEntity"
import {$PotBlockEntity$WobbleStyle, $PotBlockEntity$WobbleStyle$Type} from "packages/com/supermartijn642/pottery/content/$PotBlockEntity$WobbleStyle"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PotBlockEntity extends $BaseBlockEntity implements $ContainerSingleItem {
 "wobbleStartedAtTick": long
 "lastWobbleStyle": $PotBlockEntity$WobbleStyle
 "blockState": $BlockState

constructor(arg0: $PotType$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getItem"(arg0: integer): $ItemStack
public "stillValid"(arg0: $Player$Type): boolean
public "getFacing"(): $Direction
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "getDecorations"(): $DecoratedPotBlockEntity$Decorations
public "decorationsFromItem"(arg0: $ItemStack$Type): void
public "itemFromDecorations"(): $ItemStack
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "updateDecorations"(arg0: $DecoratedPotBlockEntity$Decorations$Type): void
public "wobble"(arg0: $PotBlockEntity$WobbleStyle$Type): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getFirstItem"(): $ItemStack
public "removeFirstItem"(): $ItemStack
public "setFirstItem"(arg0: $ItemStack$Type): void
public "clearContent"(): void
public "isEmpty"(): boolean
public "setChanged"(): void
public "getMaxStackSize"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "stopOpen"(arg0: $Player$Type): void
public "countItem"(arg0: $Item$Type): integer
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "setChanged"(): void
public "asContainer"(): $Container
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "getHeight"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "isMutable"(): boolean
public "getWidth"(): integer
public "clear"(): void
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public static "tryClear"(arg0: any): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "clear"(ingredient: $Ingredient$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "isEmpty"(): boolean
get "facing"(): $Direction
get "decorations"(): $DecoratedPotBlockEntity$Decorations
get "containerSize"(): integer
get "firstItem"(): $ItemStack
set "firstItem"(value: $ItemStack$Type)
get "empty"(): boolean
get "maxStackSize"(): integer
get "slots"(): integer
get "height"(): integer
get "mutable"(): boolean
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotBlockEntity$Type = ($PotBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotBlockEntity_ = $PotBlockEntity$Type;
}}
declare module "packages/com/supermartijn642/pottery/content/$PotType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockShape, $BlockShape$Type} from "packages/com/supermartijn642/core/block/$BlockShape"
import {$PotBlockEntity, $PotBlockEntity$Type} from "packages/com/supermartijn642/pottery/content/$PotBlockEntity"
import {$RegistrationHandler$Helper, $RegistrationHandler$Helper$Type} from "packages/com/supermartijn642/core/registry/$RegistrationHandler$Helper"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$PotColor, $PotColor$Type} from "packages/com/supermartijn642/pottery/content/$PotColor"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BaseBlockEntityType, $BaseBlockEntityType$Type} from "packages/com/supermartijn642/core/block/$BaseBlockEntityType"

export class $PotType extends $Enum<($PotType)> {
static readonly "DEFAULT": $PotType
static readonly "BASE": $PotType
static readonly "SEALED": $PotType
static readonly "WIDE": $PotType
static readonly "TALL": $PotType
static readonly "SMALL": $PotType


public static "values"(): ($PotType)[]
public static "valueOf"(arg0: string): $PotType
public "getItem"(arg0: $PotColor$Type): $Item
public "getIdentifier"(): string
public "getIdentifier"(arg0: $PotColor$Type): string
public "getBlock"(arg0: $PotColor$Type): $Block
public "getShape"(): $BlockShape
public "registerItems"(arg0: $RegistrationHandler$Helper$Type<($Item$Type)>): void
public "getTranslation"(): string
public "registerBlocks"(arg0: $RegistrationHandler$Helper$Type<($Block$Type)>): void
public "getExtraBricks"(): integer
public "getBlockEntityType"(): $BaseBlockEntityType<($PotBlockEntity)>
public "registerBlockEntity"(arg0: $RegistrationHandler$Helper$Type<($BlockEntityType$Type<(any)>)>): void
get "identifier"(): string
get "shape"(): $BlockShape
get "translation"(): string
get "extraBricks"(): integer
get "blockEntityType"(): $BaseBlockEntityType<($PotBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotType$Type = (("small") | ("default") | ("wide") | ("sealed") | ("tall") | ("base")) | ($PotType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotType_ = $PotType$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem$InteractionFeedback, $BaseItem$InteractionFeedback$Type} from "packages/com/supermartijn642/core/item/$BaseItem$InteractionFeedback"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BaseItem$ItemUseResult, $BaseItem$ItemUseResult$Type} from "packages/com/supermartijn642/core/item/$BaseItem$ItemUseResult"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemProperties, $ItemProperties$Type} from "packages/com/supermartijn642/core/item/$ItemProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseItem extends $Item {
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
constructor(properties: $ItemProperties$Type)

public "interactWithBlockFirst"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, hitPos: $BlockPos$Type, hitSide: $Direction$Type, hitLocation: $Vec3$Type): $BaseItem$InteractionFeedback
public "interact"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type): $BaseItem$ItemUseResult
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slot: integer, isSelected: boolean): void
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, target: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, information: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "onItemUseFirst"(stack: $ItemStack$Type, context: $UseOnContext$Type): $InteractionResult
public "interactWithBlock"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, hitPos: $BlockPos$Type, hitSide: $Direction$Type, hitLocation: $Vec3$Type): $BaseItem$InteractionFeedback
public "interactWithEntity"(stack: $ItemStack$Type, target: $LivingEntity$Type, player: $Player$Type, hand: $InteractionHand$Type): $BaseItem$InteractionFeedback
public "inventoryUpdate"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, itemSlot: integer, isSelected: boolean): void
public "isInCreativeGroup"(tab: $CreativeModeTab$Type): boolean
public "initializeClient"(consumer: $Consumer$Type<($IClientItemExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$Type = ($BaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem_ = $BaseItem$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BaseBlockItem$InteractionFeedback, $BaseBlockItem$InteractionFeedback$Type} from "packages/com/supermartijn642/core/item/$BaseBlockItem$InteractionFeedback"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BaseBlockItem$ItemUseResult, $BaseBlockItem$ItemUseResult$Type} from "packages/com/supermartijn642/core/item/$BaseBlockItem$ItemUseResult"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemProperties, $ItemProperties$Type} from "packages/com/supermartijn642/core/item/$ItemProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseBlockItem extends $BlockItem {
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

constructor(block: $Block$Type, properties: $Item$Properties$Type)
constructor(block: $Block$Type, properties: $ItemProperties$Type)

public "interactWithBlockFirst"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, hitPos: $BlockPos$Type, hitSide: $Direction$Type, hitLocation: $Vec3$Type): $BaseBlockItem$InteractionFeedback
public "interact"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type): $BaseBlockItem$ItemUseResult
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slot: integer, isSelected: boolean): void
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, target: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, information: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "onItemUseFirst"(stack: $ItemStack$Type, context: $UseOnContext$Type): $InteractionResult
public "interactWithBlock"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, hitPos: $BlockPos$Type, hitSide: $Direction$Type, hitLocation: $Vec3$Type): $BaseBlockItem$InteractionFeedback
public "interactWithEntity"(stack: $ItemStack$Type, target: $LivingEntity$Type, player: $Player$Type, hand: $InteractionHand$Type): $BaseBlockItem$InteractionFeedback
public "inventoryUpdate"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, itemSlot: integer, isSelected: boolean): void
public "isInCreativeGroup"(tab: $CreativeModeTab$Type): boolean
public "initializeClient"(consumer: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$Type = ($BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem_ = $BaseBlockItem$Type;
}}
declare module "packages/com/supermartijn642/oregrowth/content/$OreGrowthBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/supermartijn642/core/block/$BaseBlock"
import {$OreGrowthRecipe, $OreGrowthRecipe$Type} from "packages/com/supermartijn642/oregrowth/content/$OreGrowthRecipe"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $OreGrowthBlock extends $BaseBlock implements $SimpleWaterloggedBlock {
static readonly "MAX_STAGES": integer
static "STAGE": $IntegerProperty
static "FACE": $EnumProperty<($Direction)>
static "WATERLOGGED": $BooleanProperty
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

public static "trySpawnOreGrowth"(arg0: $OreGrowthRecipe$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $List<($ItemStack)>
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
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
export type $OreGrowthBlock$Type = ($OreGrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreGrowthBlock_ = $OreGrowthBlock$Type;
}}
declare module "packages/com/supermartijn642/core/data/condition/$ResourceCondition" {
import {$ResourceConditionSerializer, $ResourceConditionSerializer$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceConditionSerializer"
import {$ResourceConditionContext, $ResourceConditionContext$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceConditionContext"
import {$ICondition, $ICondition$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition"

export interface $ResourceCondition {

 "test"(context: $ResourceConditionContext$Type): boolean
 "negate"(): $ResourceCondition
 "and"(condition: $ResourceCondition$Type): $ResourceCondition
 "or"(alternative: $ResourceCondition$Type): $ResourceCondition
 "getSerializer"(): $ResourceConditionSerializer<(any)>
}

export namespace $ResourceCondition {
function createForgeCondition(condition: $ResourceCondition$Type): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceCondition$Type = ($ResourceCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceCondition_ = $ResourceCondition$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/texture/$TextureType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$SpritePreparationContext, $SpritePreparationContext$Type} from "packages/com/supermartijn642/fusion/api/texture/$SpritePreparationContext"
import {$Serializer, $Serializer$Type} from "packages/com/supermartijn642/fusion/api/util/$Serializer"
import {$SpriteCreationContext, $SpriteCreationContext$Type} from "packages/com/supermartijn642/fusion/api/texture/$SpriteCreationContext"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$Pair, $Pair$Type} from "packages/com/supermartijn642/fusion/api/util/$Pair"

export interface $TextureType<T> extends $Serializer<(T)> {

 "createSprite"(context: $SpriteCreationContext$Type, data: T): $TextureAtlasSprite
 "getFrameSize"(context: $SpritePreparationContext$Type, data: T): $Pair<(integer), (integer)>
 "deserialize"(json: $JsonObject$Type): T
 "serialize"(value: T): $JsonObject
}

export namespace $TextureType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureType$Type<T> = ($TextureType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureType_<T> = $TextureType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/block/$BaseBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockProperties, $BlockProperties$Type} from "packages/com/supermartijn642/core/block/$BlockProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseBlock extends $Block {
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

constructor(saveTileData: boolean, properties: $BlockBehaviour$Properties$Type)
constructor(saveTileData: boolean, properties: $BlockProperties$Type)

public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getDescriptionId"(): string
public "asItem"(): $Item
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, information: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hitResult: $BlockHitResult$Type): $InteractionResult
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlock$Type = ($BaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlock_ = $BaseBlock$Type;
}}
declare module "packages/com/supermartijn642/scarecrowsterritory/$ScarecrowBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityHoldingBlock, $EntityHoldingBlock$Type} from "packages/com/supermartijn642/core/block/$EntityHoldingBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ScarecrowType, $ScarecrowType$Type} from "packages/com/supermartijn642/scarecrowsterritory/$ScarecrowType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/supermartijn642/core/block/$BaseBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ScarecrowBlock extends $BaseBlock implements $EntityHoldingBlock, $SimpleWaterloggedBlock {
static readonly "BOTTOM": $BooleanProperty
static readonly "FACING": $EnumProperty<($Direction)>
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $ScarecrowType$Type, arg1: $DyeColor$Type)

public "createNewBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, entityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScarecrowBlock$Type = ($ScarecrowBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScarecrowBlock_ = $ScarecrowBlock$Type;
}}
declare module "packages/com/supermartijn642/scarecrowsterritory/$ScarecrowType" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ScarecrowBlockEntity, $ScarecrowBlockEntity$Type} from "packages/com/supermartijn642/scarecrowsterritory/$ScarecrowBlockEntity"
import {$BaseBlockItem, $BaseBlockItem$Type} from "packages/com/supermartijn642/core/item/$BaseBlockItem"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockProperties, $BlockProperties$Type} from "packages/com/supermartijn642/core/block/$BlockProperties"
import {$BlockShape, $BlockShape$Type} from "packages/com/supermartijn642/core/block/$BlockShape"
import {$ScarecrowBlock, $ScarecrowBlock$Type} from "packages/com/supermartijn642/scarecrowsterritory/$ScarecrowBlock"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$RegistrationHandler$Helper, $RegistrationHandler$Helper$Type} from "packages/com/supermartijn642/core/registry/$RegistrationHandler$Helper"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $ScarecrowType extends $Enum<($ScarecrowType)> {
static readonly "PRIMITIVE": $ScarecrowType
readonly "blocks": $EnumMap<($DyeColor), ($ScarecrowBlock)>
 "blockEntityType": $BlockEntityType<(any)>
readonly "items": $EnumMap<($DyeColor), ($BaseBlockItem)>


public static "values"(): ($ScarecrowType)[]
public static "valueOf"(arg0: string): $ScarecrowType
public "registerBlockEntityType"(arg0: $RegistrationHandler$Helper$Type<($BlockEntityType$Type<(any)>)>): void
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $ScarecrowBlockEntity
public "registerBlock"(arg0: $RegistrationHandler$Helper$Type<($Block$Type)>): void
public "registerItem"(arg0: $RegistrationHandler$Helper$Type<($Item$Type)>): void
public "getBlockProperties"(arg0: $DyeColor$Type): $BlockProperties
public "is2BlocksHigh"(): boolean
public "getRenderLayer"(): $RenderType
public "getBlockShape"(arg0: $Direction$Type, arg1: boolean): $BlockShape
public "getRegistryName"(arg0: $DyeColor$Type): string
get "2BlocksHigh"(): boolean
get "renderLayer"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScarecrowType$Type = (("primitive")) | ($ScarecrowType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScarecrowType_ = $ScarecrowType$Type;
}}
declare module "packages/com/supermartijn642/core/item/$ItemProperties" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$ItemRarity, $ItemRarity$Type} from "packages/com/supermartijn642/core/item/$ItemRarity"

export class $ItemProperties {


public "group"(group: $CreativeModeTab$Type): $ItemProperties
public static "create"(): $ItemProperties
public "maxStackSize"(maxStackSize: integer): $ItemProperties
public "craftRemainder"(item: $Item$Type): $ItemProperties
public "fireResistant"(): $ItemProperties
/**
 * 
 * @deprecated
 */
public "toUnderlying"(): $Item$Properties
public "rarity"(rarity: $ItemRarity$Type): $ItemProperties
public "rarity"(rarity: $Rarity$Type): $ItemProperties
public "food"(foodProperties: $FoodProperties$Type): $ItemProperties
public "durability"(durability: integer): $ItemProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemProperties$Type = ($ItemProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemProperties_ = $ItemProperties$Type;
}}
declare module "packages/com/supermartijn642/core/block/$EntityHoldingBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $EntityHoldingBlock extends $EntityBlock {

 "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, entityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
 "createNewBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener

(level: $Level$Type, state: $BlockState$Type, entityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}

export namespace $EntityHoldingBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHoldingBlock$Type = ($EntityHoldingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityHoldingBlock_ = $EntityHoldingBlock$Type;
}}
declare module "packages/com/supermartijn642/pottery/extensions/$PotteryDecoratedPotBlockEntity" {
import {$PotBlockEntity$WobbleStyle, $PotBlockEntity$WobbleStyle$Type} from "packages/com/supermartijn642/pottery/content/$PotBlockEntity$WobbleStyle"

export interface $PotteryDecoratedPotBlockEntity {

 "potteryWobble"(arg0: $PotBlockEntity$WobbleStyle$Type): void
 "potteryGetLastWobbleStyle"(): $PotBlockEntity$WobbleStyle
 "potteryGetWobbleStartedAtTick"(): long
}

export namespace $PotteryDecoratedPotBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotteryDecoratedPotBlockEntity$Type = ($PotteryDecoratedPotBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotteryDecoratedPotBlockEntity_ = $PotteryDecoratedPotBlockEntity$Type;
}}
declare module "packages/com/supermartijn642/core/data/condition/$ResourceConditionContext" {
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"

export class $ResourceConditionContext {


/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $ICondition$IContext
get "underlying"(): $ICondition$IContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionContext$Type = ($ResourceConditionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConditionContext_ = $ResourceConditionContext$Type;
}}
declare module "packages/com/supermartijn642/oregrowth/content/$OreGrowthRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$OreGrowthRecipe, $OreGrowthRecipe$Type} from "packages/com/supermartijn642/oregrowth/content/$OreGrowthRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $OreGrowthRecipe$Serializer implements $RecipeSerializer<($OreGrowthRecipe)> {


public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $OreGrowthRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $OreGrowthRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $OreGrowthRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $OreGrowthRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreGrowthRecipe$Serializer$Type = ($OreGrowthRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreGrowthRecipe$Serializer_ = $OreGrowthRecipe$Serializer$Type;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$BlockModelExtension" {
import {$ModelInstance, $ModelInstance$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelInstance"

export interface $BlockModelExtension {

 "setFusionModel"(model: $ModelInstance$Type<(any)>): void
 "getFusionModel"(): $ModelInstance<(any)>
}

export namespace $BlockModelExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelExtension$Type = ($BlockModelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModelExtension_ = $BlockModelExtension$Type;
}}
declare module "packages/com/supermartijn642/core/block/$BlockShape$PointConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockShape$PointConsumer {

 "apply"(x: double, y: double, z: double): void

(x: double, y: double, z: double): void
}

export namespace $BlockShape$PointConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockShape$PointConsumer$Type = ($BlockShape$PointConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockShape$PointConsumer_ = $BlockShape$PointConsumer$Type;
}}
declare module "packages/com/supermartijn642/core/registry/$Registries$Registry" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Pair, $Pair$Type} from "packages/com/supermartijn642/core/util/$Pair"

export interface $Registries$Registry<T> {

 "getValue"(identifier: $ResourceLocation$Type): T
 "register"(identifier: $ResourceLocation$Type, object: T): void
 "getEntries"(): $Set<($Pair<($ResourceLocation), (T)>)>
 "getIdentifier"(object: T): $ResourceLocation
 "getValues"(): $Collection<(T)>
 "getValueClass"(): $Class<(T)>
 "getRegistryIdentifier"(): $ResourceLocation
 "hasVanillaRegistry"(): boolean
 "hasForgeRegistry"(): boolean
 "hasIdentifier"(identifier: $ResourceLocation$Type): boolean
 "getIdentifiers"(): $Set<($ResourceLocation)>
 "getForgeRegistry"(): $IForgeRegistry<(T)>
 "getVanillaRegistry"(): $Registry<(T)>
}

export namespace $Registries$Registry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registries$Registry$Type<T> = ($Registries$Registry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registries$Registry_<T> = $Registries$Registry$Type<(T)>;
}}
declare module "packages/com/supermartijn642/tesseract/$TesseractBlock" {
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$EntityHoldingBlock, $EntityHoldingBlock$Type} from "packages/com/supermartijn642/core/block/$EntityHoldingBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/supermartijn642/core/block/$BaseBlock"

export class $TesseractBlock extends $BaseBlock implements $EntityHoldingBlock {
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

public "createNewBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, entityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TesseractBlock$Type = ($TesseractBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TesseractBlock_ = $TesseractBlock$Type;
}}
declare module "packages/com/supermartijn642/pottery/content/$PotRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$PotRecipe, $PotRecipe$Type} from "packages/com/supermartijn642/pottery/content/$PotRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PotRecipe$Serializer implements $RecipeSerializer<($PotRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $PotRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $PotRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $PotRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PotRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotRecipe$Serializer$Type = ($PotRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotRecipe$Serializer_ = $PotRecipe$Serializer$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseItem$InteractionFeedback" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export class $BaseItem$InteractionFeedback extends $Enum<($BaseItem$InteractionFeedback)> {
static readonly "PASS": $BaseItem$InteractionFeedback
static readonly "CONSUME": $BaseItem$InteractionFeedback
static readonly "SUCCESS": $BaseItem$InteractionFeedback


public static "values"(): ($BaseItem$InteractionFeedback)[]
public static "valueOf"(name: string): $BaseItem$InteractionFeedback
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $InteractionResult
get "underlying"(): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$InteractionFeedback$Type = (("pass") | ("success") | ("consume")) | ($BaseItem$InteractionFeedback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem$InteractionFeedback_ = $BaseItem$InteractionFeedback$Type;
}}
declare module "packages/com/supermartijn642/pottery/content/$PotBlockEntity$WobbleStyle" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PotBlockEntity$WobbleStyle extends $Enum<($PotBlockEntity$WobbleStyle)> {
static readonly "POSITIVE": $PotBlockEntity$WobbleStyle
static readonly "NEGATIVE": $PotBlockEntity$WobbleStyle
readonly "duration": integer


public static "values"(): ($PotBlockEntity$WobbleStyle)[]
public static "valueOf"(arg0: string): $PotBlockEntity$WobbleStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotBlockEntity$WobbleStyle$Type = (("negative") | ("positive")) | ($PotBlockEntity$WobbleStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotBlockEntity$WobbleStyle_ = $PotBlockEntity$WobbleStyle$Type;
}}
declare module "packages/com/supermartijn642/rechiseled/blocks/$RechiseledBlock" {
import {$BlockProperties, $BlockProperties$Type} from "packages/com/supermartijn642/core/block/$BlockProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/supermartijn642/core/block/$BaseBlock"

export class $RechiseledBlock extends $BaseBlock {
readonly "connecting": boolean
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

constructor(connecting: boolean, properties: $BlockProperties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RechiseledBlock$Type = ($RechiseledBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RechiseledBlock_ = $RechiseledBlock$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$ModelInstance" {
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$ModelType, $ModelType$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ModelBakingContext, $ModelBakingContext$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelBakingContext"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ModelInstance<T> {

 "getModelDependencies"(): $Collection<($ResourceLocation)>
 "getAsVanillaModel"(): $BlockModel
 "getModelType"(): $ModelType<(T)>
 "getModelData"(): T
 "bake"(context: $ModelBakingContext$Type): $BakedModel
}

export namespace $ModelInstance {
function of<T>(modelType: $ModelType$Type<(T)>, modelData: T): $ModelInstance<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelInstance$Type<T> = ($ModelInstance<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelInstance_<T> = $ModelInstance$Type<(T)>;
}}
