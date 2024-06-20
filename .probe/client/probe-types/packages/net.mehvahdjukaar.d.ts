declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$RopeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RopeItem extends $BlockItem {
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

public "place"(context: $BlockPlaceContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeItem$Type = ($RopeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RopeItem_ = $RopeItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RopeBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$AbstractRopeBlock, $AbstractRopeBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractRopeBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RopeBlock extends $AbstractRopeBlock {
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "FACING_TO_PROPERTY_MAP": $Map<($Direction), ($BooleanProperty)>
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "KNOT": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "hasConnection"(dir: $Direction$Type, state: $BlockState$Type): boolean
public "setConnection"(dir: $Direction$Type, state: $BlockState$Type, value: boolean): $BlockState
public static "isSupportingCeiling"(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "canConnectDown"(downState: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeBlock$Type = ($RopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RopeBlock_ = $RopeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BookPileHorizontalBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BookPileBlock, $BookPileBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BookPileBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BookPileHorizontalBlock extends $BookPileBlock {
static readonly "FACING": $DirectionProperty
static readonly "BOOKS": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPileHorizontalBlock$Type = ($BookPileHorizontalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPileHorizontalBlock_ = $BookPileHorizontalBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$AltimeterItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AltimeterItem extends $Item implements $ICustomItemRendererProvider {
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

public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltimeterItem$Type = ($AltimeterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltimeterItem_ = $AltimeterItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IRecolorable" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IRecolorable {

 "tryRecolor"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $DyeColor$Type): boolean
 "isDefaultColor"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
}

export namespace $IRecolorable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecolorable$Type = ($IRecolorable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecolorable_ = $IRecolorable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CandleHolderBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$LightUpWaterBlock, $LightUpWaterBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpWaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $CandleHolderBlock extends $LightUpWaterBlock implements $IColored {
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static readonly "CANDLES": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type, particle: $Supplier$Type<($ParticleType$Type<(any)>)>)
constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type)

public "supportsBlankColor"(): boolean
public "getColor"(): $DyeColor
public "playExtinguishSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
public "spawnSmokeParticles"(state: $BlockState$Type, pos: $BlockPos$Type, level: $LevelAccessor$Type): void
public "canBeExtinguishedBy"(item: $ItemStack$Type): boolean
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "canBeReplaced"(state: $BlockState$Type, useContext: $BlockPlaceContext$Type): boolean
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "isSideSolidForDirection"(reader: $LevelReader$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleHolderBlock$Type = ($CandleHolderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleHolderBlock_ = $CandleHolderBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$FluidContainerList, $FluidContainerList$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList"
import {$FluidContainerList$Category, $FluidContainerList$Category$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList$Category"
import {$FoodProvider, $FoodProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FoodProvider"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $SoftFluidStack {
static readonly "CODEC": $Codec<($SoftFluidStack)>

/**
 * 
 * @deprecated
 */
constructor(fluid: $Holder$Type<($SoftFluid$Type)>, count: integer, tag: $CompoundTag$Type)
/**
 * 
 * @deprecated
 */
constructor(fluid: $Holder$Type<($SoftFluid$Type)>)
/**
 * 
 * @deprecated
 */
constructor(fluid: $Holder$Type<($SoftFluid$Type)>, count: integer)

public "addTagElement"(key: string, tag: $Tag$Type): void
public "getFlowingColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "getStillColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "load"(tag: $CompoundTag$Type): $SoftFluidStack
public "isEmpty"(): boolean
public "split"(amount: integer): $SoftFluidStack
public static "of"(fluid: $Holder$Type<($SoftFluid$Type)>): $SoftFluidStack
public static "of"(fluid: $Holder$Type<($SoftFluid$Type)>, count: integer): $SoftFluidStack
public static "of"(fluid: $Holder$Type<($SoftFluid$Type)>, count: integer, tag: $CompoundTag$Type): $SoftFluidStack
public static "empty"(): $SoftFluidStack
public "save"(compoundTag: $CompoundTag$Type): $CompoundTag
public "copy"(): $SoftFluidStack
public "is"(tag: $TagKey$Type<($SoftFluid$Type)>): boolean
public "is"(fluid: $SoftFluid$Type): boolean
public "is"(fluid: $Holder$Type<($SoftFluid$Type)>): boolean
public "grow"(amount: integer): void
public "getTag"(): $CompoundTag
public "getCount"(): integer
public "setTag"(tag: $CompoundTag$Type): void
public "isEquivalent"(fluid: $Fluid$Type): boolean
public "setCount"(count: integer): void
public static "bucket"(fluid: $Holder$Type<($SoftFluid$Type)>): $SoftFluidStack
public "shrink"(amount: integer): void
/**
 * 
 * @deprecated
 */
public "getFluid"(): $Holder<($SoftFluid)>
public "isFluidEqual"(other: $SoftFluidStack$Type): boolean
public "getOrCreateTag"(): $CompoundTag
public static "bottle"(fluid: $Holder$Type<($SoftFluid$Type)>): $SoftFluidStack
public static "fromFluid"(fluid: $FluidState$Type): $SoftFluidStack
public static "fromFluid"(fluid: $Fluid$Type, amount: integer, tag: $CompoundTag$Type): $SoftFluidStack
public "hasTag"(): boolean
public "getParticleColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public static "bowl"(fluid: $Holder$Type<($SoftFluid$Type)>): $SoftFluidStack
public static "invalidateEmptyInstance"(): void
public "fluid"(): $SoftFluid
public "getHolder"(): $Holder<($SoftFluid)>
public static "fromItem"(itemStack: $ItemStack$Type): $Pair<($SoftFluidStack), ($FluidContainerList$Category)>
public "copyWithCount"(count: integer): $SoftFluidStack
public "isFluidStackTagEqual"(other: $SoftFluidStack$Type): boolean
public "getContainerList"(): $FluidContainerList
public "toItem"(emptyContainer: $ItemStack$Type, dontModifyStack: boolean): $Pair<($ItemStack), ($FluidContainerList$Category)>
public "getVanillaFluid"(): $Fluid
public "getFoodProvider"(): $FoodProvider
public "getOrCreateTagElement"(key: string): $CompoundTag
get "tag"(): $CompoundTag
get "count"(): integer
set "tag"(value: $CompoundTag$Type)
set "count"(value: integer)
get "orCreateTag"(): $CompoundTag
get "holder"(): $Holder<($SoftFluid)>
get "containerList"(): $FluidContainerList
get "vanillaFluid"(): $Fluid
get "foodProvider"(): $FoodProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluidStack$Type = ($SoftFluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftFluidStack_ = $SoftFluidStack$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidTank" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"

export class $SoftFluidTank {
static readonly "BOTTLE_COUNT": integer
static readonly "BOWL_COUNT": integer
static readonly "BUCKET_COUNT": integer


public "drainItem"(filledContainerStack: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, simulate: boolean): $InteractionResultHolder<($ItemStack)>
public "drainItem"(filledContainer: $ItemStack$Type, level: $Level$Type, pos: $BlockPos$Type, simulate: boolean, playSound: boolean): $InteractionResultHolder<($ItemStack)>
public "getCachedFlowingColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "refreshTintCache"(): void
public "isFluidCompatible"(fluidStack: $SoftFluidStack$Type): boolean
public "removeFluid"(amount: integer, simulate: boolean): $SoftFluidStack
public "containsFood"(): boolean
public "tryDrinkUpFluid"(player: $Player$Type, world: $Level$Type): boolean
public "load"(compound: $CompoundTag$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "save"(compound: $CompoundTag$Type): $CompoundTag
public static "create"(capacity: integer): $SoftFluidTank
public "getSpace"(): integer
public "getCapacity"(): integer
public static "getLiquidCountFromItem"(i: $Item$Type): integer
public "isFull"(): boolean
public "getHeight"(maxHeight: float): float
public "getFluid"(): $SoftFluidStack
public "getCachedParticleColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "addFluid"(stack: $SoftFluidStack$Type, simulate: boolean): integer
/**
 * 
 * @deprecated
 */
public "addFluid"(stack: $SoftFluidStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getParticleColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
/**
 * 
 * @deprecated
 */
public "getTintColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "getComparatorOutput"(): integer
public "setFluid"(fluid: $SoftFluidStack$Type): void
public "interactWithItem"(stack: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, simulate: boolean): $ItemStack
public "getFluidValue"(): $SoftFluid
public "interactWithPlayer"(player: $Player$Type, hand: $InteractionHand$Type, world: $Level$Type, pos: $BlockPos$Type): boolean
public "fillItem"(emptyContainer: $ItemStack$Type, level: $Level$Type, pos: $BlockPos$Type, simulate: boolean, playSound: boolean): $InteractionResultHolder<($ItemStack)>
public "fillItem"(emptyContainer: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, simulate: boolean): $InteractionResultHolder<($ItemStack)>
public "fillBucket"(world: $Level$Type, pos: $BlockPos$Type): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "canAddSoftFluid"(fluidStack: $SoftFluidStack$Type): boolean
public "copyContent"(other: $SoftFluidTank$Type): void
/**
 * 
 * @deprecated
 */
public "transferFluid"(destination: $SoftFluidTank$Type): boolean
/**
 * 
 * @deprecated
 */
public "transferFluid"(destination: $SoftFluidTank$Type, amount: integer): boolean
public "getFluidCount"(): integer
public "fillBowl"(world: $Level$Type, pos: $BlockPos$Type): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "getFlowingTint"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "getCachedStillColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "fillBottle"(world: $Level$Type, pos: $BlockPos$Type): $InteractionResultHolder<($ItemStack)>
public "capCapacity"(): void
get "empty"(): boolean
get "space"(): integer
get "capacity"(): integer
get "full"(): boolean
get "fluid"(): $SoftFluidStack
get "comparatorOutput"(): integer
set "fluid"(value: $SoftFluidStack$Type)
get "fluidValue"(): $SoftFluid
get "fluidCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluidTank$Type = ($SoftFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftFluidTank_ = $SoftFluidTank$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$QuiverItem$Data" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $QuiverItem$Data {

 "removeOneStack"(): $Optional<($ItemStack)>
 "getSelectedSlot"(): integer
 "getContentView"(): $List<($ItemStack)>
 "getSelected"(): $ItemStack
 "getSelected"(supporterArrows: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "cycle"(clockWise: boolean): boolean
 "cycle"(slotsMoved: integer): boolean
 "cycle"(): boolean
 "consumeArrow"(): void
 "canAcceptItem"(toInsert: $ItemStack$Type): boolean
 "updateSelectedIfNeeded"(): void
 "getSelectedArrowCount"(): integer
 "setSelectedSlot"(arg0: integer): void
 "tryAdding"(pInsertedStack: $ItemStack$Type): $ItemStack
 "tryAdding"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
}

export namespace $QuiverItem$Data {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuiverItem$Data$Type = ($QuiverItem$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuiverItem$Data_ = $QuiverItem$Data$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$JarItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$AbstractMobContainerItem, $AbstractMobContainerItem$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$AbstractMobContainerItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JarItem extends $AbstractMobContainerItem implements $ICustomItemRendererProvider {
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

constructor(blockIn: $Block$Type, properties: $Item$Properties$Type)

public "isBoat"(e: $Entity$Type): boolean
public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
public "doInteract"(stack: $ItemStack$Type, player: $Player$Type, entity: $Entity$Type, hand: $InteractionHand$Type): $InteractionResult
public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, entity: $LivingEntity$Type): $ItemStack
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(world: $Level$Type, playerEntity: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "addPlacementTooltip"(tooltip: $List$Type<($Component$Type)>): void
public "playReleaseSound"(world: $Level$Type, v: $Vec3$Type): void
public "playCatchSound"(player: $Player$Type): void
public "saveEntityInItem"(entity: $Entity$Type, currentStack: $ItemStack$Type, bucket: $ItemStack$Type): $ItemStack
public "canItemCatch"(e: $Entity$Type): boolean
public "blocksPlacement"(): boolean
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarItem$Type = ($JarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarItem_ = $JarItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$StructureTempBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $StructureTempBlock extends $Block implements $EntityBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTempBlock$Type = ($StructureTempBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTempBlock_ = $StructureTempBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlippedBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $FlippedBlock extends $Block {
static readonly "FLIPPED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlippedBlock$Type = ($FlippedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlippedBlock_ = $FlippedBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlaxBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IBeeGrowable, $IBeeGrowable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IBeeGrowable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"

export class $FlaxBlock extends $CropBlock implements $IBeeGrowable {
static readonly "DOUBLE_AGE": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "placeAt"(worldIn: $LevelAccessor$Type, pos: $BlockPos$Type, flags: integer): void
public "isSingle"(state: $BlockState$Type): boolean
public "growCropBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, increment: integer): void
public "growCrops"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "getPollinated"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isValidBonemealTarget"(worldIn: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, isClient: boolean): boolean
public "playerDestroy"(worldIn: $Level$Type, player: $Player$Type, pos: $BlockPos$Type, state: $BlockState$Type, te: $BlockEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, rayTraceResult: $BlockHitResult$Type): $InteractionResult
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "randomTick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "canGrowUp"(worldIn: $BlockGetter$Type, downPos: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaxBlock$Type = ($FlaxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlaxBlock_ = $FlaxBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$WallLanternBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModBlockProperties$BlockAttachment, $ModBlockProperties$BlockAttachment$Type} from "packages/net/mehvahdjukaar/amendments/reg/$ModBlockProperties$BlockAttachment"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
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
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $WallLanternBlock extends $WaterBlock implements $EntityBlock {
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "SHAPE_WEST": $VoxelShape
static readonly "SHAPE_EAST": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "ATTACHMENT": $EnumProperty<($ModBlockProperties$BlockAttachment)>
static readonly "LIT": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "getConnectedState"(state: $BlockState$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, dir: $Direction$Type): $BlockState
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "placeOn"(lantern: $BlockState$Type, onPos: $BlockPos$Type, face: $Direction$Type, world: $Level$Type): void
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public static "isValidBlock"(b: $Block$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, notify: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallLanternBlock$Type = ($WallLanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallLanternBlock_ = $WallLanternBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $CustomMapData<H extends $CustomMapData$DirtyCounter> {

 "load"(arg0: $CompoundTag$Type): void
 "save"(arg0: $CompoundTag$Type): void
 "getType"(): $CustomMapData$Type<(any)>
 "createDirtyCounter"(): H
 "loadUpdateTag"(arg0: $CompoundTag$Type): void
 "saveToUpdateTag"(arg0: $CompoundTag$Type, arg1: H): void
 "onItemUpdate"(data: $MapItemSavedData$Type, entity: $Entity$Type): boolean
 "setDirty"(data: $MapItemSavedData$Type, dirtySetter: $Consumer$Type<(H)>): void
 "onItemTooltip"(data: $MapItemSavedData$Type, stack: $ItemStack$Type): $Component
 "persistOnCopyOrLock"(): boolean
}

export namespace $CustomMapData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$Type<H> = ($CustomMapData<(H)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData_<H> = $CustomMapData$Type<(H)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$AntiqueInkItem" {
import {$SignBlockEntity, $SignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SignApplicator, $SignApplicator$Type} from "packages/net/minecraft/world/item/$SignApplicator"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SignText, $SignText$Type} from "packages/net/minecraft/world/level/block/entity/$SignText"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AntiqueInkItem extends $Item implements $SignApplicator {
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

public static "isEnabled"(): boolean
public "tryApplyToSign"(level: $Level$Type, signBlockEntity: $SignBlockEntity$Type, front: boolean, player: $Player$Type): boolean
public static "toggleAntiqueInkOnSigns"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type, tile: $BlockEntity$Type, newState: boolean): boolean
public static "hasAntiqueInk"(stack: $ItemStack$Type): boolean
public static "setAntiqueInk"(stack: $ItemStack$Type, ink: boolean): void
public static "setAntiqueInk"(tile: $BlockEntity$Type, ink: boolean): void
public "canApplyToSign"(arg0: $SignText$Type, arg1: $Player$Type): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AntiqueInkItem$Type = ($AntiqueInkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AntiqueInkItem_ = $AntiqueInkItem$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$ModCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractCauldronBlock, $AbstractCauldronBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractCauldronBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$LiquidCauldronBlockTile, $LiquidCauldronBlockTile$Type} from "packages/net/mehvahdjukaar/amendments/common/tile/$LiquidCauldronBlockTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModCauldronBlock extends $AbstractCauldronBlock implements $EntityBlock {
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "addSurfaceParticles"(type: $ParticleOptions$Type, level: $Level$Type, pos: $BlockPos$Type, count: integer, surface: double, rand: $RandomSource$Type, r: float, g: float, b: float): void
public "getLevelProperty"(): $IntegerProperty
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, fallDistance: float): void
public static "playExtinguishSound"(level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public static "playSplashAnimation"(level: $Level$Type, pos: $BlockPos$Type, e: $Entity$Type, waterLevel: double, color: integer, light: integer): void
public "updateStateOnFluidChange"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $SoftFluidStack$Type): $BlockState
public "asItem"(): $Item
public "handlePrecipitation"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, precipitation: $Biome$Precipitation$Type): void
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public "doCraftItem"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, te: $LiquidCauldronBlockTile$Type, fluid: $SoftFluidStack$Type, itemStack: $ItemStack$Type, crafted: $ItemStack$Type, layerPerItem: float, itemCountMultiplier: integer): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "levelProperty"(): $IntegerProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModCauldronBlock$Type = ($ModCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModCauldronBlock_ = $ModCauldronBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$FuelBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FuelBlockItem extends $BlockItem {
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

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type, burnTime: $Supplier$Type<(integer)>)

public "getBurnTime"(itemStack: $ItemStack$Type, recipeType: $RecipeType$Type<(any)>): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelBlockItem$Type = ($FuelBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelBlockItem_ = $FuelBlockItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BlackboardBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Vector2i, $Vector2i$Type} from "packages/org/joml/$Vector2i"
import {$IWashable, $IWashable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IWashable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlackboardBlockTile, $BlackboardBlockTile$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$BlackboardBlockTile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlackboardBlock extends $WaterBlock implements $EntityBlock, $IWashable {
static readonly "FACING": $DirectionProperty
static readonly "GLOWING": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "getHitSubPixel"(hit: $BlockHitResult$Type): $Vector2i
public static "getStackChalkColor"(stack: $ItemStack$Type): $DyeColor
public "getBlackboardItem"(te: $BlackboardBlockTile$Type): $ItemStack
public static "colorFromByte"(b: byte): integer
public static "colorToByte"(color: $DyeColor$Type): byte
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackboardBlock$Type = ($BlackboardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackboardBlock_ = $BlackboardBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$PresentItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PresentItem extends $BlockItem implements $IColored {
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

public "supportsBlankColor"(): boolean
public "getColor"(): $DyeColor
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, components: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresentItem$Type = ($PresentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PresentItem_ = $PresentItem$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/$IBellConnections" {
import {$IBellConnections$BellConnection, $IBellConnections$BellConnection$Type} from "packages/net/mehvahdjukaar/amendments/common/$IBellConnections$BellConnection"

export interface $IBellConnections {

 "amendments$setConnected"(arg0: $IBellConnections$BellConnection$Type): void
 "amendments$getConnected"(): $IBellConnections$BellConnection
}

export namespace $IBellConnections {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBellConnections$Type = ($IBellConnections);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBellConnections_ = $IBellConnections$Type;
}}
declare module "packages/net/mehvahdjukaar/jeed/recipes/$PotionProviderRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$PotionProviderRecipe, $PotionProviderRecipe$Type} from "packages/net/mehvahdjukaar/jeed/recipes/$PotionProviderRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PotionProviderRecipe$Serializer implements $RecipeSerializer<($PotionProviderRecipe)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, json: $JsonObject$Type): $PotionProviderRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $PotionProviderRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $PotionProviderRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PotionProviderRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionProviderRecipe$Serializer$Type = ($PotionProviderRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionProviderRecipe$Serializer_ = $PotionProviderRecipe$Serializer$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$IFirstPersonAnimationProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IFirstPersonAnimationProvider {

 "animateItemFirstPerson"(entity: $Player$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, arm: $HumanoidArm$Type, poseStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
/**
 * 
 * @deprecated
 */
 "animateItemFirstPerson"(entity: $LivingEntity$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, matrixStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
}

export namespace $IFirstPersonAnimationProvider {
function attachToItem(target: $Item$Type, object: $IFirstPersonAnimationProvider$Type): void
function get(target: $Item$Type): $IFirstPersonAnimationProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFirstPersonAnimationProvider$Type = ($IFirstPersonAnimationProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFirstPersonAnimationProvider_ = $IFirstPersonAnimationProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$NetheriteDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $NetheriteDoorBlock extends $DoorBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(builder: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getSoundType"(state: $BlockState$Type): $SoundType
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "hasTileEntity"(state: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteDoorBlock$Type = ($NetheriteDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteDoorBlock_ = $NetheriteDoorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SignPostItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$WoodBasedItem, $WoodBasedItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$WoodBasedItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$WoodType, $WoodType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/wood/$WoodType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SignPostItem extends $WoodBasedItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type, wood: $WoodType$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignPostItem$Type = ($SignPostItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignPostItem_ = $SignPostItem$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$FloorCandleSkullBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IRecolorable, $IRecolorable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRecolorable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractCandleSkullBlock, $AbstractCandleSkullBlock$Type} from "packages/net/mehvahdjukaar/amendments/common/block/$AbstractCandleSkullBlock"

export class $FloorCandleSkullBlock extends $AbstractCandleSkullBlock implements $IRecolorable {
static readonly "ROTATION": $IntegerProperty
static readonly "CANDLES": $IntegerProperty
static readonly "LIT": $BooleanProperty
static readonly "LIGHT_PER_CANDLE": integer
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

constructor(properties: $BlockBehaviour$Properties$Type)
constructor(properties: $BlockBehaviour$Properties$Type, particle: $Supplier$Type<($ParticleType$Type<(any)>)>)

public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "tryRecolor"(level: $Level$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type, dyeColor: $DyeColor$Type): boolean
public "isDefaultColor"(level: $Level$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloorCandleSkullBlock$Type = ($FloorCandleSkullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloorCandleSkullBlock_ = $FloorCandleSkullBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$TurnTableBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TurnTableBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWER": $IntegerProperty
static readonly "INVERTED": $BooleanProperty
static readonly "ROTATING": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "getPeriod"(state: $BlockState$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "stepOn"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, e: $Entity$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "triggerEvent"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, eventID: integer, eventParam: integer): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "updatePower"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnTableBlock$Type = ($TurnTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurnTableBlock_ = $TurnTableBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$TomatoRopeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IRopeConnection, $IRopeConnection$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$IRopeConnection"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FarmersDelightCompat$TomatoLoggedBlock, $FarmersDelightCompat$TomatoLoggedBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$TomatoLoggedBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FarmersDelightCompat$TomatoRopeBlock extends $FarmersDelightCompat$TomatoLoggedBlock implements $IRopeConnection {
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "KNOT": $BooleanProperty
static readonly "VINE_AGE": $IntegerProperty
static readonly "ROPELOGGED": $BooleanProperty
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "canSideAcceptConnection"(state: $BlockState$Type, direction: $Direction$Type): boolean
public "getInnerBlock"(): $Block
public static "isSupportingCeiling"(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "canConnectDown"(downState: $BlockState$Type): boolean
public "shouldConnectToFace"(thisState: $BlockState$Type, facingState: $BlockState$Type, facingPos: $BlockPos$Type, dir: $Direction$Type, world: $LevelReader$Type): boolean
get "innerBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmersDelightCompat$TomatoRopeBlock$Type = ($FarmersDelightCompat$TomatoRopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmersDelightCompat$TomatoRopeBlock_ = $FarmersDelightCompat$TomatoRopeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractRopeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IRopeConnection, $IRopeConnection$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$IRopeConnection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $AbstractRopeBlock extends $WaterBlock implements $IRopeConnection {
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "KNOT": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "hasMiddleKnot"(state: $BlockState$Type): boolean
public "hasConnection"(arg0: $Direction$Type, arg1: $BlockState$Type): boolean
public "shouldConnectToDir"(thisState: $BlockState$Type, currentPos: $BlockPos$Type, world: $LevelReader$Type, dir: $Direction$Type): boolean
public "setConnection"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: boolean): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isLadder"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $LivingEntity$Type): boolean
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "skipRendering"(pState: $BlockState$Type, pAdjacentBlockState: $BlockState$Type, pSide: $Direction$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "canBeReplaced"(state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getCollisionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "entityInside"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, entityIn: $Entity$Type): void
public "canSideAcceptConnection"(state: $BlockState$Type, direction: $Direction$Type): boolean
public static "isSupportingCeiling"(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "canConnectDown"(downState: $BlockState$Type): boolean
public "shouldConnectToFace"(thisState: $BlockState$Type, facingState: $BlockState$Type, facingPos: $BlockPos$Type, dir: $Direction$Type, world: $LevelReader$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRopeBlock$Type = ($AbstractRopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRopeBlock_ = $AbstractRopeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart/$ILevelEventRedirect" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILevelEventRedirect {

 "setRedirected"(arg0: boolean, arg1: $Vec3$Type): void

(arg0: boolean, arg1: $Vec3$Type): void
}

export namespace $ILevelEventRedirect {
function tryRedirect(serverLevel: $ILevelEventRedirect$Type, pPlayer: $Player$Type, vec3: $Vec3$Type, pType: integer, pPos: $BlockPos$Type, pData: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelEventRedirect$Type = ($ILevelEventRedirect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILevelEventRedirect_ = $ILevelEventRedirect$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$IWaxable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWaxable {

 "setWaxed"(arg0: boolean): void
 "tryWaxing"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
 "isWaxed"(): boolean
}

export namespace $IWaxable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWaxable$Type = ($IWaxable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWaxable_ = $IWaxable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$PancakeItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RecordItem, $RecordItem$Type} from "packages/net/minecraft/world/item/$RecordItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$TrackData, $TrackData$Type} from "packages/gg/moonflower/etched/api/record/$TrackData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PancakeItem extends $RecordItem {
/**
 * 
 * @deprecated
 */
static readonly "BY_NAME": $Map<($SoundEvent), ($RecordItem)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(i: integer, soundEvent: $SoundEvent$Type, properties: $Item$Properties$Type, seconds: integer)

public "getDescriptionId"(): string
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public static "isPlayableRecord"(stack: $ItemStack$Type): boolean
public static "playEntityRecord"(entity: $Entity$Type, record: $ItemStack$Type, restart: boolean): void
public static "stopEntityRecord"(entity: $Entity$Type): void
public static "canShowMessage"(x: double, y: double, z: double): boolean
public static "getStackMusic"(stack: $ItemStack$Type): $Optional<(($TrackData)[])>
public static "getStackAlbum"(stack: $ItemStack$Type): $Optional<($TrackData)>
public static "getStackTrackCount"(stack: $ItemStack$Type): integer
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PancakeItem$Type = ($PancakeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PancakeItem_ = $PancakeItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SoftFluid$Builder, $SoftFluid$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoftFluid$TintMethod, $SoftFluid$TintMethod$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid$TintMethod"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$FluidContainerList, $FluidContainerList$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList"
import {$Triplet, $Triplet$Type} from "packages/net/mehvahdjukaar/moonlight/api/misc/$Triplet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FoodProvider, $FoodProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FoodProvider"

export class $SoftFluid {
readonly "isGenerated": boolean
static readonly "BOTTLE_COUNT": integer
static readonly "BOWL_COUNT": integer
static readonly "BUCKET_COUNT": integer
static readonly "WATER_BUCKET_COUNT": integer
static readonly "HOLDER_CODEC": $Codec<($Holder<($SoftFluid)>)>
static readonly "COMPONENT_CODEC": $Codec<($Component)>
static readonly "CODEC": $Codec<($SoftFluid)>


/**
 * 
 * @deprecated
 */
public "isEmpty"(): boolean
public "isEnabled"(): boolean
public "isEquivalent"(fluid: $Fluid$Type): boolean
public "getLuminosity"(): integer
public "getStillTexture"(): $ResourceLocation
public "getTintColor"(): integer
/**
 * 
 * @deprecated
 */
public "getTranslationKey"(): string
public "getFlowingTexture"(): $ResourceLocation
public "getEmissivity"(): integer
public "getTranslatedName"(): $Component
public "getContainerList"(): $FluidContainerList
public "isColored"(): boolean
public static "addFluidSpecificAttributes"(builder: $SoftFluid$Builder$Type, fluid: $Fluid$Type): void
public "getAverageTextureTintColor"(): integer
public "getEmptyContainer"(filledContainer: $Item$Type): $Optional<($Item)>
public "isEmptyFluid"(): boolean
public static "getRenderingData"(useTexturesFrom: $ResourceLocation$Type): $Triplet<($ResourceLocation), ($ResourceLocation), (integer)>
public "getFilledContainer"(emptyContainer: $Item$Type): $Optional<($Item)>
/**
 * 
 * @deprecated
 */
public "getForgeFluid"(): $Fluid
public "getTextureOverride"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "getFromMod"(): string
public "getNbtKeyFromItem"(): $List<(string)>
public "isFood"(): boolean
public "getVanillaFluid"(): $Fluid
public "getFoodProvider"(): $FoodProvider
public "getEquivalentFluids"(): $List<($Fluid)>
public "getTintMethod"(): $SoftFluid$TintMethod
get "empty"(): boolean
get "enabled"(): boolean
get "luminosity"(): integer
get "stillTexture"(): $ResourceLocation
get "tintColor"(): integer
get "translationKey"(): string
get "flowingTexture"(): $ResourceLocation
get "emissivity"(): integer
get "translatedName"(): $Component
get "containerList"(): $FluidContainerList
get "colored"(): boolean
get "averageTextureTintColor"(): integer
get "emptyFluid"(): boolean
get "forgeFluid"(): $Fluid
get "textureOverride"(): $ResourceLocation
get "fromMod"(): string
get "nbtKeyFromItem"(): $List<(string)>
get "food"(): boolean
get "vanillaFluid"(): $Fluid
get "foodProvider"(): $FoodProvider
get "equivalentFluids"(): $List<($Fluid)>
get "tintMethod"(): $SoftFluid$TintMethod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluid$Type = ($SoftFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftFluid_ = $SoftFluid$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BellowsBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
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
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BellowsBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWER": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "createVoxelShapeXZ"(height: float): $VoxelShape
public static "createVoxelShapeY"(height: float): $VoxelShape
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "stepOn"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entityIn: $Entity$Type): void
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "getOcclusionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getCollisionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "entityInside"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, entityIn: $Entity$Type): void
public "updatePower"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BellowsBlock$Type = ($BellowsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BellowsBlock_ = $BellowsBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IBlockHolder" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IBlockHolder {

 "setHeldBlock"(state: $BlockState$Type): boolean
 "setHeldBlock"(arg0: $BlockState$Type, arg1: integer): boolean
 "getHeldBlock"(arg0: integer): $BlockState
 "getHeldBlock"(): $BlockState
}

export namespace $IBlockHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockHolder$Type = ($IBlockHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockHolder_ = $IBlockHolder$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$CageItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$AbstractMobContainerItem, $AbstractMobContainerItem$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$AbstractMobContainerItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CageItem extends $AbstractMobContainerItem implements $ICustomItemRendererProvider {
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

public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
public "playReleaseSound"(world: $Level$Type, v: $Vec3$Type): void
public "playCatchSound"(player: $Player$Type): void
public "canItemCatch"(e: $Entity$Type): boolean
public "playFailSound"(player: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CageItem$Type = ($CageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CageItem_ = $CageItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/quark/$TaterInAJarBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$TinyPotatoBlock, $TinyPotatoBlock$Type} from "packages/org/violetmoon/quark/addons/oddities/block/$TinyPotatoBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TaterInAJarBlock extends $TinyPotatoBlock {
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "ANGRY": string
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

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getSoundType"(state: $BlockState$Type): $SoundType
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, ctx: $CollisionContext$Type): $VoxelShape
public static "isEnabled"(arg0: $Item$Type): boolean
public static "isEnabled"(arg0: $Block$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaterInAJarBlock$Type = ($TaterInAJarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaterInAJarBlock_ = $TaterInAJarBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CogBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CogBlock extends $Block {
static readonly "POWER": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "isSignalSource"(state: $BlockState$Type): boolean
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "updatePower"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CogBlock$Type = ($CogBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CogBlock_ = $CogBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$TrappedPresentBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPresentItemBehavior, $IPresentItemBehavior$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/present/$IPresentItemBehavior"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$AbstractPresentBlock, $AbstractPresentBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractPresentBlock"

export class $TrappedPresentBlock extends $AbstractPresentBlock {
static readonly "FACING": $DirectionProperty
static readonly "ON_COOLDOWN": $BooleanProperty
static readonly "SHAPE_LID": $VoxelShape
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "PACKED": $BooleanProperty
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

constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type)

public static "getPresentBehavior"(pStack: $ItemStack$Type): $IPresentItemBehavior
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public static "registerBehavior"(pItem: $ItemLike$Type, pBehavior: $IPresentItemBehavior$Type): void
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "triggerEvent"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pId: integer, pParam: integer): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrappedPresentBlock$Type = ($TrappedPresentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrappedPresentBlock_ = $TrappedPresentBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$KeyItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KeyItem extends $Item {
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

public "getPassword"(stack: $ItemStack$Type): string
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "doesSneakBypassUse"(stack: $ItemStack$Type, world: $LevelReader$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "isBookEnchantable"(stack: $ItemStack$Type, book: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(stack: $ItemStack$Type, enchantment: $Enchantment$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyItem$Type = ($KeyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyItem_ = $KeyItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList$Category" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $FluidContainerList$Category {
static readonly "CODEC": $Codec<($FluidContainerList$Category)>


public "getFirstFilled"(): $Optional<($Item)>
public "isEmpty"(): boolean
public "getCapacity"(): integer
public "getAmount"(): integer
public "getEmptySound"(): $SoundEvent
public "getFillSound"(): $SoundEvent
public "getFilledItems"(): $List<($Item)>
public "getEmptyContainer"(): $Item
get "firstFilled"(): $Optional<($Item)>
get "empty"(): boolean
get "capacity"(): integer
get "amount"(): integer
get "emptySound"(): $SoundEvent
get "fillSound"(): $SoundEvent
get "filledItems"(): $List<($Item)>
get "emptyContainer"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainerList$Category$Type = ($FluidContainerList$Category);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidContainerList$Category_ = $FluidContainerList$Category$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$HourGlassBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $HourGlassBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HourGlassBlock$Type = ($HourGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HourGlassBlock_ = $HourGlassBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FluidContainerList$Category, $FluidContainerList$Category$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList$Category"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $FluidContainerList {

constructor(categoryList: $List$Type<($FluidContainerList$Category$Type)>)
constructor()

public "getPossibleEmpty"(): $Collection<($Item)>
public "getCategories"(): $Collection<($FluidContainerList$Category)>
public "getEmpty"(filledContainer: $Item$Type): $Optional<($Item)>
public "getFilled"(emptyContainer: $Item$Type): $Optional<($Item)>
public "getPossibleFilled"(): $Collection<($Item)>
public "getCategoryFromFilled"(filledContainer: $Item$Type): $Optional<($FluidContainerList$Category)>
public "getCategoryFromEmpty"(emptyContainer: $Item$Type): $Optional<($FluidContainerList$Category)>
get "possibleEmpty"(): $Collection<($Item)>
get "categories"(): $Collection<($FluidContainerList$Category)>
get "possibleFilled"(): $Collection<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainerList$Type = ($FluidContainerList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidContainerList_ = $FluidContainerList$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid$TintMethod" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SoftFluid$TintMethod extends $Enum<($SoftFluid$TintMethod)> implements $StringRepresentable {
static readonly "NO_TINT": $SoftFluid$TintMethod
static readonly "FLOWING": $SoftFluid$TintMethod
static readonly "STILL_AND_FLOWING": $SoftFluid$TintMethod
static readonly "CODEC": $Codec<($SoftFluid$TintMethod)>


public "appliesToFlowing"(): boolean
public static "values"(): ($SoftFluid$TintMethod)[]
public static "valueOf"(name: string): $SoftFluid$TintMethod
public "getSerializedName"(): string
public "appliesToStill"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluid$TintMethod$Type = (("no_tint") | ("still_and_flowing") | ("flowing")) | ($SoftFluid$TintMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftFluid$TintMethod_ = $SoftFluid$TintMethod$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BambooSpikesBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IPistonMotionReact, $IPistonMotionReact$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IPistonMotionReact"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ISoftFluidConsumer, $ISoftFluidConsumer$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidConsumer"
import {$IWashable, $IWashable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IWashable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BambooSpikesBlock extends $WaterBlock implements $ISoftFluidConsumer, $EntityBlock, $IWashable, $IPistonMotionReact {
static readonly "FACING": $DirectionProperty
static readonly "TIPPED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "tryAcceptingFluid"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, fluid: $SoftFluidStack$Type): boolean
public static "tryAddingPotion"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, potion: $Potion$Type): boolean
public "getSpikeItem"(te: $BlockEntity$Type): $ItemStack
public "ticksWhileMoved"(): boolean
public "moveTick"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getAdjacentBlockPathType"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, mob: $Mob$Type, originalType: $BlockPathTypes$Type): $BlockPathTypes
public static "getDamageSource"(level: $Level$Type): $DamageSource
public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getBlockPathType"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, mob: $Mob$Type): $BlockPathTypes
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getInteractionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entityIn: $Entity$Type): void
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "onMagnetMoved"(level: $Level$Type, blockPos: $BlockPos$Type, direction: $Direction$Type, blockState: $BlockState$Type, blockEntity: $BlockEntity$Type): void
/**
 * 
 * @deprecated
 */
public "onMoved"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, extending: boolean, tile: $PistonMovingBlockEntity$Type): void
public "onMoved"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, direction: $Direction$Type, extending: boolean): void
public "moveTick"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
public "canMagnetMove"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BambooSpikesBlock$Type = ($BambooSpikesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BambooSpikesBlock_ = $BambooSpikesBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/vsc/$CutBlockType" {
import {$WoodType, $WoodType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/wood/$WoodType"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockType, $BlockType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType"

export class $CutBlockType extends $BlockType {
readonly "base": $Block
readonly "slab": $Block
readonly "id": $ResourceLocation

constructor(id: $ResourceLocation$Type, base: $Block$Type, slab: $Block$Type)

public "getTranslationKey"(): string
public "initializeChildrenBlocks"(): void
public "initializeChildrenItems"(): void
public "getWoodType"(): $WoodType
public "mainChild"(): $ItemLike
get "translationKey"(): string
get "woodType"(): $WoodType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CutBlockType$Type = ($CutBlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CutBlockType_ = $CutBlockType$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ILightable {

 "extinguish"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
 "playExtinguishSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
 "spawnSmokeParticles"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): void
 "canBeExtinguishedBy"(item: $ItemStack$Type): boolean
 "interactWithProjectile"(level: $Level$Type, state: $BlockState$Type, projectile: $Projectile$Type, pos: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
 "isLitUp"(state: $BlockState$Type): boolean
 "isLitUp"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
 "setLitUp"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, lit: boolean): void
 "playLightUpSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type, type: $ILightable$FireSourceType$Type): void
/**
 * 
 * @deprecated
 */
 "toggleLitState"(state: $BlockState$Type, lit: boolean): $BlockState
 "lightUp"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
 "interactWithPlayer"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResult
}

export namespace $ILightable {
const FLINT_AND_STEELS: $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILightable$Type = ($ILightable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILightable_ = $ILightable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SliceMapItem$DepthMapData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$CustomMapData, $CustomMapData$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CustomMapData$SimpleDirtyCounter, $CustomMapData$SimpleDirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$SimpleDirtyCounter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SliceMapItem$DepthMapData implements $CustomMapData<($CustomMapData$SimpleDirtyCounter)> {


public "load"(tag: $CompoundTag$Type): void
public "set"(slice: integer): void
public "save"(tag: $CompoundTag$Type): void
public "getType"(): $CustomMapData$Type<($SliceMapItem$DepthMapData)>
public "loadUpdateTag"(tag: $CompoundTag$Type): void
public "saveToUpdateTag"(tag: $CompoundTag$Type, dirtyCounter: $CustomMapData$SimpleDirtyCounter$Type): void
public "onItemTooltip"(data: $MapItemSavedData$Type, stack: $ItemStack$Type): $Component
public "onItemUpdate"(data: $MapItemSavedData$Type, entity: $Entity$Type): boolean
public "setDirty"(data: $MapItemSavedData$Type, dirtySetter: $Consumer$Type<($CustomMapData$SimpleDirtyCounter$Type)>): void
public "persistOnCopyOrLock"(): boolean
get "type"(): $CustomMapData$Type<($SliceMapItem$DepthMapData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SliceMapItem$DepthMapData$Type = ($SliceMapItem$DepthMapData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SliceMapItem$DepthMapData_ = $SliceMapItem$DepthMapData$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MobContainer$MobNBTData, $MobContainer$MobNBTData$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer$MobNBTData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"
import {$MobContainer$MobNBTData$Entity, $MobContainer$MobNBTData$Entity$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer$MobNBTData$Entity"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MobContainer {

constructor(width: float, height: float, isAquarium: boolean)

public "load"(tag: $CompoundTag$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "save"(tag: $CompoundTag$Type): $CompoundTag
public "getData"(): $MobContainer$MobNBTData
public "tick"(pLevel: $Level$Type, pPos: $BlockPos$Type): void
public "getDisplayedMob"(): $Entity
public "shouldRenderWithFluid"(): $Optional<($Holder<($SoftFluid)>)>
public "onInteract"(world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public static "createMobHolderItemTag"(mob: $Entity$Type, blockW: float, blockH: float, bucketStack: $ItemStack$Type, isAquarium: boolean): $CompoundTag
public "interactWithBucket"(stack: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type): boolean
public static "calculateMobDimensionsForContainer"(mob: $Entity$Type, blockW: float, blockH: float, waterlogged: boolean): $Pair<(float), (float)>
public static "createStaticMob"(data: $MobContainer$MobNBTData$Entity$Type, world: $Level$Type, pos: $BlockPos$Type): $Entity
public "updateLightLevel"(level: $Level$Type, pos: $BlockPos$Type): void
public static "createEntityFromNBT"(tag: $CompoundTag$Type, id: $UUID$Type, world: $Level$Type): $Entity
get "empty"(): boolean
get "data"(): $MobContainer$MobNBTData
get "displayedMob"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobContainer$Type = ($MobContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobContainer_ = $MobContainer$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer$MobNBTData$Entity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MobContainer$MobNBTData, $MobContainer$MobNBTData$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer$MobNBTData"

export class $MobContainer$MobNBTData$Entity extends $MobContainer$MobNBTData {
readonly "mobTag": $CompoundTag


public "getScale"(): float
get "scale"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobContainer$MobNBTData$Entity$Type = ($MobContainer$MobNBTData$Entity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobContainer$MobNBTData$Entity_ = $MobContainer$MobNBTData$Entity$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$ToolHookBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ToolHookBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "NORTH_AABB": $VoxelShape
static readonly "SOUTH_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "EAST_AABB": $VoxelShape
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolHookBlock$Type = ($ToolHookBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolHookBlock_ = $ToolHookBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IPistonMotionReact" {
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$PistonReactQuarkMixin, $PistonReactQuarkMixin$Type} from "packages/net/mehvahdjukaar/moonlight/core/mixins/compat/$PistonReactQuarkMixin"
import {$IMagnetMoveAction, $IMagnetMoveAction$Type} from "packages/org/violetmoon/quark/api/$IMagnetMoveAction"

export interface $IPistonMotionReact extends $PistonReactQuarkMixin, $IMagnetMoveAction {

 "onMagnetMoved"(level: $Level$Type, blockPos: $BlockPos$Type, direction: $Direction$Type, blockState: $BlockState$Type, blockEntity: $BlockEntity$Type): void
 "ticksWhileMoved"(): boolean
/**
 * 
 * @deprecated
 */
 "onMoved"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, extending: boolean, tile: $PistonMovingBlockEntity$Type): void
 "onMoved"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, direction: $Direction$Type, extending: boolean): void
 "moveTick"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
/**
 * 
 * @deprecated
 */
 "moveTick"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
 "canMagnetMove"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type): boolean
}

export namespace $IPistonMotionReact {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPistonMotionReact$Type = ($IPistonMotionReact);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPistonMotionReact_ = $IPistonMotionReact$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AshenBasaltBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AshenBasaltBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AshenBasaltBlock$Type = ($AshenBasaltBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AshenBasaltBlock_ = $AshenBasaltBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BombType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BombExplosion, $BombExplosion$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/explosion/$BombExplosion"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BombEntity, $BombEntity$Type} from "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BombEntity$BreakingMode, $BombEntity$BreakingMode$Type} from "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BreakingMode"

export class $BombEntity$BombType extends $Enum<($BombEntity$BombType)> {
static readonly "NORMAL": $BombEntity$BombType
static readonly "BLUE": $BombEntity$BombType
static readonly "SPIKY": $BombEntity$BombType
readonly "item": $Supplier<($Item)>
readonly "itemOn": $Supplier<($Item)>


public static "values"(): ($BombEntity$BombType)[]
public static "valueOf"(name: string): $BombEntity$BombType
public "getRadius"(): double
public "getDisplayStack"(active: boolean): $ItemStack
public "volume"(): float
public "afterExploded"(exp: $BombExplosion$Type, level: $Level$Type): void
public "breakMode"(): $BombEntity$BreakingMode
public "applyStatusEffects"(entity: $LivingEntity$Type, distSq: double): void
public "spawnExtraParticles"(bomb: $BombEntity$Type): void
public "isInstantlyActivated"(): boolean
get "radius"(): double
get "instantlyActivated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombEntity$BombType$Type = (("normal") | ("spiky") | ("blue")) | ($BombEntity$BombType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BombEntity$BombType_ = $BombEntity$BombType$Type;
}}
declare module "packages/net/mehvahdjukaar/jeed/recipes/$EffectProviderRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $EffectProviderRecipe implements $Recipe<($CraftingContainer)> {

constructor(id: $ResourceLocation$Type, effect: $MobEffect$Type, providers: $NonNullList$Type<($Ingredient$Type)>)

public "matches"(inv: $CraftingContainer$Type, worldIn: $Level$Type): boolean
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "getEffects"(): $Collection<($MobEffect)>
public "assemble"(container: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
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
get "effects"(): $Collection<($MobEffect)>
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
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
export type $EffectProviderRecipe$Type = ($EffectProviderRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectProviderRecipe_ = $EffectProviderRecipe$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IQuiverEntity {

 "supplementaries$setQuiver"(arg0: $ItemStack$Type): void
 "supplementaries$getQuiver"(): $ItemStack
 "supplementaries$hasQuiver"(): boolean
}

export namespace $IQuiverEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuiverEntity$Type = ($IQuiverEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQuiverEntity_ = $IQuiverEntity$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidTankProvider" {
import {$SoftFluidTank, $SoftFluidTank$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidTank"

export interface $ISoftFluidTankProvider {

 "canInteractWithSoftFluidTank"(): boolean
 "getSoftFluidTank"(): $SoftFluidTank

(): boolean
}

export namespace $ISoftFluidTankProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoftFluidTankProvider$Type = ($ISoftFluidTankProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoftFluidTankProvider_ = $ISoftFluidTankProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FrameBraceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FrameBlock, $FrameBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FrameBlock"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FrameBraceBlock extends $FrameBlock {
static readonly "FLIPPED": $BooleanProperty
static readonly "FRAMED_BLOCKS": $List<($Block)>
static readonly "HAS_BLOCK": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "OCCLUSION_SHAPE": $VoxelShape
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "applyRotationLock"(world: $Level$Type, blockPos: $BlockPos$Type, state: $BlockState$Type, direction: $Direction$Type, half: integer): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameBraceBlock$Type = ($FrameBraceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameBraceBlock_ = $FrameBraceBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CrystalDisplayBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CrystalDisplayBlock extends $WaterBlock {
static readonly "POWER": $IntegerProperty
static readonly "ATTACHED": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalDisplayBlock$Type = ($CrystalDisplayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalDisplayBlock_ = $CrystalDisplayBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PulleyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$ModBlockProperties$Winding, $ModBlockProperties$Winding$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Winding"

export class $PulleyBlock extends $RotatedPillarBlock implements $EntityBlock, $IRotatable {
static readonly "TYPE": $EnumProperty<($ModBlockProperties$Winding)>
static readonly "FLIPPED": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "windPulley"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, rot: $Rotation$Type, dir: $Direction$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(state: $BlockState$Type, blockEntity: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, originalRot: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
public "getRotatedState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PulleyBlock$Type = ($PulleyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PulleyBlock_ = $PulleyBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer$MobNBTData" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MobContainer$MobNBTData {


public "getName"(): string
public "getFishTexture"(): integer
public "is2DFish"(): boolean
public "getFluidID"(): $ResourceLocation
get "name"(): string
get "fishTexture"(): integer
get "2DFish"(): boolean
get "fluidID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobContainer$MobNBTData$Type = ($MobContainer$MobNBTData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobContainer$MobNBTData_ = $MobContainer$MobNBTData$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$IronGateBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
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
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $IronGateBlock extends $FenceGateBlock implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, gold: boolean)

public static "messWithIronBarsState"(level: $LevelAccessor$Type, clickedPos: $BlockPos$Type, returnValue: $BlockState$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getSoundType"(state: $BlockState$Type): $SoundType
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
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
export type $IronGateBlock$Type = ($IronGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IronGateBlock_ = $IronGateBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$WaterloggedLilyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$WaterlilyBlock, $WaterlilyBlock$Type} from "packages/net/minecraft/world/level/block/$WaterlilyBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LiquidBlockContainer, $LiquidBlockContainer$Type} from "packages/net/minecraft/world/level/block/$LiquidBlockContainer"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $WaterloggedLilyBlock extends $WaterlilyBlock implements $LiquidBlockContainer, $EntityBlock {
static readonly "EXTENDED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "placeLiquid"(level: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluidState: $FluidState$Type): boolean
public "canPlaceLiquid"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getSoundType"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getDescriptionId"(): string
public "getExplosionResistance"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getSeed"(pState: $BlockState$Type, pPos: $BlockPos$Type): long
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, serverLevel: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getDestroyProgress"(state: $BlockState$Type, player: $Player$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterloggedLilyBlock$Type = ($WaterloggedLilyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterloggedLilyBlock_ = $WaterloggedLilyBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/explosion/$BombExplosion" {
import {$ExplosionDamageCalculator, $ExplosionDamageCalculator$Type} from "packages/net/minecraft/world/level/$ExplosionDamageCalculator"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BombEntity$BombType, $BombEntity$BombType$Type} from "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BombType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BombExplosion extends $Explosion {
static readonly "EXPLOSION_DAMAGE_CALCULATOR": $ExplosionDamageCalculator
static readonly "MAX_DROPS_PER_COMBINED_STACK": integer
readonly "fire": boolean
readonly "blockInteraction": $Explosion$BlockInteraction
 "random": $RandomSource
readonly "level": $Level
readonly "x": double
readonly "y": double
readonly "z": double
 "source": $Entity
 "radius": float
 "damageSource": $DamageSource
readonly "damageCalculator": $ExplosionDamageCalculator
readonly "toBlow": $ObjectArrayList<($BlockPos)>
readonly "hitPlayers": $Map<($Player), ($Vec3)>
readonly "position": $Vec3

constructor(world: $Level$Type, entity: $Entity$Type, context: $ExplosionDamageCalculator$Type, x: double, y: double, z: double, radius: float, bombType: $BombEntity$BombType$Type, interaction: $Explosion$BlockInteraction$Type)

public "explode"(): void
public "getToBlow"(): $ObjectArrayList<($BlockPos)>
public "doFinalizeExplosion"(): void
get "toBlow"(): $ObjectArrayList<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombExplosion$Type = ($BombExplosion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BombExplosion_ = $BombExplosion$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BambooSpikesTippedItem" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$WoodBasedBlockItem, $WoodBasedBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$WoodBasedBlockItem"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BambooSpikesTippedItem extends $WoodBasedBlockItem implements $SimpleWaterloggedBlock {
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

constructor(blockIn: $Block$Type, builder: $Item$Properties$Type)

public static "makeSpikeItem"(potion: $Potion$Type): $ItemStack
public static "isPotionValid"(potion: $Potion$Type): boolean
public "getDefaultInstance"(): $ItemStack
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getDescriptionId"(stack: $ItemStack$Type): string
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getName"(stack: $ItemStack$Type): $Component
public "isEnchantable"(stack: $ItemStack$Type): boolean
public "isRepairable"(stack: $ItemStack$Type): boolean
public "isValidRepairItem"(toRepair: $ItemStack$Type, repair: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "isBookEnchantable"(stack: $ItemStack$Type, book: $ItemStack$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "defaultInstance"(): $ItemStack
get "enchantmentValue"(): integer
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BambooSpikesTippedItem$Type = ($BambooSpikesTippedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BambooSpikesTippedItem_ = $BambooSpikesTippedItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SpringLauncherHeadBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $SpringLauncherHeadBlock extends $DirectionalBlock {
static readonly "FACING": $DirectionProperty
static readonly "SHORT": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entityIn: $Entity$Type, fallDistance: float): void
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "playerWillDestroy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringLauncherHeadBlock$Type = ($SpringLauncherHeadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpringLauncherHeadBlock_ = $SpringLauncherHeadBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/jeed/recipes/$EffectProviderRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$EffectProviderRecipe, $EffectProviderRecipe$Type} from "packages/net/mehvahdjukaar/jeed/recipes/$EffectProviderRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $EffectProviderRecipe$Serializer implements $RecipeSerializer<($EffectProviderRecipe)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, json: $JsonObject$Type): $EffectProviderRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $EffectProviderRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $EffectProviderRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $EffectProviderRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectProviderRecipe$Serializer$Type = ($EffectProviderRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectProviderRecipe$Serializer_ = $EffectProviderRecipe$Serializer$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MapDecorationType, $MapDecorationType$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType"

export class $CustomMapDecoration {

constructor(type: $MapDecorationType$Type<(any), (any)>, buffer: $FriendlyByteBuf$Type)
constructor(type: $MapDecorationType$Type<(any), (any)>, x: byte, y: byte, rot: byte, displayName: $Component$Type)

public "equals"(obj: any): boolean
public "hashCode"(): integer
public "getType"(): $MapDecorationType<(any), (any)>
public "getDisplayName"(): $Component
public "getY"(): byte
public "setRot"(rot: byte): void
public "getRot"(): byte
public "setDisplayName"(displayName: $Component$Type): void
public "getX"(): byte
public "setX"(x: byte): void
public "setY"(y: byte): void
public "saveToBuffer"(buffer: $FriendlyByteBuf$Type): void
get "type"(): $MapDecorationType<(any), (any)>
get "displayName"(): $Component
get "y"(): byte
set "rot"(value: byte)
get "rot"(): byte
set "displayName"(value: $Component$Type)
get "x"(): byte
set "x"(value: byte)
set "y"(value: byte)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapDecoration$Type = ($CustomMapDecoration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapDecoration_ = $CustomMapDecoration$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IHoldingPlayerExtension" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"

export interface $IHoldingPlayerExtension {

 "moonlight$setCustomMarkersDirty"(): void
 "moonlight$setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type$Type<(any)>, arg1: $Consumer$Type<(H)>): void
}

export namespace $IHoldingPlayerExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHoldingPlayerExtension$Type = ($IHoldingPlayerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHoldingPlayerExtension_ = $IHoldingPlayerExtension$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$BlockPlacerItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockPlacerItem extends $BlockItem {
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

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type)

public static "get"(): $BlockPlacerItem
public "mimicGetPlacementState"(pContext: $BlockPlaceContext$Type, toPlace: $Block$Type): $BlockState
public "mimicPlace"(pContext: $BlockPlaceContext$Type, toPlace: $Block$Type, overrideSound: $SoundType$Type): $InteractionResult
public "mimicUseOn"(pContext: $UseOnContext$Type, toPlace: $Block$Type, foodProperties: $FoodProperties$Type): $InteractionResult
public "getDescriptionId"(): string
public "m_40610_"(pContext: $BlockPlaceContext$Type, pState: $BlockState$Type): boolean
public "getFoodProperties"(): $FoodProperties
public "registerBlocks"(pBlockToItemMap: $Map$Type<($Block$Type), ($Item$Type)>, pItem: $Item$Type): void
public "isEdible"(): boolean
public "getBlock"(): $Block
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "descriptionId"(): string
get "foodProperties"(): $FoodProperties
get "edible"(): boolean
get "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerItem$Type = ($BlockPlacerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlacerItem_ = $BlockPlacerItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IOwnerProtected" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IOwnerProtected {

 "getOwner"(): $UUID
 "isPublic"(): boolean
 "setOwner"(arg0: $UUID$Type): void
 "isOwnedBy"(player: $Player$Type): boolean
 "saveOwner"(tag: $CompoundTag$Type): void
 "isAccessibleBy"(player: $Player$Type): boolean
 "loadOwner"(tag: $CompoundTag$Type): void
 "isNotOwnedBy"(player: $Player$Type): boolean
}

export namespace $IOwnerProtected {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnerProtected$Type = ($IOwnerProtected);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnerProtected_ = $IOwnerProtected$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $BlockType {
readonly "id": $ResourceLocation


public "toString"(): string
public "getTypeName"(): string
public "getId"(): $ResourceLocation
public "getChildren"(): $Set<($Map$Entry<(string), (any)>)>
public "getChild"(key: string): any
public "getNamespace"(): string
public "addChild"(genericName: string, obj: any): void
public "isVanilla"(): boolean
public static "changeItemType"(current: $Item$Type, originalMat: $BlockType$Type, destinationMat: $BlockType$Type): $Item
public "getBlockOfThis"(key: string): $Block
public "getChildKey"(child: any): string
public static "changeBlockType"(current: $Block$Type, originalMat: $BlockType$Type, destinationMat: $BlockType$Type): $Block
public static "changeType"(current: any, originalMat: $BlockType$Type, destinationMat: $BlockType$Type): any
public "getAppendableId"(): string
public "getVariantId"(postfix: string, prefix: string): string
public "getVariantId"(baseName: string, prefix: boolean): string
public "getVariantId"(baseName: string): string
public "getItemOfThis"(key: string): $Item
public "getReadableName"(): string
public "getTranslationKey"(): string
public "getSound"(): $SoundType
public "mainChild"(): $ItemLike
get "typeName"(): string
get "id"(): $ResourceLocation
get "children"(): $Set<($Map$Entry<(string), (any)>)>
get "namespace"(): string
get "vanilla"(): boolean
get "appendableId"(): string
get "readableName"(): string
get "translationKey"(): string
get "sound"(): $SoundType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$Type = ($BlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockType_ = $BlockType$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidConsumer" {
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISoftFluidConsumer {

 "tryAcceptingFluid"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $SoftFluidStack$Type): boolean

(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $SoftFluidStack$Type): boolean
}

export namespace $ISoftFluidConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoftFluidConsumer$Type = ($ISoftFluidConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoftFluidConsumer_ = $ISoftFluidConsumer$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$WallCandleSkullBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IRecolorable, $IRecolorable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRecolorable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractCandleSkullBlock, $AbstractCandleSkullBlock$Type} from "packages/net/mehvahdjukaar/amendments/common/block/$AbstractCandleSkullBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $WallCandleSkullBlock extends $AbstractCandleSkullBlock implements $IRecolorable {
static readonly "FACING": $DirectionProperty
static readonly "CANDLES": $IntegerProperty
static readonly "LIT": $BooleanProperty
static readonly "LIGHT_PER_CANDLE": integer
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

constructor(properties: $BlockBehaviour$Properties$Type)
constructor(properties: $BlockBehaviour$Properties$Type, particle: $Supplier$Type<($ParticleType$Type<(any)>)>)

public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "tryRecolor"(level: $Level$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type, dyeColor: $DyeColor$Type): boolean
public "isDefaultColor"(level: $Level$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallCandleSkullBlock$Type = ($WallCandleSkullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallCandleSkullBlock_ = $WallCandleSkullBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SpeakerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SpeakerBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "ANTIQUE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "triggerEvent"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, eventID: integer, eventParam: integer): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "updatePower"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeakerBlock$Type = ($SpeakerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpeakerBlock_ = $SpeakerBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$BlackboardBlockTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IOnePlayerGui, $IOnePlayerGui$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$IOnePlayerGui"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlackboardManager$Key, $BlackboardManager$Key$Type} from "packages/net/mehvahdjukaar/supplementaries/client/$BlackboardManager$Key"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ExtraModelData, $ExtraModelData$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ExtraModelData$Builder, $ExtraModelData$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder"
import {$IExtraModelDataProvider, $IExtraModelDataProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$IExtraModelDataProvider"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ModelDataKey, $ModelDataKey$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey"
import {$IOwnerProtected, $IOwnerProtected$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IOwnerProtected"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IWaxable, $IWaxable$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$IWaxable"

export class $BlackboardBlockTile extends $BlockEntity implements $IOwnerProtected, $IOnePlayerGui, $IWaxable, $IExtraModelDataProvider {
static readonly "BLACKBOARD_KEY": $ModelDataKey<($BlackboardManager$Key)>
 "blockState": $BlockState

constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public "setPlayerWhoMayEdit"(playerWhoMayEdit: $UUID$Type): void
public "getPlayerWhoMayEdit"(): $UUID
public static "unpackPixelsFromString"(packed: string): (long)[]
public static "unpackPixelsFromStringWhiteOnly"(packed: string): (long)[]
public static "packPixelsToStringWhiteOnly"(packed: (long)[]): string
public "loadFromTag"(compound: $CompoundTag$Type): void
public "setWaxed"(b: boolean): void
public "isWaxed"(): boolean
public "savePixels"(compound: $CompoundTag$Type): $CompoundTag
public "getOwner"(): $UUID
public "clear"(): void
public "isEmpty"(): boolean
public "setOwner"(owner: $UUID$Type): void
public "setChanged"(): void
public "getPixel"(xx: integer, yy: integer): byte
public "setPixel"(x: integer, y: integer, b: byte): void
public "getDirection"(): $Direction
public "m_183515_"(compound: $CompoundTag$Type): void
public "load"(compound: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "setPixels"(pixels: ((byte)[])[]): void
public "openScreen"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void
public "getExtraModelData"(): $ExtraModelData
public "afterDataPacket"(oldData: $ExtraModelData$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getTextureKey"(): $BlackboardManager$Key
public "refreshTextureKey"(): void
public static "unpackPixels"(packed: (long)[]): ((byte)[])[]
public static "packPixelsToString"(packed: (long)[]): string
public static "packPixels"(pixels: ((byte)[])[]): (long)[]
public "isPublic"(): boolean
public "isOwnedBy"(player: $Player$Type): boolean
public "saveOwner"(tag: $CompoundTag$Type): void
public "isAccessibleBy"(player: $Player$Type): boolean
public "loadOwner"(tag: $CompoundTag$Type): void
public "isNotOwnedBy"(player: $Player$Type): boolean
public "isOtherPlayerEditing"(player: $Player$Type): boolean
public "playerIsTooFarAwayToEdit"(level: $Level$Type, pos: $BlockPos$Type, uUID: $UUID$Type): boolean
public "validatePlayerWhoMayEdit"(level: $Level$Type, pos: $BlockPos$Type): void
public "shouldUseContainerMenu"(): boolean
public "tryOpeningEditGui"(player: $ServerPlayer$Type, pos: $BlockPos$Type): boolean
public "tryWaxing"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public "onDataPacket"(net: $Connection$Type, pkt: $ClientboundBlockEntityDataPacket$Type): void
public "getModelData"(): $ModelData
public "requestModelReload"(): void
public "addExtraModelData"(builder: $ExtraModelData$Builder$Type): void
public "sendOpenGuiPacket"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hitFace: $Direction$Type): void
public "sendOpenGuiPacket"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void
public "openScreen"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, direction: $Direction$Type): void
set "playerWhoMayEdit"(value: $UUID$Type)
get "playerWhoMayEdit"(): $UUID
set "waxed"(value: boolean)
get "waxed"(): boolean
get "owner"(): $UUID
get "empty"(): boolean
set "owner"(value: $UUID$Type)
get "direction"(): $Direction
get "updateTag"(): $CompoundTag
set "pixels"(value: ((byte)[])[])
get "extraModelData"(): $ExtraModelData
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "textureKey"(): $BlackboardManager$Key
get "public"(): boolean
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackboardBlockTile$Type = ($BlackboardBlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackboardBlockTile_ = $BlackboardBlockTile$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BombItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BombEntity$BombType, $BombEntity$BombType$Type} from "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BombType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BombItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(builder: $Item$Properties$Type)
constructor(builder: $Item$Properties$Type, type: $BombEntity$BombType$Type, glint: boolean)

public "getType"(): $BombEntity$BombType
public "use"(worldIn: $Level$Type, playerIn: $Player$Type, handIn: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(stack: $ItemStack$Type): boolean
public "getRarity"(stack: $ItemStack$Type): $Rarity
get "type"(): $BombEntity$BombType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombItem$Type = ($BombItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BombItem_ = $BombItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$TomatoStickBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FarmersDelightCompat$TomatoLoggedBlock, $FarmersDelightCompat$TomatoLoggedBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$TomatoLoggedBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FarmersDelightCompat$TomatoStickBlock extends $FarmersDelightCompat$TomatoLoggedBlock {
static readonly "AXIS_X": $BooleanProperty
static readonly "AXIS_Z": $BooleanProperty
static readonly "VINE_AGE": $IntegerProperty
static readonly "ROPELOGGED": $BooleanProperty
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "canBeReplaced"(state: $BlockState$Type, context: $BlockPlaceContext$Type): boolean
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getInnerBlock"(): $Block
get "innerBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmersDelightCompat$TomatoStickBlock$Type = ($FarmersDelightCompat$TomatoStickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmersDelightCompat$TomatoStickBlock_ = $FarmersDelightCompat$TomatoStickBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SpringLauncherBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SpringLauncherBlock extends $Block {
static readonly "FACING": $DirectionProperty
static readonly "EXTENDED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getPistonPushReaction"(state: $BlockState$Type): $PushReaction
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringLauncherBlock$Type = ($SpringLauncherBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpringLauncherBlock_ = $SpringLauncherBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$HangingFlowerPotBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $HangingFlowerPotBlock extends $Block implements $EntityBlock {
static readonly "LIGHT_LEVEL": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getName"(): $MutableComponent
public static "playPlantSound"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getOcclusionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "name"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingFlowerPotBlock$Type = ($HangingFlowerPotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangingFlowerPotBlock_ = $HangingFlowerPotBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CrankBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $CrankBlock extends $WaterBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWER": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "activate"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, ccw: boolean): void
public "animateTick"(stateIn: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "isSignalSource"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getDirectSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankBlock$Type = ($CrankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrankBlock_ = $CrankBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/entity/$IExtraClientSpawnData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SelfEntitySpawnDataMixin, $SelfEntitySpawnDataMixin$Type} from "packages/net/mehvahdjukaar/moonlight/core/mixins/forge/$SelfEntitySpawnDataMixin"
import {$IEntityAdditionalSpawnData, $IEntityAdditionalSpawnData$Type} from "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData"

export interface $IExtraClientSpawnData extends $SelfEntitySpawnDataMixin, $IEntityAdditionalSpawnData {

 "writeSpawnData"(arg0: $FriendlyByteBuf$Type): void
 "readSpawnData"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IExtraClientSpawnData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtraClientSpawnData$Type = ($IExtraClientSpawnData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtraClientSpawnData_ = $IExtraClientSpawnData$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$FoodProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FoodProvider {
static readonly "CODEC": $Codec<($FoodProvider)>
static readonly "EMPTY": $FoodProvider
static readonly "CUSTOM_PROVIDERS": $Map<($Item), ($FoodProvider)>


public "getDivider"(): integer
public "isEmpty"(): boolean
public static "create"(item: $Item$Type, divider: integer): $FoodProvider
public "consume"(player: $Player$Type, world: $Level$Type, nbtApplier: $Consumer$Type<($ItemStack$Type)>): boolean
public "getFood"(): $Item
get "divider"(): integer
get "empty"(): boolean
get "food"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodProvider$Type = ($FoodProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodProvider_ = $FoodProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement" {
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockPlacerItem, $BlockPlacerItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$BlockPlacerItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"

export class $AdditionalItemPlacement {

constructor(placeable: $Block$Type)

public static "getBlockPlacer"(): $BlockPlacerItem
public "overridePlace"(pContext: $BlockPlaceContext$Type): $InteractionResult
public "overrideUseOn"(pContext: $UseOnContext$Type, foodProperties: $FoodProperties$Type): $InteractionResult
public "overrideUpdatePlacementContext"(context: $BlockPlaceContext$Type): $BlockPlaceContext
public "overrideGetPlacementState"(pContext: $BlockPlaceContext$Type): $BlockState
public "getPlacedBlock"(): $Block
get "blockPlacer"(): $BlockPlacerItem
get "placedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdditionalItemPlacement$Type = ($AdditionalItemPlacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdditionalItemPlacement_ = $AdditionalItemPlacement$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$BlockTypeBasedBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FuelBlockItem, $FuelBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$FuelBlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockType, $BlockType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockTypeBasedBlockItem<T extends $BlockType> extends $FuelBlockItem {
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

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type, blockType: T, burnTime: $Supplier$Type<(integer)>)
constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type, blockType: T)

public "getBlockType"(): T
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "blockType"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTypeBasedBlockItem$Type<T> = ($BlockTypeBasedBlockItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTypeBasedBlockItem_<T> = $BlockTypeBasedBlockItem$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SconceLeverBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SconceWallBlock, $SconceWallBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SconceWallBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SconceLeverBlock extends $SconceWallBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, particleData: $Supplier$Type<($SimpleParticleType$Type)>)

public "extinguish"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "animateTick"(stateIn: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "setPowered"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "isSignalSource"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getDirectSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "lightUp"(entity: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceLeverBlock$Type = ($SconceLeverBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SconceLeverBlock_ = $SconceLeverBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ModStairBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ModStairBlock extends $StairBlock {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
readonly "baseState": $BlockState
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

constructor(baseBlock: $Supplier$Type<($Block$Type)>, settings: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModStairBlock$Type = ($ModStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModStairBlock_ = $ModStairBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$TimberFrameItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$FuelBlockItem, $FuelBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$FuelBlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TimberFrameItem extends $FuelBlockItem {
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

constructor(block: $Block$Type, properties: $Item$Properties$Type, burnTicks: integer)
constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimberFrameItem$Type = ($TimberFrameItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimberFrameItem_ = $TimberFrameItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Winding" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$Winding extends $Enum<($ModBlockProperties$Winding)> implements $StringRepresentable {
static readonly "NONE": $ModBlockProperties$Winding
static readonly "CHAIN": $ModBlockProperties$Winding
static readonly "ROPE": $ModBlockProperties$Winding


public static "values"(): ($ModBlockProperties$Winding)[]
public static "valueOf"(name: string): $ModBlockProperties$Winding
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
export type $ModBlockProperties$Winding$Type = (("chain") | ("rope") | ("none")) | ($ModBlockProperties$Winding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$Winding_ = $ModBlockProperties$Winding$Type;
}}
declare module "packages/net/mehvahdjukaar/jeed/recipes/$PotionProviderRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $PotionProviderRecipe implements $Recipe<($CraftingContainer)> {

constructor(id: $ResourceLocation$Type, providers: $NonNullList$Type<($Ingredient$Type)>, potions: $List$Type<($Potion$Type)>)

public "matches"(inv: $CraftingContainer$Type, worldIn: $Level$Type): boolean
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "assemble"(wrapper: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "isSpecial"(): boolean
public "getPotions"(): $List<($Potion)>
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
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
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "potions"(): $List<($Potion)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
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
export type $PotionProviderRecipe$Type = ($PotionProviderRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionProviderRecipe_ = $PotionProviderRecipe$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GoldTrapdoorBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $GoldTrapdoorBlock extends $TrapDoorBlock {
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
readonly "type": $BlockSetType
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "canBeOpened"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldTrapdoorBlock$Type = ($GoldTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldTrapdoorBlock_ = $GoldTrapdoorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/model/$IExtraModelDataProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ExtraModelData, $ExtraModelData$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IForgeBlockEntity, $IForgeBlockEntity$Type} from "packages/net/minecraftforge/common/extensions/$IForgeBlockEntity"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ExtraModelData$Builder, $ExtraModelData$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IExtraModelDataProvider extends $IForgeBlockEntity {

 "onDataPacket"(net: $Connection$Type, pkt: $ClientboundBlockEntityDataPacket$Type): void
 "getModelData"(): $ModelData
 "requestModelReload"(): void
/**
 * 
 * @deprecated
 */
 "getExtraModelData"(): $ExtraModelData
 "addExtraModelData"(builder: $ExtraModelData$Builder$Type): void
 "afterDataPacket"(oldData: $ExtraModelData$Type): void
 "onLoad"(): void
 "getPersistentData"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "getRenderBoundingBox"(): $AABB
 "requestModelDataUpdate"(): void
 "onChunkUnloaded"(): void
 "handleUpdateTag"(arg0: $CompoundTag$Type): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IExtraModelDataProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtraModelDataProvider$Type = ($IExtraModelDataProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtraModelDataProvider_ = $IExtraModelDataProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$BrainAccessor" {
import {$SensorType, $SensorType$Type} from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import {$Sensor, $Sensor$Type} from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import {$Behavior, $Behavior$Type} from "packages/net/minecraft/world/entity/ai/behavior/$Behavior"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BrainAccessor<E extends $LivingEntity> {

 "getSensors"(): $Map<($SensorType<(any)>), ($Sensor<(any)>)>
 "getAvailableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($Behavior<(any)>)>)>)>
}

export namespace $BrainAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainAccessor$Type<E> = ($BrainAccessor<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainAccessor_<E> = $BrainAccessor$Type<(E)>;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/tile/$HangingSignTileExtension" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ModBlockProperties$PostType, $ModBlockProperties$PostType$Type} from "packages/net/mehvahdjukaar/amendments/reg/$ModBlockProperties$PostType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SwingAnimation, $SwingAnimation$Type} from "packages/net/mehvahdjukaar/amendments/common/$SwingAnimation"

export class $HangingSignTileExtension {

constructor(state: $BlockState$Type)

public "setBackItem"(backItem: $ItemStack$Type): void
public "setFrontItem"(frontItem: $ItemStack$Type): void
public "load"(tag: $CompoundTag$Type): void
public "clientTick"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): void
public "canSwing"(): boolean
public "getBackItem"(): $ItemStack
public "getFrontItem"(): $ItemStack
public "updateAttachments"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "getClientAnimation"(): $SwingAnimation
public "saveAdditional"(tag: $CompoundTag$Type): void
public "getLeftAttachment"(): $ModBlockProperties$PostType
public "getRightAttachment"(): $ModBlockProperties$PostType
set "backItem"(value: $ItemStack$Type)
set "frontItem"(value: $ItemStack$Type)
get "backItem"(): $ItemStack
get "frontItem"(): $ItemStack
get "clientAnimation"(): $SwingAnimation
get "leftAttachment"(): $ModBlockProperties$PostType
get "rightAttachment"(): $ModBlockProperties$PostType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingSignTileExtension$Type = ($HangingSignTileExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangingSignTileExtension_ = $HangingSignTileExtension$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LockBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LockBlock extends $Block implements $EntityBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "activate"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isSignalSource"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "tick"(state: $BlockState$Type, worldIn: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockBlock$Type = ($LockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockBlock_ = $LockBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid$Builder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidContainerList, $FluidContainerList$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList"
import {$FoodProvider, $FoodProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FoodProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"
import {$SoftFluid$TintMethod, $SoftFluid$TintMethod$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid$TintMethod"

export class $SoftFluid$Builder {

constructor(stillTexture: $ResourceLocation$Type, flowingTexture: $ResourceLocation$Type)
constructor(fluid: $Fluid$Type)

public "onlyFlowingTinted"(): $SoftFluid$Builder
public "addEqFluid"(fluid: $Fluid$Type): $SoftFluid$Builder
public "noTint"(): $SoftFluid$Builder
public "tinted"(): $SoftFluid$Builder
public "build"(): $SoftFluid
public "color"(tintColor: integer): $SoftFluid$Builder
public "containers"(containerList: $FluidContainerList$Type): $SoftFluid$Builder
public "textures"(still: $ResourceLocation$Type, flow: $ResourceLocation$Type): $SoftFluid$Builder
/**
 * 
 * @deprecated
 */
public "fromMod"(s: string): $SoftFluid$Builder
public "translation"(component: $Component$Type): $SoftFluid$Builder
public "bucket"(item: $Item$Type): $SoftFluid$Builder
public "bottle"(item: $Item$Type): $SoftFluid$Builder
public "food"(foodProvider: $FoodProvider$Type): $SoftFluid$Builder
public "food"(item: $Item$Type): $SoftFluid$Builder
public "food"(item: $Item$Type, foodDivider: integer): $SoftFluid$Builder
public "bowl"(item: $Item$Type): $SoftFluid$Builder
public "drink"(item: $Item$Type): $SoftFluid$Builder
/**
 * 
 * @deprecated
 */
public "translationKey"(translationKey: string): $SoftFluid$Builder
public "luminosity"(luminosity: integer): $SoftFluid$Builder
public "emissivity"(emissivity: integer): $SoftFluid$Builder
public "containerItem"(filledItem: $Item$Type, emptyItem: $Item$Type, itemCapacity: integer): $SoftFluid$Builder
public "containerItem"(filledItem: $Item$Type, emptyItem: $Item$Type, itemCapacity: integer, fillSound: $SoundEvent$Type, emptySound: $SoundEvent$Type): $SoftFluid$Builder
public "stew"(item: $Item$Type): $SoftFluid$Builder
public "emptyHandContainerItem"(filledItem: $Item$Type, itemCapacity: integer): $SoftFluid$Builder
public "tintMethod"(tint: $SoftFluid$TintMethod$Type): $SoftFluid$Builder
public "copyTexturesFrom"(fluidRes: $ResourceLocation$Type): $SoftFluid$Builder
public "copyTexturesFrom"(fluidRes: string): $SoftFluid$Builder
public "keepNBTFromItem"(...NBTkey: (string)[]): $SoftFluid$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluid$Builder$Type = ($SoftFluid$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftFluid$Builder_ = $SoftFluid$Builder$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$NetheriteTrapdoorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ILavaAndWaterLoggable, $ILavaAndWaterLoggable$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ILavaAndWaterLoggable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $NetheriteTrapdoorBlock extends $TrapDoorBlock implements $ILavaAndWaterLoggable, $EntityBlock {
static readonly "LAVALOGGED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
readonly "type": $BlockSetType
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "takeLiquid"(p_204508_1_: $LevelAccessor$Type, p_204508_2_: $BlockPos$Type, p_204508_3_: $BlockState$Type): $Fluid
public "placeLiquid"(p_204509_1_: $LevelAccessor$Type, p_204509_2_: $BlockPos$Type, p_204509_3_: $BlockState$Type, p_204509_4_: $FluidState$Type): boolean
public "pickupBlock"(pLevel: $LevelAccessor$Type, pPos: $BlockPos$Type, pState: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(p_204510_1_: $BlockGetter$Type, p_204510_2_: $BlockPos$Type, p_204510_3_: $BlockState$Type, p_204510_4_: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getSoundType"(state: $BlockState$Type): $SoundType
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "updateShape"(pState: $BlockState$Type, direction: $Direction$Type, pFacingState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pFacingPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteTrapdoorBlock$Type = ($NetheriteTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteTrapdoorBlock_ = $NetheriteTrapdoorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$IRopeConnection" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IRopeConnection {

 "shouldConnectToFace"(thisState: $BlockState$Type, facingState: $BlockState$Type, facingPos: $BlockPos$Type, dir: $Direction$Type, world: $LevelReader$Type): boolean
 "canSideAcceptConnection"(arg0: $BlockState$Type, arg1: $Direction$Type): boolean

(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
}

export namespace $IRopeConnection {
function isSupportingCeiling(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
function isSupportingCeiling(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
function canConnectDown(downState: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRopeConnection$Type = ($IRopeConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRopeConnection_ = $IRopeConnection$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$FluteItem" {
import {$HeadedModel, $HeadedModel$Type} from "packages/net/minecraft/client/model/$HeadedModel"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IFirstPersonAnimationProvider, $IFirstPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IFirstPersonAnimationProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IThirdPersonSpecialItemRenderer, $IThirdPersonSpecialItemRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonSpecialItemRenderer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InstrumentItem, $InstrumentItem$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$InstrumentItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ArmedModel, $ArmedModel$Type} from "packages/net/minecraft/client/model/$ArmedModel"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$IThirdPersonAnimationProvider, $IThirdPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonAnimationProvider"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluteItem extends $InstrumentItem implements $IThirdPersonAnimationProvider, $IThirdPersonSpecialItemRenderer, $IFirstPersonAnimationProvider {
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

public static "getMaxHeadXRot"(xRot: float): float
public "spawnNoteParticle"(level: $Level$Type, entity: $LivingEntity$Type, note: integer): void
public "renderThirdPersonItem"<T extends $Player, M extends ($EntityModel<(T)>) & ($ArmedModel) & ($HeadedModel)>(parentModel: M, entity: $LivingEntity$Type, stack: $ItemStack$Type, humanoidArm: $HumanoidArm$Type, poseStack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, light: integer): void
public "poseRightArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public "isTwoHanded"(): boolean
public "use"(level: $Level$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isFoil"(pStack: $ItemStack$Type): boolean
public "releaseUsing"(pStack: $ItemStack$Type, pLevel: $Level$Type, entity: $LivingEntity$Type, pTimeCharged: integer): void
public "isValidRepairItem"(pStack: $ItemStack$Type, pRepairCandidate: $ItemStack$Type): boolean
public "poseLeftArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public static "interactWithPet"(stack: $ItemStack$Type, player: $Player$Type, target: $Entity$Type, hand: $InteractionHand$Type): boolean
public "animateItemFirstPerson"(entity: $LivingEntity$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, matrixStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public static "attachToItem"(target: $Item$Type, object: $IThirdPersonAnimationProvider$Type): void
public static "get"(target: $Item$Type): $IThirdPersonAnimationProvider
public static "attachToItem"(target: $Item$Type, object: $IThirdPersonSpecialItemRenderer$Type): void
public static "attachToItem"(target: $Item$Type, object: $IFirstPersonAnimationProvider$Type): void
public "animateItemFirstPerson"(entity: $Player$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, arm: $HumanoidArm$Type, poseStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluteItem$Type = ($FluteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluteItem_ = $FluteItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$AbstractMobContainerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractMobContainerItem extends $BlockItem {
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


public "getMaxStackSize"(stack: $ItemStack$Type): integer
public "isFull"(stack: $ItemStack$Type): boolean
public "place"(context: $BlockPlaceContext$Type): $InteractionResult
public "doInteract"(stack: $ItemStack$Type, player: $Player$Type, entity: $Entity$Type, hand: $InteractionHand$Type): $InteractionResult
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "canFitInsideContainerItems"(): boolean
public "onLeftClickEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $Entity$Type): boolean
public "addPlacementTooltip"(tooltip: $List$Type<($Component$Type)>): void
public "getMobContainerHeight"(): float
public "getMobContainerWidth"(): float
public "isAquarium"(): boolean
public "playReleaseSound"(world: $Level$Type, v: $Vec3$Type): void
public "playCatchSound"(player: $Player$Type): void
public "saveEntityInItem"(entity: $Entity$Type, currentStack: $ItemStack$Type, bucketStack: $ItemStack$Type): $ItemStack
public "canItemCatch"(arg0: $Entity$Type): boolean
public "playFailSound"(player: $Player$Type): void
public "blocksPlacement"(): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "mobContainerHeight"(): float
get "mobContainerWidth"(): float
get "aquarium"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMobContainerItem$Type = ($AbstractMobContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMobContainerItem_ = $AbstractMobContainerItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PresentBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractPresentBlock, $AbstractPresentBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractPresentBlock"

export class $PresentBlock extends $AbstractPresentBlock {
static readonly "SHAPE_LID": $VoxelShape
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "PACKED": $BooleanProperty
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

constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresentBlock$Type = ($PresentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PresentBlock_ = $PresentBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpWaterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$LightUpBlock, $LightUpBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"

export class $LightUpWaterBlock extends $LightUpBlock implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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


public "placeLiquid"(worldIn: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluidStateIn: $FluidState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "lightUp"(entity: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
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
export type $LightUpWaterBlock$Type = ($LightUpWaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightUpWaterBlock_ = $LightUpWaterBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$DoubleSkullBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SkullBlock, $SkullBlock$Type} from "packages/net/minecraft/world/level/block/$SkullBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $DoubleSkullBlock extends $SkullBlock implements $IRotatable {
static readonly "MAX": integer
static readonly "ROTATION": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(state: $BlockState$Type, hitResult: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "updateShape"(pState: $BlockState$Type, dir: $Direction$Type, pNeighborState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pNeighborPos: $BlockPos$Type): $BlockState
public "getDrops"(pState: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rot: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
public "getRotatedState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleSkullBlock$Type = ($DoubleSkullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleSkullBlock_ = $DoubleSkullBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SackItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SackItem extends $BlockItem {
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

constructor(blockIn: $Block$Type, builder: $Item$Properties$Type)

public static "getEncumber"(slotItem: $ItemStack$Type): float
public "onDestroyed"(pItemEntity: $ItemEntity$Type): void
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, incoming: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, accessor: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(stack: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, worldIn: $Level$Type, entityIn: $Entity$Type, itemSlot: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getTooltipImage"(pStack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SackItem$Type = ($SackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SackItem_ = $SackItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BubbleBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BubbleBlock extends $Block implements $EntityBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isPossibleToRespawnInThis"(blockState: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, tBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, v: float): void
public "addLandingEffects"(state1: $BlockState$Type, worldserver: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "makeParticle"(pos: $BlockPos$Type, level: $Level$Type): void
public "stepOn"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
public "propagatesSkylightDown"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "canBeReplaced"(state: $BlockState$Type, placeContext: $BlockPlaceContext$Type): boolean
public "getCollisionShape"(state: $BlockState$Type, getter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, serverLevel: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public "breakBubble"(level: $ServerLevel$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "sendParticles"(pos: $BlockPos$Type, level: $ServerLevel$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleBlock$Type = ($BubbleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleBlock_ = $BubbleBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CageBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CageBlockTile, $CageBlockTile$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$CageBlockTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CageBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getCageItem"(te: $CageBlockTile$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CageBlock$Type = ($CageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CageBlock_ = $CageBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer" {
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$Type} from "packages/net/minecraft/client/renderer/$BlockEntityWithoutLevelRenderer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockEntityRenderDispatcher, $BlockEntityRenderDispatcher$Type} from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderDispatcher"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $ItemStackRenderer extends $BlockEntityWithoutLevelRenderer {
readonly "blockEntityRenderDispatcher": $BlockEntityRenderDispatcher


public "renderByItem"(arg0: $ItemStack$Type, arg1: $ItemDisplayContext$Type, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackRenderer$Type = ($ItemStackRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackRenderer_ = $ItemStackRenderer$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$IExtraClientSpawnData, $IExtraClientSpawnData$Type} from "packages/net/mehvahdjukaar/moonlight/api/entity/$IExtraClientSpawnData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ImprovedProjectileEntity, $ImprovedProjectileEntity$Type} from "packages/net/mehvahdjukaar/moonlight/api/entity/$ImprovedProjectileEntity"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BombEntity$BombType, $BombEntity$BombType$Type} from "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BombType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BombEntity extends $ImprovedProjectileEntity implements $IExtraClientSpawnData {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "position": $Vec3
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "stepHeight": float
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "ars_Nouveau$motions": $Stack<(any)>
 "an_isRewinding": boolean
 "thebumblezone_performedEntityDrops": boolean

constructor(type: $EntityType$Type<(any)>, world: $Level$Type)
constructor(worldIn: $Level$Type, x: double, y: double, z: double, type: $BombEntity$BombType$Type)
constructor(worldIn: $Level$Type, throwerIn: $LivingEntity$Type, type: $BombEntity$BombType$Type)

public "turnOff"(): void
public "readAdditionalSaveData"(compound: $CompoundTag$Type): void
public "addAdditionalSaveData"(compound: $CompoundTag$Type): void
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "handleEntityEvent"(id: byte): void
public "writeSpawnData"(buffer: $FriendlyByteBuf$Type): void
public "readSpawnData"(buffer: $FriendlyByteBuf$Type): void
public "playerTouch"(entityIn: $Player$Type): void
public "tick"(): void
public "getItem"(): $ItemStack
public "reachedEndOfLife"(): void
public "hasReachedEndOfLife"(): boolean
public "spawnTrailParticles"(currentPos: $Vec3$Type, newPos: $Vec3$Type): void
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombEntity$Type = ($BombEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BombEntity_ = $BombEntity$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/misc/$Triplet" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Triplet<L, M, R> extends $Record {

constructor(left: L, middle: M, right: R)

public "left"(): L
public "right"(): R
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<A, B, C>(left: A, middle: B, right: C): $Triplet<(A), (B), (C)>
public "middle"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Triplet$Type<L, M, R> = ($Triplet<(L), (M), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Triplet_<L, M, R> = $Triplet$Type<(L), (M), (R)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BlackboardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlackboardItem extends $BlockItem implements $ICustomItemRendererProvider {
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

constructor(blockIn: $Block$Type, builder: $Item$Properties$Type)

public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
public "appendHoverText"(pStack: $ItemStack$Type, pLevel: $Level$Type, pTooltip: $List$Type<($Component$Type)>, pFlag: $TooltipFlag$Type): void
public "getTooltipImage"(pStack: $ItemStack$Type): $Optional<($TooltipComponent)>
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackboardItem$Type = ($BlackboardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackboardItem_ = $BlackboardItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AshLayerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IFireConsumeBlockEvent, $IFireConsumeBlockEvent$Type} from "packages/net/mehvahdjukaar/moonlight/api/events/$IFireConsumeBlockEvent"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $AshLayerBlock extends $FallingBlock {
static readonly "LAYERS": $IntegerProperty
static readonly "RECURSION_HACK": $ThreadLocal<(boolean)>
static readonly "GRASS_SPREAD_WIDTH": integer
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "updateBasaltBelow"(selfPos: $BlockPos$Type, level: $Level$Type): boolean
public "getDustColor"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "onLand"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, replaceableState: $BlockState$Type, fallingBlock: $FallingBlockEntity$Type): void
public static "applyBonemeal"(stack: $ItemStack$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, height: float): void
public "onProjectileHit"(level: $Level$Type, state: $BlockState$Type, pHit: $BlockHitResult$Type, projectile: $Projectile$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "handlePrecipitation"(pState: $BlockState$Type, level: $Level$Type, pPos: $BlockPos$Type, pPrecipitation: $Biome$Precipitation$Type): void
public "isPathfindable"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, otherPos: $BlockPos$Type): $BlockState
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "canBeReplaced"(state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "canBeReplaced"(pState: $BlockState$Type, useContext: $BlockPlaceContext$Type): boolean
public "getCollisionShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(pState: $BlockState$Type, pReader: $BlockGetter$Type, pPos: $BlockPos$Type): $VoxelShape
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "randomTick"(pState: $BlockState$Type, level: $ServerLevel$Type, pPos: $BlockPos$Type, pRandom: $RandomSource$Type): void
public "getVisualShape"(pState: $BlockState$Type, pReader: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, pRand: $RandomSource$Type): void
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public static "tryConvertToAsh"(event: $IFireConsumeBlockEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AshLayerBlock$Type = ($AshLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AshLayerBlock_ = $AshLayerBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/goals/$ISuppEvoker" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ISuppEvoker {

 "supplementaries$getCustomWololoo"(): $LivingEntity
 "supplementaries$setCustomWololoo"(arg0: $LivingEntity$Type): void
 "supplementaries$setSpellCastingTime"(arg0: integer): void
}

export namespace $ISuppEvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISuppEvoker$Type = ($ISuppEvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISuppEvoker_ = $ISuppEvoker$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/$OverencumberedEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $OverencumberedEffect extends $MobEffect {

constructor()

public "removeAttributeModifiers"(pLivingEntity: $LivingEntity$Type, pAttributeMap: $AttributeMap$Type, pAmplifier: integer): void
public "addAttributeModifiers"(pLivingEntity: $LivingEntity$Type, pAttributeMap: $AttributeMap$Type, pAmplifier: integer): void
public "isInstantenous"(): boolean
public "applyInstantenousEffect"(pSource: $Entity$Type, pIndirectSource: $Entity$Type, pLivingEntity: $LivingEntity$Type, pAmplifier: integer, pHealth: double): void
public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverencumberedEffect$Type = ($OverencumberedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverencumberedEffect_ = $OverencumberedEffect$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/quark/$CartographersQuillItem" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PathfindersQuillItem, $PathfindersQuillItem$Type} from "packages/org/violetmoon/quark/content/tools/item/$PathfindersQuillItem"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$ServerChunkCache, $ServerChunkCache$Type} from "packages/net/minecraft/server/level/$ServerChunkCache"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CartographersQuillItem$State, $CartographersQuillItem$State$Type} from "packages/net/mehvahdjukaar/supplementaries/integration/quark/$CartographersQuillItem$State"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StructurePlacement, $StructurePlacement$Type} from "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacement"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$MapDecoration$Type, $MapDecoration$Type$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$StructureManager, $StructureManager$Type} from "packages/net/minecraft/world/level/$StructureManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CartographersQuillItem extends $PathfindersQuillItem {
static readonly "TAG_STRUCTURE": string
static readonly "TAG_SKIP_KNOWN": string
static readonly "TAG_SEARCH_RADIUS": string
static readonly "TAG_ZOOM": string
static readonly "TAG_DECORATION": string
static readonly "TAG_NAME": string
static readonly "TAG_BIOME": string
static readonly "TAG_COLOR": string
static readonly "TAG_UNDERGROUND": string
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

public "getTarget"(stack: $ItemStack$Type): $ResourceLocation
public "createMap"(level: $ServerLevel$Type, targetPos: $BlockPos$Type, structure: $ResourceLocation$Type, original: $ItemStack$Type): $ItemStack
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, comps: $List$Type<($Component$Type)>, flags: $TooltipFlag$Type): void
public "getIterations"(): integer
public static "getItemColor"(stack: $ItemStack$Type, layer: integer): integer
public static "forStructure"(level: $ServerLevel$Type, targets: $HolderSet$Type<($Structure$Type)>, searchRadius: integer, skipKnown: boolean, zoom: integer, deco: $MapDecoration$Type$Type, name: string, color: integer): $ItemStack
public static "forStructure"(level: $ServerLevel$Type, tag: $HolderSet$Type<($Structure$Type)>): $ItemStack
public "findNearestMapStructure"(level: $ServerLevel$Type, holder: $Holder$Type<($Structure$Type)>, searchRadius: integer, center: $BlockPos$Type, skipKnownStructures: boolean, state: $CartographersQuillItem$State$Type, maxIterations: integer): $InteractionResultHolder<($BlockPos)>
public static "getStructureGeneratingAt"(structureHoldersSet: $Set$Type<($Holder$Type<($Structure$Type)>)>, chunkCache: $ServerChunkCache$Type, structureManager: $StructureManager$Type, skipKnownStructures: boolean, placement: $StructurePlacement$Type, chunkPos: $ChunkPos$Type, state: $CartographersQuillItem$State$Type): $Either<($BlockPos), ($ChunkPos)>
public "asItem"(): $Item
public static "isEnabled"(arg0: $Item$Type): boolean
public static "isEnabled"(arg0: $Block$Type): boolean
get "iterations"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartographersQuillItem$Type = ($CartographersQuillItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CartographersQuillItem_ = $CartographersQuillItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$RoadSignFeature$Config" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$RoadSignFeature$RandomState, $RoadSignFeature$RandomState$Type} from "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$RoadSignFeature$RandomState"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$WoodType, $WoodType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/wood/$WoodType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RoadSignFeature$Config extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($RoadSignFeature$Config)>

constructor(randomState: $RoadSignFeature$RandomState$Type, postWood: $WoodType$Type, signWood: $WoodType$Type, fence: $BlockState$Type, trapdoor: $BlockState$Type, slab: $BlockState$Type, log: $BlockState$Type, cobble: $BlockState$Type, mossyCobble: $BlockState$Type, wall: $BlockState$Type, mossyWall: $BlockState$Type, lanternUp: $BlockState$Type, lanternDown: $BlockState$Type, candleHolder: $BlockState$Type, stone: $BlockState$Type, stoneSlab: $BlockState$Type, stoneStairs: $BlockState$Type, invalidMessage: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "log"(): $BlockState
public "fence"(): $BlockState
public "wall"(): $BlockState
public "trapdoor"(): $BlockState
public "slab"(): $BlockState
public "invalidMessage"(): string
public "cobble"(): $BlockState
public "postWood"(): $WoodType
public "stone"(): $BlockState
public "randomState"(): $RoadSignFeature$RandomState
public "mossyCobble"(): $BlockState
public "stoneSlab"(): $BlockState
public "stoneStairs"(): $BlockState
public "signWood"(): $WoodType
public "mossyWall"(): $BlockState
public "candleHolder"(): $BlockState
public "lanternUp"(): $BlockState
public "lanternDown"(): $BlockState
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignFeature$Config$Type = ($RoadSignFeature$Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoadSignFeature$Config_ = $RoadSignFeature$Config$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RakedGravelBlock" {
import {$ModBlockProperties$RakeDirection, $ModBlockProperties$RakeDirection$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$RakeDirection"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$GravelBlock, $GravelBlock$Type} from "packages/net/minecraft/world/level/block/$GravelBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $RakedGravelBlock extends $GravelBlock {
static readonly "RAKE_DIRECTION": $EnumProperty<($ModBlockProperties$RakeDirection)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "turnToGravel"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): void
public static "getConnectedState"(blockstate: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, front: $Direction$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, fromState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, fromPos: $BlockPos$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RakedGravelBlock$Type = ($RakedGravelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RakedGravelBlock_ = $RakedGravelBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SackBlock" {
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
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SackBlock extends $FallingBlock implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "SACK_BLOCKS": $List<($Block)>
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "CONTENTS": $ResourceLocation
static readonly "OPEN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getDustColor"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "onLand"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, state1: $BlockState$Type, blockEntity: $FallingBlockEntity$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public static "canFall"(pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "getFluidState"(state: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getAnalogOutputSignal"(blockState: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
export type $SackBlock$Type = ($SackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SackBlock_ = $SackBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlintBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IPistonMotionReact, $IPistonMotionReact$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IPistonMotionReact"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FlintBlock extends $Block implements $IPistonMotionReact {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "onMoved"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, extending: boolean, tile: $PistonMovingBlockEntity$Type): void
public "stepOn"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldBlock: $Block$Type, targetPos: $BlockPos$Type, isMoving: boolean): void
public static "canBlockCreateSpark"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, face: $Direction$Type): boolean
public "onMagnetMoved"(level: $Level$Type, blockPos: $BlockPos$Type, direction: $Direction$Type, blockState: $BlockState$Type, blockEntity: $BlockEntity$Type): void
public "ticksWhileMoved"(): boolean
public "onMoved"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, direction: $Direction$Type, extending: boolean): void
public "moveTick"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
/**
 * 
 * @deprecated
 */
public "moveTick"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
public "canMagnetMove"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlintBlock$Type = ($FlintBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlintBlock_ = $FlintBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FodderBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FodderBlock extends $WaterBlock {
static readonly "LAYERS": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, otherPos: $BlockPos$Type): $BlockState
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FodderBlock$Type = ($FodderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FodderBlock_ = $FodderBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$DoubleCakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CakeRegistry$CakeType, $CakeRegistry$CakeType$Type} from "packages/net/mehvahdjukaar/amendments/common/$CakeRegistry$CakeType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$DirectionalCakeBlock, $DirectionalCakeBlock$Type} from "packages/net/mehvahdjukaar/amendments/common/block/$DirectionalCakeBlock"

export class $DoubleCakeBlock extends $DirectionalCakeBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
readonly "type": $CakeRegistry$CakeType
static readonly "MAX_BITES": integer
static readonly "BITES": $IntegerProperty
static readonly "FULL_CAKE_SIGNAL": integer
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

constructor(type: $CakeRegistry$CakeType$Type)

public "getSoundType"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "animateTick"(stateIn: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getSoundType"(state: $BlockState$Type): $SoundType
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(state: $BlockState$Type, player: $Player$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): float
public "removeSlice"(state: $BlockState$Type, pos: $BlockPos$Type, level: $LevelAccessor$Type, dir: $Direction$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleCakeBlock$Type = ($DoubleCakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleCakeBlock_ = $DoubleCakeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/$IBellConnections$BellConnection" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $IBellConnections$BellConnection extends $Enum<($IBellConnections$BellConnection)> implements $StringRepresentable {
static readonly "NONE": $IBellConnections$BellConnection
static readonly "CHAIN": $IBellConnections$BellConnection
static readonly "ROPE": $IBellConnections$BellConnection


public static "values"(): ($IBellConnections$BellConnection)[]
public static "valueOf"(name: string): $IBellConnections$BellConnection
public "isEmpty"(): boolean
public "getSerializedName"(): string
public "isRope"(): boolean
public "isChain"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "empty"(): boolean
get "serializedName"(): string
get "rope"(): boolean
get "chain"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBellConnections$BellConnection$Type = (("chain") | ("rope") | ("none")) | ($IBellConnections$BellConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBellConnections$BellConnection_ = $IBellConnections$BellConnection$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BookPileBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BookPileBlock extends $WaterBlock implements $EntityBlock {
static readonly "BOOKS": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isAcceptedItem"(i: $Item$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getEnchantPowerBonus"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): float
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "canBeReplaced"(state: $BlockState$Type, context: $BlockPlaceContext$Type): boolean
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPileBlock$Type = ($BookPileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPileBlock_ = $BookPileBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$DisplayStatus" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$DisplayStatus extends $Enum<($ModBlockProperties$DisplayStatus)> implements $StringRepresentable {
static readonly "NONE": $ModBlockProperties$DisplayStatus
static readonly "EMPTY": $ModBlockProperties$DisplayStatus
static readonly "FULL": $ModBlockProperties$DisplayStatus


public "toString"(): string
public static "values"(): ($ModBlockProperties$DisplayStatus)[]
public static "valueOf"(name: string): $ModBlockProperties$DisplayStatus
public "hasItem"(): boolean
public "getSerializedName"(): string
public "hasTile"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$DisplayStatus$Type = (("none") | ("empty") | ("full")) | ($ModBlockProperties$DisplayStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$DisplayStatus_ = $ModBlockProperties$DisplayStatus$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$WoodBasedBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockTypeBasedBlockItem, $BlockTypeBasedBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$BlockTypeBasedBlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$WoodType, $WoodType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/wood/$WoodType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WoodBasedBlockItem extends $BlockTypeBasedBlockItem<($WoodType)> {
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

constructor(blockIn: $Block$Type, builder: $Item$Properties$Type, woodType: $WoodType$Type, burnTicks: integer)
constructor(blockIn: $Block$Type, builder: $Item$Properties$Type, burnTicks: integer)
constructor(blockIn: $Block$Type, builder: $Item$Properties$Type, woodType: $WoodType$Type)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodBasedBlockItem$Type = ($WoodBasedBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodBasedBlockItem_ = $WoodBasedBlockItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SafeItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SafeItem extends $BlockItem {
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

constructor(blockIn: $Block$Type, builder: $Item$Properties$Type)

public "onDestroyed"(pItemEntity: $ItemEntity$Type): void
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, incoming: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, accessor: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(stack: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type): boolean
public "getTooltipImage"(pStack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeItem$Type = ($SafeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SafeItem_ = $SafeItem$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$StructureCauldronHack" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $StructureCauldronHack extends $Block implements $EntityBlock {
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

public static "register"(): void
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureCauldronHack$Type = ($StructureCauldronHack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureCauldronHack_ = $StructureCauldronHack$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SignPostBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$FenceMimicBlock, $FenceMimicBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FenceMimicBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SignPostBlock extends $FenceMimicBlock implements $EntityBlock, $IRotatable {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "rotate"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rot: $Rotation$Type): $BlockState
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rot: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
public "getRotatedState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignPostBlock$Type = ($SignPostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignPostBlock_ = $SignPostBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Topping" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"

export class $ModBlockProperties$Topping extends $Enum<($ModBlockProperties$Topping)> implements $StringRepresentable {
static readonly "NONE": $ModBlockProperties$Topping
static readonly "HONEY": $ModBlockProperties$Topping
static readonly "SYRUP": $ModBlockProperties$Topping
static readonly "CHOCOLATE": $ModBlockProperties$Topping
static readonly "JAM": $ModBlockProperties$Topping


public static "values"(): ($ModBlockProperties$Topping)[]
public static "valueOf"(name: string): $ModBlockProperties$Topping
public static "fromFluid"(s: $SoftFluid$Type): $ModBlockProperties$Topping
public "getSerializedName"(): string
public static "fromItem"(stack: $ItemStack$Type): $Pair<($ModBlockProperties$Topping), ($Item)>
public static "fromFluidItem"(item: $Item$Type): $Pair<($ModBlockProperties$Topping), ($Item)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$Topping$Type = (("honey") | ("jam") | ("syrup") | ("none") | ("chocolate")) | ($ModBlockProperties$Topping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$Topping_ = $ModBlockProperties$Topping$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/$SwingAnimation" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SwingAnimation {


public "reset"(): void
public "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "hitByEntity"(arg0: $Entity$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
public "getAngle"(arg0: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwingAnimation$Type = ($SwingAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwingAnimation_ = $SwingAnimation$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/present/$IPresentItemBehavior" {
import {$BlockSource, $BlockSource$Type} from "packages/net/minecraft/core/$BlockSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Position, $Position$Type} from "packages/net/minecraft/core/$Position"

export interface $IPresentItemBehavior {

 "trigger"(pSource: $BlockSource$Type, pStack: $ItemStack$Type): $ItemStack
 "playAnimation"(pSource: $BlockSource$Type): void
 "performSpecialAction"(arg0: $BlockSource$Type, arg1: $ItemStack$Type): $Optional<($ItemStack)>

(pSource: $BlockSource$Type, pStack: $ItemStack$Type): $ItemStack
}

export namespace $IPresentItemBehavior {
function spawnItem(pLevel: $Level$Type, pStack: $ItemStack$Type, pSpeed: double, source: $BlockSource$Type): void
function getDispensePosition(source: $BlockSource$Type): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPresentItemBehavior$Type = ($IPresentItemBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPresentItemBehavior_ = $IPresentItemBehavior$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FenceMimicBlock" {
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
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$MimicBlock, $MimicBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$MimicBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FenceMimicBlock extends $MimicBlock implements $SimpleWaterloggedBlock, $EntityBlock {
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


public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getCollisionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceMimicBlock$Type = ($FenceMimicBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceMimicBlock_ = $FenceMimicBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$BlockTypeBasedItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FuelItem, $FuelItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$FuelItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockType, $BlockType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockTypeBasedItem<T extends $BlockType> extends $FuelItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(pProperties: $Item$Properties$Type, blockType: T)
constructor(pProperties: $Item$Properties$Type, blockType: T, burnTime: $Supplier$Type<(integer)>)

public "getBlockType"(): T
get "blockType"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTypeBasedItem$Type<T> = ($BlockTypeBasedItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTypeBasedItem_<T> = $BlockTypeBasedItem$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$EndermanSkullWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WallSkullBlock, $WallSkullBlock$Type} from "packages/net/minecraft/world/level/block/$WallSkullBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EndermanSkullWallBlock extends $WallSkullBlock {
static readonly "WATCHED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "isSignalSource"(state: $BlockState$Type): boolean
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndermanSkullWallBlock$Type = ($EndermanSkullWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndermanSkullWallBlock_ = $EndermanSkullWallBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractPresentBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractPresentBlock extends $WaterBlock implements $EntityBlock, $IColored {
static readonly "SHAPE_LID": $VoxelShape
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "PACKED": $BooleanProperty
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


public "getColor"(): $DyeColor
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, serverLevel: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getAnalogOutputSignal"(blockState: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
public "supportsBlankColor"(): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPresentBlock$Type = ($AbstractPresentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPresentBlock_ = $AbstractPresentBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimpleEvent {

}

export namespace $SimpleEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleEvent$Type = ($SimpleEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleEvent_ = $SimpleEvent$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder" {
import {$ExtraModelData, $ExtraModelData$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData"
import {$ModelDataKey, $ModelDataKey$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey"

export interface $ExtraModelData$Builder {

 "build"(): $ExtraModelData
 "with"<A>(arg0: $ModelDataKey$Type<(A)>, arg1: A): $ExtraModelData$Builder
}

export namespace $ExtraModelData$Builder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraModelData$Builder$Type = ($ExtraModelData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraModelData$Builder_ = $ExtraModelData$Builder$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$IFrameBlock" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IFrameBlock {

 "getFilledBlock"(arg0: $Block$Type): $Block

(arg0: $Block$Type): $Block
}

export namespace $IFrameBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFrameBlock$Type = ($IFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFrameBlock_ = $IFrameBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$RopeArrowItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RopeArrowItem extends $ArrowItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(builder: $Item$Properties$Type)

public "isInfinite"(stack: $ItemStack$Type, bow: $ItemStack$Type, player: $Player$Type): boolean
public "createArrow"(world: $Level$Type, stack: $ItemStack$Type, shooter: $LivingEntity$Type): $AbstractArrow
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isEnchantable"(stack: $ItemStack$Type): boolean
public "isRepairable"(stack: $ItemStack$Type): boolean
public "isValidRepairItem"(toRepair: $ItemStack$Type, repair: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "isBookEnchantable"(stack: $ItemStack$Type, book: $ItemStack$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeArrowItem$Type = ($RopeArrowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RopeArrowItem_ = $RopeArrowItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$ClockBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ClockBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "HOUR": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "displayCurrentHour"(world: $Level$Type, player: $Player$Type): void
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClockBlock$Type = ($ClockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClockBlock_ = $ClockBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$SimpleDirtyCounter" {
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"

export class $CustomMapData$SimpleDirtyCounter implements $CustomMapData$DirtyCounter {

constructor()

public "isDirty"(): boolean
public "clearDirty"(): void
public "markDirty"(): void
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$SimpleDirtyCounter$Type = ($CustomMapData$SimpleDirtyCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData$SimpleDirtyCounter_ = $CustomMapData$SimpleDirtyCounter$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$EndermanHeadItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StandingAndWallBlockItem, $StandingAndWallBlockItem$Type} from "packages/net/minecraft/world/item/$StandingAndWallBlockItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EndermanHeadItem extends $StandingAndWallBlockItem implements $ICustomItemRendererProvider {
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

constructor(block: $Block$Type, block2: $Block$Type, properties: $Item$Properties$Type)

public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
public "isEnderMask"(stack: $ItemStack$Type, player: $Player$Type, endermanEntity: $EnderMan$Type): boolean
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndermanHeadItem$Type = ($EndermanHeadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndermanHeadItem_ = $EndermanHeadItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/forge/$SelfEntitySpawnDataMixin" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IEntityAdditionalSpawnData, $IEntityAdditionalSpawnData$Type} from "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData"

export interface $SelfEntitySpawnDataMixin extends $IEntityAdditionalSpawnData {

 "writeSpawnData"(arg0: $FriendlyByteBuf$Type): void
 "readSpawnData"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $SelfEntitySpawnDataMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelfEntitySpawnDataMixin$Type = ($SelfEntitySpawnDataMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelfEntitySpawnDataMixin_ = $SelfEntitySpawnDataMixin$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/item/$DyeBottleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DyeBottleItem extends $Item {
static readonly "COLOR_TAG": string
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

public "getDefaultInstance"(): $ItemStack
public static "getColor"(stack: $ItemStack$Type): integer
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, interactionTarget: $LivingEntity$Type, usedHand: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, list: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public static "toFluidStack"(color: $DyeColor$Type, amount: integer): $SoftFluidStack
public static "getClosestDye"(stack: $ItemStack$Type): $DyeColor
public static "getClosestDye"(tintColor: integer): $DyeColor
public static "getClosestDye"(stack: $SoftFluidStack$Type): $DyeColor
public static "fromFluidStack"(stack: $SoftFluidStack$Type): $ItemStack
public static "mixColor"(oldColor: integer, newColor: integer, oldAmount: integer, newAmount: integer): integer
get "defaultInstance"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeBottleItem$Type = ($DyeBottleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeBottleItem_ = $DyeBottleItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$IOnePlayerGui" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IScreenProvider, $IScreenProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$IScreenProvider"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IOnePlayerGui extends $IScreenProvider {

 "isOtherPlayerEditing"(player: $Player$Type): boolean
 "setPlayerWhoMayEdit"(arg0: $UUID$Type): void
 "playerIsTooFarAwayToEdit"(level: $Level$Type, pos: $BlockPos$Type, uUID: $UUID$Type): boolean
 "validatePlayerWhoMayEdit"(level: $Level$Type, pos: $BlockPos$Type): void
 "shouldUseContainerMenu"(): boolean
 "getPlayerWhoMayEdit"(): $UUID
 "tryOpeningEditGui"(player: $ServerPlayer$Type, pos: $BlockPos$Type): boolean
 "sendOpenGuiPacket"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hitFace: $Direction$Type): void
 "sendOpenGuiPacket"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void
 "openScreen"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, direction: $Direction$Type): void
/**
 * 
 * @deprecated
 */
 "openScreen"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
}

export namespace $IOnePlayerGui {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOnePlayerGui$Type = ($IOnePlayerGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOnePlayerGui_ = $IOnePlayerGui$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$WildFlaxBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $WildFlaxBlock extends $BushBlock implements $BonemealableBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isValidBonemealTarget"(worldIn: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, isClient: boolean): boolean
public "isBonemealSuccess"(worldIn: $Level$Type, rand: $RandomSource$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
public "performBonemeal"(worldIn: $ServerLevel$Type, random: $RandomSource$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "canBeReplaced"(state: $BlockState$Type, useContext: $BlockPlaceContext$Type): boolean
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildFlaxBlock$Type = ($WildFlaxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WildFlaxBlock_ = $WildFlaxBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$QuiverItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$QuiverItem$Data, $QuiverItem$Data$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$QuiverItem$Data"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuiverItem extends $Item implements $DyeableLeatherItem {
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

public static "getQuiverData"(stack: $ItemStack$Type): $QuiverItem$Data
public "onDestroyed"(pItemEntity: $ItemEntity$Type): void
public "isBarVisible"(pStack: $ItemStack$Type): boolean
public "use"(pLevel: $Level$Type, player: $Player$Type, pUsedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(quiver: $ItemStack$Type, pOther: $ItemStack$Type, pSlot: $Slot$Type, pAction: $ClickAction$Type, pPlayer: $Player$Type, pAccess: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(quiver: $ItemStack$Type, pSlot: $Slot$Type, pAction: $ClickAction$Type, pPlayer: $Player$Type): boolean
public "getBarColor"(pStack: $ItemStack$Type): integer
public "getBarWidth"(pStack: $ItemStack$Type): integer
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "appendHoverText"(pStack: $ItemStack$Type, pLevel: $Level$Type, pTooltipComponents: $List$Type<($Component$Type)>, pIsAdvanced: $TooltipFlag$Type): void
public "getTooltipImage"(pStack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "releaseUsing"(stack: $ItemStack$Type, level: $Level$Type, livingEntity: $LivingEntity$Type, timeCharged: integer): void
public "canFitInsideContainerItems"(): boolean
public "getShareTag"(stack: $ItemStack$Type): $CompoundTag
public "readShareTag"(stack: $ItemStack$Type, tag: $CompoundTag$Type): void
public "getUseDuration"(stack: $ItemStack$Type): integer
public static "getQuiver"(entity: $LivingEntity$Type): $ItemStack
public "initCapabilities"(stack: $ItemStack$Type, nbt: $CompoundTag$Type): $ICapabilityProvider
public static "canAcceptItem"(toInsert: $ItemStack$Type): boolean
public "getColor"(arg0: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuiverItem$Type = ($QuiverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuiverItem_ = $QuiverItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$StickBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StickBlock extends $WaterBlock implements $IRotatable {
static readonly "AXIS_X": $BooleanProperty
static readonly "AXIS_Y": $BooleanProperty
static readonly "AXIS_Z": $BooleanProperty
static readonly "AXIS2PROPERTY": $Map<($Direction$Axis), ($BooleanProperty)>
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

constructor(properties: $BlockBehaviour$Properties$Type, fireSpread: integer)
constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "canBeReplaced"(state: $BlockState$Type, context: $BlockPlaceContext$Type): boolean
public "getDrops"(state: $BlockState$Type, pBuilder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getRotatedState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public static "findConnectedFlag"(world: $Level$Type, pos: $BlockPos$Type, searchDir: $Direction$Type, moveDir: $Direction$Type, it: integer): boolean
public static "getStickShape"(x: boolean, y: boolean, z: boolean): $VoxelShape
public "applyRotationLock"(world: $Level$Type, blockPos: $BlockPos$Type, state: $BlockState$Type, dir: $Direction$Type, half: integer): $BlockState
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
public "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StickBlock$Type = ($StickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StickBlock_ = $StickBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FrameBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$IFrameBlock, $IFrameBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$IFrameBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$MimicBlock, $MimicBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$MimicBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FrameBlock extends $MimicBlock implements $EntityBlock, $IFrameBlock {
static readonly "FRAMED_BLOCKS": $List<($Block)>
static readonly "HAS_BLOCK": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "OCCLUSION_SHAPE": $VoxelShape
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getFilledBlock"(inserted: $Block$Type): $Block
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getEnchantPowerBonus"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): float
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "skipRendering"(state: $BlockState$Type, adjacentBlockState: $BlockState$Type, side: $Direction$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, trace: $BlockHitResult$Type): $InteractionResult
public "getOcclusionShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getShadeBrightness"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getCollisionShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getLightBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "registerFilledBlock"(inserted: $Block$Type, filled: $Block$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameBlock$Type = ($FrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameBlock_ = $FrameBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlagBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FlagBlock extends $WaterBlock implements $EntityBlock, $IColored {
static readonly "FACING": $DirectionProperty
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

constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type)

public "isPossibleToRespawnInThis"(state: $BlockState$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getColor"(): $DyeColor
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
public "supportsBlankColor"(): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlagBlock$Type = ($FlagBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlagBlock_ = $FlagBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $WaterBlock extends $Block implements $SimpleWaterloggedBlock {
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


public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, PathComputationType: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
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
export type $WaterBlock$Type = ($WaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterBlock_ = $WaterBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SugarCubeItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SugarCubeItem extends $BlockItem {
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

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarCubeItem$Type = ($SugarCubeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarCubeItem_ = $SugarCubeItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SconceBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LightUpWaterBlock, $LightUpWaterBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpWaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SconceBlock extends $LightUpWaterBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

constructor<T extends $ParticleType<(any)>>(properties: $BlockBehaviour$Properties$Type, particleData: $Supplier$Type<(T)>)
constructor<T extends $ParticleType<(any)>>(properties: $BlockBehaviour$Properties$Type, lightLevel: integer, particleData: $Supplier$Type<(T)>)

public "animateTick"(stateIn: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceBlock$Type = ($SconceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SconceBlock_ = $SconceBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/dummmmmmy/common/$TargetDummyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TargetDummyItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(builder: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetDummyItem$Type = ($TargetDummyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetDummyItem_ = $TargetDummyItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$StructureLocator$LocatedStruct" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$StructureStart, $StructureStart$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureStart"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StructureLocator$LocatedStruct extends $Record {

constructor(pair: $Pair$Type<($BlockPos$Type), ($Holder$Type<($Structure$Type)>)>)
constructor(pos: $BlockPos$Type, structure: $Holder$Type<($Structure$Type)>, start: $StructureStart$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "start"(): $StructureStart
public "pos"(): $BlockPos
public "structure"(): $Holder<($Structure)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureLocator$LocatedStruct$Type = ($StructureLocator$LocatedStruct);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureLocator$LocatedStruct_ = $StructureLocator$LocatedStruct$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/$CakeRegistry$CakeType" {
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockType, $BlockType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType"

export class $CakeRegistry$CakeType extends $BlockType {
readonly "cake": $Block
readonly "id": $ResourceLocation

constructor(name: $ResourceLocation$Type, cake: $Block$Type)

public "getTranslationKey"(): string
public "mainChild"(): $ItemLike
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CakeRegistry$CakeType$Type = ($CakeRegistry$CakeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CakeRegistry$CakeType_ = $CakeRegistry$CakeType$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$BasaltAshFeature" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$BasaltAshFeature$Config, $BasaltAshFeature$Config$Type} from "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$BasaltAshFeature$Config"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RuleTest, $RuleTest$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $BasaltAshFeature extends $Feature<($BasaltAshFeature$Config)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(codec: $Codec$Type<($BasaltAshFeature$Config$Type)>)

public "place"(context: $FeaturePlaceContext$Type<($BasaltAshFeature$Config$Type)>): boolean
public "placeAsh"(worldGenLevel: $WorldGenLevel$Type, ySpread: integer, origin: $BlockPos$Type, basaltTest: $RuleTest$Type, ash: $BlockStateProvider$Type, belowAsh: $Optional$Type<($BlockState$Type)>, random: $RandomSource$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasaltAshFeature$Type = ($BasaltAshFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasaltAshFeature_ = $BasaltAshFeature$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$WrenchItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WrenchItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(pProperties: $Item$Properties$Type)

public static "playTurningEffects"(pos: $BlockPos$Type, shiftDown: boolean, dir: $Direction$Type, level: $Level$Type, player: $Player$Type): void
public "getDamage"(): float
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "hurtEnemy"(pStack: $ItemStack$Type, pTarget: $LivingEntity$Type, pAttacker: $LivingEntity$Type): boolean
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $LivingEntity$Type, pUsedHand: $InteractionHand$Type): $InteractionResult
public "getDefaultAttributeModifiers"(pEquipmentSlot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "isValidRepairItem"(pStack: $ItemStack$Type, pRepairCandidate: $ItemStack$Type): boolean
public "onLeftClickEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $Entity$Type): boolean
public "canApplyAtEnchantingTable"(stack: $ItemStack$Type, enchantment: $Enchantment$Type): boolean
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchItem$Type = ($WrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrenchItem_ = $WrenchItem$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$LiquidCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ModCauldronBlock, $ModCauldronBlock$Type} from "packages/net/mehvahdjukaar/amendments/common/block/$ModCauldronBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$SoftFluidTank, $SoftFluidTank$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidTank"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LiquidCauldronBlock extends $ModCauldronBlock {
static readonly "MAX_LEVEL": integer
static readonly "LEVEL": $IntegerProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "BOILING": $BooleanProperty
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isFull"(state: $BlockState$Type): boolean
public "m_142310_"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, fluid: $Fluid$Type): void
public static "shouldBoil"(belowState: $BlockState$Type, fluid: $SoftFluidStack$Type): boolean
public "getLevelProperty"(): $IntegerProperty
public static "playBubblingAnimation"(level: $Level$Type, pos: $BlockPos$Type, surface: double, rand: $RandomSource$Type, color: integer, light: integer): void
public "updateStateOnFluidChange"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, fluid: $SoftFluidStack$Type): $BlockState
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "maybeSendPotionMixMessage"(fluidTank: $SoftFluidTank$Type, player: $Player$Type): void
get "levelProperty"(): $IntegerProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidCauldronBlock$Type = ($LiquidCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidCauldronBlock_ = $LiquidCauldronBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/tile/$LiquidCauldronBlockTile" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ExtraModelData, $ExtraModelData$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData"
import {$SoftFluidTank, $SoftFluidTank$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidTank"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"
import {$ExtraModelData$Builder, $ExtraModelData$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder"
import {$IExtraModelDataProvider, $IExtraModelDataProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$IExtraModelDataProvider"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ModelDataKey, $ModelDataKey$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey"
import {$ISoftFluidTankProvider, $ISoftFluidTankProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidTankProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LiquidCauldronBlockTile extends $BlockEntity implements $IExtraModelDataProvider, $ISoftFluidTankProvider, $IFluidHandler {
static readonly "FLUID": $ModelDataKey<($SoftFluid)>
readonly "amendments$cap": $LazyOptional<(any)>
 "blockState": $BlockState

constructor(blockPos: $BlockPos$Type, blockState: $BlockState$Type)

public "createCauldronLiquidTank"(): $SoftFluidTank
public "createCauldronDyeTank"(): $SoftFluidTank
public "makeTank"(blockState: $BlockState$Type): $SoftFluidTank
public "fill"(fluidStack: $FluidStack$Type, fluidAction: $IFluidHandler$FluidAction$Type): integer
public "drain"(fluidStack: $FluidStack$Type, fluidAction: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(i: integer, fluidAction: $IFluidHandler$FluidAction$Type): $FluidStack
public "handleInteraction"(player: $Player$Type, hand: $InteractionHand$Type): boolean
public "setChanged"(): void
public "getFluidInTank"(i: integer): $FluidStack
public "getTankCapacity"(i: integer): integer
public "isFluidValid"(i: integer, fluidStack: $FluidStack$Type): boolean
public "getTanks"(): integer
public "m_183515_"(tag: $CompoundTag$Type): void
public "load"(compound: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "getCapability"(cap: $Capability$Type<(any)>, side: $Direction$Type): $LazyOptional<(any)>
public "addExtraModelData"(builder: $ExtraModelData$Builder$Type): void
public "getSoftFluidTank"(): $SoftFluidTank
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "consumeOneLayer"(): void
public "onDataPacket"(net: $Connection$Type, pkt: $ClientboundBlockEntityDataPacket$Type): void
public "getModelData"(): $ModelData
public "requestModelReload"(): void
/**
 * 
 * @deprecated
 */
public "getExtraModelData"(): $ExtraModelData
public "afterDataPacket"(oldData: $ExtraModelData$Type): void
public "canInteractWithSoftFluidTank"(): boolean
get "tanks"(): integer
get "updateTag"(): $CompoundTag
get "softFluidTank"(): $SoftFluidTank
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "modelData"(): $ModelData
get "extraModelData"(): $ExtraModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidCauldronBlockTile$Type = ($LiquidCauldronBlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidCauldronBlockTile_ = $LiquidCauldronBlockTile$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$FlagItem" {
import {$WoodBasedBlockItem, $WoodBasedBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$WoodBasedBlockItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlagItem extends $WoodBasedBlockItem implements $IColored, $ICustomItemRendererProvider {
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

public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
public "getColor"(): $DyeColor
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
public "supportsBlankColor"(): boolean
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlagItem$Type = ($FlagItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlagItem_ = $FlagItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GobletBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $GobletBlock extends $WaterBlock implements $EntityBlock {
static readonly "LIGHT_LEVEL": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GobletBlock$Type = ($GobletBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GobletBlock_ = $GobletBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MapBlockMarker, $MapBlockMarker$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $MapDecorationType<D extends $CustomMapDecoration, M extends $MapBlockMarker<(D)>> {

 "getAssociatedStructure"(): $Optional<($HolderSet<($Structure)>)>
 "getWorldMarkerFromWorld"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): M
 "loadDecorationFromBuffer"(arg0: $FriendlyByteBuf$Type): D
 "isFromWorld"(): boolean
 "getCustomFactoryID"(): $ResourceLocation
 "getDefaultMapColor"(): integer
 "createEmptyMarker"(): M
 "loadMarkerFromNBT"(arg0: $CompoundTag$Type): M
}

export namespace $MapDecorationType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecorationType$Type<D, M> = ($MapDecorationType<(D), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapDecorationType_<D, M> = $MapDecorationType$Type<(D), (M)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SoapBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoapBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "animateTick"(pState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "stepOn"(level: $Level$Type, pPos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
public "triggerEvent"(pState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, pId: integer, pParam: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoapBlock$Type = ($SoapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoapBlock_ = $SoapBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$UrnBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $UrnBlock extends $FallingBlock implements $EntityBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "TREASURE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getDustColor"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "onProjectileHit"(pLevel: $Level$Type, pState: $BlockState$Type, pHit: $BlockHitResult$Type, pProjectile: $Projectile$Type): void
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "getFluidState"(state: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "canSurvive"(state: $BlockState$Type, pLevel: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, pLevel: $ServerLevel$Type, pos: $BlockPos$Type, pRand: $RandomSource$Type): void
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "spawnAfterBreak"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, stack: $ItemStack$Type, bl: boolean): void
public static "spawnExtraBrokenParticles"(state: $BlockState$Type, pos: $BlockPos$Type, level: $Level$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UrnBlock$Type = ($UrnBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UrnBlock_ = $UrnBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BubbleBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BubbleBlockItem extends $BlockItem implements $ICustomItemRendererProvider {
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

public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleBlockItem$Type = ($BubbleBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleBlockItem_ = $BubbleBlockItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ItemDisplayTile" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IOwnerProtected, $IOwnerProtected$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IOwnerProtected"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity"

export class $ItemDisplayTile extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $IOwnerProtected {
static readonly "LOOT_TABLE_TAG": string
static readonly "LOOT_TABLE_SEED_TAG": string
 "lootTable": $ResourceLocation
 "lootTableSeed": long
 "lockKey": $LockCode
 "blockState": $BlockState


public "getOwner"(): $UUID
public "setOwner"(owner: $UUID$Type): void
public "createMenu"(i: integer, inventory: $Inventory$Type, player: $Player$Type): $AbstractContainerMenu
public "getContainerSize"(): integer
public "setChanged"(): void
public "getMaxStackSize"(): integer
public "canPlaceItem"(index: integer, stack: $ItemStack$Type): boolean
public "getDisplayedItem"(): $ItemStack
public "interact"(player: $Player$Type, handIn: $InteractionHand$Type, slot: integer): $InteractionResult
public "interact"(player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResult
public "m_183515_"(compound: $CompoundTag$Type): void
public "load"(compound: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "setRemoved"(): void
public "m_6520_"(stacks: $NonNullList$Type<($ItemStack$Type)>): void
public "m_6555_"(id: integer, player: $Inventory$Type): $AbstractContainerMenu
public "getCapability"(capability: $Capability$Type<(any)>, facing: $Direction$Type): $LazyOptional<(any)>
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "canTakeItemThroughFace"(index: integer, stack: $ItemStack$Type, direction: $Direction$Type): boolean
public "canPlaceItemThroughFace"(index: integer, stack: $ItemStack$Type, direction: $Direction$Type): boolean
public "getSlotsForFace"(side: $Direction$Type): (integer)[]
public "updateClientVisualsOnLoad"(): void
public "needsToUpdateClientWhenChanged"(): boolean
public "updateTileOnInventoryChanged"(): void
public "onItemAdded"(player: $Player$Type, stack: $ItemStack$Type, slot: integer): void
public "getAddItemSound"(): $SoundEvent
public "onItemRemoved"(player: $Player$Type, stack: $ItemStack$Type, slot: integer): void
public "setDisplayedItem"(stack: $ItemStack$Type): void
public "isPublic"(): boolean
public "isOwnedBy"(player: $Player$Type): boolean
public "saveOwner"(tag: $CompoundTag$Type): void
public "isAccessibleBy"(player: $Player$Type): boolean
public "loadOwner"(tag: $CompoundTag$Type): void
public "isNotOwnedBy"(player: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "owner"(): $UUID
set "owner"(value: $UUID$Type)
get "containerSize"(): integer
get "maxStackSize"(): integer
get "displayedItem"(): $ItemStack
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "addItemSound"(): $SoundEvent
set "displayedItem"(value: $ItemStack$Type)
get "public"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDisplayTile$Type = ($ItemDisplayTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDisplayTile_ = $ItemDisplayTile$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DispenserBlockAccessor {

}

export namespace $DispenserBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockAccessor$Type = ($DispenserBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserBlockAccessor_ = $DispenserBlockAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$TomatoLoggedBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$TomatoVineBlock, $TomatoVineBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$TomatoVineBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FarmersDelightCompat$TomatoLoggedBlock extends $TomatoVineBlock {
static readonly "VINE_AGE": $IntegerProperty
static readonly "ROPELOGGED": $BooleanProperty
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "onDestroyedByPlayer"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, willHarvest: boolean, fluid: $FluidState$Type): boolean
public "playerDestroy"(level: $Level$Type, player: $Player$Type, pos: $BlockPos$Type, state: $BlockState$Type, blockEntity: $BlockEntity$Type, stack: $ItemStack$Type): void
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "attemptRopeClimb"(level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getInnerBlock"(): $Block
get "innerBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmersDelightCompat$TomatoLoggedBlock$Type = ($FarmersDelightCompat$TomatoLoggedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmersDelightCompat$TomatoLoggedBlock_ = $FarmersDelightCompat$TomatoLoggedBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockEntityAccessor" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $DispenserBlockEntityAccessor {

 "getItems"(): $NonNullList<($ItemStack)>

(): $NonNullList<($ItemStack)>
}

export namespace $DispenserBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockEntityAccessor$Type = ($DispenserBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserBlockEntityAccessor_ = $DispenserBlockEntityAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$WaySignStructure" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$StructureTemplatePool, $StructureTemplatePool$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructureTemplatePool"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$StructureType, $StructureType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Structure$GenerationStub, $Structure$GenerationStub$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import {$Structure$GenerationContext, $Structure$GenerationContext$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Structure$StructureSettings, $Structure$StructureSettings$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $WaySignStructure extends $Structure {
static readonly "CODEC": $Codec<($WaySignStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(config: $Structure$StructureSettings$Type, startPool: $Holder$Type<($StructureTemplatePool$Type)>, startJigsawName: $Optional$Type<($ResourceLocation$Type)>, minY: integer, maxY: integer)

public static "clearCache"(): void
public "m_214086_"(context: $Structure$GenerationContext$Type): $Optional<($Structure$GenerationStub)>
public "type"(): $StructureType<(any)>
public static "recomputeValidStructureCache"(access: $RegistryAccess$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaySignStructure$Type = ($WaySignStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaySignStructure_ = $WaySignStructure$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$NoticeBoardBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $NoticeBoardBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "HAS_BOOK": $BooleanProperty
static readonly "CULLED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, pBlock: $Block$Type, pFromPos: $BlockPos$Type, pIsMoving: boolean): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoticeBoardBlock$Type = ($NoticeBoardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoticeBoardBlock_ = $NoticeBoardBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$BasaltAshFeature$Config" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$RuleTest, $RuleTest$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BasaltAshFeature$Config extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($BasaltAshFeature$Config)>

constructor(tries: integer, xzSpread: integer, ySpread: integer, target: $RuleTest$Type, ash: $BlockStateProvider$Type, belowAsh: $Optional$Type<($BlockState$Type)>)

public "equals"(o: any): boolean
public "target"(): $RuleTest
public "toString"(): string
public "hashCode"(): integer
public "tries"(): integer
public "ash"(): $BlockStateProvider
public "xzSpread"(): integer
public "ySpread"(): integer
public "belowAsh"(): $Optional<($BlockState)>
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasaltAshFeature$Config$Type = ($BasaltAshFeature$Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasaltAshFeature$Config_ = $BasaltAshFeature$Config$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedPistonTile" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IExtendedPistonTile {

 "tickMovedBlock"(arg0: $Level$Type, arg1: $BlockPos$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type): void
}

export namespace $IExtendedPistonTile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedPistonTile$Type = ($IExtendedPistonTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedPistonTile_ = $IExtendedPistonTile$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonSpecialItemRenderer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HeadedModel, $HeadedModel$Type} from "packages/net/minecraft/client/model/$HeadedModel"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ArmedModel, $ArmedModel$Type} from "packages/net/minecraft/client/model/$ArmedModel"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IThirdPersonSpecialItemRenderer {

 "renderThirdPersonItem"<T extends $Player, M extends ($EntityModel<(T)>) & ($ArmedModel) & ($HeadedModel)>(arg0: M, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: $HumanoidArm$Type, arg4: $PoseStack$Type, arg5: $MultiBufferSource$Type, arg6: integer): void

(target: $Item$Type, object: $IThirdPersonSpecialItemRenderer$Type): void
}

export namespace $IThirdPersonSpecialItemRenderer {
function attachToItem(target: $Item$Type, object: $IThirdPersonSpecialItemRenderer$Type): void
function get(target: $Item$Type): $IThirdPersonSpecialItemRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThirdPersonSpecialItemRenderer$Type = ($IThirdPersonSpecialItemRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IThirdPersonSpecialItemRenderer_ = $IThirdPersonSpecialItemRenderer$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SliceMapItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SliceMapItem$DepthMapData, $SliceMapItem$DepthMapData$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$SliceMapItem$DepthMapData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EmptyMapItem, $EmptyMapItem$Type} from "packages/net/minecraft/world/item/$EmptyMapItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SliceMapItem extends $EmptyMapItem {
static readonly "DEPTH_DATA_KEY": $CustomMapData$Type<($SliceMapItem$DepthMapData)>
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

public static "createSliced"(level: $Level$Type, x: integer, z: integer, scale: byte, trackingPosition: boolean, unlimitedTracking: boolean, slice: integer): $ItemStack
public static "init"(): void
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "getRangeMultiplier"(): double
public static "canPlayerSee"(targetY: integer, entity: $Entity$Type): boolean
public static "getCutoffColor"(pos: $BlockPos$Type, level: $BlockGetter$Type): $MapColor
public static "getMapHeight"(data: $MapItemSavedData$Type): integer
get "rangeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SliceMapItem$Type = ($SliceMapItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SliceMapItem_ = $SliceMapItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$IConvertableHorse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConvertableHorse {

 "supp$isConverting"(): boolean

(): boolean
}

export namespace $IConvertableHorse {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConvertableHorse$Type = ($IConvertableHorse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConvertableHorse_ = $IConvertableHorse$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$BoilingWaterCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LayeredCauldronBlock, $LayeredCauldronBlock$Type} from "packages/net/minecraft/world/level/block/$LayeredCauldronBlock"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BoilingWaterCauldronBlock extends $LayeredCauldronBlock {
static readonly "BOILING": $BooleanProperty
static readonly "MIN_FILL_LEVEL": integer
static readonly "MAX_FILL_LEVEL": integer
static readonly "LEVEL": $IntegerProperty
static readonly "RAIN": $Predicate<($Biome$Precipitation)>
static readonly "SNOW": $Predicate<($Biome$Precipitation)>
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
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

constructor(properties: $BlockBehaviour$Properties$Type, fillPredicate: $Predicate$Type<($Biome$Precipitation$Type)>, interactions: $Map$Type<($Item$Type), ($CauldronInteraction$Type)>)

public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, fallDistance: float): void
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public static "getWaterColor"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, i: integer): integer
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoilingWaterCauldronBlock$Type = ($BoilingWaterCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoilingWaterCauldronBlock_ = $BoilingWaterCauldronBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FeatherBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FeatherBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "updateEntityAfterFallOn"(reader: $BlockGetter$Type, entity: $Entity$Type): void
public "fallOn"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, height: float): void
public "getCollisionShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "entityInside"(state: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type, entity: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatherBlock$Type = ($FeatherBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeatherBlock_ = $FeatherBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$DyeCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$LiquidCauldronBlockTile, $LiquidCauldronBlockTile$Type} from "packages/net/mehvahdjukaar/amendments/common/tile/$LiquidCauldronBlockTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ModCauldronBlock, $ModCauldronBlock$Type} from "packages/net/mehvahdjukaar/amendments/common/block/$ModCauldronBlock"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DyeCauldronBlock extends $ModCauldronBlock {
static readonly "LEVEL": $IntegerProperty
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isFull"(state: $BlockState$Type): boolean
public "getLevelProperty"(): $IntegerProperty
public "updateStateOnFluidChange"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, fluid: $SoftFluidStack$Type): $BlockState
public static "playDyeSoundAndConsume"(state: $BlockState$Type, pos: $BlockPos$Type, level: $Level$Type, player: $Player$Type, stack: $ItemStack$Type): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "addDye"(level: $Level$Type, tile: $LiquidCauldronBlockTile$Type, stack: $ItemStack$Type, player: $Player$Type, dyeItem: $DyeItem$Type): $InteractionResult
get "levelProperty"(): $IntegerProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeCauldronBlock$Type = ($DyeCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeCauldronBlock_ = $DyeCauldronBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$CarpetSlabBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$IRecolorable, $IRecolorable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRecolorable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CarpetSlabBlock extends $SlabBlock implements $EntityBlock, $IRecolorable {
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "SOLID": $BooleanProperty
static readonly "TYPE": $EnumProperty<($SlabType)>
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

constructor(block: $Block$Type)

public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "placeLiquid"(level: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluidState: $FluidState$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getSoundType"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getOcclusionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(state: $BlockState$Type, player: $Player$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): float
public "tryRecolor"(level: $Level$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type, dyeColor: $DyeColor$Type): boolean
public "isDefaultColor"(level: $Level$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarpetSlabBlock$Type = ($CarpetSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarpetSlabBlock_ = $CarpetSlabBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/mixins/forge/$MobBucketItemAccessor" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"

export interface $MobBucketItemAccessor {

 "invokeGetFishType"(): $EntityType<(any)>

(): $EntityType<(any)>
}

export namespace $MobBucketItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobBucketItemAccessor$Type = ($MobBucketItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobBucketItemAccessor_ = $MobBucketItemAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$CaveFilter$Type" {
import {$CaveFilter, $CaveFilter$Type} from "packages/net/mehvahdjukaar/moonlight/core/misc/$CaveFilter"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$PlacementModifierType, $PlacementModifierType$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifierType"

export class $CaveFilter$Type implements $PlacementModifierType<($CaveFilter)> {

constructor()

public "codec"(): $Codec<($CaveFilter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveFilter$Type$Type = ($CaveFilter$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveFilter$Type_ = $CaveFilter$Type$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedItem" {
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"

export interface $IExtendedItem {

 "moonlight$getClientAnimationExtension"(): any
 "moonlight$setClientAnimationExtension"(arg0: any): void
 "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
 "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}

export namespace $IExtendedItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedItem$Type = ($IExtendedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedItem_ = $IExtendedItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$CandyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CandyItem extends $Item {
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

public static "increaseSweetTooth"(world: $Level$Type, entity: $LivingEntity$Type, amount: integer): void
public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, entity: $LivingEntity$Type): $ItemStack
public static "checkSweetTooth"(entity: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandyItem$Type = ($CandyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandyItem_ = $CandyItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$DoormatBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DoormatBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isPossibleToRespawnInThis"(blockState: $BlockState$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoormatBlock$Type = ($DoormatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoormatBlock_ = $DoormatBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Rune" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$Rune extends $Enum<($ModBlockProperties$Rune)> implements $StringRepresentable {
static readonly "A": $ModBlockProperties$Rune
static readonly "B": $ModBlockProperties$Rune
static readonly "C": $ModBlockProperties$Rune
static readonly "D": $ModBlockProperties$Rune
static readonly "E": $ModBlockProperties$Rune
static readonly "F": $ModBlockProperties$Rune
static readonly "G": $ModBlockProperties$Rune
static readonly "H": $ModBlockProperties$Rune
static readonly "I": $ModBlockProperties$Rune
static readonly "J": $ModBlockProperties$Rune
static readonly "K": $ModBlockProperties$Rune
static readonly "L": $ModBlockProperties$Rune
static readonly "M": $ModBlockProperties$Rune
static readonly "N": $ModBlockProperties$Rune
static readonly "O": $ModBlockProperties$Rune
static readonly "P": $ModBlockProperties$Rune
static readonly "Q": $ModBlockProperties$Rune
static readonly "R": $ModBlockProperties$Rune
static readonly "S": $ModBlockProperties$Rune
static readonly "T": $ModBlockProperties$Rune
static readonly "U": $ModBlockProperties$Rune
static readonly "V": $ModBlockProperties$Rune
static readonly "W": $ModBlockProperties$Rune
static readonly "X": $ModBlockProperties$Rune
static readonly "Y": $ModBlockProperties$Rune
static readonly "Z": $ModBlockProperties$Rune


public static "values"(): ($ModBlockProperties$Rune)[]
public static "valueOf"(name: string): $ModBlockProperties$Rune
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
export type $ModBlockProperties$Rune$Type = (("a") | ("b") | ("c") | ("d") | ("e") | ("f") | ("g") | ("h") | ("i") | ("j") | ("k") | ("l") | ("m") | ("n") | ("o") | ("p") | ("q") | ("r") | ("s") | ("t") | ("u") | ("v") | ("w") | ("x") | ("y") | ("z")) | ($ModBlockProperties$Rune);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$Rune_ = $ModBlockProperties$Rune$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$CustomMapData, $CustomMapData$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomMapData$Type<T extends $CustomMapData<(any)>> extends $Record {

constructor(id: $ResourceLocation$Type, factory: $Supplier$Type<(T)>)

public "get"(mapData: $MapItemSavedData$Type): T
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$Type$Type<T> = ($CustomMapData$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData$Type_<T> = $CustomMapData$Type$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PedestalBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ModBlockProperties$DisplayStatus, $ModBlockProperties$DisplayStatus$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$DisplayStatus"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$WorldlyContainerHolder, $WorldlyContainerHolder$Type} from "packages/net/minecraft/world/$WorldlyContainerHolder"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PedestalBlock extends $WaterBlock implements $EntityBlock, $WorldlyContainerHolder {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "ITEM_STATUS": $EnumProperty<($ModBlockProperties$DisplayStatus)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "canHaveItemAbove"(level: $LevelAccessor$Type, pos: $BlockPos$Type): boolean
public static "getStatus"(level: $LevelAccessor$Type, pos: $BlockPos$Type, hasItem: boolean): $ModBlockProperties$DisplayStatus
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getContainer"(state: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type): $WorldlyContainer
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public static "canConnectTo"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, dir: $Direction$Type, hasItem: boolean): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): float
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PedestalBlock$Type = ($PedestalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PedestalBlock_ = $PedestalBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractRopeKnotBlock" {
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
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ModBlockProperties$PostType, $ModBlockProperties$PostType$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$PostType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$MimicBlock, $MimicBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$MimicBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractRopeKnotBlock extends $MimicBlock implements $SimpleWaterloggedBlock, $EntityBlock, $IRotatable {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "POST_TYPE": $EnumProperty<($ModBlockProperties$PostType)>
static readonly "DOWN": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
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


public "getSideShape"(): $VoxelShape
public static "convertToRopeKnot"(type: $ModBlockProperties$PostType$Type, state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): $BlockState
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getOcclusionShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getCollisionShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
public "getRotatedState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "sideShape"(): $VoxelShape
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRopeKnotBlock$Type = ($AbstractRopeKnotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRopeKnotBlock_ = $AbstractRopeKnotBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SoapItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoapItem extends $Item {
static readonly "SOAP_FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(pProperties: $Item$Properties$Type)

public static "hasBeenEatenBefore"(player: $Player$Type, level: $Level$Type): boolean
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "finishUsingItem"(pStack: $ItemStack$Type, pLevel: $Level$Type, entity: $LivingEntity$Type): $ItemStack
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "interactWithEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $Entity$Type, hand: $InteractionHand$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoapItem$Type = ($SoapItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoapItem_ = $SoapItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/forge/$DecoBlocksCompatImpl$RopeChandelierBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ChandelierBlock, $ChandelierBlock$Type} from "packages/lilypuree/decorative_blocks/blocks/$ChandelierBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DecoBlocksCompatImpl$RopeChandelierBlock extends $ChandelierBlock {
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

constructor<T extends $ParticleType<(any)>>(properties: $BlockBehaviour$Properties$Type, chandelier: $Supplier$Type<($Block$Type)>, particleData: $Supplier$Type<(T)>)

public "getName"(): $MutableComponent
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "animateTick"(stateIn: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
get "name"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecoBlocksCompatImpl$RopeChandelierBlock$Type = ($DecoBlocksCompatImpl$RopeChandelierBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecoBlocksCompatImpl$RopeChandelierBlock_ = $DecoBlocksCompatImpl$RopeChandelierBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GunpowderBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RedstoneSide, $RedstoneSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$RedstoneSide"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$LightUpBlock, $LightUpBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GunpowderBlock extends $LightUpBlock {
static readonly "NORTH": $EnumProperty<($RedstoneSide)>
static readonly "EAST": $EnumProperty<($RedstoneSide)>
static readonly "SOUTH": $EnumProperty<($RedstoneSide)>
static readonly "WEST": $EnumProperty<($RedstoneSide)>
static readonly "BURNING": $IntegerProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($EnumProperty<($RedstoneSide)>)>
static readonly "LIT": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "fallOn"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, height: float): void
public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public static "isFireSource"(state: $BlockState$Type): boolean
public static "isFireSource"(world: $LevelAccessor$Type, pos: $BlockPos$Type): boolean
public "onBlockExploded"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): void
public "onCaughtFire"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, face: $Direction$Type, igniter: $LivingEntity$Type): void
public "updateIndirectNeighbourShapes"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, var1: integer, var2: integer): void
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, moving: boolean): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, otherState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, otherPos: $BlockPos$Type): $BlockState
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, moving: boolean): void
public "triggerEvent"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, eventID: integer, eventParam: integer): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "isLitUp"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "setLitUp"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, lit: boolean): void
public "lightUp"(entity: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
public static "createMiniExplosion"(world: $Level$Type, pos: $BlockPos$Type, alwaysFire: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunpowderBlock$Type = ($GunpowderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunpowderBlock_ = $GunpowderBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/$StasisEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $StasisEnchantment extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "isDiscoverable"(): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isAllowedOnBooks"(): boolean
public "canEnchant"(stack: $ItemStack$Type): boolean
public "getMinCost"(level: integer): integer
public "m_5975_"(enchantment: $Enchantment$Type): boolean
public "getMaxCost"(level: integer): integer
public "canApplyAtEnchantingTable"(stack: $ItemStack$Type): boolean
get "maxLevel"(): integer
get "discoverable"(): boolean
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StasisEnchantment$Type = ($StasisEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StasisEnchantment_ = $StasisEnchantment$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GoldDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $GoldDoorBlock extends $DoorBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(builder: $BlockBehaviour$Properties$Type)

public "canBeOpened"(state: $BlockState$Type): boolean
public static "tryOpenDoubleDoor"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "tryOpenDoubleDoorKey"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldDoorBlock$Type = ($GoldDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldDoorBlock_ = $GoldDoorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$RoadSignFeature$RandomState" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RoadSignFeature$RandomState extends $Record {
static readonly "CODEC": $Codec<($RoadSignFeature$RandomState)>


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "trapdoorChance"(): float
public "logChance"(): float
public "stoneChance"(): float
public "stoneLanternChance"(): float
public "candleHolderChance"(): float
public "wallLanternChance"(): float
public "doubleSignChance"(): float
public "doubleLanternChance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignFeature$RandomState$Type = ($RoadSignFeature$RandomState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoadSignFeature$RandomState_ = $RoadSignFeature$RandomState$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$IMobContainerProvider" {
import {$MobContainer, $MobContainer$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IMobContainerProvider {

 "getDirection"(): $Direction
 "getMobContainer"(): $MobContainer

(): $Direction
}

export namespace $IMobContainerProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMobContainerProvider$Type = ($IMobContainerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMobContainerProvider_ = $IMobContainerProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BubbleBlowerItem" {
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IFirstPersonAnimationProvider, $IFirstPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IFirstPersonAnimationProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IThirdPersonAnimationProvider, $IThirdPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonAnimationProvider"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BubbleBlowerItem extends $Item implements $IThirdPersonAnimationProvider, $IFirstPersonAnimationProvider {
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

public "animateHands"<T extends $LivingEntity>(model: $HumanoidModel$Type<(T)>, entity: T, leftHand: boolean): void
public "poseRightArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public "onUseTick"(level: $Level$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseDuration: integer): void
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarColor"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isEnchantable"(stack: $ItemStack$Type): boolean
public "isRepairable"(stack: $ItemStack$Type): boolean
public "isValidRepairItem"(toRepair: $ItemStack$Type, repair: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "isBookEnchantable"(stack: $ItemStack$Type, book: $ItemStack$Type): boolean
public "poseLeftArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "canApplyAtEnchantingTable"(stack: $ItemStack$Type, enchantment: $Enchantment$Type): boolean
public "animateItemFirstPerson"(entity: $LivingEntity$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, matrixStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public static "attachToItem"(target: $Item$Type, object: $IThirdPersonAnimationProvider$Type): void
public static "get"(target: $Item$Type): $IThirdPersonAnimationProvider
public "isTwoHanded"(): boolean
public static "attachToItem"(target: $Item$Type, object: $IFirstPersonAnimationProvider$Type): void
public "animateItemFirstPerson"(entity: $Player$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, arm: $HumanoidArm$Type, poseStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
get "enchantmentValue"(): integer
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleBlowerItem$Type = ($BubbleBlowerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleBlowerItem_ = $BubbleBlowerItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$FuelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FuelItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(pProperties: $Item$Properties$Type, burnTime: $Supplier$Type<(integer)>)

public "getBurnTime"(itemStack: $ItemStack$Type, recipeType: $RecipeType$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelItem$Type = ($FuelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelItem_ = $FuelItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$JarBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$JarBlockTile, $JarBlockTile$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$JarBlockTile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $JarBlock extends $WaterBlock implements $EntityBlock {
static readonly "SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getJarItem"(te: $JarBlockTile$Type): $ItemStack
public "getJarLiquidColor"(pos: $BlockPos$Type, world: $LevelReader$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getBeaconColorMultiplier"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, beaconPos: $BlockPos$Type): (float)[]
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarBlock$Type = ($JarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarBlock_ = $JarBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RopeKnotBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AbstractRopeKnotBlock, $AbstractRopeKnotBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractRopeKnotBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ModBlockProperties$PostType, $ModBlockProperties$PostType$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$PostType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$IRopeConnection, $IRopeConnection$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$IRopeConnection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export class $RopeKnotBlock extends $AbstractRopeKnotBlock implements $IRopeConnection {
static readonly "SIDE_SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "POST_TYPE": $EnumProperty<($ModBlockProperties$PostType)>
static readonly "DOWN": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getSideShape"(): $VoxelShape
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "canSideAcceptConnection"(state: $BlockState$Type, direction: $Direction$Type): boolean
public static "isSupportingCeiling"(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "canConnectDown"(downState: $BlockState$Type): boolean
public "shouldConnectToFace"(thisState: $BlockState$Type, facingState: $BlockState$Type, facingPos: $BlockPos$Type, dir: $Direction$Type, world: $LevelReader$Type): boolean
get "sideShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeKnotBlock$Type = ($RopeKnotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RopeKnotBlock_ = $RopeKnotBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/entity/$ImprovedProjectileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ThrowableItemProjectile, $ThrowableItemProjectile$Type} from "packages/net/minecraft/world/entity/projectile/$ThrowableItemProjectile"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ImprovedProjectileEntity extends $ThrowableItemProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "position": $Vec3
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "stepHeight": float
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "ars_Nouveau$motions": $Stack<(any)>
 "an_isRewinding": boolean
 "thebumblezone_performedEntityDrops": boolean


public "readAdditionalSaveData"(tag: $CompoundTag$Type): void
public "addAdditionalSaveData"(tag: $CompoundTag$Type): void
public "tick"(): void
public "canHarmOwner"(): boolean
public "reachedEndOfLife"(): void
public "isNoPhysics"(): boolean
public "setNoPhysics"(noPhysics: boolean): void
public "hasReachedEndOfLife"(): boolean
/**
 * 
 * @deprecated
 */
public "spawnTrailParticles"(oldPos: $Vec3$Type, newPos: $Vec3$Type): void
public "spawnTrailParticles"(): void
get "noPhysics"(): boolean
set "noPhysics"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImprovedProjectileEntity$Type = ($ImprovedProjectileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImprovedProjectileEntity_ = $ImprovedProjectileEntity$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PancakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModBlockProperties$Topping, $ModBlockProperties$Topping$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Topping"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ISoftFluidConsumer, $ISoftFluidConsumer$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidConsumer"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $PancakeBlock extends $WaterBlock implements $ISoftFluidConsumer {
static readonly "PANCAKES": $IntegerProperty
static readonly "TOPPING": $EnumProperty<($ModBlockProperties$Topping)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "tryAcceptingFluid"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, fluid: $SoftFluidStack$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "canBeReplaced"(state: $BlockState$Type, useContext: $BlockPlaceContext$Type): boolean
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PancakeBlock$Type = ($PancakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PancakeBlock_ = $PancakeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$PlanterRichBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlanterBlock, $PlanterBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PlanterBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FarmersDelightCompat$PlanterRichBlock extends $PlanterBlock {
static readonly "EXTENDED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, mimic: $Supplier$Type<($Block$Type)>)

public "getDrops"(blockState: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "randomTick"(state: $BlockState$Type, worldIn: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmersDelightCompat$PlanterRichBlock$Type = ($FarmersDelightCompat$PlanterRichBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmersDelightCompat$PlanterRichBlock_ = $FarmersDelightCompat$PlanterRichBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SlingshotItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$ProjectileWeaponItem, $ProjectileWeaponItem$Type} from "packages/net/minecraft/world/item/$ProjectileWeaponItem"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IFirstPersonAnimationProvider, $IFirstPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IFirstPersonAnimationProvider"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$IThirdPersonAnimationProvider, $IThirdPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonAnimationProvider"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SlingshotItem extends $ProjectileWeaponItem implements $Vanishable, $IFirstPersonAnimationProvider, $IThirdPersonAnimationProvider {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
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

public "getChargeSound"(stack: $ItemStack$Type): $SoundEvent
public static "animateCrossbowCharge"(offHand: $ModelPart$Type, mainHand: $ModelPart$Type, entity: $LivingEntity$Type, right: boolean): void
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "poseRightArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public "getDefaultProjectileRange"(): integer
public static "getChargeDuration"(stack: $ItemStack$Type): integer
public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, entity: $LivingEntity$Type, timeLeft: integer): void
public "poseLeftArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "canApplyAtEnchantingTable"(stack: $ItemStack$Type, enchantment: $Enchantment$Type): boolean
public "getPowerForTime"(stack: $ItemStack$Type, timeLeft: float): float
public "animateItemFirstPerson"(entity: $LivingEntity$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, matrixStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public static "attachToItem"(target: $Item$Type, object: $IFirstPersonAnimationProvider$Type): void
public static "get"(target: $Item$Type): $IFirstPersonAnimationProvider
public "animateItemFirstPerson"(entity: $Player$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, arm: $HumanoidArm$Type, poseStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public static "attachToItem"(target: $Item$Type, object: $IThirdPersonAnimationProvider$Type): void
public "isTwoHanded"(): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "defaultProjectileRange"(): integer
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlingshotItem$Type = ($SlingshotItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlingshotItem_ = $SlingshotItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IRotatable {

 "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
 "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
 "getRotatedState"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type, arg4: $Direction$Type, arg5: $Vec3$Type): $Optional<($BlockState)>

(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
}

export namespace $IRotatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRotatable$Type = ($IRotatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRotatable_ = $IRotatable$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/reg/$ModBlockProperties$BlockAttachment" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ModBlockProperties$BlockAttachment extends $Enum<($ModBlockProperties$BlockAttachment)> implements $StringRepresentable {
static readonly "BLOCK": $ModBlockProperties$BlockAttachment
static readonly "BEAM": $ModBlockProperties$BlockAttachment
static readonly "WALL": $ModBlockProperties$BlockAttachment
static readonly "PALISADE": $ModBlockProperties$BlockAttachment
static readonly "POST": $ModBlockProperties$BlockAttachment
static readonly "STICK": $ModBlockProperties$BlockAttachment


public "getName"(): string
public static "get"(state: $BlockState$Type, pos: $BlockPos$Type, level: $LevelReader$Type, facing: $Direction$Type): $ModBlockProperties$BlockAttachment
public "toString"(): string
public static "values"(): ($ModBlockProperties$BlockAttachment)[]
public static "valueOf"(name: string): $ModBlockProperties$BlockAttachment
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$BlockAttachment$Type = (("beam") | ("post") | ("palisade") | ("block") | ("stick") | ("wall")) | ($ModBlockProperties$BlockAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$BlockAttachment_ = $ModBlockProperties$BlockAttachment$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/reg/$ModBlockProperties$PostType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$PostType extends $Enum<($ModBlockProperties$PostType)> implements $StringRepresentable {
static readonly "POST": $ModBlockProperties$PostType
static readonly "PALISADE": $ModBlockProperties$PostType
static readonly "WALL": $ModBlockProperties$PostType
static readonly "BEAM": $ModBlockProperties$PostType


public "getName"(): string
public static "get"(state: $BlockState$Type): $ModBlockProperties$PostType
public static "get"(state: $BlockState$Type, needsFullHeight: boolean): $ModBlockProperties$PostType
public "toString"(): string
public static "values"(): ($ModBlockProperties$PostType)[]
public static "valueOf"(name: string): $ModBlockProperties$PostType
public "getOffset"(): float
public "getWidth"(): integer
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "offset"(): float
get "width"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$PostType$Type = (("beam") | ("post") | ("palisade") | ("wall")) | ($ModBlockProperties$PostType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$PostType_ = $ModBlockProperties$PostType$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SpringLauncherArmBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SpringLauncherArmBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "EXTENDING": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "getOcclusionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringLauncherArmBlock$Type = ($SpringLauncherArmBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpringLauncherArmBlock_ = $SpringLauncherArmBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomMapData$DirtyCounter {

 "isDirty"(): boolean
 "clearDirty"(): void
}

export namespace $CustomMapData$DirtyCounter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$DirtyCounter$Type = ($CustomMapData$DirtyCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData$DirtyCounter_ = $CustomMapData$DirtyCounter$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlowerBoxBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FlowerBoxBlock extends $WaterBlock implements $EntityBlock {
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "FLOOR": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowerBoxBlock$Type = ($FlowerBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowerBoxBlock_ = $FlowerBoxBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$CeilingBannerBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$AbstractBannerBlock, $AbstractBannerBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractBannerBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $CeilingBannerBlock extends $AbstractBannerBlock {
static readonly "ATTACHED": $BooleanProperty
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

constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getDescriptionId"(): string
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "updateShape"(myState: $BlockState$Type, direction: $Direction$Type, otherState: $BlockState$Type, world: $LevelAccessor$Type, myPos: $BlockPos$Type, otherPos: $BlockPos$Type): $BlockState
public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getDrops"(blockState: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CeilingBannerBlock$Type = ($CeilingBannerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CeilingBannerBlock_ = $CeilingBannerBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData" {
import {$ModelDataKey, $ModelDataKey$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey"
import {$ExtraModelData$Builder, $ExtraModelData$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder"

export interface $ExtraModelData {

 "get"<T>(arg0: $ModelDataKey$Type<(T)>): T
 "isEmpty"(): boolean

(arg0: $ModelDataKey$Type<(T)>): T
}

export namespace $ExtraModelData {
const EMPTY: $ExtraModelData
function builder(): $ExtraModelData$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraModelData$Type = ($ExtraModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraModelData_ = $ExtraModelData$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$CageBlockTile" {
import {$IMobContainerProvider, $IMobContainerProvider$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$IMobContainerProvider"
import {$MobContainer, $MobContainer$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CageBlockTile extends $BlockEntity implements $IMobContainerProvider {
 "mobContainer": $MobContainer
 "blockState": $BlockState

constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public "saveToNbt"(stack: $ItemStack$Type): void
public static "tick"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, tile: $CageBlockTile$Type): void
public "getDirection"(): $Direction
public "m_183515_"(compound: $CompoundTag$Type): void
public "load"(compound: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "getMobContainer"(): $MobContainer
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
get "direction"(): $Direction
get "updateTag"(): $CompoundTag
get "mobContainer"(): $MobContainer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CageBlockTile$Type = ($CageBlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CageBlockTile_ = $CageBlockTile$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GlobeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$IWashable, $IWashable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IWashable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $GlobeBlock extends $WaterBlock implements $EntityBlock, $IWashable {
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "ROTATION": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "animateTick"(stateIn: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "triggerEvent"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, eventID: integer, eventParam: integer): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
public "updatePower"(state: $BlockState$Type, leve: $Level$Type, pos: $BlockPos$Type): void
public static "displayCurrentCoordinates"(level: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobeBlock$Type = ($GlobeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlobeBlock_ = $GlobeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/client/$BlackboardManager$Key" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"

export class $BlackboardManager$Key implements $TooltipComponent {


public "equals"(another: any): boolean
public "hashCode"(): integer
public static "of"(packPixels: (long)[], glowing: boolean): $BlackboardManager$Key
public static "of"(packPixels: (long)[]): $BlackboardManager$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackboardManager$Key$Type = ($BlackboardManager$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackboardManager$Key_ = $BlackboardManager$Key$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$JarBlockTile" {
import {$MobContainer, $MobContainer$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ExtraModelData, $ExtraModelData$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IExtraModelDataProvider, $IExtraModelDataProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$IExtraModelDataProvider"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemDisplayTile, $ItemDisplayTile$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ItemDisplayTile"
import {$IMobContainerProvider, $IMobContainerProvider$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$IMobContainerProvider"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$SoftFluidTank, $SoftFluidTank$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidTank"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"
import {$ExtraModelData$Builder, $ExtraModelData$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModelDataKey, $ModelDataKey$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey"
import {$ISoftFluidTankProvider, $ISoftFluidTankProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidTankProvider"

export class $JarBlockTile extends $ItemDisplayTile implements $IMobContainerProvider, $ISoftFluidTankProvider, $IExtraModelDataProvider {
static readonly "FLUID": $ModelDataKey<($SoftFluid)>
static readonly "FILL_LEVEL": $ModelDataKey<(float)>
readonly "mobContainer": $MobContainer
readonly "fluidHolder": $SoftFluidTank
static readonly "LOOT_TABLE_TAG": string
static readonly "LOOT_TABLE_SEED_TAG": string
 "lootTable": $ResourceLocation
 "lootTableSeed": long
 "lockKey": $LockCode
 "blockState": $BlockState

constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public "canInteractWithSoftFluidTank"(): boolean
public "hasContent"(): boolean
public "handleInteraction"(player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, pos: $BlockPos$Type): boolean
public "isFull"(): boolean
public static "tick"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, tile: $JarBlockTile$Type): void
public "canPlaceItem"(index: integer, stack: $ItemStack$Type): boolean
public "getDirection"(): $Direction
public "m_183515_"(tag: $CompoundTag$Type): void
public "load"(compound: $CompoundTag$Type): void
public "m_6820_"(): $Component
public "getMobContainer"(): $MobContainer
public "extractItem"(): $ItemStack
public "addExtraModelData"(builder: $ExtraModelData$Builder$Type): void
public "getSoftFluidTank"(): $SoftFluidTank
public "canTakeItemThroughFace"(index: integer, stack: $ItemStack$Type, direction: $Direction$Type): boolean
public "canPlaceItemThroughFace"(index: integer, stack: $ItemStack$Type, direction: $Direction$Type): boolean
public "updateClientVisualsOnLoad"(): void
public "updateTileOnInventoryChanged"(): void
public "tryAddingItem"(stack: $ItemStack$Type, player: $Player$Type, handIn: $InteractionHand$Type): boolean
public "tryAddingItem"(itemstack: $ItemStack$Type): boolean
public "handleExtractItem"(player: $Player$Type, hand: $InteractionHand$Type): boolean
public "isPonyJar"(): boolean
public "resetHolders"(): void
public "onDataPacket"(net: $Connection$Type, pkt: $ClientboundBlockEntityDataPacket$Type): void
public "getModelData"(): $ModelData
public "requestModelReload"(): void
/**
 * 
 * @deprecated
 */
public "getExtraModelData"(): $ExtraModelData
public "afterDataPacket"(oldData: $ExtraModelData$Type): void
public "getPersistentData"(): $CompoundTag
public "onChunkUnloaded"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "full"(): boolean
get "direction"(): $Direction
get "mobContainer"(): $MobContainer
get "softFluidTank"(): $SoftFluidTank
get "ponyJar"(): boolean
get "modelData"(): $ModelData
get "extraModelData"(): $ExtraModelData
get "persistentData"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarBlockTile$Type = ($JarBlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarBlockTile_ = $JarBlockTile$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$DirectionalCakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CakeBlock, $CakeBlock$Type} from "packages/net/minecraft/world/level/block/$CakeBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CakeRegistry$CakeType, $CakeRegistry$CakeType$Type} from "packages/net/mehvahdjukaar/amendments/common/$CakeRegistry$CakeType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $DirectionalCakeBlock extends $CakeBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
readonly "type": $CakeRegistry$CakeType
static readonly "MAX_BITES": integer
static readonly "BITES": $IntegerProperty
static readonly "FULL_CAKE_SIGNAL": integer
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

constructor(type: $CakeRegistry$CakeType$Type)

public "getName"(): $MutableComponent
public "animateTick"(stateIn: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "removeSlice"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, dir: $Direction$Type): void
public "eatSliceD"(world: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type, dir: $Direction$Type): $InteractionResult
public static "getHitDir"(player: $Player$Type, hit: $BlockHitResult$Type): $Direction
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "name"(): $MutableComponent
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalCakeBlock$Type = ($DirectionalCakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionalCakeBlock_ = $DirectionalCakeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IMapDataPacketExtension" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MapItemSavedData$MapPatch, $MapItemSavedData$MapPatch$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData$MapPatch"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $IMapDataPacketExtension {

 "moonlight$getDimension"(): $ResourceKey<($Level)>
 "moonlight$sendCustomMapDataTag"(arg0: $CompoundTag$Type): void
 "moonlight$sendCustomDecorations"(arg0: $Collection$Type<($CustomMapDecoration$Type)>): void
 "moonlight$getColorPatch"(): $MapItemSavedData$MapPatch
 "moonlight$getCustomMapDataTag"(): $CompoundTag
}

export namespace $IMapDataPacketExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMapDataPacketExtension$Type = ($IMapDataPacketExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMapDataPacketExtension_ = $IMapDataPacketExtension$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$CarpetStairBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$IRecolorable, $IRecolorable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRecolorable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ModStairBlock, $ModStairBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ModStairBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CarpetStairBlock extends $ModStairBlock implements $EntityBlock, $IRecolorable {
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "SOLID": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
readonly "baseState": $BlockState
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

constructor(block: $Block$Type)

public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "placeLiquid"(level: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluidState: $FluidState$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getSoundType"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "destroy"(level: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getOcclusionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(state: $BlockState$Type, player: $Player$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): float
public "tryRecolor"(level: $Level$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type, dyeColor: $DyeColor$Type): boolean
public "isDefaultColor"(level: $Level$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarpetStairBlock$Type = ($CarpetStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarpetStairBlock_ = $CarpetStairBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$MapDecorationType, $MapDecorationType$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MapBlockMarker<D extends $CustomMapDecoration> {
static readonly "HAS_SMALL_TEXTURE_FLAG": integer


public "getName"(): $Component
public "equals"(o: any): boolean
public "hashCode"(): integer
public "setName"(name: $Component$Type): void
public "getType"(): $MapDecorationType<(D), (any)>
public "getFlags"(): integer
public "setRotation"(rot: integer): void
public "hasFlag"(flag: integer): boolean
public "getTypeId"(): string
public "setPos"(pos: $BlockPos$Type): void
public "getRotation"(): float
public "loadFromNBT"(compound: $CompoundTag$Type): void
public "getPos"(): $BlockPos
public "shouldSave"(): boolean
public "setPersistent"(persistent: boolean): void
public "createDecorationFromMarker"(data: $MapItemSavedData$Type): D
public "saveToNBT"(): $CompoundTag
/**
 * 
 * @deprecated
 */
public "saveToNBT"(compound: $CompoundTag$Type): $CompoundTag
public "shouldRefresh"(): boolean
public "getMarkerId"(): string
get "name"(): $Component
set "name"(value: $Component$Type)
get "type"(): $MapDecorationType<(D), (any)>
get "flags"(): integer
set "rotation"(value: integer)
get "typeId"(): string
set "pos"(value: $BlockPos$Type)
get "rotation"(): float
get "pos"(): $BlockPos
set "persistent"(value: boolean)
get "markerId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapBlockMarker$Type<D> = ($MapBlockMarker<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapBlockMarker_<D> = $MapBlockMarker$Type<(D)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ILightable$FireSourceType extends $Enum<($ILightable$FireSourceType)> {
static readonly "FLINT_AND_STEEL": $ILightable$FireSourceType
static readonly "FIRE_CHANGE": $ILightable$FireSourceType
static readonly "FLAMING_ARROW": $ILightable$FireSourceType


public static "values"(): ($ILightable$FireSourceType)[]
public static "valueOf"(name: string): $ILightable$FireSourceType
public "play"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILightable$FireSourceType$Type = (("flint_and_steel") | ("flaming_arrow") | ("fire_change")) | ($ILightable$FireSourceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILightable$FireSourceType_ = $ILightable$FireSourceType$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/set/wood/$WoodType" {
import {$WoodType as $WoodType$0, $WoodType$Type as $WoodType$0$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$BlockType, $BlockType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType"

export class $WoodType extends $BlockType {
static readonly "CODEC": $Codec<($WoodType)>
readonly "planks": $Block
readonly "log": $Block
readonly "id": $ResourceLocation

constructor(id: $ResourceLocation$Type, baseBlock: $Block$Type, logBlock: $Block$Type)

public "copyProperties"(): $BlockBehaviour$Properties
public "toVanilla"(): $WoodType$0
public "getColor"(): $MapColor
public "getTranslationKey"(): string
public "initializeChildrenBlocks"(): void
public "initializeChildrenItems"(): void
public "mainChild"(): $ItemLike
public "canBurn"(): boolean
public "toVanillaOrOak"(): $WoodType$0
public "getTexturePath"(): string
get "color"(): $MapColor
get "translationKey"(): string
get "texturePath"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodType$Type = ($WoodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodType_ = $WoodType$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BlazeRodBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$StickBlock, $StickBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$StickBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlazeRodBlock extends $StickBlock {
static readonly "AXIS_X": $BooleanProperty
static readonly "AXIS_Y": $BooleanProperty
static readonly "AXIS_Z": $BooleanProperty
static readonly "AXIS2PROPERTY": $Map<($Direction$Axis), ($BooleanProperty)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "stepOn"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeRodBlock$Type = ($BlazeRodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazeRodBlock_ = $BlazeRodBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlaxBaleBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FlaxBaleBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, height: float): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaxBaleBlock$Type = ($FlaxBaleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlaxBaleBlock_ = $FlaxBaleBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/$IScreenProvider" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IScreenProvider {

 "sendOpenGuiPacket"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hitFace: $Direction$Type): void
 "sendOpenGuiPacket"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void
 "openScreen"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, direction: $Direction$Type): void
/**
 * 
 * @deprecated
 */
 "openScreen"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void

(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hitFace: $Direction$Type): void
}

export namespace $IScreenProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenProvider$Type = ($IScreenProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenProvider_ = $IScreenProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RelayerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $RelayerBlock extends $DirectionalBlock {
static readonly "POWER": $IntegerProperty
static readonly "POWERED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "canConnectRedstone"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "isSignalSource"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, randomSource: $RandomSource$Type): void
public "getSignal"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): integer
public "getDirectSignal"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayerBlock$Type = ($RelayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelayerBlock_ = $RelayerBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$DispenserMinecartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DispenserMinecartItem extends $Item {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(pProperties: $Item$Properties$Type)

public "useOn"(pContext: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserMinecartItem$Type = ($DispenserMinecartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserMinecartItem_ = $DispenserMinecartItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/events/$IFireConsumeBlockEvent" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleEvent, $SimpleEvent$Type} from "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IFireConsumeBlockEvent extends $SimpleEvent {

 "getState"(): $BlockState
 "getLevel"(): $LevelAccessor
 "getAge"(): integer
 "getFinalState"(): $BlockState
 "setFinalState"(arg0: $BlockState$Type): void
 "getChance"(): integer
 "getFace"(): $Direction
 "getPos"(): $BlockPos
}

export namespace $IFireConsumeBlockEvent {
function create(pos: $BlockPos$Type, level: $Level$Type, state: $BlockState$Type, chance: integer, age: integer, face: $Direction$Type): $IFireConsumeBlockEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFireConsumeBlockEvent$Type = ($IFireConsumeBlockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFireConsumeBlockEvent_ = $IFireConsumeBlockEvent$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$EndLampBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ModBlockProperties$Rune, $ModBlockProperties$Rune$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Rune"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $EndLampBlock extends $Block {
static readonly "RUNE": $EnumProperty<($ModBlockProperties$Rune)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndLampBlock$Type = ($EndLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndLampBlock_ = $EndLampBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/block/$AbstractCandleSkullBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$ILightable, $ILightable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$AbstractCandleBlock, $AbstractCandleBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractCandleBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IWashable, $IWashable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IWashable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AbstractCandleSkullBlock extends $AbstractCandleBlock implements $EntityBlock, $ILightable, $IWashable {
static readonly "CANDLES": $IntegerProperty
static readonly "LIT": $BooleanProperty
static readonly "LIGHT_PER_CANDLE": integer
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


public "getCloneItemStack"(state: $BlockState$Type, hitResult: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "playExtinguishSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
public "spawnSmokeParticles"(state: $BlockState$Type, pos: $BlockPos$Type, level: $LevelAccessor$Type): void
public "canBeExtinguishedBy"(item: $ItemStack$Type): boolean
public "animateTick"(state: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type, randomSource: $RandomSource$Type): void
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(pState: $BlockState$Type): $RenderShape
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "isLitUp"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "setLitUp"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, lit: boolean): void
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "extinguish"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "interactWithProjectile"(level: $Level$Type, state: $BlockState$Type, projectile: $Projectile$Type, pos: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
public "isLitUp"(state: $BlockState$Type): boolean
public "playLightUpSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type, type: $ILightable$FireSourceType$Type): void
/**
 * 
 * @deprecated
 */
public "toggleLitState"(state: $BlockState$Type, lit: boolean): $BlockState
public "lightUp"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
public "interactWithPlayer"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCandleSkullBlock$Type = ($AbstractCandleSkullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCandleSkullBlock_ = $AbstractCandleSkullBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PlanterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $PlanterBlock extends $WaterBlock {
static readonly "EXTENDED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "canSustainPlant"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type, plantable: $IPlantable$Type): boolean
public "onTreeGrow"(state: $BlockState$Type, level: $LevelReader$Type, placeFunction: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, randomSource: $RandomSource$Type, pos: $BlockPos$Type, config: $TreeConfiguration$Type): boolean
public "isFertile"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getCollisionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanterBlock$Type = ($PlanterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlanterBlock_ = $PlanterBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$MimicBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MimicBlock extends $Block {
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


public "getSoundType"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getExplosionResistance"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getDestroyProgress"(state: $BlockState$Type, player: $Player$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MimicBlock$Type = ($MimicBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MimicBlock_ = $MimicBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/$ExtendedHangingSign" {
import {$HangingSignTileExtension, $HangingSignTileExtension$Type} from "packages/net/mehvahdjukaar/amendments/common/tile/$HangingSignTileExtension"

export interface $ExtendedHangingSign {

 "getExtension"(): $HangingSignTileExtension

(): $HangingSignTileExtension
}

export namespace $ExtendedHangingSign {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedHangingSign$Type = ($ExtendedHangingSign);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedHangingSign_ = $ExtendedHangingSign$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ILavaAndWaterLoggable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BucketPickup, $BucketPickup$Type} from "packages/net/minecraft/world/level/block/$BucketPickup"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LiquidBlockContainer, $LiquidBlockContainer$Type} from "packages/net/minecraft/world/level/block/$LiquidBlockContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export interface $ILavaAndWaterLoggable extends $BucketPickup, $LiquidBlockContainer {

 "takeLiquid"(world: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type): $Fluid
 "placeLiquid"(world: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluidState: $FluidState$Type): boolean
 "pickupBlock"(pLevel: $LevelAccessor$Type, pPos: $BlockPos$Type, pState: $BlockState$Type): $ItemStack
 "canPlaceLiquid"(reader: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluid: $Fluid$Type): boolean
 "getPickupSound"(): $Optional<($SoundEvent)>
 "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
}

export namespace $ILavaAndWaterLoggable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILavaAndWaterLoggable$Type = ($ILavaAndWaterLoggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILavaAndWaterLoggable_ = $ILavaAndWaterLoggable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ILightable, $ILightable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LightUpBlock extends $Block implements $ILightable {
static readonly "LIT": $BooleanProperty
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


public "onProjectileHit"(level: $Level$Type, state: $BlockState$Type, pHit: $BlockHitResult$Type, projectile: $Projectile$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "entityInside"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, entityIn: $Entity$Type): void
public "isLitUp"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "setLitUp"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, lit: boolean): void
public "extinguish"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "playExtinguishSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
public "spawnSmokeParticles"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): void
public "canBeExtinguishedBy"(item: $ItemStack$Type): boolean
public "interactWithProjectile"(level: $Level$Type, state: $BlockState$Type, projectile: $Projectile$Type, pos: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
public "isLitUp"(state: $BlockState$Type): boolean
public "playLightUpSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type, type: $ILightable$FireSourceType$Type): void
/**
 * 
 * @deprecated
 */
public "toggleLitState"(state: $BlockState$Type, lit: boolean): $BlockState
public "lightUp"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
public "interactWithPlayer"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightUpBlock$Type = ($LightUpBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightUpBlock_ = $LightUpBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$RakeDirection" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$RakeDirection extends $Enum<($ModBlockProperties$RakeDirection)> implements $StringRepresentable {
static readonly "NORTH_SOUTH": $ModBlockProperties$RakeDirection
static readonly "EAST_WEST": $ModBlockProperties$RakeDirection
static readonly "SOUTH_EAST": $ModBlockProperties$RakeDirection
static readonly "SOUTH_WEST": $ModBlockProperties$RakeDirection
static readonly "NORTH_WEST": $ModBlockProperties$RakeDirection
static readonly "NORTH_EAST": $ModBlockProperties$RakeDirection


public "toString"(): string
public static "values"(): ($ModBlockProperties$RakeDirection)[]
public static "valueOf"(name: string): $ModBlockProperties$RakeDirection
public "getSerializedName"(): string
public "getDirections"(): $List<($Direction)>
public static "fromDirections"(directions: $List$Type<($Direction$Type)>): $ModBlockProperties$RakeDirection
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "directions"(): $List<($Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$RakeDirection$Type = (("south_west") | ("north_east") | ("east_west") | ("north_west") | ("south_east") | ("north_south")) | ($ModBlockProperties$RakeDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$RakeDirection_ = $ModBlockProperties$RakeDirection$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FaucetBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FaucetBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "ENABLED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "HAS_WATER": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "CONNECTED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "updateTileFluid"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "isOpen"(state: $BlockState$Type): boolean
public "updateBlock"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, toggle: boolean): void
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "onNeighborChange"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, neighbor: $BlockPos$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTileParticleColor"(pos: $BlockPos$Type, world: $Level$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaucetBlock$Type = ($FaucetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaucetBlock_ = $FaucetBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IColored" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"

export interface $IColored {

/**
 * 
 * @deprecated
 */
 "changeItemColor"(color: $DyeColor$Type): $Item
 "supportsBlankColor"(): boolean
 "getColor"(): $DyeColor

(color: $DyeColor$Type): $Item
}

export namespace $IColored {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColored$Type = ($IColored);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColored_ = $IColored$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$WoodBasedItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockTypeBasedItem, $BlockTypeBasedItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$BlockTypeBasedItem"
import {$WoodType, $WoodType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/wood/$WoodType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WoodBasedItem extends $BlockTypeBasedItem<($WoodType)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(builder: $Item$Properties$Type, woodType: $WoodType$Type, burnTicks: integer)
constructor(builder: $Item$Properties$Type, burnTicks: integer)
constructor(builder: $Item$Properties$Type, woodType: $WoodType$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodBasedItem$Type = ($WoodBasedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodBasedItem_ = $WoodBasedItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$ItemShelfBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ItemShelfBlock extends $WaterBlock implements $EntityBlock {
static readonly "ITEM_SHELF_BLOCKS": $List<($Block)>
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "isLadder"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $LivingEntity$Type): boolean
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShelfBlock$Type = ($ItemShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShelfBlock_ = $ItemShelfBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/vsc/$CompatVerticalSlab" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CutBlockType, $CutBlockType$Type} from "packages/net/mehvahdjukaar/vsc/$CutBlockType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VerticalSlabBlock, $VerticalSlabBlock$Type} from "packages/org/violetmoon/quark/content/building/block/$VerticalSlabBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$VerticalSlabBlock$VerticalSlabType, $VerticalSlabBlock$VerticalSlabType$Type} from "packages/org/violetmoon/quark/content/building/block/$VerticalSlabBlock$VerticalSlabType"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CompatVerticalSlab extends $VerticalSlabBlock {
static readonly "TYPE": $EnumProperty<($VerticalSlabBlock$VerticalSlabType)>
static readonly "WATERLOGGED": $BooleanProperty
readonly "parent": $Supplier<($Block)>
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $CutBlockType$Type)

public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getDestroyProgress"(state: $BlockState$Type, player: $Player$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getBlockType"(): $CutBlockType
get "blockType"(): $CutBlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompatVerticalSlab$Type = ($CompatVerticalSlab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompatVerticalSlab_ = $CompatVerticalSlab$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SafeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ILavaAndWaterLoggable, $ILavaAndWaterLoggable$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ILavaAndWaterLoggable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SafeBlock extends $Block implements $ILavaAndWaterLoggable, $EntityBlock {
static readonly "SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LAVALOGGED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "CONTENTS": $ResourceLocation
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "onDestroyedByPlayer"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, willHarvest: boolean, fluid: $FluidState$Type): boolean
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getMenuProvider"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, serverLevel: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getAnalogOutputSignal"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "takeLiquid"(world: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type): $Fluid
public "placeLiquid"(world: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluidState: $FluidState$Type): boolean
public "pickupBlock"(pLevel: $LevelAccessor$Type, pPos: $BlockPos$Type, pState: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(reader: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeBlock$Type = ($SafeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SafeBlock_ = $SafeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$WindVaneBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $WindVaneBlock extends $WaterBlock implements $EntityBlock {
static readonly "WIND_STRENGTH": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "isSignalSource"(state: $BlockState$Type): boolean
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getDirectSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public static "updatePower"(bs: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindVaneBlock$Type = ($WindVaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindVaneBlock_ = $WindVaneBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/quark/$CartographersQuillItem$State" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $CartographersQuillItem$State {


public "save"(tag: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartographersQuillItem$State$Type = ($CartographersQuillItem$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CartographersQuillItem$State_ = $CartographersQuillItem$State$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$ExpandedMapData" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$CustomMapData, $CustomMapData$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"
import {$MapBlockMarker, $MapBlockMarker$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ExpandedMapData {

 "copy"(): $MapItemSavedData
 "toggleCustomDecoration"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
 "getCustomData"(): $Map<($ResourceLocation), ($CustomMapData<(any)>)>
 "resetCustomDecoration"(): void
 "getVanillaDecorationSize"(): integer
 "getCustomDecorations"(): $Map<(string), ($CustomMapDecoration)>
 "setCustomDecorationsDirty"(): void
 "getCustomMarkers"(): $Map<(string), ($MapBlockMarker<(any)>)>
 "setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type$Type<(any)>, arg1: $Consumer$Type<(H)>): void
 "removeCustomMarker"(arg0: string): boolean
 "addCustomMarker"<M extends $MapBlockMarker<(any)>>(arg0: M): void
}

export namespace $ExpandedMapData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpandedMapData$Type = ($ExpandedMapData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExpandedMapData_ = $ExpandedMapData$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonAnimationProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IThirdPersonAnimationProvider {

 "poseRightArm"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: $HumanoidModel$Type<(T)>, arg2: T, arg3: $HumanoidArm$Type): boolean
 "isTwoHanded"(): boolean
 "poseLeftArm"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: $HumanoidModel$Type<(T)>, arg2: T, arg3: $HumanoidArm$Type): boolean
}

export namespace $IThirdPersonAnimationProvider {
function attachToItem(target: $Item$Type, object: $IThirdPersonAnimationProvider$Type): void
function get(target: $Item$Type): $IThirdPersonAnimationProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThirdPersonAnimationProvider$Type = ($IThirdPersonAnimationProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IThirdPersonAnimationProvider_ = $IThirdPersonAnimationProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$RoadSignFeature" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RoadSignFeature$Config, $RoadSignFeature$Config$Type} from "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$RoadSignFeature$Config"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$StructureLocator$LocatedStruct, $StructureLocator$LocatedStruct$Type} from "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$StructureLocator$LocatedStruct"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $RoadSignFeature extends $Feature<($RoadSignFeature$Config)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(codec: $Codec$Type<($RoadSignFeature$Config$Type)>)

public "place"(context: $FeaturePlaceContext$Type<($RoadSignFeature$Config$Type)>): boolean
public static "isNotSolid"(world: $LevelAccessor$Type, pos: $BlockPos$Type): boolean
public static "applyPostProcess"(c: $RoadSignFeature$Config$Type, level: $ServerLevel$Type, generatorPos: $BlockPos$Type, foundVillages: $List$Type<($StructureLocator$LocatedStruct$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignFeature$Type = ($RoadSignFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoadSignFeature_ = $RoadSignFeature$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$PostType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$PostType extends $Enum<($ModBlockProperties$PostType)> implements $StringRepresentable {
static readonly "POST": $ModBlockProperties$PostType
static readonly "PALISADE": $ModBlockProperties$PostType
static readonly "WALL": $ModBlockProperties$PostType
static readonly "BEAM": $ModBlockProperties$PostType


public "getName"(): string
public static "get"(state: $BlockState$Type): $ModBlockProperties$PostType
public static "get"(state: $BlockState$Type, needsFullHeight: boolean): $ModBlockProperties$PostType
public "toString"(): string
public static "values"(): ($ModBlockProperties$PostType)[]
public static "valueOf"(name: string): $ModBlockProperties$PostType
public "getOffset"(): float
public "getWidth"(): integer
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "offset"(): float
get "width"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$PostType$Type = (("beam") | ("post") | ("palisade") | ("wall")) | ($ModBlockProperties$PostType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$PostType_ = $ModBlockProperties$PostType$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$EndermanSkullBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SkullBlock, $SkullBlock$Type} from "packages/net/minecraft/world/level/block/$SkullBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SkullBlock$Type, $SkullBlock$Type$Type} from "packages/net/minecraft/world/level/block/$SkullBlock$Type"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EndermanSkullBlock extends $SkullBlock {
static readonly "TYPE": $SkullBlock$Type
static readonly "SHAPE_ANGERY": $VoxelShape
static readonly "WATCHED": $BooleanProperty
static readonly "POWER": $IntegerProperty
static readonly "MAX": integer
static readonly "ROTATION": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "isSignalSource"(state: $BlockState$Type): boolean
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndermanSkullBlock$Type = ($EndermanSkullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndermanSkullBlock_ = $EndermanSkullBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/api/$IAntiqueTextProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAntiqueTextProvider {

 "hasAntiqueInk"(): boolean
 "setAntiqueInk"(arg0: boolean): void
}

export namespace $IAntiqueTextProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAntiqueTextProvider$Type = ($IAntiqueTextProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAntiqueTextProvider_ = $IAntiqueTextProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/amendments/common/$IBetterJukebox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBetterJukebox {

 "amendments$getRotation"(arg0: float): float

(arg0: float): float
}

export namespace $IBetterJukebox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBetterJukebox$Type = ($IBetterJukebox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBetterJukebox_ = $IBetterJukebox$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$JarBoatBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $JarBoatBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
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

constructor(builder: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarBoatBlock$Type = ($JarBoatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarBoatBlock_ = $JarBoatBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BlockGeneratorBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockGeneratorBlock extends $Block implements $EntityBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeneratorBlock$Type = ($BlockGeneratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGeneratorBlock_ = $BlockGeneratorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"

export interface $ICustomItemRendererProvider extends $ItemLike {

 "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
/**
 * 
 * @deprecated
 */
 "registerFabricRenderer"(): void
 "asItem"(): $Item
}

export namespace $ICustomItemRendererProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomItemRendererProvider$Type = ($ICustomItemRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomItemRendererProvider_ = $ICustomItemRendererProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/forge/$ShulkerShellItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShulkerShellItem extends $ArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

public "getMaxStackSize"(stack: $ItemStack$Type): integer
public "isEnchantable"(stack: $ItemStack$Type): boolean
public "isDamageable"(stack: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerShellItem$Type = ($ShulkerShellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerShellItem_ = $ShulkerShellItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RedstoneIlluminatorBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $RedstoneIlluminatorBlock extends $Block {
static readonly "POWER": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneIlluminatorBlock$Type = ($RedstoneIlluminatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneIlluminatorBlock_ = $RedstoneIlluminatorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$StatueBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StatueBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "animateTick"(stateIn: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public static "addCandleParticleAndSound"(level: $Level$Type, vec3: $Vec3$Type, random: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatueBlock$Type = ($StatueBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatueBlock_ = $StatueBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SugarBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ConcretePowderBlock, $ConcretePowderBlock$Type} from "packages/net/minecraft/world/level/block/$ConcretePowderBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $SugarBlock extends $ConcretePowderBlock {
readonly "concrete": $BlockState
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getDustColor"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "onLand"(level: $Level$Type, pos: $BlockPos$Type, blockState: $BlockState$Type, blockState2: $BlockState$Type, fallingBlock: $FallingBlockEntity$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "triggerEvent"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, id: integer, param: integer): boolean
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "spawnDissolveParticles"(level: $Level$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarBlock$Type = ($SugarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarBlock_ = $SugarBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$WaySignStructure$Type" {
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$StructureType, $StructureType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$WaySignStructure, $WaySignStructure$Type} from "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$WaySignStructure"

export class $WaySignStructure$Type implements $StructureType<($WaySignStructure)> {

constructor()

public "codec"(): $Codec<($WaySignStructure)>
public static "register"<S extends $Structure>(arg0: string, arg1: $Codec$Type<($WaySignStructure$Type)>): $StructureType<($WaySignStructure)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaySignStructure$Type$Type = ($WaySignStructure$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaySignStructure$Type_ = $WaySignStructure$Type$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$HatStandItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HatStandItem extends $Item {
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

public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatStandItem$Type = ($HatStandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HatStandItem_ = $HatStandItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IBeeGrowable" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBeeGrowable {

 "getPollinated"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
}

export namespace $IBeeGrowable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBeeGrowable$Type = ($IBeeGrowable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBeeGrowable_ = $IBeeGrowable$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IWashable" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWashable {

 "tryWash"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
}

export namespace $IWashable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWashable$Type = ($IWashable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWashable_ = $IWashable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$InstrumentItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InstrumentItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any


public "spawnNoteParticle"(level: $Level$Type, entity: $LivingEntity$Type, note: integer): void
public "getPitch"(note: integer): float
public "onUseTick"(level: $Level$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseDuration: integer): void
public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(pStack: $ItemStack$Type, pLevel: $Level$Type, entity: $LivingEntity$Type, pTimeCharged: integer): void
public "getVolume"(): float
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getUseAnimation"(pStack: $ItemStack$Type): $UseAnim
public "getSound"(): $SoundEvent
get "volume"(): float
get "sound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstrumentItem$Type = ($InstrumentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstrumentItem_ = $InstrumentItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ModelDataKey<T> {

constructor(type: $Class$Type<(T)>)

public "equals"(obj: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelDataKey$Type<T> = ($ModelDataKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelDataKey_<T> = $ModelDataKey$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$CaveFilter" {
import {$PlacementFilter, $PlacementFilter$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacementFilter"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$PlacementModifierType, $PlacementModifierType$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifierType"

export class $CaveFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<($CaveFilter)>


public "type"(): $PlacementModifierType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveFilter$Type = ($CaveFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveFilter_ = $CaveFilter$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/compat/$PistonReactQuarkMixin" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMagnetMoveAction, $IMagnetMoveAction$Type} from "packages/org/violetmoon/quark/api/$IMagnetMoveAction"

export interface $PistonReactQuarkMixin extends $IMagnetMoveAction {

 "onMagnetMoved"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type): void
 "canMagnetMove"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type): void
}

export namespace $PistonReactQuarkMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PistonReactQuarkMixin$Type = ($PistonReactQuarkMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PistonReactQuarkMixin_ = $PistonReactQuarkMixin$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BreakingMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BombEntity$BreakingMode extends $Enum<($BombEntity$BreakingMode)> {
static readonly "ALL": $BombEntity$BreakingMode
static readonly "WEAK": $BombEntity$BreakingMode
static readonly "NONE": $BombEntity$BreakingMode


public static "values"(): ($BombEntity$BreakingMode)[]
public static "valueOf"(name: string): $BombEntity$BreakingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombEntity$BreakingMode$Type = (("all") | ("none") | ("weak")) | ($BombEntity$BreakingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BombEntity$BreakingMode_ = $BombEntity$BreakingMode$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SconceWallBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SconceBlock, $SconceBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SconceBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SconceWallBlock extends $SconceBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

constructor<T extends $ParticleType<(any)>>(properties: $BlockBehaviour$Properties$Type, particleData: $Supplier$Type<(T)>)

public "animateTick"(stateIn: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceWallBlock$Type = ($SconceWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SconceWallBlock_ = $SconceWallBlock$Type;
}}
