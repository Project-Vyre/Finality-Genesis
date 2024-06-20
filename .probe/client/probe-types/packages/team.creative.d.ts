declare module "packages/team/creative/littletiles/mixin/client/render/$ViewAreaAccessor" {
import {$ChunkRenderDispatcher$RenderChunk, $ChunkRenderDispatcher$RenderChunk$Type} from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ViewAreaAccessor {

 "getChunkAt"(arg0: $BlockPos$Type): $ChunkRenderDispatcher$RenderChunk

(arg0: $BlockPos$Type): $ChunkRenderDispatcher$RenderChunk
}

export namespace $ViewAreaAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewAreaAccessor$Type = ($ViewAreaAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewAreaAccessor_ = $ViewAreaAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationEntityPhysic" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleEntityPhysic, $LittleEntityPhysic$Type} from "packages/team/creative/littletiles/common/entity/$LittleEntityPhysic"
import {$LittleAnimationEntity, $LittleAnimationEntity$Type} from "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationEntity"
import {$LittleSubLevel, $LittleSubLevel$Type} from "packages/team/creative/littletiles/common/level/little/$LittleSubLevel"
import {$LittleEntity, $LittleEntity$Type} from "packages/team/creative/littletiles/common/entity/$LittleEntity"

export class $LittleAnimationEntityPhysic extends $LittleEntityPhysic<($LittleAnimationEntity)> {
readonly "parent": T

constructor(arg0: $LittleAnimationEntity$Type)

public "tick"(): void
public "loadExtra"(arg0: $CompoundTag$Type): void
public "setSubLevel"(arg0: $LittleSubLevel$Type): void
set "subLevel"(value: $LittleSubLevel$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleAnimationEntityPhysic$Type = ($LittleAnimationEntityPhysic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleAnimationEntityPhysic_ = $LittleAnimationEntityPhysic$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/shape/$ShapeSelection" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ShapeSelection$ShapeSelectPos, $ShapeSelection$ShapeSelectPos$Type} from "packages/team/creative/littletiles/common/placement/shape/$ShapeSelection$ShapeSelectPos"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ILittleTool, $ILittleTool$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittleTool"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$LittleBoxes, $LittleBoxes$Type} from "packages/team/creative/littletiles/common/math/box/collection/$LittleBoxes"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $ShapeSelection implements $Iterable<($ShapeSelection$ShapeSelectPos)>, $IGridBased, $IMarkMode {
 "stack": $ItemStack
 "tool": $ILittleTool
readonly "inside": boolean
 "allowLowResolution": boolean

constructor(arg0: $ItemStack$Type, arg1: boolean)

public "getSmallest"(): integer
public "iterator"(): $Iterator<($ShapeSelection$ShapeSelectPos)>
public "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type): void
public "getFirst"(): $ShapeSelection$ShapeSelectPos
public "getLast"(): $ShapeSelection$ShapeSelectPos
public "move"(arg0: $LittleGrid$Type, arg1: $Facing$Type): void
public "done"(): void
public "getPosition"(): $PlacementPosition
public "render"(arg0: $LittleGrid$Type, arg1: $PoseStack$Type): void
public "getBoxes"(arg0: boolean): $LittleBoxes
public "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type): void
public "convertTo"(arg0: $LittleGrid$Type): void
public "click"(arg0: $Player$Type): void
public "getPos"(): $BlockPos
public "getNBT"(): $CompoundTag
public "toggleMark"(): void
public "setLast"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
public "addAndCheckIfPlace"(arg0: $Player$Type, arg1: $PlacementPosition$Type, arg2: $BlockHitResult$Type): boolean
public "allowLowResolution"(): boolean
public "getGrid"(): $LittleGrid
public "getConfigurationGui"(): $GuiConfigure
public "countPositions"(): integer
public "deleteCache"(): void
public "getOverallBox"(): $LittleBox
public "spliterator"(): $Spliterator<($ShapeSelection$ShapeSelectPos)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
[Symbol.iterator](): IterableIterator<$ShapeSelection$ShapeSelectPos>;
get "smallest"(): integer
get "first"(): $ShapeSelection$ShapeSelectPos
get "last"(): $ShapeSelection$ShapeSelectPos
get "position"(): $PlacementPosition
get "pos"(): $BlockPos
get "nBT"(): $CompoundTag
get "grid"(): $LittleGrid
get "configurationGui"(): $GuiConfigure
get "overallBox"(): $LittleBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeSelection$Type = ($ShapeSelection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeSelection_ = $ShapeSelection$Type;
}}
declare module "packages/team/creative/littletiles/client/render/cache/$LayeredBufferCache" {
import {$BufferCache, $BufferCache$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCache"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $LayeredBufferCache {

 "get"(arg0: $RenderType$Type): $BufferCache
 "length"(arg0: $RenderType$Type): integer
 "length"(arg0: $RenderType$Type, arg1: integer): integer

(arg0: $RenderType$Type): $BufferCache
}

export namespace $LayeredBufferCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredBufferCache$Type = ($LayeredBufferCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayeredBufferCache_ = $LayeredBufferCache$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/registry/ingredient/$StructureIngredientRule$StructureIngredientScaler" {
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"

export interface $StructureIngredientRule$StructureIngredientScaler {

 "calculate"(arg0: $LittleGroup$Type): double

(arg0: $LittleGroup$Type): double
}

export namespace $StructureIngredientRule$StructureIngredientScaler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureIngredientRule$StructureIngredientScaler$Type = ($StructureIngredientRule$StructureIngredientScaler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureIngredientRule$StructureIngredientScaler_ = $StructureIngredientRule$StructureIngredientScaler$Type;
}}
declare module "packages/team/creative/creativecore/common/util/type/$Bunch" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $Bunch<T> extends $Iterable<(T)> {

 "size"(): integer
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $Bunch {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bunch$Type<T> = ($Bunch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bunch_<T> = $Bunch$Type<(T)>;
}}
declare module "packages/team/creative/creativecore/common/gui/event/$GuiTooltipEvent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiControlEvent, $GuiControlEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiControlEvent"

export class $GuiTooltipEvent extends $GuiControlEvent<(any)> {
readonly "tooltip": $List<($Component)>
readonly "control": T

constructor(arg0: $GuiControl$Type, arg1: $List$Type<($Component$Type)>)

public "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiTooltipEvent$Type = ($GuiTooltipEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiTooltipEvent_ = $GuiTooltipEvent$Type;
}}
declare module "packages/team/creative/creativecore/common/util/text/$ITextCollection" {
import {$CompiledText, $CompiledText$Type} from "packages/team/creative/creativecore/client/render/text/$CompiledText"

export interface $ITextCollection {

 "build"(): ($CompiledText)[]

(): ($CompiledText)[]
}

export namespace $ITextCollection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextCollection$Type = ($ITextCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITextCollection_ = $ITextCollection$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/style/$ControlFormatting$ControlStyleBorder" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ControlFormatting$ControlStyleBorder extends $Enum<($ControlFormatting$ControlStyleBorder)> {
static readonly "BIG": $ControlFormatting$ControlStyleBorder
static readonly "SMALL": $ControlFormatting$ControlStyleBorder
static readonly "NONE": $ControlFormatting$ControlStyleBorder


public static "values"(): ($ControlFormatting$ControlStyleBorder)[]
public static "valueOf"(arg0: string): $ControlFormatting$ControlStyleBorder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlFormatting$ControlStyleBorder$Type = (("small") | ("big") | ("none")) | ($ControlFormatting$ControlStyleBorder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlFormatting$ControlStyleBorder_ = $ControlFormatting$ControlStyleBorder$Type;
}}
declare module "packages/team/creative/solonion/api/$OnionFoodContainer" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $OnionFoodContainer {

 "getActualFood"(arg0: $Player$Type, arg1: $ItemStack$Type): $ItemStack

(arg0: $Player$Type, arg1: $ItemStack$Type): $ItemStack
}

export namespace $OnionFoodContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OnionFoodContainer$Type = ($OnionFoodContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OnionFoodContainer_ = $OnionFoodContainer$Type;
}}
declare module "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipeline" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$RenderingBlockContext, $RenderingBlockContext$Type} from "packages/team/creative/littletiles/client/render/cache/build/$RenderingBlockContext"
import {$ChunkLayerMap, $ChunkLayerMap$Type} from "packages/team/creative/creativecore/common/util/type/map/$ChunkLayerMap"
import {$SingletonList, $SingletonList$Type} from "packages/team/creative/creativecore/common/util/type/list/$SingletonList"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$BufferCache, $BufferCache$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCache"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $LittleRenderPipeline {
static readonly "MC": $Minecraft

constructor()

public "release"(): void
public "reload"(): void
public "buildCache"(arg0: $PoseStack$Type, arg1: $ChunkLayerMap$Type<($BufferCache$Type)>, arg2: $RenderingBlockContext$Type, arg3: $VertexFormat$Type, arg4: $SingletonList$Type<($BakedQuad$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleRenderPipeline$Type = ($LittleRenderPipeline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleRenderPipeline_ = $LittleRenderPipeline$Type;
}}
declare module "packages/team/creative/littletiles/common/block/entity/$BETiles$BlockEntityInteractor" {
import {$StructureParentCollection, $StructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$StructureParentCollection"
import {$IStructureParentCollection, $IStructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$ParentCollection, $ParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$ParentCollection"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $BETiles$BlockEntityInteractor {

constructor(arg0: $BETiles$Type)

public "removeStructure"(arg0: integer): boolean
public "groups"(): $Iterable<($ParentCollection)>
public "get"(arg0: $IStructureParentCollection$Type): $StructureParentCollection
public "get"(arg0: $IParentCollection$Type): $ParentCollection
public "getStructure"(arg0: integer): $StructureParentCollection
public "structures"(): $Iterable<($StructureParentCollection)>
public "noneStructureTiles"(): $ParentCollection
public "addStructure"(arg0: integer, arg1: integer): $StructureParentCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BETiles$BlockEntityInteractor$Type = ($BETiles$BlockEntityInteractor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BETiles$BlockEntityInteractor_ = $BETiles$BlockEntityInteractor$Type;
}}
declare module "packages/team/creative/creativecore/common/util/text/$TextBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $TextBuilder {

constructor(arg0: string)
constructor()

public "build"(): $List<($Component)>
public "add"(arg0: $Component$Type): $TextBuilder
public "add"(arg0: $List$Type<($Component$Type)>): $TextBuilder
public "stack"(arg0: $ItemStack$Type): $TextBuilder
public "newLine"(): $TextBuilder
public "color"(arg0: integer): $TextBuilder
public "number"(arg0: double, arg1: boolean): $TextBuilder
public "number"(arg0: float): $TextBuilder
public "number"(arg0: double): $TextBuilder
public "number"(arg0: float, arg1: boolean): $TextBuilder
public "text"(arg0: string): $TextBuilder
public "translateIfCan"(arg0: string): $TextBuilder
public "translate"(arg0: string, ...arg1: (any)[]): $TextBuilder
public "translate"(arg0: string): $TextBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextBuilder$Type = ($TextBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextBuilder_ = $TextBuilder$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder" {
import {$GuiSyncControl, $GuiSyncControl$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncControl"
import {$IGuiIntegratedParent, $IGuiIntegratedParent$Type} from "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent"
import {$GuiSync, $GuiSync$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSync"
import {$GuiSyncHolder$GuiSyncHolderGlobal, $GuiSyncHolder$GuiSyncHolderGlobal$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder$GuiSyncHolderGlobal"

export class $GuiSyncHolder {
static readonly "GLOBAL": $GuiSyncHolder$GuiSyncHolderGlobal

constructor()

public "path"(): string
public static "followPath"(arg0: string, arg1: $IGuiIntegratedParent$Type): $GuiSync<(any)>
public static "followPathControl"(arg0: string, arg1: $IGuiIntegratedParent$Type): $GuiSyncControl<(any), (any)>
public "getControlSync"(arg0: string): $GuiSyncControl<(any), (any)>
public "getSync"(arg0: string): $GuiSync<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSyncHolder$Type = ($GuiSyncHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSyncHolder_ = $GuiSyncHolder$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/component/$SignalComponentType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SignalComponentType extends $Enum<($SignalComponentType)> {
static readonly "TRANSMITTER": $SignalComponentType
static readonly "INPUT": $SignalComponentType
static readonly "OUTPUT": $SignalComponentType
static readonly "IOSPECIAL": $SignalComponentType
static readonly "INVALID": $SignalComponentType


public static "values"(): ($SignalComponentType)[]
public static "valueOf"(arg0: string): $SignalComponentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalComponentType$Type = (("output") | ("input") | ("invalid") | ("transmitter") | ("iospecial")) | ($SignalComponentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalComponentType_ = $SignalComponentType$Type;
}}
declare module "packages/team/creative/littletiles/common/block/mc/$BlockArrow" {
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $BlockArrow extends $Block {
static readonly "FACING": $EnumProperty<($Direction)>
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockArrow$Type = ($BlockArrow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockArrow_ = $BlockArrow$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/sync/$GuiSyncLocal" {
import {$GuiSyncControl, $GuiSyncControl$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncControl"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$GuiSyncHolder, $GuiSyncHolder$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder"

export class $GuiSyncLocal<T extends $Tag> extends $GuiSyncControl<($GuiLayer), (T)> {
readonly "holder": $GuiSyncHolder
readonly "name": string


public "receive"(arg0: $GuiLayer$Type, arg1: T): void
public "send"(arg0: T): void
public "sendAndExecute"(arg0: $GuiLayer$Type, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSyncLocal$Type<T> = ($GuiSyncLocal<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSyncLocal_<T> = $GuiSyncLocal$Type<(T)>;
}}
declare module "packages/team/creative/creativecore/common/util/math/transformation/$Rotation" {
import {$Rotation$RotationMatrix, $Rotation$RotationMatrix$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation$RotationMatrix"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$Rotation as $Rotation$0, $Rotation$Type as $Rotation$0$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Rotation extends $Enum<($Rotation)> {
static readonly "X_CLOCKWISE": $Rotation
static readonly "X_COUNTER_CLOCKWISE": $Rotation
static readonly "Y_CLOCKWISE": $Rotation
static readonly "Y_COUNTER_CLOCKWISE": $Rotation
static readonly "Z_CLOCKWISE": $Rotation
static readonly "Z_COUNTER_CLOCKWISE": $Rotation
readonly "axis": $Axis
readonly "direction": integer
readonly "clockwise": boolean


public "negativeY"(): boolean
public "negativeZ"(): boolean
public "negativeX"(): boolean
public static "values"(): ($Rotation)[]
public static "valueOf"(arg0: string): $Rotation
public "transform"(arg0: $Vec3d$Type): void
public "transform"(arg0: $Vector3d$Type): $Vector3d
public "transform"(arg0: $BlockPos$Type): $BlockPos
public "transform"(arg0: $Vec3i$Type): $Vec3i
public "transform"(arg0: $Vec3f$Type): void
public "rotate"(arg0: $Rotation$Type): $Rotation
public "rotate"(arg0: $Axis$Type): $Axis
public "rotate"(arg0: $Facing$Type): $Facing
public "getY"<T>(arg0: T, arg1: T, arg2: T): T
public "getRotatedComponentPositive"(arg0: $Axis$Type): boolean
public "getRotatedComponent"(arg0: $Axis$Type): $Axis
public "mirror"(arg0: $Axis$Type): $Rotation
public "opposite"(): $Rotation
public "getVec"(): $Vec3d
public "getMatrix"(): $Rotation$RotationMatrix
public "getZ"<T>(arg0: T, arg1: T, arg2: T): T
public static "getRotation"(arg0: $Rotation$0$Type): $Rotation
public static "getRotation"(arg0: $Vec3d$Type): $Rotation
public static "getRotation"(arg0: $Axis$Type, arg1: boolean): $Rotation
public "getX"<T>(arg0: T, arg1: T, arg2: T): T
public static "getRotationCount"(arg0: $Rotation$0$Type): integer
get "vec"(): $Vec3d
get "matrix"(): $Rotation$RotationMatrix
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotation$Type = (("x_clockwise") | ("y_clockwise") | ("z_counter_clockwise") | ("y_counter_clockwise") | ("z_clockwise") | ("x_counter_clockwise")) | ($Rotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rotation_ = $Rotation$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/$IGuiParent" {
import {$IGuiIntegratedParent, $IGuiIntegratedParent$Type} from "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GuiEvent, $GuiEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiEvent"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"

export interface $IGuiParent {

 "isClient"(): boolean
 "isContainer"(): boolean
 "closeTopLayer"(): void
 "closeLayer"(arg0: $GuiLayer$Type): void
 "getIntegratedParent"(): $IGuiIntegratedParent
 "hasGui"(): boolean
 "isParent"(arg0: $IGuiParent$Type): boolean
 "reflow"(): void
 "toScreenRect"(arg0: $GuiControl$Type, arg1: $Rect$Type): $Rect
 "toLayerRect"(arg0: $GuiControl$Type, arg1: $Rect$Type): $Rect
 "raiseEvent"(arg0: $GuiEvent$Type): void
 "getPlayer"(): $Player
}

export namespace $IGuiParent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiParent$Type = ($IGuiParent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiParent_ = $IGuiParent$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/integration/$ScreenEventListener" {
import {$IGuiIntegratedParent, $IGuiIntegratedParent$Type} from "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$ComponentPath, $ComponentPath$Type} from "packages/net/minecraft/client/gui/$ComponentPath"
import {$FocusNavigationEvent, $FocusNavigationEvent$Type} from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$NarratableEntry$NarrationPriority, $NarratableEntry$NarrationPriority$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry$NarrationPriority"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$NarrationElementOutput, $NarrationElementOutput$Type} from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $ScreenEventListener implements $GuiEventListener, $NarratableEntry {
static readonly "DOUBLE_CLICK_TIME": double

constructor(arg0: $IGuiIntegratedParent$Type, arg1: $Screen$Type)

public "setFocused"(arg0: boolean): void
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isFocused"(): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "tick"(): void
public "getOffsetX"(): integer
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isMouseOver"(arg0: double, arg1: double): boolean
public "updateNarration"(arg0: $NarrationElementOutput$Type): void
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "getOffsetY"(): integer
public "getEventTime"(): double
public "nextFocusPath"(arg0: $FocusNavigationEvent$Type): $ComponentPath
public "getCurrentFocusPath"(): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "isActive"(): boolean
public "getTabOrderGroup"(): integer
set "focused"(value: boolean)
get "focused"(): boolean
get "offsetX"(): integer
get "offsetY"(): integer
get "eventTime"(): double
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "active"(): boolean
get "tabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEventListener$Type = ($ScreenEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEventListener_ = $ScreenEventListener$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/$GuiChildControl" {
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"

export class $GuiChildControl {
readonly "control": $GuiControl
 "rect": $Rect

constructor(arg0: $GuiControl$Type)

public "getY"(): integer
public "setHeight"(arg0: integer, arg1: integer): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "getBottom"(): integer
public "getMaxWidth"(arg0: integer): integer
public "addWidth"(arg0: integer, arg1: integer): integer
public "isMaxWidth"(arg0: integer): boolean
public "isMouseOver"(arg0: double, arg1: double): boolean
public "setWidth"(arg0: integer, arg1: integer): integer
public "getContentHeight"(): integer
public "getContentWidth"(): integer
public "addHeight"(arg0: integer, arg1: integer): integer
public "isMaxHeight"(arg0: integer): boolean
public "isExpandableY"(): boolean
public "flowX"(): void
public "getMaxHeight"(arg0: integer): integer
public "flowY"(): void
public "isExpandableX"(): boolean
public "getPreferredWidth"(arg0: integer): integer
public "getMinWidth"(arg0: integer): integer
public "getMinHeight"(arg0: integer): integer
public "getPreferredHeight"(arg0: integer): integer
public "getX"(): integer
public "setX"(arg0: integer): void
public "setY"(arg0: integer): void
get "y"(): integer
get "width"(): integer
get "height"(): integer
get "bottom"(): integer
get "contentHeight"(): integer
get "contentWidth"(): integer
get "expandableY"(): boolean
get "expandableX"(): boolean
get "x"(): integer
set "x"(value: integer)
set "y"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiChildControl$Type = ($GuiChildControl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiChildControl_ = $GuiChildControl$Type;
}}
declare module "packages/team/creative/creativecore/common/util/type/map/$HashMapList" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $HashMapList<K, V> implements $Iterable<(V)> {

constructor()
constructor(arg0: $HashMapList$Type<(K), (V)>)

public "sizeOfValues"(): integer
public "add"(arg0: K, arg1: (V)[]): void
public "add"(arg0: K, arg1: $Collection$Type<(V)>): void
public "add"(arg0: K, arg1: V): void
public "get"(arg0: K): $ArrayList<(V)>
public "toString"(): string
public "values"(): $Collection<($ArrayList<(V)>)>
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<(V)>
public "contains"(arg0: V): boolean
public "contains"(arg0: K, arg1: V): boolean
public "entrySet"(): $Set<($Map$Entry<(K), ($ArrayList<(V)>)>)>
public "containsKey"(arg0: K): boolean
public "keySet"(): $Set<(K)>
public "getFirst"(): V
public "tryGet"(arg0: K): $List<(V)>
public "keyOf"(arg0: V): K
public "removeValue"(arg0: V): boolean
public "removeValue"(arg0: K, arg1: V): boolean
public "removeKey"(arg0: K): $ArrayList<(V)>
public "spliterator"(): $Spliterator<(V)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<V>;
get "empty"(): boolean
get "first"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashMapList$Type<K, V> = ($HashMapList<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HashMapList_<K, V> = $HashMapList$Type<(K), (V)>;
}}
declare module "packages/team/creative/littletiles/common/level/little/$LittleLevel" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$LevelBlockChangeListener, $LevelBlockChangeListener$Type} from "packages/team/creative/littletiles/common/level/little/$LevelBlockChangeListener"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LittleEntityRenderManager, $LittleEntityRenderManager$Type} from "packages/team/creative/littletiles/client/render/entity/$LittleEntityRenderManager"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Difficulty, $Difficulty$Type} from "packages/net/minecraft/world/$Difficulty"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$IOrientatedLevel, $IOrientatedLevel$Type} from "packages/team/creative/creativecore/common/level/$IOrientatedLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TargetingConditions, $TargetingConditions$Type} from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$EntityTypeTest, $EntityTypeTest$Type} from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import {$ChunkStatus, $ChunkStatus$Type} from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$IVecOrigin, $IVecOrigin$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$WorldBorder, $WorldBorder$Type} from "packages/net/minecraft/world/level/border/$WorldBorder"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$TickPriority, $TickPriority$Type} from "packages/net/minecraft/world/ticks/$TickPriority"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$LevelData, $LevelData$Type} from "packages/net/minecraft/world/level/storage/$LevelData"

export interface $LittleLevel extends $IOrientatedLevel {

 "removeEntityById"(arg0: integer, arg1: $Entity$RemovalReason$Type): void
 "key"(): $UUID
 "unload"(): void
 "entities"(): $Iterable<($Entity)>
 "tick"(): void
 "allowPlacement"(): boolean
 "chunks"(): $Iterable<(any)>
 "asLevel"(): $Level
 "m_104665_"(arg0: $LevelChunk$Type): void
 "getHolder"(): $Entity
 "setHolder"(arg0: $Entity$Type): void
 "getRenderManager"(): $LittleEntityRenderManager<(any)>
 "registerBlockChangeListener"(arg0: $LevelBlockChangeListener$Type): void
 "getOrigin"(): $IVecOrigin
 "setOrigin"(arg0: $Vec3d$Type): void
 "levelEvent"(arg0: $Player$Type, arg1: integer, arg2: $BlockPos$Type, arg3: integer): void
 "gameEvent"(arg0: $GameEvent$Type, arg1: $Vec3$Type, arg2: $GameEvent$Context$Type): void
 "getLevelData"(): $LevelData
 "gameEvent"(arg0: $GameEvent$Type, arg1: $BlockPos$Type, arg2: $GameEvent$Context$Type): void
 "levelEvent"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
 "blockUpdated"(arg0: $BlockPos$Type, arg1: $Block$Type): void
 "neighborShapeChanged"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
 "hasChunk"(arg0: integer, arg1: integer): boolean
 "getCurrentDifficultyAt"(arg0: $BlockPos$Type): $DifficultyInstance
 "nextSubTickCount"(): long
 "getRandom"(): $RandomSource
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer, arg3: $TickPriority$Type): void
 "getBlockTicks"(): $LevelTickAccess<($Block)>
 "dayTime"(): long
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer, arg3: $TickPriority$Type): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type): void
 "getFluidTicks"(): $LevelTickAccess<($Fluid)>
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $BlockPos$Type): void
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $Vec3$Type): void
 "addParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
 "getDifficulty"(): $Difficulty
 "getServer"(): $MinecraftServer
 "getChunkSource"(): $ChunkSource
 "getPartEntities"(): $Collection<($PartEntity<(any)>)>
 "getMaxEntityRadius"(): double
 "increaseMaxEntityRadius"(arg0: double): double
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "isUnobstructed"(arg0: $Entity$Type, arg1: $VoxelShape$Type): boolean
 "getHeightmapPos"(arg0: $Heightmap$Types$Type, arg1: $BlockPos$Type): $BlockPos
 "getEntityCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($VoxelShape)>
 "getTimeOfDay"(arg0: float): float
 "getMoonBrightness"(): float
 "getMoonPhase"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<($Entity)>
 "getNearestPlayer"(arg0: $Entity$Type, arg1: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type): $Player
 "getNearestEntity"<T extends $LivingEntity>(arg0: $List$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double): T
 "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: double, arg3: double, arg4: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$Type<($Entity$Type)>): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: double, arg2: double, arg3: double): $Player
 "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$Type): T
 "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$Type<(T)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: $AABB$Type): $List<(T)>
 "getNearbyPlayers"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: $AABB$Type): $List<($Player)>
 "getPlayerByUUID"(arg0: $UUID$Type): $Player
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$Type<($Entity$Type), (T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "players"(): $List<(any)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type): $List<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($Entity)>
 "isClientSide"(): boolean
 "isEmptyBlock"(arg0: $BlockPos$Type): boolean
 "enabledFeatures"(): $FeatureFlagSet
 "getBiome"(arg0: $BlockPos$Type): $Holder<($Biome)>
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type, arg3: boolean): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "getSeaLevel"(): integer
 "getHeight"(arg0: $Heightmap$Types$Type, arg1: integer, arg2: integer): integer
 "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
 "getSkyDarken"(): integer
 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "isWaterAt"(arg0: $BlockPos$Type): boolean
 "getChunk"(arg0: $BlockPos$Type): $ChunkAccess
 "getHeight"(): integer
 "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "canSeeSkyFromBelowWater"(arg0: $BlockPos$Type): boolean
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getPathfindingCostFromLightLevels"(arg0: $BlockPos$Type): float
 "isAreaLoaded"(arg0: $BlockPos$Type, arg1: integer): boolean
 "holderLookup"<T>(arg0: $ResourceKey$Type<(any)>): $HolderLookup<(T)>
 "getBlockStatesIfLoaded"(arg0: $AABB$Type): $Stream<($BlockState)>
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "getLightLevelDependentMagicValue"(arg0: $BlockPos$Type): float
 "dimensionType"(): $DimensionType
 "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: $BlockPos$Type): boolean
 "getMinBuildHeight"(): integer
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type): integer
 "registryAccess"(): $RegistryAccess
 "containsAnyLiquid"(arg0: $AABB$Type): boolean
 "getBiomeManager"(): $BiomeManager
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
 "getShade"(arg0: $Direction$Type, arg1: boolean): float
 "noCollision"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "getWorldBorder"(): $WorldBorder
 "findSupportingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): $Optional<($BlockPos)>
 "getBlockCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "findFreePosition"(arg0: $Entity$Type, arg1: $VoxelShape$Type, arg2: $Vec3$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
 "noCollision"(arg0: $Entity$Type): boolean
 "isUnobstructed"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): boolean
 "isUnobstructed"(arg0: $Entity$Type): boolean
 "noCollision"(arg0: $AABB$Type): boolean
 "collidesWithSuffocatingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "getCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "getDirectSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "getDirectSignalTo"(arg0: $BlockPos$Type): integer
 "getControlInputSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: boolean): integer
 "getBestNeighborSignal"(arg0: $BlockPos$Type): integer
 "hasNeighborSignal"(arg0: $BlockPos$Type): boolean
 "getSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "hasSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): boolean
 "isStateAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($BlockState$Type)>): boolean
 "isFluidAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($FluidState$Type)>): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
 "addFreshEntity"(arg0: $Entity$Type): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer, arg3: integer): boolean
 "removeBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type, arg3: integer): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type): boolean
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "getMaxSection"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
}

export namespace $LittleLevel {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleLevel$Type = ($LittleLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleLevel_ = $LittleLevel$Type;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$SectionRenderDataStorageAccessor" {
import {$GlBufferSegment, $GlBufferSegment$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/$GlBufferSegment"

export interface $SectionRenderDataStorageAccessor {

 "getAllocations"(): ($GlBufferSegment)[]

(): ($GlBufferSegment)[]
}

export namespace $SectionRenderDataStorageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDataStorageAccessor$Type = ($SectionRenderDataStorageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionRenderDataStorageAccessor_ = $SectionRenderDataStorageAccessor$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/vec/$Vec3f" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VecNf, $VecNf$Type} from "packages/team/creative/creativecore/common/util/math/vec/$VecNf"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"

export class $Vec3f extends $VecNf<($Vec3f)> {
 "x": float
 "y": float
 "z": float

constructor(arg0: $Vec3d$Type)
constructor()
constructor(arg0: $Vec3f$Type)
constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: $Vector3f$Type)

public "epsilonEquals"(arg0: $Vec3f$Type, arg1: float): boolean
public "add"(arg0: $Vec3f$Type): void
public "get"(arg0: integer): float
public "get"(arg0: $Axis$Type): float
public "equals"(arg0: any): boolean
public "length"(): double
public "scale"(arg0: double): void
public "dot"(arg0: $Vec3f$Type): float
public "dimensions"(): integer
public "set"(arg0: $Vec3f$Type): void
public "set"(arg0: float, arg1: float, arg2: float): void
public "set"(arg0: $Axis$Type, arg1: float): void
public "set"(arg0: integer, arg1: float): void
public "distance"(arg0: $Vec3f$Type): double
public "sub"(arg0: $Vec3f$Type): void
public "toVanilla"(): $Vector3d
public "angle"(arg0: $Vec3f$Type): double
public "cross"(arg0: $Vec3f$Type, arg1: $Vec3f$Type): void
public "lengthSquared"(): double
public "distanceSqr"(arg0: $Vec3f$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3f$Type = ($Vec3f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec3f_ = $Vec3f$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/vec/$Vec3d" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$VecNd, $VecNd$Type} from "packages/team/creative/creativecore/common/util/math/vec/$VecNd"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Vec3d extends $VecNd<($Vec3d)> {
 "x": double
 "y": double
 "z": double

constructor(arg0: $Vector3d$Type)
constructor(arg0: $Vec3$Type)
constructor(arg0: $Vector3f$Type)
constructor()
constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vec3i$Type)
constructor(arg0: $Vec3d$Type)
constructor(arg0: $Vec3f$Type)

public "epsilonEquals"(arg0: $Vec3d$Type, arg1: double): boolean
public "add"(arg0: $Vec3d$Type): void
public "get"(arg0: $Axis$Type): double
public "get"(arg0: integer): double
public "equals"(arg0: any): boolean
public "length"(): double
public "scale"(arg0: double): void
public "dot"(arg0: $Vec3d$Type): double
public "dimensions"(): integer
public "set"(arg0: $Vec3$Type): void
public "set"(arg0: $Vec3d$Type): void
public "set"(arg0: integer, arg1: double): void
public "set"(arg0: $Axis$Type, arg1: double): void
public "set"(arg0: double, arg1: double, arg2: double): void
public "copy"(): $Vec3d
public "distance"(arg0: $Vec3d$Type): double
public "distance"(arg0: $Vec3$Type): double
public "distance"(arg0: double, arg1: double, arg2: double): double
public "sub"(arg0: $Vec3d$Type): void
public "toVanilla"(): $Vec3
public "toBlockPos"(): $BlockPos
public "angle"(arg0: $Vec3d$Type): double
public "cross"(arg0: $Vec3d$Type, arg1: $Vec3d$Type): void
public "lengthSquared"(): double
public "distanceSqr"(arg0: $Vec3d$Type): double
public "distanceSqr"(arg0: double, arg1: double, arg2: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3d$Type = ($Vec3d);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec3d_ = $Vec3d$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/component/$ISignalStructureBase" {
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$SignalNetwork, $SignalNetwork$Type} from "packages/team/creative/littletiles/common/structure/signal/network/$SignalNetwork"
import {$SignalComponentType, $SignalComponentType$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$SignalComponentType"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $ISignalStructureBase {

 "getComponentType"(): $SignalComponentType
 "connect"(arg0: $Facing$Type, arg1: $ISignalStructureBase$Type, arg2: $LittleGrid$Type, arg3: integer, arg4: boolean): boolean
 "unload"(arg0: $Facing$Type, arg1: $ISignalStructureBase$Type): void
 "disconnect"(arg0: $Facing$Type, arg1: $ISignalStructureBase$Type): void
 "connections"(): $Iterator<($ISignalStructureBase)>
 "getBandwidth"(): integer
 "getNetwork"(): $SignalNetwork
 "hasNetwork"(): boolean
 "setNetwork"(arg0: $SignalNetwork$Type): void
 "getColor"(): integer
 "compatible"(arg0: $ISignalStructureBase$Type): boolean
 "canConnect"(arg0: $Facing$Type): boolean
 "getStructureLevel"(): $Level
 "findNetwork"(): $SignalNetwork
}

export namespace $ISignalStructureBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISignalStructureBase$Type = ($ISignalStructureBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISignalStructureBase_ = $ISignalStructureBase$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemLittleBag" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGuiCreator, $ItemGuiCreator$Type} from "packages/team/creative/creativecore/common/gui/creator/$ItemGuiCreator"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleInventory, $LittleInventory$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleInventory"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"
import {$ILittleIngredientInventory, $ILittleIngredientInventory$Type} from "packages/team/creative/littletiles/api/common/ingredient/$ILittleIngredientInventory"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLittleBag extends $Item implements $ILittleIngredientInventory, $ItemGuiCreator {
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

public "create"(arg0: $CompoundTag$Type, arg1: $Player$Type): $GuiLayer
public "getInventory"(arg0: $ItemStack$Type): $LittleIngredients
public "setInventory"(arg0: $ItemStack$Type, arg1: $LittleIngredients$Type, arg2: $LittleInventory$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "shouldBeMerged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLittleBag$Type = ($ItemLittleBag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLittleBag_ = $ItemLittleBag$Type;
}}
declare module "packages/team/creative/littletiles/common/ingredient/$LittleIngredientBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LittleIngredientBase<T extends $LittleIngredientBase<(any)>> {

constructor()

public "add"(arg0: T): T
public "isEmpty"(): boolean
public "copy"(): T
public "sub"(arg0: T): T
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleIngredientBase$Type<T> = ($LittleIngredientBase<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleIngredientBase_<T> = $LittleIngredientBase$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/common/math/face/$LittleFace" {
import {$ILittleFace, $ILittleFace$Type} from "packages/team/creative/littletiles/common/math/face/$ILittleFace"
import {$VectorFan, $VectorFan$Type} from "packages/team/creative/creativecore/common/util/math/geo/$VectorFan"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $LittleFace implements $ILittleFace {
 "grid": $LittleGrid
 "box": $LittleBox
readonly "one": $Axis
readonly "two": $Axis
readonly "facing": $Facing
 "minOne": integer
 "minTwo": integer
 "maxOne": integer
 "maxTwo": integer
 "origin": integer
 "oldOrigin": integer
 "filled": ((boolean)[])[]

constructor(arg0: $LittleBox$Type, arg1: $List$Type<($VectorFan$Type)>, arg2: $Iterable$Type<($VectorFan$Type)>, arg3: $LittleGrid$Type, arg4: $Facing$Type, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer)

public "getSmallest"(): integer
public "maxTwo"(): integer
public "maxOne"(): integer
public "minTwo"(): integer
public "minOne"(): integer
public "supportsCutting"(): boolean
public "setPartiallyFilled"(): void
public "set"(arg0: integer, arg1: integer, arg2: boolean): void
public "box"(): $LittleBox
public "move"(arg0: $Facing$Type): void
public "origin"(): integer
public "one"(): $Axis
public "two"(): $Axis
public "facing"(): $Facing
public "cut"(arg0: $List$Type<($VectorFan$Type)>): void
public "isFaceInsideBlock"(): boolean
public "isPartiallyFilled"(): boolean
public "convertTo"(arg0: $LittleGrid$Type): void
public "getBox"(): $LittleBox
public "isFilled"(arg0: boolean): boolean
public "getGrid"(): $LittleGrid
public "generateFans"(): $List<($VectorFan)>
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "smallest"(): integer
get "faceInsideBlock"(): boolean
get "partiallyFilled"(): boolean
get "grid"(): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleFace$Type = ($LittleFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleFace_ = $LittleFace$Type;
}}
declare module "packages/team/creative/littletiles/client/render/mc/$RenderChunkExtender" {
import {$VertexBufferExtender, $VertexBufferExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$VertexBufferExtender"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BufferBuilder$SortState, $BufferBuilder$SortState$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$SortState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LittleRenderPipelineType, $LittleRenderPipelineType$Type} from "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipelineType"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$VertexBuffer, $VertexBuffer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexBuffer"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$BufferCollection, $BufferCollection$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCollection"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$RebuildTaskExtender, $RebuildTaskExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$RebuildTaskExtender"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChunkLayerMap, $ChunkLayerMap$Type} from "packages/team/creative/creativecore/common/util/type/map/$ChunkLayerMap"

export interface $RenderChunkExtender {

 "setQuadSorting"(arg0: $BufferBuilder$Type, arg1: $Vec3$Type): void
 "setQuadSorting"(arg0: $BufferBuilder$Type, arg1: double, arg2: double, arg3: double): void
 "getPipeline"(): $LittleRenderPipelineType<(any)>
 "appendRenderData"(arg0: $Iterable$Type<(any)>): boolean
 "endBuilding"(arg0: $RebuildTaskExtender$Type): void
 "offsetCorrection"(arg0: $RenderChunkExtender$Type): $Vec3
 "backToRAM"(): void
 "isEmpty"(arg0: $RenderType$Type): boolean
 "begin"(arg0: $BufferBuilder$Type): void
 "standardOffset"(): $BlockPos
 "sectionIndex"(): integer
 "uploaded"(arg0: $RenderType$Type, arg1: $BufferCollection$Type): void
 "startBuilding"(arg0: $RebuildTaskExtender$Type): void
 "getVertexBuffer"(arg0: $RenderType$Type): $VertexBuffer
 "getTransparencyState"(): $BufferBuilder$SortState
 "downloadUploadedData"(arg0: $VertexBufferExtender$Type, arg1: long, arg2: integer): $ByteBuffer
 "setHasBlock"(arg0: $RenderType$Type): void
 "markReadyForUpdate"(arg0: boolean): void
 "setLastUploaded"(arg0: $ChunkLayerMap$Type<($BufferCollection$Type)>): void
 "prepareUpload"(): void
 "getLastUploaded"(): $ChunkLayerMap<($BufferCollection)>
 "prepareModelOffset"(arg0: $BlockPos$MutableBlockPos$Type, arg1: $BlockPos$Type): void
 "getQueued"(): integer
 "setQueued"(arg0: integer): void
}

export namespace $RenderChunkExtender {
function offsetCorrection(arg0: $Vec3i$Type, arg1: $Vec3i$Type): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderChunkExtender$Type = ($RenderChunkExtender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderChunkExtender_ = $RenderChunkExtender$Type;
}}
declare module "packages/team/creative/littletiles/mixin/client/$MultiPlayerGameModeAccessor" {
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"

export interface $MultiPlayerGameModeAccessor {

 "getConnection"(): $ClientPacketListener
 "callEnsureHasSentCarriedItem"(): void
 "setDestroyDelay"(arg0: integer): void
 "getDestroyDelay"(): integer
}

export namespace $MultiPlayerGameModeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPlayerGameModeAccessor$Type = ($MultiPlayerGameModeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPlayerGameModeAccessor_ = $MultiPlayerGameModeAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemBlockIngredient" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleInventory, $LittleInventory$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleInventory"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$ILittleIngredientInventory, $ILittleIngredientInventory$Type} from "packages/team/creative/littletiles/api/common/ingredient/$ILittleIngredientInventory"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockIngredientEntry, $BlockIngredientEntry$Type} from "packages/team/creative/littletiles/common/ingredient/$BlockIngredientEntry"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockIngredient extends $Item implements $ILittleIngredientInventory {
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

public static "saveIngredient"(arg0: $ItemStack$Type, arg1: $BlockIngredientEntry$Type): void
public static "of"(arg0: $BlockIngredientEntry$Type): $ItemStack
public "getInventory"(arg0: $ItemStack$Type): $LittleIngredients
public "setInventory"(arg0: $ItemStack$Type, arg1: $LittleIngredients$Type, arg2: $LittleInventory$Type): void
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "shouldOverrideMultiplayerNbt"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public static "loadIngredient"(arg0: $ItemStack$Type): $BlockIngredientEntry
public "shouldBeMerged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockIngredient$Type = ($ItemBlockIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockIngredient_ = $ItemBlockIngredient$Type;
}}
declare module "packages/team/creative/littletiles/mixin/common/level/$BlockBehaviourAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockBehaviourAccessor {

 "getHasCollision"(): boolean

(): boolean
}

export namespace $BlockBehaviourAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourAccessor$Type = ($BlockBehaviourAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBehaviourAccessor_ = $BlockBehaviourAccessor$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/vec/$VecNf" {
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"

export class $VecNf<T extends $VecNf<(any)>> {

constructor()
constructor(arg0: T)

public "epsilonEquals"(arg0: T, arg1: float): boolean
public "epsilonEquals"(arg0: T): boolean
public "add"(arg0: T): void
public "add"(arg0: T, arg1: T): void
public "get"(arg0: integer): float
public "get"(arg0: $Axis$Type): float
public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): string
public "scale"(arg0: double): void
public "dot"(arg0: T): float
public "dimensions"(): integer
public "set"(arg0: $Axis$Type, arg1: float): void
public "set"(arg0: T): void
public "set"(arg0: integer, arg1: float): void
public "copy"(): T
public "normalize"(): void
public "distance"(arg0: T): double
public "sub"(arg0: T, arg1: T): void
public "sub"(arg0: T): void
public "invert"(): void
public "angle"(arg0: T): double
public "lengthSquared"(): double
public "distanceSqr"(arg0: T): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VecNf$Type<T> = ($VecNf<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VecNf_<T> = $VecNf$Type<(T)>;
}}
declare module "packages/team/creative/creativecore/common/util/math/vec/$VecNd" {
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $VecNd<T extends $VecNd<(any)>> {

constructor()
constructor(arg0: T)

public static "createEmptyVec"<T extends $VecNd<(any)>>(arg0: $Class$Type<(T)>): T
public "epsilonEquals"(arg0: T, arg1: double): boolean
public "epsilonEquals"(arg0: T): boolean
public "add"(arg0: T): void
public "add"(arg0: T, arg1: T): void
public "get"(arg0: $Axis$Type): double
public "get"(arg0: integer): double
public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): string
public static "load"(arg0: (long)[]): $VecNd<(any)>
public "scale"(arg0: double): void
public "dot"(arg0: T): double
public "dimensions"(): integer
public "set"(arg0: T): void
public "set"(arg0: integer, arg1: double): void
public "set"(arg0: $Axis$Type, arg1: double): void
public "copy"(): T
public "normalize"(): void
public "distance"(arg0: T): double
public "sub"(arg0: T, arg1: T): void
public "sub"(arg0: T): void
public "toLong"(): (long)[]
public "invert"(): void
public "angle"(arg0: T): double
public "lengthSquared"(): double
public "distanceSqr"(arg0: T): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VecNd$Type<T> = ($VecNd<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VecNd_<T> = $VecNd$Type<(T)>;
}}
declare module "packages/team/creative/creativecore/common/gui/flow/$GuiFlow" {
import {$GuiStackY, $GuiStackY$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiStackY"
import {$GuiStackX, $GuiStackX$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiStackX"
import {$VAlign, $VAlign$Type} from "packages/team/creative/creativecore/common/gui/$VAlign"
import {$GuiFlowFitX, $GuiFlowFitX$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiFlowFitX"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Align, $Align$Type} from "packages/team/creative/creativecore/common/gui/$Align"

export class $GuiFlow {
static readonly "STACK_X": $GuiStackX
static readonly "FIT_X": $GuiFlowFitX
static readonly "STACK_Y": $GuiStackY

constructor()

public static "areChildrenExpandableX"(arg0: $List$Type<(any)>): boolean
public static "areChildrenExpandableY"(arg0: $List$Type<(any)>): boolean
public "flowX"(arg0: $List$Type<(any)>, arg1: integer, arg2: $Align$Type, arg3: integer, arg4: integer, arg5: boolean): void
public "flowY"(arg0: $List$Type<(any)>, arg1: integer, arg2: $VAlign$Type, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "minHeight"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer, arg3: integer): integer
public "preferredWidth"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer): integer
public "preferredHeight"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer, arg3: integer): integer
public "minWidth"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiFlow$Type = ($GuiFlow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiFlow_ = $GuiFlow$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/logic/$SignalMode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SignalOutputHandler, $SignalOutputHandler$Type} from "packages/team/creative/littletiles/common/structure/signal/output/$SignalOutputHandler"
import {$ISignalComponent, $ISignalComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalComponent"
import {$GuiParent, $GuiParent$Type} from "packages/team/creative/creativecore/common/gui/$GuiParent"
import {$SignalMode$GuiSignalModeConfiguration, $SignalMode$GuiSignalModeConfiguration$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalMode$GuiSignalModeConfiguration"

export class $SignalMode extends $Enum<($SignalMode)> {
static readonly "EQUAL": $SignalMode
static readonly "TOGGLE": $SignalMode
static readonly "PULSE": $SignalMode
static readonly "THRESHOLD": $SignalMode
static readonly "STABILIZER": $SignalMode
static readonly "EXTENDER": $SignalMode
readonly "translateKey": string


public static "get"(arg0: string, arg1: $SignalMode$Type): $SignalMode
public static "get"(arg0: string): $SignalMode
public static "values"(): ($SignalMode)[]
public static "valueOf"(arg0: string): $SignalMode
public "create"(arg0: $ISignalComponent$Type, arg1: integer, arg2: $CompoundTag$Type, arg3: boolean): $SignalOutputHandler
public "createConfiguration"(arg0: $SignalOutputHandler$Type): $SignalMode$GuiSignalModeConfiguration
public "createControls"(arg0: $GuiParent$Type, arg1: $SignalMode$GuiSignalModeConfiguration$Type): void
public "parseControls"(arg0: $GuiParent$Type, arg1: integer): $SignalMode$GuiSignalModeConfiguration
public static "getConfigDefault"(): $SignalMode$GuiSignalModeConfiguration
get "configDefault"(): $SignalMode$GuiSignalModeConfiguration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalMode$Type = (("equal") | ("extender") | ("stabilizer") | ("pulse") | ("toggle") | ("threshold")) | ($SignalMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalMode_ = $SignalMode$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemLittleScrewdriver" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ILittleTool, $ILittleTool$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittleTool"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IItemTooltip, $IItemTooltip$Type} from "packages/team/creative/littletiles/common/item/tooltip/$IItemTooltip"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLittleScrewdriver extends $Item implements $ILittleTool, $IItemTooltip {
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

public "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
public "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "onClick"(arg0: $Player$Type, arg1: boolean, arg2: $BlockPos$Type, arg3: $ItemStack$Type): void
public "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
public "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "tooltipData"(arg0: $ItemStack$Type): (any)[]
public "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
public "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
public "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
public "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "sendTransformationUpdate"(): boolean
public "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
public "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
public "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLittleScrewdriver$Type = ($ItemLittleScrewdriver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLittleScrewdriver_ = $ItemLittleScrewdriver$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/connection/$ILevelPositionProvider" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILevelPositionProvider {

 "structureDestroyed"(): void
 "getStructurePos"(): $BlockPos
 "getStructureLevel"(): $Level
}

export namespace $ILevelPositionProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelPositionProvider$Type = ($ILevelPositionProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILevelPositionProvider_ = $ILevelPositionProvider$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/vec/$Vec4d" {
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$VecNd, $VecNd$Type} from "packages/team/creative/creativecore/common/util/math/vec/$VecNd"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"

export class $Vec4d extends $VecNd<($Vec4d)> {
 "x": double
 "y": double
 "z": double
 "w": double

constructor(arg0: $Vec4d$Type)
constructor()
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor(arg0: $Vec3d$Type, arg1: double)

public "epsilonEquals"(arg0: $Vec4d$Type, arg1: double): boolean
public "add"(arg0: $Vec4d$Type): void
public "get"(arg0: $Axis$Type): double
public "get"(arg0: integer): double
public "equals"(arg0: any): boolean
public "length"(): double
public "scale"(arg0: double): void
public "dot"(arg0: $Vec4d$Type): double
public "dimensions"(): integer
public "set"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "set"(arg0: $Vec4d$Type): void
public "set"(arg0: $Axis$Type, arg1: double): void
public "set"(arg0: integer, arg1: double): void
public "distance"(arg0: $Vec4d$Type): double
public "sub"(arg0: $Vec4d$Type): void
public "angle"(arg0: $Vec4d$Type): double
public "lengthSquared"(): double
public "distanceSqr"(arg0: $Vec4d$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec4d$Type = ($Vec4d);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec4d_ = $Vec4d$Type;
}}
declare module "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCache" {
import {$ChunkBufferDownloader, $ChunkBufferDownloader$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$ChunkBufferDownloader"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ChunkBufferUploader, $ChunkBufferUploader$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$ChunkBufferUploader"

export interface $BufferCache {

 "extract"(arg0: integer): $BufferCache
 "combine"(arg0: $BufferCache$Type): $BufferCache
 "isInvalid"(): boolean
 "groupCount"(): integer
 "invalidate"(): void
 "isAvailable"(): boolean
 "upload"(arg0: $ChunkBufferUploader$Type): boolean
 "applyOffset"(arg0: $Vec3$Type): void
 "download"(arg0: $ChunkBufferDownloader$Type): boolean
 "eraseBuffer"(): void
 "lengthToUpload"(): integer
 "lengthToUpload"(arg0: integer): integer
}

export namespace $BufferCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferCache$Type = ($BufferCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferCache_ = $BufferCache$Type;
}}
declare module "packages/team/creative/littletiles/common/level/little/$LittleAnimationLevelCallback" {
import {$EntityTickList, $EntityTickList$Type} from "packages/net/minecraft/world/level/entity/$EntityTickList"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LevelCallback, $LevelCallback$Type} from "packages/net/minecraft/world/level/entity/$LevelCallback"
import {$LittleAnimationLevel, $LittleAnimationLevel$Type} from "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LittleAnimationLevelCallback implements $LevelCallback<($Entity)> {
readonly "level": $LittleAnimationLevel
readonly "tickingEntities": $EntityTickList

constructor(arg0: $LittleAnimationLevel$Type)

public "tick"(): void
public "addTrackingPlayer"(arg0: $ServerPlayer$Type): void
public "tickEntity"(arg0: $Entity$Type): void
public "removeTrackingPlayer"(arg0: $ServerPlayer$Type): void
public "onSectionChange"(arg0: $Entity$Type): void
public "onTickingStart"(arg0: $Entity$Type): void
public "onTickingEnd"(arg0: $Entity$Type): void
public "onTrackingEnd"(arg0: $Entity$Type): void
public "onTrackingStart"(arg0: $Entity$Type): void
public "onDestroyed"(arg0: $Entity$Type): void
public "onCreated"(arg0: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleAnimationLevelCallback$Type = ($LittleAnimationLevelCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleAnimationLevelCallback_ = $LittleAnimationLevelCallback$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/flow/$GuiStackY" {
import {$GuiStackX, $GuiStackX$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiStackX"
import {$VAlign, $VAlign$Type} from "packages/team/creative/creativecore/common/gui/$VAlign"
import {$GuiFlowFitX, $GuiFlowFitX$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiFlowFitX"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Align, $Align$Type} from "packages/team/creative/creativecore/common/gui/$Align"
import {$GuiFlow, $GuiFlow$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiFlow"

export class $GuiStackY extends $GuiFlow {
static readonly "STACK_X": $GuiStackX
static readonly "FIT_X": $GuiFlowFitX
static readonly "STACK_Y": $GuiStackY

constructor()

public "flowX"(arg0: $List$Type<(any)>, arg1: integer, arg2: $Align$Type, arg3: integer, arg4: integer, arg5: boolean): void
public "flowY"(arg0: $List$Type<(any)>, arg1: integer, arg2: $VAlign$Type, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "minHeight"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer, arg3: integer): integer
public "preferredWidth"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer): integer
public "preferredHeight"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer, arg3: integer): integer
public "minWidth"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiStackY$Type = ($GuiStackY);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiStackY_ = $GuiStackY$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/flow/$GuiStackX" {
import {$GuiStackY, $GuiStackY$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiStackY"
import {$VAlign, $VAlign$Type} from "packages/team/creative/creativecore/common/gui/$VAlign"
import {$GuiFlowFitX, $GuiFlowFitX$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiFlowFitX"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Align, $Align$Type} from "packages/team/creative/creativecore/common/gui/$Align"
import {$GuiFlow, $GuiFlow$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiFlow"

export class $GuiStackX extends $GuiFlow {
static readonly "STACK_X": $GuiStackX
static readonly "FIT_X": $GuiFlowFitX
static readonly "STACK_Y": $GuiStackY

constructor()

public "flowX"(arg0: $List$Type<(any)>, arg1: integer, arg2: $Align$Type, arg3: integer, arg4: integer, arg5: boolean): void
public "flowY"(arg0: $List$Type<(any)>, arg1: integer, arg2: $VAlign$Type, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "minHeight"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer, arg3: integer): integer
public "preferredWidth"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer): integer
public "preferredHeight"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer, arg3: integer): integer
public "minWidth"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiStackX$Type = ($GuiStackX);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiStackX_ = $GuiStackX$Type;
}}
declare module "packages/team/creative/littletiles/api/client/$IFakeRenderingBlock" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IFakeRenderingBlock {

 "getFakeState"(arg0: $BlockState$Type): $BlockState

(arg0: $BlockState$Type): $BlockState
}

export namespace $IFakeRenderingBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFakeRenderingBlock$Type = ($IFakeRenderingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFakeRenderingBlock_ = $IFakeRenderingBlock$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/output/$InternalSignalOutput" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SignalMode, $SignalMode$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalMode"
import {$LittleStructureType$InternalComponentOutput, $LittleStructureType$InternalComponentOutput$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponentOutput"
import {$LittleStructureType$InternalComponent, $LittleStructureType$InternalComponent$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponent"
import {$SignalInputCondition, $SignalInputCondition$Type} from "packages/team/creative/littletiles/common/structure/signal/input/$SignalInputCondition"
import {$SignalOutputHandler, $SignalOutputHandler$Type} from "packages/team/creative/littletiles/common/structure/signal/output/$SignalOutputHandler"
import {$SignalComponentType, $SignalComponentType$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$SignalComponentType"
import {$InternalSignal, $InternalSignal$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$InternalSignal"

export class $InternalSignalOutput extends $InternalSignal<($LittleStructureType$InternalComponentOutput)> {
readonly "defaultMode": $SignalMode
readonly "syncToClient": boolean
 "condition": $SignalInputCondition
 "handler": $SignalOutputHandler
readonly "parent": $LittleStructure
readonly "component": T

constructor(arg0: $LittleStructure$Type, arg1: $LittleStructureType$InternalComponentOutput$Type)

public "update"(): void
public "load"(arg0: $CompoundTag$Type): void
public "getComponentType"(): $SignalComponentType
public "save"(arg0: boolean, arg1: $CompoundTag$Type): $CompoundTag
public "changed"(): void
public "toggle"(): void
get "componentType"(): $SignalComponentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalSignalOutput$Type = ($InternalSignalOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InternalSignalOutput_ = $InternalSignalOutput$Type;
}}
declare module "packages/team/creative/littletiles/api/common/block/$ILittleMCBlock" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$LittleBlock, $LittleBlock$Type} from "packages/team/creative/littletiles/api/common/block/$LittleBlock"

export interface $ILittleMCBlock extends $LittleBlock {

 "getState"(): $BlockState
 "is"(arg0: $ItemStack$Type): boolean
 "is"(arg0: $TagKey$Type<($Block$Type)>): boolean
 "is"(arg0: $Block$Type): boolean
 "getStack"(): $ItemStack
 "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type, arg2: $LittleVec$Type): $BlockState
 "use"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleBox$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: $InteractionHand$Type): $InteractionResult
 "blockName"(): string
 "mirror"(arg0: $BlockState$Type, arg1: $Axis$Type, arg2: $LittleVec$Type): $BlockState
 "noCollision"(): boolean
 "getFogColor"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type, arg3: $Vector3d$Type, arg4: float): $Vector3d
 "canInteract"(): boolean
 "isTranslucent"(): boolean
 "exploded"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Explosion$Type): void
 "getSoundType"(): $SoundType
 "getExplosionResistance"(arg0: $LittleTile$Type): float
 "getEnchantPowerBonus"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type): float
 "canBeRenderCombined"(arg0: $LittleTile$Type, arg1: $LittleTile$Type): boolean
 "shouldUseStateForRenderType"(): boolean
 "checkEntityCollision"(): boolean
 "canBeConvertedToVanilla"(): boolean
 "getFriction"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): float
 "getLightValue"(): integer
 "isFluid"(arg0: $TagKey$Type<($Fluid$Type)>): boolean
 "asVanillaBlock"(): $Block
 "entityCollided"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): void
 "getRenderBox"(arg0: $LittleGrid$Type, arg1: $RenderType$Type, arg2: $LittleBox$Type, arg3: $LittleElement$Type): $LittleRenderBox
 "randomDisplayTick"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $RandomSource$Type): void
 "cullOverEdge"(): boolean

(): $BlockState
}

export namespace $ILittleMCBlock {
const RANDOM: $RandomSource
function isTranslucent(arg0: $Block$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILittleMCBlock$Type = ($ILittleMCBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILittleMCBlock_ = $ILittleMCBlock$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/type/bed/$LittleBed" {
import {$LittleStructureType, $LittleStructureType$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType"
import {$IStructureParentCollection, $IStructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$LittleTileContext, $LittleTileContext$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTileContext"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$LevelChildrenList, $LevelChildrenList$Type} from "packages/team/creative/littletiles/common/structure/connection/children/$LevelChildrenList"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Player$BedSleepingProblem, $Player$BedSleepingProblem$Type} from "packages/net/minecraft/world/entity/player/$Player$BedSleepingProblem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LittleBed extends $LittleStructure {
 "playerPostion": $Vec3d
 "direction": $Facing
readonly "type": $LittleStructureType
readonly "mainBlock": $IStructureParentCollection
 "name": string
readonly "children": $LevelChildrenList

constructor(arg0: $LittleStructureType$Type, arg1: $IStructureParentCollection$Type)

public "wakeUp"(): void
public "getSleepingPlayer"(): $Player
public "use"(arg0: $Level$Type, arg1: $LittleTileContext$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: $InteractionHand$Type): $InteractionResult
public "getBedDirection"(): $Direction
public "trySleep"(arg0: $Player$Type, arg1: $Vec3d$Type): $Player$BedSleepingProblem
public "canInteract"(): boolean
public "isBed"(arg0: $LivingEntity$Type): boolean
public "setSleepingPlayerClient"(arg0: $Player$Type): void
public "tileDestroyed"(): void
get "sleepingPlayer"(): $Player
get "bedDirection"(): $Direction
set "sleepingPlayerClient"(value: $Player$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleBed$Type = ($LittleBed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleBed_ = $LittleBed$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/sync/$GuiSyncLocalLayer" {
import {$GuiSyncControl, $GuiSyncControl$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncControl"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$GuiSyncHolder, $GuiSyncHolder$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder"

export class $GuiSyncLocalLayer<T extends $GuiLayer> extends $GuiSyncControl<($GuiLayer), ($CompoundTag)> {
readonly "holder": $GuiSyncHolder
readonly "name": string


public "open"(arg0: $CompoundTag$Type): T
public "receive"(arg0: $GuiLayer$Type, arg1: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSyncLocalLayer$Type<T> = ($GuiSyncLocalLayer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSyncLocalLayer_<T> = $GuiSyncLocalLayer$Type<(T)>;
}}
declare module "packages/team/creative/creativecore/common/gui/manager/$GuiManager" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$GuiChildControl, $GuiChildControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiChildControl"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$NamedHandlerRegistry, $NamedHandlerRegistry$Type} from "packages/team/creative/creativecore/common/util/registry/$NamedHandlerRegistry"
import {$GuiManager$GuiManagerType, $GuiManager$GuiManagerType$Type} from "packages/team/creative/creativecore/common/gui/manager/$GuiManager$GuiManagerType"
import {$GuiManagerItem, $GuiManagerItem$Type} from "packages/team/creative/creativecore/common/gui/manager/$GuiManagerItem"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"

export class $GuiManager {
static readonly "REGISTRY": $NamedHandlerRegistry<($GuiManager$GuiManagerType)>
static readonly "ITEM": $GuiManager$GuiManagerType<($GuiManagerItem)>
readonly "layer": $GuiLayer

constructor(arg0: $GuiLayer$Type)

public static "register"<T extends $GuiManager>(arg0: string, arg1: $Class$Type<(T)>, arg2: $Function$Type<($GuiLayer$Type), (T)>): $GuiManager$GuiManagerType<(T)>
public "closed"(): void
public "tick"(): void
public "mouseClickedOutside"(arg0: double, arg1: double): void
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): void
public "renderOverlay"(arg0: $GuiGraphics$Type, arg1: $GuiChildControl$Type, arg2: $Rect$Type, arg3: integer, arg4: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiManager$Type = ($GuiManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiManager_ = $GuiManager$Type;
}}
declare module "packages/team/creative/littletiles/common/item/glove/$GloveMode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiGlove, $GuiGlove$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiGlove"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$LittleTileContext, $LittleTileContext$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTileContext"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$NamedHandlerRegistry, $NamedHandlerRegistry$Type} from "packages/team/creative/creativecore/common/util/registry/$NamedHandlerRegistry"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GloveMode {
static readonly "REGISTRY": $NamedHandlerRegistry<($GloveMode)>

constructor()

public "wheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $BlockHitResult$Type): boolean
public "setTiles"(arg0: $LittleGroup$Type, arg1: $ItemStack$Type): void
public "translateKey"(): string
public "translatable"(): $Component
public "leftClickAir"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "leftClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $BlockHitResult$Type): void
public "rightClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $BlockHitResult$Type): boolean
public "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
public "getTiles"(arg0: $ItemStack$Type): $LittleGroup
public "hasTiles"(arg0: $ItemStack$Type): boolean
public "hasPreviewElement"(arg0: $ItemStack$Type): boolean
public "getPreviewElement"(arg0: $ItemStack$Type): $LittleElement
public "saveGui"(arg0: $GuiGlove$Type, arg1: $CompoundTag$Type): void
public "loadGui"(arg0: $GuiGlove$Type): void
public "tooltipData"(arg0: $ItemStack$Type): (any)[]
public "addExtraInformation"(arg0: $CompoundTag$Type, arg1: $List$Type<($Component$Type)>): void
public "littleBlockAction"(arg0: $Level$Type, arg1: $BETiles$Type, arg2: $LittleTileContext$Type, arg3: $ItemStack$Type, arg4: $BlockPos$Type, arg5: $CompoundTag$Type): void
public "vanillaBlockAction"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GloveMode$Type = ($GloveMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GloveMode_ = $GloveMode$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/style/$GuiStyle" {
import {$StyleDisplay, $StyleDisplay$Type} from "packages/team/creative/creativecore/common/gui/style/display/$StyleDisplay"
import {$ControlFormatting, $ControlFormatting$Type} from "packages/team/creative/creativecore/common/gui/style/$ControlFormatting"
import {$Color, $Color$Type} from "packages/team/creative/creativecore/common/util/type/$Color"
import {$NamedHandlerRegistry, $NamedHandlerRegistry$Type} from "packages/team/creative/creativecore/common/util/registry/$NamedHandlerRegistry"
import {$ControlFormatting$ControlStyleFace, $ControlFormatting$ControlStyleFace$Type} from "packages/team/creative/creativecore/common/gui/style/$ControlFormatting$ControlStyleFace"
import {$ControlFormatting$ControlStyleBorder, $ControlFormatting$ControlStyleBorder$Type} from "packages/team/creative/creativecore/common/gui/style/$ControlFormatting$ControlStyleBorder"

export class $GuiStyle {
static readonly "REGISTRY": $NamedHandlerRegistry<($GuiStyle)>
 "fontColor": $Color
 "fontColorHighlight": $Color
 "fontColorDisabled": $Color
 "borderWidth": integer
 "borderThickWidth": integer
 "disabled": $StyleDisplay
 "border": $StyleDisplay
 "borderThick": $StyleDisplay
 "background": $StyleDisplay
 "secondaryBackground": $StyleDisplay
 "headerBackground": $StyleDisplay
 "bar": $StyleDisplay
 "clickable": $StyleDisplay
 "clickableHighlight": $StyleDisplay
 "clickableInactive": $StyleDisplay
 "clickableInactiveHighlight": $StyleDisplay
 "disabledBackground": $StyleDisplay
 "slot": $StyleDisplay
 "transparencyBackground": $StyleDisplay

constructor()

public "get"(arg0: $ControlFormatting$ControlStyleFace$Type, arg1: boolean): $StyleDisplay
public "get"(arg0: $ControlFormatting$ControlStyleBorder$Type): $StyleDisplay
public static "reload"(): void
public "getContentOffset"(arg0: $ControlFormatting$Type): integer
public "getBorder"(arg0: $ControlFormatting$ControlStyleBorder$Type): integer
public static "getStyle"(arg0: string): $GuiStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiStyle$Type = ($GuiStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiStyle_ = $GuiStyle$Type;
}}
declare module "packages/team/creative/creativecore/client/render/box/$RenderBox" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$RenderBoxFace, $RenderBoxFace$Type} from "packages/team/creative/creativecore/client/render/face/$RenderBoxFace"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$QuadGeneratorContext, $QuadGeneratorContext$Type} from "packages/team/creative/creativecore/client/render/box/$QuadGeneratorContext"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$AlignedBox, $AlignedBox$Type} from "packages/team/creative/creativecore/common/util/math/box/$AlignedBox"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $RenderBox extends $AlignedBox {
 "state": $BlockState
 "color": integer
 "keepVU": boolean
 "allowOverlap": boolean
 "doesNeedQuadUpdate": boolean
 "needsResorting": boolean
 "emissive": boolean
 "customData": any
 "minX": float
 "minY": float
 "minZ": float
 "maxX": float
 "maxY": float
 "maxZ": float

constructor(arg0: $AlignedBox$Type)
constructor(arg0: $AlignedBox$Type, arg1: $RenderBox$Type)
constructor(arg0: $AlignedBox$Type, arg1: $BlockState$Type)
constructor(arg0: $AlignedBox$Type, arg1: $Block$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $BlockState$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $Block$Type)

public "intersectsWithFace"(arg0: $Facing$Type, arg1: $QuadGeneratorContext$Type, arg2: $BlockPos$Type): boolean
public "getBakedQuad"(arg0: $QuadGeneratorContext$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type, arg5: $BakedModel$Type, arg6: $Facing$Type, arg7: $RenderType$Type, arg8: $RandomSource$Type, arg9: boolean, arg10: integer): $List<($BakedQuad)>
public "getPreviewOffX"(): float
public "getPreviewOffZ"(): float
public "setQuad"(arg0: $Facing$Type, arg1: $List$Type<($BakedQuad$Type)>): void
public "getPreviewScaleX"(): float
public "setFace"(arg0: $Facing$Type, arg1: $RenderBoxFace$Type): void
public "countQuads"(): integer
public "getPreviewScaleZ"(): float
public "getPreviewOffY"(): float
public "getPreviewScaleY"(): float
public "setKeepUV"(arg0: boolean): $RenderBox
public "renderPreview"(arg0: $PoseStack$Type, arg1: $BufferBuilder$Type, arg2: integer): void
public "deleteQuadCache"(): void
public "getQuad"(arg0: $Facing$Type): any
public "setColor"(arg0: integer): $RenderBox
public "isTranslucent"(): boolean
public "getFace"(arg0: $Facing$Type): $RenderBoxFace
public "renderLines"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: integer, arg3: $Vec3d$Type, arg4: double): void
public "renderLines"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: integer): void
public "shouldRenderFace"(arg0: $Facing$Type): boolean
get "previewOffX"(): float
get "previewOffZ"(): float
get "previewScaleX"(): float
get "previewScaleZ"(): float
get "previewOffY"(): float
get "previewScaleY"(): float
set "keepUV"(value: boolean)
set "color"(value: integer)
get "translucent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBox$Type = ($RenderBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderBox_ = $RenderBox$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/geo/$NormalPlaneF" {
import {$Ray3f, $Ray3f$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Ray3f"
import {$VectorFan, $VectorFan$Type} from "packages/team/creative/creativecore/common/util/math/geo/$VectorFan"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"

export class $NormalPlaneF {
readonly "normal": $Vec3f
readonly "origin": $Vec3f

constructor(arg0: $Vec3f$Type, arg1: $Vec3f$Type)
constructor(arg0: $Facing$Type)
constructor(arg0: $Axis$Type, arg1: float, arg2: $Facing$Type)

public "cuts"(arg0: $VectorFan$Type): boolean
public "isInFront"(arg0: $Vec3f$Type): boolean
public "isInFront"(arg0: $Vec3f$Type, arg1: float): boolean
public "toString"(): string
public "isInvalid"(): boolean
public "intersect"(arg0: $Ray3f$Type): $Vec3f
public "intersect"(arg0: $Vec3f$Type, arg1: $Vec3f$Type): $Vec3f
public "project"(arg0: $Axis$Type, arg1: $Axis$Type, arg2: $Axis$Type, arg3: float, arg4: float): float
get "invalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NormalPlaneF$Type = ($NormalPlaneF);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NormalPlaneF_ = $NormalPlaneF$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/geo/$NormalPlaneD" {
import {$Ray3d, $Ray3d$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Ray3d"
import {$VectorFan, $VectorFan$Type} from "packages/team/creative/creativecore/common/util/math/geo/$VectorFan"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$NormalPlaneF, $NormalPlaneF$Type} from "packages/team/creative/creativecore/common/util/math/geo/$NormalPlaneF"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"

export class $NormalPlaneD {
readonly "normal": $Vec3d
readonly "origin": $Vec3d

constructor(arg0: $Vec3d$Type, arg1: $Vec3d$Type)
constructor(arg0: $Facing$Type)
constructor(arg0: $Axis$Type, arg1: double, arg2: $Facing$Type)
constructor(arg0: $Vec3f$Type, arg1: $Vec3f$Type)

public "cuts"(arg0: $VectorFan$Type): boolean
public "isInFront"(arg0: $Vec3d$Type, arg1: double): boolean
public "isInFront"(arg0: $Vec3d$Type): boolean
public "isInFront"(arg0: $Vec3f$Type, arg1: float): boolean
public "isInFront"(arg0: $Vec3f$Type): boolean
public "toString"(): string
public "isInvalid"(): boolean
public "intersect"(arg0: $Ray3d$Type): $Vec3d
public "intersect"(arg0: $Vec3d$Type, arg1: $Vec3d$Type): $Vec3d
public "toFloat"(): $NormalPlaneF
public "project"(arg0: $Axis$Type, arg1: $Axis$Type, arg2: $Axis$Type, arg3: double, arg4: double): double
get "invalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NormalPlaneD$Type = ($NormalPlaneD);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NormalPlaneD_ = $NormalPlaneD$Type;
}}
declare module "packages/team/creative/littletiles/common/ingredient/$LittleIngredient$IngredientConvertionHandler" {
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"
import {$LittleIngredient, $LittleIngredient$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredient"

export class $LittleIngredient$IngredientConvertionHandler<T extends $LittleIngredient<(any)>> {

constructor()

public "extract"(arg0: $LittleElement$Type, arg1: double): T
public "extract"(arg0: $LittleGroup$Type): T
public "extract"(arg0: $ItemStack$Type): T
public "handleExtra"(arg0: T, arg1: $ItemStack$Type, arg2: $LittleIngredients$Type): boolean
public "requiresExtraHandler"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleIngredient$IngredientConvertionHandler$Type<T> = ($LittleIngredient$IngredientConvertionHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleIngredient$IngredientConvertionHandler_<T> = $LittleIngredient$IngredientConvertionHandler$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$ChunkBuildBuffersAccessor" {
import {$ChunkVertexType, $ChunkVertexType$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexType"

export interface $ChunkBuildBuffersAccessor {

 "getVertexType"(): $ChunkVertexType

(): $ChunkVertexType
}

export namespace $ChunkBuildBuffersAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuildBuffersAccessor$Type = ($ChunkBuildBuffersAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuildBuffersAccessor_ = $ChunkBuildBuffersAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LittleStructureType$InternalComponent {
readonly "identifier": string
readonly "bandwidth": integer
readonly "index": integer

constructor(arg0: string, arg1: integer, arg2: integer)

public "is"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleStructureType$InternalComponent$Type = ($LittleStructureType$InternalComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleStructureType$InternalComponent_ = $LittleStructureType$InternalComponent$Type;
}}
declare module "packages/team/creative/creativecore/common/level/$ISubLevel" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Difficulty, $Difficulty$Type} from "packages/net/minecraft/world/$Difficulty"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$IOrientatedLevel, $IOrientatedLevel$Type} from "packages/team/creative/creativecore/common/level/$IOrientatedLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TargetingConditions, $TargetingConditions$Type} from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$EntityTypeTest, $EntityTypeTest$Type} from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import {$ChunkStatus, $ChunkStatus$Type} from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$IVecOrigin, $IVecOrigin$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$WorldBorder, $WorldBorder$Type} from "packages/net/minecraft/world/level/border/$WorldBorder"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$TickPriority, $TickPriority$Type} from "packages/net/minecraft/world/ticks/$TickPriority"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$LevelData, $LevelData$Type} from "packages/net/minecraft/world/level/storage/$LevelData"

export interface $ISubLevel extends $IOrientatedLevel {

 "getParent"(): $Level
 "getRealLevel"(): $Level
 "transformToRealWorld"(arg0: $BlockPos$Type): $BlockPos
 "unload"(): void
 "getOrigin"(): $IVecOrigin
 "getHolder"(): $Entity
 "setHolder"(arg0: $Entity$Type): void
 "setOrigin"(arg0: $Vec3d$Type): void
 "levelEvent"(arg0: $Player$Type, arg1: integer, arg2: $BlockPos$Type, arg3: integer): void
 "gameEvent"(arg0: $GameEvent$Type, arg1: $Vec3$Type, arg2: $GameEvent$Context$Type): void
 "getLevelData"(): $LevelData
 "gameEvent"(arg0: $GameEvent$Type, arg1: $BlockPos$Type, arg2: $GameEvent$Context$Type): void
 "levelEvent"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
 "blockUpdated"(arg0: $BlockPos$Type, arg1: $Block$Type): void
 "neighborShapeChanged"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
 "hasChunk"(arg0: integer, arg1: integer): boolean
 "getCurrentDifficultyAt"(arg0: $BlockPos$Type): $DifficultyInstance
 "nextSubTickCount"(): long
 "getRandom"(): $RandomSource
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer, arg3: $TickPriority$Type): void
 "getBlockTicks"(): $LevelTickAccess<($Block)>
 "dayTime"(): long
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer, arg3: $TickPriority$Type): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type): void
 "getFluidTicks"(): $LevelTickAccess<($Fluid)>
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $BlockPos$Type): void
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $Vec3$Type): void
 "addParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
 "getDifficulty"(): $Difficulty
 "getServer"(): $MinecraftServer
 "getChunkSource"(): $ChunkSource
 "getPartEntities"(): $Collection<($PartEntity<(any)>)>
 "getMaxEntityRadius"(): double
 "increaseMaxEntityRadius"(arg0: double): double
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "isUnobstructed"(arg0: $Entity$Type, arg1: $VoxelShape$Type): boolean
 "getHeightmapPos"(arg0: $Heightmap$Types$Type, arg1: $BlockPos$Type): $BlockPos
 "getEntityCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($VoxelShape)>
 "getTimeOfDay"(arg0: float): float
 "getMoonBrightness"(): float
 "getMoonPhase"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<($Entity)>
 "getNearestPlayer"(arg0: $Entity$Type, arg1: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type): $Player
 "getNearestEntity"<T extends $LivingEntity>(arg0: $List$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double): T
 "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: double, arg3: double, arg4: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$Type<($Entity$Type)>): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: double, arg2: double, arg3: double): $Player
 "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$Type): T
 "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$Type<(T)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: $AABB$Type): $List<(T)>
 "getNearbyPlayers"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: $AABB$Type): $List<($Player)>
 "getPlayerByUUID"(arg0: $UUID$Type): $Player
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$Type<($Entity$Type), (T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "players"(): $List<(any)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type): $List<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($Entity)>
 "isClientSide"(): boolean
 "isEmptyBlock"(arg0: $BlockPos$Type): boolean
 "enabledFeatures"(): $FeatureFlagSet
 "getBiome"(arg0: $BlockPos$Type): $Holder<($Biome)>
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type, arg3: boolean): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "getSeaLevel"(): integer
 "getHeight"(arg0: $Heightmap$Types$Type, arg1: integer, arg2: integer): integer
 "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
 "getSkyDarken"(): integer
 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "isWaterAt"(arg0: $BlockPos$Type): boolean
 "getChunk"(arg0: $BlockPos$Type): $ChunkAccess
 "getHeight"(): integer
 "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "canSeeSkyFromBelowWater"(arg0: $BlockPos$Type): boolean
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getPathfindingCostFromLightLevels"(arg0: $BlockPos$Type): float
 "isAreaLoaded"(arg0: $BlockPos$Type, arg1: integer): boolean
 "holderLookup"<T>(arg0: $ResourceKey$Type<(any)>): $HolderLookup<(T)>
 "getBlockStatesIfLoaded"(arg0: $AABB$Type): $Stream<($BlockState)>
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "getLightLevelDependentMagicValue"(arg0: $BlockPos$Type): float
 "dimensionType"(): $DimensionType
 "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: $BlockPos$Type): boolean
 "getMinBuildHeight"(): integer
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type): integer
 "registryAccess"(): $RegistryAccess
 "containsAnyLiquid"(arg0: $AABB$Type): boolean
 "getBiomeManager"(): $BiomeManager
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
 "getShade"(arg0: $Direction$Type, arg1: boolean): float
 "noCollision"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "getWorldBorder"(): $WorldBorder
 "findSupportingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): $Optional<($BlockPos)>
 "getBlockCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "findFreePosition"(arg0: $Entity$Type, arg1: $VoxelShape$Type, arg2: $Vec3$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
 "noCollision"(arg0: $Entity$Type): boolean
 "isUnobstructed"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): boolean
 "isUnobstructed"(arg0: $Entity$Type): boolean
 "noCollision"(arg0: $AABB$Type): boolean
 "collidesWithSuffocatingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "getCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "getDirectSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "getDirectSignalTo"(arg0: $BlockPos$Type): integer
 "getControlInputSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: boolean): integer
 "getBestNeighborSignal"(arg0: $BlockPos$Type): integer
 "hasNeighborSignal"(arg0: $BlockPos$Type): boolean
 "getSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "hasSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): boolean
 "isStateAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($BlockState$Type)>): boolean
 "isFluidAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($FluidState$Type)>): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
 "addFreshEntity"(arg0: $Entity$Type): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer, arg3: integer): boolean
 "removeBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type, arg3: integer): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type): boolean
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "getMaxSection"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
}

export namespace $ISubLevel {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubLevel$Type = ($ISubLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubLevel_ = $ISubLevel$Type;
}}
declare module "packages/team/creative/creativecore/common/be/$BlockEntityCreative" {
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEntityCreative extends $BlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isClient"(): boolean
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "markDirty"(): void
public "handleUpdate"(arg0: $CompoundTag$Type, arg1: boolean): void
get "client"(): boolean
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityCreative$Type = ($BlockEntityCreative);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityCreative_ = $BlockEntityCreative$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder$GuiSyncHolderLayer" {
import {$GuiSyncControl, $GuiSyncControl$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncControl"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GuiSyncLocal, $GuiSyncLocal$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncLocal"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$GuiSync, $GuiSync$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSync"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$GuiSyncLocalLayer, $GuiSyncLocalLayer$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncLocalLayer"
import {$GuiSyncHolder, $GuiSyncHolder$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder"
import {$GuiSyncHolder$GuiSyncHolderGlobal, $GuiSyncHolder$GuiSyncHolderGlobal$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder$GuiSyncHolderGlobal"

export class $GuiSyncHolder$GuiSyncHolderLayer extends $GuiSyncHolder {
readonly "parent": $GuiLayer
static readonly "GLOBAL": $GuiSyncHolder$GuiSyncHolderGlobal

constructor(arg0: $GuiLayer$Type)

public "register"<T extends $Tag>(arg0: string, arg1: $Consumer$Type<(T)>): $GuiSyncLocal<(T)>
public "layer"<T extends $GuiLayer>(arg0: string, arg1: $Function$Type<($CompoundTag$Type), (T)>): $GuiSyncLocalLayer<(T)>
public "path"(): string
public "getControlSync"(arg0: string): $GuiSyncControl<(any), (any)>
public "getSync"(arg0: string): $GuiSync<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSyncHolder$GuiSyncHolderLayer$Type = ($GuiSyncHolder$GuiSyncHolderLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSyncHolder$GuiSyncHolderLayer_ = $GuiSyncHolder$GuiSyncHolderLayer$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/$LittleStructureType" {
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LittleVecGrid, $LittleVecGrid$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecGrid"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$StructureIngredientRule$StructureIngredientScaler, $StructureIngredientRule$StructureIngredientScaler$Type} from "packages/team/creative/littletiles/common/structure/registry/ingredient/$StructureIngredientRule$StructureIngredientScaler"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleStructureType$InternalComponentOutput, $LittleStructureType$InternalComponentOutput$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponentOutput"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$InternalSignalOutput, $InternalSignalOutput$Type} from "packages/team/creative/littletiles/common/structure/signal/output/$InternalSignalOutput"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LittleIngredient, $LittleIngredient$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredient"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$SignalMode, $SignalMode$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalMode"
import {$LittlePlaceBox, $LittlePlaceBox$Type} from "packages/team/creative/littletiles/common/placement/box/$LittlePlaceBox"
import {$IStructureParentCollection, $IStructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StructureDirectionalField, $StructureDirectionalField$Type} from "packages/team/creative/littletiles/common/structure/directional/$StructureDirectionalField"
import {$IStructureIngredientRule, $IStructureIngredientRule$Type} from "packages/team/creative/littletiles/common/structure/registry/ingredient/$IStructureIngredientRule"
import {$InternalSignalInput, $InternalSignalInput$Type} from "packages/team/creative/littletiles/common/structure/signal/input/$InternalSignalInput"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"
import {$StructureParentCollection, $StructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$StructureParentCollection"
import {$LittleStructureType$InternalComponent, $LittleStructureType$InternalComponent$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponent"
import {$LittleAttributeBuilder, $LittleAttributeBuilder$Type} from "packages/team/creative/littletiles/common/structure/attribute/$LittleAttributeBuilder"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"

export class $LittleStructureType {
readonly "id": string
readonly "clazz": $Class<(any)>
readonly "factory": $BiFunction<(any), ($IStructureParentCollection), (any)>
readonly "attribute": integer
readonly "directional": $List<($StructureDirectionalField)>
readonly "inputs": $List<($LittleStructureType$InternalComponent)>
readonly "outputs": $List<($LittleStructureType$InternalComponentOutput)>

constructor<T extends $LittleStructure>(arg0: string, arg1: $Class$Type<(T)>, arg2: $BiFunction$Type<(any), ($IStructureParentCollection$Type), (T)>, arg3: $LittleAttributeBuilder$Type)

public "advancedScale"(arg0: $LittleGroup$Type, arg1: integer, arg2: integer): void
public "getMinContext"(arg0: $LittleGroup$Type): $LittleGrid
public "getSpecialBoxes"(arg0: $LittleGroup$Type): $List<($LittlePlaceBox)>
public "createOutputs"(arg0: $LittleStructure$Type): ($InternalSignalOutput)[]
public "createInputs"(arg0: $LittleStructure$Type): ($InternalSignalInput)[]
public "equals"(arg0: any): boolean
public "toString"(): string
public "rotate"(arg0: $LittleGroup$Type, arg1: $LittleGrid$Type, arg2: $Rotation$Type, arg3: $LittleVec$Type): void
public "move"(arg0: $LittleGroup$Type, arg1: $LittleVecGrid$Type): void
public "move"(arg0: $LittleStructure$Type, arg1: $LittleVecGrid$Type): void
public "mirror"(arg0: $LittleGroup$Type, arg1: $LittleGrid$Type, arg2: $Axis$Type, arg3: $LittleVec$Type): void
public "addIngredient"(arg0: $IStructureIngredientRule$Type): $LittleStructureType
public "addIngredient"(arg0: $StructureIngredientRule$StructureIngredientScaler$Type, arg1: $Supplier$Type<($LittleIngredient$Type)>): $LittleStructureType
public "addOutput"(arg0: string, arg1: integer, arg2: $SignalMode$Type): $LittleStructureType
public "addOutput"(arg0: string, arg1: integer, arg2: $SignalMode$Type, arg3: boolean): $LittleStructureType
public "addInput"(arg0: string, arg1: integer): $LittleStructureType
public "addIngredients"(arg0: $LittleGroup$Type, arg1: $LittleIngredients$Type): void
public "getItemPreview"(arg0: $LittleGroup$Type, arg1: boolean): $List<($RenderBox)>
public "createStructure"(arg0: $StructureParentCollection$Type): $LittleStructure
public "setFieldDefault"(arg0: string, arg1: any): $LittleStructureType
public "loadDirectional"(arg0: $LittleGroup$Type, arg1: string): any
public "finializePreview"(arg0: $LittleGroup$Type): void
public "checkImport"(arg0: $List$Type<($Component$Type)>, arg1: $LittleGroup$Type, arg2: $Player$Type): void
public "getPositingCubes"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $List<($RenderBox)>
public "tileCountAsIngredient"(arg0: $LittleGroup$Type): boolean
public "canOnlyBePlacedByItemStack"(): boolean
public "hasTranslucentItemPreview"(arg0: $LittleGroup$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleStructureType$Type = ($LittleStructureType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleStructureType_ = $LittleStructureType$Type;
}}
declare module "packages/team/creative/creativecore/common/util/type/map/$ChunkLayerMap" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Tuple, $Tuple$Type} from "packages/team/creative/creativecore/common/util/type/list/$Tuple"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $ChunkLayerMap<T> implements $Iterable<(T)> {

constructor()
constructor(arg0: $Function$Type<($RenderType$Type), (T)>)
constructor(arg0: $ChunkLayerMap$Type<(T)>)

public "remove"(arg0: $RenderType$Type): T
public "get"(arg0: $RenderType$Type): T
public "put"(arg0: $RenderType$Type, arg1: T): T
public "toString"(): string
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<(T)>
public "containsKey"(arg0: $RenderType$Type): boolean
public "tuples"(): $Iterable<($Tuple<($RenderType), (T)>)>
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<T>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLayerMap$Type<T> = ($ChunkLayerMap<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLayerMap_<T> = $ChunkLayerMap$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/mixin/client/network/$ClientPacketListenerAccessor" {
import {$ClientboundLightUpdatePacketData, $ClientboundLightUpdatePacketData$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundLightUpdatePacketData"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ClientPacketListenerAccessor {

 "getRandom"(): $RandomSource
 "callApplyLightData"(arg0: integer, arg1: integer, arg2: $ClientboundLightUpdatePacketData$Type): void
 "callPostAddEntitySoundInstance"(arg0: $Entity$Type): void
}

export namespace $ClientPacketListenerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPacketListenerAccessor$Type = ($ClientPacketListenerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientPacketListenerAccessor_ = $ClientPacketListenerAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/connection/children/$ItemChildrenList" {
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$ChildrenList, $ChildrenList$Type} from "packages/team/creative/littletiles/common/structure/connection/children/$ChildrenList"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ItemChildrenList extends $ChildrenList<($LittleGroup)> {

constructor(arg0: $LittleGroup$Type, arg1: $List$Type<($LittleGroup$Type)>)

public "getChild"(arg0: integer): $LittleGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemChildrenList$Type = ($ItemChildrenList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemChildrenList_ = $ItemChildrenList$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/mode/$PlacementMode$PreviewMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlacementMode$PreviewMode extends $Enum<($PlacementMode$PreviewMode)> {
static readonly "LINES": $PlacementMode$PreviewMode
static readonly "PREVIEWS": $PlacementMode$PreviewMode


public static "values"(): ($PlacementMode$PreviewMode)[]
public static "valueOf"(arg0: string): $PlacementMode$PreviewMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementMode$PreviewMode$Type = (("previews") | ("lines")) | ($PlacementMode$PreviewMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementMode$PreviewMode_ = $PlacementMode$PreviewMode$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/connection/children/$StructureChildConnection" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ILevelPositionProvider, $ILevelPositionProvider$Type} from "packages/team/creative/littletiles/common/structure/connection/$ILevelPositionProvider"
import {$LittleUpdateCollector, $LittleUpdateCollector$Type} from "packages/team/creative/littletiles/common/level/$LittleUpdateCollector"
import {$LittleEntity, $LittleEntity$Type} from "packages/team/creative/littletiles/common/entity/$LittleEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStructureConnection, $IStructureConnection$Type} from "packages/team/creative/littletiles/common/structure/connection/$IStructureConnection"

export class $StructureChildConnection implements $IStructureConnection {
readonly "parent": $ILevelPositionProvider
readonly "isChild": boolean
readonly "childId": integer
readonly "extension": boolean

constructor(arg0: $ILevelPositionProvider$Type, arg1: boolean, arg2: boolean, arg3: integer, arg4: $BlockPos$Type, arg5: integer, arg6: integer)
constructor(arg0: $ILevelPositionProvider$Type, arg1: boolean, arg2: $CompoundTag$Type)

public "getChildId"(): integer
public "destroyStructure"(arg0: $LittleUpdateCollector$Type): void
public "getStructurePosition"(): $BlockPos
public static "load"(arg0: $ILevelPositionProvider$Type, arg1: $CompoundTag$Type, arg2: boolean): $StructureChildConnection
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "getIndex"(): integer
public "getAttribute"(): integer
public "clearCache"(): void
public "getAnimation"(): $LittleEntity<(any)>
public "isChild"(): boolean
public "getStructure"(): $LittleStructure
public "destroyStructureSameLevel"(arg0: $LittleUpdateCollector$Type): void
public "checkConnection"(): void
public "isLinkToAnotherWorld"(): boolean
get "childId"(): integer
get "structurePosition"(): $BlockPos
get "index"(): integer
get "attribute"(): integer
get "animation"(): $LittleEntity<(any)>
get "child"(): boolean
get "structure"(): $LittleStructure
get "linkToAnotherWorld"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureChildConnection$Type = ($StructureChildConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureChildConnection_ = $StructureChildConnection$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$VoxelShapeAccessor" {
import {$DiscreteVoxelShape, $DiscreteVoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"

export interface $VoxelShapeAccessor {

 "setShape"(arg0: $DiscreteVoxelShape$Type): void

(arg0: $DiscreteVoxelShape$Type): void
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccessor$Type = ($VoxelShapeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeAccessor_ = $VoxelShapeAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/$LittleTileContext" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LittleTileContext {
static readonly "FAILED": $LittleTileContext
readonly "parent": $IParentCollection
readonly "tile": $LittleTile
readonly "box": $LittleBox

constructor(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleBox$Type)

public "isComplete"(): boolean
public static "selectFocused"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: float): $LittleTileContext
public static "selectFocused"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Player$Type): $LittleTileContext
get "complete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleTileContext$Type = ($LittleTileContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleTileContext_ = $LittleTileContext$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/flow/$GuiFlowFitX" {
import {$GuiStackY, $GuiStackY$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiStackY"
import {$GuiStackX, $GuiStackX$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiStackX"
import {$VAlign, $VAlign$Type} from "packages/team/creative/creativecore/common/gui/$VAlign"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Align, $Align$Type} from "packages/team/creative/creativecore/common/gui/$Align"

export class $GuiFlowFitX extends $GuiStackX {
static readonly "STACK_X": $GuiStackX
static readonly "FIT_X": $GuiFlowFitX
static readonly "STACK_Y": $GuiStackY

constructor()

public "flowX"(arg0: $List$Type<(any)>, arg1: integer, arg2: $Align$Type, arg3: integer, arg4: integer, arg5: boolean): void
public "flowY"(arg0: $List$Type<(any)>, arg1: integer, arg2: $VAlign$Type, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "minHeight"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer, arg3: integer): integer
public "preferredHeight"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer, arg3: integer): integer
public "minWidth"(arg0: $List$Type<(any)>, arg1: integer, arg2: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiFlowFitX$Type = ($GuiFlowFitX);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiFlowFitX_ = $GuiFlowFitX$Type;
}}
declare module "packages/team/creative/solonion/common/item/$FoodBookItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FoodBookItem extends $Item {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodBookItem$Type = ($FoodBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodBookItem_ = $FoodBookItem$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/mark/$IMarkMode" {
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"

export interface $IMarkMode {

 "move"(arg0: $LittleGrid$Type, arg1: $Facing$Type): void
 "done"(): void
 "getPosition"(): $PlacementPosition
 "render"(arg0: $LittleGrid$Type, arg1: $PoseStack$Type): void
 "allowLowResolution"(): boolean
 "getConfigurationGui"(): $GuiConfigure
}

export namespace $IMarkMode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMarkMode$Type = ($IMarkMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMarkMode_ = $IMarkMode$Type;
}}
declare module "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ContainerSlotView {
static readonly "EMPTY": $ContainerSlotView
readonly "player": $Player
readonly "container": $Container
readonly "index": integer

constructor(arg0: $Player$Type, arg1: $Container$Type, arg2: integer)

public "get"(): $ItemStack
public "set"(arg0: $ItemStack$Type): void
public "changed"(): void
public static "mainHand"(arg0: $Player$Type): $ContainerSlotView
public static "offHand"(arg0: $Player$Type): $ContainerSlotView
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerSlotView$Type = ($ContainerSlotView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerSlotView_ = $ContainerSlotView$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/selection/$SelectionMode$SelectionResult" {
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SelectionMode$SelectionResult {
readonly "level": $Level
 "min": $BlockPos$MutableBlockPos
 "max": $BlockPos$MutableBlockPos
 "blocks": integer
 "ltBlocks": integer
 "ltTiles": integer
 "minLtGrid": $LittleGrid
 "cbBlocks": integer
 "cbTiles": integer
 "minCBGrid": $LittleGrid

constructor(arg0: $Level$Type)

public "getSize"(): $Vec3i
public "addBlock"(arg0: $BlockPos$Type): void
public "addBlocks"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
get "size"(): $Vec3i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectionMode$SelectionResult$Type = ($SelectionMode$SelectionResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectionMode$SelectionResult_ = $SelectionMode$SelectionResult$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/geo/$Ray3f" {
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"

export class $Ray3f {
readonly "origin": $Vec3f
readonly "direction": $Vec3f

constructor(arg0: $Vec3f$Type, arg1: $Vec3f$Type)
constructor(arg0: $Vec3f$Type, arg1: $Facing$Type)

public "get"(arg0: float): $Vec3f
public "set"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "getT"(arg0: $Axis$Type, arg1: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ray3f$Type = ($Ray3f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ray3f_ = $Ray3f$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/geo/$Ray3d" {
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"

export class $Ray3d {
readonly "origin": $Vec3d
readonly "direction": $Vec3d

constructor(arg0: $Vec3d$Type, arg1: $Facing$Type)
constructor(arg0: $Vec3d$Type, arg1: $Vec3d$Type, arg2: boolean)
constructor(arg0: $Vec3d$Type, arg1: $Vec3d$Type)

public "get"(arg0: float): $Vector3d
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
public "getT"(arg0: $Axis$Type, arg1: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ray3d$Type = ($Ray3d);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ray3d_ = $Ray3d$Type;
}}
declare module "packages/team/creative/littletiles/mixin/server/level/$MinecraftServerAccessor" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$Type} from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"

export interface $MinecraftServerAccessor {

 "getStorageSource"(): $LevelStorageSource$LevelStorageAccess
 "callHaveTime"(): boolean
}

export namespace $MinecraftServerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerAccessor$Type = ($MinecraftServerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerAccessor_ = $MinecraftServerAccessor$Type;
}}
declare module "packages/team/creative/littletiles/api/common/block/$ILittleBlockEntity" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $ILittleBlockEntity {

 "getState"(arg0: $AABB$Type, arg1: boolean): $BlockState

(arg0: $AABB$Type, arg1: boolean): $BlockState
}

export namespace $ILittleBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILittleBlockEntity$Type = ($ILittleBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILittleBlockEntity_ = $ILittleBlockEntity$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/vec/$RangedBitSet" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$RangedBitSet$BitRange, $RangedBitSet$BitRange$Type} from "packages/team/creative/creativecore/common/util/math/vec/$RangedBitSet$BitRange"

export class $RangedBitSet {

constructor(arg0: integer, arg1: integer)

public "add"(arg0: integer): void
public "getMax"(): integer
public "getMin"(): integer
public "getRanges"(): $List<($RangedBitSet$BitRange)>
get "max"(): integer
get "min"(): integer
get "ranges"(): $List<($RangedBitSet$BitRange)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangedBitSet$Type = ($RangedBitSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangedBitSet_ = $RangedBitSet$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/event/$GuiControlEvent" {
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$GuiEvent, $GuiEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiEvent"

export class $GuiControlEvent<T extends $GuiControl> extends $GuiEvent {
readonly "control": T

constructor(arg0: T)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiControlEvent$Type<T> = ($GuiControlEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiControlEvent_<T> = $GuiControlEvent$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/client/render/cache/$BlockBufferCache" {
import {$LayeredBufferCache, $LayeredBufferCache$Type} from "packages/team/creative/littletiles/client/render/cache/$LayeredBufferCache"
import {$ChunkLayerMap, $ChunkLayerMap$Type} from "packages/team/creative/creativecore/common/util/type/map/$ChunkLayerMap"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$BufferCache, $BufferCache$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCache"

export class $BlockBufferCache {

constructor()

public "setUploaded"(arg0: $RenderType$Type, arg1: $BufferCache$Type): void
public "get"(arg0: $RenderType$Type): $BufferCache
public "extract"(arg0: $RenderType$Type, arg1: integer): $BufferCache
public static "combine"(arg0: $BufferCache$Type, arg1: $BufferCache$Type): $BufferCache
public "has"(arg0: $RenderType$Type): boolean
public "additional"(arg0: $RenderType$Type, arg1: $BufferCache$Type): void
public "additional"(arg0: $LayeredBufferCache$Type): void
public "setEmpty"(): void
public "hasAdditional"(): boolean
public "setBuffers"(arg0: $ChunkLayerMap$Type<($BufferCache$Type)>): void
public "hasInvalidBuffers"(): boolean
set "buffers"(value: $ChunkLayerMap$Type<($BufferCache$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBufferCache$Type = ($BlockBufferCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBufferCache_ = $BlockBufferCache$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemLittleHammer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BiFilter, $BiFilter$Type} from "packages/team/creative/creativecore/common/util/filter/$BiFilter"
import {$ItemGuiCreator, $ItemGuiCreator$Type} from "packages/team/creative/creativecore/common/gui/creator/$ItemGuiCreator"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ILittleEditor, $ILittleEditor$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittleEditor"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IItemTooltip, $IItemTooltip$Type} from "packages/team/creative/littletiles/common/item/tooltip/$IItemTooltip"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$LittleShape, $LittleShape$Type} from "packages/team/creative/littletiles/common/placement/shape/$LittleShape"
import {$ShapeSelection, $ShapeSelection$Type} from "packages/team/creative/littletiles/common/placement/shape/$ShapeSelection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LittleBoxes, $LittleBoxes$Type} from "packages/team/creative/littletiles/common/math/box/collection/$LittleBoxes"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLittleHammer extends $Item implements $ILittleEditor, $IItemTooltip, $ItemGuiCreator {
static "selection": $ShapeSelection
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

public "create"(arg0: $CompoundTag$Type, arg1: $Player$Type): $GuiLayer
public "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
public static "getFilter"(): $BiFilter<($IParentCollection), ($LittleTile)>
public static "getShape"(arg0: $ItemStack$Type): $LittleShape
public static "isFiltered"(): boolean
public "getBoxes"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): $LittleBoxes
public static "setFilter"(arg0: boolean, arg1: $BiFilter$Type<($IParentCollection$Type), ($LittleTile$Type)>): void
public "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
public "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "tooltipData"(arg0: $ItemStack$Type): (any)[]
public "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
public "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
public "hasCustomBoxes"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $BlockState$Type, arg4: $PlacementPosition$Type, arg5: $BlockHitResult$Type): boolean
public "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
public "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
public "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
public "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "sendTransformationUpdate"(): boolean
public "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
get "filter"(): $BiFilter<($IParentCollection), ($LittleTile)>
get "filtered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLittleHammer$Type = ($ItemLittleHammer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLittleHammer_ = $ItemLittleHammer$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/event/$GuiControlClickEvent" {
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$GuiControlEvent, $GuiControlEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiControlEvent"

export class $GuiControlClickEvent extends $GuiControlEvent<(any)> {
readonly "button": integer
readonly "doubleClick": boolean
readonly "control": T

constructor(arg0: $GuiControl$Type, arg1: integer, arg2: boolean)

public "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiControlClickEvent$Type = ($GuiControlClickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiControlClickEvent_ = $GuiControlClickEvent$Type;
}}
declare module "packages/team/creative/littletiles/api/common/block/$LittlePhysicBlock" {
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LittleLevel, $LittleLevel$Type} from "packages/team/creative/littletiles/common/level/little/$LittleLevel"

export interface $LittlePhysicBlock {

 "bound"(arg0: $LittleLevel$Type, arg1: $BlockPos$Type, arg2: $Facing$Type): double
 "weight"(arg0: $LittleLevel$Type, arg1: $BlockPos$Type): float

(arg0: $LittleLevel$Type, arg1: $BlockPos$Type, arg2: $Facing$Type): double
}

export namespace $LittlePhysicBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittlePhysicBlock$Type = ($LittlePhysicBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittlePhysicBlock_ = $LittlePhysicBlock$Type;
}}
declare module "packages/team/creative/littletiles/common/level/$LittleUpdateCollector" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$NeighborUpdateCollector, $NeighborUpdateCollector$Type} from "packages/team/creative/creativecore/common/level/$NeighborUpdateCollector"

export class $LittleUpdateCollector extends $NeighborUpdateCollector {

constructor(arg0: $Level$Type, arg1: $Collection$Type<($BlockPos$Type)>)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleUpdateCollector$Type = ($LittleUpdateCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleUpdateCollector_ = $LittleUpdateCollector$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/$Placement$PlacementStructurePreview" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$StructureParentCollection, $StructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$StructureParentCollection"
import {$Placement, $Placement$Type} from "packages/team/creative/littletiles/common/placement/$Placement"

export class $Placement$PlacementStructurePreview {
readonly "previews": $LittleGroup
readonly "parent": $Placement$PlacementStructurePreview
readonly "index": integer
readonly "extension": string

constructor(arg0: $Placement$Type, arg1: $Placement$PlacementStructurePreview$Type, arg2: $LittleGroup$Type, arg3: string)

public "isStructure"(): boolean
public "getIndex"(): integer
public "getAttribute"(): integer
public "place"(arg0: $StructureParentCollection$Type): void
public "place"(): void
public "getStructure"(): $LittleStructure
public "addChild"(arg0: $Placement$PlacementStructurePreview$Type): void
public "addExtension"(arg0: string, arg1: $Placement$PlacementStructurePreview$Type): void
public "isPlaced"(): boolean
get "structure"(): boolean
get "index"(): integer
get "attribute"(): integer
get "structure"(): $LittleStructure
get "placed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Placement$PlacementStructurePreview$Type = ($Placement$PlacementStructurePreview);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Placement$PlacementStructurePreview_ = $Placement$PlacementStructurePreview$Type;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$GlBufferSegmentAccessor" {
import {$GlBufferArena, $GlBufferArena$Type} from "packages/me/jellysquid/mods/sodium/client/gl/arena/$GlBufferArena"

export interface $GlBufferSegmentAccessor {

 "getArena"(): $GlBufferArena

(): $GlBufferArena
}

export namespace $GlBufferSegmentAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlBufferSegmentAccessor$Type = ($GlBufferSegmentAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlBufferSegmentAccessor_ = $GlBufferSegmentAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/math/vec/$SplitRangeBoxes" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RangedBitSet, $RangedBitSet$Type} from "packages/team/creative/creativecore/common/util/math/vec/$RangedBitSet"
import {$SplitRangeBoxes$SplitRangeBox, $SplitRangeBoxes$SplitRangeBox$Type} from "packages/team/creative/littletiles/common/math/vec/$SplitRangeBoxes$SplitRangeBox"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $SplitRangeBoxes implements $Iterable<($SplitRangeBoxes$SplitRangeBox)> {

constructor(arg0: $RangedBitSet$Type, arg1: $RangedBitSet$Type, arg2: $RangedBitSet$Type)

public "iterator"(): $Iterator<($SplitRangeBoxes$SplitRangeBox)>
public "spliterator"(): $Spliterator<($SplitRangeBoxes$SplitRangeBox)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$SplitRangeBoxes$SplitRangeBox>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplitRangeBoxes$Type = ($SplitRangeBoxes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SplitRangeBoxes_ = $SplitRangeBoxes$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$VanillaPackResourcesAccessor" {
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $VanillaPackResourcesAccessor {

 "getPathsForType"(): $Map<($PackType), ($List<($Path)>)>

(): $Map<($PackType), ($List<($Path)>)>
}

export namespace $VanillaPackResourcesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaPackResourcesAccessor$Type = ($VanillaPackResourcesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaPackResourcesAccessor_ = $VanillaPackResourcesAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/math/vec/$LittleVec" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LittleVec {
static readonly "ZERO": $LittleVec
 "x": integer
 "y": integer
 "z": integer

constructor(arg0: string, arg1: $CompoundTag$Type)
constructor(arg0: $LittleGrid$Type, arg1: $Vec3i$Type)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $LittleGrid$Type, arg1: $BlockHitResult$Type)
constructor(arg0: $LittleGrid$Type, arg1: $Vec3$Type, arg2: $Facing$Type)
constructor(arg0: $LittleGrid$Type, arg1: $Vec3$Type)
constructor(arg0: $Facing$Type)
constructor(arg0: $LittleGrid$Type, arg1: $Vector3d$Type)
constructor(arg0: $LittleGrid$Type, arg1: $Vec3d$Type)

public "getSmallest"(arg0: $LittleGrid$Type): integer
public "getVector"(arg0: $LittleGrid$Type): $Vec3
public "calculateCenter"(): $LittleVec
public "getLongestAxis"(): $Axis
public "distanceToSqr"(arg0: $LittleVec$Type): double
public "add"(arg0: $Facing$Type): void
public "add"(arg0: $LittleVec$Type): void
public "add"(arg0: $BlockPos$Type, arg1: $LittleGrid$Type): void
public "get"(arg0: $Axis$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "max"(arg0: $LittleVec$Type): $LittleVec
public "scale"(arg0: integer): void
public "set"(arg0: $Axis$Type, arg1: integer): void
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "set"(arg0: $LittleGrid$Type, arg1: $Vec3i$Type): void
public "save"(arg0: string, arg1: $CompoundTag$Type): void
public "copy"(): $LittleVec
public "flip"(arg0: $Axis$Type): void
public "sub"(arg0: $Facing$Type): void
public "sub"(arg0: $LittleVec$Type): void
public "sub"(arg0: $BlockPos$Type, arg1: $LittleGrid$Type): void
public "getY"(): integer
public "invert"(): void
public "getVec"(arg0: $LittleGrid$Type): $Vec3d
public "setZ"(arg0: integer): void
public "getPosZ"(arg0: $LittleGrid$Type): double
public "getZ"(): integer
public "rotateVec"(arg0: $Rotation$Type): void
public "convertTo"(arg0: $LittleGrid$Type, arg1: $LittleGrid$Type): void
public "getPosY"(arg0: $LittleGrid$Type): double
public "getPosX"(arg0: $LittleGrid$Type): double
public "getVolume"(): integer
public "getX"(): integer
public "setX"(arg0: integer): void
public "setY"(arg0: integer): void
public "getBlockPos"(arg0: $LittleGrid$Type): $BlockPos
public "distanceTo"(arg0: $LittleVec$Type): double
public "getPercentVolume"(arg0: $LittleGrid$Type): double
public "calculateInvertedCenter"(): $LittleVec
get "longestAxis"(): $Axis
get "y"(): integer
set "z"(value: integer)
get "z"(): integer
get "volume"(): integer
get "x"(): integer
set "x"(value: integer)
set "y"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleVec$Type = ($LittleVec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleVec_ = $LittleVec$Type;
}}
declare module "packages/team/creative/littletiles/api/common/tool/$ILittlePlacer" {
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$PlacementMode, $PlacementMode$Type} from "packages/team/creative/littletiles/common/placement/mode/$PlacementMode"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"
import {$ILittleTool, $ILittleTool$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittleTool"

export interface $ILittlePlacer extends $ILittleTool {

 "get"(arg0: $ItemStack$Type, arg1: boolean): $LittleGroup
 "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
 "getLow"(arg0: $ItemStack$Type): $LittleGroup
 "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
 "containsIngredients"(arg0: $ItemStack$Type): boolean
 "getPreviewAlphaFactor"(): float
 "snapToGridByDefault"(arg0: $ItemStack$Type): boolean
 "getTiles"(arg0: $ItemStack$Type): $LittleGroup
 "hasTiles"(arg0: $ItemStack$Type): boolean
 "getPlacement"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: boolean): $PlacementPreview
 "saveTiles"(arg0: $ItemStack$Type, arg1: $LittleGroup$Type): void
 "getPlacementMode"(arg0: $ItemStack$Type): $PlacementMode
 "shouldCache"(): boolean
 "getPositingCubes"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $List<($RenderBox)>
 "canSnapToGrid"(arg0: $ItemStack$Type): boolean
 "getCachedMin"(arg0: $ItemStack$Type): $LittleVec
 "getTilesGrid"(arg0: $ItemStack$Type): $LittleGrid
 "getCachedSize"(arg0: $ItemStack$Type): $LittleVec
 "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
 "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
 "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
 "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
 "sendTransformationUpdate"(): boolean
 "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
 "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
 "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
 "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
 "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
}

export namespace $ILittlePlacer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILittlePlacer$Type = ($ILittlePlacer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILittlePlacer_ = $ILittlePlacer$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/transformation/$Rotation$RotationMatrix" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"

export class $Rotation$RotationMatrix {
 "m00": integer
 "m01": integer
 "m02": integer
 "m10": integer
 "m11": integer
 "m12": integer
 "m20": integer
 "m21": integer
 "m22": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer)
constructor(arg0: $Rotation$RotationMatrix$Type, arg1: $Rotation$RotationMatrix$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "transform"(arg0: $Vector3d$Type): $Vector3d
public "transform"(arg0: $Vec3i$Type): $Vec3i
public "transform"(arg0: $BlockPos$Type): $BlockPos
public "transform"(arg0: $Vec3d$Type): void
public "transform"(arg0: $Vec3f$Type): void
public "getY"(arg0: long, arg1: long, arg2: long): long
public "getY"(arg0: (integer)[]): integer
public "getY"(arg0: $Vec3i$Type): integer
public "getY"(arg0: integer, arg1: integer, arg2: integer): integer
public "getZ"(arg0: long, arg1: long, arg2: long): long
public "getZ"(arg0: integer, arg1: integer, arg2: integer): integer
public "getZ"(arg0: $Vec3i$Type): integer
public "getZ"(arg0: (integer)[]): integer
public "getX"(arg0: (integer)[]): integer
public "getX"(arg0: integer, arg1: integer, arg2: integer): integer
public "getX"(arg0: long, arg1: long, arg2: long): long
public "getX"(arg0: $Vec3i$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotation$RotationMatrix$Type = ($Rotation$RotationMatrix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rotation$RotationMatrix_ = $Rotation$RotationMatrix$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/connection/children/$ChildrenList" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ChildrenList<T> {

constructor(arg0: $List$Type<(T)>)

public "hasParent"(): boolean
public "addExtensions"(arg0: $Map$Type<(string), (T)>): void
public "isEmpty"(): boolean
public "size"(): integer
public "getParent"(): T
public "extensions"(): $Iterable<(T)>
public "hasExtensions"(): boolean
public "getExtension"(arg0: string): T
public "all"(): $Iterable<(T)>
public "children"(): $Iterable<(T)>
public "hasChildren"(): boolean
public "addExtension"(arg0: string, arg1: T): void
public "sizeChildren"(): integer
public "sizeExtensions"(): integer
public "extensionEntries"(): $Iterable<($Map$Entry<(string), (T)>)>
get "empty"(): boolean
get "parent"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChildrenList$Type<T> = ($ChildrenList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChildrenList_<T> = $ChildrenList$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection" {
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ILevelProvider, $ILevelProvider$Type} from "packages/team/creative/littletiles/common/level/$ILevelProvider"

export interface $IParentCollection extends $Iterable<($LittleTile)>, $ILevelProvider {

 "isStructureChildSafe"(arg0: $LittleStructure$Type): boolean
 "getRenderingBox"(arg0: $LittleTile$Type, arg1: $LittleBox$Type, arg2: $RenderType$Type): $LittleRenderBox
 "isStructure"(): boolean
 "size"(): integer
 "getAttribute"(): integer
 "setAttribute"(arg0: integer): void
 "totalSize"(): integer
 "getLevel"(): $Level
 "getStructure"(): $LittleStructure
 "isClient"(): boolean
 "getPos"(): $BlockPos
 "getBE"(): $BETiles
 "getGrid"(): $LittleGrid
 "isMain"(): boolean
 "isStructureChild"(arg0: $LittleStructure$Type): boolean
 "iterator"(): $Iterator<($LittleTile)>
 "spliterator"(): $Spliterator<($LittleTile)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "hasLevel"(): boolean
}

export namespace $IParentCollection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IParentCollection$Type = ($IParentCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IParentCollection_ = $IParentCollection$Type;
}}
declare module "packages/team/creative/littletiles/mixin/common/entity/$PrimedTntAccessor" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $PrimedTntAccessor {

 "getOwner"(): $LivingEntity
 "setOwner"(arg0: $LivingEntity$Type): void
}

export namespace $PrimedTntAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimedTntAccessor$Type = ($PrimedTntAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimedTntAccessor_ = $PrimedTntAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/directional/$StructureDirectionalType" {
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$LittleVecGrid, $LittleVecGrid$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecGrid"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$LittlePlaceBoxRelative, $LittlePlaceBoxRelative$Type} from "packages/team/creative/littletiles/common/placement/box/$LittlePlaceBoxRelative"
import {$StructureDirectionalField, $StructureDirectionalField$Type} from "packages/team/creative/littletiles/common/structure/directional/$StructureDirectionalField"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"

export class $StructureDirectionalType<T> {

constructor()

public "convertToSmallest"(arg0: T): void
public "advancedScale"(arg0: T, arg1: integer, arg2: integer): void
public "getPlaceBox"(arg0: T, arg1: $LittleGroup$Type, arg2: $StructureDirectionalField$Type): $LittlePlaceBoxRelative
public "getDefault"(arg0: $StructureDirectionalField$Type, arg1: $LittleStructure$Type, arg2: any): any
public static "register"(arg0: $Function$Type<($Field$Type), ($StructureDirectionalType$Type)>): void
public static "register"<T>(arg0: $Class$Type<(T)>, arg1: $StructureDirectionalType$Type<(T)>): void
public "write"(arg0: $StructureDirectionalField$Type, arg1: T): $Tag
public "read"(arg0: $StructureDirectionalField$Type, arg1: $LittleStructure$Type, arg2: $Tag$Type): T
public static "getType"(arg0: $Field$Type): $StructureDirectionalType<(any)>
public "rotate"(arg0: $StructureDirectionalField$Type, arg1: T, arg2: $LittleGrid$Type, arg3: $Rotation$Type, arg4: $LittleVec$Type): T
public "move"(arg0: $StructureDirectionalField$Type, arg1: T, arg2: $LittleVecGrid$Type): T
public "mirror"(arg0: $StructureDirectionalField$Type, arg1: T, arg2: $LittleGrid$Type, arg3: $Axis$Type, arg4: $LittleVec$Type): T
public "getGrid"(arg0: $StructureDirectionalField$Type, arg1: T): $LittleGrid
public static "getSubType"(arg0: $Class$Type<(any)>): $StructureDirectionalType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureDirectionalType$Type<T> = ($StructureDirectionalType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureDirectionalType_<T> = $StructureDirectionalType$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/common/math/vec/$LittleVecGrid" {
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $LittleVecGrid implements $IGridBased {

constructor()
constructor(arg0: $LittleVec$Type, arg1: $LittleGrid$Type)
constructor(arg0: string, arg1: $CompoundTag$Type)

public "getSmallest"(): integer
public "getVector"(): $Vec3
public "getVec3d"(): $Vec3d
/**
 * 
 * @deprecated
 */
public "overwriteGrid"(arg0: $LittleGrid$Type): void
public "add"(arg0: $LittleVecGrid$Type): void
public "add"(arg0: $BlockPos$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(): $LittleVecGrid
public "sub"(arg0: $BlockPos$Type): void
public "sub"(arg0: $LittleVecGrid$Type): void
public "invert"(): void
public "writeToNBT"(arg0: string, arg1: $CompoundTag$Type): void
public "getVec"(arg0: $LittleGrid$Type): $LittleVec
public "getVec"(): $LittleVec
public "getPosZ"(): double
public "convertTo"(arg0: $LittleGrid$Type): void
public "getPosY"(): double
public "getPosX"(): double
public "getBlockPos"(): $BlockPos
public "getGrid"(): $LittleGrid
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "smallest"(): integer
get "vector"(): $Vec3
get "vec3d"(): $Vec3d
get "vec"(): $LittleVec
get "posZ"(): double
get "posY"(): double
get "posX"(): double
get "blockPos"(): $BlockPos
get "grid"(): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleVecGrid$Type = ($LittleVecGrid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleVecGrid_ = $LittleVecGrid$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/base/$Axis" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Axis extends $Enum<($Axis)> {
static readonly "X": $Axis
static readonly "Y": $Axis
static readonly "Z": $Axis


public "get"(arg0: $ChunkPos$Type): integer
public "get"(arg0: $Vec3i$Type): integer
public "get"(arg0: integer, arg1: integer, arg2: integer): integer
public "get"(arg0: float, arg1: float, arg2: float): float
public "get"<T>(arg0: T, arg1: T, arg2: T): T
public "get"(arg0: $Vector3f$Type): float
public "get"(arg0: $Vector3d$Type): double
public "get"(arg0: $Vec3$Type): double
public "get"(arg0: double, arg1: double, arg2: double): double
public static "get"(arg0: $Direction$Axis$Type): $Axis
public static "values"(): ($Axis)[]
public static "valueOf"(arg0: string): $Axis
public "set"(arg0: $ChunkPos$Type, arg1: integer): $ChunkPos
public "set"(arg0: $Vec3$Type, arg1: double): $Vec3
public "set"(arg0: $Vector3f$Type, arg1: float): void
public "set"(arg0: $Vector3d$Type, arg1: double): void
public "set"(arg0: $BlockPos$Type, arg1: integer): $BlockPos
public "set"(arg0: $BlockPos$MutableBlockPos$Type, arg1: integer): void
public "set"(arg0: $SectionPos$Type, arg1: integer): $SectionPos
public "set"(arg0: $Vec3i$Type, arg1: integer): $Vec3i
public "one"(): $Axis
public "two"(): $Axis
public "facing"(arg0: boolean): $Facing
public "toVanilla"(): $Direction$Axis
public "mirror"(arg0: $BlockPos$Type): $BlockPos
public "mirror"(arg0: $Vec3d$Type): void
public "mirror"(arg0: $Vec3f$Type): void
public "mirror"(arg0: $Vec3i$Type): $Vec3i
public "mirror"(arg0: $Facing$Type): $Facing
public "mirror"(arg0: $Direction$Type): $Direction
public static "third"(arg0: $Axis$Type, arg1: $Axis$Type): $Axis
public static "getMirrorAxis"(arg0: $Mirror$Type): $Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Axis$Type = (("x") | ("y") | ("z")) | ($Axis);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Axis_ = $Axis$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/$PlacementContext" {
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$ParentCollection, $ParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$ParentCollection"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$Placement$PlacementBlock, $Placement$PlacementBlock$Type} from "packages/team/creative/littletiles/common/placement/$Placement$PlacementBlock"
import {$PlacementResult, $PlacementResult$Type} from "packages/team/creative/littletiles/common/placement/$PlacementResult"
import {$Placement, $Placement$Type} from "packages/team/creative/littletiles/common/placement/$Placement"

export class $PlacementContext {
readonly "placement": $Placement
readonly "block": $Placement$PlacementBlock
readonly "result": $PlacementResult
readonly "collisionTest": boolean

constructor(arg0: $Placement$Type, arg1: $Placement$PlacementBlock$Type, arg2: $PlacementResult$Type, arg3: boolean)

public "placeTile"(arg0: $LittleTile$Type): void
public "isSpaceFor"(arg0: $LittleBox$Type): boolean
public "getParent"(): $ParentCollection
public "setParent"(arg0: $ParentCollection$Type): void
public "getBE"(): $BETiles
public "addUnplaceable"(arg0: $LittleElement$Type, arg1: $LittleBox$Type): void
public "addRemoved"(arg0: $LittleTile$Type): void
public "removeTile"(arg0: $LittleTile$Type): boolean
get "parent"(): $ParentCollection
set "parent"(value: $ParentCollection$Type)
get "bE"(): $BETiles
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementContext$Type = ($PlacementContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementContext_ = $PlacementContext$Type;
}}
declare module "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipelineType" {
import {$RenderChunkExtender, $RenderChunkExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$RenderChunkExtender"
import {$LittleRenderPipeline, $LittleRenderPipeline$Type} from "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipeline"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RebuildTaskExtender, $RebuildTaskExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$RebuildTaskExtender"
import {$LittleRenderPipelineType$LittleRenderPipelineTypeForge, $LittleRenderPipelineType$LittleRenderPipelineTypeForge$Type} from "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipelineType$LittleRenderPipelineTypeForge"

export class $LittleRenderPipelineType<T extends $LittleRenderPipeline> {
static readonly "FORGE": $LittleRenderPipelineType$LittleRenderPipelineTypeForge
readonly "factory": $Supplier<(T)>
readonly "id": integer


public static "startCompile"(arg0: $RenderChunkExtender$Type, arg1: $RebuildTaskExtender$Type): void
public static "endCompile"(arg0: $RenderChunkExtender$Type, arg1: $RebuildTaskExtender$Type): void
public static "get"(arg0: integer): $LittleRenderPipelineType<(any)>
public static "compile"(arg0: $RenderChunkExtender$Type, arg1: $BETiles$Type, arg2: $RebuildTaskExtender$Type): void
public static "typeCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleRenderPipelineType$Type<T> = ($LittleRenderPipelineType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleRenderPipelineType_<T> = $LittleRenderPipelineType$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/common/structure/directional/$StructureDirectional" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $StructureDirectional extends $Annotation {

 "saveKey"(): string
 "color"(): integer
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $StructureDirectional {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureDirectional$Type = ($StructureDirectional);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureDirectional_ = $StructureDirectional$Type;
}}
declare module "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox" {
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$AlignedBox, $AlignedBox$Type} from "packages/team/creative/creativecore/common/util/math/box/$AlignedBox"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"

export class $LittleRenderBox extends $RenderBox {
 "box": $LittleBox
 "state": $BlockState
 "color": integer
 "keepVU": boolean
 "allowOverlap": boolean
 "doesNeedQuadUpdate": boolean
 "needsResorting": boolean
 "emissive": boolean
 "customData": any
 "minX": float
 "minY": float
 "minZ": float
 "maxX": float
 "maxY": float
 "maxZ": float

constructor(arg0: $LittleGrid$Type, arg1: $LittleBox$Type, arg2: $LittleElement$Type)
constructor(arg0: $LittleGrid$Type, arg1: $LittleBox$Type, arg2: $BlockState$Type)
constructor(arg0: $LittleGrid$Type, arg1: $LittleBox$Type)
constructor(arg0: $AlignedBox$Type, arg1: $BlockState$Type)
constructor(arg0: $AlignedBox$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleRenderBox$Type = ($LittleRenderBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleRenderBox_ = $LittleRenderBox$Type;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$SodiumWorldRendererAccessor" {
import {$RenderSectionManager, $RenderSectionManager$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/$RenderSectionManager"

export interface $SodiumWorldRendererAccessor {

 "getRenderSectionManager"(): $RenderSectionManager

(): $RenderSectionManager
}

export namespace $SodiumWorldRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumWorldRendererAccessor$Type = ($SodiumWorldRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumWorldRendererAccessor_ = $SodiumWorldRendererAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/output/$SignalOutputHandler" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SignalMode, $SignalMode$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalMode"
import {$ISignalComponent, $ISignalComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalComponent"
import {$SignalState, $SignalState$Type} from "packages/team/creative/littletiles/common/structure/signal/$SignalState"

export class $SignalOutputHandler {
readonly "component": $ISignalComponent
readonly "delay": integer
 "lastReacted": $SignalState

constructor(arg0: $ISignalComponent$Type, arg1: integer, arg2: $CompoundTag$Type)

public "isStillAvailable"(): boolean
public "toString"(): string
public "write"(arg0: boolean, arg1: $CompoundTag$Type): void
public "queue"(arg0: $SignalState$Type): void
public static "create"(arg0: $ISignalComponent$Type, arg1: $SignalMode$Type, arg2: integer, arg3: $CompoundTag$Type, arg4: $LittleStructure$Type): $SignalOutputHandler
public "getMode"(): $SignalMode
public "getBandwidth"(): integer
public "schedule"(arg0: $SignalState$Type): void
public "performStateChange"(arg0: $SignalState$Type): void
get "stillAvailable"(): boolean
get "mode"(): $SignalMode
get "bandwidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalOutputHandler$Type = ($SignalOutputHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalOutputHandler_ = $SignalOutputHandler$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/input/$InternalSignalInput" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleStructureType$InternalComponent, $LittleStructureType$InternalComponent$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponent"
import {$SignalComponentType, $SignalComponentType$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$SignalComponentType"
import {$InternalSignal, $InternalSignal$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$InternalSignal"

export class $InternalSignalInput extends $InternalSignal<($LittleStructureType$InternalComponent)> {
readonly "parent": $LittleStructure
readonly "component": T

constructor(arg0: $LittleStructure$Type, arg1: $LittleStructureType$InternalComponent$Type)

public "load"(arg0: $CompoundTag$Type): void
public "getComponentType"(): $SignalComponentType
public "save"(arg0: boolean, arg1: $CompoundTag$Type): $CompoundTag
public "changed"(): void
get "componentType"(): $SignalComponentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalSignalInput$Type = ($InternalSignalInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InternalSignalInput_ = $InternalSignalInput$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/style/$ControlFormatting" {
import {$ControlFormatting$ControlStyleFace, $ControlFormatting$ControlStyleFace$Type} from "packages/team/creative/creativecore/common/gui/style/$ControlFormatting$ControlStyleFace"
import {$ControlFormatting$ControlStyleBorder, $ControlFormatting$ControlStyleBorder$Type} from "packages/team/creative/creativecore/common/gui/style/$ControlFormatting$ControlStyleBorder"

export class $ControlFormatting {
static readonly "PROGRESSBAR": $ControlFormatting
static readonly "CLICKABLE": $ControlFormatting
static readonly "CLICKABLE_SMALL_PADDING": $ControlFormatting
static readonly "CLICKABLE_NO_PADDING": $ControlFormatting
static readonly "CLICKABLE_INACTIVE": $ControlFormatting
static readonly "CLICKABLE_INACTIVE_SMALL_PADDING": $ControlFormatting
static readonly "CLICKABLE_INACTIVE_NO_PADDING": $ControlFormatting
static readonly "HEADER": $ControlFormatting
static readonly "NESTED": $ControlFormatting
static readonly "NESTED_NO_PADDING": $ControlFormatting
static readonly "GUI": $ControlFormatting
static readonly "TRANSPARENT": $ControlFormatting
static readonly "TRANSPARENT_NO_DISABLE": $ControlFormatting
static readonly "SLOT": $ControlFormatting
static readonly "OUTLINE": $ControlFormatting
readonly "border": $ControlFormatting$ControlStyleBorder
readonly "padding": integer
readonly "face": $ControlFormatting$ControlStyleFace
readonly "hasDisabledEffect": boolean

constructor(arg0: $ControlFormatting$ControlStyleBorder$Type, arg1: integer, arg2: $ControlFormatting$ControlStyleFace$Type)
constructor(arg0: $ControlFormatting$ControlStyleBorder$Type, arg1: integer, arg2: $ControlFormatting$ControlStyleFace$Type, arg3: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlFormatting$Type = ($ControlFormatting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlFormatting_ = $ControlFormatting$Type;
}}
declare module "packages/team/creative/creativecore/common/util/filter/$BiFilterSerializer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BiFilter, $BiFilter$Type} from "packages/team/creative/creativecore/common/util/filter/$BiFilter"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CompoundSerializer, $CompoundSerializer$Type} from "packages/team/creative/creativecore/common/util/$CompoundSerializer"

export class $BiFilterSerializer {

constructor()

public "register"<V extends ($BiFilter<(any), (any)>) & ($CompoundSerializer)>(arg0: string, arg1: $Class$Type<(V)>): $BiFilterSerializer
public "write"(arg0: $BiFilter$Type<(any), (any)>): $CompoundTag
public "read"(arg0: $CompoundTag$Type): $BiFilter<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiFilterSerializer$Type = ($BiFilterSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiFilterSerializer_ = $BiFilterSerializer$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/$LittleTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LittleCollection, $LittleCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/collection/$LittleCollection"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$ILittleFace, $ILittleFace$Type} from "packages/team/creative/littletiles/common/math/face/$ILittleFace"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleBoxReturnedVolume, $LittleBoxReturnedVolume$Type} from "packages/team/creative/littletiles/common/math/box/volume/$LittleBoxReturnedVolume"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$BlockIngredientEntry, $BlockIngredientEntry$Type} from "packages/team/creative/littletiles/common/ingredient/$BlockIngredientEntry"
import {$HashMapList, $HashMapList$Type} from "packages/team/creative/creativecore/common/util/type/map/$HashMapList"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ABB, $ABB$Type} from "packages/team/creative/creativecore/common/util/math/box/$ABB"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$LittleBlock, $LittleBlock$Type} from "packages/team/creative/littletiles/api/common/block/$LittleBlock"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"

export class $LittleTile extends $LittleElement implements $Iterable<($LittleBox)> {
 "color": integer

constructor(arg0: $LittleElement$Type, arg1: $Iterable$Type<($LittleBox$Type)>)
constructor(arg0: string, arg1: integer, arg2: $List$Type<($LittleBox$Type)>)
constructor(arg0: $BlockState$Type, arg1: integer, arg2: $List$Type<($LittleBox$Type)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: $BlockState$Type, arg1: $LittleBlock$Type, arg2: integer, arg3: $List$Type<($LittleBox$Type)>)
constructor(arg0: $BlockState$Type, arg1: integer, arg2: $Iterable$Type<($LittleBox$Type)>)
constructor(arg0: $LittleElement$Type, arg1: $LittleBox$Type)
constructor(arg0: $BlockState$Type, arg1: integer, arg2: $LittleBox$Type)

public "combineBlockwise"(arg0: $LittleGrid$Type): void
public "getSmallest"(arg0: $LittleGrid$Type): integer
public "addPlaceBoxes"(arg0: $LittleGrid$Type, arg1: $List$Type<($RenderBox$Type)>, arg2: $LittleVec$Type): void
public "addRenderingBoxes"(arg0: $LittleGrid$Type, arg1: $List$Type<($RenderBox$Type)>): void
public "fillFace"(arg0: $IParentCollection$Type, arg1: $ILittleFace$Type, arg2: $LittleGrid$Type): void
public "fillInSpace"(arg0: $LittleBox$Type, arg1: (((boolean)[])[])[]): boolean
public "fillInSpace"(arg0: (((boolean)[])[])[]): boolean
public "copyEmpty"(): $LittleTile
public "getBlockIngredient"(arg0: $LittleGrid$Type): $BlockIngredientEntry
public "add"(arg0: $Iterable$Type<($LittleBox$Type)>): void
public "add"(arg0: $LittleBox$Type): void
public "remove"(arg0: $LittleCollection$Type, arg1: $LittleBox$Type): boolean
public "remove"(arg0: $LittleCollection$Type, arg1: $Iterable$Type<($LittleBox$Type)>): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "size"(): integer
public "split"(arg0: $HashMapList$Type<($BlockPos$Type), ($LittleBox$Type)>, arg1: $BlockPos$Type, arg2: $LittleGrid$Type, arg3: $LittleVec$Type, arg4: $LittleBoxReturnedVolume$Type): void
public "iterator"(): $Iterator<($LittleBox)>
public "contains"(arg0: $LittleBox$Type): boolean
public "combine"(): boolean
/**
 * 
 * @deprecated
 */
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "copy"(): $LittleTile
public "copy"(arg0: $List$Type<($LittleBox$Type)>): $LittleTile
public "rotate"(arg0: $Rotation$Type, arg1: $LittleVec$Type): void
public "move"(arg0: $LittleVec$Type): void
public "use"(arg0: $IParentCollection$Type, arg1: $LittleBox$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: $InteractionHand$Type): $InteractionResult
public "cutOut"(arg0: $LittleGrid$Type, arg1: $LittleBox$Type, arg2: $LittleBoxReturnedVolume$Type): void
public "cutOut"(arg0: $LittleGrid$Type, arg1: $List$Type<($LittleBox$Type)>, arg2: $List$Type<($LittleBox$Type)>, arg3: $LittleBoxReturnedVolume$Type): void
public "mirror"(arg0: $Axis$Type, arg1: $LittleVec$Type): void
public "noCollision"(): boolean
public "intersectsWith"(arg0: $LittleBox$Type): boolean
public "intersectsWith"(arg0: $AABB$Type, arg1: $IParentCollection$Type): boolean
public "getFogColor"(arg0: $IParentCollection$Type, arg1: $Entity$Type, arg2: $Vector3d$Type, arg3: float): $Vector3d
public "canInteract"(): boolean
public "isTranslucent"(): boolean
public "convertTo"(arg0: $LittleGrid$Type, arg1: $LittleGrid$Type): void
public "getExplosionResistance"(): float
public "getEnchantPowerBonus"(arg0: $IParentCollection$Type): float
public "rayTrace"(arg0: $LittleGrid$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type, arg3: $Vec3$Type): $BlockHitResult
public "getVolume"(): integer
public "canBeRenderCombined"(arg0: $LittleTile$Type): boolean
public "canBeConvertedToVanilla"(): boolean
public "getFriction"(arg0: $IParentCollection$Type, arg1: $Entity$Type): float
public "getSound"(): $SoundType
public "getLightValue"(): integer
public "canRenderInLayer"(arg0: $RenderType$Type): boolean
public "isFluid"(arg0: $TagKey$Type<($Fluid$Type)>): boolean
public "entityCollided"(arg0: $IParentCollection$Type, arg1: $Entity$Type): void
public "getPercentVolume"(arg0: $LittleGrid$Type): double
public "randomDisplayTick"(arg0: $IParentCollection$Type, arg1: $RandomSource$Type): void
public "cullOverEdge"(): boolean
public "collectBoxes"(arg0: $IParentCollection$Type, arg1: $List$Type<($ABB$Type)>): void
public "onTileExplodes"(arg0: $IParentCollection$Type, arg1: $Explosion$Type): void
public "doesFillEntireBlock"(arg0: $LittleGrid$Type): boolean
public "fillInSpaceInaccurate"(arg0: $LittleBox$Type, arg1: $Axis$Type, arg2: $Axis$Type, arg3: $Axis$Type, arg4: ((boolean)[])[]): boolean
public "fillInSpaceInaccurate"(arg0: $LittleBox$Type, arg1: (((boolean)[])[])[]): boolean
public "getIntersectingBoxes"(arg0: $LittleBox$Type, arg1: $List$Type<($LittleBox$Type)>): void
public "doesProvideSolidFace"(): boolean
public "spliterator"(): $Spliterator<($LittleBox)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$LittleBox>;
get "empty"(): boolean
get "translucent"(): boolean
get "explosionResistance"(): float
get "volume"(): integer
get "sound"(): $SoundType
get "lightValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleTile$Type = ($LittleTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleTile_ = $LittleTile$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/sync/$GuiSync" {
import {$IGuiIntegratedParent, $IGuiIntegratedParent$Type} from "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$GuiSyncHolder, $GuiSyncHolder$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder"

export class $GuiSync<T extends $Tag> {
readonly "holder": $GuiSyncHolder
readonly "name": string


public "receive"(arg0: $IGuiIntegratedParent$Type, arg1: T): void
public "syncPath"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSync$Type<T> = ($GuiSync<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSync_<T> = $GuiSync$Type<(T)>;
}}
declare module "packages/team/creative/creativecore/common/util/type/list/$SingletonList" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractList, $AbstractList$Type} from "packages/java/util/$AbstractList"
import {$RandomAccess, $RandomAccess$Type} from "packages/java/util/$RandomAccess"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $SingletonList<E> extends $AbstractList<(E)> implements $RandomAccess, $Serializable {

constructor(arg0: E)

public "get"(arg0: integer): E
public "replaceAll"(arg0: $UnaryOperator$Type<(E)>): void
public "size"(): integer
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "sort"(arg0: $Comparator$Type<(any)>): void
public "setElement"(arg0: E): $SingletonList<(E)>
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
set "element"(value: E)
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonList$Type<E> = ($SingletonList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonList_<E> = $SingletonList$Type<(E)>;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$BlockRendererAccessor" {
import {$BlockRenderContext, $BlockRenderContext$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/pipeline/$BlockRenderContext"
import {$ChunkModelBuilder, $ChunkModelBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/buffers/$ChunkModelBuilder"
import {$Material, $Material$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/terrain/material/$Material"
import {$QuadLightData, $QuadLightData$Type} from "packages/me/jellysquid/mods/sodium/client/model/light/data/$QuadLightData"
import {$ColorProviderRegistry, $ColorProviderRegistry$Type} from "packages/me/jellysquid/mods/sodium/client/model/color/$ColorProviderRegistry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BakedQuadView, $BakedQuadView$Type} from "packages/me/jellysquid/mods/sodium/client/model/quad/$BakedQuadView"

export interface $BlockRendererAccessor {

 "callWriteGeometry"(arg0: $BlockRenderContext$Type, arg1: $ChunkModelBuilder$Type, arg2: $Vec3$Type, arg3: $Material$Type, arg4: $BakedQuadView$Type, arg5: (integer)[], arg6: $QuadLightData$Type): void
 "getUseAmbientOcclusion"(): boolean
 "getColorProviderRegistry"(): $ColorProviderRegistry
}

export namespace $BlockRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRendererAccessor$Type = ($BlockRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRendererAccessor_ = $BlockRendererAccessor$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/matrix/$Matrix4" {
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Vec4d, $Vec4d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec4d"
import {$Matrix3, $Matrix3$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$Matrix3"

export class $Matrix4 {
 "m00": double
 "m01": double
 "m02": double
 "m03": double
 "m10": double
 "m11": double
 "m12": double
 "m13": double
 "m20": double
 "m21": double
 "m22": double
 "m23": double
 "m30": double
 "m31": double
 "m32": double
 "m33": double

constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double, arg12: double, arg13: double, arg14: double, arg15: double)
constructor()
constructor(arg0: (double)[])
constructor(arg0: $Matrix4$Type)
constructor(arg0: $Matrix3$Type, arg1: $Vec3d$Type, arg2: double)

public "epsilonEquals"(arg0: $Matrix4$Type, arg1: double): boolean
public "epsilonEquals"(arg0: $Matrix4$Type, arg1: float): boolean
public "add"(arg0: double): void
public "add"(arg0: $Matrix4$Type): void
public "add"(arg0: $Matrix4$Type, arg1: $Matrix4$Type): void
public "add"(arg0: double, arg1: $Matrix4$Type): void
public "get"(arg0: $Matrix3$Type): void
public "get"(arg0: $Matrix3$Type, arg1: $Vec3d$Type): double
public "get"(arg0: $Vec3d$Type): void
public "equals"(arg0: $Matrix4$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "transform"(arg0: $Vec3f$Type, arg1: $Vec3f$Type): void
public "transform"(arg0: $Vec3f$Type): void
public "transform"(arg0: $Vec4d$Type): void
public "transform"(arg0: $Vec3d$Type, arg1: $Vec3d$Type): void
public "transform"(arg0: $Vec4d$Type, arg1: $Vec4d$Type): void
public "transform"(arg0: $Vec3d$Type): void
public "set"(arg0: $Matrix3$Type): void
public "set"(arg0: (double)[]): void
public "set"(arg0: $Matrix3$Type, arg1: $Vec3d$Type, arg2: double): void
public "set"(arg0: $Vec3d$Type): void
public "set"(arg0: double, arg1: $Vec3d$Type): void
public "set"(arg0: $Vec3d$Type, arg1: double): void
public "set"(arg0: $Matrix4$Type): void
public "set"(arg0: double): void
public "sub"(arg0: $Matrix4$Type, arg1: $Matrix4$Type): void
public "sub"(arg0: $Matrix4$Type): void
public "negate"(): void
public "negate"(arg0: $Matrix4$Type): void
public "mul"(arg0: double): void
public "mul"(arg0: $Matrix4$Type, arg1: $Matrix4$Type): void
public "mul"(arg0: $Matrix4$Type): void
public "mul"(arg0: double, arg1: $Matrix4$Type): void
public "invert"(): void
public "invert"(arg0: $Matrix4$Type): void
public "transpose"(arg0: $Matrix4$Type): void
public "transpose"(): void
public "getElement"(arg0: integer, arg1: integer): double
public "setElement"(arg0: integer, arg1: integer, arg2: double): void
public "setZero"(): void
public "setScale"(arg0: double): void
public "getColumn"(arg0: integer, arg1: (double)[]): void
public "getColumn"(arg0: integer, arg1: $Vec4d$Type): void
public "rotZ"(arg0: double): void
public "rotY"(arg0: double): void
public "rotX"(arg0: double): void
public "setRotation"(arg0: $Matrix3$Type): void
public "setColumn"(arg0: integer, arg1: double, arg2: double, arg3: double, arg4: double): void
public "setColumn"(arg0: integer, arg1: $Vec4d$Type): void
public "setColumn"(arg0: integer, arg1: (double)[]): void
public "getRow"(arg0: integer, arg1: (double)[]): void
public "getRow"(arg0: integer, arg1: $Vec4d$Type): void
public "setRow"(arg0: integer, arg1: (double)[]): void
public "setRow"(arg0: integer, arg1: double, arg2: double, arg3: double, arg4: double): void
public "setRow"(arg0: integer, arg1: $Vec4d$Type): void
public "determinant"(): double
public "getScale"(): double
public "setTranslation"(arg0: $Vec3d$Type): void
public "setIdentity"(): void
public "getRotationScale"(arg0: $Matrix3$Type): void
public "setRotationScale"(arg0: $Matrix3$Type): void
public "setM22"(arg0: double): void
public "getM03"(): double
public "getM23"(): double
public "setM23"(arg0: double): void
public "setM30"(arg0: double): void
public "getM01"(): double
public "setM00"(arg0: double): void
public "getM02"(): double
public "setM20"(arg0: double): void
public "getM30"(): double
public "getM12"(): double
public "setM10"(arg0: double): void
public "getM11"(): double
public "setM11"(arg0: double): void
public "setM01"(arg0: double): void
public "setM12"(arg0: double): void
public "getM00"(): double
public "getM10"(): double
public "getM20"(): double
public "setM21"(arg0: double): void
public "getM13"(): double
public "getM21"(): double
public "mulTransposeBoth"(arg0: $Matrix4$Type, arg1: $Matrix4$Type): void
public "getM22"(): double
public "mulTransposeLeft"(arg0: $Matrix4$Type, arg1: $Matrix4$Type): void
public "setM03"(arg0: double): void
public "mulTransposeRight"(arg0: $Matrix4$Type, arg1: $Matrix4$Type): void
public "setM02"(arg0: double): void
public "setM13"(arg0: double): void
public "setM31"(arg0: double): void
public "getM31"(): double
public "setM32"(arg0: double): void
public "getM32"(): double
public "setM33"(arg0: double): void
public "getM33"(): double
set "scale"(value: double)
set "rotation"(value: $Matrix3$Type)
get "scale"(): double
set "translation"(value: $Vec3d$Type)
set "rotationScale"(value: $Matrix3$Type)
set "m22"(value: double)
get "m03"(): double
get "m23"(): double
set "m23"(value: double)
set "m30"(value: double)
get "m01"(): double
set "m00"(value: double)
get "m02"(): double
set "m20"(value: double)
get "m30"(): double
get "m12"(): double
set "m10"(value: double)
get "m11"(): double
set "m11"(value: double)
set "m01"(value: double)
set "m12"(value: double)
get "m00"(): double
get "m10"(): double
get "m20"(): double
set "m21"(value: double)
get "m13"(): double
get "m21"(): double
get "m22"(): double
set "m03"(value: double)
set "m02"(value: double)
set "m13"(value: double)
set "m31"(value: double)
get "m31"(): double
set "m32"(value: double)
get "m32"(): double
set "m33"(value: double)
get "m33"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matrix4$Type = ($Matrix4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matrix4_ = $Matrix4$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/matrix/$Matrix3" {
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"

export class $Matrix3 {
 "m00": double
 "m01": double
 "m02": double
 "m10": double
 "m11": double
 "m12": double
 "m20": double
 "m21": double
 "m22": double

constructor(arg0: $Matrix3$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double)
constructor()

public "add"(arg0: $Matrix3$Type): void
public "add"(arg0: double): void
public "equals"(arg0: any): boolean
public "equals"(arg0: $Matrix3$Type): boolean
public "toString"(): string
public "transform"(arg0: $Vec3d$Type): void
public "transform"(arg0: $Vec3f$Type): void
public "set"(arg0: $Matrix3$Type): void
public "set"(arg0: double): void
public "normalize"(): void
public "sub"(arg0: $Matrix3$Type): void
public "mul"(arg0: double): void
public "mul"(arg0: $Matrix3$Type): void
public "invert"(): void
public "invert"(arg0: $Matrix3$Type): void
public "transpose"(): void
public "getElement"(arg0: integer, arg1: integer): double
public "setElement"(arg0: integer, arg1: integer, arg2: double): void
public "setScale"(arg0: double): void
public "rotZ"(arg0: double): void
public "rotY"(arg0: double): void
public "rotX"(arg0: double): void
public "determinant"(): double
public "getScale"(): double
public "setIdentity"(): void
public "mulNormalize"(arg0: $Matrix3$Type): void
public "normalizeCP"(): void
set "scale"(value: double)
get "scale"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matrix3$Type = ($Matrix3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matrix3_ = $Matrix3$Type;
}}
declare module "packages/team/creative/littletiles/common/block/mc/$BlockSignalConverter" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockSignalConverter extends $BaseEntityBlock {
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

constructor()

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "changed"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): void
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getPowerOnSide"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalConverter$Type = ($BlockSignalConverter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalConverter_ = $BlockSignalConverter$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/relative/$StructureAbsolute" {
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleVecAbsolute, $LittleVecAbsolute$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecAbsolute"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleVecGrid, $LittleVecGrid$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecGrid"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$StructureRelative, $StructureRelative$Type} from "packages/team/creative/littletiles/common/structure/relative/$StructureRelative"

export class $StructureAbsolute extends $StructureRelative {
readonly "inBlockOffset": $LittleVecGrid
readonly "baseOffset": $BlockPos
readonly "chunkOffset": $BlockPos
readonly "inChunkOffset": $BlockPos
readonly "rotationCenter": $Vec3d
readonly "rotationCenterInsideBlock": $Vec3d

constructor(arg0: $LittleVecAbsolute$Type, arg1: $LittleVec$Type)
constructor(arg0: $BlockPos$Type, arg1: $LittleBox$Type, arg2: $LittleGrid$Type)
constructor(arg0: string, arg1: $CompoundTag$Type)
constructor(arg0: $LittleVecAbsolute$Type, arg1: $StructureRelative$Type)
constructor(arg0: $LittleVecAbsolute$Type, arg1: $LittleBox$Type, arg2: $LittleGrid$Type)

public static "intFloorDiv"(arg0: integer, arg1: integer): integer
public static "convertAxisToBox"(arg0: $LittleVecGrid$Type, arg1: $LittleVec$Type): $LittleBox
public "save"(arg0: string, arg1: $CompoundTag$Type): void
public "getDoubledCenterVec"(): $LittleVec
get "doubledCenterVec"(): $LittleVec
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureAbsolute$Type = ($StructureAbsolute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureAbsolute_ = $StructureAbsolute$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/$GuiControl" {
import {$StyleDisplay, $StyleDisplay$Type} from "packages/team/creative/creativecore/common/gui/style/display/$StyleDisplay"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiChildControl, $GuiChildControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiChildControl"
import {$SoundInstance, $SoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import {$GuiSizeRule, $GuiSizeRule$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiSizeRule"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ControlFormatting, $ControlFormatting$Type} from "packages/team/creative/creativecore/common/gui/style/$ControlFormatting"
import {$IGuiIntegratedParent, $IGuiIntegratedParent$Type} from "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent"
import {$GuiTooltipEvent, $GuiTooltipEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiTooltipEvent"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GuiStyle, $GuiStyle$Type} from "packages/team/creative/creativecore/common/gui/style/$GuiStyle"
import {$IGuiParent, $IGuiParent$Type} from "packages/team/creative/creativecore/common/gui/$IGuiParent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiEvent, $GuiEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiEvent"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"

export class $GuiControl {
readonly "name": string
 "enabled": boolean
 "preferred": $GuiSizeRule
 "expandableX": boolean
 "expandableY": boolean
 "visible": boolean

constructor(arg0: string)

public "getParent"(): $IGuiParent
public "init"(): void
public "getLayer"(): $GuiLayer
public "setParent"(arg0: $IGuiParent$Type): void
public "is"(arg0: string): boolean
public "is"(...arg0: (string)[]): boolean
public "closed"(): void
public "getContentOffset"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $GuiChildControl$Type, arg2: $Rect$Type, arg3: $Rect$Type, arg4: double, arg5: integer, arg6: integer): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): boolean
public static "translatable"(arg0: string): $MutableComponent
public static "translatable"(arg0: string, ...arg1: (any)[]): $MutableComponent
public "tick"(): void
public "getMaxWidth"(arg0: integer): integer
public "isClient"(): boolean
public static "translate"(arg0: string, ...arg1: (any)[]): string
public static "translate"(arg0: string): string
public "getIntegratedParent"(): $IGuiIntegratedParent
public "getControlFormatting"(): $ControlFormatting
public "setVisible"(arg0: boolean): $GuiControl
public "setEnabled"(arg0: boolean): $GuiControl
public "mouseScrolled"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: double): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "setExpandableX"(): $GuiControl
public "setDim"(arg0: $GuiSizeRule$Type): $GuiControl
public "setDim"(arg0: integer, arg1: integer): $GuiControl
public "setExpandable"(): $GuiControl
public "hasGui"(): boolean
public "setUnexpandableY"(): $GuiControl
public "isParent"(arg0: $IGuiParent$Type): boolean
public "setFixedY"(): $GuiControl
public "setUnexpandableX"(): $GuiControl
public "setTooltip"(arg0: $List$Type<($Component$Type)>): $GuiControl
public "setTooltip"(arg0: string): $GuiControl
public "setFixed"(): $GuiControl
public "setUnexpandable"(): $GuiControl
public "setExpandableY"(): $GuiControl
public "setFixedX"(): $GuiControl
public "isExpandableY"(): boolean
public "reflow"(): void
public "flowX"(arg0: integer, arg1: integer): void
public "getMaxHeight"(arg0: integer, arg1: integer): integer
public "flowY"(arg0: integer, arg1: integer, arg2: integer): void
public "isInteractable"(): boolean
public "isExpandableX"(): boolean
public "toScreenRect"(arg0: $Rect$Type): $Rect
public "createChildRect"(arg0: $GuiChildControl$Type, arg1: $Rect$Type, arg2: double, arg3: double, arg4: double): $Rect
public "getNestedName"(): string
public "getPreferredWidth"(arg0: integer): integer
public "getMinWidth"(arg0: integer): integer
public "getMinHeight"(arg0: integer, arg1: integer): integer
public "getPreferredHeight"(arg0: integer, arg1: integer): integer
public "toLayerRect"(arg0: $Rect$Type): $Rect
public "testForDoubleClick"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): boolean
public "hasLayer"(): boolean
public "mouseDoubleClicked"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): boolean
public "looseFocus"(): void
public "getTooltipEvent"(arg0: $Rect$Type, arg1: double, arg2: double): $GuiTooltipEvent
public "raiseEvent"(arg0: $GuiEvent$Type): void
public "getBorder"(arg0: $GuiStyle$Type, arg1: $StyleDisplay$Type): $StyleDisplay
public static "translateOrDefault"(arg0: string, arg1: string): string
public "getTooltip"(): $List<($Component)>
public "getBackground"(arg0: $GuiStyle$Type, arg1: $StyleDisplay$Type): $StyleDisplay
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseReleased"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): void
public "mouseMoved"(arg0: $Rect$Type, arg1: double, arg2: double): void
public "mouseDragged"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double, arg6: double): void
public static "playSound"(arg0: $SoundEvent$Type): void
public static "playSound"(arg0: $Holder$Reference$Type<($SoundEvent$Type)>): void
public static "playSound"(arg0: $SoundEvent$Type, arg1: float, arg2: float): void
public static "playSound"(arg0: $SoundInstance$Type): void
public static "playSound"(arg0: $Holder$Reference$Type<($SoundEvent$Type)>, arg1: float, arg2: float): void
public "getStyle"(): $GuiStyle
public "getPlayer"(): $Player
get "parent"(): $IGuiParent
get "layer"(): $GuiLayer
set "parent"(value: $IGuiParent$Type)
get "contentOffset"(): integer
get "client"(): boolean
get "integratedParent"(): $IGuiIntegratedParent
get "controlFormatting"(): $ControlFormatting
set "visible"(value: boolean)
set "enabled"(value: boolean)
set "dim"(value: $GuiSizeRule$Type)
set "tooltip"(value: $List$Type<($Component$Type)>)
set "tooltip"(value: string)
get "expandableY"(): boolean
get "interactable"(): boolean
get "expandableX"(): boolean
get "nestedName"(): string
get "tooltip"(): $List<($Component)>
get "style"(): $GuiStyle
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiControl$Type = ($GuiControl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiControl_ = $GuiControl$Type;
}}
declare module "packages/team/creative/littletiles/common/grid/$IGridBased" {
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IGridBased {

 "getSmallest"(): integer
 "convertToSmallest"(): void
 "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
 "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
 "forceSameGrid"(arg0: $IGridBased$Type): void
 "minGrid"(arg0: $LittleGrid$Type): void
 "minGrid"(arg0: $IGridBased$Type): void
 "convertTo"(arg0: $LittleGrid$Type): void
 "getGrid"(): $LittleGrid
 "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
 "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
}

export namespace $IGridBased {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridBased$Type = ($IGridBased);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridBased_ = $IGridBased$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/controls/inventory/$GuiSlotBase" {
import {$ControlFormatting, $ControlFormatting$Type} from "packages/team/creative/creativecore/common/gui/style/$ControlFormatting"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiSizeRule, $GuiSizeRule$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiSizeRule"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"

export class $GuiSlotBase extends $GuiControl {
static readonly "SLOT_SIZE": integer
readonly "name": string
 "enabled": boolean
 "preferred": $GuiSizeRule
 "expandableX": boolean
 "expandableY": boolean
 "visible": boolean

constructor(arg0: string)

public "init"(): void
public "getStack"(): $ItemStack
public "closed"(): void
public "mouseClicked"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): boolean
public "tick"(): void
public "getControlFormatting"(): $ControlFormatting
public "flowX"(arg0: integer, arg1: integer): void
public "flowY"(arg0: integer, arg1: integer, arg2: integer): void
public "getTooltip"(): $List<($Component)>
get "stack"(): $ItemStack
get "controlFormatting"(): $ControlFormatting
get "tooltip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSlotBase$Type = ($GuiSlotBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSlotBase_ = $GuiSlotBase$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/component/$ISignalStructureComponent" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$ISignalStructureBase, $ISignalStructureBase$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalStructureBase"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$SignalNetwork, $SignalNetwork$Type} from "packages/team/creative/littletiles/common/structure/signal/network/$SignalNetwork"
import {$SignalComponentType, $SignalComponentType$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$SignalComponentType"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$ISignalComponent, $ISignalComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalComponent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$SignalState, $SignalState$Type} from "packages/team/creative/littletiles/common/structure/signal/$SignalState"

export interface $ISignalStructureComponent extends $ISignalComponent, $ISignalStructureBase {

 "getId"(): integer
 "getComponentType"(): $SignalComponentType
 "getState"(): $SignalState
 "changed"(): void
 "updateState"(arg0: $SignalState$Type): void
 "getBandwidth"(): integer
 "getStructure"(): $LittleStructure
 "getStructureLevel"(): $Level
/**
 * 
 * @deprecated
 */
 "overwriteState"(arg0: $SignalState$Type): void
 "connect"(arg0: $Facing$Type, arg1: $ISignalStructureBase$Type, arg2: $LittleGrid$Type, arg3: integer, arg4: boolean): boolean
 "unload"(arg0: $Facing$Type, arg1: $ISignalStructureBase$Type): void
 "disconnect"(arg0: $Facing$Type, arg1: $ISignalStructureBase$Type): void
 "connections"(): $Iterator<($ISignalStructureBase)>
 "getNetwork"(): $SignalNetwork
 "hasNetwork"(): boolean
 "setNetwork"(arg0: $SignalNetwork$Type): void
 "getColor"(): integer
 "compatible"(arg0: $ISignalStructureBase$Type): boolean
 "canConnect"(arg0: $Facing$Type): boolean
 "findNetwork"(): $SignalNetwork
}

export namespace $ISignalStructureComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISignalStructureComponent$Type = ($ISignalStructureComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISignalStructureComponent_ = $ISignalStructureComponent$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/shape/$LittleShape" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBoxes, $LittleBoxes$Type} from "packages/team/creative/littletiles/common/math/box/collection/$LittleBoxes"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ShapeSelection, $ShapeSelection$Type} from "packages/team/creative/littletiles/common/placement/shape/$ShapeSelection"
import {$GuiParent, $GuiParent$Type} from "packages/team/creative/creativecore/common/gui/$GuiParent"

export class $LittleShape {
readonly "pointsBeforePlacing": integer

constructor(arg0: integer)

public "getKey"(): string
public "rotate"(arg0: $CompoundTag$Type, arg1: $Rotation$Type): void
public "getBoxes"(arg0: $ShapeSelection$Type, arg1: boolean): $LittleBoxes
public "mirror"(arg0: $CompoundTag$Type, arg1: $Axis$Type): void
public "getCustomSettings"(arg0: $CompoundTag$Type, arg1: $LittleGrid$Type): $List<($GuiControl)>
public "saveCustomSettings"(arg0: $GuiParent$Type, arg1: $CompoundTag$Type, arg2: $LittleGrid$Type): void
public "getTranslatable"(): $Component
public "getTranslatableName"(): string
public "addExtraInformation"(arg0: $CompoundTag$Type, arg1: $List$Type<($Component$Type)>): void
public "maxAllowed"(): integer
public "requiresNoOverlap"(arg0: $ShapeSelection$Type): boolean
get "key"(): string
get "translatable"(): $Component
get "translatableName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleShape$Type = ($LittleShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleShape_ = $LittleShape$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/parent/$BlockParentCollection" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$StructureParentCollection, $StructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$StructureParentCollection"
import {$IStructureParentCollection, $IStructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$ParentCollection, $ParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$ParentCollection"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Pair, $Pair$Type} from "packages/team/creative/creativecore/common/util/type/list/$Pair"

export class $BlockParentCollection extends $ParentCollection {
 "be": $BETiles

constructor(arg0: $BETiles$Type, arg1: boolean)

public "hasCollisionListener"(): boolean
public "isStructure"(): boolean
public "removeStructure"(arg0: integer): boolean
public "add"(arg0: $BlockParentCollection$Type): void
public "groups"(): $Iterable<($IParentCollection)>
public "combine"(): boolean
public "unload"(): void
public "getAttribute"(): integer
public "setAttribute"(arg0: integer): void
public "totalSize"(): integer
public "getStructure"(arg0: integer): $StructureParentCollection
public "getStructure"(): $LittleStructure
public "isClient"(): boolean
public "structures"(): $Iterable<($IStructureParentCollection)>
public "getBE"(): $BETiles
public "loadedStructures"(arg0: integer): $Iterable<($LittleStructure)>
public "loadedStructures"(): $Iterable<($LittleStructure)>
public "allTiles"(): $Iterable<($Pair<($IParentCollection), ($LittleTile)>)>
public "removeEmptyLists"(): void
public "countStructures"(): integer
public "hasRendered"(): boolean
public "hasTicking"(): boolean
public "isCompletelyEmpty"(): boolean
public "isMain"(): boolean
public "isStructureChild"(arg0: $LittleStructure$Type): boolean
public "fillUsedIds"(arg0: $BitSet$Type): void
public "structuresReal"(): $Iterable<($StructureParentCollection)>
public "addStructure"(arg0: integer, arg1: integer): $StructureParentCollection
public "addStructure"(arg0: integer, arg1: $StructureParentCollection$Type): void
public "size"(): integer
public "iterator"(): $Iterator<(T)>
get "structure"(): boolean
get "attribute"(): integer
set "attribute"(value: integer)
get "structure"(): $LittleStructure
get "client"(): boolean
get "bE"(): $BETiles
get "completelyEmpty"(): boolean
get "main"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockParentCollection$Type = ($BlockParentCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockParentCollection_ = $BlockParentCollection$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/$VAlign" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VAlign extends $Enum<($VAlign)> {
static readonly "TOP": $VAlign
static readonly "CENTER": $VAlign
static readonly "BOTTOM": $VAlign
static readonly "STRETCH": $VAlign


public static "values"(): ($VAlign)[]
public static "valueOf"(arg0: string): $VAlign
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VAlign$Type = (("stretch") | ("top") | ("bottom") | ("center")) | ($VAlign);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VAlign_ = $VAlign$Type;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$ChunkMeshBufferBuilderAccessor" {
import {$TranslucentQuadAnalyzer, $TranslucentQuadAnalyzer$Type} from "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$ChunkVertexEncoder, $ChunkVertexEncoder$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/vertex/format/$ChunkVertexEncoder"

export interface $ChunkMeshBufferBuilderAccessor {

 "getCount"(): integer
 "getBuffer"(): $ByteBuffer
 "getEncoder"(): $ChunkVertexEncoder
 "getCapacity"(): integer
 "setCount"(arg0: integer): void
 "getAnalyzer"(): $TranslucentQuadAnalyzer
 "callGrow"(arg0: integer): void
 "getStride"(): integer
}

export namespace $ChunkMeshBufferBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMeshBufferBuilderAccessor$Type = ($ChunkMeshBufferBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkMeshBufferBuilderAccessor_ = $ChunkMeshBufferBuilderAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/math/box/volume/$LittleBoxReturnedVolume" {
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"

export class $LittleBoxReturnedVolume {

constructor()

public "addPixel"(): void
public "addDifBox"(arg0: $LittleBox$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "clear"(): void
public "has"(): boolean
public "getVolume"(): integer
public "addBox"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "getPercentVolume"(arg0: $LittleGrid$Type): double
get "volume"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleBoxReturnedVolume$Type = ($LittleBoxReturnedVolume);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleBoxReturnedVolume_ = $LittleBoxReturnedVolume$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/relative/$StructureRelative" {
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$LittleVecGrid, $LittleVecGrid$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecGrid"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$LittlePlaceBoxRelative, $LittlePlaceBoxRelative$Type} from "packages/team/creative/littletiles/common/placement/box/$LittlePlaceBoxRelative"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$StructureDirectionalField, $StructureDirectionalField$Type} from "packages/team/creative/littletiles/common/structure/directional/$StructureDirectionalField"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StructureRelative implements $IGridBased {

constructor(arg0: $LittleBox$Type, arg1: $LittleGrid$Type)
constructor(arg0: (integer)[])

public "getMinVec"(): $LittleVecGrid
public "getSmallest"(): integer
public "advancedScale"(arg0: integer, arg1: integer): void
public "setBox"(arg0: $BlockPos$Type, arg1: $LittleBox$Type, arg2: $LittleGrid$Type): void
public "getPlaceBox"(arg0: $LittleGroup$Type, arg1: $StructureDirectionalField$Type): $LittlePlaceBoxRelative
public "add"(arg0: $BlockPos$Type): void
public "add"(arg0: $LittleVecGrid$Type): void
public "write"(): (integer)[]
public "getOffset"(): $BlockPos
public "rotate"(arg0: $LittleGrid$Type, arg1: $Rotation$Type, arg2: $LittleVec$Type): void
public "sub"(arg0: $BlockPos$Type): void
public "sub"(arg0: $LittleVecGrid$Type): void
public "move"(arg0: $LittleVecGrid$Type): void
public "isEven"(): boolean
public "getCenter"(): $Vec3d
public "mirror"(arg0: $LittleGrid$Type, arg1: $Axis$Type, arg2: $LittleVec$Type): void
public "convertTo"(arg0: $LittleGrid$Type): void
public "getBox"(): $LittleBox
public "getGrid"(): $LittleGrid
public "getDoubledCenterVec"(): $LittleVec
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "minVec"(): $LittleVecGrid
get "smallest"(): integer
get "offset"(): $BlockPos
get "even"(): boolean
get "center"(): $Vec3d
get "box"(): $LittleBox
get "grid"(): $LittleGrid
get "doubledCenterVec"(): $LittleVec
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRelative$Type = ($StructureRelative);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureRelative_ = $StructureRelative$Type;
}}
declare module "packages/team/creative/littletiles/api/common/ingredient/$ILittleIngredientInventory" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleInventory, $LittleInventory$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleInventory"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"

export interface $ILittleIngredientInventory {

 "getInventory"(arg0: $ItemStack$Type): $LittleIngredients
 "setInventory"(arg0: $ItemStack$Type, arg1: $LittleIngredients$Type, arg2: $LittleInventory$Type): void
 "shouldBeMerged"(): boolean
}

export namespace $ILittleIngredientInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILittleIngredientInventory$Type = ($ILittleIngredientInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILittleIngredientInventory_ = $ILittleIngredientInventory$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent" {
import {$CreativePacket, $CreativePacket$Type} from "packages/team/creative/creativecore/common/network/$CreativePacket"
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ScreenEventListener, $ScreenEventListener$Type} from "packages/team/creative/creativecore/common/gui/integration/$ScreenEventListener"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IGuiParent, $IGuiParent$Type} from "packages/team/creative/creativecore/common/gui/$IGuiParent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiEvent, $GuiEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiEvent"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"

export interface $IGuiIntegratedParent extends $IGuiParent {

 "get"(arg0: string): $GuiControl
 "isOpen"(arg0: $Class$Type<(any)>): boolean
 "render"(arg0: $GuiGraphics$Type, arg1: $Screen$Type, arg2: $ScreenEventListener$Type, arg3: integer, arg4: integer): void
 "openLayer"(arg0: $GuiLayer$Type): void
 "send"(arg0: $CreativePacket$Type): void
 "closeLayer"(arg0: integer): void
 "getIntegratedParent"(): $IGuiIntegratedParent
 "hasGui"(): boolean
 "isParent"(arg0: $IGuiParent$Type): boolean
 "reflow"(): void
 "toScreenRect"(arg0: $GuiControl$Type, arg1: $Rect$Type): $Rect
 "toLayerRect"(arg0: $GuiControl$Type, arg1: $Rect$Type): $Rect
 "raiseEvent"(arg0: $GuiEvent$Type): void
 "getLayers"(): $List<($GuiLayer)>
 "getTopLayer"(): $GuiLayer
 "isClient"(): boolean
 "isContainer"(): boolean
 "closeTopLayer"(): void
 "closeLayer"(arg0: $GuiLayer$Type): void
 "getPlayer"(): $Player
}

export namespace $IGuiIntegratedParent {
const EMPTY: $GuiLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiIntegratedParent$Type = ($IGuiIntegratedParent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiIntegratedParent_ = $IGuiIntegratedParent$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/$Align" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Align extends $Enum<($Align)> {
static readonly "LEFT": $Align
static readonly "CENTER": $Align
static readonly "RIGHT": $Align
static readonly "STRETCH": $Align


public static "values"(): ($Align)[]
public static "valueOf"(arg0: string): $Align
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Align$Type = (("stretch") | ("left") | ("center") | ("right")) | ($Align);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Align_ = $Align$Type;
}}
declare module "packages/team/creative/littletiles/common/ingredient/$LittleIngredient$IngredientOverflowHandler" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleIngredient, $LittleIngredient$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredient"

export class $LittleIngredient$IngredientOverflowHandler<T extends $LittleIngredient<(any)>> {

constructor()

public "handleOverflow"(arg0: T): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleIngredient$IngredientOverflowHandler$Type<T> = ($LittleIngredient$IngredientOverflowHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleIngredient$IngredientOverflowHandler_<T> = $LittleIngredient$IngredientOverflowHandler$Type<(T)>;
}}
declare module "packages/team/creative/creativecore/common/gui/flow/$GuiSizeRule" {
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"

export class $GuiSizeRule {

constructor()

public "maxWidth"(arg0: $GuiControl$Type, arg1: integer): integer
public "maxHeight"(arg0: $GuiControl$Type, arg1: integer, arg2: integer): integer
public "minHeight"(arg0: $GuiControl$Type, arg1: integer, arg2: integer): integer
public "preferredWidth"(arg0: $GuiControl$Type, arg1: integer): integer
public "preferredHeight"(arg0: $GuiControl$Type, arg1: integer, arg2: integer): integer
public "minWidth"(arg0: $GuiControl$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSizeRule$Type = ($GuiSizeRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSizeRule_ = $GuiSizeRule$Type;
}}
declare module "packages/team/creative/littletiles/mixin/server/network/$ServerGamePacketListenerImplAccessor" {
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$FilteredText, $FilteredText$Type} from "packages/net/minecraft/server/network/$FilteredText"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $ServerGamePacketListenerImplAccessor {

 "setConnection"(arg0: $Connection$Type): void
 "setServer"(arg0: $MinecraftServer$Type): void
 "callFilterTextPacket"(arg0: $List$Type<(string)>): $CompletableFuture<($List<($FilteredText)>)>
 "getAwaitingPositionFromClient"(): $Vec3
}

export namespace $ServerGamePacketListenerImplAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImplAccessor$Type = ($ServerGamePacketListenerImplAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerGamePacketListenerImplAccessor_ = $ServerGamePacketListenerImplAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationChunkCache" {
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$ChunkStatus, $ChunkStatus$Type} from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$LittleAnimationLevel, $LittleAnimationLevel$Type} from "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationLevel"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"

export class $LittleAnimationChunkCache extends $ChunkSource {

constructor(arg0: $LittleAnimationLevel$Type)

public "all"(): $Iterable<($LevelChunk)>
public "getLevel"(): $LittleAnimationLevel
public "getLightEngine"(): $LevelLightEngine
public "gatherStats"(): string
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type, arg3: boolean): $LevelChunk
public "tick"(arg0: $BooleanSupplier$Type, arg1: boolean): void
public "getLoadedChunksCount"(): integer
public "onLightUpdate"(arg0: $LightLayer$Type, arg1: $SectionPos$Type): void
public "addLoadedChunk"(arg0: $LevelChunk$Type): void
get "level"(): $LittleAnimationLevel
get "lightEngine"(): $LevelLightEngine
get "loadedChunksCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleAnimationChunkCache$Type = ($LittleAnimationChunkCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleAnimationChunkCache_ = $LittleAnimationChunkCache$Type;
}}
declare module "packages/team/creative/creativecore/common/util/type/list/$IndexedCollector" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $IndexedCollector<T> implements $Iterable<(T)> {

constructor()

public "sectionIterator"(arg0: $IntConsumer$Type): $Iterator<(T)>
public "add"(arg0: T): void
public "add"(arg0: integer, arg1: T): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<(T)>
public "endSection"(): void
public "startSection"(arg0: integer): void
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<T>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndexedCollector$Type<T> = ($IndexedCollector<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndexedCollector_<T> = $IndexedCollector$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$TranslucentQuadAnalyzerAccessor" {
import {$FloatArrayList, $FloatArrayList$Type} from "packages/it/unimi/dsi/fastutil/floats/$FloatArrayList"

export interface $TranslucentQuadAnalyzerAccessor {

 "getQuadCenters"(): $FloatArrayList

(): $FloatArrayList
}

export namespace $TranslucentQuadAnalyzerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslucentQuadAnalyzerAccessor$Type = ($TranslucentQuadAnalyzerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslucentQuadAnalyzerAccessor_ = $TranslucentQuadAnalyzerAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/item/tooltip/$IItemTooltip" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemTooltip {

 "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
 "tooltipData"(arg0: $ItemStack$Type): (any)[]

(arg0: $ItemStack$Type, arg1: string): string
}

export namespace $IItemTooltip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemTooltip$Type = ($IItemTooltip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemTooltip_ = $IItemTooltip$Type;
}}
declare module "packages/team/creative/littletiles/client/render/entity/$LittleEntityRenderManager" {
import {$BlockDestructionProgress, $BlockDestructionProgress$Type} from "packages/net/minecraft/server/level/$BlockDestructionProgress"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$LittleSubLevel, $LittleSubLevel$Type} from "packages/team/creative/littletiles/common/level/little/$LittleSubLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Frustum, $Frustum$Type} from "packages/net/minecraft/client/renderer/culling/$Frustum"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$SortedSet, $SortedSet$Type} from "packages/java/util/$SortedSet"
import {$RenderChunkExtender, $RenderChunkExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$RenderChunkExtender"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Long2ObjectMap$Entry, $Long2ObjectMap$Entry$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectMap$Entry"
import {$LittleEntity, $LittleEntity$Type} from "packages/team/creative/littletiles/common/entity/$LittleEntity"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Uniform, $Uniform$Type} from "packages/com/mojang/blaze3d/shaders/$Uniform"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LittleEntityRenderManager<T extends $LittleEntity<(any)>> {
static readonly "mc": $Minecraft
 "isInSight": boolean
 "needsFullRenderChunkUpdate": boolean
readonly "entity": T

constructor(arg0: T)

public "setBlockDirty"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $BlockState$Type): void
public "unload"(): void
public "getLevel"(): $LittleSubLevel
public "getDestructionProgress"(arg0: $BlockPos$Type): $SortedSet<($BlockDestructionProgress)>
public "setSectionDirtyWithNeighbors"(arg0: integer, arg1: integer, arg2: integer): void
public "renderBlockEntitiesAndDestruction"(arg0: $PoseStack$Type, arg1: $Frustum$Type, arg2: $Vec3$Type, arg3: float, arg4: $MultiBufferSource$Type): void
public "clientTick"(): void
public "blockChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: integer): void
public "allChanged"(): void
public "resortTransparency"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double): void
public "compileChunks"(arg0: $Camera$Type): void
public "setupRender"(arg0: $Camera$Type, arg1: $Frustum$Type, arg2: boolean, arg3: boolean): void
public "renderGlobalEntities"(arg0: $PoseStack$Type, arg1: $Frustum$Type, arg2: $Vec3$Type, arg3: float, arg4: $MultiBufferSource$Type): void
public "getDestructions"(): $Iterable<($Long2ObjectMap$Entry<($SortedSet<($BlockDestructionProgress)>)>)>
public "getRenderChunk"(arg0: $BlockPos$Type): $RenderChunkExtender
public "setBlocksDirty"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "setSectionDirty"(arg0: integer, arg1: integer, arg2: integer): void
public "renderChunkLayer"(arg0: $RenderType$Type, arg1: $PoseStack$Type, arg2: double, arg3: double, arg4: double, arg5: $Matrix4f$Type, arg6: $Uniform$Type): void
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
get "level"(): $LittleSubLevel
get "destructions"(): $Iterable<($Long2ObjectMap$Entry<($SortedSet<($BlockDestructionProgress)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleEntityRenderManager$Type<T> = ($LittleEntityRenderManager<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleEntityRenderManager_<T> = $LittleEntityRenderManager$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/common/math/box/collection/$LittleBoxes" {
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$HashMapList, $HashMapList$Type} from "packages/team/creative/creativecore/common/util/type/map/$HashMapList"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$LittleBoxAbsolute, $LittleBoxAbsolute$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBoxAbsolute"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LittleBoxes implements $IGridBased {
 "pos": $BlockPos
 "grid": $LittleGrid

constructor(arg0: $BlockPos$Type, arg1: $LittleGrid$Type)

public "getSmallest"(): integer
public "addBoxes"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type): void
public "addBoxes"(arg0: $LittleGrid$Type, arg1: $BlockPos$Type, arg2: $Iterable$Type<($LittleBox$Type)>): void
public "combineBoxesBlocks"(): void
public "littleVolume"(): integer
public "add"(arg0: $LittleBox$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "copy"(): $LittleBoxes
public "all"(): $Iterable<($LittleBox)>
public "mirror"(arg0: $Axis$Type, arg1: $LittleBoxAbsolute$Type): void
public "volume"(): double
public "convertTo"(arg0: $LittleGrid$Type): void
public "addBox"(arg0: $LittleGrid$Type, arg1: $BlockPos$Type, arg2: $LittleBox$Type): $LittleBox
public "getSurroundingBox"(): $LittleBox
public "getGrid"(): $LittleGrid
public "generateBlockWise"(): $HashMapList<($BlockPos), ($LittleBox)>
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "smallest"(): integer
get "empty"(): boolean
get "surroundingBox"(): $LittleBox
get "grid"(): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleBoxes$Type = ($LittleBoxes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleBoxes_ = $LittleBoxes$Type;
}}
declare module "packages/team/creative/littletiles/client/render/block/$BERenderManager" {
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IndexedCollector, $IndexedCollector$Type} from "packages/team/creative/creativecore/common/util/type/list/$IndexedCollector"
import {$RenderingBlockContext, $RenderingBlockContext$Type} from "packages/team/creative/littletiles/client/render/cache/build/$RenderingBlockContext"
import {$BlockBufferCache, $BlockBufferCache$Type} from "packages/team/creative/littletiles/client/render/cache/$BlockBufferCache"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$BufferCache, $BufferCache$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCache"
import {$RenderChunkExtender, $RenderChunkExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$RenderChunkExtender"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChunkLayerMap, $ChunkLayerMap$Type} from "packages/team/creative/creativecore/common/util/type/map/$ChunkLayerMap"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $BERenderManager {
 "hasLightChanged": boolean
readonly "boxCache": $ChunkLayerMap<($IndexedCollector<($LittleRenderBox)>)>

constructor(arg0: $BETiles$Type)

public "resetRenderingState"(): void
public "queue"(arg0: boolean, arg1: $RenderChunkExtender$Type): void
public "getRenderBoundingBox"(): $AABB
public "getMaxRenderDistance"(): double
public "isBlocked"(): boolean
public "getRenderingBoxes"(arg0: $RenderingBlockContext$Type, arg1: $RenderType$Type): $IndexedCollector<($LittleRenderBox)>
public "onNeighbourChanged"(): void
public static "getRenderChunk"(arg0: $Level$Type, arg1: $BlockPos$Type): $RenderChunkExtender
public "getRenderChunk"(): $RenderChunkExtender
public "finishBuildingCache"(arg0: integer, arg1: $ChunkLayerMap$Type<($BufferCache$Type)>, arg2: integer, arg3: boolean): boolean
public "unsetBlocked"(): void
public "tilesChanged"(): void
public "getAndSetBlocked"(): boolean
public "chunkUpdate"(arg0: $RenderChunkExtender$Type): void
public "setBe"(arg0: $BETiles$Type): void
public "getBufferCache"(): $BlockBufferCache
public "chunkUnload"(): void
public "beforeBuilding"(arg0: $RenderingBlockContext$Type): void
public "startBuildingCache"(): integer
public "markRenderBoundingBoxDirty"(): void
public "isInQueue"(): boolean
get "renderBoundingBox"(): $AABB
get "maxRenderDistance"(): double
get "blocked"(): boolean
get "renderChunk"(): $RenderChunkExtender
get "andSetBlocked"(): boolean
set "be"(value: $BETiles$Type)
get "bufferCache"(): $BlockBufferCache
get "inQueue"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BERenderManager$Type = ($BERenderManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BERenderManager_ = $BERenderManager$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/event/$GuiControlChangedEvent" {
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$GuiControlEvent, $GuiControlEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiControlEvent"

export class $GuiControlChangedEvent<T extends $GuiControl> extends $GuiControlEvent<(T)> {
readonly "control": T

constructor(arg0: T)

public "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiControlChangedEvent$Type<T> = ($GuiControlChangedEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiControlChangedEvent_<T> = $GuiControlChangedEvent$Type<(T)>;
}}
declare module "packages/team/creative/creativecore/client/render/text/$CompiledText$FormattedTextSplit" {
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $CompiledText$FormattedTextSplit extends $Record {

constructor(head: $FormattedText$Type, tail: $FormattedText$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "tail"(): $FormattedText
public "head"(): $FormattedText
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompiledText$FormattedTextSplit$Type = ($CompiledText$FormattedTextSplit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompiledText$FormattedTextSplit_ = $CompiledText$FormattedTextSplit$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/box/$ABB" {
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IVecOrigin, $IVecOrigin$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$CollisionCoordinator, $CollisionCoordinator$Type} from "packages/team/creative/creativecore/common/util/math/collision/$CollisionCoordinator"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BoxCorner, $BoxCorner$Type} from "packages/team/creative/creativecore/common/util/math/box/$BoxCorner"

export class $ABB {
 "minX": double
 "minY": double
 "minZ": double
 "maxX": double
 "maxY": double
 "maxZ": double

constructor(arg0: $AABB$Type)
constructor(arg0: $ABB$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)

public "getCorners"(): ($Vec3d)[]
public "getRotatedCorners"(arg0: $IVecOrigin$Type): ($Vec3d)[]
public "getOuterCorner"(arg0: $Facing$Type, arg1: $IVecOrigin$Type, arg2: double, arg3: double, arg4: double, arg5: double): ($Vec3d)[]
public "cornerValue"(arg0: $AABB$Type, arg1: $BoxCorner$Type, arg2: $Axis$Type): double
public static "createEmptyBox"(): $ABB
public "get"(arg0: $AABB$Type, arg1: $Facing$Type): double
public "get"(arg0: $Facing$Type): double
public "equals"(arg0: $AABB$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public static "min"(arg0: $AABB$Type, arg1: $Direction$Axis$Type): double
public "min"(arg0: $Direction$Axis$Type): double
public "min"(arg0: $Axis$Type): double
public static "min"(arg0: $AABB$Type, arg1: $Axis$Type): double
public "max"(arg0: $Direction$Axis$Type): double
public static "max"(arg0: $AABB$Type, arg1: $Axis$Type): double
public static "max"(arg0: $AABB$Type, arg1: $Direction$Axis$Type): double
public "max"(arg0: $Axis$Type): double
public "contains"(arg0: $Vec3d$Type): boolean
public "contains"(arg0: double, arg1: double, arg2: double): boolean
public "contains"(arg0: $Vec3$Type): boolean
public "copy"(): $ABB
public "move"(arg0: double, arg1: double, arg2: double): void
public "include"(arg0: $Facing$Type, arg1: double): void
public "include"(arg0: $Vec3d$Type): void
public "intersects"(arg0: $AABB$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public "intersects"(arg0: $Vec3$Type, arg1: $Vec3$Type): boolean
public "intersects"(arg0: $ABB$Type): boolean
public "getCenter"(): $Vec3
public "moveCopy"(arg0: double, arg1: double, arg2: double): $ABB
public "cornerX"(arg0: $BoxCorner$Type): double
public "cornerY"(arg0: $BoxCorner$Type): double
public "cornerZ"(arg0: $BoxCorner$Type): double
public "toVanilla"(): $AABB
public "intersectsWithAxis"(arg0: $Axis$Type, arg1: $AABB$Type): boolean
public "intersectsWithAxis"(arg0: $Axis$Type, arg1: $Axis$Type, arg2: double, arg3: double): boolean
public "intersectsWithAxis"(arg0: $Axis$Type, arg1: $ABB$Type): boolean
public static "clip"(arg0: $Iterable$Type<($ABB$Type)>, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: $BlockPos$Type): $BlockHitResult
public "intersectsPrecise"(arg0: $AABB$Type): boolean
public "calculateAxisOffset"(arg0: $Axis$Type, arg1: $Axis$Type, arg2: $Axis$Type, arg3: $AABB$Type, arg4: double): double
public "rayTrace"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type): $BlockHitResult
public "corner"(arg0: $BoxCorner$Type): $Vec3d
public "createRotatedSurroundingInverseInternal"(arg0: $CollisionCoordinator$Type): $ABB
public "createRotatedSurrounding"(arg0: $CollisionCoordinator$Type): $ABB
get "corners"(): ($Vec3d)[]
get "center"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ABB$Type = ($ABB);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ABB_ = $ABB$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder$GuiSyncHolderGlobal" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$GuiSyncGlobalLayer, $GuiSyncGlobalLayer$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncGlobalLayer"
import {$GuiSyncControl, $GuiSyncControl$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncControl"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$GuiSync, $GuiSync$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSync"
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$GuiSyncHolder, $GuiSyncHolder$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder"
import {$GuiSyncGlobal, $GuiSyncGlobal$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncGlobal"

export class $GuiSyncHolder$GuiSyncHolderGlobal extends $GuiSyncHolder {
static readonly "GLOBAL": $GuiSyncHolder$GuiSyncHolderGlobal

constructor()

public "register"<C extends $GuiControl, T extends $Tag>(arg0: string, arg1: $BiConsumer$Type<(C), (T)>): $GuiSyncGlobal<(C), (T)>
public "layer"<T extends $GuiLayer>(arg0: string, arg1: $Function$Type<($CompoundTag$Type), (T)>): $GuiSyncGlobalLayer<(T)>
public "path"(): string
public "getControlSync"(arg0: string): $GuiSyncControl<(any), (any)>
public "getSync"(arg0: string): $GuiSync<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSyncHolder$GuiSyncHolderGlobal$Type = ($GuiSyncHolder$GuiSyncHolderGlobal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSyncHolder$GuiSyncHolderGlobal_ = $GuiSyncHolder$GuiSyncHolderGlobal$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/logic/$SignalLogicOperator" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SignalInputCondition, $SignalInputCondition$Type} from "packages/team/creative/littletiles/common/structure/signal/input/$SignalInputCondition"
import {$SignalPatternParser, $SignalPatternParser$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalPatternParser"

export class $SignalLogicOperator extends $Enum<($SignalLogicOperator)> {
static readonly "AND": $SignalLogicOperator
static readonly "OR": $SignalLogicOperator
static readonly "XOR": $SignalLogicOperator
static readonly "BITWISE_AND": $SignalLogicOperator
static readonly "BITWISE_OR": $SignalLogicOperator
static readonly "BITWISE_XOR": $SignalLogicOperator
static readonly "ADD": $SignalLogicOperator
static readonly "SUB": $SignalLogicOperator
static readonly "MUL": $SignalLogicOperator
static readonly "DIV": $SignalLogicOperator
static readonly "HIGHEST_GENERAL": $SignalLogicOperator
static readonly "HIGHEST": $SignalLogicOperator
readonly "operator": character
readonly "bitwise": boolean
readonly "display": string
readonly "seperator": string


public static "values"(): ($SignalLogicOperator)[]
public static "valueOf"(arg0: string): $SignalLogicOperator
public "create"(arg0: ($SignalInputCondition$Type)[]): $SignalInputCondition
public "lower"(): $SignalLogicOperator
public static "getOperator"(arg0: character): $SignalLogicOperator
public "perform"(arg0: long, arg1: long): long
public "perform"(arg0: integer, arg1: integer): integer
public "perform"(arg0: boolean, arg1: boolean): boolean
public static "getHighest"(arg0: boolean): $SignalLogicOperator
public "goOn"(arg0: $SignalPatternParser$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalLogicOperator$Type = (("add") | ("div") | ("sub") | ("or") | ("mul") | ("and") | ("bitwise_and") | ("xor") | ("bitwise_or") | ("bitwise_xor")) | ($SignalLogicOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalLogicOperator_ = $SignalLogicOperator$Type;
}}
declare module "packages/team/creative/littletiles/common/math/vec/$LittleHitResult" {
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$EntityHitResult, $EntityHitResult$Type} from "packages/net/minecraft/world/phys/$EntityHitResult"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$LittleSubLevel, $LittleSubLevel$Type} from "packages/team/creative/littletiles/common/level/little/$LittleSubLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LittleEntity, $LittleEntity$Type} from "packages/team/creative/littletiles/common/entity/$LittleEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LittleHitResult extends $EntityHitResult {
readonly "hit": $HitResult
readonly "level": $LittleSubLevel

constructor(arg0: $Entity$Type, arg1: $HitResult$Type, arg2: $LittleSubLevel$Type)

public "getRealLocation"(): $Vec3
public "asBlockHit"(): $BlockHitResult
public "asEntityHit"(): $EntityHitResult
public "isEntity"(): boolean
public "getHolder"(): $LittleEntity<(any)>
public "isBlock"(): boolean
get "realLocation"(): $Vec3
get "entity"(): boolean
get "holder"(): $LittleEntity<(any)>
get "block"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleHitResult$Type = ($LittleHitResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleHitResult_ = $LittleHitResult$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/style/$ControlFormatting$ControlStyleFace" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ControlFormatting$ControlStyleFace extends $Enum<($ControlFormatting$ControlStyleFace)> {
static readonly "BAR": $ControlFormatting$ControlStyleFace
static readonly "CLICKABLE": $ControlFormatting$ControlStyleFace
static readonly "CLICKABLE_INACTIVE": $ControlFormatting$ControlStyleFace
static readonly "HEADER_BACKGROUND": $ControlFormatting$ControlStyleFace
static readonly "NESTED_BACKGROUND": $ControlFormatting$ControlStyleFace
static readonly "BACKGROUND": $ControlFormatting$ControlStyleFace
static readonly "SLOT": $ControlFormatting$ControlStyleFace
static readonly "NONE": $ControlFormatting$ControlStyleFace
static readonly "DISABLED": $ControlFormatting$ControlStyleFace


public static "values"(): ($ControlFormatting$ControlStyleFace)[]
public static "valueOf"(arg0: string): $ControlFormatting$ControlStyleFace
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlFormatting$ControlStyleFace$Type = (("nested_background") | ("bar") | ("clickable_inactive") | ("background") | ("clickable") | ("header_background") | ("disabled") | ("slot") | ("none")) | ($ControlFormatting$ControlStyleFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlFormatting$ControlStyleFace_ = $ControlFormatting$ControlStyleFace$Type;
}}
declare module "packages/team/creative/littletiles/common/ingredient/$LittleIngredients" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LittleIngredientBase, $LittleIngredientBase$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredientBase"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LittleIngredient, $LittleIngredient$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredient"

export class $LittleIngredients extends $LittleIngredientBase<($LittleIngredients)> implements $Iterable<($LittleIngredient)> {

constructor(...arg0: ($LittleIngredient$Type<(any)>)[])
constructor()

public "add"(arg0: $LittleIngredient$Type<(any)>): $LittleIngredient<(any)>
public "add"(arg0: $LittleIngredients$Type): $LittleIngredients
public "get"<T extends $LittleIngredient<(any)>>(arg0: $Class$Type<(T)>): T
public "scale"(arg0: integer): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($LittleIngredient)>
public "contains"(arg0: $Class$Type<(any)>): boolean
public "set"(arg0: $Class$Type<(any)>, arg1: $LittleIngredient$Type<(any)>): void
public "getContent"(): ($LittleIngredient<(any)>)[]
public "sub"(arg0: $LittleIngredient$Type<(any)>): $LittleIngredient<(any)>
public "sub"(arg0: $LittleIngredients$Type): $LittleIngredients
public "handleOverflow"(): $List<($ItemStack)>
public "getMinimumCount"(arg0: $LittleIngredients$Type, arg1: integer): integer
public "spliterator"(): $Spliterator<($LittleIngredient<(any)>)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$LittleIngredient>;
get "empty"(): boolean
get "content"(): ($LittleIngredient<(any)>)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleIngredients$Type = ($LittleIngredients);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleIngredients_ = $LittleIngredients$Type;
}}
declare module "packages/team/creative/littletiles/common/math/face/$LittleServerFace" {
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ILittleFace, $ILittleFace$Type} from "packages/team/creative/littletiles/common/math/face/$ILittleFace"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$VectorFan, $VectorFan$Type} from "packages/team/creative/creativecore/common/util/math/geo/$VectorFan"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleFaceState, $LittleFaceState$Type} from "packages/team/creative/littletiles/common/math/face/$LittleFaceState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $LittleServerFace implements $ILittleFace {
 "grid": $LittleGrid
 "box": $LittleBox
 "one": $Axis
 "two": $Axis
 "facing": $Facing
 "minOne": integer
 "minTwo": integer
 "maxOne": integer
 "maxTwo": integer
 "origin": integer
 "oldOrigin": integer
 "filled": ((boolean)[])[]

constructor(arg0: $BETiles$Type)

public "getSmallest"(): integer
public "maxTwo"(): integer
public "maxOne"(): integer
public "minTwo"(): integer
public "minOne"(): integer
public static "calculate"(arg0: $BETiles$Type, arg1: $Facing$Type, arg2: $LittleServerFace$Type, arg3: $LittleTile$Type, arg4: boolean): $LittleFaceState
public "calculate"(): $LittleFaceState
public "supportsCutting"(): boolean
public "setPartiallyFilled"(): void
public "set"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleBox$Type, arg3: $Facing$Type): $LittleServerFace
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "set"(arg0: integer, arg1: integer, arg2: boolean): void
public "box"(): $LittleBox
public "move"(arg0: $Facing$Type): void
public "origin"(): integer
public "one"(): $Axis
public "two"(): $Axis
public "facing"(): $Facing
public "cut"(arg0: $List$Type<($VectorFan$Type)>): void
public "isFaceInsideBlock"(): boolean
public "isPartiallyFilled"(): boolean
public "convertTo"(arg0: $LittleGrid$Type): void
public "getBox"(): $LittleBox
public "isFilled"(): boolean
public "getGrid"(): $LittleGrid
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "smallest"(): integer
get "faceInsideBlock"(): boolean
get "partiallyFilled"(): boolean
get "filled"(): boolean
get "grid"(): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleServerFace$Type = ($LittleServerFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleServerFace_ = $LittleServerFace$Type;
}}
declare module "packages/team/creative/littletiles/common/block/mc/$BlockTile" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LittlePhysicBlock, $LittlePhysicBlock$Type} from "packages/team/creative/littletiles/api/common/block/$LittlePhysicBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StructureParentCollection, $StructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$StructureParentCollection"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$LittleLevel, $LittleLevel$Type} from "packages/team/creative/littletiles/common/level/little/$LittleLevel"

export class $BlockTile extends $BaseEntityBlock implements $LittlePhysicBlock, $SimpleWaterloggedBlock {
static readonly "SILENT": $SoundType
static readonly "WATERLOGGED": $BooleanProperty
readonly "ticking": boolean
readonly "rendered": boolean
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

constructor(arg0: boolean, arg1: boolean)

public static "getState"(arg0: $BETiles$Type): $BlockState
public static "getState"(arg0: $List$Type<($StructureParentCollection$Type)>): $BlockState
public static "getState"(arg0: boolean, arg1: boolean): $BlockState
public static "getState"(arg0: $BlockState$Type, arg1: boolean, arg2: boolean): $BlockState
public "bound"(arg0: $LittleLevel$Type, arg1: $BlockPos$Type, arg2: $Facing$Type): double
public "getRespawnPosition"(arg0: $BlockState$Type, arg1: $EntityType$Type<(any)>, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: float, arg5: $LivingEntity$Type): $Optional<($Vec3)>
public "getBedDirection"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $Direction
public "getBed"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): $LittleStructure
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getStateAtViewpoint"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Vec3$Type): $BlockState
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
public static "getStateByAttribute"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): $BlockState
public "removedByPlayerClient"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "isBed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "setBedOccupied"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type, arg4: boolean): void
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $Direction$Type): boolean
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "dropFromExplosion"(arg0: $Explosion$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
public "getBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type): $BlockPathTypes
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "getMapColor"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $MapColor$Type): $MapColor
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $Fluid$Type): boolean
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getSelectionShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VoxelShape
public "useClient"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public static "selectEntireBlock"(arg0: $Player$Type, arg1: boolean): boolean
public "getSoundTypeClient"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $SoundType
public static "isTicking"(arg0: $BlockState$Type): boolean
public static "loadBE"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BETiles
public "weight"(arg0: $LittleLevel$Type, arg1: $BlockPos$Type): float
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
export type $BlockTile$Type = ($BlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTile_ = $BlockTile$Type;
}}
declare module "packages/team/creative/littletiles/common/ingredient/$LittleInventory" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"

export class $LittleInventory implements $Iterable<($ItemStack)> {
 "allowDrop": boolean

constructor(arg0: $Player$Type)
constructor(arg0: $IItemHandler$Type)
constructor(arg0: $Player$Type, arg1: $IItemHandler$Type)

public "stopSimulation"(): void
public "startSimulation"(): void
public "isSimulation"(): boolean
public "saveInventories"(): void
public "reloadInventories"(arg0: boolean): void
public "addOrDropStacks"(arg0: $List$Type<($ItemStack$Type)>): void
public "get"(arg0: integer): $ItemStack
public "size"(): integer
public "iterator"(): $Iterator<($ItemStack)>
public "take"(arg0: $LittleIngredients$Type): void
public "addStack"(arg0: $ItemStack$Type): boolean
public "addStack"(arg0: $ItemStack$Type, arg1: boolean): boolean
public "getPlayer"(): $Player
public "give"(arg0: $LittleIngredients$Type): void
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "simulation"(): boolean
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleInventory$Type = ($LittleInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleInventory_ = $LittleInventory$Type;
}}
declare module "packages/team/creative/littletiles/mixin/server/level/$ServerChunkCacheAccessor" {
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"

export interface $ServerChunkCacheAccessor {

 "getMainThread"(): $Thread

(): $Thread
}

export namespace $ServerChunkCacheAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkCacheAccessor$Type = ($ServerChunkCacheAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerChunkCacheAccessor_ = $ServerChunkCacheAccessor$Type;
}}
declare module "packages/team/creative/littletiles/mixin/client/render/$LightTextureAccessor" {
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$DynamicTexture, $DynamicTexture$Type} from "packages/net/minecraft/client/renderer/texture/$DynamicTexture"

export interface $LightTextureAccessor {

 "getLightTexture"(): $DynamicTexture
 "getLightPixels"(): $NativeImage
}

export namespace $LightTextureAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightTextureAccessor$Type = ($LightTextureAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightTextureAccessor_ = $LightTextureAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/recipe/$PremadeShapedRecipeSerializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PremadeShapedRecipeSerializer implements $RecipeSerializer<($ShapedRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PremadeShapedRecipeSerializer$Type = ($PremadeShapedRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PremadeShapedRecipeSerializer_ = $PremadeShapedRecipeSerializer$Type;
}}
declare module "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipelineType$LittleRenderPipelineTypeForge" {
import {$LittleRenderPipelineForge, $LittleRenderPipelineForge$Type} from "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipelineForge"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LittleRenderPipelineType, $LittleRenderPipelineType$Type} from "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipelineType"

export class $LittleRenderPipelineType$LittleRenderPipelineTypeForge extends $LittleRenderPipelineType<($LittleRenderPipelineForge)> {
static readonly "FORGE": $LittleRenderPipelineType$LittleRenderPipelineTypeForge
readonly "factory": $Supplier<(T)>
readonly "id": integer


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleRenderPipelineType$LittleRenderPipelineTypeForge$Type = ($LittleRenderPipelineType$LittleRenderPipelineTypeForge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleRenderPipelineType$LittleRenderPipelineTypeForge_ = $LittleRenderPipelineType$LittleRenderPipelineTypeForge$Type;
}}
declare module "packages/team/creative/littletiles/common/level/$ILevelProvider" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $ILevelProvider {

 "hasLevel"(): boolean
 "getLevel"(): $Level

(): boolean
}

export namespace $ILevelProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelProvider$Type = ($ILevelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILevelProvider_ = $ILevelProvider$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/collision/$CollisionCoordinator" {
import {$ABB, $ABB$Type} from "packages/team/creative/creativecore/common/util/math/box/$ABB"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Matrix4, $Matrix4$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$Matrix4"
import {$IVecOrigin, $IVecOrigin$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Matrix3, $Matrix3$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$Matrix3"

export class $CollisionCoordinator {
readonly "rotX": double
readonly "rotY": double
readonly "rotZ": double
readonly "offX": double
readonly "offY": double
readonly "offZ": double
 "rotationX": $Matrix3
 "rotationY": $Matrix3
 "rotationZ": $Matrix3
 "rotationXInv": $Matrix3
 "rotationYInv": $Matrix3
 "rotationZInv": $Matrix3
 "translation": $Vec3d
readonly "hasRotX": boolean
readonly "hasRotY": boolean
readonly "hasRotZ": boolean
readonly "hasOffX": boolean
readonly "hasOffY": boolean
readonly "hasOffZ": boolean
readonly "hasTranslation": boolean
readonly "hasOneRotation": boolean
readonly "hasRotation": boolean
readonly "isSimple": boolean

constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: $IVecOrigin$Type)

public "hasOnlyTranslation"(): boolean
public "transformInverted"(arg0: $Vec3d$Type, arg1: double): void
public "get"(arg0: double): $Matrix4
public "original"(): $IVecOrigin
public "transform"(arg0: $Vec3d$Type, arg1: double): void
public "transform"(arg0: $Matrix4$Type, arg1: $Vec3d$Type): void
public "finish"(): void
public "moved"(): $IVecOrigin
public "computeSurroundingBox"(arg0: $ABB$Type): $ABB
public "computeInverseSurroundingBoxInternal"(arg0: $ABB$Type): $ABB
public "getRotationMatrixInv"(arg0: $Axis$Type): $Matrix3
public "getNumberOfHalfRotations"(): integer
public "getRotationDegree"(arg0: $Axis$Type): double
public "getRotationMatrix"(arg0: $Axis$Type): $Matrix3
public "getInverted"(arg0: double): $Matrix4
get "numberOfHalfRotations"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollisionCoordinator$Type = ($CollisionCoordinator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollisionCoordinator_ = $CollisionCoordinator$Type;
}}
declare module "packages/team/creative/littletiles/common/entity/$LittleEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$OrientationAwareEntity, $OrientationAwareEntity$Type} from "packages/team/creative/littletiles/common/entity/$OrientationAwareEntity"
import {$IVecOrigin, $IVecOrigin$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$INoPushEntity, $INoPushEntity$Type} from "packages/team/creative/littletiles/common/entity/$INoPushEntity"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$CollisionCoordinator, $CollisionCoordinator$Type} from "packages/team/creative/creativecore/common/util/math/collision/$CollisionCoordinator"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$LittleEntityRenderManager, $LittleEntityRenderManager$Type} from "packages/team/creative/littletiles/client/render/entity/$LittleEntityRenderManager"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LittleHitResult, $LittleHitResult$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleHitResult"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$CreativePacket, $CreativePacket$Type} from "packages/team/creative/creativecore/common/network/$CreativePacket"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$LevelTransitionListener, $LevelTransitionListener$Type} from "packages/team/creative/littletiles/api/client/entity/$LevelTransitionListener"
import {$LittleSubLevel, $LittleSubLevel$Type} from "packages/team/creative/littletiles/common/level/little/$LittleSubLevel"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LittleEntityPhysic, $LittleEntityPhysic$Type} from "packages/team/creative/littletiles/common/entity/$LittleEntityPhysic"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $LittleEntity<T extends $LittleEntityPhysic<(any)>> extends $Entity implements $OrientationAwareEntity, $INoPushEntity, $LevelTransitionListener {
readonly "physic": T
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $LittleSubLevel$Type, arg3: $Vec3d$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $Vec3d$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "transform"(arg0: $CollisionCoordinator$Type): void
public "entities"(): $Iterable<($Entity)>
public "m_7378_"(arg0: $CompoundTag$Type): void
public "m_7380_"(arg0: $CompoundTag$Type): void
public "interact"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "isOnFire"(): boolean
public "getTopLevelEntity"(): $LittleEntity<(any)>
public "children"(): $Iterable<($OrientationAwareEntity)>
public "getOrigin"(): $IVecOrigin
public "shouldRender"(arg0: double, arg1: double, arg2: double): boolean
public "canBeCollidedWith"(): boolean
public "displayFireAnimation"(): boolean
public "interactAt"(arg0: $Player$Type, arg1: $Vec3$Type, arg2: $InteractionHand$Type): $InteractionResult
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "setPos"(arg0: double, arg1: double, arg2: double): void
public "kill"(): void
public "fireImmune"(): boolean
public "rayTrace"(arg0: $Vec3$Type, arg1: $Vec3$Type): $LittleHitResult
public "isReal"(): boolean
public "parentVecOriginChange"(arg0: $IVecOrigin$Type): void
public "onAddedToWorld"(): void
public "onRemovedFromWorld"(): void
public "getSubLevel"(): $LittleSubLevel
public "hasLoaded"(): boolean
public "getRealLevel"(): $Level
public "changedLevel"(arg0: $Level$Type, arg1: $Level$Type): void
public "stopTracking"(arg0: $ServerPlayer$Type): void
public "initClientPacket"(): $CreativePacket
public "markOriginChange"(): void
public "resetOriginChange"(): void
public "loadEntity"(arg0: $CompoundTag$Type): void
public "saveEntity"(arg0: $CompoundTag$Type): void
public "getRealBB"(): $AABB
public "getRealCenter"(): $Vec3
public "destroyAnimation"(): void
public "performTick"(): void
public "syncMovement"(): void
public "internalTick"(): void
public "getRenderManager"(): $LittleEntityRenderManager<(any)>
public "initialTick"(): void
public "startTracking"(arg0: $ServerPlayer$Type): void
public "prepareChangeLevel"(arg0: $Level$Type, arg1: $Level$Type): void
get "onFire"(): boolean
get "topLevelEntity"(): $LittleEntity<(any)>
get "origin"(): $IVecOrigin
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "real"(): boolean
get "subLevel"(): $LittleSubLevel
get "realLevel"(): $Level
get "realBB"(): $AABB
get "realCenter"(): $Vec3
get "renderManager"(): $LittleEntityRenderManager<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleEntity$Type<T> = ($LittleEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleEntity_<T> = $LittleEntity$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/client/level/$ClientLevelExtender" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TransientEntitySectionManager, $TransientEntitySectionManager$Type} from "packages/net/minecraft/world/level/entity/$TransientEntitySectionManager"
import {$BlockStatePredictionHandler, $BlockStatePredictionHandler$Type} from "packages/net/minecraft/client/multiplayer/prediction/$BlockStatePredictionHandler"

export interface $ClientLevelExtender {

 "setServerVerifiedBlockStateExtender"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): void
 "blockStatePredictionHandler"(): $BlockStatePredictionHandler
 "handleBlockChangedAckExtender"(arg0: integer): void
 "syncBlockStateExtender"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Vec3$Type): void
 "getEntityStorage"(): $TransientEntitySectionManager<(any)>
}

export namespace $ClientLevelExtender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelExtender$Type = ($ClientLevelExtender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientLevelExtender_ = $ClientLevelExtender$Type;
}}
declare module "packages/team/creative/littletiles/mixin/client/render/$ParticleEngineAccessor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ParticleEngineAccessor {

 "getSpriteSets"(): $Map<($ResourceLocation), (any)>

(): $Map<($ResourceLocation), (any)>
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngineAccessor$Type = ($ParticleEngineAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEngineAccessor_ = $ParticleEngineAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/ingredient/$BlockIngredientEntry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleBlock, $LittleBlock$Type} from "packages/team/creative/littletiles/api/common/block/$LittleBlock"

export class $BlockIngredientEntry {
readonly "block": $LittleBlock
 "value": double


public "getBlockStack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: integer): void
public "isEmpty"(): boolean
public "getState"(): $BlockState
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "copy"(): $BlockIngredientEntry
public "copy"(arg0: double): $BlockIngredientEntry
public "is"(arg0: $ItemStack$Type): boolean
public "scaleAdvanced"(arg0: double): void
get "blockStack"(): $ItemStack
get "empty"(): boolean
get "state"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockIngredientEntry$Type = ($BlockIngredientEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockIngredientEntry_ = $BlockIngredientEntry$Type;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$TerrainRenderPassAccessor" {
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $TerrainRenderPassAccessor {

 "getLayer"(): $RenderType

(): $RenderType
}

export namespace $TerrainRenderPassAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerrainRenderPassAccessor$Type = ($TerrainRenderPassAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerrainRenderPassAccessor_ = $TerrainRenderPassAccessor$Type;
}}
declare module "packages/team/creative/littletiles/mixin/common/level/$LevelAccessor" {
import {$LevelEntityGetter, $LevelEntityGetter$Type} from "packages/net/minecraft/world/level/entity/$LevelEntityGetter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $LevelAccessor {

 "callGetEntities"(): $LevelEntityGetter<($Entity)>

(): $LevelEntityGetter<($Entity)>
}

export namespace $LevelAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelAccessor$Type = ($LevelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelAccessor_ = $LevelAccessor$Type;
}}
declare module "packages/team/creative/littletiles/client/render/cache/build/$RenderingBlockContext" {
import {$RenderChunkExtender, $RenderChunkExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$RenderChunkExtender"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $RenderingBlockContext {
readonly "be": $BETiles
readonly "state": $BlockState
readonly "chunk": $RenderChunkExtender
 "index": integer
 "neighboursBEs": $HashMap<($Facing), ($BETiles)>

constructor(arg0: $BETiles$Type, arg1: $RenderChunkExtender$Type)

public "unsetBlocked"(): void
public "checkLoaded"(): void
public "beforeBuilding"(): void
public "clearQuadBuilding"(): void
public "checkRemoved"(): void
public "getNeighbour"(arg0: $Facing$Type): $BETiles
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingBlockContext$Type = ($RenderingBlockContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderingBlockContext_ = $RenderingBlockContext$Type;
}}
declare module "packages/team/creative/littletiles/common/block/entity/$BETiles" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IForgeBlockEntity, $IForgeBlockEntity$Type} from "packages/net/minecraftforge/common/extensions/$IForgeBlockEntity"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$Pair, $Pair$Type} from "packages/team/creative/creativecore/common/util/type/list/$Pair"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$LittleBoxReturnedVolume, $LittleBoxReturnedVolume$Type} from "packages/team/creative/littletiles/common/math/box/volume/$LittleBoxReturnedVolume"
import {$IStructureParentCollection, $IStructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BETiles$SideSolidCache, $BETiles$SideSolidCache$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles$SideSolidCache"
import {$BETiles$BlockEntityInteractor, $BETiles$BlockEntityInteractor$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles$BlockEntityInteractor"
import {$LittleTileContext, $LittleTileContext$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTileContext"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$ILittleBlockEntity, $ILittleBlockEntity$Type} from "packages/team/creative/littletiles/api/common/block/$ILittleBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LittleFace, $LittleFace$Type} from "packages/team/creative/littletiles/common/math/face/$LittleFace"
import {$BERenderManager, $BERenderManager$Type} from "packages/team/creative/littletiles/client/render/block/$BERenderManager"
import {$RenderChunkExtender, $RenderChunkExtender$Type} from "packages/team/creative/littletiles/client/render/mc/$RenderChunkExtender"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityCreative, $BlockEntityCreative$Type} from "packages/team/creative/creativecore/common/be/$BlockEntityCreative"

export class $BETiles extends $BlockEntityCreative implements $IGridBased, $ILittleBlockEntity, $IForgeBlockEntity {
readonly "sideCache": $BETiles$SideSolidCache
 "render": $BERenderManager
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getBlockBBWithOffset"(): $AABB
public "shouldFaceBeRendered"(arg0: $LittleFace$Type, arg1: $LittleTile$Type): boolean
public "forceSupportAttribute"(arg0: integer): $BETiles
public "combineTilesSecretly"(): boolean
public "combineTilesSecretly"(arg0: integer): boolean
public "getSmallest"(): integer
public "allBoxes"(): $Iterable<($Pair<($IParentCollection), ($LittleTile)>)>
public "isSpaceFor"(arg0: $LittleBox$Type, arg1: $BiPredicate$Type<($IParentCollection$Type), ($LittleTile$Type)>): boolean
public "isSpaceFor"(arg0: $LittleBox$Type): boolean
public "isSpaceFor"(arg0: $LittleBox$Type, arg1: $Predicate$Type<($LittleTile$Type)>): boolean
public "groups"(): $Iterable<($IParentCollection)>
public "toString"(): string
public "isEmpty"(): boolean
public "getState"(arg0: $AABB$Type, arg1: boolean): $BlockState
public "rotate"(arg0: $Rotation$Type): void
public "onLoad"(): void
public "cutOut"(arg0: $LittleGrid$Type, arg1: $LittleBox$Type, arg2: $List$Type<($LittleBox$Type)>, arg3: $LittleBoxReturnedVolume$Type): $List<($LittleBox)>
public "tick"(): void
public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockEntity$Type): void
public "getStructure"(arg0: integer): $IStructureParentCollection
public "mirror"(arg0: $Mirror$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setLevel"(arg0: $Level$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "onChunkUnloaded"(): void
public "convertTo"(arg0: $LittleGrid$Type): void
public "convertBlockToVanilla"(): boolean
public "rendering"(): $Iterable<($LittleStructure)>
public "rayTrace"(arg0: $Player$Type): $BlockHitResult
public "rayTrace"(arg0: $Vec3$Type, arg1: $Vec3$Type): $BlockHitResult
public "setLoaded"(): void
public "shouldCheckForCollision"(): boolean
public "getBlockShape"(): $VoxelShape
public "structures"(): $Iterable<($IStructureParentCollection)>
public "hasLoaded"(): boolean
public "noneStructureTiles"(): $IParentCollection
public "loadedStructures"(): $Iterable<($LittleStructure)>
public "loadedStructures"(arg0: integer): $Iterable<($LittleStructure)>
public "allTiles"(): $Iterable<($Pair<($IParentCollection), ($LittleTile)>)>
public "onNeighbourChanged"(arg0: $Facing$Type): void
public "isTicking"(): boolean
public "updateTiles"(arg0: $Consumer$Type<($BETiles$BlockEntityInteractor$Type)>): void
public "updateTiles"(): void
public "updateTiles"(arg0: boolean): void
public "isRendered"(): boolean
public "handleUpdate"(arg0: $CompoundTag$Type, arg1: boolean): void
public "ticking"(): $Iterable<($LittleStructure)>
public "unloaded"(): boolean
public "getGrid"(): $LittleGrid
public "notifyStructure"(): void
public "tilesCount"(): integer
public "updateNeighbour"(): void
public "rebuildFaces"(): void
public "getBlockBB"(): $AABB
public "updateLighting"(): void
public "updateQuadCache"(arg0: $RenderChunkExtender$Type): void
public "isBoxFilled"(arg0: $LittleBox$Type): boolean
public "isRenderingEmpty"(): boolean
public "intersectingTile"(arg0: $LittleBox$Type): $Pair<($IParentCollection), ($LittleTile)>
public "getFocusedTile"(arg0: $Vec3$Type, arg1: $Vec3$Type): $LittleTileContext
public "getFocusedTile"(arg0: $Player$Type, arg1: float): $LittleTileContext
public "combineTiles"(arg0: integer): boolean
public "combineTiles"(): boolean
public "fillUsedIds"(arg0: $BitSet$Type): void
public "updateTilesSecretly"(arg0: $Consumer$Type<($BETiles$BlockEntityInteractor$Type)>): void
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "getPersistentData"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
get "blockBBWithOffset"(): $AABB
get "smallest"(): integer
get "empty"(): boolean
set "level"(value: $Level$Type)
get "blockShape"(): $VoxelShape
get "rendered"(): boolean
get "grid"(): $LittleGrid
get "blockBB"(): $AABB
get "renderingEmpty"(): boolean
get "persistentData"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BETiles$Type = ($BETiles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BETiles_ = $BETiles$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/connection/$IStructureConnection" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IStructureConnection {

 "checkConnection"(): void
 "getStructurePosition"(): $BlockPos
 "getIndex"(): integer
 "getAttribute"(): integer
 "getStructure"(): $LittleStructure
 "isLinkToAnotherWorld"(): boolean
}

export namespace $IStructureConnection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructureConnection$Type = ($IStructureConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStructureConnection_ = $IStructureConnection$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/logic/$SignalTarget" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$ISignalComponent, $ISignalComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalComponent"
import {$SignalTarget$SignalCustomIndex, $SignalTarget$SignalCustomIndex$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalTarget$SignalCustomIndex"
import {$SignalPatternParser, $SignalPatternParser$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalPatternParser"
import {$SignalState, $SignalState$Type} from "packages/team/creative/littletiles/common/structure/signal/$SignalState"

export class $SignalTarget {
readonly "child": integer

constructor(arg0: integer)

public static "parseIndex"(arg0: $SignalPatternParser$Type): $SignalTarget$SignalCustomIndex
public "writeBase"(): string
public static "name"(arg0: boolean, arg1: boolean, arg2: integer): string
public "write"(): string
public "getState"(arg0: $LittleStructure$Type): $SignalState
public "getTarget"(arg0: $LittleStructure$Type): $ISignalComponent
public "bandwidth"(arg0: $LittleStructure$Type): integer
public "getBandwidth"(arg0: $LittleStructure$Type): integer
public static "parseTarget"(arg0: $SignalPatternParser$Type, arg1: boolean, arg2: boolean): $SignalTarget
public "isIndexVariable"(): boolean
public "getNestedTarget"(): $SignalTarget
get "indexVariable"(): boolean
get "nestedTarget"(): $SignalTarget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalTarget$Type = ($SignalTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalTarget_ = $SignalTarget$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/$SignalState$SignalStateSize" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SignalState, $SignalState$Type} from "packages/team/creative/littletiles/common/structure/signal/$SignalState"

export class $SignalState$SignalStateSize extends $Enum<($SignalState$SignalStateSize)> {
static readonly "SINGLE": $SignalState$SignalStateSize
static readonly "INT": $SignalState$SignalStateSize
static readonly "LONG": $SignalState$SignalStateSize
readonly "bandwidth": integer


public static "values"(): ($SignalState$SignalStateSize)[]
public "max"(arg0: $SignalState$SignalStateSize$Type): $SignalState$SignalStateSize
public static "valueOf"(arg0: string): $SignalState$SignalStateSize
public "create"(): $SignalState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalState$SignalStateSize$Type = (("single") | ("int") | ("long")) | ($SignalState$SignalStateSize);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalState$SignalStateSize_ = $SignalState$SignalStateSize$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/parent/$ParentCollection" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$BiFilter, $BiFilter$Type} from "packages/team/creative/creativecore/common/util/filter/$BiFilter"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleCollectionSafe, $LittleCollectionSafe$Type} from "packages/team/creative/littletiles/common/block/little/tile/collection/$LittleCollectionSafe"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$LittleServerFace, $LittleServerFace$Type} from "packages/team/creative/littletiles/common/math/face/$LittleServerFace"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $ParentCollection extends $LittleCollectionSafe implements $IParentCollection {

constructor()

public "isStructureChildSafe"(arg0: $LittleStructure$Type): boolean
public "isStructure"(): boolean
public "load"(arg0: $CompoundTag$Type): void
public "filter"(arg0: $BiFilter$Type<($IParentCollection$Type), ($LittleTile$Type)>): $Iterable<($LittleTile)>
public "save"(arg0: $LittleServerFace$Type): $CompoundTag
public "unload"(): void
public "getAttribute"(): integer
public "getStructure"(): $LittleStructure
public "isClient"(): boolean
public "getBE"(): $BETiles
public "isMain"(): boolean
public "isStructureChild"(arg0: $LittleStructure$Type): boolean
public "getRenderingBox"(arg0: $LittleTile$Type, arg1: $LittleBox$Type, arg2: $RenderType$Type): $LittleRenderBox
public "size"(): integer
public "setAttribute"(arg0: integer): void
public "totalSize"(): integer
public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getGrid"(): $LittleGrid
public "iterator"(): $Iterator<($LittleTile)>
public "hasLevel"(): boolean
get "structure"(): boolean
get "attribute"(): integer
get "structure"(): $LittleStructure
get "client"(): boolean
get "bE"(): $BETiles
get "main"(): boolean
set "attribute"(value: integer)
get "level"(): $Level
get "pos"(): $BlockPos
get "grid"(): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParentCollection$Type = ($ParentCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParentCollection_ = $ParentCollection$Type;
}}
declare module "packages/team/creative/littletiles/common/block/mc/$BlockFlowingWater" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ILittleMCBlock, $ILittleMCBlock$Type} from "packages/team/creative/littletiles/api/common/block/$ILittleMCBlock"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Rotation as $Rotation$0, $Rotation$Type as $Rotation$0$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$IFakeRenderingBlock, $IFakeRenderingBlock$Type} from "packages/team/creative/littletiles/api/client/$IFakeRenderingBlock"

export class $BlockFlowingWater extends $Block implements $ILittleMCBlock, $IFakeRenderingBlock {
static readonly "FACING": $EnumProperty<($Direction)>
readonly "still": $Block
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

constructor(arg0: $Block$Type)

public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type, arg2: $LittleVec$Type): $BlockState
public "use"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleBox$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: $InteractionHand$Type): $InteractionResult
public "mirror"(arg0: $BlockState$Type, arg1: $Axis$Type, arg2: $LittleVec$Type): $BlockState
public "noCollision"(): boolean
public "getFogColor"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type, arg3: $Vector3d$Type, arg4: float): $Vector3d
public "canInteract"(): boolean
public "canBeRenderCombined"(arg0: $LittleTile$Type, arg1: $LittleTile$Type): boolean
public "checkEntityCollision"(): boolean
public "canBeConvertedToVanilla"(): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$0$Type): $BlockState
public "getFakeState"(arg0: $BlockState$Type): $BlockState
public "isFluid"(arg0: $TagKey$Type<($Fluid$Type)>): boolean
public "asVanillaBlock"(): $Block
public "getState"(): $BlockState
public "is"(arg0: $ItemStack$Type): boolean
public "is"(arg0: $TagKey$Type<($Block$Type)>): boolean
public "is"(arg0: $Block$Type): boolean
public "getStack"(): $ItemStack
public "blockName"(): string
public static "isTranslucent"(arg0: $Block$Type): boolean
public "isTranslucent"(): boolean
public "exploded"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Explosion$Type): void
public "getSoundType"(): $SoundType
public "getExplosionResistance"(arg0: $LittleTile$Type): float
public "getEnchantPowerBonus"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type): float
public "shouldUseStateForRenderType"(): boolean
public "getFriction"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): float
public "getLightValue"(): integer
public "entityCollided"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): void
public "getRenderBox"(arg0: $LittleGrid$Type, arg1: $RenderType$Type, arg2: $LittleBox$Type, arg3: $LittleElement$Type): $LittleRenderBox
public "randomDisplayTick"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $RandomSource$Type): void
public "cullOverEdge"(): boolean
get "state"(): $BlockState
get "stack"(): $ItemStack
get "translucent"(): boolean
get "soundType"(): $SoundType
get "lightValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFlowingWater$Type = ($BlockFlowingWater);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFlowingWater_ = $BlockFlowingWater$Type;
}}
declare module "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipelineForge" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$LittleRenderPipeline, $LittleRenderPipeline$Type} from "packages/team/creative/littletiles/client/render/cache/pipeline/$LittleRenderPipeline"
import {$RenderingBlockContext, $RenderingBlockContext$Type} from "packages/team/creative/littletiles/client/render/cache/build/$RenderingBlockContext"
import {$ChunkLayerMap, $ChunkLayerMap$Type} from "packages/team/creative/creativecore/common/util/type/map/$ChunkLayerMap"
import {$SingletonList, $SingletonList$Type} from "packages/team/creative/creativecore/common/util/type/list/$SingletonList"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$BufferCache, $BufferCache$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCache"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $LittleRenderPipelineForge extends $LittleRenderPipeline {
static readonly "MC": $Minecraft

constructor()

public "release"(): void
public "reload"(): void
public "buildCache"(arg0: $PoseStack$Type, arg1: $ChunkLayerMap$Type<($BufferCache$Type)>, arg2: $RenderingBlockContext$Type, arg3: $VertexFormat$Type, arg4: $SingletonList$Type<($BakedQuad$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleRenderPipelineForge$Type = ($LittleRenderPipelineForge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleRenderPipelineForge_ = $LittleRenderPipelineForge$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/input/$SignalInputCondition" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$SignalTarget, $SignalTarget$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalTarget"
import {$SignalLogicOperator, $SignalLogicOperator$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalLogicOperator"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$SignalState, $SignalState$Type} from "packages/team/creative/littletiles/common/structure/signal/$SignalState"
import {$SignalPatternParser, $SignalPatternParser$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalPatternParser"

export class $SignalInputCondition {
static readonly "AND_DURATION": float
static readonly "OR_DURATION": float
static readonly "XOR_DURATION": float
static readonly "BAND_DURATION": float
static readonly "BOR_DURATION": float
static readonly "BXOR_DURATION": float
static readonly "NOT_DURATION": float
static readonly "BNOT_DURATION": float
static readonly "VARIABLE_DURATION": float
static readonly "ADD_DURATION": float
static readonly "SUB_DURATION": float
static readonly "MUL_DURATION": float
static readonly "DIV_DURATION": float

constructor()

public "testIndex"(arg0: $SignalState$Type): boolean
public "calculateDelay"(): float
public "target"(): $SignalTarget
public "toString"(): string
public "test"(arg0: $LittleStructure$Type, arg1: boolean): $SignalState
public "write"(): string
public "nested"(): $Iterator<($SignalInputCondition)>
public static "parseInput"(arg0: string): $SignalInputCondition
public static "parseExpression"(arg0: $SignalPatternParser$Type, arg1: (character)[], arg2: $SignalLogicOperator$Type, arg3: boolean, arg4: boolean): $SignalInputCondition
public static "parseExpression"(arg0: $SignalPatternParser$Type, arg1: (character)[], arg2: boolean, arg3: boolean): $SignalInputCondition
public static "tryParseNextCondition"(arg0: $SignalPatternParser$Type, arg1: boolean, arg2: boolean, arg3: boolean): $SignalInputCondition
public static "parseNextCondition"(arg0: $SignalPatternParser$Type, arg1: boolean, arg2: boolean, arg3: boolean): $SignalInputCondition
public static "parseNextCondition"(arg0: $SignalPatternParser$Type, arg1: boolean, arg2: boolean): $SignalInputCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalInputCondition$Type = ($SignalInputCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalInputCondition_ = $SignalInputCondition$Type;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$RenderSectionManagerAccessor" {
import {$RenderSection, $RenderSection$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/$RenderSection"
import {$RenderRegionManager, $RenderRegionManager$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/region/$RenderRegionManager"

export interface $RenderSectionManagerAccessor {

 "callGetRenderSection"(arg0: integer, arg1: integer, arg2: integer): $RenderSection
 "getRegions"(): $RenderRegionManager
}

export namespace $RenderSectionManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderSectionManagerAccessor$Type = ($RenderSectionManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderSectionManagerAccessor_ = $RenderSectionManagerAccessor$Type;
}}
declare module "packages/team/creative/littletiles/client/render/mc/$VertexBufferExtender" {
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$RenderSystem$AutoStorageIndexBuffer, $RenderSystem$AutoStorageIndexBuffer$Type} from "packages/com/mojang/blaze3d/systems/$RenderSystem$AutoStorageIndexBuffer"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$VertexFormat$IndexType, $VertexFormat$IndexType$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$IndexType"

export interface $VertexBufferExtender {

 "setMode"(arg0: $VertexFormat$Mode$Type): void
 "getMode"(): $VertexFormat$Mode
 "setFormat"(arg0: $VertexFormat$Type): void
 "setIndexType"(arg0: $VertexFormat$IndexType$Type): void
 "getIndexCount"(): integer
 "getVertexBufferId"(): integer
 "setIndexCount"(arg0: integer): void
 "getLastUploadedLength"(): integer
 "setLastUploadedLength"(arg0: integer): void
 "getSequentialIndices"(): $RenderSystem$AutoStorageIndexBuffer
 "setSequentialIndices"(arg0: $RenderSystem$AutoStorageIndexBuffer$Type): void
}

export namespace $VertexBufferExtender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBufferExtender$Type = ($VertexBufferExtender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBufferExtender_ = $VertexBufferExtender$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/logic/$SignalTarget$SignalCustomIndex" {
import {$SignalState, $SignalState$Type} from "packages/team/creative/littletiles/common/structure/signal/$SignalState"

export class $SignalTarget$SignalCustomIndex {

constructor()

public "length"(): integer
public "set"(arg0: $SignalState$Type, arg1: integer, arg2: $SignalState$Type): integer
public "write"(): string
public "is"(arg0: $SignalState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalTarget$SignalCustomIndex$Type = ($SignalTarget$SignalCustomIndex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalTarget$SignalCustomIndex_ = $SignalTarget$SignalCustomIndex$Type;
}}
declare module "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GuiSyncLocal, $GuiSyncLocal$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncLocal"
import {$VAlign, $VAlign$Type} from "packages/team/creative/creativecore/common/gui/$VAlign"
import {$GuiSizeRule, $GuiSizeRule$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiSizeRule"
import {$Align, $Align$Type} from "packages/team/creative/creativecore/common/gui/$Align"
import {$GuiFlow, $GuiFlow$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiFlow"
import {$IGuiIntegratedParent, $IGuiIntegratedParent$Type} from "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$GuiStyle, $GuiStyle$Type} from "packages/team/creative/creativecore/common/gui/style/$GuiStyle"
import {$IGuiParent, $IGuiParent$Type} from "packages/team/creative/creativecore/common/gui/$IGuiParent"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"

export class $GuiConfigure extends $GuiLayer {
 "tool": $ContainerSlotView
readonly "SAVE_CONFIG": $GuiSyncLocal<($CompoundTag)>
static readonly "MINIMUM_LAYER_SPACING": integer
 "style": $GuiStyle
readonly "rect": $Rect
 "flow": $GuiFlow
 "align": $Align
 "valign": $VAlign
 "spacing": integer
readonly "name": string
 "enabled": boolean
 "preferred": $GuiSizeRule
 "expandableX": boolean
 "expandableY": boolean
 "visible": boolean

constructor(arg0: string, arg1: integer, arg2: integer, arg3: $ContainerSlotView$Type)
constructor(arg0: string, arg1: $ContainerSlotView$Type)

public "closed"(): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "saveConfiguration"(arg0: $CompoundTag$Type): $CompoundTag
public "getIntegratedParent"(): $IGuiIntegratedParent
public "hasGui"(): boolean
public "isParent"(arg0: $IGuiParent$Type): boolean
public "getPlayer"(): $Player
get "integratedParent"(): $IGuiIntegratedParent
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiConfigure$Type = ($GuiConfigure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiConfigure_ = $GuiConfigure$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/$Placement$PlacementBlock" {
import {$Placement$PlacementStructurePreview, $Placement$PlacementStructurePreview$Type} from "packages/team/creative/littletiles/common/placement/$Placement$PlacementStructurePreview"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PlacementResult, $PlacementResult$Type} from "packages/team/creative/littletiles/common/placement/$PlacementResult"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Placement, $Placement$Type} from "packages/team/creative/littletiles/common/placement/$Placement"
import {$LittleCollection, $LittleCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/collection/$LittleCollection"

export class $Placement$PlacementBlock implements $IGridBased {
readonly "pos": $BlockPos

constructor(arg0: $Placement$Type, arg1: $BlockPos$Type, arg2: $LittleGrid$Type)

public "combineTilesSecretly"(): boolean
public "getSmallest"(): integer
public "place"(arg0: $PlacementResult$Type): void
public "convertTo"(arg0: $LittleGrid$Type): void
public "canPlace"(): boolean
public "hasStructure"(): boolean
public "getBE"(): $BETiles
public "getGrid"(): $LittleGrid
public "addPlacePreviews"(arg0: $Placement$PlacementStructurePreview$Type, arg1: integer, arg2: $LittleCollection$Type): void
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "smallest"(): integer
get "bE"(): $BETiles
get "grid"(): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Placement$PlacementBlock$Type = ($Placement$PlacementBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Placement$PlacementBlock_ = $Placement$PlacementBlock$Type;
}}
declare module "packages/team/creative/creativecore/common/util/$CompoundSerializer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $CompoundSerializer {

 "write"(): $CompoundTag

(): $CompoundTag
}

export namespace $CompoundSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundSerializer$Type = ($CompoundSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundSerializer_ = $CompoundSerializer$Type;
}}
declare module "packages/team/creative/littletiles/common/block/mc/$BlockFlowingLava" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ILittleMCBlock, $ILittleMCBlock$Type} from "packages/team/creative/littletiles/api/common/block/$ILittleMCBlock"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Rotation as $Rotation$0, $Rotation$Type as $Rotation$0$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$IFakeRenderingBlock, $IFakeRenderingBlock$Type} from "packages/team/creative/littletiles/api/client/$IFakeRenderingBlock"

export class $BlockFlowingLava extends $Block implements $ILittleMCBlock, $IFakeRenderingBlock {
static readonly "FACING": $EnumProperty<($Direction)>
readonly "still": $Block
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

constructor(arg0: $Block$Type)

public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type, arg2: $LittleVec$Type): $BlockState
public "use"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleBox$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: $InteractionHand$Type): $InteractionResult
public "mirror"(arg0: $BlockState$Type, arg1: $Axis$Type, arg2: $LittleVec$Type): $BlockState
public "noCollision"(): boolean
public "getFogColor"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type, arg3: $Vector3d$Type, arg4: float): $Vector3d
public "canInteract"(): boolean
public "canBeRenderCombined"(arg0: $LittleTile$Type, arg1: $LittleTile$Type): boolean
public "checkEntityCollision"(): boolean
public "canBeConvertedToVanilla"(): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$0$Type): $BlockState
public "getFakeState"(arg0: $BlockState$Type): $BlockState
public "isFluid"(arg0: $TagKey$Type<($Fluid$Type)>): boolean
public "asVanillaBlock"(): $Block
public "entityCollided"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): void
public "getState"(): $BlockState
public "is"(arg0: $ItemStack$Type): boolean
public "is"(arg0: $TagKey$Type<($Block$Type)>): boolean
public "is"(arg0: $Block$Type): boolean
public "getStack"(): $ItemStack
public "blockName"(): string
public static "isTranslucent"(arg0: $Block$Type): boolean
public "isTranslucent"(): boolean
public "exploded"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Explosion$Type): void
public "getSoundType"(): $SoundType
public "getExplosionResistance"(arg0: $LittleTile$Type): float
public "getEnchantPowerBonus"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type): float
public "shouldUseStateForRenderType"(): boolean
public "getFriction"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): float
public "getLightValue"(): integer
public "getRenderBox"(arg0: $LittleGrid$Type, arg1: $RenderType$Type, arg2: $LittleBox$Type, arg3: $LittleElement$Type): $LittleRenderBox
public "randomDisplayTick"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $RandomSource$Type): void
public "cullOverEdge"(): boolean
get "state"(): $BlockState
get "stack"(): $ItemStack
get "translucent"(): boolean
get "soundType"(): $SoundType
get "lightValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFlowingLava$Type = ($BlockFlowingLava);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFlowingLava_ = $BlockFlowingLava$Type;
}}
declare module "packages/team/creative/creativecore/common/level/$NeighborUpdateCollector" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $NeighborUpdateCollector {

constructor(arg0: $Level$Type, arg1: $Collection$Type<($BlockPos$Type)>)
constructor()

public "add"(arg0: $BlockEntity$Type): void
public "add"(arg0: $Level$Type, arg1: $Collection$Type<($BlockPos$Type)>): void
public "add"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "process"(): void
public "process"(arg0: $Level$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeighborUpdateCollector$Type = ($NeighborUpdateCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeighborUpdateCollector_ = $NeighborUpdateCollector$Type;
}}
declare module "packages/team/creative/littletiles/common/math/vec/$LittleVecAbsolute" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleVecGrid, $LittleVecGrid$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecGrid"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LittleVecAbsolute implements $IGridBased {

constructor(arg0: string, arg1: $CompoundTag$Type)
constructor(arg0: $BlockPos$Type, arg1: $LittleGrid$Type)
constructor(arg0: $BlockPos$Type, arg1: $LittleGrid$Type, arg2: $LittleVec$Type)
constructor(arg0: $HitResult$Type, arg1: $LittleGrid$Type)
constructor(arg0: $BlockPos$Type, arg1: $LittleVecGrid$Type)

public "getSmallest"(): integer
public "convertToSmallest"(): void
public "getVec3d"(): $Vec3d
/**
 * 
 * @deprecated
 */
public "overwriteGrid"(arg0: $LittleGrid$Type): void
public "getRelative"(arg0: $BlockPos$Type): $LittleVec
public "getRelative"(arg0: $LittleVecAbsolute$Type): $LittleVecGrid
public "getVanillaGrid"(arg0: $Axis$Type): double
public "setVecContext"(arg0: $LittleVecGrid$Type): void
public "add"(arg0: $LittleVecGrid$Type): void
public "add"(arg0: $LittleVecAbsolute$Type): void
public "add"(arg0: $Vec3i$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(): $LittleVecAbsolute
public "sub"(arg0: $LittleVecGrid$Type): void
public "sub"(arg0: $LittleVecAbsolute$Type): void
public "sub"(arg0: $Vec3i$Type): void
public "writeToNBT"(arg0: string, arg1: $CompoundTag$Type): void
public "getVec"(): $LittleVec
public "getPosZ"(): double
public "setPos"(arg0: $BlockPos$Type): void
public "convertTo"(arg0: $LittleGrid$Type): void
public "getPosY"(): double
public "getPosX"(): double
public "getPos"(): $BlockPos
public "getGrid"(): $LittleGrid
public "getVecGrid"(): $LittleVecGrid
public "removeInternalBlockOffset"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "smallest"(): integer
get "vec3d"(): $Vec3d
set "vecContext"(value: $LittleVecGrid$Type)
get "vec"(): $LittleVec
get "posZ"(): double
set "pos"(value: $BlockPos$Type)
get "posY"(): double
get "posX"(): double
get "pos"(): $BlockPos
get "grid"(): $LittleGrid
get "vecGrid"(): $LittleVecGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleVecAbsolute$Type = ($LittleVecAbsolute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleVecAbsolute_ = $LittleVecAbsolute$Type;
}}
declare module "packages/team/creative/littletiles/common/math/box/$SurroundingBox" {
import {$LittleVecAbsolute, $LittleVecAbsolute$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecAbsolute"
import {$IStructureParentCollection, $IStructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBoxAbsolute, $LittleBoxAbsolute$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBoxAbsolute"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $SurroundingBox {

constructor(arg0: boolean, arg1: $Level$Type)

public "getMinPos"(): $BlockPos
public "getAbsoluteBox"(): $LittleBoxAbsolute
public "getMinPosOffset"(): $LittleVec
public "add"(arg0: $LittleGrid$Type, arg1: $BlockPos$Type, arg2: $Iterable$Type<($LittleTile$Type)>): $SurroundingBox
public "add"(arg0: $IStructureParentCollection$Type): $SurroundingBox
public "clear"(): void
public "count"(): integer
public "getSize"(): $LittleVec
public "getShape"(arg0: $BlockPos$Type): $VoxelShape
public "getMax"(arg0: $Axis$Type): long
public "getMin"(arg0: $Axis$Type): long
public "getMaxPos"(): $BlockPos
public "getMinX"(): long
public "getMinY"(): long
public "getMinZ"(): long
public "getMaxZ"(): long
public "convertTo"(arg0: $LittleGrid$Type): void
public "getMaxX"(): long
public "getMaxY"(): long
public "getHighestCenterVec"(): $Vec3d
public "getHighestCenterPoint"(): $LittleVecAbsolute
public "getAABB"(): $AABB
public "getPercentVolume"(): double
public "getGrid"(): $LittleGrid
public "getMaxPosOffset"(): $LittleVec
get "minPos"(): $BlockPos
get "absoluteBox"(): $LittleBoxAbsolute
get "minPosOffset"(): $LittleVec
get "size"(): $LittleVec
get "maxPos"(): $BlockPos
get "minX"(): long
get "minY"(): long
get "minZ"(): long
get "maxZ"(): long
get "maxX"(): long
get "maxY"(): long
get "highestCenterVec"(): $Vec3d
get "highestCenterPoint"(): $LittleVecAbsolute
get "aABB"(): $AABB
get "percentVolume"(): double
get "grid"(): $LittleGrid
get "maxPosOffset"(): $LittleVec
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurroundingBox$Type = ($SurroundingBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurroundingBox_ = $SurroundingBox$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/vec/$RangedBitSet$BitRange" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $RangedBitSet$BitRange extends $Record {

constructor(min: integer, max: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): integer
public "max"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangedBitSet$BitRange$Type = ($RangedBitSet$BitRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangedBitSet$BitRange_ = $RangedBitSet$BitRange$Type;
}}
declare module "packages/team/creative/littletiles/client/mod/rubidium/data/$BuiltSectionMeshPartsExtender" {
import {$BufferCollection, $BufferCollection$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCollection"

export interface $BuiltSectionMeshPartsExtender {

 "getBuffers"(): $BufferCollection
 "setBuffers"(arg0: $BufferCollection$Type): void
}

export namespace $BuiltSectionMeshPartsExtender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltSectionMeshPartsExtender$Type = ($BuiltSectionMeshPartsExtender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuiltSectionMeshPartsExtender_ = $BuiltSectionMeshPartsExtender$Type;
}}
declare module "packages/team/creative/creativecore/common/util/filter/$BiFilter" {
import {$BiFilterSerializer, $BiFilterSerializer$Type} from "packages/team/creative/creativecore/common/util/filter/$BiFilterSerializer"

export interface $BiFilter<T, U> {

 "is"(arg0: T, arg1: U): boolean

(arg0: T, arg1: U): boolean
}

export namespace $BiFilter {
const SERIALIZER: $BiFilterSerializer
function and<T, U>(...arg0: ($BiFilter$Type<(T), (U)>)[]): $BiFilter<(T), (U)>
function not<T, U>(arg0: $BiFilter$Type<(T), (U)>): $BiFilter<(T), (U)>
function or<T, U>(...arg0: ($BiFilter$Type<(T), (U)>)[]): $BiFilter<(T), (U)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiFilter$Type<T, U> = ($BiFilter<(T), (U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiFilter_<T, U> = $BiFilter$Type<(T), (U)>;
}}
declare module "packages/team/creative/creativecore/common/gui/$GuiParent" {
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$VAlign, $VAlign$Type} from "packages/team/creative/creativecore/common/gui/$VAlign"
import {$GuiChildControl, $GuiChildControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiChildControl"
import {$GuiControlChangedEvent, $GuiControlChangedEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiControlChangedEvent"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$GuiSizeRule, $GuiSizeRule$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiSizeRule"
import {$Align, $Align$Type} from "packages/team/creative/creativecore/common/gui/$Align"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$GuiFlow, $GuiFlow$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiFlow"
import {$ControlFormatting, $ControlFormatting$Type} from "packages/team/creative/creativecore/common/gui/style/$ControlFormatting"
import {$IGuiIntegratedParent, $IGuiIntegratedParent$Type} from "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$GuiTooltipEvent, $GuiTooltipEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiTooltipEvent"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IGuiParent, $IGuiParent$Type} from "packages/team/creative/creativecore/common/gui/$IGuiParent"
import {$GuiEvent, $GuiEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiEvent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"
import {$GuiControlClickEvent, $GuiControlClickEvent$Type} from "packages/team/creative/creativecore/common/gui/event/$GuiControlClickEvent"

export class $GuiParent extends $GuiControl implements $IGuiParent, $Iterable<($GuiChildControl)> {
 "flow": $GuiFlow
 "align": $Align
 "valign": $VAlign
 "spacing": integer
readonly "name": string
 "enabled": boolean
 "preferred": $GuiSizeRule
 "expandableX": boolean
 "expandableY": boolean
 "visible": boolean

constructor(arg0: string)
constructor()
constructor(arg0: $GuiFlow$Type)
constructor(arg0: string, arg1: $GuiFlow$Type)
constructor(arg0: string, arg1: $GuiFlow$Type, arg2: $VAlign$Type)
constructor(arg0: string, arg1: $GuiFlow$Type, arg2: $Align$Type)
constructor(arg0: string, arg1: $GuiFlow$Type, arg2: $Align$Type, arg3: $VAlign$Type)

public "scaleFactor"(): double
public "add"(arg0: $GuiControl$Type): $GuiParent
public "add"(...arg0: ($GuiControl$Type)[]): $GuiParent
public "add"(arg0: boolean, arg1: $Supplier$Type<($GuiControl$Type)>): $GuiParent
public "remove"(...arg0: (string)[]): void
public "remove"(arg0: $GuiChildControl$Type): boolean
public "remove"(arg0: $GuiControl$Type): $GuiChildControl
public "get"<T extends $GuiControl>(arg0: string, arg1: $Class$Type<(T)>): T
public "get"<T extends $GuiControl>(arg0: string): T
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: $GuiControl$Type, arg1: $GuiControl$Type): $GuiChildControl
public "size"(): integer
public "iterator"(): $Iterator<($GuiChildControl)>
public "find"(arg0: $GuiControl$Type): $GuiChildControl
public "init"(): void
public "closed"(): void
public "has"(arg0: string): boolean
public "setAlign"(arg0: $Align$Type): $GuiParent
public "setVAlign"(arg0: $VAlign$Type): $GuiParent
public "addHoverControl"(arg0: $GuiControl$Type): $GuiChildControl
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): boolean
public "setScale"(arg0: double): $GuiParent
public "tick"(): void
public "isClient"(): boolean
public "isContainer"(): boolean
public "closeTopLayer"(): void
public "addControl"(arg0: $GuiControl$Type): $GuiChildControl
public "addHover"(arg0: boolean, arg1: $Supplier$Type<($GuiControl$Type)>): $GuiParent
public "addHover"(...arg0: ($GuiControl$Type)[]): $GuiParent
public "addHover"(arg0: $GuiControl$Type): $GuiParent
public "getOffsetX"(): double
public "removeExclude"(...arg0: (string)[]): void
public "scaleFactorInv"(): double
public "setFlow"(arg0: $GuiFlow$Type): $GuiParent
public "setSpacing"(arg0: integer): $GuiParent
public "registerEventClick"(arg0: $Consumer$Type<($GuiControlClickEvent$Type)>): void
public "closeLayer"(arg0: $GuiLayer$Type): void
public "clearEvents"(): void
public "closeThisLayer"(): void
public "isMouseOverHovered"(arg0: double, arg1: double): boolean
public "getControlFormatting"(): $ControlFormatting
public "registerEventChanged"(arg0: $Consumer$Type<($GuiControlChangedEvent$Type)>): void
public "mouseScrolled"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: double): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "isExpandableY"(): boolean
public "flowX"(arg0: integer, arg1: integer): void
public "flowY"(arg0: integer, arg1: integer, arg2: integer): void
public "isExpandableX"(): boolean
public "toScreenRect"(arg0: $GuiControl$Type, arg1: $Rect$Type): $Rect
public "getNestedName"(): string
public "toLayerRect"(arg0: $GuiControl$Type, arg1: $Rect$Type): $Rect
public "testForDoubleClick"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): boolean
public "mouseDoubleClicked"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): boolean
public "looseFocus"(): void
public "getTooltipEvent"(arg0: $Rect$Type, arg1: double, arg2: double): $GuiTooltipEvent
public "raiseEvent"(arg0: $GuiEvent$Type): void
public "getOffsetY"(): double
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseReleased"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): void
public "mouseMoved"(arg0: $Rect$Type, arg1: double, arg2: double): void
public "mouseDragged"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double, arg6: double): void
public "registerEvent"<T extends $GuiEvent>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "getIntegratedParent"(): $IGuiIntegratedParent
public "hasGui"(): boolean
public "isParent"(arg0: $IGuiParent$Type): boolean
public "reflow"(): void
public "getPlayer"(): $Player
public "spliterator"(): $Spliterator<($GuiChildControl)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$GuiChildControl>;
get "empty"(): boolean
set "align"(value: $Align$Type)
set "vAlign"(value: $VAlign$Type)
set "scale"(value: double)
get "client"(): boolean
get "container"(): boolean
get "offsetX"(): double
set "flow"(value: $GuiFlow$Type)
set "spacing"(value: integer)
get "controlFormatting"(): $ControlFormatting
get "expandableY"(): boolean
get "expandableX"(): boolean
get "nestedName"(): string
get "offsetY"(): double
get "integratedParent"(): $IGuiIntegratedParent
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiParent$Type = ($GuiParent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiParent_ = $GuiParent$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/component/$ISignalComponent" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$SignalComponentType, $SignalComponentType$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$SignalComponentType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SignalState, $SignalState$Type} from "packages/team/creative/littletiles/common/structure/signal/$SignalState"

export interface $ISignalComponent {

 "getComponentType"(): $SignalComponentType
 "getState"(): $SignalState
 "changed"(): void
 "updateState"(arg0: $SignalState$Type): void
 "getBandwidth"(): integer
 "getStructure"(): $LittleStructure
 "getStructureLevel"(): $Level
/**
 * 
 * @deprecated
 */
 "overwriteState"(arg0: $SignalState$Type): void
}

export namespace $ISignalComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISignalComponent$Type = ($ISignalComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISignalComponent_ = $ISignalComponent$Type;
}}
declare module "packages/team/creative/littletiles/common/entity/$OrientationAwareEntity" {
import {$CollisionCoordinator, $CollisionCoordinator$Type} from "packages/team/creative/creativecore/common/util/math/collision/$CollisionCoordinator"
import {$IVecOrigin, $IVecOrigin$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin"

export interface $OrientationAwareEntity {

 "transform"(arg0: $CollisionCoordinator$Type): void
 "getOrigin"(): $IVecOrigin
 "parentVecOriginChange"(arg0: $IVecOrigin$Type): void
 "hasLoaded"(): boolean
 "markOriginChange"(): void
 "performTick"(): void
}

export namespace $OrientationAwareEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrientationAwareEntity$Type = ($OrientationAwareEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrientationAwareEntity_ = $OrientationAwareEntity$Type;
}}
declare module "packages/team/creative/littletiles/common/block/mc/$BlockWater" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ILittleMCBlock, $ILittleMCBlock$Type} from "packages/team/creative/littletiles/api/common/block/$ILittleMCBlock"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$IFakeRenderingBlock, $IFakeRenderingBlock$Type} from "packages/team/creative/littletiles/api/client/$IFakeRenderingBlock"

export class $BlockWater extends $Block implements $ILittleMCBlock, $IFakeRenderingBlock {
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

public "use"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleBox$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: $InteractionHand$Type): $InteractionResult
public "getFogColor"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type, arg3: $Vector3d$Type, arg4: float): $Vector3d
public "canBeConvertedToVanilla"(): boolean
public "getFakeState"(arg0: $BlockState$Type): $BlockState
public "isFluid"(arg0: $TagKey$Type<($Fluid$Type)>): boolean
public "asVanillaBlock"(): $Block
public "getState"(): $BlockState
public "is"(arg0: $ItemStack$Type): boolean
public "is"(arg0: $TagKey$Type<($Block$Type)>): boolean
public "is"(arg0: $Block$Type): boolean
public "getStack"(): $ItemStack
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type, arg2: $LittleVec$Type): $BlockState
public "blockName"(): string
public "mirror"(arg0: $BlockState$Type, arg1: $Axis$Type, arg2: $LittleVec$Type): $BlockState
public "noCollision"(): boolean
public "canInteract"(): boolean
public static "isTranslucent"(arg0: $Block$Type): boolean
public "isTranslucent"(): boolean
public "exploded"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Explosion$Type): void
public "getSoundType"(): $SoundType
public "getExplosionResistance"(arg0: $LittleTile$Type): float
public "getEnchantPowerBonus"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type): float
public "canBeRenderCombined"(arg0: $LittleTile$Type, arg1: $LittleTile$Type): boolean
public "shouldUseStateForRenderType"(): boolean
public "checkEntityCollision"(): boolean
public "getFriction"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): float
public "getLightValue"(): integer
public "entityCollided"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): void
public "getRenderBox"(arg0: $LittleGrid$Type, arg1: $RenderType$Type, arg2: $LittleBox$Type, arg3: $LittleElement$Type): $LittleRenderBox
public "randomDisplayTick"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $RandomSource$Type): void
public "cullOverEdge"(): boolean
get "state"(): $BlockState
get "stack"(): $ItemStack
get "translucent"(): boolean
get "soundType"(): $SoundType
get "lightValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWater$Type = ($BlockWater);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWater_ = $BlockWater$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/animation/$PhysicalState" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$PhysicalPart, $PhysicalPart$Type} from "packages/team/creative/littletiles/common/structure/animation/$PhysicalPart"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"

export class $PhysicalState {

constructor()
constructor(arg0: $CompoundTag$Type)

public "isAligned"(): boolean
public "get"(arg0: $PhysicalPart$Type): double
public "toString"(): string
public "offset"(): $Vec3d
public "off"(arg0: $Axis$Type): double
public "off"(arg0: $Axis$Type, arg1: double): void
public "off"(arg0: $Facing$Type, arg1: double): void
public "off"(arg0: double, arg1: double, arg2: double): void
public "set"(arg0: $PhysicalState$Type): void
public "set"(arg0: $PhysicalPart$Type, arg1: double): void
public "save"(): $CompoundTag
public "copy"(): $PhysicalState
public "rotate"(arg0: $Rotation$Type): void
public "setZero"(): void
public "mirror"(arg0: $Axis$Type): void
public "rotZ"(arg0: double): void
public "rotZ"(): double
public "rotY"(): double
public "rotY"(arg0: double): void
public "rotX"(): double
public "rotX"(arg0: double): void
public "rot"(arg0: $Axis$Type): double
public "rot"(arg0: $Axis$Type, arg1: double): void
public "rot"(arg0: double, arg1: double, arg2: double): void
public "offX"(): double
public "offX"(arg0: double): void
public "offY"(arg0: double): void
public "offY"(): double
public "rotation"(): $Vec3d
public "offZ"(arg0: double): void
public "offZ"(): double
get "aligned"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicalState$Type = ($PhysicalState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicalState_ = $PhysicalState$Type;
}}
declare module "packages/team/creative/creativecore/common/util/type/list/$Tuple" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Tuple<K, V> implements $Map$Entry<(K), (V)> {
 "key": K
 "value": V

constructor(arg0: K, arg1: V)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getValue"(): V
public "getKey"(): K
public "setValue"(arg0: V): V
public "is"(arg0: K): boolean
public static "comparingByKey"<K extends $Comparable<(any)>, V>(): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByKey"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByValue"<K, V extends $Comparable<(any)>>(): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByValue"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(K), (V)>)>
public static "copyOf"<K, V>(arg0: $Map$Entry$Type<(any), (any)>): $Map$Entry<(K), (V)>
get "value"(): V
get "key"(): K
set "value"(value: V)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tuple$Type<K, V> = ($Tuple<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tuple_<K, V> = $Tuple$Type<(K), (V)>;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/schedule/$ISignalSchedulable" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $ISignalSchedulable {

 "getComponentLevel"(): $Level
 "markChanged"(): void
 "notifyChange"(): void
 "markUnchanged"(): void
 "isStillAvailable"(): boolean
 "schedule"(): void
 "updateSignaling"(): void
 "hasChanged"(): boolean
}

export namespace $ISignalSchedulable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISignalSchedulable$Type = ($ISignalSchedulable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISignalSchedulable_ = $ISignalSchedulable$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/box/$AlignedBox" {
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Matrix3, $Matrix3$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$Matrix3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BoxCorner, $BoxCorner$Type} from "packages/team/creative/creativecore/common/util/math/box/$BoxCorner"

export class $AlignedBox {
 "minX": float
 "minY": float
 "minZ": float
 "maxX": float
 "maxY": float
 "maxZ": float

constructor(arg0: $AlignedBox$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)
constructor(arg0: $AABB$Type)
constructor()

public "getBB"(): $AABB
public "getBB"(arg0: $BlockPos$Type): $AABB
public "add"(arg0: $Vec3i$Type): void
public "add"(arg0: float, arg1: float, arg2: float): void
public "add"(arg0: $Vector3d$Type): void
public "get"(arg0: $Facing$Type): float
public "toString"(): string
public "scale"(arg0: float): void
public "set"(arg0: $Facing$Type, arg1: float): void
public "set"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "getSize"(arg0: $Axis$Type): float
public "getSize"(): $Vec3d
public "grow"(arg0: $Axis$Type, arg1: float): void
public "getOffset"(): $BlockPos
public "rotate"(arg0: $Matrix3$Type, arg1: $Vec3f$Type): void
public "rotate"(arg0: $Rotation$Type, arg1: $Vec3f$Type): void
public "sub"(arg0: $Vector3d$Type): void
public "sub"(arg0: float, arg1: float, arg2: float): void
public "sub"(arg0: $Vec3i$Type): void
public "getCenter"(): $Vec3d
public "getMax"(arg0: $Axis$Type): float
public "getMin"(arg0: $Axis$Type): float
public "shrink"(arg0: $Axis$Type, arg1: float): void
public "voxelShape"(): $VoxelShape
public "voxelShape"(arg0: $BlockPos$Type): $VoxelShape
public "getCorner"(arg0: $BoxCorner$Type): $Vec3f
public "setMax"(arg0: $Axis$Type, arg1: float): void
public "setMin"(arg0: $Axis$Type, arg1: float): void
get "bB"(): $AABB
get "size"(): $Vec3d
get "offset"(): $BlockPos
get "center"(): $Vec3d
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlignedBox$Type = ($AlignedBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlignedBox_ = $AlignedBox$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemLittleSaw" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IItemTooltip, $IItemTooltip$Type} from "packages/team/creative/littletiles/common/item/tooltip/$IItemTooltip"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLittleSaw extends $Item implements $IItemTooltip {
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

public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "tooltipData"(arg0: $ItemStack$Type): (any)[]
public "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLittleSaw$Type = ($ItemLittleSaw);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLittleSaw_ = $ItemLittleSaw$Type;
}}
declare module "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCollection" {
import {$ChunkBufferDownloader, $ChunkBufferDownloader$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$ChunkBufferDownloader"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BufferCache, $BufferCache$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCache"

export class $BufferCollection {

constructor()

public "eraseBuffers"(): void
public "length"(): integer
public "toString"(): string
public "isEmpty"(): boolean
public "buffers"(): $Iterable<($BufferCache)>
public "discard"(): void
public "download"(arg0: $ChunkBufferDownloader$Type): void
public "queueForUpload"(arg0: $BufferCache$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferCollection$Type = ($BufferCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferCollection_ = $BufferCollection$Type;
}}
declare module "packages/team/creative/littletiles/common/entity/$INoPushEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INoPushEntity {

}

export namespace $INoPushEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INoPushEntity$Type = ($INoPushEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INoPushEntity_ = $INoPushEntity$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/controls/inventory/$GuiSlot" {
import {$GuiSizeRule, $GuiSizeRule$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiSizeRule"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"
import {$GuiManagerItem, $GuiManagerItem$Type} from "packages/team/creative/creativecore/common/gui/manager/$GuiManagerItem"
import {$IGuiInventory, $IGuiInventory$Type} from "packages/team/creative/creativecore/common/gui/controls/inventory/$IGuiInventory"
import {$GuiSlotBase, $GuiSlotBase$Type} from "packages/team/creative/creativecore/common/gui/controls/inventory/$GuiSlotBase"

export class $GuiSlot extends $GuiSlotBase {
readonly "slot": $Slot
 "draggedIndex": integer
static readonly "SLOT_SIZE": integer
readonly "name": string
 "enabled": boolean
 "preferred": $GuiSizeRule
 "expandableX": boolean
 "expandableY": boolean
 "visible": boolean

constructor(arg0: string, arg1: $Slot$Type)
constructor(arg0: $Slot$Type)
constructor(arg0: string, arg1: $Container$Type, arg2: integer)
constructor(arg0: $Container$Type, arg1: integer)

public "insert"(arg0: $ItemStack$Type): $ItemStack
public "getStack"(): $ItemStack
public "changed"(): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): boolean
public "tick"(): void
public "itemManager"(): $GuiManagerItem
public "inventory"(): $IGuiInventory
public "mouseScrolled"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: double): boolean
public "mouseMoved"(arg0: $Rect$Type, arg1: double, arg2: double): void
public "onSendUpdate"(): void
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSlot$Type = ($GuiSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSlot_ = $GuiSlot$Type;
}}
declare module "packages/team/creative/creativecore/common/level/$IOrientatedLevel" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Difficulty, $Difficulty$Type} from "packages/net/minecraft/world/$Difficulty"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TargetingConditions, $TargetingConditions$Type} from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$EntityTypeTest, $EntityTypeTest$Type} from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import {$ChunkStatus, $ChunkStatus$Type} from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$IVecOrigin, $IVecOrigin$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IForgeLevel, $IForgeLevel$Type} from "packages/net/minecraftforge/common/extensions/$IForgeLevel"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$WorldBorder, $WorldBorder$Type} from "packages/net/minecraft/world/level/border/$WorldBorder"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$TickPriority, $TickPriority$Type} from "packages/net/minecraft/world/ticks/$TickPriority"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$LevelData, $LevelData$Type} from "packages/net/minecraft/world/level/storage/$LevelData"

export interface $IOrientatedLevel extends $LevelAccessor, $IForgeLevel {

 "unload"(): void
 "getOrigin"(): $IVecOrigin
 "getHolder"(): $Entity
 "setHolder"(arg0: $Entity$Type): void
 "setOrigin"(arg0: $Vec3d$Type): void
 "levelEvent"(arg0: $Player$Type, arg1: integer, arg2: $BlockPos$Type, arg3: integer): void
 "gameEvent"(arg0: $GameEvent$Type, arg1: $Vec3$Type, arg2: $GameEvent$Context$Type): void
 "getLevelData"(): $LevelData
 "gameEvent"(arg0: $GameEvent$Type, arg1: $BlockPos$Type, arg2: $GameEvent$Context$Type): void
 "levelEvent"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
 "blockUpdated"(arg0: $BlockPos$Type, arg1: $Block$Type): void
 "neighborShapeChanged"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
 "hasChunk"(arg0: integer, arg1: integer): boolean
 "getCurrentDifficultyAt"(arg0: $BlockPos$Type): $DifficultyInstance
 "nextSubTickCount"(): long
 "getRandom"(): $RandomSource
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer, arg3: $TickPriority$Type): void
 "getBlockTicks"(): $LevelTickAccess<($Block)>
 "dayTime"(): long
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer, arg3: $TickPriority$Type): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type): void
 "getFluidTicks"(): $LevelTickAccess<($Fluid)>
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $BlockPos$Type): void
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $Vec3$Type): void
 "addParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
 "getDifficulty"(): $Difficulty
 "getServer"(): $MinecraftServer
 "getChunkSource"(): $ChunkSource
 "getPartEntities"(): $Collection<($PartEntity<(any)>)>
 "getMaxEntityRadius"(): double
 "increaseMaxEntityRadius"(arg0: double): double
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "isUnobstructed"(arg0: $Entity$Type, arg1: $VoxelShape$Type): boolean
 "getHeightmapPos"(arg0: $Heightmap$Types$Type, arg1: $BlockPos$Type): $BlockPos
 "getEntityCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($VoxelShape)>
 "getTimeOfDay"(arg0: float): float
 "getMoonBrightness"(): float
 "getMoonPhase"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<($Entity)>
 "getNearestPlayer"(arg0: $Entity$Type, arg1: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type): $Player
 "getNearestEntity"<T extends $LivingEntity>(arg0: $List$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double): T
 "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: double, arg3: double, arg4: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$Type<($Entity$Type)>): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: double, arg2: double, arg3: double): $Player
 "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$Type): T
 "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$Type<(T)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: $AABB$Type): $List<(T)>
 "getNearbyPlayers"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: $AABB$Type): $List<($Player)>
 "getPlayerByUUID"(arg0: $UUID$Type): $Player
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$Type<($Entity$Type), (T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "players"(): $List<(any)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type): $List<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($Entity)>
 "isClientSide"(): boolean
 "isEmptyBlock"(arg0: $BlockPos$Type): boolean
 "enabledFeatures"(): $FeatureFlagSet
 "getBiome"(arg0: $BlockPos$Type): $Holder<($Biome)>
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type, arg3: boolean): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "getSeaLevel"(): integer
 "getHeight"(arg0: $Heightmap$Types$Type, arg1: integer, arg2: integer): integer
 "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
 "getSkyDarken"(): integer
 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "isWaterAt"(arg0: $BlockPos$Type): boolean
 "getChunk"(arg0: $BlockPos$Type): $ChunkAccess
 "getHeight"(): integer
 "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "canSeeSkyFromBelowWater"(arg0: $BlockPos$Type): boolean
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getPathfindingCostFromLightLevels"(arg0: $BlockPos$Type): float
 "isAreaLoaded"(arg0: $BlockPos$Type, arg1: integer): boolean
 "holderLookup"<T>(arg0: $ResourceKey$Type<(any)>): $HolderLookup<(T)>
 "getBlockStatesIfLoaded"(arg0: $AABB$Type): $Stream<($BlockState)>
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "getLightLevelDependentMagicValue"(arg0: $BlockPos$Type): float
 "dimensionType"(): $DimensionType
 "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: $BlockPos$Type): boolean
 "getMinBuildHeight"(): integer
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type): integer
 "registryAccess"(): $RegistryAccess
 "containsAnyLiquid"(arg0: $AABB$Type): boolean
 "getBiomeManager"(): $BiomeManager
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
 "getShade"(arg0: $Direction$Type, arg1: boolean): float
 "noCollision"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "getWorldBorder"(): $WorldBorder
 "findSupportingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): $Optional<($BlockPos)>
 "getBlockCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "findFreePosition"(arg0: $Entity$Type, arg1: $VoxelShape$Type, arg2: $Vec3$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
 "noCollision"(arg0: $Entity$Type): boolean
 "isUnobstructed"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): boolean
 "isUnobstructed"(arg0: $Entity$Type): boolean
 "noCollision"(arg0: $AABB$Type): boolean
 "collidesWithSuffocatingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "getCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "getDirectSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "getDirectSignalTo"(arg0: $BlockPos$Type): integer
 "getControlInputSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: boolean): integer
 "getBestNeighborSignal"(arg0: $BlockPos$Type): integer
 "hasNeighborSignal"(arg0: $BlockPos$Type): boolean
 "getSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "hasSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): boolean
 "isStateAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($BlockState$Type)>): boolean
 "isFluidAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($FluidState$Type)>): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
 "addFreshEntity"(arg0: $Entity$Type): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer, arg3: integer): boolean
 "removeBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type, arg3: integer): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type): boolean
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "getMaxSection"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
}

export namespace $IOrientatedLevel {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOrientatedLevel$Type = ($IOrientatedLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOrientatedLevel_ = $IOrientatedLevel$Type;
}}
declare module "packages/team/creative/littletiles/api/common/tool/$ILittleEditor" {
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBoxes, $LittleBoxes$Type} from "packages/team/creative/littletiles/common/math/box/collection/$LittleBoxes"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ILittleTool, $ILittleTool$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittleTool"

export interface $ILittleEditor extends $ILittleTool {

 "getBoxes"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): $LittleBoxes
 "hasCustomBoxes"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $BlockState$Type, arg4: $PlacementPosition$Type, arg5: $BlockHitResult$Type): boolean
 "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
 "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
 "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
 "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
 "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
 "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
 "sendTransformationUpdate"(): boolean
 "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
 "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
 "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
 "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
 "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
}

export namespace $ILittleEditor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILittleEditor$Type = ($ILittleEditor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILittleEditor_ = $ILittleEditor$Type;
}}
declare module "packages/team/creative/littletiles/common/math/location/$StructureLocation" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StructureLocation {
readonly "pos": $BlockPos
readonly "index": integer
readonly "levelUUID": $UUID

constructor(arg0: $CompoundTag$Type)
constructor(arg0: $LittleStructure$Type)
constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer)
constructor(arg0: $BlockPos$Type, arg1: integer, arg2: $UUID$Type)

public "find"(arg0: $LevelAccessor$Type): $LittleStructure
public "write"(arg0: $CompoundTag$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureLocation$Type = ($StructureLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureLocation_ = $StructureLocation$Type;
}}
declare module "packages/team/creative/littletiles/common/block/entity/$BETiles$SideSolidCache" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BETiles$SideState, $BETiles$SideState$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles$SideState"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"

export class $BETiles$SideSolidCache {

constructor(arg0: $BETiles$Type)

public "get"(arg0: $Facing$Type): $BETiles$SideState
public "load"(arg0: $CompoundTag$Type): void
public "set"(arg0: $Facing$Type, arg1: $BETiles$SideState$Type): void
public "write"(arg0: $CompoundTag$Type): void
public "reset"(): void
public "isCollisionFullBlock"(): boolean
public "getYAxis"(): $BETiles$SideState
get "collisionFullBlock"(): boolean
get "yAxis"(): $BETiles$SideState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BETiles$SideSolidCache$Type = ($BETiles$SideSolidCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BETiles$SideSolidCache_ = $BETiles$SideSolidCache$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroupAbsolute" {
import {$LittleStructureType, $LittleStructureType$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBoxes, $LittleBoxes$Type} from "packages/team/creative/littletiles/common/math/box/collection/$LittleBoxes"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$LittleBoxAbsolute, $LittleBoxAbsolute$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBoxAbsolute"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LittleGroupAbsolute implements $IGridBased {
readonly "pos": $BlockPos
readonly "group": $LittleGroup

constructor(arg0: $BlockPos$Type, arg1: $LittleGroup$Type)
constructor(arg0: $BlockPos$Type)
constructor(arg0: $LittleBoxes$Type, arg1: $LittleElement$Type)

public "getSmallest"(): integer
public "getStructureType"(): $LittleStructureType
public "addFast"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type): void
public "addFast"(arg0: $IParentCollection$Type, arg1: $LittleElement$Type, arg2: $LittleBox$Type): void
public "getStructureTag"(): $CompoundTag
public "add"(arg0: $IParentCollection$Type, arg1: $LittleElement$Type, arg2: $LittleBox$Type): void
public static "add"(arg0: $LittleGroup$Type, arg1: $BlockPos$Type, arg2: $IParentCollection$Type, arg3: $LittleTile$Type): void
public "add"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type): void
public "add"(arg0: $LittleGrid$Type, arg1: $LittleElement$Type, arg2: $LittleBoxes$Type): void
public "isEmpty"(): boolean
public "copy"(): $LittleGroupAbsolute
public "convertTo"(arg0: $LittleGrid$Type): void
public "getBox"(): $LittleBoxAbsolute
public "getGrid"(): $LittleGrid
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "smallest"(): integer
get "structureType"(): $LittleStructureType
get "structureTag"(): $CompoundTag
get "empty"(): boolean
get "box"(): $LittleBoxAbsolute
get "grid"(): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleGroupAbsolute$Type = ($LittleGroupAbsolute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleGroupAbsolute_ = $LittleGroupAbsolute$Type;
}}
declare module "packages/team/creative/creativecore/common/util/registry/$NamedHandlerRegistry" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $NamedHandlerRegistry<T> {

constructor(arg0: T)

public "get"(arg0: string): T
public "values"(): $Collection<(T)>
public "getDefault"(): T
public "contains"(arg0: string): boolean
public "entrySet"(): $Set<($Map$Entry<(string), (T)>)>
public "register"(arg0: string, arg1: T): void
public "getId"(arg0: T): string
public "keys"(): $Collection<(string)>
public "registerDefault"(arg0: string, arg1: T): void
public "allowOverwrite"(): $NamedHandlerRegistry<(T)>
public "getOrThrow"(arg0: string): T
public static "clearRegistry"(arg0: $NamedHandlerRegistry$Type<(any)>): void
get "default"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedHandlerRegistry$Type<T> = ($NamedHandlerRegistry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedHandlerRegistry_<T> = $NamedHandlerRegistry$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationEntity" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleAnimationEntityPhysic, $LittleAnimationEntityPhysic$Type} from "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationEntityPhysic"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$LittleEntityRenderManager, $LittleEntityRenderManager$Type} from "packages/team/creative/littletiles/client/render/entity/$LittleEntityRenderManager"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$CreativePacket, $CreativePacket$Type} from "packages/team/creative/creativecore/common/network/$CreativePacket"
import {$StructureAbsolute, $StructureAbsolute$Type} from "packages/team/creative/littletiles/common/structure/relative/$StructureAbsolute"
import {$LittleAnimationLevel, $LittleAnimationLevel$Type} from "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationLevel"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Placement, $Placement$Type} from "packages/team/creative/littletiles/common/placement/$Placement"
import {$LittleBlockChange, $LittleBlockChange$Type} from "packages/team/creative/littletiles/common/packet/entity/animation/$LittleBlockChange"
import {$LittleEntityPhysic, $LittleEntityPhysic$Type} from "packages/team/creative/littletiles/common/entity/$LittleEntityPhysic"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$LittleEntity, $LittleEntity$Type} from "packages/team/creative/littletiles/common/entity/$LittleEntity"

export class $LittleAnimationEntity extends $LittleEntity<($LittleAnimationEntityPhysic)> {
readonly "physic": T
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

constructor(arg0: $Level$Type, arg1: $LittleAnimationLevel$Type, arg2: $StructureAbsolute$Type, arg3: $Placement$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "is"(arg0: $LittleStructure$Type): boolean
public "getCenter"(): $StructureAbsolute
public "applyChanges"(arg0: $Iterable$Type<($LittleBlockChange$Type)>): void
public "getStructure"(): $LittleStructure
public "getSubLevel"(): $LittleAnimationLevel
public static "loadBE"(arg0: $LevelAccessor$Type, arg1: $CompoundTag$Type): void
public "setCenter"(arg0: $StructureAbsolute$Type): void
public static "saveBE"(arg0: $BETiles$Type): $CompoundTag
public "saveExtraClientData"(): $CompoundTag
public "stopTracking"(arg0: $ServerPlayer$Type): void
public "initClientPacket"(): $CreativePacket
public "loadEntity"(arg0: $CompoundTag$Type): void
public "saveEntity"(arg0: $CompoundTag$Type): void
public "performTick"(): void
public "syncMovement"(): void
public "internalTick"(): void
public "getRenderManager"(): $LittleEntityRenderManager<(any)>
public "initialTick"(): void
public "startTracking"(arg0: $ServerPlayer$Type): void
public "initSubLevelClient"(arg0: $StructureAbsolute$Type, arg1: $CompoundTag$Type): void
public "setParentLevel"(arg0: $Level$Type): void
public "prepareChangeLevel"(arg0: $Level$Type, arg1: $Level$Type): void
public "clearTrackingChanges"(): void
get "center"(): $StructureAbsolute
get "structure"(): $LittleStructure
get "subLevel"(): $LittleAnimationLevel
set "center"(value: $StructureAbsolute$Type)
get "renderManager"(): $LittleEntityRenderManager<(any)>
set "parentLevel"(value: $Level$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleAnimationEntity$Type = ($LittleAnimationEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleAnimationEntity_ = $LittleAnimationEntity$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemLittleBlueprint" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IItemTooltip, $IItemTooltip$Type} from "packages/team/creative/littletiles/common/item/tooltip/$IItemTooltip"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$PlacementMode, $PlacementMode$Type} from "packages/team/creative/littletiles/common/placement/mode/$PlacementMode"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$SelectionMode, $SelectionMode$Type} from "packages/team/creative/littletiles/common/placement/selection/$SelectionMode"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$ILittlePlacer, $ILittlePlacer$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittlePlacer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"

export class $ItemLittleBlueprint extends $Item implements $ILittlePlacer, $IItemTooltip {
static readonly "CONTENT_KEY": string
static readonly "SELECTION_KEY": string
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

public "getLow"(arg0: $ItemStack$Type): $LittleGroup
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "containsIngredients"(arg0: $ItemStack$Type): boolean
public "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
public "getTiles"(arg0: $ItemStack$Type): $LittleGroup
public "hasTiles"(arg0: $ItemStack$Type): boolean
public "getPlacement"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: boolean): $PlacementPreview
public "saveTiles"(arg0: $ItemStack$Type, arg1: $LittleGroup$Type): void
public "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
public static "setSelectionMode"(arg0: $ItemStack$Type, arg1: $SelectionMode$Type): void
public "getCachedMin"(arg0: $ItemStack$Type): $LittleVec
public static "getSelectionMode"(arg0: $ItemStack$Type): $SelectionMode
public "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "tooltipData"(arg0: $ItemStack$Type): (any)[]
public "getCachedSize"(arg0: $ItemStack$Type): $LittleVec
public "get"(arg0: $ItemStack$Type, arg1: boolean): $LittleGroup
public "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
public "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
public "getPreviewAlphaFactor"(): float
public "snapToGridByDefault"(arg0: $ItemStack$Type): boolean
public "getPlacementMode"(arg0: $ItemStack$Type): $PlacementMode
public "shouldCache"(): boolean
public "getPositingCubes"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $List<($RenderBox)>
public "canSnapToGrid"(arg0: $ItemStack$Type): boolean
public "getTilesGrid"(arg0: $ItemStack$Type): $LittleGrid
public "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
public "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
public "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "sendTransformationUpdate"(): boolean
public "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
public "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
public "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
get "previewAlphaFactor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLittleBlueprint$Type = ($ItemLittleBlueprint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLittleBlueprint_ = $ItemLittleBlueprint$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemColorIngredient" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleInventory, $LittleInventory$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleInventory"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$ILittleIngredientInventory, $ILittleIngredientInventory$Type} from "packages/team/creative/littletiles/api/common/ingredient/$ILittleIngredientInventory"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ColorIngredient, $ColorIngredient$Type} from "packages/team/creative/littletiles/common/ingredient/$ColorIngredient"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ItemColorIngredient$ColorIngredientType, $ItemColorIngredient$ColorIngredientType$Type} from "packages/team/creative/littletiles/common/item/$ItemColorIngredient$ColorIngredientType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemColorIngredient extends $Item implements $ILittleIngredientInventory {
 "type": $ItemColorIngredient$ColorIngredientType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ItemColorIngredient$ColorIngredientType$Type)

public static "generateItemStack"(arg0: $ItemColorIngredient$ColorIngredientType$Type, arg1: integer): $ItemStack
public "saveIngredient"(arg0: $ItemStack$Type, arg1: $ColorIngredient$Type): void
public "getInventory"(arg0: $ItemStack$Type): $LittleIngredients
public "getColor"(arg0: $ItemStack$Type): integer
public "setInventory"(arg0: $ItemStack$Type, arg1: $LittleIngredients$Type, arg2: $LittleInventory$Type): void
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "loadIngredient"(arg0: $ItemStack$Type): $ColorIngredient
public "shouldBeMerged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorIngredient$Type = ($ItemColorIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorIngredient_ = $ItemColorIngredient$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/box/$LittlePlaceBox" {
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Placement, $Placement$Type} from "packages/team/creative/littletiles/common/placement/$Placement"

export class $LittlePlaceBox {
 "box": $LittleBox

constructor(arg0: $LittleBox$Type)

public "getSmallest"(arg0: $LittleGrid$Type): integer
public "add"(arg0: $LittleVec$Type): void
public "place"(arg0: $Placement$Type, arg1: $LittleGrid$Type, arg2: $BlockPos$Type, arg3: $LittleStructure$Type): void
public "convertTo"(arg0: $LittleGrid$Type, arg1: $LittleGrid$Type): void
public "getRenderBox"(arg0: $LittleGrid$Type, arg1: $LittleVec$Type): $LittleRenderBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittlePlaceBox$Type = ($LittlePlaceBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittlePlaceBox_ = $LittlePlaceBox$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/$Placement" {
import {$LittleVolumes, $LittleVolumes$Type} from "packages/team/creative/littletiles/common/math/box/volume/$LittleVolumes"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Placement$PlacementStructurePreview, $Placement$PlacementStructurePreview$Type} from "packages/team/creative/littletiles/common/placement/$Placement$PlacementStructurePreview"
import {$LittleBoxReturnedVolume, $LittleBoxReturnedVolume$Type} from "packages/team/creative/littletiles/common/math/box/volume/$LittleBoxReturnedVolume"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$PlacementResult, $PlacementResult$Type} from "packages/team/creative/littletiles/common/placement/$PlacementResult"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"
import {$LittleGroupAbsolute, $LittleGroupAbsolute$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroupAbsolute"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$LinkedHashMap, $LinkedHashMap$Type} from "packages/java/util/$LinkedHashMap"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Placement$PlacementBlock, $Placement$PlacementBlock$Type} from "packages/team/creative/littletiles/common/placement/$Placement$PlacementBlock"

export class $Placement {
readonly "player": $Player
readonly "level": $Level
readonly "preview": $PlacementPreview
readonly "blocks": $LinkedHashMap<($BlockPos), ($Placement$PlacementBlock)>
readonly "origin": $Placement$PlacementStructurePreview
readonly "structures": $List<($Placement$PlacementStructurePreview)>
readonly "availableIds": $BitSet
readonly "removedIngredients": $LittleIngredients
readonly "removedTiles": $LittleGroupAbsolute
readonly "unplaceableTiles": $LittleGroup
readonly "soundsToBePlayed": $List<($SoundType)>

constructor(arg0: $Player$Type, arg1: $Level$Type, arg2: $PlacementPreview$Type)
constructor(arg0: $Player$Type, arg1: $PlacementPreview$Type)

public "place"(): $PlacementResult
public "setStack"(arg0: $ItemStack$Type): $Placement
public "overflow"(): $LittleIngredients
public "canPlace"(): boolean
public "tryPlace"(): $PlacementResult
public "constructStructureRelations"(): void
public "notifyStructurePlaced"(): void
public "setIgnoreWorldBoundaries"(arg0: boolean): $Placement
public "addRemovedIngredient"(arg0: $Placement$PlacementBlock$Type, arg1: $LittleElement$Type, arg2: $LittleBoxReturnedVolume$Type): void
public "addRemovedIngredient"(arg0: $LittleVolumes$Type): void
public "setPredicate"(arg0: $BiPredicate$Type<($IParentCollection$Type), ($LittleTile$Type)>): $Placement
public "getOrCreateBlock"(arg0: $BlockPos$Type): $Placement$PlacementBlock
public "setPlaySounds"(arg0: boolean): $Placement
set "stack"(value: $ItemStack$Type)
set "ignoreWorldBoundaries"(value: boolean)
set "predicate"(value: $BiPredicate$Type<($IParentCollection$Type), ($LittleTile$Type)>)
set "playSounds"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Placement$Type = ($Placement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Placement_ = $Placement$Type;
}}
declare module "packages/team/creative/littletiles/mixin/common/block/$StateHolderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StateHolderAccessor {

}

export namespace $StateHolderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateHolderAccessor$Type = ($StateHolderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateHolderAccessor_ = $StateHolderAccessor$Type;
}}
declare module "packages/team/creative/littletiles/client/level/$BlockStatePredictionHandlerExtender" {
import {$ClientLevelExtender, $ClientLevelExtender$Type} from "packages/team/creative/littletiles/client/level/$ClientLevelExtender"

export interface $BlockStatePredictionHandlerExtender {

 "setLevel"(arg0: $ClientLevelExtender$Type): void

(arg0: $ClientLevelExtender$Type): void
}

export namespace $BlockStatePredictionHandlerExtender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStatePredictionHandlerExtender$Type = ($BlockStatePredictionHandlerExtender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStatePredictionHandlerExtender_ = $BlockStatePredictionHandlerExtender$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/$LittleStructure" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Pair, $Pair$Type} from "packages/team/creative/creativecore/common/util/type/list/$Pair"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$StructureLocation, $StructureLocation$Type} from "packages/team/creative/littletiles/common/math/location/$StructureLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LittleAnimationEntity, $LittleAnimationEntity$Type} from "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationEntity"
import {$InternalSignalOutput, $InternalSignalOutput$Type} from "packages/team/creative/littletiles/common/structure/signal/output/$InternalSignalOutput"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleVecAbsolute, $LittleVecAbsolute$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecAbsolute"
import {$StructureChildConnection, $StructureChildConnection$Type} from "packages/team/creative/littletiles/common/structure/connection/children/$StructureChildConnection"
import {$IStructureParentCollection, $IStructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndexedCollector, $IndexedCollector$Type} from "packages/team/creative/creativecore/common/util/type/list/$IndexedCollector"
import {$InternalSignalInput, $InternalSignalInput$Type} from "packages/team/creative/littletiles/common/structure/signal/input/$InternalSignalInput"
import {$StructureParentCollection, $StructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$StructureParentCollection"
import {$HashMapList, $HashMapList$Type} from "packages/team/creative/creativecore/common/util/type/map/$HashMapList"
import {$ISignalComponent, $ISignalComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalComponent"
import {$LittleStructureType, $LittleStructureType$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ILevelPositionProvider, $ILevelPositionProvider$Type} from "packages/team/creative/littletiles/common/structure/connection/$ILevelPositionProvider"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$LevelChildrenList, $LevelChildrenList$Type} from "packages/team/creative/littletiles/common/structure/connection/children/$LevelChildrenList"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$CreativePacket, $CreativePacket$Type} from "packages/team/creative/creativecore/common/network/$CreativePacket"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$ISignalStructureComponent, $ISignalStructureComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalStructureComponent"
import {$StructureAbsolute, $StructureAbsolute$Type} from "packages/team/creative/littletiles/common/structure/relative/$StructureAbsolute"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$LittleTileContext, $LittleTileContext$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTileContext"
import {$LittleUpdateCollector, $LittleUpdateCollector$Type} from "packages/team/creative/littletiles/common/level/$LittleUpdateCollector"
import {$SurroundingBox, $SurroundingBox$Type} from "packages/team/creative/littletiles/common/math/box/$SurroundingBox"
import {$SignalExternalOutputHandler, $SignalExternalOutputHandler$Type} from "packages/team/creative/littletiles/common/structure/signal/output/$SignalExternalOutputHandler"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$ISignalSchedulable, $ISignalSchedulable$Type} from "packages/team/creative/littletiles/common/structure/signal/schedule/$ISignalSchedulable"
import {$Placement, $Placement$Type} from "packages/team/creative/littletiles/common/placement/$Placement"
import {$LittleGroupAbsolute, $LittleGroupAbsolute$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroupAbsolute"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ABB, $ABB$Type} from "packages/team/creative/creativecore/common/util/math/box/$ABB"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $LittleStructure implements $ISignalSchedulable, $ILevelPositionProvider {
readonly "type": $LittleStructureType
readonly "mainBlock": $IStructureParentCollection
 "name": string
readonly "children": $LevelChildrenList

constructor(arg0: $LittleStructureType$Type, arg1: $IStructureParentCollection$Type)

public "hasParent"(): boolean
public "getMinPos"(arg0: $BlockPos$MutableBlockPos$Type): $BlockPos$MutableBlockPos
public "blocksList"(): $Iterable<($IStructureParentCollection)>
public "updateStructure"(arg0: boolean): void
public "updateStructure"(): void
public "placedStructure"(arg0: $ItemStack$Type): void
public "getComponentLevel"(): $Level
public "afterPlaced"(): void
public "finishedPlacement"(arg0: $Placement$Type): void
public "checkConnections"(): void
public "findTopStructure"(): $LittleStructure
public "hasLevel"(): boolean
public "removeStructure"(arg0: $LittleUpdateCollector$Type): void
public "structureDestroyed"(): void
public "savePreview"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type): $CompoundTag
public "changeToEntityForm"(): $LittleAnimationEntity
public "getAnimationEntity"(): $LittleAnimationEntity
public "changeToBlockForm"(): void
public "loadUpdatePacket"(arg0: $CompoundTag$Type): void
public "externalOutputs"(): $Iterable<($SignalExternalOutputHandler)>
public "broadcastPacket"(arg0: $CreativePacket$Type): void
public "setExternalOutputs"(arg0: $HashMap$Type<(integer), ($SignalExternalOutputHandler$Type)>): void
public "markChanged"(): void
public "hasStructureColor"(): boolean
public "getStructureColor"(): integer
public "queueForNextTick"(): void
public "getExternalOutput"(arg0: integer): $SignalExternalOutputHandler
public "internalInputCount"(): integer
public "notifyChange"(): void
public "markUnchanged"(): void
public "isStillAvailable"(): boolean
public "hasExternalOutputs"(): boolean
/**
 * 
 * @deprecated
 */
public "rotateForWarpDrive"(arg0: $LittleGrid$Type, arg1: $Rotation$Type, arg2: integer): void
/**
 * 
 * @deprecated
 */
public "mirrorForWarpDrive"(arg0: $LittleGrid$Type, arg1: $Axis$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "count"(): integer
public "info"(): string
public "getParent"(): $StructureChildConnection
public "save"(arg0: $CompoundTag$Type): void
public "getIndex"(): integer
public "positions"(): $Iterable<($BlockPos)>
public "unload"(): void
public "getAttribute"(): integer
public "use"(arg0: $Level$Type, arg1: $LittleTileContext$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: $InteractionHand$Type): $InteractionResult
public "changed"(arg0: $ISignalComponent$Type): void
public "getInput"(arg0: integer): $InternalSignalInput
public "getBlock"(arg0: $BlockPos$Type): $IStructureParentCollection
public "isAnimated"(): boolean
public "renderTick"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $BlockPos$Type, arg3: float): void
public "neighbourChanged"(): void
public "getBedDirection"(): $Direction
public "blocks"(): $Iterable<($BETiles)>
public "tick"(): void
public "inputs"(): $Iterable<($ISignalStructureComponent)>
public "isClient"(): boolean
public "queuedTick"(): boolean
public "getStructurePos"(): $BlockPos
public "canInteract"(): boolean
public "getOutput"(arg0: integer): $InternalSignalOutput
public "outputs"(): $Iterable<($ISignalStructureComponent)>
public "isChildOf"(arg0: $LittleStructure$Type): boolean
public "getRenderBoundingBox"(): $AABB
public "markDirty"(): void
public "getExplosionResistance"(): float
public "addBlock"(arg0: $StructureParentCollection$Type): void
public "hasChanged"(): boolean
public "onEntityCollidedWithBlock"(arg0: $Level$Type, arg1: $IStructureParentCollection$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getPreviews"(arg0: $BlockPos$Type): $LittleGroup
public "isBed"(arg0: $LivingEntity$Type): boolean
public "tiles"(): $Iterable<($Pair<($IStructureParentCollection), ($LittleTile)>)>
public "paint"(arg0: integer): void
public "getLightValue"(arg0: $BlockPos$Type): integer
public "collectAllBlocksListSameWorld"(): $HashMapList<($BlockPos), ($IStructureParentCollection)>
public "createAnimationCenter"(arg0: $BlockPos$Type, arg1: $LittleGrid$Type): $StructureAbsolute
public "updateConnectionToParent"(arg0: $StructureChildConnection$Type): void
public "internalOutputCount"(): integer
public "performInternalOutputChange"(arg0: $InternalSignalOutput$Type): void
public "receiveInternalOutputChange"(arg0: $InternalSignalOutput$Type): void
public "getAbsolutePreviews"(arg0: $BlockPos$Type): $LittleGroupAbsolute
public "getStructureLocation"(): $StructureLocation
public "removeStructureSameLevel"(arg0: $LittleUpdateCollector$Type): void
public "getPreviewsSameLevelOnly"(arg0: $BlockPos$Type): $LittleGroup
public "getHighestCenterVec"(): $Vec3d
public "getHighestCenterPoint"(): $LittleVecAbsolute
public "getAbsolutePreviewsSameLevelOnly"(arg0: $BlockPos$Type): $LittleGroupAbsolute
public "tryAttributeChangeForBlocks"(): void
public "getMaxRenderDistance"(): double
public "getRenderingBoxes"(arg0: $BlockPos$Type, arg1: $RenderType$Type, arg2: $IndexedCollector$Type<($LittleRenderBox$Type)>): void
public "getPercentVolume"(): double
public "getSurroundingBox"(): $SurroundingBox
public "collectExtraBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type, arg4: $List$Type<($ABB$Type)>): void
public "getStructureDrop"(): $ItemStack
public "tileDestroyed"(): void
public "getStructureLevel"(): $Level
public "getDefaultColor"(): integer
public "generateUpdatePacket"(arg0: boolean): $CreativePacket
public "schedule"(): void
public "updateSignaling"(): void
get "componentLevel"(): $Level
get "animationEntity"(): $LittleAnimationEntity
get "structureColor"(): integer
get "stillAvailable"(): boolean
get "parent"(): $StructureChildConnection
get "index"(): integer
get "attribute"(): integer
get "animated"(): boolean
get "bedDirection"(): $Direction
get "client"(): boolean
get "structurePos"(): $BlockPos
get "renderBoundingBox"(): $AABB
get "explosionResistance"(): float
get "structureLocation"(): $StructureLocation
get "highestCenterVec"(): $Vec3d
get "highestCenterPoint"(): $LittleVecAbsolute
get "maxRenderDistance"(): double
get "percentVolume"(): double
get "surroundingBox"(): $SurroundingBox
get "structureDrop"(): $ItemStack
get "structureLevel"(): $Level
get "defaultColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleStructure$Type = ($LittleStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleStructure_ = $LittleStructure$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemLittleGlove" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GloveMode, $GloveMode$Type} from "packages/team/creative/littletiles/common/item/glove/$GloveMode"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IItemTooltip, $IItemTooltip$Type} from "packages/team/creative/littletiles/common/item/tooltip/$IItemTooltip"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$PlacementMode, $PlacementMode$Type} from "packages/team/creative/littletiles/common/placement/mode/$PlacementMode"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$ILittlePlacer, $ILittlePlacer$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittlePlacer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"

export class $ItemLittleGlove extends $Item implements $ILittlePlacer, $IItemTooltip {
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

public static "setMode"(arg0: $ItemStack$Type, arg1: $GloveMode$Type): void
public static "setMode"(arg0: $CompoundTag$Type, arg1: $GloveMode$Type): void
public static "getMode"(arg0: $ItemStack$Type): $GloveMode
public "getLow"(arg0: $ItemStack$Type): $LittleGroup
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "containsIngredients"(arg0: $ItemStack$Type): boolean
public "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
public "getTiles"(arg0: $ItemStack$Type): $LittleGroup
public "hasTiles"(arg0: $ItemStack$Type): boolean
public "getPlacement"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: boolean): $PlacementPreview
public "saveTiles"(arg0: $ItemStack$Type, arg1: $LittleGroup$Type): void
public "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
public "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "tooltipData"(arg0: $ItemStack$Type): (any)[]
public "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "get"(arg0: $ItemStack$Type, arg1: boolean): $LittleGroup
public "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
public "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
public "getPreviewAlphaFactor"(): float
public "snapToGridByDefault"(arg0: $ItemStack$Type): boolean
public "getPlacementMode"(arg0: $ItemStack$Type): $PlacementMode
public "shouldCache"(): boolean
public "getPositingCubes"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $List<($RenderBox)>
public "canSnapToGrid"(arg0: $ItemStack$Type): boolean
public "getCachedMin"(arg0: $ItemStack$Type): $LittleVec
public "getTilesGrid"(arg0: $ItemStack$Type): $LittleGrid
public "getCachedSize"(arg0: $ItemStack$Type): $LittleVec
public "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
public "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
public "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "sendTransformationUpdate"(): boolean
public "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
public "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
public "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
get "previewAlphaFactor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLittleGlove$Type = ($ItemLittleGlove);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLittleGlove_ = $ItemLittleGlove$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/registry/ingredient/$IStructureIngredientRule" {
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"

export interface $IStructureIngredientRule {

 "add"(arg0: $LittleGroup$Type, arg1: $LittleIngredients$Type): void

(arg0: $LittleGroup$Type, arg1: $LittleIngredients$Type): void
}

export namespace $IStructureIngredientRule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructureIngredientRule$Type = ($IStructureIngredientRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStructureIngredientRule_ = $IStructureIngredientRule$Type;
}}
declare module "packages/team/creative/littletiles/common/math/vec/$SplitRangeBoxes$SplitRangeBox" {
import {$RangedBitSet$BitRange, $RangedBitSet$BitRange$Type} from "packages/team/creative/creativecore/common/util/math/vec/$RangedBitSet$BitRange"

export class $SplitRangeBoxes$SplitRangeBox {
 "x": $RangedBitSet$BitRange
 "y": $RangedBitSet$BitRange
 "z": $RangedBitSet$BitRange

constructor()

public "set"(arg0: $RangedBitSet$BitRange$Type, arg1: $RangedBitSet$BitRange$Type, arg2: $RangedBitSet$BitRange$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplitRangeBoxes$SplitRangeBox$Type = ($SplitRangeBoxes$SplitRangeBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SplitRangeBoxes$SplitRangeBox_ = $SplitRangeBoxes$SplitRangeBox$Type;
}}
declare module "packages/team/creative/littletiles/common/ingredient/$LittleIngredient" {
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$TextBuilder, $TextBuilder$Type} from "packages/team/creative/creativecore/common/util/text/$TextBuilder"
import {$LittleIngredientBase, $LittleIngredientBase$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredientBase"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LittleIngredient$IngredientConvertionHandler, $LittleIngredient$IngredientConvertionHandler$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredient$IngredientConvertionHandler"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$LittleIngredient$IngredientOverflowHandler, $LittleIngredient$IngredientOverflowHandler$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredient$IngredientOverflowHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"

export class $LittleIngredient<T extends $LittleIngredient<(any)>> extends $LittleIngredientBase<(T)> {

constructor()

public "add"(arg0: T): T
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "indexOf"(arg0: $Class$Type<(any)>): integer
public static "indexOf"(arg0: $LittleIngredient$Type<(any)>): integer
public static "extract"(arg0: $LittleElement$Type, arg1: double): $LittleIngredients
public static "extract"(arg0: $LittleGroup$Type): $LittleIngredients
public "scale"(arg0: integer): void
public "print"(arg0: $TextBuilder$Type): void
public "sub"(arg0: T): T
public static "typeCount"(): integer
public static "registerType"<T extends $LittleIngredient<(any)>>(arg0: $Class$Type<(T)>, arg1: $LittleIngredient$IngredientOverflowHandler$Type<(T)>, arg2: $LittleIngredient$IngredientConvertionHandler$Type<(T)>): void
public "toText"(): $TextBuilder
public static "handleOverflow"(arg0: $LittleIngredient$Type<(any)>): $List<($ItemStack)>
public "getMinimumCount"(arg0: T, arg1: integer): integer
public "scaleAdvanced"(arg0: double): void
public static "handleExtra"(arg0: $LittleIngredient$Type<(any)>, arg1: $ItemStack$Type, arg2: $LittleIngredients$Type): boolean
public static "extractStructureOnly"(arg0: $LittleGroup$Type): $LittleIngredients
public static "extractWithoutCount"(arg0: $ItemStack$Type, arg1: boolean): $LittleIngredients
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleIngredient$Type<T> = ($LittleIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleIngredient_<T> = $LittleIngredient$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/mixin/server/level/$ChunkMapAccessor" {
import {$ChunkHolder, $ChunkHolder$Type} from "packages/net/minecraft/server/level/$ChunkHolder"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $ChunkMapAccessor {

 "callGetChunks"(): $Iterable<($ChunkHolder)>

(): $Iterable<($ChunkHolder)>
}

export namespace $ChunkMapAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMapAccessor$Type = ($ChunkMapAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkMapAccessor_ = $ChunkMapAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/level/little/$LittleSubLevel" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelEntityGetter, $LevelEntityGetter$Type} from "packages/net/minecraft/world/level/entity/$LevelEntityGetter"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$LevelBlockChangeListener, $LevelBlockChangeListener$Type} from "packages/team/creative/littletiles/common/level/little/$LevelBlockChangeListener"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LittleEntityRenderManager, $LittleEntityRenderManager$Type} from "packages/team/creative/littletiles/client/render/entity/$LittleEntityRenderManager"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Difficulty, $Difficulty$Type} from "packages/net/minecraft/world/$Difficulty"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TargetingConditions, $TargetingConditions$Type} from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$EntityTypeTest, $EntityTypeTest$Type} from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import {$ChunkStatus, $ChunkStatus$Type} from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$IVecOrigin, $IVecOrigin$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$WorldBorder, $WorldBorder$Type} from "packages/net/minecraft/world/level/border/$WorldBorder"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$ISubLevel, $ISubLevel$Type} from "packages/team/creative/creativecore/common/level/$ISubLevel"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$TickPriority, $TickPriority$Type} from "packages/net/minecraft/world/ticks/$TickPriority"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$LittleLevel, $LittleLevel$Type} from "packages/team/creative/littletiles/common/level/little/$LittleLevel"
import {$LevelData, $LevelData$Type} from "packages/net/minecraft/world/level/storage/$LevelData"

export interface $LittleSubLevel extends $ISubLevel, $LittleLevel {

 "getEntityGetter"(): $LevelEntityGetter<($Entity)>
 "setParent"(arg0: $Level$Type): void
 "enabledFeatures"(): $FeatureFlagSet
 "shouldUseLightingForRenderig"(): boolean
 "getParent"(): $Level
 "getRealLevel"(): $Level
 "transformToRealWorld"(arg0: $BlockPos$Type): $BlockPos
 "removeEntityById"(arg0: integer, arg1: $Entity$RemovalReason$Type): void
 "key"(): $UUID
 "unload"(): void
 "entities"(): $Iterable<($Entity)>
 "tick"(): void
 "allowPlacement"(): boolean
 "chunks"(): $Iterable<(any)>
 "asLevel"(): $Level
 "m_104665_"(arg0: $LevelChunk$Type): void
 "getHolder"(): $Entity
 "setHolder"(arg0: $Entity$Type): void
 "getRenderManager"(): $LittleEntityRenderManager<(any)>
 "registerBlockChangeListener"(arg0: $LevelBlockChangeListener$Type): void
 "getOrigin"(): $IVecOrigin
 "setOrigin"(arg0: $Vec3d$Type): void
 "levelEvent"(arg0: $Player$Type, arg1: integer, arg2: $BlockPos$Type, arg3: integer): void
 "gameEvent"(arg0: $GameEvent$Type, arg1: $Vec3$Type, arg2: $GameEvent$Context$Type): void
 "getLevelData"(): $LevelData
 "gameEvent"(arg0: $GameEvent$Type, arg1: $BlockPos$Type, arg2: $GameEvent$Context$Type): void
 "levelEvent"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
 "blockUpdated"(arg0: $BlockPos$Type, arg1: $Block$Type): void
 "neighborShapeChanged"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
 "hasChunk"(arg0: integer, arg1: integer): boolean
 "getCurrentDifficultyAt"(arg0: $BlockPos$Type): $DifficultyInstance
 "nextSubTickCount"(): long
 "getRandom"(): $RandomSource
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer, arg3: $TickPriority$Type): void
 "getBlockTicks"(): $LevelTickAccess<($Block)>
 "dayTime"(): long
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer, arg3: $TickPriority$Type): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type): void
 "getFluidTicks"(): $LevelTickAccess<($Fluid)>
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $BlockPos$Type): void
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $Vec3$Type): void
 "addParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
 "getDifficulty"(): $Difficulty
 "getServer"(): $MinecraftServer
 "getChunkSource"(): $ChunkSource
 "getPartEntities"(): $Collection<($PartEntity<(any)>)>
 "getMaxEntityRadius"(): double
 "increaseMaxEntityRadius"(arg0: double): double
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "isUnobstructed"(arg0: $Entity$Type, arg1: $VoxelShape$Type): boolean
 "getHeightmapPos"(arg0: $Heightmap$Types$Type, arg1: $BlockPos$Type): $BlockPos
 "getEntityCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($VoxelShape)>
 "getTimeOfDay"(arg0: float): float
 "getMoonBrightness"(): float
 "getMoonPhase"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<($Entity)>
 "getNearestPlayer"(arg0: $Entity$Type, arg1: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type): $Player
 "getNearestEntity"<T extends $LivingEntity>(arg0: $List$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double): T
 "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: double, arg3: double, arg4: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$Type<($Entity$Type)>): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: double, arg2: double, arg3: double): $Player
 "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$Type): T
 "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$Type<(T)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: $AABB$Type): $List<(T)>
 "getNearbyPlayers"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: $AABB$Type): $List<($Player)>
 "getPlayerByUUID"(arg0: $UUID$Type): $Player
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$Type<($Entity$Type), (T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "players"(): $List<(any)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type): $List<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($Entity)>
 "isClientSide"(): boolean
 "isEmptyBlock"(arg0: $BlockPos$Type): boolean
 "getBiome"(arg0: $BlockPos$Type): $Holder<($Biome)>
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type, arg3: boolean): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "getSeaLevel"(): integer
 "getHeight"(arg0: $Heightmap$Types$Type, arg1: integer, arg2: integer): integer
 "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
 "getSkyDarken"(): integer
 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "isWaterAt"(arg0: $BlockPos$Type): boolean
 "getChunk"(arg0: $BlockPos$Type): $ChunkAccess
 "getHeight"(): integer
 "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "canSeeSkyFromBelowWater"(arg0: $BlockPos$Type): boolean
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getPathfindingCostFromLightLevels"(arg0: $BlockPos$Type): float
 "isAreaLoaded"(arg0: $BlockPos$Type, arg1: integer): boolean
 "holderLookup"<T>(arg0: $ResourceKey$Type<(any)>): $HolderLookup<(T)>
 "getBlockStatesIfLoaded"(arg0: $AABB$Type): $Stream<($BlockState)>
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "getLightLevelDependentMagicValue"(arg0: $BlockPos$Type): float
 "dimensionType"(): $DimensionType
 "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: $BlockPos$Type): boolean
 "getMinBuildHeight"(): integer
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type): integer
 "registryAccess"(): $RegistryAccess
 "containsAnyLiquid"(arg0: $AABB$Type): boolean
 "getBiomeManager"(): $BiomeManager
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
 "getShade"(arg0: $Direction$Type, arg1: boolean): float
 "noCollision"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "getWorldBorder"(): $WorldBorder
 "findSupportingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): $Optional<($BlockPos)>
 "getBlockCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "findFreePosition"(arg0: $Entity$Type, arg1: $VoxelShape$Type, arg2: $Vec3$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
 "noCollision"(arg0: $Entity$Type): boolean
 "isUnobstructed"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): boolean
 "isUnobstructed"(arg0: $Entity$Type): boolean
 "noCollision"(arg0: $AABB$Type): boolean
 "collidesWithSuffocatingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "getCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "getDirectSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "getDirectSignalTo"(arg0: $BlockPos$Type): integer
 "getControlInputSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: boolean): integer
 "getBestNeighborSignal"(arg0: $BlockPos$Type): integer
 "hasNeighborSignal"(arg0: $BlockPos$Type): boolean
 "getSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "hasSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): boolean
 "isStateAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($BlockState$Type)>): boolean
 "isFluidAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($FluidState$Type)>): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
 "addFreshEntity"(arg0: $Entity$Type): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer, arg3: integer): boolean
 "removeBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type, arg3: integer): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type): boolean
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "getMaxSection"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
}

export namespace $LittleSubLevel {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleSubLevel$Type = ($LittleSubLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleSubLevel_ = $LittleSubLevel$Type;
}}
declare module "packages/team/creative/littletiles/common/entity/$LittleEntityPhysic" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CollisionCoordinator, $CollisionCoordinator$Type} from "packages/team/creative/creativecore/common/util/math/collision/$CollisionCoordinator"
import {$ABB, $ABB$Type} from "packages/team/creative/creativecore/common/util/math/box/$ABB"
import {$PhysicalState, $PhysicalState$Type} from "packages/team/creative/littletiles/common/structure/animation/$PhysicalState"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$LittleSubLevel, $LittleSubLevel$Type} from "packages/team/creative/littletiles/common/level/little/$LittleSubLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LittleEntity, $LittleEntity$Type} from "packages/team/creative/littletiles/common/entity/$LittleEntity"
import {$IVecOrigin, $IVecOrigin$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $LittleEntityPhysic<T extends $LittleEntity<(any)>> {
readonly "parent": T

constructor(arg0: T)

public "get"(arg0: $Facing$Type): double
public "load"(arg0: $CompoundTag$Type): void
public "transform"(arg0: $CollisionCoordinator$Type): void
public "set"(arg0: $PhysicalState$Type): void
public "set"(arg0: $Facing$Type, arg1: double): void
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
public "save"(): $CompoundTag
public "moveAndRotateAnimation"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
public "getCenter"(): $Vec3
public "getOrigin"(): $IVecOrigin
public "tick"(): void
public "shouldPush"(): boolean
public "loadExtra"(arg0: $CompoundTag$Type): void
public "setBB"(arg0: $ABB$Type): void
public "ignoreCollision"(arg0: $Runnable$Type): void
public "setSubLevel"(arg0: $LittleSubLevel$Type): void
public "getOBB"(): $ABB
public "updateBoundingBox"(): void
get "center"(): $Vec3
get "origin"(): $IVecOrigin
set "bB"(value: $ABB$Type)
set "subLevel"(value: $LittleSubLevel$Type)
get "oBB"(): $ABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleEntityPhysic$Type<T> = ($LittleEntityPhysic<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleEntityPhysic_<T> = $LittleEntityPhysic$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/api/common/block/$LittleBlock" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"

export interface $LittleBlock {

 "getState"(): $BlockState
 "is"(arg0: $TagKey$Type<($Block$Type)>): boolean
 "is"(arg0: $ItemStack$Type): boolean
 "is"(arg0: $Block$Type): boolean
 "getStack"(): $ItemStack
 "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type, arg2: $LittleVec$Type): $BlockState
 "use"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleBox$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: $InteractionHand$Type): $InteractionResult
 "blockName"(): string
 "mirror"(arg0: $BlockState$Type, arg1: $Axis$Type, arg2: $LittleVec$Type): $BlockState
 "noCollision"(): boolean
 "getFogColor"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type, arg3: $Vector3d$Type, arg4: float): $Vector3d
 "canInteract"(): boolean
 "isTranslucent"(): boolean
 "exploded"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Explosion$Type): void
 "getSoundType"(): $SoundType
 "getExplosionResistance"(arg0: $LittleTile$Type): float
 "getEnchantPowerBonus"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type): float
 "canBeRenderCombined"(arg0: $LittleTile$Type, arg1: $LittleTile$Type): boolean
 "shouldUseStateForRenderType"(): boolean
 "checkEntityCollision"(): boolean
 "canBeConvertedToVanilla"(): boolean
 "getFriction"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): float
 "getLightValue"(): integer
 "isFluid"(arg0: $TagKey$Type<($Fluid$Type)>): boolean
 "entityCollided"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): void
 "getRenderBox"(arg0: $LittleGrid$Type, arg1: $RenderType$Type, arg2: $LittleBox$Type, arg3: $LittleElement$Type): $LittleRenderBox
 "randomDisplayTick"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $RandomSource$Type): void
 "cullOverEdge"(): boolean
}

export namespace $LittleBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleBlock$Type = ($LittleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleBlock_ = $LittleBlock$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/sync/$GuiSyncControl" {
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$GuiSyncHolder, $GuiSyncHolder$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder"

export class $GuiSyncControl<C extends $GuiControl, T extends $Tag> {
readonly "holder": $GuiSyncHolder
readonly "name": string


public "receive"(arg0: C, arg1: T): void
public "syncPath"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSyncControl$Type<C, T> = ($GuiSyncControl<(C), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSyncControl_<C, T> = $GuiSyncControl$Type<(C), (T)>;
}}
declare module "packages/team/creative/littletiles/mixin/client/render/$LevelRendererAccessor" {
import {$ViewArea, $ViewArea$Type} from "packages/net/minecraft/client/renderer/$ViewArea"
import {$Frustum, $Frustum$Type} from "packages/net/minecraft/client/renderer/culling/$Frustum"

export interface $LevelRendererAccessor {

 "getCullingFrustum"(): $Frustum
 "getCapturedFrustum"(): $Frustum
 "getViewArea"(): $ViewArea
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/$GuiLayer" {
import {$GuiSyncHolder$GuiSyncHolderLayer, $GuiSyncHolder$GuiSyncHolderLayer$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder$GuiSyncHolderLayer"
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$VAlign, $VAlign$Type} from "packages/team/creative/creativecore/common/gui/$VAlign"
import {$GuiSizeRule, $GuiSizeRule$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiSizeRule"
import {$Align, $Align$Type} from "packages/team/creative/creativecore/common/gui/$Align"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$GuiManager$GuiManagerType, $GuiManager$GuiManagerType$Type} from "packages/team/creative/creativecore/common/gui/manager/$GuiManager$GuiManagerType"
import {$GuiParent, $GuiParent$Type} from "packages/team/creative/creativecore/common/gui/$GuiParent"
import {$IGuiInventory, $IGuiInventory$Type} from "packages/team/creative/creativecore/common/gui/controls/inventory/$IGuiInventory"
import {$GuiFlow, $GuiFlow$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiFlow"
import {$ControlFormatting, $ControlFormatting$Type} from "packages/team/creative/creativecore/common/gui/style/$ControlFormatting"
import {$IGuiIntegratedParent, $IGuiIntegratedParent$Type} from "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent"
import {$Options, $Options$Type} from "packages/net/minecraft/client/$Options"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GuiStyle, $GuiStyle$Type} from "packages/team/creative/creativecore/common/gui/style/$GuiStyle"
import {$IGuiParent, $IGuiParent$Type} from "packages/team/creative/creativecore/common/gui/$IGuiParent"
import {$GuiManager, $GuiManager$Type} from "packages/team/creative/creativecore/common/gui/manager/$GuiManager"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"
import {$GuiManagerItem, $GuiManagerItem$Type} from "packages/team/creative/creativecore/common/gui/manager/$GuiManagerItem"

export class $GuiLayer extends $GuiParent {
static readonly "MINIMUM_LAYER_SPACING": integer
 "style": $GuiStyle
readonly "rect": $Rect
 "flow": $GuiFlow
 "align": $Align
 "valign": $VAlign
 "spacing": integer
readonly "name": string
 "enabled": boolean
 "preferred": $GuiSizeRule
 "expandableX": boolean
 "expandableY": boolean
 "visible": boolean

constructor(arg0: string, arg1: integer, arg2: integer)
constructor(arg0: string)

public "init"(): void
public "getLayer"(): $GuiLayer
public "create"(): void
public "closed"(): void
public "has"(arg0: $GuiManager$GuiManagerType$Type<(any)>): boolean
public "reinit"(): void
public "getOrCreate"<T extends $GuiManager>(arg0: $GuiManager$GuiManagerType$Type<(T)>): T
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): boolean
public "tick"(): void
public "managers"(): $Iterable<($GuiManager)>
public "getSettings"(): $Options
public "getWidth"(): integer
public "getHeight"(): integer
public "getSyncHolder"(): $GuiSyncHolder$GuiSyncHolderLayer
public "itemManager"(): $GuiManagerItem
public "hasGrayBackground"(): boolean
public "becameTopLayer"(): void
public "getControlFormatting"(): $ControlFormatting
public "inventoriesToExract"(): $Iterable<($IGuiInventory)>
public "closeLayerUsingEscape"(): boolean
public "inventoriesToInsert"(): $Iterable<($IGuiInventory)>
public "setDim"(arg0: integer, arg1: integer): $GuiControl
public "reflow"(): void
public "toLayerRect"(arg0: $GuiControl$Type, arg1: $Rect$Type): $Rect
public "hasLayer"(): boolean
public "mouseReleased"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: integer): void
public "getStyle"(): $GuiStyle
public "getIntegratedParent"(): $IGuiIntegratedParent
public "hasGui"(): boolean
public "isParent"(arg0: $IGuiParent$Type): boolean
public "getPlayer"(): $Player
get "layer"(): $GuiLayer
get "settings"(): $Options
get "width"(): integer
get "height"(): integer
get "syncHolder"(): $GuiSyncHolder$GuiSyncHolderLayer
get "controlFormatting"(): $ControlFormatting
get "style"(): $GuiStyle
get "integratedParent"(): $IGuiIntegratedParent
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiLayer$Type = ($GuiLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiLayer_ = $GuiLayer$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/event/$GuiEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GuiEvent {

constructor()

public "cancel"(): void
public "cancelable"(): boolean
public "isCanceled"(): boolean
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiEvent$Type = ($GuiEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiEvent_ = $GuiEvent$Type;
}}
declare module "packages/team/creative/littletiles/api/client/entity/$LevelTransitionListener" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $LevelTransitionListener {

 "changedLevel"(arg0: $Level$Type, arg1: $Level$Type): void
 "prepareChangeLevel"(arg0: $Level$Type, arg1: $Level$Type): void
}

export namespace $LevelTransitionListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelTransitionListener$Type = ($LevelTransitionListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelTransitionListener_ = $LevelTransitionListener$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/type/bed/$ILittleBedPlayerExtension" {
import {$LittleBed, $LittleBed$Type} from "packages/team/creative/littletiles/common/structure/type/bed/$LittleBed"

export interface $ILittleBedPlayerExtension {

 "setBed"(arg0: $LittleBed$Type): void
 "setSleepingCounter"(arg0: integer): void
 "getBed"(): $LittleBed
}

export namespace $ILittleBedPlayerExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILittleBedPlayerExtension$Type = ($ILittleBedPlayerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILittleBedPlayerExtension_ = $ILittleBedPlayerExtension$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/directional/$StructureDirectionalField" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$LittleVecGrid, $LittleVecGrid$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecGrid"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$LittlePlaceBoxRelative, $LittlePlaceBoxRelative$Type} from "packages/team/creative/littletiles/common/placement/box/$LittlePlaceBoxRelative"
import {$StructureDirectionalType, $StructureDirectionalType$Type} from "packages/team/creative/littletiles/common/structure/directional/$StructureDirectionalType"
import {$StructureDirectional, $StructureDirectional$Type} from "packages/team/creative/littletiles/common/structure/directional/$StructureDirectional"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"

export class $StructureDirectionalField {
readonly "field": $Field
readonly "key": string
readonly "saveKey": string
readonly "annotation": $StructureDirectional
readonly "type": $StructureDirectionalType<(any)>

constructor(arg0: $Field$Type, arg1: $StructureDirectional$Type)

public "convertToSmallest"(arg0: any): void
public "advancedScale"(arg0: any, arg1: integer, arg2: integer): void
public "getPlaceBox"(arg0: any, arg1: $LittleGroup$Type): $LittlePlaceBoxRelative
public "createAndSet"(arg0: $LittleStructure$Type, arg1: $CompoundTag$Type): any
public "get"(arg0: $LittleStructure$Type): any
public "getDefault"(arg0: $LittleStructure$Type): any
public "set"(arg0: $LittleStructure$Type, arg1: any): void
public "save"(arg0: $CompoundTag$Type, arg1: any): void
public "create"(arg0: $LittleStructure$Type, arg1: $CompoundTag$Type): any
public "rotate"(arg0: any, arg1: $LittleGrid$Type, arg2: $Rotation$Type, arg3: $LittleVec$Type): any
public "move"(arg0: any, arg1: $LittleVecGrid$Type): any
public "setDefault"(arg0: any): void
public "mirror"(arg0: any, arg1: $LittleGrid$Type, arg2: $Axis$Type, arg3: $LittleVec$Type): any
public "createTemporary"(arg0: $CompoundTag$Type): any
public "getGrid"(arg0: any): $LittleGrid
set "default"(value: any)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureDirectionalField$Type = ($StructureDirectionalField);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureDirectionalField_ = $StructureDirectionalField$Type;
}}
declare module "packages/team/creative/littletiles/common/math/box/volume/$LittleVolumes" {
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $LittleVolumes implements $IGridBased {
 "grid": $LittleGrid

constructor(arg0: $LittleGrid$Type)
constructor()

public "getSmallest"(): integer
public "add"(arg0: $LittleVolumes$Type): void
public "add"(arg0: $LittleGroup$Type): void
public "add"(arg0: $LittleGrid$Type, arg1: $LittleElement$Type, arg2: integer): void
public "add"(arg0: $LittleGrid$Type, arg1: $LittleTile$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "entrySet"(): $Set<($Map$Entry<($LittleElement), (integer)>)>
public "convertTo"(arg0: $LittleGrid$Type): void
public "getGrid"(): $LittleGrid
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "smallest"(): integer
get "empty"(): boolean
get "grid"(): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleVolumes$Type = ($LittleVolumes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleVolumes_ = $LittleVolumes$Type;
}}
declare module "packages/team/creative/littletiles/client/render/cache/buffer/$ChunkBufferDownloader" {
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export interface $ChunkBufferDownloader {

 "hasFacingSupport"(): boolean
 "downloaded"(): $ByteBuffer
 "downloaded"(arg0: integer): $ByteBuffer
}

export namespace $ChunkBufferDownloader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBufferDownloader$Type = ($ChunkBufferDownloader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBufferDownloader_ = $ChunkBufferDownloader$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/logic/$SignalPatternParser" {
import {$ParseException, $ParseException$Type} from "packages/java/text/$ParseException"

export class $SignalPatternParser {
readonly "pattern": string

constructor(arg0: string)

public "position"(): integer
public "hasNext"(): boolean
public "next"(arg0: boolean): character
public "current"(): character
public "exception"(arg0: string): $ParseException
public "parseNumber"(): integer
public "lookForNext"(arg0: boolean): character
public "invalidChar"(arg0: character): $ParseException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalPatternParser$Type = ($SignalPatternParser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalPatternParser_ = $SignalPatternParser$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/parent/$StructureParentCollection" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$IStructureParentCollection, $IStructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$BlockParentCollection, $BlockParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$BlockParentCollection"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$ParentCollection, $ParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$ParentCollection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$IStructureConnection, $IStructureConnection$Type} from "packages/team/creative/littletiles/common/structure/connection/$IStructureConnection"

export class $StructureParentCollection extends $ParentCollection implements $IStructureParentCollection, $IStructureConnection {

constructor(arg0: $BlockParentCollection$Type, arg1: integer, arg2: integer)
constructor(arg0: $BlockParentCollection$Type, arg1: $CompoundTag$Type)

public "isStructure"(): boolean
/**
 * 
 * @deprecated
 */
public "rotateForWarpDrive"(arg0: $Rotation$Type, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "mirrorForWarpDrive"(arg0: $Axis$Type): void
public "getStructurePosition"(): $BlockPos
public "setStructureNBT"(arg0: $CompoundTag$Type): $LittleStructure
public "remove"(): void
public "setParent"(arg0: $BlockParentCollection$Type): void
public static "create"(arg0: $CompoundTag$Type, arg1: $StructureParentCollection$Type): $LittleStructure
public "removed"(): void
public "getIndex"(): integer
public "unload"(): void
public "getAttribute"(): integer
public "setAttribute"(arg0: integer): void
public "totalSize"(): integer
public "getStructure"(): $LittleStructure
public "isClient"(): boolean
public "isRemoved"(): boolean
public static "updateStatus"(arg0: $StructureParentCollection$Type): void
public "getBE"(): $BETiles
public "isMain"(): boolean
public "isStructureChild"(arg0: $LittleStructure$Type): boolean
public static "setRelativePos"(arg0: $StructureParentCollection$Type, arg1: $BlockPos$Type): void
public "checkConnection"(): void
public "isLinkToAnotherWorld"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<($LittleTile)>
get "structure"(): boolean
get "structurePosition"(): $BlockPos
set "structureNBT"(value: $CompoundTag$Type)
set "parent"(value: $BlockParentCollection$Type)
get "index"(): integer
get "attribute"(): integer
set "attribute"(value: integer)
get "structure"(): $LittleStructure
get "client"(): boolean
get "bE"(): $BETiles
get "main"(): boolean
get "linkToAnotherWorld"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureParentCollection$Type = ($StructureParentCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureParentCollection_ = $StructureParentCollection$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemLittleChisel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IItemTooltip, $IItemTooltip$Type} from "packages/team/creative/littletiles/common/item/tooltip/$IItemTooltip"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$PlacementMode, $PlacementMode$Type} from "packages/team/creative/littletiles/common/placement/mode/$PlacementMode"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$LittleShape, $LittleShape$Type} from "packages/team/creative/littletiles/common/placement/shape/$LittleShape"
import {$ShapeSelection, $ShapeSelection$Type} from "packages/team/creative/littletiles/common/placement/shape/$ShapeSelection"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$ILittlePlacer, $ILittlePlacer$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittlePlacer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"

export class $ItemLittleChisel extends $Item implements $ILittlePlacer, $IItemTooltip {
static "selection": $ShapeSelection
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

public "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
public static "getShape"(arg0: $CompoundTag$Type): $LittleShape
public static "getShape"(arg0: $ItemStack$Type): $LittleShape
public "getLow"(arg0: $ItemStack$Type): $LittleGroup
public static "getElement"(arg0: $CompoundTag$Type): $LittleElement
public static "getElement"(arg0: $ItemStack$Type): $LittleElement
public static "setElement"(arg0: $CompoundTag$Type, arg1: $LittleElement$Type): void
public static "setElement"(arg0: $ItemStack$Type, arg1: $LittleElement$Type): void
public "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
public "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
public static "setShape"(arg0: $CompoundTag$Type, arg1: $LittleShape$Type): void
public static "setShape"(arg0: $ItemStack$Type, arg1: $LittleShape$Type): void
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "containsIngredients"(arg0: $ItemStack$Type): boolean
public "getPreviewAlphaFactor"(): float
public "getTiles"(arg0: $ItemStack$Type): $LittleGroup
public "hasTiles"(arg0: $ItemStack$Type): boolean
public "getPlacement"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: boolean): $PlacementPreview
public "saveTiles"(arg0: $ItemStack$Type, arg1: $LittleGroup$Type): void
public "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
public "shouldCache"(): boolean
public "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "tooltipData"(arg0: $ItemStack$Type): (any)[]
public "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
public "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
public "get"(arg0: $ItemStack$Type, arg1: boolean): $LittleGroup
public "snapToGridByDefault"(arg0: $ItemStack$Type): boolean
public "getPlacementMode"(arg0: $ItemStack$Type): $PlacementMode
public "getPositingCubes"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $List<($RenderBox)>
public "canSnapToGrid"(arg0: $ItemStack$Type): boolean
public "getCachedMin"(arg0: $ItemStack$Type): $LittleVec
public "getTilesGrid"(arg0: $ItemStack$Type): $LittleGrid
public "getCachedSize"(arg0: $ItemStack$Type): $LittleVec
public "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
public "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
public "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "sendTransformationUpdate"(): boolean
public "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
get "previewAlphaFactor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLittleChisel$Type = ($ItemLittleChisel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLittleChisel_ = $ItemLittleChisel$Type;
}}
declare module "packages/team/creative/littletiles/common/gui/tool/$GuiGlove" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GuiSyncLocal, $GuiSyncLocal$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncLocal"
import {$VAlign, $VAlign$Type} from "packages/team/creative/creativecore/common/gui/$VAlign"
import {$GuiSizeRule, $GuiSizeRule$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiSizeRule"
import {$Align, $Align$Type} from "packages/team/creative/creativecore/common/gui/$Align"
import {$GuiFlow, $GuiFlow$Type} from "packages/team/creative/creativecore/common/gui/flow/$GuiFlow"
import {$IGuiIntegratedParent, $IGuiIntegratedParent$Type} from "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$GuiStyle, $GuiStyle$Type} from "packages/team/creative/creativecore/common/gui/style/$GuiStyle"
import {$IGuiParent, $IGuiParent$Type} from "packages/team/creative/creativecore/common/gui/$IGuiParent"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"
import {$GloveMode, $GloveMode$Type} from "packages/team/creative/littletiles/common/item/glove/$GloveMode"

export class $GuiGlove extends $GuiConfigure {
 "grid": $LittleGrid
 "tool": $ContainerSlotView
readonly "SAVE_CONFIG": $GuiSyncLocal<($CompoundTag)>
static readonly "MINIMUM_LAYER_SPACING": integer
 "style": $GuiStyle
readonly "rect": $Rect
 "flow": $GuiFlow
 "align": $Align
 "valign": $VAlign
 "spacing": integer
readonly "name": string
 "enabled": boolean
 "preferred": $GuiSizeRule
 "expandableX": boolean
 "expandableY": boolean
 "visible": boolean

constructor(arg0: $GloveMode$Type, arg1: $ContainerSlotView$Type, arg2: integer, arg3: integer, arg4: $LittleGrid$Type)

public "create"(): void
public "saveConfiguration"(arg0: $CompoundTag$Type): $CompoundTag
public "loadMode"(arg0: $GloveMode$Type): void
public "getIntegratedParent"(): $IGuiIntegratedParent
public "hasGui"(): boolean
public "isParent"(arg0: $IGuiParent$Type): boolean
public "getPlayer"(): $Player
get "integratedParent"(): $IGuiIntegratedParent
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGlove$Type = ($GuiGlove);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiGlove_ = $GuiGlove$Type;
}}
declare module "packages/team/creative/littletiles/common/grid/$LittleGrid" {
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TextMapBuilder, $TextMapBuilder$Type} from "packages/team/creative/creativecore/common/util/text/$TextMapBuilder"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $LittleGrid {
static readonly "BASE": integer
static readonly "OVERALL_DEFAULT": integer
static readonly "OVERALL_DEFAULT_COUNT2D": integer
static readonly "OVERALL_DEFAULT_COUNT3D": integer
static readonly "OVERALL_DEFAULT_PIXEL_LENGTH": double
static readonly "GRID_KEY": string
static readonly "MIN": $LittleGrid
readonly "count": integer
readonly "count2d": long
readonly "count3d": long
readonly "pixelLength": double
readonly "pixelLengthF": float
readonly "halfPixelLength": double
readonly "pixelVolume": double
readonly "isDefault": boolean
readonly "rotationCenter": $LittleVec
readonly "minSizes": (integer)[]


public "toBlockOffset"(arg0: integer): integer
public "toBlockOffset"(arg0: long): integer
public static "gridCount"(): integer
public static "gridByIndex"(arg0: integer): $LittleGrid
public "toVanillaGridF"(arg0: float): float
public "toVanillaGridF"(arg0: long): float
public "toVanillaGridF"(arg0: integer): float
public "isAtEdge"(arg0: double): boolean
public "toGridAccurate"(arg0: double): long
public "getMinGrid"(arg0: integer): integer
public static "get"(arg0: integer): $LittleGrid
public static "get"(arg0: $CompoundTag$Type): $LittleGrid
public "toString"(): string
public static "max"(arg0: $LittleGrid$Type, arg1: $LittleGrid$Type): $LittleGrid
public "next"(): $LittleGrid
public "set"(arg0: $CompoundTag$Type): void
public static "names"(): $List<(string)>
public "box"(): $LittleBox
public "getIndex"(): integer
public static "configure"(arg0: integer): void
public "findNextValue"(arg0: integer, arg1: integer, arg2: boolean): integer
public static "getMax"(): $LittleGrid
public static "mapBuilder"(): $TextMapBuilder<($LittleGrid)>
public static "getOrThrow"(arg0: $CompoundTag$Type): $LittleGrid
public static "overallDefault"(): $LittleGrid
public "toVanillaGrid"(arg0: double): double
public "toVanillaGrid"(arg0: long): double
public "toVanillaGrid"(arg0: integer): double
public "toGrid"(arg0: integer): integer
public "toGrid"(arg0: double): integer
public static "grids"(): $Iterable<($LittleGrid)>
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleGrid$Type = ($LittleGrid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleGrid_ = $LittleGrid$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/$PlacementResult" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$LittleBoxes, $LittleBoxes$Type} from "packages/team/creative/littletiles/common/math/box/collection/$LittleBoxes"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$ParentCollection, $ParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$ParentCollection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PlacementResult {
readonly "pos": $BlockPos
readonly "placedPreviews": $LittleGroup
readonly "placedBoxes": $LittleBoxes
readonly "blocks": $List<($BETiles)>
 "parentStructure": $LittleStructure

constructor(arg0: $BlockPos$Type)

public "addPlacedTile"(arg0: $ParentCollection$Type, arg1: $LittleTile$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementResult$Type = ($PlacementResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementResult_ = $PlacementResult$Type;
}}
declare module "packages/team/creative/littletiles/client/render/cache/buffer/$ChunkBufferUploader" {
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ChunkBufferUploader {

 "upload"(arg0: integer, arg1: $ByteBuffer$Type): void
 "upload"(arg0: $ByteBuffer$Type): void
 "hasFacingSupport"(): boolean
 "addSprite"(arg0: $TextureAtlasSprite$Type): void
 "uploadIndex"(arg0: integer): integer
 "uploadIndex"(): integer
 "isSorted"(): boolean
}

export namespace $ChunkBufferUploader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBufferUploader$Type = ($ChunkBufferUploader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBufferUploader_ = $ChunkBufferUploader$Type;
}}
declare module "packages/team/creative/littletiles/common/math/face/$LittleFaceState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LittleFaceState extends $Enum<($LittleFaceState)> {
static readonly "UNLOADED": $LittleFaceState
static readonly "INSIDE_UNCOVERED": $LittleFaceState
static readonly "INSIDE_PARTIALLY_COVERED": $LittleFaceState
static readonly "INSIDE_COVERED": $LittleFaceState
static readonly "OUTSIDE_UNCOVERED": $LittleFaceState
static readonly "OUTSIDE_PARTIALLY_COVERED": $LittleFaceState
static readonly "OUTISDE_COVERED": $LittleFaceState


public static "values"(): ($LittleFaceState)[]
public static "valueOf"(arg0: string): $LittleFaceState
public "outside"(): boolean
public "coveredFully"(): boolean
public "partially"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleFaceState$Type = (("unloaded") | ("inside_covered") | ("outside_uncovered") | ("outside_partially_covered") | ("outisde_covered") | ("inside_partially_covered") | ("inside_uncovered")) | ($LittleFaceState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleFaceState_ = $LittleFaceState$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "getLastMouseEventTime"(): double

(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$BufferBuilderAccessor" {
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export interface $BufferBuilderAccessor {

 "getBuffer"(): $ByteBuffer
 "getNextElementByte"(): integer
 "getVertices"(): integer
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderAccessor$Type = ($BufferBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderAccessor_ = $BufferBuilderAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/attribute/$LittleAttributeBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LittleAttributeBuilder {
static readonly "NONE": $LittleAttributeBuilder

constructor()

public "extraRendering"(): $LittleAttributeBuilder
public "neighborListener"(): $LittleAttributeBuilder
public "build"(): integer
public "noCollision"(): $LittleAttributeBuilder
public "emissive"(): $LittleAttributeBuilder
public "ladder"(): $LittleAttributeBuilder
public "premade"(): $LittleAttributeBuilder
public "lightEmitter"(): $LittleAttributeBuilder
public "tickRendering"(): $LittleAttributeBuilder
public "extraCollision"(): $LittleAttributeBuilder
public "collisionListener"(): $LittleAttributeBuilder
public "ticking"(): $LittleAttributeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleAttributeBuilder$Type = ($LittleAttributeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleAttributeBuilder_ = $LittleAttributeBuilder$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/geo/$Rect" {
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"

export class $Rect {
 "minX": double
 "minY": double
 "maxX": double
 "maxY": double

constructor(arg0: double, arg1: double, arg2: double, arg3: double)

public "toString"(): string
public "scale"(arg0: double): void
public "copy"(): $Rect
public "getSize"(arg0: $Axis$Type): double
public "grow"(arg0: double): void
public "child"(arg0: $Rect$Type, arg1: double, arg2: double, arg3: double): $Rect
public "child"(arg0: double, arg1: double, arg2: double, arg3: double): $Rect
public "move"(arg0: double, arg1: double): void
public "intersects"(arg0: $Rect$Type): boolean
public static "getScreenRect"(): $Rect
public "getWidth"(): double
public "getHeight"(): double
public "intersection"(arg0: $Rect$Type): $Rect
public "shrink"(arg0: double): void
public "scissor"(): void
public "inside"(arg0: double, arg1: double): boolean
get "screenRect"(): $Rect
get "width"(): double
get "height"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rect$Type = ($Rect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rect_ = $Rect$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/box/$LittlePlaceBoxRelative" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$LittlePlaceBox, $LittlePlaceBox$Type} from "packages/team/creative/littletiles/common/placement/box/$LittlePlaceBox"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$StructureDirectionalField, $StructureDirectionalField$Type} from "packages/team/creative/littletiles/common/structure/directional/$StructureDirectionalField"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StructureRelative, $StructureRelative$Type} from "packages/team/creative/littletiles/common/structure/relative/$StructureRelative"
import {$Placement, $Placement$Type} from "packages/team/creative/littletiles/common/placement/$Placement"

export class $LittlePlaceBoxRelative extends $LittlePlaceBox {
 "relativeType": $StructureDirectionalField
 "relative": $StructureRelative
 "box": $LittleBox

constructor(arg0: $LittleBox$Type, arg1: $StructureRelative$Type, arg2: $StructureDirectionalField$Type)

public "place"(arg0: $Placement$Type, arg1: $LittleGrid$Type, arg2: $BlockPos$Type, arg3: $LittleStructure$Type): void
public "getRenderBox"(arg0: $LittleGrid$Type, arg1: $LittleVec$Type): $LittleRenderBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittlePlaceBoxRelative$Type = ($LittlePlaceBoxRelative);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittlePlaceBoxRelative_ = $LittlePlaceBoxRelative$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/creator/$ItemGuiCreator" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $ItemGuiCreator {

 "create"(arg0: $CompoundTag$Type, arg1: $Player$Type): $GuiLayer

(arg0: $CompoundTag$Type, arg1: $Player$Type): $GuiLayer
}

export namespace $ItemGuiCreator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGuiCreator$Type = ($ItemGuiCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGuiCreator_ = $ItemGuiCreator$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/connection/children/$LevelChildrenList" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$StructureChildConnection, $StructureChildConnection$Type} from "packages/team/creative/littletiles/common/structure/connection/children/$StructureChildConnection"
import {$ChildrenList, $ChildrenList$Type} from "packages/team/creative/littletiles/common/structure/connection/children/$ChildrenList"
import {$ILevelPositionProvider, $ILevelPositionProvider$Type} from "packages/team/creative/littletiles/common/structure/connection/$ILevelPositionProvider"

export class $LevelChildrenList extends $ChildrenList<($StructureChildConnection)> {
readonly "owner": $LittleStructure

constructor(arg0: $LittleStructure$Type)

public "connectToChild"(arg0: integer, arg1: $LittleStructure$Type): void
public "connectToParentAsExtension"(arg0: $LittleStructure$Type): void
public "initAfterPlacing"(arg0: integer): void
public "hasChild"(arg0: integer): boolean
public "connectToExtension"(arg0: string, arg1: $LittleStructure$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): void
public "removeExtension"(arg0: string): $StructureChildConnection
public "getChild"(arg0: integer): $StructureChildConnection
public "connectToParentAsChild"(arg0: integer, arg1: $LittleStructure$Type): void
public "generateConnection"(arg0: $ILevelPositionProvider$Type): $StructureChildConnection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelChildrenList$Type = ($LevelChildrenList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelChildrenList_ = $LevelChildrenList$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemLittlePaintBrush" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ILittleEditor, $ILittleEditor$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittleEditor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IItemTooltip, $IItemTooltip$Type} from "packages/team/creative/littletiles/common/item/tooltip/$IItemTooltip"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$LittleShape, $LittleShape$Type} from "packages/team/creative/littletiles/common/placement/shape/$LittleShape"
import {$ShapeSelection, $ShapeSelection$Type} from "packages/team/creative/littletiles/common/placement/shape/$ShapeSelection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LittleBoxes, $LittleBoxes$Type} from "packages/team/creative/littletiles/common/math/box/collection/$LittleBoxes"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLittlePaintBrush extends $Item implements $ILittleEditor, $IItemTooltip {
static "selection": $ShapeSelection
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

public "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
public static "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "getShape"(arg0: $ItemStack$Type): $LittleShape
public "getBoxes"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): $LittleBoxes
public "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
public static "getColor"(arg0: $ItemStack$Type): integer
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
public "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "tooltipData"(arg0: $ItemStack$Type): (any)[]
public "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
public "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
public "hasCustomBoxes"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $BlockState$Type, arg4: $PlacementPosition$Type, arg5: $BlockHitResult$Type): boolean
public "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
public "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
public "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
public "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "sendTransformationUpdate"(): boolean
public "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLittlePaintBrush$Type = ($ItemLittlePaintBrush);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLittlePaintBrush_ = $ItemLittlePaintBrush$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/mode/$PlacementMode" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PlacementContext, $PlacementContext$Type} from "packages/team/creative/littletiles/common/placement/$PlacementContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TextMapBuilder, $TextMapBuilder$Type} from "packages/team/creative/creativecore/common/util/text/$TextMapBuilder"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PlacementMode$PreviewMode, $PlacementMode$PreviewMode$Type} from "packages/team/creative/littletiles/common/placement/mode/$PlacementMode$PreviewMode"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"

export class $PlacementMode {
static readonly "NORMAL": $PlacementMode
static readonly "FILL": $PlacementMode
static readonly "ALL": $PlacementMode
static readonly "OVERWRITE": $PlacementMode
static readonly "OVERWRITE_ALL": $PlacementMode
static readonly "REPLACE": $PlacementMode
static readonly "STENCIL": $PlacementMode
static readonly "COLORIZE": $PlacementMode
readonly "placeInside": boolean

constructor(arg0: $PlacementMode$PreviewMode$Type, arg1: boolean)

public "canPlaceStructures"(): boolean
public "shouldConvertBlock"(): boolean
public "placeTile"(arg0: $PlacementContext$Type, arg1: $LittleStructure$Type, arg2: $LittleTile$Type): boolean
public "getCoordsToCheck"(arg0: $Set$Type<($BlockPos$Type)>, arg1: $BlockPos$Type): $List<($BlockPos)>
public "getPreviewMode"(): $PlacementMode$PreviewMode
public "prepareBlock"(arg0: $PlacementContext$Type): void
public "translatableKey"(): string
public static "getDefault"(): $PlacementMode
public static "map"(): $TextMapBuilder<($PlacementMode)>
public static "register"(arg0: string, arg1: $PlacementMode$Type): void
public "getId"(): string
public "checkAll"(): boolean
public static "getMode"(arg0: string, arg1: boolean): $PlacementMode
public static "getMode"(arg0: string): $PlacementMode
public "place"(): $PlacementMode
public "translatable"(): $Component
public "getBeforePlaceIngredients"(arg0: $LittleGroup$Type): $LittleIngredients
public static "getStructureDefault"(): $PlacementMode
get "previewMode"(): $PlacementMode$PreviewMode
get "default"(): $PlacementMode
get "id"(): string
get "structureDefault"(): $PlacementMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementMode$Type = ($PlacementMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementMode_ = $PlacementMode$Type;
}}
declare module "packages/team/creative/littletiles/mixin/common/entity/$EntityAccessor" {
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $EntityAccessor {

 "getLevelCallback"(): $EntityInLevelCallback
 "callUnsetRemoved"(): void
 "callSetLevel"(arg0: $Level$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemPremadeStructure" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$LittlePremadePreview, $LittlePremadePreview$Type} from "packages/team/creative/littletiles/common/structure/registry/premade/$LittlePremadePreview"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$LittleStructurePremade$LittlePremadeType, $LittleStructurePremade$LittlePremadeType$Type} from "packages/team/creative/littletiles/common/structure/type/premade/$LittleStructurePremade$LittlePremadeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IItemTooltip, $IItemTooltip$Type} from "packages/team/creative/littletiles/common/item/tooltip/$IItemTooltip"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$PlacementMode, $PlacementMode$Type} from "packages/team/creative/littletiles/common/placement/mode/$PlacementMode"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$ILittlePlacer, $ILittlePlacer$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittlePlacer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"

export class $ItemPremadeStructure extends $Item implements $ILittlePlacer, $IItemTooltip {
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

public static "getPremadeId"(arg0: $ItemStack$Type): string
public static "getPremade"(arg0: $ItemStack$Type): $LittlePremadePreview
public static "get"(arg0: $ItemStack$Type): $LittleStructurePremade$LittlePremadeType
public static "of"(arg0: string): $ItemStack
public "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
public static "clearCache"(): void
public "getLow"(arg0: $ItemStack$Type): $LittleGroup
public "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "containsIngredients"(arg0: $ItemStack$Type): boolean
public "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
public "sendTransformationUpdate"(): boolean
public "snapToGridByDefault"(arg0: $ItemStack$Type): boolean
public "getTiles"(arg0: $ItemStack$Type): $LittleGroup
public "hasTiles"(arg0: $ItemStack$Type): boolean
public "getPlacement"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: boolean): $PlacementPreview
public "saveTiles"(arg0: $ItemStack$Type, arg1: $LittleGroup$Type): void
public "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
public "shouldCache"(): boolean
public "canSnapToGrid"(arg0: $ItemStack$Type): boolean
public "tooltipData"(arg0: $ItemStack$Type): (any)[]
public "removeUnnecessaryData"(arg0: $ItemStack$Type): void
public "get"(arg0: $ItemStack$Type, arg1: boolean): $LittleGroup
public "getPreviewAlphaFactor"(): float
public "getPlacementMode"(arg0: $ItemStack$Type): $PlacementMode
public "getPositingCubes"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $List<($RenderBox)>
public "getCachedMin"(arg0: $ItemStack$Type): $LittleVec
public "getTilesGrid"(arg0: $ItemStack$Type): $LittleGrid
public "getCachedSize"(arg0: $ItemStack$Type): $LittleVec
public "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
public "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
public "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
public "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
public "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
get "previewAlphaFactor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPremadeStructure$Type = ($ItemPremadeStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPremadeStructure_ = $ItemPremadeStructure$Type;
}}
declare module "packages/team/creative/creativecore/client/render/face/$RenderBoxFace" {
import {$VectorFan, $VectorFan$Type} from "packages/team/creative/creativecore/common/util/math/geo/$VectorFan"
import {$List, $List$Type} from "packages/java/util/$List"

export class $RenderBoxFace {
static readonly "RENDER": $RenderBoxFace
static readonly "NOT_RENDER": $RenderBoxFace

constructor()

public "getCachedFans"(): $List<($VectorFan)>
public "hasCachedFans"(): boolean
public "shouldRender"(): boolean
public "getScale"(): float
get "cachedFans"(): $List<($VectorFan)>
get "scale"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBoxFace$Type = ($RenderBoxFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderBoxFace_ = $RenderBoxFace$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/type/premade/$LittleStructurePremade$LittlePremadeType" {
import {$LittleStructureType, $LittleStructureType$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$IStructureParentCollection, $IStructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StructureDirectionalField, $StructureDirectionalField$Type} from "packages/team/creative/littletiles/common/structure/directional/$StructureDirectionalField"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LittleStructurePremade, $LittleStructurePremade$Type} from "packages/team/creative/littletiles/common/structure/type/premade/$LittleStructurePremade"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"
import {$LittleStructureType$InternalComponentOutput, $LittleStructureType$InternalComponentOutput$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponentOutput"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LittleStructureType$InternalComponent, $LittleStructureType$InternalComponent$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponent"
import {$LittleAttributeBuilder, $LittleAttributeBuilder$Type} from "packages/team/creative/littletiles/common/structure/attribute/$LittleAttributeBuilder"

export class $LittleStructurePremade$LittlePremadeType extends $LittleStructureType {
readonly "modid": string
 "showInCreativeTab": boolean
 "snapToGrid": boolean
readonly "id": string
readonly "clazz": $Class<(any)>
readonly "factory": $BiFunction<(any), ($IStructureParentCollection), (any)>
readonly "attribute": integer
readonly "directional": $List<($StructureDirectionalField)>
readonly "inputs": $List<($LittleStructureType$InternalComponent)>
readonly "outputs": $List<($LittleStructureType$InternalComponentOutput)>

constructor<T extends $LittleStructurePremade>(arg0: string, arg1: $Class$Type<(T)>, arg2: $BiFunction$Type<(any), ($IStructureParentCollection$Type), (T)>, arg3: $LittleAttributeBuilder$Type, arg4: string)

public "hasCustomTab"(): boolean
public "createItemStack"(): $ItemStack
public "addIngredients"(arg0: $LittleGroup$Type, arg1: $LittleIngredients$Type): void
public "setNotSnapToGrid"(): $LittleStructurePremade$LittlePremadeType
public "canSnapToGrid"(): boolean
public "tileCountAsIngredient"(arg0: $LittleGroup$Type): boolean
public "setNotShowCreativeTab"(): $LittleStructurePremade$LittlePremadeType
public "canOnlyBePlacedByItemStack"(): boolean
public "createItemStackEmpty"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleStructurePremade$LittlePremadeType$Type = ($LittleStructurePremade$LittlePremadeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleStructurePremade$LittlePremadeType_ = $LittleStructurePremade$LittlePremadeType$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/network/$SignalNetwork" {
import {$ISignalStructureBase, $ISignalStructureBase$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalStructureBase"
import {$ISignalStructureComponent, $ISignalStructureComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalStructureComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISignalSchedulable, $ISignalSchedulable$Type} from "packages/team/creative/littletiles/common/structure/signal/schedule/$ISignalSchedulable"

export class $SignalNetwork implements $ISignalSchedulable {
readonly "bandwidth": integer

constructor(arg0: integer)

public "getComponentLevel"(): $Level
public "markChanged"(): void
public "notifyChange"(): void
public "markUnchanged"(): void
public "isStillAvailable"(): boolean
public "add"(arg0: $ISignalStructureBase$Type): void
public "remove"(arg0: $ISignalStructureBase$Type): boolean
public "toString"(): string
public "update"(): void
public "merge"(arg0: $SignalNetwork$Type): void
public "unload"(arg0: $ISignalStructureBase$Type): void
public "getOutputs"(): $List<($ISignalStructureComponent)>
public "hasChanged"(): boolean
public "requiresResearch"(): boolean
public "deleteNetwork"(): void
public static "containsUntil"<T>(arg0: $List$Type<(T)>, arg1: T, arg2: integer): boolean
public "schedule"(): void
public "updateSignaling"(): void
get "componentLevel"(): $Level
get "stillAvailable"(): boolean
get "outputs"(): $List<($ISignalStructureComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalNetwork$Type = ($SignalNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalNetwork_ = $SignalNetwork$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/box/$BoxCorner" {
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$ABB, $ABB$Type} from "packages/team/creative/creativecore/common/util/math/box/$ABB"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $BoxCorner extends $Enum<($BoxCorner)> {
static readonly "EUN": $BoxCorner
static readonly "EUS": $BoxCorner
static readonly "EDN": $BoxCorner
static readonly "EDS": $BoxCorner
static readonly "WUN": $BoxCorner
static readonly "WUS": $BoxCorner
static readonly "WDN": $BoxCorner
static readonly "WDS": $BoxCorner
readonly "x": $Facing
readonly "y": $Facing
readonly "z": $Facing
 "neighborOne": $BoxCorner
 "neighborTwo": $BoxCorner
 "neighborThree": $BoxCorner
static readonly "FACING_CORNERS": (($BoxCorner)[])[]


public static "faceCorners"(arg0: $Facing$Type): ($BoxCorner)[]
public static "getCornerUnsorted"(arg0: $Facing$Type, arg1: $Facing$Type, arg2: $Facing$Type): $BoxCorner
public "isFacingPositive"(arg0: $Axis$Type): boolean
public "get"(arg0: $AABB$Type): $Vec3d
public "get"(arg0: $ABB$Type): $Vec3d
public static "values"(): ($BoxCorner)[]
public static "valueOf"(arg0: string): $BoxCorner
public "set"(arg0: $ABB$Type, arg1: $Vec3d$Type): void
public "set"(arg0: $AABB$Type, arg1: $Vec3d$Type): void
public "rotate"(arg0: $Rotation$Type): $BoxCorner
public "mirror"(arg0: $Axis$Type): $BoxCorner
public "getFacing"(arg0: $Axis$Type): $Facing
public "isFacing"(arg0: $Facing$Type): boolean
public static "getCorner"(arg0: $Facing$Type, arg1: $Facing$Type, arg2: $Facing$Type): $BoxCorner
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoxCorner$Type = (("wdn") | ("wun") | ("eus") | ("wus") | ("eds") | ("wds") | ("edn") | ("eun")) | ($BoxCorner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoxCorner_ = $BoxCorner$Type;
}}
declare module "packages/team/creative/littletiles/common/math/box/$LittleBox" {
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$ILittleFace, $ILittleFace$Type} from "packages/team/creative/littletiles/common/math/face/$ILittleFace"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$IntArrayTag, $IntArrayTag$Type} from "packages/net/minecraft/nbt/$IntArrayTag"
import {$LittleBoxReturnedVolume, $LittleBoxReturnedVolume$Type} from "packages/team/creative/littletiles/common/math/box/volume/$LittleBoxReturnedVolume"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$LittleFace, $LittleFace$Type} from "packages/team/creative/littletiles/common/math/face/$LittleFace"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$SplitRangeBoxes, $SplitRangeBoxes$Type} from "packages/team/creative/littletiles/common/math/vec/$SplitRangeBoxes"
import {$HashMapList, $HashMapList$Type} from "packages/team/creative/creativecore/common/util/type/map/$HashMapList"
import {$ABB, $ABB$Type} from "packages/team/creative/creativecore/common/util/math/box/$ABB"
import {$LittleFaceState, $LittleFaceState$Type} from "packages/team/creative/littletiles/common/math/face/$LittleFaceState"
import {$LittleServerFace, $LittleServerFace$Type} from "packages/team/creative/littletiles/common/math/face/$LittleServerFace"
import {$AlignedBox, $AlignedBox$Type} from "packages/team/creative/creativecore/common/util/math/box/$AlignedBox"
import {$BoxCorner, $BoxCorner$Type} from "packages/team/creative/creativecore/common/util/math/box/$BoxCorner"

export class $LittleBox {
 "minX": integer
 "minY": integer
 "minZ": integer
 "maxX": integer
 "maxY": integer
 "maxZ": integer

constructor(arg0: $LittleVec$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)
constructor(arg0: $LittleVec$Type, arg1: $LittleVec$Type)
constructor(...arg0: ($LittleBox$Type)[])
constructor(arg0: $LittleVec$Type)
constructor(arg0: $LittleGrid$Type, arg1: $AlignedBox$Type)
constructor(arg0: $LittleGrid$Type, arg1: $AABB$Type)

public "getBB"(arg0: $LittleGrid$Type, arg1: $BlockPos$Type): $AABB
public "getBB"(arg0: $LittleGrid$Type): $AABB
public "getMinVec"(): $LittleVec
public "getSmallest"(arg0: $LittleGrid$Type): integer
public "getRenderingBox"(arg0: $LittleGrid$Type, arg1: $BlockState$Type): $LittleRenderBox
public "getRenderingBox"(arg0: $LittleGrid$Type): $LittleRenderBox
public "getRenderingBox"(arg0: $LittleGrid$Type, arg1: $LittleElement$Type): $LittleRenderBox
public "getRenderingBox"(arg0: $LittleGrid$Type, arg1: $LittleVec$Type): $LittleRenderBox
public "getRenderingBox"(arg0: $LittleGrid$Type, arg1: $BlockState$Type, arg2: $LittleVec$Type): $LittleRenderBox
public "fillInSpace"(arg0: $LittleBox$Type, arg1: (((boolean)[])[])[]): boolean
public "fillInSpace"(arg0: (((boolean)[])[])[]): void
public "getABB"(arg0: $LittleGrid$Type): $ABB
public "getArrayTag"(): $IntArrayTag
public static "createExtended"(arg0: (integer)[]): $LittleBox
public "getArrayExtended"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleServerFace$Type): (integer)[]
public "getSelectionBB"(arg0: $LittleGrid$Type, arg1: $BlockPos$Type): $AABB
public "getCorners"(): ($LittleVec)[]
public "getCorners"(arg0: ($BoxCorner$Type)[]): ($LittleVec)[]
public "splitIterator"(arg0: $LittleGrid$Type, arg1: $BlockPos$MutableBlockPos$Type, arg2: $LittleVec$Type, arg3: $BiConsumer$Type<($BlockPos$MutableBlockPos$Type), ($LittleBox$Type)>): void
public "combineBoxes"(arg0: $LittleBox$Type): $LittleBox
public "sharedBoxFace"(arg0: $LittleBox$Type): $Facing
public "getLongestSide"(): integer
public "isValidBox"(): boolean
public "setMinPos"(arg0: $BlockPos$MutableBlockPos$Type, arg1: $LittleGrid$Type): void
public "extractBox"(arg0: $LittleGrid$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $LittleBoxReturnedVolume$Type): $LittleBox
public "extractBox"(arg0: integer, arg1: integer, arg2: integer, arg3: $LittleBoxReturnedVolume$Type): $LittleBox
public "isBoxInsideBlock"(arg0: $LittleGrid$Type): boolean
public "fillCorners"(arg0: ($BoxCorner$Type)[], arg1: ($LittleVec$Type)[]): ($LittleVec)[]
public "intersectsWithXZ"(arg0: $LittleGrid$Type, arg1: $Vec3$Type): boolean
public "isVecInside"(arg0: $Vec3f$Type): boolean
public "intersectsWithXY"(arg0: $LittleGrid$Type, arg1: $Vec3$Type): boolean
public "intersectsWithFace"(arg0: $Facing$Type, arg1: $LittleVec$Type): boolean
public "getNearstedPointTo"(arg0: $LittleVec$Type): $LittleVec
public "getNearstedPointTo"(arg0: $LittleBox$Type): $LittleVec
public "intersectsWithYZ"(arg0: $LittleGrid$Type, arg1: $Vec3$Type): boolean
public "containsBox"(arg0: $LittleBox$Type): boolean
public "getMaxVec"(): $LittleVec
public "generateFace"(arg0: $LittleGrid$Type, arg1: $Facing$Type): $LittleFace
public static "isClosest"(arg0: $Vec3d$Type, arg1: $Vec3d$Type, arg2: $Vec3d$Type): boolean
public static "isClosest"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Vec3$Type): boolean
public "doesTouch"(arg0: $LittleGrid$Type, arg1: $LittleGrid$Type, arg2: $LittleBox$Type): boolean
public "doesTouch"(arg0: $LittleBox$Type): boolean
public "growToInclude"(arg0: $LittleBox$Type): void
public "growAway"(arg0: integer, arg1: $Facing$Type): void
public "isFaceSolid"(arg0: $Facing$Type): boolean
public "getVecArray"(arg0: ($BoxCorner$Type)[]): ($Vec3f)[]
public "canFaceBeCombined"(arg0: $LittleBox$Type): boolean
public "isFaceAtEdge"(arg0: $LittleGrid$Type, arg1: $Facing$Type): boolean
public "growCentered"(arg0: integer): void
public "hasFaceState"(): boolean
public "resetFaceState"(): void
public "getFaceState"(arg0: $Facing$Type): $LittleFaceState
public "setFaceState"(arg0: $Facing$Type, arg1: $LittleFaceState$Type): void
public "add"(arg0: $LittleVec$Type): void
public "add"(arg0: integer, arg1: integer, arg2: integer): void
public "get"(arg0: $Facing$Type): integer
public "get"(arg0: $BoxCorner$Type): $LittleVec
public "get"(arg0: $BoxCorner$Type, arg1: $Axis$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "split"(arg0: $LittleGrid$Type, arg1: $BlockPos$Type, arg2: $LittleVec$Type, arg3: $HashMapList$Type<($BlockPos$Type), ($LittleBox$Type)>, arg4: $LittleBoxReturnedVolume$Type): void
public "split"(arg0: $List$Type<($LittleBox$Type)>): $SplitRangeBoxes
public "fill"(arg0: $ILittleFace$Type): void
public "set"(arg0: $Facing$Type, arg1: integer): void
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "set"(arg0: $LittleServerFace$Type, arg1: $LittleGrid$Type, arg2: $Facing$Type): boolean
public "copy"(): $LittleBox
public "getSize"(): $LittleVec
public "getSize"(arg0: $Axis$Type): integer
public static "create"(arg0: (integer)[]): $LittleBox
public "grow"(arg0: $Facing$Type): $LittleBox
public "getArray"(): (integer)[]
public "rotate"(arg0: $Rotation$Type, arg1: $LittleVec$Type): void
public "sub"(arg0: $LittleVec$Type): void
public "sub"(arg0: integer, arg1: integer, arg2: integer): void
public "changed"(): void
public "getShape"(arg0: $LittleGrid$Type): $VoxelShape
public "getY"(arg0: $BoxCorner$Type): integer
public "getCenter"(): $LittleVec
public "cutOut"(arg0: $LittleGrid$Type, arg1: $LittleBox$Type, arg2: $LittleBoxReturnedVolume$Type): $List<($LittleBox)>
public "cutOut"(arg0: $LittleGrid$Type, arg1: $List$Type<($LittleBox$Type)>, arg2: $List$Type<($LittleBox$Type)>, arg3: $LittleBoxReturnedVolume$Type): $List<($LittleBox)>
public "getMax"(arg0: $Axis$Type): integer
public "getMin"(arg0: $Axis$Type): integer
public "intersection"(arg0: $LittleBox$Type): $LittleBox
public "intersectsWithAxis"(arg0: $LittleGrid$Type, arg1: $Axis$Type, arg2: $Vec3$Type): boolean
public "mirror"(arg0: $Axis$Type, arg1: $LittleVec$Type): void
public "shrink"(arg0: $Facing$Type, arg1: boolean): $LittleBox
public "intersectsWith"(arg0: $AABB$Type, arg1: $LittleGrid$Type): boolean
public "intersectsWith"(arg0: $ILittleFace$Type): boolean
public static "intersectsWith"(arg0: $LittleBox$Type, arg1: $LittleBox$Type): boolean
public "getZ"(arg0: $BoxCorner$Type): integer
public "convertTo"(arg0: $LittleGrid$Type, arg1: $LittleGrid$Type): void
public "convertTo"(arg0: integer, arg1: integer): void
public "getBox"(arg0: $LittleGrid$Type, arg1: $LittleVec$Type): $AlignedBox
public "getBox"(arg0: $LittleGrid$Type): $AlignedBox
public "rayTrace"(arg0: $LittleGrid$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type, arg3: $Vec3$Type): $BlockHitResult
public "getVolume"(): integer
public "getX"(arg0: $BoxCorner$Type): integer
public "setMax"(arg0: $Axis$Type, arg1: integer): void
public "setMin"(arg0: $Axis$Type, arg1: integer): void
public "distanceTo"(arg0: $LittleVec$Type): double
public "distanceTo"(arg0: $LittleBox$Type): double
public "getPercentVolume"(arg0: $LittleGrid$Type): double
public "isSolid"(): boolean
public "resort"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "resort"(): void
public "doesFillEntireBlock"(arg0: $LittleGrid$Type): boolean
public "fillInSpaceInaccurate"(arg0: $LittleBox$Type, arg1: (((boolean)[])[])[]): boolean
public "fillInSpaceInaccurate"(arg0: $LittleBox$Type, arg1: $Axis$Type, arg2: $Axis$Type, arg3: $Axis$Type, arg4: ((boolean)[])[]): boolean
public "sharedBoxFaceWithoutBounds"(arg0: $LittleBox$Type): $Facing
public static "getIntermediateWithAxisValue"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Axis$Type, arg3: double): $Vec3
public "getArrayTagExtended"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleServerFace$Type): $IntArrayTag
public "hasOrCreateFaceState"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleServerFace$Type): boolean
public "createOutsideBlockBox"(arg0: $LittleGrid$Type, arg1: $Facing$Type): $LittleBox
public "needsMultipleBlocks"(arg0: $LittleGrid$Type): boolean
get "minVec"(): $LittleVec
get "arrayTag"(): $IntArrayTag
get "corners"(): ($LittleVec)[]
get "longestSide"(): integer
get "validBox"(): boolean
get "maxVec"(): $LittleVec
get "size"(): $LittleVec
get "array"(): (integer)[]
get "center"(): $LittleVec
get "volume"(): integer
get "solid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleBox$Type = ($LittleBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleBox_ = $LittleBox$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponentOutput" {
import {$SignalMode, $SignalMode$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalMode"
import {$LittleStructureType$InternalComponent, $LittleStructureType$InternalComponent$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponent"

export class $LittleStructureType$InternalComponentOutput extends $LittleStructureType$InternalComponent {
readonly "defaultMode": $SignalMode
readonly "syncToClient": boolean
readonly "identifier": string
readonly "bandwidth": integer
readonly "index": integer

constructor(arg0: string, arg1: integer, arg2: integer, arg3: $SignalMode$Type, arg4: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleStructureType$InternalComponentOutput$Type = ($LittleStructureType$InternalComponentOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleStructureType$InternalComponentOutput_ = $LittleStructureType$InternalComponentOutput$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/shape/$ShapeSelection$ShapeSelectPos" {
import {$LittleTileContext, $LittleTileContext$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTileContext"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$ShapeSelection, $ShapeSelection$Type} from "packages/team/creative/littletiles/common/placement/shape/$ShapeSelection"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ShapeSelection$ShapeSelectPos implements $IGridBased {
readonly "pos": $PlacementPosition
readonly "ray": $BlockHitResult
readonly "result": $LittleTileContext

constructor(arg0: $ShapeSelection$Type, arg1: $Player$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type)
constructor(arg0: $ShapeSelection$Type, arg1: $PlacementPosition$Type, arg2: $BlockHitResult$Type, arg3: $LittleTileContext$Type)

public "getSmallest"(): integer
public "equals"(arg0: any): boolean
public "copy"(): $ShapeSelection$ShapeSelectPos
public "move"(arg0: $LittleGrid$Type, arg1: $Facing$Type): void
public "render"(arg0: $LittleGrid$Type, arg1: $PoseStack$Type, arg2: boolean): void
public "convertTo"(arg0: $LittleGrid$Type): void
public "getBox"(): $AABB
public "getGrid"(): $LittleGrid
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "smallest"(): integer
get "box"(): $AABB
get "grid"(): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeSelection$ShapeSelectPos$Type = ($ShapeSelection$ShapeSelectPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeSelection$ShapeSelectPos_ = $ShapeSelection$ShapeSelectPos$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection" {
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $IStructureParentCollection extends $IParentCollection {

 "getIndex"(): integer
 "isRemoved"(): boolean
 "isStructureChildSafe"(arg0: $LittleStructure$Type): boolean
 "getRenderingBox"(arg0: $LittleTile$Type, arg1: $LittleBox$Type, arg2: $RenderType$Type): $LittleRenderBox
 "isStructure"(): boolean
 "size"(): integer
 "getAttribute"(): integer
 "setAttribute"(arg0: integer): void
 "totalSize"(): integer
 "getLevel"(): $Level
 "getStructure"(): $LittleStructure
 "isClient"(): boolean
 "getPos"(): $BlockPos
 "getBE"(): $BETiles
 "getGrid"(): $LittleGrid
 "isMain"(): boolean
 "isStructureChild"(arg0: $LittleStructure$Type): boolean
 "iterator"(): $Iterator<($LittleTile)>
 "spliterator"(): $Spliterator<($LittleTile)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "hasLevel"(): boolean
}

export namespace $IStructureParentCollection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructureParentCollection$Type = ($IStructureParentCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStructureParentCollection_ = $IStructureParentCollection$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/sync/$GuiSyncGlobalLayer" {
import {$IGuiIntegratedParent, $IGuiIntegratedParent$Type} from "packages/team/creative/creativecore/common/gui/integration/$IGuiIntegratedParent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GuiSync, $GuiSync$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSync"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$GuiSyncHolder, $GuiSyncHolder$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder"

export class $GuiSyncGlobalLayer<T extends $GuiLayer> extends $GuiSync<($CompoundTag)> {
readonly "holder": $GuiSyncHolder
readonly "name": string


public "open"(arg0: $IGuiIntegratedParent$Type, arg1: $CompoundTag$Type): T
public "receive"(arg0: $IGuiIntegratedParent$Type, arg1: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSyncGlobalLayer$Type<T> = ($GuiSyncGlobalLayer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSyncGlobalLayer_<T> = $GuiSyncGlobalLayer$Type<(T)>;
}}
declare module "packages/team/creative/littletiles/common/structure/animation/$PhysicalPart" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $PhysicalPart extends $Enum<($PhysicalPart)> {
static readonly "ROTX": $PhysicalPart
static readonly "ROTY": $PhysicalPart
static readonly "ROTZ": $PhysicalPart
static readonly "OFFX": $PhysicalPart
static readonly "OFFY": $PhysicalPart
static readonly "OFFZ": $PhysicalPart
readonly "offset": boolean
readonly "oldKey": string


public static "values"(): ($PhysicalPart)[]
public static "valueOf"(arg0: string): $PhysicalPart
public "title"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicalPart$Type = (("rotx") | ("rotz") | ("roty") | ("offx") | ("offy") | ("offz")) | ($PhysicalPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicalPart_ = $PhysicalPart$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup" {
import {$LittleVolumes, $LittleVolumes$Type} from "packages/team/creative/littletiles/common/math/box/volume/$LittleVolumes"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleStructureType, $LittleStructureType$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LittleVecGrid, $LittleVecGrid$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecGrid"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittlePlaceBox, $LittlePlaceBox$Type} from "packages/team/creative/littletiles/common/placement/box/$LittlePlaceBox"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Bunch, $Bunch$Type} from "packages/team/creative/creativecore/common/util/type/$Bunch"
import {$ItemChildrenList, $ItemChildrenList$Type} from "packages/team/creative/littletiles/common/structure/connection/children/$ItemChildrenList"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"

export class $LittleGroup implements $Bunch<($LittleTile)>, $IGridBased {
static readonly "PARENT_KEY": string
static readonly "CHILDREN_KEY": string
static readonly "STRUCTURE_KEY": string
static readonly "EXTENSION_KEY": string
static readonly "EXTENSION_ID_KEY": string
static readonly "TILES_KEY": string
static readonly "TRANSLUCENT_KEY": string
static readonly "MIN_KEY": string
static readonly "SIZE_KEY": string
static readonly "TILES_COUNT_KEY": string
static readonly "BOXES_COUNT_KEY": string
readonly "children": $ItemChildrenList

constructor(arg0: $CompoundTag$Type, arg1: $LittleGroup$Type, arg2: $List$Type<($LittleGroup$Type)>)
constructor(arg0: $CompoundTag$Type, arg1: $List$Type<($LittleGroup$Type)>)
constructor()
constructor(arg0: $LittleGroup$Type, arg1: $List$Type<($LittleGroup$Type)>)

public "combineBlockwise"(): void
public "getMinVec"(): $LittleVec
public "getSmallest"(): integer
public "boxesCount"(): integer
public "getStructureType"(): $LittleStructureType
public "totalBoxes"(): integer
public "addTile"(arg0: $LittleGrid$Type, arg1: $LittleTile$Type): void
public "totalTiles"(): integer
public "hasParent"(): boolean
public "convertToSmallest"(): void
public "getStructureName"(): string
public static "saveChild"(arg0: $LittleGroup$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public static "setGridSecretly"(arg0: $LittleGroup$Type, arg1: $LittleGrid$Type): void
public static "advancedScale"(arg0: $LittleGroup$Type, arg1: integer, arg2: integer): void
public "advancedScale"(arg0: integer, arg1: integer): void
public "getPlaceBoxes"(arg0: $LittleVec$Type): $List<($RenderBox)>
public "allBoxes"(): $Iterable<($LittleBox)>
public "copyExceptChildren"(): $LittleGroup
public "transformable"(): boolean
public "getVolumes"(): $LittleVolumes
public "addFast"(arg0: $LittleGrid$Type, arg1: $LittleElement$Type, arg2: $LittleBox$Type): void
public "getStructureId"(): string
public "removeOffset"(): void
public "addTileFast"(arg0: $LittleGrid$Type, arg1: $LittleTile$Type): void
public "getSpecialBoxes"(): $List<($LittlePlaceBox)>
public "isVolumeEqual"(arg0: $LittleGroup$Type): boolean
public "getStructureTag"(): $CompoundTag
public "add"(arg0: $LittleGrid$Type, arg1: $LittleElement$Type, arg2: $LittleBox$Type): void
public "add"(arg0: $LittleGroup$Type): void
public "add"(arg0: $LittleGrid$Type, arg1: $LittleElement$Type, arg2: $Iterable$Type<($LittleBox$Type)>): void
public static "load"(arg0: $CompoundTag$Type): $LittleGroup
public "isEmpty"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<($LittleTile)>
public "addAll"(arg0: $LittleGrid$Type, arg1: $Iterable$Type<($LittleTile$Type)>): void
public "getParent"(): $LittleGroup
public "combine"(): void
public static "save"(arg0: $LittleGroup$Type): $CompoundTag
public "copy"(): $LittleGroup
public "getSize"(): $LittleVec
public static "getSize"(arg0: $CompoundTag$Type): $LittleVec
public "rotate"(arg0: $Rotation$Type, arg1: $LittleVec$Type): void
public "move"(arg0: $LittleVecGrid$Type): void
public "boxes"(): $Iterable<($LittleBox)>
public static "getMin"(arg0: $CompoundTag$Type): $LittleVec
public "hasChildren"(): boolean
public "mirror"(arg0: $Axis$Type, arg1: $LittleVec$Type): void
public "convertTo"(arg0: $LittleGrid$Type): void
public "getVolume"(): double
public static "shrinkCubesToOneBlock"(arg0: $List$Type<(any)>): void
public "getPositions"(arg0: $BlockPos$Type): $Set<($BlockPos)>
public "hasStructure"(): boolean
public "containsIngredients"(): boolean
public "getRenderingBoxes"(arg0: boolean): $List<($RenderBox)>
public "getSurroundingBox"(): $LittleBox
public "allTiles"(): $Iterable<($LittleTile)>
public static "loadLow"(arg0: $CompoundTag$Type): $LittleGroup
public "getGrid"(): $LittleGrid
public static "printTooltip"(arg0: $CompoundTag$Type): $Component
public "getVolumesIncludingChildren"(): $LittleVolumes
public "getVolumeIncludingChildren"(): double
public "isEmptyIncludeChildren"(): boolean
public "hasTranslucentBlocks"(): boolean
public "hasStructureIncludeChildren"(): boolean
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "spliterator"(): $Spliterator<($LittleTile)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$LittleTile>;
get "minVec"(): $LittleVec
get "smallest"(): integer
get "structureType"(): $LittleStructureType
get "structureName"(): string
get "volumes"(): $LittleVolumes
get "structureId"(): string
get "specialBoxes"(): $List<($LittlePlaceBox)>
get "structureTag"(): $CompoundTag
get "empty"(): boolean
get "parent"(): $LittleGroup
get "volume"(): double
get "surroundingBox"(): $LittleBox
get "grid"(): $LittleGrid
get "volumesIncludingChildren"(): $LittleVolumes
get "volumeIncludingChildren"(): double
get "emptyIncludeChildren"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleGroup$Type = ($LittleGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleGroup_ = $LittleGroup$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemColorIngredient$ColorIngredientType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ColorIngredient, $ColorIngredient$Type} from "packages/team/creative/littletiles/common/ingredient/$ColorIngredient"

export class $ItemColorIngredient$ColorIngredientType extends $Enum<($ItemColorIngredient$ColorIngredientType)> {
static readonly "black": $ItemColorIngredient$ColorIngredientType
static readonly "cyan": $ItemColorIngredient$ColorIngredientType
static readonly "magenta": $ItemColorIngredient$ColorIngredientType
static readonly "yellow": $ItemColorIngredient$ColorIngredientType


public "setIngredient"(arg0: $ColorIngredient$Type, arg1: integer): void
public static "values"(): ($ItemColorIngredient$ColorIngredientType)[]
public static "valueOf"(arg0: string): $ItemColorIngredient$ColorIngredientType
public "print"(arg0: $ColorIngredient$Type): $Component
public static "getType"(arg0: string): $ItemColorIngredient$ColorIngredientType
public "getIngredient"(arg0: $ColorIngredient$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorIngredient$ColorIngredientType$Type = (("magenta") | ("black") | ("yellow") | ("cyan")) | ($ItemColorIngredient$ColorIngredientType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorIngredient$ColorIngredientType_ = $ItemColorIngredient$ColorIngredientType$Type;
}}
declare module "packages/team/creative/creativecore/common/util/text/$TextMapBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITextCollection, $ITextCollection$Type} from "packages/team/creative/creativecore/common/util/text/$ITextCollection"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$CompiledText, $CompiledText$Type} from "packages/team/creative/creativecore/client/render/text/$CompiledText"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $TextMapBuilder<K> implements $ITextCollection {

constructor()

public "build"(): ($CompiledText)[]
public "values"(): $Collection<($List<($Component)>)>
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(K), ($List<($Component)>)>)>
public "first"(): K
public "keys"(): $List<(K)>
public "addComponent"(arg0: K, arg1: $Component$Type): $TextMapBuilder<(K)>
public "addComponent"(arg0: (K)[], arg1: $Function$Type<(K), ($Component$Type)>): $TextMapBuilder<(K)>
public "addComponent"(arg0: $Iterable$Type<(K)>, arg1: $Function$Type<(K), ($Component$Type)>): $TextMapBuilder<(K)>
public "setFilter"(arg0: $Predicate$Type<(string)>): $TextMapBuilder<(K)>
public "addEntrySet"(arg0: $Set$Type<($Map$Entry$Type<(string), (K)>)>, arg1: $Function$Type<($Map$Entry$Type<(string), (K)>), ($Component$Type)>): $TextMapBuilder<(K)>
public "addComponents"(arg0: $Iterable$Type<(K)>, arg1: $Function$Type<(K), ($List$Type<($Component$Type)>)>): $TextMapBuilder<(K)>
set "filter"(value: $Predicate$Type<(string)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextMapBuilder$Type<K> = ($TextMapBuilder<(K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextMapBuilder_<K> = $TextMapBuilder$Type<(K)>;
}}
declare module "packages/team/creative/creativecore/common/util/type/list/$Pair" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Pair<K, V> implements $Map$Entry<(K), (V)> {
readonly "key": K
 "value": V

constructor(arg0: K, arg1: V)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getValue"(): V
public "getKey"(): K
public "setValue"(arg0: V): V
public "is"(arg0: K): boolean
public static "comparingByKey"<K extends $Comparable<(any)>, V>(): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByKey"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByValue"<K, V extends $Comparable<(any)>>(): $Comparator<($Map$Entry<(K), (V)>)>
public static "comparingByValue"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(K), (V)>)>
public static "copyOf"<K, V>(arg0: $Map$Entry$Type<(any), (any)>): $Map$Entry<(K), (V)>
get "value"(): V
get "key"(): K
set "value"(value: V)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<K, V> = ($Pair<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<K, V> = $Pair$Type<(K), (V)>;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemLittleWrench" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLittleWrench extends $Item {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLittleWrench$Type = ($ItemLittleWrench);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLittleWrench_ = $ItemLittleWrench$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/geo/$VectorFan" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$NormalPlaneF, $NormalPlaneF$Type} from "packages/team/creative/creativecore/common/util/math/geo/$NormalPlaneF"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$NormalPlaneD, $NormalPlaneD$Type} from "packages/team/creative/creativecore/common/util/math/geo/$NormalPlaneD"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$QuadGeneratorContext, $QuadGeneratorContext$Type} from "packages/team/creative/creativecore/client/render/box/$QuadGeneratorContext"
import {$Ray3f, $Ray3f$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Ray3f"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $VectorFan {
static readonly "EPSILON": float

constructor(arg0: ($Vec3f$Type)[])

public "calculateIntercept"(arg0: $Ray3f$Type): $Vec3d
public "cutWithoutCopy"(arg0: $NormalPlaneF$Type): void
public "cutWithoutCopy"(arg0: ($NormalPlaneD$Type)[]): boolean
public "cutWithoutCopy"(arg0: $NormalPlaneD$Type): void
public "cutWithoutCopy"(arg0: ($NormalPlaneF$Type)[]): boolean
public "renderPreview"(arg0: $Matrix4f$Type, arg1: $BufferBuilder$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: integer, arg11: integer): void
public "renderPreview"(arg0: $Matrix4f$Type, arg1: $BufferBuilder$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "add"(arg0: $List$Type<($Vec3f$Type)>, arg1: $Vec3f$Type): void
public "get"(arg0: integer): $Vec3f
public "equals"(arg0: any): boolean
public "toString"(): string
public "scale"(arg0: float): void
public "isEmpty"(): boolean
public "count"(): integer
public "set"(arg0: $VectorFan$Type): void
public "set"(arg0: ($Vec3f$Type)[]): void
public "copy"(): $VectorFan
public "divide"(arg0: float): void
public "generate"(arg0: $QuadGeneratorContext$Type, arg1: $List$Type<($BakedQuad$Type)>): void
public "move"(arg0: float, arg1: float, arg2: float): void
public "intersects"(arg0: $NormalPlaneF$Type, arg1: $NormalPlaneF$Type): boolean
public static "isInside"(arg0: $List$Type<($NormalPlaneF$Type)>, arg1: $Vec3f$Type, arg2: integer): boolean
public static "isInside"(arg0: $List$Type<($NormalPlaneF$Type)>, arg1: $Vec3f$Type, arg2: $Vec3f$Type, arg3: boolean, arg4: boolean, arg5: integer): boolean
public "isInside"(arg0: $List$Type<($List$Type<($NormalPlaneF$Type)>)>): boolean
public "cut"(arg0: $NormalPlaneF$Type): $VectorFan
public "renderLines"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: $Vec3d$Type, arg13: double): void
public "renderLines"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $Vec3d$Type, arg7: double): void
public "renderLines"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: integer, arg11: integer): void
public "renderLines"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "createPlane"(): $NormalPlaneF
public "createPlane"(arg0: $QuadGeneratorContext$Type): $NormalPlaneF
public "forAllEdges"(arg0: $BiConsumer$Type<($Vec3f$Type), ($Vec3f$Type)>): void
public "getCoords"(): ($Vec3f)[]
public "intersect2d"(arg0: $VectorFan$Type, arg1: $Axis$Type, arg2: $Axis$Type, arg3: boolean, arg4: float): boolean
public "createNormal"(): $Vec3f
public "equalsIgnoreOrder"(arg0: $VectorFan$Type, arg1: $Axis$Type): boolean
public "cut2d"(arg0: $List$Type<($VectorFan$Type)>, arg1: $Axis$Type, arg2: $Axis$Type, arg3: boolean, arg4: boolean): $List<($VectorFan)>
public "cut2d"(arg0: $VectorFan$Type, arg1: $Axis$Type, arg2: $Axis$Type, arg3: boolean, arg4: boolean): $List<($VectorFan)>
get "empty"(): boolean
get "coords"(): ($Vec3f)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VectorFan$Type = ($VectorFan);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VectorFan_ = $VectorFan$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/registry/premade/$LittlePremadePreview" {
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $LittlePremadePreview {
readonly "previews": $LittleGroup
readonly "stack": $ItemStack

constructor(arg0: $LittleGroup$Type, arg1: $ItemStack$Type)

public "arePreviewsEqual"(arg0: $LittleGroup$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittlePremadePreview$Type = ($LittlePremadePreview);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittlePremadePreview_ = $LittlePremadePreview$Type;
}}
declare module "packages/team/creative/littletiles/client/render/mc/$RebuildTaskExtender" {
import {$BufferCache, $BufferCache$Type} from "packages/team/creative/littletiles/client/render/cache/buffer/$BufferCache"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $RebuildTaskExtender {

 "upload"(arg0: $RenderType$Type, arg1: $BufferCache$Type): $BufferCache

(arg0: $RenderType$Type, arg1: $BufferCache$Type): $BufferCache
}

export namespace $RebuildTaskExtender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RebuildTaskExtender$Type = ($RebuildTaskExtender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RebuildTaskExtender_ = $RebuildTaskExtender$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/selection/$SelectionMode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NamedHandlerRegistry, $NamedHandlerRegistry$Type} from "packages/team/creative/creativecore/common/util/registry/$NamedHandlerRegistry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SelectionMode$SelectionResult, $SelectionMode$SelectionResult$Type} from "packages/team/creative/littletiles/common/placement/selection/$SelectionMode$SelectionResult"

export class $SelectionMode {
static readonly "REGISTRY": $NamedHandlerRegistry<($SelectionMode)>

constructor()

public "getName"(): string
public "clear"(arg0: $ItemStack$Type): void
public "save"(arg0: $ItemStack$Type): void
public "getGroup"(arg0: $Level$Type, arg1: $Player$Type, arg2: $CompoundTag$Type, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean): $LittleGroup
public "leftClick"(arg0: $Player$Type, arg1: $CompoundTag$Type, arg2: $BlockPos$Type): void
public "generateResult"(arg0: $Level$Type, arg1: $CompoundTag$Type): $SelectionMode$SelectionResult
public "rightClick"(arg0: $Player$Type, arg1: $CompoundTag$Type, arg2: $BlockPos$Type): void
public "getTranslation"(): $Component
get "name"(): string
get "translation"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectionMode$Type = ($SelectionMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectionMode_ = $SelectionMode$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/manager/$GuiManager$GuiManagerType" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$GuiManager, $GuiManager$Type} from "packages/team/creative/creativecore/common/gui/manager/$GuiManager"

export class $GuiManager$GuiManagerType<T extends $GuiManager> extends $Record {

constructor(name: string, managerClass: $Class$Type<(T)>, factory: $Function$Type<($GuiLayer$Type), (T)>)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $Function<($GuiLayer), (T)>
public "managerClass"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiManager$GuiManagerType$Type<T> = ($GuiManager$GuiManagerType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiManager$GuiManagerType_<T> = $GuiManager$GuiManagerType$Type<(T)>;
}}
declare module "packages/team/creative/creativecore/mixin/$StringSplitterAccessor" {
import {$StringSplitter$WidthProvider, $StringSplitter$WidthProvider$Type} from "packages/net/minecraft/client/$StringSplitter$WidthProvider"

export interface $StringSplitterAccessor {

 "getWidthProvider"(): $StringSplitter$WidthProvider

(): $StringSplitter$WidthProvider
}

export namespace $StringSplitterAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitterAccessor$Type = ($StringSplitterAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringSplitterAccessor_ = $StringSplitterAccessor$Type;
}}
declare module "packages/team/creative/creativecore/common/util/type/$ColorType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ColorType extends $Enum<($ColorType)> {
static readonly "RED": $ColorType
static readonly "GREEN": $ColorType
static readonly "BLUE": $ColorType
static readonly "ALPHA": $ColorType


public static "values"(): ($ColorType)[]
public static "valueOf"(arg0: string): $ColorType
public "getBrightest"(): integer
get "brightest"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorType$Type = (("red") | ("green") | ("blue") | ("alpha")) | ($ColorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorType_ = $ColorType$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/$SignalState" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SignalState$SignalStateSize, $SignalState$SignalStateSize$Type} from "packages/team/creative/littletiles/common/structure/signal/$SignalState$SignalStateSize"

export class $SignalState {
static readonly "TRUE": $SignalState
static readonly "FALSE": $SignalState

constructor()

public "setNumber"(arg0: integer): $SignalState
public "shrinkTo"(arg0: integer): void
public "setLongNumber"(arg0: long): $SignalState
public static "loadFromTag"(arg0: $Tag$Type): $SignalState
public "equals"(arg0: any): boolean
public "equals"(arg0: integer, arg1: $SignalState$Type): boolean
public "toString"(): string
public "load"(arg0: integer): $SignalState
public "load"(arg0: $Tag$Type): $SignalState
public "size"(): $SignalState$SignalStateSize
public "fill"(arg0: $SignalState$Type): $SignalState
public "fill"(arg0: boolean): $SignalState
public static "of"(arg0: integer): $SignalState
public static "of"(arg0: long): $SignalState
public static "of"(arg0: boolean): $SignalState
public "set"(arg0: integer, arg1: boolean): $SignalState
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $SignalState
public "print"(arg0: integer): string
public "save"(): $Tag
public static "copy"(arg0: $SignalState$Type): $SignalState
public "reset"(): $SignalState
public static "create"(arg0: integer): $SignalState
public "is"(arg0: integer): boolean
public "is"(arg0: (integer)[]): boolean
public "number"(): integer
public "or"(arg0: $SignalState$Type): $SignalState
public "any"(): boolean
public "invert"(): $SignalState
public "overwrite"(arg0: $SignalState$Type): $SignalState
public "longNumber"(): long
public static "getRequiredBandwidth"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalState$Type = ($SignalState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalState_ = $SignalState$Type;
}}
declare module "packages/team/creative/creativecore/common/network/$CreativePacket" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $CreativePacket {

constructor()

public "execute"(arg0: $Player$Type): void
public "requiresServer"(arg0: $Player$Type): void
public "executeServer"(arg0: $ServerPlayer$Type): void
public "requiresClient"(arg0: $Player$Type): void
public "executeClient"(arg0: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativePacket$Type = ($CreativePacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativePacket_ = $CreativePacket$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/$PlacementPreview" {
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PlacementMode, $PlacementMode$Type} from "packages/team/creative/littletiles/common/placement/mode/$PlacementMode"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$LittleIngredients, $LittleIngredients$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredients"
import {$LittleGroupAbsolute, $LittleGroupAbsolute$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroupAbsolute"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LittleBoxAbsolute, $LittleBoxAbsolute$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBoxAbsolute"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlacementPreview {
readonly "previews": $LittleGroup
readonly "mode": $PlacementMode
readonly "position": $PlacementPosition
readonly "levelUUID": $UUID
readonly "box": $LittleBoxAbsolute


public "moveRelative"(arg0: $Entity$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: boolean, arg4: boolean): void
public static "load"(arg0: $UUID$Type, arg1: $LittleGroup$Type, arg2: $PlacementMode$Type, arg3: $PlacementPosition$Type, arg4: $LittleBoxAbsolute$Type): $PlacementPreview
public static "load"(arg0: $UUID$Type, arg1: $PlacementMode$Type, arg2: $LittleGroupAbsolute$Type, arg3: $Facing$Type): $PlacementPreview
public "copy"(): $PlacementPreview
public static "absolute"(arg0: $Level$Type, arg1: $PlacementMode$Type, arg2: $LittleGroupAbsolute$Type, arg3: $Facing$Type): $PlacementPreview
public static "absolute"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LittleGroupAbsolute$Type, arg3: $Facing$Type): $PlacementPreview
public static "relative"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LittleGroup$Type, arg3: $PlacementPosition$Type, arg4: boolean, arg5: boolean): $PlacementPreview
public static "relative"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: boolean, arg4: boolean, arg5: boolean): $PlacementPreview
public static "relative"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: boolean): $PlacementPreview
public "getLevel"(arg0: $Entity$Type): $Level
public "mirror"(arg0: $Axis$Type, arg1: $LittleBoxAbsolute$Type): void
public "getPositions"(): $Set<($BlockPos)>
public "getBeforePlaceIngredients"(): $LittleIngredients
get "positions"(): $Set<($BlockPos)>
get "beforePlaceIngredients"(): $LittleIngredients
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementPreview$Type = ($PlacementPreview);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementPreview_ = $PlacementPreview$Type;
}}
declare module "packages/team/creative/creativecore/common/util/type/$Color" {
import {$ColorType, $ColorType$Type} from "packages/team/creative/creativecore/common/util/type/$ColorType"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"

export class $Color {
static readonly "NONE": $Color
static readonly "WHITE": $Color
static readonly "RED": $Color
static readonly "GREEN": $Color
static readonly "BLUE": $Color
static readonly "LIGHT_BLUE": $Color
static readonly "ORANGE": $Color
static readonly "YELLOW": $Color
static readonly "CYAN": $Color
static readonly "MAGENTA": $Color
static readonly "BLACK": $Color

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: short, arg1: short, arg2: short, arg3: short)
constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: $Vec3i$Type)
constructor(arg0: $Vector3d$Type)
constructor()
constructor(arg0: $Color$Type)
constructor(arg0: integer)
constructor(arg0: short, arg1: short, arg2: short)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: float, arg1: float, arg2: float)

public "glColor"(): void
public "toVec"(): $Vec3d
public "get"(arg0: $ColorType$Type): short
public "blend"(arg0: $Color$Type): void
public static "blend"(arg0: $Color$Type, arg1: $Color$Type): $Color
public static "blend"(arg0: $Color$Type, arg1: $Color$Type, arg2: float): $Color
public static "blend"(arg0: integer, arg1: integer): integer
public "blend"(arg0: $Color$Type, arg1: float): void
public static "blend"(arg0: integer, arg1: integer, arg2: float): integer
public "set"(arg0: $ColorType$Type, arg1: short): void
public "set"(arg0: $ColorType$Type, arg1: integer): void
public "set"(arg0: $Color$Type): void
public "isDefault"(): boolean
public "setBlue"(arg0: integer): void
public "setBlue"(arg0: short): void
public "toInt"(): integer
public "setRed"(arg0: short): void
public "setRed"(arg0: integer): void
public "getAlpha"(): short
public "isInvisible"(): boolean
public static "isInvisible"(arg0: integer): boolean
public "isTransparent"(): boolean
public static "isTransparent"(arg0: integer): boolean
public "getRed"(): short
public "getGreen"(): short
public "getBlue"(): short
public "setGreen"(arg0: short): void
public "setGreen"(arg0: integer): void
public "setAlpha"(arg0: integer): void
public "setAlpha"(arg0: short): void
public "isWhite"(): boolean
public static "isWhite"(arg0: integer): boolean
public "getRedDecimal"(): float
public "getGreenDecimal"(): float
public "getAlphaDecimal"(): float
public "getBlueDecimal"(): float
public "getDecimal"(arg0: $ColorType$Type): float
get "default"(): boolean
set "blue"(value: integer)
set "blue"(value: short)
set "red"(value: short)
set "red"(value: integer)
get "alpha"(): short
get "invisible"(): boolean
get "transparent"(): boolean
get "red"(): short
get "green"(): short
get "blue"(): short
set "green"(value: short)
set "green"(value: integer)
set "alpha"(value: integer)
set "alpha"(value: short)
get "white"(): boolean
get "redDecimal"(): float
get "greenDecimal"(): float
get "alphaDecimal"(): float
get "blueDecimal"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/team/creative/littletiles/mixin/client/render/$GameRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRendererAccessor {

 "getRenderBlockOutline"(): boolean

(): boolean
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$Type = ($GameRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRendererAccessor_ = $GameRendererAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/placement/$PlacementPosition" {
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleVecAbsolute, $LittleVecAbsolute$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecAbsolute"
import {$LittleVecGrid, $LittleVecGrid$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecGrid"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$LittleBoxAbsolute, $LittleBoxAbsolute$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBoxAbsolute"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $PlacementPosition extends $LittleVecAbsolute {
readonly "facing": $Facing

constructor(arg0: $BlockPos$Type, arg1: $LittleVecGrid$Type, arg2: $Facing$Type)
constructor(arg0: $BlockPos$Type, arg1: $LittleGrid$Type, arg2: $LittleVec$Type, arg3: $Facing$Type)
constructor(arg0: $BlockHitResult$Type, arg1: $LittleGrid$Type)

public "subVec"(arg0: $LittleVec$Type): void
public "addVec"(arg0: $LittleVec$Type): void
public "equals"(arg0: any): boolean
public "assign"(arg0: $LittleVecAbsolute$Type): void
public "mirror"(arg0: $Axis$Type, arg1: $LittleBoxAbsolute$Type): void
public "getBox"(arg0: $LittleGrid$Type): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementPosition$Type = ($PlacementPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementPosition_ = $PlacementPosition$Type;
}}
declare module "packages/team/creative/littletiles/mixin/client/level/$ClientChunkCacheAccessor" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"

export interface $ClientChunkCacheAccessor {

 "setLevel"(arg0: $ClientLevel$Type): void
 "setLightEngine"(arg0: $LevelLightEngine$Type): void
}

export namespace $ClientChunkCacheAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkCacheAccessor$Type = ($ClientChunkCacheAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkCacheAccessor_ = $ClientChunkCacheAccessor$Type;
}}
declare module "packages/team/creative/solonion/common/item/foodcontainer/$FoodContainerItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$OnionFoodContainer, $OnionFoodContainer$Type} from "packages/team/creative/solonion/api/$OnionFoodContainer"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FoodContainerItem extends $Item implements $OnionFoodContainer {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: integer, arg1: string)

public static "getInventory"(arg0: $ItemStack$Type): $ItemStackHandler
public static "getBestFoodSlot"(arg0: $ItemStackHandler$Type, arg1: $Player$Type): integer
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFoodProperties"(): $FoodProperties
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "isEdible"(): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getActualFood"(arg0: $Player$Type, arg1: $ItemStack$Type): $ItemStack
get "foodProperties"(): $FoodProperties
get "edible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodContainerItem$Type = ($FoodContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodContainerItem_ = $FoodContainerItem$Type;
}}
declare module "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationLevel" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$LevelEntityGetter, $LevelEntityGetter$Type} from "packages/net/minecraft/world/level/entity/$LevelEntityGetter"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LevelBlockChangeListener, $LevelBlockChangeListener$Type} from "packages/team/creative/littletiles/common/level/little/$LevelBlockChangeListener"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LittleEntityRenderManager, $LittleEntityRenderManager$Type} from "packages/team/creative/littletiles/client/render/entity/$LittleEntityRenderManager"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$LittleAnimationChunkCache, $LittleAnimationChunkCache$Type} from "packages/team/creative/littletiles/common/entity/animation/$LittleAnimationChunkCache"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$TransientEntitySectionManager, $TransientEntitySectionManager$Type} from "packages/net/minecraft/world/level/entity/$TransientEntitySectionManager"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$IVecOrigin, $IVecOrigin$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin"
import {$ClientLevelExtender, $ClientLevelExtender$Type} from "packages/team/creative/littletiles/client/level/$ClientLevelExtender"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$LittleAnimationLevelCallback, $LittleAnimationLevelCallback$Type} from "packages/team/creative/littletiles/common/level/little/$LittleAnimationLevelCallback"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockStatePredictionHandler, $BlockStatePredictionHandler$Type} from "packages/net/minecraft/client/multiplayer/prediction/$BlockStatePredictionHandler"
import {$LittleSubLevel, $LittleSubLevel$Type} from "packages/team/creative/littletiles/common/level/little/$LittleSubLevel"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $LittleAnimationLevel extends $Level implements $LittleSubLevel, $Iterable<($BETiles)>, $ClientLevelExtender {
readonly "entityCallback": $LittleAnimationLevelCallback
 "holder": $Entity
 "origin": $IVecOrigin
 "chunks": $LittleAnimationChunkCache
 "renderManager": $LittleEntityRenderManager<(any)>
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor(arg0: $Level$Type)

public "getEntityGetter"(): $LevelEntityGetter<($Entity)>
public "getChunkSource"(): $LittleAnimationChunkCache
public "removeEntityById"(arg0: integer, arg1: $Entity$RemovalReason$Type): void
public "toString"(): string
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($BETiles)>
public "getParent"(): $Level
public "key"(): $UUID
public "setParent"(arg0: $Level$Type): void
public "unload"(): void
public "entities"(): $Iterable<($Entity)>
public "levelEvent"(arg0: $Player$Type, arg1: integer, arg2: $BlockPos$Type, arg3: integer): void
public "gameEvent"(arg0: $GameEvent$Type, arg1: $Vec3$Type, arg2: $GameEvent$Context$Type): void
public "getScoreboard"(): $Scoreboard
public "getOrigin"(): $IVecOrigin
public "tick"(): void
public "enabledFeatures"(): $FeatureFlagSet
public "allowPlacement"(): boolean
public "addFreshEntity"(arg0: $Entity$Type): boolean
public "sendBlockUpdated"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $BlockState$Type, arg3: integer): void
public "setBlocksDirty"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $BlockState$Type): void
public "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
public "playSeededSound"(arg0: $Player$Type, arg1: $Entity$Type, arg2: $Holder$Type<($SoundEvent$Type)>, arg3: $SoundSource$Type, arg4: float, arg5: float, arg6: long): void
public "playSeededSound"(arg0: $Player$Type, arg1: double, arg2: double, arg3: double, arg4: $SoundEvent$Type, arg5: $SoundSource$Type, arg6: float, arg7: float, arg8: long): void
public "playSeededSound"(arg0: $Player$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$Type<($SoundEvent$Type)>, arg5: $SoundSource$Type, arg6: float, arg7: float, arg8: long): void
public "addParticle"(arg0: $ParticleOptions$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public "playSound"(arg0: $Player$Type, arg1: $Entity$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
public "addAlwaysVisibleParticle"(arg0: $ParticleOptions$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public "addAlwaysVisibleParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "gatherChunkSourceStats"(): string
public "getEntity"(arg0: integer): $Entity
public "getMapData"(arg0: string): $MapItemSavedData
public "getFreeMapId"(): integer
public "setMapData"(arg0: string, arg1: $MapItemSavedData$Type): void
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
public "getRecipeManager"(): $RecipeManager
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $BlockPos$Type): void
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getShade"(arg0: $Direction$Type, arg1: boolean): float
public "playSound"(arg0: $Player$Type, arg1: double, arg2: double, arg3: double, arg4: $SoundEvent$Type, arg5: $SoundSource$Type, arg6: float, arg7: float): void
public "addParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "getServer"(): $MinecraftServer
public "playLocalSound"(arg0: double, arg1: double, arg2: double, arg3: $SoundEvent$Type, arg4: $SoundSource$Type, arg5: float, arg6: float, arg7: boolean): void
public "chunks"(): $Iterable<($LevelChunk)>
public "registryAccess"(): $RegistryAccess
public "setServerVerifiedBlockStateExtender"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): void
public "blockStatePredictionHandler"(): $BlockStatePredictionHandler
public "handleBlockChangedAckExtender"(arg0: integer): void
public "syncBlockStateExtender"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Vec3$Type): void
public "players"(): $List<(any)>
public "m_104665_"(arg0: $LevelChunk$Type): void
public "getEntityStorage"(): $TransientEntitySectionManager<(any)>
public "getHolder"(): $Entity
public "getRealLevel"(): $Level
public "setHolder"(arg0: $Entity$Type): void
public "setOrigin"(arg0: $Vec3d$Type): void
public "getRenderManager"(): $LittleEntityRenderManager<(any)>
public "initialTick"(): void
public "registerBlockChangeListener"(arg0: $LevelBlockChangeListener$Type): void
public "shouldUseLightingForRenderig"(): boolean
public "addFreshEntityFromPacket"(arg0: $Entity$Type): void
public "clearTrackingChanges"(): void
public "spliterator"(): $Spliterator<($BETiles)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "transformToRealWorld"(arg0: $BlockPos$Type): $BlockPos
public "asLevel"(): $Level
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
[Symbol.iterator](): IterableIterator<$BETiles>;
get "entityGetter"(): $LevelEntityGetter<($Entity)>
get "chunkSource"(): $LittleAnimationChunkCache
get "empty"(): boolean
get "parent"(): $Level
set "parent"(value: $Level$Type)
get "scoreboard"(): $Scoreboard
get "origin"(): $IVecOrigin
get "freeMapId"(): integer
get "recipeManager"(): $RecipeManager
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "server"(): $MinecraftServer
get "entityStorage"(): $TransientEntitySectionManager<(any)>
get "holder"(): $Entity
get "realLevel"(): $Level
set "holder"(value: $Entity$Type)
set "origin"(value: $Vec3d$Type)
get "renderManager"(): $LittleEntityRenderManager<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleAnimationLevel$Type = ($LittleAnimationLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleAnimationLevel_ = $LittleAnimationLevel$Type;
}}
declare module "packages/team/creative/littletiles/api/common/tool/$ILittleTool" {
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"

export interface $ILittleTool {

 "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
 "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
 "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
 "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
 "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
 "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
 "sendTransformationUpdate"(): boolean
 "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
 "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
 "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
 "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
 "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
}

export namespace $ILittleTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILittleTool$Type = ($ILittleTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILittleTool_ = $ILittleTool$Type;
}}
declare module "packages/team/creative/littletiles/common/level/little/$LevelBlockChangeListener" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $LevelBlockChangeListener {

 "blockChanged"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void

(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
}

export namespace $LevelBlockChangeListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelBlockChangeListener$Type = ($LevelBlockChangeListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelBlockChangeListener_ = $LevelBlockChangeListener$Type;
}}
declare module "packages/team/creative/creativecore/client/render/box/$QuadGeneratorContext" {
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $QuadGeneratorContext {
 "box": $RenderBox
 "facing": $Facing
 "color": integer
 "format": $VertexFormat
 "uvOffset": integer
 "offset": $BlockPos
 "shouldOverrideColor": boolean
 "quad": $BakedQuad
 "scaleAndOffset": boolean
 "offsetX": float
 "offsetY": float
 "offsetZ": float
 "scaleX": float
 "scaleY": float
 "scaleZ": float
 "minX": float
 "minY": float
 "minZ": float
 "maxX": float
 "maxY": float
 "maxZ": float
 "sizeX": float
 "sizeY": float
 "sizeZ": float
 "uvInverted": boolean
 "sizeU": float
 "sizeV": float

constructor()

public "setQuad"(arg0: $BakedQuad$Type, arg1: boolean, arg2: integer): void
public "clear"(): void
public "set"(arg0: $VertexFormat$Type, arg1: $RenderBox$Type, arg2: $Facing$Type, arg3: integer): void
public "setBounds"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "hasBounds"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadGeneratorContext$Type = ($QuadGeneratorContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuadGeneratorContext_ = $QuadGeneratorContext$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/collection/$LittleCollectionSafe" {
import {$LittleCollection, $LittleCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/collection/$LittleCollection"

export class $LittleCollectionSafe extends $LittleCollection {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleCollectionSafe$Type = ($LittleCollectionSafe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleCollectionSafe_ = $LittleCollectionSafe$Type;
}}
declare module "packages/team/creative/littletiles/common/block/entity/$BETiles$SideState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BETiles$SideState extends $Enum<($BETiles$SideState)> {
static readonly "EMPTY": $BETiles$SideState
static readonly "SEETHROUGH": $BETiles$SideState
static readonly "NOCLIP": $BETiles$SideState
static readonly "SEETHROUGH_NOCLIP": $BETiles$SideState
static readonly "SOLID": $BETiles$SideState


public static "values"(): ($BETiles$SideState)[]
public static "valueOf"(arg0: string): $BETiles$SideState
public static "getState"(arg0: boolean, arg1: boolean, arg2: boolean): $BETiles$SideState
public "isFilled"(): boolean
public "doesBlockCollision"(): boolean
public "doesBlockLight"(): boolean
get "filled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BETiles$SideState$Type = (("seethrough_noclip") | ("solid") | ("seethrough") | ("noclip") | ("empty")) | ($BETiles$SideState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BETiles$SideState_ = $BETiles$SideState$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/style/display/$StyleDisplay" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"

export class $StyleDisplay {
static readonly "NONE": $StyleDisplay

constructor()

public "render"(arg0: $PoseStack$Type, arg1: $Rect$Type, arg2: $Rect$Type): void
public "render"(arg0: $PoseStack$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
public "render"(arg0: $PoseStack$Type, arg1: double, arg2: double): void
public static "registerType"(arg0: string, arg1: $Class$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StyleDisplay$Type = ($StyleDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StyleDisplay_ = $StyleDisplay$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/logic/$SignalMode$GuiSignalModeConfiguration" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$SignalMode, $SignalMode$Type} from "packages/team/creative/littletiles/common/structure/signal/logic/$SignalMode"
import {$SignalOutputHandler, $SignalOutputHandler$Type} from "packages/team/creative/littletiles/common/structure/signal/output/$SignalOutputHandler"
import {$ISignalComponent, $ISignalComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalComponent"

export class $SignalMode$GuiSignalModeConfiguration {
 "delay": integer

constructor(arg0: $SignalOutputHandler$Type)
constructor(arg0: integer)

public "copy"(): $SignalMode$GuiSignalModeConfiguration
public "getHandler"(arg0: $ISignalComponent$Type, arg1: $LittleStructure$Type): $SignalOutputHandler
public "getMode"(): $SignalMode
get "mode"(): $SignalMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalMode$GuiSignalModeConfiguration$Type = ($SignalMode$GuiSignalModeConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalMode$GuiSignalModeConfiguration_ = $SignalMode$GuiSignalModeConfiguration$Type;
}}
declare module "packages/team/creative/littletiles/mixin/client/render/$CompiledChunkAccessor" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BufferBuilder$SortState, $BufferBuilder$SortState$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$SortState"
import {$VisibilitySet, $VisibilitySet$Type} from "packages/net/minecraft/client/renderer/chunk/$VisibilitySet"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $CompiledChunkAccessor {

 "setTransparencyState"(arg0: $BufferBuilder$SortState$Type): void
 "getTransparencyState"(): $BufferBuilder$SortState
 "getHasBlocks"(): $Set<($RenderType)>
 "setVisibilitySet"(arg0: $VisibilitySet$Type): void
 "getVisibilitySet"(): $VisibilitySet
}

export namespace $CompiledChunkAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompiledChunkAccessor$Type = ($CompiledChunkAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompiledChunkAccessor_ = $CompiledChunkAccessor$Type;
}}
declare module "packages/team/creative/creativecore/client/render/text/$CompiledText" {
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VAlign, $VAlign$Type} from "packages/team/creative/creativecore/common/gui/$VAlign"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CompiledText$FormattedTextSplit, $CompiledText$FormattedTextSplit$Type} from "packages/team/creative/creativecore/client/render/text/$CompiledText$FormattedTextSplit"
import {$Align, $Align$Type} from "packages/team/creative/creativecore/common/gui/$Align"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"

export class $CompiledText {
static readonly "EMPTY": $CompiledText

constructor(arg0: integer, arg1: integer)

public "getUsedHeight"(): integer
public "getUsedWidth"(): integer
public "contains"(arg0: string): boolean
public "copy"(): $CompiledText
public "setShadow"(arg0: boolean): void
public "setText"(arg0: $Component$Type): void
public "setText"(arg0: $List$Type<($Component$Type)>): void
public "render"(arg0: $PoseStack$Type): void
public static "createAnySize"(): $CompiledText
public "setDefaultColor"(arg0: integer): void
public "setAlign"(arg0: $Align$Type): void
public "setVAlign"(arg0: $VAlign$Type): void
public "getTotalWidth"(): integer
public "setMaxHeight"(arg0: integer): void
public "setDimension"(arg0: integer, arg1: integer): void
public "getTotalHeight"(): integer
public "setScale"(arg0: double): void
public "getMaxWidth"(): integer
public "getMaxHeight"(): integer
public "getScale"(): double
public "splitByWidth"(arg0: $FormattedText$Type, arg1: integer, arg2: $Style$Type, arg3: boolean): $CompiledText$FormattedTextSplit
get "usedHeight"(): integer
get "usedWidth"(): integer
set "shadow"(value: boolean)
set "text"(value: $Component$Type)
set "text"(value: $List$Type<($Component$Type)>)
set "defaultColor"(value: integer)
set "align"(value: $Align$Type)
set "vAlign"(value: $VAlign$Type)
get "totalWidth"(): integer
set "maxHeight"(value: integer)
get "totalHeight"(): integer
set "scale"(value: double)
get "maxWidth"(): integer
get "maxHeight"(): integer
get "scale"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompiledText$Type = ($CompiledText);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompiledText_ = $CompiledText$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/matrix/$IVecOrigin" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ABB, $ABB$Type} from "packages/team/creative/creativecore/common/util/math/box/$ABB"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Matrix3, $Matrix3$Type} from "packages/team/creative/creativecore/common/util/math/matrix/$Matrix3"

export interface $IVecOrigin {

 "setupRendering"(arg0: $PoseStack$Type, arg1: double, arg2: double, arg3: double, arg4: float): void
 "onlyRotateWithoutCenter"(arg0: $Vec3d$Type): void
 "off"(arg0: double, arg1: double, arg2: double): void
 "getParent"(): $IVecOrigin
 "set"(arg0: $IVecOrigin$Type): void
 "copy"(): $IVecOrigin
 "translation"(): $Vec3d
 "tick"(): void
 "center"(): $Vec3d
 "rotZ"(arg0: double): void
 "rotZ"(): double
 "rotY"(arg0: double): void
 "rotY"(): double
 "rotX"(): double
 "rotX"(arg0: double): void
 "rot"(arg0: double, arg1: double, arg2: double): void
 "hasChanged"(): boolean
 "isRotated"(): boolean
 "offX"(): double
 "offX"(arg0: double): void
 "offY"(): double
 "offY"(arg0: double): void
 "rotation"(): $Matrix3
 "transformPointToWorld"(arg0: $BlockPos$Type): $BlockPos
 "transformPointToWorld"(arg0: $Vec3d$Type): void
 "transformPointToWorld"(arg0: $Vector3d$Type): $Vector3d
 "transformPointToWorld"(arg0: $Vec3$Type): $Vec3
 "offZ"(): double
 "offZ"(arg0: double): void
 "getAABB"(arg0: $AABB$Type): $ABB
 "getAABB"(arg0: $ABB$Type): $ABB
 "setCenter"(arg0: $Vec3d$Type): void
 "transformPointToFakeWorld"(arg0: $Vec3d$Type): void
 "transformPointToFakeWorld"(arg0: $Vec3$Type): $Vec3
 "transformPointToFakeWorld"(arg0: $Vector3d$Type): $Vector3d
 "transformPointToFakeWorld"(arg0: $BlockPos$Type): $BlockPos
 "getOBB"(arg0: $AABB$Type): $ABB
 "getOBB"(arg0: $ABB$Type): $ABB
 "offZLast"(): double
 "rotYLast"(): double
 "offXLast"(): double
 "rotXLast"(): double
 "offYLast"(): double
 "rotZLast"(): double
 "rotationInv"(): $Matrix3
 "setupRenderingInternal"(arg0: $PoseStack$Type, arg1: double, arg2: double, arg3: double, arg4: float): void
 "translationCombined"(arg0: $Axis$Type): double
}

export namespace $IVecOrigin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVecOrigin$Type = ($IVecOrigin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVecOrigin_ = $IVecOrigin$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/tile/collection/$LittleCollection" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$LittleServerFace, $LittleServerFace$Type} from "packages/team/creative/littletiles/common/math/face/$LittleServerFace"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $LittleCollection implements $Iterable<($LittleTile)> {

constructor()

public "combineBlockwise"(arg0: $LittleGrid$Type): void
public static "saveExtended"(arg0: $IParentCollection$Type, arg1: $LittleServerFace$Type): $CompoundTag
public static "loadExtended"(arg0: $LittleCollection$Type, arg1: $CompoundTag$Type): void
public "removeElementBoxes"(arg0: $LittleTile$Type): boolean
public "boxesCount"(): integer
public "add"(arg0: $LittleTile$Type): void
public "add"(arg0: $LittleElement$Type, arg1: $LittleBox$Type): void
public "add"(arg0: $LittleElement$Type, arg1: $Iterable$Type<($LittleBox$Type)>): void
public "remove"(arg0: $LittleElement$Type, arg1: $LittleBox$Type): boolean
public "toString"(): string
public static "load"(arg0: $LittleCollection$Type, arg1: $CompoundTag$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<($LittleTile)>
public "addAll"(arg0: $Iterable$Type<($LittleTile$Type)>): void
public "first"(): $LittleTile
public "combine"(): boolean
public static "save"(arg0: $LittleCollection$Type): $CompoundTag
public "removeAll"(arg0: $Iterable$Type<($LittleTile$Type)>): void
public "removeElement"(arg0: $LittleElement$Type): boolean
public "boxes"(): $Iterable<($LittleBox)>
public "hasTranslucentBlocks"(): boolean
public "spliterator"(): $Spliterator<($LittleTile)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$LittleTile>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleCollection$Type = ($LittleCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleCollection_ = $LittleCollection$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/manager/$GuiManagerItem" {
import {$GuiLayer, $GuiLayer$Type} from "packages/team/creative/creativecore/common/gui/$GuiLayer"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$GuiChildControl, $GuiChildControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiChildControl"
import {$GuiManager, $GuiManager$Type} from "packages/team/creative/creativecore/common/gui/manager/$GuiManager"
import {$NamedHandlerRegistry, $NamedHandlerRegistry$Type} from "packages/team/creative/creativecore/common/util/registry/$NamedHandlerRegistry"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$GuiSlot, $GuiSlot$Type} from "packages/team/creative/creativecore/common/gui/controls/inventory/$GuiSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiManager$GuiManagerType, $GuiManager$GuiManagerType$Type} from "packages/team/creative/creativecore/common/gui/manager/$GuiManager$GuiManagerType"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect, $Rect$Type} from "packages/team/creative/creativecore/common/util/math/geo/$Rect"

export class $GuiManagerItem extends $GuiManager {
 "handAccess": $SlotAccess
static readonly "REGISTRY": $NamedHandlerRegistry<($GuiManager$GuiManagerType)>
static readonly "ITEM": $GuiManager$GuiManagerType<($GuiManagerItem)>
readonly "layer": $GuiLayer

constructor(arg0: $GuiLayer$Type)

public "isDragged"(): boolean
public "additionalDragCount"(arg0: integer): integer
public "setHand"(arg0: $ItemStack$Type): void
public "closed"(): void
public "tick"(): void
public "mouseClickedOutside"(arg0: double, arg1: double): void
public static "freeSpace"(arg0: $Slot$Type, arg1: $ItemStack$Type): integer
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): void
public "renderOverlay"(arg0: $GuiGraphics$Type, arg1: $GuiChildControl$Type, arg2: $Rect$Type, arg3: integer, arg4: integer): void
public "getHand"(): $ItemStack
public "startDrag"(arg0: $GuiSlot$Type, arg1: boolean, arg2: integer): void
public "addToDrag"(arg0: $GuiSlot$Type): void
public "modifyDrag"(arg0: $GuiSlot$Type): void
public "endDrag"(): void
public "setHandChanged"(): void
public "abortDrag"(): void
get "dragged"(): boolean
set "hand"(value: $ItemStack$Type)
get "hand"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiManagerItem$Type = ($GuiManagerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiManagerItem_ = $GuiManagerItem$Type;
}}
declare module "packages/team/creative/creativecore/common/util/math/base/$Facing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$NormalPlaneF, $NormalPlaneF$Type} from "packages/team/creative/creativecore/common/util/math/geo/$NormalPlaneF"
import {$Vec3f, $Vec3f$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3f"
import {$Axis as $Axis$0, $Axis$Type as $Axis$0$Type} from "packages/com/mojang/math/$Axis"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Facing extends $Enum<($Facing)> {
static readonly "DOWN": $Facing
static readonly "UP": $Facing
static readonly "NORTH": $Facing
static readonly "SOUTH": $Facing
static readonly "WEST": $Facing
static readonly "EAST": $Facing
static readonly "VALUES": ($Facing)[]
static readonly "HORIZONTA_VALUES": ($Facing)[]
static readonly "FACING_NAMES": (string)[]
static readonly "HORIZONTAL_FACING_NAMES": (string)[]
readonly "name": string
readonly "axis": $Axis
readonly "positive": boolean
readonly "normal": $Vec3i
readonly "plane": $NormalPlaneF
readonly "horizontalIndex": integer


public "getVAxis"(): $Axis
public "getUAxis"(): $Axis
public static "direction"(arg0: $Vec3i$Type, arg1: $Vec3i$Type): $Facing
public "get"(arg0: $AABB$Type): double
public static "get"(arg0: $Direction$Type): $Facing
public static "get"(arg0: integer): $Facing
public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
public "get"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public static "get"(arg0: $Axis$Type, arg1: boolean): $Facing
public "get"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): float
public static "values"(): ($Facing)[]
public static "valueOf"(arg0: string): $Facing
public "offset"(arg0: $Axis$Type): integer
public "offset"(): integer
public "set"(arg0: $AABB$Type, arg1: double): $AABB
public "one"(): $Axis
public "two"(): $Axis
public "getU"(arg0: float, arg1: float, arg2: float): float
public static "nearest"(arg0: $Vec3f$Type): $Facing
public static "nearest"(arg0: float, arg1: float, arg2: float): $Facing
public "toVanilla"(): $Direction
public "translate"(): $Component
public "opposite"(): $Facing
public "rotation"(): $Axis$0
public static "getHorizontal"(arg0: integer): $Facing
public "getV"(arg0: float, arg1: float, arg2: float): float
get "vAxis"(): $Axis
get "uAxis"(): $Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Facing$Type = (("east") | ("south") | ("north") | ("west") | ("up") | ("down")) | ($Facing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Facing_ = $Facing$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/component/$InternalSignal" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleStructureType$InternalComponent, $LittleStructureType$InternalComponent$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType$InternalComponent"
import {$SignalComponentType, $SignalComponentType$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$SignalComponentType"
import {$ISignalComponent, $ISignalComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalComponent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SignalState, $SignalState$Type} from "packages/team/creative/littletiles/common/structure/signal/$SignalState"

export class $InternalSignal<T extends $LittleStructureType$InternalComponent> implements $ISignalComponent {
readonly "parent": $LittleStructure
readonly "component": T

constructor(arg0: $LittleStructure$Type, arg1: T)

public "toString"(): string
public "load"(arg0: $CompoundTag$Type): void
public "getState"(): $SignalState
public "save"(arg0: boolean, arg1: $CompoundTag$Type): $CompoundTag
public "getBandwidth"(): integer
public "getStructure"(): $LittleStructure
public "getStructureLevel"(): $Level
public "overwriteState"(arg0: $SignalState$Type): void
public "getComponentType"(): $SignalComponentType
public "changed"(): void
public "updateState"(arg0: $SignalState$Type): void
get "state"(): $SignalState
get "bandwidth"(): integer
get "structure"(): $LittleStructure
get "structureLevel"(): $Level
get "componentType"(): $SignalComponentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalSignal$Type<T> = ($InternalSignal<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InternalSignal_<T> = $InternalSignal$Type<(T)>;
}}
declare module "packages/team/creative/creativecore/common/gui/controls/inventory/$IGuiInventory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$GuiSlot, $GuiSlot$Type} from "packages/team/creative/creativecore/common/gui/controls/inventory/$GuiSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$GuiSyncGlobal, $GuiSyncGlobal$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncGlobal"

export interface $IGuiInventory {

 "sync"(arg0: $BitSet$Type): void
 "name"(): string
 "extract"(arg0: $ItemStack$Type): void
 "insert"(arg0: $ItemStack$Type, arg1: boolean): void
 "getSlot"(arg0: integer): $GuiSlot
 "syncAll"(): void
 "inventorySize"(): integer
 "setChanged"(): void
 "setChanged"(arg0: integer): void
}

export namespace $IGuiInventory {
const SYNC: $GuiSyncGlobal<($GuiControl), ($CompoundTag)>
const SYNC_ALL: $GuiSyncGlobal<($GuiControl), ($ListTag)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiInventory$Type = ($IGuiInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiInventory_ = $IGuiInventory$Type;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$BlockRenderContextAccessor" {
import {$WorldSlice, $WorldSlice$Type} from "packages/me/jellysquid/mods/sodium/client/world/$WorldSlice"

export interface $BlockRenderContextAccessor {

 "setWorld"(arg0: $WorldSlice$Type): void

(arg0: $WorldSlice$Type): void
}

export namespace $BlockRenderContextAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRenderContextAccessor$Type = ($BlockRenderContextAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRenderContextAccessor_ = $BlockRenderContextAccessor$Type;
}}
declare module "packages/team/creative/littletiles/mixin/rubidium/$ChunkBuilderAccessor" {
import {$ChunkBuildContext, $ChunkBuildContext$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildContext"

export interface $ChunkBuilderAccessor {

 "getLocalContext"(): $ChunkBuildContext

(): $ChunkBuildContext
}

export namespace $ChunkBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuilderAccessor$Type = ($ChunkBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuilderAccessor_ = $ChunkBuilderAccessor$Type;
}}
declare module "packages/team/creative/littletiles/common/math/box/$LittleBoxAbsolute" {
import {$LittleVecGrid, $LittleVecGrid$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVecGrid"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Vec3d, $Vec3d$Type} from "packages/team/creative/creativecore/common/util/math/vec/$Vec3d"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$HashMapList, $HashMapList$Type} from "packages/team/creative/creativecore/common/util/type/map/$HashMapList"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LittleBoxAbsolute implements $IGridBased {
 "pos": $BlockPos
 "grid": $LittleGrid
 "box": $LittleBox

constructor(arg0: $BlockPos$Type)
constructor(arg0: $BlockPos$Type, arg1: $LittleBox$Type, arg2: $LittleGrid$Type)

public "getSmallest"(): integer
public "getDoubledCenter"(): $LittleVec
public "getDoubledCenter"(arg0: $BlockPos$Type): $LittleVec
public "getMaxGridFrom"(arg0: $Axis$Type, arg1: $BlockPos$Type): integer
public "createBoxFromFace"(arg0: $Facing$Type, arg1: integer): $LittleBoxAbsolute
public "getMinGridFrom"(arg0: $Axis$Type, arg1: $BlockPos$Type): integer
public "getVanillaCenter"(): $Vec3d
public "getMinPos"(arg0: $Axis$Type): integer
public "getMinPos"(): $BlockPos
public "set"(arg0: $BlockPos$Type, arg1: $LittleBox$Type, arg2: $LittleGrid$Type): void
public "copy"(): $LittleBoxAbsolute
public "getSize"(): $LittleVecGrid
public "include"(arg0: $LittleGrid$Type, arg1: $BlockPos$Type, arg2: $LittleBox$Type): void
public "splitted"(): $HashMapList<($BlockPos), ($LittleBox)>
public "getMaxPos"(): $BlockPos
public "getMaxPos"(arg0: $Axis$Type): integer
public "convertTo"(arg0: $LittleGrid$Type): void
public "getGrid"(): $LittleGrid
public "getDistanceIfEqualFromOneSide"(arg0: $Facing$Type, arg1: $LittleBoxAbsolute$Type): integer
public "getDistanceIfEqualFromOneSide"(arg0: $Facing$Type, arg1: $LittleBox$Type, arg2: $BlockPos$Type, arg3: $LittleGrid$Type): integer
public "convertToSmallest"(): void
public "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
public "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "forceSameGrid"(arg0: $IGridBased$Type): void
public "minGrid"(arg0: $LittleGrid$Type): void
public "minGrid"(arg0: $IGridBased$Type): void
public "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
public "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
get "smallest"(): integer
get "doubledCenter"(): $LittleVec
get "vanillaCenter"(): $Vec3d
get "minPos"(): $BlockPos
get "size"(): $LittleVecGrid
get "maxPos"(): $BlockPos
get "grid"(): $LittleGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleBoxAbsolute$Type = ($LittleBoxAbsolute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleBoxAbsolute_ = $LittleBoxAbsolute$Type;
}}
declare module "packages/team/creative/littletiles/common/block/mc/$BlockLava" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IParentCollection, $IParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IParentCollection"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$LittleRenderBox, $LittleRenderBox$Type} from "packages/team/creative/littletiles/client/render/tile/$LittleRenderBox"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ILittleMCBlock, $ILittleMCBlock$Type} from "packages/team/creative/littletiles/api/common/block/$ILittleMCBlock"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$IFakeRenderingBlock, $IFakeRenderingBlock$Type} from "packages/team/creative/littletiles/api/client/$IFakeRenderingBlock"

export class $BlockLava extends $Block implements $ILittleMCBlock, $IFakeRenderingBlock {
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

public "use"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $LittleBox$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: $InteractionHand$Type): $InteractionResult
public "getFogColor"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type, arg3: $Vector3d$Type, arg4: float): $Vector3d
public "canBeConvertedToVanilla"(): boolean
public "getFakeState"(arg0: $BlockState$Type): $BlockState
public "isFluid"(arg0: $TagKey$Type<($Fluid$Type)>): boolean
public "asVanillaBlock"(): $Block
public "getState"(): $BlockState
public "is"(arg0: $ItemStack$Type): boolean
public "is"(arg0: $TagKey$Type<($Block$Type)>): boolean
public "is"(arg0: $Block$Type): boolean
public "getStack"(): $ItemStack
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type, arg2: $LittleVec$Type): $BlockState
public "blockName"(): string
public "mirror"(arg0: $BlockState$Type, arg1: $Axis$Type, arg2: $LittleVec$Type): $BlockState
public "noCollision"(): boolean
public "canInteract"(): boolean
public static "isTranslucent"(arg0: $Block$Type): boolean
public "isTranslucent"(): boolean
public "exploded"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Explosion$Type): void
public "getSoundType"(): $SoundType
public "getExplosionResistance"(arg0: $LittleTile$Type): float
public "getEnchantPowerBonus"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type): float
public "canBeRenderCombined"(arg0: $LittleTile$Type, arg1: $LittleTile$Type): boolean
public "shouldUseStateForRenderType"(): boolean
public "checkEntityCollision"(): boolean
public "getFriction"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): float
public "getLightValue"(): integer
public "entityCollided"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $Entity$Type): void
public "getRenderBox"(arg0: $LittleGrid$Type, arg1: $RenderType$Type, arg2: $LittleBox$Type, arg3: $LittleElement$Type): $LittleRenderBox
public "randomDisplayTick"(arg0: $IParentCollection$Type, arg1: $LittleTile$Type, arg2: $RandomSource$Type): void
public "cullOverEdge"(): boolean
get "state"(): $BlockState
get "stack"(): $ItemStack
get "translucent"(): boolean
get "soundType"(): $SoundType
get "lightValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLava$Type = ($BlockLava);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLava_ = $BlockLava$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/type/premade/$LittleStructurePremade" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$LittleStructureType, $LittleStructureType$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructureType"
import {$IStructureParentCollection, $IStructureParentCollection$Type} from "packages/team/creative/littletiles/common/block/little/tile/parent/$IStructureParentCollection"
import {$LittleStructurePremade$LittlePremadeType, $LittleStructurePremade$LittlePremadeType$Type} from "packages/team/creative/littletiles/common/structure/type/premade/$LittleStructurePremade$LittlePremadeType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LevelChildrenList, $LevelChildrenList$Type} from "packages/team/creative/littletiles/common/structure/connection/children/$LevelChildrenList"

export class $LittleStructurePremade extends $LittleStructure {
readonly "type": $LittleStructureType
readonly "mainBlock": $IStructureParentCollection
 "name": string
readonly "children": $LevelChildrenList

constructor(arg0: $LittleStructurePremade$LittlePremadeType$Type, arg1: $IStructureParentCollection$Type)

public "getStructureDrop"(): $ItemStack
get "structureDrop"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleStructurePremade$Type = ($LittleStructurePremade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleStructurePremade_ = $LittleStructurePremade$Type;
}}
declare module "packages/team/creative/creativecore/common/gui/sync/$GuiSyncGlobal" {
import {$GuiSyncControl, $GuiSyncControl$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncControl"
import {$GuiControl, $GuiControl$Type} from "packages/team/creative/creativecore/common/gui/$GuiControl"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$GuiSyncHolder, $GuiSyncHolder$Type} from "packages/team/creative/creativecore/common/gui/sync/$GuiSyncHolder"

export class $GuiSyncGlobal<C extends $GuiControl, T extends $Tag> extends $GuiSyncControl<(C), (T)> {
readonly "holder": $GuiSyncHolder
readonly "name": string


public "receive"(arg0: C, arg1: T): void
public "send"(arg0: C, arg1: T): void
public "sendAndExecute"(arg0: C, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSyncGlobal$Type<C, T> = ($GuiSyncGlobal<(C), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSyncGlobal_<C, T> = $GuiSyncGlobal$Type<(C), (T)>;
}}
declare module "packages/team/creative/littletiles/common/packet/entity/animation/$LittleBlockChange" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BETiles, $BETiles$Type} from "packages/team/creative/littletiles/common/block/entity/$BETiles"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LittleBlockChange extends $Record {

constructor(pos: $BlockPos$Type, block: $CompoundTag$Type)
constructor(arg0: $BETiles$Type)
constructor(arg0: $BlockGetter$Type, arg1: $BlockPos$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "pos"(): $BlockPos
public "block"(): $CompoundTag
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleBlockChange$Type = ($LittleBlockChange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleBlockChange_ = $LittleBlockChange$Type;
}}
declare module "packages/team/creative/littletiles/common/structure/signal/output/$SignalExternalOutputHandler" {
import {$LittleStructure, $LittleStructure$Type} from "packages/team/creative/littletiles/common/structure/$LittleStructure"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ISignalStructureComponent, $ISignalStructureComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalStructureComponent"
import {$SignalInputCondition, $SignalInputCondition$Type} from "packages/team/creative/littletiles/common/structure/signal/input/$SignalInputCondition"
import {$SignalOutputHandler, $SignalOutputHandler$Type} from "packages/team/creative/littletiles/common/structure/signal/output/$SignalOutputHandler"
import {$ISignalComponent, $ISignalComponent$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$ISignalComponent"
import {$SignalComponentType, $SignalComponentType$Type} from "packages/team/creative/littletiles/common/structure/signal/component/$SignalComponentType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SignalState, $SignalState$Type} from "packages/team/creative/littletiles/common/structure/signal/$SignalState"

export class $SignalExternalOutputHandler implements $ISignalComponent {
readonly "structure": $LittleStructure
readonly "index": integer
 "condition": $SignalInputCondition
 "handler": $SignalOutputHandler

constructor(arg0: $LittleStructure$Type, arg1: integer, arg2: $SignalInputCondition$Type, arg3: $Function$Type<($ISignalComponent$Type), ($SignalOutputHandler$Type)>)
constructor(arg0: $LittleStructure$Type, arg1: $CompoundTag$Type)

public "toString"(): string
public "update"(): void
public "getComponentType"(): $SignalComponentType
public "write"(arg0: boolean): $CompoundTag
public "getState"(): $SignalState
public "changed"(): void
public "getBandwidth"(): integer
public "getStructure"(): $LittleStructure
public "getOutput"(): $ISignalStructureComponent
public "getStructureLevel"(): $Level
/**
 * 
 * @deprecated
 */
public "overwriteState"(arg0: $SignalState$Type): void
public "updateState"(arg0: $SignalState$Type): void
get "componentType"(): $SignalComponentType
get "state"(): $SignalState
get "bandwidth"(): integer
get "structure"(): $LittleStructure
get "output"(): $ISignalStructureComponent
get "structureLevel"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalExternalOutputHandler$Type = ($SignalExternalOutputHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalExternalOutputHandler_ = $SignalExternalOutputHandler$Type;
}}
declare module "packages/team/creative/littletiles/common/block/little/element/$LittleElement" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LittleBlock, $LittleBlock$Type} from "packages/team/creative/littletiles/api/common/block/$LittleBlock"

export class $LittleElement {
 "color": integer

constructor(arg0: string, arg1: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: $BlockState$Type, arg1: $LittleBlock$Type, arg2: integer)
constructor(arg0: $BlockState$Type, arg1: integer)
constructor(arg0: $CompoundTag$Type)
constructor(arg0: $LittleElement$Type)
constructor(arg0: $LittleElement$Type, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $ItemStack$Type, arg1: integer): $LittleElement
public "getState"(): $BlockState
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "is"(arg0: $LittleElement$Type): boolean
public "setState"(arg0: $BlockState$Type): void
public "getBlock"(): $LittleBlock
public "hasColor"(): boolean
public "checkEntityCollision"(): boolean
public "getBlockName"(): string
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
get "block"(): $LittleBlock
get "blockName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LittleElement$Type = ($LittleElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LittleElement_ = $LittleElement$Type;
}}
declare module "packages/team/creative/littletiles/common/item/$ItemMultiTiles" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LittleGroup, $LittleGroup$Type} from "packages/team/creative/littletiles/common/block/little/tile/group/$LittleGroup"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementPosition, $PlacementPosition$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPosition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LittleVec, $LittleVec$Type} from "packages/team/creative/littletiles/common/math/vec/$LittleVec"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Rotation, $Rotation$Type} from "packages/team/creative/creativecore/common/util/math/transformation/$Rotation"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IItemTooltip, $IItemTooltip$Type} from "packages/team/creative/littletiles/common/item/tooltip/$IItemTooltip"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$PlacementMode, $PlacementMode$Type} from "packages/team/creative/littletiles/common/placement/mode/$PlacementMode"
import {$IMarkMode, $IMarkMode$Type} from "packages/team/creative/littletiles/common/placement/mark/$IMarkMode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PlacementPreview, $PlacementPreview$Type} from "packages/team/creative/littletiles/common/placement/$PlacementPreview"
import {$ContainerSlotView, $ContainerSlotView$Type} from "packages/team/creative/creativecore/common/util/inventory/$ContainerSlotView"
import {$GuiConfigure, $GuiConfigure$Type} from "packages/team/creative/littletiles/common/gui/tool/$GuiConfigure"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$ILittlePlacer, $ILittlePlacer$Type} from "packages/team/creative/littletiles/api/common/tool/$ILittlePlacer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderBox, $RenderBox$Type} from "packages/team/creative/creativecore/client/render/box/$RenderBox"

export class $ItemMultiTiles extends $Item implements $ILittlePlacer, $IItemTooltip {
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

public static "of"(arg0: $LittleElement$Type, arg1: $LittleGrid$Type, arg2: $LittleBox$Type): $ItemStack
public static "of"(arg0: $LittleGroup$Type): $ItemStack
public static "of"(arg0: $LittleElement$Type): $ItemStack
public "getLow"(arg0: $ItemStack$Type): $LittleGroup
public static "getStructure"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public static "reloadExampleStructures"(): void
public "containsIngredients"(arg0: $ItemStack$Type): boolean
public "tooltipTranslateKey"(arg0: $ItemStack$Type, arg1: string): string
public "getTiles"(arg0: $ItemStack$Type): $LittleGroup
public "hasTiles"(arg0: $ItemStack$Type): boolean
public "getPlacement"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: boolean): $PlacementPreview
public "saveTiles"(arg0: $ItemStack$Type, arg1: $LittleGroup$Type): void
public "getConfigure"(arg0: $Player$Type, arg1: $ContainerSlotView$Type): $GuiConfigure
public "getCachedMin"(arg0: $ItemStack$Type): $LittleVec
public "tooltipData"(arg0: $ItemStack$Type): (any)[]
public "getCachedSize"(arg0: $ItemStack$Type): $LittleVec
public "get"(arg0: $ItemStack$Type, arg1: boolean): $LittleGroup
public "rotate"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Rotation$Type, arg3: boolean): void
public "mirror"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Axis$Type, arg3: boolean): void
public "getPreviewAlphaFactor"(): float
public "snapToGridByDefault"(arg0: $ItemStack$Type): boolean
public "getPlacementMode"(arg0: $ItemStack$Type): $PlacementMode
public "shouldCache"(): boolean
public "getPositingCubes"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $List<($RenderBox)>
public "canSnapToGrid"(arg0: $ItemStack$Type): boolean
public "getTilesGrid"(arg0: $ItemStack$Type): $LittleGrid
public "render"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PoseStack$Type): void
public "tick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type): void
public "configured"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "onRightClick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "onMouseWheelClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "sendTransformationUpdate"(): boolean
public "onClickBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlacementPosition$Type, arg4: $BlockHitResult$Type): boolean
public "onMark"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlacementPosition$Type, arg3: $BlockHitResult$Type, arg4: $PlacementPreview$Type): $IMarkMode
public "onClickAir"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "onDeselect"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
public "getPositionGrid"(arg0: $Player$Type, arg1: $ItemStack$Type): $LittleGrid
get "previewAlphaFactor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMultiTiles$Type = ($ItemMultiTiles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMultiTiles_ = $ItemMultiTiles$Type;
}}
declare module "packages/team/creative/littletiles/common/math/face/$ILittleFace" {
import {$VectorFan, $VectorFan$Type} from "packages/team/creative/creativecore/common/util/math/geo/$VectorFan"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$Axis, $Axis$Type} from "packages/team/creative/creativecore/common/util/math/base/$Axis"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LittleBox, $LittleBox$Type} from "packages/team/creative/littletiles/common/math/box/$LittleBox"
import {$Facing, $Facing$Type} from "packages/team/creative/creativecore/common/util/math/base/$Facing"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGridBased, $IGridBased$Type} from "packages/team/creative/littletiles/common/grid/$IGridBased"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $ILittleFace extends $IGridBased {

 "maxTwo"(): integer
 "maxOne"(): integer
 "minTwo"(): integer
 "minOne"(): integer
 "supportsCutting"(): boolean
 "setPartiallyFilled"(): void
 "set"(arg0: integer, arg1: integer, arg2: boolean): void
 "box"(): $LittleBox
 "origin"(): integer
 "one"(): $Axis
 "two"(): $Axis
 "facing"(): $Facing
 "cut"(arg0: $List$Type<($VectorFan$Type)>): void
 "getSmallest"(): integer
 "convertToSmallest"(): void
 "sameGrid"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
 "sameGrid"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
 "forceSameGrid"(arg0: $IGridBased$Type): void
 "minGrid"(arg0: $LittleGrid$Type): void
 "minGrid"(arg0: $IGridBased$Type): void
 "convertTo"(arg0: $LittleGrid$Type): void
 "getGrid"(): $LittleGrid
 "unsafeSameGridRestore"(arg0: $IGridBased$Type, arg1: $Runnable$Type): void
 "unsafeSameGridRestore"<T>(arg0: $IGridBased$Type, arg1: $Supplier$Type<(T)>): T
}

export namespace $ILittleFace {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILittleFace$Type = ($ILittleFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILittleFace_ = $ILittleFace$Type;
}}
declare module "packages/team/creative/littletiles/common/ingredient/$ColorIngredient" {
import {$TextBuilder, $TextBuilder$Type} from "packages/team/creative/creativecore/common/util/text/$TextBuilder"
import {$LittleTile, $LittleTile$Type} from "packages/team/creative/littletiles/common/block/little/tile/$LittleTile"
import {$LittleGrid, $LittleGrid$Type} from "packages/team/creative/littletiles/common/grid/$LittleGrid"
import {$LittleElement, $LittleElement$Type} from "packages/team/creative/littletiles/common/block/little/element/$LittleElement"
import {$LittleIngredient, $LittleIngredient$Type} from "packages/team/creative/littletiles/common/ingredient/$LittleIngredient"

export class $ColorIngredient extends $LittleIngredient<($ColorIngredient)> {
 "black": integer
 "cyan": integer
 "magenta": integer
 "yellow": integer
static "dyeToBlockPercentage": float
static readonly "BOTTLE_SIZE": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: (integer)[])
constructor()

public "add"(arg0: $ColorIngredient$Type): $ColorIngredient
public "toString"(): string
public "scale"(arg0: double): void
public "scale"(arg0: integer): void
public "isEmpty"(): boolean
public "print"(arg0: $TextBuilder$Type): void
public "getArray"(): (integer)[]
public "sub"(arg0: $ColorIngredient$Type): $ColorIngredient
public "setLimit"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $ColorIngredient
public "setLimit"(arg0: integer): $ColorIngredient
public static "getColors"(arg0: $LittleGrid$Type, arg1: $LittleTile$Type): $ColorIngredient
public static "getColors"(arg0: $LittleElement$Type, arg1: double): $ColorIngredient
public static "getColors"(arg0: integer, arg1: integer, arg2: double): $ColorIngredient
public static "getColors"(arg0: integer): $ColorIngredient
public "toText"(): $TextBuilder
public "getMinimumCount"(arg0: $ColorIngredient$Type, arg1: integer): integer
public "scaleAdvanced"(arg0: double): void
public "getCyanDescription"(): string
public "scaleLoose"(arg0: double): void
public "getMagentaDescription"(): string
public "getBlackDescription"(): string
public "getYellowDescription"(): string
get "empty"(): boolean
get "array"(): (integer)[]
set "limit"(value: integer)
get "cyanDescription"(): string
get "magentaDescription"(): string
get "blackDescription"(): string
get "yellowDescription"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorIngredient$Type = ($ColorIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorIngredient_ = $ColorIngredient$Type;
}}
