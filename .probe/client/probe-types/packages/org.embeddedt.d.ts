declare module "packages/org/embeddedt/embeddium/api/model/$EmbeddiumBakedModelExtension" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $EmbeddiumBakedModelExtension {

 "useAmbientOcclusionWithLightEmission"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
}

export namespace $EmbeddiumBakedModelExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmbeddiumBakedModelExtension$Type = ($EmbeddiumBakedModelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmbeddiumBakedModelExtension_ = $EmbeddiumBakedModelExtension$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IExtendedModelBakery" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ModelResourceLocation, $ModelResourceLocation$Type} from "packages/net/minecraft/client/resources/model/$ModelResourceLocation"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IExtendedModelBakery {

 "getBlockStatesForMRL"(arg0: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>, arg1: $ModelResourceLocation$Type): $ImmutableList<($BlockState)>
 "mfix$getUnbakedMissingModel"(): $UnbakedModel
 "bakeDefault"(arg0: $ResourceLocation$Type, arg1: $ModelState$Type): $BakedModel
}

export namespace $IExtendedModelBakery {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedModelBakery$Type = ($IExtendedModelBakery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedModelBakery_ = $IExtendedModelBakery$Type;
}}
declare module "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$SortState" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$TranslucentQuadAnalyzer$Level, $TranslucentQuadAnalyzer$Level$Type} from "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$Level"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"

export class $TranslucentQuadAnalyzer$SortState extends $Record {
static readonly "NONE": $TranslucentQuadAnalyzer$SortState

constructor(level: $TranslucentQuadAnalyzer$Level$Type, centers: (float)[], normalSigns: $BitSet$Type, sharedNormal: $Vector3f$Type)

public "requiresDynamicSorting"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "level"(): $TranslucentQuadAnalyzer$Level
public "centers"(): (float)[]
public "compactForStorage"(): $TranslucentQuadAnalyzer$SortState
public "sharedNormal"(): $Vector3f
public "normalSigns"(): $BitSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslucentQuadAnalyzer$SortState$Type = ($TranslucentQuadAnalyzer$SortState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslucentQuadAnalyzer$SortState_ = $TranslucentQuadAnalyzer$SortState$Type;
}}
declare module "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$Level" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TranslucentQuadAnalyzer$Level extends $Enum<($TranslucentQuadAnalyzer$Level)> {
static readonly "NONE": $TranslucentQuadAnalyzer$Level
static readonly "STATIC": $TranslucentQuadAnalyzer$Level
static readonly "DYNAMIC": $TranslucentQuadAnalyzer$Level
static readonly "VALUES": ($TranslucentQuadAnalyzer$Level)[]


public static "values"(): ($TranslucentQuadAnalyzer$Level)[]
public static "valueOf"(arg0: string): $TranslucentQuadAnalyzer$Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslucentQuadAnalyzer$Level$Type = (("static") | ("dynamic") | ("none")) | ($TranslucentQuadAnalyzer$Level);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslucentQuadAnalyzer$Level_ = $TranslucentQuadAnalyzer$Level$Type;
}}
declare module "packages/org/embeddedt/modernfix/forge/registry/$DelegateHolder" {
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $DelegateHolder<T> {

 "mfix$setDelegate"(arg0: $ResourceKey$Type<($Registry$Type<(T)>)>, arg1: $Holder$Reference$Type<(T)>): void
 "mfix$getDelegate"(arg0: $ResourceKey$Type<($Registry$Type<(T)>)>): $Holder$Reference<(T)>
}

export namespace $DelegateHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegateHolder$Type<T> = ($DelegateHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegateHolder_<T> = $DelegateHolder$Type<(T)>;
}}
declare module "packages/org/embeddedt/embeddium/api/$MeshAppender" {
import {$MeshAppender$Context, $MeshAppender$Context$Type} from "packages/org/embeddedt/embeddium/api/$MeshAppender$Context"

export interface $MeshAppender {

 "render"(arg0: $MeshAppender$Context$Type): void

(arg0: $MeshAppender$Context$Type): void
}

export namespace $MeshAppender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshAppender$Type = ($MeshAppender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshAppender_ = $MeshAppender$Type;
}}
declare module "packages/org/embeddedt/embeddium/render/matrix_stack/$CachingPoseStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CachingPoseStack {

 "embeddium$setCachingEnabled"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $CachingPoseStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachingPoseStack$Type = ($CachingPoseStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachingPoseStack_ = $CachingPoseStack$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockState {

 "clearCache"(): void
 "isCacheInvalid"(): boolean
}

export namespace $IBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockState$Type = ($IBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockState_ = $IBlockState$Type;
}}
declare module "packages/org/embeddedt/modernfix/chunk/$SafeBlockGetter" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $SafeBlockGetter implements $BlockGetter {

constructor(wrapped: $ServerLevel$Type)

public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "shouldUse"(): boolean
public "getBlockState"(pos: $BlockPos$Type): $BlockState
public "getHeight"(): integer
public "getMaxLightLevel"(): integer
public "getFluidState"(pos: $BlockPos$Type): $FluidState
public "getMinBuildHeight"(): integer
public "getMaxBuildHeight"(): integer
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
public "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
public "getLightEmission"(arg0: $BlockPos$Type): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public "getBlockFloorHeight"(arg0: $BlockPos$Type): double
public "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
public "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
public "clip"(arg0: $ClipContext$Type): $BlockHitResult
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public "getMaxSection"(): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionsCount"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getMinSection"(): integer
public "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getModelDataManager"(): $ModelDataManager
get "height"(): integer
get "maxLightLevel"(): integer
get "minBuildHeight"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "sectionsCount"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeBlockGetter$Type = ($SafeBlockGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SafeBlockGetter_ = $SafeBlockGetter$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IModelHoldingBlockState" {
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"

export interface $IModelHoldingBlockState {

 "mfix$setModel"(arg0: $BakedModel$Type): void
 "mfix$getModel"(): $BakedModel
}

export namespace $IModelHoldingBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModelHoldingBlockState$Type = ($IModelHoldingBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModelHoldingBlockState_ = $IModelHoldingBlockState$Type;
}}
declare module "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer" {
import {$TranslucentQuadAnalyzer$SortState, $TranslucentQuadAnalyzer$SortState$Type} from "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$SortState"
import {$TranslucentQuadAnalyzerAccessor, $TranslucentQuadAnalyzerAccessor$Type} from "packages/team/creative/littletiles/mixin/rubidium/$TranslucentQuadAnalyzerAccessor"
import {$ChunkVertexEncoder$Vertex, $ChunkVertexEncoder$Vertex$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexEncoder$Vertex"

export class $TranslucentQuadAnalyzer implements $TranslucentQuadAnalyzerAccessor {

constructor()

public "clear"(): void
public "capture"(arg0: $ChunkVertexEncoder$Vertex$Type): void
public "getSortState"(): $TranslucentQuadAnalyzer$SortState
get "sortState"(): $TranslucentQuadAnalyzer$SortState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslucentQuadAnalyzer$Type = ($TranslucentQuadAnalyzer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslucentQuadAnalyzer_ = $TranslucentQuadAnalyzer$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IStructureCheck" {
import {$ChunkGeneratorStructureState, $ChunkGeneratorStructureState$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGeneratorStructureState"

export interface $IStructureCheck {

 "mfix$setStructureState"(arg0: $ChunkGeneratorStructureState$Type): void

(arg0: $ChunkGeneratorStructureState$Type): void
}

export namespace $IStructureCheck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructureCheck$Type = ($IStructureCheck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStructureCheck_ = $IStructureCheck$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$ITimeTrackingServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITimeTrackingServer {

 "mfix$getLastTickStartTime"(): long

(): long
}

export namespace $ITimeTrackingServer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITimeTrackingServer$Type = ($ITimeTrackingServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITimeTrackingServer_ = $ITimeTrackingServer$Type;
}}
declare module "packages/org/embeddedt/modernfix/forge/mixin/bugfix/entity_pose_stack/$PoseStackAccessor" {
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $PoseStackAccessor {

 "getPoseStack"(): $Deque<($PoseStack$Pose)>

(): $Deque<($PoseStack$Pose)>
}

export namespace $PoseStackAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackAccessor$Type = ($PoseStackAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackAccessor_ = $PoseStackAccessor$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$ISafeBlockGetter" {
import {$SafeBlockGetter, $SafeBlockGetter$Type} from "packages/org/embeddedt/modernfix/chunk/$SafeBlockGetter"

export interface $ISafeBlockGetter {

 "mfix$getSafeBlockGetter"(): $SafeBlockGetter

(): $SafeBlockGetter
}

export namespace $ISafeBlockGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISafeBlockGetter$Type = ($ISafeBlockGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISafeBlockGetter_ = $ISafeBlockGetter$Type;
}}
declare module "packages/org/embeddedt/embeddium/model/$EpsilonizableBlockElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EpsilonizableBlockElement {

 "embeddium$epsilonize"(): void

(): void
}

export namespace $EpsilonizableBlockElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpsilonizableBlockElement$Type = ($EpsilonizableBlockElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpsilonizableBlockElement_ = $EpsilonizableBlockElement$Type;
}}
declare module "packages/org/embeddedt/embeddium/api/$MeshAppender$Context" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$ChunkBuildBuffers, $ChunkBuildBuffers$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildBuffers"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $MeshAppender$Context extends $Record {

constructor(vertexConsumerProvider: $Function$Type<($RenderType$Type), ($VertexConsumer$Type)>, blockRenderView: $BlockAndTintGetter$Type, sectionOrigin: $SectionPos$Type, sodiumBuildBuffers: $ChunkBuildBuffers$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "vertexConsumerProvider"(): $Function<($RenderType), ($VertexConsumer)>
public "blockRenderView"(): $BlockAndTintGetter
public "sectionOrigin"(): $SectionPos
public "sodiumBuildBuffers"(): $ChunkBuildBuffers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshAppender$Context$Type = ($MeshAppender$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshAppender$Context_ = $MeshAppender$Context$Type;
}}
