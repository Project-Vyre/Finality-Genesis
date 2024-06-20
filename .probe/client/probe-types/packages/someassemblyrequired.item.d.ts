declare module "packages/someassemblyrequired/item/sandwich/$SandwichItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SandwichItem extends $BlockItem {
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

public static "of"(...arg0: ($ItemStack$Type)[]): $ItemStack
public static "of"(arg0: $List$Type<($ItemStack$Type)>): $ItemStack
public "place"(arg0: $UseOnContext$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $InteractionResult
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "makeSandwich"(...arg0: ($ItemLike$Type)[]): $ItemStack
public static "makeSandwich"(...arg0: ($ItemStack$Type)[]): $ItemStack
public static "makeSandwich"(arg0: $Potion$Type): $ItemStack
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandwichItem$Type = ($SandwichItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandwichItem_ = $SandwichItem$Type;
}}
declare module "packages/someassemblyrequired/item/sandwich/$SandwichItemHandler" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $SandwichItemHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<($ListTag)>, $Iterable<($ItemStack)> {

constructor()

public "add"(arg0: $SandwichItemHandler$Type): void
public "add"(arg0: $ItemStack$Type): void
public static "get"(arg0: $ICapabilityProvider$Type): $Optional<($SandwichItemHandler)>
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($ItemStack)>
public "top"(): $ItemStack
public "pop"(): void
public "getItemCount"(): integer
public "getTotalHeight"(): integer
public "getAverageSaturation"(): float
public "hasTopAndBottomBread"(): boolean
public "deserializeNBT"(arg0: $ListTag$Type): void
public "getSlots"(): integer
public "bottom"(): $ItemStack
public "setItems"(arg0: $List$Type<($ItemStack$Type)>): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "getItems"(): $List<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getFoodProperties"(): $FoodProperties
public "canAdd"(arg0: $SandwichItemHandler$Type): boolean
public "getTotalNutrition"(): integer
public "isDoubleDeckerSandwich"(): boolean
public static "serializeItems"(arg0: $List$Type<($ItemStack$Type)>): $ListTag
public "getAsItem"(): $ItemStack
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlotLimit"(i: integer): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "isMutable"(): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "setChanged"(): void
public "asContainer"(): $Container
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getHeight"(): integer
public "getWidth"(): integer
public "clear"(ingredient: $Ingredient$Type): void
public "clear"(): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "isEmpty"(): boolean
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "empty"(): boolean
get "itemCount"(): integer
get "totalHeight"(): integer
get "averageSaturation"(): float
get "slots"(): integer
set "items"(value: $List$Type<($ItemStack$Type)>)
get "items"(): $List<($ItemStack)>
get "foodProperties"(): $FoodProperties
get "totalNutrition"(): integer
get "doubleDeckerSandwich"(): boolean
get "asItem"(): $ItemStack
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandwichItemHandler$Type = ($SandwichItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandwichItemHandler_ = $SandwichItemHandler$Type;
}}
declare module "packages/someassemblyrequired/item/$EnchantedGoldenAppleSlicesItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnchantedGoldenAppleSlicesItem extends $Item {
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

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedGoldenAppleSlicesItem$Type = ($EnchantedGoldenAppleSlicesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantedGoldenAppleSlicesItem_ = $EnchantedGoldenAppleSlicesItem$Type;
}}
declare module "packages/someassemblyrequired/item/$SpreadItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpreadItem extends $Item {
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

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpreadItem$Type = ($SpreadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpreadItem_ = $SpreadItem$Type;
}}
