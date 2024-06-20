declare module "packages/org/moddingx/libx/base/$BlockBase" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$CreativeTabItemProvider, $CreativeTabItemProvider$Type} from "packages/org/moddingx/libx/creativetab/$CreativeTabItemProvider"
import {$ModX, $ModX$Type} from "packages/org/moddingx/libx/mod/$ModX"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Registerable$EntryCollector, $Registerable$EntryCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$EntryCollector"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$RegistrationContext, $RegistrationContext$Type} from "packages/org/moddingx/libx/registration/$RegistrationContext"
import {$Registerable$TrackingCollector, $Registerable$TrackingCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$TrackingCollector"
import {$SetupContext, $SetupContext$Type} from "packages/org/moddingx/libx/registration/$SetupContext"
import {$Registerable, $Registerable$Type} from "packages/org/moddingx/libx/registration/$Registerable"

export class $BlockBase extends $Block implements $Registerable, $CreativeTabItemProvider {
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

constructor(arg0: $ModX$Type, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $ModX$Type, arg1: $BlockBehaviour$Properties$Type, arg2: $Item$Properties$Type)

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public "makeCreativeTabStacks"(): $Stream<($ItemStack)>
public "initializeItemClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "registerAdditional"(arg0: $RegistrationContext$Type, arg1: $Registerable$EntryCollector$Type): void
public "initTracking"(arg0: $RegistrationContext$Type, arg1: $Registerable$TrackingCollector$Type): void
public "registerClient"(arg0: $SetupContext$Type): void
public "registerCommon"(arg0: $SetupContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBase$Type = ($BlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBase_ = $BlockBase$Type;
}}
declare module "packages/org/moddingx/libx/impl/crafting/recipe/$EmptyRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $EmptyRecipe implements $Recipe<($Container)> {
static readonly "ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($EmptyRecipe)>

constructor(arg0: $ResourceLocation$Type)

public static "empty"(arg0: $ResourceLocation$Type): $FinishedRecipe
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
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
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
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
export type $EmptyRecipe$Type = ($EmptyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyRecipe_ = $EmptyRecipe$Type;
}}
declare module "packages/org/moddingx/libx/base/tile/$BlockBE" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ModX, $ModX$Type} from "packages/org/moddingx/libx/mod/$ModX"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Registerable$EntryCollector, $Registerable$EntryCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$EntryCollector"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockBase, $BlockBase$Type} from "packages/org/moddingx/libx/base/$BlockBase"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RegistrationContext, $RegistrationContext$Type} from "packages/org/moddingx/libx/registration/$RegistrationContext"
import {$Registerable$TrackingCollector, $Registerable$TrackingCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$TrackingCollector"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockBE<T extends $BlockEntity> extends $BlockBase implements $EntityBlock {
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

constructor(arg0: $ModX$Type, arg1: $Class$Type<(T)>, arg2: $BlockBehaviour$Properties$Type)
constructor(arg0: $ModX$Type, arg1: $Class$Type<(T)>, arg2: $BlockBehaviour$Properties$Type, arg3: $Item$Properties$Type)

public "getBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): T
public "getTicker"<X extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(X)>): $BlockEntityTicker<(X)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<X extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: X): $GameEventListener
public "getBlockEntityType"(): $BlockEntityType<(T)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "registerAdditional"(arg0: $RegistrationContext$Type, arg1: $Registerable$EntryCollector$Type): void
public "initTracking"(arg0: $RegistrationContext$Type, arg1: $Registerable$TrackingCollector$Type): void
get "blockEntityType"(): $BlockEntityType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBE$Type<T> = ($BlockBE<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBE_<T> = $BlockBE$Type<(T)>;
}}
declare module "packages/org/moddingx/libx/base/tile/$BlockEntityBase" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $BlockEntityBase extends $BlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, ...arg3: ($Capability$Type<(any)>)[])

public "setDispatchable"(): void
public "onLoad"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBase$Type = ($BlockEntityBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityBase_ = $BlockEntityBase$Type;
}}
declare module "packages/org/moddingx/libx/impl/crafting/recipe/$EmptyRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$EmptyRecipe, $EmptyRecipe$Type} from "packages/org/moddingx/libx/impl/crafting/recipe/$EmptyRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $EmptyRecipe$Serializer implements $RecipeSerializer<($EmptyRecipe)> {
static readonly "INSTANCE": $EmptyRecipe$Serializer


public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $EmptyRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $EmptyRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $EmptyRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $EmptyRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyRecipe$Serializer$Type = ($EmptyRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyRecipe$Serializer_ = $EmptyRecipe$Serializer$Type;
}}
declare module "packages/org/moddingx/libx/creativetab/$CreativeTabItemProvider" {
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CreativeTabItemProvider {

 "makeCreativeTabStacks"(): $Stream<($ItemStack)>

(): $Stream<($ItemStack)>
}

export namespace $CreativeTabItemProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabItemProvider$Type = ($CreativeTabItemProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabItemProvider_ = $CreativeTabItemProvider$Type;
}}
declare module "packages/org/moddingx/libx/registration/$Registerable$TrackingCollector" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"

export interface $Registerable$TrackingCollector {

 "run"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $Consumer$Type<(T)>): void
 "track"(arg0: $IForgeRegistry$Type<(any)>, arg1: $Field$Type): void
 "trackNamed"(arg0: $IForgeRegistry$Type<(any)>, arg1: string, arg2: $Field$Type): void
 "runNamed"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: string, arg2: $Consumer$Type<(T)>): void
}

export namespace $Registerable$TrackingCollector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registerable$TrackingCollector$Type = ($Registerable$TrackingCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registerable$TrackingCollector_ = $Registerable$TrackingCollector$Type;
}}
declare module "packages/org/moddingx/libx/registration/$SetupContext" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$RegistrationContext, $RegistrationContext$Type} from "packages/org/moddingx/libx/registration/$RegistrationContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ModXRegistration, $ModXRegistration$Type} from "packages/org/moddingx/libx/mod/$ModXRegistration"

export class $SetupContext extends $RegistrationContext {

constructor(arg0: $RegistrationContext$Type, arg1: $Consumer$Type<($Runnable$Type)>)
constructor(arg0: $ModXRegistration$Type, arg1: $ResourceLocation$Type, arg2: $ResourceKey$Type<(any)>, arg3: $Consumer$Type<($Runnable$Type)>)

public "enqueue"(arg0: $Runnable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetupContext$Type = ($SetupContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetupContext_ = $SetupContext$Type;
}}
declare module "packages/org/moddingx/libx/base/$ItemBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CreativeTabItemProvider, $CreativeTabItemProvider$Type} from "packages/org/moddingx/libx/creativetab/$CreativeTabItemProvider"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ModX, $ModX$Type} from "packages/org/moddingx/libx/mod/$ModX"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBase extends $Item implements $CreativeTabItemProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ModX$Type, arg1: $Item$Properties$Type)

public "makeCreativeTabStacks"(): $Stream<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBase$Type = ($ItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBase_ = $ItemBase$Type;
}}
declare module "packages/org/moddingx/libx/command/$EnumArgument2$Info$Template" {
import {$EnumArgument2, $EnumArgument2$Type} from "packages/org/moddingx/libx/command/$EnumArgument2"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $EnumArgument2$Info$Template implements $ArgumentTypeInfo$Template<($EnumArgument2<(any)>)> {


public "instantiate"(arg0: $CommandBuildContext$Type): $EnumArgument2<(any)>
public "type"(): $ArgumentTypeInfo<($EnumArgument2<(any)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument2$Info$Template$Type = ($EnumArgument2$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument2$Info$Template_ = $EnumArgument2$Info$Template$Type;
}}
declare module "packages/org/moddingx/libx/menu/$DefaultMenu" {
import {$MenuBase, $MenuBase$Type} from "packages/org/moddingx/libx/menu/$MenuBase"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $DefaultMenu extends $MenuBase {
readonly "firstOutputSlot": integer
readonly "firstInventorySlot": integer
readonly "playerInventory": $IItemHandler
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer


public "getLevel"(): $Level
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultMenu$Type = ($DefaultMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultMenu_ = $DefaultMenu$Type;
}}
declare module "packages/org/moddingx/libx/menu/$BlockEntityMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockMenu, $BlockMenu$Type} from "packages/org/moddingx/libx/menu/$BlockMenu"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $BlockEntityMenu<T extends $BlockEntity> extends $BlockMenu {
readonly "firstOutputSlot": integer
readonly "firstInventorySlot": integer
readonly "playerInventory": $IItemHandler
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer

constructor(arg0: $MenuType$Type<(any)>, arg1: integer, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Inventory$Type, arg5: $Player$Type, arg6: integer, arg7: integer)

public "getBlockEntity"(): T
get "blockEntity"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityMenu$Type<T> = ($BlockEntityMenu<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityMenu_<T> = $BlockEntityMenu$Type<(T)>;
}}
declare module "packages/org/moddingx/libx/registration/$Registerable" {
import {$RegistrationContext, $RegistrationContext$Type} from "packages/org/moddingx/libx/registration/$RegistrationContext"
import {$Registerable$TrackingCollector, $Registerable$TrackingCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$TrackingCollector"
import {$SetupContext, $SetupContext$Type} from "packages/org/moddingx/libx/registration/$SetupContext"
import {$Registerable$EntryCollector, $Registerable$EntryCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$EntryCollector"

export interface $Registerable {

 "registerClient"(arg0: $SetupContext$Type): void
 "registerCommon"(arg0: $SetupContext$Type): void
 "registerAdditional"(arg0: $RegistrationContext$Type, arg1: $Registerable$EntryCollector$Type): void
 "initTracking"(arg0: $RegistrationContext$Type, arg1: $Registerable$TrackingCollector$Type): void
}

export namespace $Registerable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registerable$Type = ($Registerable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registerable_ = $Registerable$Type;
}}
declare module "packages/org/moddingx/libx/base/tile/$MenuBlockBE" {
import {$BlockBE, $BlockBE$Type} from "packages/org/moddingx/libx/base/tile/$BlockBE"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ModX, $ModX$Type} from "packages/org/moddingx/libx/mod/$ModX"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMenu, $BlockEntityMenu$Type} from "packages/org/moddingx/libx/menu/$BlockEntityMenu"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Registerable$EntryCollector, $Registerable$EntryCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$EntryCollector"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RegistrationContext, $RegistrationContext$Type} from "packages/org/moddingx/libx/registration/$RegistrationContext"
import {$Registerable$TrackingCollector, $Registerable$TrackingCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$TrackingCollector"

export class $MenuBlockBE<T extends $BlockEntity, C extends $BlockEntityMenu<(T)>> extends $BlockBE<(T)> {
readonly "menu": $MenuType<(C)>
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

constructor(arg0: $ModX$Type, arg1: $Class$Type<(T)>, arg2: $MenuType$Type<(C)>, arg3: $BlockBehaviour$Properties$Type)
constructor(arg0: $ModX$Type, arg1: $Class$Type<(T)>, arg2: $MenuType$Type<(C)>, arg3: $BlockBehaviour$Properties$Type, arg4: $Item$Properties$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "registerAdditional"(arg0: $RegistrationContext$Type, arg1: $Registerable$EntryCollector$Type): void
public "initTracking"(arg0: $RegistrationContext$Type, arg1: $Registerable$TrackingCollector$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBlockBE$Type<T, C> = ($MenuBlockBE<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuBlockBE_<T, C> = $MenuBlockBE$Type<(T), (C)>;
}}
declare module "packages/org/moddingx/libx/base/$BlockBase$BaseBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$CreativeTabItemProvider, $CreativeTabItemProvider$Type} from "packages/org/moddingx/libx/creativetab/$CreativeTabItemProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockBase, $BlockBase$Type} from "packages/org/moddingx/libx/base/$BlockBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockBase$BaseBlockItem extends $BlockItem implements $CreativeTabItemProvider {
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

constructor(arg0: $BlockBase$Type, arg1: $Block$Type, arg2: $Item$Properties$Type)

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public "makeCreativeTabStacks"(): $Stream<($ItemStack)>
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBase$BaseBlockItem$Type = ($BlockBase$BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBase$BaseBlockItem_ = $BlockBase$BaseBlockItem$Type;
}}
declare module "packages/org/moddingx/libx/mod/$ModX" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModX {
readonly "modid": string


public "resource"(arg0: string): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModX$Type = ($ModX);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModX_ = $ModX$Type;
}}
declare module "packages/org/moddingx/libx/fi/$Function3" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export interface $Function3<A, B, C, R> {

 "apply"(arg0: A, arg1: B, arg2: C): R
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function3<(A), (B), (C), (V)>
 "partial"(arg0: A, arg1: B, arg2: C): $Supplier<(R)>
 "partial"(arg0: A): $BiFunction<(B), (C), (R)>
 "partial"(arg0: A, arg1: B): $Function<(C), (R)>

(arg0: A, arg1: B, arg2: C): R
}

export namespace $Function3 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function3$Type<A, B, C, R> = ($Function3<(A), (B), (C), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function3_<A, B, C, R> = $Function3$Type<(A), (B), (C), (R)>;
}}
declare module "packages/org/moddingx/libx/fi/$Function4" {
import {$Function3, $Function3$Type} from "packages/org/moddingx/libx/fi/$Function3"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export interface $Function4<A, B, C, D, R> {

 "apply"(arg0: A, arg1: B, arg2: C, arg3: D): R
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function4<(A), (B), (C), (D), (V)>
 "partial"(arg0: A, arg1: B, arg2: C, arg3: D): $Supplier<(R)>
 "partial"(arg0: A): $Function3<(B), (C), (D), (R)>
 "partial"(arg0: A, arg1: B): $BiFunction<(C), (D), (R)>
 "partial"(arg0: A, arg1: B, arg2: C): $Function<(D), (R)>

(arg0: A, arg1: B, arg2: C, arg3: D): R
}

export namespace $Function4 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function4$Type<A, B, C, D, R> = ($Function4<(A), (B), (C), (D), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function4_<A, B, C, D, R> = $Function4$Type<(A), (B), (C), (D), (R)>;
}}
declare module "packages/org/moddingx/libx/fi/$Function5" {
import {$Function3, $Function3$Type} from "packages/org/moddingx/libx/fi/$Function3"
import {$Function4, $Function4$Type} from "packages/org/moddingx/libx/fi/$Function4"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export interface $Function5<A, B, C, D, E, R> {

 "apply"(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E): R
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function5<(A), (B), (C), (D), (E), (V)>
 "partial"(arg0: A, arg1: B): $Function3<(C), (D), (E), (R)>
 "partial"(arg0: A): $Function4<(B), (C), (D), (E), (R)>
 "partial"(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E): $Supplier<(R)>
 "partial"(arg0: A, arg1: B, arg2: C): $BiFunction<(D), (E), (R)>
 "partial"(arg0: A, arg1: B, arg2: C, arg3: D): $Function<(E), (R)>

(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E): R
}

export namespace $Function5 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function5$Type<A, B, C, D, E, R> = ($Function5<(A), (B), (C), (D), (E), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function5_<A, B, C, D, E, R> = $Function5$Type<(A), (B), (C), (D), (E), (R)>;
}}
declare module "packages/org/moddingx/libx/fi/$Function6" {
import {$Function3, $Function3$Type} from "packages/org/moddingx/libx/fi/$Function3"
import {$Function4, $Function4$Type} from "packages/org/moddingx/libx/fi/$Function4"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function5, $Function5$Type} from "packages/org/moddingx/libx/fi/$Function5"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export interface $Function6<A, B, C, D, E, F, R> {

 "apply"(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F): R
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function6<(A), (B), (C), (D), (E), (F), (V)>
 "partial"(arg0: A, arg1: B): $Function4<(C), (D), (E), (F), (R)>
 "partial"(arg0: A): $Function5<(B), (C), (D), (E), (F), (R)>
 "partial"(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F): $Supplier<(R)>
 "partial"(arg0: A, arg1: B, arg2: C): $Function3<(D), (E), (F), (R)>
 "partial"(arg0: A, arg1: B, arg2: C, arg3: D): $BiFunction<(E), (F), (R)>
 "partial"(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E): $Function<(F), (R)>

(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F): R
}

export namespace $Function6 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function6$Type<A, B, C, D, E, F, R> = ($Function6<(A), (B), (C), (D), (E), (F), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function6_<A, B, C, D, E, F, R> = $Function6$Type<(A), (B), (C), (D), (E), (F), (R)>;
}}
declare module "packages/org/moddingx/libx/registration/$RegistrationContext" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModXRegistration, $ModXRegistration$Type} from "packages/org/moddingx/libx/mod/$ModXRegistration"

export class $RegistrationContext {

constructor(arg0: $ModXRegistration$Type, arg1: $ResourceLocation$Type, arg2: $ResourceKey$Type<(any)>)

public "id"(): $ResourceLocation
public "key"(): $Optional<($ResourceKey<(any)>)>
public "mod"(): $ModXRegistration
public "registry"(): $Optional<($ResourceKey<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrationContext$Type = ($RegistrationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrationContext_ = $RegistrationContext$Type;
}}
declare module "packages/org/moddingx/libx/menu/$BlockMenu" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Function5, $Function5$Type} from "packages/org/moddingx/libx/fi/$Function5"
import {$Function6, $Function6$Type} from "packages/org/moddingx/libx/fi/$Function6"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$DefaultMenu, $DefaultMenu$Type} from "packages/org/moddingx/libx/menu/$DefaultMenu"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $BlockMenu extends $DefaultMenu {
readonly "firstOutputSlot": integer
readonly "firstInventorySlot": integer
readonly "playerInventory": $IItemHandler
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer

constructor(arg0: $MenuType$Type<(any)>, arg1: integer, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Inventory$Type, arg5: $Player$Type, arg6: integer, arg7: integer)

public "stillValid"(arg0: $Player$Type): boolean
public "getPos"(): $BlockPos
public static "openMenu"(arg0: $ServerPlayer$Type, arg1: $MenuType$Type<(any)>, arg2: $Component$Type, arg3: $BlockPos$Type): void
public static "createMenuType"<T extends $BlockMenu>(arg0: $Function6$Type<($MenuType$Type<(T)>), (integer), ($Level$Type), ($BlockPos$Type), ($Inventory$Type), ($Player$Type), (T)>): $MenuType<(T)>
public static "createMenuType"<T extends $BlockMenu>(arg0: $Function5$Type<(integer), ($Level$Type), ($BlockPos$Type), ($Inventory$Type), ($Player$Type), (T)>): $MenuType<(T)>
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMenu$Type = ($BlockMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMenu_ = $BlockMenu$Type;
}}
declare module "packages/org/moddingx/libx/mod/$ModXRegistration" {
import {$ModX, $ModX$Type} from "packages/org/moddingx/libx/mod/$ModX"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $ModXRegistration extends $ModX {
readonly "modid": string


public "register"<T>(arg0: $ResourceKey$Type<(any)>, arg1: string, arg2: T): void
public "addRegistrationHandler"(arg0: $Runnable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModXRegistration$Type = ($ModXRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModXRegistration_ = $ModXRegistration$Type;
}}
declare module "packages/org/moddingx/libx/menu/$MenuBase" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $MenuBase extends $AbstractContainerMenu {
readonly "playerInventory": $IItemHandler
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBase$Type = ($MenuBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuBase_ = $MenuBase$Type;
}}
declare module "packages/org/moddingx/libx/command/$EnumArgument2" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $EnumArgument2<T extends $Enum<(T)>> implements $ArgumentType<(T)> {


public static "enumArgument"<R extends $Enum<(R)>>(arg0: $Class$Type<(R)>): $EnumArgument2<(R)>
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument2$Type<T> = ($EnumArgument2<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument2_<T> = $EnumArgument2$Type<(T)>;
}}
declare module "packages/org/moddingx/libx/command/$EnumArgument2$Info" {
import {$EnumArgument2$Info$Template, $EnumArgument2$Info$Template$Type} from "packages/org/moddingx/libx/command/$EnumArgument2$Info$Template"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$EnumArgument2, $EnumArgument2$Type} from "packages/org/moddingx/libx/command/$EnumArgument2"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"

export class $EnumArgument2$Info implements $ArgumentTypeInfo<($EnumArgument2<(any)>), ($EnumArgument2$Info$Template)> {
static readonly "INSTANCE": $EnumArgument2$Info


public "unpack"(arg0: $EnumArgument2$Type<(any)>): $EnumArgument2$Info$Template
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $EnumArgument2$Info$Template
public "serializeToJson"(arg0: $EnumArgument2$Info$Template$Type, arg1: $JsonObject$Type): void
public "serializeToNetwork"(arg0: $EnumArgument2$Info$Template$Type, arg1: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument2$Info$Type = ($EnumArgument2$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument2$Info_ = $EnumArgument2$Info$Type;
}}
declare module "packages/org/moddingx/libx/registration/$Registerable$EntryCollector" {
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $Registerable$EntryCollector {

 "register"<T>(arg0: $ResourceKey$Type<(any)>, arg1: T): void
 "registerNamed"<T>(arg0: $ResourceKey$Type<(any)>, arg1: string, arg2: T): void
}

export namespace $Registerable$EntryCollector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registerable$EntryCollector$Type = ($Registerable$EntryCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registerable$EntryCollector_ = $Registerable$EntryCollector$Type;
}}
