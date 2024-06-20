declare module "packages/snownee/lychee/block_exploding/$BlockExplodingContext" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ActionRuntime, $ActionRuntime$Type} from "packages/snownee/lychee/core/$ActionRuntime"
import {$ItemHolderCollection, $ItemHolderCollection$Type} from "packages/snownee/lychee/core/input/$ItemHolderCollection"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export class $BlockExplodingContext extends $LycheeContext {
 "runtime": $ActionRuntime
 "itemHolders": $ItemHolderCollection
 "json": $JsonObject


public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExplodingContext$Type = ($BlockExplodingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExplodingContext_ = $BlockExplodingContext$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$ILycheeRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Reference, $Reference$Type} from "packages/snownee/lychee/core/$Reference"
import {$ILycheeRecipe$NBTPatchContext, $ILycheeRecipe$NBTPatchContext$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe$NBTPatchContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$ContextualHolder, $ContextualHolder$Type} from "packages/snownee/lychee/core/contextual/$ContextualHolder"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ILycheeRecipe<C extends $LycheeContext> {

 "getComment"(): string
 "getBlockInputs"(): $List<($BlockPredicate)>
 "getBlockOutputs"(): $List<($BlockPredicate)>
 "getAllActions"(): $Stream<($PostAction)>
 "getContextualHolder"(): $ContextualHolder
 "showingActionsCount"(): integer
 "applyPostActions"(arg0: $LycheeContext$Type, arg1: integer): void
 "lychee$getId"(): $ResourceLocation
 "showInRecipeViewer"(): boolean
 "getPostActions"(): $Stream<($PostAction)>
 "getActionGroups"(): $Map<($JsonPointer), ($List<($PostAction)>)>
 "getItemIndexes"(arg0: $JsonPointer$Type): $IntList
 "getItemIndexes"(arg0: $Reference$Type): $IntList
 "isActionPath"(arg0: $JsonPointer$Type): boolean
 "defaultItemPointer"(): $JsonPointer
}

export namespace $ILycheeRecipe {
const ITEM_IN: $JsonPointer
const ITEM_OUT: $JsonPointer
const RESULT: $JsonPointer
const POST: $JsonPointer
const patchContexts: $Map<($ResourceLocation), ($ILycheeRecipe$NBTPatchContext)>
function filterHidden(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
function processActionGroup(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
function processActions(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILycheeRecipe$Type<C> = ($ILycheeRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILycheeRecipe_<C> = $ILycheeRecipe$Type<(C)>;
}}
declare module "packages/snownee/lychee/random_block_ticking/$RandomBlockTickingRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ChanceRecipe, $ChanceRecipe$Type} from "packages/snownee/lychee/core/recipe/$ChanceRecipe"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$BlockKeyRecipe, $BlockKeyRecipe$Type} from "packages/snownee/lychee/core/recipe/$BlockKeyRecipe"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $RandomBlockTickingRecipe extends $LycheeRecipe<($LycheeContext)> implements $BlockKeyRecipe<($RandomBlockTickingRecipe)>, $ChanceRecipe {
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "compareTo"(arg0: $RandomBlockTickingRecipe$Type): integer
public "matches"(arg0: $LycheeContext$Type, arg1: $Level$Type): boolean
public "getType"(): $LycheeRecipeType<(any), (any)>
public "getBlock"(): $BlockPredicate
public "getSerializer"(): $LycheeRecipe$Serializer<(any)>
public "getChance"(): float
public "setChance"(arg0: float): void
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
get "type"(): $LycheeRecipeType<(any), (any)>
get "block"(): $BlockPredicate
get "serializer"(): $LycheeRecipe$Serializer<(any)>
get "chance"(): float
set "chance"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomBlockTickingRecipe$Type = ($RandomBlockTickingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomBlockTickingRecipe_ = $RandomBlockTickingRecipe$Type;
}}
declare module "packages/snownee/lychee/mixin/$ShapedRecipeAccess" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export interface $ShapedRecipeAccess {

 "getResult"(): $ItemStack
 "callMatches"(arg0: $CraftingContainer$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
}

export namespace $ShapedRecipeAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeAccess$Type = ($ShapedRecipeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRecipeAccess_ = $ShapedRecipeAccess$Type;
}}
declare module "packages/snownee/lychee/mixin/$IntsAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntsAccess {

}

export namespace $IntsAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntsAccess$Type = ($IntsAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntsAccess_ = $IntsAccess$Type;
}}
declare module "packages/snownee/lychee/core/$LycheeContext$Builder" {
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$LootContextParamSet, $LootContextParamSet$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LycheeContext$Builder<C extends $LycheeContext> {

constructor(arg0: $Level$Type)

public "create"(arg0: $LootContextParamSet$Type): C
public "getParameter"<T>(arg0: $LootContextParam$Type<(T)>): T
public "setParams"(arg0: $Map$Type<($LootContextParam$Type<(any)>), (any)>): void
public "withRandom"(arg0: $RandomSource$Type): $LycheeContext$Builder<(C)>
public "withParameter"<T>(arg0: $LootContextParam$Type<(T)>, arg1: T): $LycheeContext$Builder<(C)>
public "withOptionalParameter"<T>(arg0: $LootContextParam$Type<(T)>, arg1: T): $LycheeContext$Builder<(C)>
public "getOptionalParameter"<T>(arg0: $LootContextParam$Type<(T)>): T
public "withOptionalRandomSeed"(arg0: long): $LycheeContext$Builder<(C)>
public "withOptionalRandomSeed"(arg0: long, arg1: $RandomSource$Type): $LycheeContext$Builder<(C)>
set "params"(value: $Map$Type<($LootContextParam$Type<(any)>), (any)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LycheeContext$Builder$Type<C> = ($LycheeContext$Builder<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LycheeContext$Builder_<C> = $LycheeContext$Builder$Type<(C)>;
}}
declare module "packages/snownee/lychee/core/$ActionRuntime" {
import {$LinkedList, $LinkedList$Type} from "packages/java/util/$LinkedList"
import {$Delay$LycheeMarker, $Delay$LycheeMarker$Type} from "packages/snownee/lychee/core/post/$Delay$LycheeMarker"
import {$Job, $Job$Type} from "packages/snownee/lychee/core/$Job"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$ActionRuntime$State, $ActionRuntime$State$Type} from "packages/snownee/lychee/core/$ActionRuntime$State"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export class $ActionRuntime {
 "doDefault": boolean
 "state": $ActionRuntime$State
readonly "jobs": $LinkedList<($Job)>
 "marker": $Delay$LycheeMarker

constructor()

public "run"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionRuntime$Type = ($ActionRuntime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionRuntime_ = $ActionRuntime$Type;
}}
declare module "packages/snownee/lychee/core/$ActionRuntime$State" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ActionRuntime$State extends $Enum<($ActionRuntime$State)> {
static readonly "RUNNING": $ActionRuntime$State
static readonly "PAUSED": $ActionRuntime$State
static readonly "STOPPED": $ActionRuntime$State


public static "values"(): ($ActionRuntime$State)[]
public static "valueOf"(arg0: string): $ActionRuntime$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionRuntime$State$Type = (("running") | ("paused") | ("stopped")) | ($ActionRuntime$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionRuntime$State_ = $ActionRuntime$State$Type;
}}
declare module "packages/snownee/lychee/interaction/$BlockInteractingRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$ItemAndBlockRecipe, $ItemAndBlockRecipe$Type} from "packages/snownee/lychee/core/recipe/$ItemAndBlockRecipe"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $BlockInteractingRecipe extends $ItemAndBlockRecipe<($LycheeContext)> {
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "matches"(arg0: $LycheeContext$Type, arg1: $Level$Type): boolean
public "getType"(): $LycheeRecipeType<(any), (any)>
public "getSerializer"(): $LycheeRecipe$Serializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
get "type"(): $LycheeRecipeType<(any), (any)>
get "serializer"(): $LycheeRecipe$Serializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInteractingRecipe$Type = ($BlockInteractingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInteractingRecipe_ = $BlockInteractingRecipe$Type;
}}
declare module "packages/snownee/lychee/crafting/$ShapedCraftingRecipe" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Cache, $Cache$Type} from "packages/com/google/common/cache/$Cache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$Reference, $Reference$Type} from "packages/snownee/lychee/core/$Reference"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$Pair, $Pair$Type} from "packages/snownee/lychee/util/$Pair"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CraftingContext, $CraftingContext$Type} from "packages/snownee/lychee/crafting/$CraftingContext"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$ContextualHolder, $ContextualHolder$Type} from "packages/snownee/lychee/core/contextual/$ContextualHolder"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShapedCraftingRecipe extends $ShapedRecipe implements $ILycheeRecipe<($CraftingContext)> {
static readonly "CONTAINER_WORLD_LOCATOR": $Cache<($Class<(any)>), ($Function<($CraftingContainer), ($Pair<($Vec3), ($Player)>)>)>
static readonly "MENU_WORLD_LOCATOR": $Cache<($Class<(any)>), ($Function<($AbstractContainerMenu), ($Pair<($Vec3), ($Player)>)>)>
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "pattern": string
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean)

public "getComment"(): string
public "getAllActions"(): $Stream<($PostAction)>
public "getContextualHolder"(): $ContextualHolder
public "addAssemblingAction"(arg0: $PostAction$Type): void
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "showInRecipeViewer"(): boolean
public "getPostActions"(): $Stream<($PostAction)>
public "getActionGroups"(): $Map<($JsonPointer), ($List<($PostAction)>)>
public "getItemIndexes"(arg0: $JsonPointer$Type): $IntList
public "isActionPath"(arg0: $JsonPointer$Type): boolean
public "defaultItemPointer"(): $JsonPointer
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "addPostAction"(arg0: $PostAction$Type): void
public static "makeContext"(arg0: $CraftingContainer$Type, arg1: $Level$Type, arg2: integer, arg3: integer, arg4: boolean): $CraftingContext
public "getBlockInputs"(): $List<($BlockPredicate)>
public "getBlockOutputs"(): $List<($BlockPredicate)>
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public "showingActionsCount"(): integer
public "applyPostActions"(arg0: $LycheeContext$Type, arg1: integer): void
public "lychee$getId"(): $ResourceLocation
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
public "getItemIndexes"(arg0: $Reference$Type): $IntList
get "comment"(): string
get "allActions"(): $Stream<($PostAction)>
get "contextualHolder"(): $ContextualHolder
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "postActions"(): $Stream<($PostAction)>
get "actionGroups"(): $Map<($JsonPointer), ($List<($PostAction)>)>
get "blockInputs"(): $List<($BlockPredicate)>
get "blockOutputs"(): $List<($BlockPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedCraftingRecipe$Type = ($ShapedCraftingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedCraftingRecipe_ = $ShapedCraftingRecipe$Type;
}}
declare module "packages/snownee/lychee/core/$EmptyContainer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export class $EmptyContainer implements $Container {

constructor()

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
export type $EmptyContainer$Type = ($EmptyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyContainer_ = $EmptyContainer$Type;
}}
declare module "packages/snownee/lychee/random_block_ticking/$RandomBlockTickingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$RandomBlockTickingRecipe, $RandomBlockTickingRecipe$Type} from "packages/snownee/lychee/random_block_ticking/$RandomBlockTickingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RandomBlockTickingRecipe$Serializer extends $LycheeRecipe$Serializer<($RandomBlockTickingRecipe)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor()

public "fromJson"(arg0: $RandomBlockTickingRecipe$Type, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: $RandomBlockTickingRecipe$Type): void
public "fromNetwork"(arg0: $RandomBlockTickingRecipe$Type, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomBlockTickingRecipe$Serializer$Type = ($RandomBlockTickingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomBlockTickingRecipe$Serializer_ = $RandomBlockTickingRecipe$Serializer$Type;
}}
declare module "packages/snownee/lychee/anvil_crafting/$AnvilCraftingRecipe" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$AnvilContext, $AnvilContext$Type} from "packages/snownee/lychee/anvil_crafting/$AnvilContext"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnvilCraftingRecipe extends $LycheeRecipe<($AnvilContext)> implements $Comparable<($AnvilCraftingRecipe)> {
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "compareTo"(arg0: $AnvilCraftingRecipe$Type): integer
public "matches"(arg0: $AnvilContext$Type, arg1: $Level$Type): boolean
public "getType"(): $LycheeRecipeType<(any), (any)>
public "getAllActions"(): $Stream<($PostAction)>
public "getRight"(): $Ingredient
public "getLeft"(): $Ingredient
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "addAssemblingAction"(arg0: $PostAction$Type): void
public "getSerializer"(): $LycheeRecipe$Serializer<(any)>
public "assemble"(arg0: $AnvilContext$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getMaterialCost"(): integer
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(): $ItemStack
public "getActionGroups"(): $Map<($JsonPointer), ($List<($PostAction)>)>
public "getItemIndexes"(arg0: $JsonPointer$Type): $IntList
public "isActionPath"(arg0: $JsonPointer$Type): boolean
public "defaultItemPointer"(): $JsonPointer
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
get "type"(): $LycheeRecipeType<(any), (any)>
get "allActions"(): $Stream<($PostAction)>
get "right"(): $Ingredient
get "left"(): $Ingredient
get "serializer"(): $LycheeRecipe$Serializer<(any)>
get "materialCost"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "resultItem"(): $ItemStack
get "actionGroups"(): $Map<($JsonPointer), ($List<($PostAction)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilCraftingRecipe$Type = ($AnvilCraftingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilCraftingRecipe_ = $AnvilCraftingRecipe$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$ILycheeRecipe$NBTPatchContext" {
import {$Reference, $Reference$Type} from "packages/snownee/lychee/core/$Reference"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IntCollection, $IntCollection$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntCollection"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Object2IntMap, $Object2IntMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"

export class $ILycheeRecipe$NBTPatchContext extends $Record {

constructor(template: $JsonObject$Type, usedIndexes: $IntCollection$Type, splits: $Object2IntMap$Type<($JsonPointer$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "template"(): $JsonObject
public "splits"(): $Object2IntMap<($JsonPointer)>
public "convertPath"(arg0: $JsonPointer$Type, arg1: $BiFunction$Type<(string), (string), (string)>): $JsonPointer
public "usedIndexes"(): $IntCollection
public "countTargets"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $Reference$Type): integer
public "countTargets"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILycheeRecipe$NBTPatchContext$Type = ($ILycheeRecipe$NBTPatchContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILycheeRecipe$NBTPatchContext_ = $ILycheeRecipe$NBTPatchContext$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$LycheeRecipe" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Reference, $Reference$Type} from "packages/snownee/lychee/core/$Reference"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$ContextualHolder, $ContextualHolder$Type} from "packages/snownee/lychee/core/contextual/$ContextualHolder"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LycheeRecipe<C extends $LycheeContext> extends $ContextualHolder implements $ILycheeRecipe<(C)>, $Recipe<(C)> {
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "getType"(): $LycheeRecipeType<(any), (any)>
public "getComment"(): string
public "getContextualHolder"(): $ContextualHolder
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $LycheeRecipe$Serializer<(any)>
public "assemble"(arg0: C, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getRandomRepeats"(arg0: integer, arg1: C): integer
public "getMaxRepeats"(): $MinMaxBounds$Ints
public "tickOrApply"(arg0: C): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showInRecipeViewer"(): boolean
public "getPostActions"(): $Stream<($PostAction)>
public "getActionGroups"(): $Map<($JsonPointer), ($List<($PostAction)>)>
public "getItemIndexes"(arg0: $JsonPointer$Type): $IntList
public "addPostAction"(arg0: $PostAction$Type): void
public "getBlockInputs"(): $List<($BlockPredicate)>
public "getBlockOutputs"(): $List<($BlockPredicate)>
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public "getAllActions"(): $Stream<($PostAction)>
public "showingActionsCount"(): integer
public "applyPostActions"(arg0: $LycheeContext$Type, arg1: integer): void
public "lychee$getId"(): $ResourceLocation
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
public "getItemIndexes"(arg0: $Reference$Type): $IntList
public "isActionPath"(arg0: $JsonPointer$Type): boolean
public "defaultItemPointer"(): $JsonPointer
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "matches"(arg0: C, arg1: $Level$Type): boolean
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
get "type"(): $LycheeRecipeType<(any), (any)>
get "comment"(): string
get "contextualHolder"(): $ContextualHolder
get "serializer"(): $LycheeRecipe$Serializer<(any)>
get "id"(): $ResourceLocation
get "maxRepeats"(): $MinMaxBounds$Ints
get "postActions"(): $Stream<($PostAction)>
get "actionGroups"(): $Map<($JsonPointer), ($List<($PostAction)>)>
get "blockInputs"(): $List<($BlockPredicate)>
get "blockOutputs"(): $List<($BlockPredicate)>
get "allActions"(): $Stream<($PostAction)>
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
export type $LycheeRecipe$Type<C> = ($LycheeRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LycheeRecipe_<C> = $LycheeRecipe$Type<(C)>;
}}
declare module "packages/snownee/lychee/block_crushing/$BlockCrushingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockCrushingRecipe, $BlockCrushingRecipe$Type} from "packages/snownee/lychee/block_crushing/$BlockCrushingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BlockCrushingRecipe$Serializer extends $LycheeRecipe$Serializer<($BlockCrushingRecipe)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor()

public "fromJson"(arg0: $BlockCrushingRecipe$Type, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: $BlockCrushingRecipe$Type): void
public "fromNetwork"(arg0: $BlockCrushingRecipe$Type, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCrushingRecipe$Serializer$Type = ($BlockCrushingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCrushingRecipe$Serializer_ = $BlockCrushingRecipe$Serializer$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$LycheeCounter" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $LycheeCounter {

 "lychee$getRecipeId"(): $ResourceLocation
 "lychee$setRecipeId"(arg0: $ResourceLocation$Type): void
 "lychee$setCount"(arg0: integer): void
 "lychee$update"(arg0: $ResourceLocation$Type, arg1: $Recipe$Type<(any)>): void
 "lychee$getCount"(): integer
}

export namespace $LycheeCounter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LycheeCounter$Type = ($LycheeCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LycheeCounter_ = $LycheeCounter$Type;
}}
declare module "packages/snownee/lychee/core/$Job" {
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $Job {
 "action": $PostAction
 "times": integer

constructor(arg0: $PostAction$Type, arg1: integer)

public "apply"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Job$Type = ($Job);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Job_ = $Job$Type;
}}
declare module "packages/snownee/lychee/core/$ItemShapelessContext" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ActionRuntime, $ActionRuntime$Type} from "packages/snownee/lychee/core/$ActionRuntime"
import {$ItemHolderCollection, $ItemHolderCollection$Type} from "packages/snownee/lychee/core/input/$ItemHolderCollection"
import {$RecipeMatcher, $RecipeMatcher$Type} from "packages/snownee/lychee/util/$RecipeMatcher"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $ItemShapelessContext extends $LycheeContext {
readonly "itemEntities": $List<($ItemEntity)>
 "filteredItems": $List<($ItemEntity)>
 "totalItems": integer
 "runtime": $ActionRuntime
 "itemHolders": $ItemHolderCollection
 "json": $JsonObject


public "setMatch"(arg0: $RecipeMatcher$Type<($ItemStack$Type)>): void
public "getMatch"(): $RecipeMatcher<($ItemStack)>
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
set "match"(value: $RecipeMatcher$Type<($ItemStack$Type)>)
get "match"(): $RecipeMatcher<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShapelessContext$Type = ($ItemShapelessContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShapelessContext_ = $ItemShapelessContext$Type;
}}
declare module "packages/snownee/lychee/mixin/$ChunkMapAccess" {
import {$ChunkHolder, $ChunkHolder$Type} from "packages/net/minecraft/server/level/$ChunkHolder"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $ChunkMapAccess {

 "callGetChunks"(): $Iterable<($ChunkHolder)>

(): $Iterable<($ChunkHolder)>
}

export namespace $ChunkMapAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMapAccess$Type = ($ChunkMapAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkMapAccess_ = $ChunkMapAccess$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$ChanceRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChanceRecipe {

 "getChance"(): float
 "setChance"(arg0: float): void
}

export namespace $ChanceRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChanceRecipe$Type = ($ChanceRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChanceRecipe_ = $ChanceRecipe$Type;
}}
declare module "packages/snownee/lychee/core/post/$CustomAction" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$ILycheeRecipe$NBTPatchContext, $ILycheeRecipe$NBTPatchContext$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe$NBTPatchContext"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$CustomAction$Apply, $CustomAction$Apply$Type} from "packages/snownee/lychee/core/post/$CustomAction$Apply"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"
import {$PostActionType, $PostActionType$Type} from "packages/snownee/lychee/core/post/$PostActionType"

export class $CustomAction extends $PostAction {
readonly "data": $JsonObject
 "canRepeat": boolean
 "applyFunc": $CustomAction$Apply
 "path": string

constructor(arg0: $JsonObject$Type)

public "validate"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $ILycheeRecipe$NBTPatchContext$Type): void
public "getType"(): $PostActionType<(any)>
public "canRepeat"(): boolean
public "doApply"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: integer): void
public "preventSync"(): boolean
get "type"(): $PostActionType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomAction$Type = ($CustomAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomAction_ = $CustomAction$Type;
}}
declare module "packages/snownee/lychee/core/$ItemShapelessContext$Builder" {
import {$ItemShapelessContext, $ItemShapelessContext$Type} from "packages/snownee/lychee/core/$ItemShapelessContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LycheeContext$Builder, $LycheeContext$Builder$Type} from "packages/snownee/lychee/core/$LycheeContext$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$LootContextParamSet, $LootContextParamSet$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"

export class $ItemShapelessContext$Builder<C extends $ItemShapelessContext> extends $LycheeContext$Builder<(C)> {
readonly "itemEntities": $List<($ItemEntity)>

constructor(arg0: $Level$Type, arg1: $List$Type<($ItemEntity$Type)>)

public "create"(arg0: $LootContextParamSet$Type): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShapelessContext$Builder$Type<C> = ($ItemShapelessContext$Builder<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShapelessContext$Builder_<C> = $ItemShapelessContext$Builder$Type<(C)>;
}}
declare module "packages/snownee/lychee/mixin/$BlockPredicateAccess" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$Type} from "packages/net/minecraft/advancements/critereon/$StatePropertiesPredicate"
import {$NbtPredicate, $NbtPredicate$Type} from "packages/net/minecraft/advancements/critereon/$NbtPredicate"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockPredicateAccess {

 "getProperties"(): $StatePropertiesPredicate
 "getTag"(): $TagKey<($Block)>
 "getNbt"(): $NbtPredicate
 "getBlocks"(): $Set<($Block)>
}

export namespace $BlockPredicateAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPredicateAccess$Type = ($BlockPredicateAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPredicateAccess_ = $BlockPredicateAccess$Type;
}}
declare module "packages/snownee/lychee/mixin/$ItemEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityAccess {

 "setHealth"(arg0: integer): void

(arg0: integer): void
}

export namespace $ItemEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityAccess$Type = ($ItemEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityAccess_ = $ItemEntityAccess$Type;
}}
declare module "packages/snownee/lychee/core/recipe/type/$BlockKeyRecipeType" {
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootContextParamSet, $LootContextParamSet$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockKeyRecipe, $BlockKeyRecipe$Type} from "packages/snownee/lychee/core/recipe/$BlockKeyRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LycheeContext$Builder, $LycheeContext$Builder$Type} from "packages/snownee/lychee/core/$LycheeContext$Builder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Pair, $Pair$Type} from "packages/snownee/lychee/util/$Pair"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockKeyRecipeType<C extends $LycheeContext, T extends ($LycheeRecipe<(C)>) & ($BlockKeyRecipe<(any)>)> extends $LycheeRecipeType<(C), (T)> {
 "extractChance": boolean
readonly "id": $ResourceLocation
 "categoryId": $ResourceLocation
readonly "clazz": $Class<(any)>
readonly "contextParamSet": $LootContextParamSet
 "requiresClient": boolean
 "compactInputs": boolean
 "canPreventConsumeInputs": boolean
 "hasStandaloneCategory": boolean
static readonly "DEFAULT_PREVENT_TIP": $Component

constructor(arg0: string, arg1: $Class$Type<(T)>, arg2: $LootContextParamSet$Type)

public "process"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Vec3$Type, arg4: $LycheeContext$Builder$Type<(C)>): $Optional<(T)>
public "process"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $Supplier$Type<(C)>): $Pair<(C), (T)>
public "has"(arg0: $Block$Type): boolean
public "has"(arg0: $BlockState$Type): boolean
public "buildCache"(): void
public "blockKeysToItems"(): $List<($ItemStack)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockKeyRecipeType$Type<C, T> = ($BlockKeyRecipeType<(C), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockKeyRecipeType_<C, T> = $BlockKeyRecipeType$Type<(C), (T)>;
}}
declare module "packages/snownee/lychee/core/contextual/$ContextualConditionType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ContextualCondition, $ContextualCondition$Type} from "packages/snownee/lychee/core/contextual/$ContextualCondition"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ContextualConditionType<T extends $ContextualCondition> {

constructor()

public "toJson"(arg0: T, arg1: $JsonObject$Type): void
public "fromJson"(arg0: $JsonObject$Type): T
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: T, arg1: $FriendlyByteBuf$Type): void
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextualConditionType$Type<T> = ($ContextualConditionType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextualConditionType_<T> = $ContextualConditionType$Type<(T)>;
}}
declare module "packages/snownee/lychee/core/post/$CustomAction$Apply" {
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export interface $CustomAction$Apply {

 "apply"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: integer): void

(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: integer): void
}

export namespace $CustomAction$Apply {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomAction$Apply$Type = ($CustomAction$Apply);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomAction$Apply_ = $CustomAction$Apply$Type;
}}
declare module "packages/snownee/lychee/dripstone_dripping/$DripstoneRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ChanceRecipe, $ChanceRecipe$Type} from "packages/snownee/lychee/core/recipe/$ChanceRecipe"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$BlockKeyRecipe, $BlockKeyRecipe$Type} from "packages/snownee/lychee/core/recipe/$BlockKeyRecipe"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"
import {$DripstoneContext, $DripstoneContext$Type} from "packages/snownee/lychee/dripstone_dripping/$DripstoneContext"

export class $DripstoneRecipe extends $LycheeRecipe<($DripstoneContext)> implements $BlockKeyRecipe<($DripstoneRecipe)>, $ChanceRecipe {
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "compareTo"(arg0: $DripstoneRecipe$Type): integer
public "matches"(arg0: $DripstoneContext$Type, arg1: $Level$Type): boolean
public static "on"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): boolean
public "getType"(): $LycheeRecipeType<(any), (any)>
public "getBlock"(): $BlockPredicate
public "getSourceBlock"(): $BlockPredicate
public "getBlockInputs"(): $List<($BlockPredicate)>
public static "safeTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean
public "applyPostActions"(arg0: $LycheeContext$Type, arg1: integer): void
public "getSerializer"(): $LycheeRecipe$Serializer<(any)>
public "getChance"(): float
public static "getBlockAboveStalactite"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "setChance"(arg0: float): void
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
get "type"(): $LycheeRecipeType<(any), (any)>
get "block"(): $BlockPredicate
get "sourceBlock"(): $BlockPredicate
get "blockInputs"(): $List<($BlockPredicate)>
get "serializer"(): $LycheeRecipe$Serializer<(any)>
get "chance"(): float
set "chance"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DripstoneRecipe$Type = ($DripstoneRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DripstoneRecipe_ = $DripstoneRecipe$Type;
}}
declare module "packages/snownee/lychee/util/json/$JsonPointer" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"

export class $JsonPointer {
readonly "tokens": $List<(string)>

constructor(arg0: $Collection$Type<(string)>)
constructor(arg0: string)

public "isSelfOrParentOf"(arg0: $List$Type<(string)>): boolean
public "parent"(): $JsonPointer
public "equals"(arg0: any): boolean
public "toString"(): string
public "append"(arg0: string): $JsonPointer
public "hashCode"(): integer
public "getInt"(arg0: integer): integer
public "size"(): integer
public "find"(arg0: $JsonElement$Type): $JsonElement
public "getString"(arg0: integer): string
public "isRoot"(): boolean
get "root"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonPointer$Type = ($JsonPointer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonPointer_ = $JsonPointer$Type;
}}
declare module "packages/snownee/lychee/core/contextual/$ContextualHolder" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ContextualCondition, $ContextualCondition$Type} from "packages/snownee/lychee/core/contextual/$ContextualCondition"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export class $ContextualHolder {

constructor()

public "getConditions"(): $List<($ContextualCondition)>
public "checkConditions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: integer): integer
public "getConditionTooltips"(arg0: $List$Type<($Component$Type)>, arg1: integer, arg2: $Level$Type, arg3: $Player$Type): void
public "showingConditionsCount"(): integer
public "rawConditionsToJson"(): $JsonElement
public "conditionsToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "conditionsFromNetwork"(arg0: $FriendlyByteBuf$Type): void
public "withCondition"(arg0: $ContextualCondition$Type): void
public "parseConditions"(arg0: $JsonElement$Type): void
public "isSecretCondition"(arg0: integer): boolean
get "conditions"(): $List<($ContextualCondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextualHolder$Type = ($ContextualHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextualHolder_ = $ContextualHolder$Type;
}}
declare module "packages/snownee/lychee/core/input/$ItemHolder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemHolder {

constructor()

public "get"(): $ItemStack
public "replace"(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>): $ItemHolder
public "split"(arg0: integer, arg1: $Consumer$Type<($ItemStack$Type)>): $ItemHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHolder$Type = ($ItemHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHolder_ = $ItemHolder$Type;
}}
declare module "packages/snownee/lychee/mixin/$NbtPredicateAccess" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $NbtPredicateAccess {

 "getTag"(): $CompoundTag

(): $CompoundTag
}

export namespace $NbtPredicateAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtPredicateAccess$Type = ($NbtPredicateAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtPredicateAccess_ = $NbtPredicateAccess$Type;
}}
declare module "packages/snownee/lychee/mixin/$GameRendererAccess" {
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"

export interface $GameRendererAccess {

 "callGetFov"(arg0: $Camera$Type, arg1: float, arg2: boolean): double

(arg0: $Camera$Type, arg1: float, arg2: boolean): double
}

export namespace $GameRendererAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccess$Type = ($GameRendererAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRendererAccess_ = $GameRendererAccess$Type;
}}
declare module "packages/snownee/lychee/item_inside/$ItemInsideRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$ItemInsideRecipeType$Cache, $ItemInsideRecipeType$Cache$Type} from "packages/snownee/lychee/item_inside/$ItemInsideRecipeType$Cache"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Object2FloatMap, $Object2FloatMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatMap"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemShapelessContext, $ItemShapelessContext$Type} from "packages/snownee/lychee/core/$ItemShapelessContext"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$BlockKeyRecipe, $BlockKeyRecipe$Type} from "packages/snownee/lychee/core/recipe/$BlockKeyRecipe"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$ItemShapelessRecipe, $ItemShapelessRecipe$Type} from "packages/snownee/lychee/core/recipe/$ItemShapelessRecipe"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $ItemInsideRecipe extends $ItemShapelessRecipe<($ItemInsideRecipe)> implements $BlockKeyRecipe<($ItemInsideRecipe)> {
static readonly "MAX_INGREDIENTS": integer
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "matches"(arg0: $ItemShapelessContext$Type, arg1: $Level$Type): boolean
public "getType"(): $LycheeRecipeType<(any), (any)>
public "getTime"(): integer
public "getBlock"(): $BlockPredicate
public "buildCache"(arg0: $Object2FloatMap$Type<($Item$Type)>, arg1: $List$Type<($ItemInsideRecipe$Type)>): $ItemInsideRecipeType$Cache
public "getSerializer"(): $LycheeRecipe$Serializer<(any)>
public "tickOrApply"(arg0: $ItemShapelessContext$Type): boolean
public "isSpecial"(): boolean
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
get "type"(): $LycheeRecipeType<(any), (any)>
get "time"(): integer
get "block"(): $BlockPredicate
get "serializer"(): $LycheeRecipe$Serializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInsideRecipe$Type = ($ItemInsideRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInsideRecipe_ = $ItemInsideRecipe$Type;
}}
declare module "packages/snownee/lychee/block_crushing/$BlockCrushingContext" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ItemShapelessContext, $ItemShapelessContext$Type} from "packages/snownee/lychee/core/$ItemShapelessContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ActionRuntime, $ActionRuntime$Type} from "packages/snownee/lychee/core/$ActionRuntime"
import {$ItemHolderCollection, $ItemHolderCollection$Type} from "packages/snownee/lychee/core/input/$ItemHolderCollection"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $BlockCrushingContext extends $ItemShapelessContext {
readonly "fallingBlock": $FallingBlockEntity
readonly "itemEntities": $List<($ItemEntity)>
 "filteredItems": $List<($ItemEntity)>
 "totalItems": integer
 "runtime": $ActionRuntime
 "itemHolders": $ItemHolderCollection
 "json": $JsonObject


public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCrushingContext$Type = ($BlockCrushingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCrushingContext_ = $BlockCrushingContext$Type;
}}
declare module "packages/snownee/lychee/random_block_ticking/$RandomBlockTickingRecipeType" {
import {$BlockKeyRecipeType, $BlockKeyRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$BlockKeyRecipeType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RandomBlockTickingRecipe, $RandomBlockTickingRecipe$Type} from "packages/snownee/lychee/random_block_ticking/$RandomBlockTickingRecipe"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootContextParamSet, $LootContextParamSet$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RandomBlockTickingRecipeType extends $BlockKeyRecipeType<($LycheeContext), ($RandomBlockTickingRecipe)> {
 "extractChance": boolean
readonly "id": $ResourceLocation
 "categoryId": $ResourceLocation
readonly "clazz": $Class<(any)>
readonly "contextParamSet": $LootContextParamSet
 "requiresClient": boolean
 "compactInputs": boolean
 "canPreventConsumeInputs": boolean
 "hasStandaloneCategory": boolean
static readonly "DEFAULT_PREVENT_TIP": $Component

constructor(arg0: string, arg1: $Class$Type<($RandomBlockTickingRecipe$Type)>, arg2: $LootContextParamSet$Type)

public "buildCache"(): void
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomBlockTickingRecipeType$Type = ($RandomBlockTickingRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomBlockTickingRecipeType_ = $RandomBlockTickingRecipeType$Type;
}}
declare module "packages/snownee/lychee/dripstone_dripping/$DripstoneRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DripstoneRecipe, $DripstoneRecipe$Type} from "packages/snownee/lychee/dripstone_dripping/$DripstoneRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DripstoneRecipe$Serializer extends $LycheeRecipe$Serializer<($DripstoneRecipe)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor()

public "fromJson"(arg0: $DripstoneRecipe$Type, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: $DripstoneRecipe$Type): void
public "fromNetwork"(arg0: $DripstoneRecipe$Type, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DripstoneRecipe$Serializer$Type = ($DripstoneRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DripstoneRecipe$Serializer_ = $DripstoneRecipe$Serializer$Type;
}}
declare module "packages/snownee/lychee/mixin/$LootParamsBuilderAccess" {
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $LootParamsBuilderAccess {

 "getParams"(): $Map<($LootContextParam<(any)>), (any)>

(): $Map<($LootContextParam<(any)>), (any)>
}

export namespace $LootParamsBuilderAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootParamsBuilderAccess$Type = ($LootParamsBuilderAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootParamsBuilderAccess_ = $LootParamsBuilderAccess$Type;
}}
declare module "packages/snownee/lychee/core/contextual/$CustomCondition$Test" {
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export interface $CustomCondition$Test {

 "test"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: integer): integer

(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: integer): integer
}

export namespace $CustomCondition$Test {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomCondition$Test$Type = ($CustomCondition$Test);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomCondition$Test_ = $CustomCondition$Test$Type;
}}
declare module "packages/snownee/lychee/crafting/$ShapedCraftingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapedCraftingRecipe, $ShapedCraftingRecipe$Type} from "packages/snownee/lychee/crafting/$ShapedCraftingRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedCraftingRecipe$Serializer implements $RecipeSerializer<($ShapedCraftingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedCraftingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedCraftingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedCraftingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedCraftingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedCraftingRecipe$Serializer$Type = ($ShapedCraftingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedCraftingRecipe$Serializer_ = $ShapedCraftingRecipe$Serializer$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$ItemAndBlockRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemAndBlockRecipe, $ItemAndBlockRecipe$Type} from "packages/snownee/lychee/core/recipe/$ItemAndBlockRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ItemAndBlockRecipe$Serializer<T extends $ItemAndBlockRecipe<(any)>> extends $LycheeRecipe$Serializer<(T)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor(arg0: $Function$Type<($ResourceLocation$Type), (T)>)

public "fromJson"(arg0: T, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: T, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAndBlockRecipe$Serializer$Type<T> = ($ItemAndBlockRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAndBlockRecipe$Serializer_<T> = $ItemAndBlockRecipe$Serializer$Type<(T)>;
}}
declare module "packages/snownee/lychee/mixin/$DoublesAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoublesAccess {

}

export namespace $DoublesAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoublesAccess$Type = ($DoublesAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoublesAccess_ = $DoublesAccess$Type;
}}
declare module "packages/snownee/lychee/core/contextual/$CustomCondition" {
import {$ContextualConditionType, $ContextualConditionType$Type} from "packages/snownee/lychee/core/contextual/$ContextualConditionType"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ContextualCondition, $ContextualCondition$Type} from "packages/snownee/lychee/core/contextual/$ContextualCondition"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CustomCondition$Test, $CustomCondition$Test$Type} from "packages/snownee/lychee/core/contextual/$CustomCondition$Test"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export class $CustomCondition implements $ContextualCondition {
readonly "data": $JsonObject
 "testFunc": $CustomCondition$Test
 "testInTooltipsFunc": $BiFunction<($Level), ($Player), ($InteractionResult)>

constructor(arg0: $JsonObject$Type)

public "test"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: integer): integer
public "getType"(): $ContextualConditionType<(any)>
public "getDescription"(arg0: boolean): $MutableComponent
public "testInTooltips"(arg0: $Level$Type, arg1: $Player$Type): $InteractionResult
public static "desc"(arg0: $List$Type<($Component$Type)>, arg1: $InteractionResult$Type, arg2: integer, arg3: $MutableComponent$Type): void
public static "parse"(arg0: $JsonObject$Type): $ContextualCondition
public "toJson"(): $JsonObject
public "makeDescriptionId"(arg0: boolean): string
public "showingCount"(): integer
public "appendTooltips"(arg0: $List$Type<($Component$Type)>, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: boolean): void
get "type"(): $ContextualConditionType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomCondition$Type = ($CustomCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomCondition_ = $CustomCondition$Type;
}}
declare module "packages/snownee/lychee/item_burning/$ItemBurningRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $ItemBurningRecipe extends $LycheeRecipe<($LycheeContext)> {
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "matches"(arg0: $LycheeContext$Type, arg1: $Level$Type): boolean
public static "on"(arg0: $ItemEntity$Type): void
public "getType"(): $LycheeRecipeType<(any), (any)>
public "getInput"(): $Ingredient
public "getSerializer"(): $LycheeRecipe$Serializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
get "type"(): $LycheeRecipeType<(any), (any)>
get "input"(): $Ingredient
get "serializer"(): $LycheeRecipe$Serializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBurningRecipe$Type = ($ItemBurningRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBurningRecipe_ = $ItemBurningRecipe$Type;
}}
declare module "packages/snownee/lychee/dripstone_dripping/$DripstoneRecipeType" {
import {$BlockKeyRecipeType, $BlockKeyRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$BlockKeyRecipeType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$DripstoneRecipe, $DripstoneRecipe$Type} from "packages/snownee/lychee/dripstone_dripping/$DripstoneRecipe"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootContextParamSet, $LootContextParamSet$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$DripstoneContext, $DripstoneContext$Type} from "packages/snownee/lychee/dripstone_dripping/$DripstoneContext"

export class $DripstoneRecipeType extends $BlockKeyRecipeType<($DripstoneContext), ($DripstoneRecipe)> {
 "extractChance": boolean
readonly "id": $ResourceLocation
 "categoryId": $ResourceLocation
readonly "clazz": $Class<(any)>
readonly "contextParamSet": $LootContextParamSet
 "requiresClient": boolean
 "compactInputs": boolean
 "canPreventConsumeInputs": boolean
 "hasStandaloneCategory": boolean
static readonly "DEFAULT_PREVENT_TIP": $Component

constructor(arg0: string, arg1: $Class$Type<($DripstoneRecipe$Type)>, arg2: $LootContextParamSet$Type)

public "buildCache"(): void
public "hasSource"(arg0: $Block$Type): boolean
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DripstoneRecipeType$Type = ($DripstoneRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DripstoneRecipeType_ = $DripstoneRecipeType$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$ItemShapelessRecipe" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemShapelessContext, $ItemShapelessContext$Type} from "packages/snownee/lychee/core/$ItemShapelessContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $ItemShapelessRecipe<T extends $ItemShapelessRecipe<(T)>> extends $LycheeRecipe<($ItemShapelessContext)> implements $Comparable<(T)> {
static readonly "MAX_INGREDIENTS": integer
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "compareTo"(arg0: T): integer
public "matches"(arg0: $ItemShapelessContext$Type, arg1: $Level$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShapelessRecipe$Type<T> = ($ItemShapelessRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShapelessRecipe_<T> = $ItemShapelessRecipe$Type<(T)>;
}}
declare module "packages/snownee/lychee/block_crushing/$BlockCrushingRecipeType" {
import {$BlockKeyRecipeType, $BlockKeyRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$BlockKeyRecipeType"
import {$BlockCrushingContext, $BlockCrushingContext$Type} from "packages/snownee/lychee/block_crushing/$BlockCrushingContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockCrushingRecipe, $BlockCrushingRecipe$Type} from "packages/snownee/lychee/block_crushing/$BlockCrushingRecipe"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootContextParamSet, $LootContextParamSet$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BlockCrushingRecipeType extends $BlockKeyRecipeType<($BlockCrushingContext), ($BlockCrushingRecipe)> {
 "extractChance": boolean
readonly "id": $ResourceLocation
 "categoryId": $ResourceLocation
readonly "clazz": $Class<(any)>
readonly "contextParamSet": $LootContextParamSet
 "requiresClient": boolean
 "compactInputs": boolean
 "canPreventConsumeInputs": boolean
 "hasStandaloneCategory": boolean
static readonly "DEFAULT_PREVENT_TIP": $Component

constructor(arg0: string, arg1: $Class$Type<($BlockCrushingRecipe$Type)>, arg2: $LootContextParamSet$Type)

public "process"(arg0: $FallingBlockEntity$Type): void
public "buildCache"(): void
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCrushingRecipeType$Type = ($BlockCrushingRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCrushingRecipeType_ = $BlockCrushingRecipeType$Type;
}}
declare module "packages/snownee/lychee/mixin/$CraftingMenuAccess" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ContainerLevelAccess, $ContainerLevelAccess$Type} from "packages/net/minecraft/world/inventory/$ContainerLevelAccess"

export interface $CraftingMenuAccess {

 "getAccess"(): $ContainerLevelAccess
 "getPlayer"(): $Player
}

export namespace $CraftingMenuAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMenuAccess$Type = ($CraftingMenuAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingMenuAccess_ = $CraftingMenuAccess$Type;
}}
declare module "packages/snownee/lychee/compat/kubejs/$CustomActionEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$ILycheeRecipe$NBTPatchContext, $ILycheeRecipe$NBTPatchContext$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe$NBTPatchContext"
import {$CustomAction, $CustomAction$Type} from "packages/snownee/lychee/core/post/$CustomAction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomActionEventJS extends $EventJS {
readonly "id": string
readonly "action": $CustomAction
readonly "recipe": $ILycheeRecipe<(any)>
readonly "patchContext": $ILycheeRecipe$NBTPatchContext
readonly "data": $Map<(any), (any)>

constructor(arg0: string, arg1: $CustomAction$Type, arg2: $ILycheeRecipe$Type<(any)>, arg3: $ILycheeRecipe$NBTPatchContext$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomActionEventJS$Type = ($CustomActionEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomActionEventJS_ = $CustomActionEventJS$Type;
}}
declare module "packages/snownee/lychee/mixin/$PointedDripstoneBlockAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PointedDripstoneBlockAccess {

}

export namespace $PointedDripstoneBlockAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointedDripstoneBlockAccess$Type = ($PointedDripstoneBlockAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointedDripstoneBlockAccess_ = $PointedDripstoneBlockAccess$Type;
}}
declare module "packages/snownee/lychee/core/post/$PostAction" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ILycheeRecipe$NBTPatchContext, $ILycheeRecipe$NBTPatchContext$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe$NBTPatchContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$ContextualHolder, $ContextualHolder$Type} from "packages/snownee/lychee/core/contextual/$ContextualHolder"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$PostActionType, $PostActionType$Type} from "packages/snownee/lychee/core/post/$PostActionType"

export class $PostAction extends $ContextualHolder {
 "path": string

constructor()

public "toString"(): string
public "isHidden"(): boolean
public "validate"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $ILycheeRecipe$NBTPatchContext$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $PostAction
public "getType"(): $PostActionType<(any)>
public static "parse"(arg0: $JsonObject$Type): $PostAction
public "getDisplayName"(): $Component
public "getBlockOutputs"(): $List<($BlockPredicate)>
public "getItemOutputs"(): $List<($ItemStack)>
public "toJson"(): $JsonObject
public "preApply"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: $ILycheeRecipe$NBTPatchContext$Type): void
public "canRepeat"(): boolean
public "onFailure"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: integer): void
public "doApply"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: integer): void
public "preventSync"(): boolean
public "getUsedPointers"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $Consumer$Type<($JsonPointer$Type)>): void
public "provideJsonInfo"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $JsonObject$Type): $JsonElement
public static "parseActions"(arg0: $JsonElement$Type, arg1: $Consumer$Type<($PostAction$Type)>): void
get "hidden"(): boolean
get "type"(): $PostActionType<(any)>
get "displayName"(): $Component
get "blockOutputs"(): $List<($BlockPredicate)>
get "itemOutputs"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostAction$Type = ($PostAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostAction_ = $PostAction$Type;
}}
declare module "packages/snownee/lychee/item_burning/$ItemBurningRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemBurningRecipe, $ItemBurningRecipe$Type} from "packages/snownee/lychee/item_burning/$ItemBurningRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ItemBurningRecipe$Serializer extends $LycheeRecipe$Serializer<($ItemBurningRecipe)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor()

public "fromJson"(arg0: $ItemBurningRecipe$Type, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: $ItemBurningRecipe$Type): void
public "fromNetwork"(arg0: $ItemBurningRecipe$Type, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBurningRecipe$Serializer$Type = ($ItemBurningRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBurningRecipe$Serializer_ = $ItemBurningRecipe$Serializer$Type;
}}
declare module "packages/snownee/lychee/core/post/$Delay$LycheeMarker" {
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$Marker, $Marker$Type} from "packages/net/minecraft/world/entity/$Marker"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export interface $Delay$LycheeMarker {

 "getEntity"(): $Marker
 "lychee$setContext"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type): void
 "lychee$getContext"(): $LycheeContext
 "lychee$addDelay"(arg0: integer): void
}

export namespace $Delay$LycheeMarker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Delay$LycheeMarker$Type = ($Delay$LycheeMarker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Delay$LycheeMarker_ = $Delay$LycheeMarker$Type;
}}
declare module "packages/snownee/lychee/mixin/$RecipeManagerAccess" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $RecipeManagerAccess {

 "callByType"<C extends $Container, T extends $Recipe<(C)>>(arg0: $RecipeType$Type<(T)>): $Map<($ResourceLocation), ($Recipe<(C)>)>

(arg0: $RecipeType$Type<(T)>): $Map<($ResourceLocation), ($Recipe<(C)>)>
}

export namespace $RecipeManagerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerAccess$Type = ($RecipeManagerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeManagerAccess_ = $RecipeManagerAccess$Type;
}}
declare module "packages/snownee/lychee/block_exploding/$BlockExplodingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockExplodingRecipe, $BlockExplodingRecipe$Type} from "packages/snownee/lychee/block_exploding/$BlockExplodingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BlockExplodingRecipe$Serializer extends $LycheeRecipe$Serializer<($BlockExplodingRecipe)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor()

public "fromJson"(arg0: $BlockExplodingRecipe$Type, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: $BlockExplodingRecipe$Type): void
public "fromNetwork"(arg0: $BlockExplodingRecipe$Type, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExplodingRecipe$Serializer$Type = ($BlockExplodingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExplodingRecipe$Serializer_ = $BlockExplodingRecipe$Serializer$Type;
}}
declare module "packages/snownee/lychee/util/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<F, S> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<F, S>(arg0: F, arg1: S): $Pair<(F), (S)>
public "copy"(): $Pair<(F), (S)>
public "swap"(): $Pair<(S), (F)>
public "getFirst"(): F
public "getSecond"(): S
public "setSecond"(arg0: S): void
public "setFirst"(arg0: F): void
get "first"(): F
get "second"(): S
set "second"(value: S)
set "first"(value: F)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<F, S> = ($Pair<(F), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<F, S> = $Pair$Type<(F), (S)>;
}}
declare module "packages/snownee/lychee/random_block_ticking/$RandomlyTickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RandomlyTickable {

 "lychee$isTickable"(): boolean
 "lychee$setTickable"(arg0: boolean): void
}

export namespace $RandomlyTickable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomlyTickable$Type = ($RandomlyTickable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomlyTickable_ = $RandomlyTickable$Type;
}}
declare module "packages/snownee/lychee/core/input/$ItemHolderCollection" {
import {$ItemHolder, $ItemHolder$Type} from "packages/snownee/lychee/core/input/$ItemHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"

export class $ItemHolderCollection {
static readonly "EMPTY": $ItemHolderCollection
readonly "tempList": $List<($ItemStack)>
readonly "ignoreConsumptionFlags": $BitSet

constructor(...arg0: ($ItemHolder$Type)[])

public "get"(arg0: integer): $ItemHolder
public "replace"(arg0: integer, arg1: $ItemStack$Type): $ItemHolder
public "size"(): integer
public "split"(arg0: integer, arg1: integer): $ItemHolder
public "postApply"(arg0: boolean, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHolderCollection$Type = ($ItemHolderCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHolderCollection_ = $ItemHolderCollection$Type;
}}
declare module "packages/snownee/lychee/anvil_crafting/$AnvilContext" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ActionRuntime, $ActionRuntime$Type} from "packages/snownee/lychee/core/$ActionRuntime"
import {$ItemHolderCollection, $ItemHolderCollection$Type} from "packages/snownee/lychee/core/input/$ItemHolderCollection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export class $AnvilContext extends $LycheeContext {
readonly "left": $ItemStack
readonly "right": $ItemStack
readonly "name": string
 "levelCost": integer
 "materialCost": integer
 "runtime": $ActionRuntime
 "itemHolders": $ItemHolderCollection
 "json": $JsonObject


public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilContext$Type = ($AnvilContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilContext_ = $AnvilContext$Type;
}}
declare module "packages/snownee/lychee/item_inside/$ItemInsideRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemShapelessRecipe$Serializer, $ItemShapelessRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$ItemShapelessRecipe$Serializer"
import {$ItemInsideRecipe, $ItemInsideRecipe$Type} from "packages/snownee/lychee/item_inside/$ItemInsideRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ItemInsideRecipe$Serializer extends $ItemShapelessRecipe$Serializer<($ItemInsideRecipe)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor()

public "fromJson"(arg0: $ItemInsideRecipe$Type, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: $ItemInsideRecipe$Type): void
public "fromNetwork"(arg0: $ItemInsideRecipe$Type, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInsideRecipe$Serializer$Type = ($ItemInsideRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInsideRecipe$Serializer_ = $ItemInsideRecipe$Serializer$Type;
}}
declare module "packages/snownee/lychee/mixin/$StatePropertiesPredicateAccess" {
import {$StatePropertiesPredicate$PropertyMatcher, $StatePropertiesPredicate$PropertyMatcher$Type} from "packages/net/minecraft/advancements/critereon/$StatePropertiesPredicate$PropertyMatcher"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $StatePropertiesPredicateAccess {

 "getProperties"(): $List<($StatePropertiesPredicate$PropertyMatcher)>

(): $List<($StatePropertiesPredicate$PropertyMatcher)>
}

export namespace $StatePropertiesPredicateAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePropertiesPredicateAccess$Type = ($StatePropertiesPredicateAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatePropertiesPredicateAccess_ = $StatePropertiesPredicateAccess$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$ItemAndBlockRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockKeyRecipe, $BlockKeyRecipe$Type} from "packages/snownee/lychee/core/recipe/$BlockKeyRecipe"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $ItemAndBlockRecipe<C extends $LycheeContext> extends $LycheeRecipe<(C)> implements $BlockKeyRecipe<($ItemAndBlockRecipe<(C)>)> {
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "compareTo"(arg0: $ItemAndBlockRecipe$Type<(C)>): integer
public "matches"(arg0: $LycheeContext$Type, arg1: $Level$Type): boolean
public "getInput"(): $Ingredient
public "getBlock"(): $BlockPredicate
public "getIngredients"(): $NonNullList<($Ingredient)>
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
get "input"(): $Ingredient
get "block"(): $BlockPredicate
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAndBlockRecipe$Type<C> = ($ItemAndBlockRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAndBlockRecipe_<C> = $ItemAndBlockRecipe$Type<(C)>;
}}
declare module "packages/snownee/lychee/core/$LycheeContext" {
import {$Delay$LycheeMarker, $Delay$LycheeMarker$Type} from "packages/snownee/lychee/core/post/$Delay$LycheeMarker"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ItemHolderCollection, $ItemHolderCollection$Type} from "packages/snownee/lychee/core/input/$ItemHolderCollection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EmptyContainer, $EmptyContainer$Type} from "packages/snownee/lychee/core/$EmptyContainer"
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ActionRuntime, $ActionRuntime$Type} from "packages/snownee/lychee/core/$ActionRuntime"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LycheeContext extends $EmptyContainer {
 "runtime": $ActionRuntime
 "itemHolders": $ItemHolderCollection
 "json": $JsonObject


public static "load"(arg0: $JsonObject$Type, arg1: $Delay$LycheeMarker$Type): $LycheeContext
public "save"(): $JsonObject
public "getParams"(): $Map<($LootContextParam<(any)>), (any)>
public "getLevel"(): $Level
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "lazyGetBlockEntity"(): void
public "getParam"<T>(arg0: $LootContextParam$Type<(T)>): T
public "removeParam"(arg0: $LootContextParam$Type<(any)>): void
public "hasParam"(arg0: $LootContextParam$Type<(any)>): boolean
public "getParamOrNull"<T>(arg0: $LootContextParam$Type<(T)>): T
public "getRandom"(): $RandomSource
public "getServerLevel"(): $ServerLevel
public "toLootContext"(): $LootContext
public "setParam"(arg0: $LootContextParam$Type<(any)>, arg1: any): void
public "enqueueActions"(arg0: $Stream$Type<($PostAction$Type)>, arg1: integer, arg2: boolean): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "params"(): $Map<($LootContextParam<(any)>), (any)>
get "level"(): $Level
get "containerSize"(): integer
get "random"(): $RandomSource
get "serverLevel"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LycheeContext$Type = ($LycheeContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LycheeContext_ = $LycheeContext$Type;
}}
declare module "packages/snownee/lychee/item_inside/$ItemInsideRecipeType$Cache" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemInsideRecipe, $ItemInsideRecipe$Type} from "packages/snownee/lychee/item_inside/$ItemInsideRecipe"

export class $ItemInsideRecipeType$Cache extends $Record {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "recipe"(): $ItemInsideRecipe
public "ingredients"(): $List<($Set<($Item)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInsideRecipeType$Cache$Type = ($ItemInsideRecipeType$Cache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInsideRecipeType$Cache_ = $ItemInsideRecipeType$Cache$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$BlockKeyRecipe" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"

export interface $BlockKeyRecipe<T> extends $Comparable<(T)> {

 "getBlock"(): $BlockPredicate
 "compareTo"(arg0: T): integer
}

export namespace $BlockKeyRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockKeyRecipe$Type<T> = ($BlockKeyRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockKeyRecipe_<T> = $BlockKeyRecipe$Type<(T)>;
}}
declare module "packages/snownee/lychee/util/$GsonContextImpl" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Gson, $Gson$Type} from "packages/com/google/gson/$Gson"
import {$JsonSerializationContext, $JsonSerializationContext$Type} from "packages/com/google/gson/$JsonSerializationContext"
import {$JsonDeserializationContext, $JsonDeserializationContext$Type} from "packages/com/google/gson/$JsonDeserializationContext"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export class $GsonContextImpl implements $JsonSerializationContext, $JsonDeserializationContext {

constructor(arg0: $Gson$Type)

public "deserialize"<R>(arg0: $JsonElement$Type, arg1: $Type$Type): R
public "serialize"(arg0: any): $JsonElement
public "serialize"(arg0: any, arg1: $Type$Type): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GsonContextImpl$Type = ($GsonContextImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GsonContextImpl_ = $GsonContextImpl$Type;
}}
declare module "packages/snownee/lychee/core/$Reference" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"

export class $Reference {
static readonly "DEFAULT": $Reference

constructor()

public static "create"(arg0: string): $Reference
public static "toJson"(arg0: $Reference$Type, arg1: $JsonObject$Type, arg2: string): void
public "getPointer"(): $JsonPointer
public static "fromJson"(arg0: $JsonObject$Type, arg1: string): $Reference
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $Reference
public static "toNetwork"(arg0: $Reference$Type, arg1: $FriendlyByteBuf$Type): void
public "isPointer"(): boolean
get "pointer"(): $JsonPointer
get "pointer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference$Type = ($Reference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reference_ = $Reference$Type;
}}
declare module "packages/snownee/lychee/block_crushing/$LycheeFallingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LycheeFallingBlockEntity {

 "lychee$anvilDamageChance"(arg0: float): void
 "lychee$matched"(): void
 "lychee$cancelDrop"(): void
}

export namespace $LycheeFallingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LycheeFallingBlockEntity$Type = ($LycheeFallingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LycheeFallingBlockEntity_ = $LycheeFallingBlockEntity$Type;
}}
declare module "packages/snownee/lychee/block_exploding/$BlockExplodingRecipe" {
import {$BlockExplodingContext, $BlockExplodingContext$Type} from "packages/snownee/lychee/block_exploding/$BlockExplodingContext"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$BlockKeyRecipe, $BlockKeyRecipe$Type} from "packages/snownee/lychee/core/recipe/$BlockKeyRecipe"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $BlockExplodingRecipe extends $LycheeRecipe<($BlockExplodingContext)> implements $BlockKeyRecipe<($BlockExplodingRecipe)> {
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "compareTo"(arg0: $BlockExplodingRecipe$Type): integer
public "matches"(arg0: $BlockExplodingContext$Type, arg1: $Level$Type): boolean
public "getType"(): $LycheeRecipeType<(any), (any)>
public "getBlock"(): $BlockPredicate
public "getSerializer"(): $LycheeRecipe$Serializer<(any)>
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
get "type"(): $LycheeRecipeType<(any), (any)>
get "block"(): $BlockPredicate
get "serializer"(): $LycheeRecipe$Serializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExplodingRecipe$Type = ($BlockExplodingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExplodingRecipe_ = $BlockExplodingRecipe$Type;
}}
declare module "packages/snownee/lychee/util/$RecipeMatcher" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $RecipeMatcher<T> {
 "inputs": $List<(T)>
 "tests": $List<(any)>
 "inputCapacity": (integer)[]
 "inputUsed": (integer)[]
 "use": ((integer)[])[]

constructor(arg0: $List$Type<(T)>, arg1: $List$Type<(any)>, arg2: (integer)[])

public static "findMatches"<T>(arg0: $List$Type<(T)>, arg1: $List$Type<(any)>, arg2: (integer)[]): $Optional<($RecipeMatcher<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeMatcher$Type<T> = ($RecipeMatcher<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeMatcher_<T> = $RecipeMatcher$Type<(T)>;
}}
declare module "packages/snownee/lychee/compat/kubejs/$ClickedInfoBadgeEventJS" {
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$ClientEventJS, $ClientEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/$ClientEventJS"

export class $ClickedInfoBadgeEventJS extends $ClientEventJS {
readonly "recipe": $ILycheeRecipe<(any)>
readonly "button": integer

constructor(arg0: $ILycheeRecipe$Type<(any)>, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickedInfoBadgeEventJS$Type = ($ClickedInfoBadgeEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickedInfoBadgeEventJS_ = $ClickedInfoBadgeEventJS$Type;
}}
declare module "packages/snownee/lychee/interaction/$BlockInteractingRecipe$Serializer" {
import {$BlockInteractingRecipe, $BlockInteractingRecipe$Type} from "packages/snownee/lychee/interaction/$BlockInteractingRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ItemAndBlockRecipe$Serializer, $ItemAndBlockRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$ItemAndBlockRecipe$Serializer"

export class $BlockInteractingRecipe$Serializer<T extends $BlockInteractingRecipe> extends $ItemAndBlockRecipe$Serializer<(T)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor(arg0: $Function$Type<($ResourceLocation$Type), (T)>)

public "fromJson"(arg0: T, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: T, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInteractingRecipe$Serializer$Type<T> = ($BlockInteractingRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInteractingRecipe$Serializer_<T> = $BlockInteractingRecipe$Serializer$Type<(T)>;
}}
declare module "packages/snownee/lychee/core/post/$PostActionType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $PostActionType<T extends $PostAction> {

constructor()

public "toJson"(arg0: T, arg1: $JsonObject$Type): void
public "fromJson"(arg0: $JsonObject$Type): T
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: T, arg1: $FriendlyByteBuf$Type): void
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostActionType$Type<T> = ($PostActionType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostActionType_<T> = $PostActionType$Type<(T)>;
}}
declare module "packages/snownee/lychee/crafting/$CraftingContext" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ActionRuntime, $ActionRuntime$Type} from "packages/snownee/lychee/core/$ActionRuntime"
import {$ItemHolderCollection, $ItemHolderCollection$Type} from "packages/snownee/lychee/core/input/$ItemHolderCollection"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export class $CraftingContext extends $LycheeContext {
readonly "matchX": integer
readonly "matchY": integer
readonly "mirror": boolean
 "runtime": $ActionRuntime
 "itemHolders": $ItemHolderCollection
 "json": $JsonObject


public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingContext$Type = ($CraftingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingContext_ = $CraftingContext$Type;
}}
declare module "packages/snownee/lychee/compat/kubejs/$CustomConditionEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$CustomCondition, $CustomCondition$Type} from "packages/snownee/lychee/core/contextual/$CustomCondition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomConditionEventJS extends $EventJS {
readonly "id": string
readonly "condition": $CustomCondition
readonly "data": $Map<(any), (any)>

constructor(arg0: string, arg1: $CustomCondition$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomConditionEventJS$Type = ($CustomConditionEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomConditionEventJS_ = $CustomConditionEventJS$Type;
}}
declare module "packages/snownee/lychee/core/contextual/$ContextualCondition" {
import {$ContextualConditionType, $ContextualConditionType$Type} from "packages/snownee/lychee/core/contextual/$ContextualConditionType"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Gson, $Gson$Type} from "packages/com/google/gson/$Gson"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GsonContextImpl, $GsonContextImpl$Type} from "packages/snownee/lychee/util/$GsonContextImpl"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export interface $ContextualCondition {

 "test"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $LycheeContext$Type, arg2: integer): integer
 "getType"(): $ContextualConditionType<(any)>
 "getDescription"(arg0: boolean): $MutableComponent
 "toJson"(): $JsonObject
 "makeDescriptionId"(arg0: boolean): string
 "showingCount"(): integer
 "appendTooltips"(arg0: $List$Type<($Component$Type)>, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: boolean): void
 "testInTooltips"(arg0: $Level$Type, arg1: $Player$Type): $InteractionResult
}

export namespace $ContextualCondition {
const predicateGson: $Gson
const gsonContext: $GsonContextImpl
function desc(arg0: $List$Type<($Component$Type)>, arg1: $InteractionResult$Type, arg2: integer, arg3: $MutableComponent$Type): void
function parse(arg0: $JsonObject$Type): $ContextualCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextualCondition$Type = ($ContextualCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextualCondition_ = $ContextualCondition$Type;
}}
declare module "packages/snownee/lychee/item_inside/$ItemInsideRecipeType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootContextParamSet, $LootContextParamSet$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import {$ItemInsideRecipe, $ItemInsideRecipe$Type} from "packages/snownee/lychee/item_inside/$ItemInsideRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ItemShapelessContext, $ItemShapelessContext$Type} from "packages/snownee/lychee/core/$ItemShapelessContext"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemInsideRecipeType extends $LycheeRecipeType<($ItemShapelessContext), ($ItemInsideRecipe)> {
readonly "id": $ResourceLocation
 "categoryId": $ResourceLocation
readonly "clazz": $Class<(any)>
readonly "contextParamSet": $LootContextParamSet
 "requiresClient": boolean
 "compactInputs": boolean
 "canPreventConsumeInputs": boolean
 "hasStandaloneCategory": boolean
static readonly "DEFAULT_PREVENT_TIP": $Component

constructor(arg0: string, arg1: $Class$Type<($ItemInsideRecipe$Type)>, arg2: $LootContextParamSet$Type)

public "process"(arg0: $Entity$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: $Vec3$Type): void
public "buildCache"(): void
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInsideRecipeType$Type = ($ItemInsideRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInsideRecipeType_ = $ItemInsideRecipeType$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer" {
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $LycheeRecipe$Serializer<R extends $LycheeRecipe<(any)>> implements $RecipeSerializer<(R)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor(arg0: $Function$Type<($ResourceLocation$Type), (R)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): R
public "fromJson"(arg0: R, arg1: $JsonObject$Type): void
public static "parseIngredientOrAir"(arg0: $JsonElement$Type): $Ingredient
public static "actionsToNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $List$Type<($PostAction$Type)>): void
public static "actionsFromNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $Consumer$Type<($PostAction$Type)>): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: R): void
public "fromNetwork"(arg0: R, arg1: $FriendlyByteBuf$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): R
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: R): void
public "getRegistryName"(): $ResourceLocation
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LycheeRecipe$Serializer$Type<R> = ($LycheeRecipe$Serializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LycheeRecipe$Serializer_<R> = $LycheeRecipe$Serializer$Type<(R)>;
}}
declare module "packages/snownee/lychee/block_crushing/$BlockCrushingRecipe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockCrushingContext, $BlockCrushingContext$Type} from "packages/snownee/lychee/block_crushing/$BlockCrushingContext"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$BlockKeyRecipe, $BlockKeyRecipe$Type} from "packages/snownee/lychee/core/recipe/$BlockKeyRecipe"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $BlockCrushingRecipe extends $LycheeRecipe<($BlockCrushingContext)> implements $BlockKeyRecipe<($BlockCrushingRecipe)> {
static readonly "ANVIL": $BlockPredicate
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "compareTo"(arg0: $BlockCrushingRecipe$Type): integer
public "matches"(arg0: $BlockCrushingContext$Type, arg1: $Level$Type): boolean
public "getType"(): $LycheeRecipeType<(any), (any)>
public "getBlock"(): $BlockPredicate
public "getBlockInputs"(): $List<($BlockPredicate)>
public "getLandingBlock"(): $BlockPredicate
public "matchesFallingBlock"(arg0: $BlockState$Type, arg1: $CompoundTag$Type): boolean
public "getSerializer"(): $LycheeRecipe$Serializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
get "type"(): $LycheeRecipeType<(any), (any)>
get "block"(): $BlockPredicate
get "blockInputs"(): $List<($BlockPredicate)>
get "landingBlock"(): $BlockPredicate
get "serializer"(): $LycheeRecipe$Serializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCrushingRecipe$Type = ($BlockCrushingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCrushingRecipe_ = $BlockCrushingRecipe$Type;
}}
declare module "packages/snownee/lychee/core/recipe/$ItemShapelessRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemShapelessRecipe, $ItemShapelessRecipe$Type} from "packages/snownee/lychee/core/recipe/$ItemShapelessRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ItemShapelessRecipe$Serializer<T extends $ItemShapelessRecipe<(T)>> extends $LycheeRecipe$Serializer<(T)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor(arg0: $Function$Type<($ResourceLocation$Type), (T)>)

public "fromJson"(arg0: T, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: T, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShapelessRecipe$Serializer$Type<T> = ($ItemShapelessRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShapelessRecipe$Serializer_<T> = $ItemShapelessRecipe$Serializer$Type<(T)>;
}}
declare module "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType" {
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootContextParamSet, $LootContextParamSet$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $LycheeRecipeType<C extends $LycheeContext, T extends $LycheeRecipe<(C)>> implements $RecipeType<(T)> {
readonly "id": $ResourceLocation
 "categoryId": $ResourceLocation
readonly "clazz": $Class<(any)>
readonly "contextParamSet": $LootContextParamSet
 "requiresClient": boolean
 "compactInputs": boolean
 "canPreventConsumeInputs": boolean
 "hasStandaloneCategory": boolean
static readonly "DEFAULT_PREVENT_TIP": $Component

constructor(arg0: string, arg1: $Class$Type<(T)>, arg2: $LootContextParamSet$Type)

public "toString"(): string
public "isEmpty"(): boolean
public "findFirst"(arg0: C, arg1: $Level$Type): $Optional<(T)>
public "buildCache"(): void
public "getPreventDefaultDescription"(arg0: $LycheeRecipe$Type<(any)>): $Component
public "tryMatch"<D extends $Container>(arg0: $Recipe$Type<(D)>, arg1: $Level$Type, arg2: D): $Optional<(T)>
public "inViewerRecipes"(): $List<(T)>
public "updateEmptyState"(): void
public "recipes"(): $List<(T)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LycheeRecipeType$Type<C, T> = ($LycheeRecipeType<(C), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LycheeRecipeType_<C, T> = $LycheeRecipeType$Type<(C), (T)>;
}}
declare module "packages/snownee/lychee/dripstone_dripping/$DripstoneContext" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ActionRuntime, $ActionRuntime$Type} from "packages/snownee/lychee/core/$ActionRuntime"
import {$ItemHolderCollection, $ItemHolderCollection$Type} from "packages/snownee/lychee/core/input/$ItemHolderCollection"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"

export class $DripstoneContext extends $LycheeContext {
readonly "source": $BlockState
 "runtime": $ActionRuntime
 "itemHolders": $ItemHolderCollection
 "json": $JsonObject


public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DripstoneContext$Type = ($DripstoneContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DripstoneContext_ = $DripstoneContext$Type;
}}
declare module "packages/snownee/lychee/anvil_crafting/$AnvilCraftingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$AnvilCraftingRecipe, $AnvilCraftingRecipe$Type} from "packages/snownee/lychee/anvil_crafting/$AnvilCraftingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AnvilCraftingRecipe$Serializer extends $LycheeRecipe$Serializer<($AnvilCraftingRecipe)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor()

public "fromJson"(arg0: $AnvilCraftingRecipe$Type, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: $AnvilCraftingRecipe$Type): void
public "fromNetwork"(arg0: $AnvilCraftingRecipe$Type, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilCraftingRecipe$Serializer$Type = ($AnvilCraftingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilCraftingRecipe$Serializer_ = $AnvilCraftingRecipe$Serializer$Type;
}}
declare module "packages/snownee/lychee/$LycheeLootContextParams" {
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LycheeLootContextParams {
static readonly "ALL": $Map<(string), ($LootContextParam<(any)>)>
static readonly "BLOCK_POS": $LootContextParam<($BlockPos)>
static readonly "DIRECTION": $LootContextParam<($Direction)>

constructor()

public static "init"(): void
public static "trimRL"(arg0: string): string
public static "trimRL"(arg0: string, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LycheeLootContextParams$Type = ($LycheeLootContextParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LycheeLootContextParams_ = $LycheeLootContextParams$Type;
}}
declare module "packages/snownee/lychee/core/recipe/type/$ItemShapelessRecipeType" {
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootContextParamSet, $LootContextParamSet$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ItemShapelessContext, $ItemShapelessContext$Type} from "packages/snownee/lychee/core/$ItemShapelessContext"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$ItemShapelessContext$Builder, $ItemShapelessContext$Builder$Type} from "packages/snownee/lychee/core/$ItemShapelessContext$Builder"

export class $ItemShapelessRecipeType<C extends $ItemShapelessContext, T extends $LycheeRecipe<(C)>> extends $LycheeRecipeType<(C), (T)> {
readonly "id": $ResourceLocation
 "categoryId": $ResourceLocation
readonly "clazz": $Class<(any)>
readonly "contextParamSet": $LootContextParamSet
 "requiresClient": boolean
 "compactInputs": boolean
 "canPreventConsumeInputs": boolean
 "hasStandaloneCategory": boolean
static readonly "DEFAULT_PREVENT_TIP": $Component

constructor(arg0: string, arg1: $Class$Type<(T)>, arg2: $LootContextParamSet$Type)

public static "process"<C extends $ItemShapelessContext, T extends $LycheeRecipe<(C)>>(arg0: $LycheeRecipeType$Type<(C), (T)>, arg1: $Iterable$Type<(T)>, arg2: C, arg3: $Predicate$Type<(T)>): void
public "process"(arg0: $Level$Type, arg1: $Stream$Type<($ItemEntity$Type)>, arg2: $Consumer$Type<($ItemShapelessContext$Builder$Type<(C)>)>): void
public "buildCache"(): void
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShapelessRecipeType$Type<C, T> = ($ItemShapelessRecipeType<(C), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShapelessRecipeType_<C, T> = $ItemShapelessRecipeType$Type<(C), (T)>;
}}
