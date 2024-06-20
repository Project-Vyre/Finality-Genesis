declare module "packages/architectspalette/core/crafting/$WarpingRecipe$WarpRecipeType" {
import {$WarpingRecipe, $WarpingRecipe$Type} from "packages/architectspalette/core/crafting/$WarpingRecipe"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $WarpingRecipe$WarpRecipeType implements $RecipeType<($WarpingRecipe)> {

constructor()

public "toString"(): string
public "find"<C extends $Container>(arg0: C, arg1: $Level$Type): $Optional<($WarpingRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<($WarpingRecipe)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<($WarpingRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpingRecipe$WarpRecipeType$Type = ($WarpingRecipe$WarpRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpingRecipe$WarpRecipeType_ = $WarpingRecipe$WarpRecipeType$Type;
}}
declare module "packages/architectspalette/core/registry/util/$APBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $APBlockItem extends $BlockItem {
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

public "setBurnTime"(arg0: integer): $APBlockItem
public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
set "burnTime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APBlockItem$Type = ($APBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APBlockItem_ = $APBlockItem$Type;
}}
declare module "packages/architectspalette/core/crafting/$WarpingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$WarpingRecipe, $WarpingRecipe$Type} from "packages/architectspalette/core/crafting/$WarpingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $WarpingRecipe$Serializer implements $RecipeSerializer<($WarpingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $WarpingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $WarpingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $WarpingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $WarpingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpingRecipe$Serializer$Type = ($WarpingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpingRecipe$Serializer_ = $WarpingRecipe$Serializer$Type;
}}
declare module "packages/architectspalette/core/registry/util/$BlockNode$BlockType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BlockNode$BlockType extends $Enum<($BlockNode$BlockType)> {
static readonly "BASE": $BlockNode$BlockType
static readonly "BRICKS": $BlockNode$BlockType
static readonly "CRACKED": $BlockNode$BlockType
static readonly "MOSSY": $BlockNode$BlockType
static readonly "TILES": $BlockNode$BlockType
static readonly "CHISELED": $BlockNode$BlockType
static readonly "POLISHED": $BlockNode$BlockType
static readonly "PILLAR": $BlockNode$BlockType
static readonly "NUB": $BlockNode$BlockType
static readonly "SLAB": $BlockNode$BlockType
static readonly "VERTICAL_SLAB": $BlockNode$BlockType
static readonly "STAIRS": $BlockNode$BlockType
static readonly "WALL": $BlockNode$BlockType
static readonly "FENCE": $BlockNode$BlockType
static readonly "LAMP": $BlockNode$BlockType
static readonly "PLATING": $BlockNode$BlockType
static readonly "DARK": $BlockNode$BlockType
static readonly "SPECIAL": $BlockNode$BlockType


public static "values"(): ($BlockNode$BlockType)[]
public static "valueOf"(arg0: string): $BlockNode$BlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockNode$BlockType$Type = (("bricks") | ("plating") | ("mossy") | ("stairs") | ("lamp") | ("cracked") | ("slab") | ("polished") | ("special") | ("tiles") | ("pillar") | ("chiseled") | ("dark") | ("nub") | ("vertical_slab") | ("wall") | ("fence") | ("base")) | ($BlockNode$BlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockNode$BlockType_ = $BlockNode$BlockType$Type;
}}
declare module "packages/architectspalette/core/registry/util/$StoneBlockSet$SetComponent" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $StoneBlockSet$SetComponent extends $Enum<($StoneBlockSet$SetComponent)> {
static readonly "BLOCK": $StoneBlockSet$SetComponent
static readonly "SLAB": $StoneBlockSet$SetComponent
static readonly "VERTICAL_SLAB": $StoneBlockSet$SetComponent
static readonly "STAIRS": $StoneBlockSet$SetComponent
static readonly "WALL": $StoneBlockSet$SetComponent
static readonly "FENCE": $StoneBlockSet$SetComponent
static readonly "PILLAR": $StoneBlockSet$SetComponent
static readonly "NUB": $StoneBlockSet$SetComponent
readonly "tab": $ResourceKey<($CreativeModeTab)>
readonly "nameGenerator": $Function<(string), (string)>


public "getName"(arg0: string): string
public static "get"(arg0: integer): $StoneBlockSet$SetComponent
public static "values"(): ($StoneBlockSet$SetComponent)[]
public static "valueOf"(arg0: string): $StoneBlockSet$SetComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoneBlockSet$SetComponent$Type = (("pillar") | ("stairs") | ("block") | ("nub") | ("vertical_slab") | ("wall") | ("fence") | ("slab")) | ($StoneBlockSet$SetComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoneBlockSet$SetComponent_ = $StoneBlockSet$SetComponent$Type;
}}
declare module "packages/architectspalette/core/crafting/$WarpingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$WarpingRecipe$WarpRecipeType, $WarpingRecipe$WarpRecipeType$Type} from "packages/architectspalette/core/crafting/$WarpingRecipe$WarpRecipeType"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WarpingRecipe$Serializer, $WarpingRecipe$Serializer$Type} from "packages/architectspalette/core/crafting/$WarpingRecipe$Serializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $WarpingRecipe implements $Recipe<($Container)> {
static readonly "SERIALIZER": $WarpingRecipe$Serializer
static "TYPE": $WarpingRecipe$WarpRecipeType

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type)

public "getResult"(): $ItemStack
public "getInput"(): $Ingredient
public "getDimension"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
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
get "result"(): $ItemStack
get "input"(): $Ingredient
get "dimension"(): $ResourceLocation
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
export type $WarpingRecipe$Type = ($WarpingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpingRecipe_ = $WarpingRecipe$Type;
}}
declare module "packages/architectspalette/core/registry/util/$IBlockSetBase" {
import {$StoneBlockSet$SetComponent, $StoneBlockSet$SetComponent$Type} from "packages/architectspalette/core/registry/util/$StoneBlockSet$SetComponent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockNode$BlockType, $BlockNode$BlockType$Type} from "packages/architectspalette/core/registry/util/$BlockNode$BlockType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IBlockSetBase {

 "getBlockForPart"(arg0: $StoneBlockSet$SetComponent$Type, arg1: $BlockBehaviour$Properties$Type, arg2: $Block$Type): $Block
 "getBlockForType"(arg0: $BlockNode$BlockType$Type, arg1: $BlockBehaviour$Properties$Type, arg2: $Block$Type): $Block
}

export namespace $IBlockSetBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockSetBase$Type = ($IBlockSetBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockSetBase_ = $IBlockSetBase$Type;
}}
