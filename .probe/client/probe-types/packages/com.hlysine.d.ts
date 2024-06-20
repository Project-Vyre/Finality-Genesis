declare module "packages/com/hlysine/create_power_loader/content/emptychunkloader/$EmptyChunkLoaderBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EmptyChunkLoaderBlockEntity, $EmptyChunkLoaderBlockEntity$Type} from "packages/com/hlysine/create_power_loader/content/emptychunkloader/$EmptyChunkLoaderBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalKineticBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $EmptyChunkLoaderBlock extends $DirectionalKineticBlock implements $IBE<($EmptyChunkLoaderBlockEntity)> {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockEntityEntry$Type<($EmptyChunkLoaderBlockEntity$Type)>)

public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getBlockEntityClass"(): $Class<($EmptyChunkLoaderBlockEntity)>
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $EmptyChunkLoaderBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($EmptyChunkLoaderBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($EmptyChunkLoaderBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($EmptyChunkLoaderBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($EmptyChunkLoaderBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyChunkLoaderBlock$Type = ($EmptyChunkLoaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyChunkLoaderBlock_ = $EmptyChunkLoaderBlock$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/$LoaderMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $LoaderMode extends $Enum<($LoaderMode)> implements $StringRepresentable {
static readonly "STATIC": $LoaderMode
static readonly "CONTRAPTION": $LoaderMode
static readonly "TRAIN": $LoaderMode
static readonly "STATION": $LoaderMode


public static "values"(): ($LoaderMode)[]
public static "valueOf"(arg0: string): $LoaderMode
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
export type $LoaderMode$Type = (("static") | ("contraption") | ("station") | ("train")) | ($LoaderMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoaderMode_ = $LoaderMode$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/trains/$StationChunkLoader" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LoaderMode, $LoaderMode$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderMode"
import {$GlobalStation, $GlobalStation$Type} from "packages/com/simibubi/create/content/trains/station/$GlobalStation"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$ChunkLoadManager$LoadedChunkPos, $ChunkLoadManager$LoadedChunkPos$Type} from "packages/com/hlysine/create_power_loader/content/$ChunkLoadManager$LoadedChunkPos"
import {$TrackGraph, $TrackGraph$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$StationChunkLoader$AttachedLoader, $StationChunkLoader$AttachedLoader$Type} from "packages/com/hlysine/create_power_loader/content/trains/$StationChunkLoader$AttachedLoader"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ChunkLoader, $ChunkLoader$Type} from "packages/com/hlysine/create_power_loader/content/$ChunkLoader"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StationChunkLoader implements $ChunkLoader {
readonly "attachments": $Set<($StationChunkLoader$AttachedLoader)>
readonly "forcedChunks": $Set<($ChunkLoadManager$LoadedChunkPos)>

constructor(arg0: $GlobalStation$Type)

public "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
public "write"(): $CompoundTag
public static "read"(arg0: $GlobalStation$Type, arg1: $CompoundTag$Type): $StationChunkLoader
public static "isEnabledForStation"(arg0: $LoaderType$Type): boolean
public "tick"(arg0: $TrackGraph$Type, arg1: boolean): void
public "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
public "getLoaderType"(): $LoaderType
public "getLoaderMode"(): $LoaderMode
public "removeAttachment"(arg0: $BlockPos$Type): void
public "addAttachment"(arg0: $LoaderType$Type, arg1: $BlockPos$Type): void
public "onRemove"(): void
public "addToManager"(): void
public "removeFromManager"(): void
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
get "forcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
get "loaderType"(): $LoaderType
get "loaderMode"(): $LoaderMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StationChunkLoader$Type = ($StationChunkLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StationChunkLoader_ = $StationChunkLoader$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/trains/$CPLTrain" {
import {$TrainChunkLoader, $TrainChunkLoader$Type} from "packages/com/hlysine/create_power_loader/content/trains/$TrainChunkLoader"

export interface $CPLTrain {

 "getLoader"(): $TrainChunkLoader
 "setLoader"(arg0: $TrainChunkLoader$Type): void
}

export namespace $CPLTrain {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPLTrain$Type = ($CPLTrain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CPLTrain_ = $CPLTrain$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/trains/$CarriageChunkLoader" {
import {$Carriage, $Carriage$Type} from "packages/com/simibubi/create/content/trains/entity/$Carriage"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LoaderMode, $LoaderMode$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderMode"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$ChunkLoadManager$LoadedChunkPos, $ChunkLoadManager$LoadedChunkPos$Type} from "packages/com/hlysine/create_power_loader/content/$ChunkLoadManager$LoadedChunkPos"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ChunkLoader, $ChunkLoader$Type} from "packages/com/hlysine/create_power_loader/content/$ChunkLoader"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CarriageChunkLoader implements $ChunkLoader {
readonly "carriage": $Carriage
 "known": boolean
 "andesite": boolean
 "brass": boolean
readonly "forcedChunks": $Set<($ChunkLoadManager$LoadedChunkPos)>

constructor(arg0: $Carriage$Type, arg1: boolean, arg2: boolean, arg3: boolean)

public "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
public "write"(): $CompoundTag
public static "read"(arg0: $Carriage$Type, arg1: $CompoundTag$Type): $CarriageChunkLoader
public "tick"(arg0: $Level$Type): void
public "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
public "getLoaderType"(): $LoaderType
public "getLoaderMode"(): $LoaderMode
public "onRemove"(): void
public "removeFromManager"(): void
public "addToManager"(): void
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
get "forcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
get "loaderType"(): $LoaderType
get "loaderMode"(): $LoaderMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarriageChunkLoader$Type = ($CarriageChunkLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarriageChunkLoader_ = $CarriageChunkLoader$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/$ChunkLoader" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LoaderMode, $LoaderMode$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderMode"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$ChunkLoadManager$LoadedChunkPos, $ChunkLoadManager$LoadedChunkPos$Type} from "packages/com/hlysine/create_power_loader/content/$ChunkLoadManager$LoadedChunkPos"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ChunkLoader {

 "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
 "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
 "getLoaderType"(): $LoaderType
 "getLoaderMode"(): $LoaderMode
 "removeFromManager"(): void
 "addToManager"(): void
}

export namespace $ChunkLoader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoader$Type = ($ChunkLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoader_ = $ChunkLoader$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/trains/$TrainChunkLoader" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LoaderMode, $LoaderMode$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderMode"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$ChunkLoadManager$LoadedChunkPos, $ChunkLoadManager$LoadedChunkPos$Type} from "packages/com/hlysine/create_power_loader/content/$ChunkLoadManager$LoadedChunkPos"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CarriageChunkLoader, $CarriageChunkLoader$Type} from "packages/com/hlysine/create_power_loader/content/trains/$CarriageChunkLoader"
import {$Train, $Train$Type} from "packages/com/simibubi/create/content/trains/entity/$Train"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChunkLoader, $ChunkLoader$Type} from "packages/com/hlysine/create_power_loader/content/$ChunkLoader"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TrainChunkLoader implements $ChunkLoader {
readonly "carriageLoaders": $List<($CarriageChunkLoader)>

constructor(arg0: $Train$Type)

public "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
public "write"(): $CompoundTag
public static "read"(arg0: $Train$Type, arg1: $CompoundTag$Type): $TrainChunkLoader
public "tick"(arg0: $Level$Type): void
public "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
public "getLoaderType"(): $LoaderType
public "getLoaderMode"(): $LoaderMode
public "onRemove"(): void
public "addToManager"(): void
public "removeFromManager"(): void
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
get "forcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
get "loaderType"(): $LoaderType
get "loaderMode"(): $LoaderMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainChunkLoader$Type = ($TrainChunkLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrainChunkLoader_ = $TrainChunkLoader$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/trains/$StationChunkLoader$AttachedLoader" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StationChunkLoader$AttachedLoader extends $Record {

constructor(type: $LoaderType$Type, pos: $BlockPos$Type)

public "type"(): $LoaderType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(): $CompoundTag
public static "read"(arg0: $CompoundTag$Type): $StationChunkLoader$AttachedLoader
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StationChunkLoader$AttachedLoader$Type = ($StationChunkLoader$AttachedLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StationChunkLoader$AttachedLoader_ = $StationChunkLoader$AttachedLoader$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/andesitechunkloader/$AndesiteChunkLoaderBlockEntity" {
import {$AbstractChunkLoaderBlockEntity, $AbstractChunkLoaderBlockEntity$Type} from "packages/com/hlysine/create_power_loader/content/$AbstractChunkLoaderBlockEntity"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AndesiteChunkLoaderBlockEntity extends $AbstractChunkLoaderBlockEntity {
readonly "type": $LoaderType
 "isLoaderActive": boolean
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getLoadingRange"(): integer
get "loadingRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AndesiteChunkLoaderBlockEntity$Type = ($AndesiteChunkLoaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AndesiteChunkLoaderBlockEntity_ = $AndesiteChunkLoaderBlockEntity$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/$AbstractChunkLoaderBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalKineticBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractChunkLoaderBlock extends $DirectionalKineticBlock {
static readonly "ATTACHED": $BooleanProperty
readonly "loaderType": $LoaderType
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $LoaderType$Type)

public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChunkLoaderBlock$Type = ($AbstractChunkLoaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractChunkLoaderBlock_ = $AbstractChunkLoaderBlock$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/emptychunkloader/$EmptyChunkLoaderBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockEntry, $BlockEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntry"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EmptyChunkLoaderBlockItem extends $BlockItem {
readonly "reward": $BlockEntry<(any)>
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


public static "createAndesite"(arg0: $Block$Type, arg1: $Item$Properties$Type): $EmptyChunkLoaderBlockItem
public static "createBrass"(arg0: $Block$Type, arg1: $Item$Properties$Type): $EmptyChunkLoaderBlockItem
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyChunkLoaderBlockItem$Type = ($EmptyChunkLoaderBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyChunkLoaderBlockItem_ = $EmptyChunkLoaderBlockItem$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/brasschunkloader/$BrassChunkLoaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BrassChunkLoaderBlockEntity, $BrassChunkLoaderBlockEntity$Type} from "packages/com/hlysine/create_power_loader/content/brasschunkloader/$BrassChunkLoaderBlockEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractChunkLoaderBlock, $AbstractChunkLoaderBlock$Type} from "packages/com/hlysine/create_power_loader/content/$AbstractChunkLoaderBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BrassChunkLoaderBlock extends $AbstractChunkLoaderBlock implements $IBE<($BrassChunkLoaderBlockEntity)> {
static readonly "ATTACHED": $BooleanProperty
readonly "loaderType": $LoaderType
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

public "getBlockEntityClass"(): $Class<($BrassChunkLoaderBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BrassChunkLoaderBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($BrassChunkLoaderBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($BrassChunkLoaderBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($BrassChunkLoaderBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($BrassChunkLoaderBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrassChunkLoaderBlock$Type = ($BrassChunkLoaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrassChunkLoaderBlock_ = $BrassChunkLoaderBlock$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/$AbstractChunkLoaderBlockEntity" {
import {$LoaderMode, $LoaderMode$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderMode"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$ChunkLoadManager$LoadedChunkPos, $ChunkLoadManager$LoadedChunkPos$Type} from "packages/com/hlysine/create_power_loader/content/$ChunkLoadManager$LoadedChunkPos"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$StationBlockEntity, $StationBlockEntity$Type} from "packages/com/simibubi/create/content/trains/station/$StationBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ChunkLoader, $ChunkLoader$Type} from "packages/com/hlysine/create_power_loader/content/$ChunkLoader"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractChunkLoaderBlockEntity extends $KineticBlockEntity implements $ChunkLoader {
readonly "type": $LoaderType
 "isLoaderActive": boolean
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LoaderType$Type)

public "remove"(): void
public "initialize"(): void
public "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
public "destroy"(): void
public "tick"(): void
public "isSpeedRequirementFulfilled"(): boolean
public "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
public "getLoaderType"(): $LoaderType
public "getLoaderMode"(): $LoaderMode
public "getAttachedStation"(): $StationBlockEntity
public "reclaimChunks"(arg0: $Set$Type<($ChunkLoadManager$LoadedChunkPos$Type)>): void
public "getLoadingRange"(): integer
public "canLoadChunks"(): boolean
public "updateAttachedStation"(arg0: $StationBlockEntity$Type): void
public "removeFromManager"(): void
public "addToManager"(): void
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
get "speedRequirementFulfilled"(): boolean
get "forcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
get "loaderType"(): $LoaderType
get "loaderMode"(): $LoaderMode
get "attachedStation"(): $StationBlockEntity
get "loadingRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChunkLoaderBlockEntity$Type = ($AbstractChunkLoaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractChunkLoaderBlockEntity_ = $AbstractChunkLoaderBlockEntity$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/andesitechunkloader/$AndesiteChunkLoaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$AndesiteChunkLoaderBlockEntity, $AndesiteChunkLoaderBlockEntity$Type} from "packages/com/hlysine/create_power_loader/content/andesitechunkloader/$AndesiteChunkLoaderBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractChunkLoaderBlock, $AbstractChunkLoaderBlock$Type} from "packages/com/hlysine/create_power_loader/content/$AbstractChunkLoaderBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AndesiteChunkLoaderBlock extends $AbstractChunkLoaderBlock implements $IBE<($AndesiteChunkLoaderBlockEntity)> {
static readonly "ATTACHED": $BooleanProperty
readonly "loaderType": $LoaderType
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

public "getBlockEntityClass"(): $Class<($AndesiteChunkLoaderBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AndesiteChunkLoaderBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AndesiteChunkLoaderBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AndesiteChunkLoaderBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AndesiteChunkLoaderBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($AndesiteChunkLoaderBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AndesiteChunkLoaderBlock$Type = ($AndesiteChunkLoaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AndesiteChunkLoaderBlock_ = $AndesiteChunkLoaderBlock$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/$ChunkLoadManager$LoadedChunkPos" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ChunkLoadManager$LoadedChunkPos extends $Record {

constructor(dimension: $ResourceLocation$Type, chunkPos: $ChunkPos$Type)
constructor(arg0: $Level$Type, arg1: $BlockPos$Type)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer)
constructor(arg0: $Level$Type, arg1: long)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "z"(): integer
public "dimension"(): $ResourceLocation
public "chunkPos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoadManager$LoadedChunkPos$Type = ($ChunkLoadManager$LoadedChunkPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoadManager$LoadedChunkPos_ = $ChunkLoadManager$LoadedChunkPos$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/emptychunkloader/$EmptyChunkLoaderBlockEntity" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EmptyChunkLoaderBlockEntity extends $KineticBlockEntity {
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
export type $EmptyChunkLoaderBlockEntity$Type = ($EmptyChunkLoaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyChunkLoaderBlockEntity_ = $EmptyChunkLoaderBlockEntity$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/trains/$CPLGlobalStation" {
import {$StationChunkLoader, $StationChunkLoader$Type} from "packages/com/hlysine/create_power_loader/content/trains/$StationChunkLoader"

export interface $CPLGlobalStation {

 "getLoader"(): $StationChunkLoader
 "setLoader"(arg0: $StationChunkLoader$Type): void
}

export namespace $CPLGlobalStation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPLGlobalStation$Type = ($CPLGlobalStation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CPLGlobalStation_ = $CPLGlobalStation$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/$LoaderType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $LoaderType extends $Enum<($LoaderType)> implements $StringRepresentable {
static readonly "ANDESITE": $LoaderType
static readonly "BRASS": $LoaderType


public static "values"(): ($LoaderType)[]
public static "valueOf"(arg0: string): $LoaderType
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
export type $LoaderType$Type = (("brass") | ("andesite")) | ($LoaderType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoaderType_ = $LoaderType$Type;
}}
declare module "packages/com/hlysine/create_power_loader/content/brasschunkloader/$BrassChunkLoaderBlockEntity" {
import {$AbstractChunkLoaderBlockEntity, $AbstractChunkLoaderBlockEntity$Type} from "packages/com/hlysine/create_power_loader/content/$AbstractChunkLoaderBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LoaderType, $LoaderType$Type} from "packages/com/hlysine/create_power_loader/content/$LoaderType"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BrassChunkLoaderBlockEntity extends $AbstractChunkLoaderBlockEntity {
readonly "type": $LoaderType
 "isLoaderActive": boolean
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getLoadingRange"(): integer
public "setLoadingRange"(arg0: integer): void
get "loadingRange"(): integer
set "loadingRange"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrassChunkLoaderBlockEntity$Type = ($BrassChunkLoaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrassChunkLoaderBlockEntity_ = $BrassChunkLoaderBlockEntity$Type;
}}
