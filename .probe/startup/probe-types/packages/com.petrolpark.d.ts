declare module "packages/com/petrolpark/destroy/item/$PumpjackBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PumpjackBlockItem extends $BlockItem {
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

public "showBounds"(arg0: $BlockPlaceContext$Type): void
public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpjackBlockItem$Type = ($PumpjackBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpjackBlockItem_ = $PumpjackBlockItem$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Reaction" {
import {$Molecule, $Molecule$Type} from "packages/com/petrolpark/destroy/chemistry/$Molecule"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ReactionResult, $ReactionResult$Type} from "packages/com/petrolpark/destroy/chemistry/$ReactionResult"
import {$Reaction$ReactionBuilder, $Reaction$ReactionBuilder$Type} from "packages/com/petrolpark/destroy/chemistry/$Reaction$ReactionBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IItemReactant, $IItemReactant$Type} from "packages/com/petrolpark/destroy/chemistry/$IItemReactant"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Reaction {
static readonly "GAS_CONSTANT": float
static readonly "REACTIONS": $Map<(string), ($Reaction)>


public "displayAsReversible"(): boolean
public static "generatedReactionBuilder"(): $Reaction$ReactionBuilder
public "getReverseReactionForDisplay"(): $Optional<($Reaction)>
public "getPreexponentialFactor"(): float
public "getActivationEnergy"(): float
public static "get"(arg0: string): $Reaction
public "getId"(): string
public "getResult"(): $ReactionResult
public "getNameSpace"(): string
public "hasResult"(): boolean
public "getReactantMolarRatio"(arg0: $Molecule$Type): integer
public "getProductMolarRatio"(arg0: $Molecule$Type): integer
public "getFullId"(): string
public "getItemReactants"(): $List<($IItemReactant)>
public "getReactants"(): $Set<($Molecule)>
public "consumesItem"(): boolean
public "getMolesPerItem"(): float
public "getEnthalpyChange"(): float
public "getProducts"(): $Set<($Molecule)>
public "getOrders"(): $Map<($Molecule), (integer)>
public "needsUV"(): boolean
public "getRateConstant"(arg0: float): float
public "includeInJei"(): boolean
public "containsReactant"(arg0: $Molecule$Type): boolean
public "containsProduct"(arg0: $Molecule$Type): boolean
get "reverseReactionForDisplay"(): $Optional<($Reaction)>
get "preexponentialFactor"(): float
get "activationEnergy"(): float
get "id"(): string
get "result"(): $ReactionResult
get "nameSpace"(): string
get "fullId"(): string
get "itemReactants"(): $List<($IItemReactant)>
get "reactants"(): $Set<($Molecule)>
get "molesPerItem"(): float
get "enthalpyChange"(): float
get "products"(): $Set<($Molecule)>
get "orders"(): $Map<($Molecule), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reaction$Type = ($Reaction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reaction_ = $Reaction$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$RedstoneProgrammerBlockItem" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$RedstoneProgram, $RedstoneProgram$Type} from "packages/com/petrolpark/destroy/util/$RedstoneProgram"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RedstoneProgrammerBlock, $RedstoneProgrammerBlock$Type} from "packages/com/petrolpark/destroy/block/$RedstoneProgrammerBlock"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RedstoneProgrammerBlockItem extends $BlockItem {
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

constructor(arg0: $RedstoneProgrammerBlock$Type, arg1: $Item$Properties$Type)

public static "getProgram"(arg0: $ItemStack$Type, arg1: $LevelAccessor$Type, arg2: $LivingEntity$Type): $Optional<($RedstoneProgram)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "withProgram"(arg0: $RedstoneProgram$Type): $ItemStack
public static "setProgram"(arg0: $ItemStack$Type, arg1: $RedstoneProgram$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneProgrammerBlockItem$Type = ($RedstoneProgrammerBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneProgrammerBlockItem_ = $RedstoneProgrammerBlockItem$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/$SentimentalBehaviour" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SentimentalBehaviour extends $BlockEntityBehaviour {
static "TYPE": $BehaviourType<($SentimentalBehaviour)>
 "owner": $LivingEntity
 "blockEntity": $SmartBlockEntity

constructor(arg0: $SmartBlockEntity$Type)

public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getType"(): $BehaviourType<(any)>
public "setOwner"(arg0: $LivingEntity$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Player$Type): void
get "type"(): $BehaviourType<(any)>
set "owner"(value: $LivingEntity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SentimentalBehaviour$Type = ($SentimentalBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SentimentalBehaviour_ = $SentimentalBehaviour$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$GroupType" {
import {$Molecule, $Molecule$Type} from "packages/com/petrolpark/destroy/chemistry/$Molecule"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Group, $Group$Type} from "packages/com/petrolpark/destroy/chemistry/$Group"

export class $GroupType<G extends $Group<(G)>> {

constructor(arg0: $Supplier$Type<($Molecule$Type)>)

public "toString"(): string
public "getExampleMolecule"(): $Molecule
get "exampleMolecule"(): $Molecule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupType$Type<G> = ($GroupType<(G)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupType_<G> = $GroupType$Type<(G)>;
}}
declare module "packages/com/petrolpark/destroy/item/tooltip/$IDynamicItemDescription" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemDescription, $ItemDescription$Type} from "packages/com/simibubi/create/foundation/item/$ItemDescription"
import {$TooltipHelper$Palette, $TooltipHelper$Palette$Type} from "packages/com/simibubi/create/foundation/item/$TooltipHelper$Palette"
import {$IDynamicItemDescription$Modifier, $IDynamicItemDescription$Modifier$Type} from "packages/com/petrolpark/destroy/item/tooltip/$IDynamicItemDescription$Modifier"

export interface $IDynamicItemDescription {

 "getPalette"(): $TooltipHelper$Palette
 "getItemDescription"(): $ItemDescription
}

export namespace $IDynamicItemDescription {
function create(arg0: $Item$Type): $IDynamicItemDescription$Modifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicItemDescription$Type = ($IDynamicItemDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicItemDescription_ = $IDynamicItemDescription$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$IDirectionalOutputFluidBlockEntity" {
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"

export interface $IDirectionalOutputFluidBlockEntity {

 "isTankFull"(arg0: $FluidTank$Type): boolean
 "hasFluidInTank"(arg0: $FluidIngredient$Type, arg1: $FluidTank$Type): boolean
 "canFitFluidInTank"(arg0: $FluidStack$Type, arg1: $FluidTank$Type): boolean
 "refreshDirection"(arg0: $SmartBlockEntity$Type, arg1: $Direction$Type, arg2: $FluidTank$Type, arg3: boolean): $Direction
}

export namespace $IDirectionalOutputFluidBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDirectionalOutputFluidBlockEntity$Type = ($IDirectionalOutputFluidBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDirectionalOutputFluidBlockEntity_ = $IDirectionalOutputFluidBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$RedstoneProgrammerBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RedstoneProgrammerBlockEntity, $RedstoneProgrammerBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$RedstoneProgrammerBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $RedstoneProgrammerBlock extends $HorizontalDirectionalBlock implements $IBE<($RedstoneProgrammerBlockEntity)>, $IWrenchable, $ProperWaterloggedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getBlockEntityClass"(): $Class<($RedstoneProgrammerBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "updatePower"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $RedstoneProgrammerBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($RedstoneProgrammerBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($RedstoneProgrammerBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($RedstoneProgrammerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "fluidState"(arg0: $BlockState$Type): $FluidState
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "blockEntityClass"(): $Class<($RedstoneProgrammerBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneProgrammerBlock$Type = ($RedstoneProgrammerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneProgrammerBlock_ = $RedstoneProgrammerBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/$ChargingBehaviour" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$ChargingBehaviour$ChargingBehaviourSpecifics, $ChargingBehaviour$ChargingBehaviourSpecifics$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/$ChargingBehaviour$ChargingBehaviourSpecifics"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ChargingBehaviour$Mode, $ChargingBehaviour$Mode$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/$ChargingBehaviour$Mode"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import {$BeltProcessingBehaviour, $BeltProcessingBehaviour$Type} from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$BeltProcessingBehaviour"

export class $ChargingBehaviour extends $BeltProcessingBehaviour {
static readonly "CHARGING_TIME": integer
static readonly "ENTITY_SCAN_TIME": integer
 "specifics": $ChargingBehaviour$ChargingBehaviourSpecifics
 "runningTicks": integer
 "running": boolean
 "finished": boolean
 "mode": $ChargingBehaviour$Mode
 "targetPosition": $Vec3
static readonly "TYPE": $BehaviourType<($BeltProcessingBehaviour)>
 "blockEntity": $SmartBlockEntity

constructor<T extends ($SmartBlockEntity) & ($ChargingBehaviour$ChargingBehaviourSpecifics)>(arg0: T)

public "start"(arg0: $ChargingBehaviour$Mode$Type, arg1: $Vec3$Type): void
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "tick"(): void
public "getRunningTickSpeed"(): integer
get "runningTickSpeed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingBehaviour$Type = ($ChargingBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingBehaviour_ = $ChargingBehaviour$Type;
}}
declare module "packages/com/petrolpark/destroy/fluid/$MixtureFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ReadOnlyMixture, $ReadOnlyMixture$Type} from "packages/com/petrolpark/destroy/chemistry/$ReadOnlyMixture"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$VirtualFluid, $VirtualFluid$Type} from "packages/com/simibubi/create/content/fluids/$VirtualFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mixture, $Mixture$Type} from "packages/com/petrolpark/destroy/chemistry/$Mixture"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $MixtureFluid extends $VirtualFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public static "of"(arg0: integer, arg1: $ReadOnlyMixture$Type, arg2: string): $FluidStack
public static "of"(arg0: integer, arg1: $ReadOnlyMixture$Type): $FluidStack
public static "getTintColor"(arg0: $FluidStack$Type): integer
public static "addMixtureToFluidStack"(arg0: $FluidStack$Type, arg1: $ReadOnlyMixture$Type): $FluidStack
public static "airMixture"(arg0: float): $Mixture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixtureFluid$Type = ($MixtureFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixtureFluid_ = $MixtureFluid$Type;
}}
declare module "packages/com/petrolpark/destroy/fluid/$ColoredFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$AllFluids$TintedFluidType, $AllFluids$TintedFluidType$Type} from "packages/com/simibubi/create/$AllFluids$TintedFluidType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ColoredFluidType extends $AllFluids$TintedFluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredFluidType$Type = ($ColoredFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredFluidType_ = $ColoredFluidType$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$WithSecondaryItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WithSecondaryItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($ItemStack$Type)>)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "getSecondaryItem"(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithSecondaryItem$Type = ($WithSecondaryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WithSecondaryItem_ = $WithSecondaryItem$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$BucketAndSpadeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BucketAndSpadeItem extends $Item {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public static "getSandCastleForMaterial"(arg0: $BlockState$Type): $BlockState
public static "canSandCastleBeBuiltOn"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
public static "buildSandcastle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketAndSpadeItem$Type = ($BucketAndSpadeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketAndSpadeItem_ = $BucketAndSpadeItem$Type;
}}
declare module "packages/com/petrolpark/destroy/util/vat/$IUVLampBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IUVLampBlock {

 "getUVPower"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): float

(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): float
}

export namespace $IUVLampBlock {
function getUVPower(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUVLampBlock$Type = ($IUVLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUVLampBlock_ = $IUVLampBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$KeypunchBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$KeypunchBlockEntity, $KeypunchBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$KeypunchBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ICogWheel, $ICogWheel$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ICogWheel"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HorizontalKineticBlock, $HorizontalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$HorizontalKineticBlock"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $KeypunchBlock extends $HorizontalKineticBlock implements $IBE<($KeypunchBlockEntity)>, $ICogWheel {
static readonly "HORIZONTAL_FACING": $Property<($Direction)>
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

public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getBlockEntityClass"(): $Class<($KeypunchBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $KeypunchBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($KeypunchBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($KeypunchBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($KeypunchBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public "isDedicatedCogWheel"(): boolean
public "isSmallCog"(): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public "isLargeCog"(): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
get "blockEntityClass"(): $Class<($KeypunchBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "dedicatedCogWheel"(): boolean
get "smallCog"(): boolean
get "largeCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypunchBlock$Type = ($KeypunchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypunchBlock_ = $KeypunchBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$AspirinSyringeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SyringeItem, $SyringeItem$Type} from "packages/com/petrolpark/destroy/item/$SyringeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AspirinSyringeItem extends $SyringeItem {
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

public "onInject"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AspirinSyringeItem$Type = ($AspirinSyringeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AspirinSyringeItem_ = $AspirinSyringeItem$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$DirectionalRotatedPillarKineticBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$RotatedPillarKineticBlock, $RotatedPillarKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$RotatedPillarKineticBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $DirectionalRotatedPillarKineticBlock extends $RotatedPillarKineticBlock {
static "POSITIVE_AXIS_DIRECTION": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "getDirection"(arg0: $BlockState$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalRotatedPillarKineticBlock$Type = ($DirectionalRotatedPillarKineticBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionalRotatedPillarKineticBlock_ = $DirectionalRotatedPillarKineticBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$PumpjackBlock" {
import {$PumpjackBlockEntity, $PumpjackBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$PumpjackBlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PumpjackBlock extends $Block implements $IBE<($PumpjackBlockEntity)> {
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

public static "getFacing"(arg0: $BlockState$Type): $Direction
public "getBlockEntityClass"(): $Class<($PumpjackBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "getCamPos"(arg0: $BlockState$Type, arg1: $BlockPos$Type): $BlockPos
public "getStructuralBlocks"(arg0: $Direction$Type, arg1: $BlockPos$Type): $Map<($BlockPos), ($BlockState)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PumpjackBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($PumpjackBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($PumpjackBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($PumpjackBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($PumpjackBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpjackBlock$Type = ($PumpjackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpjackBlock_ = $PumpjackBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/display/$MixtureContentsDisplaySource" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ModularGuiLineBuilder, $ModularGuiLineBuilder$Type} from "packages/com/simibubi/create/foundation/gui/$ModularGuiLineBuilder"
import {$DisplaySource, $DisplaySource$Type} from "packages/com/simibubi/create/content/redstone/displayLink/source/$DisplaySource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DisplayLinkContext, $DisplayLinkContext$Type} from "packages/com/simibubi/create/content/redstone/displayLink/$DisplayLinkContext"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$DisplayTargetStats, $DisplayTargetStats$Type} from "packages/com/simibubi/create/content/redstone/displayLink/target/$DisplayTargetStats"

export class $MixtureContentsDisplaySource extends $DisplaySource {
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "WHITESPACE": $MutableComponent
 "id": $ResourceLocation

constructor(arg0: boolean)

public "provideText"(arg0: $DisplayLinkContext$Type, arg1: $DisplayTargetStats$Type): $List<($MutableComponent)>
public "getFluidStack"(arg0: $DisplayLinkContext$Type): $FluidStack
public "initConfigurationWidgets"(arg0: $DisplayLinkContext$Type, arg1: $ModularGuiLineBuilder$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixtureContentsDisplaySource$Type = ($MixtureContentsDisplaySource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixtureContentsDisplaySource_ = $MixtureContentsDisplaySource$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Group" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GenericReaction, $GenericReaction$Type} from "packages/com/petrolpark/destroy/chemistry/genericreaction/$GenericReaction"
import {$GroupType, $GroupType$Type} from "packages/com/petrolpark/destroy/chemistry/$GroupType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Group<G extends $Group<(G)>> {
static "groupTypesAndReactions": $Map<($GroupType<(any)>), ($Set<($GenericReaction)>)>

constructor()

public "toString"(): string
public "getType"(): $GroupType<(G)>
public static "getReactionsOfGroupByID"(arg0: $GroupType$Type<(any)>): $Set<($GenericReaction)>
public static "getReactionsOf"(arg0: $Group$Type<(any)>): $Set<($GenericReaction)>
get "type"(): $GroupType<(G)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Group$Type<G> = ($Group<(G)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Group_<G> = $Group$Type<(G)>;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$GeniusFluidTankBehaviour$GeniusTankSegment" {
import {$GeniusFluidTankBehaviour, $GeniusFluidTankBehaviour$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$GeniusFluidTankBehaviour"
import {$SmartFluidTankBehaviour$TankSegment, $SmartFluidTankBehaviour$TankSegment$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/fluid/$SmartFluidTankBehaviour$TankSegment"

export class $GeniusFluidTankBehaviour$GeniusTankSegment extends $SmartFluidTankBehaviour$TankSegment {

constructor(arg0: $GeniusFluidTankBehaviour$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeniusFluidTankBehaviour$GeniusTankSegment$Type = ($GeniusFluidTankBehaviour$GeniusTankSegment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeniusFluidTankBehaviour$GeniusTankSegment_ = $GeniusFluidTankBehaviour$GeniusTankSegment$Type;
}}
declare module "packages/com/petrolpark/destroy/item/tooltip/$IDynamicItemDescription$Modifier" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemDescription$Modifier, $ItemDescription$Modifier$Type} from "packages/com/simibubi/create/foundation/item/$ItemDescription$Modifier"
import {$IDynamicItemDescription, $IDynamicItemDescription$Type} from "packages/com/petrolpark/destroy/item/tooltip/$IDynamicItemDescription"
import {$TooltipModifier, $TooltipModifier$Type} from "packages/com/simibubi/create/foundation/item/$TooltipModifier"
import {$ItemTooltipEvent, $ItemTooltipEvent$Type} from "packages/net/minecraftforge/event/entity/player/$ItemTooltipEvent"

export class $IDynamicItemDescription$Modifier extends $ItemDescription$Modifier {

constructor(arg0: $Item$Type, arg1: $IDynamicItemDescription$Type)

public "modify"(arg0: $ItemTooltipEvent$Type): void
public static "mapNull"(arg0: $TooltipModifier$Type): $TooltipModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicItemDescription$Modifier$Type = ($IDynamicItemDescription$Modifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicItemDescription$Modifier_ = $IDynamicItemDescription$Modifier$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$IItemReactant" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemReactant {

 "getDisplayedItemStacks"(): $List<($ItemStack)>
 "consume"(arg0: $ItemStack$Type): void
 "isCatalyst"(): boolean
 "isItemValid"(arg0: $ItemStack$Type): boolean
}

export namespace $IItemReactant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemReactant$Type = ($IItemReactant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemReactant_ = $IItemReactant$Type;
}}
declare module "packages/com/petrolpark/destroy/mixin/accessor/$AgeableMobAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AgeableMobAccessor {

 "invokeIsBaby"(): boolean

(): boolean
}

export namespace $AgeableMobAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeableMobAccessor$Type = ($AgeableMobAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgeableMobAccessor_ = $AgeableMobAccessor$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$AgingBarrelBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SmartFluidTankBehaviour$TankSegment, $SmartFluidTankBehaviour$TankSegment$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/fluid/$SmartFluidTankBehaviour$TankSegment"
import {$SmartInventory, $SmartInventory$Type} from "packages/com/simibubi/create/foundation/item/$SmartInventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SmartFluidTank, $SmartFluidTank$Type} from "packages/com/simibubi/create/foundation/fluid/$SmartFluidTank"

export class $AgingBarrelBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
 "inventory": $SmartInventory
 "itemCapability": $LazyOptional<($IItemHandlerModifiable)>
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getTank"(): $SmartFluidTank
public "getLuminosity"(): integer
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "tryOpen"(): boolean
public "onTimerChange"(): void
public "checkRecipe"(): void
public "getTankToRender"(): $SmartFluidTankBehaviour$TankSegment
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "tank"(): $SmartFluidTank
get "luminosity"(): integer
get "tankToRender"(): $SmartFluidTankBehaviour$TankSegment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgingBarrelBlockEntity$Type = ($AgingBarrelBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgingBarrelBlockEntity_ = $AgingBarrelBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$CentrifugeBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CentrifugeBlockEntity, $CentrifugeBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$CentrifugeBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ICogWheel, $ICogWheel$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ICogWheel"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CentrifugeBlock extends $KineticBlock implements $IBE<($CentrifugeBlockEntity)>, $ICogWheel {
static readonly "DENSE_OUTPUT_FACE": $DirectionProperty
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

public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getBlockEntityClass"(): $Class<($CentrifugeBlockEntity)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CentrifugeBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CentrifugeBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CentrifugeBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CentrifugeBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public "isDedicatedCogWheel"(): boolean
public "isSmallCog"(): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public "isLargeCog"(): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($CentrifugeBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "dedicatedCogWheel"(): boolean
get "smallCog"(): boolean
get "largeCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CentrifugeBlock$Type = ($CentrifugeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CentrifugeBlock_ = $CentrifugeBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$DynamoBlockEntity" {
import {$ChargingBehaviour$ChargingBehaviourSpecifics, $ChargingBehaviour$ChargingBehaviourSpecifics$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/$ChargingBehaviour$ChargingBehaviourSpecifics"
import {$TransportedItemStack, $TransportedItemStack$Type} from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"
import {$DeferralBehaviour, $DeferralBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/simple/$DeferralBehaviour"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ChargingBehaviour, $ChargingBehaviour$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/$ChargingBehaviour"
import {$BasinOperatingBlockEntity, $BasinOperatingBlockEntity$Type} from "packages/com/simibubi/create/content/processing/basin/$BasinOperatingBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ChargingRecipe, $ChargingRecipe$Type} from "packages/com/petrolpark/destroy/recipe/$ChargingRecipe"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $DynamoBlockEntity extends $BasinOperatingBlockEntity implements $ChargingBehaviour$ChargingBehaviourSpecifics {
 "chargingBehaviour": $ChargingBehaviour
 "soundDuration": integer
 "basinChecker": $DeferralBehaviour
 "basinRemoved": boolean
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tick"(): void
public "onSpeedChanged"(arg0: float): void
public "isRunning"(): boolean
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getKineticSpeed"(): float
public "tryProcessInBasin"(arg0: boolean): boolean
public "canProcessInBulk"(): boolean
public "tryProcessInWorld"(arg0: $ItemEntity$Type, arg1: boolean): boolean
public "tryProcessOnBelt"(arg0: $TransportedItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: boolean): boolean
public "startProcessingBasin"(): void
public "getRedstoneSignal"(): integer
public "onItemCharged"(arg0: $ItemStack$Type): void
public "getChargingRecipe"(arg0: $ItemStack$Type): $Optional<($ChargingRecipe)>
public "getLightningTargetPosition"(): $Vec3
public "onChargingCompleted"(): void
get "running"(): boolean
get "kineticSpeed"(): float
get "redstoneSignal"(): integer
get "lightningTargetPosition"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamoBlockEntity$Type = ($DynamoBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamoBlockEntity_ = $DynamoBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$PrimeableBombBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TntBlock, $TntBlock$Type} from "packages/net/minecraft/world/level/block/$TntBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PrimeableBombBlock$PrimedBombEntityFactory, $PrimeableBombBlock$PrimedBombEntityFactory$Type} from "packages/com/petrolpark/destroy/block/$PrimeableBombBlock$PrimedBombEntityFactory"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PrimeableBombBlock extends $TntBlock {
static readonly "UNSTABLE": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $PrimeableBombBlock$PrimedBombEntityFactory$Type)

public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "onCaughtFire"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $LivingEntity$Type): void
public "getFuseTime"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimeableBombBlock$Type = ($PrimeableBombBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimeableBombBlock_ = $PrimeableBombBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$ChainedCogwheelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ICogWheel, $ICogWheel$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ICogWheel"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractSimpleShaftBlock, $AbstractSimpleShaftBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$AbstractSimpleShaftBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ChainedCogwheelBlock extends $AbstractSimpleShaftBlock implements $ICogWheel {
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


public static "small"(arg0: $BlockBehaviour$Properties$Type): $ChainedCogwheelBlock
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public static "large"(arg0: $BlockBehaviour$Properties$Type): $ChainedCogwheelBlock
public "isLargeCog"(): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "tryPlace"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public "isDedicatedCogWheel"(): boolean
public "isSmallCog"(): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "largeCog"(): boolean
get "blockEntityType"(): $BlockEntityType<(any)>
get "dedicatedCogWheel"(): boolean
get "smallCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChainedCogwheelBlock$Type = ($ChainedCogwheelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChainedCogwheelBlock_ = $ChainedCogwheelBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$PollutometerBlockEntity" {
import {$LevelPollution$PollutionType, $LevelPollution$PollutionType$Type} from "packages/com/petrolpark/destroy/capability/level/pollution/$LevelPollution$PollutionType"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PollutometerBlockEntity extends $SmartBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getPollutionType"(): $LevelPollution$PollutionType
get "pollutionType"(): $LevelPollution$PollutionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutometerBlockEntity$Type = ($PollutometerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutometerBlockEntity_ = $PollutometerBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$DummyDifferentialBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$DirectionalRotatedPillarKineticBlock, $DirectionalRotatedPillarKineticBlock$Type} from "packages/com/petrolpark/destroy/block/$DirectionalRotatedPillarKineticBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DummyDifferentialBlock extends $DirectionalRotatedPillarKineticBlock {
static "POSITIVE_AXIS_DIRECTION": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
/**
 * 
 * @deprecated
 */
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyDifferentialBlock$Type = ($DummyDifferentialBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyDifferentialBlock_ = $DummyDifferentialBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/$RedstoneProgrammerBehaviour" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$ClipboardCloneable, $ClipboardCloneable$Type} from "packages/com/simibubi/create/content/equipment/clipboard/$ClipboardCloneable"
import {$RedstoneProgrammerBehaviour$BehaviourRedstoneProgram, $RedstoneProgrammerBehaviour$BehaviourRedstoneProgram$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/$RedstoneProgrammerBehaviour$BehaviourRedstoneProgram"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"

export class $RedstoneProgrammerBehaviour extends $BlockEntityBehaviour implements $ClipboardCloneable, $MenuProvider {
static "TYPE": $BehaviourType<($RedstoneProgrammerBehaviour)>
 "program": $RedstoneProgrammerBehaviour$BehaviourRedstoneProgram
 "blockEntity": $SmartBlockEntity

constructor(arg0: $SmartBlockEntity$Type, arg1: $BooleanSupplier$Type)

public "initialize"(): void
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getType"(): $BehaviourType<(any)>
public "unload"(): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getDisplayName"(): $Component
public "tick"(): void
public "readFromClipboard"(arg0: $CompoundTag$Type, arg1: $Player$Type, arg2: $Direction$Type, arg3: boolean): boolean
public "getClipboardKey"(): string
public "writeToClipboard"(arg0: $CompoundTag$Type, arg1: $Direction$Type): boolean
public "setProgram"(arg0: $CompoundTag$Type): void
get "type"(): $BehaviourType<(any)>
get "displayName"(): $Component
get "clipboardKey"(): string
set "program"(value: $CompoundTag$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneProgrammerBehaviour$Type = ($RedstoneProgrammerBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneProgrammerBehaviour_ = $RedstoneProgrammerBehaviour$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$ContactExplosiveItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ContactExplosiveItem extends $Item {
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

public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContactExplosiveItem$Type = ($ContactExplosiveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContactExplosiveItem_ = $ContactExplosiveItem$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$PlanetaryGearsetBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$CogWheelBlock, $CogWheelBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$CogWheelBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $PlanetaryGearsetBlock extends $CogWheelBlock {
static readonly "SUPPORT_ONLY": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isLargeCog"(): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "largeCog"(): boolean
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanetaryGearsetBlock$Type = ($PlanetaryGearsetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlanetaryGearsetBlock_ = $PlanetaryGearsetBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$DynamiteBlockEntity" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$ISpecialWhenHovered, $ISpecialWhenHovered$Type} from "packages/com/petrolpark/destroy/block/entity/$ISpecialWhenHovered"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DynamiteBlockEntity extends $SmartBlockEntity implements $ISpecialWhenHovered {
 "excavationAreaUpperCorner": $BlockPos
 "excavationAreaLowerCorner": $BlockPos
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "whenLookedAt"(arg0: $LocalPlayer$Type, arg1: $BlockHitResult$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamiteBlockEntity$Type = ($DynamiteBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamiteBlockEntity_ = $DynamiteBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$IPumpjackStructuralBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IPumpjackStructuralBlock$Component, $IPumpjackStructuralBlock$Component$Type} from "packages/com/petrolpark/destroy/block/$IPumpjackStructuralBlock$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IProxyHoveringInformation, $IProxyHoveringInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IProxyHoveringInformation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPumpjackStructuralBlock extends $IProxyHoveringInformation, $IWrenchable {

 "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
 "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
 "m_5940_"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
 "getInformationSource"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockPos
 "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
 "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
 "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}

export namespace $IPumpjackStructuralBlock {
const COMPONENT: $EnumProperty<($IPumpjackStructuralBlock$Component)>
function tick(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
function updateShape(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type, arg6: $Block$Type): $BlockState
function getMaster(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockPos
function stillValid(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
function onRemove(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
function playerWillDestroy(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPumpjackStructuralBlock$Type = ($IPumpjackStructuralBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPumpjackStructuralBlock_ = $IPumpjackStructuralBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/genericreaction/$GenericReaction" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Reaction, $Reaction$Type} from "packages/com/petrolpark/destroy/chemistry/$Reaction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GenericReaction {
static "GENERIC_REACTIONS": $Set<($GenericReaction)>
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)

public "getExampleReaction"(): $Reaction
public "involvesSingleGroup"(): boolean
get "exampleReaction"(): $Reaction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericReaction$Type = ($GenericReaction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericReaction_ = $GenericReaction$Type;
}}
declare module "packages/com/petrolpark/destroy/mixin/accessor/$VillagerAccessor" {
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"

export interface $VillagerAccessor {

 "invokeGetVillagerData"(): $VillagerData

(): $VillagerData
}

export namespace $VillagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerAccessor$Type = ($VillagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerAccessor_ = $VillagerAccessor$Type;
}}
declare module "packages/com/petrolpark/destroy/util/$RedstoneProgram$PlayMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RedstoneProgram$PlayMode extends $Enum<($RedstoneProgram$PlayMode)> {
static readonly "MANUAL": $RedstoneProgram$PlayMode
static readonly "SWITCH_ON_PULSE": $RedstoneProgram$PlayMode
static readonly "RESTART_ON_PULSE": $RedstoneProgram$PlayMode
static readonly "RESUME_WITH_POWER": $RedstoneProgram$PlayMode
static readonly "RESTART_WITH_POWER": $RedstoneProgram$PlayMode
static readonly "LOOP_WITH_POWER": $RedstoneProgram$PlayMode
static readonly "LOOP": $RedstoneProgram$PlayMode
readonly "pausesWhenFinished": boolean
readonly "powerRequired": boolean
readonly "description": $Component


public static "values"(): ($RedstoneProgram$PlayMode)[]
public static "valueOf"(arg0: string): $RedstoneProgram$PlayMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneProgram$PlayMode$Type = (("resume_with_power") | ("restart_with_power") | ("loop_with_power") | ("loop") | ("switch_on_pulse") | ("manual") | ("restart_on_pulse")) | ($RedstoneProgram$PlayMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneProgram$PlayMode_ = $RedstoneProgram$PlayMode$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$CisplatinSyringeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SyringeItem, $SyringeItem$Type} from "packages/com/petrolpark/destroy/item/$SyringeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CisplatinSyringeItem extends $SyringeItem {
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

public "onInject"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CisplatinSyringeItem$Type = ($CisplatinSyringeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CisplatinSyringeItem_ = $CisplatinSyringeItem$Type;
}}
declare module "packages/com/petrolpark/destroy/effect/$ChemicalPoisonMobEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UncurableMobEffect, $UncurableMobEffect$Type} from "packages/com/petrolpark/destroy/effect/$UncurableMobEffect"

export class $ChemicalPoisonMobEffect extends $UncurableMobEffect {


public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalPoisonMobEffect$Type = ($ChemicalPoisonMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalPoisonMobEffect_ = $ChemicalPoisonMobEffect$Type;
}}
declare module "packages/com/petrolpark/destroy/mixin/accessor/$ItemRendererAccessor" {
import {$ItemColors, $ItemColors$Type} from "packages/net/minecraft/client/color/item/$ItemColors"

export interface $ItemRendererAccessor {

 "getItemColors"(): $ItemColors

(): $ItemColors
}

export namespace $ItemRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$Type = ($ItemRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRendererAccessor_ = $ItemRendererAccessor$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$HeftyBeetrootBlock" {
import {$FullyGrownCropBlock, $FullyGrownCropBlock$Type} from "packages/com/petrolpark/destroy/block/$FullyGrownCropBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $HeftyBeetrootBlock extends $FullyGrownCropBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(any)>)

public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeftyBeetrootBlock$Type = ($HeftyBeetrootBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeftyBeetrootBlock_ = $HeftyBeetrootBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Reaction$ReactionBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Molecule, $Molecule$Type} from "packages/com/petrolpark/destroy/chemistry/$Molecule"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ReactionResult, $ReactionResult$Type} from "packages/com/petrolpark/destroy/chemistry/$ReactionResult"
import {$IItemReactant, $IItemReactant$Type} from "packages/com/petrolpark/destroy/chemistry/$IItemReactant"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Reaction, $Reaction$Type} from "packages/com/petrolpark/destroy/chemistry/$Reaction"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $Reaction$ReactionBuilder {

constructor(arg0: string)

public "addSimpleItemCatalyst"(arg0: $Supplier$Type<($Item$Type)>, arg1: float): $Reaction$ReactionBuilder
public "addSimpleItemReactant"(arg0: $Supplier$Type<($Item$Type)>, arg1: float): $Reaction$ReactionBuilder
public "addSimpleItemTagReactant"(arg0: $TagKey$Type<($Item$Type)>, arg1: float): $Reaction$ReactionBuilder
public "addSimpleItemTagCatalyst"(arg0: $TagKey$Type<($Item$Type)>, arg1: float): $Reaction$ReactionBuilder
public "preexponentialFactor"(arg0: float): $Reaction$ReactionBuilder
public "displayAsReversible"(): $Reaction$ReactionBuilder
public "build"(): $Reaction
public "id"(arg0: string): $Reaction$ReactionBuilder
public "withResult"(arg0: float, arg1: $BiFunction$Type<(float), ($Reaction$Type), ($ReactionResult$Type)>): $Reaction$ReactionBuilder
public "setOrder"(arg0: $Molecule$Type, arg1: integer): $Reaction$ReactionBuilder
public "acid"(arg0: $Molecule$Type, arg1: $Molecule$Type, arg2: float): $Reaction
public "addCatalyst"(arg0: $Molecule$Type, arg1: integer): $Reaction$ReactionBuilder
public "enthalpyChange"(arg0: float): $Reaction$ReactionBuilder
public "addProduct"(arg0: $Molecule$Type): $Reaction$ReactionBuilder
public "addProduct"(arg0: $Molecule$Type, arg1: integer): $Reaction$ReactionBuilder
public "addReactant"(arg0: $Molecule$Type): $Reaction$ReactionBuilder
public "addReactant"(arg0: $Molecule$Type, arg1: integer, arg2: integer): $Reaction$ReactionBuilder
public "addReactant"(arg0: $Molecule$Type, arg1: integer): $Reaction$ReactionBuilder
public "activationEnergy"(arg0: float): $Reaction$ReactionBuilder
public "requireUV"(): $Reaction$ReactionBuilder
public "reverseReaction"(arg0: $Consumer$Type<($Reaction$ReactionBuilder$Type)>): $Reaction$ReactionBuilder
public "dontIncludeInJei"(): $Reaction$ReactionBuilder
public "addItemReactant"(arg0: $IItemReactant$Type, arg1: float): $Reaction$ReactionBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reaction$ReactionBuilder$Type = ($Reaction$ReactionBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reaction$ReactionBuilder_ = $Reaction$ReactionBuilder$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$MoleculeDisplayItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Molecule, $Molecule$Type} from "packages/com/petrolpark/destroy/chemistry/$Molecule"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MoleculeDisplayItem extends $Item {
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

public static "with"(arg0: $Molecule$Type): $ItemStack
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public static "getLore"(arg0: $Molecule$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoleculeDisplayItem$Type = ($MoleculeDisplayItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoleculeDisplayItem_ = $MoleculeDisplayItem$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$VatControllerBlockEntity$VatDisplaySource" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DisplayLinkContext, $DisplayLinkContext$Type} from "packages/com/simibubi/create/content/redstone/displayLink/$DisplayLinkContext"
import {$MixtureContentsDisplaySource, $MixtureContentsDisplaySource$Type} from "packages/com/petrolpark/destroy/block/display/$MixtureContentsDisplaySource"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $VatControllerBlockEntity$VatDisplaySource extends $MixtureContentsDisplaySource {
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "WHITESPACE": $MutableComponent
 "id": $ResourceLocation


public "getName"(): $Component
public "getFluidStack"(arg0: $DisplayLinkContext$Type): $FluidStack
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatControllerBlockEntity$VatDisplaySource$Type = ($VatControllerBlockEntity$VatDisplaySource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatControllerBlockEntity$VatDisplaySource_ = $VatControllerBlockEntity$VatDisplaySource$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$BubbleCapBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$DistillationTower, $DistillationTower$Type} from "packages/com/petrolpark/destroy/util/$DistillationTower"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$IDirectionalOutputFluidBlockEntity, $IDirectionalOutputFluidBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$IDirectionalOutputFluidBlockEntity"
import {$MixtureContentsDisplaySource, $MixtureContentsDisplaySource$Type} from "packages/com/petrolpark/destroy/block/display/$MixtureContentsDisplaySource"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SmartFluidTankBehaviour$TankSegment, $SmartFluidTankBehaviour$TankSegment$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/fluid/$SmartFluidTankBehaviour$TankSegment"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SmartFluidTank, $SmartFluidTank$Type} from "packages/com/simibubi/create/foundation/fluid/$SmartFluidTank"

export class $BubbleCapBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IDirectionalOutputFluidBlockEntity {
 "particleFluid": $FluidStack
static "DISPLAY_SOURCE": $MixtureContentsDisplaySource
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "remove"(): void
public "invalidate"(): void
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getTank"(): $SmartFluidTank
public static "getTankCapacity"(): integer
public "getLuminosity"(): integer
public "spawnParticles"(arg0: $FluidStack$Type): void
public "removeFromDistillationTower"(): void
public "addToDistillationTower"(arg0: $DistillationTower$Type): void
public "getDistillationTower"(): $DistillationTower
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalTank"(): $SmartFluidTank
public static "getTransferRate"(): integer
public "onDistill"(): void
public "setTicksToFill"(arg0: integer): void
public "getTankToRender"(): $SmartFluidTankBehaviour$TankSegment
public "attemptRotation"(arg0: boolean): boolean
public "createOrAddToTower"(arg0: $LevelReader$Type): void
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
public "isTankFull"(arg0: $FluidTank$Type): boolean
public "hasFluidInTank"(arg0: $FluidIngredient$Type, arg1: $FluidTank$Type): boolean
public "canFitFluidInTank"(arg0: $FluidStack$Type, arg1: $FluidTank$Type): boolean
public "refreshDirection"(arg0: $SmartBlockEntity$Type, arg1: $Direction$Type, arg2: $FluidTank$Type, arg3: boolean): $Direction
get "tank"(): $SmartFluidTank
get "tankCapacity"(): integer
get "luminosity"(): integer
get "distillationTower"(): $DistillationTower
get "internalTank"(): $SmartFluidTank
get "transferRate"(): integer
set "ticksToFill"(value: integer)
get "tankToRender"(): $SmartFluidTankBehaviour$TankSegment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleCapBlockEntity$Type = ($BubbleCapBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleCapBlockEntity_ = $BubbleCapBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/mixin/accessor/$BasinOperatingBlockEntityAccessor" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BasinBlockEntity, $BasinBlockEntity$Type} from "packages/com/simibubi/create/content/processing/basin/$BasinBlockEntity"

export interface $BasinOperatingBlockEntityAccessor {

 "invokeGetBasin"(): $Optional<($BasinBlockEntity)>
 "invokeGetRecipeCacheKey"(): any
}

export namespace $BasinOperatingBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasinOperatingBlockEntityAccessor$Type = ($BasinOperatingBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasinOperatingBlockEntityAccessor_ = $BasinOperatingBlockEntityAccessor$Type;
}}
declare module "packages/com/petrolpark/destroy/world/explosion/$SmartExplosion" {
import {$ExplosionDamageCalculator, $ExplosionDamageCalculator$Type} from "packages/net/minecraft/world/level/$ExplosionDamageCalculator"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$SmartExplosion$ExplosionResult, $SmartExplosion$ExplosionResult$Type} from "packages/com/petrolpark/destroy/world/explosion/$SmartExplosion$ExplosionResult"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmartExplosion extends $Explosion {
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

constructor(arg0: $Level$Type, arg1: $Entity$Type, arg2: $DamageSource$Type, arg3: $ExplosionDamageCalculator$Type, arg4: $Vec3$Type, arg5: float, arg6: float)

public "explode"(): void
public "finalizeExplosion"(arg0: boolean): void
public "getRadius"(): float
public "modifyLoot"(arg0: $BlockPos$Type, arg1: $LootParams$Builder$Type): void
public "effects"(arg0: boolean): void
public "explodeBlock"(arg0: $BlockPos$Type): void
public "getExplosionResult"(): $SmartExplosion$ExplosionResult
public "explodeEntity"(arg0: $Entity$Type, arg1: float): void
public "shouldAlwaysDropExperience"(): boolean
public "shouldDoSpecialDrops"(): boolean
get "radius"(): float
get "explosionResult"(): $SmartExplosion$ExplosionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartExplosion$Type = ($SmartExplosion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartExplosion_ = $SmartExplosion$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$CentrifugeBlockEntity$CentrifugeDisplaySource" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DisplayLinkContext, $DisplayLinkContext$Type} from "packages/com/simibubi/create/content/redstone/displayLink/$DisplayLinkContext"
import {$MixtureContentsDisplaySource, $MixtureContentsDisplaySource$Type} from "packages/com/petrolpark/destroy/block/display/$MixtureContentsDisplaySource"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $CentrifugeBlockEntity$CentrifugeDisplaySource extends $MixtureContentsDisplaySource {
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "WHITESPACE": $MutableComponent
 "id": $ResourceLocation


public "getName"(): $Component
public "getFluidStack"(arg0: $DisplayLinkContext$Type): $FluidStack
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CentrifugeBlockEntity$CentrifugeDisplaySource$Type = ($CentrifugeBlockEntity$CentrifugeDisplaySource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CentrifugeBlockEntity$CentrifugeDisplaySource_ = $CentrifugeBlockEntity$CentrifugeDisplaySource$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/serializer/$Node" {
import {$Edge, $Edge$Type} from "packages/com/petrolpark/destroy/chemistry/serializer/$Edge"
import {$Branch, $Branch$Type} from "packages/com/petrolpark/destroy/chemistry/serializer/$Branch"
import {$Bond$BondType, $Bond$BondType$Type} from "packages/com/petrolpark/destroy/chemistry/$Bond$BondType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Atom, $Atom$Type} from "packages/com/petrolpark/destroy/chemistry/$Atom"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Node {
 "visited": boolean

constructor(arg0: $Atom$Type)

public "addEdge"(arg0: $Edge$Type): $Node
public "serialize"(): string
public "getEdges"(): $List<($Edge)>
public "getAtom"(): $Atom
public "addSideBranch"(arg0: $Branch$Type, arg1: $Bond$BondType$Type): $Node
public "getSideBranches"(): $Map<($Branch), ($Bond$BondType)>
public "deleteEdge"(arg0: $Edge$Type): $Node
public "setBranch"(arg0: $Branch$Type): $Node
public "getBranch"(): $Branch
public "getOrderedSideBranches"(): $List<($Map$Entry<($Branch), ($Bond$BondType)>)>
get "edges"(): $List<($Edge)>
get "atom"(): $Atom
get "sideBranches"(): $Map<($Branch), ($Bond$BondType)>
set "branch"(value: $Branch$Type)
get "branch"(): $Branch
get "orderedSideBranches"(): $List<($Map$Entry<($Branch), ($Bond$BondType)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Node$Type = ($Node);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Node_ = $Node$Type;
}}
declare module "packages/com/petrolpark/destroy/fluid/$MixtureFluid$MixtureFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$AllFluids$TintedFluidType, $AllFluids$TintedFluidType$Type} from "packages/com/simibubi/create/$AllFluids$TintedFluidType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MixtureFluid$MixtureFluidType extends $AllFluids$TintedFluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type)

public "getDescription"(arg0: $FluidStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixtureFluid$MixtureFluidType$Type = ($MixtureFluid$MixtureFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixtureFluid$MixtureFluidType_ = $MixtureFluid$MixtureFluidType$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$ISpecialWhenHovered" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"

export interface $ISpecialWhenHovered {

 "whenLookedAt"(arg0: $LocalPlayer$Type, arg1: $BlockHitResult$Type): void

(arg0: $LocalPlayer$Type, arg1: $BlockHitResult$Type): void
}

export namespace $ISpecialWhenHovered {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialWhenHovered$Type = ($ISpecialWhenHovered);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpecialWhenHovered_ = $ISpecialWhenHovered$Type;
}}
declare module "packages/com/petrolpark/destroy/world/explosion/$SmartExplosion$ExplosionResult" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SmartExplosion$ExplosionResult extends $Record {

constructor(blocksToDestroy: $Collection$Type<($BlockPos$Type)>, entities: $Map$Type<($Entity$Type), (float)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "entities"(): $Map<($Entity), (float)>
public "blocksToDestroy"(): $Collection<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartExplosion$ExplosionResult$Type = ($SmartExplosion$ExplosionResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartExplosion$ExplosionResult_ = $SmartExplosion$ExplosionResult$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$SandCastleBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SandCastleBlockEntity, $SandCastleBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$SandCastleBlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SandCastleBlock$Material, $SandCastleBlock$Material$Type} from "packages/com/petrolpark/destroy/block/$SandCastleBlock$Material"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SandCastleBlock extends $Block implements $IBE<($SandCastleBlockEntity)> {
static readonly "MATERIAL": $EnumProperty<($SandCastleBlock$Material)>
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

public static "setOwner"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type): void
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getBlockEntityClass"(): $Class<($SandCastleBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $SandCastleBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($SandCastleBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($SandCastleBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($SandCastleBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($SandCastleBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandCastleBlock$Type = ($SandCastleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandCastleBlock_ = $SandCastleBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/effect/$CryingMobEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$DestroyMobEffect, $DestroyMobEffect$Type} from "packages/com/petrolpark/destroy/effect/$DestroyMobEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CryingMobEffect extends $DestroyMobEffect {


public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CryingMobEffect$Type = ($CryingMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CryingMobEffect_ = $CryingMobEffect$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$HazmatSuitArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$BaseArmorItem, $BaseArmorItem$Type} from "packages/com/simibubi/create/content/equipment/armor/$BaseArmorItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HazmatSuitArmorItem extends $BaseArmorItem {
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

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HazmatSuitArmorItem$Type = ($HazmatSuitArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HazmatSuitArmorItem_ = $HazmatSuitArmorItem$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Atom" {
import {$PartialModel, $PartialModel$Type} from "packages/com/jozufozu/flywheel/core/$PartialModel"
import {$Element, $Element$Type} from "packages/com/petrolpark/destroy/chemistry/$Element"

export class $Atom {
 "rGroupNumber": integer

constructor(arg0: $Element$Type)

public "getElement"(): $Element
public "getPartial"(): $PartialModel
public "isHydrogen"(): boolean
get "element"(): $Element
get "partial"(): $PartialModel
get "hydrogen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Atom$Type = ($Atom);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Atom_ = $Atom$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$VatControllerBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VatFluidTankBehaviour$VatTankSegment$VatFluidTank, $VatFluidTankBehaviour$VatTankSegment$VatFluidTank$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$VatFluidTankBehaviour$VatTankSegment$VatFluidTank"
import {$ISpecialWhenHovered, $ISpecialWhenHovered$Type} from "packages/com/petrolpark/destroy/block/entity/$ISpecialWhenHovered"
import {$ReadOnlyMixture, $ReadOnlyMixture$Type} from "packages/com/petrolpark/destroy/chemistry/$ReadOnlyMixture"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$SmartInventory, $SmartInventory$Type} from "packages/com/simibubi/create/foundation/item/$SmartInventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$VatSideBlockEntity, $VatSideBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$VatSideBlockEntity"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$SmartExplosion, $SmartExplosion$Type} from "packages/com/petrolpark/destroy/world/explosion/$SmartExplosion"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$VatControllerBlockEntity$VatDisplaySource, $VatControllerBlockEntity$VatDisplaySource$Type} from "packages/com/petrolpark/destroy/block/entity/$VatControllerBlockEntity$VatDisplaySource"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Vat, $Vat$Type} from "packages/com/petrolpark/destroy/util/vat/$Vat"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $VatControllerBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $ISpecialWhenHovered {
static readonly "AIR_PRESSURE": float
 "inventory": $SmartInventory
static readonly "GAS_DISPLAY_SOURCE": $VatControllerBlockEntity$VatDisplaySource
static readonly "SOLUTION_DISPLAY_SOURCE": $VatControllerBlockEntity$VatDisplaySource
static readonly "ALL_DISPLAY_SOURCE": $VatControllerBlockEntity$VatDisplaySource
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "destroy"(): void
public "getCapacity"(): integer
public "tick"(): void
public "getTemperature"(): float
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "addFluid"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "explode"(arg0: $BiFunction$Type<($Level$Type), ($Vec3$Type), ($SmartExplosion$Type)>): void
public "explode"(): void
public "setInventoryChanged"(): void
public "updateCachedMixture"(): void
public "getPercentagePressure"(): float
public "getClientTemperature"(arg0: float): float
public "getRenderedFluidLevel"(arg0: float): float
public "invalidateCaps"(): void
public "getFluidLevel"(): float
public "getVatOptional"(): $Optional<($Vat)>
public "tryMakeVat"(): boolean
public "wholeVatAABB"(): $AABB
public static "getSimulationLevel"(): integer
public "getGasTank"(): $VatFluidTankBehaviour$VatTankSegment$VatFluidTank
public "getLiquidTank"(): $VatFluidTankBehaviour$VatTankSegment$VatFluidTank
public "getOpenVent"(): $VatSideBlockEntity
public "getPressure"(): float
public "canFitFluid"(): boolean
public "deleteVat"(arg0: $BlockPos$Type): void
public "changeHeatingPower"(arg0: float): void
public "removeVent"(): void
public "changeUVPower"(arg0: float): void
public "updateGasVolume"(): void
public "getClientPressure"(arg0: float): float
public static "vatFluidTooltip"(arg0: $VatControllerBlockEntity$Type, arg1: $List$Type<($Component$Type)>): void
public "whenLookedAt"(arg0: $LocalPlayer$Type, arg1: $BlockHitResult$Type): void
public "getCombinedReadOnlyMixture"(): $ReadOnlyMixture
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "capacity"(): integer
get "temperature"(): float
get "percentagePressure"(): float
get "fluidLevel"(): float
get "vatOptional"(): $Optional<($Vat)>
get "simulationLevel"(): integer
get "gasTank"(): $VatFluidTankBehaviour$VatTankSegment$VatFluidTank
get "liquidTank"(): $VatFluidTankBehaviour$VatTankSegment$VatFluidTank
get "openVent"(): $VatSideBlockEntity
get "pressure"(): float
get "combinedReadOnlyMixture"(): $ReadOnlyMixture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatControllerBlockEntity$Type = ($VatControllerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatControllerBlockEntity_ = $VatControllerBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$PumpjackStructuralBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IPumpjackStructuralBlock, $IPumpjackStructuralBlock$Type} from "packages/com/petrolpark/destroy/block/$IPumpjackStructuralBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $PumpjackStructuralBlock extends $DirectionalBlock implements $IPumpjackStructuralBlock {
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


public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type, arg6: $Block$Type): $BlockState
public static "getMaster"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockPos
public static "stillValid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getInformationSource"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockPos
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpjackStructuralBlock$Type = ($PumpjackStructuralBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpjackStructuralBlock_ = $PumpjackStructuralBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$AgingBarrelBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ITransformableBlock, $ITransformableBlock$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$AgingBarrelBlockEntity, $AgingBarrelBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$AgingBarrelBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AgingBarrelBlock extends $HorizontalDirectionalBlock implements $IBE<($AgingBarrelBlockEntity)>, $IWrenchable, $ITransformableBlock {
static readonly "IS_OPEN": $BooleanProperty
static readonly "PROGRESS": $IntegerProperty
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

public "transform"(arg0: $BlockState$Type, arg1: $StructureTransform$Type): $BlockState
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "updateEntityAfterFallOn"(arg0: $BlockGetter$Type, arg1: $Entity$Type): void
public "getBlockEntityClass"(): $Class<($AgingBarrelBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AgingBarrelBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AgingBarrelBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AgingBarrelBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AgingBarrelBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($AgingBarrelBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgingBarrelBlock$Type = ($AgingBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgingBarrelBlock_ = $AgingBarrelBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$SyringeItem" {
import {$CustomUseEffectsItem, $CustomUseEffectsItem$Type} from "packages/com/simibubi/create/foundation/item/$CustomUseEffectsItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SyringeItem extends $Item implements $CustomUseEffectsItem {
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

public "shouldTriggerUseEffects"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "triggerUseEffects"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer, arg3: $RandomSource$Type): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onInject"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeItem$Type = ($SyringeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyringeItem_ = $SyringeItem$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$HyperaccumulatingFertilizerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$BoneMealItem, $BoneMealItem$Type} from "packages/net/minecraft/world/item/$BoneMealItem"

export class $HyperaccumulatingFertilizerItem extends $BoneMealItem {
static readonly "GRASS_SPREAD_WIDTH": integer
static readonly "GRASS_SPREAD_HEIGHT": integer
static readonly "GRASS_COUNT_MULTIPLIER": integer
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HyperaccumulatingFertilizerItem$Type = ($HyperaccumulatingFertilizerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HyperaccumulatingFertilizerItem_ = $HyperaccumulatingFertilizerItem$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$GasMaskItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GasMaskItem extends $Item implements $Equipable {
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

public "getEquipmentSlot"(): $EquipmentSlot
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "swapWithEquipmentSlot"(arg0: $Item$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "get"(arg0: $ItemStack$Type): $Equipable
public "getEquipSound"(): $SoundEvent
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasMaskItem$Type = ($GasMaskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasMaskItem_ = $GasMaskItem$Type;
}}
declare module "packages/com/petrolpark/destroy/recipe/$ChargingRecipe" {
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IAssemblyRecipe, $IAssemblyRecipe$Type} from "packages/com/simibubi/create/content/processing/sequenced/$IAssemblyRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ProcessingRecipeBuilder$ProcessingRecipeParams, $ProcessingRecipeBuilder$ProcessingRecipeParams$Type} from "packages/com/simibubi/create/content/processing/recipe/$ProcessingRecipeBuilder$ProcessingRecipeParams"
import {$SequencedAssemblySubCategory, $SequencedAssemblySubCategory$Type} from "packages/com/simibubi/create/compat/jei/category/sequencedAssembly/$SequencedAssemblySubCategory"
import {$ProcessingRecipe, $ProcessingRecipe$Type} from "packages/com/simibubi/create/content/processing/recipe/$ProcessingRecipe"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $ChargingRecipe extends $ProcessingRecipe<($RecipeWrapper)> implements $IAssemblyRecipe {

constructor(arg0: $ProcessingRecipeBuilder$ProcessingRecipeParams$Type)

public "matches"(arg0: $RecipeWrapper$Type, arg1: $Level$Type): boolean
public "addRequiredMachines"(arg0: $Set$Type<($ItemLike$Type)>): void
public "addAssemblyIngredients"(arg0: $List$Type<($Ingredient$Type)>): void
public "getDescriptionForAssembly"(): $Component
public "getJEISubCategory"(): $Supplier<($Supplier<($SequencedAssemblySubCategory)>)>
public "addAssemblyFluidIngredients"(arg0: $List$Type<($FluidIngredient$Type)>): void
public "supportsAssembly"(): boolean
get "descriptionForAssembly"(): $Component
get "jEISubCategory"(): $Supplier<($Supplier<($SequencedAssemblySubCategory)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingRecipe$Type = ($ChargingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingRecipe_ = $ChargingRecipe$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$ReadOnlyMixture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Molecule, $Molecule$Type} from "packages/com/petrolpark/destroy/chemistry/$Molecule"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DecimalFormat, $DecimalFormat$Type} from "packages/java/text/$DecimalFormat"

export class $ReadOnlyMixture {
static readonly "IMPURITY_THRESHOLD": float

constructor()

public "getName"(): $Component
public "isEmpty"(): boolean
public "setTranslationKey"(arg0: string): void
public "getContents"(arg0: boolean): $List<($Molecule)>
public "getTemperature"(): float
public "writeNBT"(): $CompoundTag
public static "readNBT"<T extends $ReadOnlyMixture>(arg0: $Supplier$Type<(T)>, arg1: $CompoundTag$Type): T
public "getColor"(): integer
public "getTotalConcentration"(): float
public "getContentsTooltip"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: integer, arg4: $DecimalFormat$Type): $List<($Component)>
public "getConcentrationOf"(arg0: $Molecule$Type): float
public "addMolecule"(arg0: $Molecule$Type, arg1: float): $ReadOnlyMixture
public "hasUsableMolecule"(arg0: $Molecule$Type, arg1: float, arg2: float, arg3: $Predicate$Type<($Molecule$Type)>): boolean
public "hasUsableMolecules"(arg0: $Predicate$Type<($Molecule$Type)>, arg1: float, arg2: float, arg3: $Predicate$Type<($Molecule$Type)>): boolean
public "getContentsString"(): string
get "name"(): $Component
get "empty"(): boolean
set "translationKey"(value: string)
get "temperature"(): float
get "color"(): integer
get "totalConcentration"(): float
get "contentsString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadOnlyMixture$Type = ($ReadOnlyMixture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReadOnlyMixture_ = $ReadOnlyMixture$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$FullyGrownCropBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $FullyGrownCropBlock extends $BushBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(any)>)

public "asItem"(): $Item
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FullyGrownCropBlock$Type = ($FullyGrownCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FullyGrownCropBlock_ = $FullyGrownCropBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$VatFluidTankBehaviour" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$VatFluidTankBehaviour$VatTankSegment$VatFluidTank, $VatFluidTankBehaviour$VatTankSegment$VatFluidTank$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$VatFluidTankBehaviour$VatTankSegment$VatFluidTank"
import {$SmartFluidTankBehaviour, $SmartFluidTankBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/fluid/$SmartFluidTankBehaviour"
import {$ReadOnlyMixture, $ReadOnlyMixture$Type} from "packages/com/petrolpark/destroy/chemistry/$ReadOnlyMixture"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$VatFluidTankBehaviour$VatTankSegment, $VatFluidTankBehaviour$VatTankSegment$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$VatFluidTankBehaviour$VatTankSegment"
import {$Mixture, $Mixture$Type} from "packages/com/petrolpark/destroy/chemistry/$Mixture"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$GeniusFluidTankBehaviour, $GeniusFluidTankBehaviour$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$GeniusFluidTankBehaviour"
import {$SmartFluidTankBehaviour$TankSegment, $SmartFluidTankBehaviour$TankSegment$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/fluid/$SmartFluidTankBehaviour$TankSegment"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import {$SmartFluidTank, $SmartFluidTank$Type} from "packages/com/simibubi/create/foundation/fluid/$SmartFluidTank"

export class $VatFluidTankBehaviour extends $GeniusFluidTankBehaviour {
static readonly "TYPE": $BehaviourType<($SmartFluidTankBehaviour)>
static readonly "INPUT": $BehaviourType<($SmartFluidTankBehaviour)>
static readonly "OUTPUT": $BehaviourType<($SmartFluidTankBehaviour)>
 "blockEntity": $SmartBlockEntity

constructor(arg0: $SmartBlockEntity$Type, arg1: integer)

public "flush"(arg0: float): $FluidStack
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "isFull"(): boolean
/**
 * 
 * @deprecated
 */
public "getPrimaryHandler"(): $SmartFluidTank
/**
 * 
 * @deprecated
 */
public "getPrimaryTank"(): $SmartFluidTankBehaviour$TankSegment
public "getGasTank"(): $VatFluidTankBehaviour$VatTankSegment
public "getLiquidTank"(): $VatFluidTankBehaviour$VatTankSegment
public "getLiquidHandler"(): $VatFluidTankBehaviour$VatTankSegment$VatFluidTank
public "setVatCapacity"(arg0: integer): void
public "getGasHandler"(): $VatFluidTankBehaviour$VatTankSegment$VatFluidTank
public "getCombinedMixture"(): $Mixture
public "setMixture"(arg0: $Mixture$Type, arg1: integer): void
public "updateGasVolume"(): void
public "getCombinedReadOnlyMixture"(): $ReadOnlyMixture
get "full"(): boolean
get "primaryHandler"(): $SmartFluidTank
get "primaryTank"(): $SmartFluidTankBehaviour$TankSegment
get "gasTank"(): $VatFluidTankBehaviour$VatTankSegment
get "liquidTank"(): $VatFluidTankBehaviour$VatTankSegment
get "liquidHandler"(): $VatFluidTankBehaviour$VatTankSegment$VatFluidTank
set "vatCapacity"(value: integer)
get "gasHandler"(): $VatFluidTankBehaviour$VatTankSegment$VatFluidTank
get "combinedMixture"(): $Mixture
get "combinedReadOnlyMixture"(): $ReadOnlyMixture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatFluidTankBehaviour$Type = ($VatFluidTankBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatFluidTankBehaviour_ = $VatFluidTankBehaviour$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$CentrifugeBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$CentrifugeBlockEntity$CentrifugeDisplaySource, $CentrifugeBlockEntity$CentrifugeDisplaySource$Type} from "packages/com/petrolpark/destroy/block/entity/$CentrifugeBlockEntity$CentrifugeDisplaySource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$IDirectionalOutputFluidBlockEntity, $IDirectionalOutputFluidBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$IDirectionalOutputFluidBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SmartFluidTank, $SmartFluidTank$Type} from "packages/com/simibubi/create/foundation/fluid/$SmartFluidTank"

export class $CentrifugeBlockEntity extends $KineticBlockEntity implements $IDirectionalOutputFluidBlockEntity {
 "timer": integer
static "INPUT_DISPLAY_SOURCE": $CentrifugeBlockEntity$CentrifugeDisplaySource
static "DENSE_OUTPUT_DISPLAY_SOURCE": $CentrifugeBlockEntity$CentrifugeDisplaySource
static "LIGHT_OUTPIT_DISPLAY_SOURCE": $CentrifugeBlockEntity$CentrifugeDisplaySource
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "process"(): void
public "invalidate"(): void
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getInputTank"(): $SmartFluidTank
public "spawnParticles"(): void
public "getEachTankCapacity"(): integer
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getDenseOutputTank"(): $SmartFluidTank
public "getLightOutputTank"(): $SmartFluidTank
public "setPondering"(): void
public "attemptRotation"(arg0: boolean): boolean
public "getProcessingSpeed"(): integer
public "isTankFull"(arg0: $FluidTank$Type): boolean
public "hasFluidInTank"(arg0: $FluidIngredient$Type, arg1: $FluidTank$Type): boolean
public "canFitFluidInTank"(arg0: $FluidStack$Type, arg1: $FluidTank$Type): boolean
public "refreshDirection"(arg0: $SmartBlockEntity$Type, arg1: $Direction$Type, arg2: $FluidTank$Type, arg3: boolean): $Direction
get "inputTank"(): $SmartFluidTank
get "eachTankCapacity"(): integer
get "denseOutputTank"(): $SmartFluidTank
get "lightOutputTank"(): $SmartFluidTank
get "processingSpeed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CentrifugeBlockEntity$Type = ($CentrifugeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CentrifugeBlockEntity_ = $CentrifugeBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$SprayBottleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SprayBottleItem extends $Item {
readonly "effects": ($MobEffectInstance)[]
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, ...arg1: ($MobEffectInstance$Type)[])

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "spawnEffectCloud"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprayBottleItem$Type = ($SprayBottleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprayBottleItem_ = $SprayBottleItem$Type;
}}
declare module "packages/com/petrolpark/destroy/effect/$BabyBlueWithdrawalMobEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UncurableMobEffect, $UncurableMobEffect$Type} from "packages/com/petrolpark/destroy/effect/$UncurableMobEffect"

export class $BabyBlueWithdrawalMobEffect extends $UncurableMobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BabyBlueWithdrawalMobEffect$Type = ($BabyBlueWithdrawalMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BabyBlueWithdrawalMobEffect_ = $BabyBlueWithdrawalMobEffect$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Formula" {
import {$Formula$Topology$SideChainInformation, $Formula$Topology$SideChainInformation$Type} from "packages/com/petrolpark/destroy/chemistry/$Formula$Topology$SideChainInformation"
import {$Branch, $Branch$Type} from "packages/com/petrolpark/destroy/chemistry/serializer/$Branch"
import {$Bond$BondType, $Bond$BondType$Type} from "packages/com/petrolpark/destroy/chemistry/$Bond$BondType"
import {$Atom, $Atom$Type} from "packages/com/petrolpark/destroy/chemistry/$Atom"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Element, $Element$Type} from "packages/com/petrolpark/destroy/chemistry/$Element"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$Bond, $Bond$Type} from "packages/com/petrolpark/destroy/chemistry/$Bond"
import {$Group, $Group$Type} from "packages/com/petrolpark/destroy/chemistry/$Group"

export class $Formula implements $Cloneable {

constructor(arg0: $Atom$Type)

public "getCarbocationStability"(arg0: $Atom$Type, arg1: boolean): float
public "getCyclicAtomsForRendering"(): $List<($Pair<($Vec3), ($Atom)>)>
public "getSideChainsForRendering"(): $List<($Pair<($Formula$Topology$SideChainInformation), ($Branch)>)>
public "getBondedAtomsOfElement"(arg0: $Element$Type): $List<($Atom)>
public "getCyclicBondsForRendering"(): $List<($Bond)>
public "updateSideChainStructures"(): void
public "refreshFunctionalGroups"(): $Formula
public "remove"(arg0: $Atom$Type): $Formula
public "replace"(arg0: $Atom$Type, arg1: $Atom$Type): $Formula
public static "atom"(arg0: $Element$Type): $Formula
public static "deserialize"(arg0: string): $Formula
public "isCyclic"(): boolean
public "serialize"(): string
public "shallowCopy"(): $Formula
public "getFunctionalGroups"(): $List<($Group<(any)>)>
public "moveTo"(arg0: $Atom$Type): $Formula
public static "alcohol"(): $Formula
public "addGroup"(arg0: $Formula$Type, arg1: boolean): $Formula
public "addGroup"(arg0: $Formula$Type, arg1: boolean, arg2: $Bond$BondType$Type): $Formula
public "addGroup"(arg0: $Formula$Type): $Formula
public static "joinFormulae"(arg0: $Formula$Type, arg1: $Formula$Type, arg2: $Bond$BondType$Type): $Formula
/**
 * 
 * @deprecated
 */
public "addGroupToPosition"(arg0: $Formula$Type, arg1: integer): $Formula
/**
 * 
 * @deprecated
 */
public "addGroupToPosition"(arg0: $Formula$Type, arg1: integer, arg2: $Bond$BondType$Type): $Formula
public "setStartingAtom"(arg0: $Atom$Type): $Formula
public static "carbonChain"(arg0: integer): $Formula
public "addAtom"(arg0: $Atom$Type): $Formula
public "addAtom"(arg0: $Atom$Type, arg1: $Bond$BondType$Type): $Formula
public "addAtom"(arg0: $Element$Type): $Formula
public "addAtom"(arg0: $Element$Type, arg1: $Bond$BondType$Type): $Formula
public "replaceBondTo"(arg0: $Atom$Type, arg1: $Bond$BondType$Type): $Formula
public "getAllAtoms"(): $Set<($Atom)>
public "getTotalBonds"(arg0: $List$Type<($Bond$Type)>): double
public "addAllHydrogens"(): $Formula
public "addCarbonyl"(): $Formula
public "getRenderBranch"(): $Branch
get "cyclicAtomsForRendering"(): $List<($Pair<($Vec3), ($Atom)>)>
get "sideChainsForRendering"(): $List<($Pair<($Formula$Topology$SideChainInformation), ($Branch)>)>
get "cyclicBondsForRendering"(): $List<($Bond)>
get "cyclic"(): boolean
get "functionalGroups"(): $List<($Group<(any)>)>
set "startingAtom"(value: $Atom$Type)
get "allAtoms"(): $Set<($Atom)>
get "renderBranch"(): $Branch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Formula$Type = ($Formula);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Formula_ = $Formula$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$CoolerBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$CoolerBlockEntity$ColdnessLevel, $CoolerBlockEntity$ColdnessLevel$Type} from "packages/com/petrolpark/destroy/block/entity/$CoolerBlockEntity$ColdnessLevel"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SmartFluidTank, $SmartFluidTank$Type} from "packages/com/simibubi/create/foundation/fluid/$SmartFluidTank"

export class $CoolerBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
static readonly "MAX_COOLING_TICKS": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "invalidate"(): void
public "getHeadAnimation"(): $LerpedFloat
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getInputTank"(): $SmartFluidTank
public "getHeadAngle"(): $LerpedFloat
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "updateHeatLevel"(arg0: $CoolerBlockEntity$ColdnessLevel$Type): void
public "setColdnessOfBlock"(arg0: $CoolerBlockEntity$ColdnessLevel$Type): void
public "getColdnessFromBlock"(): $CoolerBlockEntity$ColdnessLevel
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "headAnimation"(): $LerpedFloat
get "inputTank"(): $SmartFluidTank
get "headAngle"(): $LerpedFloat
set "coldnessOfBlock"(value: $CoolerBlockEntity$ColdnessLevel$Type)
get "coldnessFromBlock"(): $CoolerBlockEntity$ColdnessLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoolerBlockEntity$Type = ($CoolerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoolerBlockEntity_ = $CoolerBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$SwissArmyKnifeItem$Tool" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SwissArmyKnifeItem$Tool extends $Enum<($SwissArmyKnifeItem$Tool)> {
static readonly "PICKAXE": $SwissArmyKnifeItem$Tool
static readonly "AXE": $SwissArmyKnifeItem$Tool
static readonly "SHOVEL": $SwissArmyKnifeItem$Tool
static readonly "HOE": $SwissArmyKnifeItem$Tool
static readonly "SHEARS": $SwissArmyKnifeItem$Tool
static "ALL_RETRACTED": $Map<($SwissArmyKnifeItem$Tool), ($LerpedFloat)>
readonly "actions": $Set<($ToolAction)>
readonly "exampleTool": $Supplier<($ItemStack)>


public static "values"(): ($SwissArmyKnifeItem$Tool)[]
public static "valueOf"(arg0: string): $SwissArmyKnifeItem$Tool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwissArmyKnifeItem$Tool$Type = (("shears") | ("pickaxe") | ("shovel") | ("axe") | ("hoe")) | ($SwissArmyKnifeItem$Tool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwissArmyKnifeItem$Tool_ = $SwissArmyKnifeItem$Tool$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$BabyBlueSyringeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SyringeItem, $SyringeItem$Type} from "packages/com/petrolpark/destroy/item/$SyringeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BabyBlueSyringeItem extends $SyringeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: integer, arg2: integer)

public "onInject"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BabyBlueSyringeItem$Type = ($BabyBlueSyringeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BabyBlueSyringeItem_ = $BabyBlueSyringeItem$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$ChorusWineItem" {
import {$AlcoholicDrinkItem, $AlcoholicDrinkItem$Type} from "packages/com/petrolpark/destroy/item/$AlcoholicDrinkItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IDynamicItemDescription, $IDynamicItemDescription$Type} from "packages/com/petrolpark/destroy/item/tooltip/$IDynamicItemDescription"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IDynamicItemDescription$Modifier, $IDynamicItemDescription$Modifier$Type} from "packages/com/petrolpark/destroy/item/tooltip/$IDynamicItemDescription$Modifier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemDescription, $ItemDescription$Type} from "packages/com/simibubi/create/foundation/item/$ItemDescription"
import {$TooltipHelper$Palette, $TooltipHelper$Palette$Type} from "packages/com/simibubi/create/foundation/item/$TooltipHelper$Palette"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChorusWineItem extends $AlcoholicDrinkItem implements $IDynamicItemDescription {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getPalette"(): $TooltipHelper$Palette
public "getItemDescription"(): $ItemDescription
public static "create"(arg0: $Item$Type): $IDynamicItemDescription$Modifier
get "palette"(): $TooltipHelper$Palette
get "itemDescription"(): $ItemDescription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChorusWineItem$Type = ($ChorusWineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChorusWineItem_ = $ChorusWineItem$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$PollutometerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PollutometerBlockEntity, $PollutometerBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$PollutometerBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PollutometerBlock extends $Block implements $IBE<($PollutometerBlockEntity)> {
static readonly "DIRECTION": $DirectionProperty
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

public "getBlockEntityClass"(): $Class<($PollutometerBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PollutometerBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($PollutometerBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($PollutometerBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($PollutometerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($PollutometerBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutometerBlock$Type = ($PollutometerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutometerBlock_ = $PollutometerBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$VatControllerBlock" {
import {$VatControllerBlockEntity, $VatControllerBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$VatControllerBlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $VatControllerBlock extends $HorizontalDirectionalBlock implements $IBE<($VatControllerBlockEntity)> {
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

public "getBlockEntityClass"(): $Class<($VatControllerBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VatControllerBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($VatControllerBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($VatControllerBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($VatControllerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($VatControllerBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatControllerBlock$Type = ($VatControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatControllerBlock_ = $VatControllerBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$VatSideBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CopycatBlock, $CopycatBlock$Type} from "packages/com/simibubi/create/content/decoration/copycat/$CopycatBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ISpecialBlockItemRequirement, $ISpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ISpecialBlockItemRequirement"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $VatSideBlock extends $CopycatBlock implements $ISpecialBlockItemRequirement {
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
public "canFaceBeOccluded"(arg0: $BlockState$Type, arg1: $Direction$Type): boolean
public "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $Direction$Type): boolean
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatSideBlock$Type = ($VatSideBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatSideBlock_ = $VatSideBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$KeypunchBlockEntity" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $KeypunchBlockEntity extends $KineticBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypunchBlockEntity$Type = ($KeypunchBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypunchBlockEntity_ = $KeypunchBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$PumpjackBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SmartFluidTankBehaviour, $SmartFluidTankBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/fluid/$SmartFluidTankBehaviour"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$PumpjackCamBlockEntity, $PumpjackCamBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$PumpjackCamBlockEntity"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PumpjackBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
 "tank": $SmartFluidTankBehaviour
 "source": $WeakReference<($PumpjackCamBlockEntity)>
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getTargetAngle"(): float
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCam"(): $PumpjackCamBlockEntity
public "playClientSound"(): void
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "targetAngle"(): float
get "cam"(): $PumpjackCamBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpjackBlockEntity$Type = ($PumpjackBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpjackBlockEntity_ = $PumpjackBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/effect/$BabyBlueHighMobEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UncurableMobEffect, $UncurableMobEffect$Type} from "packages/com/petrolpark/destroy/effect/$UncurableMobEffect"

export class $BabyBlueHighMobEffect extends $UncurableMobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BabyBlueHighMobEffect$Type = ($BabyBlueHighMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BabyBlueHighMobEffect_ = $BabyBlueHighMobEffect$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$SwissArmyKnifeItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SwissArmyKnifeItem$Tool, $SwissArmyKnifeItem$Tool$Type} from "packages/com/petrolpark/destroy/item/$SwissArmyKnifeItem$Tool"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SwissArmyKnifeItem extends $DiggerItem {
static "selectedTool": $SwissArmyKnifeItem$Tool
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: float, arg1: float, arg2: $Tier$Type, arg3: $Item$Properties$Type)

public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public static "getTool"(arg0: $ItemStack$Type): $SwissArmyKnifeItem$Tool
public static "getTool"(arg0: $Level$Type, arg1: $HitResult$Type, arg2: boolean): $SwissArmyKnifeItem$Tool
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public static "clientPlayerTick"(): void
public "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "getChasers"(arg0: $ItemStack$Type): $Map<($SwissArmyKnifeItem$Tool), ($LerpedFloat)>
public static "putChasers"(arg0: $ItemStack$Type, arg1: $Map$Type<($SwissArmyKnifeItem$Tool$Type), ($LerpedFloat$Type)>): void
public static "putTool"(arg0: $ItemStack$Type, arg1: $SwissArmyKnifeItem$Tool$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwissArmyKnifeItem$Type = ($SwissArmyKnifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwissArmyKnifeItem_ = $SwissArmyKnifeItem$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/serializer/$Branch" {
import {$Bond$BondType, $Bond$BondType$Type} from "packages/com/petrolpark/destroy/chemistry/$Bond$BondType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Atom, $Atom$Type} from "packages/com/petrolpark/destroy/chemistry/$Atom"
import {$Node, $Node$Type} from "packages/com/petrolpark/destroy/chemistry/serializer/$Node"

export class $Branch {

constructor(arg0: $Node$Type)

public "getMassOfLongestChain"(): float
public "add"(arg0: $Node$Type, arg1: $Bond$BondType$Type): $Branch
public "add"(arg0: $Branch$Type, arg1: $Bond$BondType$Type): $Branch
public "flip"(): $Branch
public "serialize"(): string
public "getNodes"(): $List<($Node)>
public static "getMassForComparisonInSerialization"(arg0: $Atom$Type): float
public "getMass"(): float
public "getStartNode"(): $Node
public "getEndNode"(): $Node
get "massOfLongestChain"(): float
get "nodes"(): $List<($Node)>
get "mass"(): float
get "startNode"(): $Node
get "endNode"(): $Node
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Branch$Type = ($Branch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Branch_ = $Branch$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Mixture$ReactionContext" {
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Mixture$ReactionContext {
readonly "availableItemStacks": $ImmutableList<($ItemStack)>
readonly "UVPower": float

constructor(arg0: $List$Type<($ItemStack$Type)>, arg1: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mixture$ReactionContext$Type = ($Mixture$ReactionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mixture$ReactionContext_ = $Mixture$ReactionContext$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$CoaxialGearBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$CoaxialGearBlock, $CoaxialGearBlock$Type} from "packages/com/petrolpark/destroy/block/$CoaxialGearBlock"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$CogwheelBlockItem, $CogwheelBlockItem$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$CogwheelBlockItem"

export class $CoaxialGearBlockItem extends $CogwheelBlockItem {
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

constructor(arg0: $CoaxialGearBlock$Type, arg1: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoaxialGearBlockItem$Type = ($CoaxialGearBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoaxialGearBlockItem_ = $CoaxialGearBlockItem$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$LongShaftBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ITransformableBlock, $ITransformableBlock$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$ShaftBlock, $ShaftBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ShaftBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LongShaftBlock extends $ShaftBlock implements $ITransformableBlock {
static readonly "placementHelperId": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "transform"(arg0: $BlockState$Type, arg1: $StructureTransform$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getStateForDirection"(arg0: $Direction$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongShaftBlock$Type = ($LongShaftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongShaftBlock_ = $LongShaftBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$VatFluidTankBehaviour$VatTankSegment" {
import {$VatFluidTankBehaviour, $VatFluidTankBehaviour$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$VatFluidTankBehaviour"
import {$VatFluidTankBehaviour$VatTankSegment$VatFluidTank, $VatFluidTankBehaviour$VatTankSegment$VatFluidTank$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$VatFluidTankBehaviour$VatTankSegment$VatFluidTank"
import {$GeniusFluidTankBehaviour$GeniusTankSegment, $GeniusFluidTankBehaviour$GeniusTankSegment$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$GeniusFluidTankBehaviour$GeniusTankSegment"

export class $VatFluidTankBehaviour$VatTankSegment extends $GeniusFluidTankBehaviour$GeniusTankSegment {

constructor(arg0: $VatFluidTankBehaviour$Type, arg1: integer, arg2: boolean)

public "getTank"(): $VatFluidTankBehaviour$VatTankSegment$VatFluidTank
get "tank"(): $VatFluidTankBehaviour$VatTankSegment$VatFluidTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatFluidTankBehaviour$VatTankSegment$Type = ($VatFluidTankBehaviour$VatTankSegment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatFluidTankBehaviour$VatTankSegment_ = $VatFluidTankBehaviour$VatTankSegment$Type;
}}
declare module "packages/com/petrolpark/destroy/client/gui/$MoleculeRenderer$ConfinedGeometry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MoleculeRenderer$ConfinedGeometry {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoleculeRenderer$ConfinedGeometry$Type = ($MoleculeRenderer$ConfinedGeometry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoleculeRenderer$ConfinedGeometry_ = $MoleculeRenderer$ConfinedGeometry$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Element" {
import {$PartialModel, $PartialModel$Type} from "packages/com/jozufozu/flywheel/core/$PartialModel"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MoleculeRenderer$Geometry, $MoleculeRenderer$Geometry$Type} from "packages/com/petrolpark/destroy/client/gui/$MoleculeRenderer$Geometry"

export class $Element extends $Enum<($Element)> {
static readonly "R_GROUP": $Element
static readonly "CARBON": $Element
static readonly "HYDROGEN": $Element
static readonly "SULFUR": $Element
static readonly "NITROGEN": $Element
static readonly "OXYGEN": $Element
static readonly "FLUORINE": $Element
static readonly "SODIUM": $Element
static readonly "CHLORINE": $Element
static readonly "POTASSIUM": $Element
static readonly "CALCIUM": $Element
static readonly "IRON": $Element
static readonly "NICKEL": $Element
static readonly "COPPER": $Element
static readonly "ZINC": $Element
static readonly "ZIRCONIUM": $Element
static readonly "IODINE": $Element
static readonly "PLATINUM": $Element
static readonly "GOLD": $Element
static readonly "MERCURY": $Element


public static "values"(): ($Element)[]
public static "valueOf"(arg0: string): $Element
public "getSymbol"(): string
public "getPartial"(): $PartialModel
public "setPartial"(arg0: $PartialModel$Type): void
public "getNextLowestValency"(arg0: double): double
public "getElectronegativity"(): float
public "getMass"(): float
public "isValidValency"(arg0: double): boolean
public "getMaxValency"(): double
public static "fromSymbol"(arg0: string): $Element
public "getGeometry"(arg0: integer): $MoleculeRenderer$Geometry
get "symbol"(): string
get "partial"(): $PartialModel
set "partial"(value: $PartialModel$Type)
get "electronegativity"(): float
get "mass"(): float
get "maxValency"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Element$Type = (("nickel") | ("potassium") | ("calcium") | ("nitrogen") | ("mercury") | ("hydrogen") | ("chlorine") | ("gold") | ("r_group") | ("sodium") | ("platinum") | ("carbon") | ("sulfur") | ("iron") | ("copper") | ("iodine") | ("zirconium") | ("oxygen") | ("zinc") | ("fluorine")) | ($Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Element_ = $Element$Type;
}}
declare module "packages/com/petrolpark/destroy/capability/level/pollution/$LevelPollution$PollutionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$INamedIconOptions, $INamedIconOptions$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$INamedIconOptions"
import {$AllIcons, $AllIcons$Type} from "packages/com/simibubi/create/foundation/gui/$AllIcons"
import {$MoleculeTag, $MoleculeTag$Type} from "packages/com/petrolpark/destroy/chemistry/$MoleculeTag"

export class $LevelPollution$PollutionType extends $Enum<($LevelPollution$PollutionType)> implements $INamedIconOptions {
static readonly "GREENHOUSE": $LevelPollution$PollutionType
static readonly "OZONE_DEPLETION": $LevelPollution$PollutionType
static readonly "SMOG": $LevelPollution$PollutionType
static readonly "ACID_RAIN": $LevelPollution$PollutionType
static readonly "RADIOACTIVITY": $LevelPollution$PollutionType
readonly "max": integer
readonly "moleculeTag": $MoleculeTag


public static "values"(): ($LevelPollution$PollutionType)[]
public static "valueOf"(arg0: string): $LevelPollution$PollutionType
public "getTranslationKey"(): string
public "getIcon"(): $AllIcons
get "translationKey"(): string
get "icon"(): $AllIcons
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelPollution$PollutionType$Type = (("acid_rain") | ("smog") | ("greenhouse") | ("ozone_depletion") | ("radioactivity")) | ($LevelPollution$PollutionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelPollution$PollutionType_ = $LevelPollution$PollutionType$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$ExtrusionDieBlockEntity" {
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ExtrusionDieBlockEntity extends $SmartBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtrusionDieBlockEntity$Type = ($ExtrusionDieBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtrusionDieBlockEntity_ = $ExtrusionDieBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/$RedstoneProgrammerBehaviour$BehaviourRedstoneProgram" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$RedstoneProgram$PlayMode, $RedstoneProgram$PlayMode$Type} from "packages/com/petrolpark/destroy/util/$RedstoneProgram$PlayMode"
import {$RedstoneProgram, $RedstoneProgram$Type} from "packages/com/petrolpark/destroy/util/$RedstoneProgram"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RedstoneProgrammerBehaviour, $RedstoneProgrammerBehaviour$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/$RedstoneProgrammerBehaviour"

export class $RedstoneProgrammerBehaviour$BehaviourRedstoneProgram extends $RedstoneProgram {
 "mode": $RedstoneProgram$PlayMode
 "paused": boolean

constructor(arg0: $RedstoneProgrammerBehaviour$Type)

public "getWorld"(): $LevelAccessor
public "getBlockPos"(): $BlockPos
public "hasPower"(): boolean
public "shouldTransmit"(): boolean
get "world"(): $LevelAccessor
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneProgrammerBehaviour$BehaviourRedstoneProgram$Type = ($RedstoneProgrammerBehaviour$BehaviourRedstoneProgram);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneProgrammerBehaviour$BehaviourRedstoneProgram_ = $RedstoneProgrammerBehaviour$BehaviourRedstoneProgram$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Molecule" {
import {$Formula$Topology$SideChainInformation, $Formula$Topology$SideChainInformation$Type} from "packages/com/petrolpark/destroy/chemistry/$Formula$Topology$SideChainInformation"
import {$Formula, $Formula$Type} from "packages/com/petrolpark/destroy/chemistry/$Formula"
import {$Branch, $Branch$Type} from "packages/com/petrolpark/destroy/chemistry/serializer/$Branch"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MoleculeRenderer, $MoleculeRenderer$Type} from "packages/com/petrolpark/destroy/client/gui/$MoleculeRenderer"
import {$Atom, $Atom$Type} from "packages/com/petrolpark/destroy/chemistry/$Atom"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Reaction, $Reaction$Type} from "packages/com/petrolpark/destroy/chemistry/$Reaction"
import {$MoleculeTag, $MoleculeTag$Type} from "packages/com/petrolpark/destroy/chemistry/$MoleculeTag"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$INameableProduct, $INameableProduct$Type} from "packages/com/petrolpark/destroy/chemistry/naming/$INameableProduct"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Element, $Element$Type} from "packages/com/petrolpark/destroy/chemistry/$Element"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$Bond, $Bond$Type} from "packages/com/petrolpark/destroy/chemistry/$Bond"
import {$Group, $Group$Type} from "packages/com/petrolpark/destroy/chemistry/$Group"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Molecule implements $INameableProduct {
static readonly "NAMESPACES": $Set<(string)>
static readonly "FORBIDDEN_NAMESPACES": $Set<(string)>
static readonly "MOLECULES": $Map<(string), ($Molecule)>
readonly "nameSpace": string


public "getCarbocationStability"(arg0: $Atom$Type, arg1: boolean): float
public "getCyclicAtomsForRendering"(): $List<($Pair<($Vec3), ($Atom)>)>
public "getSideChainsForRendering"(): $List<($Pair<($Formula$Topology$SideChainInformation), ($Branch)>)>
public "getCyclicBondsForRendering"(): $List<($Bond)>
public "shallowCopyStructure"(): $Formula
public "getMolecularFormula"(): $Map<($Element), (integer)>
public "getStructuralFormula"(): string
public "addReactantReaction"(arg0: $Reaction$Type): void
public "getProductReactions"(): $List<($Reaction)>
public "getName"(arg0: boolean): $Component
public "toString"(): string
public "getEquivalent"(): $Molecule
public "isCyclic"(): boolean
public "getDensity"(): float
public "getColor"(): integer
public "hasTag"(arg0: $MoleculeTag$Type): boolean
public "getTags"(): $ImmutableSet<($MoleculeTag)>
public "getTranslationKey"(arg0: boolean): string
public "getRenderer"(): $MoleculeRenderer
public "getCharge"(): integer
public "getPureConcentration"(): float
public "getSerializedCharge"(arg0: boolean): string
public "getMolarHeatCapacity"(): float
public "getReactantReactions"(): $List<($Reaction)>
public "getFunctionalGroups"(): $List<($Group<(any)>)>
public "getMass"(): float
public "getAtoms"(): $Set<($Atom)>
public "getFullID"(): string
public static "getMolecule"(arg0: string): $Molecule
public "isHypothetical"(): boolean
public "getBoilingPoint"(): float
public "isNovel"(): boolean
public "getLatentHeat"(): float
public "getSerlializedMolecularFormula"(arg0: boolean): string
public "getFROWNSCode"(): string
public "getRenderBranch"(): $Branch
public "addProductReaction"(arg0: $Reaction$Type): void
public "getDipoleMoment"(): float
public "isColorless"(): boolean
get "cyclicAtomsForRendering"(): $List<($Pair<($Vec3), ($Atom)>)>
get "sideChainsForRendering"(): $List<($Pair<($Formula$Topology$SideChainInformation), ($Branch)>)>
get "cyclicBondsForRendering"(): $List<($Bond)>
get "molecularFormula"(): $Map<($Element), (integer)>
get "structuralFormula"(): string
get "productReactions"(): $List<($Reaction)>
get "equivalent"(): $Molecule
get "cyclic"(): boolean
get "density"(): float
get "color"(): integer
get "tags"(): $ImmutableSet<($MoleculeTag)>
get "renderer"(): $MoleculeRenderer
get "charge"(): integer
get "pureConcentration"(): float
get "molarHeatCapacity"(): float
get "reactantReactions"(): $List<($Reaction)>
get "functionalGroups"(): $List<($Group<(any)>)>
get "mass"(): float
get "atoms"(): $Set<($Atom)>
get "fullID"(): string
get "hypothetical"(): boolean
get "boilingPoint"(): float
get "novel"(): boolean
get "latentHeat"(): float
get "fROWNSCode"(): string
get "renderBranch"(): $Branch
get "dipoleMoment"(): float
get "colorless"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Molecule$Type = ($Molecule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Molecule_ = $Molecule$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$PumpjackCamBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IPumpjackStructuralBlock, $IPumpjackStructuralBlock$Type} from "packages/com/petrolpark/destroy/block/$IPumpjackStructuralBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$AbstractShaftBlock, $AbstractShaftBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$AbstractShaftBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PumpjackCamBlock extends $AbstractShaftBlock implements $IPumpjackStructuralBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type, arg6: $Block$Type): $BlockState
public static "getMaster"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockPos
public static "stillValid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getInformationSource"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockPos
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpjackCamBlock$Type = ($PumpjackCamBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpjackCamBlock_ = $PumpjackCamBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$CoaxialGearBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$CogWheelBlock, $CogWheelBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$CogWheelBlock"

export class $CoaxialGearBlock extends $CogWheelBlock {
static readonly "HAS_SHAFT": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "isCoaxialGear"(arg0: $BlockState$Type): boolean
public static "isCoaxialGear"(arg0: $Block$Type): boolean
public static "updatePropagationOfLongShaft"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): void
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "tryMakeLongShaft"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoaxialGearBlock$Type = ($CoaxialGearBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoaxialGearBlock_ = $CoaxialGearBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Bond" {
import {$Bond$BondType, $Bond$BondType$Type} from "packages/com/petrolpark/destroy/chemistry/$Bond$BondType"
import {$Atom, $Atom$Type} from "packages/com/petrolpark/destroy/chemistry/$Atom"

export class $Bond {

constructor(arg0: $Atom$Type, arg1: $Atom$Type, arg2: $Bond$BondType$Type)

public "getDestinationAtom"(): $Atom
public "equals"(arg0: any): boolean
public "getType"(): $Bond$BondType
public "setType"(arg0: $Bond$BondType$Type): void
public "getMirror"(): $Bond
public "getSourceAtom"(): $Atom
get "destinationAtom"(): $Atom
get "type"(): $Bond$BondType
set "type"(value: $Bond$BondType$Type)
get "mirror"(): $Bond
get "sourceAtom"(): $Atom
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bond$Type = ($Bond);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bond_ = $Bond$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$DoubleCardanShaftBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
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
import {$DoubleCardanShaftBlockEntity, $DoubleCardanShaftBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$DoubleCardanShaftBlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DoubleCardanShaftBlock extends $DirectionalAxisKineticBlock implements $IBE<($DoubleCardanShaftBlockEntity)> {
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

public "transform"(arg0: $BlockState$Type, arg1: $StructureTransform$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public static "getBlockstateConnectingDirections"(arg0: $Direction$Type, arg1: $Direction$Type): $BlockState
public static "getDirectionsConnectedByState"(arg0: $BlockState$Type): ($Direction)[]
public static "isPositiveDirection"(arg0: $Direction$Type): boolean
public "getBlockEntityClass"(): $Class<($DoubleCardanShaftBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $DoubleCardanShaftBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($DoubleCardanShaftBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($DoubleCardanShaftBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($DoubleCardanShaftBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($DoubleCardanShaftBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleCardanShaftBlock$Type = ($DoubleCardanShaftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleCardanShaftBlock_ = $DoubleCardanShaftBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$BubbleCapBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BubbleCapBlockEntity, $BubbleCapBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$BubbleCapBlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BubbleCapBlock extends $Block implements $IBE<($BubbleCapBlockEntity)>, $IWrenchable {
static readonly "PIPE_FACE": $DirectionProperty
static readonly "TOP": $BooleanProperty
static readonly "BOTTOM": $BooleanProperty
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

public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getBlockEntityClass"(): $Class<($BubbleCapBlockEntity)>
public "stateForPositionInTower"(arg0: $Level$Type, arg1: $BlockPos$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BubbleCapBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($BubbleCapBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($BubbleCapBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($BubbleCapBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($BubbleCapBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleCapBlock$Type = ($BubbleCapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleCapBlock_ = $BubbleCapBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$DifferentialBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$CogWheelBlock, $CogWheelBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$CogWheelBlock"

export class $DifferentialBlock extends $CogWheelBlock {
static readonly "FULL_MODEL": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isDedicatedCogWheel"(): boolean
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "isLargeCog"(): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "dedicatedCogWheel"(): boolean
get "largeCog"(): boolean
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DifferentialBlock$Type = ($DifferentialBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DifferentialBlock_ = $DifferentialBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$UrineCauldronBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractCauldronBlock, $AbstractCauldronBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractCauldronBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UrineCauldronBlock extends $AbstractCauldronBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Map$Type<($Item$Type), ($CauldronInteraction$Type)>)

public "isFull"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UrineCauldronBlock$Type = ($UrineCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UrineCauldronBlock_ = $UrineCauldronBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/effect/$DestroyMobEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $DestroyMobEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DestroyMobEffect$Type = ($DestroyMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DestroyMobEffect_ = $DestroyMobEffect$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Mixture$Phases" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Mixture, $Mixture$Type} from "packages/com/petrolpark/destroy/chemistry/$Mixture"

export class $Mixture$Phases extends $Record {

constructor(gasMixture: $Mixture$Type, gasVolume: double, liquidMixture: $Mixture$Type, liquidVolume: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "liquidMixture"(): $Mixture
public "gasMixture"(): $Mixture
public "liquidVolume"(): double
public "gasVolume"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mixture$Phases$Type = ($Mixture$Phases);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mixture$Phases_ = $Mixture$Phases$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$DynamoBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ICogWheel, $ICogWheel$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ICogWheel"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DynamoBlockEntity, $DynamoBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$DynamoBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DynamoBlock extends $KineticBlock implements $IBE<($DynamoBlockEntity)>, $ICogWheel {
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

public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getBlockEntityClass"(): $Class<($DynamoBlockEntity)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $DynamoBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($DynamoBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($DynamoBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($DynamoBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public "isDedicatedCogWheel"(): boolean
public "isSmallCog"(): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public "isLargeCog"(): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($DynamoBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "dedicatedCogWheel"(): boolean
get "smallCog"(): boolean
get "largeCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamoBlock$Type = ($DynamoBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamoBlock_ = $DynamoBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$VatSideBlockEntity$DisplayType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VatSideBlockEntity$DisplayType extends $Enum<($VatSideBlockEntity$DisplayType)> {
static readonly "NORMAL": $VatSideBlockEntity$DisplayType
static readonly "BAROMETER": $VatSideBlockEntity$DisplayType
static readonly "THERMOMETER": $VatSideBlockEntity$DisplayType
static readonly "PIPE": $VatSideBlockEntity$DisplayType
static readonly "CLOSED_VENT": $VatSideBlockEntity$DisplayType
static readonly "OPEN_VENT": $VatSideBlockEntity$DisplayType


public static "values"(): ($VatSideBlockEntity$DisplayType)[]
public static "valueOf"(arg0: string): $VatSideBlockEntity$DisplayType
public "validForTop"(): boolean
public "validForBottom"(): boolean
public "validForSide"(): boolean
public "isVent"(): boolean
get "vent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatSideBlockEntity$DisplayType$Type = (("normal") | ("closed_vent") | ("open_vent") | ("barometer") | ("pipe") | ("thermometer")) | ($VatSideBlockEntity$DisplayType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatSideBlockEntity$DisplayType_ = $VatSideBlockEntity$DisplayType$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$CoolerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CoolerBlockEntity$ColdnessLevel, $CoolerBlockEntity$ColdnessLevel$Type} from "packages/com/petrolpark/destroy/block/entity/$CoolerBlockEntity$ColdnessLevel"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
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
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$CoolerBlockEntity, $CoolerBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$CoolerBlockEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CoolerBlock extends $Block implements $IBE<($CoolerBlockEntity)> {
static readonly "COLD_LEVEL": $EnumProperty<($CoolerBlockEntity$ColdnessLevel)>
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

public static "tryInsert"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: boolean, arg5: boolean, arg6: boolean): $InteractionResultHolder<($ItemStack)>
public "getBlockEntityClass"(): $Class<($CoolerBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getColdnessLevelOf"(arg0: $BlockState$Type): $CoolerBlockEntity$ColdnessLevel
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CoolerBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CoolerBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CoolerBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CoolerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($CoolerBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoolerBlock$Type = ($CoolerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoolerBlock_ = $CoolerBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/mixin/accessor/$FluidIngredientAccessor" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $FluidIngredientAccessor {

 "setAmountRequired"(arg0: integer): void
 "getAmountRequired"(): integer
 "invokeReadInternal"(arg0: $FriendlyByteBuf$Type): void
 "invokeReadInternal"(arg0: $JsonObject$Type): void
 "invokeWriteInternal"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $FluidIngredientAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredientAccessor$Type = ($FluidIngredientAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidIngredientAccessor_ = $FluidIngredientAccessor$Type;
}}
declare module "packages/com/petrolpark/destroy/mixin/accessor/$ProcessingRecipeParamsAccessor" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"

export interface $ProcessingRecipeParamsAccessor {

 "getFluidResults"(): $NonNullList<($FluidStack)>
 "getFluidIngredients"(): $NonNullList<($FluidIngredient)>
}

export namespace $ProcessingRecipeParamsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessingRecipeParamsAccessor$Type = ($ProcessingRecipeParamsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessingRecipeParamsAccessor_ = $ProcessingRecipeParamsAccessor$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$ReactionResult" {
import {$VatControllerBlockEntity, $VatControllerBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$VatControllerBlockEntity"
import {$BasinBlockEntity, $BasinBlockEntity$Type} from "packages/com/simibubi/create/content/processing/basin/$BasinBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Reaction, $Reaction$Type} from "packages/com/petrolpark/destroy/chemistry/$Reaction"

export class $ReactionResult {

constructor(arg0: float, arg1: $Reaction$Type)

public "onVatReaction"(arg0: $Level$Type, arg1: $VatControllerBlockEntity$Type): void
public "getReaction"(): $Reaction
public "getRequiredMoles"(): float
public "isOneOff"(): boolean
public "onBasinReaction"(arg0: $Level$Type, arg1: $BasinBlockEntity$Type): void
get "reaction"(): $Reaction
get "requiredMoles"(): float
get "oneOff"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionResult$Type = ($ReactionResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionResult_ = $ReactionResult$Type;
}}
declare module "packages/com/petrolpark/destroy/entity/$PrimedBomb" {
import {$PrimedTnt, $PrimedTnt$Type} from "packages/net/minecraft/world/entity/item/$PrimedTnt"
import {$SmartExplosion, $SmartExplosion$Type} from "packages/com/petrolpark/destroy/world/explosion/$SmartExplosion"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PrimedBomb extends $PrimedTnt {
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getExplosion"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: $Entity$Type): $SmartExplosion
public "getBlockStateToRender"(): $BlockState
get "blockStateToRender"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimedBomb$Type = ($PrimedBomb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimedBomb_ = $PrimedBomb$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$DoubleCardanShaftBlockEntity" {
import {$SplitShaftBlockEntity, $SplitShaftBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/transmission/$SplitShaftBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DoubleCardanShaftBlockEntity extends $SplitShaftBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getRotationSpeedModifier"(arg0: $Direction$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleCardanShaftBlockEntity$Type = ($DoubleCardanShaftBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleCardanShaftBlockEntity_ = $DoubleCardanShaftBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Formula$Topology$SideChainInformation" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Bond$BondType, $Bond$BondType$Type} from "packages/com/petrolpark/destroy/chemistry/$Bond$BondType"
import {$Atom, $Atom$Type} from "packages/com/petrolpark/destroy/chemistry/$Atom"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $Formula$Topology$SideChainInformation extends $Record {

constructor(atom: $Atom$Type, bondDirection: $Vec3$Type, branchDirection: $Vec3$Type, bondType: $Bond$BondType$Type)

public "bondDirection"(): $Vec3
public "branchDirection"(): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "atom"(): $Atom
public "bondType"(): $Bond$BondType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Formula$Topology$SideChainInformation$Type = ($Formula$Topology$SideChainInformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Formula$Topology$SideChainInformation_ = $Formula$Topology$SideChainInformation$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$CoolerBlockEntity$ColdnessLevel" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CoolerBlockEntity$ColdnessLevel extends $Enum<($CoolerBlockEntity$ColdnessLevel)> implements $StringRepresentable {
static readonly "NONE": $CoolerBlockEntity$ColdnessLevel
static readonly "IDLE": $CoolerBlockEntity$ColdnessLevel
static readonly "FROSTING": $CoolerBlockEntity$ColdnessLevel


public static "values"(): ($CoolerBlockEntity$ColdnessLevel)[]
public static "valueOf"(arg0: string): $CoolerBlockEntity$ColdnessLevel
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
export type $CoolerBlockEntity$ColdnessLevel$Type = (("idle") | ("none") | ("frosting")) | ($CoolerBlockEntity$ColdnessLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoolerBlockEntity$ColdnessLevel_ = $CoolerBlockEntity$ColdnessLevel$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$IodineItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IodineItem extends $Item {
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

public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IodineItem$Type = ($IodineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IodineItem_ = $IodineItem$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$BadgeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Badge, $Badge$Type} from "packages/com/petrolpark/destroy/badge/$Badge"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BadgeItem extends $Item {
readonly "badge": $Supplier<($Badge)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($Badge$Type)>)

public static "of"(arg0: $Player$Type, arg1: $Badge$Type, arg2: $Date$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BadgeItem$Type = ($BadgeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BadgeItem_ = $BadgeItem$Type;
}}
declare module "packages/com/petrolpark/destroy/util/$RedstoneProgram" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$RedstoneProgram$PlayMode, $RedstoneProgram$PlayMode$Type} from "packages/com/petrolpark/destroy/util/$RedstoneProgram$PlayMode"
import {$RedstoneLinkNetworkHandler$Frequency, $RedstoneLinkNetworkHandler$Frequency$Type} from "packages/com/simibubi/create/content/redstone/link/$RedstoneLinkNetworkHandler$Frequency"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"
import {$RedstoneProgram$Channel, $RedstoneProgram$Channel$Type} from "packages/com/petrolpark/destroy/util/$RedstoneProgram$Channel"

export class $RedstoneProgram {
 "mode": $RedstoneProgram$PlayMode
 "paused": boolean

constructor()

public "remove"(arg0: $RedstoneProgram$Channel$Type): boolean
public "load"(): void
public "write"(arg0: $FriendlyByteBuf$Type): void
public "write"(): $CompoundTag
public static "read"<T extends $RedstoneProgram>(arg0: $Supplier$Type<(T)>, arg1: $CompoundTag$Type): T
public "read"(arg0: $FriendlyByteBuf$Type): void
public "swap"(arg0: $RedstoneProgram$Channel$Type, arg1: $RedstoneProgram$Channel$Type): void
public "unload"(): void
public "copyFrom"(arg0: $RedstoneProgram$Type): void
public "tick"(): void
public "setDuration"(arg0: integer): void
public "getChannels"(): $ImmutableList<($RedstoneProgram$Channel)>
public "getWorld"(): $LevelAccessor
public "getBlockPos"(): $BlockPos
public "hasPower"(): boolean
public "shouldTransmit"(): boolean
public "addBlankChannel"(arg0: $Couple$Type<($RedstoneLinkNetworkHandler$Frequency$Type)>): void
set "duration"(value: integer)
get "channels"(): $ImmutableList<($RedstoneProgram$Channel)>
get "world"(): $LevelAccessor
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneProgram$Type = ($RedstoneProgram);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneProgram_ = $RedstoneProgram$Type;
}}
declare module "packages/com/petrolpark/destroy/util/$RedstoneProgram$Channel" {
import {$IRedstoneLinkable, $IRedstoneLinkable$Type} from "packages/com/simibubi/create/content/redstone/link/$IRedstoneLinkable"
import {$RedstoneLinkNetworkHandler$Frequency, $RedstoneLinkNetworkHandler$Frequency$Type} from "packages/com/simibubi/create/content/redstone/link/$RedstoneLinkNetworkHandler$Frequency"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"

export class $RedstoneProgram$Channel implements $IRedstoneLinkable {
readonly "networkKey": $Couple<($RedstoneLinkNetworkHandler$Frequency)>


public "getLocation"(): $BlockPos
public "isAlive"(): boolean
public "setStrength"(arg0: integer, arg1: integer): void
public "setReceivedStrength"(arg0: integer): void
public "getTransmittedStrength"(): integer
public "getNetworkKey"(): $Couple<($RedstoneLinkNetworkHandler$Frequency)>
public "isListening"(): boolean
get "location"(): $BlockPos
get "alive"(): boolean
set "receivedStrength"(value: integer)
get "transmittedStrength"(): integer
get "networkKey"(): $Couple<($RedstoneLinkNetworkHandler$Frequency)>
get "listening"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneProgram$Channel$Type = ($RedstoneProgram$Channel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneProgram$Channel_ = $RedstoneProgram$Channel$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/$ChargingBehaviour$ChargingBehaviourSpecifics" {
import {$TransportedItemStack, $TransportedItemStack$Type} from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export interface $ChargingBehaviour$ChargingBehaviourSpecifics {

 "getKineticSpeed"(): float
 "tryProcessInBasin"(arg0: boolean): boolean
 "canProcessInBulk"(): boolean
 "tryProcessInWorld"(arg0: $ItemEntity$Type, arg1: boolean): boolean
 "tryProcessOnBelt"(arg0: $TransportedItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: boolean): boolean
 "onChargingCompleted"(): void
}

export namespace $ChargingBehaviour$ChargingBehaviourSpecifics {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingBehaviour$ChargingBehaviourSpecifics$Type = ($ChargingBehaviour$ChargingBehaviourSpecifics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingBehaviour$ChargingBehaviourSpecifics_ = $ChargingBehaviour$ChargingBehaviourSpecifics$Type;
}}
declare module "packages/com/petrolpark/destroy/util/vat/$Vat" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Vat {
static readonly "MB_PER_BLOCK": integer


public "write"(arg0: $CompoundTag$Type): void
public static "read"(arg0: $CompoundTag$Type): $Optional<($Vat)>
public "getCapacity"(): integer
public "getCenter"(): $Vec3
public "getVolume"(): integer
public "getInternalLowerCorner"(): $BlockPos
public "getSideBlockPositions"(): $Collection<($BlockPos)>
public "getWeakestBlock"(): $BlockState
public "getConductance"(): float
public "getInternalHeight"(): integer
public static "tryConstruct"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $Optional<($Vat)>
public "getUpperCorner"(): $BlockPos
public "whereIsSideFacing"(arg0: $BlockPos$Type): $Direction
public "getMaxPressure"(): float
public "getInternalUpperCorner"(): $BlockPos
public "getInternalWidth"(): integer
public "getInternalLength"(): integer
public "showBoundingBox"(): void
public "getLowerCorner"(): $BlockPos
get "capacity"(): integer
get "center"(): $Vec3
get "volume"(): integer
get "internalLowerCorner"(): $BlockPos
get "sideBlockPositions"(): $Collection<($BlockPos)>
get "weakestBlock"(): $BlockState
get "conductance"(): float
get "internalHeight"(): integer
get "upperCorner"(): $BlockPos
get "maxPressure"(): float
get "internalUpperCorner"(): $BlockPos
get "internalWidth"(): integer
get "internalLength"(): integer
get "lowerCorner"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vat$Type = ($Vat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vat_ = $Vat$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$SeismometerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SeismometerItem extends $Item {
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

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeismometerItem$Type = ($SeismometerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeismometerItem_ = $SeismometerItem$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$PrimeableBombBlock$PrimedBombEntityFactory" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PrimedBomb, $PrimedBomb$Type} from "packages/com/petrolpark/destroy/entity/$PrimedBomb"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $PrimeableBombBlock$PrimedBombEntityFactory {

 "create"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type): $PrimedBomb

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type): $PrimedBomb
}

export namespace $PrimeableBombBlock$PrimedBombEntityFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimeableBombBlock$PrimedBombEntityFactory$Type = ($PrimeableBombBlock$PrimedBombEntityFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimeableBombBlock$PrimedBombEntityFactory_ = $PrimeableBombBlock$PrimedBombEntityFactory$Type;
}}
declare module "packages/com/petrolpark/destroy/effect/$UncurableMobEffect" {
import {$DestroyMobEffect, $DestroyMobEffect$Type} from "packages/com/petrolpark/destroy/effect/$DestroyMobEffect"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"

export class $UncurableMobEffect extends $DestroyMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UncurableMobEffect$Type = ($UncurableMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UncurableMobEffect_ = $UncurableMobEffect$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$MagicBeetrootShootsBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MagicBeetrootShootsBlock extends $BushBlock implements $BonemealableBlock {
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

public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "getGrowthResult"(arg0: $RandomSource$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicBeetrootShootsBlock$Type = ($MagicBeetrootShootsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicBeetrootShootsBlock_ = $MagicBeetrootShootsBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$YeastMushroomBlock" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$MushroomBlock, $MushroomBlock$Type} from "packages/net/minecraft/world/level/block/$MushroomBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $YeastMushroomBlock extends $MushroomBlock {
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

public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "growMushroom"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $RandomSource$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YeastMushroomBlock$Type = ($YeastMushroomBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YeastMushroomBlock_ = $YeastMushroomBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/client/gui/$MoleculeRenderer" {
import {$Molecule, $Molecule$Type} from "packages/com/petrolpark/destroy/chemistry/$Molecule"
import {$Branch, $Branch$Type} from "packages/com/petrolpark/destroy/chemistry/serializer/$Branch"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $MoleculeRenderer {

constructor(arg0: $Molecule$Type)

public "render"(arg0: integer, arg1: integer, arg2: $GuiGraphics$Type): void
public "getWidth"(): integer
public "getHeight"(): integer
public "generateBranch"(arg0: $Branch$Type, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: $Vec3$Type, arg4: $Vec3$Type, arg5: boolean): void
public static "distanceFromPointToLine"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Vec3$Type): double
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoleculeRenderer$Type = ($MoleculeRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoleculeRenderer_ = $MoleculeRenderer$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Bond$BondType" {
import {$PartialModel, $PartialModel$Type} from "packages/com/jozufozu/flywheel/core/$PartialModel"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Bond$BondType extends $Enum<($Bond$BondType)> {
static readonly "SINGLE": $Bond$BondType
static readonly "DOUBLE": $Bond$BondType
static readonly "TRIPLE": $Bond$BondType
static readonly "AROMATIC": $Bond$BondType


public static "values"(): ($Bond$BondType)[]
public static "valueOf"(arg0: string): $Bond$BondType
public "getEquivalent"(): float
public "getPartial"(): $PartialModel
public "setPartial"(arg0: $PartialModel$Type): void
public static "fromFROWNSCode"(arg0: character): $Bond$BondType
public "getFROWNSCode"(): string
get "equivalent"(): float
get "partial"(): $PartialModel
set "partial"(value: $PartialModel$Type)
get "fROWNSCode"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bond$BondType$Type = (("single") | ("triple") | ("double") | ("aromatic")) | ($Bond$BondType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bond$BondType_ = $Bond$BondType$Type;
}}
declare module "packages/com/petrolpark/destroy/recipe/$ReactionInBasinRecipe$ReactionInBasinResult" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ReactionResult, $ReactionResult$Type} from "packages/com/petrolpark/destroy/chemistry/$ReactionResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReactionInBasinRecipe$ReactionInBasinResult extends $Record {

constructor(ticks: integer, reactionresults: $Map$Type<($ReactionResult$Type), (integer)>, amount: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "amount"(): integer
public "ticks"(): integer
public "reactionresults"(): $Map<($ReactionResult), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionInBasinRecipe$ReactionInBasinResult$Type = ($ReactionInBasinRecipe$ReactionInBasinResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionInBasinRecipe$ReactionInBasinResult_ = $ReactionInBasinRecipe$ReactionInBasinResult$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$CircuitMaskItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CircuitPatternItem, $CircuitPatternItem$Type} from "packages/com/petrolpark/destroy/item/$CircuitPatternItem"
import {$DirectionalTransportedItemStack, $DirectionalTransportedItemStack$Type} from "packages/com/petrolpark/destroy/item/directional/$DirectionalTransportedItemStack"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CircuitMaskItem extends $CircuitPatternItem {
static readonly "rotated90": (integer)[]
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

public "launch"(arg0: $DirectionalTransportedItemStack$Type, arg1: $Direction$Type): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "isDirectional"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CircuitMaskItem$Type = ($CircuitMaskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CircuitMaskItem_ = $CircuitMaskItem$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$MoleculeTag" {
import {$Molecule, $Molecule$Type} from "packages/com/petrolpark/destroy/chemistry/$Molecule"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MoleculeTag {
static readonly "MOLECULE_TAGS": $Map<(string), ($MoleculeTag)>
static readonly "MOLECULES_WITH_TAGS": $Map<($MoleculeTag), ($Set<($Molecule)>)>

constructor(arg0: string, arg1: string)

public static "registerMoleculeToTag"(arg0: $Molecule$Type, arg1: $MoleculeTag$Type): void
public "getId"(): string
public "withColor"(arg0: integer): $MoleculeTag
public "getFormattedName"(): $Component
get "id"(): string
get "formattedName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoleculeTag$Type = ($MoleculeTag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoleculeTag_ = $MoleculeTag$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$VatSideBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VatControllerBlockEntity, $VatControllerBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$VatControllerBlockEntity"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$VatSideBlockEntity$DisplayType, $VatSideBlockEntity$DisplayType$Type} from "packages/com/petrolpark/destroy/block/entity/$VatSideBlockEntity$DisplayType"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$CopycatBlockEntity, $CopycatBlockEntity$Type} from "packages/com/simibubi/create/content/decoration/copycat/$CopycatBlockEntity"
import {$IHaveHoveringInformation, $IHaveHoveringInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveHoveringInformation"
import {$Vat, $Vat$Type} from "packages/com/petrolpark/destroy/util/vat/$Vat"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VatSideBlockEntity extends $CopycatBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation {
 "direction": $Direction
 "controllerPosition": $BlockPos
 "spoutingTicks": integer
 "spoutingFluid": $FluidStack
 "ventOpenness": $LerpedFloat
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "destroy"(): void
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getController"(): $VatControllerBlockEntity
public "setMaterial"(arg0: $BlockState$Type): void
public "getPercentagePressure"(): float
public "setPowerFromAdjacentBlock"(arg0: $BlockPos$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "isPipeSubmerged"(arg0: boolean, arg1: float): boolean
public "setDisplayType"(arg0: $VatSideBlockEntity$DisplayType$Type): void
public "updateRedstone"(): void
public "getVatOptional"(): $Optional<($Vat)>
public "updateDisplayType"(arg0: $BlockPos$Type): void
public "getDisplayType"(): $VatSideBlockEntity$DisplayType
public "pipeHeightAboveVatBase"(): float
public "tryInsertFluidInVat"(): void
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "controller"(): $VatControllerBlockEntity
set "material"(value: $BlockState$Type)
get "percentagePressure"(): float
set "powerFromAdjacentBlock"(value: $BlockPos$Type)
set "displayType"(value: $VatSideBlockEntity$DisplayType$Type)
get "vatOptional"(): $Optional<($Vat)>
get "displayType"(): $VatSideBlockEntity$DisplayType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatSideBlockEntity$Type = ($VatSideBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatSideBlockEntity_ = $VatSideBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/item/renderer/$ILayerTintsWithAlphaItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILayerTintsWithAlphaItem {

}

export namespace $ILayerTintsWithAlphaItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILayerTintsWithAlphaItem$Type = ($ILayerTintsWithAlphaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILayerTintsWithAlphaItem_ = $ILayerTintsWithAlphaItem$Type;
}}
declare module "packages/com/petrolpark/destroy/client/gui/$MoleculeRenderer$Geometry" {
import {$MoleculeRenderer$ConfinedGeometry, $MoleculeRenderer$ConfinedGeometry$Type} from "packages/com/petrolpark/destroy/client/gui/$MoleculeRenderer$ConfinedGeometry"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $MoleculeRenderer$Geometry extends $Enum<($MoleculeRenderer$Geometry)> {
static readonly "LINEAR": $MoleculeRenderer$Geometry
static readonly "V_SHAPE": $MoleculeRenderer$Geometry
static readonly "TRIGONAL_PLANAR": $MoleculeRenderer$Geometry
static readonly "TRIGONAL_PYRAMIDAL": $MoleculeRenderer$Geometry
static readonly "TETRAHEDRAL": $MoleculeRenderer$Geometry
static readonly "OCTAHEDRAL": $MoleculeRenderer$Geometry


public static "values"(): ($MoleculeRenderer$Geometry)[]
public static "valueOf"(arg0: string): $MoleculeRenderer$Geometry
public "getAngle"(): double
public "getConnections"(arg0: boolean): $List<($Vec3)>
public "confine"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Vec3$Type): $MoleculeRenderer$ConfinedGeometry
get "angle"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoleculeRenderer$Geometry$Type = (("linear") | ("trigonal_pyramidal") | ("v_shape") | ("trigonal_planar") | ("tetrahedral") | ("octahedral")) | ($MoleculeRenderer$Geometry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoleculeRenderer$Geometry_ = $MoleculeRenderer$Geometry$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$CircuitPatternItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DirectionalTransportedItemStack, $DirectionalTransportedItemStack$Type} from "packages/com/petrolpark/destroy/item/directional/$DirectionalTransportedItemStack"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IDirectionalOnBelt, $IDirectionalOnBelt$Type} from "packages/com/petrolpark/destroy/item/directional/$IDirectionalOnBelt"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CircuitPatternItem extends $Item implements $IDirectionalOnBelt {
static readonly "rotated90": (integer)[]
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

public static "getIndex"(arg0: integer, arg1: integer): integer
public "getPattern"(arg0: $ItemStack$Type): integer
public static "punch"(arg0: integer, arg1: integer, arg2: integer): integer
public "putPattern"(arg0: $ItemStack$Type, arg1: integer): void
public static "isPunched"(arg0: integer, arg1: integer): boolean
public static "isPunched"(arg0: integer, arg1: integer, arg2: integer): boolean
public "launch"(arg0: $DirectionalTransportedItemStack$Type, arg1: $Direction$Type): void
public static "isDirectional"(arg0: $ItemStack$Type): boolean
public "rotationForPlacement"(arg0: $ItemStack$Type): $Rotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CircuitPatternItem$Type = ($CircuitPatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CircuitPatternItem_ = $CircuitPatternItem$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$SandCastleBlock$Material" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SandCastleBlock$Material extends $Enum<($SandCastleBlock$Material)> implements $StringRepresentable {
static readonly "SAND": $SandCastleBlock$Material
static readonly "RED_SAND": $SandCastleBlock$Material
static readonly "SOUL_SAND": $SandCastleBlock$Material


public static "values"(): ($SandCastleBlock$Material)[]
public static "valueOf"(arg0: string): $SandCastleBlock$Material
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
export type $SandCastleBlock$Material$Type = (("sand") | ("red_sand") | ("soul_sand")) | ($SandCastleBlock$Material);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandCastleBlock$Material_ = $SandCastleBlock$Material$Type;
}}
declare module "packages/com/petrolpark/destroy/advancement/$SimpleDestroyTrigger" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SimpleCreateTrigger, $SimpleCreateTrigger$Type} from "packages/com/simibubi/create/foundation/advancement/$SimpleCreateTrigger"

export class $SimpleDestroyTrigger extends $SimpleCreateTrigger {

constructor(arg0: string)

public "getId"(): $ResourceLocation
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleDestroyTrigger$Type = ($SimpleDestroyTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleDestroyTrigger_ = $SimpleDestroyTrigger$Type;
}}
declare module "packages/com/petrolpark/destroy/mixin/accessor/$AbstractVillagerAccessor" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"

export interface $AbstractVillagerAccessor {

 "invokeGetInventory"(): $SimpleContainer

(): $SimpleContainer
}

export namespace $AbstractVillagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractVillagerAccessor$Type = ($AbstractVillagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractVillagerAccessor_ = $AbstractVillagerAccessor$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/serializer/$Edge" {
import {$Bond$BondType, $Bond$BondType$Type} from "packages/com/petrolpark/destroy/chemistry/$Bond$BondType"
import {$Node, $Node$Type} from "packages/com/petrolpark/destroy/chemistry/serializer/$Node"

export class $Edge {
 "bondType": $Bond$BondType
 "marked": boolean

constructor(arg0: $Node$Type, arg1: $Node$Type, arg2: $Bond$BondType$Type)

public "flip"(): void
public "getSourceNode"(): $Node
public "getDestinationNode"(): $Node
get "sourceNode"(): $Node
get "destinationNode"(): $Node
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Edge$Type = ($Edge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Edge_ = $Edge$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$IPumpjackStructuralBlock$Component" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $IPumpjackStructuralBlock$Component extends $Enum<($IPumpjackStructuralBlock$Component)> implements $StringRepresentable {
static readonly "FRONT": $IPumpjackStructuralBlock$Component
static readonly "BACK": $IPumpjackStructuralBlock$Component
static readonly "MIDDLE": $IPumpjackStructuralBlock$Component
static readonly "TOP": $IPumpjackStructuralBlock$Component


public static "values"(): ($IPumpjackStructuralBlock$Component)[]
public static "valueOf"(arg0: string): $IPumpjackStructuralBlock$Component
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
export type $IPumpjackStructuralBlock$Component$Type = (("middle") | ("top") | ("back") | ("front")) | ($IPumpjackStructuralBlock$Component);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPumpjackStructuralBlock$Component_ = $IPumpjackStructuralBlock$Component$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/$ChargingBehaviour$Mode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChargingBehaviour$Mode extends $Enum<($ChargingBehaviour$Mode)> {
static readonly "WORLD": $ChargingBehaviour$Mode
static readonly "BELT": $ChargingBehaviour$Mode
static readonly "BASIN": $ChargingBehaviour$Mode


public static "values"(): ($ChargingBehaviour$Mode)[]
public static "valueOf"(arg0: string): $ChargingBehaviour$Mode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingBehaviour$Mode$Type = (("world") | ("belt") | ("basin")) | ($ChargingBehaviour$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingBehaviour$Mode_ = $ChargingBehaviour$Mode$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$ExtrusionDieBlock" {
import {$ExtrusionDieBlockEntity, $ExtrusionDieBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$ExtrusionDieBlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ExtrusionDieBlock extends $RotatedPillarBlock implements $IBE<($ExtrusionDieBlockEntity)>, $IWrenchable {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityClass"(): $Class<($ExtrusionDieBlockEntity)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ExtrusionDieBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($ExtrusionDieBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($ExtrusionDieBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($ExtrusionDieBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($ExtrusionDieBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtrusionDieBlock$Type = ($ExtrusionDieBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtrusionDieBlock_ = $ExtrusionDieBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$GeniusFluidTankBehaviour" {
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$SmartFluidTankBehaviour, $SmartFluidTankBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/fluid/$SmartFluidTankBehaviour"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"

export class $GeniusFluidTankBehaviour extends $SmartFluidTankBehaviour {
static readonly "TYPE": $BehaviourType<($SmartFluidTankBehaviour)>
static readonly "INPUT": $BehaviourType<($SmartFluidTankBehaviour)>
static readonly "OUTPUT": $BehaviourType<($SmartFluidTankBehaviour)>
 "blockEntity": $SmartBlockEntity

constructor(arg0: $BehaviourType$Type<($SmartFluidTankBehaviour$Type)>, arg1: $SmartBlockEntity$Type, arg2: integer, arg3: integer, arg4: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeniusFluidTankBehaviour$Type = ($GeniusFluidTankBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeniusFluidTankBehaviour_ = $GeniusFluidTankBehaviour$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$VatFluidTankBehaviour$VatTankSegment$VatFluidTank" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$VatFluidTankBehaviour$VatTankSegment, $VatFluidTankBehaviour$VatTankSegment$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$VatFluidTankBehaviour$VatTankSegment"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$GeniusFluidTankBehaviour$GeniusFluidTank, $GeniusFluidTankBehaviour$GeniusFluidTank$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$GeniusFluidTankBehaviour$GeniusFluidTank"

export class $VatFluidTankBehaviour$VatTankSegment$VatFluidTank extends $GeniusFluidTankBehaviour$GeniusFluidTank {

constructor(arg0: $VatFluidTankBehaviour$VatTankSegment$Type, arg1: integer, arg2: boolean, arg3: $Consumer$Type<(any)>)

public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "onContentsChanged"(): void
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "setFluid"(arg0: $FluidStack$Type): void
public "isEmptyOrFullOfAir"(): boolean
set "fluid"(value: $FluidStack$Type)
get "emptyOrFullOfAir"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatFluidTankBehaviour$VatTankSegment$VatFluidTank$Type = ($VatFluidTankBehaviour$VatTankSegment$VatFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatFluidTankBehaviour$VatTankSegment$VatFluidTank_ = $VatFluidTankBehaviour$VatTankSegment$VatFluidTank$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$RedstoneProgrammerBlockEntity" {
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RedstoneProgrammerBehaviour, $RedstoneProgrammerBehaviour$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/$RedstoneProgrammerBehaviour"

export class $RedstoneProgrammerBlockEntity extends $SmartBlockEntity {
 "programmer": $RedstoneProgrammerBehaviour
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneProgrammerBlockEntity$Type = ($RedstoneProgrammerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneProgrammerBlockEntity_ = $RedstoneProgrammerBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/item/directional/$IDirectionalOnBelt" {
import {$DirectionalTransportedItemStack, $DirectionalTransportedItemStack$Type} from "packages/com/petrolpark/destroy/item/directional/$DirectionalTransportedItemStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDirectionalOnBelt {

 "launch"(arg0: $DirectionalTransportedItemStack$Type, arg1: $Direction$Type): void
 "rotationForPlacement"(arg0: $ItemStack$Type): $Rotation
}

export namespace $IDirectionalOnBelt {
function isDirectional(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDirectionalOnBelt$Type = ($IDirectionalOnBelt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDirectionalOnBelt_ = $IDirectionalOnBelt$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$BlacklightBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$IUVLampBlock, $IUVLampBlock$Type} from "packages/com/petrolpark/destroy/util/vat/$IUVLampBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $BlacklightBlock extends $Block implements $IUVLampBlock, $IWrenchable, $ProperWaterloggedBlock {
static readonly "SIDE": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getUVPower"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): float
public static "getUVPower"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): float
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "fluidState"(arg0: $BlockState$Type): $FluidState
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
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
export type $BlacklightBlock$Type = ($BlacklightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlacklightBlock_ = $BlacklightBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/util/$DistillationTower" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BubbleCapBlockEntity, $BubbleCapBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$BubbleCapBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DistillationTower {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type)
constructor(arg0: $CompoundTag$Type, arg1: $Level$Type, arg2: $BlockPos$Type)

public "process"(): boolean
public "serializeNBT"(): $CompoundTag
public "tick"(arg0: $Level$Type): void
public "getHeight"(): integer
public "getControllerBubbleCap"(): $BubbleCapBlockEntity
public static "getTemperatureForDistillationTower"(arg0: $Level$Type, arg1: $BlockPos$Type): float
public "getControllerPos"(): $BlockPos
public "addBubbleCap"(arg0: $BubbleCapBlockEntity$Type): void
public "removeBubbleCap"(arg0: $BubbleCapBlockEntity$Type): void
public "findRecipe"(arg0: $Level$Type): void
get "height"(): integer
get "controllerBubbleCap"(): $BubbleCapBlockEntity
get "controllerPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistillationTower$Type = ($DistillationTower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistillationTower_ = $DistillationTower$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/$Mixture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Molecule, $Molecule$Type} from "packages/com/petrolpark/destroy/chemistry/$Molecule"
import {$Mixture$Phases, $Mixture$Phases$Type} from "packages/com/petrolpark/destroy/chemistry/$Mixture$Phases"
import {$Mixture$ReactionContext, $Mixture$ReactionContext$Type} from "packages/com/petrolpark/destroy/chemistry/$Mixture$ReactionContext"
import {$ReactionResult, $ReactionResult$Type} from "packages/com/petrolpark/destroy/chemistry/$ReactionResult"
import {$ReadOnlyMixture, $ReadOnlyMixture$Type} from "packages/com/petrolpark/destroy/chemistry/$ReadOnlyMixture"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReactionInBasinRecipe$ReactionInBasinResult, $ReactionInBasinRecipe$ReactionInBasinResult$Type} from "packages/com/petrolpark/destroy/recipe/$ReactionInBasinRecipe$ReactionInBasinResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Mixture extends $ReadOnlyMixture {
static readonly "IMPURITY_THRESHOLD": float

constructor()

public "scale"(arg0: float): void
public static "mix"(arg0: $Map$Type<($Mixture$Type), (double)>): $Mixture
public "getContents"(arg0: boolean): $List<($Molecule)>
public static "pure"(arg0: $Molecule$Type): $Mixture
public "heat"(arg0: float): void
public "writeNBT"(): $CompoundTag
public static "readNBT"(arg0: $CompoundTag$Type): $Mixture
public "setTemperature"(arg0: float): $Mixture
public "disturbEquilibrium"(): void
public "dissolveItems"(arg0: $Mixture$ReactionContext$Type, arg1: double): void
public "getVolumetricHeatCapacity"(): float
public "getCompletedResults"(arg0: double): $Map<($ReactionResult), (integer)>
public "getConcentrationOf"(arg0: $Molecule$Type): float
public "reactForTick"(arg0: $Mixture$ReactionContext$Type, arg1: integer): void
public "isAtEquilibrium"(): boolean
/**
 * 
 * @deprecated
 */
public "recalculateVolume"(arg0: integer): integer
public static "areVeryClose"(arg0: float, arg1: float): boolean
public "reactInBasin"(arg0: integer, arg1: $List$Type<($ItemStack$Type)>, arg2: float, arg3: float): $ReactionInBasinRecipe$ReactionInBasinResult
public "separatePhases"(arg0: double): $Mixture$Phases
set "temperature"(value: float)
get "volumetricHeatCapacity"(): float
get "atEquilibrium"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mixture$Type = ($Mixture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mixture_ = $Mixture$Type;
}}
declare module "packages/com/petrolpark/destroy/effect/$InebriationMobEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UncurableMobEffect, $UncurableMobEffect$Type} from "packages/com/petrolpark/destroy/effect/$UncurableMobEffect"

export class $InebriationMobEffect extends $UncurableMobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InebriationMobEffect$Type = ($InebriationMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InebriationMobEffect_ = $InebriationMobEffect$Type;
}}
declare module "packages/com/petrolpark/destroy/effect/$HangoverMobEffect" {
import {$DestroyMobEffect, $DestroyMobEffect$Type} from "packages/com/petrolpark/destroy/effect/$DestroyMobEffect"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $HangoverMobEffect extends $DestroyMobEffect {

constructor()

public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangoverMobEffect$Type = ($HangoverMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangoverMobEffect_ = $HangoverMobEffect$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$PumpjackCamBlockEntity" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PumpjackCamBlockEntity extends $KineticBlockEntity {
 "pumpjackPos": $BlockPos
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "remove"(arg0: $BlockPos$Type): void
public "update"(arg0: $BlockPos$Type): void
public "tick"(): void
public "isPowering"(arg0: $BlockPos$Type): boolean
public "canPower"(arg0: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpjackCamBlockEntity$Type = ($PumpjackCamBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpjackCamBlockEntity_ = $PumpjackCamBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$TestTubeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemFluidContainer, $ItemFluidContainer$Type} from "packages/net/minecraftforge/fluids/capability/$ItemFluidContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ILayerTintsWithAlphaItem, $ILayerTintsWithAlphaItem$Type} from "packages/com/petrolpark/destroy/item/renderer/$ILayerTintsWithAlphaItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TestTubeItem extends $ItemFluidContainer implements $ILayerTintsWithAlphaItem {
static readonly "CAPACITY": integer
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

public static "isEmpty"(arg0: $ItemStack$Type): boolean
public static "of"(arg0: $FluidStack$Type): $ItemStack
public static "getContents"(arg0: $ItemStack$Type): $Optional<($FluidStack)>
public static "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public static "setContents"(arg0: $ItemStack$Type, arg1: $FluidStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestTubeItem$Type = ($TestTubeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestTubeItem_ = $TestTubeItem$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/behaviour/fluidTankBehaviour/$GeniusFluidTankBehaviour$GeniusFluidTank" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$SmartFluidTank, $SmartFluidTank$Type} from "packages/com/simibubi/create/foundation/fluid/$SmartFluidTank"

export class $GeniusFluidTankBehaviour$GeniusFluidTank extends $SmartFluidTank {

constructor(arg0: integer, arg1: $Consumer$Type<($FluidStack$Type)>)

public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeniusFluidTankBehaviour$GeniusFluidTank$Type = ($GeniusFluidTankBehaviour$GeniusFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeniusFluidTankBehaviour$GeniusFluidTank_ = $GeniusFluidTankBehaviour$GeniusFluidTank$Type;
}}
declare module "packages/com/petrolpark/destroy/badge/$Badge" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ForgeRegistry, $ForgeRegistry$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$SimpleDestroyTrigger, $SimpleDestroyTrigger$Type} from "packages/com/petrolpark/destroy/advancement/$SimpleDestroyTrigger"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BadgeItem, $BadgeItem$Type} from "packages/com/petrolpark/destroy/item/$BadgeItem"

export class $Badge {
 "advancementTrigger": $SimpleDestroyTrigger

constructor()

public "getName"(): $Component
public "equals"(arg0: any): boolean
public "getId"(): $ResourceLocation
public "getDescription"(): $Component
public "getItem"(): $BadgeItem
public "setId"(arg0: $ResourceLocation$Type): void
public "grantAdvancement"(arg0: $Player$Type): void
public "setDuplicationItem"(arg0: $Ingredient$Type): void
public static "getBadge"(arg0: $ResourceLocation$Type): $Badge
public static "getBadge"(arg0: string, arg1: string): $Badge
public "setBadgeItem"(arg0: $ItemEntry$Type<($BadgeItem$Type)>): void
public static "badgeRegistry"(): $ForgeRegistry<($Badge)>
public "getDuplicationIngredient"(): $Ingredient
public "setAdvancementTrigger"(arg0: $SimpleDestroyTrigger$Type): void
public "getExampleDuplicationRecipe"(): $CraftingRecipe
get "name"(): $Component
get "id"(): $ResourceLocation
get "description"(): $Component
get "item"(): $BadgeItem
set "id"(value: $ResourceLocation$Type)
set "duplicationItem"(value: $Ingredient$Type)
set "badgeItem"(value: $ItemEntry$Type<($BadgeItem$Type)>)
get "duplicationIngredient"(): $Ingredient
set "advancementTrigger"(value: $SimpleDestroyTrigger$Type)
get "exampleDuplicationRecipe"(): $CraftingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Badge$Type = ($Badge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Badge_ = $Badge$Type;
}}
declare module "packages/com/petrolpark/destroy/block/entity/$SandCastleBlockEntity" {
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$SentimentalBehaviour, $SentimentalBehaviour$Type} from "packages/com/petrolpark/destroy/block/entity/behaviour/$SentimentalBehaviour"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SandCastleBlockEntity extends $SmartBlockEntity {
 "sentimentalBehaviour": $SentimentalBehaviour
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandCastleBlockEntity$Type = ($SandCastleBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandCastleBlockEntity_ = $SandCastleBlockEntity$Type;
}}
declare module "packages/com/petrolpark/destroy/item/$AlcoholicDrinkItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlcoholicDrinkItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getEatingSound"(): $SoundEvent
public "getDrinkingSound"(): $SoundEvent
public "getStrength"(): integer
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
get "strength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlcoholicDrinkItem$Type = ($AlcoholicDrinkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlcoholicDrinkItem_ = $AlcoholicDrinkItem$Type;
}}
declare module "packages/com/petrolpark/destroy/item/directional/$DirectionalTransportedItemStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TransportedItemStack, $TransportedItemStack$Type} from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FanProcessingType, $FanProcessingType$Type} from "packages/com/simibubi/create/content/kinetics/fan/processing/$FanProcessingType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $DirectionalTransportedItemStack extends $TransportedItemStack {
 "stack": $ItemStack
 "beltPosition": float
 "sideOffset": float
 "angle": integer
 "insertedAt": integer
 "insertedFrom": $Direction
 "locked": boolean
 "lockedExternally": boolean
 "prevBeltPosition": float
 "prevSideOffset": float
 "processedBy": $FanProcessingType
 "processingTime": integer

constructor(arg0: $ItemStack$Type)

public "refreshAngle"(): void
public "copy"(): $TransportedItemStack
public static "copy"(arg0: $TransportedItemStack$Type): $DirectionalTransportedItemStack
public "rotate"(arg0: $Rotation$Type): void
public "serializeNBT"(): $CompoundTag
public "setRotation"(arg0: $Rotation$Type): void
public "getTargetAngle"(): integer
public "getRotation"(): $Rotation
public "getTargetSideOffset"(): float
public "getSimilar"(): $TransportedItemStack
public static "copyFully"(arg0: $TransportedItemStack$Type): $DirectionalTransportedItemStack
set "rotation"(value: $Rotation$Type)
get "targetAngle"(): integer
get "rotation"(): $Rotation
get "targetSideOffset"(): float
get "similar"(): $TransportedItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalTransportedItemStack$Type = ($DirectionalTransportedItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionalTransportedItemStack_ = $DirectionalTransportedItemStack$Type;
}}
declare module "packages/com/petrolpark/destroy/block/$DynamiteBlock" {
import {$DynamiteBlockEntity, $DynamiteBlockEntity$Type} from "packages/com/petrolpark/destroy/block/entity/$DynamiteBlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DynamiteBlock extends $Block implements $IBE<($DynamiteBlockEntity)> {
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

public "explode"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): void
public "getBlockEntityClass"(): $Class<($DynamiteBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "onCaughtFire"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $LivingEntity$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $DynamiteBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($DynamiteBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($DynamiteBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($DynamiteBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($DynamiteBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamiteBlock$Type = ($DynamiteBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamiteBlock_ = $DynamiteBlock$Type;
}}
declare module "packages/com/petrolpark/destroy/chemistry/naming/$INameableProduct" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $INameableProduct {

 "getName"(arg0: boolean): $Component

(arg0: boolean): $Component
}

export namespace $INameableProduct {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INameableProduct$Type = ($INameableProduct);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INameableProduct_ = $INameableProduct$Type;
}}
