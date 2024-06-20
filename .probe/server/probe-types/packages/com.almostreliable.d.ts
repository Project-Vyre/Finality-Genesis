declare module "packages/com/almostreliable/ponderjs/$PonderItemTagEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$PonderTag, $PonderTag$Type} from "packages/com/simibubi/create/foundation/ponder/$PonderTag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $PonderItemTagEventJS extends $EventJS {

constructor()

public "add"(arg0: $PonderTag$Type, arg1: $Ingredient$Type): void
public "remove"(arg0: $PonderTag$Type, arg1: $Ingredient$Type): void
public "createTag"(arg0: string, arg1: $ItemStack$Type, arg2: string, arg3: string): void
public "createTag"(arg0: string, arg1: $ItemStack$Type, arg2: string, arg3: string, arg4: $Ingredient$Type): void
public "removeTag"(...arg0: ($PonderTag$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderItemTagEventJS$Type = ($PonderItemTagEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderItemTagEventJS_ = $PonderItemTagEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder" {
import {$DistancePredicate, $DistancePredicate$Type} from "packages/net/minecraft/advancements/critereon/$DistancePredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $DistancePredicateBuilder {

constructor()

public "build"(): $DistancePredicate
public "x"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "z"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "y"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "absolute"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "horizontal"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistancePredicateBuilder$Type = ($DistancePredicateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistancePredicateBuilder_ = $DistancePredicateBuilder$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$PaletteWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PaletteWrapper {

constructor(arg0: $StructureTemplate$Palette$Type, arg1: $Vec3i$Type)

public "add"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $CompoundTag$Type): void
public "add"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "get"(arg0: $BlockPos$Type): $StructureTemplate$StructureBlockInfo
public "clear"(): void
public "forEach"(arg0: $Consumer$Type<($StructureTemplate$StructureBlockInfo$Type)>): void
public "removeIf"(arg0: $Predicate$Type<($StructureTemplate$StructureBlockInfo$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteWrapper$Type = ($PaletteWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteWrapper_ = $PaletteWrapper$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$PlayerEnchantEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$EnchantmentTableServerEventJS, $EnchantmentTableServerEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export class $PlayerEnchantEventJS extends $EnchantmentTableServerEventJS {

constructor(arg0: integer, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $EnchantmentMenuProcess$Type)

public "getEnchantments"(): $List<($EnchantmentInstance)>
public "getClickedButton"(): integer
public "getCosts"(): integer
public "getEnchantmentIds"(): $List<($ResourceLocation)>
get "enchantments"(): $List<($EnchantmentInstance)>
get "clickedButton"(): integer
get "costs"(): integer
get "enchantmentIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEnchantEventJS$Type = ($PlayerEnchantEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEnchantEventJS_ = $PlayerEnchantEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/potion/$PotionBrewingRegisterEvent" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $PotionBrewingRegisterEvent extends $EventJS {

constructor()

public "addCustomBrewing"(arg0: $Ingredient$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type): void
public "removeByPotion"(arg0: $Potion$Type, arg1: $Ingredient$Type, arg2: $Potion$Type): void
public "removeContainer"(arg0: $Ingredient$Type): void
public "addContainerRecipe"(arg0: $Item$Type, arg1: $Ingredient$Type, arg2: $Item$Type): void
public "validateContainer"(arg0: $Item$Type, arg1: $Ingredient$Type, arg2: $Item$Type): void
public "addPotionBrewing"(arg0: $Ingredient$Type, arg1: $Potion$Type, arg2: $Potion$Type): void
public "addPotionBrewing"(arg0: $Ingredient$Type, arg1: $Potion$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingRegisterEvent$Type = ($PotionBrewingRegisterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewingRegisterEvent_ = $PotionBrewingRegisterEvent$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$WandererTradingEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"

export class $WandererTradingEventJS extends $EventJS {

constructor(arg0: $Int2ObjectMap$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>)

public "removeTrades"(arg0: $TradeFilter$Type): void
public "getTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: integer, arg1: T): T
public "addTrade"(arg0: integer, arg1: ($TradeItem$Type)[], arg2: $TradeItem$Type): $SimpleTrade
public "removeVanillaTrades"(arg0: integer): void
public "addCustomTrade"(arg0: integer, arg1: $TransformableTrade$Transformer$Type): void
public "removeModdedTrades"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandererTradingEventJS$Type = ($WandererTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandererTradingEventJS_ = $WandererTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/unified/utils/$UnifyTag" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $UnifyTag<T> extends $Record {

constructor(boundType: $Class$Type<(T)>, location: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "location"(): $ResourceLocation
public static "block"(location: $ResourceLocation$Type): $UnifyTag<($Block)>
public static "item"(location: $ResourceLocation$Type): $UnifyTag<($Item)>
public "boundType"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnifyTag$Type<T> = ($UnifyTag<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnifyTag_<T> = $UnifyTag$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$FilterAvailableEnchantmentsEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterAvailableEnchantmentsEventJS extends $EventJS {

constructor(arg0: $List$Type<($EnchantmentInstance$Type)>, arg1: integer, arg2: $ItemStack$Type)

public "add"(...arg0: ($Enchantment$Type)[]): void
public "remove"(...arg0: ($Enchantment$Type)[]): void
public "getItem"(): $ItemStack
public "addWithLevel"(arg0: $Enchantment$Type, arg1: integer): void
public "getPowerLevel"(): integer
public "getEnchantmentInstances"(): $List<($EnchantmentInstance)>
public "printEnchantmentInstances"(): void
get "item"(): $ItemStack
get "powerLevel"(): integer
get "enchantmentInstances"(): $List<($EnchantmentInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterAvailableEnchantmentsEventJS$Type = ($FilterAvailableEnchantmentsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterAvailableEnchantmentsEventJS_ = $FilterAvailableEnchantmentsEventJS$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder" {
import {$ParticleTransformation, $ParticleTransformation$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ParticleTransformation$Simple, $ParticleTransformation$Simple$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation$Simple"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ParticleDataBuilder<O extends $ParticleDataBuilder<(O), (PO)>, PO extends $ParticleOptions> {

constructor()

public "physics"(arg0: boolean): O
public "transformMotion"(arg0: $ParticleTransformation$Simple$Type): O
public "scale"(arg0: float): O
public "transform"(arg0: $ParticleTransformation$Type): O
public "delta"(arg0: $Vec3$Type): O
public "color"(arg0: $Color$Type): O
public "lifetime"(arg0: integer): O
public "roll"(arg0: float): O
public "collision"(arg0: boolean): O
public "area"(arg0: $Vec3$Type): O
public "gravity"(arg0: float): O
public "density"(arg0: integer): O
public "speed"(arg0: $Vec3$Type): O
public "transformPosition"(arg0: $ParticleTransformation$Simple$Type): O
public "motion"(arg0: $Vec3$Type): O
public "friction"(arg0: float): O
public "withinBlockSpace"(): O
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleDataBuilder$Type<O, PO> = ($ParticleDataBuilder<(O), (PO)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleDataBuilder_<O, PO> = $ParticleDataBuilder$Type<(O), (PO)>;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/component/$BlockReference" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BlockReference implements $Predicate<($BlockState)> {


public "test"(blockState: $BlockState$Type): boolean
public "toJson"(): $JsonObject
public static "fromJson"(json: $JsonObject$Type): $BlockReference
public static "fromNetwork"(buffer: $FriendlyByteBuf$Type): $BlockReference
public "toNetwork"(buffer: $FriendlyByteBuf$Type): void
public "getDisplayState"(): $BlockState
public "negate"(): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
get "displayState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockReference$Type = ($BlockReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockReference_ = $BlockReference$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MapPosInfo extends $Record {

constructor(pos: $BlockPos$Type, name: $Component$Type)

public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPosInfo$Type = ($MapPosInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPosInfo_ = $MapPosInfo$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureLoadEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$StructureTemplateAccess, $StructureTemplateAccess$Type} from "packages/com/almostreliable/morejs/features/structure/$StructureTemplateAccess"
import {$PaletteWrapper, $PaletteWrapper$Type} from "packages/com/almostreliable/morejs/features/structure/$PaletteWrapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityInfoWrapper, $EntityInfoWrapper$Type} from "packages/com/almostreliable/morejs/features/structure/$EntityInfoWrapper"
import {$StructureTemplate, $StructureTemplate$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"

export class $StructureLoadEventJS extends $EventJS {

constructor(arg0: $StructureTemplateAccess$Type, arg1: $ResourceLocation$Type)

public "getStructureSize"(): $Vec3i
public "getEntitiesSize"(): integer
public "forEachPalettes"(arg0: $Consumer$Type<($PaletteWrapper$Type)>): void
public "removePalette"(arg0: integer): void
public "getPalettesSize"(): integer
public static "invoke"(arg0: $StructureTemplate$Type, arg1: $ResourceLocation$Type): void
public "getId"(): string
public "getEntities"(): $EntityInfoWrapper
public "getPalette"(arg0: integer): $PaletteWrapper
get "structureSize"(): $Vec3i
get "entitiesSize"(): integer
get "palettesSize"(): integer
get "id"(): string
get "entities"(): $EntityInfoWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureLoadEventJS$Type = ($StructureLoadEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureLoadEventJS_ = $StructureLoadEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/$MoreJSBinding" {
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$WeightedList$Builder, $WeightedList$Builder$Type} from "packages/com/almostreliable/morejs/util/$WeightedList$Builder"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"

export class $MoreJSBinding {

constructor()

public static "range"(arg0: any): $IntRange
public static "findStructure"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type, arg2: string, arg3: integer): $BlockPos
public static "findBiome"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type, arg2: string, arg3: integer): $BlockPos
public static "ofTradeItem"(arg0: any): $TradeItem
public static "ofWeightedList"(arg0: any): $WeightedList<(any)>
public static "ofTradeFilter"(arg0: any): $TradeFilter
public static "weightedList"(): $WeightedList$Builder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoreJSBinding$Type = ($MoreJSBinding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoreJSBinding_ = $MoreJSBinding$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeFilter" {
import {$TriConsumer, $TriConsumer$Type} from "packages/com/almostreliable/morejs/util/$TriConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$TradeTypes, $TradeTypes$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeTypes"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $TradeFilter {

constructor(arg0: $Ingredient$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type)

public "matchMerchantLevel"(arg0: integer): boolean
public "matchProfession"(arg0: $VillagerProfession$Type): boolean
public "match"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $TradeTypes$Type): boolean
public "match"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $TradeTypes$Type): boolean
public "matchType"(arg0: $TradeTypes$Type): boolean
public "onMatch"(arg0: $TriConsumer$Type<($ItemStack$Type), ($ItemStack$Type), ($ItemStack$Type)>): void
public "setProfessions"(arg0: $Set$Type<($VillagerProfession$Type)>): void
public "setTradeTypes"(arg0: $Set$Type<($TradeTypes$Type)>): void
public "setMerchantLevelMatcher"(arg0: $IntRange$Type): void
public "setOutputCountMatcher"(arg0: $IntRange$Type): void
public "setFirstCountMatcher"(arg0: $IntRange$Type): void
public "setSecondCountMatcher"(arg0: $IntRange$Type): void
set "professions"(value: $Set$Type<($VillagerProfession$Type)>)
set "tradeTypes"(value: $Set$Type<($TradeTypes$Type)>)
set "merchantLevelMatcher"(value: $IntRange$Type)
set "outputCountMatcher"(value: $IntRange$Type)
set "firstCountMatcher"(value: $IntRange$Type)
set "secondCountMatcher"(value: $IntRange$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeFilter$Type = ($TradeFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeFilter_ = $TradeFilter$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/compat/kubejs/$AlmostKube$OutputWrapper" {
import {$RecipeOutputs$MobOutputBuilder, $RecipeOutputs$MobOutputBuilder$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$MobOutputBuilder"
import {$RecipeOutputs$ItemOutputBuilder, $RecipeOutputs$ItemOutputBuilder$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$ItemOutputBuilder"

export class $AlmostKube$OutputWrapper {


public static "item"(o: any): $RecipeOutputs$ItemOutputBuilder
public static "mob"(o: any): $RecipeOutputs$MobOutputBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlmostKube$OutputWrapper$Type = ($AlmostKube$OutputWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlmostKube$OutputWrapper_ = $AlmostKube$OutputWrapper$Type;
}}
declare module "packages/com/almostreliable/ponderjs/api/$ExtendedSceneBuilder$ExtendedWorldInstructions" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockStateFunction, $BlockStateFunction$Type} from "packages/com/almostreliable/ponderjs/util/$BlockStateFunction"
import {$Selection, $Selection$Type} from "packages/com/simibubi/create/foundation/ponder/$Selection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ExtendedSceneBuilder, $ExtendedSceneBuilder$Type} from "packages/com/almostreliable/ponderjs/api/$ExtendedSceneBuilder"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SceneBuilder$WorldInstructions, $SceneBuilder$WorldInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$WorldInstructions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ElementLink, $ElementLink$Type} from "packages/com/simibubi/create/foundation/ponder/$ElementLink"
import {$EntityElement, $EntityElement$Type} from "packages/com/simibubi/create/foundation/ponder/element/$EntityElement"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ExtendedSceneBuilder$ExtendedWorldInstructions extends $SceneBuilder$WorldInstructions {

constructor(arg0: $ExtendedSceneBuilder$Type)

public "createEntity"(arg0: $EntityType$Type<(any)>, arg1: $Vec3$Type): $ElementLink<($EntityElement)>
public "createEntity"(arg0: $EntityType$Type<(any)>, arg1: $Vec3$Type, arg2: $Consumer$Type<($Entity$Type)>): $ElementLink<($EntityElement)>
public "modifyBlock"(arg0: $BlockPos$Type, arg1: $BlockStateFunction$Type, arg2: boolean): void
public "modifyBlockEntityNBT"(arg0: $Selection$Type, arg1: $Consumer$Type<($CompoundTag$Type)>): void
public "modifyBlockEntityNBT"(arg0: $Selection$Type, arg1: boolean, arg2: $Consumer$Type<($CompoundTag$Type)>): void
public "removeEntity"(arg0: $ElementLink$Type<($EntityElement$Type)>): void
public "setBlocks"(arg0: $Selection$Type, arg1: $BlockState$Type): void
public "setBlocks"(arg0: $Selection$Type, arg1: boolean, arg2: $BlockState$Type): void
public "modifyBlocks"(arg0: $Selection$Type, arg1: $BlockStateFunction$Type, arg2: boolean): void
public "modifyBlocks"(arg0: $Selection$Type, arg1: boolean, arg2: $BlockStateFunction$Type): void
public "modifyBlocks"(arg0: $Selection$Type, arg1: $BlockStateFunction$Type): void
/**
 * 
 * @deprecated
 */
public "modifyTileNBT"(arg0: $Selection$Type, arg1: $Consumer$Type<($CompoundTag$Type)>): void
/**
 * 
 * @deprecated
 */
public "modifyTileNBT"(arg0: $Selection$Type, arg1: $Consumer$Type<($CompoundTag$Type)>, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSceneBuilder$ExtendedWorldInstructions$Type = ($ExtendedSceneBuilder$ExtendedWorldInstructions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSceneBuilder$ExtendedWorldInstructions_ = $ExtendedSceneBuilder$ExtendedWorldInstructions$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/$AltarRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AltarRecipe, $AltarRecipe$Type} from "packages/com/almostreliable/summoningrituals/recipe/$AltarRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AltarRecipeSerializer implements $RecipeSerializer<($AltarRecipe)> {
static "MAX_INPUTS": integer

constructor()

public "fromJson"(id: $ResourceLocation$Type, json: $JsonObject$Type): $AltarRecipe
public "fromNetwork"(id: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $AltarRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $AltarRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $AltarRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltarRecipeSerializer$Type = ($AltarRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltarRecipeSerializer_ = $AltarRecipeSerializer$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$ItemOutputBuilder" {
import {$RecipeOutputs$RecipeOutputBuilder, $RecipeOutputs$RecipeOutputBuilder$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$RecipeOutputBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $RecipeOutputs$ItemOutputBuilder extends $RecipeOutputs$RecipeOutputBuilder {

constructor(stack: $ItemStack$Type)

public "item"(item: $ItemStack$Type): $RecipeOutputs$ItemOutputBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeOutputs$ItemOutputBuilder$Type = ($RecipeOutputs$ItemOutputBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeOutputs$ItemOutputBuilder_ = $RecipeOutputs$ItemOutputBuilder$Type;
}}
declare module "packages/com/almostreliable/ponderjs/api/$SceneBuildingUtilDelegate" {
import {$SceneBuildingUtil, $SceneBuildingUtil$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuildingUtil"
import {$SceneBuildingUtil$SelectionUtil, $SceneBuildingUtil$SelectionUtil$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuildingUtil$SelectionUtil"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SceneBuildingUtil$PositionUtil, $SceneBuildingUtil$PositionUtil$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuildingUtil$PositionUtil"
import {$SceneBuildingUtil$VectorUtil, $SceneBuildingUtil$VectorUtil$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuildingUtil$VectorUtil"

export class $SceneBuildingUtilDelegate {

constructor(arg0: $SceneBuildingUtil$Type)

public "getVector"(): $SceneBuildingUtil$VectorUtil
public "getDefaultState"(arg0: $Block$Type): $BlockState
public "getGrid"(): $SceneBuildingUtil$PositionUtil
public "getSelect"(): $SceneBuildingUtil$SelectionUtil
get "vector"(): $SceneBuildingUtil$VectorUtil
get "grid"(): $SceneBuildingUtil$PositionUtil
get "select"(): $SceneBuildingUtil$SelectionUtil
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneBuildingUtilDelegate$Type = ($SceneBuildingUtilDelegate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneBuildingUtilDelegate_ = $SceneBuildingUtilDelegate$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootEntry$Generator" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootEntry$Generator {

 "create"(arg0: $LootContext$Type): $ItemStack

(arg0: $LootContext$Type): $ItemStack
}

export namespace $LootEntry$Generator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$Generator$Type = ($LootEntry$Generator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntry$Generator_ = $LootEntry$Generator$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess" {
import {$EnchantmentState, $EnchantmentState$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $EnchantmentMenuProcess {

constructor(arg0: $EnchantmentMenu$Type)

public "getState"(): $EnchantmentState
public "setState"(arg0: $EnchantmentState$Type): void
public "getCurrentItem"(): $ItemStack
public "abortEvent"(arg0: $ItemStack$Type): void
public "clearEnchantments"(): void
public "isFreezeBroadcast"(): boolean
public "getEnchantments"(arg0: integer): $List<($EnchantmentInstance)>
public "setPlayer"(arg0: $Player$Type): void
public "setEnchantments"(arg0: integer, arg1: $List$Type<($EnchantmentInstance$Type)>): void
public "setFreezeBroadcast"(arg0: boolean): void
public "isItemEnchantable"(arg0: $ItemStack$Type): boolean
public "matchesCurrentItem"(arg0: $ItemStack$Type): boolean
public "prepareEvent"(arg0: $ItemStack$Type): void
public "storeItemIsEnchantable"(arg0: boolean, arg1: $ItemStack$Type): boolean
public "getPlayer"(): $Player
public "getMenu"(): $EnchantmentMenu
public "setCurrentItem"(arg0: $ItemStack$Type): void
get "state"(): $EnchantmentState
set "state"(value: $EnchantmentState$Type)
get "currentItem"(): $ItemStack
get "freezeBroadcast"(): boolean
set "player"(value: $Player$Type)
set "freezeBroadcast"(value: boolean)
get "player"(): $Player
get "menu"(): $EnchantmentMenu
set "currentItem"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuProcess$Type = ($EnchantmentMenuProcess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuProcess_ = $EnchantmentMenuProcess$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation$Data" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $ParticleTransformation$Data extends $Record {

constructor(position: $Vec3$Type, motion: $Vec3$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "position"(): $Vec3
public static "of"(arg0: any): $ParticleTransformation$Data
public "motion"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleTransformation$Data$Type = ($ParticleTransformation$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleTransformation$Data_ = $ParticleTransformation$Data$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Modifier {

constructor(probability: float, attribute: $Attribute$Type, operation: $AttributeModifier$Operation$Type, amount: $NumberProvider$Type, name: string, slots: $Function$Type<($ItemStack$Type), (($EquipmentSlot$Type)[])>, uuid: $UUID$Type)

public "createAttributeModifier"(context: $LootContext$Type): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Type = ($AddAttributesFunction$Modifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier_ = $AddAttributesFunction$Modifier$Type;
}}
declare module "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker" {
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
import {$ClientRecipeTracker$ClientRecipeLink, $ClientRecipeTracker$ClientRecipeLink$Type} from "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker$ClientRecipeLink"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ClientRecipeTracker implements $Recipe<($Container)> {
static readonly "ID": $ResourceLocation
static readonly "RECIPES": string
static readonly "NAMESPACE": string
static readonly "UNIFIED_FLAG": integer
static readonly "DUPLICATE_FLAG": integer
static readonly "SERIALIZER": $RecipeSerializer<($ClientRecipeTracker)>
static readonly "TYPE": $RecipeType<($ClientRecipeTracker)>


public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "getLink"(recipeId: $ResourceLocation$Type): $ClientRecipeTracker$ClientRecipeLink
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "assemble"(container: $Container$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "matches"(container: $Container$Type, level: $Level$Type): boolean
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
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
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
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
export type $ClientRecipeTracker$Type = ($ClientRecipeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker_ = $ClientRecipeTracker$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder" {
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AddAttributesFunction$Modifier$Builder, $AddAttributesFunction$Modifier$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder"
import {$AddAttributesFunction, $AddAttributesFunction$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {

constructor()

public "build"(): $AddAttributesFunction
public "add"(attribute: $Attribute$Type, amount: $NumberProvider$Type, action: $Consumer$Type<($AddAttributesFunction$Modifier$Builder$Type)>): $AddAttributesFunction$Builder
public "add"(modifier: $AddAttributesFunction$Modifier$Type): $AddAttributesFunction$Builder
public "simple"(attribute: $Attribute$Type, amount: $NumberProvider$Type): $AddAttributesFunction$Builder
public "simple"(probability: float, attribute: $Attribute$Type, amount: $NumberProvider$Type): $AddAttributesFunction$Builder
public "forSlots"(attribute: $Attribute$Type, amount: $NumberProvider$Type, slots: ($EquipmentSlot$Type)[]): $AddAttributesFunction$Builder
public "forSlots"(probability: float, attribute: $Attribute$Type, amount: $NumberProvider$Type, slots: ($EquipmentSlot$Type)[]): $AddAttributesFunction$Builder
public "preserveDefaults"(flag: boolean): $AddAttributesFunction$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Builder$Type = ($AddAttributesFunction$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Builder_ = $AddAttributesFunction$Builder$Type;
}}
declare module "packages/com/almostreliable/ponderjs/api/$AbstractPonderBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PonderTag, $PonderTag$Type} from "packages/com/simibubi/create/foundation/ponder/$PonderTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $AbstractPonderBuilder<S extends $AbstractPonderBuilder<(S)>> {

constructor(arg0: $Set$Type<($Item$Type)>)

public "tag"(...arg0: ($PonderTag$Type)[]): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPonderBuilder$Type<S> = ($AbstractPonderBuilder<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPonderBuilder_<S> = $AbstractPonderBuilder$Type<(S)>;
}}
declare module "packages/com/almostreliable/summoningrituals/compat/kubejs/$SummoningEventJS" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$AltarRecipe, $AltarRecipe$Type} from "packages/com/almostreliable/summoningrituals/recipe/$AltarRecipe"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"

export class $SummoningEventJS extends $LevelEventJS {


public "getRecipe"(): $AltarRecipe
public "getPos"(): $BlockPos
public "getPlayer"(): $ServerPlayer
get "recipe"(): $AltarRecipe
get "pos"(): $BlockPos
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummoningEventJS$Type = ($SummoningEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummoningEventJS_ = $SummoningEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$EnchantedItemTrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantedItemTrade extends $TransformableTrade<($EnchantedItemTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $Item$Type)

public "amount"(arg0: integer): $EnchantedItemTrade
public "amount"(arg0: integer, arg1: integer): $EnchantedItemTrade
public "enchantments"(...arg0: ($Enchantment$Type)[]): $EnchantedItemTrade
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedItemTrade$Type = ($EnchantedItemTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantedItemTrade_ = $EnchantedItemTrade$Type;
}}
declare module "packages/com/almostreliable/unified/config/$UnifyConfig$TagInheritanceMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UnifyConfig$TagInheritanceMode extends $Enum<($UnifyConfig$TagInheritanceMode)> {
static readonly "ALLOW": $UnifyConfig$TagInheritanceMode
static readonly "DENY": $UnifyConfig$TagInheritanceMode


public static "values"(): ($UnifyConfig$TagInheritanceMode)[]
public static "valueOf"(name: string): $UnifyConfig$TagInheritanceMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnifyConfig$TagInheritanceMode$Type = (("allow") | ("deny")) | ($UnifyConfig$TagInheritanceMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnifyConfig$TagInheritanceMode_ = $UnifyConfig$TagInheritanceMode$Type;
}}
declare module "packages/com/almostreliable/unified/compat/$AlmostKube" {
import {$UnifyConfig, $UnifyConfig$Type} from "packages/com/almostreliable/unified/config/$UnifyConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AlmostKube {


public static "getItemIds"(tag: $ResourceLocation$Type): $Set<(string)>
public static "getTags"(): $Set<(string)>
public static "getUnifyConfig"(): $UnifyConfig
public static "getPreferredItemForTag"(tag: $ResourceLocation$Type): $ItemStack
public static "getPreferredTagForItem"(stack: $ItemStack$Type): string
public static "getReplacementForItem"(stack: $ItemStack$Type): $ItemStack
get "tags"(): $Set<(string)>
get "unifyConfig"(): $UnifyConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlmostKube$Type = ($AlmostKube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlmostKube_ = $AlmostKube$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$LootActionsContainer" {
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$ILootAction, $ILootAction$Type} from "packages/com/almostreliable/lootjs/core/$ILootAction"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $LootActionsContainer<A extends $LootActionsContainer<(any)>> {

 "addAction"(arg0: $ILootAction$Type): A
 "addLoot"(...entries: ($LootEntry$Type)[]): A
 "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): A
 "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): A
 "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): A
 "triggerLightningStrike"(shouldDamage: boolean): A
 "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): A
 "addSequenceLoot"(...entries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): A
 "removeLoot"(filter: $ItemFilter$Type): A
 "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): A
 "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): A
 "dropExperience"(amount: integer): A

(arg0: $ILootAction$Type): A
}

export namespace $LootActionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionsContainer$Type<A> = ($LootActionsContainer<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootActionsContainer_<A> = $LootActionsContainer$Type<(A)>;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeSacrifices" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$RecipeSacrifices$Sacrifice, $RecipeSacrifices$Sacrifice$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeSacrifices$Sacrifice"

export class $RecipeSacrifices {

constructor()

public "getDisplayRegion"(): string
public "add"(mob: $EntityType$Type<(any)>, count: integer): void
public "get"(index: integer): $RecipeSacrifices$Sacrifice
public "test"(predicate: $Predicate$Type<(any)>): boolean
public "isEmpty"(): boolean
public "size"(): integer
public "getRegion"(pos: $BlockPos$Type): $AABB
public "toJson"(): $JsonElement
public "setRegion"(region: $Vec3i$Type): void
public static "fromJson"(json: $JsonObject$Type): $RecipeSacrifices
public static "fromNetwork"(buffer: $FriendlyByteBuf$Type): $RecipeSacrifices
public "toNetwork"(buffer: $FriendlyByteBuf$Type): void
get "displayRegion"(): string
get "empty"(): boolean
set "region"(value: $Vec3i$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSacrifices$Type = ($RecipeSacrifices);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSacrifices_ = $RecipeSacrifices$Type;
}}
declare module "packages/com/almostreliable/ponderjs/mixin/$PonderWorldAccessor" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $PonderWorldAccessor {

 "ponderjs$makeParticle"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle

(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
}

export namespace $PonderWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderWorldAccessor$Type = ($PonderWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderWorldAccessor_ = $PonderWorldAccessor$Type;
}}
declare module "packages/com/almostreliable/ponderjs/$PonderRegistryEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$PonderBuilderJS, $PonderBuilderJS$Type} from "packages/com/almostreliable/ponderjs/$PonderBuilderJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $PonderRegistryEventJS extends $EventJS {

constructor()

public "create"(arg0: $Ingredient$Type): $PonderBuilderJS
public "printParticleNames"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderRegistryEventJS$Type = ($PonderRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderRegistryEventJS_ = $PonderRegistryEventJS$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/inventory/$VanillaWrapper" {
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $VanillaWrapper extends $RecipeWrapper {


public "getItems"(): $List<($ItemStack)>
public "getCatalyst"(): $ItemStack
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "items"(): $List<($ItemStack)>
get "catalyst"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaWrapper$Type = ($VanillaWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaWrapper_ = $VanillaWrapper$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootHandler" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootHandler {

 "applyLootHandler"(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean

(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootHandler$Type = ($ILootHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootHandler_ = $ILootHandler$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ILootAction, $ILootAction$Type} from "packages/com/almostreliable/lootjs/core/$ILootAction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootActionsContainer, $LootActionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootActionsContainer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$LootContextJS, $LootContextJS$Type} from "packages/com/almostreliable/lootjs/kube/$LootContextJS"
import {$GroupedLootBuilder, $GroupedLootBuilder$Type} from "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootActionsBuilderJS implements $LootConditionsContainer<($LootActionsBuilderJS)>, $LootFunctionsContainer<($LootActionsBuilderJS)>, $LootActionsContainer<($LootActionsBuilderJS)> {
static readonly "DEPRECATED_MSG": string

constructor()

public "getLogName"(alternative: string): string
public "addAction"(action: $ILootAction$Type): $LootActionsBuilderJS
public "group"(callback: $Consumer$Type<($GroupedLootBuilder$Type)>): $LootActionsBuilderJS
public "apply"(action: $Consumer$Type<($LootContextJS$Type)>): $LootActionsBuilderJS
public "pool"(callback: $Consumer$Type<($GroupedLootBuilder$Type)>): $LootActionsBuilderJS
public "logName"(logName: string): $LootActionsBuilderJS
public "addFunction"(lootItemFunction: $LootItemFunction$Type): $LootActionsBuilderJS
public "playerAction"(action: $Consumer$Type<($ServerPlayer$Type)>): $LootActionsBuilderJS
public "and"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "not"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "or"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "addCondition"(builder: $LootItemCondition$Builder$Type): $LootActionsBuilderJS
public "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "survivesExplosion"(): $LootActionsBuilderJS
public "biome"(...resolvers: ($Resolver$Type)[]): $LootActionsBuilderJS
public "lightLevel"(min: integer, max: integer): $LootActionsBuilderJS
public "killedByPlayer"(): $LootActionsBuilderJS
public "randomChance"(value: float): $LootActionsBuilderJS
public "randomChanceWithLooting"(value: float, looting: float): $LootActionsBuilderJS
public "customCondition"(json: $JsonObject$Type): $LootActionsBuilderJS
public "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): $LootActionsBuilderJS
public "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): $LootActionsBuilderJS
public "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$Type, exact: boolean): $LootActionsBuilderJS
public "matchOffHand"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "timeCheck"(min: integer, max: integer): $LootActionsBuilderJS
public "timeCheck"(period: long, min: integer, max: integer): $LootActionsBuilderJS
public "weatherCheck"(map: $Map$Type<(string), (boolean)>): $LootActionsBuilderJS
public "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): $LootActionsBuilderJS
public "matchMainHand"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "anyStructure"(idOrTags: (string)[], exact: boolean): $LootActionsBuilderJS
public "matchFluid"(resolver: $Resolver$Type): $LootActionsBuilderJS
public "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "anyBiome"(...resolvers: ($Resolver$Type)[]): $LootActionsBuilderJS
public "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): $LootActionsBuilderJS
public "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): $LootActionsBuilderJS
public "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): $LootActionsBuilderJS
public "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "hasAnyStage"(...stages: (string)[]): $LootActionsBuilderJS
public "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): $LootActionsBuilderJS
public "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $List<($ILootCondition)>
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): $LootActionsBuilderJS
public "enchantRandomly"(): $LootActionsBuilderJS
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "replaceLore"(...components: ($Component$Type)[]): $LootActionsBuilderJS
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $LootActionsBuilderJS
public "limitCount"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "smeltLoot"(): $LootActionsBuilderJS
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "addNbt"(tag: $CompoundTag$Type): $LootActionsBuilderJS
public "addPotion"(potion: $Potion$Type): $LootActionsBuilderJS
public "customFunction"(json: $JsonObject$Type): $LootActionsBuilderJS
public "applyOreBonus"(enchantment: $Enchantment$Type): $LootActionsBuilderJS
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $LootActionsBuilderJS
public "setName"(component: $Component$Type): $LootActionsBuilderJS
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $LootActionsBuilderJS
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "addFunction"(builder: $LootItemFunction$Builder$Type): $LootActionsBuilderJS
public "addNBT"(tag: $CompoundTag$Type): $LootActionsBuilderJS
public "addLore"(...components: ($Component$Type)[]): $LootActionsBuilderJS
public "damage"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "simulateExplosionDecay"(): $LootActionsBuilderJS
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $LootActionsBuilderJS
public "addLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): $LootActionsBuilderJS
public "triggerLightningStrike"(shouldDamage: boolean): $LootActionsBuilderJS
public "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addSequenceLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "removeLoot"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $LootActionsBuilderJS
public "dropExperience"(amount: integer): $LootActionsBuilderJS
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionsBuilderJS$Type = ($LootActionsBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootActionsBuilderJS_ = $LootActionsBuilderJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureAfterPlaceEventJS" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import {$StructurePieceType, $StructurePieceType$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StructurePiece, $StructurePiece$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$StructureManager, $StructureManager$Type} from "packages/net/minecraft/world/level/$StructureManager"
import {$PiecesContainer, $PiecesContainer$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$PiecesContainer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StructureAfterPlaceEventJS extends $LevelEventJS {

constructor(arg0: $Structure$Type, arg1: $WorldGenLevel$Type, arg2: $StructureManager$Type, arg3: $ChunkGenerator$Type, arg4: $RandomSource$Type, arg5: $BoundingBox$Type, arg6: $ChunkPos$Type, arg7: $PiecesContainer$Type)

public "getId"(): $ResourceLocation
public "getType"(): $ResourceLocation
public "getStructure"(): $Structure
public "getChunkPos"(): $ChunkPos
public "getStructureManager"(): $StructureManager
public "getRandomSource"(): $RandomSource
public "getPiecesContainer"(): $PiecesContainer
public "getIntersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
public "getChunkGenerator"(): $ChunkGenerator
public "getWorldGenLevel"(): $WorldGenLevel
public "getPieceType"(arg0: $StructurePieceType$Type): $ResourceLocation
public "getGenStep"(): string
public "getChunkBoundingBox"(): $BoundingBox
public "getStructureBoundingBox"(): $BoundingBox
public "getIntersectionPieces"(): $Collection<($StructurePiece)>
public "getIntersectionBoxes"(): $Collection<($BoundingBox)>
get "id"(): $ResourceLocation
get "type"(): $ResourceLocation
get "structure"(): $Structure
get "chunkPos"(): $ChunkPos
get "structureManager"(): $StructureManager
get "randomSource"(): $RandomSource
get "piecesContainer"(): $PiecesContainer
get "intersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
get "chunkGenerator"(): $ChunkGenerator
get "worldGenLevel"(): $WorldGenLevel
get "genStep"(): string
get "chunkBoundingBox"(): $BoundingBox
get "structureBoundingBox"(): $BoundingBox
get "intersectionPieces"(): $Collection<($StructurePiece)>
get "intersectionBoxes"(): $Collection<($BoundingBox)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureAfterPlaceEventJS$Type = ($StructureAfterPlaceEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureAfterPlaceEventJS_ = $StructureAfterPlaceEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureBlockInfoModification" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $StructureBlockInfoModification {

 "getProperties"(): $Map<(string), (any)>
 "getId"(): string
 "getPosition"(): $BlockPos
 "getBlock"(): $Block
 "getNbt"(): $CompoundTag
 "setBlock"(arg0: $ResourceLocation$Type): void
 "setBlock"(arg0: $ResourceLocation$Type, arg1: $Map$Type<(string), (any)>): void
 "hasNbt"(): boolean
 "setNbt"(arg0: $CompoundTag$Type): void
 "setVanillaBlockState"(arg0: $BlockState$Type): void
}

export namespace $StructureBlockInfoModification {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureBlockInfoModification$Type = ($StructureBlockInfoModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureBlockInfoModification_ = $StructureBlockInfoModification$Type;
}}
declare module "packages/com/almostreliable/lootjs/filters/$ItemFilter" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemFilter extends $Predicate<($ItemStack)> {

 "test"(arg0: $ItemStack$Type): boolean
 "negate"(): $ItemFilter
 "and"(other: $ItemFilter$Type): $ItemFilter
 "or"(other: $ItemFilter$Type): $ItemFilter
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>

(filter: $ResourceLocationFilter$Type): $ItemFilter
}

export namespace $ItemFilter {
const ALWAYS_FALSE: $ItemFilter
const ALWAYS_TRUE: $ItemFilter
const SWORD: $ItemFilter
const PICKAXE: $ItemFilter
const AXE: $ItemFilter
const SHOVEL: $ItemFilter
const HOE: $ItemFilter
const TOOL: $ItemFilter
const POTION: $ItemFilter
const HAS_TIER: $ItemFilter
const PROJECTILE_WEAPON: $ItemFilter
const ARMOR: $ItemFilter
const WEAPON: $ItemFilter
const HEAD_ARMOR: $ItemFilter
const CHEST_ARMOR: $ItemFilter
const LEGS_ARMOR: $ItemFilter
const FEET_ARMOR: $ItemFilter
const FOOD: $ItemFilter
const DAMAGEABLE: $ItemFilter
const DAMAGED: $ItemFilter
const ENCHANTABLE: $ItemFilter
const ENCHANTED: $ItemFilter
const BLOCK: $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type, min: integer, max: integer): $ItemFilter
function and(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function not(itemFilter: $ItemFilter$Type): $ItemFilter
function or(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function custom(predicate: $Predicate$Type<($ItemStack$Type)>): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$Type): $ItemFilter
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$Type = ($ItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilter_ = $ItemFilter$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/$AltarRecipe$DAY_TIME" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $AltarRecipe$DAY_TIME extends $Enum<($AltarRecipe$DAY_TIME)> {
static readonly "ANY": $AltarRecipe$DAY_TIME
static readonly "DAY": $AltarRecipe$DAY_TIME
static readonly "NIGHT": $AltarRecipe$DAY_TIME


public static "values"(): ($AltarRecipe$DAY_TIME)[]
public static "valueOf"(name: string): $AltarRecipe$DAY_TIME
public "check"(level: $Level$Type, player: $ServerPlayer$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltarRecipe$DAY_TIME$Type = (("night") | ("any") | ("day")) | ($AltarRecipe$DAY_TIME);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltarRecipe$DAY_TIME_ = $AltarRecipe$DAY_TIME$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$StartTradingEventJS" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Merchant, $Merchant$Type} from "packages/net/minecraft/world/item/trading/$Merchant"
import {$OfferExtension, $OfferExtension$Type} from "packages/com/almostreliable/morejs/features/villager/$OfferExtension"

export class $StartTradingEventJS extends $PlayerEventJS {

constructor(arg0: $Player$Type, arg1: $Merchant$Type)

public "getMerchant"(): $Merchant
public "forEachOffers"(arg0: $BiConsumer$Type<($OfferExtension$Type), (integer)>): void
get "merchant"(): $Merchant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartTradingEventJS$Type = ($StartTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartTradingEventJS_ = $StartTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/$AltarRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$AltarRecipe$DAY_TIME, $AltarRecipe$DAY_TIME$Type} from "packages/com/almostreliable/summoningrituals/recipe/$AltarRecipe$DAY_TIME"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$AltarRecipe$WEATHER, $AltarRecipe$WEATHER$Type} from "packages/com/almostreliable/summoningrituals/recipe/$AltarRecipe$WEATHER"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeSacrifices, $RecipeSacrifices$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeSacrifices"
import {$BlockReference, $BlockReference$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$BlockReference"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$RecipeOutputs, $RecipeOutputs$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs"
import {$IngredientStack, $IngredientStack$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$IngredientStack"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$VanillaWrapper, $VanillaWrapper$Type} from "packages/com/almostreliable/summoningrituals/inventory/$VanillaWrapper"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $AltarRecipe implements $Recipe<($VanillaWrapper)> {
static readonly "CATALYST_CACHE": $Set<($Ingredient)>


public "matches"(inv: $VanillaWrapper$Type, level: $Level$Type): boolean
public "getDayTime"(): $AltarRecipe$DAY_TIME
public "getInputs"(): $NonNullList<($IngredientStack)>
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "assemble"(inv: $VanillaWrapper$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "getOutputs"(): $RecipeOutputs
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "isSpecial"(): boolean
public "getRecipeTime"(): integer
public "getBlockBelow"(): $BlockReference
public "getSacrifices"(): $RecipeSacrifices
public "getWeather"(): $AltarRecipe$WEATHER
public "getCatalyst"(): $Ingredient
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $VanillaWrapper$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
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
get "dayTime"(): $AltarRecipe$DAY_TIME
get "inputs"(): $NonNullList<($IngredientStack)>
get "outputs"(): $RecipeOutputs
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "recipeTime"(): integer
get "blockBelow"(): $BlockReference
get "sacrifices"(): $RecipeSacrifices
get "weather"(): $AltarRecipe$WEATHER
get "catalyst"(): $Ingredient
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
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
export type $AltarRecipe$Type = ($AltarRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltarRecipe_ = $AltarRecipe$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$OfferExtension" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $OfferExtension {

 "getOutput"(): $ItemStack
 "setOutput"(arg0: $ItemStack$Type): void
 "setDemand"(arg0: integer): void
 "setMaxUses"(arg0: integer): void
 "setPriceMultiplier"(arg0: float): void
 "replaceEmeralds"(arg0: $Item$Type): void
 "replaceItems"(arg0: $Ingredient$Type, arg1: $ItemStack$Type): void
 "isRewardingExp"(): boolean
 "setSecondInput"(arg0: $ItemStack$Type): void
 "setVillagerExperience"(arg0: integer): void
 "setRewardExp"(arg0: boolean): void
 "getFirstInput"(): $ItemStack
 "getSecondInput"(): $ItemStack
 "setFirstInput"(arg0: $ItemStack$Type): void
 "isDisabled"(): boolean
 "setDisabled"(arg0: boolean): void
}

export namespace $OfferExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferExtension$Type = ($OfferExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfferExtension_ = $OfferExtension$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$OutputType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecipeOutputs$OutputType extends $Enum<($RecipeOutputs$OutputType)> {
static readonly "ITEM": $RecipeOutputs$OutputType
static readonly "MOB": $RecipeOutputs$OutputType


public static "values"(): ($RecipeOutputs$OutputType)[]
public static "valueOf"(name: string): $RecipeOutputs$OutputType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeOutputs$OutputType$Type = (("mob") | ("item")) | ($RecipeOutputs$OutputType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeOutputs$OutputType_ = $RecipeOutputs$OutputType$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$RecipeOutput" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $RecipeOutputs$RecipeOutput<T> {


public "getCount"(): integer
public "getData"(): $CompoundTag
public "getOutput"(): T
get "count"(): integer
get "data"(): $CompoundTag
get "output"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeOutputs$RecipeOutput$Type<T> = ($RecipeOutputs$RecipeOutput<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeOutputs$RecipeOutput_<T> = $RecipeOutputs$RecipeOutput$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/util/$WeightedList$Builder" {
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"

export class $WeightedList$Builder<T> {

constructor()

public "build"(): $WeightedList<(T)>
public "add"(arg0: integer, arg1: T): $WeightedList$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$Builder$Type<T> = ($WeightedList$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList$Builder_<T> = $WeightedList$Builder$Type<(T)>;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $LootConditionsContainer<B extends $LootConditionsContainer<(any)>> {

 "and"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "not"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "or"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "addCondition"(builder: $LootItemCondition$Builder$Type): B
 "addCondition"(arg0: $ILootCondition$Type): B
 "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "survivesExplosion"(): B
 "biome"(...resolvers: ($Resolver$Type)[]): B
 "lightLevel"(min: integer, max: integer): B
 "killedByPlayer"(): B
 "randomChance"(value: float): B
 "randomChanceWithLooting"(value: float, looting: float): B
 "customCondition"(json: $JsonObject$Type): B
 "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): B
 "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): B
 "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): B
 "matchLoot"(filter: $ItemFilter$Type): B
 "matchLoot"(filter: $ItemFilter$Type, exact: boolean): B
 "matchOffHand"(filter: $ItemFilter$Type): B
 "timeCheck"(min: integer, max: integer): B
 "timeCheck"(period: long, min: integer, max: integer): B
 "weatherCheck"(map: $Map$Type<(string), (boolean)>): B
 "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): B
 "matchMainHand"(filter: $ItemFilter$Type): B
 "anyStructure"(idOrTags: (string)[], exact: boolean): B
 "matchFluid"(resolver: $Resolver$Type): B
 "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "anyBiome"(...resolvers: ($Resolver$Type)[]): B
 "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): B
 "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): B
 "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): B
 "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): B
 "hasAnyStage"(...stages: (string)[]): B
 "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): B
 "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): $List<($ILootCondition)>
 "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): B

(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
}

export namespace $LootConditionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConditionsContainer$Type<B> = ($LootConditionsContainer<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootConditionsContainer_<B> = $LootConditionsContainer$Type<(B)>;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$OfferModification" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $OfferModification {

constructor(arg0: $MerchantOffer$Type)

public "setOutput"(arg0: $ItemStack$Type): void
public "setMaxUses"(arg0: integer): void
public "getOutput"(): $ItemStack
public "getMerchantOffer"(): $MerchantOffer
public "getDemand"(): integer
public "setPriceMultiplier"(arg0: float): void
public "getFirstInput"(): $ItemStack
public "setFirstInput"(arg0: $ItemStack$Type): void
public "setSecondInput"(arg0: $ItemStack$Type): void
public "setDemand"(arg0: integer): void
public "setRewardExp"(arg0: boolean): void
public "isRewardingExp"(): boolean
public "getSecondInput"(): $ItemStack
public "getMaxUses"(): integer
public "getPriceMultiplier"(): float
public "setVillagerExperience"(arg0: integer): void
public "getVillagerExperience"(): integer
set "output"(value: $ItemStack$Type)
set "maxUses"(value: integer)
get "output"(): $ItemStack
get "merchantOffer"(): $MerchantOffer
get "demand"(): integer
set "priceMultiplier"(value: float)
get "firstInput"(): $ItemStack
set "firstInput"(value: $ItemStack$Type)
set "secondInput"(value: $ItemStack$Type)
set "demand"(value: integer)
set "rewardExp"(value: boolean)
get "rewardingExp"(): boolean
get "secondInput"(): $ItemStack
get "maxUses"(): integer
get "priceMultiplier"(): float
set "villagerExperience"(value: integer)
get "villagerExperience"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferModification$Type = ($OfferModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfferModification_ = $OfferModification$Type;
}}
declare module "packages/com/almostreliable/unified/config/$Config" {
import {$Config$Serializer, $Config$Serializer$Type} from "packages/com/almostreliable/unified/config/$Config$Serializer"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"

export class $Config {

constructor()

public static "load"<T extends $Config>(name: string, serializer: $Config$Serializer$Type<(T)>): T
public static "save"<T extends $Config>(p: $Path$Type, config: T, serializer: $Config$Serializer$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Type = ($Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config_ = $Config$Type;
}}
declare module "packages/com/almostreliable/ponderjs/util/$BlockStateFunction" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$BlockIDPredicate, $BlockIDPredicate$Type} from "packages/dev/latvian/mods/kubejs/block/predicate/$BlockIDPredicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $BlockStateFunction extends $Function<($BlockIDPredicate), ($BlockState)> {

 "apply"(arg0: $BlockIDPredicate$Type): $BlockState
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($BlockState)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($BlockIDPredicate), (V)>

(arg0: $Context$Type, arg1: any): $BlockStateFunction
}

export namespace $BlockStateFunction {
function of(arg0: $Context$Type, arg1: any): $BlockStateFunction
function from(arg0: $BlockStateFunction$Type): $UnaryOperator<($BlockState)>
function identity<T>(): $Function<($BlockIDPredicate), ($BlockIDPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateFunction$Type = ($BlockStateFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateFunction_ = $BlockStateFunction$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder$DustParticleDataBuilder" {
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$DustParticleOptionsBase, $DustParticleOptionsBase$Type} from "packages/net/minecraft/core/particles/$DustParticleOptionsBase"
import {$ParticleDataBuilder, $ParticleDataBuilder$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder"

export class $ParticleDataBuilder$DustParticleDataBuilder extends $ParticleDataBuilder<($ParticleDataBuilder$DustParticleDataBuilder), ($DustParticleOptionsBase)> {

constructor(arg0: $Color$Type, arg1: $Color$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleDataBuilder$DustParticleDataBuilder$Type = ($ParticleDataBuilder$DustParticleDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleDataBuilder$DustParticleDataBuilder_ = $ParticleDataBuilder$DustParticleDataBuilder$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootAction extends $ILootHandler {

 "applyLootHandler"(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean

(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootAction$Type = ($ILootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootAction_ = $ILootAction$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/altar/$AltarBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AltarBlock extends $Block implements $SimpleWaterloggedBlock, $EntityBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, nState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, nPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltarBlock$Type = ($AltarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltarBlock_ = $AltarBlock$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootContextType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LootContextType extends $Enum<($LootContextType)> {
static readonly "UNKNOWN": $LootContextType
static readonly "BLOCK": $LootContextType
static readonly "ENTITY": $LootContextType
static readonly "CHEST": $LootContextType
static readonly "FISHING": $LootContextType
static readonly "GIFT": $LootContextType
static readonly "PIGLIN_BARTER": $LootContextType
static readonly "ADVANCEMENT_ENTITY": $LootContextType
static readonly "ADVANCEMENT_REWARD": $LootContextType


public static "values"(): ($LootContextType)[]
public static "valueOf"(name: string): $LootContextType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextType$Type = (("gift") | ("chest") | ("piglin_barter") | ("advancement_entity") | ("advancement_reward") | ("fishing") | ("block") | ("entity") | ("unknown")) | ($LootContextType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextType_ = $LootContextType$Type;
}}
declare module "packages/com/almostreliable/unified/config/$UnifyConfig" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$UnifyTag, $UnifyTag$Type} from "packages/com/almostreliable/unified/utils/$UnifyTag"
import {$UnifyConfig$TagInheritanceMode, $UnifyConfig$TagInheritanceMode$Type} from "packages/com/almostreliable/unified/config/$UnifyConfig$TagInheritanceMode"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Config, $Config$Type} from "packages/com/almostreliable/unified/config/$Config"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnifyConfig extends $Config {
static readonly "NAME": string

constructor(modPriorities: $List$Type<(string)>, stoneStrata: $List$Type<(string)>, unbakedTags: $List$Type<(string)>, materials: $List$Type<(string)>, priorityOverrides: $Map$Type<($ResourceLocation$Type), (string)>, customTags: $Map$Type<($ResourceLocation$Type), ($Set$Type<($ResourceLocation$Type)>)>, tagOwnerships: $Map$Type<($ResourceLocation$Type), ($Set$Type<($ResourceLocation$Type)>)>, itemTagInheritanceMode: $Enum$Type<($UnifyConfig$TagInheritanceMode$Type)>, itemTagInheritance: $Map$Type<($ResourceLocation$Type), ($Set$Type<($Pattern$Type)>)>, blockTagInheritanceMode: $Enum$Type<($UnifyConfig$TagInheritanceMode$Type)>, blockTagInheritance: $Map$Type<($ResourceLocation$Type), ($Set$Type<($Pattern$Type)>)>, ignoredTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>, ignoredItems: $Set$Type<($Pattern$Type)>, ignoredRecipeTypes: $Set$Type<($Pattern$Type)>, ignoredRecipes: $Set$Type<($Pattern$Type)>, hideJeiRei: boolean)

public "includeItem"(item: $ResourceLocation$Type): boolean
public "includeRecipe"(recipe: $ResourceLocation$Type): boolean
public "includeRecipeType"(type: $ResourceLocation$Type): boolean
public "getModPriorities"(): $List<(string)>
public "getStoneStrata"(): $List<(string)>
public "bakeTags"(): $Set<($UnifyTag<($Item)>)>
public "getCustomTags"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
public "clearCache"(): void
public "getTagOwnerships"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
public "reiOrJeiDisabled"(): boolean
public "getMaterials"(): $List<(string)>
public "bakeAndValidateTags"(tags: $Map$Type<($ResourceLocation$Type), ($Collection$Type<($Holder$Type<($Item$Type)>)>)>): $Set<($UnifyTag<($Item)>)>
public "getPriorityOverrides"(): $Map<($ResourceLocation), (string)>
public "shouldInheritItemTag"(itemTag: $UnifyTag$Type<($Item$Type)>, dominantTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>): boolean
public "shouldInheritBlockTag"(itemTag: $UnifyTag$Type<($Block$Type)>, dominantTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>): boolean
get "modPriorities"(): $List<(string)>
get "stoneStrata"(): $List<(string)>
get "customTags"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
get "tagOwnerships"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
get "materials"(): $List<(string)>
get "priorityOverrides"(): $Map<($ResourceLocation), (string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnifyConfig$Type = ($UnifyConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnifyConfig_ = $UnifyConfig$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootEntry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$LootEntry$Generator, $LootEntry$Generator$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry$Generator"

export class $LootEntry implements $LootFunctionsContainer<($LootEntry)> {

constructor(item: $Item$Type)
constructor(generator: $LootEntry$Generator$Type)
constructor(itemStack: $ItemStack$Type)

public "hasWeight"(): boolean
public "matchesConditions"(context: $LootContext$Type): boolean
public "withWeight"(weight: integer): $LootEntry
public "when"(action: $Consumer$Type<($LootConditionsContainer$Type<(any)>)>): $LootEntry
public "getWeight"(): integer
public "createItem"(context: $LootContext$Type): $ItemStack
public "withChance"(chance: integer): $LootEntry
public "enchantRandomly"(): $LootEntry
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $LootEntry
public "replaceLore"(...components: ($Component$Type)[]): $LootEntry
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $LootEntry
public "limitCount"(numberProvider: $NumberProvider$Type): $LootEntry
public "smeltLoot"(): $LootEntry
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $LootEntry
public "addNbt"(tag: $CompoundTag$Type): $LootEntry
public "addPotion"(potion: $Potion$Type): $LootEntry
public "customFunction"(json: $JsonObject$Type): $LootEntry
public "applyOreBonus"(enchantment: $Enchantment$Type): $LootEntry
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $LootEntry
public "setName"(component: $Component$Type): $LootEntry
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $LootEntry
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($LootEntry$Type)>)>): $LootEntry
public "addFunction"(builder: $LootItemFunction$Builder$Type): $LootEntry
public "addNBT"(tag: $CompoundTag$Type): $LootEntry
public "addLore"(...components: ($Component$Type)[]): $LootEntry
public "damage"(numberProvider: $NumberProvider$Type): $LootEntry
public "simulateExplosionDecay"(): $LootEntry
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $LootEntry
get "weight"(): integer
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$Type = ($LootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntry_ = $LootEntry$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $TradeItem {
static readonly "EMPTY": $TradeItem

constructor(arg0: $ItemStack$Type, arg1: $IntRange$Type)

public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$Type): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: $CompoundTag$Type): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $CompoundTag$Type): $TradeItem
public "createItemStack"(arg0: $RandomSource$Type): $ItemStack
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeItem$Type = ($TradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeItem_ = $TradeItem$Type;
}}
declare module "packages/com/almostreliable/lootjs/filters/$Resolver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Resolver {


public static "of"(value: string): $Resolver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resolver$Type = ($Resolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resolver_ = $Resolver$Type;
}}
declare module "packages/com/almostreliable/morejs/features/teleport/$TeleportType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TeleportType extends $Enum<($TeleportType)> {
static readonly "CHORUS_FRUIT": $TeleportType
static readonly "ENDER_PEARL": $TeleportType


public static "values"(): ($TeleportType)[]
public static "valueOf"(arg0: string): $TeleportType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportType$Type = (("ender_pearl") | ("chorus_fruit")) | ($TeleportType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeleportType_ = $TeleportType$Type;
}}
declare module "packages/com/almostreliable/lootjs/mixin/$LootItemConditionMixin" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootItemConditionMixin extends $ILootCondition {

 "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
 "test"(arg0: $LootContext$Type): boolean
 "negate"(): $Predicate<($LootContext)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>

(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $LootItemConditionMixin {
function isEqual<T>(arg0: any): $Predicate<($LootContext)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootItemConditionMixin$Type = ($LootItemConditionMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootItemConditionMixin_ = $LootItemConditionMixin$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$VillagerUtils" {
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$TreasureMapTrade, $TreasureMapTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TreasureMapTrade"
import {$EnchantedItemTrade, $EnchantedItemTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$EnchantedItemTrade"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"
import {$MapPosInfo$Provider, $MapPosInfo$Provider$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CustomTrade, $CustomTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$CustomTrade"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"
import {$StewTrade, $StewTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$StewTrade"
import {$PotionTrade, $PotionTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$PotionTrade"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerUtils {
static readonly "CACHED_PROFESSION_TRADES": $Map<($VillagerProfession), ($List<($VillagerTrades$ItemListing)>)>
static readonly "VANILLA_TRADE_TYPES": $Set<($Class<(any)>)>

constructor()

public static "getVillagerTrades"(arg0: $VillagerProfession$Type): $List<($VillagerTrades$ItemListing)>
public static "getVillagerTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "createStructureMapTrade"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public static "createBiomeMapTrade"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public static "createEnchantedItemTrade"(arg0: ($TradeItem$Type)[], arg1: $Item$Type): $EnchantedItemTrade
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$Type, arg1: integer): $VillagerTrades$ItemListing
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$Type): $VillagerTrades$ItemListing
public static "getRandomWandererTrade"(arg0: integer): $VillagerTrades$ItemListing
public static "createCustomMapTrade"(arg0: ($TradeItem$Type)[], arg1: $MapPosInfo$Provider$Type): $TreasureMapTrade
public static "isVanillaTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "getProfessions"(): $Collection<($VillagerProfession)>
public static "getProfession"(arg0: $ResourceLocation$Type): $VillagerProfession
public static "isModdedTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "isMoreJSTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "createCustomTrade"(arg0: $TransformableTrade$Transformer$Type): $CustomTrade
public static "setAbstractTrades"(arg0: $Map$Type<(integer), (($VillagerTrades$ItemListing$Type)[])>, arg1: integer, arg2: $List$Type<($VillagerTrades$ItemListing$Type)>): void
public static "getAbstractTrades"(arg0: $Map$Type<(integer), (($VillagerTrades$ItemListing$Type)[])>, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public static "createStewTrade"(arg0: ($TradeItem$Type)[], arg1: ($MobEffect$Type)[], arg2: integer): $StewTrade
public static "createPotionTrade"(arg0: ($TradeItem$Type)[]): $PotionTrade
public static "createSimpleTrade"(arg0: ($TradeItem$Type)[], arg1: $TradeItem$Type): $SimpleTrade
get "professions"(): $Collection<($VillagerProfession)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerUtils$Type = ($VillagerUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerUtils_ = $VillagerUtils$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$EntityPredicate, $EntityPredicate$Type} from "packages/net/minecraft/advancements/critereon/$EntityPredicate"
import {$ExtendedEntityFlagsPredicate$IBuilder, $ExtendedEntityFlagsPredicate$IBuilder$Type} from "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EntityPredicateBuilderJS implements $ExtendedEntityFlagsPredicate$IBuilder<($EntityPredicate)> {

constructor()

public "isBaby"(flag: boolean): $EntityPredicateBuilderJS
public "nbt"(nbt: $CompoundTag$Type): $EntityPredicateBuilderJS
public "hasEffect"(effect: $MobEffect$Type, amplifier: integer): $EntityPredicateBuilderJS
public "hasEffect"(effect: $MobEffect$Type): $EntityPredicateBuilderJS
public "isSprinting"(flag: boolean): $EntityPredicateBuilderJS
public "matchFluid"(resolver: $Resolver$Type): $EntityPredicateBuilderJS
public "matchTargetedEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $EntityPredicateBuilderJS
public "isOnFire"(flag: boolean): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$Type, propertyMap: $Map$Type<(string), (string)>): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$Type): $EntityPredicateBuilderJS
public "anyType"(...resolvers: ($Resolver$Type)[]): $EntityPredicateBuilderJS
public "isCreature"(flag: boolean): $EntityPredicateBuilderJS
public "matchSlot"(slot: $EquipmentSlot$Type, itemFilter: $ItemFilter$Type): $EntityPredicateBuilderJS
public "matchMount"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $EntityPredicateBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPredicateBuilderJS$Type = ($EntityPredicateBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPredicateBuilderJS_ = $EntityPredicateBuilderJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EnchantmentState extends $Enum<($EnchantmentState)> {
static readonly "IDLE": $EnchantmentState
static readonly "STORE_ENCHANTMENTS": $EnchantmentState
static readonly "USE_STORED_ENCHANTMENTS": $EnchantmentState


public static "values"(): ($EnchantmentState)[]
public static "valueOf"(arg0: string): $EnchantmentState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentState$Type = (("idle") | ("use_stored_enchantments") | ("store_enchantments")) | ($EnchantmentState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentState_ = $EnchantmentState$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GroupedLootAction, $GroupedLootAction$Type} from "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootActionsContainer, $LootActionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootActionsContainer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GroupedLootBuilder implements $LootConditionsContainer<($GroupedLootBuilder)>, $LootFunctionsContainer<($GroupedLootBuilder)>, $LootActionsContainer<($GroupedLootBuilder)> {

constructor()

public "build"(): $GroupedLootAction
public "addCondition"(condition: $ILootCondition$Type): $GroupedLootBuilder
public "rolls"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "and"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "not"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "or"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "addCondition"(builder: $LootItemCondition$Builder$Type): $GroupedLootBuilder
public "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "survivesExplosion"(): $GroupedLootBuilder
public "biome"(...resolvers: ($Resolver$Type)[]): $GroupedLootBuilder
public "lightLevel"(min: integer, max: integer): $GroupedLootBuilder
public "killedByPlayer"(): $GroupedLootBuilder
public "randomChance"(value: float): $GroupedLootBuilder
public "randomChanceWithLooting"(value: float, looting: float): $GroupedLootBuilder
public "customCondition"(json: $JsonObject$Type): $GroupedLootBuilder
public "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): $GroupedLootBuilder
public "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): $GroupedLootBuilder
public "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$Type, exact: boolean): $GroupedLootBuilder
public "matchOffHand"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "timeCheck"(min: integer, max: integer): $GroupedLootBuilder
public "timeCheck"(period: long, min: integer, max: integer): $GroupedLootBuilder
public "weatherCheck"(map: $Map$Type<(string), (boolean)>): $GroupedLootBuilder
public "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): $GroupedLootBuilder
public "matchMainHand"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "anyStructure"(idOrTags: (string)[], exact: boolean): $GroupedLootBuilder
public "matchFluid"(resolver: $Resolver$Type): $GroupedLootBuilder
public "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "anyBiome"(...resolvers: ($Resolver$Type)[]): $GroupedLootBuilder
public "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): $GroupedLootBuilder
public "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): $GroupedLootBuilder
public "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): $GroupedLootBuilder
public "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): $GroupedLootBuilder
public "hasAnyStage"(...stages: (string)[]): $GroupedLootBuilder
public "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): $GroupedLootBuilder
public "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $List<($ILootCondition)>
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): $GroupedLootBuilder
public "enchantRandomly"(): $GroupedLootBuilder
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "replaceLore"(...components: ($Component$Type)[]): $GroupedLootBuilder
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $GroupedLootBuilder
public "limitCount"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "smeltLoot"(): $GroupedLootBuilder
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "addNbt"(tag: $CompoundTag$Type): $GroupedLootBuilder
public "addPotion"(potion: $Potion$Type): $GroupedLootBuilder
public "customFunction"(json: $JsonObject$Type): $GroupedLootBuilder
public "applyOreBonus"(enchantment: $Enchantment$Type): $GroupedLootBuilder
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $GroupedLootBuilder
public "setName"(component: $Component$Type): $GroupedLootBuilder
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $GroupedLootBuilder
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "addFunction"(builder: $LootItemFunction$Builder$Type): $GroupedLootBuilder
public "addNBT"(tag: $CompoundTag$Type): $GroupedLootBuilder
public "addLore"(...components: ($Component$Type)[]): $GroupedLootBuilder
public "damage"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "simulateExplosionDecay"(): $GroupedLootBuilder
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $GroupedLootBuilder
public "addLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): $GroupedLootBuilder
public "triggerLightningStrike"(shouldDamage: boolean): $GroupedLootBuilder
public "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addSequenceLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "removeLoot"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): $GroupedLootBuilder
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $GroupedLootBuilder
public "dropExperience"(amount: integer): $GroupedLootBuilder
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootBuilder$Type = ($GroupedLootBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootBuilder_ = $GroupedLootBuilder$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SimpleTrade extends $TransformableTrade<($SimpleTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $TradeItem$Type)

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTrade$Type = ($SimpleTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleTrade_ = $SimpleTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS$ForEachCallback" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export interface $VillagerTradingEventJS$ForEachCallback {

 "accept"(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>, arg1: integer, arg2: $VillagerProfession$Type): void

(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>, arg1: integer, arg2: $VillagerProfession$Type): void
}

export namespace $VillagerTradingEventJS$ForEachCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$ForEachCallback$Type = ($VillagerTradingEventJS$ForEachCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS$ForEachCallback_ = $VillagerTradingEventJS$ForEachCallback$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$LootContextType, $LootContextType$Type} from "packages/com/almostreliable/lootjs/core/$LootContextType"
import {$LootActionsBuilderJS, $LootActionsBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"

export class $LootModificationEventJS extends $EventJS {

constructor()

public "addEntityLootModifier"(...entities: ($EntityType$Type<(any)>)[]): $LootActionsBuilderJS
public "addBlockLootModifier"(o: any): $LootActionsBuilderJS
public "disableSkeletonHeadDrop"(): void
public "disableZombieHeadDrop"(): void
public "enableLogging"(): void
public "disableWitherStarDrop"(): void
public "addLootTableModifier"(...filters: ($ResourceLocationFilter$Type)[]): $LootActionsBuilderJS
public "disableLootModification"(...filters: ($ResourceLocationFilter$Type)[]): void
public "disableCreeperHeadDrop"(): void
public "addLootTypeModifier"(...types: ($LootContextType$Type)[]): $LootActionsBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModificationEventJS$Type = ($LootModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootModificationEventJS_ = $LootModificationEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS$Data" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EnchantmentTableServerEventJS$Data {


public "hasEnchantment"(arg0: $ResourceLocation$Type): boolean
public "hasEnchantment"(arg0: $ResourceLocation$Type, arg1: $IntRange$Type): boolean
public "getRequiredLevel"(): integer
public "clearEnchantments"(): void
public "getEnchantmentIds"(): $List<($ResourceLocation)>
public "getEnchantmentCount"(): integer
public "forEachEnchantments"(arg0: $BiConsumer$Type<($Enchantment$Type), (integer)>): void
get "requiredLevel"(): integer
get "enchantmentIds"(): $List<($ResourceLocation)>
get "enchantmentCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableServerEventJS$Data$Type = ($EnchantmentTableServerEventJS$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableServerEventJS$Data_ = $EnchantmentTableServerEventJS$Data$Type;
}}
declare module "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedEntityFlagsPredicate$IBuilder<T> {

 "build"(): T
 "isOnGround"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isSwimming"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isBaby"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isInWater"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isSprinting"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isCrouching"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isOnFire"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isUndeadMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isMonster"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isCreature"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isUnderWater"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isIllegarMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isArthropodMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isWaterMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
}

export namespace $ExtendedEntityFlagsPredicate$IBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedEntityFlagsPredicate$IBuilder$Type<T> = ($ExtendedEntityFlagsPredicate$IBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedEntityFlagsPredicate$IBuilder_<T> = $ExtendedEntityFlagsPredicate$IBuilder$Type<(T)>;
}}
declare module "packages/com/almostreliable/ponderjs/api/$ExtendedSceneBuilder" {
import {$SceneBuilder$OverlayInstructions, $SceneBuilder$OverlayInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$OverlayInstructions"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$SceneBuilder$DebugInstructions, $SceneBuilder$DebugInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$DebugInstructions"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ExtendedSceneBuilder$ExtendedWorldInstructions, $ExtendedSceneBuilder$ExtendedWorldInstructions$Type} from "packages/com/almostreliable/ponderjs/api/$ExtendedSceneBuilder$ExtendedWorldInstructions"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$SceneBuilder$EffectInstructions, $SceneBuilder$EffectInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$EffectInstructions"
import {$PonderScene, $PonderScene$Type} from "packages/com/simibubi/create/foundation/ponder/$PonderScene"
import {$SceneBuilder$SpecialInstructions, $SceneBuilder$SpecialInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$SpecialInstructions"
import {$TextWindowElement$Builder, $TextWindowElement$Builder$Type} from "packages/com/simibubi/create/foundation/ponder/element/$TextWindowElement$Builder"
import {$ParticleInstructions, $ParticleInstructions$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleInstructions"
import {$SceneBuilder$WorldInstructions, $SceneBuilder$WorldInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$WorldInstructions"
import {$SceneBuilder, $SceneBuilder$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InputWindowElement, $InputWindowElement$Type} from "packages/com/simibubi/create/foundation/ponder/element/$InputWindowElement"
import {$Pointing, $Pointing$Type} from "packages/com/simibubi/create/foundation/utility/$Pointing"

export class $ExtendedSceneBuilder extends $SceneBuilder {
readonly "overlay": $SceneBuilder$OverlayInstructions
 "world": $SceneBuilder$WorldInstructions
readonly "debug": $SceneBuilder$DebugInstructions
readonly "effects": $SceneBuilder$EffectInstructions
 "special": $SceneBuilder$SpecialInstructions

constructor(arg0: $PonderScene$Type)

public "getDebug"(): $SceneBuilder$DebugInstructions
public "getOverlay"(): $SceneBuilder$OverlayInstructions
public "text"(arg0: integer, arg1: string): $TextWindowElement$Builder
public "text"(arg0: integer, arg1: string, arg2: $Vec3$Type): $TextWindowElement$Builder
public "getLevel"(): $ExtendedSceneBuilder$ExtendedWorldInstructions
public "getEffects"(): $SceneBuilder$EffectInstructions
public "getWorld"(): $ExtendedSceneBuilder$ExtendedWorldInstructions
public "getParticles"(): $ParticleInstructions
public "playSound"(arg0: $SoundEvent$Type, arg1: $SoundSource$Type, arg2: float, arg3: float): void
public "playSound"(arg0: $SoundEvent$Type, arg1: float): void
public "playSound"(arg0: $SoundEvent$Type): void
public "showControls"(arg0: integer, arg1: $Vec3$Type, arg2: $Pointing$Type): $InputWindowElement
public "sharedText"(arg0: integer, arg1: $ResourceLocation$Type): $TextWindowElement$Builder
public "sharedText"(arg0: integer, arg1: $ResourceLocation$Type, arg2: $Vec3$Type): $TextWindowElement$Builder
public "getSpecial"(): $SceneBuilder$SpecialInstructions
public "showStructure"(): void
public "showStructure"(arg0: integer): void
public "encapsulateBounds"(arg0: $BlockPos$Type): void
get "debug"(): $SceneBuilder$DebugInstructions
get "overlay"(): $SceneBuilder$OverlayInstructions
get "level"(): $ExtendedSceneBuilder$ExtendedWorldInstructions
get "effects"(): $SceneBuilder$EffectInstructions
get "world"(): $ExtendedSceneBuilder$ExtendedWorldInstructions
get "particles"(): $ParticleInstructions
get "special"(): $SceneBuilder$SpecialInstructions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSceneBuilder$Type = ($ExtendedSceneBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSceneBuilder_ = $ExtendedSceneBuilder$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/compat/kubejs/$AltarRecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeOutputs$MobOutputBuilder, $RecipeOutputs$MobOutputBuilder$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$MobOutputBuilder"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeOutputs$ItemOutputBuilder, $RecipeOutputs$ItemOutputBuilder$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$ItemOutputBuilder"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AltarRecipeJS extends $RecipeJS {
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

public "mobOutput"(entityOutput: $RecipeOutputs$MobOutputBuilder$Type): $AltarRecipeJS
public "sacrificeRegion"(width: integer, height: integer): $AltarRecipeJS
public "input"(...ingredients: ($InputItem$Type)[]): $AltarRecipeJS
public "blockBelow"(id: $ResourceLocation$Type): $AltarRecipeJS
public "blockBelow"(id: $ResourceLocation$Type, properties: $JsonObject$Type): $AltarRecipeJS
public "itemOutput"(itemOutput: $RecipeOutputs$ItemOutputBuilder$Type): $AltarRecipeJS
public "writeInputItem"(value: $InputItem$Type): $JsonElement
public "readInputItem"(from: any): $InputItem
public "sacrifice"(id: $ResourceLocation$Type): $AltarRecipeJS
public "sacrifice"(id: $ResourceLocation$Type, count: integer): $AltarRecipeJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltarRecipeJS$Type = ($AltarRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltarRecipeJS_ = $AltarRecipeJS$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder$Static" {
import {$ParticleDataBuilder, $ParticleDataBuilder$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ParticleDataBuilder$Static extends $ParticleDataBuilder<($ParticleDataBuilder$Static), ($ParticleOptions)> {

constructor(arg0: $ParticleOptions$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleDataBuilder$Static$Type = ($ParticleDataBuilder$Static);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleDataBuilder$Static_ = $ParticleDataBuilder$Static$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS" {
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentTableServerEventJS$Data, $EnchantmentTableServerEventJS$Data$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS$Data"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export class $EnchantmentTableServerEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Player$Type, arg5: $EnchantmentMenuProcess$Type)

public "get"(arg0: integer): $EnchantmentTableServerEventJS$Data
public "getSize"(): integer
public "getPosition"(): $BlockPos
public "itemWasChanged"(): boolean
public "setItem"(arg0: $ItemStack$Type): void
get "size"(): integer
get "position"(): $BlockPos
set "item"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableServerEventJS$Type = ($EnchantmentTableServerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableServerEventJS_ = $EnchantmentTableServerEventJS$Type;
}}
declare module "packages/com/almostreliable/ponderjs/mixin/$SceneBuilderAccessor" {
import {$SceneBuilder$SpecialInstructions, $SceneBuilder$SpecialInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$SpecialInstructions"
import {$SceneBuilder$WorldInstructions, $SceneBuilder$WorldInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$WorldInstructions"
import {$PonderScene, $PonderScene$Type} from "packages/com/simibubi/create/foundation/ponder/$PonderScene"

export interface $SceneBuilderAccessor {

 "ponderjs$getPonderScene"(): $PonderScene
 "ponderjs$setWorldInstructions"(arg0: $SceneBuilder$WorldInstructions$Type): void
 "ponderjs$setSpecialInstructions"(arg0: $SceneBuilder$SpecialInstructions$Type): void
}

export namespace $SceneBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneBuilderAccessor$Type = ($SceneBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneBuilderAccessor_ = $SceneBuilderAccessor$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootCondition" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootCondition extends $ILootHandler, $Predicate<($LootContext)> {

 "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
 "test"(arg0: $LootContext$Type): boolean
 "negate"(): $Predicate<($LootContext)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>

(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootCondition {
function isEqual<T>(arg0: any): $Predicate<($LootContext)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootCondition$Type = ($ILootCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootCondition_ = $ILootCondition$Type;
}}
declare module "packages/com/almostreliable/ponderjs/api/$ExtendedPonderStoryBoard" {
import {$ExtendedSceneBuilder, $ExtendedSceneBuilder$Type} from "packages/com/almostreliable/ponderjs/api/$ExtendedSceneBuilder"
import {$SceneBuildingUtilDelegate, $SceneBuildingUtilDelegate$Type} from "packages/com/almostreliable/ponderjs/api/$SceneBuildingUtilDelegate"

export interface $ExtendedPonderStoryBoard {

 "program"(arg0: $ExtendedSceneBuilder$Type, arg1: $SceneBuildingUtilDelegate$Type): void

(arg0: $ExtendedSceneBuilder$Type, arg1: $SceneBuildingUtilDelegate$Type): void
}

export namespace $ExtendedPonderStoryBoard {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedPonderStoryBoard$Type = ($ExtendedPonderStoryBoard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedPonderStoryBoard_ = $ExtendedPonderStoryBoard$Type;
}}
declare module "packages/com/almostreliable/ponderjs/$PonderBuilderJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ExtendedPonderStoryBoard, $ExtendedPonderStoryBoard$Type} from "packages/com/almostreliable/ponderjs/api/$ExtendedPonderStoryBoard"
import {$AbstractPonderBuilder, $AbstractPonderBuilder$Type} from "packages/com/almostreliable/ponderjs/api/$AbstractPonderBuilder"

export class $PonderBuilderJS extends $AbstractPonderBuilder<($PonderBuilderJS)> {
static readonly "BASIC_STRUCTURE": string

constructor(arg0: $Set$Type<($Item$Type)>)

public "getSelf"(): $PonderBuilderJS
public "scene"(arg0: string, arg1: string, arg2: $ExtendedPonderStoryBoard$Type): $PonderBuilderJS
public "scene"(arg0: string, arg1: string, arg2: string, arg3: $ExtendedPonderStoryBoard$Type): $PonderBuilderJS
get "self"(): $PonderBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderBuilderJS$Type = ($PonderBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderBuilderJS_ = $PonderBuilderJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$PotionTrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PotionTrade extends $TransformableTrade<($PotionTrade)> {

constructor(arg0: ($TradeItem$Type)[])

public "onlyBrewablePotion"(): $PotionTrade
public "noBrewablePotion"(): $PotionTrade
public "item"(arg0: $Item$Type): $PotionTrade
public "potions"(...arg0: ($Potion$Type)[]): $PotionTrade
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionTrade$Type = ($PotionTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionTrade_ = $PotionTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeTypes" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TradeTypes extends $Enum<($TradeTypes)> {
static readonly "DyedArmorForEmeralds": $TradeTypes
static readonly "EnchantBookForEmeralds": $TradeTypes
static readonly "EnchantedItemForEmeralds": $TradeTypes
static readonly "ItemsForEmeralds": $TradeTypes
static readonly "ItemsAndEmeraldsToItems": $TradeTypes
static readonly "EmeraldForItems": $TradeTypes
static readonly "TippedArrowForItemsAndEmeralds": $TradeTypes
static readonly "SuspiciousStewForEmeralds": $TradeTypes
static readonly "TreasureMapForEmeralds": $TradeTypes
static readonly "EmeraldsForVillagerTypeItem": $TradeTypes
static readonly "ForgeBasic": $TradeTypes


public static "values"(): ($TradeTypes)[]
public static "valueOf"(arg0: string): $TradeTypes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeTypes$Type = (("treasuremapforemeralds") | ("dyedarmorforemeralds") | ("enchanteditemforemeralds") | ("tippedarrowforitemsandemeralds") | ("emeraldsforvillagertypeitem") | ("forgebasic") | ("emeraldforitems") | ("itemsandemeraldstoitems") | ("suspiciousstewforemeralds") | ("itemsforemeralds") | ("enchantbookforemeralds")) | ($TradeTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeTypes_ = $TradeTypes$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation$Simple" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $ParticleTransformation$Simple {

 "apply"(arg0: float, arg1: $Vec3$Type): $Vec3

(arg0: float, arg1: $Vec3$Type): $Vec3
}

export namespace $ParticleTransformation$Simple {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleTransformation$Simple$Type = ($ParticleTransformation$Simple);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleTransformation$Simple_ = $ParticleTransformation$Simple$Type;
}}
declare module "packages/com/almostreliable/ponderjs/mixin/$ParticleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ParticleAccessor {

 "ponderjs$setLifetime"(arg0: integer): void
 "ponderjs$setGravity"(arg0: float): void
 "ponderjs$setFriction"(arg0: float): void
 "ponderjs$setStoppedByCollision"(arg0: boolean): void
 "ponderjs$setHasPhysics"(arg0: boolean): void
 "ponderjs$setRoll"(arg0: float): void
 "ponderjs$setAlpha"(arg0: float): void
}

export namespace $ParticleAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleAccessor$Type = ($ParticleAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleAccessor_ = $ParticleAccessor$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$WeightedList" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $WeightedList<T> {


public "map"<T2>(arg0: $Function$Type<(T), (T2)>): $WeightedList<(T2)>
public "roll"(): T
public "roll"(arg0: $RandomSource$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$Type<T> = ($WeightedList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList_<T> = $WeightedList$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$EntityInfoWrapper" {
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export class $EntityInfoWrapper {

constructor(arg0: $List$Type<($StructureTemplate$StructureEntityInfo$Type)>, arg1: $Vec3i$Type)

public "add"(arg0: $CompoundTag$Type): void
public "forEach"(arg0: $Consumer$Type<($StructureTemplate$StructureEntityInfo$Type)>): void
public "removeIf"(arg0: $Predicate$Type<($StructureTemplate$StructureEntityInfo$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInfoWrapper$Type = ($EntityInfoWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityInfoWrapper_ = $EntityInfoWrapper$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuExtension" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export interface $EnchantmentMenuExtension {

 "getMoreJSProcess"(): $EnchantmentMenuProcess
 "getMoreJsEnchantSlots"(): $Container
}

export namespace $EnchantmentMenuExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuExtension$Type = ($EnchantmentMenuExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuExtension_ = $EnchantmentMenuExtension$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS$PiglinBehavior" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PiglinPlayerBehaviorEventJS$PiglinBehavior extends $Enum<($PiglinPlayerBehaviorEventJS$PiglinBehavior)> {
static readonly "ATTACK": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "IGNORE": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "KEEP": $PiglinPlayerBehaviorEventJS$PiglinBehavior


public static "values"(): ($PiglinPlayerBehaviorEventJS$PiglinBehavior)[]
public static "valueOf"(arg0: string): $PiglinPlayerBehaviorEventJS$PiglinBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type = (("attack") | ("keep") | ("ignore")) | ($PiglinPlayerBehaviorEventJS$PiglinBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior_ = $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ILootAction, $ILootAction$Type} from "packages/com/almostreliable/lootjs/core/$ILootAction"

export class $CompositeLootAction implements $ILootAction {

constructor(handlers: $Collection$Type<($ILootHandler$Type)>)

public "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeLootAction$Type = ($CompositeLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeLootAction_ = $CompositeLootAction$Type;
}}
declare module "packages/com/almostreliable/unified/config/$Config$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Config, $Config$Type} from "packages/com/almostreliable/unified/config/$Config"

export class $Config$Serializer<T extends $Config> {

constructor()

public "isInvalid"(): boolean
public "deserialize"(arg0: $JsonObject$Type): T
public "safeGet"<V>(supplier: $Supplier$Type<(V)>, defaultValue: V): V
public "serialize"(arg0: T): $JsonObject
get "invalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Serializer$Type<T> = ($Config$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config$Serializer_<T> = $Config$Serializer$Type<(T)>;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeSacrifices$Sacrifice" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RecipeSacrifices$Sacrifice extends $Record implements $Predicate<($Entity)> {

constructor(mob: $EntityType$Type<(any)>, count: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(entity: $Entity$Type): boolean
public "count"(): integer
public "mob"(): $EntityType<(any)>
public "negate"(): $Predicate<($Entity)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Entity)>
public static "isEqual"<T>(arg0: any): $Predicate<($Entity)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Entity)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSacrifices$Sacrifice$Type = ($RecipeSacrifices$Sacrifice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSacrifices$Sacrifice_ = $RecipeSacrifices$Sacrifice$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$ExperiencePlayerEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $ExperiencePlayerEventJS extends $PlayerEventJS {

constructor(arg0: $Player$Type, arg1: integer)

public "getAmount"(): integer
public "setExperienceLevel"(arg0: integer): void
public "setTotalExperience"(arg0: integer): void
public "willLevelUp"(): boolean
public "getTotalExperience"(): integer
public "getExperienceLevel"(): integer
public "getRemainingExperience"(): integer
public "getXpNeededForNextLevel"(): integer
public "getExperienceProgress"(): float
public "setExperienceProgress"(arg0: float): void
public "setAmount"(arg0: integer): void
get "amount"(): integer
set "experienceLevel"(value: integer)
set "totalExperience"(value: integer)
get "totalExperience"(): integer
get "experienceLevel"(): integer
get "remainingExperience"(): integer
get "xpNeededForNextLevel"(): integer
get "experienceProgress"(): float
set "experienceProgress"(value: float)
set "amount"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperiencePlayerEventJS$Type = ($ExperiencePlayerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperiencePlayerEventJS_ = $ExperiencePlayerEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$UpdateVillagerOffersEventJS" {
import {$Villager, $Villager$Type} from "packages/net/minecraft/world/entity/npc/$Villager"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$UpdateAbstractVillagerOffersEventJS, $UpdateAbstractVillagerOffersEventJS$Type} from "packages/com/almostreliable/morejs/features/villager/events/$UpdateAbstractVillagerOffersEventJS"
import {$MerchantOffers, $MerchantOffers$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffers"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $UpdateVillagerOffersEventJS extends $UpdateAbstractVillagerOffersEventJS {

constructor(arg0: $Villager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>)

public "getVillagerData"(): $VillagerData
public "getProfession"(): $VillagerProfession
public "getVillagerLevel"(): integer
public "isProfession"(arg0: $VillagerProfession$Type): boolean
get "villagerData"(): $VillagerData
get "profession"(): $VillagerProfession
get "villagerLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateVillagerOffersEventJS$Type = ($UpdateVillagerOffersEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateVillagerOffersEventJS_ = $UpdateVillagerOffersEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/forge/filters/$ForgeItemFilter" {
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ForgeItemFilter extends $ItemFilter {

 "test"(arg0: $ItemStack$Type): boolean
 "negate"(): $ItemFilter
 "and"(other: $ItemFilter$Type): $ItemFilter
 "or"(other: $ItemFilter$Type): $ItemFilter
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>

(...actions: (string)[]): $ItemFilter
}

export namespace $ForgeItemFilter {
function canPerformAction(...actions: (string)[]): $ItemFilter
function canPerformAnyAction(...actions: (string)[]): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type, min: integer, max: integer): $ItemFilter
function and(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function not(itemFilter: $ItemFilter$Type): $ItemFilter
function or(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function custom(predicate: $Predicate$Type<($ItemStack$Type)>): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$Type): $ItemFilter
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeItemFilter$Type = ($ForgeItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeItemFilter_ = $ForgeItemFilter$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CompositeLootAction, $CompositeLootAction$Type} from "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $GroupedLootAction extends $CompositeLootAction {

constructor(numberProvider: $NumberProvider$Type, handlers: $Collection$Type<($ILootHandler$Type)>)

public "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootAction$Type = ($GroupedLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootAction_ = $GroupedLootAction$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$MobOutputBuilder" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$RecipeOutputs$RecipeOutputBuilder, $RecipeOutputs$RecipeOutputBuilder$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$RecipeOutputBuilder"

export class $RecipeOutputs$MobOutputBuilder extends $RecipeOutputs$RecipeOutputBuilder {

constructor(mob: $EntityType$Type<(any)>)

public "count"(count: integer): $RecipeOutputs$MobOutputBuilder
public "mob"(mob: $EntityType$Type<(any)>): $RecipeOutputs$MobOutputBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeOutputs$MobOutputBuilder$Type = ($RecipeOutputs$MobOutputBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeOutputs$MobOutputBuilder_ = $RecipeOutputs$MobOutputBuilder$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootEntryWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $LootEntryWrapper {

constructor()

public static "of"(arg0: $ItemStack$Type, count: integer, nbt: $CompoundTag$Type): $LootEntry
public static "of"(arg0: $ItemStack$Type, nbt: $CompoundTag$Type): $LootEntry
public static "of"(arg0: $ItemStack$Type, count: integer): $LootEntry
public static "of"(o: any): $LootEntry
public static "withChance"(o: any, chance: integer): $LootEntry
public static "ofJson"(json: $JsonObject$Type): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntryWrapper$Type = ($LootEntryWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntryWrapper_ = $LootEntryWrapper$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$StewTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StewTrade extends $TransformableTrade<($StewTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: ($MobEffect$Type)[], arg2: integer)

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StewTrade$Type = ($StewTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StewTrade_ = $StewTrade$Type;
}}
declare module "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker$ClientRecipeLink" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientRecipeTracker$ClientRecipeLink extends $Record {

constructor(id: $ResourceLocation$Type, isUnified: boolean, isDuplicate: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "isDuplicate"(): boolean
public "isUnified"(): boolean
get "duplicate"(): boolean
get "unified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$ClientRecipeLink$Type = ($ClientRecipeTracker$ClientRecipeLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker$ClientRecipeLink_ = $ClientRecipeTracker$ClientRecipeLink$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$AllOfCondition$Builder, $AllOfCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$AllOfCondition$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AnyOfCondition$Builder, $AnyOfCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$AnyOfCondition$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $DamageSourcePredicateBuilderJS implements $LootItemCondition$Builder {

constructor()

public "is"(tag: $ResourceLocation$Type): $DamageSourcePredicateBuilderJS
public "isNot"(tag: $ResourceLocation$Type): $DamageSourcePredicateBuilderJS
public "anyType"(...names: (string)[]): $DamageSourcePredicateBuilderJS
public "matchSourceEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $DamageSourcePredicateBuilderJS
public "matchDirectEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $DamageSourcePredicateBuilderJS
public "or"(arg0: $LootItemCondition$Builder$Type): $AnyOfCondition$Builder
public "and"(arg0: $LootItemCondition$Builder$Type): $AllOfCondition$Builder
public "invert"(): $LootItemCondition$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourcePredicateBuilderJS$Type = ($DamageSourcePredicateBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageSourcePredicateBuilderJS_ = $DamageSourcePredicateBuilderJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Modifier$Builder {

constructor(attribute: $Attribute$Type, amount: $NumberProvider$Type)

public "setUuid"(uuid: $UUID$Type): void
public "build"(): $AddAttributesFunction$Modifier
public "setName"(name: string): void
public "setSlots"(slots: ($EquipmentSlot$Type)[]): void
public "setProbability"(probability: float): void
public "setOperation"(operation: $AttributeModifier$Operation$Type): void
set "uuid"(value: $UUID$Type)
set "name"(value: string)
set "slots"(value: ($EquipmentSlot$Type)[])
set "probability"(value: float)
set "operation"(value: $AttributeModifier$Operation$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Builder$Type = ($AddAttributesFunction$Modifier$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier$Builder_ = $AddAttributesFunction$Modifier$Builder$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TreasureMapTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$MapDecoration$Type, $MapDecoration$Type$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"
import {$MapPosInfo$Provider, $MapPosInfo$Provider$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TreasureMapTrade extends $TransformableTrade<($TreasureMapTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $MapPosInfo$Provider$Type)

public "noPreview"(): $TreasureMapTrade
public "scale"(arg0: byte): $TreasureMapTrade
public "displayName"(arg0: $Component$Type): $TreasureMapTrade
public "marker"(arg0: $MapDecoration$Type$Type): $TreasureMapTrade
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public static "forStructure"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public static "forBiome"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreasureMapTrade$Type = ($TreasureMapTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreasureMapTrade_ = $TreasureMapTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$FilterEnchantedTradeEventJS" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$AbstractVillager, $AbstractVillager$Type} from "packages/net/minecraft/world/entity/npc/$AbstractVillager"

export class $FilterEnchantedTradeEventJS extends $LivingEntityEventJS {

constructor(arg0: $AbstractVillager$Type, arg1: $RandomSource$Type, arg2: $List$Type<($Enchantment$Type)>)

public "add"(...arg0: ($Enchantment$Type)[]): void
public "remove"(...arg0: ($Enchantment$Type)[]): void
public "getEnchantments"(): $List<($Enchantment)>
public "getRandom"(): $RandomSource
public "isVillager"(): boolean
public "isWanderer"(): boolean
public "printEnchantments"(): void
get "enchantments"(): $List<($Enchantment)>
get "random"(): $RandomSource
get "villager"(): boolean
get "wanderer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterEnchantedTradeEventJS$Type = ($FilterEnchantedTradeEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterEnchantedTradeEventJS_ = $FilterEnchantedTradeEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/teleport/$EntityTeleportsEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TeleportType, $TeleportType$Type} from "packages/com/almostreliable/morejs/features/teleport/$TeleportType"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityTeleportsEventJS extends $EntityEventJS {

constructor(arg0: $Entity$Type, arg1: double, arg2: double, arg3: double, arg4: $TeleportType$Type)
constructor(arg0: $Entity$Type, arg1: double, arg2: double, arg3: double, arg4: $Level$Type, arg5: $TeleportType$Type)

public "getType"(): $TeleportType
public "getY"(): double
public "getEntity"(): $Entity
public "setZ"(arg0: double): void
public "getZ"(): double
public "getX"(): double
public "setX"(arg0: double): void
public "setY"(arg0: double): void
get "type"(): $TeleportType
get "y"(): double
get "entity"(): $Entity
set "z"(value: double)
get "z"(): double
get "x"(): double
set "x"(value: double)
set "y"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportsEventJS$Type = ($EntityTeleportsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTeleportsEventJS_ = $EntityTeleportsEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS" {
import {$PiglinPlayerBehaviorEventJS$PiglinBehavior, $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type} from "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS$PiglinBehavior"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Piglin, $Piglin$Type} from "packages/net/minecraft/world/entity/monster/piglin/$Piglin"

export class $PiglinPlayerBehaviorEventJS extends $PlayerEventJS {

constructor(arg0: $Piglin$Type, arg1: $Player$Type, arg2: $Optional$Type<($Player$Type)>)

public "ignoreHoldingCheck"(): void
public "getBehavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
public "getPiglin"(): $Piglin
public "setBehavior"(arg0: $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type): void
public "isIgnoreHoldingCheck"(): boolean
public "isAggressiveAlready"(): boolean
public "getPreviousTargetPlayer"(): $Player
get "behavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
get "piglin"(): $Piglin
set "behavior"(value: $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type)
get "aggressiveAlready"(): boolean
get "previousTargetPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$Type = ($PiglinPlayerBehaviorEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS_ = $PiglinPlayerBehaviorEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export interface $LootFunctionsContainer<F extends $LootFunctionsContainer<(any)>> {

 "enchantRandomly"(): F
 "enchantRandomly"(enchantments: ($Enchantment$Type)[]): F
 "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): F
 "enchantWithLevels"(numberProvider: $NumberProvider$Type): F
 "replaceLore"(...components: ($Component$Type)[]): F
 "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): F
 "limitCount"(numberProvider: $NumberProvider$Type): F
 "smeltLoot"(): F
 "applyLootingBonus"(numberProvider: $NumberProvider$Type): F
 "addNbt"(tag: $CompoundTag$Type): F
 "addPotion"(potion: $Potion$Type): F
 "customFunction"(json: $JsonObject$Type): F
 "applyOreBonus"(enchantment: $Enchantment$Type): F
 "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): F
 "setName"(component: $Component$Type): F
 "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): F
 "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<(F)>)>): F
 "addFunction"(arg0: $LootItemFunction$Type): F
 "addFunction"(builder: $LootItemFunction$Builder$Type): F
 "addNBT"(tag: $CompoundTag$Type): F
 "addLore"(...components: ($Component$Type)[]): F
 "damage"(numberProvider: $NumberProvider$Type): F
 "simulateExplosionDecay"(): F
 "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): F

(): F
}

export namespace $LootFunctionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunctionsContainer$Type<F> = ($LootFunctionsContainer<(F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFunctionsContainer_<F> = $LootFunctionsContainer$Type<(F)>;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$RecipeOutputBuilder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RecipeOutputs$RecipeOutput, $RecipeOutputs$RecipeOutput$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$RecipeOutput"

export class $RecipeOutputs$RecipeOutputBuilder {


public "build"(): $RecipeOutputs$RecipeOutput<(any)>
public "offset"(x: integer, y: integer, z: integer): $RecipeOutputs$RecipeOutputBuilder
public "data"(data: $CompoundTag$Type): $RecipeOutputs$RecipeOutputBuilder
public "spread"(x: integer, y: integer, z: integer): $RecipeOutputs$RecipeOutputBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeOutputs$RecipeOutputBuilder$Type = ($RecipeOutputs$RecipeOutputBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeOutputs$RecipeOutputBuilder_ = $RecipeOutputs$RecipeOutputBuilder$Type;
}}
declare module "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ResourceLocationFilter extends $Predicate<($ResourceLocation)> {

 "test"(arg0: $ResourceLocation$Type): boolean
 "negate"(): $Predicate<($ResourceLocation)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>

(arg0: $ResourceLocation$Type): boolean
}

export namespace $ResourceLocationFilter {
function isEqual<T>(arg0: any): $Predicate<($ResourceLocation)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLocationFilter$Type = ($ResourceLocationFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceLocationFilter_ = $ResourceLocationFilter$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$OfferModification, $OfferModification$Type} from "packages/com/almostreliable/morejs/features/villager/$OfferModification"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $TransformableTrade$Transformer {

 "accept"(arg0: $OfferModification$Type, arg1: $Entity$Type, arg2: $RandomSource$Type): void

(arg0: $OfferModification$Type, arg1: $Entity$Type, arg2: $RandomSource$Type): void
}

export namespace $TransformableTrade$Transformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$Transformer$Type = ($TransformableTrade$Transformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade$Transformer_ = $TransformableTrade$Transformer$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$UpdateAbstractVillagerOffersEventJS" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$AbstractVillager, $AbstractVillager$Type} from "packages/net/minecraft/world/entity/npc/$AbstractVillager"
import {$MerchantOffers, $MerchantOffers$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffers"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $UpdateAbstractVillagerOffersEventJS extends $LivingEntityEventJS {

constructor(arg0: $AbstractVillager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>)

public "getOffers"(): $MerchantOffers
public "getEntity"(): $LivingEntity
public "getVillagerTrades"(arg0: $VillagerProfession$Type): $List<($VillagerTrades$ItemListing)>
public "getVillagerTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "getVillagerData"(): $VillagerData
public static "invokeEvent"(arg0: $AbstractVillager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>): void
public "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "getWandererTrades"(): $List<($VillagerTrades$ItemListing)>
public "deleteAddedOffers"(): void
public "addRandomOffer"(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>): $MerchantOffer
public "addRandomOffer"(): $MerchantOffer
public "getAddedOffers"(): $Collection<($MerchantOffer)>
public "getUsedTrades"(): $List<($VillagerTrades$ItemListing)>
public "isVillager"(): boolean
public "isWanderer"(): boolean
get "offers"(): $MerchantOffers
get "entity"(): $LivingEntity
get "villagerData"(): $VillagerData
get "wandererTrades"(): $List<($VillagerTrades$ItemListing)>
get "addedOffers"(): $Collection<($MerchantOffer)>
get "usedTrades"(): $List<($VillagerTrades$ItemListing)>
get "villager"(): boolean
get "wanderer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateAbstractVillagerOffersEventJS$Type = ($UpdateAbstractVillagerOffersEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateAbstractVillagerOffersEventJS_ = $UpdateAbstractVillagerOffersEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/wrapper/$IntervalJS" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $IntervalJS {

constructor()

public "toString"(): string
public "min"(min: double): $IntervalJS
public "max"(max: double): $IntervalJS
public "matches"(value: double): boolean
public "between"(min: double, max: double): $IntervalJS
public static "ofDoubles"(o: any): $MinMaxBounds$Doubles
public static "ofInt"(o: any): $MinMaxBounds$Ints
public "matchesSqr"(value: double): boolean
public "getVanillaInt"(): $MinMaxBounds$Ints
public "getVanillaDoubles"(): $MinMaxBounds$Doubles
get "vanillaInt"(): $MinMaxBounds$Ints
get "vanillaDoubles"(): $MinMaxBounds$Doubles
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntervalJS$Type = ($IntervalJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntervalJS_ = $IntervalJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$CustomTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CustomTrade implements $VillagerTrades$ItemListing {

constructor(arg0: $TransformableTrade$Transformer$Type)

public "getOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTrade$Type = ($CustomTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTrade_ = $CustomTrade$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/component/$IngredientStack" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $IngredientStack extends $Record {

constructor(ingredient: $Ingredient$Type, count: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "count"(): integer
public static "fromJson"(json: $JsonElement$Type): $IngredientStack
public "ingredient"(): $Ingredient
public static "fromNetwork"(buffer: $FriendlyByteBuf$Type): $IngredientStack
public "toNetwork"(buffer: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientStack$Type = ($IngredientStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientStack_ = $IngredientStack$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation" {
import {$ParticleTransformation$Data, $ParticleTransformation$Data$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation$Data"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ParticleTransformation$Simple, $ParticleTransformation$Simple$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation$Simple"

export interface $ParticleTransformation {

 "apply"(arg0: float, arg1: $Vec3$Type, arg2: $Vec3$Type): $ParticleTransformation$Data

(arg0: $ParticleTransformation$Simple$Type): $ParticleTransformation
}

export namespace $ParticleTransformation {
function onlyPosition(arg0: $ParticleTransformation$Simple$Type): $ParticleTransformation
function onlyMotion(arg0: $ParticleTransformation$Simple$Type): $ParticleTransformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleTransformation$Type = ($ParticleTransformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleTransformation_ = $ParticleTransformation$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/$AltarRecipe$WEATHER" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $AltarRecipe$WEATHER extends $Enum<($AltarRecipe$WEATHER)> {
static readonly "ANY": $AltarRecipe$WEATHER
static readonly "CLEAR": $AltarRecipe$WEATHER
static readonly "RAIN": $AltarRecipe$WEATHER
static readonly "THUNDER": $AltarRecipe$WEATHER


public static "values"(): ($AltarRecipe$WEATHER)[]
public static "valueOf"(name: string): $AltarRecipe$WEATHER
public "check"(level: $Level$Type, player: $ServerPlayer$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltarRecipe$WEATHER$Type = (("rain") | ("clear") | ("thunder") | ("any")) | ($AltarRecipe$WEATHER);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltarRecipe$WEATHER_ = $AltarRecipe$WEATHER$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureTemplateAccess" {
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $StructureTemplateAccess {

 "getEntities"(): $List<($StructureTemplate$StructureEntityInfo)>
 "getPalettes"(): $List<($StructureTemplate$Palette)>
 "getBorderSize"(): $Vec3i
}

export namespace $StructureTemplateAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccess$Type = ($StructureTemplateAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateAccess_ = $StructureTemplateAccess$Type;
}}
declare module "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker$Serializer" {
import {$ClientRecipeTracker, $ClientRecipeTracker$Type} from "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ClientRecipeTracker$Serializer implements $RecipeSerializer<($ClientRecipeTracker)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, json: $JsonObject$Type): $ClientRecipeTracker
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $ClientRecipeTracker
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $ClientRecipeTracker$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ClientRecipeTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$Serializer$Type = ($ClientRecipeTracker$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker$Serializer_ = $ClientRecipeTracker$Serializer$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$IntRange" {
import {$IntPredicate, $IntPredicate$Type} from "packages/java/util/function/$IntPredicate"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $IntRange implements $IntPredicate {

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "test"(arg0: integer): boolean
public static "all"(): $IntRange
public "getMax"(): integer
public "getMin"(): integer
public "getRandom"(arg0: $RandomSource$Type): integer
public "negate"(): $IntPredicate
public "and"(arg0: $IntPredicate$Type): $IntPredicate
public "or"(arg0: $IntPredicate$Type): $IntPredicate
get "max"(): integer
get "min"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntRange$Type = ($IntRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntRange_ = $IntRange$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider" {
import {$MapPosInfo, $MapPosInfo$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $MapPosInfo$Provider {

 "apply"(arg0: $ServerLevel$Type, arg1: $Entity$Type): $MapPosInfo

(arg0: $ServerLevel$Type, arg1: $Entity$Type): $MapPosInfo
}

export namespace $MapPosInfo$Provider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPosInfo$Provider$Type = ($MapPosInfo$Provider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPosInfo$Provider_ = $MapPosInfo$Provider$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS" {
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$VillagerTradingEventJS$ForEachCallback, $VillagerTradingEventJS$ForEachCallback$Type} from "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS$ForEachCallback"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerTradingEventJS extends $EventJS {

constructor(arg0: $Map$Type<($VillagerProfession$Type), ($Int2ObjectMap$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>)>)

public "removeTrades"(arg0: $TradeFilter$Type): void
public "getTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: $VillagerProfession$Type, arg1: integer, arg2: T): T
public "addTrade"(arg0: $VillagerProfession$Type, arg1: integer, arg2: ($TradeItem$Type)[], arg3: $TradeItem$Type): $SimpleTrade
public "removeVanillaTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type): void
public "removeVanillaTrades"(): void
public "addCustomTrade"(arg0: $VillagerProfession$Type, arg1: integer, arg2: $TransformableTrade$Transformer$Type): void
public "removeModdedTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type): void
public "removeModdedTrades"(): void
public "forEachTrades"(arg0: $VillagerTradingEventJS$ForEachCallback$Type): void
public "forEachTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type, arg2: $Consumer$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$Type = ($VillagerTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS_ = $VillagerTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<T1, T2, T3> {

 "accept"(arg0: T1, arg1: T2, arg2: T3): void

(arg0: T1, arg1: T2, arg2: T3): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$Type<T1, T2, T3> = ($TriConsumer<(T1), (T2), (T3)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<T1, T2, T3> = $TriConsumer$Type<(T1), (T2), (T3)>;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TransformableTrade<T extends $VillagerTrades$ItemListing> implements $VillagerTrades$ItemListing {

constructor(arg0: ($TradeItem$Type)[])

public "transform"(arg0: $TransformableTrade$Transformer$Type): T
public "maxUses"(arg0: integer): T
public "priceMultiplier"(arg0: float): T
public "villagerExperience"(arg0: integer): T
public "getOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$Type<T> = ($TransformableTrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade_<T> = $TransformableTrade$Type<(T)>;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootContextJS" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootContextType, $LootContextType$Type} from "packages/com/almostreliable/lootjs/core/$LootContextType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootContextJS {

constructor(context: $LootContext$Type)

public "getType"(): $LootContextType
public "getPosition"(): $Vec3
public "getLevel"(): $ServerLevel
public "cancel"(): void
public "getEntity"(): $Entity
public "getTool"(): $ItemStack
public "isCanceled"(): boolean
public "addLoot"(lootEntry: $LootEntry$Type): void
public "getLootTableId"(): $ResourceLocation
public "getLoot"(): $List<($ItemStack)>
public "getCustomData"(): $Map<(string), (any)>
public "getDamageSource"(): $DamageSource
public "getServer"(): $MinecraftServer
public "getPlayer"(): $ServerPlayer
public "getRandom"(): $RandomSource
public "getBlockPos"(): $BlockPos
public "getExplosionRadius"(): float
public "lootSize"(): integer
public "removeLoot"(itemFilter: $ItemFilter$Type): void
public "findLoot"(itemFilter: $ItemFilter$Type): $List<($ItemStack)>
public "getDestroyedBlock"(): $BlockContainerJS
public "isExploded"(): boolean
public "getLooting"(): integer
public "hasLoot"(ingredient: $ItemFilter$Type): boolean
public "forEachLoot"(action: $Consumer$Type<($ItemStack$Type)>): void
public "getVanillaContext"(): $LootContext
public "getKillerEntity"(): $Entity
public "getLuck"(): float
get "type"(): $LootContextType
get "position"(): $Vec3
get "level"(): $ServerLevel
get "entity"(): $Entity
get "tool"(): $ItemStack
get "canceled"(): boolean
get "lootTableId"(): $ResourceLocation
get "loot"(): $List<($ItemStack)>
get "customData"(): $Map<(string), (any)>
get "damageSource"(): $DamageSource
get "server"(): $MinecraftServer
get "player"(): $ServerPlayer
get "random"(): $RandomSource
get "blockPos"(): $BlockPos
get "explosionRadius"(): float
get "destroyedBlock"(): $BlockContainerJS
get "exploded"(): boolean
get "looting"(): integer
get "vanillaContext"(): $LootContext
get "killerEntity"(): $Entity
get "luck"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextJS$Type = ($LootContextJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextJS_ = $LootContextJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$LootItemFunctionType, $LootItemFunctionType$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunctionType"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"

export class $AddAttributesFunction implements $LootItemFunction {

constructor(preserveDefaultModifier: boolean, modifiers: $List$Type<($AddAttributesFunction$Modifier$Type)>)

public "apply"(itemStack: $ItemStack$Type, context: $LootContext$Type): $ItemStack
public "getType"(): $LootItemFunctionType
public "preserveDefaultAttributes"(itemStack: $ItemStack$Type, slot: $EquipmentSlot$Type): void
public static "decorate"(arg0: $BiFunction$Type<($ItemStack$Type), ($LootContext$Type), ($ItemStack$Type)>, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $LootContext$Type): $Consumer<($ItemStack)>
public "validate"(arg0: $ValidationContext$Type): void
public "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
public "andThen"<V>(arg0: $Function$Type<(any), (any)>): $BiFunction<($ItemStack), ($LootContext), (V)>
get "type"(): $LootItemFunctionType
get "referencedContextParams"(): $Set<($LootContextParam<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Type = ($AddAttributesFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction_ = $AddAttributesFunction$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableTooltipEventJS" {
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EnchantmentTableTooltipEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $EnchantmentMenu$Type, arg5: integer, arg6: $List$Type<(any)>)

public "getClueId"(): $ResourceLocation
public "getRequiredLevel"(): integer
public "getClue"(): $EnchantmentInstance
public "getSlot"(): integer
public "getLines"(): $List<(any)>
get "clueId"(): $ResourceLocation
get "requiredLevel"(): integer
get "clue"(): $EnchantmentInstance
get "slot"(): integer
get "lines"(): $List<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableTooltipEventJS$Type = ($EnchantmentTableTooltipEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableTooltipEventJS_ = $EnchantmentTableTooltipEventJS$Type;
}}
declare module "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$TriConsumer, $TriConsumer$Type} from "packages/org/apache/logging/log4j/util/$TriConsumer"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RecipeOutputs$OutputType, $RecipeOutputs$OutputType$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$OutputType"
import {$RecipeOutputs$RecipeOutput, $RecipeOutputs$RecipeOutput$Type} from "packages/com/almostreliable/summoningrituals/recipe/component/$RecipeOutputs$RecipeOutput"

export class $RecipeOutputs {

constructor()

public "add"(output: $RecipeOutputs$RecipeOutput$Type<(any)>): void
public "size"(): integer
public "forEach"(consumer: $TriConsumer$Type<($RecipeOutputs$OutputType$Type), ($RecipeOutputs$RecipeOutput$Type<(any)>), (integer)>): void
public "toJson"(): $JsonArray
public static "fromJson"(json: $JsonArray$Type): $RecipeOutputs
public static "fromNetwork"(buffer: $FriendlyByteBuf$Type): $RecipeOutputs
public "toNetwork"(buffer: $FriendlyByteBuf$Type): void
public "handleRecipe"(level: $ServerLevel$Type, origin: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeOutputs$Type = ($RecipeOutputs);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeOutputs_ = $RecipeOutputs$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ModifyLootAction$Callback {

 "modify"(arg0: $ItemStack$Type): $ItemStack

(arg0: $ItemStack$Type): $ItemStack
}

export namespace $ModifyLootAction$Callback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyLootAction$Callback$Type = ($ModifyLootAction$Callback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyLootAction$Callback_ = $ModifyLootAction$Callback$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleInstructions" {
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleDataBuilder$DustParticleDataBuilder, $ParticleDataBuilder$DustParticleDataBuilder$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder$DustParticleDataBuilder"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$SceneBuilder, $SceneBuilder$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ParticleDataBuilder, $ParticleDataBuilder$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"
import {$ParticleDataBuilder$Static, $ParticleDataBuilder$Static$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder$Static"

export class $ParticleInstructions {

constructor(arg0: $SceneBuilder$Type)

public "block"(arg0: integer, arg1: $BlockState$Type, arg2: $Vec3$Type): $ParticleDataBuilder$Static
public "item"(arg0: integer, arg1: $ItemStack$Type, arg2: $Vec3$Type): $ParticleDataBuilder$Static
public "basin"(arg0: integer, arg1: $FluidStackJS$Type, arg2: $Vec3$Type): $ParticleDataBuilder<(any), (any)>
public "dust"(arg0: integer, arg1: $Color$Type, arg2: $Vec3$Type): $ParticleDataBuilder$DustParticleDataBuilder
public "dust"(arg0: integer, arg1: $Color$Type, arg2: $Color$Type, arg3: $Vec3$Type): $ParticleDataBuilder$DustParticleDataBuilder
public "simple"(arg0: integer, arg1: $ParticleType$Type<(any)>, arg2: $Vec3$Type): $ParticleDataBuilder<(any), (any)>
public "fluid"(arg0: integer, arg1: $FluidStackJS$Type, arg2: $Vec3$Type): $ParticleDataBuilder<(any), (any)>
public "drip"(arg0: integer, arg1: $FluidStackJS$Type, arg2: $Vec3$Type): $ParticleDataBuilder<(any), (any)>
public "rotationIndicator"(arg0: integer, arg1: $Vec3$Type, arg2: float, arg3: float, arg4: $Direction$Axis$Type): $ParticleDataBuilder<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleInstructions$Type = ($ParticleInstructions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleInstructions_ = $ParticleInstructions$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"

export class $EnchantmentTableEventJS extends $LevelEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $EnchantmentMenu$Type)

public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getSecondItem"(): $ItemStack
get "item"(): $ItemStack
get "level"(): $Level
get "player"(): $Player
get "secondItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableEventJS$Type = ($EnchantmentTableEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableEventJS_ = $EnchantmentTableEventJS$Type;
}}
