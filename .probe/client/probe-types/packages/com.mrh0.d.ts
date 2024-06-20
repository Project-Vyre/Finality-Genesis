declare module "packages/com/mrh0/createaddition/effect/$ShockingEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ShockingEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShockingEffect$Type = ($ShockingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShockingEffect_ = $ShockingEffect$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/redstone_relay/$RedstoneRelayBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EnergyNetwork, $EnergyNetwork$Type} from "packages/com/mrh0/createaddition/energy/network/$EnergyNetwork"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IWireNode, $IWireNode$Type} from "packages/com/mrh0/createaddition/energy/$IWireNode"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WireConnectResult, $WireConnectResult$Type} from "packages/com/mrh0/createaddition/energy/$WireConnectResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IObserveTileEntity, $IObserveTileEntity$Type} from "packages/com/mrh0/createaddition/network/$IObserveTileEntity"
import {$LocalNode, $LocalNode$Type} from "packages/com/mrh0/createaddition/energy/$LocalNode"
import {$WireType, $WireType$Type} from "packages/com/mrh0/createaddition/energy/$WireType"
import {$ConnectorType, $ConnectorType$Type} from "packages/com/mrh0/createaddition/blocks/connector/$ConnectorType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ObservePacket, $ObservePacket$Type} from "packages/com/mrh0/createaddition/network/$ObservePacket"

export class $RedstoneRelayBlockEntity extends $SmartBlockEntity implements $IWireNode, $IHaveGoggleInformation, $IObserveTileEntity {
static "OFFSET_NORTH": $Vec3
static "OFFSET_WEST": $Vec3
static "OFFSET_SOUTH": $Vec3
static "OFFSET_EAST": $Vec3
static "IN_VERTICAL_OFFSET_NORTH": $Vec3
static "IN_VERTICAL_OFFSET_WEST": $Vec3
static "IN_VERTICAL_OFFSET_SOUTH": $Vec3
static "IN_VERTICAL_OFFSET_EAST": $Vec3
static "OUT_VERTICAL_OFFSET_NORTH": $Vec3
static "OUT_VERTICAL_OFFSET_WEST": $Vec3
static "OUT_VERTICAL_OFFSET_SOUTH": $Vec3
static "OUT_VERTICAL_OFFSET_EAST": $Vec3
static readonly "NODE_COUNT": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "hasConnection"(arg0: integer): boolean
public "removeNode"(arg0: integer, arg1: boolean): void
public "removeNode"(arg0: $LocalNode$Type): void
public "removeNode"(arg0: $LocalNode$Type, arg1: boolean): void
public "removeNode"(arg0: integer): void
public static "connect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $BlockPos$Type, arg4: integer, arg5: $WireType$Type): $WireConnectResult
public "getNodeType"(arg0: integer): $WireType
public "setNode"(arg0: integer, arg1: integer, arg2: $BlockPos$Type, arg3: $WireType$Type): void
public static "disconnect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireConnectResult
public "getNetwork"(arg0: integer): $EnergyNetwork
public "setNetwork"(arg0: integer, arg1: $EnergyNetwork$Type): void
public "getPos"(): $BlockPos
public "dropWires"(arg0: $Level$Type, arg1: boolean): void
public "dropWires"(arg0: $Level$Type, arg1: $Player$Type, arg2: boolean): void
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$Type, arg2: ($LocalNode$Type)[], arg3: ($IWireNode$Type)[], arg4: $Level$Type): $IWireNode
public "getLocalNode"(arg0: integer): $LocalNode
public "getNodeCount"(): integer
public "dropWire"(arg0: $Level$Type, arg1: $LocalNode$Type): void
public static "dropWire"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): void
public "convertOldNbt"(arg0: $CompoundTag$Type): void
public "getWireNode"(arg0: integer): $IWireNode
public static "getWireNode"(arg0: $Level$Type, arg1: $BlockPos$Type): $IWireNode
public "validateLocalNodes"(arg0: ($LocalNode$Type)[]): boolean
public "getOtherNodeIndex"(arg0: integer): integer
public "handleWireCache"(arg0: $Level$Type, arg1: $Set$Type<($LocalNode$Type)>): void
public "getNodePos"(arg0: integer): $BlockPos
public "hasAnyConnection"(): boolean
public "awakeNetwork"(arg0: $Level$Type): boolean
public "hasConnectionTo"(arg0: $BlockPos$Type): boolean
public "isNetworkValid"(arg0: integer): boolean
public "getAvailableNode"(arg0: $Vec3$Type): integer
public "getAvailableNode"(): integer
public "isNodeInput"(arg0: integer): boolean
public "getConnectorType"(): $ConnectorType
public static "getNbtNode"(arg0: $CompoundTag$Type, arg1: integer): $CompoundTag
public static "readNodeWireType"(arg0: $CompoundTag$Type, arg1: integer): $WireType
public "getNodeOffset"(arg0: integer): $Vec3
public "getMaxWireLength"(): integer
public "disconnectWires"(): void
public "getConnectionTo"(arg0: $BlockPos$Type): $LocalNode
public "isNodeOutput"(arg0: integer): boolean
public static "readNodeBlockPos"(arg0: $CompoundTag$Type, arg1: integer, arg2: $BlockPos$Type): $BlockPos
public static "readNodeOtherIndex"(arg0: $CompoundTag$Type, arg1: integer): integer
public static "getTypeOfConnection"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireType
public "invalidateNodeCache"(): void
public "isNodeIndeciesConnected"(arg0: integer, arg1: integer): boolean
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
public "onObserved"(arg0: $ServerPlayer$Type, arg1: $ObservePacket$Type): void
get "pos"(): $BlockPos
get "nodeCount"(): integer
get "availableNode"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneRelayBlockEntity$Type = ($RedstoneRelayBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneRelayBlockEntity_ = $RedstoneRelayBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/debug/$IDebugDrawer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDebugDrawer {

 "drawDebug"(): void

(): void
}

export namespace $IDebugDrawer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDebugDrawer$Type = ($IDebugDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDebugDrawer_ = $IDebugDrawer$Type;
}}
declare module "packages/com/mrh0/createaddition/energy/$WireType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $WireType extends $Enum<($WireType)> {
static readonly "COPPER": $WireType
static readonly "GOLD": $WireType
static readonly "ELECTRUM": $WireType
static readonly "FESTIVE": $WireType


public "isFestive"(): boolean
public static "values"(): ($WireType)[]
public static "valueOf"(arg0: string): $WireType
public static "of"(arg0: $Item$Type): $WireType
public static "fromIndex"(arg0: integer): $WireType
public "transfer"(): integer
public "getIndex"(): integer
public "getDrop"(): $ItemStack
public "getRed"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public "getSourceDrop"(): $ItemStack
get "festive"(): boolean
get "index"(): integer
get "drop"(): $ItemStack
get "red"(): integer
get "green"(): integer
get "blue"(): integer
get "sourceDrop"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireType$Type = (("gold") | ("electrum") | ("festive") | ("copper")) | ($WireType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireType_ = $WireType$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/$SmallConnectorBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LocalNode, $LocalNode$Type} from "packages/com/mrh0/createaddition/energy/$LocalNode"
import {$ConnectorType, $ConnectorType$Type} from "packages/com/mrh0/createaddition/blocks/connector/$ConnectorType"
import {$WireType, $WireType$Type} from "packages/com/mrh0/createaddition/energy/$WireType"
import {$IWireNode, $IWireNode$Type} from "packages/com/mrh0/createaddition/energy/$IWireNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WireConnectResult, $WireConnectResult$Type} from "packages/com/mrh0/createaddition/energy/$WireConnectResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractConnectorBlockEntity, $AbstractConnectorBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$AbstractConnectorBlockEntity"

export class $SmallConnectorBlockEntity extends $AbstractConnectorBlockEntity {
static readonly "OFFSET_DOWN": $Vec3
static readonly "OFFSET_UP": $Vec3
static readonly "OFFSET_NORTH": $Vec3
static readonly "OFFSET_WEST": $Vec3
static readonly "OFFSET_SOUTH": $Vec3
static readonly "OFFSET_EAST": $Vec3
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getNodeCount"(): integer
public "getMaxOut"(): integer
public "getMaxIn"(): integer
public "getConnectorType"(): $ConnectorType
public "getNodeOffset"(arg0: integer): $Vec3
public "getMaxWireLength"(): integer
public static "connect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $BlockPos$Type, arg4: integer, arg5: $WireType$Type): $WireConnectResult
public static "disconnect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireConnectResult
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$Type, arg2: ($LocalNode$Type)[], arg3: ($IWireNode$Type)[], arg4: $Level$Type): $IWireNode
public static "dropWire"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): void
public static "getWireNode"(arg0: $Level$Type, arg1: $BlockPos$Type): $IWireNode
public static "getNbtNode"(arg0: $CompoundTag$Type, arg1: integer): $CompoundTag
public static "readNodeWireType"(arg0: $CompoundTag$Type, arg1: integer): $WireType
public static "readNodeBlockPos"(arg0: $CompoundTag$Type, arg1: integer, arg2: $BlockPos$Type): $BlockPos
public static "readNodeOtherIndex"(arg0: $CompoundTag$Type, arg1: integer): integer
public static "getTypeOfConnection"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireType
get "nodeCount"(): integer
get "maxOut"(): integer
get "maxIn"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallConnectorBlockEntity$Type = ($SmallConnectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallConnectorBlockEntity_ = $SmallConnectorBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/energy/$LocalNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$NodeRotation, $NodeRotation$Type} from "packages/com/mrh0/createaddition/energy/$NodeRotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WireType, $WireType$Type} from "packages/com/mrh0/createaddition/energy/$WireType"

export class $LocalNode {
static readonly "NODES": string
static readonly "ID": string
static readonly "OTHER": string
static readonly "TYPE": string
static readonly "X": string
static readonly "Y": string
static readonly "Z": string

constructor(arg0: $BlockEntity$Type, arg1: integer, arg2: integer, arg3: $WireType$Type, arg4: $BlockPos$Type)
constructor(arg0: $BlockEntity$Type, arg1: $CompoundTag$Type)

public "write"(arg0: $CompoundTag$Type): void
public "getType"(): $WireType
public "getIndex"(): integer
public "isInvalid"(): boolean
public "invalid"(): void
public "getPos"(): $BlockPos
public "getRelativePos"(): $Vec3i
public "updateRelative"(arg0: $NodeRotation$Type): void
public "getOtherIndex"(): integer
get "type"(): $WireType
get "index"(): integer
get "pos"(): $BlockPos
get "relativePos"(): $Vec3i
get "otherIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalNode$Type = ($LocalNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalNode_ = $LocalNode$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/digital_adapter/$ISpeedControllerAdapter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISpeedControllerAdapter {

 "setTargetSpeed"(arg0: integer): void
 "getTargetSpeed"(): integer
}

export namespace $ISpeedControllerAdapter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpeedControllerAdapter$Type = ($ISpeedControllerAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpeedControllerAdapter_ = $ISpeedControllerAdapter$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/rolling_mill/$RollingMillBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$RollingMillBlockEntity, $RollingMillBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/rolling_mill/$RollingMillBlockEntity"
import {$HorizontalKineticBlock, $HorizontalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$HorizontalKineticBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $RollingMillBlock extends $HorizontalKineticBlock implements $IBE<($RollingMillBlockEntity)> {
static readonly "ROLLING_MILL_SHAPE": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "updateEntityAfterFallOn"(arg0: $BlockGetter$Type, arg1: $Entity$Type): void
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getBlockEntityClass"(): $Class<($RollingMillBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $RollingMillBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($RollingMillBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($RollingMillBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($RollingMillBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($RollingMillBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollingMillBlock$Type = ($RollingMillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollingMillBlock_ = $RollingMillBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/item/$BiomassPellet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BiomassPellet extends $Item {
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

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomassPellet$Type = ($BiomassPellet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomassPellet_ = $BiomassPellet$Type;
}}
declare module "packages/com/mrh0/createaddition/recipe/rolling/$RollingRecipe" {
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$IAssemblyRecipe, $IAssemblyRecipe$Type} from "packages/com/simibubi/create/content/processing/sequenced/$IAssemblyRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SequencedAssemblySubCategory, $SequencedAssemblySubCategory$Type} from "packages/com/simibubi/create/compat/jei/category/sequencedAssembly/$SequencedAssemblySubCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ProcessingRecipe, $ProcessingRecipe$Type} from "packages/com/simibubi/create/content/processing/recipe/$ProcessingRecipe"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $RollingRecipe extends $ProcessingRecipe<($RecipeWrapper)> implements $IAssemblyRecipe {


public "matches"(arg0: $RecipeWrapper$Type, arg1: $Level$Type): boolean
public static "register"(): void
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $RecipeWrapper$Type, arg1: $RegistryAccess$Type): $ItemStack
public "addRequiredMachines"(arg0: $Set$Type<($ItemLike$Type)>): void
public "addAssemblyIngredients"(arg0: $List$Type<($Ingredient$Type)>): void
public "getDescriptionForAssembly"(): $Component
public "getId"(): $ResourceLocation
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredient"(): $Ingredient
public "isSpecial"(): boolean
public "getResultItem"(): $ItemStack
public "getJEISubCategory"(): $Supplier<($Supplier<($SequencedAssemblySubCategory)>)>
public "addAssemblyFluidIngredients"(arg0: $List$Type<($FluidIngredient$Type)>): void
public "supportsAssembly"(): boolean
get "descriptionForAssembly"(): $Component
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredient"(): $Ingredient
get "special"(): boolean
get "resultItem"(): $ItemStack
get "jEISubCategory"(): $Supplier<($Supplier<($SequencedAssemblySubCategory)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollingRecipe$Type = ($RollingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollingRecipe_ = $RollingRecipe$Type;
}}
declare module "packages/com/mrh0/createaddition/energy/$NodeRotation" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $NodeRotation extends $Enum<($NodeRotation)> implements $StringRepresentable {
static readonly "NONE": $NodeRotation
static readonly "Y_CLOCKWISE_90": $NodeRotation
static readonly "Y_CLOCKWISE_180": $NodeRotation
static readonly "Y_COUNTERCLOCKWISE_90": $NodeRotation
static readonly "X_CLOCKWISE_90": $NodeRotation
static readonly "X_CLOCKWISE_180": $NodeRotation
static readonly "X_COUNTERCLOCKWISE_90": $NodeRotation
static readonly "Z_CLOCKWISE_90": $NodeRotation
static readonly "Z_CLOCKWISE_180": $NodeRotation
static readonly "Z_COUNTERCLOCKWISE_90": $NodeRotation
static readonly "ROTATION": $EnumProperty<($NodeRotation)>
static readonly "VALUES": ($NodeRotation)[]


public static "get"(arg0: $Direction$Axis$Type, arg1: $Rotation$Type): $NodeRotation
public static "values"(): ($NodeRotation)[]
public static "valueOf"(arg0: string): $NodeRotation
public "rotate"(arg0: $Direction$Type, arg1: boolean): $Direction
public "getAxis"(): $Direction$Axis
public "getSerializedName"(): string
public "getRotation"(): $Rotation
public "updateRelative"(arg0: $Vec3i$Type): $Vec3i
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "axis"(): $Direction$Axis
get "serializedName"(): string
get "rotation"(): $Rotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeRotation$Type = (("x_counterclockwise_90") | ("z_counterclockwise_90") | ("x_clockwise_180") | ("none") | ("y_clockwise_180") | ("z_clockwise_90") | ("y_counterclockwise_90") | ("x_clockwise_90") | ("z_clockwise_180") | ("y_clockwise_90")) | ($NodeRotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeRotation_ = $NodeRotation$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/portable_energy_interface/$PortableEnergyInterfaceBlockEntity" {
import {$PortableStorageInterfaceBlockEntity, $PortableStorageInterfaceBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/actors/psi/$PortableStorageInterfaceBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PortableEnergyInterfaceBlockEntity extends $PortableStorageInterfaceBlockEntity {
static readonly "ANIMATION": integer
 "keepAlive": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableEnergyInterfaceBlockEntity$Type = ($PortableEnergyInterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableEnergyInterfaceBlockEntity_ = $PortableEnergyInterfaceBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/recipe/liquid_burning/$LiquidBurningRecipeSerializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CARecipeSerializer, $CARecipeSerializer$Type} from "packages/com/mrh0/createaddition/recipe/$CARecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$LiquidBurningRecipe, $LiquidBurningRecipe$Type} from "packages/com/mrh0/createaddition/recipe/liquid_burning/$LiquidBurningRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $LiquidBurningRecipeSerializer extends $CARecipeSerializer<($LiquidBurningRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $LiquidBurningRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $LiquidBurningRecipe$Type): void
public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBurningRecipeSerializer$Type = ($LiquidBurningRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBurningRecipeSerializer_ = $LiquidBurningRecipeSerializer$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/barbed_wire/$BarbedWireBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IForgeShearable, $IForgeShearable$Type} from "packages/net/minecraftforge/common/$IForgeShearable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BarbedWireBlock extends $Block implements $IForgeShearable {
static readonly "VERTICAL": $BooleanProperty
static readonly "HORIZONTAL_FACING": $DirectionProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "onSheared"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: integer): $List<($ItemStack)>
public "isShearable"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarbedWireBlock$Type = ($BarbedWireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarbedWireBlock_ = $BarbedWireBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/item/$BiomassPelletBlock" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BiomassPelletBlock extends $BlockItem {
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

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomassPelletBlock$Type = ($BiomassPelletBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomassPelletBlock_ = $BiomassPelletBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/modular_accumulator/$ModularAccumulatorBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IMultiBlockEntityContainer, $IMultiBlockEntityContainer$Type} from "packages/com/simibubi/create/foundation/blockEntity/$IMultiBlockEntityContainer"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$IDebugDrawer, $IDebugDrawer$Type} from "packages/com/mrh0/createaddition/debug/$IDebugDrawer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IObserveTileEntity, $IObserveTileEntity$Type} from "packages/com/mrh0/createaddition/network/$IObserveTileEntity"
import {$ThresholdSwitchObservable, $ThresholdSwitchObservable$Type} from "packages/com/simibubi/create/content/redstone/thresholdSwitch/$ThresholdSwitchObservable"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$ObservePacket, $ObservePacket$Type} from "packages/com/mrh0/createaddition/network/$ObservePacket"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMultiTileEnergyContainer, $IMultiTileEnergyContainer$Type} from "packages/com/mrh0/createaddition/energy/$IMultiTileEnergyContainer"

export class $ModularAccumulatorBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiTileEnergyContainer, $IObserveTileEntity, $IDebugDrawer, $ThresholdSwitchObservable {
 "gauge": $LerpedFloat
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
public "onObserved"(arg0: $ServerPlayer$Type, arg1: $ObservePacket$Type): void
public "drawDebug"(): void
public "getPercent"(): float
public "setHeight"(arg0: integer): void
public "getMaxLength"(arg0: $Direction$Axis$Type, arg1: integer): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "getMaxWidth"(): integer
public "setWidth"(arg0: integer): void
public "getController"(): $BlockPos
public "setController"(arg0: $BlockPos$Type): void
public "removeController"(arg0: boolean): void
public "getControllerBE"<T extends ($BlockEntity) & ($IMultiBlockEntityContainer)>(): T
public "getLastKnownPos"(): $BlockPos
public "isController"(): boolean
public "getMainAxisOf"(arg0: $BlockEntity$Type): $Direction$Axis
public "notifyMultiUpdated"(): void
public "setExtraData"(arg0: any): void
public "modifyExtraData"(arg0: any): any
public "getMainConnectionAxis"(): $Direction$Axis
public "preventConnectivityUpdate"(): void
public "getExtraData"(): any
get "percent"(): float
set "height"(value: integer)
get "width"(): integer
get "height"(): integer
get "maxWidth"(): integer
set "width"(value: integer)
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$Type)
get "controllerBE"(): T
get "lastKnownPos"(): $BlockPos
get "controller"(): boolean
set "extraData"(value: any)
get "mainConnectionAxis"(): $Direction$Axis
get "extraData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularAccumulatorBlockEntity$Type = ($ModularAccumulatorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularAccumulatorBlockEntity_ = $ModularAccumulatorBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/cake/$CACakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$CakeBlock, $CakeBlock$Type} from "packages/net/minecraft/world/level/block/$CakeBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CACakeBlock extends $CakeBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CACakeBlock$Type = ($CACakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CACakeBlock_ = $CACakeBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/rolling_mill/$RollingMillBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$RollingRecipe, $RollingRecipe$Type} from "packages/com/mrh0/createaddition/recipe/rolling/$RollingRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RollingMillBlockEntity extends $KineticBlockEntity {
 "inputInv": $ItemStackHandler
 "outputInv": $ItemStackHandler
 "capability": $LazyOptional<($IItemHandler)>
 "timer": integer
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "remove"(): void
public "find"(arg0: $RecipeWrapper$Type, arg1: $Level$Type): $Optional<($RollingRecipe)>
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "calculateStressApplied"(): float
public "spawnParticles"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public static "getProcessingDuration"(): integer
public "getProcessingSpeed"(): integer
get "processingDuration"(): integer
get "processingSpeed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollingMillBlockEntity$Type = ($RollingMillBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollingMillBlockEntity_ = $RollingMillBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/creative_energy/$CreativeEnergyBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$CrateBlockEntity, $CrateBlockEntity$Type} from "packages/com/simibubi/create/content/logistics/crate/$CrateBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CreativeEnergyBlockEntity extends $CrateBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "remove"(): void
public "setCache"(arg0: $Direction$Type, arg1: $LazyOptional$Type<($IEnergyStorage$Type)>): void
public "tick"(): void
public "getCachedEnergy"(arg0: $Direction$Type): $IEnergyStorage
public "updateCache"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "firstTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEnergyBlockEntity$Type = ($CreativeEnergyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeEnergyBlockEntity_ = $CreativeEnergyBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/tesla_coil/$TeslaCoilBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$BaseElectricBlockEntity, $BaseElectricBlockEntity$Type} from "packages/com/mrh0/createaddition/energy/$BaseElectricBlockEntity"
import {$ChargingRecipe, $ChargingRecipe$Type} from "packages/com/mrh0/createaddition/recipe/charging/$ChargingRecipe"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BeltProcessingBehaviour, $BeltProcessingBehaviour$Type} from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$BeltProcessingBehaviour"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TeslaCoilBlockEntity extends $BaseElectricBlockEntity implements $IHaveGoggleInformation {
 "processingBehaviour": $BeltProcessingBehaviour
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "find"(arg0: $RecipeWrapper$Type, arg1: $Level$Type): $Optional<($ChargingRecipe)>
public "getCapacity"(): integer
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "tickAudio"(): void
public "isEnergyInput"(arg0: $Direction$Type): boolean
public "isPoweredState"(): boolean
public "isEnergyOutput"(arg0: $Direction$Type): boolean
public "getMaxOut"(): integer
public "getMaxIn"(): integer
public "getConsumption"(): integer
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "capacity"(): integer
get "poweredState"(): boolean
get "maxOut"(): integer
get "maxIn"(): integer
get "consumption"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeslaCoilBlockEntity$Type = ($TeslaCoilBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeslaCoilBlockEntity_ = $TeslaCoilBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorVariant" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ConnectorVariant extends $Enum<($ConnectorVariant)> implements $StringRepresentable {
static readonly "Default": $ConnectorVariant
static readonly "Girder": $ConnectorVariant


public static "values"(): ($ConnectorVariant)[]
public static "test"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $ConnectorVariant
public static "valueOf"(arg0: string): $ConnectorVariant
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
export type $ConnectorVariant$Type = (("girder") | ("default")) | ($ConnectorVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectorVariant_ = $ConnectorVariant$Type;
}}
declare module "packages/com/mrh0/createaddition/recipe/$FluidRecipeWrapper" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $FluidRecipeWrapper implements $Container {
 "fluid": $FluidStack

constructor(arg0: $FluidStack$Type)

public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "setChanged"(): void
public "stillValid"(arg0: $Player$Type): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "clearContent"(): void
public "isEmpty"(): boolean
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
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
get "containerSize"(): integer
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
export type $FluidRecipeWrapper$Type = ($FluidRecipeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidRecipeWrapper_ = $FluidRecipeWrapper$Type;
}}
declare module "packages/com/mrh0/createaddition/item/$ElectrumAmulet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ElectrumAmulet extends $Item {
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

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrumAmulet$Type = ($ElectrumAmulet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrumAmulet_ = $ElectrumAmulet$Type;
}}
declare module "packages/com/mrh0/createaddition/energy/network/$EnergyNetwork" {
import {$IWireNode, $IWireNode$Type} from "packages/com/mrh0/createaddition/energy/$IWireNode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyNetwork {

constructor(arg0: $Level$Type)

public "getBuff"(): integer
public "getMaxBuff"(): integer
public "getId"(): integer
public "removed"(): void
public static "nextNode"(arg0: $Level$Type, arg1: $EnergyNetwork$Type, arg2: $Map$Type<(string), ($IWireNode$Type)>, arg3: $IWireNode$Type, arg4: integer): $EnergyNetwork
public "push"(arg0: integer, arg1: boolean): integer
public "push"(arg0: integer): integer
public "isValid"(): boolean
public "invalidate"(): void
public "pull"(arg0: integer): integer
public "pull"(arg0: integer, arg1: boolean): integer
public "tick"(arg0: integer): void
public "demand"(arg0: integer): integer
public "getPulled"(): integer
public "getPushed"(): integer
public "getDemand"(): integer
get "buff"(): integer
get "maxBuff"(): integer
get "id"(): integer
get "valid"(): boolean
get "pulled"(): integer
get "pushed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyNetwork$Type = ($EnergyNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyNetwork_ = $EnergyNetwork$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/$SmallLightConnectorBlock" {
import {$VoxelShaper, $VoxelShaper$Type} from "packages/com/simibubi/create/foundation/utility/$VoxelShaper"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ConnectorMode, $ConnectorMode$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorMode"
import {$ConnectorVariant, $ConnectorVariant$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorVariant"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SmallLightConnectorBlockEntity, $SmallLightConnectorBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/connector/$SmallLightConnectorBlockEntity"
import {$AbstractConnectorBlock, $AbstractConnectorBlock$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$AbstractConnectorBlock"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SmallLightConnectorBlock extends $AbstractConnectorBlock<($SmallLightConnectorBlockEntity)> {
static readonly "POWERED": $BooleanProperty
static readonly "CONNECTOR_SHAPE": $VoxelShaper
static readonly "FACING": $DirectionProperty
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($SmallLightConnectorBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityClass"(): $Class<($SmallLightConnectorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallLightConnectorBlock$Type = ($SmallLightConnectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallLightConnectorBlock_ = $SmallLightConnectorBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/modular_accumulator/$ModularAccumulatorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$ModularAccumulatorBlockEntity, $ModularAccumulatorBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/modular_accumulator/$ModularAccumulatorBlockEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ModularAccumulatorBlock extends $Block implements $IWrenchable, $IBE<($ModularAccumulatorBlockEntity)> {
static readonly "TOP": $BooleanProperty
static readonly "BOTTOM": $BooleanProperty
static readonly "SILENCED_METAL": $SoundType
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


public static "regular"(arg0: $BlockBehaviour$Properties$Type): $ModularAccumulatorBlock
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "creative"(arg0: $BlockBehaviour$Properties$Type): $ModularAccumulatorBlock
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($ModularAccumulatorBlockEntity)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "isAccumulator"(arg0: $BlockState$Type): boolean
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ModularAccumulatorBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($ModularAccumulatorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($ModularAccumulatorBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($ModularAccumulatorBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($ModularAccumulatorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularAccumulatorBlock$Type = ($ModularAccumulatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularAccumulatorBlock_ = $ModularAccumulatorBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/liquid_blaze_burner/$LiquidBlazeBurnerBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LiquidBlazeBurnerBlockEntity$FuelType, $LiquidBlazeBurnerBlockEntity$FuelType$Type} from "packages/com/mrh0/createaddition/blocks/liquid_blaze_burner/$LiquidBlazeBurnerBlockEntity$FuelType"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IObserveTileEntity, $IObserveTileEntity$Type} from "packages/com/mrh0/createaddition/network/$IObserveTileEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$ObservePacket, $ObservePacket$Type} from "packages/com/mrh0/createaddition/network/$ObservePacket"
import {$LiquidBurningRecipe, $LiquidBurningRecipe$Type} from "packages/com/mrh0/createaddition/recipe/liquid_burning/$LiquidBurningRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel$Type} from "packages/com/simibubi/create/content/processing/burner/$BlazeBurnerBlock$HeatLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LiquidBlazeBurnerBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IObserveTileEntity {
static readonly "MAX_HEAT_CAPACITY": integer
 "first": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "find"(arg0: $FluidStack$Type, arg1: $Level$Type): $Optional<($LiquidBurningRecipe)>
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "updateBlockState"(): void
public "spawnParticleBurst"(arg0: boolean): void
public "getActiveFuel"(): $LiquidBlazeBurnerBlockEntity$FuelType
public "isValidBlockAbove"(): boolean
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "isCreative"(): boolean
public "isCreativeFuel"(arg0: $ItemStack$Type): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getRemainingBurnTime"(): integer
public "getHeatLevelFromBlock"(): $BlazeBurnerBlock$HeatLevel
public "burningTick"(): void
public "onObserved"(arg0: $ServerPlayer$Type, arg1: $ObservePacket$Type): void
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "activeFuel"(): $LiquidBlazeBurnerBlockEntity$FuelType
get "validBlockAbove"(): boolean
get "creative"(): boolean
get "remainingBurnTime"(): integer
get "heatLevelFromBlock"(): $BlazeBurnerBlock$HeatLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlazeBurnerBlockEntity$Type = ($LiquidBlazeBurnerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBlazeBurnerBlockEntity_ = $LiquidBlazeBurnerBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/liquid_blaze_burner/$LiquidBlazeBurnerBlockEntity$FuelType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LiquidBlazeBurnerBlockEntity$FuelType extends $Enum<($LiquidBlazeBurnerBlockEntity$FuelType)> {
static readonly "NONE": $LiquidBlazeBurnerBlockEntity$FuelType
static readonly "NORMAL": $LiquidBlazeBurnerBlockEntity$FuelType
static readonly "SPECIAL": $LiquidBlazeBurnerBlockEntity$FuelType


public static "values"(): ($LiquidBlazeBurnerBlockEntity$FuelType)[]
public static "valueOf"(arg0: string): $LiquidBlazeBurnerBlockEntity$FuelType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlazeBurnerBlockEntity$FuelType$Type = (("special") | ("normal") | ("none")) | ($LiquidBlazeBurnerBlockEntity$FuelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBlazeBurnerBlockEntity$FuelType_ = $LiquidBlazeBurnerBlockEntity$FuelType$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/alternator/$AlternatorBlock" {
import {$AlternatorBlockEntity, $AlternatorBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/alternator/$AlternatorBlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShaper, $VoxelShaper$Type} from "packages/com/simibubi/create/foundation/utility/$VoxelShaper"
import {$IRotate, $IRotate$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalKineticBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AlternatorBlock extends $DirectionalKineticBlock implements $IBE<($AlternatorBlockEntity)>, $IRotate {
static readonly "ALTERNATOR_SHAPE": $VoxelShaper
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "getBlockEntityClass"(): $Class<($AlternatorBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hideStressImpact"(): boolean
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AlternatorBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AlternatorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AlternatorBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AlternatorBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
get "blockEntityClass"(): $Class<($AlternatorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlternatorBlock$Type = ($AlternatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlternatorBlock_ = $AlternatorBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/modular_accumulator/$ModularAccumulatorBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularAccumulatorBlockItem extends $BlockItem {
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
export type $ModularAccumulatorBlockItem$Type = ($ModularAccumulatorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularAccumulatorBlockItem_ = $ModularAccumulatorBlockItem$Type;
}}
declare module "packages/com/mrh0/createaddition/network/$IObserveTileEntity" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ObservePacket, $ObservePacket$Type} from "packages/com/mrh0/createaddition/network/$ObservePacket"

export interface $IObserveTileEntity {

 "onObserved"(arg0: $ServerPlayer$Type, arg1: $ObservePacket$Type): void

(arg0: $ServerPlayer$Type, arg1: $ObservePacket$Type): void
}

export namespace $IObserveTileEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IObserveTileEntity$Type = ($IObserveTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IObserveTileEntity_ = $IObserveTileEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/$ConnectorType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConnectorType extends $Enum<($ConnectorType)> {
static readonly "Small": $ConnectorType
static readonly "Large": $ConnectorType
readonly "name": string


public static "values"(): ($ConnectorType)[]
public static "valueOf"(arg0: string): $ConnectorType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectorType$Type = (("small") | ("large")) | ($ConnectorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectorType_ = $ConnectorType$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/portable_energy_interface/$PortableEnergyInterfaceBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
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
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WrenchableDirectionalBlock, $WrenchableDirectionalBlock$Type} from "packages/com/simibubi/create/foundation/block/$WrenchableDirectionalBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$PortableEnergyInterfaceBlockEntity, $PortableEnergyInterfaceBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/portable_energy_interface/$PortableEnergyInterfaceBlockEntity"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PortableEnergyInterfaceBlock extends $WrenchableDirectionalBlock implements $IBE<($PortableEnergyInterfaceBlockEntity)> {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($PortableEnergyInterfaceBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PortableEnergyInterfaceBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($PortableEnergyInterfaceBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($PortableEnergyInterfaceBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($PortableEnergyInterfaceBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($PortableEnergyInterfaceBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableEnergyInterfaceBlock$Type = ($PortableEnergyInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableEnergyInterfaceBlock_ = $PortableEnergyInterfaceBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/network/$ObservePacket" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ObservePacket {

constructor(arg0: $BlockPos$Type, arg1: integer)

public "getNode"(): integer
public static "decode"(arg0: $FriendlyByteBuf$Type): $ObservePacket
public static "encode"(arg0: $ObservePacket$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $ObservePacket$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public static "tick"(): void
public static "send"(arg0: $BlockPos$Type, arg1: integer): boolean
public "getPos"(): $BlockPos
get "node"(): integer
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObservePacket$Type = ($ObservePacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObservePacket_ = $ObservePacket$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/redstone_relay/$RedstoneRelayBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$RedstoneRelayBlockEntity, $RedstoneRelayBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/redstone_relay/$RedstoneRelayBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ITransformableBlock, $ITransformableBlock$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShaper, $VoxelShaper$Type} from "packages/com/simibubi/create/foundation/utility/$VoxelShaper"
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
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $RedstoneRelayBlock extends $Block implements $IBE<($RedstoneRelayBlockEntity)>, $IWrenchable, $ITransformableBlock {
static readonly "VERTICAL": $BooleanProperty
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "HORIZONTAL_SHAPE_MAIN": $VoxelShape
static readonly "HORIZONTAL_SHAPE_X": $VoxelShape
static readonly "HORIZONTAL_SHAPE_Z": $VoxelShape
static readonly "VERTICAL_SHAPE": $VoxelShaper
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
public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($RedstoneRelayBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $RedstoneRelayBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($RedstoneRelayBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($RedstoneRelayBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($RedstoneRelayBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($RedstoneRelayBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneRelayBlock$Type = ($RedstoneRelayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneRelayBlock_ = $RedstoneRelayBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/digital_adapter/$DigitalAdapterBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DigitalAdapterBlockItem extends $BlockItem {
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

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitalAdapterBlockItem$Type = ($DigitalAdapterBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DigitalAdapterBlockItem_ = $DigitalAdapterBlockItem$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/alternator/$AlternatorBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AlternatorBlockEntity extends $KineticBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "remove"(): void
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "setCache"(arg0: $Direction$Type, arg1: $LazyOptional$Type<($IEnergyStorage$Type)>): void
public "tick"(): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "tickAudio"(): void
public "getCachedEnergy"(arg0: $Direction$Type): $IEnergyStorage
public "calculateStressApplied"(): float
public "updateCache"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public static "getEnergyProductionRate"(arg0: integer): integer
public "isEnergyInput"(arg0: $Direction$Type): boolean
public "isEnergyOutput"(arg0: $Direction$Type): boolean
public "firstTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlternatorBlockEntity$Type = ($AlternatorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlternatorBlockEntity_ = $AlternatorBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/creative_energy/$CreativeEnergyBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CrateBlock, $CrateBlock$Type} from "packages/com/simibubi/create/content/logistics/crate/$CrateBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
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
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CreativeEnergyBlockEntity, $CreativeEnergyBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/creative_energy/$CreativeEnergyBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CreativeEnergyBlock extends $CrateBlock implements $IBE<($CreativeEnergyBlockEntity)> {
static readonly "CREATIVE_ENERGY_SHAPE": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($CreativeEnergyBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CreativeEnergyBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CreativeEnergyBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CreativeEnergyBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CreativeEnergyBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
get "blockEntityClass"(): $Class<($CreativeEnergyBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEnergyBlock$Type = ($CreativeEnergyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeEnergyBlock_ = $CreativeEnergyBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/recipe/charging/$ChargingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ChargingRecipe implements $Recipe<($RecipeWrapper)> {
readonly "id": $ResourceLocation
 "ingredient": $Ingredient
 "output": $ItemStack
 "energy": integer
 "maxChargeRate": integer

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer, arg4: integer)

public "matches"(arg0: $RecipeWrapper$Type, arg1: $Level$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $RecipeWrapper$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getEnergy"(): integer
public "getResultItem"(): $ItemStack
public "getMaxChargeRate"(): integer
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $RecipeWrapper$Type): $NonNullList<($ItemStack)>
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
get "energy"(): integer
get "resultItem"(): $ItemStack
get "maxChargeRate"(): integer
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
export type $ChargingRecipe$Type = ($ChargingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingRecipe_ = $ChargingRecipe$Type;
}}
declare module "packages/com/mrh0/createaddition/energy/$IMultiTileEnergyContainer" {
import {$IMultiBlockEntityContainer, $IMultiBlockEntityContainer$Type} from "packages/com/simibubi/create/foundation/blockEntity/$IMultiBlockEntityContainer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IMultiTileEnergyContainer extends $IMultiBlockEntityContainer {

 "setHeight"(arg0: integer): void
 "getMaxLength"(arg0: $Direction$Axis$Type, arg1: integer): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "getMaxWidth"(): integer
 "setWidth"(arg0: integer): void
 "getController"(): $BlockPos
 "setController"(arg0: $BlockPos$Type): void
 "removeController"(arg0: boolean): void
 "getControllerBE"<T extends ($BlockEntity) & ($IMultiBlockEntityContainer)>(): T
 "getLastKnownPos"(): $BlockPos
 "isController"(): boolean
 "getMainAxisOf"(arg0: $BlockEntity$Type): $Direction$Axis
 "notifyMultiUpdated"(): void
 "setExtraData"(arg0: any): void
 "modifyExtraData"(arg0: any): any
 "getMainConnectionAxis"(): $Direction$Axis
 "preventConnectivityUpdate"(): void
 "getExtraData"(): any
}

export namespace $IMultiTileEnergyContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiTileEnergyContainer$Type = ($IMultiTileEnergyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiTileEnergyContainer_ = $IMultiTileEnergyContainer$Type;
}}
declare module "packages/com/mrh0/createaddition/energy/$IWireNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EnergyNetwork, $EnergyNetwork$Type} from "packages/com/mrh0/createaddition/energy/network/$EnergyNetwork"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LocalNode, $LocalNode$Type} from "packages/com/mrh0/createaddition/energy/$LocalNode"
import {$WireType, $WireType$Type} from "packages/com/mrh0/createaddition/energy/$WireType"
import {$ConnectorType, $ConnectorType$Type} from "packages/com/mrh0/createaddition/blocks/connector/$ConnectorType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$WireConnectResult, $WireConnectResult$Type} from "packages/com/mrh0/createaddition/energy/$WireConnectResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWireNode {

 "hasConnection"(arg0: integer): boolean
 "removeNode"(arg0: integer, arg1: boolean): void
 "removeNode"(arg0: $LocalNode$Type): void
 "removeNode"(arg0: $LocalNode$Type, arg1: boolean): void
 "removeNode"(arg0: integer): void
 "getNodeType"(arg0: integer): $WireType
 "setNode"(arg0: integer, arg1: integer, arg2: $BlockPos$Type, arg3: $WireType$Type): void
 "getNetwork"(arg0: integer): $EnergyNetwork
 "setNetwork"(arg0: integer, arg1: $EnergyNetwork$Type): void
 "getPos"(): $BlockPos
 "dropWires"(arg0: $Level$Type, arg1: boolean): void
 "dropWires"(arg0: $Level$Type, arg1: $Player$Type, arg2: boolean): void
 "getLocalNode"(arg0: integer): $LocalNode
 "getNodeCount"(): integer
 "dropWire"(arg0: $Level$Type, arg1: $LocalNode$Type): void
 "convertOldNbt"(arg0: $CompoundTag$Type): void
 "getWireNode"(arg0: integer): $IWireNode
 "validateLocalNodes"(arg0: ($LocalNode$Type)[]): boolean
 "getOtherNodeIndex"(arg0: integer): integer
 "handleWireCache"(arg0: $Level$Type, arg1: $Set$Type<($LocalNode$Type)>): void
 "getNodePos"(arg0: integer): $BlockPos
 "hasAnyConnection"(): boolean
 "awakeNetwork"(arg0: $Level$Type): boolean
 "hasConnectionTo"(arg0: $BlockPos$Type): boolean
 "isNetworkValid"(arg0: integer): boolean
 "getAvailableNode"(arg0: $Vec3$Type): integer
 "getAvailableNode"(): integer
 "isNodeInput"(arg0: integer): boolean
 "getConnectorType"(): $ConnectorType
 "getNodeOffset"(arg0: integer): $Vec3
 "getMaxWireLength"(): integer
 "disconnectWires"(): void
 "getConnectionTo"(arg0: $BlockPos$Type): $LocalNode
 "isNodeOutput"(arg0: integer): boolean
 "invalidateNodeCache"(): void
 "isNodeIndeciesConnected"(arg0: integer, arg1: integer): boolean
}

export namespace $IWireNode {
function connect(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $BlockPos$Type, arg4: integer, arg5: $WireType$Type): $WireConnectResult
function disconnect(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireConnectResult
function getWireNodeFrom(arg0: integer, arg1: $IWireNode$Type, arg2: ($LocalNode$Type)[], arg3: ($IWireNode$Type)[], arg4: $Level$Type): $IWireNode
function dropWire(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): void
function getWireNode(arg0: $Level$Type, arg1: $BlockPos$Type): $IWireNode
function getNbtNode(arg0: $CompoundTag$Type, arg1: integer): $CompoundTag
function readNodeWireType(arg0: $CompoundTag$Type, arg1: integer): $WireType
function readNodeBlockPos(arg0: $CompoundTag$Type, arg1: integer, arg2: $BlockPos$Type): $BlockPos
function readNodeOtherIndex(arg0: $CompoundTag$Type, arg1: integer): integer
function getTypeOfConnection(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWireNode$Type = ($IWireNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWireNode_ = $IWireNode$Type;
}}
declare module "packages/com/mrh0/createaddition/recipe/$CARecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CARecipeSerializer<R extends $Recipe<(any)>> implements $RecipeSerializer<(R)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): R
public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: R): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): R
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CARecipeSerializer$Type<R> = ($CARecipeSerializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CARecipeSerializer_<R> = $CARecipeSerializer$Type<(R)>;
}}
declare module "packages/com/mrh0/createaddition/blocks/digital_adapter/$DigitalAdapterBlock" {
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
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$DigitalAdapterBlockEntity, $DigitalAdapterBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/digital_adapter/$DigitalAdapterBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DigitalAdapterBlock extends $Block implements $IBE<($DigitalAdapterBlockEntity)>, $IWrenchable {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($DigitalAdapterBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $DigitalAdapterBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($DigitalAdapterBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($DigitalAdapterBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($DigitalAdapterBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($DigitalAdapterBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitalAdapterBlock$Type = ($DigitalAdapterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DigitalAdapterBlock_ = $DigitalAdapterBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/energy/$WireConnectResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WireConnectResult extends $Enum<($WireConnectResult)> {
static readonly "LINKED": $WireConnectResult
static readonly "LINKED_IN": $WireConnectResult
static readonly "LINKED_OUT": $WireConnectResult
static readonly "CONNECT": $WireConnectResult
static readonly "CONNECT_IN": $WireConnectResult
static readonly "CONNECT_OUT": $WireConnectResult
static readonly "LONG": $WireConnectResult
static readonly "OBSTRUCTED": $WireConnectResult
static readonly "COUNT": $WireConnectResult
static readonly "REMOVED": $WireConnectResult
static readonly "EXISTS": $WireConnectResult
static readonly "NO_CONNECTION": $WireConnectResult
static readonly "INVALID": $WireConnectResult
static readonly "REQUIRES_HIGH_CURRENT": $WireConnectResult


public static "values"(): ($WireConnectResult)[]
public static "valueOf"(arg0: string): $WireConnectResult
public "getMessage"(): $Component
public static "getLink"(arg0: boolean, arg1: boolean): $WireConnectResult
public "isLinked"(): boolean
public "isConnect"(): boolean
public static "getConnect"(arg0: boolean, arg1: boolean): $WireConnectResult
get "message"(): $Component
get "linked"(): boolean
get "connect"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireConnectResult$Type = (("count") | ("no_connection") | ("obstructed") | ("long") | ("removed") | ("requires_high_current") | ("linked_in") | ("linked_out") | ("invalid") | ("exists") | ("connect") | ("connect_in") | ("linked") | ("connect_out")) | ($WireConnectResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireConnectResult_ = $WireConnectResult$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/electric_motor/$ElectricMotorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ElectricMotorBlockEntity, $ElectricMotorBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/electric_motor/$ElectricMotorBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShaper, $VoxelShaper$Type} from "packages/com/simibubi/create/foundation/utility/$VoxelShaper"
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
import {$DirectionalKineticBlock, $DirectionalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalKineticBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ElectricMotorBlock extends $DirectionalKineticBlock implements $IBE<($ElectricMotorBlockEntity)> {
static readonly "ELECTRIC_MOTOR_SHAPE": $VoxelShaper
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getBlockEntityClass"(): $Class<($ElectricMotorBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPowered"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: boolean): void
public "hideStressImpact"(): boolean
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ElectricMotorBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($ElectricMotorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($ElectricMotorBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($ElectricMotorBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($ElectricMotorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricMotorBlock$Type = ($ElectricMotorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricMotorBlock_ = $ElectricMotorBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/$SmallConnectorBlock" {
import {$VoxelShaper, $VoxelShaper$Type} from "packages/com/simibubi/create/foundation/utility/$VoxelShaper"
import {$SmallConnectorBlockEntity, $SmallConnectorBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/connector/$SmallConnectorBlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ConnectorMode, $ConnectorMode$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorMode"
import {$ConnectorVariant, $ConnectorVariant$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorVariant"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractConnectorBlock, $AbstractConnectorBlock$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$AbstractConnectorBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SmallConnectorBlock extends $AbstractConnectorBlock<($SmallConnectorBlockEntity)> {
static readonly "CONNECTOR_SHAPE": $VoxelShaper
static readonly "FACING": $DirectionProperty
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($SmallConnectorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityClass"(): $Class<($SmallConnectorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallConnectorBlock$Type = ($SmallConnectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallConnectorBlock_ = $SmallConnectorBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/index/$CAFluids$NoColorFluidAttributes" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$AllFluids$TintedFluidType, $AllFluids$TintedFluidType$Type} from "packages/com/simibubi/create/$AllFluids$TintedFluidType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $CAFluids$NoColorFluidAttributes extends $AllFluids$TintedFluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type)

public "getTintColor"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CAFluids$NoColorFluidAttributes$Type = ($CAFluids$NoColorFluidAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CAFluids$NoColorFluidAttributes_ = $CAFluids$NoColorFluidAttributes$Type;
}}
declare module "packages/com/mrh0/createaddition/recipe/liquid_burning/$LiquidBurningRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidRecipeWrapper, $FluidRecipeWrapper$Type} from "packages/com/mrh0/createaddition/recipe/$FluidRecipeWrapper"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $LiquidBurningRecipe implements $Recipe<($FluidRecipeWrapper)> {

constructor(arg0: $ResourceLocation$Type, arg1: $FluidIngredient$Type, arg2: integer, arg3: boolean)

public "matches"(arg0: $FluidRecipeWrapper$Type, arg1: $Level$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $FluidRecipeWrapper$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getBurnTime"(): integer
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSuperheated"(): boolean
public "getFluidIngredient"(): $FluidIngredient
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $FluidRecipeWrapper$Type): $NonNullList<($ItemStack)>
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
get "burnTime"(): integer
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "superheated"(): boolean
get "fluidIngredient"(): $FluidIngredient
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
export type $LiquidBurningRecipe$Type = ($LiquidBurningRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBurningRecipe_ = $LiquidBurningRecipe$Type;
}}
declare module "packages/com/mrh0/createaddition/item/$DiamondGritSandpaper" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SandPaperItem, $SandPaperItem$Type} from "packages/com/simibubi/create/content/equipment/sandPaper/$SandPaperItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DiamondGritSandpaper extends $SandPaperItem {
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

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiamondGritSandpaper$Type = ($DiamondGritSandpaper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiamondGritSandpaper_ = $DiamondGritSandpaper$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/electric_motor/$ElectricMotorBlockEntity" {
import {$GeneratingKineticBlockEntity, $GeneratingKineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$GeneratingKineticBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ElectricMotorBlockEntity extends $GeneratingKineticBlockEntity {
 "reActivateSource": boolean
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
export type $ElectricMotorBlockEntity$Type = ($ElectricMotorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricMotorBlockEntity_ = $ElectricMotorBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/liquid_blaze_burner/$LiquidBlazeBurnerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LiquidBlazeBurnerBlockEntity, $LiquidBlazeBurnerBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/liquid_blaze_burner/$LiquidBlazeBurnerBlockEntity"
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
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel$Type} from "packages/com/simibubi/create/content/processing/burner/$BlazeBurnerBlock$HeatLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LiquidBlazeBurnerBlock extends $HorizontalDirectionalBlock implements $IBE<($LiquidBlazeBurnerBlockEntity)>, $IWrenchable {
static readonly "HEAT_LEVEL": $EnumProperty<($BlazeBurnerBlock$HeatLevel)>
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

public static "tryInsert"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: boolean, arg5: boolean, arg6: boolean): $InteractionResultHolder<($ItemStack)>
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Random$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "asItem"(): $Item
public "getBlockEntityClass"(): $Class<($LiquidBlazeBurnerBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $LiquidBlazeBurnerBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($LiquidBlazeBurnerBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($LiquidBlazeBurnerBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($LiquidBlazeBurnerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($LiquidBlazeBurnerBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlazeBurnerBlock$Type = ($LiquidBlazeBurnerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBlazeBurnerBlock_ = $LiquidBlazeBurnerBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/energy/$BaseElectricBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $BaseElectricBlockEntity extends $SmartBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "remove"(): void
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "setCache"(arg0: $Direction$Type, arg1: $LazyOptional$Type<($IEnergyStorage$Type)>): void
public "getCapacity"(): integer
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getCachedEnergy"(arg0: $Direction$Type): $LazyOptional<($IEnergyStorage)>
public "updateCache"(): void
public "updateCache"(arg0: $Direction$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "isEnergyInput"(arg0: $Direction$Type): boolean
public "isEnergyOutput"(arg0: $Direction$Type): boolean
public "firstTick"(): void
public "getMaxOut"(): integer
public "getMaxIn"(): integer
public "ignoreCapSide"(): boolean
/**
 * 
 * @deprecated
 */
public "outputTick"(arg0: integer): void
get "capacity"(): integer
get "maxOut"(): integer
get "maxIn"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseElectricBlockEntity$Type = ($BaseElectricBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseElectricBlockEntity_ = $BaseElectricBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/$LargeConnectorBlock" {
import {$VoxelShaper, $VoxelShaper$Type} from "packages/com/simibubi/create/foundation/utility/$VoxelShaper"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LargeConnectorBlockEntity, $LargeConnectorBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/connector/$LargeConnectorBlockEntity"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ConnectorMode, $ConnectorMode$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorMode"
import {$ConnectorVariant, $ConnectorVariant$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorVariant"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractConnectorBlock, $AbstractConnectorBlock$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$AbstractConnectorBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $LargeConnectorBlock extends $AbstractConnectorBlock<($LargeConnectorBlockEntity)> {
static readonly "CONNECTOR_SHAPE": $VoxelShaper
static readonly "FACING": $DirectionProperty
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($LargeConnectorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityClass"(): $Class<($LargeConnectorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeConnectorBlock$Type = ($LargeConnectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeConnectorBlock_ = $LargeConnectorBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/$SmallLightConnectorBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LocalNode, $LocalNode$Type} from "packages/com/mrh0/createaddition/energy/$LocalNode"
import {$ConnectorType, $ConnectorType$Type} from "packages/com/mrh0/createaddition/blocks/connector/$ConnectorType"
import {$WireType, $WireType$Type} from "packages/com/mrh0/createaddition/energy/$WireType"
import {$IWireNode, $IWireNode$Type} from "packages/com/mrh0/createaddition/energy/$IWireNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WireConnectResult, $WireConnectResult$Type} from "packages/com/mrh0/createaddition/energy/$WireConnectResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractConnectorBlockEntity, $AbstractConnectorBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$AbstractConnectorBlockEntity"

export class $SmallLightConnectorBlockEntity extends $AbstractConnectorBlockEntity {
static readonly "OFFSET_DOWN": $Vec3
static readonly "OFFSET_UP": $Vec3
static readonly "OFFSET_NORTH": $Vec3
static readonly "OFFSET_WEST": $Vec3
static readonly "OFFSET_SOUTH": $Vec3
static readonly "OFFSET_EAST": $Vec3
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getNodeCount"(): integer
public "getMaxOut"(): integer
public "getMaxIn"(): integer
public "getConnectorType"(): $ConnectorType
public "getNodeOffset"(arg0: integer): $Vec3
public "getMaxWireLength"(): integer
public static "connect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $BlockPos$Type, arg4: integer, arg5: $WireType$Type): $WireConnectResult
public static "disconnect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireConnectResult
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$Type, arg2: ($LocalNode$Type)[], arg3: ($IWireNode$Type)[], arg4: $Level$Type): $IWireNode
public static "dropWire"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): void
public static "getWireNode"(arg0: $Level$Type, arg1: $BlockPos$Type): $IWireNode
public static "getNbtNode"(arg0: $CompoundTag$Type, arg1: integer): $CompoundTag
public static "readNodeWireType"(arg0: $CompoundTag$Type, arg1: integer): $WireType
public static "readNodeBlockPos"(arg0: $CompoundTag$Type, arg1: integer, arg2: $BlockPos$Type): $BlockPos
public static "readNodeOtherIndex"(arg0: $CompoundTag$Type, arg1: integer): integer
public static "getTypeOfConnection"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireType
get "nodeCount"(): integer
get "maxOut"(): integer
get "maxIn"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallLightConnectorBlockEntity$Type = ($SmallLightConnectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallLightConnectorBlockEntity_ = $SmallLightConnectorBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/item/$WireSpool" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
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
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WireSpool extends $Item {
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

public static "getNode"(arg0: $CompoundTag$Type): integer
public static "setContent"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type, arg2: integer): $CompoundTag
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getPos"(arg0: $CompoundTag$Type): $BlockPos
public static "hasPos"(arg0: $CompoundTag$Type): boolean
public static "isRemover"(arg0: $Item$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireSpool$Type = ($WireSpool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireSpool_ = $WireSpool$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/base/$AbstractConnectorBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EnergyNetwork, $EnergyNetwork$Type} from "packages/com/mrh0/createaddition/energy/network/$EnergyNetwork"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$IDebugDrawer, $IDebugDrawer$Type} from "packages/com/mrh0/createaddition/debug/$IDebugDrawer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ConnectorMode, $ConnectorMode$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorMode"
import {$IWireNode, $IWireNode$Type} from "packages/com/mrh0/createaddition/energy/$IWireNode"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WireConnectResult, $WireConnectResult$Type} from "packages/com/mrh0/createaddition/energy/$WireConnectResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IObserveTileEntity, $IObserveTileEntity$Type} from "packages/com/mrh0/createaddition/network/$IObserveTileEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LocalNode, $LocalNode$Type} from "packages/com/mrh0/createaddition/energy/$LocalNode"
import {$WireType, $WireType$Type} from "packages/com/mrh0/createaddition/energy/$WireType"
import {$ConnectorType, $ConnectorType$Type} from "packages/com/mrh0/createaddition/blocks/connector/$ConnectorType"
import {$ObservePacket, $ObservePacket$Type} from "packages/com/mrh0/createaddition/network/$ObservePacket"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $AbstractConnectorBlockEntity extends $SmartBlockEntity implements $IWireNode, $IObserveTileEntity, $IHaveGoggleInformation, $IDebugDrawer {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "removeNode"(arg0: integer, arg1: boolean): void
public "remove"(): void
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getMode"(): $ConnectorMode
public "getCapacity"(): integer
public "setNode"(arg0: integer, arg1: integer, arg2: $BlockPos$Type, arg3: $WireType$Type): void
public "getNetwork"(arg0: integer): $EnergyNetwork
public "tick"(): void
public "setNetwork"(arg0: integer, arg1: $EnergyNetwork$Type): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "drawDebug"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getPos"(): $BlockPos
public "updateExternalEnergyStorage"(): void
public "isEnergyInput"(arg0: $Direction$Type): boolean
public "isEnergyOutput"(arg0: $Direction$Type): boolean
public "firstTick"(): void
public "getLocalNode"(arg0: integer): $LocalNode
public "getMaxOut"(): integer
public "getMaxIn"(): integer
public "getWireNode"(arg0: integer): $IWireNode
public "ignoreCapSide"(): boolean
public "onObserved"(arg0: $ServerPlayer$Type, arg1: $ObservePacket$Type): void
public "invalidateLocalNodes"(): void
public "invalidateNodeCache"(): void
public "hasConnection"(arg0: integer): boolean
public "removeNode"(arg0: $LocalNode$Type): void
public "removeNode"(arg0: $LocalNode$Type, arg1: boolean): void
public "removeNode"(arg0: integer): void
public static "connect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $BlockPos$Type, arg4: integer, arg5: $WireType$Type): $WireConnectResult
public "getNodeType"(arg0: integer): $WireType
public static "disconnect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireConnectResult
public "dropWires"(arg0: $Level$Type, arg1: boolean): void
public "dropWires"(arg0: $Level$Type, arg1: $Player$Type, arg2: boolean): void
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$Type, arg2: ($LocalNode$Type)[], arg3: ($IWireNode$Type)[], arg4: $Level$Type): $IWireNode
public "getNodeCount"(): integer
public "dropWire"(arg0: $Level$Type, arg1: $LocalNode$Type): void
public static "dropWire"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): void
public "convertOldNbt"(arg0: $CompoundTag$Type): void
public static "getWireNode"(arg0: $Level$Type, arg1: $BlockPos$Type): $IWireNode
public "validateLocalNodes"(arg0: ($LocalNode$Type)[]): boolean
public "getOtherNodeIndex"(arg0: integer): integer
public "handleWireCache"(arg0: $Level$Type, arg1: $Set$Type<($LocalNode$Type)>): void
public "getNodePos"(arg0: integer): $BlockPos
public "hasAnyConnection"(): boolean
public "awakeNetwork"(arg0: $Level$Type): boolean
public "hasConnectionTo"(arg0: $BlockPos$Type): boolean
public "isNetworkValid"(arg0: integer): boolean
public "getAvailableNode"(arg0: $Vec3$Type): integer
public "getAvailableNode"(): integer
public "isNodeInput"(arg0: integer): boolean
public "getConnectorType"(): $ConnectorType
public static "getNbtNode"(arg0: $CompoundTag$Type, arg1: integer): $CompoundTag
public static "readNodeWireType"(arg0: $CompoundTag$Type, arg1: integer): $WireType
public "getNodeOffset"(arg0: integer): $Vec3
public "getMaxWireLength"(): integer
public "disconnectWires"(): void
public "getConnectionTo"(arg0: $BlockPos$Type): $LocalNode
public "isNodeOutput"(arg0: integer): boolean
public static "readNodeBlockPos"(arg0: $CompoundTag$Type, arg1: integer, arg2: $BlockPos$Type): $BlockPos
public static "readNodeOtherIndex"(arg0: $CompoundTag$Type, arg1: integer): integer
public static "getTypeOfConnection"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireType
public "isNodeIndeciesConnected"(arg0: integer, arg1: integer): boolean
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "mode"(): $ConnectorMode
get "capacity"(): integer
get "pos"(): $BlockPos
get "maxOut"(): integer
get "maxIn"(): integer
get "nodeCount"(): integer
get "availableNode"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConnectorBlockEntity$Type = ($AbstractConnectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractConnectorBlockEntity_ = $AbstractConnectorBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/digital_adapter/$DigitalAdapterBlockEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $DigitalAdapterBlockEntity extends $BlockEntity {
readonly "textLines": $List<($MutableComponent)>
static readonly "MAX_LINES": integer
static readonly "EMPTY_LINE": $MutableComponent
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitalAdapterBlockEntity$Type = ($DigitalAdapterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DigitalAdapterBlockEntity_ = $DigitalAdapterBlockEntity$Type;
}}
declare module "packages/com/mrh0/createaddition/recipe/rolling/$SequencedAssemblyRollingRecipeSerializer" {
import {$ProcessingRecipeBuilder$ProcessingRecipeFactory, $ProcessingRecipeBuilder$ProcessingRecipeFactory$Type} from "packages/com/simibubi/create/content/processing/recipe/$ProcessingRecipeBuilder$ProcessingRecipeFactory"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RollingRecipe, $RollingRecipe$Type} from "packages/com/mrh0/createaddition/recipe/rolling/$RollingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ProcessingRecipeSerializer, $ProcessingRecipeSerializer$Type} from "packages/com/simibubi/create/content/processing/recipe/$ProcessingRecipeSerializer"

export class $SequencedAssemblyRollingRecipeSerializer extends $ProcessingRecipeSerializer<($RollingRecipe)> {

constructor(arg0: $ProcessingRecipeBuilder$ProcessingRecipeFactory$Type<($RollingRecipe$Type)>)

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedAssemblyRollingRecipeSerializer$Type = ($SequencedAssemblyRollingRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedAssemblyRollingRecipeSerializer_ = $SequencedAssemblyRollingRecipeSerializer$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/base/$AbstractConnectorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ConnectorMode, $ConnectorMode$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorMode"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ITransformableBlock, $ITransformableBlock$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ConnectorVariant, $ConnectorVariant$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorVariant"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$AbstractConnectorBlockEntity, $AbstractConnectorBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$AbstractConnectorBlockEntity"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractConnectorBlock<BE extends $AbstractConnectorBlockEntity> extends $Block implements $IBE<(BE)>, $IWrenchable, $ITransformableBlock {
static readonly "FACING": $DirectionProperty
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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
public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): BE
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<(BE)>
public "getBlockEntityClass"(): $Class<(BE)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<(BE)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<(BE), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<(BE)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConnectorBlock$Type<BE> = ($AbstractConnectorBlock<(BE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractConnectorBlock_<BE> = $AbstractConnectorBlock$Type<(BE)>;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/base/$ConnectorMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $ConnectorMode extends $Enum<($ConnectorMode)> implements $StringRepresentable {
static readonly "Push": $ConnectorMode
static readonly "Pull": $ConnectorMode
static readonly "None": $ConnectorMode
static readonly "Passive": $ConnectorMode


public static "values"(): ($ConnectorMode)[]
public static "test"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $ConnectorMode
public static "valueOf"(arg0: string): $ConnectorMode
public "isActive"(): boolean
public "getNext"(): $ConnectorMode
public "getSerializedName"(): string
public "getTooltip"(): $MutableComponent
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "active"(): boolean
get "next"(): $ConnectorMode
get "serializedName"(): string
get "tooltip"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectorMode$Type = (("pull") | ("none") | ("passive") | ("push")) | ($ConnectorMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectorMode_ = $ConnectorMode$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/tesla_coil/$TeslaCoilBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShaper, $VoxelShaper$Type} from "packages/com/simibubi/create/foundation/utility/$VoxelShaper"
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
import {$TeslaCoilBlockEntity, $TeslaCoilBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/tesla_coil/$TeslaCoilBlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TeslaCoilBlock extends $Block implements $IBE<($TeslaCoilBlockEntity)>, $IWrenchable {
static readonly "TESLA_COIL_SHAPE": $VoxelShaper
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($TeslaCoilBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPowered"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: boolean): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $TeslaCoilBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($TeslaCoilBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($TeslaCoilBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($TeslaCoilBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($TeslaCoilBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeslaCoilBlock$Type = ($TeslaCoilBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeslaCoilBlock_ = $TeslaCoilBlock$Type;
}}
declare module "packages/com/mrh0/createaddition/recipe/charging/$ChargingRecipeSerializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CARecipeSerializer, $CARecipeSerializer$Type} from "packages/com/mrh0/createaddition/recipe/$CARecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ChargingRecipe, $ChargingRecipe$Type} from "packages/com/mrh0/createaddition/recipe/charging/$ChargingRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ChargingRecipeSerializer extends $CARecipeSerializer<($ChargingRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ChargingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ChargingRecipe$Type): void
public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingRecipeSerializer$Type = ($ChargingRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingRecipeSerializer_ = $ChargingRecipeSerializer$Type;
}}
declare module "packages/com/mrh0/createaddition/blocks/connector/$LargeConnectorBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LocalNode, $LocalNode$Type} from "packages/com/mrh0/createaddition/energy/$LocalNode"
import {$ConnectorType, $ConnectorType$Type} from "packages/com/mrh0/createaddition/blocks/connector/$ConnectorType"
import {$WireType, $WireType$Type} from "packages/com/mrh0/createaddition/energy/$WireType"
import {$IWireNode, $IWireNode$Type} from "packages/com/mrh0/createaddition/energy/$IWireNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WireConnectResult, $WireConnectResult$Type} from "packages/com/mrh0/createaddition/energy/$WireConnectResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractConnectorBlockEntity, $AbstractConnectorBlockEntity$Type} from "packages/com/mrh0/createaddition/blocks/connector/base/$AbstractConnectorBlockEntity"

export class $LargeConnectorBlockEntity extends $AbstractConnectorBlockEntity {
static readonly "OFFSET_DOWN": $Vec3
static readonly "OFFSET_UP": $Vec3
static readonly "OFFSET_NORTH": $Vec3
static readonly "OFFSET_WEST": $Vec3
static readonly "OFFSET_SOUTH": $Vec3
static readonly "OFFSET_EAST": $Vec3
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getNodeCount"(): integer
public "getMaxOut"(): integer
public "getMaxIn"(): integer
public "getConnectorType"(): $ConnectorType
public "getNodeOffset"(arg0: integer): $Vec3
public "getMaxWireLength"(): integer
public static "connect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $BlockPos$Type, arg4: integer, arg5: $WireType$Type): $WireConnectResult
public static "disconnect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireConnectResult
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$Type, arg2: ($LocalNode$Type)[], arg3: ($IWireNode$Type)[], arg4: $Level$Type): $IWireNode
public static "dropWire"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): void
public static "getWireNode"(arg0: $Level$Type, arg1: $BlockPos$Type): $IWireNode
public static "getNbtNode"(arg0: $CompoundTag$Type, arg1: integer): $CompoundTag
public static "readNodeWireType"(arg0: $CompoundTag$Type, arg1: integer): $WireType
public static "readNodeBlockPos"(arg0: $CompoundTag$Type, arg1: integer, arg2: $BlockPos$Type): $BlockPos
public static "readNodeOtherIndex"(arg0: $CompoundTag$Type, arg1: integer): integer
public static "getTypeOfConnection"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $WireType
get "nodeCount"(): integer
get "maxOut"(): integer
get "maxIn"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeConnectorBlockEntity$Type = ($LargeConnectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeConnectorBlockEntity_ = $LargeConnectorBlockEntity$Type;
}}
