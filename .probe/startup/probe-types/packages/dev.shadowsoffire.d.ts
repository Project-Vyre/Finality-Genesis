declare module "packages/dev/shadowsoffire/apotheosis/potion/$PotionCharmRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$PotionCharmRecipe, $PotionCharmRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/potion/$PotionCharmRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PotionCharmRecipe$Serializer implements $RecipeSerializer<($PotionCharmRecipe)> {
static readonly "INSTANCE": $PotionCharmRecipe$Serializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $PotionCharmRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $PotionCharmRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $PotionCharmRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PotionCharmRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCharmRecipe$Serializer$Type = ($PotionCharmRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionCharmRecipe$Serializer_ = $PotionCharmRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$ObsidianArrowItem" {
import {$IApothArrowItem, $IApothArrowItem$Type} from "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$IApothArrowItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ObsidianArrowItem extends $ArrowItem implements $IApothArrowItem {
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

public "fromDispenser"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): $AbstractArrow
public "createArrow"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $AbstractArrow
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObsidianArrowItem$Type = ($ObsidianArrowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObsidianArrowItem_ = $ObsidianArrowItem$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/api/$IFormattableAttribute" {
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IFormattableAttribute {

 "toValueComponent"(arg0: $AttributeModifier$Operation$Type, arg1: double, arg2: $TooltipFlag$Type): $MutableComponent
 "toComponent"(arg0: $AttributeModifier$Type, arg1: $TooltipFlag$Type): $MutableComponent
 "getBonusBaseValue"(arg0: $ItemStack$Type): double
 "addBonusTooltips"(arg0: $ItemStack$Type, arg1: $Consumer$Type<($Component$Type)>, arg2: $TooltipFlag$Type): void
 "getBaseUUID"(): $UUID
 "toBaseComponent"(arg0: double, arg1: double, arg2: boolean, arg3: $TooltipFlag$Type): $MutableComponent
 "getDebugInfo"(arg0: $AttributeModifier$Type, arg1: $TooltipFlag$Type): $Component
 "ths"(): $Attribute
}

export namespace $IFormattableAttribute {
function toValueComponent(arg0: $Attribute$Type, arg1: $AttributeModifier$Operation$Type, arg2: double, arg3: $TooltipFlag$Type): $MutableComponent
function isNullOrAddition(arg0: $AttributeModifier$Operation$Type): boolean
function toComponent(arg0: $Attribute$Type, arg1: $AttributeModifier$Type, arg2: $TooltipFlag$Type): $MutableComponent
function toBaseComponent(arg0: $Attribute$Type, arg1: double, arg2: double, arg3: boolean, arg4: $TooltipFlag$Type): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFormattableAttribute$Type = ($IFormattableAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFormattableAttribute_ = $IFormattableAttribute$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$ExplosiveArrowItem" {
import {$IApothArrowItem, $IApothArrowItem$Type} from "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$IApothArrowItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExplosiveArrowItem extends $ArrowItem implements $IApothArrowItem {
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

public "fromDispenser"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): $AbstractArrow
public "createArrow"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $AbstractArrow
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosiveArrowItem$Type = ($ExplosiveArrowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosiveArrowItem_ = $ExplosiveArrowItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/gen/$RogueSpawnerFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RuleTest, $RuleTest$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $RogueSpawnerFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "STONE_TEST": $RuleTest
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor()

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RogueSpawnerFeature$Type = ($RogueSpawnerFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RogueSpawnerFeature_ = $RogueSpawnerFeature$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/masterwork/$KnowledgeEnchant" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$LivingDropsEvent, $LivingDropsEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $KnowledgeEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "drops"(arg0: $Player$Type, arg1: $LivingDropsEvent$Type): void
public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnowledgeEnchant$Type = ($KnowledgeEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnowledgeEnchant_ = $KnowledgeEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/anvil/$SplittingEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $SplittingEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplittingEnchant$Type = ($SplittingEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SplittingEnchant_ = $SplittingEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/tabs/$ITabFiller" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"

export interface $ITabFiller {

 "fillItemCategory"(arg0: $CreativeModeTab$Type, arg1: $CreativeModeTab$Output$Type): void

(arg0: $ItemLike$Type): $ITabFiller
}

export namespace $ITabFiller {
function simple(arg0: $ItemLike$Type): $ITabFiller
function delegating(arg0: $Supplier$Type<(any)>): $ITabFiller
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITabFiller$Type = ($ITabFiller);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITabFiller_ = $ITabFiller$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/impl/$BooleanAttribute" {
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IFormattableAttribute, $IFormattableAttribute$Type} from "packages/dev/shadowsoffire/attributeslib/api/$IFormattableAttribute"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $BooleanAttribute extends $Attribute implements $IFormattableAttribute {
static readonly "MAX_NAME_LENGTH": integer

constructor(arg0: string, arg1: boolean)

public "toValueComponent"(arg0: $AttributeModifier$Operation$Type, arg1: double, arg2: $TooltipFlag$Type): $MutableComponent
public "sanitizeValue"(arg0: double): double
public "toComponent"(arg0: $AttributeModifier$Type, arg1: $TooltipFlag$Type): $MutableComponent
public static "toValueComponent"(arg0: $Attribute$Type, arg1: $AttributeModifier$Operation$Type, arg2: double, arg3: $TooltipFlag$Type): $MutableComponent
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$Type): boolean
public static "toComponent"(arg0: $Attribute$Type, arg1: $AttributeModifier$Type, arg2: $TooltipFlag$Type): $MutableComponent
public static "toBaseComponent"(arg0: $Attribute$Type, arg1: double, arg2: double, arg3: boolean, arg4: $TooltipFlag$Type): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanAttribute$Type = ($BooleanAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanAttribute_ = $BooleanAttribute$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/util/$DrawsOnLeft" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $DrawsOnLeft {

 "ths"(): $AbstractContainerScreen<(any)>
 "drawOnLeft"(arg0: $GuiGraphics$Type, arg1: $List$Type<($Component$Type)>, arg2: integer): void
}

export namespace $DrawsOnLeft {
function draw(arg0: $AbstractContainerScreen$Type<(any)>, arg1: $GuiGraphics$Type, arg2: $List$Type<($Component$Type)>, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawsOnLeft$Type = ($DrawsOnLeft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawsOnLeft_ = $DrawsOnLeft$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/mixin/$AttributeInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AttributeInstanceAccessor {

 "getCachedValue"(): double

(): double
}

export namespace $AttributeInstanceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeInstanceAccessor$Type = ($AttributeInstanceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeInstanceAccessor_ = $AttributeInstanceAccessor$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/potion/$PotionCharmItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$ITabFiller, $ITabFiller$Type} from "packages/dev/shadowsoffire/placebo/tabs/$ITabFiller"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PotionCharmItem extends $Item implements $ITabFiller {
static readonly "EXTENDED_POTIONS": $Set<($ResourceLocation)>
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

public "getDefaultInstance"(): $ItemStack
public static "getEffect"(arg0: $ItemStack$Type): $MobEffectInstance
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getCreatorModId"(arg0: $ItemStack$Type): string
public "fillItemCategory"(arg0: $CreativeModeTab$Type, arg1: $CreativeModeTab$Output$Type): void
public static "hasEffect"(arg0: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "simple"(arg0: $ItemLike$Type): $ITabFiller
public static "delegating"(arg0: $Supplier$Type<(any)>): $ITabFiller
get "defaultInstance"(): $ItemStack
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCharmItem$Type = ($PotionCharmItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionCharmItem_ = $PotionCharmItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/potion/$PotionEnchantingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$PotionEnchantingRecipe, $PotionEnchantingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/potion/$PotionEnchantingRecipe"

export class $PotionEnchantingRecipe$Serializer implements $RecipeSerializer<($PotionEnchantingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $PotionEnchantingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $PotionEnchantingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $PotionEnchantingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PotionEnchantingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionEnchantingRecipe$Serializer$Type = ($PotionEnchantingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionEnchantingRecipe$Serializer_ = $PotionEnchantingRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$Reward" {
import {$MethodHandle, $MethodHandle$Type} from "packages/java/lang/invoke/$MethodHandle"
import {$GatewayEntity, $GatewayEntity$Type} from "packages/dev/shadowsoffire/gateways/entity/$GatewayEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CodecMap, $CodecMap$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecMap"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $Reward extends $CodecProvider<($Reward)> {

 "appendHoverText"(arg0: $Consumer$Type<($MutableComponent$Type)>): void
 "generateLoot"(arg0: $ServerLevel$Type, arg1: $GatewayEntity$Type, arg2: $Player$Type, arg3: $Consumer$Type<($ItemStack$Type)>): void
 "getCodec"(): $Codec<(any)>
}

export namespace $Reward {
const CODEC: $CodecMap<($Reward)>
const dropFromLootTable: $Method
const DROP_LOOT: $MethodHandle
function initSerializers(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reward$Type = ($Reward);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reward_ = $Reward$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/entity/$GatewayEntity" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ServerBossEvent, $ServerBossEvent$Type} from "packages/net/minecraft/server/level/$ServerBossEvent"
import {$IEntityAdditionalSpawnData, $IEntityAdditionalSpawnData$Type} from "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$GatewayEntity$FailureReason, $GatewayEntity$FailureReason$Type} from "packages/dev/shadowsoffire/gateways/entity/$GatewayEntity$FailureReason"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Gateway, $Gateway$Type} from "packages/dev/shadowsoffire/gateways/gate/$Gateway"
import {$Wave, $Wave$Type} from "packages/dev/shadowsoffire/gateways/gate/$Wave"
import {$ParticleMessage$Type, $ParticleMessage$Type$Type} from "packages/dev/shadowsoffire/gateways/net/$ParticleMessage$Type"

export class $GatewayEntity extends $Entity implements $IEntityAdditionalSpawnData {
static readonly "WAVE_ACTIVE": $EntityDataAccessor<(boolean)>
static readonly "TICKS_ACTIVE": $EntityDataAccessor<(integer)>
static readonly "WAVE": $EntityDataAccessor<(integer)>
static readonly "ENEMIES": $EntityDataAccessor<(integer)>
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $Player$Type, arg3: $DynamicHolder$Type<(any)>)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public static "getOwner"(arg0: $Entity$Type): $GatewayEntity
public "isValid"(): boolean
public "isCompleted"(): boolean
public "getFailureReason"(): $GatewayEntity$FailureReason
public "getDimensions"(arg0: $Pose$Type): $EntityDimensions
public "canBeCollidedWith"(): boolean
public "stopSeenByPlayer"(arg0: $ServerPlayer$Type): void
public "startSeenByPlayer"(arg0: $ServerPlayer$Type): void
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "writeSpawnData"(arg0: $FriendlyByteBuf$Type): void
public "readSpawnData"(arg0: $FriendlyByteBuf$Type): void
public "tick"(): void
public "spawnCompletionItem"(arg0: $ItemStack$Type): void
public "handleConversion"(arg0: $Entity$Type, arg1: $LivingEntity$Type): void
public "getGateway"(): $Gateway
public "getCurrentWave"(): $Wave
public "onFailure"(arg0: $Collection$Type<($LivingEntity$Type)>, arg1: $GatewayEntity$FailureReason$Type): void
public "isWaveActive"(): boolean
public static "hasLeftDimension"(arg0: $Entity$Type): boolean
public "getTicksActive"(): integer
public "getMaxWaveTime"(): integer
public "getSetupTime"(): integer
public "respawnEntity"(arg0: $Entity$Type): boolean
public "spawnItem"(arg0: $ItemStack$Type): void
public "isOutOfRange"(arg0: $Entity$Type): boolean
public "summonerOrClosest"(): $Player
public "spawnParticle"(arg0: double, arg1: double, arg2: double, arg3: $ParticleMessage$Type$Type): void
public static "spawnLightningOn"(arg0: $Entity$Type, arg1: boolean): void
public "getWave"(): integer
public "onGateCreated"(): void
public "setClientScale"(arg0: float): void
public "getClientScale"(): float
public "getActiveEnemies"(): integer
public "getBossEvent"(): $ServerBossEvent
get "valid"(): boolean
get "completed"(): boolean
get "failureReason"(): $GatewayEntity$FailureReason
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "gateway"(): $Gateway
get "currentWave"(): $Wave
get "waveActive"(): boolean
get "ticksActive"(): integer
get "maxWaveTime"(): integer
get "setupTime"(): integer
get "wave"(): integer
set "clientScale"(value: float)
get "clientScale"(): float
get "activeEnemies"(): integer
get "bossEvent"(): $ServerBossEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatewayEntity$Type = ($GatewayEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatewayEntity_ = $GatewayEntity$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/$SpearfishingEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$LivingDropsEvent, $LivingDropsEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $SpearfishingEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "addFishes"(arg0: $LivingDropsEvent$Type): void
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpearfishingEnchant$Type = ($SpearfishingEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpearfishingEnchant_ = $SpearfishingEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/gen/$BossDungeonFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $BossDungeonFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor()

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossDungeonFeature$Type = ($BossDungeonFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BossDungeonFeature_ = $BossDungeonFeature$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/replacements/$BaneEnchant" {
import {$DamageEnchantment, $DamageEnchantment$Type} from "packages/net/minecraft/world/item/enchantment/$DamageEnchantment"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BaneEnchant extends $DamageEnchantment {
static readonly "ALL": integer
static readonly "UNDEAD": integer
static readonly "ARTHROPODS": integer
readonly "type": integer
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, arg1: $MobType$Type, ...arg2: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getDamageBonus"(arg0: integer, arg1: $MobType$Type): float
public "doPostAttack"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "checkCompatibility"(arg0: $Enchantment$Type): boolean
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaneEnchant$Type = ($BaneEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaneEnchant_ = $BaneEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/mobfx/$FlyingEffect" {
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FlyingEffect extends $MobEffect {

constructor()

public "getAttributeModifierValue"(arg0: integer, arg1: $AttributeModifier$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlyingEffect$Type = ($FlyingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlyingEffect_ = $FlyingEffect$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/masterwork/$CrescendoEnchant" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $CrescendoEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public static "markGeneratedArrows"(arg0: $Projectile$Type, arg1: $ItemStack$Type): void
public static "preArrowFired"(arg0: $ItemStack$Type): void
public static "onArrowFired"(arg0: $ItemStack$Type): void
public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrescendoEnchant$Type = ($CrescendoEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrescendoEnchant_ = $CrescendoEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$WaveModifier" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CodecMap, $CodecMap$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecMap"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $WaveModifier extends $CodecProvider<($WaveModifier)> {

 "apply"(arg0: $LivingEntity$Type): void
 "appendHoverText"(arg0: $Consumer$Type<($MutableComponent$Type)>): void
 "getCodec"(): $Codec<(any)>
}

export namespace $WaveModifier {
const CODEC: $CodecMap<($WaveModifier)>
function initSerializers(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveModifier$Type = ($WaveModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaveModifier_ = $WaveModifier$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/block_entity/$TickingBlockEntity" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $TickingBlockEntity {

 "clientTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
 "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
}

export namespace $TickingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntity$Type = ($TickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingBlockEntity_ = $TickingBlockEntity$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/salvaging/$SalvagingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SalvagingRecipe, $SalvagingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/salvaging/$SalvagingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SalvagingRecipe$Serializer implements $RecipeSerializer<($SalvagingRecipe)> {
static readonly "INSTANCE": $SalvagingRecipe$Serializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SalvagingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SalvagingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SalvagingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SalvagingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SalvagingRecipe$Serializer$Type = ($SalvagingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalvagingRecipe$Serializer_ = $SalvagingRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/mobfx/$KnowledgeEffect" {
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $KnowledgeEffect extends $MobEffect {

constructor()

public "getAttributeModifierValue"(arg0: integer, arg1: $AttributeModifier$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnowledgeEffect$Type = ($KnowledgeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnowledgeEffect_ = $KnowledgeEffect$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/loot/$RarityClamp$Simple" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder"
import {$LootRarity, $LootRarity$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity"
import {$RarityClamp, $RarityClamp$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$RarityClamp"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RarityClamp$Simple extends $Record implements $RarityClamp {
static readonly "STRING_CODEC": $Codec<($RarityClamp$Simple)>
static readonly "MIN_MAX_CODEC": $Codec<($RarityClamp$Simple)>
static readonly "CODEC": $Codec<($RarityClamp$Simple)>

constructor(min: $DynamicHolder$Type<($LootRarity$Type)>, max: $DynamicHolder$Type<($LootRarity$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): $DynamicHolder<($LootRarity)>
public "max"(): $DynamicHolder<($LootRarity)>
public "getMinRarity"(): $LootRarity
public "getMaxRarity"(): $LootRarity
public "clamp"(arg0: $LootRarity$Type): $LootRarity
get "minRarity"(): $LootRarity
get "maxRarity"(): $LootRarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RarityClamp$Simple$Type = ($RarityClamp$Simple);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RarityClamp$Simple_ = $RarityClamp$Simple$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/mixin/$LivingEntityInvoker" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"

export interface $LivingEntityInvoker {

 "callCheckTotemDeathProtection"(arg0: $DamageSource$Type): boolean
 "callGetDeathSound"(): $SoundEvent
 "callActuallyHurt"(arg0: $DamageSource$Type, arg1: float): void
 "callGetSoundVolume"(): float
}

export namespace $LivingEntityInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityInvoker$Type = ($LivingEntityInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityInvoker_ = $LivingEntityInvoker$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/$InertEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $InertEnchantment extends $Enchantment {
static readonly "NULL": $EnchantmentCategory
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "isDiscoverable"(): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isAllowedOnBooks"(): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "discoverable"(): boolean
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InertEnchantment$Type = ($InertEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InertEnchantment_ = $InertEnchantment$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$MiningArrowEntity$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MiningArrowEntity$Type extends $Enum<($MiningArrowEntity$Type)> {
static readonly "IRON": $MiningArrowEntity$Type
static readonly "DIAMOND": $MiningArrowEntity$Type


public static "values"(): ($MiningArrowEntity$Type)[]
public static "valueOf"(arg0: string): $MiningArrowEntity$Type
public "getTexture"(): $ResourceLocation
get "texture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MiningArrowEntity$Type$Type = (("diamond") | ("iron")) | ($MiningArrowEntity$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MiningArrowEntity$Type_ = $MiningArrowEntity$Type$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/potion/$PotionCharmRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export class $PotionCharmRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $List$Type<(any)>, arg1: integer, arg2: integer)

public "getPotionSlots"(): $IntList
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getPotionIngredient"(): $Ingredient
get "potionSlots"(): $IntList
get "serializer"(): $RecipeSerializer<(any)>
get "potionIngredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCharmRecipe$Type = ($PotionCharmRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionCharmRecipe_ = $PotionCharmRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/objects/$ExtractionTomeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BookItem, $BookItem$Type} from "packages/net/minecraft/world/item/$BookItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnvilRepairEvent, $AnvilRepairEvent$Type} from "packages/net/minecraftforge/event/entity/player/$AnvilRepairEvent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AnvilUpdateEvent, $AnvilUpdateEvent$Type} from "packages/net/minecraftforge/event/$AnvilUpdateEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExtractionTomeItem extends $BookItem {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public static "updateAnvil"(arg0: $AnvilUpdateEvent$Type): boolean
public static "updateRepair"(arg0: $AnvilRepairEvent$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractionTomeItem$Type = ($ExtractionTomeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtractionTomeItem_ = $ExtractionTomeItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/compat/$GameStagesCompat$IStaged" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export interface $GameStagesCompat$IStaged {

 "getStages"(): $Set<(string)>

(): $Set<(string)>
}

export namespace $GameStagesCompat$IStaged {
function matches<T>(arg0: $Player$Type): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameStagesCompat$IStaged$Type = ($GameStagesCompat$IStaged);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameStagesCompat$IStaged_ = $GameStagesCompat$IStaged$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/gem/bonus/$GemBonus" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$StepFunction, $StepFunction$Type} from "packages/dev/shadowsoffire/placebo/util/$StepFunction"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$HitResult$Type, $HitResult$Type$Type} from "packages/net/minecraft/world/phys/$HitResult$Type"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootRarity, $LootRarity$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"
import {$GemClass, $GemClass$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/gem/$GemClass"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$CodecMap, $CodecMap$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecMap"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemBonus implements $CodecProvider<($GemBonus)> {
static readonly "CODEC": $CodecMap<($GemBonus)>
static readonly "VALUES_CODEC": $Codec<($Map<($LootRarity), ($StepFunction)>)>

constructor(arg0: $ResourceLocation$Type, arg1: $GemClass$Type)

public "getGemClass"(): $GemClass
public "validate"(): $GemBonus
public "getId"(): $ResourceLocation
public "getEnchantmentLevels"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $Map$Type<($Enchantment$Type), (integer)>): void
public "supports"(arg0: $LootRarity$Type): boolean
public "onArrowImpact"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $AbstractArrow$Type, arg3: $HitResult$Type, arg4: $HitResult$Type$Type): void
public "getSocketBonusTooltip"(arg0: $ItemStack$Type, arg1: $LootRarity$Type): $Component
public "modifyLoot"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $ObjectArrayList$Type<($ItemStack$Type)>, arg3: $LootContext$Type): void
public "onShieldBlock"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $LivingEntity$Type, arg3: $DamageSource$Type, arg4: float): float
public "getDurabilityBonusPercentage"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $ServerPlayer$Type): float
public static "initCodecs"(): void
public "doPostHurt"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $LivingEntity$Type, arg3: $Entity$Type): void
public "doPostAttack"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $LivingEntity$Type, arg3: $Entity$Type): void
public "onArrowFired"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $LivingEntity$Type, arg3: $AbstractArrow$Type): void
public "getNumberOfUUIDs"(): integer
public "onBlockBreak"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $Player$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockState$Type): void
public "getDamageBonus"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $MobType$Type): float
public "onItemUse"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $UseOnContext$Type): $InteractionResult
public "getDamageProtection"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $DamageSource$Type): integer
public "onHurt"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $DamageSource$Type, arg3: $LivingEntity$Type, arg4: float): float
public "addModifiers"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $BiConsumer$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "getCodec"(): $Codec<(any)>
get "gemClass"(): $GemClass
get "id"(): $ResourceLocation
get "numberOfUUIDs"(): integer
get "codec"(): $Codec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemBonus$Type = ($GemBonus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemBonus_ = $GemBonus$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/reload/$WeightedDynamicRegistry$ILuckyWeighted" {
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$Type} from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"

export interface $WeightedDynamicRegistry$ILuckyWeighted {

 "wrap"<T extends $WeightedDynamicRegistry$ILuckyWeighted>(arg0: float): $WeightedEntry$Wrapper<(T)>
 "getWeight"(): integer
 "getQuality"(): float
}

export namespace $WeightedDynamicRegistry$ILuckyWeighted {
function wrap<T>(arg0: T, arg1: float): $WeightedEntry$Wrapper<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedDynamicRegistry$ILuckyWeighted$Type = ($WeightedDynamicRegistry$ILuckyWeighted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedDynamicRegistry$ILuckyWeighted_ = $WeightedDynamicRegistry$ILuckyWeighted$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/spawn/modifiers/$StatModifier" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ApothSpawnerTile, $ApothSpawnerTile$Type} from "packages/dev/shadowsoffire/apotheosis/spawn/spawner/$ApothSpawnerTile"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SpawnerStat, $SpawnerStat$Type} from "packages/dev/shadowsoffire/apotheosis/spawn/modifiers/$SpawnerStat"

export class $StatModifier<T> extends $Record {

constructor(stat: $SpawnerStat$Type<(T)>, value: T, min: T, max: T)

public "value"(): T
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): T
public "max"(): T
public "apply"(arg0: $ApothSpawnerTile$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $StatModifier<(any)>
public static "parse"(arg0: $JsonObject$Type): $StatModifier<(any)>
public "stat"(): $SpawnerStat<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatModifier$Type<T> = ($StatModifier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatModifier_<T> = $StatModifier$Type<(T)>;
}}
declare module "packages/dev/shadowsoffire/apotheosis/potion/$PotionEnchantingRecipe" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$PotionEnchantingRecipe$Serializer, $PotionEnchantingRecipe$Serializer$Type} from "packages/dev/shadowsoffire/apotheosis/potion/$PotionEnchantingRecipe$Serializer"
import {$EnchantingRecipe, $EnchantingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/ench/table/$EnchantingRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantingStatRegistry$Stats, $EnchantingStatRegistry$Stats$Type} from "packages/dev/shadowsoffire/apotheosis/ench/table/$EnchantingStatRegistry$Stats"

export class $PotionEnchantingRecipe extends $EnchantingRecipe {
static readonly "SERIALIZER": $PotionEnchantingRecipe$Serializer
static readonly "NO_MAX": $EnchantingStatRegistry$Stats

constructor(arg0: $EnchantingStatRegistry$Stats$Type, arg1: $EnchantingStatRegistry$Stats$Type)

public "matches"(arg0: $ItemStack$Type, arg1: float, arg2: float, arg3: float): boolean
public "assemble"(arg0: $ItemStack$Type, arg1: float, arg2: float, arg3: float): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionEnchantingRecipe$Type = ($PotionEnchantingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionEnchantingRecipe_ = $PotionEnchantingRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/spawn/modifiers/$SpawnerModifier$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$SpawnerModifier, $SpawnerModifier$Type} from "packages/dev/shadowsoffire/apotheosis/spawn/modifiers/$SpawnerModifier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SpawnerModifier$Serializer implements $RecipeSerializer<($SpawnerModifier)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SpawnerModifier
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SpawnerModifier
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SpawnerModifier$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SpawnerModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerModifier$Serializer$Type = ($SpawnerModifier$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerModifier$Serializer_ = $SpawnerModifier$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/table/$KeepNBTEnchantingRecipe$Serializer" {
import {$EnchantingRecipe$Serializer, $EnchantingRecipe$Serializer$Type} from "packages/dev/shadowsoffire/apotheosis/ench/table/$EnchantingRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $KeepNBTEnchantingRecipe$Serializer extends $EnchantingRecipe$Serializer {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeepNBTEnchantingRecipe$Serializer$Type = ($KeepNBTEnchantingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeepNBTEnchantingRecipe$Serializer_ = $KeepNBTEnchantingRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/anvil/$ApothAnvilItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ApothAnvilItem extends $BlockItem {
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

constructor(arg0: $Block$Type)

public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getCreatorModId"(arg0: $ItemStack$Type): string
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothAnvilItem$Type = ($ApothAnvilItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApothAnvilItem_ = $ApothAnvilItem$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/reload/$WeightedDynamicRegistry$IDimensional" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $WeightedDynamicRegistry$IDimensional {

 "getDimensions"(): $Set<($ResourceLocation)>

(arg0: $Level$Type): $Predicate<(T)>
}

export namespace $WeightedDynamicRegistry$IDimensional {
function matches<T>(arg0: $Level$Type): $Predicate<(T)>
function matches<T>(arg0: $ResourceLocation$Type): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedDynamicRegistry$IDimensional$Type = ($WeightedDynamicRegistry$IDimensional);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedDynamicRegistry$IDimensional_ = $WeightedDynamicRegistry$IDimensional$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/reforging/$ReforgingTableBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootRarity, $LootRarity$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TickingEntityBlock, $TickingEntityBlock$Type} from "packages/dev/shadowsoffire/placebo/block_entity/$TickingEntityBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ReforgingTableBlock extends $Block implements $TickingEntityBlock {
static readonly "TITLE": $Component
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: integer)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getMaxRarity"(): $LootRarity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "maxRarity"(): $LootRarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReforgingTableBlock$Type = ($ReforgingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReforgingTableBlock_ = $ReforgingTableBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity$LootRule" {
import {$MutableInt, $MutableInt$Type} from "packages/org/apache/commons/lang3/mutable/$MutableInt"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$AffixType, $AffixType$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/$AffixType"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LootRarity, $LootRarity$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Affix, $Affix$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/$Affix"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LootRarity$LootRule extends $Record {
static readonly "CODEC": $Codec<($LootRarity$LootRule)>

constructor(type: $AffixType$Type, chance: float, backup: $LootRarity$LootRule$Type)
constructor(arg0: $AffixType$Type, arg1: float, arg2: $Optional$Type<($LootRarity$LootRule$Type)>)
constructor(arg0: $AffixType$Type, arg1: float)

public "type"(): $AffixType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "execute"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $Set$Type<($DynamicHolder$Type<($Affix$Type)>)>, arg3: $MutableInt$Type, arg4: $RandomSource$Type): void
public "backup"(): $LootRarity$LootRule
public "chance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootRarity$LootRule$Type = ($LootRarity$LootRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootRarity$LootRule_ = $LootRarity$LootRule$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/spawn/enchantment/$CapturingEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$LivingDropsEvent, $LivingDropsEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $CapturingEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "handleCapturing"(arg0: $LivingDropsEvent$Type): void
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapturingEnchant$Type = ($CapturingEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapturingEnchant_ = $CapturingEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/spawn/spawner/$ApothSpawnerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ApothSpawnerItem extends $BlockItem {
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

constructor()

public "getName"(arg0: $ItemStack$Type): $Component
public "getCreatorModId"(arg0: $ItemStack$Type): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothSpawnerItem$Type = ($ApothSpawnerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApothSpawnerItem_ = $ApothSpawnerItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/library/$EnchLibraryBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $EnchLibraryBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
static readonly "NAME": $Component
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockEntityType$BlockEntitySupplier$Type<(any)>, arg1: integer)

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchLibraryBlock$Type = ($EnchLibraryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchLibraryBlock_ = $EnchLibraryBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/masterwork/$EndlessQuiverEnchant" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EndlessQuiverEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "isTrulyInfinite"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndlessQuiverEnchant$Type = ($EndlessQuiverEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndlessQuiverEnchant_ = $EndlessQuiverEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$SocketingRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$AdventureModule$ApothSmithingRecipe, $AdventureModule$ApothSmithingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/$AdventureModule$ApothSmithingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SocketingRecipe extends $AdventureModule$ApothSmithingRecipe {
static readonly "TEMPLATE": integer
static readonly "BASE": integer
static readonly "ADDITION": integer
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor()

public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketingRecipe$Type = ($SocketingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketingRecipe_ = $SocketingRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$SocketingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SocketingRecipe, $SocketingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$SocketingRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SocketingRecipe$Serializer implements $RecipeSerializer<($SocketingRecipe)> {
static "INSTANCE": $SocketingRecipe$Serializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SocketingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SocketingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SocketingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SocketingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketingRecipe$Serializer$Type = ($SocketingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketingRecipe$Serializer_ = $SocketingRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$UnnamingRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$AdventureModule$ApothSmithingRecipe, $AdventureModule$ApothSmithingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/$AdventureModule$ApothSmithingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $UnnamingRecipe extends $AdventureModule$ApothSmithingRecipe {
static readonly "TEMPLATE": integer
static readonly "BASE": integer
static readonly "ADDITION": integer
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor()

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnnamingRecipe$Type = ($UnnamingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnnamingRecipe_ = $UnnamingRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/$ChromaticEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$Sheep, $Sheep$Type} from "packages/net/minecraft/world/entity/animal/$Sheep"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ChromaticEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
public "molestSheepItems"(arg0: $Sheep$Type, arg1: $ItemStack$Type, arg2: $List$Type<($ItemStack$Type)>): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChromaticEnchant$Type = ($ChromaticEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChromaticEnchant_ = $ChromaticEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$Gateway$Size" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Gateway$Size extends $Enum<($Gateway$Size)> {
static readonly "SMALL": $Gateway$Size
static readonly "MEDIUM": $Gateway$Size
static readonly "LARGE": $Gateway$Size
static readonly "CODEC": $Codec<($Gateway$Size)>


public static "values"(): ($Gateway$Size)[]
public static "valueOf"(arg0: string): $Gateway$Size
public "getScale"(): float
public "getDims"(): $EntityDimensions
get "scale"(): float
get "dims"(): $EntityDimensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gateway$Size$Type = (("small") | ("large") | ("medium")) | ($Gateway$Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Gateway$Size_ = $Gateway$Size$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/mixin/$IForgeItemStackMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IForgeItemStackMixin {

}

export namespace $IForgeItemStackMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeItemStackMixin$Type = ($IForgeItemStackMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeItemStackMixin_ = $IForgeItemStackMixin$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/util/$IEntityOwned" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IEntityOwned {

 "getOwner"(): $LivingEntity
 "setOwner"(arg0: $LivingEntity$Type): void
}

export namespace $IEntityOwned {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityOwned$Type = ($IEntityOwned);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityOwned_ = $IEntityOwned$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/objects/$GlowyBlockItem$GlowyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GlowyBlockItem$GlowyItem extends $Item {
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
export type $GlowyBlockItem$GlowyItem$Type = ($GlowyBlockItem$GlowyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlowyBlockItem$GlowyItem_ = $GlowyBlockItem$GlowyItem$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/mobfx/$GrievousEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $GrievousEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrievousEffect$Type = ($GrievousEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrievousEffect_ = $GrievousEffect$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/corrupted/$LifeMendingEnchant" {
import {$LivingHealEvent, $LivingHealEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHealEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $LifeMendingEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "lifeMend"(arg0: $LivingHealEvent$Type): void
public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "isCurse"(): boolean
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
get "curse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LifeMendingEnchant$Type = ($LifeMendingEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LifeMendingEnchant_ = $LifeMendingEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/masterwork/$EarthsBoonEnchant" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEvent$BreakEvent, $BlockEvent$BreakEvent$Type} from "packages/net/minecraftforge/event/level/$BlockEvent$BreakEvent"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EarthsBoonEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "provideBenefits"(arg0: $BlockEvent$BreakEvent$Type): void
public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthsBoonEnchant$Type = ($EarthsBoonEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarthsBoonEnchant_ = $EarthsBoonEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/util/$CachedObject$CachedObjectSource" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CachedObject$CachedObjectSource {

 "getOrCreate"<T>(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ItemStack$Type), (T)>): T
 "getOrCreate"<T>(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ItemStack$Type), (T)>, arg2: $ToIntFunction$Type<($ItemStack$Type)>): T

(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ItemStack$Type), (T)>): T
}

export namespace $CachedObject$CachedObjectSource {
function getOrCreate<T>(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ItemStack$Type), (T)>): T
function getOrCreate<T>(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ItemStack$Type), (T)>, arg3: $ToIntFunction$Type<($ItemStack$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedObject$CachedObjectSource$Type = ($CachedObject$CachedObjectSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedObject$CachedObjectSource_ = $CachedObject$CachedObjectSource$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$WaveEntity" {
import {$CodecMap, $CodecMap$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecMap"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $WaveEntity extends $CodecProvider<($WaveEntity)> {

 "getDescription"(): $MutableComponent
 "getCount"(): integer
 "createEntity"(arg0: $Level$Type): $LivingEntity
 "shouldFinalizeSpawn"(): boolean
 "getCodec"(): $Codec<(any)>
}

export namespace $WaveEntity {
const CODEC: $CodecMap<($WaveEntity)>
function initSerializers(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveEntity$Type = ($WaveEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaveEntity_ = $WaveEntity$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/block_entity/$TickingEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $TickingEntityBlock extends $EntityBlock {

 "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener

(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}

export namespace $TickingEntityBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingEntityBlock$Type = ($TickingEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingEntityBlock_ = $TickingEntityBlock$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/codec/$CodecProvider" {
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $CodecProvider<T> {

 "getCodec"(): $Codec<(any)>

(): $Codec<(any)>
}

export namespace $CodecProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecProvider$Type<T> = ($CodecProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecProvider_<T> = $CodecProvider$Type<(T)>;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$AddSocketsRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$AdventureModule$ApothSmithingRecipe, $AdventureModule$ApothSmithingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/$AdventureModule$ApothSmithingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AddSocketsRecipe extends $AdventureModule$ApothSmithingRecipe {
static readonly "TEMPLATE": integer
static readonly "BASE": integer
static readonly "ADDITION": integer
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer)

public "getInput"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getMaxSockets"(): integer
get "input"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "maxSockets"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSocketsRecipe$Type = ($AddSocketsRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddSocketsRecipe_ = $AddSocketsRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/$ReboundingEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ReboundingEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReboundingEnchant$Type = ($ReboundingEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReboundingEnchant_ = $ReboundingEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/spawn/spawner/$ApothSpawnerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnerBlock, $SpawnerBlock$Type} from "packages/net/minecraft/world/level/block/$SpawnerBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IReplacementBlock, $IReplacementBlock$Type} from "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"

export class $ApothSpawnerBlock extends $SpawnerBlock implements $IReplacementBlock {
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

public static "concat"(...arg0: (any)[]): $Component
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "asItem"(): $Item
public "_setDefaultState"(arg0: $BlockState$Type): void
public "setStateContainer"(arg0: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getExpDrop"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): integer
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
set "stateContainer"(value: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothSpawnerBlock$Type = ($ApothSpawnerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApothSpawnerBlock_ = $ApothSpawnerBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/boss/$BossSummonerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BossSummonerItem extends $Item {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossSummonerItem$Type = ($BossSummonerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BossSummonerItem_ = $BossSummonerItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/reforging/$ReforgingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ReforgingRecipe, $ReforgingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/reforging/$ReforgingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ReforgingRecipe$Serializer implements $RecipeSerializer<($ReforgingRecipe)> {
static readonly "INSTANCE": $ReforgingRecipe$Serializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ReforgingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ReforgingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ReforgingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ReforgingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReforgingRecipe$Serializer$Type = ($ReforgingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReforgingRecipe$Serializer_ = $ReforgingRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$BossEventSettings$Mode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BossEventSettings$Mode extends $Enum<($BossEventSettings$Mode)> {
static readonly "BOSS_BAR": $BossEventSettings$Mode
static readonly "NAME_PLATE": $BossEventSettings$Mode
static readonly "CODEC": $Codec<($BossEventSettings$Mode)>


public static "values"(): ($BossEventSettings$Mode)[]
public static "valueOf"(arg0: string): $BossEventSettings$Mode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossEventSettings$Mode$Type = (("boss_bar") | ("name_plate")) | ($BossEventSettings$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BossEventSettings$Mode_ = $BossEventSettings$Mode$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/$StableFootingEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$PlayerEvent$BreakSpeed, $PlayerEvent$BreakSpeed$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent$BreakSpeed"

export class $StableFootingEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "breakSpeed"(arg0: $PlayerEvent$BreakSpeed$Type): void
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StableFootingEnchant$Type = ($StableFootingEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StableFootingEnchant_ = $StableFootingEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/spawn/modifiers/$SpawnerStat" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$StatModifier, $StatModifier$Type} from "packages/dev/shadowsoffire/apotheosis/spawn/modifiers/$StatModifier"
import {$ApothSpawnerTile, $ApothSpawnerTile$Type} from "packages/dev/shadowsoffire/apotheosis/spawn/spawner/$ApothSpawnerTile"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $SpawnerStat<T> {

 "name"(): $MutableComponent
 "getValue"(arg0: $ApothSpawnerTile$Type): T
 "apply"(arg0: T, arg1: T, arg2: T, arg3: $ApothSpawnerTile$Type): boolean
 "getId"(): string
 "desc"(): $MutableComponent
 "getTooltip"(arg0: $ApothSpawnerTile$Type): $Component
 "getModifierCodec"(): $Codec<($StatModifier<(T)>)>
}

export namespace $SpawnerStat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerStat$Type<T> = ($SpawnerStat<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerStat_<T> = $SpawnerStat$Type<(T)>;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/$EnchModuleEvents$TridentGetter" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $EnchModuleEvents$TridentGetter {

 "getTridentItem"(): $ItemStack

(): $ItemStack
}

export namespace $EnchModuleEvents$TridentGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchModuleEvents$TridentGetter$Type = ($EnchModuleEvents$TridentGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchModuleEvents$TridentGetter_ = $EnchModuleEvents$TridentGetter$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/salvaging/$SalvagingRecipe" {
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
import {$List, $List$Type} from "packages/java/util/$List"
import {$SalvagingRecipe$OutputData, $SalvagingRecipe$OutputData$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/salvaging/$SalvagingRecipe$OutputData"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SalvagingRecipe implements $Recipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($SalvagingRecipe$OutputData$Type)>, arg2: $Ingredient$Type)

public "matches"(arg0: $ItemStack$Type): boolean
public "getInput"(): $Ingredient
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOutputs"(): $List<($SalvagingRecipe$OutputData)>
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
/**
 * 
 * @deprecated
 */
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
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
get "input"(): $Ingredient
get "outputs"(): $List<($SalvagingRecipe$OutputData)>
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
export type $SalvagingRecipe$Type = ($SalvagingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalvagingRecipe_ = $SalvagingRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/net/$ParticleMessage$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ParticleMessage$Type extends $Enum<($ParticleMessage$Type)> {
static readonly "IDLE": $ParticleMessage$Type
static readonly "SPAWNED": $ParticleMessage$Type


public static "values"(): ($ParticleMessage$Type)[]
public static "valueOf"(arg0: string): $ParticleMessage$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleMessage$Type$Type = (("spawned") | ("idle")) | ($ParticleMessage$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleMessage$Type_ = $ParticleMessage$Type$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/objects/$FilteringShelfBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEnchantingBlock, $IEnchantingBlock$Type} from "packages/dev/shadowsoffire/apotheosis/ench/api/$IEnchantingBlock"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$ChiseledBookShelfBlock, $ChiseledBookShelfBlock$Type} from "packages/net/minecraft/world/level/block/$ChiseledBookShelfBlock"

export class $FilteringShelfBlock extends $ChiseledBookShelfBlock implements $IEnchantingBlock {
static readonly "BOOKS_PER_ROW": integer
static readonly "SLOT_OCCUPIED_PROPERTIES": $List<($BooleanProperty)>
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

public "getBlacklistedEnchantments"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $Set<($Enchantment)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
public "getMaxEnchantingPower"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
public static "canInsert"(arg0: $ItemStack$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getArcanaBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
public "getTableParticle"(arg0: $BlockState$Type): $ParticleOptions
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteringShelfBlock$Type = ($FilteringShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilteringShelfBlock_ = $FilteringShelfBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/village/fletching/$ApothFletchingBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IReplacementBlock, $IReplacementBlock$Type} from "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FletchingTableBlock, $FletchingTableBlock$Type} from "packages/net/minecraft/world/level/block/$FletchingTableBlock"

export class $ApothFletchingBlock extends $FletchingTableBlock implements $IReplacementBlock {
static readonly "NAME": $Component
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

public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "_setDefaultState"(arg0: $BlockState$Type): void
public "setStateContainer"(arg0: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
set "stateContainer"(value: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothFletchingBlock$Type = ($ApothFletchingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApothFletchingBlock_ = $ApothFletchingBlock$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/recipe/$GatewayRecipeSerializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ShapedRecipe$Serializer, $ShapedRecipe$Serializer$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe$Serializer"

export class $GatewayRecipeSerializer extends $ShapedRecipe$Serializer {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatewayRecipeSerializer$Type = ($GatewayRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatewayRecipeSerializer_ = $GatewayRecipeSerializer$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/table/$EnchantingRecipe" {
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
import {$EnchantingRecipe$Serializer, $EnchantingRecipe$Serializer$Type} from "packages/dev/shadowsoffire/apotheosis/ench/table/$EnchantingRecipe$Serializer"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$EnchantingStatRegistry$Stats, $EnchantingStatRegistry$Stats$Type} from "packages/dev/shadowsoffire/apotheosis/ench/table/$EnchantingStatRegistry$Stats"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $EnchantingRecipe implements $Recipe<($Container)> {
static readonly "SERIALIZER": $EnchantingRecipe$Serializer
static readonly "NO_MAX": $EnchantingStatRegistry$Stats

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $Ingredient$Type, arg3: $EnchantingStatRegistry$Stats$Type, arg4: $EnchantingStatRegistry$Stats$Type)

public "matches"(arg0: $ItemStack$Type, arg1: float, arg2: float, arg3: float): boolean
public "getInput"(): $Ingredient
public static "findMatch"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: float, arg3: float, arg4: float): $EnchantingRecipe
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public static "findItemMatch"(arg0: $Level$Type, arg1: $ItemStack$Type): $EnchantingRecipe
public "getOutput"(): $ItemStack
public "getRequirements"(): $EnchantingStatRegistry$Stats
public "assemble"(arg0: $ItemStack$Type, arg1: float, arg2: float, arg3: float): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
/**
 * 
 * @deprecated
 */
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getMaxRequirements"(): $EnchantingStatRegistry$Stats
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
get "input"(): $Ingredient
get "output"(): $ItemStack
get "requirements"(): $EnchantingStatRegistry$Stats
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "maxRequirements"(): $EnchantingStatRegistry$Stats
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
export type $EnchantingRecipe$Type = ($EnchantingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantingRecipe_ = $EnchantingRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$Wave" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$WaveEntity, $WaveEntity$Type} from "packages/dev/shadowsoffire/gateways/gate/$WaveEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$WaveModifier, $WaveModifier$Type} from "packages/dev/shadowsoffire/gateways/gate/$WaveModifier"
import {$GatewayEntity, $GatewayEntity$Type} from "packages/dev/shadowsoffire/gateways/entity/$GatewayEntity"
import {$Reward, $Reward$Type} from "packages/dev/shadowsoffire/gateways/gate/$Reward"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"

export class $Wave extends $Record {
static "CODEC": $Codec<($Wave)>

constructor(entities: $List$Type<($WaveEntity$Type)>, modifiers: $List$Type<($WaveModifier$Type)>, rewards: $List$Type<($Reward$Type)>, maxWaveTime: integer, setupTime: integer)

public "modifiers"(): $List<($WaveModifier)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "entities"(): $List<($WaveEntity)>
public "setupTime"(): integer
public "maxWaveTime"(): integer
public "spawnWave"(arg0: $ServerLevel$Type, arg1: $Vec3$Type, arg2: $GatewayEntity$Type): $List<($LivingEntity)>
public "spawnRewards"(arg0: $ServerLevel$Type, arg1: $GatewayEntity$Type, arg2: $Player$Type): $List<($ItemStack)>
public "rewards"(): $List<($Reward)>
public static "spawnWaveEntity"(arg0: $ServerLevel$Type, arg1: $Vec3$Type, arg2: $GatewayEntity$Type, arg3: $Wave$Type, arg4: $WaveEntity$Type): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wave$Type = ($Wave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wave_ = $Wave$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/table/$ApothEnchantBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$EnchantmentTableBlock, $EnchantmentTableBlock$Type} from "packages/net/minecraft/world/level/block/$EnchantmentTableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IReplacementBlock, $IReplacementBlock$Type} from "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ApothEnchantBlock extends $EnchantmentTableBlock implements $IReplacementBlock {
static readonly "BOOKSHELF_OFFSETS": $List<($BlockPos)>
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

public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "_setDefaultState"(arg0: $BlockState$Type): void
public "setStateContainer"(arg0: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
set "stateContainer"(value: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothEnchantBlock$Type = ($ApothEnchantBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApothEnchantBlock_ = $ApothEnchantBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/$ReflectiveEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$ShieldBlockEvent, $ShieldBlockEvent$Type} from "packages/net/minecraftforge/event/entity/living/$ShieldBlockEvent"

export class $ReflectiveEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "reflect"(arg0: $ShieldBlockEvent$Type): void
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectiveEnchant$Type = ($ReflectiveEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectiveEnchant_ = $ReflectiveEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/codec/$CodecMap" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$UnboundedMapCodec, $UnboundedMapCodec$Type} from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$Codec$ResultFunction, $Codec$ResultFunction$Type} from "packages/com/mojang/serialization/$Codec$ResultFunction"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Decoder$Boxed, $Decoder$Boxed$Type} from "packages/com/mojang/serialization/$Decoder$Boxed"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder$Simple, $Decoder$Simple$Type} from "packages/com/mojang/serialization/$Decoder$Simple"
import {$SimpleMapCodec, $SimpleMapCodec$Type} from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import {$Decoder$Terminal, $Decoder$Terminal$Type} from "packages/com/mojang/serialization/$Decoder$Terminal"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $CodecMap<V extends $CodecProvider<(any)>> implements $Codec<(V)> {

constructor(arg0: string)

public "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($Pair<(V), (T)>)>
public "encode"<T>(arg0: V, arg1: $DynamicOps$Type<(T)>, arg2: T): $DataResult<(T)>
public "getValue"(arg0: $ResourceLocation$Type): $Codec<(any)>
public "isEmpty"(): boolean
public "getKey"(arg0: $Codec$Type<(any)>): $ResourceLocation
public "register"(arg0: $ResourceLocation$Type, arg1: $Codec$Type<(any)>): void
public "containsKey"(arg0: $ResourceLocation$Type): boolean
public "getDefaultCodec"(): $Codec<(any)>
public "setDefaultCodec"(arg0: $Codec$Type<(any)>): void
public static "unit"<A>(arg0: $Supplier$Type<(V)>): $Codec<(V)>
public static "unit"<A>(arg0: V): $Codec<(V)>
public "dispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
public "dispatch"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
public static "of"<A>(arg0: $Encoder$Type<(V)>, arg1: $Decoder$Type<(V)>): $Codec<(V)>
public static "of"<A>(arg0: $MapEncoder$Type<(V)>, arg1: $MapDecoder$Type<(V)>, arg2: $Supplier$Type<(string)>): $MapCodec<(V)>
public static "of"<A>(arg0: $MapEncoder$Type<(V)>, arg1: $MapDecoder$Type<(V)>): $MapCodec<(V)>
public static "of"<A>(arg0: $Encoder$Type<(V)>, arg1: $Decoder$Type<(V)>, arg2: string): $Codec<(V)>
public static "list"<E>(arg0: $Codec$Type<(E)>): $Codec<($List<(E)>)>
public "orElse"(arg0: V): $Codec<(V)>
public "orElse"(arg0: $UnaryOperator$Type<(string)>, arg1: V): $Codec<(V)>
public "orElse"(arg0: $Consumer$Type<(string)>, arg1: V): $Codec<(V)>
public static "checkRange"<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public static "pair"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public "orElseGet"(arg0: $Supplier$Type<(any)>): $Codec<(V)>
public "orElseGet"(arg0: $Consumer$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<(V)>
public "orElseGet"(arg0: $UnaryOperator$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<(V)>
public "partialDispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
public "stable"(): $Codec<(V)>
public "flatXmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "optionalFieldOf"(arg0: string, arg1: V, arg2: $Lifecycle$Type): $MapCodec<(V)>
public "optionalFieldOf"(arg0: string, arg1: $Lifecycle$Type, arg2: V, arg3: $Lifecycle$Type): $MapCodec<(V)>
public "optionalFieldOf"(arg0: string, arg1: V): $MapCodec<(V)>
public "optionalFieldOf"(arg0: string): $MapCodec<($Optional<(V)>)>
public static "optionalField"<F>(arg0: string, arg1: $Codec$Type<(F)>): $MapCodec<($Optional<(F)>)>
public "mapResult"(arg0: $Codec$ResultFunction$Type<(V)>): $Codec<(V)>
public "xmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "withLifecycle"(arg0: $Lifecycle$Type): $Codec<(V)>
public "deprecated"(arg0: integer): $Codec<(V)>
public "dispatchMap"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $MapCodec<(E)>
public "dispatchMap"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $MapCodec<(E)>
public "comapFlatMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public static "either"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Either<(F), (S)>)>
public static "mapEither"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public static "simpleMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>, arg2: $Keyable$Type): $SimpleMapCodec<(K), (V)>
public static "compoundList"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public static "unboundedMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public "flatComapMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public static "mapPair"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public "dispatchStable"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
public "listOf"(): $Codec<($List<(V)>)>
public static "empty"<A>(): $MapEncoder<(V)>
public static "error"<A>(arg0: string): $Encoder<(V)>
public "comap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
public "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
public "encodeStart"<T>(arg0: $DynamicOps$Type<(T)>, arg1: V): $DataResult<(T)>
public "decode"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<(V), (T)>)>
public "map"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
public "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
public "parse"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(V)>
public "parse"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<(V)>
public "boxed"(): $Decoder$Boxed<(V)>
public "terminal"(): $Decoder$Terminal<(V)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$Type<(any)>): $Decoder<(V)>
public "simple"(): $Decoder$Simple<(V)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$Type<(any)>): $Decoder<(V)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$Type<(any)>): $Decoder<(V)>
get "defaultCodec"(): $Codec<(any)>
set "defaultCodec"(value: $Codec$Type<(any)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecMap$Type<V> = ($CodecMap<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecMap_<V> = $CodecMap$Type<(V)>;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/boss/$BossSpawnerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickingEntityBlock, $TickingEntityBlock$Type} from "packages/dev/shadowsoffire/placebo/block_entity/$TickingEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BossSpawnerBlock extends $Block implements $TickingEntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossSpawnerBlock$Type = ($BossSpawnerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BossSpawnerBlock_ = $BossSpawnerBlock$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/util/$IAttributeManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAttributeManager {

 "setAttributesUpdating"(arg0: boolean): void
 "areAttributesUpdating"(): boolean
}

export namespace $IAttributeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttributeManager$Type = ($IAttributeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttributeManager_ = $IAttributeManager$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/objects/$TypedShelfBlock$SculkShelfBlock" {
import {$TypedShelfBlock, $TypedShelfBlock$Type} from "packages/dev/shadowsoffire/apotheosis/ench/objects/$TypedShelfBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $TypedShelfBlock$SculkShelfBlock extends $TypedShelfBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(any)>)

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedShelfBlock$SculkShelfBlock$Type = ($TypedShelfBlock$SculkShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedShelfBlock$SculkShelfBlock_ = $TypedShelfBlock$SculkShelfBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/loot/$RarityClamp" {
import {$LootRarity, $LootRarity$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity"
import {$RarityClamp$Simple, $RarityClamp$Simple$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$RarityClamp$Simple"

export interface $RarityClamp {

 "clamp"(arg0: $LootRarity$Type): $LootRarity
 "getMinRarity"(): $LootRarity
 "getMaxRarity"(): $LootRarity
}

export namespace $RarityClamp {
const UNCLAMPED: $RarityClamp$Simple
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RarityClamp$Type = ($RarityClamp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RarityClamp_ = $RarityClamp$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/salvaging/$SalvagingTableBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SalvagingTableBlock extends $Block implements $EntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SalvagingTableBlock$Type = ($SalvagingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalvagingTableBlock_ = $SalvagingTableBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$ExtractionRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ExtractionRecipe, $ExtractionRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$ExtractionRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ExtractionRecipe$Serializer implements $RecipeSerializer<($ExtractionRecipe)> {
static "INSTANCE": $ExtractionRecipe$Serializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ExtractionRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ExtractionRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ExtractionRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ExtractionRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractionRecipe$Serializer$Type = ($ExtractionRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtractionRecipe$Serializer_ = $ExtractionRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$GateRules" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DecimalFormat, $DecimalFormat$Type} from "packages/java/text/$DecimalFormat"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $GateRules extends $Record {
static readonly "FORMAT": $DecimalFormat
static readonly "CODEC": $Codec<($GateRules)>
static readonly "DEFAULT": $GateRules

constructor(spawnRange: double, leashRange: double, allowDiscarding: boolean, allowDimChange: boolean, playerDamageOnly: boolean, removeOnFailure: boolean, failOnOutOfBounds: boolean, spacing: double, followRangeBoost: double, defaultDropChance: float)

public "buildDeviations"(): $List<($MutableComponent)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "spacing"(): double
public "playerDamageOnly"(): boolean
public "failOnOutOfBounds"(): boolean
public "allowDimChange"(): boolean
public "allowDiscarding"(): boolean
public "removeOnFailure"(): boolean
public "leashRange"(): double
public "spawnRange"(): double
public "defaultDropChance"(): float
public "followRangeBoost"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GateRules$Type = ($GateRules);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GateRules_ = $GateRules$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$Failure" {
import {$GatewayEntity, $GatewayEntity$Type} from "packages/dev/shadowsoffire/gateways/entity/$GatewayEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CodecMap, $CodecMap$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecMap"
import {$GatewayEntity$FailureReason, $GatewayEntity$FailureReason$Type} from "packages/dev/shadowsoffire/gateways/entity/$GatewayEntity$FailureReason"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $Failure extends $CodecProvider<($Failure)> {

 "appendHoverText"(arg0: $Consumer$Type<($MutableComponent$Type)>): void
 "onFailure"(arg0: $ServerLevel$Type, arg1: $GatewayEntity$Type, arg2: $Player$Type, arg3: $GatewayEntity$FailureReason$Type): void
 "getCodec"(): $Codec<(any)>
}

export namespace $Failure {
const CODEC: $CodecMap<($Failure)>
function initSerializers(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Failure$Type = ($Failure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Failure_ = $Failure$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/corrupted/$BerserkersFuryEnchant" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $BerserkersFuryEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "livingHurt"(arg0: $LivingHurtEvent$Type): void
public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "isCurse"(): boolean
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
get "curse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BerserkersFuryEnchant$Type = ($BerserkersFuryEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BerserkersFuryEnchant_ = $BerserkersFuryEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$MiningArrowItem" {
import {$IApothArrowItem, $IApothArrowItem$Type} from "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$IApothArrowItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MiningArrowEntity$Type, $MiningArrowEntity$Type$Type} from "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$MiningArrowEntity$Type"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MiningArrowItem extends $ArrowItem implements $IApothArrowItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Supplier$Type<($Item$Type)>, arg1: $MiningArrowEntity$Type$Type)

public "fromDispenser"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): $AbstractArrow
public "createArrow"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $AbstractArrow
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MiningArrowItem$Type = ($MiningArrowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MiningArrowItem_ = $MiningArrowItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$ExpulsionRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ExpulsionRecipe, $ExpulsionRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$ExpulsionRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ExpulsionRecipe$Serializer implements $RecipeSerializer<($ExpulsionRecipe)> {
static "INSTANCE": $ExpulsionRecipe$Serializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ExpulsionRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ExpulsionRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ExpulsionRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ExpulsionRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpulsionRecipe$Serializer$Type = ($ExpulsionRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExpulsionRecipe$Serializer_ = $ExpulsionRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/objects/$TreasureShelfBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TypedShelfBlock, $TypedShelfBlock$Type} from "packages/dev/shadowsoffire/apotheosis/ench/objects/$TypedShelfBlock"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEnchantingBlock, $IEnchantingBlock$Type} from "packages/dev/shadowsoffire/apotheosis/ench/api/$IEnchantingBlock"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $TreasureShelfBlock extends $TypedShelfBlock implements $IEnchantingBlock {
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

public "getQuantaBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
public "getArcanaBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
public "allowsTreasure"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getTableParticle"(arg0: $BlockState$Type): $ParticleOptions
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreasureShelfBlock$Type = ($TreasureShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreasureShelfBlock_ = $TreasureShelfBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/gem/$GemClass" {
import {$LootCategory, $LootCategory$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootCategory"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $GemClass extends $Record {
static "CODEC": $Codec<($GemClass)>

constructor(key: string, types: $Set$Type<($LootCategory$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$Type): void
public "key"(): string
public static "read"(arg0: $FriendlyByteBuf$Type): $GemClass
public "types"(): $Set<($LootCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemClass$Type = ($GemClass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemClass_ = $GemClass$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$SpawnAlgorithms$SpawnAlgorithm" {
import {$GatewayEntity, $GatewayEntity$Type} from "packages/dev/shadowsoffire/gateways/entity/$GatewayEntity"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $SpawnAlgorithms$SpawnAlgorithm {

 "spawn"(arg0: $ServerLevel$Type, arg1: $Vec3$Type, arg2: $GatewayEntity$Type, arg3: $Entity$Type): $Vec3

(arg0: $ServerLevel$Type, arg1: $Vec3$Type, arg2: $GatewayEntity$Type, arg3: $Entity$Type): $Vec3
}

export namespace $SpawnAlgorithms$SpawnAlgorithm {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnAlgorithms$SpawnAlgorithm$Type = ($SpawnAlgorithms$SpawnAlgorithm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnAlgorithms$SpawnAlgorithm_ = $SpawnAlgorithms$SpawnAlgorithm$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/garden/$ApothBambooBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BambooLeaves, $BambooLeaves$Type} from "packages/net/minecraft/world/level/block/state/properties/$BambooLeaves"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IReplacementBlock, $IReplacementBlock$Type} from "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BambooStalkBlock, $BambooStalkBlock$Type} from "packages/net/minecraft/world/level/block/$BambooStalkBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ApothBambooBlock extends $BambooStalkBlock implements $IReplacementBlock {
static readonly "AGE": $IntegerProperty
static readonly "LEAVES": $EnumProperty<($BambooLeaves)>
static readonly "STAGE": $IntegerProperty
static readonly "MAX_HEIGHT": integer
static readonly "STAGE_GROWING": integer
static readonly "STAGE_DONE_GROWING": integer
static readonly "AGE_THIN_BAMBOO": integer
static readonly "AGE_THICK_BAMBOO": integer
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

public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "_setDefaultState"(arg0: $BlockState$Type): void
public "setStateContainer"(arg0: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
set "stateContainer"(value: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothBambooBlock$Type = ($ApothBambooBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApothBambooBlock_ = $ApothBambooBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/$AdventureModule$ApothSmithingRecipe" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"

export class $AdventureModule$ApothSmithingRecipe extends $SmithingTransformRecipe {
static readonly "TEMPLATE": integer
static readonly "BASE": integer
static readonly "ADDITION": integer
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $ItemStack$Type)

public "isBaseIngredient"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdventureModule$ApothSmithingRecipe$Type = ($AdventureModule$ApothSmithingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdventureModule$ApothSmithingRecipe_ = $AdventureModule$ApothSmithingRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$ExpulsionRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$AdventureModule$ApothSmithingRecipe, $AdventureModule$ApothSmithingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/$AdventureModule$ApothSmithingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $ExpulsionRecipe extends $AdventureModule$ApothSmithingRecipe {
static readonly "TEMPLATE": integer
static readonly "BASE": integer
static readonly "ADDITION": integer
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor()

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpulsionRecipe$Type = ($ExpulsionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExpulsionRecipe_ = $ExpulsionRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/item/$GatePearlItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ITabFiller, $ITabFiller$Type} from "packages/dev/shadowsoffire/placebo/tabs/$ITabFiller"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Gateway, $Gateway$Type} from "packages/dev/shadowsoffire/gateways/gate/$Gateway"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GatePearlItem extends $Item implements $ITabFiller {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getCreatorModId"(arg0: $ItemStack$Type): string
public static "setGate"(arg0: $ItemStack$Type, arg1: $Gateway$Type): void
public "fillItemCategory"(arg0: $CreativeModeTab$Type, arg1: $CreativeModeTab$Output$Type): void
public static "getGate"(arg0: $ItemStack$Type): $DynamicHolder<($Gateway)>
public static "simple"(arg0: $ItemLike$Type): $ITabFiller
public static "delegating"(arg0: $Supplier$Type<(any)>): $ITabFiller
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatePearlItem$Type = ($GatePearlItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatePearlItem_ = $GatePearlItem$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/mixin/$AbstractContainerMenuInvoker" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerMenuInvoker {

 "_moveItemStackTo"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: boolean): boolean

(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
}

export namespace $AbstractContainerMenuInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuInvoker$Type = ($AbstractContainerMenuInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuInvoker_ = $AbstractContainerMenuInvoker$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/mobfx/$SunderingEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SunderingEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SunderingEffect$Type = ($SunderingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SunderingEffect_ = $SunderingEffect$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/util/$IFlying" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFlying {

 "markFlying"(): void
 "getAndDestroyFlyingCache"(): boolean
}

export namespace $IFlying {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFlying$Type = ($IFlying);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFlying_ = $IFlying$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/objects/$ImprovedScrappingTomeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BookItem, $BookItem$Type} from "packages/net/minecraft/world/item/$BookItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AnvilUpdateEvent, $AnvilUpdateEvent$Type} from "packages/net/minecraftforge/event/$AnvilUpdateEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ImprovedScrappingTomeItem extends $BookItem {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public static "updateAnvil"(arg0: $AnvilUpdateEvent$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImprovedScrappingTomeItem$Type = ($ImprovedScrappingTomeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImprovedScrappingTomeItem_ = $ImprovedScrappingTomeItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/anvil/$ApothAnvilBlock" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$AnvilBlock, $AnvilBlock$Type} from "packages/net/minecraft/world/level/block/$AnvilBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$INBTSensitiveFallingBlock, $INBTSensitiveFallingBlock$Type} from "packages/dev/shadowsoffire/apotheosis/util/$INBTSensitiveFallingBlock"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"

export class $ApothAnvilBlock extends $AnvilBlock implements $INBTSensitiveFallingBlock, $EntityBlock {
static readonly "FACING": $DirectionProperty
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "toStack"(arg0: $BlockState$Type, arg1: $CompoundTag$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothAnvilBlock$Type = ($ApothAnvilBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApothAnvilBlock_ = $ApothAnvilBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/twisted/$ExploitationEnchant" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$Sheep, $Sheep$Type} from "packages/net/minecraft/world/entity/animal/$Sheep"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ExploitationEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "molestSheepItems"(arg0: $Sheep$Type, arg1: $ItemStack$Type, arg2: $List$Type<($ItemStack$Type)>): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExploitationEnchant$Type = ($ExploitationEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExploitationEnchant_ = $ExploitationEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/gem/$GemItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ITabFiller, $ITabFiller$Type} from "packages/dev/shadowsoffire/placebo/tabs/$ITabFiller"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Gem, $Gem$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/gem/$Gem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemItem extends $Item implements $ITabFiller {
static readonly "HAS_REFRESHED": string
static readonly "UUID_ARRAY": string
static readonly "GEM": string
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

public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getCreatorModId"(arg0: $ItemStack$Type): string
public static "getGem"(arg0: $ItemStack$Type): $DynamicHolder<($Gem)>
public static "getUUIDs"(arg0: $ItemStack$Type): $List<($UUID)>
public static "getOrCreateUUIDs"(arg0: $CompoundTag$Type, arg1: integer): $List<($UUID)>
public static "setGem"(arg0: $ItemStack$Type, arg1: $Gem$Type): void
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "fillItemCategory"(arg0: $CreativeModeTab$Type, arg1: $CreativeModeTab$Output$Type): void
public static "simple"(arg0: $ItemLike$Type): $ITabFiller
public static "delegating"(arg0: $Supplier$Type<(any)>): $ITabFiller
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemItem$Type = ($GemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemItem_ = $GemItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/salvaging/$SalvagingRecipe$OutputData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SalvagingRecipe$OutputData {
static "CODEC": $Codec<($SalvagingRecipe$OutputData)>
static readonly "LIST_CODEC": $Codec<($List<($SalvagingRecipe$OutputData)>)>


public "getStack"(): $ItemStack
public "getMax"(): integer
public "getMin"(): integer
get "stack"(): $ItemStack
get "max"(): integer
get "min"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SalvagingRecipe$OutputData$Type = ($SalvagingRecipe$OutputData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalvagingRecipe$OutputData_ = $SalvagingRecipe$OutputData$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootCategory" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootCategory {
static readonly "BY_ID": $Map<(string), ($LootCategory)>
static readonly "VALUES": $List<($LootCategory)>
static readonly "CODEC": $Codec<($LootCategory)>
static readonly "SET_CODEC": $Codec<($Set<($LootCategory)>)>
static readonly "BOW": $LootCategory
static readonly "CROSSBOW": $LootCategory
static readonly "PICKAXE": $LootCategory
static readonly "SHOVEL": $LootCategory
static readonly "HEAVY_WEAPON": $LootCategory
static readonly "HELMET": $LootCategory
static readonly "CHESTPLATE": $LootCategory
static readonly "LEGGINGS": $LootCategory
static readonly "BOOTS": $LootCategory
static readonly "SHIELD": $LootCategory
static readonly "TRIDENT": $LootCategory
static readonly "SWORD": $LootCategory
static readonly "NONE": $LootCategory


public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "register"(arg0: $LootCategory$Type, arg1: string, arg2: $Predicate$Type<($ItemStack$Type)>, arg3: ($EquipmentSlot$Type)[]): $LootCategory
public "isValid"(arg0: $ItemStack$Type): boolean
public "isWeapon"(): boolean
public static "byId"(arg0: string): $LootCategory
public "getSlots"(): ($EquipmentSlot)[]
public static "forItem"(arg0: $ItemStack$Type): $LootCategory
public "isDefensive"(): boolean
public "isNone"(): boolean
public "isArmor"(): boolean
public "isRanged"(): boolean
public "isWeaponOrShield"(): boolean
public "isLightWeapon"(): boolean
public "isBreaker"(): boolean
public "getDescId"(): string
public "getDescIdPlural"(): string
get "name"(): string
get "weapon"(): boolean
get "slots"(): ($EquipmentSlot)[]
get "defensive"(): boolean
get "none"(): boolean
get "armor"(): boolean
get "ranged"(): boolean
get "weaponOrShield"(): boolean
get "lightWeapon"(): boolean
get "breaker"(): boolean
get "descId"(): string
get "descIdPlural"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCategory$Type = ($LootCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCategory_ = $LootCategory$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$BroadheadArrowItem" {
import {$IApothArrowItem, $IApothArrowItem$Type} from "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$IApothArrowItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BroadheadArrowItem extends $ArrowItem implements $IApothArrowItem {
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

public "fromDispenser"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): $AbstractArrow
public "createArrow"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $AbstractArrow
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroadheadArrowItem$Type = ($BroadheadArrowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroadheadArrowItem_ = $BroadheadArrowItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/objects/$TomeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BookItem, $BookItem$Type} from "packages/net/minecraft/world/item/$BookItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$IEnchantableItem, $IEnchantableItem$Type} from "packages/dev/shadowsoffire/apotheosis/ench/table/$IEnchantableItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TomeItem extends $BookItem implements $IEnchantableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Type, arg1: $EnchantmentCategory$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "onEnchantment"(arg0: $ItemStack$Type, arg1: $List$Type<($EnchantmentInstance$Type)>): $ItemStack
public "forciblyAllowsTableEnchantment"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TomeItem$Type = ($TomeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TomeItem_ = $TomeItem$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/impl/$PercentBasedAttribute" {
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$RangedAttribute, $RangedAttribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$RangedAttribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IFormattableAttribute, $IFormattableAttribute$Type} from "packages/dev/shadowsoffire/attributeslib/api/$IFormattableAttribute"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $PercentBasedAttribute extends $RangedAttribute implements $IFormattableAttribute {
static readonly "MAX_NAME_LENGTH": integer

constructor(arg0: string, arg1: double, arg2: double, arg3: double)

public "toValueComponent"(arg0: $AttributeModifier$Operation$Type, arg1: double, arg2: $TooltipFlag$Type): $MutableComponent
public static "toValueComponent"(arg0: $Attribute$Type, arg1: $AttributeModifier$Operation$Type, arg2: double, arg3: $TooltipFlag$Type): $MutableComponent
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$Type): boolean
public static "toComponent"(arg0: $Attribute$Type, arg1: $AttributeModifier$Type, arg2: $TooltipFlag$Type): $MutableComponent
public static "toBaseComponent"(arg0: $Attribute$Type, arg1: double, arg2: double, arg3: boolean, arg4: $TooltipFlag$Type): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PercentBasedAttribute$Type = ($PercentBasedAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PercentBasedAttribute_ = $PercentBasedAttribute$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/anvil/$ObliterationEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ObliterationEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObliterationEnchant$Type = ($ObliterationEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObliterationEnchant_ = $ObliterationEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/masterwork/$GrowthSerumEnchant" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$Sheep, $Sheep$Type} from "packages/net/minecraft/world/entity/animal/$Sheep"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $GrowthSerumEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "unshear"(arg0: $Sheep$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowthSerumEnchant$Type = ($GrowthSerumEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowthSerumEnchant_ = $GrowthSerumEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/village/fletching/arrows/$IApothArrowItem" {
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IApothArrowItem {

 "fromDispenser"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): $AbstractArrow

(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): $AbstractArrow
}

export namespace $IApothArrowItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IApothArrowItem$Type = ($IApothArrowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IApothArrowItem_ = $IApothArrowItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/masterwork/$ChainsawEnchant" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEvent$BreakEvent, $BlockEvent$BreakEvent$Type} from "packages/net/minecraftforge/event/level/$BlockEvent$BreakEvent"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ChainsawEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "chainsaw"(arg0: $BlockEvent$BreakEvent$Type): void
public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChainsawEnchant$Type = ($ChainsawEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChainsawEnchant_ = $ChainsawEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/gem/cutting/$GemCuttingBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $GemCuttingBlock extends $HorizontalDirectionalBlock {
static readonly "NAME": $Component
static readonly "SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCuttingBlock$Type = ($GemCuttingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemCuttingBlock_ = $GemCuttingBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/objects/$TypedShelfBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IEnchantingBlock, $IEnchantingBlock$Type} from "packages/dev/shadowsoffire/apotheosis/ench/api/$IEnchantingBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $TypedShelfBlock extends $Block implements $IEnchantingBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(any)>)

public "getTableParticle"(arg0: $BlockState$Type): $ParticleOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedShelfBlock$Type = ($TypedShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedShelfBlock_ = $TypedShelfBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/$NaturesBlessingEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $NaturesBlessingEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "rightClick"(arg0: $PlayerInteractEvent$RightClickBlock$Type): void
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NaturesBlessingEnchant$Type = ($NaturesBlessingEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NaturesBlessingEnchant_ = $NaturesBlessingEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$ReactiveSmithingRecipe" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ReactiveSmithingRecipe {

 "onCraft"(arg0: $Container$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void

(arg0: $Container$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
}

export namespace $ReactiveSmithingRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactiveSmithingRecipe$Type = ($ReactiveSmithingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactiveSmithingRecipe_ = $ReactiveSmithingRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/objects/$GlowyBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GlowyBlockItem extends $BlockItem {
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

public "isFoil"(arg0: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlowyBlockItem$Type = ($GlowyBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlowyBlockItem_ = $GlowyBlockItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/replacements/$DefenseEnchant" {
import {$ProtectionEnchantment$Type, $ProtectionEnchantment$Type$Type} from "packages/net/minecraft/world/item/enchantment/$ProtectionEnchantment$Type"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ProtectionEnchantment, $ProtectionEnchantment$Type} from "packages/net/minecraft/world/item/enchantment/$ProtectionEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $DefenseEnchant extends $ProtectionEnchantment {
readonly "type": $ProtectionEnchantment$Type
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, arg1: $ProtectionEnchantment$Type$Type, ...arg2: ($EquipmentSlot$Type)[])

public "getDamageProtection"(arg0: integer, arg1: $DamageSource$Type): integer
public "checkCompatibility"(arg0: $Enchantment$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefenseEnchant$Type = ($DefenseEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefenseEnchant_ = $DefenseEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$UnnamingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$UnnamingRecipe, $UnnamingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$UnnamingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $UnnamingRecipe$Serializer implements $RecipeSerializer<($UnnamingRecipe)> {
static "INSTANCE": $UnnamingRecipe$Serializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $UnnamingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $UnnamingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $UnnamingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $UnnamingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnnamingRecipe$Serializer$Type = ($UnnamingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnnamingRecipe$Serializer_ = $UnnamingRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$ExtractionRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$AdventureModule$ApothSmithingRecipe, $AdventureModule$ApothSmithingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/$AdventureModule$ApothSmithingRecipe"
import {$ReactiveSmithingRecipe, $ReactiveSmithingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$ReactiveSmithingRecipe"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $ExtractionRecipe extends $AdventureModule$ApothSmithingRecipe implements $ReactiveSmithingRecipe {
static readonly "TEMPLATE": integer
static readonly "BASE": integer
static readonly "ADDITION": integer
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor()

public "onCraft"(arg0: $Container$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractionRecipe$Type = ($ExtractionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtractionRecipe_ = $ExtractionRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/block_entity/$TickingBlockEntityType" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$ShulkerBoxBlockEntity, $ShulkerBoxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity"
import {$BeehiveBlockEntity, $BeehiveBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity"
import {$ComparatorBlockEntity, $ComparatorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ComparatorBlockEntity"
import {$DropperBlockEntity, $DropperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DropperBlockEntity"
import {$BrewingStandBlockEntity, $BrewingStandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrewingStandBlockEntity"
import {$DaylightDetectorBlockEntity, $DaylightDetectorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DaylightDetectorBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$HangingSignBlockEntity, $HangingSignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HangingSignBlockEntity"
import {$SignBlockEntity, $SignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import {$JukeboxBlockEntity, $JukeboxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JukeboxBlockEntity"
import {$SculkShriekerBlockEntity, $SculkShriekerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkShriekerBlockEntity"
import {$EnchantmentTableBlockEntity, $EnchantmentTableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnchantmentTableBlockEntity"
import {$CalibratedSculkSensorBlockEntity, $CalibratedSculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CalibratedSculkSensorBlockEntity"
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/dev/shadowsoffire/placebo/block_entity/$TickingBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ChiseledBookShelfBlockEntity, $ChiseledBookShelfBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChiseledBookShelfBlockEntity"
import {$BrushableBlockEntity, $BrushableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrushableBlockEntity"
import {$FurnaceBlockEntity, $FurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$FurnaceBlockEntity"
import {$DispenserBlockEntity, $DispenserBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DispenserBlockEntity"
import {$EnderChestBlockEntity, $EnderChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnderChestBlockEntity"
import {$SculkSensorBlockEntity, $SculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkSensorBlockEntity"
import {$BarrelBlockEntity, $BarrelBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BarrelBlockEntity"
import {$ChestBlockEntity, $ChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChestBlockEntity"
import {$BannerBlockEntity, $BannerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BannerBlockEntity"
import {$TheEndGatewayBlockEntity, $TheEndGatewayBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndGatewayBlockEntity"
import {$CommandBlockEntity, $CommandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity"
import {$BellBlockEntity, $BellBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BellBlockEntity"
import {$TrappedChestBlockEntity, $TrappedChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TrappedChestBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SmokerBlockEntity, $SmokerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SmokerBlockEntity"
import {$BlastFurnaceBlockEntity, $BlastFurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlastFurnaceBlockEntity"
import {$DecoratedPotBlockEntity, $DecoratedPotBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$HopperBlockEntity, $HopperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HopperBlockEntity"
import {$TheEndPortalBlockEntity, $TheEndPortalBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndPortalBlockEntity"
import {$BeaconBlockEntity, $BeaconBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity"
import {$StructureBlockEntity, $StructureBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity"
import {$SpawnerBlockEntity, $SpawnerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SpawnerBlockEntity"
import {$JigsawBlockEntity, $JigsawBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity"
import {$ConduitBlockEntity, $ConduitBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ConduitBlockEntity"
import {$BedBlockEntity, $BedBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BedBlockEntity"
import {$SculkCatalystBlockEntity, $SculkCatalystBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SkullBlockEntity, $SkullBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SkullBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$LecternBlockEntity, $LecternBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$LecternBlockEntity"
import {$CampfireBlockEntity, $CampfireBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CampfireBlockEntity"

export class $TickingBlockEntityType<T extends ($BlockEntity) & ($TickingBlockEntity)> extends $BlockEntityType<(T)> {
static readonly "FURNACE": $BlockEntityType<($FurnaceBlockEntity)>
static readonly "CHEST": $BlockEntityType<($ChestBlockEntity)>
static readonly "TRAPPED_CHEST": $BlockEntityType<($TrappedChestBlockEntity)>
static readonly "ENDER_CHEST": $BlockEntityType<($EnderChestBlockEntity)>
static readonly "JUKEBOX": $BlockEntityType<($JukeboxBlockEntity)>
static readonly "DISPENSER": $BlockEntityType<($DispenserBlockEntity)>
static readonly "DROPPER": $BlockEntityType<($DropperBlockEntity)>
static readonly "SIGN": $BlockEntityType<($SignBlockEntity)>
static readonly "HANGING_SIGN": $BlockEntityType<($HangingSignBlockEntity)>
static readonly "MOB_SPAWNER": $BlockEntityType<($SpawnerBlockEntity)>
static readonly "PISTON": $BlockEntityType<($PistonMovingBlockEntity)>
static readonly "BREWING_STAND": $BlockEntityType<($BrewingStandBlockEntity)>
static readonly "ENCHANTING_TABLE": $BlockEntityType<($EnchantmentTableBlockEntity)>
static readonly "END_PORTAL": $BlockEntityType<($TheEndPortalBlockEntity)>
static readonly "BEACON": $BlockEntityType<($BeaconBlockEntity)>
static readonly "SKULL": $BlockEntityType<($SkullBlockEntity)>
static readonly "DAYLIGHT_DETECTOR": $BlockEntityType<($DaylightDetectorBlockEntity)>
static readonly "HOPPER": $BlockEntityType<($HopperBlockEntity)>
static readonly "COMPARATOR": $BlockEntityType<($ComparatorBlockEntity)>
static readonly "BANNER": $BlockEntityType<($BannerBlockEntity)>
static readonly "STRUCTURE_BLOCK": $BlockEntityType<($StructureBlockEntity)>
static readonly "END_GATEWAY": $BlockEntityType<($TheEndGatewayBlockEntity)>
static readonly "COMMAND_BLOCK": $BlockEntityType<($CommandBlockEntity)>
static readonly "SHULKER_BOX": $BlockEntityType<($ShulkerBoxBlockEntity)>
static readonly "BED": $BlockEntityType<($BedBlockEntity)>
static readonly "CONDUIT": $BlockEntityType<($ConduitBlockEntity)>
static readonly "BARREL": $BlockEntityType<($BarrelBlockEntity)>
static readonly "SMOKER": $BlockEntityType<($SmokerBlockEntity)>
static readonly "BLAST_FURNACE": $BlockEntityType<($BlastFurnaceBlockEntity)>
static readonly "LECTERN": $BlockEntityType<($LecternBlockEntity)>
static readonly "BELL": $BlockEntityType<($BellBlockEntity)>
static readonly "JIGSAW": $BlockEntityType<($JigsawBlockEntity)>
static readonly "CAMPFIRE": $BlockEntityType<($CampfireBlockEntity)>
static readonly "BEEHIVE": $BlockEntityType<($BeehiveBlockEntity)>
static readonly "SCULK_SENSOR": $BlockEntityType<($SculkSensorBlockEntity)>
static readonly "CALIBRATED_SCULK_SENSOR": $BlockEntityType<($CalibratedSculkSensorBlockEntity)>
static readonly "SCULK_CATALYST": $BlockEntityType<($SculkCatalystBlockEntity)>
static readonly "SCULK_SHRIEKER": $BlockEntityType<($SculkShriekerBlockEntity)>
static readonly "CHISELED_BOOKSHELF": $BlockEntityType<($ChiseledBookShelfBlockEntity)>
static readonly "BRUSHABLE_BLOCK": $BlockEntityType<($BrushableBlockEntity)>
static readonly "DECORATED_POT": $BlockEntityType<($DecoratedPotBlockEntity)>
 "factory": $BlockEntityType$BlockEntitySupplier<(any)>
 "validBlocks": $Set<($Block)>

constructor(arg0: $BlockEntityType$BlockEntitySupplier$Type<(any)>, arg1: $Set$Type<($Block$Type)>, arg2: boolean, arg3: boolean)

public "getTicker"(arg0: boolean): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntityType$Type<T> = ($TickingBlockEntityType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingBlockEntityType_<T> = $TickingBlockEntityType$Type<(T)>;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/$Affix" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$HitResult$Type, $HitResult$Type$Type} from "packages/net/minecraft/world/phys/$HitResult$Type"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$LootCategory, $LootCategory$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootCategory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AffixType, $AffixType$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/$AffixType"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootRarity, $LootRarity$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Affix implements $CodecProvider<($Affix)> {

constructor(arg0: $AffixType$Type)

public "getName"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: boolean): $Component
public "toString"(): string
public "getId"(): $ResourceLocation
public "getType"(): $AffixType
public "getEnchantmentLevels"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $Map$Type<($Enchantment$Type), (integer)>): void
public static "fmt"(arg0: float): string
public "onArrowImpact"(arg0: $AbstractArrow$Type, arg1: $LootRarity$Type, arg2: float, arg3: $HitResult$Type, arg4: $HitResult$Type$Type): void
public "modifyLoot"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $ObjectArrayList$Type<($ItemStack$Type)>, arg4: $LootContext$Type): void
public "onShieldBlock"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $LivingEntity$Type, arg4: $DamageSource$Type, arg5: float): float
public "getDurabilityBonusPercentage"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $ServerPlayer$Type): float
public "doPostHurt"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $LivingEntity$Type, arg4: $Entity$Type): void
public "doPostAttack"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $LivingEntity$Type, arg4: $Entity$Type): void
public "onArrowFired"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $LivingEntity$Type, arg4: $AbstractArrow$Type): void
public static "startCooldown"(arg0: $ResourceLocation$Type, arg1: $LivingEntity$Type): void
public static "isOnCooldown"(arg0: $ResourceLocation$Type, arg1: integer, arg2: $LivingEntity$Type): boolean
public "addInformation"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $Consumer$Type<($Component$Type)>): void
public "onBlockBreak"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $Player$Type, arg4: $LevelAccessor$Type, arg5: $BlockPos$Type, arg6: $BlockState$Type): void
public "getDamageBonus"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $MobType$Type): float
public "canApplyTo"(arg0: $ItemStack$Type, arg1: $LootCategory$Type, arg2: $LootRarity$Type): boolean
public "enablesTelepathy"(): boolean
public "onItemUse"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $UseOnContext$Type): $InteractionResult
public "getDamageProtection"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $DamageSource$Type): integer
public "onHurt"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $DamageSource$Type, arg4: $LivingEntity$Type, arg5: float): float
public "addModifiers"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: float, arg3: $EquipmentSlot$Type, arg4: $BiConsumer$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "getCodec"(): $Codec<(any)>
get "id"(): $ResourceLocation
get "type"(): $AffixType
get "codec"(): $Codec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Affix$Type = ($Affix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Affix_ = $Affix$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$WeightedDynamicRegistry$ILuckyWeighted, $WeightedDynamicRegistry$ILuckyWeighted$Type} from "packages/dev/shadowsoffire/placebo/reload/$WeightedDynamicRegistry$ILuckyWeighted"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$RarityClamp, $RarityClamp$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$RarityClamp"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$Type} from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"
import {$LootRarity$LootRule, $LootRarity$LootRule$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity$LootRule"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootRarity implements $CodecProvider<($LootRarity)>, $WeightedDynamicRegistry$ILuckyWeighted, $Comparable<($LootRarity)> {
static readonly "LOAD_CODEC": $Codec<($LootRarity)>
/**
 * 
 * @deprecated
 */
static readonly "HOLDER_CODEC": $Codec<($DynamicHolder<($LootRarity)>)>
static readonly "CODEC": $Codec<($LootRarity)>


public static "random"(arg0: $RandomSource$Type, arg1: float): $LootRarity
public static "random"(arg0: $RandomSource$Type, arg1: float, arg2: $RarityClamp$Type): $LootRarity
public "toString"(): string
public static "min"(arg0: $LootRarity$Type, arg1: $LootRarity$Type): $LootRarity
public static "max"(arg0: $LootRarity$Type, arg1: $LootRarity$Type): $LootRarity
public "compareTo"(arg0: $LootRarity$Type): integer
public "next"(): $LootRarity
public "prev"(): $LootRarity
public "ordinal"(): integer
public "getRules"(): $List<($LootRarity$LootRule)>
public "isAtLeast"(arg0: $LootRarity$Type): boolean
public "clamp"(arg0: $LootRarity$Type, arg1: $LootRarity$Type): $LootRarity
public "getWeight"(): integer
public "getColor"(): $TextColor
public "isAtMost"(arg0: $LootRarity$Type): boolean
public "getCodec"(): $Codec<(any)>
public "getMaterial"(): $Item
public "toComponent"(): $Component
public static "mapCodec"<T>(arg0: $Codec$Type<(T)>): $Codec<($Map<($LootRarity), (T)>)>
public "getQuality"(): float
public static "wrap"<T extends $WeightedDynamicRegistry$ILuckyWeighted>(arg0: T, arg1: float): $WeightedEntry$Wrapper<(T)>
public "wrap"<T extends $WeightedDynamicRegistry$ILuckyWeighted>(arg0: float): $WeightedEntry$Wrapper<(T)>
get "rules"(): $List<($LootRarity$LootRule)>
get "weight"(): integer
get "color"(): $TextColor
get "codec"(): $Codec<(any)>
get "material"(): $Item
get "quality"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootRarity$Type = ($LootRarity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootRarity_ = $LootRarity$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

/**
 * 
 * @deprecated
 */
export interface $IReplacementBlock {

 "_setDefaultState"(arg0: $BlockState$Type): void
 "setStateContainer"(arg0: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>): void
}

export namespace $IReplacementBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReplacementBlock$Type = ($IReplacementBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReplacementBlock_ = $IReplacementBlock$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$BossEventSettings" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BossEventSettings$Mode, $BossEventSettings$Mode$Type} from "packages/dev/shadowsoffire/gateways/gate/$BossEventSettings$Mode"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BossEventSettings extends $Record {
static readonly "DEFAULT": $BossEventSettings
static "CODEC": $Codec<($BossEventSettings)>

constructor(mode: $BossEventSettings$Mode$Type, fog: boolean)

public "drawAsName"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mode"(): $BossEventSettings$Mode
public "drawAsBar"(): boolean
public "fog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossEventSettings$Type = ($BossEventSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BossEventSettings_ = $BossEventSettings$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/$ShieldBashEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ShieldBashEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getDamageBonus"(arg0: integer, arg1: $MobType$Type): float
public "doPostAttack"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldBashEnchant$Type = ($ShieldBashEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShieldBashEnchant_ = $ShieldBashEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/twisted/$MinersFervorEnchant" {
import {$DiggingEnchantment, $DiggingEnchantment$Type} from "packages/net/minecraft/world/item/enchantment/$DiggingEnchantment"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$PlayerEvent$BreakSpeed, $PlayerEvent$BreakSpeed$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent$BreakSpeed"

export class $MinersFervorEnchant extends $DiggingEnchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "breakSpeed"(arg0: $PlayerEvent$BreakSpeed$Type): void
public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinersFervorEnchant$Type = ($MinersFervorEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinersFervorEnchant_ = $MinersFervorEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/garden/$ApothSugarcaneBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IReplacementBlock, $IReplacementBlock$Type} from "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SugarCaneBlock, $SugarCaneBlock$Type} from "packages/net/minecraft/world/level/block/$SugarCaneBlock"

export class $ApothSugarcaneBlock extends $SugarCaneBlock implements $IReplacementBlock {
static readonly "AGE": $IntegerProperty
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

public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "_setDefaultState"(arg0: $BlockState$Type): void
public "setStateContainer"(arg0: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>): void
/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
set "stateContainer"(value: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothSugarcaneBlock$Type = ($ApothSugarcaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApothSugarcaneBlock_ = $ApothSugarcaneBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/village/fletching/$FletchingRecipe" {
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
import {$List, $List$Type} from "packages/java/util/$List"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $FletchingRecipe implements $Recipe<($CraftingContainer)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Ingredient$Type)>)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOutput"(): $ItemStack
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
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
get "output"(): $ItemStack
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
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
export type $FletchingRecipe$Type = ($FletchingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FletchingRecipe_ = $FletchingRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/util/$INBTSensitiveFallingBlock" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $INBTSensitiveFallingBlock {

 "toStack"(arg0: $BlockState$Type, arg1: $CompoundTag$Type): $ItemStack

(arg0: $BlockState$Type, arg1: $CompoundTag$Type): $ItemStack
}

export namespace $INBTSensitiveFallingBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSensitiveFallingBlock$Type = ($INBTSensitiveFallingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSensitiveFallingBlock_ = $INBTSensitiveFallingBlock$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/mobfx/$VitalityEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $VitalityEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VitalityEffect$Type = ($VitalityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VitalityEffect_ = $VitalityEffect$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/gen/$BossDungeonFeature2" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $BossDungeonFeature2 extends $Feature<($NoneFeatureConfiguration)> {
static readonly "TEMPLATE_ID": $ResourceLocation
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor()

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossDungeonFeature2$Type = ($BossDungeonFeature2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BossDungeonFeature2_ = $BossDungeonFeature2$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/masterwork/$ScavengerEnchant" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$LivingDropsEvent, $LivingDropsEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ScavengerEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "drops"(arg0: $Player$Type, arg1: $LivingDropsEvent$Type): void
public "getFullname"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScavengerEnchant$Type = ($ScavengerEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScavengerEnchant_ = $ScavengerEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/$IcyThornsEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $IcyThornsEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IcyThornsEnchant$Type = ($IcyThornsEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IcyThornsEnchant_ = $IcyThornsEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/util/$StepFunction" {
import {$Long2FloatFunction, $Long2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2FloatFunction"
import {$Float2DoubleFunction, $Float2DoubleFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2DoubleFunction"
import {$Float2CharFunction, $Float2CharFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2CharFunction"
import {$Float2IntFunction, $Float2IntFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import {$Float2ShortFunction, $Float2ShortFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2ShortFunction"
import {$Float2FloatFunction, $Float2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2FloatFunction"
import {$DoubleUnaryOperator, $DoubleUnaryOperator$Type} from "packages/java/util/function/$DoubleUnaryOperator"
import {$Float2ReferenceFunction, $Float2ReferenceFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Char2FloatFunction, $Char2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/chars/$Char2FloatFunction"
import {$Object2FloatFunction, $Object2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import {$Float2ObjectFunction, $Float2ObjectFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Int2FloatFunction, $Int2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import {$Double2FloatFunction, $Double2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/doubles/$Double2FloatFunction"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Float2LongFunction, $Float2LongFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2LongFunction"
import {$Reference2FloatFunction, $Reference2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import {$Byte2FloatFunction, $Byte2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import {$Float2ByteFunction, $Float2ByteFunction$Type} from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import {$Short2FloatFunction, $Short2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/shorts/$Short2FloatFunction"

export class $StepFunction extends $Record implements $Float2FloatFunction {
static readonly "STRICT_CODEC": $Codec<($StepFunction)>
static readonly "CONSTANT_CODEC": $Codec<($StepFunction)>
static readonly "CODEC": $Codec<($StepFunction)>

constructor(min: float, steps: integer, step: float)

public "getForStep"(arg0: integer): float
public "getIntForStep"(arg0: integer): float
public "get"(arg0: float): float
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): float
public "max"(): float
public "getInt"(arg0: float): integer
public static "constant"(arg0: float): $StepFunction
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $StepFunction
public "step"(): float
public "steps"(): integer
public "getStep"(arg0: float): integer
public "remove"(arg0: float): float
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): float
public "put"(arg0: float, arg1: float): float
/**
 * 
 * @deprecated
 */
public "put"(arg0: float, arg1: float): float
public static "identity"(): $Float2FloatFunction
/**
 * 
 * @deprecated
 */
public "containsKey"(arg0: any): boolean
public "containsKey"(arg0: float): boolean
/**
 * 
 * @deprecated
 */
public "getOrDefault"(arg0: any, arg1: float): float
public "getOrDefault"(arg0: float, arg1: float): float
/**
 * 
 * @deprecated
 */
public "applyAsDouble"(arg0: double): double
/**
 * 
 * @deprecated
 */
public "compose"<T>(arg0: $Function$Type<(any), (any)>): $Function<(T), (float)>
/**
 * 
 * @deprecated
 */
public "andThen"<T>(arg0: $Function$Type<(any), (any)>): $Function<(float), (T)>
public "defaultReturnValue"(arg0: float): void
public "defaultReturnValue"(): float
public "composeChar"(arg0: $Char2FloatFunction$Type): $Char2FloatFunction
public "composeByte"(arg0: $Byte2FloatFunction$Type): $Byte2FloatFunction
public "andThenLong"(arg0: $Float2LongFunction$Type): $Float2LongFunction
public "andThenShort"(arg0: $Float2ShortFunction$Type): $Float2ShortFunction
public "andThenByte"(arg0: $Float2ByteFunction$Type): $Float2ByteFunction
public "composeShort"(arg0: $Short2FloatFunction$Type): $Short2FloatFunction
public "composeLong"(arg0: $Long2FloatFunction$Type): $Long2FloatFunction
public "andThenChar"(arg0: $Float2CharFunction$Type): $Float2CharFunction
public "composeInt"(arg0: $Int2FloatFunction$Type): $Int2FloatFunction
public "andThenInt"(arg0: $Float2IntFunction$Type): $Float2IntFunction
public "andThenDouble"(arg0: $Float2DoubleFunction$Type): $Float2DoubleFunction
public "composeObject"<T>(arg0: $Object2FloatFunction$Type<(any)>): $Object2FloatFunction<(T)>
public "andThenObject"<T>(arg0: $Float2ObjectFunction$Type<(any)>): $Float2ObjectFunction<(T)>
public "andThenReference"<T>(arg0: $Float2ReferenceFunction$Type<(any)>): $Float2ReferenceFunction<(T)>
public "composeReference"<T>(arg0: $Reference2FloatFunction$Type<(any)>): $Reference2FloatFunction<(T)>
public "andThenFloat"(arg0: $Float2FloatFunction$Type): $Float2FloatFunction
public "composeFloat"(arg0: $Float2FloatFunction$Type): $Float2FloatFunction
public "composeDouble"(arg0: $Double2FloatFunction$Type): $Double2FloatFunction
public "clear"(): void
public "size"(): integer
public "apply"(arg0: float): float
public "compose"(arg0: $DoubleUnaryOperator$Type): $DoubleUnaryOperator
public "andThen"(arg0: $DoubleUnaryOperator$Type): $DoubleUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StepFunction$Type = ($StepFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StepFunction_ = $StepFunction$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/reforging/$ReforgingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$LootRarity, $LootRarity$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ReforgingRecipe extends $Record implements $Recipe<($Container)> {

constructor(id: $ResourceLocation$Type, rarity: $DynamicHolder$Type<($LootRarity$Type)>, matCost: integer, dustCost: integer, levelCost: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "levelCost"(): integer
public "rarity"(): $DynamicHolder<($LootRarity)>
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
/**
 * 
 * @deprecated
 */
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "dustCost"(): integer
public "matCost"(): integer
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
export type $ReforgingRecipe$Type = ($ReforgingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReforgingRecipe_ = $ReforgingRecipe$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/objects/$ScrappingTomeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BookItem, $BookItem$Type} from "packages/net/minecraft/world/item/$BookItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AnvilUpdateEvent, $AnvilUpdateEvent$Type} from "packages/net/minecraftforge/event/$AnvilUpdateEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScrappingTomeItem extends $BookItem {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public static "updateAnvil"(arg0: $AnvilUpdateEvent$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrappingTomeItem$Type = ($ScrappingTomeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrappingTomeItem_ = $ScrappingTomeItem$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/entity/$GatewayEntity$FailureReason" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GatewayEntity$FailureReason extends $Enum<($GatewayEntity$FailureReason)> {
static readonly "SPAWN_FAILED": $GatewayEntity$FailureReason
static readonly "ENTITY_TOO_FAR": $GatewayEntity$FailureReason
static readonly "TIMER_ELAPSED": $GatewayEntity$FailureReason
static readonly "ENTITY_DISCARDED": $GatewayEntity$FailureReason
static readonly "ENTITY_LEFT_DIMENSION": $GatewayEntity$FailureReason


public static "values"(): ($GatewayEntity$FailureReason)[]
public static "valueOf"(arg0: string): $GatewayEntity$FailureReason
public "getMsg"(): $Component
get "msg"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatewayEntity$FailureReason$Type = (("entity_left_dimension") | ("spawn_failed") | ("timer_elapsed") | ("entity_discarded") | ("entity_too_far")) | ($GatewayEntity$FailureReason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatewayEntity$FailureReason_ = $GatewayEntity$FailureReason$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/table/$EnchantingStatRegistry$Stats" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $EnchantingStatRegistry$Stats extends $Record {
static "CODEC": $Codec<($EnchantingStatRegistry$Stats)>

constructor(maxEterna: float, eterna: float, quanta: float, arcana: float, rectification: float, clues: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $EnchantingStatRegistry$Stats
public "quanta"(): float
public "arcana"(): float
public "rectification"(): float
public "eterna"(): float
public "clues"(): integer
public "maxEterna"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingStatRegistry$Stats$Type = ($EnchantingStatRegistry$Stats);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantingStatRegistry$Stats_ = $EnchantingStatRegistry$Stats$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/api/$IEnchantingBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IForgeBlock, $IForgeBlock$Type} from "packages/net/minecraftforge/common/extensions/$IForgeBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IEnchantingBlock extends $IForgeBlock {

 "getBlacklistedEnchantments"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $Set<($Enchantment)>
 "getQuantaRectification"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
 "getMaxEnchantingPower"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
 "spawnTableParticle"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: $BlockPos$Type): void
 "getQuantaBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
 "getArcanaBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
 "getBonusClues"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): integer
 "getTableParticle"(arg0: $BlockState$Type): $ParticleOptions
 "allowsTreasure"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
 "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
 "getRespawnPosition"(arg0: $BlockState$Type, arg1: $EntityType$Type<(any)>, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: float, arg5: $LivingEntity$Type): $Optional<($Vec3)>
 "getBedDirection"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $Direction
 "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
 "collisionExtendsVertically"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
 "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): void
 "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
 "getWeakChanges"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
 "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
 "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
 "isScaffolding"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
 "getStateAtViewpoint"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Vec3$Type): $BlockState
 "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
 "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes
 "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
 "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
 "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
 "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
 "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "isBed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "setBedOccupied"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type, arg4: boolean): void
 "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
 "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $Direction$Type): boolean
 "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
 "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "onTreeGrow"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg3: $RandomSource$Type, arg4: $BlockPos$Type, arg5: $TreeConfiguration$Type): boolean
 "isBurning"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
 "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
 "getBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type): $BlockPathTypes
 "isFertile"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "isPortalFrame"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "isConduitFrame"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): boolean
 "getExpDrop"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): integer
 "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
 "isSlimeBlock"(arg0: $BlockState$Type): boolean
 "canStickTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
 "isFireSource"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
 "onCaughtFire"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $LivingEntity$Type): void
 "isStickyBlock"(arg0: $BlockState$Type): boolean
 "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
 "getMapColor"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $MapColor$Type): $MapColor
 "canBeHydrated"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type, arg4: $BlockPos$Type): boolean

(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $Set<($Enchantment)>
}

export namespace $IEnchantingBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnchantingBlock$Type = ($IEnchantingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnchantingBlock_ = $IEnchantingBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/table/$IEnchantableItem" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEnchantableItem {

 "onEnchantment"(arg0: $ItemStack$Type, arg1: $List$Type<($EnchantmentInstance$Type)>): $ItemStack
 "isTreasureAllowed"(arg0: $ItemStack$Type, arg1: boolean): boolean
 "selectEnchantments"(arg0: $List$Type<($EnchantmentInstance$Type)>, arg1: $RandomSource$Type, arg2: $ItemStack$Type, arg3: integer, arg4: float, arg5: float, arg6: boolean): $List<($EnchantmentInstance)>
 "forciblyAllowsTableEnchantment"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
}

export namespace $IEnchantableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnchantableItem$Type = ($IEnchantableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnchantableItem_ = $IEnchantableItem$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/garden/$ApothCactusBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IReplacementBlock, $IReplacementBlock$Type} from "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$CactusBlock, $CactusBlock$Type} from "packages/net/minecraft/world/level/block/$CactusBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ApothCactusBlock extends $CactusBlock implements $IReplacementBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
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

public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "_setDefaultState"(arg0: $BlockState$Type): void
public "setStateContainer"(arg0: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
set "stateContainer"(value: $StateDefinition$Type<($Block$Type), ($BlockState$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothCactusBlock$Type = ($ApothCactusBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApothCactusBlock_ = $ApothCactusBlock$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/garden/$EnderLeadItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnderLeadItem extends $Item {
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
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderLeadItem$Type = ($EnderLeadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderLeadItem_ = $EnderLeadItem$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/mobfx/$BleedingEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BleedingEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BleedingEffect$Type = ($BleedingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BleedingEffect_ = $BleedingEffect$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/enchantments/$TemptingEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TemptingEnchant extends $Enchantment {
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "shouldFollow"(arg0: $LivingEntity$Type): boolean
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemptingEnchant$Type = ($TemptingEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemptingEnchant_ = $TemptingEnchant$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/ench/table/$EnchantingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$EnchantingRecipe, $EnchantingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/ench/table/$EnchantingRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $EnchantingRecipe$Serializer implements $RecipeSerializer<($EnchantingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $EnchantingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $EnchantingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $EnchantingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $EnchantingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingRecipe$Serializer$Type = ($EnchantingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantingRecipe$Serializer_ = $EnchantingRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/gateways/gate/$Gateway" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BossEventSettings, $BossEventSettings$Type} from "packages/dev/shadowsoffire/gateways/gate/$BossEventSettings"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GateRules, $GateRules$Type} from "packages/dev/shadowsoffire/gateways/gate/$GateRules"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$GatewayEntity, $GatewayEntity$Type} from "packages/dev/shadowsoffire/gateways/entity/$GatewayEntity"
import {$SpawnAlgorithms$SpawnAlgorithm, $SpawnAlgorithms$SpawnAlgorithm$Type} from "packages/dev/shadowsoffire/gateways/gate/$SpawnAlgorithms$SpawnAlgorithm"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Gateway$Size, $Gateway$Size$Type} from "packages/dev/shadowsoffire/gateways/gate/$Gateway$Size"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$Failure, $Failure$Type} from "packages/dev/shadowsoffire/gateways/gate/$Failure"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export interface $Gateway extends $CodecProvider<($Gateway)> {

 "size"(): $Gateway$Size
 "color"(): $TextColor
 "rules"(): $GateRules
 "createEntity"(arg0: $Level$Type, arg1: $Player$Type): $GatewayEntity
 "getLeashRangeSq"(): double
 "failures"(): $List<($Failure)>
 "bossSettings"(): $BossEventSettings
 "spawnAlgo"(): $SpawnAlgorithms$SpawnAlgorithm
 "appendPearlTooltip"(arg0: $Level$Type, arg1: $List$Type<($Component$Type)>, arg2: $TooltipFlag$Type): void
 "renderBossBar"(arg0: $GatewayEntity$Type, arg1: any, arg2: integer, arg3: integer, arg4: boolean): void
 "getCodec"(): $Codec<(any)>
}

export namespace $Gateway {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gateway$Type = ($Gateway);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Gateway_ = $Gateway$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/gem/$Gem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GemBonus, $GemBonus$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/gem/bonus/$GemBonus"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$GameStagesCompat$IStaged, $GameStagesCompat$IStaged$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/compat/$GameStagesCompat$IStaged"
import {$LootCategory, $LootCategory$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootCategory"
import {$WeightedDynamicRegistry$ILuckyWeighted, $WeightedDynamicRegistry$ILuckyWeighted$Type} from "packages/dev/shadowsoffire/placebo/reload/$WeightedDynamicRegistry$ILuckyWeighted"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LootRarity, $LootRarity$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$RarityClamp, $RarityClamp$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$RarityClamp"
import {$WeightedDynamicRegistry$IDimensional, $WeightedDynamicRegistry$IDimensional$Type} from "packages/dev/shadowsoffire/placebo/reload/$WeightedDynamicRegistry$IDimensional"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$Type} from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"

export class $Gem implements $CodecProvider<($Gem)>, $WeightedDynamicRegistry$ILuckyWeighted, $WeightedDynamicRegistry$IDimensional, $RarityClamp, $GameStagesCompat$IStaged {
static readonly "CODEC": $Codec<($Gem)>

constructor(arg0: integer, arg1: float, arg2: $Set$Type<($ResourceLocation$Type)>, arg3: $Optional$Type<($LootRarity$Type)>, arg4: $Optional$Type<($LootRarity$Type)>, arg5: $List$Type<($GemBonus$Type)>, arg6: boolean, arg7: $Optional$Type<($Set$Type<(string)>)>)

public static "addTypeInfo"(arg0: $Consumer$Type<($Component$Type)>, ...arg1: (any)[]): void
public "isValidIn"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LootRarity$Type): boolean
public "getStages"(): $Set<(string)>
public "getBonuses"(): $List<($GemBonus)>
public "getBonus"(arg0: $LootCategory$Type, arg1: $LootRarity$Type): $Optional<($GemBonus)>
public "toString"(): string
public "validate"(arg0: $ResourceLocation$Type): $Gem
public "getId"(): $ResourceLocation
public static "fmt"(arg0: float): string
public "getDimensions"(): $Set<($ResourceLocation)>
public "isUnique"(): boolean
public "getWeight"(): integer
public "getCodec"(): $Codec<(any)>
public "getMinRarity"(): $LootRarity
public "getMaxRarity"(): $LootRarity
public "addInformation"(arg0: $ItemStack$Type, arg1: $LootRarity$Type, arg2: $Consumer$Type<($Component$Type)>): void
public "getNumberOfUUIDs"(): integer
public "getQuality"(): float
public "canApplyTo"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LootRarity$Type): boolean
public static "wrap"<T extends $WeightedDynamicRegistry$ILuckyWeighted>(arg0: T, arg1: float): $WeightedEntry$Wrapper<(T)>
public "wrap"<T extends $WeightedDynamicRegistry$ILuckyWeighted>(arg0: float): $WeightedEntry$Wrapper<(T)>
public static "matches"<T extends $WeightedDynamicRegistry$IDimensional>(arg0: $Level$Type): $Predicate<(T)>
public static "matches"<T extends $WeightedDynamicRegistry$IDimensional>(arg0: $ResourceLocation$Type): $Predicate<(T)>
public "clamp"(arg0: $LootRarity$Type): $LootRarity
public static "matches"<T extends $GameStagesCompat$IStaged>(arg0: $Player$Type): $Predicate<(T)>
get "stages"(): $Set<(string)>
get "bonuses"(): $List<($GemBonus)>
get "id"(): $ResourceLocation
get "dimensions"(): $Set<($ResourceLocation)>
get "unique"(): boolean
get "weight"(): integer
get "codec"(): $Codec<(any)>
get "minRarity"(): $LootRarity
get "maxRarity"(): $LootRarity
get "numberOfUUIDs"(): integer
get "quality"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gem$Type = ($Gem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Gem_ = $Gem$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DynamicHolder<T> implements $Supplier<(T)> {
static readonly "EMPTY": $ResourceLocation


public "get"(): T
/**
 * 
 * @deprecated
 */
public "value"(): T
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public "is"(arg0: $ResourceLocation$Type): boolean
public "getOptional"(): $Optional<(T)>
public "isBound"(): boolean
get "id"(): $ResourceLocation
get "optional"(): $Optional<(T)>
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicHolder$Type<T> = ($DynamicHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicHolder_<T> = $DynamicHolder$Type<(T)>;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$AddSocketsRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AddSocketsRecipe, $AddSocketsRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/affix/socket/$AddSocketsRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AddSocketsRecipe$Serializer implements $RecipeSerializer<($AddSocketsRecipe)> {
static "INSTANCE": $AddSocketsRecipe$Serializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $AddSocketsRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $AddSocketsRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $AddSocketsRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $AddSocketsRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSocketsRecipe$Serializer$Type = ($AddSocketsRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddSocketsRecipe$Serializer_ = $AddSocketsRecipe$Serializer$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/salvaging/$SalvageItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootRarity, $LootRarity$Type} from "packages/dev/shadowsoffire/apotheosis/adventure/loot/$LootRarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SalvageItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "maxStackSize": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $DynamicHolder$Type<($LootRarity$Type)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SalvageItem$Type = ($SalvageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalvageItem_ = $SalvageItem$Type;
}}
declare module "packages/dev/shadowsoffire/attributeslib/mobfx/$DetonationEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $DetonationEffect extends $MobEffect {

constructor()

public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetonationEffect$Type = ($DetonationEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetonationEffect_ = $DetonationEffect$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/spawn/spawner/$ApothSpawnerTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BaseSpawner, $BaseSpawner$Type} from "packages/net/minecraft/world/level/$BaseSpawner"
import {$SpawnerBlockEntity, $SpawnerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SpawnerBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ApothSpawnerTile extends $SpawnerBlockEntity {
 "ignoresPlayers": boolean
 "ignoresConditions": boolean
 "redstoneControl": boolean
 "ignoresLight": boolean
 "hasNoAI": boolean
 "silent": boolean
 "baby": boolean
 "spawner": $BaseSpawner
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothSpawnerTile$Type = ($ApothSpawnerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApothSpawnerTile_ = $ApothSpawnerTile$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/spawn/modifiers/$SpawnerModifier" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$StatModifier, $StatModifier$Type} from "packages/dev/shadowsoffire/apotheosis/spawn/modifiers/$StatModifier"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SpawnerModifier$Serializer, $SpawnerModifier$Serializer$Type} from "packages/dev/shadowsoffire/apotheosis/spawn/modifiers/$SpawnerModifier$Serializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ApothSpawnerTile, $ApothSpawnerTile$Type} from "packages/dev/shadowsoffire/apotheosis/spawn/spawner/$ApothSpawnerTile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SpawnerModifier implements $Recipe<($Container)> {
static readonly "SERIALIZER": $SpawnerModifier$Serializer

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: boolean, arg4: $List$Type<($StatModifier$Type<(any)>)>)

public "matches"(arg0: $ApothSpawnerTile$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): boolean
public "apply"(arg0: $ApothSpawnerTile$Type): boolean
public static "findMatch"(arg0: $ApothSpawnerTile$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): $SpawnerModifier
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOffhandInput"(): $Ingredient
public "consumesOffhand"(): boolean
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
/**
 * 
 * @deprecated
 */
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getMainhandInput"(): $Ingredient
public "getStatModifiers"(): $List<($StatModifier<(any)>)>
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
get "offhandInput"(): $Ingredient
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "mainhandInput"(): $Ingredient
get "statModifiers"(): $List<($StatModifier<(any)>)>
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
export type $SpawnerModifier$Type = ($SpawnerModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerModifier_ = $SpawnerModifier$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/adventure/affix/$AffixType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AffixType extends $Enum<($AffixType)> {
static readonly "STAT": $AffixType
static readonly "POTION": $AffixType
static readonly "ABILITY": $AffixType
static readonly "ANCIENT": $AffixType
static readonly "SOCKET": $AffixType
static readonly "DURABILITY": $AffixType


public static "values"(): ($AffixType)[]
public static "valueOf"(arg0: string): $AffixType
public "needsValidation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AffixType$Type = (("stat") | ("potion") | ("durability") | ("ability") | ("socket") | ("ancient")) | ($AffixType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AffixType_ = $AffixType$Type;
}}
declare module "packages/dev/shadowsoffire/apotheosis/village/fletching/$FletchingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$FletchingRecipe, $FletchingRecipe$Type} from "packages/dev/shadowsoffire/apotheosis/village/fletching/$FletchingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FletchingRecipe$Serializer implements $RecipeSerializer<($FletchingRecipe)> {
static readonly "NAME": $ResourceLocation

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $FletchingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $FletchingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $FletchingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $FletchingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FletchingRecipe$Serializer$Type = ($FletchingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FletchingRecipe$Serializer_ = $FletchingRecipe$Serializer$Type;
}}
