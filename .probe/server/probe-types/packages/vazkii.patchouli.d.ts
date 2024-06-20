declare module "packages/vazkii/patchouli/mixin/client/$AccessorScreen" {
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"

export interface $AccessorScreen {

 "getRenderables"(): $List<($Renderable)>
 "getNarratables"(): $List<($NarratableEntry)>
}

export namespace $AccessorScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorScreen$Type = ($AccessorScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorScreen_ = $AccessorScreen$Type;
}}
declare module "packages/vazkii/patchouli/xplat/$XplatModContainer" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $XplatModContainer {

 "getName"(): string
 "getId"(): string
 "getPath"(arg0: string): $Path
 "getRootPaths"(): $List<($Path)>
}

export namespace $XplatModContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XplatModContainer$Type = ($XplatModContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XplatModContainer_ = $XplatModContainer$Type;
}}
declare module "packages/vazkii/patchouli/api/$IComponentRenderContext" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Button, $Button$Type} from "packages/net/minecraft/client/gui/components/$Button"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IComponentRenderContext {

 "addWidget"(arg0: $AbstractWidget$Type, arg1: integer): void
 "getGui"(): $Screen
 "getFont"(): $Style
 "getTextColor"(): integer
 "renderItemStack"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$Type): void
 "renderIngredient"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$Type): void
 "setHoverTooltipComponents"(arg0: $List$Type<($Component$Type)>): void
 "getCraftingTexture"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "setHoverTooltip"(arg0: $List$Type<(string)>): void
 "getBookTexture"(): $ResourceLocation
 "navigateToEntry"(arg0: $ResourceLocation$Type, arg1: integer, arg2: boolean): boolean
/**
 * 
 * @deprecated
 */
 "registerButton"(arg0: $Button$Type, arg1: integer, arg2: $Runnable$Type): void
 "getHeaderColor"(): integer
 "isAreaHovered"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "getTicksInBook"(): integer
}

export namespace $IComponentRenderContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentRenderContext$Type = ($IComponentRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentRenderContext_ = $IComponentRenderContext$Type;
}}
declare module "packages/vazkii/patchouli/common/item/$ItemModBook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Book, $Book$Type} from "packages/vazkii/patchouli/common/book/$Book"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModBook extends $Item {
static readonly "TAG_BOOK": string
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

public static "getBook"(arg0: $ItemStack$Type): $Book
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getCreatorModId"(arg0: $ItemStack$Type): string
public static "forBook"(arg0: $ResourceLocation$Type): $ItemStack
public static "forBook"(arg0: $Book$Type): $ItemStack
public static "getCompletion"(arg0: $ItemStack$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModBook$Type = ($ItemModBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModBook_ = $ItemModBook$Type;
}}
declare module "packages/vazkii/patchouli/common/util/$ItemStackUtil$StackWrapper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackUtil$StackWrapper {
static readonly "EMPTY_WRAPPER": $ItemStackUtil$StackWrapper
readonly "stack": $ItemStack

constructor(arg0: $ItemStack$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackUtil$StackWrapper$Type = ($ItemStackUtil$StackWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackUtil$StackWrapper_ = $ItemStackUtil$StackWrapper$Type;
}}
declare module "packages/vazkii/patchouli/mixin/$AccessorSmithingTransformRecipe" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessorSmithingTransformRecipe {

 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}

export namespace $AccessorSmithingTransformRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTransformRecipe$Type = ($AccessorSmithingTransformRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSmithingTransformRecipe_ = $AccessorSmithingTransformRecipe$Type;
}}
declare module "packages/vazkii/patchouli/api/$IVariableProvider" {
import {$IVariable, $IVariable$Type} from "packages/vazkii/patchouli/api/$IVariable"

export interface $IVariableProvider {

 "get"(arg0: string): $IVariable
 "has"(arg0: string): boolean
}

export namespace $IVariableProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableProvider$Type = ($IVariableProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableProvider_ = $IVariableProvider$Type;
}}
declare module "packages/vazkii/patchouli/api/$PatchouliConfigAccess$TextOverflowMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PatchouliConfigAccess$TextOverflowMode extends $Enum<($PatchouliConfigAccess$TextOverflowMode)> {
static readonly "OVERFLOW": $PatchouliConfigAccess$TextOverflowMode
static readonly "TRUNCATE": $PatchouliConfigAccess$TextOverflowMode
static readonly "RESIZE": $PatchouliConfigAccess$TextOverflowMode


public static "values"(): ($PatchouliConfigAccess$TextOverflowMode)[]
public static "valueOf"(arg0: string): $PatchouliConfigAccess$TextOverflowMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatchouliConfigAccess$TextOverflowMode$Type = (("overflow") | ("truncate") | ("resize")) | ($PatchouliConfigAccess$TextOverflowMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatchouliConfigAccess$TextOverflowMode_ = $PatchouliConfigAccess$TextOverflowMode$Type;
}}
declare module "packages/vazkii/patchouli/client/book/template/$TemplateInclusion" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IVariable, $IVariable$Type} from "packages/vazkii/patchouli/api/$IVariable"
import {$IVariableProvider, $IVariableProvider$Type} from "packages/vazkii/patchouli/api/$IVariableProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IComponentProcessor, $IComponentProcessor$Type} from "packages/vazkii/patchouli/api/$IComponentProcessor"

export class $TemplateInclusion {
 "template": string
 "as": string
 "localBindings": $JsonObject
 "x": integer
 "y": integer

constructor()

public "upperMerge"(arg0: $TemplateInclusion$Type): void
public "wrapProvider"(arg0: $IVariableProvider$Type): $IVariableProvider
public "process"(arg0: $Level$Type, arg1: $IComponentProcessor$Type): void
public "attemptVariableLookup"(arg0: string): $IVariable
public "isUpreference"(arg0: $IVariable$Type): boolean
public "qualifyName"(arg0: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateInclusion$Type = ($TemplateInclusion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateInclusion_ = $TemplateInclusion$Type;
}}
declare module "packages/vazkii/patchouli/mixin/client/$AccessorClientAdvancements" {
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"
import {$AdvancementProgress, $AdvancementProgress$Type} from "packages/net/minecraft/advancements/$AdvancementProgress"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorClientAdvancements {

 "getProgress"(): $Map<($Advancement), ($AdvancementProgress)>

(): $Map<($Advancement), ($AdvancementProgress)>
}

export namespace $AccessorClientAdvancements {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorClientAdvancements$Type = ($AccessorClientAdvancements);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorClientAdvancements_ = $AccessorClientAdvancements$Type;
}}
declare module "packages/vazkii/patchouli/client/book/$BookPage" {
import {$GuiBookEntry, $GuiBookEntry$Type} from "packages/vazkii/patchouli/client/book/gui/$GuiBookEntry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BookEntry, $BookEntry$Type} from "packages/vazkii/patchouli/client/book/$BookEntry"
import {$BookContentsBuilder, $BookContentsBuilder$Type} from "packages/vazkii/patchouli/client/book/$BookContentsBuilder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Book, $Book$Type} from "packages/vazkii/patchouli/common/book/$Book"

export class $BookPage {

constructor()

public "build"(arg0: $Level$Type, arg1: $BookEntry$Type, arg2: $BookContentsBuilder$Type, arg3: integer): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "i18n"(arg0: string): string
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "canAdd"(arg0: $Book$Type): boolean
public "onHidden"(arg0: $GuiBookEntry$Type): void
public "isPageUnlocked"(): boolean
public "onDisplayed"(arg0: $GuiBookEntry$Type, arg1: integer, arg2: integer): void
public "i18nText"(arg0: string): $Component
get "pageUnlocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPage$Type = ($BookPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPage_ = $BookPage$Type;
}}
declare module "packages/vazkii/patchouli/mixin/$AccessorSmithingTrimRecipe" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessorSmithingTrimRecipe {

 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}

export namespace $AccessorSmithingTrimRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTrimRecipe$Type = ($AccessorSmithingTrimRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSmithingTrimRecipe_ = $AccessorSmithingTrimRecipe$Type;
}}
declare module "packages/vazkii/patchouli/client/book/$BookEntry" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookPage, $BookPage$Type} from "packages/vazkii/patchouli/client/book/$BookPage"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$AbstractReadStateHolder, $AbstractReadStateHolder$Type} from "packages/vazkii/patchouli/client/book/$AbstractReadStateHolder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BookContentsBuilder, $BookContentsBuilder$Type} from "packages/vazkii/patchouli/client/book/$BookContentsBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BookIcon, $BookIcon$Type} from "packages/vazkii/patchouli/client/book/$BookIcon"
import {$BookCategory, $BookCategory$Type} from "packages/vazkii/patchouli/client/book/$BookCategory"
import {$Book, $Book$Type} from "packages/vazkii/patchouli/common/book/$Book"

export class $BookEntry extends $AbstractReadStateHolder implements $Comparable<($BookEntry)> {

constructor(arg0: $JsonObject$Type, arg1: $ResourceLocation$Type, arg2: $Book$Type, arg3: string)

public "isSecret"(): boolean
public "build"(arg0: $Level$Type, arg1: $BookContentsBuilder$Type): void
public "isLocked"(): boolean
public "getName"(): $MutableComponent
public "compareTo"(arg0: $BookEntry$Type): integer
public "getId"(): $ResourceLocation
public "getCategory"(): $BookCategory
public "updateLockStatus"(): void
public "isPriority"(): boolean
public "getBook"(): $Book
public "getPages"(): $List<($BookPage)>
public "getIcon"(): $BookIcon
public "shouldHide"(): boolean
public "canAdd"(): boolean
public "markReadStateDirty"(): void
public "getAddedBy"(): string
public "addRelevantStack"(arg0: $BookContentsBuilder$Type, arg1: $ItemStack$Type, arg2: integer): void
public "getPageFromAnchor"(arg0: string): integer
public "isFoundByQuery"(arg0: string): boolean
public "getEntryColor"(): integer
public "initCategory"(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ResourceLocation$Type), ($BookCategory$Type)>): void
get "secret"(): boolean
get "locked"(): boolean
get "name"(): $MutableComponent
get "id"(): $ResourceLocation
get "category"(): $BookCategory
get "priority"(): boolean
get "book"(): $Book
get "pages"(): $List<($BookPage)>
get "icon"(): $BookIcon
get "addedBy"(): string
get "entryColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntry$Type = ($BookEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookEntry_ = $BookEntry$Type;
}}
declare module "packages/vazkii/patchouli/common/book/$Book" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$PatchouliConfigAccess$TextOverflowMode, $PatchouliConfigAccess$TextOverflowMode$Type} from "packages/vazkii/patchouli/api/$PatchouliConfigAccess$TextOverflowMode"
import {$BookContents, $BookContents$Type} from "packages/vazkii/patchouli/client/book/$BookContents"
import {$BookIcon, $BookIcon$Type} from "packages/vazkii/patchouli/client/book/$BookIcon"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$XplatModContainer, $XplatModContainer$Type} from "packages/vazkii/patchouli/xplat/$XplatModContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Book {
readonly "owner": $XplatModContainer
readonly "id": $ResourceLocation
readonly "textColor": integer
readonly "headerColor": integer
readonly "nameplateColor": integer
readonly "linkColor": integer
readonly "linkHoverColor": integer
readonly "progressBarColor": integer
readonly "progressBarBackground": integer
readonly "isExternal": boolean
readonly "name": string
readonly "landingText": string
readonly "bookTexture": $ResourceLocation
readonly "fillerTexture": $ResourceLocation
readonly "craftingTexture": $ResourceLocation
readonly "model": $ResourceLocation
readonly "useBlockyFont": boolean
readonly "openSound": $ResourceLocation
readonly "flipSound": $ResourceLocation
readonly "showProgress": boolean
readonly "indexIconRaw": string
readonly "version": string
readonly "subtitle": string
readonly "creativeTab": $ResourceLocation
readonly "advancementsTab": $ResourceLocation
readonly "noBook": boolean
readonly "showToasts": boolean
readonly "pauseGame": boolean
readonly "isPamphlet": boolean
readonly "i18n": boolean
readonly "overflowMode": $PatchouliConfigAccess$TextOverflowMode
readonly "macros": $Map<(string), (string)>

constructor(arg0: $JsonObject$Type, arg1: $XplatModContainer$Type, arg2: $ResourceLocation$Type, arg3: boolean)

public "advancementsEnabled"(): boolean
public "getOwnerName"(): string
public "getContents"(): $BookContents
public "getBookItem"(): $ItemStack
public "popUpdated"(): boolean
public "getFontStyle"(): $Style
public "getIcon"(): $BookIcon
public "getSubtitle"(): $MutableComponent
public "markUpdated"(): void
public "reloadContents"(arg0: $Level$Type, arg1: boolean): void
public "reloadLocks"(arg0: boolean): void
get "ownerName"(): string
get "contents"(): $BookContents
get "bookItem"(): $ItemStack
get "fontStyle"(): $Style
get "icon"(): $BookIcon
get "subtitle"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Book$Type = ($Book);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Book_ = $Book$Type;
}}
declare module "packages/vazkii/patchouli/mixin/client/$AccessorKeyMapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorKeyMapping {

}

export namespace $AccessorKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorKeyMapping$Type = ($AccessorKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorKeyMapping_ = $AccessorKeyMapping$Type;
}}
declare module "packages/vazkii/patchouli/client/book/$BookContentsBuilder" {
import {$BookEntry, $BookEntry$Type} from "packages/vazkii/patchouli/client/book/$BookEntry"
import {$BookContents, $BookContents$Type} from "packages/vazkii/patchouli/client/book/$BookContents"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookCategory, $BookCategory$Type} from "packages/vazkii/patchouli/client/book/$BookCategory"
import {$BookTemplate, $BookTemplate$Type} from "packages/vazkii/patchouli/client/book/template/$BookTemplate"
import {$Book, $Book$Type} from "packages/vazkii/patchouli/common/book/$Book"
import {$ItemStackUtil$StackWrapper, $ItemStackUtil$StackWrapper$Type} from "packages/vazkii/patchouli/common/util/$ItemStackUtil$StackWrapper"

export class $BookContentsBuilder {
static readonly "DEFAULT_LANG": string


public "getEntry"(arg0: $ResourceLocation$Type): $BookEntry
public "getTemplate"(arg0: $ResourceLocation$Type): $Supplier<($BookTemplate)>
public "getCategory"(arg0: $ResourceLocation$Type): $BookCategory
public static "loadAndBuildFor"(arg0: $Level$Type, arg1: $Book$Type, arg2: boolean): $BookContents
public "addRecipeMapping"(arg0: $ItemStackUtil$StackWrapper$Type, arg1: $BookEntry$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContentsBuilder$Type = ($BookContentsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookContentsBuilder_ = $BookContentsBuilder$Type;
}}
declare module "packages/vazkii/patchouli/client/book/$BookIcon" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $BookIcon {

 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void

(arg0: string): $BookIcon
}

export namespace $BookIcon {
function from(arg0: string): $BookIcon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookIcon$Type = ($BookIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookIcon_ = $BookIcon$Type;
}}
declare module "packages/vazkii/patchouli/mixin/client/$AccessorMultiBufferSource" {
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $AccessorMultiBufferSource {

 "getFixedBuffers"(): $Map<($RenderType), ($BufferBuilder)>
 "getFallbackBuffer"(): $BufferBuilder
}

export namespace $AccessorMultiBufferSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMultiBufferSource$Type = ($AccessorMultiBufferSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMultiBufferSource_ = $AccessorMultiBufferSource$Type;
}}
declare module "packages/vazkii/patchouli/client/book/$EntryDisplayState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EntryDisplayState extends $Enum<($EntryDisplayState)> {
static readonly "UNREAD": $EntryDisplayState
static readonly "PENDING": $EntryDisplayState
static readonly "NEUTRAL": $EntryDisplayState
static readonly "COMPLETED": $EntryDisplayState
static readonly "DEFAULT_TYPE": $EntryDisplayState
readonly "hasIcon": boolean
readonly "showInInventory": boolean
readonly "hasAnimation": boolean
readonly "u": integer


public static "values"(): ($EntryDisplayState)[]
public static "valueOf"(arg0: string): $EntryDisplayState
public static "fromOrdinal"(arg0: integer): $EntryDisplayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryDisplayState$Type = (("unread") | ("pending") | ("neutral") | ("completed")) | ($EntryDisplayState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryDisplayState_ = $EntryDisplayState$Type;
}}
declare module "packages/vazkii/patchouli/api/$IVariable" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $IVariable {

 "asListOrSingleton"(): $List<($IVariable)>
 "asList"(): $List<($IVariable)>
 "unwrap"(): $JsonElement
 "as"<T>(arg0: $Class$Type<(T)>): T
 "as"<T>(arg0: $Class$Type<(T)>, arg1: T): T
 "asString"(): string
 "asString"(arg0: string): string
 "asNumber"(): number
 "asNumber"(arg0: number): number
 "asStream"(): $Stream<($IVariable)>
 "asBoolean"(arg0: boolean): boolean
 "asBoolean"(): boolean
 "asStreamOrSingleton"(): $Stream<($IVariable)>
}

export namespace $IVariable {
function wrap(arg0: boolean): $IVariable
function wrap(arg0: number): $IVariable
function wrap(arg0: string): $IVariable
function wrap(arg0: $JsonElement$Type): $IVariable
function from<T>(arg0: T): $IVariable
function empty(): $IVariable
function wrapList(arg0: $Iterable$Type<($IVariable$Type)>): $IVariable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariable$Type = ($IVariable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariable_ = $IVariable$Type;
}}
declare module "packages/vazkii/patchouli/client/book/gui/$GuiBook" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BookEntry, $BookEntry$Type} from "packages/vazkii/patchouli/client/book/$BookEntry"
import {$Button, $Button$Type} from "packages/net/minecraft/client/gui/components/$Button"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Book, $Book$Type} from "packages/vazkii/patchouli/common/book/$Book"
import {$EntryDisplayState, $EntryDisplayState$Type} from "packages/vazkii/patchouli/client/book/$EntryDisplayState"

export class $GuiBook extends $Screen {
static readonly "FULL_WIDTH": integer
static readonly "FULL_HEIGHT": integer
static readonly "PAGE_WIDTH": integer
static readonly "PAGE_HEIGHT": integer
static readonly "TOP_PADDING": integer
static readonly "LEFT_PAGE_X": integer
static readonly "RIGHT_PAGE_X": integer
static readonly "TEXT_LINE_HEIGHT": integer
static readonly "MAX_BOOKMARKS": integer
readonly "book": $Book
 "bookLeft": integer
 "bookTop": integer
 "ticksInBook": integer
 "maxScale": integer
static "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $Book$Type, arg1: $Component$Type)

public "canBeOpened"(): boolean
public static "drawFromTexture"(arg0: $GuiGraphics$Type, arg1: $Book$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "drawPageFiller"(arg0: $GuiGraphics$Type, arg1: $Book$Type, arg2: integer, arg3: integer): void
public static "drawPageFiller"(arg0: $GuiGraphics$Type, arg1: $Book$Type): void
public "handleButtonArrow"(arg0: $Button$Type): void
public "addBookmarkButtons"(): void
public static "openWebLink"(arg0: $Screen$Type, arg1: string): void
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "drawProgressBar"(arg0: $GuiGraphics$Type, arg1: $Book$Type, arg2: integer, arg3: integer, arg4: $Predicate$Type<($BookEntry$Type)>): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "tick"(): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "addRenderableWidget"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
public "m_7856_"(): void
public "isPauseScreen"(): boolean
public "getMinecraft"(): $Minecraft
public "setTooltip"(arg0: $List$Type<($Component$Type)>): void
public "setTooltip"(...arg0: ($Component$Type)[]): void
public "isMouseInRelativeRange"(arg0: double, arg1: double, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "getSpread"(): integer
public "drawCenteredStringNoShadow"(arg0: $GuiGraphics$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer): void
public "drawCenteredStringNoShadow"(arg0: $GuiGraphics$Type, arg1: $FormattedCharSequence$Type, arg2: integer, arg3: integer, arg4: integer): void
public "removeDrawablesIn"(arg0: $Collection$Type<(any)>): void
public static "drawSeparator"(arg0: $GuiGraphics$Type, arg1: $Book$Type, arg2: integer, arg3: integer): void
public "handleButtonBookmark"(arg0: $Button$Type): void
public "bookmarkThis"(): void
public "mouseClickedScaled"(arg0: double, arg1: double, arg2: integer): boolean
public "displayLexiconGui"(arg0: $GuiBook$Type, arg1: boolean): void
public "canSeeBackButton"(): boolean
public "getRelativeY"(arg0: double): double
public static "playBookFlipSound"(arg0: $Book$Type): void
public "canSeePageButton"(arg0: boolean): boolean
public "setTooltipStack"(arg0: $ItemStack$Type): void
public "getRelativeX"(arg0: double): double
public "removeDrawablesIf"(arg0: $Predicate$Type<($Renderable$Type)>): void
public static "drawLock"(arg0: $GuiGraphics$Type, arg1: $Book$Type, arg2: integer, arg3: integer): void
public static "drawMarking"(arg0: $GuiGraphics$Type, arg1: $Book$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $EntryDisplayState$Type): void
public "onFirstOpened"(): void
get "pauseScreen"(): boolean
get "minecraft"(): $Minecraft
set "tooltip"(value: $List$Type<($Component$Type)>)
set "tooltip"(value: ($Component$Type)[])
get "spread"(): integer
set "tooltipStack"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiBook$Type = ($GuiBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiBook_ = $GuiBook$Type;
}}
declare module "packages/vazkii/patchouli/client/book/template/$BookTemplate" {
import {$GuiBookEntry, $GuiBookEntry$Type} from "packages/vazkii/patchouli/client/book/gui/$GuiBookEntry"
import {$BookEntry, $BookEntry$Type} from "packages/vazkii/patchouli/client/book/$BookEntry"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookPage, $BookPage$Type} from "packages/vazkii/patchouli/client/book/$BookPage"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TemplateInclusion, $TemplateInclusion$Type} from "packages/vazkii/patchouli/client/book/template/$TemplateInclusion"
import {$IVariableProvider, $IVariableProvider$Type} from "packages/vazkii/patchouli/api/$IVariableProvider"
import {$BookContentsBuilder, $BookContentsBuilder$Type} from "packages/vazkii/patchouli/client/book/$BookContentsBuilder"
import {$Book, $Book$Type} from "packages/vazkii/patchouli/common/book/$Book"

export class $BookTemplate {
static readonly "componentTypes": $HashMap<($ResourceLocation), ($Class<(any)>)>

constructor()

public static "createTemplate"(arg0: $Book$Type, arg1: $BookContentsBuilder$Type, arg2: string, arg3: $TemplateInclusion$Type): $BookTemplate
public "build"(arg0: $BookContentsBuilder$Type, arg1: $BookPage$Type, arg2: $BookEntry$Type, arg3: integer): void
public "compile"(arg0: $Level$Type, arg1: $BookContentsBuilder$Type, arg2: $IVariableProvider$Type): void
public "render"(arg0: $GuiGraphics$Type, arg1: $BookPage$Type, arg2: integer, arg3: integer, arg4: float): void
public "mouseClicked"(arg0: $BookPage$Type, arg1: double, arg2: double, arg3: integer): boolean
public static "registerComponent"(arg0: $ResourceLocation$Type, arg1: $Class$Type<(any)>): void
public "onDisplayed"(arg0: $BookPage$Type, arg1: $GuiBookEntry$Type, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTemplate$Type = ($BookTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookTemplate_ = $BookTemplate$Type;
}}
declare module "packages/vazkii/patchouli/api/$IComponentProcessor" {
import {$IVariable, $IVariable$Type} from "packages/vazkii/patchouli/api/$IVariable"
import {$IVariableProvider, $IVariableProvider$Type} from "packages/vazkii/patchouli/api/$IVariableProvider"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IComponentProcessor {

 "allowRender"(arg0: string): boolean
 "setup"(arg0: $Level$Type, arg1: $IVariableProvider$Type): void
 "process"(arg0: $Level$Type, arg1: string): $IVariable
 "refresh"(arg0: $Screen$Type, arg1: integer, arg2: integer): void
}

export namespace $IComponentProcessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentProcessor$Type = ($IComponentProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentProcessor_ = $IComponentProcessor$Type;
}}
declare module "packages/vazkii/patchouli/client/book/$BookCategory" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AbstractReadStateHolder, $AbstractReadStateHolder$Type} from "packages/vazkii/patchouli/client/book/$AbstractReadStateHolder"
import {$BookEntry, $BookEntry$Type} from "packages/vazkii/patchouli/client/book/$BookEntry"
import {$BookContentsBuilder, $BookContentsBuilder$Type} from "packages/vazkii/patchouli/client/book/$BookContentsBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BookIcon, $BookIcon$Type} from "packages/vazkii/patchouli/client/book/$BookIcon"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Book, $Book$Type} from "packages/vazkii/patchouli/common/book/$Book"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $BookCategory extends $AbstractReadStateHolder implements $Comparable<($BookCategory)> {

constructor(arg0: $JsonObject$Type, arg1: $ResourceLocation$Type, arg2: $Book$Type)

public "isSecret"(): boolean
public "build"(arg0: $BookContentsBuilder$Type): void
public "isLocked"(): boolean
public "getName"(): $MutableComponent
public "compareTo"(arg0: $BookCategory$Type): integer
public "getId"(): $ResourceLocation
public "addEntry"(arg0: $BookEntry$Type): void
public "getEntries"(): $List<($BookEntry)>
public "getDescription"(): string
public "updateLockStatus"(arg0: boolean): void
public "getBook"(): $Book
public "getIcon"(): $BookIcon
public "shouldHide"(): boolean
public "canAdd"(): boolean
public "markReadStateDirty"(): void
public "getParentCategory"(): $BookCategory
public "isRootCategory"(): boolean
public "addChildCategory"(arg0: $BookCategory$Type): void
get "secret"(): boolean
get "locked"(): boolean
get "name"(): $MutableComponent
get "id"(): $ResourceLocation
get "entries"(): $List<($BookEntry)>
get "description"(): string
get "book"(): $Book
get "icon"(): $BookIcon
get "parentCategory"(): $BookCategory
get "rootCategory"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCategory$Type = ($BookCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCategory_ = $BookCategory$Type;
}}
declare module "packages/vazkii/patchouli/client/book/$BookContents" {
import {$BookEntry, $BookEntry$Type} from "packages/vazkii/patchouli/client/book/$BookEntry"
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookTemplate, $BookTemplate$Type} from "packages/vazkii/patchouli/client/book/template/$BookTemplate"
import {$ItemStackUtil$StackWrapper, $ItemStackUtil$StackWrapper$Type} from "packages/vazkii/patchouli/common/util/$ItemStackUtil$StackWrapper"
import {$AbstractReadStateHolder, $AbstractReadStateHolder$Type} from "packages/vazkii/patchouli/client/book/$AbstractReadStateHolder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Exception, $Exception$Type} from "packages/java/lang/$Exception"
import {$BookCategory, $BookCategory$Type} from "packages/vazkii/patchouli/client/book/$BookCategory"
import {$GuiBook, $GuiBook$Type} from "packages/vazkii/patchouli/client/book/gui/$GuiBook"
import {$Book, $Book$Type} from "packages/vazkii/patchouli/common/book/$Book"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BookContents extends $AbstractReadStateHolder {
static readonly "addonTemplates": $Map<($ResourceLocation), ($Supplier<($BookTemplate)>)>
readonly "categories": $Map<($ResourceLocation), ($BookCategory)>
readonly "entries": $Map<($ResourceLocation), ($BookEntry)>
readonly "pamphletCategory": $BookCategory
readonly "guiStack": $Deque<($GuiBook)>
 "currentGui": $GuiBook

constructor(arg0: $Book$Type, arg1: $ImmutableMap$Type<($ResourceLocation$Type), ($BookCategory$Type)>, arg2: $ImmutableMap$Type<($ResourceLocation$Type), ($BookEntry$Type)>, arg3: $ImmutableMap$Type<($ItemStackUtil$StackWrapper$Type), ($Pair$Type<($BookEntry$Type), (integer)>)>, arg4: $BookCategory$Type)

public static "empty"(arg0: $Book$Type, arg1: $Exception$Type): $BookContents
public "getException"(): $Exception
public "isErrored"(): boolean
public "checkValidCurrentEntry"(): void
public "getCurrentGui"(): $GuiBook
public "setTopEntry"(arg0: $ResourceLocation$Type, arg1: integer): void
public "openLexiconGui"(arg0: $GuiBook$Type, arg1: boolean): void
public "getEntryForStack"(arg0: $ItemStack$Type): $Pair<($BookEntry), (integer)>
get "exception"(): $Exception
get "errored"(): boolean
get "currentGui"(): $GuiBook
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContents$Type = ($BookContents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookContents_ = $BookContents$Type;
}}
declare module "packages/vazkii/patchouli/client/book/gui/$GuiBookEntry" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BookEntry, $BookEntry$Type} from "packages/vazkii/patchouli/client/book/$BookEntry"
import {$Button, $Button$Type} from "packages/net/minecraft/client/gui/components/$Button"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IComponentRenderContext, $IComponentRenderContext$Type} from "packages/vazkii/patchouli/api/$IComponentRenderContext"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiBook, $GuiBook$Type} from "packages/vazkii/patchouli/client/book/gui/$GuiBook"
import {$Book, $Book$Type} from "packages/vazkii/patchouli/common/book/$Book"

export class $GuiBookEntry extends $GuiBook implements $IComponentRenderContext {
static readonly "FULL_WIDTH": integer
static readonly "FULL_HEIGHT": integer
static readonly "PAGE_WIDTH": integer
static readonly "PAGE_HEIGHT": integer
static readonly "TOP_PADDING": integer
static readonly "LEFT_PAGE_X": integer
static readonly "RIGHT_PAGE_X": integer
static readonly "TEXT_LINE_HEIGHT": integer
static readonly "MAX_BOOKMARKS": integer
readonly "book": $Book
 "bookLeft": integer
 "bookTop": integer
 "ticksInBook": integer
 "maxScale": integer
static "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $Book$Type, arg1: $BookEntry$Type)
constructor(arg0: $Book$Type, arg1: $BookEntry$Type, arg2: integer)

public "canBeOpened"(): boolean
public static "displayOrBookmark"(arg0: $GuiBook$Type, arg1: $BookEntry$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getEntry"(): $BookEntry
public "addWidget"(arg0: $AbstractWidget$Type, arg1: integer): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "m_7856_"(): void
public "getGui"(): $Screen
public "getFont"(): $Style
public "getTextColor"(): integer
public "renderItemStack"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$Type): void
public "renderIngredient"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$Type): void
public "setHoverTooltipComponents"(arg0: $List$Type<($Component$Type)>): void
public "getCraftingTexture"(): $ResourceLocation
public "setHoverTooltip"(arg0: $List$Type<(string)>): void
public "getBookTexture"(): $ResourceLocation
public "navigateToEntry"(arg0: $ResourceLocation$Type, arg1: integer, arg2: boolean): boolean
public "registerButton"(arg0: $Button$Type, arg1: integer, arg2: $Runnable$Type): void
public "getHeaderColor"(): integer
public "isAreaHovered"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "getTicksInBook"(): integer
public "bookmarkThis"(): void
public "mouseClickedScaled"(arg0: double, arg1: double, arg2: integer): boolean
public "onFirstOpened"(): void
get "entry"(): $BookEntry
get "gui"(): $Screen
get "font"(): $Style
get "textColor"(): integer
set "hoverTooltipComponents"(value: $List$Type<($Component$Type)>)
get "craftingTexture"(): $ResourceLocation
set "hoverTooltip"(value: $List$Type<(string)>)
get "bookTexture"(): $ResourceLocation
get "headerColor"(): integer
get "ticksInBook"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiBookEntry$Type = ($GuiBookEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiBookEntry_ = $GuiBookEntry$Type;
}}
declare module "packages/vazkii/patchouli/client/book/$AbstractReadStateHolder" {
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$EntryDisplayState, $EntryDisplayState$Type} from "packages/vazkii/patchouli/client/book/$EntryDisplayState"

export class $AbstractReadStateHolder {

constructor()

public "markReadStateDirty"(): void
public "getReadState"(): $EntryDisplayState
public static "mostImportantState"(arg0: $Stream$Type<($EntryDisplayState$Type)>): $EntryDisplayState
get "readState"(): $EntryDisplayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReadStateHolder$Type = ($AbstractReadStateHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractReadStateHolder_ = $AbstractReadStateHolder$Type;
}}
declare module "packages/vazkii/patchouli/common/recipe/$BookRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BookRecipeSerializer<T extends $Recipe<(any)>, U extends T> extends $Record implements $RecipeSerializer<(U)> {

constructor(compose: $RecipeSerializer$Type<(T)>, converter: $BiFunction$Type<(T), ($ResourceLocation$Type), (U)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compose"(): $RecipeSerializer<(T)>
public "converter"(): $BiFunction<(T), ($ResourceLocation), (U)>
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: U): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): U
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): U
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): U
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookRecipeSerializer$Type<T, U> = ($BookRecipeSerializer<(T), (U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookRecipeSerializer_<T, U> = $BookRecipeSerializer$Type<(T), (U)>;
}}
