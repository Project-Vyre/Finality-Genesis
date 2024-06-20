declare module "packages/me/jellysquid/mods/sodium/client/model/light/$LightPipelineProvider" {
import {$LightPipeline, $LightPipeline$Type} from "packages/me/jellysquid/mods/sodium/client/model/light/$LightPipeline"
import {$LightMode, $LightMode$Type} from "packages/me/jellysquid/mods/sodium/client/model/light/$LightMode"
import {$LightDataAccess, $LightDataAccess$Type} from "packages/me/jellysquid/mods/sodium/client/model/light/data/$LightDataAccess"

export class $LightPipelineProvider {

constructor(arg0: $LightDataAccess$Type)

public "getLighter"(arg0: $LightMode$Type): $LightPipeline
public "reset"(): void
public "getLightData"(): $LightDataAccess
get "lightData"(): $LightDataAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightPipelineProvider$Type = ($LightPipelineProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightPipelineProvider_ = $LightPipelineProvider$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/lists/$SortedRenderLists" {
import {$ChunkRenderList, $ChunkRenderList$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/lists/$ChunkRenderList"
import {$ReversibleObjectArrayIterator, $ReversibleObjectArrayIterator$Type} from "packages/me/jellysquid/mods/sodium/client/util/iterator/$ReversibleObjectArrayIterator"
import {$ChunkRenderListIterable, $ChunkRenderListIterable$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/lists/$ChunkRenderListIterable"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $SortedRenderLists implements $ChunkRenderListIterable {


public "iterator"(arg0: boolean): $ReversibleObjectArrayIterator<($ChunkRenderList)>
public static "empty"(): $SortedRenderLists
public "iterator"(): $Iterator<($ChunkRenderList)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortedRenderLists$Type = ($SortedRenderLists);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SortedRenderLists_ = $SortedRenderLists$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/arena/$GlBufferArena" {
import {$StagingBuffer, $StagingBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/staging/$StagingBuffer"
import {$PendingUpload, $PendingUpload$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/$PendingUpload"
import {$GlBuffer, $GlBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBuffer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$CommandList, $CommandList$Type} from "packages/me/jellysquid/mods/sodium/client/gl/device/$CommandList"
import {$GlBufferSegment, $GlBufferSegment$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/$GlBufferSegment"

export class $GlBufferArena {

constructor(arg0: $CommandList$Type, arg1: integer, arg2: integer, arg3: $StagingBuffer$Type)

public "isEmpty"(): boolean
public "delete"(arg0: $CommandList$Type): void
public "ensureCapacity"(arg0: $CommandList$Type, arg1: integer): void
public "free"(arg0: $GlBufferSegment$Type): void
public "upload"(arg0: $CommandList$Type, arg1: $Stream$Type<($PendingUpload$Type)>): boolean
public "getBufferObject"(): $GlBuffer
public "getDeviceUsedMemoryL"(): long
public "getDeviceAllocatedMemoryL"(): long
/**
 * 
 * @deprecated
 */
public "getDeviceUsedMemory"(): integer
/**
 * 
 * @deprecated
 */
public "getDeviceAllocatedMemory"(): integer
get "empty"(): boolean
get "bufferObject"(): $GlBuffer
get "deviceUsedMemoryL"(): long
get "deviceAllocatedMemoryL"(): long
get "deviceUsedMemory"(): integer
get "deviceAllocatedMemory"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlBufferArena$Type = ($GlBufferArena);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlBufferArena_ = $GlBufferArena$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/util/iterator/$ReversibleObjectArrayIterator" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export class $ReversibleObjectArrayIterator<T> implements $Iterator<(T)> {

constructor(arg0: $ObjectArrayList$Type<(T)>, arg1: boolean)
constructor(arg0: (T)[], arg1: integer, arg2: integer, arg3: boolean)

public "hasNext"(): boolean
public "next"(): T
public "remove"(): void
public "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReversibleObjectArrayIterator$Type<T> = ($ReversibleObjectArrayIterator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReversibleObjectArrayIterator_<T> = $ReversibleObjectArrayIterator$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/arena/$PendingUpload" {
import {$NativeBuffer, $NativeBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/util/$NativeBuffer"
import {$GlBufferSegment, $GlBufferSegment$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/$GlBufferSegment"

export class $PendingUpload {

constructor(arg0: $NativeBuffer$Type)

public "getLength"(): integer
public "getResult"(): $GlBufferSegment
public "getDataBuffer"(): $NativeBuffer
get "length"(): integer
get "result"(): $GlBufferSegment
get "dataBuffer"(): $NativeBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PendingUpload$Type = ($PendingUpload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PendingUpload_ = $PendingUpload$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/$ChunkRenderMatrices" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Matrix4fc, $Matrix4fc$Type} from "packages/org/joml/$Matrix4fc"

export class $ChunkRenderMatrices extends $Record {

constructor(projection: $Matrix4fc$Type, modelView: $Matrix4fc$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $PoseStack$Type): $ChunkRenderMatrices
public "projection"(): $Matrix4fc
public "modelView"(): $Matrix4fc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderMatrices$Type = ($ChunkRenderMatrices);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRenderMatrices_ = $ChunkRenderMatrices$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/color/$ColorProviderRegistry" {
import {$BlockColors, $BlockColors$Type} from "packages/net/minecraft/client/color/block/$BlockColors"
import {$ColorProvider, $ColorProvider$Type} from "packages/me/jellysquid/mods/sodium/client/model/color/$ColorProvider"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ColorProviderRegistry {

constructor(arg0: $BlockColors$Type)

public "getColorProvider"(arg0: $Fluid$Type): $ColorProvider<($FluidState)>
public "getColorProvider"(arg0: $Block$Type): $ColorProvider<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorProviderRegistry$Type = ($ColorProviderRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorProviderRegistry_ = $ColorProviderRegistry$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/core/render/$VertexFormatAccessor" {
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"

export interface $VertexFormatAccessor {

 "getOffsets"(): $IntList

(): $IntList
}

export namespace $VertexFormatAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatAccessor$Type = ($VertexFormatAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatAccessor_ = $VertexFormatAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$SectionRenderDataStorage" {
import {$VertexRange, $VertexRange$Type} from "packages/me/jellysquid/mods/sodium/client/gl/util/$VertexRange"
import {$SectionRenderDataStorageAccessor, $SectionRenderDataStorageAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$SectionRenderDataStorageAccessor"
import {$GlBufferSegment, $GlBufferSegment$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/$GlBufferSegment"

export class $SectionRenderDataStorage implements $SectionRenderDataStorageAccessor {

constructor()

public "delete"(): void
public "getDataPointer"(arg0: integer): long
public "removeMeshes"(arg0: integer): void
public "replaceIndexBuffer"(arg0: integer, arg1: $GlBufferSegment$Type): void
public "removeIndexBuffer"(arg0: integer): void
public "setMeshes"(arg0: integer, arg1: $GlBufferSegment$Type, arg2: $GlBufferSegment$Type, arg3: ($VertexRange$Type)[]): void
public "onBufferResized"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDataStorage$Type = ($SectionRenderDataStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionRenderDataStorage_ = $SectionRenderDataStorage$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/lists/$ChunkRenderListIterable" {
import {$ChunkRenderList, $ChunkRenderList$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/lists/$ChunkRenderList"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $ChunkRenderListIterable {

 "iterator"(arg0: boolean): $Iterator<($ChunkRenderList)>
 "iterator"(): $Iterator<($ChunkRenderList)>

(arg0: boolean): $Iterator<($ChunkRenderList)>
}

export namespace $ChunkRenderListIterable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderListIterable$Type = ($ChunkRenderListIterable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRenderListIterable_ = $ChunkRenderListIterable$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/util/$VertexRange" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $VertexRange extends $Record {

constructor(vertexStart: integer, vertexCount: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "vertexCount"(): integer
public "vertexStart"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexRange$Type = ($VertexRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexRange_ = $VertexRange$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/tasks/$ChunkBuilderMeshingTask" {
import {$ChunkRenderContext, $ChunkRenderContext$Type} from "packages/me/jellysquid/mods/sodium/client/world/cloned/$ChunkRenderContext"
import {$ChunkBuildContext, $ChunkBuildContext$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildContext"
import {$WorldSlice, $WorldSlice$Type} from "packages/me/jellysquid/mods/sodium/client/world/$WorldSlice"
import {$RenderSection, $RenderSection$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/$RenderSection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ChunkBuildBuffers, $ChunkBuildBuffers$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildBuffers"
import {$TerrainRenderPass, $TerrainRenderPass$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/$TerrainRenderPass"
import {$CancellationToken, $CancellationToken$Type} from "packages/me/jellysquid/mods/sodium/client/util/task/$CancellationToken"
import {$BufferCache, $BufferCache$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCache"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BuiltSectionMeshParts, $BuiltSectionMeshParts$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionMeshParts"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$BufferCollection, $BufferCollection$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCollection"
import {$ChunkBuildOutput, $ChunkBuildOutput$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildOutput"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RebuildTaskExtender, $RebuildTaskExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$RebuildTaskExtender"
import {$ChunkBuilderTask, $ChunkBuilderTask$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/tasks/$ChunkBuilderTask"
import {$ChunkLayerMap, $ChunkLayerMap$Type} from "packages/team/creative/creativecore/common/util/type/map/$ChunkLayerMap"

export class $ChunkBuilderMeshingTask extends $ChunkBuilderTask<($ChunkBuildOutput)> implements $RebuildTaskExtender {
 "caches": $ChunkLayerMap<(any)>
 "buildContext": $ChunkBuildContext

constructor(arg0: $RenderSection$Type, arg1: $ChunkRenderContext$Type, arg2: integer)

public "upload"(arg0: $RenderType$Type, arg1: $BufferCache$Type): $BufferCache
public "handler$gdm000$performBuildEnd"(arg0: $ChunkBuildContext$Type, arg1: $CancellationToken$Type, arg2: $CallbackInfoReturnable$Type<(any)>): void
public "redirect$gdm000$createMesh"(arg0: $ChunkBuildBuffers$Type, arg1: $TerrainRenderPass$Type): $BuiltSectionMeshParts
public "redirect$gdm000$getBlockEntity"(arg0: $WorldSlice$Type, arg1: $BlockPos$Type): $BlockEntity
public "handler$gdm000$onCreated"(arg0: $RenderSection$Type, arg1: $ChunkRenderContext$Type, arg2: integer, arg3: $CallbackInfo$Type): void
public "handler$gdm000$performBuildStart"(arg0: $ChunkBuildContext$Type, arg1: $CancellationToken$Type, arg2: $CallbackInfoReturnable$Type<(any)>): void
public "getOrCreateBuffers"(arg0: $RenderType$Type): $BufferCollection
public "withCameraPosition"(arg0: $Vec3$Type): $ChunkBuilderMeshingTask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuilderMeshingTask$Type = ($ChunkBuilderMeshingTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuilderMeshingTask_ = $ChunkBuilderMeshingTask$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $ModelCuboid {
readonly "x1": float
readonly "y1": float
readonly "z1": float
readonly "x2": float
readonly "y2": float
readonly "z2": float
readonly "u0": float
readonly "u1": float
readonly "u2": float
readonly "u3": float
readonly "u4": float
readonly "u5": float
readonly "v0": float
readonly "v1": float
readonly "v2": float
readonly "mirror": boolean

constructor(arg0: integer, arg1: integer, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: boolean, arg12: float, arg13: float, arg14: $Set$Type<($Direction$Type)>)

public "shouldDrawFace"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelCuboid$Type = ($ModelCuboid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelCuboid_ = $ModelCuboid$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/device/$MultiDrawBatch" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MultiDrawBatch {
readonly "pElementPointer": long
readonly "pElementCount": long
readonly "pBaseVertex": long
 "size": integer

constructor(arg0: integer)

public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "delete"(): void
public "capacity"(): integer
public "getIndexBufferSize"(): integer
get "empty"(): boolean
get "indexBufferSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiDrawBatch$Type = ($MultiDrawBatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiDrawBatch_ = $MultiDrawBatch$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat$Element" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"

export class $ExtendedVertexFormat$Element {
readonly "actual": $VertexFormatElement
readonly "increment": integer
readonly "byteLength": integer

constructor(arg0: $VertexFormatElement$Type, arg1: integer, arg2: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedVertexFormat$Element$Type = ($ExtendedVertexFormat$Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedVertexFormat$Element_ = $ExtendedVertexFormat$Element$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/tessellation/$GlIndexType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GlIndexType extends $Enum<($GlIndexType)> {
static readonly "UNSIGNED_BYTE": $GlIndexType
static readonly "UNSIGNED_SHORT": $GlIndexType
static readonly "UNSIGNED_INT": $GlIndexType


public static "values"(): ($GlIndexType)[]
public static "valueOf"(arg0: string): $GlIndexType
public "getFormatId"(): integer
public "getStride"(): integer
get "formatId"(): integer
get "stride"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlIndexType$Type = (("unsigned_short") | ("unsigned_int") | ("unsigned_byte")) | ($GlIndexType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlIndexType_ = $GlIndexType$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlMutableBuffer" {
import {$GlBuffer, $GlBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBuffer"

export class $GlMutableBuffer extends $GlBuffer {

constructor()

public "getSize"(): long
public "setSize"(arg0: long): void
get "size"(): long
set "size"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlMutableBuffer$Type = ($GlMutableBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlMutableBuffer_ = $GlMutableBuffer$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor {

 "getIndex"(): integer
 "getTime"(): integer
}

export namespace $SpriteContentsAnimationFrameAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationFrameAccessor$Type = ($SpriteContentsAnimationFrameAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationFrameAccessor_ = $SpriteContentsAnimationFrameAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/cloned/$ClonedChunkSection" {
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$DataLayer, $DataLayer$Type} from "packages/net/minecraft/world/level/chunk/$DataLayer"
import {$PalettedContainerRO, $PalettedContainerRO$Type} from "packages/net/minecraft/world/level/chunk/$PalettedContainerRO"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$LevelChunkSection, $LevelChunkSection$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunkSection"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Int2ReferenceMap, $Int2ReferenceMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceMap"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"

export class $ClonedChunkSection {

constructor(arg0: $Level$Type, arg1: $LevelChunk$Type, arg2: $LevelChunkSection$Type, arg3: $SectionPos$Type)

public "getPosition"(): $SectionPos
public "getBlockEntityMap"(): $Int2ReferenceMap<($BlockEntity)>
public "getLightArray"(arg0: $LightLayer$Type): $DataLayer
public "getBlockData"(): $PalettedContainerRO<($BlockState)>
public "getBlockEntityRenderDataMap"(): $Int2ReferenceMap<(any)>
public "getBiomeData"(): $PalettedContainerRO<($Holder<($Biome)>)>
public "setLastUsedTimestamp"(arg0: long): void
public "getLastUsedTimestamp"(): long
get "position"(): $SectionPos
get "blockEntityMap"(): $Int2ReferenceMap<($BlockEntity)>
get "blockData"(): $PalettedContainerRO<($BlockState)>
get "blockEntityRenderDataMap"(): $Int2ReferenceMap<(any)>
get "biomeData"(): $PalettedContainerRO<($Holder<($Biome)>)>
set "lastUsedTimestamp"(value: long)
get "lastUsedTimestamp"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClonedChunkSection$Type = ($ClonedChunkSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClonedChunkSection_ = $ClonedChunkSection$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/arena/$GlBufferSegment" {
import {$GlBufferArena, $GlBufferArena$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/$GlBufferArena"
import {$GlBufferSegmentAccessor, $GlBufferSegmentAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$GlBufferSegmentAccessor"

export class $GlBufferSegment implements $GlBufferSegmentAccessor {

constructor(arg0: $GlBufferArena$Type, arg1: integer, arg2: integer)

public "getLength"(): integer
public "delete"(): void
public "getOffset"(): integer
get "length"(): integer
get "offset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlBufferSegment$Type = ($GlBufferSegment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlBufferSegment_ = $GlBufferSegment$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/color/$ColorProvider" {
import {$ModelQuadView, $ModelQuadView$Type} from "packages/me/jellysquid/mods/sodium/client/model/quad/$ModelQuadView"
import {$WorldSlice, $WorldSlice$Type} from "packages/me/jellysquid/mods/sodium/client/world/$WorldSlice"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ColorProvider<T> {

 "getColors"(arg0: $WorldSlice$Type, arg1: $BlockPos$Type, arg2: T, arg3: $ModelQuadView$Type, arg4: (integer)[]): void

(arg0: $WorldSlice$Type, arg1: $BlockPos$Type, arg2: T, arg3: $ModelQuadView$Type, arg4: (integer)[]): void
}

export namespace $ColorProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorProvider$Type<T> = ($ColorProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorProvider_<T> = $ColorProvider$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport" {
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$Frustum, $Frustum$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/frustum/$Frustum"
import {$CameraTransform, $CameraTransform$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/$CameraTransform"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Viewport {

constructor(arg0: $Frustum$Type, arg1: $Vector3d$Type)

public "getTransform"(): $CameraTransform
public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: float): boolean
public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float): boolean
public "isBoxVisible"(arg0: $AABB$Type): boolean
public "getChunkCoord"(): $SectionPos
public "getBlockCoord"(): $BlockPos
get "transform"(): $CameraTransform
get "chunkCoord"(): $SectionPos
get "blockCoord"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Viewport$Type = ($Viewport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Viewport_ = $Viewport$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/util/$NativeBuffer" {
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $NativeBuffer {

constructor(arg0: integer)

public "getLength"(): integer
public static "copy"(arg0: $ByteBuffer$Type): $NativeBuffer
public "free"(): void
public static "reclaim"(arg0: boolean): void
public static "getTotalAllocated"(): long
public "getDirectBuffer"(): $ByteBuffer
get "length"(): integer
get "totalAllocated"(): long
get "directBuffer"(): $ByteBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeBuffer$Type = ($NativeBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeBuffer_ = $NativeBuffer$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/$BiomeSeedProvider" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"

export interface $BiomeSeedProvider {

 "sodium$getBiomeSeed"(): long

(): long
}

export namespace $BiomeSeedProvider {
function getBiomeSeed(arg0: $ClientLevel$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSeedProvider$Type = ($BiomeSeedProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSeedProvider_ = $BiomeSeedProvider$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker" {
import {$ClientChunkEventListener, $ClientChunkEventListener$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ClientChunkEventListener"
import {$ChunkTracker$ChunkEventHandler, $ChunkTracker$ChunkEventHandler$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker$ChunkEventHandler"
import {$LongCollection, $LongCollection$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongCollection"

export class $ChunkTracker implements $ClientChunkEventListener {

constructor()

public "getReadyChunks"(): $LongCollection
public static "forEachChunk"(arg0: $LongCollection$Type, arg1: $ChunkTracker$ChunkEventHandler$Type): void
public "forEachEvent"(arg0: $ChunkTracker$ChunkEventHandler$Type, arg1: $ChunkTracker$ChunkEventHandler$Type): void
public "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
public "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
public "updateMapCenter"(arg0: integer, arg1: integer): void
public "updateLoadDistance"(arg0: integer): void
get "readyChunks"(): $LongCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$Type = ($ChunkTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTracker_ = $ChunkTracker$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexAttribute" {
import {$GlVertexAttributeFormat, $GlVertexAttributeFormat$Type} from "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexAttributeFormat"

export class $GlVertexAttribute {

constructor(arg0: $GlVertexAttributeFormat$Type, arg1: integer, arg2: boolean, arg3: integer, arg4: integer, arg5: boolean)

public "getSize"(): integer
public "getCount"(): integer
public "isNormalized"(): boolean
public "getFormat"(): integer
public "getPointer"(): integer
public "getStride"(): integer
public "isIntType"(): boolean
get "size"(): integer
get "count"(): integer
get "normalized"(): boolean
get "format"(): integer
get "pointer"(): integer
get "stride"(): integer
get "intType"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlVertexAttribute$Type = ($GlVertexAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlVertexAttribute_ = $GlVertexAttribute$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/tasks/$ChunkBuilderTask" {
import {$ChunkBuildContext, $ChunkBuildContext$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildContext"
import {$CancellationToken, $CancellationToken$Type} from "packages/me/jellysquid/mods/sodium/client/util/task/$CancellationToken"

export class $ChunkBuilderTask<OUTPUT> {

constructor()

public "execute"(arg0: $ChunkBuildContext$Type, arg1: $CancellationToken$Type): OUTPUT
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuilderTask$Type<OUTPUT> = ($ChunkBuilderTask<(OUTPUT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuilderTask_<OUTPUT> = $ChunkBuilderTask$Type<(OUTPUT)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTrackerHolder" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ChunkTracker, $ChunkTracker$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker"

export interface $ChunkTrackerHolder {

 "sodium$getTracker"(): $ChunkTracker

(arg0: $ClientLevel$Type): $ChunkTracker
}

export namespace $ChunkTrackerHolder {
function get(arg0: $ClientLevel$Type): $ChunkTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTrackerHolder$Type = ($ChunkTrackerHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTrackerHolder_ = $ChunkTrackerHolder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/color/interop/$BlockColorsExtended" {
import {$BlockColors, $BlockColors$Type} from "packages/net/minecraft/client/color/block/$BlockColors"
import {$ReferenceSet, $ReferenceSet$Type} from "packages/it/unimi/dsi/fastutil/objects/$ReferenceSet"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Reference2ReferenceMap, $Reference2ReferenceMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceMap"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockColorsExtended {

 "sodium$getProviders"(): $Reference2ReferenceMap<($Block), ($BlockColor)>
 "embeddium$getOverridenVanillaBlocks"(): $ReferenceSet<($Block)>
}

export namespace $BlockColorsExtended {
function getProviders(arg0: $BlockColors$Type): $Reference2ReferenceMap<($Block), ($BlockColor)>
function getOverridenVanillaBlocks(arg0: $BlockColors$Type): $ReferenceSet<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsExtended$Type = ($BlockColorsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsExtended_ = $BlockColorsExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/$SodiumWorldRenderer" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockDestructionProgress, $BlockDestructionProgress$Type} from "packages/net/minecraft/server/level/$BlockDestructionProgress"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Viewport, $Viewport$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Long2ObjectMap, $Long2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectMap"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SortedSet, $SortedSet$Type} from "packages/java/util/$SortedSet"
import {$RenderBuffers, $RenderBuffers$Type} from "packages/net/minecraft/client/renderer/$RenderBuffers"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SodiumWorldRendererAccessor, $SodiumWorldRendererAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$SodiumWorldRendererAccessor"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SodiumWorldRenderer implements $SodiumWorldRendererAccessor {

constructor(arg0: $Minecraft$Type)

public static "instance"(): $SodiumWorldRenderer
public "reload"(): void
public "didBlockEntityRequestOutline"(): boolean
public "scheduleRebuildForBlockArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "isTerrainRenderComplete"(): boolean
public "scheduleRebuildForChunks"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "getChunksDebugString"(): string
public "scheduleTerrainUpdate"(): void
public "scheduleRebuildForChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "getVisibleChunkCount"(): integer
public "renderBlockEntities"(arg0: $PoseStack$Type, arg1: $RenderBuffers$Type, arg2: $Long2ObjectMap$Type<($SortedSet$Type<($BlockDestructionProgress$Type)>)>, arg3: $Camera$Type, arg4: float): void
public "setWorld"(arg0: $ClientLevel$Type): void
public "drawChunkLayer"(arg0: $RenderType$Type, arg1: $PoseStack$Type, arg2: double, arg3: double, arg4: double): void
public "setupTerrain"(arg0: $Camera$Type, arg1: $Viewport$Type, arg2: integer, arg3: boolean, arg4: boolean): void
public "isSectionReady"(arg0: integer, arg1: integer, arg2: integer): boolean
public static "instanceNullable"(): $SodiumWorldRenderer
public "isEntityVisible"(arg0: $Entity$Type): boolean
public "forEachVisibleBlockEntity"(arg0: $Consumer$Type<($BlockEntity$Type)>): void
/**
 * 
 * @deprecated
 */
public "onChunkAdded"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "onChunkRemoved"(arg0: integer, arg1: integer): void
public "isBoxVisible"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public "getDebugStrings"(): $Collection<(string)>
/**
 * 
 * @deprecated
 */
public "onChunkLightAdded"(arg0: integer, arg1: integer): void
get "terrainRenderComplete"(): boolean
get "chunksDebugString"(): string
get "visibleChunkCount"(): integer
set "world"(value: $ClientLevel$Type)
get "debugStrings"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumWorldRenderer$Type = ($SodiumWorldRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumWorldRenderer_ = $SodiumWorldRenderer$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionMeshParts" {
import {$TranslucentQuadAnalyzer$SortState, $TranslucentQuadAnalyzer$SortState$Type} from "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$SortState"
import {$VertexRange, $VertexRange$Type} from "packages/me/jellysquid/mods/sodium/client/gl/util/$VertexRange"
import {$BuiltSectionMeshPartsExtender, $BuiltSectionMeshPartsExtender$Type} from "packages/team/creative/littletiles/client/mod/rubidium/data/$BuiltSectionMeshPartsExtender"
import {$BufferCollection, $BufferCollection$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCollection"
import {$NativeBuffer, $NativeBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/util/$NativeBuffer"

export class $BuiltSectionMeshParts implements $BuiltSectionMeshPartsExtender {
 "buffers": $BufferCollection

constructor(arg0: $NativeBuffer$Type, arg1: $NativeBuffer$Type, arg2: $TranslucentQuadAnalyzer$SortState$Type, arg3: ($VertexRange$Type)[])

public "getBuffers"(): $BufferCollection
public "getIndexData"(): $NativeBuffer
public "setBuffers"(arg0: $BufferCollection$Type): void
public "getVertexData"(): $NativeBuffer
public "getVertexRanges"(): ($VertexRange)[]
public "getSortState"(): $TranslucentQuadAnalyzer$SortState
get "buffers"(): $BufferCollection
get "indexData"(): $NativeBuffer
set "buffers"(value: $BufferCollection$Type)
get "vertexData"(): $NativeBuffer
get "vertexRanges"(): ($VertexRange)[]
get "sortState"(): $TranslucentQuadAnalyzer$SortState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltSectionMeshParts$Type = ($BuiltSectionMeshParts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuiltSectionMeshParts_ = $BuiltSectionMeshParts$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferMapping" {
import {$GlBuffer, $GlBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBuffer"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $GlBufferMapping {

constructor(arg0: $GlBuffer$Type, arg1: $ByteBuffer$Type)

public "write"(arg0: $ByteBuffer$Type, arg1: integer): void
public "isDisposed"(): boolean
public "dispose"(): void
public "getBufferObject"(): $GlBuffer
public "getMemoryBuffer"(): $ByteBuffer
get "disposed"(): boolean
get "bufferObject"(): $GlBuffer
get "memoryBuffer"(): $ByteBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlBufferMapping$Type = ($GlBufferMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlBufferMapping_ = $GlBufferMapping$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexEncoder$Vertex" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ChunkVertexEncoder$Vertex {
 "x": float
 "y": float
 "z": float
 "color": integer
 "u": float
 "v": float
 "light": integer

constructor()

public static "uninitializedQuad"(): ($ChunkVertexEncoder$Vertex)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkVertexEncoder$Vertex$Type = ($ChunkVertexEncoder$Vertex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkVertexEncoder$Vertex_ = $ChunkVertexEncoder$Vertex$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/$NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor {

 "getPointer"(): long

(): long
}

export namespace $NativeImageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImageAccessor$Type = ($NativeImageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImageAccessor_ = $NativeImageAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/light/$LightPipeline" {
import {$ModelQuadView, $ModelQuadView$Type} from "packages/me/jellysquid/mods/sodium/client/model/quad/$ModelQuadView"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$QuadLightData, $QuadLightData$Type} from "packages/me/jellysquid/mods/sodium/client/model/light/data/$QuadLightData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $LightPipeline {

 "calculate"(arg0: $ModelQuadView$Type, arg1: $BlockPos$Type, arg2: $QuadLightData$Type, arg3: $Direction$Type, arg4: $Direction$Type, arg5: boolean): void
 "reset"(): void

(arg0: $ModelQuadView$Type, arg1: $BlockPos$Type, arg2: $QuadLightData$Type, arg3: $Direction$Type, arg4: $Direction$Type, arg5: boolean): void
}

export namespace $LightPipeline {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightPipeline$Type = ($LightPipeline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightPipeline_ = $LightPipeline$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/$ModelCuboidAccessor" {
import {$ModelCuboid, $ModelCuboid$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid"

export interface $ModelCuboidAccessor {

 "sodium$copy"(): $ModelCuboid

(): $ModelCuboid
}

export namespace $ModelCuboidAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelCuboidAccessor$Type = ($ModelCuboidAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelCuboidAccessor_ = $ModelCuboidAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/light/data/$QuadLightData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $QuadLightData {
readonly "br": (float)[]
readonly "lm": (integer)[]

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadLightData$Type = ($QuadLightData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuadLightData_ = $QuadLightData$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionInfo" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BuiltSectionInfo {
static readonly "EMPTY": $BuiltSectionInfo
readonly "flags": integer
readonly "visibilityData": long
readonly "globalBlockEntities": ($BlockEntity)[]
readonly "culledBlockEntities": ($BlockEntity)[]
readonly "animatedSprites": ($TextureAtlasSprite)[]


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltSectionInfo$Type = ($BuiltSectionInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuiltSectionInfo_ = $BuiltSectionInfo$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/$ChunkUpdateType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChunkUpdateType extends $Enum<($ChunkUpdateType)> {
static readonly "INITIAL_BUILD": $ChunkUpdateType
static readonly "SORT": $ChunkUpdateType
static readonly "IMPORTANT_SORT": $ChunkUpdateType
static readonly "REBUILD": $ChunkUpdateType
static readonly "IMPORTANT_REBUILD": $ChunkUpdateType


public static "getPromotionUpdateType"(arg0: $ChunkUpdateType$Type, arg1: $ChunkUpdateType$Type): $ChunkUpdateType
public static "values"(): ($ChunkUpdateType)[]
public static "valueOf"(arg0: string): $ChunkUpdateType
public "getMaximumQueueSize"(): integer
public "isImportant"(): boolean
public "isSort"(): boolean
/**
 * 
 * @deprecated
 */
public static "canPromote"(arg0: $ChunkUpdateType$Type, arg1: $ChunkUpdateType$Type): boolean
get "maximumQueueSize"(): integer
get "important"(): boolean
get "sort"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkUpdateType$Type = (("initial_build") | ("rebuild") | ("important_rebuild") | ("important_sort") | ("sort")) | ($ChunkUpdateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkUpdateType_ = $ChunkUpdateType$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/core/model/$BakedModelMixin" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EmbeddiumBakedModelExtension, $EmbeddiumBakedModelExtension$Type} from "packages/org/embeddedt/embeddium/api/model/$EmbeddiumBakedModelExtension"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $BakedModelMixin extends $EmbeddiumBakedModelExtension {

 "useAmbientOcclusionWithLightEmission"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
}

export namespace $BakedModelMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelMixin$Type = ($BakedModelMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedModelMixin_ = $BakedModelMixin$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/executor/$ChunkJob" {
import {$ChunkBuildContext, $ChunkBuildContext$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildContext"
import {$CancellationToken, $CancellationToken$Type} from "packages/me/jellysquid/mods/sodium/client/util/task/$CancellationToken"

export interface $ChunkJob extends $CancellationToken {

 "execute"(arg0: $ChunkBuildContext$Type): void
 "isStarted"(): boolean
 "isCancelled"(): boolean
 "setCancelled"(): void
}

export namespace $ChunkJob {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkJob$Type = ($ChunkJob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkJob_ = $ChunkJob$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlImmutableBuffer" {
import {$EnumBitField, $EnumBitField$Type} from "packages/me/jellysquid/mods/sodium/client/gl/util/$EnumBitField"
import {$GlBuffer, $GlBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBuffer"
import {$GlBufferStorageFlags, $GlBufferStorageFlags$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferStorageFlags"

export class $GlImmutableBuffer extends $GlBuffer {

constructor(arg0: $EnumBitField$Type<($GlBufferStorageFlags$Type)>)

public "getFlags"(): $EnumBitField<($GlBufferStorageFlags)>
get "flags"(): $EnumBitField<($GlBufferStorageFlags)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlImmutableBuffer$Type = ($GlImmutableBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlImmutableBuffer_ = $GlImmutableBuffer$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/pipeline/$BlockRenderer" {
import {$BlockRendererAccessor, $BlockRendererAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$BlockRendererAccessor"
import {$LightPipelineProvider, $LightPipelineProvider$Type} from "packages/me/jellysquid/mods/sodium/client/model/light/$LightPipelineProvider"
import {$BlockRenderContext, $BlockRenderContext$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/pipeline/$BlockRenderContext"
import {$ColorProviderRegistry, $ColorProviderRegistry$Type} from "packages/me/jellysquid/mods/sodium/client/model/color/$ColorProviderRegistry"
import {$ChunkBuildBuffers, $ChunkBuildBuffers$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildBuffers"

export class $BlockRenderer implements $BlockRendererAccessor {

constructor(arg0: $ColorProviderRegistry$Type, arg1: $LightPipelineProvider$Type)

public "renderModel"(arg0: $BlockRenderContext$Type, arg1: $ChunkBuildBuffers$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRenderer$Type = ($BlockRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRenderer_ = $BlockRenderer$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/region/$RenderRegion" {
import {$ChunkRenderList, $ChunkRenderList$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/lists/$ChunkRenderList"
import {$StagingBuffer, $StagingBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/staging/$StagingBuffer"
import {$SectionRenderDataStorage, $SectionRenderDataStorage$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$SectionRenderDataStorage"
import {$RenderSection, $RenderSection$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/$RenderSection"
import {$CommandList, $CommandList$Type} from "packages/me/jellysquid/mods/sodium/client/gl/device/$CommandList"
import {$RenderRegion$DeviceResources, $RenderRegion$DeviceResources$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/region/$RenderRegion$DeviceResources"
import {$TerrainRenderPass, $TerrainRenderPass$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/$TerrainRenderPass"

export class $RenderRegion {
static readonly "REGION_WIDTH": integer
static readonly "REGION_HEIGHT": integer
static readonly "REGION_LENGTH": integer
static readonly "REGION_SIZE": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $StagingBuffer$Type)

public "getOriginY"(): integer
public "getOriginX"(): integer
public "update"(arg0: $CommandList$Type): void
public "isEmpty"(): boolean
public "getResources"(): $RenderRegion$DeviceResources
public static "key"(arg0: integer, arg1: integer, arg2: integer): long
public "delete"(arg0: $CommandList$Type): void
public "addSection"(arg0: $RenderSection$Type): void
public "refresh"(arg0: $CommandList$Type): void
public "getSection"(arg0: integer): $RenderSection
public "getStorage"(arg0: $TerrainRenderPass$Type): $SectionRenderDataStorage
public "getCenterX"(): integer
public "getCenterY"(): integer
public "getCenterZ"(): integer
public "getOriginZ"(): integer
public "createResources"(arg0: $CommandList$Type): $RenderRegion$DeviceResources
public "createStorage"(arg0: $TerrainRenderPass$Type): $SectionRenderDataStorage
public "getChunkZ"(): integer
public "getChunkX"(): integer
public "removeSection"(arg0: $RenderSection$Type): void
public "getChunkY"(): integer
public "getRenderList"(): $ChunkRenderList
get "originY"(): integer
get "originX"(): integer
get "empty"(): boolean
get "resources"(): $RenderRegion$DeviceResources
get "centerX"(): integer
get "centerY"(): integer
get "centerZ"(): integer
get "originZ"(): integer
get "chunkZ"(): integer
get "chunkX"(): integer
get "chunkY"(): integer
get "renderList"(): $ChunkRenderList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderRegion$Type = ($RenderRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderRegion_ = $RenderRegion$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionInfo$Builder" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TerrainRenderPass, $TerrainRenderPass$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/$TerrainRenderPass"
import {$VisibilitySet, $VisibilitySet$Type} from "packages/net/minecraft/client/renderer/chunk/$VisibilitySet"
import {$BuiltSectionInfo, $BuiltSectionInfo$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionInfo"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BuiltSectionInfo$Builder {

constructor()

public "build"(): $BuiltSectionInfo
public "addSprite"(arg0: $TextureAtlasSprite$Type): void
public "addBlockEntity"(arg0: $BlockEntity$Type, arg1: boolean): void
public "addRenderPass"(arg0: $TerrainRenderPass$Type): void
public "setOcclusionData"(arg0: $VisibilitySet$Type): void
set "occlusionData"(value: $VisibilitySet$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltSectionInfo$Builder$Type = ($BuiltSectionInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuiltSectionInfo$Builder_ = $BuiltSectionInfo$Builder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferTarget" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GlBufferTarget extends $Enum<($GlBufferTarget)> {
static readonly "ARRAY_BUFFER": $GlBufferTarget
static readonly "ELEMENT_BUFFER": $GlBufferTarget
static readonly "COPY_READ_BUFFER": $GlBufferTarget
static readonly "COPY_WRITE_BUFFER": $GlBufferTarget
static readonly "VALUES": ($GlBufferTarget)[]
static readonly "COUNT": integer


public static "values"(): ($GlBufferTarget)[]
public static "valueOf"(arg0: string): $GlBufferTarget
public "getTargetParameter"(): integer
public "getBindingParameter"(): integer
get "targetParameter"(): integer
get "bindingParameter"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlBufferTarget$Type = (("element_buffer") | ("copy_read_buffer") | ("array_buffer") | ("copy_write_buffer")) | ($GlBufferTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlBufferTarget_ = $GlBufferTarget$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/tessellation/$GlTessellation" {
import {$GlPrimitiveType, $GlPrimitiveType$Type} from "packages/me/jellysquid/mods/sodium/client/gl/tessellation/$GlPrimitiveType"
import {$CommandList, $CommandList$Type} from "packages/me/jellysquid/mods/sodium/client/gl/device/$CommandList"

export interface $GlTessellation {

 "bind"(arg0: $CommandList$Type): void
 "delete"(arg0: $CommandList$Type): void
 "unbind"(arg0: $CommandList$Type): void
 "getPrimitiveType"(): $GlPrimitiveType
}

export namespace $GlTessellation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlTessellation$Type = ($GlTessellation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlTessellation_ = $GlTessellation$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/array/$GlVertexArray" {
import {$GlObject, $GlObject$Type} from "packages/me/jellysquid/mods/sodium/client/gl/$GlObject"

export class $GlVertexArray extends $GlObject {
static readonly "NULL_ARRAY_ID": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlVertexArray$Type = ($GlVertexArray);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlVertexArray_ = $GlVertexArray$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexAttributeFormat" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $GlVertexAttributeFormat extends $Record {
static readonly "FLOAT": $GlVertexAttributeFormat
static readonly "UNSIGNED_SHORT": $GlVertexAttributeFormat
static readonly "UNSIGNED_BYTE": $GlVertexAttributeFormat
static readonly "UNSIGNED_INT": $GlVertexAttributeFormat

constructor(typeId: integer, size: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "size"(): integer
public "typeId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlVertexAttributeFormat$Type = ($GlVertexAttributeFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlVertexAttributeFormat_ = $GlVertexAttributeFormat$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildContext" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$BlockRenderCache, $BlockRenderCache$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/pipeline/$BlockRenderCache"
import {$ChunkVertexType, $ChunkVertexType$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexType"
import {$ChunkBuildBuffers, $ChunkBuildBuffers$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildBuffers"

export class $ChunkBuildContext {
readonly "buffers": $ChunkBuildBuffers
readonly "cache": $BlockRenderCache

constructor(arg0: $ClientLevel$Type, arg1: $ChunkVertexType$Type)

public "cleanup"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuildContext$Type = ($ChunkBuildContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuildContext_ = $ChunkBuildContext$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/tasks/$ChunkBuilderSortTask" {
import {$TranslucentQuadAnalyzer$SortState, $TranslucentQuadAnalyzer$SortState$Type} from "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$SortState"
import {$ChunkBuildOutput, $ChunkBuildOutput$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildOutput"
import {$RenderSection, $RenderSection$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/$RenderSection"
import {$ChunkBuilderTask, $ChunkBuilderTask$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/tasks/$ChunkBuilderTask"
import {$TerrainRenderPass, $TerrainRenderPass$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/$TerrainRenderPass"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChunkBuilderSortTask extends $ChunkBuilderTask<($ChunkBuildOutput)> {

constructor(arg0: $RenderSection$Type, arg1: float, arg2: float, arg3: float, arg4: integer, arg5: $Map$Type<($TerrainRenderPass$Type), ($TranslucentQuadAnalyzer$SortState$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuilderSortTask$Type = ($ChunkBuilderSortTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuilderSortTask_ = $ChunkBuilderSortTask$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/quad/$BakedQuadView" {
import {$ModelQuadFacing, $ModelQuadFacing$Type} from "packages/me/jellysquid/mods/sodium/client/model/quad/properties/$ModelQuadFacing"
import {$ModelQuadView, $ModelQuadView$Type} from "packages/me/jellysquid/mods/sodium/client/model/quad/$ModelQuadView"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $BakedQuadView extends $ModelQuadView {

 "hasShade"(): boolean
 "getNormalFace"(): $ModelQuadFacing
 "hasColor"(): boolean
 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getZ"(arg0: integer): float
 "getColor"(arg0: integer): integer
 "getSprite"(): $TextureAtlasSprite
 "getColorIndex"(): integer
 "getTexV"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getLightFace"(): $Direction
 "getForgeNormal"(arg0: integer): integer
 "getTexU"(arg0: integer): float
 "hasAmbientOcclusion"(): boolean
 "getX"(arg0: integer): float
}

export namespace $BakedQuadView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuadView$Type = ($BakedQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedQuadView_ = $BakedQuadView$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/color/interop/$ItemColorsExtended" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"

export interface $ItemColorsExtended {

 "sodium$getColorProvider"(arg0: $ItemStack$Type): $ItemColor

(arg0: $ItemStack$Type): $ItemColor
}

export namespace $ItemColorsExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsExtended$Type = ($ItemColorsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsExtended_ = $ItemColorsExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/material/parameters/$AlphaCutoffParameter" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AlphaCutoffParameter extends $Enum<($AlphaCutoffParameter)> {
static readonly "ZERO": $AlphaCutoffParameter
static readonly "ONE_TENTH": $AlphaCutoffParameter
static readonly "HALF": $AlphaCutoffParameter
static readonly "ONE": $AlphaCutoffParameter


public static "values"(): ($AlphaCutoffParameter)[]
public static "valueOf"(arg0: string): $AlphaCutoffParameter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlphaCutoffParameter$Type = (("zero") | ("half") | ("one") | ("one_tenth")) | ($AlphaCutoffParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlphaCutoffParameter_ = $AlphaCutoffParameter$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/util/iterator/$ByteIterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ByteIterator {

 "hasNext"(): boolean
 "nextByteAsInt"(): integer
}

export namespace $ByteIterator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteIterator$Type = ($ByteIterator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteIterator_ = $ByteIterator$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/lists/$ChunkRenderList" {
import {$RenderSection, $RenderSection$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/$RenderSection"
import {$ByteIterator, $ByteIterator$Type} from "packages/me/jellysquid/mods/sodium/client/util/iterator/$ByteIterator"
import {$RenderRegion, $RenderRegion$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/region/$RenderRegion"

export class $ChunkRenderList {

constructor(arg0: $RenderRegion$Type)

public "sectionsWithGeometryIterator"(arg0: boolean): $ByteIterator
public "sectionsWithSpritesIterator"(): $ByteIterator
public "getLastVisibleFrame"(): integer
public "getSectionsWithGeometryCount"(): integer
public "add"(arg0: $RenderSection$Type): void
public "size"(): integer
public "reset"(arg0: integer): void
public "getRegion"(): $RenderRegion
public "sectionsWithEntitiesIterator"(): $ByteIterator
public "getSectionsWithSpritesCount"(): integer
public "getSectionsWithEntitiesCount"(): integer
get "lastVisibleFrame"(): integer
get "sectionsWithGeometryCount"(): integer
get "region"(): $RenderRegion
get "sectionsWithSpritesCount"(): integer
get "sectionsWithEntitiesCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderList$Type = ($ChunkRenderList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRenderList_ = $ChunkRenderList$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferStorageFlags" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumBit, $EnumBit$Type} from "packages/me/jellysquid/mods/sodium/client/gl/util/$EnumBit"

export class $GlBufferStorageFlags extends $Enum<($GlBufferStorageFlags)> implements $EnumBit {
static readonly "PERSISTENT": $GlBufferStorageFlags
static readonly "MAP_READ": $GlBufferStorageFlags
static readonly "MAP_WRITE": $GlBufferStorageFlags
static readonly "CLIENT_STORAGE": $GlBufferStorageFlags
static readonly "COHERENT": $GlBufferStorageFlags


public static "values"(): ($GlBufferStorageFlags)[]
public static "valueOf"(arg0: string): $GlBufferStorageFlags
public "getBits"(): integer
get "bits"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlBufferStorageFlags$Type = (("map_write") | ("map_read") | ("client_storage") | ("coherent") | ("persistent")) | ($GlBufferStorageFlags);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlBufferStorageFlags_ = $GlBufferStorageFlags$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexFormat$Builder" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$GlVertexFormat, $GlVertexFormat$Type} from "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexFormat"
import {$GlVertexAttributeFormat, $GlVertexAttributeFormat$Type} from "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexAttributeFormat"

export class $GlVertexFormat$Builder<T extends $Enum<(T)>> {

constructor(arg0: $Class$Type<(T)>, arg1: integer)

public "build"(): $GlVertexFormat<(T)>
public "addElement"(arg0: T, arg1: integer, arg2: $GlVertexAttributeFormat$Type, arg3: integer, arg4: boolean, arg5: boolean): $GlVertexFormat$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlVertexFormat$Builder$Type<T> = ($GlVertexFormat$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlVertexFormat$Builder_<T> = $GlVertexFormat$Builder$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/region/$RenderRegionManager" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ChunkBuildOutput, $ChunkBuildOutput$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildOutput"
import {$StagingBuffer, $StagingBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/staging/$StagingBuffer"
import {$CommandList, $CommandList$Type} from "packages/me/jellysquid/mods/sodium/client/gl/device/$CommandList"
import {$RenderRegion, $RenderRegion$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/region/$RenderRegion"

export class $RenderRegionManager {

constructor(arg0: $CommandList$Type)

public "update"(): void
public "delete"(arg0: $CommandList$Type): void
public "uploadMeshes"(arg0: $CommandList$Type, arg1: $Collection$Type<($ChunkBuildOutput$Type)>): void
public "createForChunk"(arg0: integer, arg1: integer, arg2: integer): $RenderRegion
public "getStagingBuffer"(): $StagingBuffer
public "getLoadedRegions"(): $Collection<($RenderRegion)>
get "stagingBuffer"(): $StagingBuffer
get "loadedRegions"(): $Collection<($RenderRegion)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderRegionManager$Type = ($RenderRegionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderRegionManager_ = $RenderRegionManager$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/pipeline/$BlockRenderContext" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$WorldSlice, $WorldSlice$Type} from "packages/me/jellysquid/mods/sodium/client/world/$WorldSlice"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$BlockRenderContextAccessor, $BlockRenderContextAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$BlockRenderContextAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $BlockRenderContext implements $BlockRenderContextAccessor {

constructor(arg0: $WorldSlice$Type)

public "update"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BakedModel$Type, arg4: long, arg5: $ModelData$Type, arg6: $RenderType$Type): void
public "stack"(): $PoseStack
public "pos"(): $BlockPos
public "state"(): $BlockState
public "seed"(): long
public "origin"(): $Vector3fc
public "world"(): $WorldSlice
public "model"(): $BakedModel
public "modelData"(): $ModelData
public "renderLayer"(): $RenderType
public "localSlice"(): $BlockAndTintGetter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRenderContext$Type = ($BlockRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRenderContext_ = $BlockRenderContext$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexFormat" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$GlVertexAttribute, $GlVertexAttribute$Type} from "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexAttribute"
import {$GlVertexFormat$Builder, $GlVertexFormat$Builder$Type} from "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexFormat$Builder"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $GlVertexFormat<T extends $Enum<(T)>> {

constructor(arg0: $Class$Type<(T)>, arg1: $EnumMap$Type<(T), ($GlVertexAttribute$Type)>, arg2: integer)

public "toString"(): string
public static "builder"<T extends $Enum<(T)>>(arg0: $Class$Type<(T)>, arg1: integer): $GlVertexFormat$Builder<(T)>
public "getAttribute"(arg0: T): $GlVertexAttribute
public "getStride"(): integer
get "stride"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlVertexFormat$Type<T> = ($GlVertexFormat<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlVertexFormat_<T> = $GlVertexFormat$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/util/$EnumBitField" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumBit, $EnumBit$Type} from "packages/me/jellysquid/mods/sodium/client/gl/util/$EnumBit"

export class $EnumBitField<T extends ($Enum<(T)>) & ($EnumBit)> {


public static "of"<T extends ($Enum<(T)>) & ($EnumBit)>(...arg0: (T)[]): $EnumBitField<(T)>
public "contains"(arg0: T): boolean
public "getBitField"(): integer
get "bitField"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumBitField$Type<T> = ($EnumBitField<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumBitField_<T> = $EnumBitField$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkMeshAttribute" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChunkMeshAttribute extends $Enum<($ChunkMeshAttribute)> {
static readonly "POSITION_MATERIAL_MESH": $ChunkMeshAttribute
static readonly "COLOR_SHADE": $ChunkMeshAttribute
static readonly "BLOCK_TEXTURE": $ChunkMeshAttribute
static readonly "LIGHT_TEXTURE": $ChunkMeshAttribute


public static "values"(): ($ChunkMeshAttribute)[]
public static "valueOf"(arg0: string): $ChunkMeshAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMeshAttribute$Type = (("color_shade") | ("block_texture") | ("position_material_mesh") | ("light_texture")) | ($ChunkMeshAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkMeshAttribute_ = $ChunkMeshAttribute$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$ExtendedBufferBuilder" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MemoryStack, $MemoryStack$Type} from "packages/org/lwjgl/system/$MemoryStack"
import {$SodiumBufferBuilder, $SodiumBufferBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$SodiumBufferBuilder"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$VertexFormatDescription, $VertexFormatDescription$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription"
import {$VertexBufferWriter, $VertexBufferWriter$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/buffer/$VertexBufferWriter"

export interface $ExtendedBufferBuilder extends $VertexBufferWriter {

 "sodium$getBuffer"(): $ByteBuffer
 "sodium$getDelegate"(): $SodiumBufferBuilder
 "sodium$getFormatDescription"(): $VertexFormatDescription
 "sodium$getElementOffset"(): integer
 "sodium$moveToNextVertex"(): void
 "sodium$usingFixedColor"(): boolean
 "push"(arg0: $MemoryStack$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$Type): void
 "canUseIntrinsics"(): boolean
/**
 * 
 * @deprecated
 */
 "isFullWriter"(): boolean
}

export namespace $ExtendedBufferBuilder {
function of(arg0: $VertexConsumer$Type): $VertexBufferWriter
function copyInto(arg0: $VertexBufferWriter$Type, arg1: $MemoryStack$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$Type): void
function tryOf(arg0: $VertexConsumer$Type): $VertexBufferWriter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBufferBuilder$Type = ($ExtendedBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedBufferBuilder_ = $ExtendedBufferBuilder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/$CameraTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CameraTransform {
readonly "intX": integer
readonly "intY": integer
readonly "intZ": integer
readonly "fracX": float
readonly "fracY": float
readonly "fracZ": float
readonly "x": double
readonly "y": double
readonly "z": double

constructor(arg0: double, arg1: double, arg2: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraTransform$Type = ($CameraTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraTransform_ = $CameraTransform$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferMapFlags" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumBit, $EnumBit$Type} from "packages/me/jellysquid/mods/sodium/client/gl/util/$EnumBit"

export class $GlBufferMapFlags extends $Enum<($GlBufferMapFlags)> implements $EnumBit {
static readonly "READ": $GlBufferMapFlags
static readonly "WRITE": $GlBufferMapFlags
static readonly "PERSISTENT": $GlBufferMapFlags
static readonly "INVALIDATE_BUFFER": $GlBufferMapFlags
static readonly "INVALIDATE_RANGE": $GlBufferMapFlags
static readonly "EXPLICIT_FLUSH": $GlBufferMapFlags
static readonly "COHERENT": $GlBufferMapFlags
static readonly "UNSYNCHRONIZED": $GlBufferMapFlags


public static "values"(): ($GlBufferMapFlags)[]
public static "valueOf"(arg0: string): $GlBufferMapFlags
public "getBits"(): integer
get "bits"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlBufferMapFlags$Type = (("unsynchronized") | ("read") | ("invalidate_buffer") | ("coherent") | ("explicit_flush") | ("persistent") | ("write") | ("invalidate_range")) | ($GlBufferMapFlags);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlBufferMapFlags_ = $GlBufferMapFlags$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/util/task/$CancellationToken" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CancellationToken {

 "isCancelled"(): boolean
 "setCancelled"(): void
}

export namespace $CancellationToken {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CancellationToken$Type = ($CancellationToken);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CancellationToken_ = $CancellationToken$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/light/$LightMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LightMode extends $Enum<($LightMode)> {
static readonly "SMOOTH": $LightMode
static readonly "FLAT": $LightMode


public static "values"(): ($LightMode)[]
public static "valueOf"(arg0: string): $LightMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightMode$Type = (("flat") | ("smooth")) | ($LightMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightMode_ = $LightMode$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferUsage" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GlBufferUsage extends $Enum<($GlBufferUsage)> {
static readonly "STREAM_DRAW": $GlBufferUsage
static readonly "STREAM_READ": $GlBufferUsage
static readonly "STREAM_COPY": $GlBufferUsage
static readonly "STATIC_DRAW": $GlBufferUsage
static readonly "STATIC_READ": $GlBufferUsage
static readonly "STATIC_COPY": $GlBufferUsage
static readonly "DYNAMIC_DRAW": $GlBufferUsage
static readonly "DYNAMIC_READ": $GlBufferUsage
static readonly "DYNAMIC_COPY": $GlBufferUsage


public static "values"(): ($GlBufferUsage)[]
public static "valueOf"(arg0: string): $GlBufferUsage
public "getId"(): integer
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlBufferUsage$Type = (("static_draw") | ("dynamic_copy") | ("stream_read") | ("dynamic_draw") | ("static_copy") | ("stream_draw") | ("stream_copy") | ("dynamic_read") | ("static_read")) | ($GlBufferUsage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlBufferUsage_ = $GlBufferUsage$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/builder/$ChunkMeshBufferBuilder" {
import {$TranslucentQuadAnalyzer$SortState, $TranslucentQuadAnalyzer$SortState$Type} from "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$SortState"
import {$ChunkMeshBufferBuilderAccessor, $ChunkMeshBufferBuilderAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$ChunkMeshBufferBuilderAccessor"
import {$ChunkVertexType, $ChunkVertexType$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexType"
import {$Material, $Material$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/material/$Material"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$ChunkVertexEncoder$Vertex, $ChunkVertexEncoder$Vertex$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexEncoder$Vertex"

export class $ChunkMeshBufferBuilder implements $ChunkMeshBufferBuilderAccessor {

constructor(arg0: $ChunkVertexType$Type, arg1: integer, arg2: boolean)

public "isEmpty"(): boolean
public "count"(): integer
public "start"(arg0: integer): void
public "destroy"(): void
public "slice"(): $ByteBuffer
public "push"(arg0: ($ChunkVertexEncoder$Vertex$Type)[], arg1: $Material$Type): void
public "getSortState"(): $TranslucentQuadAnalyzer$SortState
get "empty"(): boolean
get "sortState"(): $TranslucentQuadAnalyzer$SortState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMeshBufferBuilder$Type = ($ChunkMeshBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkMeshBufferBuilder_ = $ChunkMeshBufferBuilder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/executor/$ChunkBuilder" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ChunkVertexType, $ChunkVertexType$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexType"
import {$ChunkJob, $ChunkJob$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/executor/$ChunkJob"
import {$ChunkBuilderAccessor, $ChunkBuilderAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$ChunkBuilderAccessor"
import {$ChunkBuilderTask, $ChunkBuilderTask$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/tasks/$ChunkBuilderTask"
import {$ChunkJobTyped, $ChunkJobTyped$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/executor/$ChunkJobTyped"
import {$ChunkJobResult, $ChunkJobResult$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/executor/$ChunkJobResult"

export class $ChunkBuilder implements $ChunkBuilderAccessor {

constructor(arg0: $ClientLevel$Type, arg1: $ChunkVertexType$Type)

public "getSchedulingBudget"(): integer
public "shutdown"(): void
public "getTotalThreadCount"(): integer
public "isBuildQueueEmpty"(): boolean
public "tryStealTask"(arg0: $ChunkJob$Type): void
public static "getMaxThreadCount"(): integer
public "getScheduledJobCount"(): integer
public "scheduleTask"<TASK extends $ChunkBuilderTask<(OUTPUT)>, OUTPUT>(arg0: TASK, arg1: boolean, arg2: $Consumer$Type<($ChunkJobResult$Type<(OUTPUT)>)>): $ChunkJobTyped<(TASK), (OUTPUT)>
public "getBusyThreadCount"(): integer
get "schedulingBudget"(): integer
get "totalThreadCount"(): integer
get "buildQueueEmpty"(): boolean
get "maxThreadCount"(): integer
get "scheduledJobCount"(): integer
get "busyThreadCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuilder$Type = ($ChunkBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuilder_ = $ChunkBuilder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildOutput" {
import {$BuiltSectionMeshParts, $BuiltSectionMeshParts$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionMeshParts"
import {$RenderSection, $RenderSection$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/$RenderSection"
import {$TerrainRenderPass, $TerrainRenderPass$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/$TerrainRenderPass"
import {$BuiltSectionInfo, $BuiltSectionInfo$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionInfo"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChunkBuildOutput {
readonly "render": $RenderSection
readonly "info": $BuiltSectionInfo
readonly "meshes": $Map<($TerrainRenderPass), ($BuiltSectionMeshParts)>
readonly "buildTime": integer

constructor(arg0: $RenderSection$Type, arg1: $BuiltSectionInfo$Type, arg2: $Map$Type<($TerrainRenderPass$Type), ($BuiltSectionMeshParts$Type)>, arg3: integer)

public "delete"(): void
public "setIndexOnlyUpload"(arg0: boolean): void
public "getMesh"(arg0: $TerrainRenderPass$Type): $BuiltSectionMeshParts
public "isIndexOnlyUpload"(): boolean
set "indexOnlyUpload"(value: boolean)
get "indexOnlyUpload"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuildOutput$Type = ($ChunkBuildOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuildOutput_ = $ChunkBuildOutput$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/arena/staging/$StagingBuffer" {
import {$GlBuffer, $GlBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBuffer"
import {$CommandList, $CommandList$Type} from "packages/me/jellysquid/mods/sodium/client/gl/device/$CommandList"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export interface $StagingBuffer {

 "flush"(arg0: $CommandList$Type): void
 "delete"(arg0: $CommandList$Type): void
 "flip"(): void
 "enqueueCopy"(arg0: $CommandList$Type, arg1: $ByteBuffer$Type, arg2: $GlBuffer$Type, arg3: long): void
}

export namespace $StagingBuffer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StagingBuffer$Type = ($StagingBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StagingBuffer_ = $StagingBuffer$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/light/data/$LightDataAccess" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $LightDataAccess {

constructor()

public "get"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
public "get"(arg0: $BlockPos$Type): integer
public "get"(arg0: integer, arg1: integer, arg2: integer): integer
public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: $Direction$Type): integer
public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: $Direction$Type, arg4: $Direction$Type): integer
public "getWorld"(): $BlockAndTintGetter
public static "unpackSL"(arg0: integer): integer
public static "unpackAO"(arg0: integer): float
public static "packOP"(arg0: boolean): integer
public static "packLU"(arg0: integer): integer
public static "unpackEM"(arg0: integer): boolean
public static "unpackLU"(arg0: integer): integer
public static "unpackOP"(arg0: integer): boolean
public static "packFC"(arg0: boolean): integer
public static "packEM"(arg0: boolean): integer
public static "packSL"(arg0: integer): integer
public static "packBL"(arg0: integer): integer
public static "packFO"(arg0: boolean): integer
public static "packAO"(arg0: float): integer
public static "unpackBL"(arg0: integer): integer
public static "unpackFC"(arg0: integer): boolean
public static "getLightmap"(arg0: integer): integer
public static "unpackFO"(arg0: integer): boolean
public static "getEmissiveLightmap"(arg0: integer): integer
get "world"(): $BlockAndTintGetter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightDataAccess$Type = ($LightDataAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightDataAccess_ = $LightDataAccess$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/$TerrainRenderPass" {
import {$TerrainRenderPassAccessor, $TerrainRenderPassAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$TerrainRenderPassAccessor"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $TerrainRenderPass implements $TerrainRenderPassAccessor {

constructor(arg0: $RenderType$Type, arg1: boolean, arg2: boolean)

public "isSorted"(): boolean
/**
 * 
 * @deprecated
 */
public "endDrawing"(): void
/**
 * 
 * @deprecated
 */
public "startDrawing"(): void
public "isReverseOrder"(): boolean
public "supportsFragmentDiscard"(): boolean
get "sorted"(): boolean
get "reverseOrder"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerrainRenderPass$Type = ($TerrainRenderPass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerrainRenderPass_ = $TerrainRenderPass$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/material/$Material" {
import {$AlphaCutoffParameter, $AlphaCutoffParameter$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/material/parameters/$AlphaCutoffParameter"
import {$TerrainRenderPass, $TerrainRenderPass$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/$TerrainRenderPass"

export class $Material {
readonly "pass": $TerrainRenderPass
readonly "packed": integer
readonly "alphaCutoff": $AlphaCutoffParameter
readonly "mipped": boolean

constructor(arg0: $TerrainRenderPass$Type, arg1: $AlphaCutoffParameter$Type, arg2: boolean)

public "bits"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Material$Type = ($Material);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Material_ = $Material$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/$ReadableContainerExtended" {
import {$PalettedContainerRO, $PalettedContainerRO$Type} from "packages/net/minecraft/world/level/chunk/$PalettedContainerRO"

export interface $ReadableContainerExtended<T> {

 "sodium$copy"(): $PalettedContainerRO<(T)>
 "sodium$unpack"(arg0: (T)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "sodium$unpack"(arg0: (T)[]): void
}

export namespace $ReadableContainerExtended {
function clone<T>(arg0: $PalettedContainerRO$Type<(T)>): $PalettedContainerRO<(T)>
function of<T>(arg0: $PalettedContainerRO$Type<(T)>): $ReadableContainerExtended<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadableContainerExtended$Type<T> = ($ReadableContainerExtended<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReadableContainerExtended_<T> = $ReadableContainerExtended$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelPartData" {
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ModelCuboid, $ModelCuboid$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid"

export interface $ModelPartData {

 "isHidden"(): boolean
 "getChildren"(): ($ModelPart)[]
 "isVisible"(): boolean
 "getCuboids"(): ($ModelCuboid)[]
}

export namespace $ModelPartData {
function from(arg0: $ModelPart$Type): $ModelPartData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartData$Type = ($ModelPartData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartData_ = $ModelPartData$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/tessellation/$GlPrimitiveType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GlPrimitiveType extends $Enum<($GlPrimitiveType)> {
static readonly "TRIANGLES": $GlPrimitiveType


public static "values"(): ($GlPrimitiveType)[]
public static "valueOf"(arg0: string): $GlPrimitiveType
public "getId"(): integer
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlPrimitiveType$Type = (("triangles")) | ($GlPrimitiveType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlPrimitiveType_ = $GlPrimitiveType$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildBuffers" {
import {$ChunkVertexType, $ChunkVertexType$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexType"
import {$BuiltSectionMeshParts, $BuiltSectionMeshParts$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionMeshParts"
import {$ChunkModelBuilder, $ChunkModelBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/buffers/$ChunkModelBuilder"
import {$Material, $Material$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/material/$Material"
import {$BuiltSectionInfo$Builder, $BuiltSectionInfo$Builder$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionInfo$Builder"
import {$ChunkBuildBuffersAccessor, $ChunkBuildBuffersAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$ChunkBuildBuffersAccessor"
import {$TerrainRenderPass, $TerrainRenderPass$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/$TerrainRenderPass"

export class $ChunkBuildBuffers implements $ChunkBuildBuffersAccessor {

constructor(arg0: $ChunkVertexType$Type)

public "get"(arg0: $TerrainRenderPass$Type): $ChunkModelBuilder
public "get"(arg0: $Material$Type): $ChunkModelBuilder
public "init"(arg0: $BuiltSectionInfo$Builder$Type, arg1: integer): void
public "destroy"(): void
public "createMesh"(arg0: $TerrainRenderPass$Type): $BuiltSectionMeshParts
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuildBuffers$Type = ($ChunkBuildBuffers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuildBuffers_ = $ChunkBuildBuffers$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/$WorldRendererExtended" {
import {$SodiumWorldRenderer, $SodiumWorldRenderer$Type} from "packages/me/jellysquid/mods/sodium/client/render/$SodiumWorldRenderer"

export interface $WorldRendererExtended {

 "sodium$getWorldRenderer"(): $SodiumWorldRenderer

(): $SodiumWorldRenderer
}

export namespace $WorldRendererExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererExtended$Type = ($WorldRendererExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererExtended_ = $WorldRendererExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/texture/$SpriteContentsExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExtended {

 "sodium$isActive"(): boolean
 "sodium$hasAnimation"(): boolean
 "sodium$setActive"(arg0: boolean): void
}

export namespace $SpriteContentsExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtended$Type = ($SpriteContentsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtended_ = $SpriteContentsExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/$RenderSection" {
import {$TranslucentQuadAnalyzer$SortState, $TranslucentQuadAnalyzer$SortState$Type} from "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$SortState"
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BufferBuilder$SortState, $BufferBuilder$SortState$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$SortState"
import {$LittleRenderPipelineType, $LittleRenderPipelineType$Type} from "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipelineType"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$VertexBuffer, $VertexBuffer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexBuffer"
import {$GlVertexFormat, $GlVertexFormat$Type} from "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexFormat"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$BuiltSectionInfo, $BuiltSectionInfo$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionInfo"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RebuildTaskExtender, $RebuildTaskExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$RebuildTaskExtender"
import {$ChunkLayerMap, $ChunkLayerMap$Type} from "packages/team/creative/creativecore/common/util/type/map/$ChunkLayerMap"
import {$GlBufferSegment, $GlBufferSegment$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/$GlBufferSegment"
import {$RenderRegion, $RenderRegion$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/region/$RenderRegion"
import {$VertexBufferExtender, $VertexBufferExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$VertexBufferExtender"
import {$ChunkUpdateType, $ChunkUpdateType$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/$ChunkUpdateType"
import {$SectionRenderDataStorage, $SectionRenderDataStorage$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$SectionRenderDataStorage"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$CancellationToken, $CancellationToken$Type} from "packages/me/jellysquid/mods/sodium/client/util/task/$CancellationToken"
import {$RenderChunkExtender, $RenderChunkExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$RenderChunkExtender"
import {$BufferCollection, $BufferCollection$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCollection"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $RenderSection implements $RenderChunkExtender {
 "adjacentDown": $RenderSection
 "adjacentUp": $RenderSection
 "adjacentNorth": $RenderSection
 "adjacentSouth": $RenderSection
 "adjacentWest": $RenderSection
 "adjacentEast": $RenderSection
 "lastCameraX": double
 "lastCameraY": double
 "lastCameraZ": double
 "lastUploaded": $ChunkLayerMap<(any)>

constructor(arg0: $RenderRegion$Type, arg1: integer, arg2: integer, arg3: integer)

public "isBuilt"(): boolean
public "containsTranslucentGeometry"(): boolean
public "isAlignedWithSectionOnGrid"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getLastVisibleFrame"(): integer
public "getBuildCancellationToken"(): $CancellationToken
public "setBuildCancellationToken"(arg0: $CancellationToken$Type): void
public "getLastSubmittedFrame"(): integer
public "setLastSubmittedFrame"(arg0: integer): void
public "setQuadSorting"(arg0: $BufferBuilder$Type, arg1: double, arg2: double, arg3: double): void
public "getOriginY"(): integer
public "getOriginX"(): integer
public "getPipeline"(): $LittleRenderPipelineType<(any)>
public "appendRenderData"(arg0: $Iterable$Type<(any)>): boolean
public "offsetCorrection"(arg0: $RenderChunkExtender$Type): $Vec3
public "backToRAM"(): void
public "toString"(): string
public "isEmpty"(arg0: $RenderType$Type): boolean
public "begin"(arg0: $BufferBuilder$Type): void
public "delete"(): void
public "getRegion"(): $RenderRegion
public "standardOffset"(): $BlockPos
public "getPosition"(): $SectionPos
public "getFlags"(): integer
public "isDisposed"(): boolean
public "sectionIndex"(): integer
public "setInfo"(arg0: $BuiltSectionInfo$Type): void
public "getStorage"(arg0: $RenderRegion$Type, arg1: $RenderType$Type): $SectionRenderDataStorage
public "getCenterX"(): integer
public "getCenterY"(): integer
public "getCulledBlockEntities"(): ($BlockEntity)[]
public "getGlobalBlockEntities"(): ($BlockEntity)[]
public "getVertexBuffer"(arg0: $RenderType$Type): $VertexBuffer
public "getAdjacent"(arg0: integer): $RenderSection
public "getTransparencyState"(): $BufferBuilder$SortState
public "downloadUploadedData"(arg0: $VertexBufferExtender$Type, arg1: long, arg2: integer): $ByteBuffer
public "getVisibilityData"(): long
public "getCenterZ"(): integer
public "getAdjacentMask"(): integer
public "getOriginZ"(): integer
public "getSectionIndex"(): integer
public "setHasBlock"(arg0: $RenderType$Type): void
public "markReadyForUpdate"(arg0: boolean): void
public "setLastUploaded"(arg0: $ChunkLayerMap$Type<(any)>): void
public "prepareUpload"(): void
public "getLastUploaded"(): $ChunkLayerMap<(any)>
public "getQueued"(): integer
public "setQueued"(arg0: integer): void
public "getChunkZ"(): integer
public "getChunkX"(): integer
public "getRenderRegion"(): $RenderRegion
public "getUploadedBuffer"(arg0: $SectionRenderDataStorage$Type): $GlBufferSegment
public "downloadSegment"(arg0: $GlBufferSegment$Type, arg1: $GlVertexFormat$Type<(any)>): $ByteBuffer
public "setSortState"(arg0: $TranslucentQuadAnalyzer$SortState$Type): void
public "getSortState"(): $TranslucentQuadAnalyzer$SortState
public "getPendingUpdate"(): $ChunkUpdateType
public "setPendingUpdate"(arg0: $ChunkUpdateType$Type): void
public "getAnimatedSprites"(): ($TextureAtlasSprite)[]
public "getLastBuiltFrame"(): integer
public "setLastBuiltFrame"(arg0: integer): void
public "getChunkY"(): integer
public "setAdjacentNode"(arg0: integer, arg1: $RenderSection$Type): void
public "getSquaredDistance"(arg0: float, arg1: float, arg2: float): float
public "getSquaredDistance"(arg0: $BlockPos$Type): float
public "getIncomingDirections"(): integer
public "setIncomingDirections"(arg0: integer): void
public "addIncomingDirections"(arg0: integer): void
public "setLastVisibleFrame"(arg0: integer): void
public "setQuadSorting"(arg0: $BufferBuilder$Type, arg1: $Vec3$Type): void
public "endBuilding"(arg0: $RebuildTaskExtender$Type): void
public static "offsetCorrection"(arg0: $Vec3i$Type, arg1: $Vec3i$Type): $Vec3
public "uploaded"(arg0: $RenderType$Type, arg1: $BufferCollection$Type): void
public "startBuilding"(arg0: $RebuildTaskExtender$Type): void
public "prepareModelOffset"(arg0: $BlockPos$MutableBlockPos$Type, arg1: $BlockPos$Type): void
get "built"(): boolean
get "lastVisibleFrame"(): integer
get "buildCancellationToken"(): $CancellationToken
set "buildCancellationToken"(value: $CancellationToken$Type)
get "lastSubmittedFrame"(): integer
set "lastSubmittedFrame"(value: integer)
get "originY"(): integer
get "originX"(): integer
get "pipeline"(): $LittleRenderPipelineType<(any)>
get "region"(): $RenderRegion
get "position"(): $SectionPos
get "flags"(): integer
get "disposed"(): boolean
set "info"(value: $BuiltSectionInfo$Type)
get "centerX"(): integer
get "centerY"(): integer
get "culledBlockEntities"(): ($BlockEntity)[]
get "globalBlockEntities"(): ($BlockEntity)[]
get "transparencyState"(): $BufferBuilder$SortState
get "visibilityData"(): long
get "centerZ"(): integer
get "adjacentMask"(): integer
get "originZ"(): integer
set "hasBlock"(value: $RenderType$Type)
set "lastUploaded"(value: $ChunkLayerMap$Type<(any)>)
get "lastUploaded"(): $ChunkLayerMap<(any)>
get "queued"(): integer
set "queued"(value: integer)
get "chunkZ"(): integer
get "chunkX"(): integer
get "renderRegion"(): $RenderRegion
set "sortState"(value: $TranslucentQuadAnalyzer$SortState$Type)
get "sortState"(): $TranslucentQuadAnalyzer$SortState
get "pendingUpdate"(): $ChunkUpdateType
set "pendingUpdate"(value: $ChunkUpdateType$Type)
get "animatedSprites"(): ($TextureAtlasSprite)[]
get "lastBuiltFrame"(): integer
set "lastBuiltFrame"(value: integer)
get "chunkY"(): integer
get "incomingDirections"(): integer
set "incomingDirections"(value: integer)
set "lastVisibleFrame"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderSection$Type = ($RenderSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderSection_ = $RenderSection$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/tracking/$SpriteContentsAnimationAccessor" {
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$FrameInfo"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $SpriteContentsAnimationAccessor {

 "getFrames"(): $List<($SpriteContents$FrameInfo)>

(): $List<($SpriteContents$FrameInfo)>
}

export namespace $SpriteContentsAnimationAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationAccessor$Type = ($SpriteContentsAnimationAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationAccessor_ = $SpriteContentsAnimationAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/tracking/$SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor {

 "getTime"(): integer

(): integer
}

export namespace $SpriteContentsAnimationFrameAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationFrameAccessor$Type = ($SpriteContentsAnimationFrameAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationFrameAccessor_ = $SpriteContentsAnimationFrameAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAnimationAccessor" {
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$FrameInfo"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $SpriteContentsAnimationAccessor {

 "getFrameRowSize"(): integer
 "getFrames"(): $List<($SpriteContents$FrameInfo)>
}

export namespace $SpriteContentsAnimationAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationAccessor$Type = ($SpriteContentsAnimationAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationAccessor_ = $SpriteContentsAnimationAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexType" {
import {$ChunkMeshAttribute, $ChunkMeshAttribute$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkMeshAttribute"
import {$ChunkVertexEncoder, $ChunkVertexEncoder$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexEncoder"
import {$GlVertexFormat, $GlVertexFormat$Type} from "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexFormat"

export interface $ChunkVertexType {

 "getEncoder"(): $ChunkVertexEncoder
 "getPositionOffset"(): float
 "getPositionScale"(): float
 "getTextureScale"(): float
 "getVertexFormat"(): $GlVertexFormat<($ChunkMeshAttribute)>
}

export namespace $ChunkVertexType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkVertexType$Type = ($ChunkVertexType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkVertexType_ = $ChunkVertexType$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/region/$RenderRegion$DeviceResources" {
import {$GlBufferArena, $GlBufferArena$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/$GlBufferArena"
import {$StagingBuffer, $StagingBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/staging/$StagingBuffer"
import {$GlBuffer, $GlBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBuffer"
import {$CommandList, $CommandList$Type} from "packages/me/jellysquid/mods/sodium/client/gl/device/$CommandList"
import {$GlTessellation, $GlTessellation$Type} from "packages/me/jellysquid/mods/sodium/client/gl/tessellation/$GlTessellation"

export class $RenderRegion$DeviceResources {

constructor(arg0: $CommandList$Type, arg1: $StagingBuffer$Type)

public "delete"(arg0: $CommandList$Type): void
public "getVertexBuffer"(): $GlBuffer
public "getTessellation"(): $GlTessellation
public "updateTessellation"(arg0: $CommandList$Type, arg1: $GlTessellation$Type): void
public "getIndexBuffer"(): $GlBuffer
public "getIndexedTessellation"(): $GlTessellation
public "updateIndexedTessellation"(arg0: $CommandList$Type, arg1: $GlTessellation$Type): void
public "getGeometryArena"(): $GlBufferArena
public "getIndexArena"(): $GlBufferArena
public "deleteTessellations"(arg0: $CommandList$Type): void
public "shouldDelete"(): boolean
get "vertexBuffer"(): $GlBuffer
get "tessellation"(): $GlTessellation
get "indexBuffer"(): $GlBuffer
get "indexedTessellation"(): $GlTessellation
get "geometryArena"(): $GlBufferArena
get "indexArena"(): $GlBufferArena
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderRegion$DeviceResources$Type = ($RenderRegion$DeviceResources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderRegion$DeviceResources_ = $RenderRegion$DeviceResources$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/device/$CommandList" {
import {$TessellationBinding, $TessellationBinding$Type} from "packages/me/jellysquid/mods/sodium/client/gl/tessellation/$TessellationBinding"
import {$DrawCommandList, $DrawCommandList$Type} from "packages/me/jellysquid/mods/sodium/client/gl/device/$DrawCommandList"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$GlBufferStorageFlags, $GlBufferStorageFlags$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferStorageFlags"
import {$GlPrimitiveType, $GlPrimitiveType$Type} from "packages/me/jellysquid/mods/sodium/client/gl/tessellation/$GlPrimitiveType"
import {$GlVertexArray, $GlVertexArray$Type} from "packages/me/jellysquid/mods/sodium/client/gl/array/$GlVertexArray"
import {$GlMutableBuffer, $GlMutableBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlMutableBuffer"
import {$GlBufferTarget, $GlBufferTarget$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferTarget"
import {$EnumBitField, $EnumBitField$Type} from "packages/me/jellysquid/mods/sodium/client/gl/util/$EnumBitField"
import {$GlBufferMapFlags, $GlBufferMapFlags$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferMapFlags"
import {$GlImmutableBuffer, $GlImmutableBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlImmutableBuffer"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$GlBuffer, $GlBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBuffer"
import {$GlFence, $GlFence$Type} from "packages/me/jellysquid/mods/sodium/client/gl/sync/$GlFence"
import {$GlBufferMapping, $GlBufferMapping$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferMapping"
import {$GlTessellation, $GlTessellation$Type} from "packages/me/jellysquid/mods/sodium/client/gl/tessellation/$GlTessellation"
import {$GlBufferUsage, $GlBufferUsage$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferUsage"

export interface $CommandList extends $AutoCloseable {

 "flush"(): void
 "close"(): void
 "unmap"(arg0: $GlBufferMapping$Type): void
 "createTessellation"(arg0: $GlPrimitiveType$Type, arg1: ($TessellationBinding$Type)[]): $GlTessellation
 "deleteBuffer"(arg0: $GlBuffer$Type): void
 "flushMappedRange"(arg0: $GlBufferMapping$Type, arg1: integer, arg2: integer): void
 "uploadData"(arg0: $GlMutableBuffer$Type, arg1: $ByteBuffer$Type, arg2: $GlBufferUsage$Type): void
 "deleteVertexArray"(arg0: $GlVertexArray$Type): void
 "bindBuffer"(arg0: $GlBufferTarget$Type, arg1: $GlBuffer$Type): void
 "beginTessellating"(arg0: $GlTessellation$Type): $DrawCommandList
 "copyBufferSubData"(arg0: $GlBuffer$Type, arg1: $GlBuffer$Type, arg2: long, arg3: long, arg4: long): void
 "unbindVertexArray"(): void
 "createFence"(): $GlFence
 "deleteTessellation"(arg0: $GlTessellation$Type): void
 "mapBuffer"(arg0: $GlBuffer$Type, arg1: long, arg2: long, arg3: $EnumBitField$Type<($GlBufferMapFlags$Type)>): $GlBufferMapping
 "bindVertexArray"(arg0: $GlVertexArray$Type): void
 "allocateStorage"(arg0: $GlMutableBuffer$Type, arg1: long, arg2: $GlBufferUsage$Type): void
 "createMutableBuffer"(): $GlMutableBuffer
 "createImmutableBuffer"(arg0: long, arg1: $EnumBitField$Type<($GlBufferStorageFlags$Type)>): $GlImmutableBuffer
}

export namespace $CommandList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandList$Type = ($CommandList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandList_ = $CommandList$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/buffers/$ChunkModelBuilder" {
import {$ModelQuadFacing, $ModelQuadFacing$Type} from "packages/me/jellysquid/mods/sodium/client/model/quad/properties/$ModelQuadFacing"
import {$ChunkMeshBufferBuilder, $ChunkMeshBufferBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/builder/$ChunkMeshBufferBuilder"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$ChunkBufferUploader, $ChunkBufferUploader$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$ChunkBufferUploader"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ChunkModelBuilder extends $ChunkBufferUploader {

 "upload"(arg0: integer, arg1: $ByteBuffer$Type): void
 "upload"(arg0: $ByteBuffer$Type): void
 "hasFacingSupport"(): boolean
 "addSprite"(arg0: $TextureAtlasSprite$Type): void
 "uploadIndex"(): integer
 "uploadIndex"(arg0: integer): integer
 "isSorted"(): boolean
 "getVertexBuffer"(arg0: $ModelQuadFacing$Type): $ChunkMeshBufferBuilder

(arg0: integer, arg1: $ByteBuffer$Type): void
}

export namespace $ChunkModelBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkModelBuilder$Type = ($ChunkModelBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkModelBuilder_ = $ChunkModelBuilder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAccessor" {
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"

export interface $SpriteContentsAccessor {

 "getImages"(): ($NativeImage)[]

(): ($NativeImage)[]
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$Type = ($SpriteContentsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAccessor_ = $SpriteContentsAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/pipeline/$FluidRenderer" {
import {$LightPipelineProvider, $LightPipelineProvider$Type} from "packages/me/jellysquid/mods/sodium/client/model/light/$LightPipelineProvider"
import {$WorldSlice, $WorldSlice$Type} from "packages/me/jellysquid/mods/sodium/client/world/$WorldSlice"
import {$ColorProviderRegistry, $ColorProviderRegistry$Type} from "packages/me/jellysquid/mods/sodium/client/model/color/$ColorProviderRegistry"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChunkBuildBuffers, $ChunkBuildBuffers$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildBuffers"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidRenderer {

constructor(arg0: $ColorProviderRegistry$Type, arg1: $LightPipelineProvider$Type)

public "render"(arg0: $WorldSlice$Type, arg1: $FluidState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: $ChunkBuildBuffers$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidRenderer$Type = ($FluidRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidRenderer_ = $FluidRenderer$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/$GlObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GlObject {


public "invalidateHandle"(): void
public "handle"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlObject$Type = ($GlObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlObject_ = $GlObject$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/device/$DrawCommandList" {
import {$GlIndexType, $GlIndexType$Type} from "packages/me/jellysquid/mods/sodium/client/gl/tessellation/$GlIndexType"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$MultiDrawBatch, $MultiDrawBatch$Type} from "packages/me/jellysquid/mods/sodium/client/gl/device/$MultiDrawBatch"

export interface $DrawCommandList extends $AutoCloseable {

 "flush"(): void
 "close"(): void
 "endTessellating"(): void
 "multiDrawElementsBaseVertex"(arg0: $MultiDrawBatch$Type, arg1: $GlIndexType$Type): void
}

export namespace $DrawCommandList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawCommandList$Type = ($DrawCommandList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawCommandList_ = $DrawCommandList$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBuffer" {
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$VertexBufferExtender, $VertexBufferExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$VertexBufferExtender"
import {$GlObject, $GlObject$Type} from "packages/me/jellysquid/mods/sodium/client/gl/$GlObject"
import {$GlBufferMapping, $GlBufferMapping$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferMapping"
import {$RenderSystem$AutoStorageIndexBuffer, $RenderSystem$AutoStorageIndexBuffer$Type} from "packages/com/mojang/blaze3d/systems/$RenderSystem$AutoStorageIndexBuffer"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$VertexFormat$IndexType, $VertexFormat$IndexType$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$IndexType"

export class $GlBuffer extends $GlObject implements $VertexBufferExtender {


public "setMode"(arg0: $VertexFormat$Mode$Type): void
public "getMode"(): $VertexFormat$Mode
public "setFormat"(arg0: $VertexFormat$Type): void
public "setIndexType"(arg0: $VertexFormat$IndexType$Type): void
public "getIndexCount"(): integer
public "getVertexBufferId"(): integer
public "setIndexCount"(arg0: integer): void
public "getLastUploadedLength"(): integer
public "setLastUploadedLength"(arg0: integer): void
public "getSequentialIndices"(): $RenderSystem$AutoStorageIndexBuffer
public "setSequentialIndices"(arg0: $RenderSystem$AutoStorageIndexBuffer$Type): void
public "setActiveMapping"(arg0: $GlBufferMapping$Type): void
public "getActiveMapping"(): $GlBufferMapping
set "mode"(value: $VertexFormat$Mode$Type)
get "mode"(): $VertexFormat$Mode
set "format"(value: $VertexFormat$Type)
set "indexType"(value: $VertexFormat$IndexType$Type)
get "indexCount"(): integer
get "vertexBufferId"(): integer
set "indexCount"(value: integer)
get "lastUploadedLength"(): integer
set "lastUploadedLength"(value: integer)
get "sequentialIndices"(): $RenderSystem$AutoStorageIndexBuffer
set "sequentialIndices"(value: $RenderSystem$AutoStorageIndexBuffer$Type)
set "activeMapping"(value: $GlBufferMapping$Type)
get "activeMapping"(): $GlBufferMapping
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlBuffer$Type = ($GlBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlBuffer_ = $GlBuffer$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ClientChunkEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientChunkEventListener {

 "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
 "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
 "updateMapCenter"(arg0: integer, arg1: integer): void
 "updateLoadDistance"(arg0: integer): void
}

export namespace $ClientChunkEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkEventListener$Type = ($ClientChunkEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkEventListener_ = $ClientChunkEventListener$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexAttributeBinding" {
import {$GlVertexAttribute, $GlVertexAttribute$Type} from "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexAttribute"

export class $GlVertexAttributeBinding extends $GlVertexAttribute {

constructor(arg0: integer, arg1: $GlVertexAttribute$Type)

public "getIndex"(): integer
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlVertexAttributeBinding$Type = ($GlVertexAttributeBinding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlVertexAttributeBinding_ = $GlVertexAttributeBinding$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/frustum/$Frustum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Frustum {

 "testAab"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean

(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}

export namespace $Frustum {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frustum$Type = ($Frustum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Frustum_ = $Frustum$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/pipeline/$BlockRenderCache" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$FluidRenderer, $FluidRenderer$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/pipeline/$FluidRenderer"
import {$ChunkRenderContext, $ChunkRenderContext$Type} from "packages/me/jellysquid/mods/sodium/client/world/cloned/$ChunkRenderContext"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$WorldSlice, $WorldSlice$Type} from "packages/me/jellysquid/mods/sodium/client/world/$WorldSlice"
import {$BlockModelShaper, $BlockModelShaper$Type} from "packages/net/minecraft/client/renderer/block/$BlockModelShaper"
import {$BlockRenderer, $BlockRenderer$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/pipeline/$BlockRenderer"

export class $BlockRenderCache {

constructor(arg0: $Minecraft$Type, arg1: $ClientLevel$Type)

public "init"(arg0: $ChunkRenderContext$Type): void
public "cleanup"(): void
public "getBlockRenderer"(): $BlockRenderer
public "getBlockModels"(): $BlockModelShaper
public "getWorldSlice"(): $WorldSlice
public "getFluidRenderer"(): $FluidRenderer
get "blockRenderer"(): $BlockRenderer
get "blockModels"(): $BlockModelShaper
get "worldSlice"(): $WorldSlice
get "fluidRenderer"(): $FluidRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRenderCache$Type = ($BlockRenderCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRenderCache_ = $BlockRenderCache$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/cloned/$ChunkRenderContext" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$ClonedChunkSection, $ClonedChunkSection$Type} from "packages/me/jellysquid/mods/sodium/client/world/cloned/$ClonedChunkSection"
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MeshAppender, $MeshAppender$Type} from "packages/org/embeddedt/embeddium/api/$MeshAppender"

export class $ChunkRenderContext {

constructor(arg0: $SectionPos$Type, arg1: ($ClonedChunkSection$Type)[], arg2: $BoundingBox$Type)

public "getOrigin"(): $SectionPos
public "getSections"(): ($ClonedChunkSection)[]
public "getVolume"(): $BoundingBox
public "withMeshAppenders"(arg0: $List$Type<($MeshAppender$Type)>): $ChunkRenderContext
public "getMeshAppenders"(): $List<($MeshAppender)>
get "origin"(): $SectionPos
get "sections"(): ($ClonedChunkSection)[]
get "volume"(): $BoundingBox
get "meshAppenders"(): $List<($MeshAppender)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderContext$Type = ($ChunkRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRenderContext_ = $ChunkRenderContext$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/executor/$ChunkJobResult" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"

export class $ChunkJobResult<OUTPUT> {


public "unwrap"(): OUTPUT
public static "exceptionally"<OUTPUT>(arg0: $Throwable$Type): $ChunkJobResult<(OUTPUT)>
public static "successfully"<OUTPUT>(arg0: OUTPUT): $ChunkJobResult<(OUTPUT)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkJobResult$Type<OUTPUT> = ($ChunkJobResult<(OUTPUT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkJobResult_<OUTPUT> = $ChunkJobResult$Type<(OUTPUT)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/quad/properties/$ModelQuadFacing" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $ModelQuadFacing extends $Enum<($ModelQuadFacing)> {
static readonly "POS_X": $ModelQuadFacing
static readonly "POS_Y": $ModelQuadFacing
static readonly "POS_Z": $ModelQuadFacing
static readonly "NEG_X": $ModelQuadFacing
static readonly "NEG_Y": $ModelQuadFacing
static readonly "NEG_Z": $ModelQuadFacing
static readonly "UNASSIGNED": $ModelQuadFacing
static readonly "VALUES": ($ModelQuadFacing)[]
static readonly "COUNT": integer
static readonly "NONE": integer
static readonly "ALL": integer


public static "values"(): ($ModelQuadFacing)[]
public static "valueOf"(arg0: string): $ModelQuadFacing
public "getOpposite"(): $ModelQuadFacing
public static "fromDirection"(arg0: $Direction$Type): $ModelQuadFacing
get "opposite"(): $ModelQuadFacing
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadFacing$Type = (("pos_y") | ("pos_z") | ("pos_x") | ("neg_x") | ("neg_z") | ("neg_y") | ("unassigned")) | ($ModelQuadFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelQuadFacing_ = $ModelQuadFacing$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/executor/$ChunkJobTyped" {
import {$ChunkBuildContext, $ChunkBuildContext$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildContext"
import {$ChunkJob, $ChunkJob$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/executor/$ChunkJob"
import {$ChunkBuilderTask, $ChunkBuilderTask$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/tasks/$ChunkBuilderTask"

export class $ChunkJobTyped<TASK extends $ChunkBuilderTask<(OUTPUT)>, OUTPUT> implements $ChunkJob {


public "execute"(arg0: $ChunkBuildContext$Type): void
public "isStarted"(): boolean
public "isCancelled"(): boolean
public "setCancelled"(): void
get "started"(): boolean
get "cancelled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkJobTyped$Type<TASK, OUTPUT> = ($ChunkJobTyped<(TASK), (OUTPUT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkJobTyped_<TASK, OUTPUT> = $ChunkJobTyped$Type<(TASK), (OUTPUT)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexEncoder" {
import {$Material, $Material$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/material/$Material"
import {$ChunkVertexEncoder$Vertex, $ChunkVertexEncoder$Vertex$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexEncoder$Vertex"

export interface $ChunkVertexEncoder {

 "write"(arg0: long, arg1: $Material$Type, arg2: $ChunkVertexEncoder$Vertex$Type, arg3: integer): long

(arg0: long, arg1: $Material$Type, arg2: $ChunkVertexEncoder$Vertex$Type, arg3: integer): long
}

export namespace $ChunkVertexEncoder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkVertexEncoder$Type = ($ChunkVertexEncoder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkVertexEncoder_ = $ChunkVertexEncoder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/$SpriteContentsInvoker" {
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"

export interface $SpriteContentsInvoker {

 "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$Type)[]): void

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$Type)[]): void
}

export namespace $SpriteContentsInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsInvoker$Type = ($SpriteContentsInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsInvoker_ = $SpriteContentsInvoker$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker$ChunkEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkTracker$ChunkEventHandler {

 "apply"(arg0: integer, arg1: integer): void

(arg0: integer, arg1: integer): void
}

export namespace $ChunkTracker$ChunkEventHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$ChunkEventHandler$Type = ($ChunkTracker$ChunkEventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTracker$ChunkEventHandler_ = $ChunkTracker$ChunkEventHandler$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/quad/$ModelQuadView" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ModelQuadView {

 "hasColor"(): boolean
 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getZ"(arg0: integer): float
 "getColor"(arg0: integer): integer
 "getSprite"(): $TextureAtlasSprite
 "getColorIndex"(): integer
 "getTexV"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getLightFace"(): $Direction
 "getForgeNormal"(arg0: integer): integer
 "getTexU"(arg0: integer): float
 "hasAmbientOcclusion"(): boolean
 "getX"(arg0: integer): float
}

export namespace $ModelQuadView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadView$Type = ($ModelQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelQuadView_ = $ModelQuadView$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$SodiumBufferBuilder" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$VertexFormatDescription, $VertexFormatDescription$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$MemoryStack, $MemoryStack$Type} from "packages/org/lwjgl/system/$MemoryStack"
import {$ExtendedBufferBuilder, $ExtendedBufferBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$ExtendedBufferBuilder"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$VertexBufferWriter, $VertexBufferWriter$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/buffer/$VertexBufferWriter"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $SodiumBufferBuilder implements $VertexConsumer, $VertexBufferWriter {

constructor(arg0: $ExtendedBufferBuilder$Type)

public "reset"(): void
public "push"(arg0: $MemoryStack$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$Type): void
public "canUseIntrinsics"(): boolean
public "vertex"(arg0: double, arg1: double, arg2: double): $VertexConsumer
public "uv"(arg0: float, arg1: float): $VertexConsumer
public "endVertex"(): void
public "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
public "overlayCoords"(arg0: integer, arg1: integer): $VertexConsumer
public "uv2"(arg0: integer, arg1: integer): $VertexConsumer
public "normal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "uv2"(arg0: integer): $VertexConsumer
public "overlayCoords"(arg0: integer): $VertexConsumer
public "unsetDefaultColor"(): void
public "defaultColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "color"(arg0: integer): $VertexConsumer
public "getOriginalBufferBuilder"(): $BufferBuilder
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public static "of"(arg0: $VertexConsumer$Type): $VertexBufferWriter
public static "copyInto"(arg0: $VertexBufferWriter$Type, arg1: $MemoryStack$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$Type): void
public static "tryOf"(arg0: $VertexConsumer$Type): $VertexBufferWriter
/**
 * 
 * @deprecated
 */
public "isFullWriter"(): boolean
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
public "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
public "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
get "originalBufferBuilder"(): $BufferBuilder
get "fullWriter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumBufferBuilder$Type = ($SodiumBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumBufferBuilder_ = $SodiumBufferBuilder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/$RenderSectionManager" {
import {$ChunkBuilderSortTask, $ChunkBuilderSortTask$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/tasks/$ChunkBuilderSortTask"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ChunkVertexType, $ChunkVertexType$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexType"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$RenderSection, $RenderSection$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/$RenderSection"
import {$Viewport, $Viewport$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport"
import {$ChunkBuilder, $ChunkBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/executor/$ChunkBuilder"
import {$TerrainRenderPass, $TerrainRenderPass$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/$TerrainRenderPass"
import {$SortedRenderLists, $SortedRenderLists$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/lists/$SortedRenderLists"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$RenderSectionManagerAccessor, $RenderSectionManagerAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$RenderSectionManagerAccessor"
import {$CommandList, $CommandList$Type} from "packages/me/jellysquid/mods/sodium/client/gl/device/$CommandList"
import {$ChunkBuilderMeshingTask, $ChunkBuilderMeshingTask$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/tasks/$ChunkBuilderMeshingTask"
import {$ChunkRenderMatrices, $ChunkRenderMatrices$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/$ChunkRenderMatrices"

export class $RenderSectionManager implements $RenderSectionManagerAccessor {

constructor(arg0: $ClientLevel$Type, arg1: integer, arg2: $CommandList$Type)

public "update"(arg0: $Camera$Type, arg1: $Viewport$Type, arg2: integer, arg3: boolean): void
public "destroy"(): void
public "getBuilder"(): $ChunkBuilder
public "getVisibleChunkCount"(): integer
public "renderLayer"(arg0: $ChunkRenderMatrices$Type, arg1: $TerrainRenderPass$Type, arg2: double, arg3: double, arg4: double): void
public "needsUpdate"(): boolean
public "getSectionsWithGlobalEntities"(): $Collection<($RenderSection)>
public "updateChunks"(arg0: boolean): void
public "markGraphDirty"(): void
public "getRenderLists"(): $SortedRenderLists
public "tickVisibleRenders"(): void
public "runAsyncTasks"(): void
public "onChunkAdded"(arg0: integer, arg1: integer): void
public "onChunkRemoved"(arg0: integer, arg1: integer): void
public "uploadChunks"(): void
public "isSectionBuilt"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getTotalSections"(): integer
public "scheduleRebuild"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "getDebugStrings"(): $Collection<(string)>
public "isSectionVisible"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getVertexType"(): $ChunkVertexType
public "onSectionAdded"(arg0: integer, arg1: integer, arg2: integer): void
public "onSectionRemoved"(arg0: integer, arg1: integer, arg2: integer): void
public "createSortTask"(arg0: $RenderSection$Type, arg1: integer): $ChunkBuilderSortTask
public "createRebuildTask"(arg0: $RenderSection$Type, arg1: integer): $ChunkBuilderMeshingTask
get "builder"(): $ChunkBuilder
get "visibleChunkCount"(): integer
get "sectionsWithGlobalEntities"(): $Collection<($RenderSection)>
get "renderLists"(): $SortedRenderLists
get "totalSections"(): integer
get "debugStrings"(): $Collection<(string)>
get "vertexType"(): $ChunkVertexType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderSectionManager$Type = ($RenderSectionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderSectionManager_ = $RenderSectionManager$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/tessellation/$TessellationBinding" {
import {$GlBufferTarget, $GlBufferTarget$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBufferTarget"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GlBuffer, $GlBuffer$Type} from "packages/me/jellysquid/mods/sodium/client/gl/buffer/$GlBuffer"
import {$GlVertexAttributeBinding, $GlVertexAttributeBinding$Type} from "packages/me/jellysquid/mods/sodium/client/gl/attribute/$GlVertexAttributeBinding"

export class $TessellationBinding extends $Record {

constructor(target: $GlBufferTarget$Type, buffer: $GlBuffer$Type, attributeBindings: ($GlVertexAttributeBinding$Type)[])

public "equals"(arg0: any): boolean
public "target"(): $GlBufferTarget
public "toString"(): string
public "hashCode"(): integer
public "buffer"(): $GlBuffer
public static "forElementBuffer"(arg0: $GlBuffer$Type): $TessellationBinding
public static "forVertexBuffer"(arg0: $GlBuffer$Type, arg1: ($GlVertexAttributeBinding$Type)[]): $TessellationBinding
public "attributeBindings"(): ($GlVertexAttributeBinding)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TessellationBinding$Type = ($TessellationBinding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TessellationBinding_ = $TessellationBinding$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/util/$EnumBit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EnumBit {

 "getBits"(): integer

(): integer
}

export namespace $EnumBit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumBit$Type = ($EnumBit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumBit_ = $EnumBit$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/gl/sync/$GlFence" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GlFence {

constructor(arg0: long)

public "sync"(arg0: long): void
public "sync"(): void
public "delete"(): void
public "isCompleted"(): boolean
get "completed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlFence$Type = ($GlFence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlFence_ = $GlFence$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/$ViewportProvider" {
import {$Viewport, $Viewport$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport"

export interface $ViewportProvider {

 "sodium$createViewport"(): $Viewport

(): $Viewport
}

export namespace $ViewportProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportProvider$Type = ($ViewportProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewportProvider_ = $ViewportProvider$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat" {
import {$ExtendedVertexFormat$Element, $ExtendedVertexFormat$Element$Type} from "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat$Element"

export interface $ExtendedVertexFormat {

 "embeddium$getExtendedElements"(): ($ExtendedVertexFormat$Element)[]

(): ($ExtendedVertexFormat$Element)[]
}

export namespace $ExtendedVertexFormat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedVertexFormat$Type = ($ExtendedVertexFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedVertexFormat_ = $ExtendedVertexFormat$Type;
}}
