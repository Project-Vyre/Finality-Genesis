declare module "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtruderBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$ExtruderBlockEntity, $ExtruderBlockEntity$Type} from "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtruderBlockEntity"
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
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HorizontalKineticBlock, $HorizontalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$HorizontalKineticBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ExtruderBlock extends $HorizontalKineticBlock implements $IBE<($ExtruderBlockEntity)> {
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
public "getBlockEntityClass"(): $Class<($ExtruderBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ExtruderBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($ExtruderBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($ExtruderBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($ExtruderBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($ExtruderBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtruderBlock$Type = ($ExtruderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtruderBlock_ = $ExtruderBlock$Type;
}}
declare module "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingBehaviour" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$ExtrudingBehaviour$ExtrudingBehaviourSpecifics, $ExtrudingBehaviour$ExtrudingBehaviourSpecifics$Type} from "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingBehaviour$ExtrudingBehaviourSpecifics"
import {$BiomeCondition, $BiomeCondition$Type} from "packages/com/oierbravo/createmechanicalextruder/components/extruder/$BiomeCondition"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"

export class $ExtrudingBehaviour extends $BlockEntityBehaviour {
static readonly "CYCLE": integer
static readonly "TYPE": $BehaviourType<($ExtrudingBehaviour)>
 "specifics": $ExtrudingBehaviour$ExtrudingBehaviourSpecifics
 "prevRunningTicks": integer
 "runningTicks": integer
 "running": boolean
 "finished": boolean
 "headOffset": float
 "bonks": integer
 "blockEntity": $SmartBlockEntity

constructor<T extends ($SmartBlockEntity) & ($ExtrudingBehaviour$ExtrudingBehaviourSpecifics)>(arg0: T)

public "getRenderedPoleOffset"(arg0: float): float
public "start"(): void
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getType"(): $BehaviourType<(any)>
public "tick"(): void
public "makeCompactingParticleEffect"(arg0: $Vec3$Type, arg1: $ItemStack$Type): void
public "resetBonks"(): void
public "addBonk"(): integer
public "getBonks"(): integer
public "getBiomeCondition"(): $BiomeCondition
public "getRunningTickSpeed"(): integer
get "type"(): $BehaviourType<(any)>
get "bonks"(): integer
get "biomeCondition"(): $BiomeCondition
get "runningTickSpeed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtrudingBehaviour$Type = ($ExtrudingBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtrudingBehaviour_ = $ExtrudingBehaviour$Type;
}}
declare module "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingBehaviour$ExtrudingBehaviourSpecifics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtrudingBehaviour$ExtrudingBehaviourSpecifics {

 "getKineticSpeed"(): float
 "onExtrudingCompleted"(): void
 "tryProcess"(arg0: boolean): boolean
}

export namespace $ExtrudingBehaviour$ExtrudingBehaviourSpecifics {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtrudingBehaviour$ExtrudingBehaviourSpecifics$Type = ($ExtrudingBehaviour$ExtrudingBehaviourSpecifics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtrudingBehaviour$ExtrudingBehaviourSpecifics_ = $ExtrudingBehaviour$ExtrudingBehaviourSpecifics$Type;
}}
declare module "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingRecipe" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ExtrudingRecipeBuilder$ExtrudingRecipeParams, $ExtrudingRecipeBuilder$ExtrudingRecipeParams$Type} from "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingRecipeBuilder$ExtrudingRecipeParams"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeTypeInfo, $IRecipeTypeInfo$Type} from "packages/com/simibubi/create/foundation/recipe/$IRecipeTypeInfo"
import {$ExtruderBlockEntity, $ExtruderBlockEntity$Type} from "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtruderBlockEntity"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ProcessingOutput, $ProcessingOutput$Type} from "packages/com/simibubi/create/content/processing/recipe/$ProcessingOutput"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ExtrudingRecipe implements $Recipe<($SimpleContainer)>, $IRecipeTypeInfo {
static "hasCatalyst": $Comparator<(any)>

constructor(arg0: $ExtrudingRecipeBuilder$ExtrudingRecipeParams$Type)

public "matches"(arg0: $SimpleContainer$Type, arg1: $Level$Type): boolean
public static "match"(arg0: $ExtruderBlockEntity$Type, arg1: $ExtrudingRecipe$Type): boolean
public "getResult"(): $ProcessingOutput
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $SimpleContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getFluidIngredients"(): $List<($FluidIngredient)>
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public static "getAllIngredientsStringList"(arg0: $ExtrudingRecipe$Type): $List<(string)>
public "getCatalyst"(): $ItemStack
public "getResultItem"(): $ItemStack
public "getRequiredBonks"(): integer
public "getItemIngredients"(): $List<($Ingredient)>
public "hasCatalyst"(): boolean
public static "matchOLD"(arg0: $ExtruderBlockEntity$Type, arg1: $ExtrudingRecipe$Type): boolean
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $SimpleContainer$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getType"<T extends $RecipeType<(any)>>(): T
public "getSerializer"<T extends $RecipeSerializer<(any)>>(): T
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
get "result"(): $ProcessingOutput
get "fluidIngredients"(): $List<($FluidIngredient)>
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "catalyst"(): $ItemStack
get "resultItem"(): $ItemStack
get "requiredBonks"(): integer
get "itemIngredients"(): $List<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "special"(): boolean
get "id"(): $ResourceLocation
get "type"(): T
get "serializer"(): T
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
export type $ExtrudingRecipe$Type = ($ExtrudingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtrudingRecipe_ = $ExtrudingRecipe$Type;
}}
declare module "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ExtrudingRecipe, $ExtrudingRecipe$Type} from "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ExtrudingRecipe$Serializer implements $RecipeSerializer<($ExtrudingRecipe)> {
static readonly "INSTANCE": $ExtrudingRecipe$Serializer
static readonly "ID": $ResourceLocation

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ExtrudingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ExtrudingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ExtrudingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ExtrudingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtrudingRecipe$Serializer$Type = ($ExtrudingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtrudingRecipe$Serializer_ = $ExtrudingRecipe$Serializer$Type;
}}
declare module "packages/com/oierbravo/createmechanicalextruder/compat/kubejs/$ExtrudingRecipeSchema$ExtrudingRecipe" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ExtrudingRecipeSchema$ExtrudingRecipe extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "withCatalyst"(arg0: $InputItem$Type): $RecipeJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtrudingRecipeSchema$ExtrudingRecipe$Type = ($ExtrudingRecipeSchema$ExtrudingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtrudingRecipeSchema$ExtrudingRecipe_ = $ExtrudingRecipeSchema$ExtrudingRecipe$Type;
}}
declare module "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingRecipeBuilder$ExtrudingRecipeParams" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ExtrudingRecipeBuilder$ExtrudingRecipeParams {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtrudingRecipeBuilder$ExtrudingRecipeParams$Type = ($ExtrudingRecipeBuilder$ExtrudingRecipeParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtrudingRecipeBuilder$ExtrudingRecipeParams_ = $ExtrudingRecipeBuilder$ExtrudingRecipeParams$Type;
}}
declare module "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtruderBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ExtrudingBehaviour, $ExtrudingBehaviour$Type} from "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingBehaviour"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilteringBehaviour, $FilteringBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/filtering/$FilteringBehaviour"
import {$ExtrudingBehaviour$ExtrudingBehaviourSpecifics, $ExtrudingBehaviour$ExtrudingBehaviourSpecifics$Type} from "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingBehaviour$ExtrudingBehaviourSpecifics"
import {$ExtrudingRecipe, $ExtrudingRecipe$Type} from "packages/com/oierbravo/createmechanicalextruder/components/extruder/$ExtrudingRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"

export class $ExtruderBlockEntity extends $KineticBlockEntity implements $ExtrudingBehaviour$ExtrudingBehaviourSpecifics {
 "outputInv": $ItemStackHandler
 "capability": $LazyOptional<($IItemHandler)>
 "timer": integer
 "extrudingBehaviour": $ExtrudingBehaviour
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getFilter"(): $FilteringBehaviour
public "invalidate"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getKineticSpeed"(): float
public "getRecipe"(): $Optional<($ExtrudingRecipe)>
public "getItemStacks"(): $NonNullList<($ItemStack)>
public "getFluidIngredients"(): $NonNullList<($FluidIngredient)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getAllIngredientsStringList"(): $List<(string)>
public "onExtrudingCompleted"(): void
public "getExtrudingBehaviour"(): $ExtrudingBehaviour
public "tryProcess"(arg0: boolean): boolean
public "getCatalystItem"(): $Item
public "getFluidStacks"(): $NonNullList<($FluidStack)>
public "getProcessingSpeed"(): integer
public "hasIngredient"(arg0: $FluidIngredient$Type): boolean
public "hasIngredient"(arg0: $Ingredient$Type): boolean
public "getItemIngredients"(): $NonNullList<($Ingredient)>
public "getLeftBlock"(): $Block
get "filter"(): $FilteringBehaviour
get "kineticSpeed"(): float
get "recipe"(): $Optional<($ExtrudingRecipe)>
get "itemStacks"(): $NonNullList<($ItemStack)>
get "fluidIngredients"(): $NonNullList<($FluidIngredient)>
get "allIngredientsStringList"(): $List<(string)>
get "extrudingBehaviour"(): $ExtrudingBehaviour
get "catalystItem"(): $Item
get "fluidStacks"(): $NonNullList<($FluidStack)>
get "processingSpeed"(): integer
get "itemIngredients"(): $NonNullList<($Ingredient)>
get "leftBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtruderBlockEntity$Type = ($ExtruderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtruderBlockEntity_ = $ExtruderBlockEntity$Type;
}}
declare module "packages/com/oierbravo/createmechanicalextruder/components/extruder/$BiomeCondition" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $BiomeCondition {
static readonly "EMPTY": $BiomeCondition

constructor()

public "toString"(): string
public "test"(arg0: $Biome$Type, arg1: $LevelAccessor$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $BiomeCondition
public static "fromString"(arg0: string): $BiomeCondition
public static "deserialize"(arg0: $JsonElement$Type): $BiomeCondition
public "serialize"(): $JsonObject
public static "getKeyOrThrow"(arg0: $Biome$Type): $ResourceLocation
public static "getKeyOrThrow"<V>(arg0: $IForgeRegistry$Type<(V)>, arg1: V): $ResourceLocation
public static "fromTag"(arg0: $TagKey$Type<($Biome$Type)>): $BiomeCondition
public static "fromBiome"(arg0: $Biome$Type): $BiomeCondition
public static "isBiomeCondition"(arg0: $JsonElement$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeCondition$Type = ($BiomeCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeCondition_ = $BiomeCondition$Type;
}}
